use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, Region};
use crate::schema::{producers, purchases, regions, wines};
use crate::users::Auth;
use crate::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use rocket_contrib::json::Json;

#[get("/regions?<id>&<name>&<producer_name>")]
pub async fn get(
    id: Option<i32>,
    name: Option<String>,
    producer_name: Option<String>,
    conn: DbConn,
) -> RestResult<Vec<Region>> {
    conn.run(move |c| {
        // Left join because still want to include regions that don't have a producer associated
        // with them
        let mut query = regions::table.left_join(producers::table).into_boxed();
        if let Some(id) = id {
            query = query.filter(regions::id.eq(id));
        }
        if let Some(name) = name {
            query = query.filter(regions::name.eq(name));
        }
        if let Some(producer_name) = producer_name {
            query = query.filter(producers::name.eq(producer_name));
        }
        query
            .select((regions::id, regions::name))
            .distinct()
            .load::<Region>(c)
            .map(Json)
            .map_err(VinotecaError::from)
    })
    .await
}

#[get("/regions/top?<limit>")]
pub async fn top(
    auth: Auth,
    limit: Option<usize>,
    conn: DbConn,
) -> RestResult<Vec<generic::TopEntity>> {
    let limit = limit.unwrap_or(10);
    top_table!(
        regions::table
            .inner_join(producers::table.inner_join(wines::table.inner_join(purchases::table)))
            .filter(wines::user_id.eq(auth.id))
            .filter(producers::user_id.eq(auth.id)),
        regions::id,
        regions::name,
        limit,
        conn
    )
    .await
}
