use crate::error::{RestResult, VinotecaError};

use diesel::sql_types::Text;
use rocket::serde::json::Json;
use rocket_sync_db_pools::diesel::PgConnection;

/// Macro for fetching the `$limit` top rows from `$table`. We use a macro
/// because of issues with creating generic diesel functions
macro_rules! top_table {
    ($table: expr, $id: expr, $name: expr, $limit: expr, $conn: expr) => {{
        use crate::error::VinotecaError;
        use crate::models::generic;

        use diesel::sql_types::{BigInt, Double, Nullable};
        use rocket::serde::json::Json;

        $conn.run(move |c| {
            $table
                .group_by(($id, $name))
                .select((
                    $id,
                    $name,
                    sql::<BigInt>("sum(purchases.quantity)"),
                    sql::<BigInt>("count(DISTINCT wines.id)"),
                    sql::<Nullable<Double>>("avg(purchases.price)"),
                ))
                .order_by(sql::<BigInt>("sum(purchases.quantity) DESC"))
                .limit($limit as i64)
                .load::<generic::TopEntity>(c)
                .map(Json)
                .map_err(VinotecaError::from)
        })
    }};
}

sql_function!(fn lower(x: Text) -> Text);

/// Database connection from connection pool.
#[database("vinoteca")]
pub struct DbConn(PgConnection);

/// Used for reusing the `GET` request logic in `POST` and `PUT` methods to
/// retrieved the created or modified entity. `GET` methods usually return a
/// `Vec` of entities while `POST` and `PUT` should always return exactly one.
/// This consumes the vector and extracts the first element. We return a result
/// rather use `.remove()` directly in case of race conditions or a bad query.
pub trait IntoFirst<I> {
    fn into_first(self, not_found_msg: &str) -> RestResult<I>;
}

impl<I> IntoFirst<I> for Json<Vec<I>> {
    fn into_first(self, not_found_msg: &str) -> RestResult<I> {
        match self.get(0) {
            Some(_) => Ok(Json(self.into_inner().remove(0))),
            None => {
                warn!("{}", not_found_msg);
                Err(VinotecaError::NotFound(not_found_msg.to_owned()))
            }
        }
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn into_first_one_element() {
        let v = Json(vec![1]);
        let result = v.into_first("Error in test");
        assert!(result.is_ok());
        assert_eq!(result.unwrap().into_inner(), 1);
    }

    #[test]
    fn into_first_many_elements() {
        let v: Json<Vec<_>> = Json((1..5).collect());
        let result = v.into_first("Error in test");
        assert!(result.is_ok());
        assert_eq!(result.unwrap().into_inner(), 1);
    }

    #[test]
    fn into_first_no_elements() {
        let v = Json(Vec::<i32>::new());
        let err_msg = "Vec is";
        let result = v.into_first(err_msg);
        assert!(result.is_err());
        assert!(matches!(result.unwrap_err(), VinotecaError::NotFound(msg) if msg == err_msg));
    }
}
