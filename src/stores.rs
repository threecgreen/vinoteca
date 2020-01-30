use crate::error::{RestResult, VinotecaError};
use crate::models::{Store, StoreForm};
use crate::schema::stores;
use crate::DbConn;

use diesel::prelude::*;
use rocket_contrib::json::Json;

#[get("/stores?<id>&<name>")]
pub fn get(id: Option<i32>, name: Option<String>, connection: DbConn) -> RestResult<Vec<Store>> {
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
        .map_err(VinotecaError::from)
}

#[post("/stores", format = "json", data = "<store_form>")]
pub fn post(store_form: Json<StoreForm>, connection: DbConn) -> RestResult<Store> {
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
        .map_err(VinotecaError::from)
}
