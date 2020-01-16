use super::models::Store;
use super::query_utils::error_status;
use super::schema::stores;
use super::DbConn;

use diesel::prelude::*;
use rocket::http::Status;
use rocket_contrib::json::Json;

#[get("/stores?<id>&<name>")]
pub fn get(id: Option<i32>, name: Option<String>, connection: DbConn) -> Result<Json<Vec<Store>>, Status> {
    let mut query = stores::table.into_boxed();
    if let Some(id) = id {
        query = query.filter(stores::id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(stores::name.eq(name));
    }
    query
        .load::<Store>(&*connection)
        .map(Json)
        .map_err(error_status)
}
