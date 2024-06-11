use diesel::prelude::*;
use diesel_async::RunQueryDsl;
use rocket::serde::json::Json;
use rocket::State;
use rocket_db_pools::Connection;
use validator::Validate;

// use super::models::RawWineForm;
use super::read::get_one;

use crate::error::{RestResult, VinotecaError};
use crate::models::WineForm;
use crate::models::{NewWine, Wine};
use crate::schema::wines;
use crate::storage::Storage;
use crate::users::Auth;
use crate::Db;

// #[post("/wines", data = "<raw_wine_form>")]
#[post("/wines", data = "<wine_form>", format = "json")]
pub async fn post(
    auth: Auth,
    wine_form: Json<WineForm>,
    mut conn: Connection<Db>,
    storage: &State<Box<dyn Storage>>,
) -> RestResult<Wine> {
    // let RawWineForm { wine_form, image } = raw_wine_form.into_inner();
    let wine_form = wine_form.into_inner();
    wine_form.validate()?;

    let wine_id = diesel::insert_into(wines::table)
        .values(NewWine::from((auth, wine_form)))
        .returning(wines::id)
        .get_result(&mut **conn)
        .await
        .map_err(VinotecaError::from)?;
    // if let Some(image) = image {
    //     warn!("Found an image");
    //     if let Err(e) = handle_image(wine_id, image, &***storage, &conn).await {
    //         warn!("Error adding image for new wine with id {}: {}", wine_id, e);
    //     };
    // } else {
    //     warn!("No image found");
    // }

    get_one(auth, wine_id, conn).await
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::models::WineForm;
    use crate::storage::MockStorage;
    use crate::wines::models::RawWineForm;
    use crate::Db;

    use rocket::serde::json::Json;
    use rocket::State;
    use std::fs::read;
    use std::path::Path;

    fn mock_form() -> Form<RawWineForm> {
        Form::from(RawWineForm {
            image: Some(
                // mime_type: "image/jpeg".parse().unwrap(),
                read(Path::new(env!("CARGO_MANIFEST_DIR")).join("src/test_data/test.jpg"))
                    .expect("Test image"),
            ),
            wine_form: Json(WineForm {
                description: None,
                notes: None,
                rating: Some(5),
                inventory: 0,
                why: None,
                color_id: 1,
                producer_id: 1,
                viti_area_id: None,
                name: None,
                wine_type_id: 1,
                is_in_shopping_list: false,
            }),
        })
    }

    #[rocket::async_test]
    async fn insert_wine() {
        db_test!(|rocket, connection| {
            let mut mock = MockStorage::new();
            mock.expect_create_object()
                .times(1)
                .return_const(Ok("uuid123".to_owned()));
            let mock_storage: Box<dyn Storage> = Box::new(mock);
            let storage = State::from(&mock_storage);
            let response = post(Auth { id: 1 }, mock_form(), connection, &storage).await;
            assert!(response.is_ok());
        })
    }

    #[rocket::async_test]
    async fn image_failure_still_saves_wine() {
        db_test!(|rocket, connection| {
            let mut mock = MockStorage::new();
            mock.expect_create_object()
                .times(1)
                .return_const(Err(VinotecaError::Internal("No good".to_owned())));
            let mock_storage: Box<dyn Storage> = Box::new(mock);
            let storage = State::from(&mock_storage);
            let response = post(Auth { id: 1 }, mock_form(), connection, &storage).await;
            assert!(response.is_ok());
        })
    }
}
