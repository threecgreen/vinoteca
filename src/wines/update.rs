use diesel::prelude::*;
use diesel_async::{AsyncPgConnection, RunQueryDsl};
// use rocket::form::Form;
use rocket::serde::json::Json;
use rocket::State;
use rocket_db_pools::Connection;
use validator::Validate;

use super::get_one;
// use super::image::handle_image;
use super::models::WinePatchForm;
use crate::error::{RestResult, VinotecaError};
use crate::models::{NewWine, Wine, WineForm};
use crate::schema::wines;
use crate::storage::Storage;
use crate::users::Auth;
use crate::Db;

// #[patch("/wines/<id>", format = "json", data = "<wine_patch_form>")]
#[patch("/wines/<id>", format = "json", data = "<wine_patch_form>")]
pub async fn patch(
    auth: Auth,
    id: i32,
    wine_patch_form: Json<WinePatchForm>,
    mut conn: Connection<Db>,
) -> RestResult<Wine> {
    let wine_patch_form = wine_patch_form.into_inner();
    validate_owns_wine(auth, id, &mut **conn).await?;
    match wine_patch_form {
        WinePatchForm::Inventory(inventory) if inventory >= 0 => {
            diesel::update(wines::table.filter(wines::id.eq(id)))
                .set(wines::inventory.eq(inventory))
                .execute(&mut **conn)
                .await
                .map_err(VinotecaError::from)?;
            get_one(auth, id, conn).await
        }
        WinePatchForm::Inventory(_invalid_inventory) => Err(VinotecaError::BadRequest(
            "Invalid inventory value".to_owned(),
        )),
        WinePatchForm::IsInShoppingList(is_in_shopping_list) => {
            diesel::update(wines::table.filter(wines::id.eq(id)))
                .set(wines::is_in_shopping_list.eq(is_in_shopping_list))
                .execute(&mut **conn)
                .await
                .map_err(VinotecaError::from)?;
            get_one(auth, id, conn).await
        }
    }
}

// #[put("/wines/<id>", data = "<raw_wine_form>")]
#[put("/wines/<id>", format = "json", data = "<wine_form>")]
pub async fn put(
    auth: Auth,
    id: i32,
    wine_form: Json<WineForm>,
    mut conn: Connection<Db>,
    storage: &State<Box<dyn Storage>>,
) -> RestResult<Wine> {
    let wine_form = wine_form.into_inner();
    wine_form.validate()?;
    validate_owns_wine(auth, id, &mut **conn).await?;

    // TODO: editing an image should be handled separately
    diesel::update(wines::table.filter(wines::id.eq(id)))
        .set(NewWine::from((auth, wine_form)))
        .execute(&mut **conn)
        .await
        .map_err(VinotecaError::from)?;
    // if let Some(image) = image {
    //     if let Err(e) = handle_image(id, image, &***storage, &conn).await {
    //         warn!("Error updating image for wine with id {}: {}", id, e);
    //     }
    // }
    get_one(auth, id, conn).await
}

pub async fn validate_owns_wine(
    auth: Auth,
    id: i32,
    conn: &mut AsyncPgConnection,
) -> Result<(), VinotecaError> {
    wines::table
        .filter(wines::id.eq(id))
        .filter(wines::user_id.eq(auth.id))
        .select(wines::id)
        .first::<i32>(conn)
        .await?;
    Ok(())
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::storage::MockStorage;
    use crate::Db;
    use crate::{models::WineForm, wines::get_one};

    #[rocket::async_test]
    async fn validate_owns_wine_fails() {
        db_test!(|rocket, connection| {
            // Invalid user id
            let res = connection
                .run(|c| validate_owns_wine(Auth { id: -1 }, 1, c))
                .await;
            assert!(matches!(res, Err(VinotecaError::NotFound(_))));
        })
    }

    #[rocket::async_test]
    async fn validate_owns_wine_succeeds() {
        db_test!(|rocket, connection| {
            let res = connection
                .run(|c| validate_owns_wine(Auth { id: 1 }, 1, c))
                .await;
            assert!(res.is_ok());
        })
    }

    #[rocket::async_test]
    async fn nullifying_field() {
        db_test!(|rocket, connection| {
            let auth = Auth { id: 1 };
            let wine1 = get_one(auth, 1, connection).await.unwrap();
            assert!(wine1.description.is_none());
            let mut form = WineForm::from(wine1.into_inner());
            form.description = Some("pleasant".to_owned());
            // Mock storage setup
            let mock = MockStorage::new();
            let mock_storage: Box<dyn Storage> = Box::new(mock);
            let storage = State::from(&mock_storage);
            let connection = Db::get_one(&rocket).await.expect("database connection");
            // Add description
            let wine2 = put(
                auth,
                1,
                Form::from(RawWineForm {
                    // image: None,
                    wine_form: Json(form),
                }),
                connection,
                storage,
            )
            .await
            .unwrap();
            assert_eq!(wine2.description, Some("pleasant".to_owned()));
            // Nullify description
            let mut null_form = WineForm::from(wine2.into_inner());
            null_form.description = None;
            let connection = Db::get_one(&rocket).await.expect("database connection");
            let wine3 = put(
                auth,
                1,
                Form::from(RawWineForm {
                    // image: None,
                    wine_form: Json(null_form),
                }),
                connection,
                storage,
            )
            .await
            .unwrap();
            assert!(wine3.description.is_none());
        });
    }
}
