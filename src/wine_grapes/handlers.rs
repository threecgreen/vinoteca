use super::models::WineGrapesForm;
use super::validation::validate_user_owns_grapes;
use crate::error::{RestResult, VinotecaError};
use crate::models::{WineGrape, WineGrapeForm};
use crate::query_utils::DbConn;
use crate::schema::{grapes, wine_grapes};
use crate::users::Auth;

use diesel::prelude::*;
use diesel_async::RunQueryDsl;
use rocket::serde::json::Json;
use rocket::{get, post};
use validator::Validate;

#[get("/wine-grapes?<wine_id>&<grape_id>")]
pub async fn get(
    auth: Auth,
    wine_id: Option<i32>,
    grape_id: Option<i32>,
    mut connection: DbConn,
) -> RestResult<Vec<WineGrape>> {
    let mut query = wine_grapes::table
        .inner_join(grapes::table)
        .filter(grapes::user_id.eq(auth.id))
        .into_boxed();
    if let Some(wine_id) = wine_id {
        query = query.filter(wine_grapes::wine_id.eq(wine_id));
    }
    if let Some(grape_id) = grape_id {
        query = query.filter(wine_grapes::grape_id.eq(grape_id));
    }
    query
        .select((
            wine_grapes::percent,
            wine_grapes::grape_id,
            grapes::name,
            wine_grapes::wine_id,
        ))
        .load::<WineGrape>(&mut connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[post("/wine-grapes", format = "json", data = "<wine_grape_form>")]
pub async fn post(
    auth: Auth,
    wine_grape_form: Json<WineGrapesForm>,
    mut connection: DbConn,
) -> RestResult<Vec<WineGrape>> {
    let wine_grape_form = wine_grape_form.into_inner();
    wine_grape_form.validate()?;
    validate_user_owns_grapes(auth.id, &wine_grape_form.grapes, &mut connection).await?;

    let wine_id = wine_grape_form.wine_id;
    let wine_grapes_vec: Vec<WineGrapeForm> = wine_grape_form.into();

    // Delete existing wine grapes
    let delete_result =
        diesel::delete(wine_grapes::table.filter(wine_grapes::wine_id.eq(wine_id)))
            .execute(&mut connection)
            .await;
    if let Err(e) = delete_result {
        return Err(VinotecaError::Internal(format!(
            "Error deleting existing wine grapes for wine with id {}: {}",
            wine_id, e
        )));
    }

    if !wine_grapes_vec.is_empty() {
        diesel::insert_into(wine_grapes::table)
            .values(&wine_grapes_vec)
            .execute(&mut connection)
            .await?;
    }

    // Re-fetch the wine grapes
    wine_grapes::table
        .inner_join(grapes::table)
        .filter(grapes::user_id.eq(auth.id))
        .filter(wine_grapes::wine_id.eq(wine_id))
        .select((
            wine_grapes::percent,
            wine_grapes::grape_id,
            grapes::name,
            wine_grapes::wine_id,
        ))
        .load::<WineGrape>(&mut connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[cfg(test)]
mod test {
    // Tests need to be updated for async
}
