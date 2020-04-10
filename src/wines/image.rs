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
use uuid::Uuid;

pub struct Image {
    pub mime_type: Mime,
    pub data: Vec<u8>,
}

static WINE_DIR: &str = "wine_images";

/// Auth must be handled before this function is called
pub fn handle_image(
    wine_id: i32,
    image: Image,
    s3_bucket: &s3::bucket::Bucket,
    connection: &DbConn,
) -> Result<(), VinotecaError> {
    // let img = image::io::Reader::new(Cursor::new(raw_img))
    //     .with_guessed_format()?
    //     .decode()?;
    // let file_name = format!("{}.png", wine_id);
    // img.save(format!("{}/{}", media_dir, file_name))?;
    let path = format!("{}/{}", WINE_DIR, Uuid::new_v4());
    let (data, code) =
        s3_bucket.put_object_blocking(&path, &image.data, &image.mime_type.type_().to_string())?;
    if code > 304 {
        warn!(
            "Error saving image. Code: {}, Data: {:?}",
            code,
            String::from_utf8(data)
        );
        return Err(VinotecaError::Internal(format!("Error saving image")));
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
