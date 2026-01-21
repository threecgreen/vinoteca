use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, Grape, GrapeForm, NewGrape};
use crate::query_utils::{DbConn, IntoFirst};
use crate::schema::{grapes, purchases, wine_grapes, wines};
use crate::users::Auth;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::BigInt;
use diesel_async::RunQueryDsl;
use rocket::serde::json::Json;
use rocket::{delete, get, post, put};
use validator::Validate;

#[get("/grapes?<id>&<name>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    mut connection: DbConn,
) -> RestResult<Vec<Grape>> {
    // Build query without boxed since group_by doesn't work well with boxed in diesel 2.x
    let base_query = grapes::table
        // Left to include grapes with no wine
        .left_join(wine_grapes::table.inner_join(wines::table))
        .filter(grapes::user_id.eq(auth.id));

    let results = match (id, name) {
        (Some(id), Some(name)) => {
            base_query
                .filter(grapes::id.eq(id))
                .filter(grapes::name.eq(name))
                .group_by((grapes::id, grapes::name))
                .select((grapes::id, grapes::name, sql::<BigInt>("count(wines.id)")))
                .load::<Grape>(&mut *connection)
                .await
        }
        (Some(id), None) => {
            base_query
                .filter(grapes::id.eq(id))
                .group_by((grapes::id, grapes::name))
                .select((grapes::id, grapes::name, sql::<BigInt>("count(wines.id)")))
                .load::<Grape>(&mut *connection)
                .await
        }
        (None, Some(name)) => {
            base_query
                .filter(grapes::name.eq(name))
                .group_by((grapes::id, grapes::name))
                .select((grapes::id, grapes::name, sql::<BigInt>("count(wines.id)")))
                .load::<Grape>(&mut *connection)
                .await
        }
        (None, None) => {
            base_query
                .group_by((grapes::id, grapes::name))
                .select((grapes::id, grapes::name, sql::<BigInt>("count(wines.id)")))
                .load::<Grape>(&mut *connection)
                .await
        }
    };

    results.map(Json).map_err(VinotecaError::from)
}

#[get("/grapes/top?<limit>")]
pub async fn top(
    auth: Auth,
    limit: Option<usize>,
    mut connection: DbConn,
) -> RestResult<Vec<generic::TopEntity>> {
    let limit = limit.unwrap_or(10);
    top_table!(
        grapes::table
            .inner_join(wine_grapes::table.inner_join(wines::table.inner_join(purchases::table)))
            .filter(grapes::user_id.eq(auth.id)),
        grapes::id,
        grapes::name,
        limit,
        &mut *connection
    )
}

#[post("/grapes", format = "json", data = "<grape_form>")]
pub async fn post(
    auth: Auth,
    grape_form: Json<GrapeForm<'_>>,
    mut connection: DbConn,
) -> RestResult<Grape> {
    let grape_form = grape_form.into_inner();
    grape_form.validate()?;

    let grape_id: i32 = diesel::insert_into(grapes::table)
        .values(NewGrape::from((auth, grape_form)))
        .returning(grapes::id)
        .get_result(&mut *connection)
        .await
        .map_err(VinotecaError::from)?;

    // Query the newly created grape
    grapes::table
        .left_join(wine_grapes::table.inner_join(wines::table))
        .filter(grapes::user_id.eq(auth.id))
        .filter(grapes::id.eq(grape_id))
        .group_by((grapes::id, grapes::name))
        .select((grapes::id, grapes::name, sql::<BigInt>("count(wines.id)")))
        .load::<Grape>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)?
        .into_first("Newly-created grape")
}

#[put("/grapes/<id>", format = "json", data = "<grape_form>")]
pub async fn put(
    auth: Auth,
    id: i32,
    grape_form: Json<GrapeForm<'_>>,
    mut connection: DbConn,
) -> RestResult<Grape> {
    let grape_form = grape_form.into_inner();
    grape_form.validate()?;

    // Verify grape exists and belongs to user
    grapes::table
        .filter(grapes::id.eq(id))
        .filter(grapes::user_id.eq(auth.id))
        .select(grapes::id)
        .first::<i32>(&mut *connection)
        .await?;

    diesel::update(grapes::table.filter(grapes::id.eq(id)))
        .set(grapes::name.eq(grape_form.name))
        .execute(&mut *connection)
        .await
        .map_err(VinotecaError::from)?;

    // Query the updated grape
    grapes::table
        .left_join(wine_grapes::table.inner_join(wines::table))
        .filter(grapes::user_id.eq(auth.id))
        .filter(grapes::id.eq(id))
        .group_by((grapes::id, grapes::name))
        .select((grapes::id, grapes::name, sql::<BigInt>("count(wines.id)")))
        .load::<Grape>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)?
        .into_first("Edited grape")
}

#[delete("/grapes/<id>")]
pub async fn delete(auth: Auth, id: i32, mut connection: DbConn) -> RestResult<()> {
    diesel::delete(
        grapes::table
            .filter(grapes::id.eq(id))
            .filter(grapes::user_id.eq(auth.id)),
    )
    .execute(&mut *connection)
    .await
    .map(|_| Json(()))
    .map_err(VinotecaError::from)
}
