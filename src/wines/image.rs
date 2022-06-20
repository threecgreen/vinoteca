use super::{update::validate_owns_wine, Rotation, RotationForm};
use crate::config::Config;
use crate::error::{RestResult, VinotecaError};
use crate::schema::wines;
use crate::storage::Storage;
use crate::users::Auth;
use crate::DbConn;

use diesel::prelude::*;
use image::GenericImageView;
use rocket::State;
use rocket_contrib::json::Json;
use rocket_multipart_form_data::mime::{self, Mime};
use std::io::{BufReader, Cursor};

pub struct Image {
    pub mime_type: Mime,
    pub data: Vec<u8>,
}

const WINE_DIR: &str = "wine_images";
const MAX_IMAGE_DIM: u32 = 1280;

/// Auth must be handled before this function is called
pub fn handle_image(
    wine_id: i32,
    image: Image,
    storage: &dyn Storage,
    connection: &DbConn,
) -> Result<String, VinotecaError> {
    // Read in image and fix orientation based on EXIF data
    let image = reformat_image(image)?;
    // AWS
    let path = storage.create_object(WINE_DIR, &image, "image/jpeg")?;

    diesel::update(wines::table)
        .filter(wines::id.eq(wine_id))
        .set(wines::image.eq(&path))
        .execute(&**connection)?;

    Ok(path)
}

#[post("/wines/<id>/image", data = "<image>")]
pub fn post(
    auth: Auth,
    id: i32,
    image: Image,
    connection: DbConn,
    config: State<Config>,
) -> RestResult<String> {
    validate_owns_wine(auth, id, &connection)?;

    let existing_image_path = get_image_path(auth, id, &connection)?;

    let path = handle_image(id, image, &*config.storage, &connection)?;
    if let Some(existing_image_path) = existing_image_path {
        // Delete old image after we upload the new one
        config.storage.delete_object(&existing_image_path)?;
    }
    Ok(Json(path))
}

#[patch("/wines/<id>/image", format = "json", data = "<rotation_form>")]
pub fn rotate(
    auth: Auth,
    id: i32,
    rotation_form: Json<RotationForm>,
    connection: DbConn,
    config: State<Config>,
) -> RestResult<String> {
    let path = get_image_path(auth, id, &connection).and_then(|file_path| {
        file_path.ok_or_else(|| VinotecaError::NotFound(format!("No wine with id {}", id)))
    })?;
    let rotation = rotation_form.into_inner().rotation;

    let full_path = format!("{}/{}", WINE_DIR, path);
    let image_bytes = config.storage.get_object(&full_path)?;
    let rotated_image = rotate_image(image_bytes, rotation)?;
    info!(
        "Updated rotation of image at {} by rotation {:?}",
        full_path, rotation,
    );
    config.storage.update_object(&full_path, &rotated_image)?;
    Ok(Json(path))
}

#[delete("/wines/<id>/image")]
pub fn delete(auth: Auth, id: i32, connection: DbConn, config: State<Config>) -> RestResult<()> {
    let file_path = get_image_path(auth, id, &connection)?;

    match file_path {
        Some(file_path) => {
            // Delete from database first, because it's better to have an orphan
            // file than have the database think there's a file when we've
            // already deleted it.
            diesel::update(wines::table)
                .filter(wines::id.eq(id))
                .set(wines::image.eq::<Option<String>>(None))
                .execute(&*connection)?;
            delete_from_storage(&*config.storage, &file_path).map(Json)
        }
        None => Ok(Json(())),
    }
}

fn get_image_path(
    auth: Auth,
    id: i32,
    connection: &DbConn,
) -> Result<Option<String>, VinotecaError> {
    Ok(wines::table
        .filter(wines::user_id.eq(auth.id))
        .filter(wines::id.eq(id))
        .select(wines::image)
        .first::<Option<String>>(&**connection)?)
}

pub fn delete_from_storage(storage: &dyn Storage, path: &str) -> Result<(), VinotecaError> {
    storage.delete_object(&format!("{}/{}", WINE_DIR, path))
}

fn get_exif(mime_type: &Mime, raw: Vec<u8>) -> Option<exif::Exif> {
    match (mime_type.type_(), mime_type.subtype()) {
        (mime::IMAGE, mime::JPEG) => {
            info!("Trying to extract EXIF data from JPEG");
            let mut reader = BufReader::new(raw.as_slice());
            exif::get_exif_attr_from_jpeg(&mut reader)
                .map_err(|e| {
                    warn!("Failed to extract exif attr from JPEG: {:?}", e);
                    e
                })
                .ok()
                .and_then(|exif_attr| {
                    exif::Reader::new()
                        .read_raw(exif_attr)
                        .map_err(|e| {
                            warn!("Failed to read exif attr from JPEG: {:?}", e);
                            e
                        })
                        .ok()
                })
        }
        // Try reading with other types of image files, even though should only work with TIFF
        (mime::IMAGE, _) => match exif::Reader::new().read_raw(raw) {
            Ok(exif) => Some(exif),
            Err(e) => {
                error!("Error creating exif reader: {:?}", e);
                None
            }
        },
        _ => None,
    }
}

fn handle_exif(
    decoded_image: image::DynamicImage,
    exif: exif::Exif,
) -> (image::DynamicImage, Option<u16>) {
    let orientation_field = exif.get_field(exif::Tag::Orientation, exif::In::PRIMARY);
    if let Some(orientation_field) = orientation_field {
        let orientation = match &orientation_field.value {
            exif::Value::Short(v) => v.first().map(|n| n.to_owned()),
            exif::Value::Byte(v) => v.first().map(|n| n.to_owned() as u16),
            _ => None,
        };
        if let Some(orientation) = orientation {
            (
                match orientation {
                    1 => decoded_image, // This is the normal orientation so no need to log
                    2 => decoded_image.fliph(),
                    3 => decoded_image.rotate180(),
                    4 => decoded_image.flipv(),
                    5 => decoded_image.flipv().rotate90(),
                    6 => decoded_image.rotate90(),
                    7 => decoded_image.flipv().rotate270(),
                    8 => decoded_image.rotate270(),
                    _ => {
                        warn!("Unexpected orientation value: {:?}", orientation);
                        decoded_image
                    }
                },
                Some(orientation),
            )
        } else {
            warn!("Orientation field had no value");
            (decoded_image, orientation)
        }
    } else {
        warn!("No orientation field found");
        (decoded_image, None)
    }
}

fn reformat_image(image: Image) -> Result<Vec<u8>, VinotecaError> {
    let decoded_image = image::io::Reader::new(Cursor::new(image.data.as_slice()))
        .with_guessed_format()?
        .decode()?;
    // Unpack to avoid clone
    let Image {
        mime_type,
        data: raw,
    } = image;
    let (mut decoded_image, orientation) = if let Some(exif) = get_exif(&mime_type, raw) {
        handle_exif(decoded_image, exif)
    } else {
        (decoded_image, None)
    };
    let mut reformatted_image = Vec::new();
    let mut reformatted_image_writer = Cursor::new(&mut reformatted_image);
    if decoded_image.dimensions().0 > MAX_IMAGE_DIM || decoded_image.dimensions().1 > MAX_IMAGE_DIM
    {
        info!(
            "Downsizing large image with dimesions: {:?}",
            decoded_image.dimensions()
        );
        decoded_image = decoded_image.resize(
            MAX_IMAGE_DIM,
            MAX_IMAGE_DIM,
            image::imageops::FilterType::Lanczos3,
        );
    }
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

fn rotate_image(raw: Vec<u8>, rotation: Rotation) -> Result<Vec<u8>, VinotecaError> {
    let decoded_image = image::io::Reader::new(Cursor::new(raw.as_slice()))
        .with_guessed_format()?
        .decode()?;
    let decoded_image = match rotation {
        Rotation::Clockwise90 => decoded_image.rotate90(),
        Rotation::CounterClockwise90 => decoded_image.rotate270(),
        Rotation::Clockwise180 => decoded_image.rotate180(),
    };
    let mut reformatted_image = Vec::new();
    let mut reformatted_image_writer = Cursor::new(&mut reformatted_image);
    decoded_image
        .write_to(
            &mut reformatted_image_writer,
            image::ImageOutputFormat::Jpeg(100),
        )
        .map_err(|e| {
            warn!("Failed to rotate image: {:?}. Rotation: {:?}", e, rotation);
            VinotecaError::Internal("Failed to rotate image".to_owned())
        })?;
    Ok(reformatted_image)
}
