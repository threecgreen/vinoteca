use crate::auth::Auth;
use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, Grape, NewGrape};
use crate::query_utils::IntoFirst;
use crate::schema::{grapes, purchases, wine_grapes, wines};
use crate::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::{Float, Integer};
use rocket_contrib::json::Json;
use validator::Validate;

#[get("/grapes?<id>&<name>")]
pub fn get(auth: Auth, id: Option<i32>, name: Option<String>, connection: DbConn) -> RestResult<Vec<Grape>> {
    let mut query = grapes::table
        // Left to include grapes with no wine
        .left_join(wine_grapes::table.inner_join(wines::table))
        .filter(wines::user_id.eq(auth.id))
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

#[get("/grapes/top?<limit>")]
pub fn top(auth: Auth, limit: Option<usize>, connection: DbConn) -> RestResult<Vec<generic::TopEntity>> {
    let limit = limit.unwrap_or(10);
    // FIXME: filter by user
    top_table!(
        grapes::table
            .inner_join(wine_grapes::table.inner_join(wines::table.inner_join(purchases::table))),
        grapes::id,
        grapes::name,
        limit,
        connection
    )
}

#[post("/grapes", format = "json", data = "<grape_form>")]
pub fn post(auth: Auth, grape_form: Json<NewGrape>, connection: DbConn) -> RestResult<Grape> {
    let grape_form = grape_form.into_inner();
    grape_form.validate()?;
    let grape_name = grape_form.name.to_owned();

    diesel::insert_into(grapes::table)
        .values(grape_form)
        .execute(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|_| get(auth, None, Some(grape_name), connection)?.into_first("Newly-created grape"))
}

#[put("/grapes/<id>", format = "json", data = "<grape_form>")]
pub fn put(id: i32, grape_form: Json<NewGrape>, connection: DbConn) -> RestResult<Grape> {
    let grape_form = grape_form.into_inner();
    grape_form.validate()?;

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
