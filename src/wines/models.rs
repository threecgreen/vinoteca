use crate::models::WineForm;

use serde::Serialize;
use typescript_definitions::TypeScriptify;

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
