use super::{MostCommonPurchaseDate, RecentPurchase, TotalLiters, YearsPurchases, PurchaseCount};
use crate::error::{RestResult, VinotecaError};
use crate::models::Purchase;
use crate::schema::{producers, purchases, regions, stores, wine_types, wines};
use crate::DbConn;

use diesel::dsl::{sql, sum};
use diesel::prelude::*;
use diesel::sql_query;
use diesel::sql_types::Float;
use rocket_contrib::json::Json;

#[get("/purchases?<id>&<wine_id>&<wine_name>")]
pub fn get(
    id: Option<i32>,
    wine_id: Option<i32>,
    wine_name: Option<String>,
    connection: DbConn,
) -> RestResult<Vec<Purchase>> {
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
}

#[get("/purchases/recent?<limit>")]
pub fn recent(limit: Option<usize>, connection: DbConn) -> RestResult<Vec<RecentPurchase>> {
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
}

#[get("/purchases/by-year")]
pub fn by_year(connection: DbConn) -> RestResult<Vec<YearsPurchases>> {
    sql_query(include_str!("purchases_by_year.sql"))
        .load::<YearsPurchases>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
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

#[get("/purchases/most-common-purchase-date")]
pub fn most_common_purchase_date(connection: DbConn) -> Json<MostCommonPurchaseDate> {
    let mut res = sql_query(include_str!("most_common_purchase_date.sql"))
        .load::<MostCommonPurchaseDate>(&*connection)
        .unwrap_or_else(|e| {
            warn!("Error getting most common purchase date: {}", e);
            vec![MostCommonPurchaseDate {
                most_common_purchase_date: None,
            }]
        });

    Json(res.remove(0))
}

#[get("/purchases/count")]
pub fn count(connection: DbConn) -> Json<PurchaseCount> {
    let res: Result<Option<i64>, _> = purchases::table
        .select(sum(purchases::quantity))
        .first(&*connection);
    let total_liters = PurchaseCount {
        count: res.unwrap_or(Some(0)).unwrap_or(0),
    };
    Json(total_liters)
}
