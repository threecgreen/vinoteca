use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, NewVitiArea, VitiArea, VitiAreaForm};
use crate::query_utils::{DbConn, IntoFirst};
use crate::schema::{purchases, regions, viti_areas, wines};
use crate::users::Auth;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::{BigInt, Double, Nullable};
use diesel_async::RunQueryDsl;
use rocket::serde::json::Json;
use rocket::{get, post, put};
use serde::Serialize;
use typescript_definitions::TypeScriptify;
use validator::Validate;

#[get("/viti-areas?<id>&<name>&<region_name>&<region_id>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    region_name: Option<String>,
    region_id: Option<i32>,
    mut connection: DbConn,
) -> RestResult<Vec<VitiArea>> {
    // Inner join because viti areas must have a region id
    let mut query = viti_areas::table
        .inner_join(regions::table)
        .filter(viti_areas::user_id.eq(auth.id))
        .into_boxed();
    if let Some(id) = id {
        query = query.filter(viti_areas::id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(viti_areas::name.eq(name));
    }
    if let Some(region_name) = region_name {
        query = query.filter(regions::name.eq(region_name));
    }
    if let Some(region_id) = region_id {
        query = query.filter(regions::id.eq(region_id));
    }
    query
        .select((viti_areas::id, viti_areas::name, regions::id, regions::name))
        .load::<VitiArea>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/viti-areas/<id>")]
pub async fn get_one(auth: Auth, id: i32, mut connection: DbConn) -> RestResult<VitiArea> {
    viti_areas::table
        .inner_join(regions::table)
        .filter(viti_areas::user_id.eq(auth.id))
        .filter(viti_areas::id.eq(id))
        .select((viti_areas::id, viti_areas::name, regions::id, regions::name))
        .load::<VitiArea>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)?
        .into_first(&format!("No viticultural area with id {}", id))
}

#[derive(Queryable, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct VitiAreaStats {
    id: i32,
    name: String,
    total_wines: i64,
    avg_price: Option<f64>,
    avg_rating: Option<f64>,
}

#[get("/viti-areas/stats?<id>&<region_id>")]
pub async fn stats(
    auth: Auth,
    id: Option<i32>,
    region_id: Option<i32>,
    mut connection: DbConn,
) -> RestResult<Vec<VitiAreaStats>> {
    let mut query = viti_areas::table
        .select((
            viti_areas::id,
            viti_areas::name,
            // literal until diesel has better aggregation support
            sql::<BigInt>("count(wines.id)"),
            sql::<Nullable<Double>>("cast(avg(purchases.price) AS DOUBLE PRECISION)"),
            sql::<Nullable<Double>>("cast(avg(wines.rating) AS DOUBLE PRECISION)"),
        ))
        .inner_join(regions::table)
        .inner_join(wines::table.inner_join(purchases::table))
        .filter(viti_areas::user_id.eq(auth.id))
        .group_by((viti_areas::id, viti_areas::name))
        .into_boxed();
    if let Some(id) = id {
        query = query.filter(viti_areas::id.eq(id));
    }
    if let Some(region_id) = region_id {
        query = query.filter(regions::id.eq(region_id));
    }
    query
        .load::<VitiAreaStats>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/viti-areas/top?<limit>")]
pub async fn top(
    auth: Auth,
    limit: Option<usize>,
    mut connection: DbConn,
) -> RestResult<Vec<generic::TopEntity>> {
    let limit = limit.unwrap_or(10);
    top_table!(
        viti_areas::table
            .inner_join(wines::table.inner_join(purchases::table))
            .filter(viti_areas::user_id.eq(auth.id))
            .filter(wines::user_id.eq(auth.id)),
        viti_areas::id,
        viti_areas::name,
        limit,
        &mut *connection
    )
}

#[post("/viti-areas", format = "json", data = "<viti_area_form>")]
pub async fn post(
    auth: Auth,
    viti_area_form: Json<VitiAreaForm<'_>>,
    mut connection: DbConn,
) -> RestResult<VitiArea> {
    let viti_area_form = viti_area_form.into_inner();
    viti_area_form.validate()?;

    let viti_area_id: i32 = diesel::insert_into(viti_areas::table)
        .values(NewVitiArea::from((auth, viti_area_form)))
        .returning(viti_areas::id)
        .get_result(&mut *connection)
        .await
        .map_err(VinotecaError::from)?;

    // Query the newly created viti area
    viti_areas::table
        .inner_join(regions::table)
        .filter(viti_areas::user_id.eq(auth.id))
        .filter(viti_areas::id.eq(viti_area_id))
        .select((viti_areas::id, viti_areas::name, regions::id, regions::name))
        .load::<VitiArea>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)?
        .into_first("Newly-created viti area")
}

#[put("/viti-areas/<id>", format = "json", data = "<viti_area_form>")]
pub async fn put(
    auth: Auth,
    id: i32,
    viti_area_form: Json<VitiAreaForm<'_>>,
    mut connection: DbConn,
) -> RestResult<VitiArea> {
    let viti_area_form = viti_area_form.into_inner();
    viti_area_form.validate()?;

    // Validate this is the authorized user's viti area
    viti_areas::table
        .filter(viti_areas::id.eq(id))
        .filter(viti_areas::user_id.eq(auth.id))
        .select(viti_areas::id)
        .first::<i32>(&mut *connection)
        .await?;

    diesel::update(viti_areas::table.filter(viti_areas::id.eq(id)))
        .set(NewVitiArea::from((auth, viti_area_form)))
        .execute(&mut *connection)
        .await
        .map_err(VinotecaError::from)?;

    // Query the updated viti area
    viti_areas::table
        .inner_join(regions::table)
        .filter(viti_areas::user_id.eq(auth.id))
        .filter(viti_areas::id.eq(id))
        .select((viti_areas::id, viti_areas::name, regions::id, regions::name))
        .load::<VitiArea>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)?
        .into_first("Edited viti area")
}
