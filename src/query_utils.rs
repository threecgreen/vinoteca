use crate::error::{RestResult, VinotecaError};

use diesel::result::Error;
use diesel::Connection;
use rocket::http::Status;
use rocket_contrib::databases::diesel::SqliteConnection;
use rocket_contrib::json::Json;

/// Macro for fetching the `$limit` top rows from `$table`. We use a macro
/// because of issues with creating generic diesel functions
macro_rules! top_table {
    ($table: expr, $id: expr, $name: expr, $limit: expr, $connection: expr) => {
        $table
            .group_by(($id, $name))
            .select((
                $id,
                $name,
                sql::<Integer>("sum(purchases.quantity)"),
                // Should probably be distinct
                sql::<Integer>("count(wines.id)"),
                sql::<Float>("avg(purchases.price)"),
            ))
            .order_by(sql::<Integer>("sum(purchases.quantity) DESC"))
            .limit($limit as i64)
            .load::<generic::TopEntity>(&*$connection)
            .map(Json)
            .map_err(VinotecaError::from)
    };
}

pub fn error_status(error: Error) -> Status {
    match error {
        Error::NotFound => Status::NotFound,
        e => {
            warn!("Error encountered: {:?}", e);
            Status::InternalServerError
        }
    }
}

#[database("vinoteca")]
pub struct DbConn(SqliteConnection);

impl DbConn {
    /// SQLite has a global write lock. This hack ups the timeout to
    /// `timeout_ms` so that queries hopefully never timeout due to locking.
    /// This would be fixed by moving to a non-'lite' database.
    pub fn set_timeout(&self, timeout_ms: u32) -> Result<(), VinotecaError> {
        self.execute(&format!("PRAGMA busy_timeout = {};", timeout_ms))?;
        Ok(())
    }
}

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
            None => Err(VinotecaError::NotFound(not_found_msg.to_owned())),
        }
    }
}
