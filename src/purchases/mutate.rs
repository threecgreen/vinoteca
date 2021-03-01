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
pub async fn post(
    auth: Auth,
    purchase_form: Json<PurchaseForm>,
    conn: DbConn,
) -> RestResult<Purchase> {
    let purchase_form = purchase_form.into_inner();
    purchase_form.validate()?;

    let purchase_id = conn
        .run(move |c| {
            validate_relations(auth, &purchase_form, c)?;
            diesel::insert_into(purchases::table)
                .values(&purchase_form)
                .returning(purchases::id)
                .get_result(c)
                .map_err(|_| VinotecaError::Internal("Creating new purchase".to_owned()))
        })
        .await?;
    get(auth, Some(purchase_id), None, None, conn)
        .await?
        .into_first("Newly-created purchase")
}

#[put("/purchases/<id>", format = "json", data = "<purchase_form>")]
pub async fn put(
    auth: Auth,
    id: i32,
    purchase_form: Json<PurchaseForm>,
    conn: DbConn,
) -> RestResult<Purchase> {
    let purchase_form = purchase_form.into_inner();
    purchase_form.validate()?;

    conn.run(move |c| {
        validate_owns_wine(auth, id, c)?;
        validate_relations(auth, &purchase_form, c)?;

        diesel::update(purchases::table.filter(purchases::id.eq(id)))
            .set(purchase_form)
            .execute(c)
            .map_err(VinotecaError::from)
    })
    .await?;
    get(auth, Some(id), None, None, conn)
        .await?
        .into_first("Edited purchase")
}

#[delete("/purchases/<id>")]
pub async fn delete(auth: Auth, id: i32, conn: DbConn) -> Result<(), VinotecaError> {
    conn.run(move |c| {
        validate_owns_wine(auth, id, c)?;

        diesel::delete(purchases::table.filter(purchases::id.eq(id)))
            .execute(c)
            .map(|_| ())
            .map_err(VinotecaError::from)
    })
    .await
}

fn validate_relations(
    auth: Auth,
    purchase_form: &PurchaseForm,
    pg_conn: &mut PgConnection,
) -> Result<(), VinotecaError> {
    // Validate wine is user's
    wines::table
        .filter(wines::id.eq(purchase_form.wine_id))
        .filter(wines::user_id.eq(auth.id))
        .select(wines::id)
        .first::<i32>(pg_conn)
        .map_err(|e| {
            warn!("User tried to create purchase with invalid or another user's wine. wine_id: {}, user_id: {}, error: {:?}", purchase_form.wine_id, auth.id, e);
            // Not forbidden to prevent leaking info to user
            VinotecaError::BadRequest("Wine not found for purchase".to_owned())
        })?;
    // Validate store is user's
    if let Some(store_id) = purchase_form.store_id {
        stores::table
            .filter(stores::id.eq(store_id))
            .filter(stores::user_id.eq(auth.id))
            .select(stores::id)
            .first::<i32>(pg_conn)
            .map_err(|e| {
                warn!("User tried to create purchase with invalid or another user's store. wine_id: {}, user_id: {}, store_id: {}, error: {:?}", purchase_form.wine_id, auth.id, store_id, e);
                VinotecaError::BadRequest("Store not found for purchase".to_owned())
            })?;
    }
    Ok(())
}

/// Validate is user's purchase
fn validate_owns_wine(
    auth: Auth,
    purchase_id: i32,
    pg_conn: &mut PgConnection,
) -> Result<(), VinotecaError> {
    purchases::table
        .inner_join(wines::table)
        .filter(purchases::id.eq(purchase_id))
        .filter(wines::user_id.eq(auth.id))
        .select(purchases::id)
        .first::<i32>(pg_conn)?;
    Ok(())
}
