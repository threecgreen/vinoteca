use super::get;
use super::image::handle_image;
use super::models::{RawWineForm, WinePatchForm};
use crate::error::{RestResult, VinotecaError};
use crate::models::Wine;
use crate::query_utils::IntoFirst;
use crate::schema::wines;
use crate::{DbConn, MediaDir};

use diesel::prelude::*;
use rocket::State;
use rocket_contrib::json::Json;
use validator::Validate;

fn get_wine_by_id(id: i32, connection: DbConn) -> RestResult<Wine> {
    get(
        Some(id),
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        connection,
    )?
    .into_first("Edited wine")
}

#[patch("/wines/<id>", format = "json", data = "<wine_patch_form>")]
pub fn patch(
    id: i32,
    wine_patch_form: Json<WinePatchForm>,
    connection: DbConn,
) -> RestResult<Wine> {
    let wine_patch_form = wine_patch_form.into_inner();
    wine_patch_form.validate()?;

    connection.set_timeout(1_000)?;
    diesel::update(wines::table.filter(wines::id.eq(id)))
        .set(wines::inventory.eq(wine_patch_form.inventory))
        .execute(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|_| get_wine_by_id(id, connection))
}

#[put("/wines/<id>", data = "<raw_wine_form>")]
pub fn put(
    id: i32,
    raw_wine_form: RawWineForm,
    connection: DbConn,
    media_dir: State<MediaDir>,
) -> RestResult<Wine> {
    let wine_form = raw_wine_form.wine_form;
    wine_form.validate()?;

    connection.set_timeout(1_000)?;
    let result: RestResult<Wine> = diesel::update(wines::table.filter(wines::id.eq(id)))
        .set(wine_form)
        .execute(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|_| get_wine_by_id(id, connection));

    if let Ok(wine) = &result {
        if let Some(image) = raw_wine_form.image {
            if let Err(e) = handle_image(wine, image, &media_dir.0) {
                warn!("Error updating image for wine with id {}: {}", id, e);
            }
        }
    }
    result
}
