use super::query_utils::error_status;
use super::DbConn;

use diesel::prelude::*;
use models::{Grape, GrapeForm};
use rocket::http::Status;
use rocket_contrib::json::Json;
use schema::grapes;

#[get("/grapes?<id>&<name>")]
pub fn get(
    id: Option<i32>,
    name: Option<String>,
    connection: DbConn,
) -> Result<Json<Vec<Grape>>, Status> {
    let mut query = grapes::table.into_boxed();
    if let Some(id) = id {
        query = query.filter(grapes::id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(grapes::name.eq(name));
    }
    query
        .load::<Grape>(&*connection)
        .map(Json)
        .map_err(error_status)
}

#[put("/grapes", format = "json", data = "<grape_form>")]
pub fn put(grape_form: Json<GrapeForm>, connection: DbConn) -> Result<Json<Grape>, Status> {
    let grape_form = grape_form.into_inner();
    diesel::update(grapes::table.filter(grapes::id.eq(grape_form.id)))
        .set(grapes::name.eq(grape_form.name))
        .execute(&*connection)
        .and_then(|_| {
            grapes::table
                .filter(grapes::id.eq(grape_form.id))
                .first(&*connection)
                .map(Json)
        })
        .map_err(error_status)
}
