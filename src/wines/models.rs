// use super::image::Image;
use crate::models::WineForm;

use chrono::NaiveDate;
// use rocket::fs::TempFile;
use rocket::serde::json::Json;
use serde::{Deserialize, Serialize};
use typescript_definitions::TypeScriptify;

// FIXME: better name for this
#[derive(FromForm)]
pub struct RawWineForm {
    /// JSON data for database
    pub wine_form: Json<WineForm>,
    // raw submitted wine image
    // FIXME: data limits
    // pub image: Option<TempFile<'r>>,
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

#[derive(Queryable, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct InventoryWine {
    pub id: i32,
    pub color: String,
    pub name: Option<String>,
    pub wine_type_id: i32,
    pub wine_type: String,
    pub producer_id: i32,
    pub producer: String,
    pub region_id: i32,
    pub region: String,
    pub last_purchase_vintage: Option<i32>,
    #[ts(ts_type = "Date | null")]
    pub last_purchase_date: Option<NaiveDate>,
    pub inventory: i32,
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
