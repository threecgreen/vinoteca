use super::schema::*;

use diesel::{Insertable, Queryable};
use serde::{Deserialize, Serialize};
use typescript_definitions::TypeScriptify;
use validator::Validate;

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Color {
    pub id: i32,
    pub name: String,
}

#[derive(Deserialize, Insertable, Validate, TypeScriptify, Debug)]
#[table_name = "colors"]
#[serde(rename_all = "camelCase")]
pub struct ColorForm<'a> {
    #[validate(length(min = 1))]
    pub name: &'a str,
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Grape {
    pub id: i32,
    pub name: String,
    pub wine_count: i32,
}

#[derive(Deserialize, Insertable, TypeScriptify, Debug)]
#[table_name = "grapes"]
#[serde(rename_all = "camelCase")]
pub struct GrapeForm<'a> {
    pub id: i32,
    pub name: &'a str,
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Producer {
    pub id: i32,
    pub name: String,
    pub region_id: i32,
}

#[derive(AsChangeset, Deserialize, Insertable, Validate, TypeScriptify, Debug)]
#[table_name = "producers"]
#[serde(rename_all = "camelCase")]
pub struct ProducerForm<'a> {
    #[validate(length(min = 1))]
    pub name: &'a str,
    pub region_id: i32,
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Purchase {
    pub id: i32,
    pub price: Option<f32>,
    pub quantity: Option<i32>,
    pub vintage: Option<i32>,
    pub memo: Option<String>,
    pub store: Option<String>,
    pub store_id: Option<i32>,
    pub wine_id: i32,
    pub date: Option<i32>,
}

#[derive(AsChangeset, Deserialize, Insertable, Validate, TypeScriptify, Debug)]
#[table_name = "purchases"]
#[serde(rename_all = "camelCase")]
pub struct PurchaseForm {
    #[validate(range(min = 0.0))]
    pub price: Option<f32>,
    #[validate(range(min = 1))]
    pub quantity: Option<i32>,
    #[validate(range(min = 1900))]
    pub vintage: Option<i32>,
    #[validate(length(min = 1))]
    pub memo: Option<String>,
    pub store_id: Option<i32>,
    pub wine_id: i32,
    #[validate(range(min = 19900101))]
    pub date: Option<i32>,
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Region {
    pub id: i32,
    pub name: String,
}

#[derive(Deserialize, Insertable, Validate, TypeScriptify, Debug)]
#[table_name = "regions"]
#[serde(rename_all = "camelCase")]
pub struct RegionForm<'a> {
    #[validate(length(min = 1))]
    pub name: &'a str,
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Store {
    pub id: i32,
    pub name: String,
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct VitiArea {
    pub id: i32,
    pub name: String,
    pub region_id: i32,
    pub region: String,
}

#[derive(AsChangeset, Deserialize, Insertable, Validate, TypeScriptify, Debug)]
#[table_name = "viti_areas"]
#[serde(rename_all = "camelCase")]
pub struct VitiAreaForm<'a> {
    #[validate(length(min = 1))]
    pub name: &'a str,
    pub region_id: i32,
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct WineGrape {
    pub id: i32,
    pub percent: Option<i32>,
    pub grape_id: i32,
    pub grape: String,
    pub wine_id: i32,
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct WineType {
    pub id: i32,
    pub name: String,
}

#[derive(Deserialize, Insertable, Validate, TypeScriptify, Debug)]
#[table_name = "wine_types"]
#[serde(rename_all = "camelCase")]
pub struct WineTypeForm<'a> {
    #[validate(length(min = 1))]
    pub name: &'a str,
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Wine {
    pub id: i32,
    pub description: Option<String>,
    pub notes: Option<String>,
    pub rating: Option<f32>,
    pub inventory: i32,
    pub why: Option<String>,
    pub color_id: i32,
    pub color: String,
    pub producer_id: i32,
    pub producer: String,
    pub region_id: i32,
    pub region: String,
    pub viti_area_id: Option<i32>,
    pub viti_area: Option<String>,
    pub name: Option<String>,
    pub wine_type_id: i32,
    pub wine_type: String,
    pub last_purchase_vintage: Option<i32>,
}
