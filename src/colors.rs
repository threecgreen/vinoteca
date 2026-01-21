use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, Color};
use crate::query_utils::DbConn;
use crate::schema::{colors, purchases, wines};
use crate::users::Auth;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel_async::RunQueryDsl;
use rocket::get;
use rocket::serde::json::Json;

#[get("/colors?<id>&<name>")]
pub async fn get(
    id: Option<i32>,
    name: Option<String>,
    mut connection: DbConn,
) -> RestResult<Vec<Color>> {
    let mut query = colors::table.into_boxed();
    if let Some(id) = id {
        query = query.filter(colors::id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(colors::name.eq(name));
    }
    query
        .load::<Color>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/colors/top")]
pub async fn top(auth: Auth, mut connection: DbConn) -> RestResult<Vec<generic::TopEntity>> {
    let limit = 20;
    top_table!(
        colors::table
            .inner_join(wines::table.inner_join(purchases::table))
            .filter(wines::user_id.eq(auth.id)),
        colors::id,
        colors::name,
        limit,
        &mut *connection
    )
}
