use crate::DbConn;
use crate::error::VinotecaError;
use crate::models::{Purchase, PurchaseForm};
use crate::schema::{producers, purchases, regions, stores, wine_types, wines};

use diesel;
use diesel::dsl::{sql, sum};
use diesel::prelude::*;
use diesel::sql_query;
use diesel::sql_types::{Float, Integer, Nullable};
use diesel::QueryableByName;
use rocket_contrib::json::Json;
use serde::Serialize;
use typescript_definitions::TypeScriptify;

#[get("/purchases?<id>&<wine_id>&<wine_name>")]
pub fn get(
    id: Option<i32>,
    wine_id: Option<i32>,
    wine_name: Option<String>,
    connection: DbConn,
) -> Result<Json<Vec<Purchase>>, Json<VinotecaError>> {
    let mut query = purchases::table
        .inner_join(stores::table)
        .inner_join(wines::table)
        .into_boxed();
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
            stores::name.nullable(),
            purchases::store_id,
            purchases::wine_id,
            purchases::date,
        ))
        .load::<Purchase>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
        .map_err(Json)
}

// Includes wine info for convenience
#[derive(Queryable, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
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
) -> Result<Json<Vec<RecentPurchase>>, Json<VinotecaError>> {
    let limit = limit.unwrap_or(10);
    purchases::table
        .inner_join(
            wines::table
                .inner_join(producers::table.inner_join(regions::table))
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
        .map_err(VinotecaError::from)
        .map_err(Json)
}

#[derive(QueryableByName, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct YearsPurchases {
    #[sql_type = "Integer"]
    year: i32,
    #[sql_type = "Integer"]
    quantity: i32,
    #[sql_type = "Nullable<Float>"]
    total_price: Option<f32>,
    #[sql_type = "Nullable<Float>"]
    avg_price: Option<f32>,
}

#[get("/purchases/by-year")]
pub fn by_year(connection: DbConn) -> Result<Json<Vec<YearsPurchases>>, Json<VinotecaError>> {
    sql_query(include_str!("purchases_by_year.sql"))
        .load::<YearsPurchases>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
        .map_err(Json)
}

#[derive(Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct TotalLiters {
    total_liters: f32,
}

#[get("/purchases/total-liters")]
pub fn total_liters(connection: DbConn) -> Json<TotalLiters> {
    let res = purchases::table
        .select(sum(sql::<Float>("quantity * 0.75")))
        .first(&*connection)
        .unwrap_or(Some(0.0));
    let total_liters = TotalLiters {
        total_liters: res.unwrap_or(0.0),
    };
    Json(total_liters)
}

#[derive(Serialize, QueryableByName, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct MostCommonPurchaseDate {
    #[sql_type = "Nullable<Integer>"]
    most_common_purchase_date: Option<i32>,
}

#[get("/purchases/most-common-purchase-date")]
pub fn most_common_purchase_date(connection: DbConn) -> Json<MostCommonPurchaseDate> {
    let mut res = sql_query(include_str!("most_common_purchase_date.sql"))
        .load::<MostCommonPurchaseDate>(&*connection)
        .unwrap_or_else(|_| {
            vec![MostCommonPurchaseDate {
                most_common_purchase_date: None,
            }]
        });

    Json(res.remove(0))
}

#[post("/purchases", format = "json", data = "<purchase_form>")]
pub fn post(purchase_form: Json<PurchaseForm>, connection: DbConn) -> Result<Json<Purchase>, Json<VinotecaError>> {
    let purchase_form = purchase_form.into_inner();
    diesel::insert_into(purchases::table)
        .values(&purchase_form)
        .execute(&*connection)
        .and_then(|_| {
            purchases::table
                .inner_join(stores::table)
                .inner_join(wines::table)
                .filter(purchases::wine_id.eq(purchase_form.wine_id))
                .filter(purchases::date.eq(purchase_form.date))
                .select((
                    purchases::id,
                    purchases::price,
                    purchases::quantity,
                    purchases::vintage,
                    purchases::memo,
                    stores::name.nullable(),
                    purchases::store_id,
                    purchases::wine_id,
                    purchases::date,
                ))
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from)
        .map_err(Json)
}

#[put("/purchases/<id>", format = "json", data = "<purchase_form>")]
pub fn put(
    id: i32,
    purchase_form: Json<PurchaseForm>,
    connection: DbConn,
) -> Result<Json<Purchase>, Json<VinotecaError>> {
    // TODO: validation
    diesel::update(purchases::table.filter(purchases::id.eq(id)))
        .set(purchase_form.into_inner())
        .execute(&*connection)
        .and_then(|_| {
            purchases::table
                .inner_join(stores::table)
                .filter(purchases::id.eq(id))
                .select((
                    purchases::id,
                    purchases::price,
                    purchases::quantity,
                    purchases::vintage,
                    purchases::memo,
                    stores::name.nullable(),
                    purchases::store_id,
                    purchases::wine_id,
                    purchases::date,
                ))
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from)
        .map_err(Json)
}

// TODO: delete
