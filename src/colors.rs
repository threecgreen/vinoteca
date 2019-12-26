use super::query_utils::error_status;
use super::DbConn;

use diesel::prelude::*;
use models::Color;
use rocket::http::Status;
use rocket_contrib::json::Json;
use schema::colors;

#[get("/colors?<id>")]
pub fn get(id: Option<i32>, connection: DbConn) -> Result<Json<Vec<Color>>, Status> {
    let result = match id {
        Some(color_id) => colors::table.find(color_id).load::<Color>(&*connection),
        None => colors::table.load::<Color>(&*connection),
    };
    result.map(Json).map_err(error_status)
}
