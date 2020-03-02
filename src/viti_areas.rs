use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, VitiArea, VitiAreaForm};
use crate::schema::{purchases, regions, viti_areas, wines};
use crate::DbConn;

use diesel;
use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::{Float, Integer, Nullable};
use rocket_contrib::json::Json;
use serde::Serialize;
use typescript_definitions::TypeScriptify;
use validator::Validate;

#[get("/viti-areas?<id>&<name>&<region_name>")]
pub fn get(
    id: Option<i32>,
    name: Option<String>,
    region_name: Option<String>,
    connection: DbConn,
) -> RestResult<Vec<VitiArea>> {
    // Inner join because viti areas must have a region id
    let mut query = viti_areas::table.inner_join(regions::table).into_boxed();
    if let Some(id) = id {
        query = query.filter(viti_areas::id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(viti_areas::name.eq(name));
    }
    if let Some(region_name) = region_name {
        query = query.filter(regions::name.eq(region_name));
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
    total_wines: i32,
    avg_price: Option<f32>,
    avg_rating: Option<f32>,
}

#[get("/viti-areas/stats?<id>&<region_id>")]
pub fn stats(
    id: Option<i32>,
    region_id: Option<i32>,
    connection: DbConn,
) -> RestResult<Vec<VitiAreaStats>> {
    let mut query = viti_areas::table
        .select((
            viti_areas::id,
            viti_areas::name,
            // literal until diesel has better aggregation support
            sql::<Integer>("count(wines.id)"),
            sql::<Nullable<Float>>("avg(purchases.price)"),
            sql::<Nullable<Float>>("avg(wines.rating)"),
        ))
        .inner_join(regions::table)
        .inner_join(wines::table.inner_join(purchases::table))
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
pub fn top(limit: Option<usize>, connection: DbConn) -> RestResult<Vec<generic::TopEntity>> {
    let limit = limit.unwrap_or(10);
    top_table!(
        viti_areas::table.inner_join(wines::table.inner_join(purchases::table)),
        viti_areas::id,
        viti_areas::name,
        limit,
        connection
    )
}

#[post("/viti-areas", format = "json", data = "<viti_area_form>")]
pub fn post(viti_area_form: Json<VitiAreaForm>, connection: DbConn) -> RestResult<VitiArea> {
    let viti_area_form = viti_area_form.into_inner();
    viti_area_form.validate()?;

    connection.set_timeout(1_000)?;
    diesel::insert_into(viti_areas::table)
        .values(&viti_area_form)
        .execute(&*connection)
        .and_then(|_| {
            viti_areas::table
                .inner_join(regions::table)
                .filter(viti_areas::name.eq((*viti_area_form.name).to_owned()))
                .filter(regions::id.eq(viti_area_form.region_id))
                .select((viti_areas::id, viti_areas::name, regions::id, regions::name))
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from)
}

#[put("/viti-areas/<id>", format = "json", data = "<viti_area_form>")]
pub fn put(
    id: i32,
    viti_area_form: Json<VitiAreaForm>,
    connection: DbConn,
) -> RestResult<VitiArea> {
    let viti_area_form = viti_area_form.into_inner();
    viti_area_form.validate()?;

    connection.set_timeout(1_000)?;
    diesel::update(viti_areas::table.filter(viti_areas::id.eq(id)))
        .set(viti_area_form)
        .execute(&*connection)
        .and_then(|_| {
            viti_areas::table
                .inner_join(regions::table)
                .filter(viti_areas::id.eq(id))
                .select((viti_areas::id, viti_areas::name, regions::id, regions::name))
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from)
}