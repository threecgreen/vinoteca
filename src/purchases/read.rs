use super::{MostCommonPurchaseDate, PurchaseCount, RecentPurchase, TotalLiters, YearsPurchases};
use crate::error::{RestResult, VinotecaError};
use crate::models::Purchase;
use crate::query_utils::DbConn;
use crate::schema::{producers, purchases, regions, stores, wine_types, wines};
use crate::users::Auth;

use diesel::dsl::{sql, sum};
use diesel::prelude::*;
use diesel::sql_types::{Double, Integer};
use diesel_async::RunQueryDsl;
use rocket::get;
use rocket::serde::json::Json;

#[get("/purchases?<id>&<wine_id>&<wine_name>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    wine_id: Option<i32>,
    wine_name: Option<String>,
    mut connection: DbConn,
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
        .load::<Purchase>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/purchases/recent?<limit>")]
pub async fn recent(
    auth: Auth,
    limit: Option<usize>,
    mut connection: DbConn,
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
        .load::<RecentPurchase>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/purchases/by-year")]
pub async fn by_year(auth: Auth, mut connection: DbConn) -> RestResult<Vec<YearsPurchases>> {
    diesel::sql_query(include_str!("purchases_by_year.sql"))
        .bind::<Integer, _>(auth.id)
        .load::<YearsPurchases>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/purchases/total-liters")]
pub async fn total_liters(auth: Auth, mut connection: DbConn) -> Json<TotalLiters> {
    let res = purchases::table
        .inner_join(wines::table)
        .filter(wines::user_id.eq(auth.id))
        .select(sum(sql::<Double>(
            "cast(quantity * 0.75 AS DOUBLE PRECISION)",
        )))
        .first(&mut *connection)
        .await
        .unwrap_or(Some(0.0));
    let total_liters = TotalLiters {
        total_liters: res.unwrap_or(0.0),
    };
    Json(total_liters)
}

#[get("/purchases/most-common-purchase-date")]
pub async fn most_common_purchase_date(
    auth: Auth,
    mut connection: DbConn,
) -> Json<MostCommonPurchaseDate> {
    let count = purchases::table
        .inner_join(wines::table)
        .filter(wines::user_id.eq(auth.id))
        .count()
        .first(&mut *connection)
        .await;
    if Ok(0) == count || count.is_err() {
        return Json(MostCommonPurchaseDate {
            most_common_purchase_date: None,
        });
    }
    // TODO: figure out why this panics when there aren't any purchases
    let mut res = diesel::sql_query(include_str!("most_common_purchase_date.sql"))
        .bind::<Integer, _>(auth.id)
        .load::<MostCommonPurchaseDate>(&mut *connection)
        .await
        .unwrap_or_else(|e| {
            log::warn!("Error getting most common purchase date: {}", e);
            vec![MostCommonPurchaseDate {
                most_common_purchase_date: None,
            }]
        });

    Json(res.remove(0))
}

#[get("/purchases/count")]
pub async fn count(auth: Auth, mut connection: DbConn) -> Json<PurchaseCount> {
    let res = purchases::table
        .inner_join(wines::table)
        .filter(wines::user_id.eq(auth.id))
        .select(sum(purchases::quantity))
        .first::<Option<i64>>(&mut *connection)
        .await;
    let total_liters = PurchaseCount {
        count: res.unwrap_or(Some(0)).unwrap_or(0),
    };
    Json(total_liters)
}
