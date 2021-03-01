use super::get_one;
use super::image::handle_image;
use super::models::{RawWineForm, WinePatchForm};
use crate::error::{RestResult, VinotecaError};
use crate::models::{NewWine, Wine};
use crate::schema::wines;
use crate::storage::Storage;
use crate::users::Auth;
use crate::DbConn;

use diesel::prelude::*;
use rocket::State;
use rocket_contrib::json::Json;
use validator::Validate;

#[patch("/wines/<id>", format = "json", data = "<wine_patch_form>")]
pub async fn patch(
    auth: Auth,
    id: i32,
    wine_patch_form: Json<WinePatchForm>,
    conn: DbConn,
) -> RestResult<Wine> {
    let wine_patch_form = wine_patch_form.into_inner();
    conn.run(move |c| validate_owns_wine(auth, id, c)).await?;
    match wine_patch_form {
        WinePatchForm::Inventory(inventory) if inventory >= 0 => {
            conn.run(move |c| {
                diesel::update(wines::table.filter(wines::id.eq(id)))
                    .set(wines::inventory.eq(inventory))
                    .execute(c)
                    .map_err(VinotecaError::from)
            })
            .await?;
            get_one(auth, id, conn).await
        }
        WinePatchForm::Inventory(_invalid_inventory) => Err(VinotecaError::BadRequest(
            "Invalid inventory value".to_owned(),
        )),
        WinePatchForm::IsInShoppingList(is_in_shopping_list) => {
            conn.run(move |c| {
                diesel::update(wines::table.filter(wines::id.eq(id)))
                    .set(wines::is_in_shopping_list.eq(is_in_shopping_list))
                    .execute(c)
                    .map_err(VinotecaError::from)
            })
            .await?;
            get_one(auth, id, conn).await
        }
    }
}

#[put("/wines/<id>", data = "<raw_wine_form>")]
pub async fn put(
    auth: Auth,
    id: i32,
    raw_wine_form: RawWineForm,
    conn: DbConn,
    storage: State<'_, Box<dyn Storage>>,
) -> RestResult<Wine> {
    let RawWineForm { image, wine_form } = raw_wine_form;
    wine_form.validate()?;

    conn.run(move |c| {
        validate_owns_wine(auth, id, c)?;

        // TODO: editing an image should be handled separately
        diesel::update(wines::table.filter(wines::id.eq(id)))
            .set(NewWine::from((auth, wine_form)))
            .execute(c)
            .map_err(VinotecaError::from)
    })
    .await?;
    if let Some(image) = image {
        if let Err(e) = handle_image(id, image, &**storage, &conn).await {
            warn!("Error updating image for wine with id {}: {}", id, e);
        }
    }
    get_one(auth, id, conn).await
}

pub fn validate_owns_wine(
    auth: Auth,
    id: i32,
    pg_conn: &mut PgConnection,
) -> Result<(), VinotecaError> {
    wines::table
        .filter(wines::id.eq(id))
        .filter(wines::user_id.eq(auth.id))
        .select(wines::id)
        .first::<i32>(pg_conn)?;
    Ok(())
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::storage::MockStorage;
    use crate::DbConn;
    use crate::{models::WineForm, wines::get_one};

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

    #[test]
    fn nullifying_field() {
        db_test!(|rocket, connection| {
            let auth = Auth { id: 1 };
            let wine1 = get_one(auth, 1, connection).unwrap();
            assert!(wine1.description.is_none());
            let mut form = WineForm::from(wine1.into_inner());
            form.description = Some("pleasant".to_owned());
            // Mock storage setup
            let mock = MockStorage::new();
            // mock.expect_delete_object().times(1).return_const(Ok(()));
            let rocket = rocket.manage(Config::new(mock));
            // Add description
            let wine2 = put(
                auth,
                1,
                RawWineForm {
                    image: None,
                    wine_form: form,
                },
                DbConn::get_one(&rocket).unwrap(),
                State::from(&rocket).unwrap(),
            )
            .unwrap();
            assert_eq!(wine2.description, Some("pleasant".to_owned()));
            // Nullify description
            let mut null_form = WineForm::from(wine2.into_inner());
            null_form.description = None;
            let wine3 = put(
                auth,
                1,
                RawWineForm {
                    image: None,
                    wine_form: null_form,
                },
                DbConn::get_one(&rocket).unwrap(),
                State::from(&rocket).unwrap(),
            )
            .unwrap();
            assert!(wine3.description.is_none());
        });
    }
}
