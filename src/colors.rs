use super::error::VinotecaError;
use super::models::Color;
use super::schema::colors;
use super::DbConn;

use diesel::prelude::*;
use rocket_contrib::json::Json;

#[get("/colors?<id>&<name>")]
pub fn get(
    id: Option<i32>,
    name: Option<String>,
    connection: DbConn,
) -> Result<Json<Vec<Color>>, Json<VinotecaError>> {
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
        .map_err(Json)
}
