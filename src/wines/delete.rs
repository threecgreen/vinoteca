use diesel::prelude::*;
use diesel_async::RunQueryDsl;
use rocket::serde::json::Json;
use rocket::State;
use rocket_db_pools::Connection;

use super::image;
use crate::error::{RestResult, VinotecaError};
use crate::schema::wines;
use crate::storage::Storage;
use crate::users::Auth;
use crate::Db;

#[delete("/wines/<id>")]
pub async fn delete(
    auth: Auth,
    id: i32,
    mut conn: Connection<Db>,
    storage: &State<Box<dyn Storage>>,
) -> RestResult<()> {
    // Validate is user's wine
    let image_path = wines::table
        .filter(wines::id.eq(id))
        .filter(wines::user_id.eq(auth.id))
        .select(wines::image)
        .first::<Option<String>>(&mut **conn)
        .await?;

    if let Some(image_path) = image_path {
        if let Err(e) = image::delete_from_storage(&***storage, &image_path).await {
            warn!("Error deleting image for deleted wine: {:?}", e);
        };
    }
    diesel::delete(wines::table.filter(wines::id.eq(id)))
        .execute(&mut **conn)
        .await
        .map_err(VinotecaError::from)?;
    Ok(Json(()))
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::storage::MockStorage;
    use crate::wines::get_one;

    use rocket::serde::json::Json;

    #[rocket::async_test]
    async fn delete_removes_wine() {
        db_test!(|rocket, connection| {
            let mut mock = MockStorage::new();
            mock.expect_delete_object().times(1).return_const(Ok(()));
            let mock_storage: Box<dyn Storage> = Box::new(mock);
            let storage = State::from(&mock_storage);

            let auth = Auth { id: 1 };
            let wines = get_one(auth, 1, connection).await;
            assert!(matches!(wines, Ok(Json(wines)) if wines.id == 1));
            let connection = Db::get_one(&rocket).await.expect("database connection");
            let response = delete(auth, 1, connection, storage).await;
            assert!(response.is_ok());
            let connection = Db::get_one(&rocket).await.expect("database connection");
            let res = get_one(auth, 1, connection).await;
            assert!(matches!(res, Err(VinotecaError::NotFound(_))));
        })
    }
}
