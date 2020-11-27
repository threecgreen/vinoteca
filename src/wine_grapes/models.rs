use super::validation::{validate_total_percentage, validate_unique};
use crate::models::WineGrapeForm;

use serde::{Deserialize, Serialize};
use typescript_definitions::TypeScriptify;

#[derive(Deserialize, Serialize, Validate, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct AssociatedGrape {
    #[validate(range(min = 0, max = 100))]
    pub percent: Option<i32>,
    pub grape_id: i32,
}

#[derive(Deserialize, Serialize, Validate, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct WineGrapesForm {
    pub wine_id: i32,
    #[validate] // Nested validation
    #[validate(custom = "validate_total_percentage")]
    #[validate(custom = "validate_unique")]
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
