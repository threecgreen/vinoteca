use super::query_utils::error_status;
use super::DbConn;

use diesel::prelude::*;
use models::Store;
use rocket::http::Status;
use rocket_contrib::json::Json;
use schema::stores;

#[get("/stores?<id>")]
pub fn get(id: Option<i32>, connection: DbConn) -> Result<Json<Vec<Store>>, Status> {
    let result = match id {
        Some(store_id) => stores::table.find(store_id).load::<Store>(&*connection),
        None => stores::table.load::<Store>(&*connection),
    };
    result.map(Json).map_err(error_status)
}
