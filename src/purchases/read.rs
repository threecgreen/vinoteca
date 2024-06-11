use super::{MostCommonPurchaseDate, PurchaseCount, RecentPurchase, TotalLiters, YearsPurchases};
use crate::error::{RestResult, VinotecaError};
use crate::models::Purchase;
use crate::schema::{producers, purchases, regions, stores, wine_types, wines};
use crate::users::Auth;
use crate::Db;
use diesel_async::RunQueryDsl;
use rocket_db_pools::Connection;

use diesel::dsl::{sql, sum};
use diesel::prelude::*;
use diesel::sql_query;
use diesel::sql_types::{Double, Integer};
use rocket::serde::json::Json;

#[get("/purchases?<id>&<wine_id>&<wine_name>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    wine_id: Option<i32>,
    wine_name: Option<String>,
    mut conn: Connection<Db>,
) -> RestResult<Vec<Purchase>> {
    let mut query = purchases::table
        .left_join(stores::table)
        .inner_join(wines::table)
        .filter(wines::user_id.eq(auth.id))
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
        .load::<Purchase>(&mut **conn)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/purchases/recent?<limit>")]
pub async fn recent(
    auth: Auth,
    limit: Option<usize>,
    mut conn: Connection<Db>,
) -> RestResult<Vec<RecentPurchase>> {
    let limit = limit.unwrap_or(10);
    purchases::table
        .inner_join(
            wines::table
                .inner_join(producers::table.inner_join(regions::table))
                .inner_join(wine_types::table),
        )
        .left_join(stores::table)
        .filter(wines::user_id.eq(auth.id))
        .filter(purchases::date.is_not_null())
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
        .load::<RecentPurchase>(&mut **conn)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/purchases/by-year")]
pub async fn by_year(auth: Auth, mut conn: Connection<Db>) -> RestResult<Vec<YearsPurchases>> {
    sql_query(include_str!("purchases_by_year.sql"))
        .bind::<Integer, _>(auth.id)
        .load::<YearsPurchases>(&mut **conn)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/purchases/total-liters")]
pub async fn total_liters(auth: Auth, mut conn: Connection<Db>) -> Json<TotalLiters> {
    let total_liters = purchases::table
        .inner_join(wines::table)
        .filter(wines::user_id.eq(auth.id))
        .select(sum(sql::<Double>(
            "cast(quantity * 0.75 AS DOUBLE PRECISION)",
        )))
        .first(&mut **conn)
        .await
        .unwrap_or(Some(0.0))
        .unwrap_or(0.0);
    Json(TotalLiters { total_liters })
}

#[get("/purchases/most-common-purchase-date")]
pub async fn most_common_purchase_date(
    auth: Auth,
    mut conn: Connection<Db>,
) -> Json<MostCommonPurchaseDate> {
    let count = purchases::table
        .inner_join(wines::table)
        .filter(wines::user_id.eq(auth.id))
        .count()
        .first(&mut **conn)
        .await;
    if Ok(0) == count || count.is_err() {
        return Json(MostCommonPurchaseDate {
            most_common_purchase_date: None,
        });
    }
    // TODO: figure out why this panics when there aren't any purchases
    let mut res = sql_query(include_str!("most_common_purchase_date.sql"))
        .bind::<Integer, _>(auth.id)
        .load::<MostCommonPurchaseDate>(&mut **conn)
        .await
        .unwrap_or_else(|e| {
            warn!("Error getting most common purchase date: {}", e);
            vec![MostCommonPurchaseDate {
                most_common_purchase_date: None,
            }]
        });

    Json(res.remove(0))
}

#[get("/purchases/count")]
pub async fn count(auth: Auth, mut conn: Connection<Db>) -> Json<PurchaseCount> {
    let count = purchases::table
        .inner_join(wines::table)
        .filter(wines::user_id.eq(auth.id))
        .select(sum(purchases::quantity))
        .first::<Option<i64>>(&mut **conn)
        .await
        .unwrap_or(Some(0))
        .unwrap_or(0);
    Json(PurchaseCount { count })
}
