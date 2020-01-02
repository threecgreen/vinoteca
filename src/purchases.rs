use super::DbConn;
use query_utils::error_status;
use schema::{producers, purchases, regions, stores, wine_types, wines};

use diesel;
use diesel::prelude::*;
use models::{Purchase, PurchaseForm};
use rocket::http::Status;
use rocket_contrib::json::Json;
use serde::Serialize;

#[get("/purchases?<id>&<wine_id>&<wine_name>")]
pub fn get(
    id: Option<i32>,
    wine_id: Option<i32>,
    wine_name: Option<String>,
    connection: DbConn,
) -> Result<Json<Vec<Purchase>>, Status> {
    let mut query = purchases::table.inner_join(wines::table).into_boxed();
    if let Some(id) = id {
        query = query.filter(purchases::id.eq(id));
    }
    if let Some(wine_id) = wine_id {
        query = query.filter(wines::id.eq(wine_id));
    }
    if let Some(wine_name) = wine_name {
        query = query.filter(wines::name.eq(wine_name));
    }
    query
        .select((
            purchases::id,
            purchases::price,
            purchases::quantity,
            purchases::vintage,
            purchases::memo,
            purchases::store_id,
            purchases::wine_id,
            purchases::date,
        ))
        .load::<Purchase>(&*connection)
        .map(Json)
        .map_err(error_status)
}

// Includes wine info for convenience
#[derive(Queryable, Serialize, Debug)]
pub struct RecentPurchase {
    pub id: i32,
    pub price: Option<f32>,
    pub quantity: Option<i32>,
    pub vintage: Option<i32>,
    pub memo: Option<String>,
    pub store: Option<String>,
    pub date: Option<i32>,
    pub wine_id: i32,
    pub wine_name: Option<String>,
    pub producer_id: i32,
    pub producer: String,
    pub region_id: i32,
    pub region: String,
    pub wine_type_id: i32,
    pub wine_type: String,
}

#[get("/purchases/recent?<limit>")]
pub fn recent(
    limit: Option<usize>,
    connection: DbConn,
) -> Result<Json<Vec<RecentPurchase>>, Status> {
    let limit = limit.unwrap_or(10);
    purchases::table
        .inner_join(
            wines::table.inner_join(producers::table.inner_join(regions::table))
                .inner_join(wine_types::table),
        )
        .left_join(stores::table)
        .select((
            purchases::id,
            purchases::price,
            purchases::quantity,
            purchases::vintage,
            purchases::memo,
            stores::name.nullable(),
            purchases::date,
            wines::id,
            wines::name,
            producers::id,
            producers::name,
            regions::id,
            regions::name,
            wine_types::id,
            wine_types::name,
        ))
        .order_by(purchases::date.desc())
        .limit(limit as i64)
        .load::<RecentPurchase>(&*connection)
        .map(Json)
        .map_err(error_status)
}

#[put("/purchases?<id>", format = "json", data = "<purchase_form>")]
pub fn put(
    id: i32,
    purchase_form: Json<PurchaseForm>,
    connection: DbConn,
) -> Result<Json<Purchase>, Status> {
    // TODO: validation
    diesel::update(purchases::table.filter(purchases::id.eq(id)))
        .set(purchase_form.into_inner())
        .execute(&*connection)
        .and_then(|_| {
            purchases::table
                .filter(purchases::id.eq(id))
                .first(&*connection)
                .map(Json)
        })
        .map_err(error_status)
}
