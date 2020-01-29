use crate::error::{RestResult, VinotecaError};
use crate::models::WineGrape;
use crate::schema::{grapes, wine_grapes};
use crate::DbConn;

use diesel::prelude::*;
use rocket_contrib::json::Json;

#[get("/wine-grapes?<wine_id>&<grape_id>")]
pub fn get(
    wine_id: Option<i32>,
    grape_id: Option<i32>,
    connection: DbConn,
) -> RestResult<Vec<WineGrape>> {
    let mut query = wine_grapes::table.inner_join(grapes::table).into_boxed();
    if let Some(wine_id) = wine_id {
        query = query.filter(wine_grapes::wine_id.eq(wine_id));
    }
    if let Some(grape_id) = grape_id {
        query = query.filter(wine_grapes::grape_id.eq(grape_id));
    }
    query
        .select((
            wine_grapes::id,
            wine_grapes::percent,
            wine_grapes::grape_id,
            grapes::name,
            wine_grapes::wine_id,
        ))
        .load::<WineGrape>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}
