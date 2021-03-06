use super::image;
use crate::config::Config;
use crate::error::{RestResult, VinotecaError};
use crate::schema::wines;
use crate::users::Auth;
use crate::DbConn;

use diesel::prelude::*;
use rocket::State;
use rocket_contrib::json::Json;

#[delete("/wines/<id>")]
pub fn delete(auth: Auth, id: i32, connection: DbConn, config: State<Config>) -> RestResult<()> {
    // Validate is user's wine
    let image_path = wines::table
        .filter(wines::id.eq(id))
        .filter(wines::user_id.eq(auth.id))
        .select(wines::image)
        .first::<Option<String>>(&*connection)?;

    if let Some(image_path) = image_path {
        if let Err(e) = image::delete_from_storage(&*config.storage, &image_path) {
            warn!("Error deleting image for deleted wine: {:?}", e);
        };
    }
    diesel::delete(wines::table.filter(wines::id.eq(id)))
        .execute(&*connection)
        .map(|_| Json(()))
        .map_err(VinotecaError::from)
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::storage::MockStorage;
    use crate::wines::get_one;

    use rocket_contrib::json::Json;

    #[test]
    fn delete_removes_wine() {
        db_test!(|rocket, connection| {
            let mut mock = MockStorage::new();
            mock.expect_delete_object().times(1).return_const(Ok(()));
            let rocket = rocket.manage(Config::new(mock));
            let config = State::from(&rocket).unwrap();

            let auth = Auth { id: 1 };
            let wines = get_one(auth, 1, connection);
            assert!(matches!(wines, Ok(Json(wines)) if wines.id == 1));
            let connection = DbConn::get_one(&rocket).expect("database connection");
            let response = delete(auth, 1, connection, config);
            dbg!(&response);
            assert!(response.is_ok());
            let connection = DbConn::get_one(&rocket).expect("database connection");
            let res = get_one(auth, 1, connection);
            assert!(matches!(res, Err(VinotecaError::NotFound(_))));
        })
    }
}
