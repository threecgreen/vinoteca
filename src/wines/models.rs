use crate::models::WineForm;

use serde::{Deserialize, Serialize};
use typescript_definitions::TypeScriptify;
use validator::Validate;

pub struct RawWineForm {
    /// raw submitted wine image
    pub image: Option<Vec<u8>>,
    /// JSON data for database
    pub wine_form: WineForm,
}

#[derive(Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct WineCount {
    pub count: i64,
}

// Convert to enum if multiple patch types are necessary
#[derive(Deserialize, TypeScriptify, Validate, Debug)]
#[serde(rename_all = "camelCase")]
pub struct WinePatchForm {
    #[validate(range(min = 0))]
    pub inventory: i32,
}
