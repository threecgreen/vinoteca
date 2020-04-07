use super::read::get;
use crate::error::{RestResult, VinotecaError};
use crate::models::{Purchase, PurchaseForm};
use crate::query_utils::IntoFirst;
use crate::schema::{purchases, stores, wines};
use crate::users::Auth;
use crate::DbConn;

use diesel::prelude::*;
use rocket_contrib::json::Json;
use validator::Validate;

#[post("/purchases", format = "json", data = "<purchase_form>")]
pub fn post(
    auth: Auth,
    purchase_form: Json<PurchaseForm>,
    connection: DbConn,
) -> RestResult<Purchase> {
    let purchase_form = purchase_form.into_inner();
    purchase_form.validate()?;
    validate_relations(auth, &purchase_form, &connection)?;

    diesel::insert_into(purchases::table)
        .values(&purchase_form)
        .returning(purchases::id)
        .get_result(&*connection)
        .map_err(|_| VinotecaError::Internal("Creating new purchase".to_owned()))
        .and_then(|purchase_id| {
            get(auth, Some(purchase_id), None, None, connection)?
                .into_first("Newly-created purchase")
        })
}

#[put("/purchases/<id>", format = "json", data = "<purchase_form>")]
pub fn put(
    auth: Auth,
    id: i32,
    purchase_form: Json<PurchaseForm>,
    connection: DbConn,
) -> RestResult<Purchase> {
    let purchase_form = purchase_form.into_inner();
    purchase_form.validate()?;
    validate_owns_wine(auth, id, &connection)?;
    validate_relations(auth, &purchase_form, &connection)?;

    diesel::update(purchases::table.filter(purchases::id.eq(id)))
        .set(purchase_form)
        .execute(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|_| get(auth, Some(id), None, None, connection)?.into_first("Edited purchase"))
}

#[delete("/purchases/<id>")]
pub fn delete(auth: Auth, id: i32, connection: DbConn) -> Result<(), VinotecaError> {
    validate_owns_wine(auth, id, &connection)?;

    diesel::delete(purchases::table.filter(purchases::id.eq(id)))
        .execute(&*connection)
        .map(|_| ())
        .map_err(VinotecaError::from)
}

fn validate_relations(
    auth: Auth,
    purchase_form: &PurchaseForm,
    connection: &DbConn,
) -> Result<(), VinotecaError> {
    // Validate wine is user's
    wines::table
        .filter(wines::id.eq(purchase_form.wine_id))
        .filter(wines::user_id.eq(auth.id))
        .select(wines::id)
        .first::<i32>(&**connection)?;
    // Validate store is user's
    stores::table
        .filter(stores::id.eq(purchase_form.wine_id))
        .filter(stores::user_id.eq(auth.id))
        .select(stores::id)
        .first::<i32>(&**connection)?;
    Ok(())
}

/// Validate is user's purchase
fn validate_owns_wine(auth: Auth, id: i32, connection: &DbConn) -> Result<(), VinotecaError> {
    purchases::table
        .inner_join(wines::table)
        .filter(purchases::id.eq(id))
        .filter(wines::user_id.eq(auth.id))
        .select(purchases::id)
        .first::<i32>(&**connection)?;
    Ok(())
}
