use super::update::validate_owns_wine;
use crate::config::Config;
use crate::error::{RestResult, VinotecaError};
use crate::schema::wines;
use crate::users::Auth;
use crate::DbConn;

use diesel::prelude::*;
use rocket::State;
use rocket_contrib::json::Json;
use rocket_multipart_form_data::mime::Mime;
use std::io::Cursor;
use uuid::Uuid;

pub struct Image {
    pub mime_type: Mime,
    pub data: Vec<u8>,
}

static WINE_DIR: &str = "wine_images";
static MAX_SIZE: usize = 1280 * 958;

/// Auth must be handled before this function is called
pub fn handle_image(
    wine_id: i32,
    image: Image,
    s3_bucket: &s3::bucket::Bucket,
    connection: &DbConn,
) -> Result<(), VinotecaError> {
    // Read in image and fix orientation based on EXIF data
    let image = reformat_image(image)?;
    // AWS
    let path = format!("{}/{}", WINE_DIR, Uuid::new_v4());
    let (data, code) = s3_bucket.put_object_blocking(&path, &image, "image/jpeg")?;
    if code > 304 {
        warn!(
            "Error saving image. Code: {}, AWSResponseData: {:?}",
            code,
            String::from_utf8(data)
        );
        return Err(VinotecaError::Internal("Error saving image".to_owned()));
    }

    diesel::update(wines::table)
        .filter(wines::id.eq(wine_id))
        .set(wines::image.eq(path))
        .execute(&**connection)?;

    Ok(())
}

#[post("/wines/<id>/image", data = "<image>")]
pub fn post(
    auth: Auth,
    id: i32,
    image: Image,
    connection: DbConn,
    config: State<Config>,
) -> RestResult<()> {
    validate_owns_wine(auth, id, &connection)?;

    handle_image(id, image, &config.s3_bucket, &connection)?;
    Ok(Json(()))
}

#[delete("/wines/<id>/image")]
pub fn delete(auth: Auth, id: i32, connection: DbConn, config: State<Config>) -> RestResult<()> {
    let file_name = wines::table
        .filter(wines::user_id.eq(auth.id))
        .filter(wines::id.eq(id))
        .select(wines::image)
        .first::<Option<String>>(&*connection)?;

    match file_name {
        Some(file_name) => {
            // Delete from database first, because it's better to have an orphan
            // file than have the database think there's a file when we've
            // already deleted it.
            diesel::update(wines::table)
                .filter(wines::id.eq(id))
                .set(wines::image.eq::<Option<String>>(None))
                .execute(&*connection)?;
            // fs::remove_file(format!("{}/{}", media_dir.0, file_name))?;
            config.s3_bucket.delete_object_blocking(file_name)?;
            Ok(Json(()))
        }
        None => Ok(Json(())),
    }
}

fn handle_exif(
    decoded_image: image::DynamicImage,
    raw: Vec<u8>,
) -> (image::DynamicImage, Option<u16>) {
    let exif = match exif::Reader::new().read_raw(raw) {
        Ok(exif) => exif,
        Err(e) => {
            warn!("Error creating exif reader: {:?}", e);
            return (decoded_image, None);
        }
    };
    let orientation_field = exif.get_field(exif::Tag::Orientation, exif::In::PRIMARY);
    if let Some(orientation_field) = orientation_field {
        let orientation = match &orientation_field.value {
            exif::Value::Short(v) => v.get(0).map(|n| n.to_owned()),
            exif::Value::Byte(v) => v.get(0).map(|n| n.to_owned() as u16),
            _ => None,
        };
        if let Some(orientation) = orientation {
            (
                match orientation {
                    2 => decoded_image.fliph(),
                    3 => decoded_image.rotate180(),
                    4 => decoded_image.flipv(),
                    5 => decoded_image.flipv().rotate90(),
                    6 => decoded_image.rotate90(),
                    7 => decoded_image.flipv().rotate270(),
                    8 => decoded_image.rotate270(),
                    _ => decoded_image,
                },
                Some(orientation),
            )
        } else {
            (decoded_image, orientation)
        }
    } else {
        (decoded_image, None)
    }
}

fn reformat_image(image: Image) -> Result<Vec<u8>, VinotecaError> {
    let decoded_image = image::io::Reader::new(Cursor::new(image.data.as_slice()))
        .with_guessed_format()?
        .decode()?;
    let mime_type = image.mime_type.clone();
    let (decoded_image, orientation) = handle_exif(decoded_image, image.data);
    let mut reformatted_image = Vec::new();
    let mut reformatted_image_writer = Cursor::new(&mut reformatted_image);
    // TODO: downsize image if necessary
    decoded_image
        .write_to(
            &mut reformatted_image_writer,
            image::ImageOutputFormat::Jpeg(100),
        )
        .map_err(|e| {
            warn!(
                "Failed to reformat image: {:?}. MimeType: {:?}, Orientation: {:?}",
                e, mime_type, orientation
            );
            VinotecaError::Internal("Failed to reformat image".to_owned())
        })?;
    Ok(reformatted_image)
}
