use super::error::{RestResult, VinotecaError};
use super::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::Integer;
use models::{Grape, GrapeForm};
use rocket_contrib::json::Json;
use schema::{grapes, wine_grapes, wines};

#[get("/grapes?<id>&<name>")]
pub fn get(id: Option<i32>, name: Option<String>, connection: DbConn) -> RestResult<Vec<Grape>> {
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
        .map_err(VinotecaError::from)
}

#[post("/grapes", format = "json", data = "<grape_form>")]
pub fn post(grape_form: Json<GrapeForm>, connection: DbConn) -> RestResult<Grape> {
    let grape_form = grape_form.into_inner();
    let grape_name = grape_form.name.to_owned();
    diesel::insert_into(grapes::table)
        .values(grape_form)
        .execute(&*connection)?;
    get(None, Some(grape_name), connection)
        .and_then(|grapes| {
            grapes
                .get(0)
                .map(|g| g.to_owned())
                .ok_or_else(|| VinotecaError::Internal("Couldn't find inserted grape".to_owned()))
        })
        .map(Json)
}

#[put("/grapes/<id>", format = "json", data = "<grape_form>")]
pub fn put(id: i32, grape_form: Json<GrapeForm>, connection: DbConn) -> RestResult<Grape> {
    let grape_form = grape_form.into_inner();
    diesel::update(grapes::table.filter(grapes::id.eq(id)))
        .set(grapes::name.eq(grape_form.name))
        .execute(&*connection)
        .and_then(|_| {
            grapes::table
                .inner_join(wine_grapes::table.inner_join(wines::table))
                .filter(grapes::id.eq(id))
                .group_by((grapes::id, grapes::name))
                .select((grapes::id, grapes::name, sql::<Integer>("count(wines.id)")))
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from)
}
