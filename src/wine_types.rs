use super::query_utils::error_status;
use super::DbConn;

use diesel;
use diesel::prelude::*;
use models::{WineType, WineTypeForm};
use rocket::http::Status;
use rocket_contrib::json::Json;
use schema::{wine_types};

#[get("/wine-types?<id>&<name>")]
pub fn get(id: Option<i32>, name: Option<String>, connection: DbConn) -> Result<Json<Vec<WineType>>, Status> {
    let mut query = wine_types::table.into_boxed();
    if let Some(id) = id {
        query = query.filter(wine_types::id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(wine_types::name.eq(name));
    }
    query
        .load::<WineType>(&*connection)
        .map(Json)
        .map_err(error_status)
}

#[post("/wine-types", format = "json", data = "<wine_type_form>")]
pub fn post(wine_type_form: Json<WineTypeForm>, connection: DbConn) -> Result<Json<WineType>, Status> {
    let wine_type_form = wine_type_form.into_inner();
    diesel::insert_into(wine_types::table)
        .values(&wine_type_form)
        .execute(&*connection)
        .and_then(|_| {
            wine_types::table
                .filter(wine_types::name.eq((*wine_type_form.name).to_owned()))
                .first(&*connection)
                .map(Json)
        })
        .map_err(error_status)
}

#[put("/wine-types?<id>", format = "json", data = "<wine_type_form>")]
pub fn put(id: i32, wine_type_form: Json<WineTypeForm>, connection: DbConn) -> Result<Json<WineType>, Status> {
    let wine_type_form = wine_type_form.into_inner();
    diesel::update(wine_types::table.filter(wine_types::id.eq(id)))
        .set(wine_types::name.eq(wine_type_form.name))
        .execute(&*connection)
        .and_then(|_| {
            wine_types::table
                .filter(wine_types::id.eq(id))
                .first(&*connection)
                .map(Json)
        })
        .map_err(error_status)
}
