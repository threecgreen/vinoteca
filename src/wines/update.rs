use super::get_one;
use super::image::handle_image;
use super::models::{RawWineForm, WinePatchForm};
use crate::config::Config;
use crate::error::{RestResult, VinotecaError};
use crate::models::{NewWine, Wine};
use crate::query_utils::DbConn;
use crate::schema::wines;
use crate::users::Auth;

use diesel::prelude::*;
use diesel_async::{AsyncPgConnection, RunQueryDsl};
use rocket::serde::json::Json;
use rocket::{patch, put};
use rocket::State;
use validator::Validate;

#[patch("/wines/<id>", format = "json", data = "<wine_patch_form>")]
pub async fn patch(
    auth: Auth,
    id: i32,
    wine_patch_form: Json<WinePatchForm>,
    mut connection: DbConn,
) -> RestResult<Wine> {
    let wine_patch_form = wine_patch_form.into_inner();
    validate_owns_wine(auth, id, &mut connection).await?;
    match wine_patch_form {
        WinePatchForm::Inventory(inventory) if inventory >= 0 => {
            diesel::update(wines::table.filter(wines::id.eq(id)))
                .set(wines::inventory.eq(inventory))
                .execute(&mut connection)
                .await
                .map_err(VinotecaError::from)?;
            get_one(auth, id, connection).await
        }
        WinePatchForm::Inventory(_invalid_inventory) => Err(VinotecaError::BadRequest(
            "Invalid inventory value".to_owned(),
        )),
        WinePatchForm::IsInShoppingList(is_in_shopping_list) => {
            diesel::update(wines::table.filter(wines::id.eq(id)))
                .set(wines::is_in_shopping_list.eq(is_in_shopping_list))
                .execute(&mut connection)
                .await
                .map_err(VinotecaError::from)?;
            get_one(auth, id, connection).await
        }
    }
}

#[put("/wines/<id>", data = "<raw_wine_form>")]
pub async fn put(
    auth: Auth,
    id: i32,
    raw_wine_form: RawWineForm,
    mut connection: DbConn,
    config: &State<Config>,
) -> RestResult<Wine> {
    let wine_form = raw_wine_form.wine_form;
    let image = raw_wine_form.image;
    wine_form.validate()?;
    validate_owns_wine(auth, id, &mut connection).await?;

    // TODO: editing an image should be handled separately
    diesel::update(wines::table.filter(wines::id.eq(id)))
        .set(NewWine::from((auth, wine_form)))
        .execute(&mut connection)
        .await
        .map_err(VinotecaError::from)?;

    if let Some(image) = image {
        if let Err(e) = handle_image(id, image, &*config.storage, &mut connection).await {
            log::warn!("Error updating image for wine with id {}: {}", id, e);
        }
    }

    get_one(auth, id, connection).await
}

pub async fn validate_owns_wine(
    auth: Auth,
    id: i32,
    connection: &mut AsyncPgConnection,
) -> Result<(), VinotecaError> {
    wines::table
        .filter(wines::id.eq(id))
        .filter(wines::user_id.eq(auth.id))
        .select(wines::id)
        .first::<i32>(connection)
        .await?;
    Ok(())
}

#[cfg(test)]
mod test {
    // Tests need to be updated for async
}
