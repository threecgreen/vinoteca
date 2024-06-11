use diesel::prelude::*;
use diesel_async::{AsyncPgConnection, RunQueryDsl};
use image::GenericImageView;
use rocket::data::Capped;
use rocket::serde::json::Json;
use rocket::State;
use rocket_db_pools::Connection;
use std::io::{BufReader, Cursor};

use super::{update::validate_owns_wine, Rotation, RotationForm};
use crate::error::{RestResult, VinotecaError};
use crate::schema::wines;
use crate::storage::Storage;
use crate::users::Auth;
use crate::Db;

const WINE_DIR: &str = "wine_images";
const MAX_IMAGE_DIM: u32 = 1280;

/// Auth must be handled before this function is called
pub async fn handle_image(
    wine_id: i32,
    image: Vec<u8>,
    storage: &dyn Storage,
    conn: &mut AsyncPgConnection,
) -> Result<String, VinotecaError> {
    // Read in image and fix orientation based on EXIF data
    let image = reformat_image(&image)?;
    // AWS
    // let path = storage
    //     .create_object(WINE_DIR, &image, "image/jpeg")
    //     .await?;
    todo!()
    // let ret = path.clone();
    // diesel::update(wines::table)
    //     .filter(wines::id.eq(wine_id))
    //     .set(wines::image.eq(&path))
    //     .execute(conn)
    //     .await?;

    // Ok(ret)
}

#[post("/wines/<id>/image", data = "<image>")]
pub async fn post(
    auth: Auth,
    id: i32,
    image: Capped<Vec<u8>>,
    mut conn: Connection<Db>,
    storage: &State<Box<dyn Storage>>,
) -> RestResult<String> {
    validate_owns_wine(auth, id, &mut **conn).await?;
    let existing_image_path = get_image_path(auth, id, &mut **conn).await?;

    let path = handle_image(id, image.into_inner(), &***storage, &mut conn).await?;
    if let Some(existing_image_path) = existing_image_path {
        // Delete old image after we upload the new one
        // storage.delete_object(&existing_image_path).await?;
    }
    Ok(Json(path))
}

#[patch("/wines/<id>/image", format = "json", data = "<rotation_form>")]
pub async fn rotate(
    auth: Auth,
    id: i32,
    rotation_form: Json<RotationForm>,
    mut conn: Connection<Db>,
    storage: &State<Box<dyn Storage>>,
) -> RestResult<String> {
    let path = get_image_path(auth, id, &mut **conn)
        .await?
        .ok_or_else(|| VinotecaError::NotFound(format!("No wine with id {}", id)))?;
    let rotation = rotation_form.into_inner().rotation;

    let full_path = format!("{}/{}", WINE_DIR, path);
    let image_bytes = storage.get_object(&full_path).await?;
    let rotated_image = rotate_image(image_bytes, rotation)?;
    info!(
        "Updated rotation of image at {} by rotation {:?}",
        full_path, rotation,
    );
    // storage.update_object(&full_path, &rotated_image).await?;
    Ok(Json(path))
}

#[delete("/wines/<id>/image")]
pub async fn delete(
    auth: Auth,
    id: i32,
    mut conn: Connection<Db>,
    storage: &State<Box<dyn Storage>>,
) -> RestResult<()> {
    let file_path = get_image_path(auth, id, &mut **conn).await?;

    match file_path {
        Some(file_path) => {
            // Delete from database first, because it's better to have an orphan
            // file than have the database think there's a file when we've
            // already deleted it.
            diesel::update(wines::table)
                .filter(wines::id.eq(id))
                .set(wines::image.eq::<Option<String>>(None))
                .execute(&mut **conn)
                .await?;
            delete_from_storage(&***storage, &file_path).await?;
            Ok(Json(()))
        }
        None => Ok(Json(())),
    }
}

async fn get_image_path(
    auth: Auth,
    id: i32,
    pg_conn: &mut AsyncPgConnection,
) -> Result<Option<String>, VinotecaError> {
    Ok(wines::table
        .filter(wines::user_id.eq(auth.id))
        .filter(wines::id.eq(id))
        .select(wines::image)
        .first::<Option<String>>(pg_conn)
        .await?)
}

pub async fn delete_from_storage(storage: &dyn Storage, path: &str) -> Result<(), VinotecaError> {
    todo!()
    // storage
    //     .delete_object(&format!("{}/{}", WINE_DIR, path))
    //     .await
}

fn get_exif(raw: &[u8]) -> Option<exif::Exif> {
    let mut reader = BufReader::new(raw);
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

fn handle_exif(
    decoded_image: image::DynamicImage,
    exif: exif::Exif,
) -> (image::DynamicImage, Option<u16>) {
    let orientation_field = exif.get_field(exif::Tag::Orientation, exif::In::PRIMARY);
    if let Some(orientation_field) = orientation_field {
        let orientation = match &orientation_field.value {
            exif::Value::Short(v) => v.iter().next().map(|n| n.to_owned()),
            exif::Value::Byte(v) => v.iter().next().map(|n| n.to_owned() as u16),
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

fn reformat_image(raw: &[u8]) -> Result<Vec<u8>, VinotecaError> {
    let decoded_image = image::io::Reader::new(Cursor::new(raw))
        .with_guessed_format()?
        .decode()?;
    let (mut decoded_image, orientation) = if let Some(exif) = get_exif(raw) {
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
                "Failed to reformat image: {:?}. Orientation: {:?}",
                e, orientation
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
