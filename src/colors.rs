use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, Color};
use crate::schema::{colors, purchases, wines};
use crate::users::Auth;
use crate::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use rocket::serde::json::Json;

#[get("/colors?<id>&<name>")]
pub async fn get(id: Option<i32>, name: Option<String>, conn: DbConn) -> RestResult<Vec<Color>> {
    conn.run(move |c| {
        let mut query = colors::table.into_boxed();
        if let Some(id) = id {
            query = query.filter(colors::id.eq(id));
        }
        if let Some(name) = name {
            query = query.filter(colors::name.eq(name));
        }

        query
            .load::<Color>(c)
            .map(Json)
            .map_err(VinotecaError::from)
    })
    .await
}

#[get("/colors/top")]
pub async fn top(auth: Auth, conn: DbConn) -> RestResult<Vec<generic::TopEntity>> {
    let limit = 20;
    top_table!(
        colors::table
            .inner_join(wines::table.inner_join(purchases::table))
            .filter(wines::user_id.eq(auth.id)),
        colors::id,
        colors::name,
        limit,
        conn
    )
    .await
}
