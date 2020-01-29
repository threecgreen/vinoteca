use crate::error::{RestResult, VinotecaError};
use crate::models::Wine;
use crate::schema::{colors, producers, purchases, regions, viti_areas, wine_types, wines};
use crate::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_query;
use diesel::sql_types::{Integer, Nullable, Text};
use diesel::QueryableByName;
use rocket_contrib::json::Json;
use serde::Serialize;
use typescript_definitions::TypeScriptify;

fn add_wildcards(query: &str) -> String {
    format!("%{}%", query)
}

/// Contains all information used in the wine table
#[get("/wines?<id>&<producer_id>&<region_id>&<viti_area_id>&<wine_type_id>&<color>&<wine_type>&<producer>&<region>&<viti_area>")]
pub fn get(
    // Exact match parameters
    id: Option<i32>,
    producer_id: Option<i32>,
    region_id: Option<i32>,
    viti_area_id: Option<i32>,
    wine_type_id: Option<i32>,
    // Fuzzy parameters for search
    color: Option<String>,
    wine_type: Option<String>,
    producer: Option<String>,
    region: Option<String>,
    viti_area: Option<String>,

    connection: DbConn,
) -> RestResult<Vec<Wine>> {
    let mut query = wines::table
        .inner_join(producers::table.inner_join(regions::table))
        .inner_join(colors::table)
        .inner_join(wine_types::table)
        .left_join(purchases::table)
        .left_join(viti_areas::table)
        .into_boxed();
    if let Some(id) = id {
        query = query.filter(wines::id.eq(id));
    }
    if let Some(producer_id) = producer_id {
        query = query.filter(wines::producer_id.eq(producer_id));
    }
    if let Some(region_id) = region_id {
        query = query.filter(producers::region_id.eq(region_id));
    }
    if let Some(viti_area_id) = viti_area_id {
        query = query.filter(wines::viti_area_id.eq(viti_area_id));
    }
    if let Some(wine_type_id) = wine_type_id {
        query = query.filter(wines::wine_type_id.eq(wine_type_id));
    }
    if let Some(color) = color {
        query = query.filter(colors::name.like(add_wildcards(&color)));
    }
    if let Some(wine_type) = wine_type {
        query = query.filter(wine_types::name.like(add_wildcards(&wine_type)));
    }
    if let Some(producer) = producer {
        query = query.filter(producers::name.like(add_wildcards(&producer)));
    }
    if let Some(region) = region {
        query = query.filter(regions::name.like(add_wildcards(&region)));
    }
    if let Some(viti_area) = viti_area {
        query = query.filter(viti_areas::name.like(add_wildcards(&viti_area)));
    }

    query
        .group_by((
            wines::id,
            wines::description,
            wines::notes,
            wines::rating,
            wines::inventory,
            wines::why,
            wines::color_id,
            colors::name,
            wines::producer_id,
            producers::name,
            producers::region_id,
            regions::name,
            wines::viti_area_id,
            viti_areas::name,
            wines::name,
            wines::wine_type_id,
            wine_types::name,
        ))
        .select((
            wines::id,
            wines::description,
            wines::notes,
            wines::rating,
            wines::inventory,
            wines::why,
            wines::color_id,
            colors::name,
            wines::producer_id,
            producers::name,
            producers::region_id,
            regions::name,
            wines::viti_area_id,
            viti_areas::name.nullable(), // Left join
            wines::name,
            wines::wine_type_id,
            wine_types::name,
            sql::<Nullable<Integer>>("max(purchases.vintage)"),
        ))
        .load::<Wine>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

#[derive(QueryableByName, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct InventoryWine {
    #[sql_type = "Integer"]
    id: i32,
    #[sql_type = "Text"]
    color: String,
    #[sql_type = "Nullable<Text>"]
    name: Option<String>,
    #[sql_type = "Integer"]
    wine_type_id: i32,
    #[sql_type = "Text"]
    wine_type: String,
    #[sql_type = "Integer"]
    producer_id: i32,
    #[sql_type = "Text"]
    producer: String,
    #[sql_type = "Integer"]
    region_id: i32,
    #[sql_type = "Text"]
    region: String,
    #[sql_type = "Integer"]
    last_purchase_vintage: i32,
    #[sql_type = "Integer"]
    last_purchase_date: i32,
    #[sql_type = "Integer"]
    inventory: i32,
    #[sql_type = "Integer"]
    last_purchase_price: i32,
}

#[get("/wines/inventory")]
pub fn inventory(connection: DbConn) -> RestResult<Vec<InventoryWine>> {
    sql_query(include_str!("inventory.sql"))
        .load::<InventoryWine>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

fn wrap_in_wildcards(filter_str: &str) -> String {
    format!("%{}%", filter_str)
}

#[get("/wines/search?<color_like>&<wine_type_like>&<producer_like>&<region_like>&<viti_area_like>")]
pub fn search(
    color_like: Option<String>,
    wine_type_like: Option<String>,
    producer_like: Option<String>,
    region_like: Option<String>,
    viti_area_like: Option<String>,
    connection: DbConn,
) -> RestResult<Vec<Wine>> {
    let mut query = wines::table
        .inner_join(producers::table.inner_join(regions::table))
        .inner_join(colors::table)
        .inner_join(wine_types::table)
        .left_join(purchases::table)
        .left_join(viti_areas::table)
        .into_boxed();
    if let Some(color_like) = color_like {
        query = query.filter(colors::name.like(wrap_in_wildcards(&color_like)));
    }
    if let Some(wine_type_like) = wine_type_like {
        query = query.filter(wine_types::name.like(wrap_in_wildcards(&wine_type_like)));
    }
    if let Some(producer_like) = producer_like {
        query = query.filter(producers::name.like(wrap_in_wildcards(&producer_like)));
    }
    if let Some(region_like) = region_like {
        query = query.filter(regions::name.like(wrap_in_wildcards(&region_like)));
    }
    if let Some(viti_area_like) = viti_area_like {
        query = query.filter(viti_areas::name.like(wrap_in_wildcards(&viti_area_like)));
    }
    query
        .group_by((
            wines::id,
            wines::description,
            wines::notes,
            wines::rating,
            wines::inventory,
            wines::why,
            wines::color_id,
            colors::name,
            wines::producer_id,
            producers::name,
            producers::region_id,
            regions::name,
            wines::viti_area_id,
            viti_areas::name,
            wines::name,
            wines::wine_type_id,
            wine_types::name,
        ))
        .select((
            wines::id,
            wines::description,
            wines::notes,
            wines::rating,
            wines::inventory,
            wines::why,
            wines::color_id,
            colors::name,
            wines::producer_id,
            producers::name,
            producers::region_id,
            regions::name,
            wines::viti_area_id,
            viti_areas::name.nullable(), // Left join
            wines::name,
            wines::wine_type_id,
            wine_types::name,
            sql::<Nullable<Integer>>("max(purchases.vintage)"),
        ))
        .load::<Wine>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}
