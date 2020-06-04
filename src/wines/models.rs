use super::image::Image;
use crate::models::WineForm;

use chrono::NaiveDate;
use diesel::sql_types::{Date, Double, Integer, Nullable, Text};
use diesel::QueryableByName;
use serde::{Deserialize, Serialize};
use typescript_definitions::TypeScriptify;
use validator::Validate;

pub struct RawWineForm {
    /// raw submitted wine image
    pub image: Option<Image>,
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

#[derive(QueryableByName, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct InventoryWine {
    #[sql_type = "Integer"]
    pub id: i32,
    #[sql_type = "Text"]
    pub color: String,
    #[sql_type = "Nullable<Text>"]
    pub name: Option<String>,
    #[sql_type = "Integer"]
    pub wine_type_id: i32,
    #[sql_type = "Text"]
    pub wine_type: String,
    #[sql_type = "Integer"]
    pub producer_id: i32,
    #[sql_type = "Text"]
    pub producer: String,
    #[sql_type = "Integer"]
    pub region_id: i32,
    #[sql_type = "Text"]
    pub region: String,
    #[sql_type = "Nullable<Integer>"]
    pub last_purchase_vintage: Option<i32>,
    #[ts(ts_type = "string | null")]
    #[sql_type = "Nullable<Date>"]
    pub last_purchase_date: Option<NaiveDate>,
    #[sql_type = "Integer"]
    pub inventory: i32,
    #[sql_type = "Nullable<Double>"]
    pub last_purchase_price: Option<f64>,
}
