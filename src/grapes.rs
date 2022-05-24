use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, Grape, GrapeForm, NewGrape};
use crate::query_utils::IntoFirst;
use crate::schema::{grapes, purchases, wine_grapes, wines};
use crate::users::Auth;
use crate::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::BigInt;
use rocket::serde::json::Json;
use validator::Validate;

#[get("/grapes?<id>&<name>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    conn: DbConn,
) -> RestResult<Vec<Grape>> {
    conn.run(move |c| {
        let mut query = grapes::table
            // Left to include grapes with no wine
            .left_join(wine_grapes::table.inner_join(wines::table))
            .filter(grapes::user_id.eq(auth.id))
            .group_by((grapes::id, grapes::name))
            .into_boxed();
        if let Some(id) = id {
            query = query.filter(grapes::id.eq(id));
        }
        if let Some(name) = name {
            query = query.filter(grapes::name.eq(name));
        }
        query
            .select((grapes::id, grapes::name, sql::<BigInt>("count(wines.id)")))
            .load::<Grape>(c)
            .map(Json)
            .map_err(VinotecaError::from)
    })
    .await
}

#[get("/grapes/top?<limit>")]
pub async fn top(
    auth: Auth,
    limit: Option<usize>,
    conn: DbConn,
) -> RestResult<Vec<generic::TopEntity>> {
    let limit = limit.unwrap_or(10);
    top_table!(
        grapes::table
            .inner_join(wine_grapes::table.inner_join(wines::table.inner_join(purchases::table)))
            .filter(grapes::user_id.eq(auth.id)),
        grapes::id,
        grapes::name,
        limit,
        conn
    )
    .await
}

#[post("/grapes", format = "json", data = "<grape_form>")]
pub async fn post(auth: Auth, grape_form: Json<GrapeForm>, conn: DbConn) -> RestResult<Grape> {
    let grape_form = grape_form.into_inner();
    grape_form.validate()?;

    let grape_id = conn
        .run(move |c| {
            diesel::insert_into(grapes::table)
                .values(NewGrape::from((auth, grape_form)))
                .returning(grapes::id)
                .get_result(c)
                .map_err(VinotecaError::from)
        })
        .await?;

    get(auth, Some(grape_id), None, conn)
        .await?
        .into_first("Newly-created grape")
}

#[put("/grapes/<id>", format = "json", data = "<grape_form>")]
pub async fn put<'r>(
    auth: Auth,
    id: i32,
    grape_form: Json<GrapeForm>,
    conn: DbConn,
) -> RestResult<Grape> {
    let grape_form = grape_form.into_inner();
    grape_form.validate()?;

    conn.run(move |c| {
        grapes::table
            .filter(grapes::id.eq(id))
            .filter(grapes::user_id.eq(auth.id))
            .select(grapes::id)
            .first::<i32>(c)?;

        diesel::update(grapes::table.filter(grapes::id.eq(id)))
            .set(grapes::name.eq(grape_form.name))
            .execute(c)
            .map_err(VinotecaError::from)
    })
    .await?;

    get(auth, Some(id), None, conn)
        .await?
        .into_first("Edited grape")
}

#[delete("/grapes/<id>")]
pub async fn delete(auth: Auth, id: i32, conn: DbConn) -> RestResult<()> {
    conn.run(move |c| {
        diesel::delete(
            grapes::table
                .filter(grapes::id.eq(id))
                .filter(grapes::user_id.eq(auth.id)),
        )
        .execute(c)
        .map(|_| Json(()))
        .map_err(VinotecaError::from)
    })
    .await
}
