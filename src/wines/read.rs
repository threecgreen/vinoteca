use crate::query_utils::error_status;
use crate::DbConn;

// use diesel::dsl::{max, sum};
use diesel::prelude::*;
use diesel::sql_query;
use diesel::sql_types::{Integer, Nullable, Text};
use diesel::QueryableByName;
use models::Wine;
use rocket::http::Status;
use rocket_contrib::json::Json;
use schema::{colors, producers, purchases, regions, viti_areas, wine_types, wines};
use serde::Serialize;

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
            viti_areas::name.nullable(), // Left join
            wines::name,
            wines::wine_type_id,
            wine_types::name,
        ))
        .load::<Wine>(&*connection)
        // .and_then()
        .map(Json)
        .map_err(error_status)
}

#[derive(QueryableByName, Serialize, Debug)]
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
    vintage: i32,
    #[sql_type = "Integer"]
    last_purchase_date: i32,
    #[sql_type = "Integer"]
    inventory: i32,
    #[sql_type = "Integer"]
    last_purchase_price: i32,
}

#[get("/wines/inventory")]
pub fn inventory(connection: DbConn) -> Result<Json<Vec<InventoryWine>>, Status> {
    sql_query(
        r#"
        SELECT
            w.id
            , c.name AS color
            , w.name AS name
            , wt.id AS wine_type_id
            , wt.name AS wine_type
            , p.id AS producer_id
            , p.name AS producer
            , r.id AS region_id
            , r.name AS region
            , p3.vintage
            , max(pu.date) AS last_purchase_date
            , w.inventory AS inventory
            , p3.price AS last_purchase_price
        FROM wines w
            LEFT JOIN producers p ON w.producer_id = p.id
            LEFT JOIN regions r ON p.region_id = r.id
            LEFT JOIN colors c ON w.color_id = c.id
            LEFT JOIN wine_types wt ON w.wine_type_id = wt.id
            LEFT JOIN purchases pu ON w.id = pu.wine_id
            LEFT JOIN (
                SELECT
                    w2.id
                    , max(p2.date) as last_purchase_date
                FROM wines w2
                    INNER JOIN purchases p2 ON w2.id = p2.wine_id
                WHERE p2.vintage IS NOT NULL
                GROUP BY w2.id
            ) AS sub ON sub.id = w.id
            LEFT JOIN purchases p3 ON w.id = p3.wine_id
                AND (p3.date = sub.last_purchase_date
                    OR sub.last_purchase_date IS NULL)
        WHERE w.inventory > 0
        GROUP BY w.id
        ORDER BY sub.last_purchase_date DESC;
    "#,
    )
    .load::<InventoryWine>(&*connection)
    .map(Json)
    .map_err(error_status)
}
