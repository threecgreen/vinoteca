use crate::error::{RestResult, VinotecaError};
use crate::models::{Purchase, PurchaseForm};
use crate::schema::{purchases, stores, wines};
use crate::DbConn;

use diesel;
use diesel::prelude::*;
use rocket_contrib::json::Json;

#[post("/purchases", format = "json", data = "<purchase_form>")]
pub fn post(purchase_form: Json<PurchaseForm>, connection: DbConn) -> RestResult<Purchase> {
    let purchase_form = purchase_form.into_inner();
    diesel::insert_into(purchases::table)
        .values(&purchase_form)
        .execute(&*connection)
        .and_then(|_| {
            purchases::table
                .inner_join(stores::table)
                .inner_join(wines::table)
                .filter(purchases::wine_id.eq(purchase_form.wine_id))
                .filter(purchases::date.eq(purchase_form.date))
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
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from)
}

#[put("/purchases/<id>", format = "json", data = "<purchase_form>")]
pub fn put(id: i32, purchase_form: Json<PurchaseForm>, connection: DbConn) -> RestResult<Purchase> {
    // TODO: validation
    diesel::update(purchases::table.filter(purchases::id.eq(id)))
        .set(purchase_form.into_inner())
        .execute(&*connection)
        .and_then(|_| {
            purchases::table
                .inner_join(stores::table)
                .filter(purchases::id.eq(id))
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
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from)
}

#[delete("/purchases/<id>")]
pub fn delete(id: i32, connection: DbConn) -> Result<(), VinotecaError> {
    diesel::delete(purchases::table.filter(purchases::id.eq(id)))
        .execute(&*connection)
        .map(|_| ())
        .map_err(VinotecaError::from)
}
