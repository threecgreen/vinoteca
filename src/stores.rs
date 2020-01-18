use super::models::{Store, StoreForm};
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

#[post("/stores", format = "json", data = "<store_form>")]
pub fn post(store_form: Json<StoreForm>, connection: DbConn) -> Result<Json<Store>, Status> {
    let store_form = store_form.into_inner();
    diesel::insert_into(stores::table)
        .values(&store_form)
        .execute(&*connection)
        .and_then(|_| {
            stores::table
                .filter(stores::name.eq((*store_form.name).to_owned()))
                .first(&*connection)
                .map(Json)
        })
        .map_err(error_status)
}
