use super::query_utils::error_status;
use super::DbConn;

use diesel;
use diesel::prelude::*;
use models::{Purchase, PurchaseForm};
use rocket::http::Status;
use rocket_contrib::json::Json;
use schema::{purchases, wines};

#[get("/purchases?<id>&<wine_id>&<wine_name>")]
pub fn get(
    id: Option<i32>,
    wine_id: Option<i32>,
    wine_name: Option<String>,
    connection: DbConn,
) -> Result<Json<Vec<Purchase>>, Status> {
    let mut query = purchases::table.inner_join(wines::table).into_boxed();
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
            purchases::store_id,
            purchases::wine_id,
            purchases::date,
        ))
        .load::<Purchase>(&*connection)
        .map(Json)
        .map_err(error_status)
}

#[put("/purchases?<id>", format = "json", data = "<purchase_form>")]
pub fn put(
    id: i32,
    purchase_form: Json<PurchaseForm>,
    connection: DbConn,
) -> Result<Json<Purchase>, Status> {
    // TODO: validation
    diesel::update(purchases::table.filter(purchases::id.eq(id)))
        .set(purchase_form.into_inner())
        .execute(&*connection)
        .and_then(|_| {
            purchases::table
                .filter(purchases::id.eq(id))
                .first(&*connection)
                .map(Json)
        })
        .map_err(error_status)
}
