use diesel::prelude::*;
use diesel_async::RunQueryDsl;
use rocket::serde::json::Json;
use rocket_db_pools::Connection;
use validator::Validate;

use super::read::get;
use crate::error::{RestResult, VinotecaError};
use crate::models::{Purchase, PurchaseForm};
use crate::query_utils::IntoFirst;
use crate::schema::{purchases, stores, wines};
use crate::users::Auth;
use crate::Db;

#[post("/purchases", format = "json", data = "<purchase_form>")]
pub async fn post(
    auth: Auth,
    purchase_form: Json<PurchaseForm>,
    mut conn: Connection<Db>,
) -> RestResult<Purchase> {
    let purchase_form = purchase_form.into_inner();
    purchase_form.validate()?;

    validate_relations(auth, &purchase_form, &mut conn).await?;
    let purchase_id = diesel::insert_into(purchases::table)
        .values(&purchase_form)
        .returning(purchases::id)
        .get_result(&mut **conn)
        .await
        .map_err(|_| VinotecaError::Internal("Creating new purchase".to_owned()))?;
    get(auth, Some(purchase_id), None, None, conn)
        .await?
        .into_first("Newly-created purchase")
}

#[put("/purchases/<id>", format = "json", data = "<purchase_form>")]
pub async fn put(
    auth: Auth,
    id: i32,
    purchase_form: Json<PurchaseForm>,
    mut conn: Connection<Db>,
) -> RestResult<Purchase> {
    let purchase_form = purchase_form.into_inner();
    purchase_form.validate()?;

    validate_owns_wine(auth, id, &mut conn).await?;
    validate_relations(auth, &purchase_form, &mut conn).await?;

    diesel::update(purchases::table.filter(purchases::id.eq(id)))
        .set(purchase_form)
        .execute(&mut **conn)
        .await
        .map_err(VinotecaError::from)?;
    get(auth, Some(id), None, None, conn)
        .await?
        .into_first("Edited purchase")
}

#[delete("/purchases/<id>")]
pub async fn delete(auth: Auth, id: i32, mut conn: Connection<Db>) -> Result<(), VinotecaError> {
    validate_owns_wine(auth, id, &mut conn).await?;

    diesel::delete(purchases::table.filter(purchases::id.eq(id)))
        .execute(&mut **conn)
        .await
        .map(|_| ())
        .map_err(VinotecaError::from)
}

async fn validate_relations(
    auth: Auth,
    purchase_form: &PurchaseForm,
    conn: &mut Connection<Db>,
) -> Result<(), VinotecaError> {
    // Validate wine is user's
    wines::table
        .filter(wines::id.eq(purchase_form.wine_id))
        .filter(wines::user_id.eq(auth.id))
        .select(wines::id)
        .first::<i32>(&mut **conn)
        .await
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
            .first::<i32>(&mut **conn)
            .await
            .map_err(|e| {
                warn!("User tried to create purchase with invalid or another user's store. wine_id: {}, user_id: {}, store_id: {}, error: {:?}", purchase_form.wine_id, auth.id, store_id, e);
                VinotecaError::BadRequest("Store not found for purchase".to_owned())
            })?;
    }
    Ok(())
}

/// Validate is user's purchase
async fn validate_owns_wine(
    auth: Auth,
    purchase_id: i32,
    conn: &mut Connection<Db>,
) -> Result<(), VinotecaError> {
    purchases::table
        .inner_join(wines::table)
        .filter(purchases::id.eq(purchase_id))
        .filter(wines::user_id.eq(auth.id))
        .select(purchases::id)
        .first::<i32>(&mut **conn)
        .await?;
    Ok(())
}
