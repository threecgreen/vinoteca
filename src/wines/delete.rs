use crate::auth::Auth;
use crate::error::VinotecaError;
use crate::schema::{users, wine_grapes, wines};
use crate::DbConn;

use diesel::prelude::*;

#[delete("/wines/<id>")]
pub fn delete(auth: Auth, id: i32, connection: DbConn) -> Result<(), VinotecaError> {
    // diesel::delete(wine_grapes::table.filter(wine_grapes::wine_id.eq(id))).execute(&*connection)?;
    let wine_id = wines::table.filter(wines::id.eq(id))
        .filter(wines::user_id.eq(auth.id))
        .select(wines::id)
        .first::<i32>(&*connection);
    if let Ok(wine_id) = wine_id {
        diesel::delete(wines::table.filter(wines::id.eq(id)))
            .execute(&*connection)
            .map(|_| ())
            .map_err(VinotecaError::from)
    } else {
        // Permission denied
        Err(VinotecaError::Forbidden("Can't delete another user's wine".to_string()))
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::error::RestResult;
    use crate::models::Wine;
    use crate::testing::create_test_rocket;
    use crate::wines::get;

    use rocket_contrib::json::Json;

    fn get_by_id(id: i32, connection: DbConn) -> RestResult<Vec<Wine>> {
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
        )
    }

    #[test]
    fn delete_removes_wine() {
        let rocket = create_test_rocket();
        let connection = DbConn::get_one(&rocket).expect("database connection");
        let wines = get_by_id(1, connection);
        assert!(matches!(wines, Ok(Json(wines)) if wines.len() == 1));
        let connection = DbConn::get_one(&rocket).expect("database connection");
        let response = delete(1, connection);
        assert!(response.is_ok());
        let connection = DbConn::get_one(&rocket).expect("database connection");
        let wines = get_by_id(1, connection);
        assert!(matches!(wines, Ok(Json(wines)) if wines.is_empty()));
    }
}
