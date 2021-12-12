use crate::db::pool::Db;
use crate::entity::colors;
use crate::error::{RestResult, VinotecaError};
// use crate::users::Auth;

use rocket::serde::json::Json;
use sea_orm::{entity::*, query::*};
use sea_orm_rocket::{Connection, Database};

pub fn routes() -> Vec<rocket::Route> {
    routes![get]
}

#[get("/?<id>&<name>")]
pub async fn get(
    id: Option<i32>,
    name: Option<String>,
    db: Connection<'_, Db>,
) -> RestResult<Vec<colors::Model>> {
    let mut query = colors::Entity::find();
    if let Some(id) = id {
        query = query.filter(colors::Column::Id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(colors::Column::Name.eq(name));
    }

    query
        .all(&db.0)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

// #[get("/top")]
// pub async fn top(auth: Auth, db: Connection<Db>) -> RestResult<Vec<generic::TopEntity>> {
//     const LIMIT: i32 = 20;
//     colors::Entity::find()
// top_table!(
//     colors::table
//         .inner_join(wines::table.inner_join(purchases::table))
//         .filter(wines::user_id.eq(auth.id)),
//     colors::id,
//     colors::name,
//     limit,
//     conn
// )
// .await
// }
