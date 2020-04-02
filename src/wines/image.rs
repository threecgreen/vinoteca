use super::models::RawImage;
use super::update::validate_owns_wine;
use crate::cached_static::CachedFile;
use crate::error::{RestResult, VinotecaError};
use crate::schema::wines;
use crate::users::Auth;
use crate::{DbConn, MediaDir};

use diesel::prelude::*;
use rocket::State;
use rocket_contrib::json::Json;
use std::fs;
use std::io::Cursor;

/// Auth must be handled before this function is called
pub fn handle_image(wine_id: i32, raw_img: Vec<u8>, media_dir: &str, connection: &DbConn) -> Result<(), VinotecaError> {
    let img = image::io::Reader::new(Cursor::new(raw_img))
        .with_guessed_format()?
        .decode()?;
    let file_name = format!("{}.png", wine_id);
    img.save(format!("{}/{}", media_dir, file_name))?;

    diesel::update(wines::table)
        .set(wines::image.eq(file_name))
        .execute(&**connection)?;

    Ok(())
}

#[get("/wines/<id>/image")]
pub fn get(auth: Auth, id: i32, connection: DbConn, media_dir: State<MediaDir>) -> Result<CachedFile, VinotecaError> {
    wines::table
        .filter(wines::user_id.eq(auth.id))
        .filter(wines::id.eq(id))
        .select(wines::image)
        .first::<Option<String>>(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|file_path| {
            match file_path {
                Some(file_path) => CachedFile::open(format!("{}/{}", media_dir.0, file_path))
                    .map_err(VinotecaError::from),
                None => Err(VinotecaError::NotFound(format!("No image found for wine id {}", id)))
            }
        })
}

#[post("/wines/<id>/image", data = "<image>")]
pub fn post(
    auth: Auth,
    id: i32,
    image: RawImage,
    connection: DbConn,
    media_dir: State<MediaDir>
) -> RestResult<()> {
    validate_owns_wine(auth, id, &connection)?;

    handle_image(id, image.0, &media_dir.0, &connection)?;
    Ok(Json(()))
}

#[delete("/wines/<id>/image")]
pub fn delete(auth: Auth, id: i32, connection: DbConn, media_dir: State<MediaDir>) -> RestResult<()> {
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
            fs::remove_file(format!("{}/{}", media_dir.0, file_name))?;
            Ok(Json(()))
        }
        None => Ok(Json(()))

    }
}
