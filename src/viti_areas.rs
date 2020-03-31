use crate::users::Auth;
use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, NewVitiArea, VitiArea, VitiAreaForm};
use crate::query_utils::IntoFirst;
use crate::schema::{purchases, regions, viti_areas, wines};
use crate::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::{BigInt, Double, Nullable};
use rocket_contrib::json::Json;
use serde::Serialize;
use typescript_definitions::TypeScriptify;
use validator::Validate;

#[get("/viti-areas?<id>&<name>&<region_name>&<region_id>")]
pub fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    region_name: Option<String>,
    region_id: Option<i32>,
    connection: DbConn,
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
        .load::<VitiArea>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
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
pub fn stats(
    auth: Auth,
    id: Option<i32>,
    region_id: Option<i32>,
    connection: DbConn,
) -> RestResult<Vec<VitiAreaStats>> {
    let mut query = viti_areas::table
        .select((
            viti_areas::id,
            viti_areas::name,
            // literal until diesel has better aggregation support
            sql::<BigInt>("count(wines.id)"),
            sql::<Nullable<Double>>("avg(purchases.price)"),
            sql::<Nullable<Double>>("avg(wines.rating)"),
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
        .load::<VitiAreaStats>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/viti-areas/top?<limit>")]
pub fn top(
    auth: Auth,
    limit: Option<usize>,
    connection: DbConn,
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
        connection
    )
}

#[post("/viti-areas", format = "json", data = "<viti_area_form>")]
pub fn post(
    auth: Auth,
    viti_area_form: Json<VitiAreaForm>,
    connection: DbConn,
) -> RestResult<VitiArea> {
    let viti_area_form = viti_area_form.into_inner();
    viti_area_form.validate()?;

    diesel::insert_into(viti_areas::table)
        .values(NewVitiArea::from((auth, viti_area_form)))
        .returning(viti_areas::id)
        .get_result(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|viti_area_id| {
            get(auth, Some(viti_area_id), None, None, None, connection)?
                .into_first("Newly-created viti area")
        })
}

#[put("/viti-areas/<id>", format = "json", data = "<viti_area_form>")]
pub fn put(
    auth: Auth,
    id: i32,
    viti_area_form: Json<VitiAreaForm>,
    connection: DbConn,
) -> RestResult<VitiArea> {
    let viti_area_form = viti_area_form.into_inner();
    viti_area_form.validate()?;

    // Validate this is the authorized user's viti area
    viti_areas::table
        .filter(viti_areas::id.eq(id))
        .filter(viti_areas::user_id.eq(auth.id))
        .select(viti_areas::id)
        .first::<i32>(&*connection)?;

    diesel::update(viti_areas::table.filter(viti_areas::id.eq(id)))
        .set(NewVitiArea::from((auth, viti_area_form)))
        .execute(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|_| {
            get(auth, Some(id), None, None, None, connection)?.into_first("Edited viti area")
        })
}
