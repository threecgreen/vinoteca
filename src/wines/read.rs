use crate::query_utils::error_status;
use crate::DbConn;

// use diesel::dsl::{max, sum};
use diesel::prelude::*;
use models::Wine;
use rocket::http::Status;
use rocket_contrib::json::Json;
use schema::{colors, producers, purchases, regions, viti_areas, wine_types, wines};

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
) -> Result<Json<Vec<Wine>>, Status> {
    // let max_date_subquery = wines::table
    //     .inner_join(purchases::table)
    //     .group_by(wines::id)
    //     // Assumes purchase id is increasing
    //     .select((wines::id, max(purchases::date).aliased("max_date")));
    // let last_purchase_subquery = purchases::table
    //     .inner_join(max_date_subquery.on(purchases::date.eq(max_date_subquery::max_date)))
    //     .group_by(wines::id)
    //     .select((wines::id, max(purchase::id).aliased("purchase_id")))
    //     .select((wines::id, purchases::date, purchases::quantity, purchases::price, purchases::vintage));
    // let total_quantity_subquery = wines::table
    //     .inner_join(purchases::table)
    //     .group_by(wines::id)
    //     .select((wines::id, sum(purchases::quantity)));

    let mut query = wines::table
        .inner_join(producers::table.inner_join(regions::table))
        .inner_join(colors::table)
        .inner_join(wine_types::table)
        // TODO: get most recent purchase
        // .left_join(purchases::table.group_by(purchases))
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
            viti_areas::name.nullable(),    // Left join
            wines::name,
            wines::wine_type_id,
            wine_types::name,
        ))
        .load::<Wine>(&*connection)
        // .and_then()
        .map(Json)
        .map_err(error_status)
}
