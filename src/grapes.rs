use rocket::serde::json::Json;
use rocket_db_pools::diesel::{dsl::count_star, prelude::*};
use rocket_db_pools::Connection;
use validator::Validate;

use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, Grape, GrapeForm, NewGrape};
use crate::query_utils::IntoFirst;
use crate::schema::{grapes, purchases, wine_grapes, wines};
use crate::users::Auth;
use crate::Db;

#[get("/grapes?<id>&<name>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    mut conn: Connection<Db>,
) -> RestResult<Vec<Grape>> {
    let mut query = grapes::table
        // Left to include grapes with no wine
        .left_outer_join(wine_grapes::table.inner_join(wines::table))
        .filter(grapes::user_id.eq(auth.id))
        .group_by((grapes::id, grapes::name))
        .select((grapes::id, grapes::name, count_star()))
        .into_boxed();
    if let Some(id) = id {
        query = query.filter(grapes::id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(grapes::name.eq(name));
    }
    query
        .load::<Grape>(&mut **conn)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/grapes/top?<limit>")]
pub async fn top(
    auth: Auth,
    limit: Option<usize>,
    mut conn: Connection<Db>,
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
}

#[post("/grapes", format = "json", data = "<grape_form>")]
pub async fn post(
    auth: Auth,
    grape_form: Json<GrapeForm>,
    mut conn: Connection<Db>,
) -> RestResult<Grape> {
    let grape_form = grape_form.into_inner();
    grape_form.validate()?;

    let grape_id = diesel::insert_into(grapes::table)
        .values(NewGrape::from((auth, grape_form)))
        .returning(grapes::id)
        .get_result(&mut **conn)
        .await
        .map_err(VinotecaError::from)?;

    get(auth, Some(grape_id), None, conn)
        .await?
        .into_first("Newly-created grape")
}

#[put("/grapes/<id>", format = "json", data = "<grape_form>")]
pub async fn put<'r>(
    auth: Auth,
    id: i32,
    grape_form: Json<GrapeForm>,
    mut conn: Connection<Db>,
) -> RestResult<Grape> {
    let grape_form = grape_form.into_inner();
    grape_form.validate()?;

    grapes::table
        .filter(grapes::id.eq(id))
        .filter(grapes::user_id.eq(auth.id))
        .select(grapes::id)
        .first::<i32>(&mut **conn)
        .await?;

    diesel::update(grapes::table.filter(grapes::id.eq(id)))
        .set(grapes::name.eq(grape_form.name))
        .execute(&mut **conn)
        .await
        .map_err(VinotecaError::from)?;

    get(auth, Some(id), None, conn)
        .await?
        .into_first("Edited grape")
}

#[delete("/grapes/<id>")]
pub async fn delete(auth: Auth, id: i32, mut conn: Connection<Db>) -> RestResult<()> {
    diesel::delete(
        grapes::table
            .filter(grapes::id.eq(id))
            .filter(grapes::user_id.eq(auth.id)),
    )
    .execute(&mut **conn)
    .await
    .map(|_| Json(()))
    .map_err(VinotecaError::from)
}
