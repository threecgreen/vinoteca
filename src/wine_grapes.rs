use crate::error::{RestResult, VinotecaError};
use crate::models::{WineGrape, WineGrapeForm};
use crate::schema::{grapes, wine_grapes};
use crate::DbConn;

use diesel::prelude::*;
use rocket_contrib::json::Json;
use serde::{Deserialize, Serialize};
use typescript_definitions::TypeScriptify;
use std::collections::HashSet;
use validator::Validate;

#[get("/wine-grapes?<wine_id>&<grape_id>")]
pub fn get(
    wine_id: Option<i32>,
    grape_id: Option<i32>,
    connection: DbConn,
) -> RestResult<Vec<WineGrape>> {
    let mut query = wine_grapes::table.inner_join(grapes::table).into_boxed();
    if let Some(wine_id) = wine_id {
        query = query.filter(wine_grapes::wine_id.eq(wine_id));
    }
    if let Some(grape_id) = grape_id {
        query = query.filter(wine_grapes::grape_id.eq(grape_id));
    }
    query
        .select((
            wine_grapes::id,
            wine_grapes::percent,
            wine_grapes::grape_id,
            grapes::name,
            wine_grapes::wine_id,
        ))
        .load::<WineGrape>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

#[derive(Deserialize, Serialize, Validate, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct AssociatedGrape {
    pub percent: Option<i32>,
    pub grape_id: i32,
}

#[derive(Deserialize, Serialize, Validate, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct WineGrapesForm {
    pub wine_id: i32,
    #[validate(length(min = 1))]
    pub grapes: Vec<AssociatedGrape>,
}

impl From<WineGrapesForm> for Vec<WineGrapeForm> {
    fn from(wine_grapes_form: WineGrapesForm) -> Self {
        wine_grapes_form
            .grapes
            .iter()
            .map(|g| WineGrapeForm {
                percent: g.percent,
                grape_id: g.grape_id,
                wine_id: wine_grapes_form.wine_id,
            })
            .collect()
    }
}

#[post("/wine-grapes", format = "json", data = "<wine_grape_form>")]
pub fn post(
    wine_grape_form: Json<WineGrapesForm>,
    connection: DbConn,
) -> RestResult<Vec<WineGrape>> {
    let wine_grape_form = wine_grape_form.into_inner();
    wine_grape_form.validate()?;
    let wine_id = wine_grape_form.wine_id;
    let wine_grapes: Vec<WineGrapeForm> = wine_grape_form.into();

    // Validate percentages
    let total_percentage = wine_grapes
        .iter()
        .fold(0, |sum, wg| sum + wg.percent.unwrap_or(0));
    if total_percentage > 100 {
        return Err(VinotecaError::BadRequest(format!(
            "Grape percentage adds to {}. Maximum of 100 allowed",
            total_percentage
        )));
    }

    let mut unique_grapes = HashSet::new();
    for wg in &wine_grapes {
        if unique_grapes.insert(wg.grape_id) == false {
            return Err(VinotecaError::BadRequest("Duplicate grapes".to_owned()));
        }
    }

    // Delete existing wine grapes
    let delete_result = diesel::delete(wine_grapes::table.filter(wine_grapes::id.eq(wine_id)))
        .execute(&*connection);
    if let Err(e) = delete_result {
        return Err(VinotecaError::Internal(format!(
            "Error deleting existing wine grapes for wine with id{}: {}",
            wine_id, e
        )));
    }

    diesel::insert_into(wine_grapes::table)
        .values(&wine_grapes)
        .execute(&*connection)?;
    get(Some(wine_id), None, connection)
}

#[cfg(tests)]
mod tests {
    use super::*;

    #[test]
    fn test_post_validation() {
        unimplemented!();
    }
}
