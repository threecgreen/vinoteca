use super::get_one;
use super::image::handle_image;
use super::models::{RawWineForm, WinePatchForm};
use crate::config::Config;
use crate::error::{RestResult, VinotecaError};
use crate::models::{NewWine, Wine};
use crate::schema::wines;
use crate::users::Auth;
use crate::DbConn;

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
    validate_owns_wine(auth, id, &connection)?;
    match wine_patch_form {
        WinePatchForm::Inventory(inventory) if inventory >= 0 => {
            diesel::update(wines::table.filter(wines::id.eq(id)))
                .set(wines::inventory.eq(inventory))
                .execute(&*connection)
                .map_err(VinotecaError::from)
                .and_then(|_| get_one(auth, id, connection))
        }
        WinePatchForm::Inventory(_invalid_inventory) => Err(VinotecaError::BadRequest(
            "Invalid inventory value".to_owned(),
        )),
        WinePatchForm::IsInShoppingList(is_in_shopping_list) => {
            diesel::update(wines::table.filter(wines::id.eq(id)))
                .set(wines::is_in_shopping_list.eq(is_in_shopping_list))
                .execute(&*connection)
                .map_err(VinotecaError::from)
                .and_then(|_| get_one(auth, id, connection))
        }
    }
}

#[put("/wines/<id>", data = "<raw_wine_form>")]
pub fn put(
    auth: Auth,
    id: i32,
    raw_wine_form: RawWineForm,
    connection: DbConn,
    config: State<Config>,
) -> RestResult<Wine> {
    let wine_form = raw_wine_form.wine_form;
    let image = raw_wine_form.image;
    wine_form.validate()?;
    validate_owns_wine(auth, id, &connection)?;

    // TODO: editing an image should be handled separately
    diesel::update(wines::table.filter(wines::id.eq(id)))
        .set(NewWine::from((auth, wine_form)))
        .execute(&*connection)
        .map_err(VinotecaError::from)
        .map(|_| {
            if let Some(image) = image {
                if let Err(e) = handle_image(id, image, &*config.storage, &connection) {
                    warn!("Error updating image for wine with id {}: {}", id, e);
                }
            }
        })
        .and_then(|_| get_one(auth, id, connection))
}

pub fn validate_owns_wine(auth: Auth, id: i32, connection: &DbConn) -> Result<(), VinotecaError> {
    wines::table
        .filter(wines::id.eq(id))
        .filter(wines::user_id.eq(auth.id))
        .select(wines::id)
        .first::<i32>(&**connection)?;
    Ok(())
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn validate_owns_wine_fails() {
        db_test!(|rocket, connection| {
            // Invalid user id
            let res = validate_owns_wine(Auth { id: -1 }, 1, &connection);
            assert!(matches!(res, Err(VinotecaError::NotFound(_))));
        })
    }

    #[test]
    fn validate_owns_wine_succeeds() {
        db_test!(|rocket, connection| {
            let res = validate_owns_wine(Auth { id: 1 }, 1, &connection);
            assert!(res.is_ok());
        })
    }
}
