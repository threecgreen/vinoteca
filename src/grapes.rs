use crate::auth::Auth;
use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, Grape, GrapeForm, NewGrape};
use crate::query_utils::IntoFirst;
use crate::schema::{grapes, purchases, wine_grapes, wines};
use crate::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::{Float, Integer};
use rocket_contrib::json::Json;
use validator::Validate;

#[get("/grapes?<id>&<name>")]
pub fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    connection: DbConn,
) -> RestResult<Vec<Grape>> {
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
pub fn top(
    auth: Auth,
    limit: Option<usize>,
    connection: DbConn,
) -> RestResult<Vec<generic::TopEntity>> {
    let limit = limit.unwrap_or(10);
    top_table!(
        grapes::table
            .inner_join(wine_grapes::table.inner_join(wines::table.inner_join(purchases::table)))
            .filter(grapes::user_id.eq(auth.id)),
        grapes::id,
        grapes::name,
        limit,
        connection
    )
}

#[post("/grapes", format = "json", data = "<grape_form>")]
pub fn post(auth: Auth, grape_form: Json<GrapeForm>, connection: DbConn) -> RestResult<Grape> {
    let grape_form = grape_form.into_inner();
    grape_form.validate()?;
    let grape_name = grape_form.name.to_owned();

    diesel::insert_into(grapes::table)
        .values(NewGrape::from((auth, grape_form)))
        .returning(grapes::id)
        .get_result(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|grape_id| {
            get(auth, Some(grape_id), None, connection)?.into_first("Newly-created grape")
        })
}

#[put("/grapes/<id>", format = "json", data = "<grape_form>")]
pub fn put(
    auth: Auth,
    id: i32,
    grape_form: Json<GrapeForm>,
    connection: DbConn,
) -> RestResult<Grape> {
    let grape_form = grape_form.into_inner();
    grape_form.validate()?;

    grapes::table
        .filter(grapes::id.eq(id))
        .filter(grapes::user_id.eq(auth.id))
        .select(grapes::id)
        .first::<i32>(&*connection)?;

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
