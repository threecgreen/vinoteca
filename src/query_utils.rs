use crate::error::VinotecaError;

use diesel::result::Error;
use diesel::Connection;
use rocket::http::Status;
use rocket_contrib::databases::diesel::SqliteConnection;

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
