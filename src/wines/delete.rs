use crate::users::Auth;
use crate::error::VinotecaError;
use crate::schema::wines;
use crate::DbConn;

use diesel::prelude::*;

#[delete("/wines/<id>")]
pub fn delete(auth: Auth, id: i32, connection: DbConn) -> Result<(), VinotecaError> {
    // Validate is user's wine
    wines::table
        .filter(wines::id.eq(id))
        .filter(wines::user_id.eq(auth.id))
        .select(wines::id)
        .first::<i32>(&*connection)?;

    diesel::delete(wines::table.filter(wines::id.eq(id)))
        .execute(&*connection)
        .map(|_| ())
        .map_err(VinotecaError::from)
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::error::RestResult;
    use crate::models::Wine;
    use crate::wines::get;

    use rocket_contrib::json::Json;

    fn get_by_id(auth: Auth, id: i32, connection: DbConn) -> RestResult<Vec<Wine>> {
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
        )
    }

    #[test]
    fn delete_removes_wine() {
        run_test!(|rocket, connection| {
            let auth = Auth { id: 1 };
            let wines = get_by_id(auth, 1, connection);
            assert!(matches!(wines, Ok(Json(wines)) if wines.len() == 1));
            let connection = DbConn::get_one(&rocket).expect("database connection");
            let response = delete(auth, 1, connection);
            assert!(response.is_ok());
            let connection = DbConn::get_one(&rocket).expect("database connection");
            let wines = get_by_id(auth, 1, connection);
            assert!(matches!(wines, Ok(Json(wines)) if wines.is_empty()));
        })
    }
}
