use super::DbConn;
use super::models::WineGrape;
use super::query_utils::error_status;
use super::schema::wine_grapes;

use diesel::prelude::*;
use rocket::http::Status;
use rocket_contrib::json::Json;

#[get("/wine-grapes?<wine_id>&<grape_id>")]
pub fn get(
    wine_id: Option<i32>,
    grape_id: Option<i32>,
    connection: DbConn,
) -> Result<Json<Vec<WineGrape>>, Status> {
    let mut query = wine_grapes::table
        // .inner_join(wines::table)
        // .inner_join(grapes::table)
        .into_boxed();
    if let Some(wine_id) = wine_id {
        query = query.filter(wine_grapes::wine_id.eq(wine_id));
    }
    if let Some(grape_id) = grape_id {
        query = query.filter(wine_grapes::grape_id.eq(grape_id));
    }
    query
        .load::<WineGrape>(&*connection)
        .map(Json)
        .map_err(error_status)
}
