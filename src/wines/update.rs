use super::get;
use super::image::handle_image;
use super::models::{RawWineForm, WinePatchForm};
use crate::error::{RestResult, VinotecaError};
use crate::models::{NewWine, Wine};
use crate::query_utils::IntoFirst;
use crate::schema::wines;
use crate::users::Auth;
use crate::{DbConn, MediaDir};

use diesel::prelude::*;
use rocket::State;
use rocket_contrib::json::Json;
use validator::Validate;

#[patch("/wines/<id>", format = "json", data = "<wine_patch_form>")]
pub fn patch(
    auth: Auth,
    id: i32,
    wine_patch_form: Json<WinePatchForm>,
    connection: DbConn,
) -> RestResult<Wine> {
    let wine_patch_form = wine_patch_form.into_inner();
    wine_patch_form.validate()?;
    validate_owns_wine(auth, id, &connection)?;

    diesel::update(wines::table.filter(wines::id.eq(id)))
        .set(wines::inventory.eq(wine_patch_form.inventory))
        .execute(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|_| get_wine_by_id(auth, id, connection))
}

#[put("/wines/<id>", data = "<raw_wine_form>")]
pub fn put(
    auth: Auth,
    id: i32,
    raw_wine_form: RawWineForm,
    connection: DbConn,
    media_dir: State<MediaDir>,
) -> RestResult<Wine> {
    let wine_form = raw_wine_form.wine_form;
    let image = raw_wine_form.image;
    wine_form.validate()?;
    validate_owns_wine(auth, id, &connection)?;

    diesel::update(wines::table.filter(wines::id.eq(id)))
        .set(NewWine::from((auth, wine_form)))
        .execute(&*connection)
        .map_err(VinotecaError::from)
        .map(|_| {
            if let Some(image) = image {
                if let Err(e) = handle_image(id, image, &media_dir.0, &connection) {
                    warn!("Error updating image for wine with id {}: {}", id, e);
                }
            }
        })
        .and_then(|_| get_wine_by_id(auth, id, connection))
}

pub fn validate_owns_wine(auth: Auth, id: i32, connection: &DbConn) -> Result<(), VinotecaError> {
    wines::table
        .filter(wines::id.eq(id))
        .filter(wines::user_id.eq(auth.id))
        .select(wines::id)
        .first::<i32>(&**connection)?;
    Ok(())
}

fn get_wine_by_id(auth: Auth, id: i32, connection: DbConn) -> RestResult<Wine> {
    get(
        auth,
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
