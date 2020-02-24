use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, WineType, WineTypeForm};
use crate::schema::{purchases, wine_types, wines};
use crate::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::{Float, Integer};
use rocket_contrib::json::Json;
use validator::Validate;

#[get("/wine-types?<id>&<name>")]
pub fn get(id: Option<i32>, name: Option<String>, connection: DbConn) -> RestResult<Vec<WineType>> {
    let mut query = wine_types::table.into_boxed();
    if let Some(id) = id {
        query = query.filter(wine_types::id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(wine_types::name.eq(name));
    }
    query
        .load::<WineType>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/wine-types/top?<limit>")]
pub fn top(limit: Option<usize>, connection: DbConn) -> RestResult<Vec<generic::TopEntity>> {
    let limit = limit.unwrap_or(10);
    top_table!(
        wine_types::table.inner_join(wines::table.inner_join(purchases::table)),
        wine_types::id,
        wine_types::name,
        limit,
        connection
    )
}

#[post("/wine-types", format = "json", data = "<wine_type_form>")]
pub fn post(wine_type_form: Json<WineTypeForm>, connection: DbConn) -> RestResult<WineType> {
    let wine_type_form = wine_type_form.into_inner();
    wine_type_form.validate()?;

    connection.set_timeout(1_000)?;
    diesel::insert_into(wine_types::table)
        .values(&wine_type_form)
        .execute(&*connection)
        .and_then(|_| {
            wine_types::table
                .filter(wine_types::name.eq((*wine_type_form.name).to_owned()))
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from)
}

#[put("/wine-types/<id>", format = "json", data = "<wine_type_form>")]
pub fn put(
    id: i32,
    wine_type_form: Json<WineTypeForm>,
    connection: DbConn,
) -> RestResult<WineType> {
    let wine_type_form = wine_type_form.into_inner();
    wine_type_form.validate()?;

    connection.set_timeout(1_000)?;
    diesel::update(wine_types::table.filter(wine_types::id.eq(id)))
        .set(wine_types::name.eq(wine_type_form.name))
        .execute(&*connection)
        .and_then(|_| {
            wine_types::table
                .filter(wine_types::id.eq(id))
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from)
}
