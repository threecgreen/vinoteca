// use super::image::Image;
use crate::models::WineForm;

use chrono::NaiveDate;
use diesel::sql_types::{Date, Double, Integer, Nullable, Text};
use diesel::QueryableByName;
use rocket::serde::json::Json;
use serde::{Deserialize, Serialize};
use typescript_definitions::TypeScriptify;

// FIXME: better name for this
#[derive(FromForm)]
pub struct RawWineForm {
    /// JSON data for database
    pub wine_form: Json<WineForm>,
    /// raw submitted wine image
    /// FIXME: data limits
    pub image: Option<Vec<u8>>,
}

#[derive(Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct WineCount {
    pub count: i64,
}

#[derive(Deserialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub enum WinePatchForm {
    Inventory(i32),
    IsInShoppingList(bool),
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
    #[ts(ts_type = "Date | null")]
    #[sql_type = "Nullable<Date>"]
    pub last_purchase_date: Option<NaiveDate>,
    #[sql_type = "Integer"]
    pub inventory: i32,
    #[sql_type = "Nullable<Double>"]
    pub last_purchase_price: Option<f64>,
}

#[derive(Debug, Clone, Copy, Deserialize, TypeScriptify)]
pub enum Rotation {
    Clockwise90,
    CounterClockwise90,
    Clockwise180,
}

#[derive(Debug, Deserialize, TypeScriptify)]
pub struct RotationForm {
    pub rotation: Rotation,
}
