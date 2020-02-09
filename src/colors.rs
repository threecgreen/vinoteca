use super::error::{RestResult, VinotecaError};
use super::models::{generic, Color};
use super::schema::{colors, purchases, wines};
use super::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::{Float, Integer};
use rocket_contrib::json::Json;

#[get("/colors?<id>&<name>")]
pub fn get(id: Option<i32>, name: Option<String>, connection: DbConn) -> RestResult<Vec<Color>> {
    let mut query = colors::table.into_boxed();
    if let Some(id) = id {
        query = query.filter(colors::id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(colors::name.eq(name));
    }
    query
        .load::<Color>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/colors/top")]
pub fn top(connection: DbConn) -> RestResult<Vec<generic::TopEntity>> {
    let limit = 20;
    top_table!(
        colors::table.inner_join(wines::table.inner_join(purchases::table)),
        colors::id,
        colors::name,
        limit,
        connection
    )
}
