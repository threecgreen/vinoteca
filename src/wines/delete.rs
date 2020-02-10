use crate::error::VinotecaError;
use crate::schema::{wine_grapes, wines};
use crate::DbConn;

use diesel::prelude::*;

#[delete("/wines/<id>")]
pub fn delete(id: i32, connection: DbConn) -> Result<(), VinotecaError> {
    diesel::delete(wine_grapes::table.filter(wine_grapes::wine_id.eq(id))).execute(&*connection)?;
    diesel::delete(wines::table.filter(wines::id.eq(id)))
        .execute(&*connection)
        .map(|_| ())
        .map_err(VinotecaError::from)
}
