use super::query_utils::error_status;
use super::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::Integer;
use models::{Grape, GrapeForm};
use rocket::http::Status;
use rocket_contrib::json::Json;
use schema::{grapes, wine_grapes, wines};

#[get("/grapes?<id>&<name>")]
pub fn get(
    id: Option<i32>,
    name: Option<String>,
    connection: DbConn,
) -> Result<Json<Vec<Grape>>, Status> {
    let mut query = grapes::table
        .inner_join(wine_grapes::table.inner_join(wines::table))
        .group_by((grapes::id, grapes::name))
        .into_boxed();
    if let Some(id) = id {
        query = query.filter(grapes::id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(grapes::name.eq(name));
    }
    query
        .select((grapes::id, grapes::name, sql::<Integer>("count(wines.id)")))
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
                .inner_join(wine_grapes::table.inner_join(wines::table))
                .filter(grapes::id.eq(grape_form.id))
                .group_by((grapes::id, grapes::name))
                .select((grapes::id, grapes::name, sql::<Integer>("count(wines.id)")))
                .first(&*connection)
                .map(Json)
        })
        .map_err(error_status)
}
