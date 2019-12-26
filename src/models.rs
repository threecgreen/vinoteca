use super::schema::*;

use diesel::{Insertable, Queryable};
extern crate serde;
use serde::{Deserialize, Serialize};

#[derive(Queryable, Clone, Serialize, Debug)]
pub struct Color {
    pub id: i32,
    pub name: String,
}

#[derive(Deserialize, Insertable, Debug)]
#[table_name = "colors"]
pub struct ColorForm<'a> {
    name: &'a str,
}

pub struct Grape {
    pub id: i32,
    pub name: String,
}

#[derive(Queryable, Clone)]
pub struct ProducerRow {
    pub id: i32,
    pub name: String,
    pub region_id: Option<i32>,
}

#[derive(Queryable, Clone)]
pub struct PurchaseRow {
    pub id: i32,
    pub price: Option<f64>,
    pub quantity: Option<u8>,
    pub vintage: Option<u8>,
    pub memo: Option<String>,
    pub store_id: Option<i32>,
    pub wine_id: i32,
    pub date: Option<i32>,
}

#[derive(Queryable, Clone, Serialize, Debug)]
pub struct Region {
    pub id: i32,
    pub name: String,
}

#[derive(Deserialize, Insertable, Debug)]
#[table_name = "regions"]
pub struct RegionForm<'a> {
    pub name: &'a str,
}

#[derive(Queryable, Clone)]
pub struct Store {
    pub id: i32,
    pub name: String,
}

#[derive(Queryable, Clone, Serialize, Debug)]
pub struct VitiArea {
    pub id: i32,
    pub name: String,
    pub region: String,
}

#[derive(AsChangeset, Deserialize, Insertable, Debug)]
#[table_name = "viti_areas"]
pub struct VitiAreaForm<'a> {
    pub name: &'a str,
    pub region_id: i32,
}

#[derive(Queryable, Clone, Serialize, Debug)]
pub struct WineGrape {
    pub id: i32,
    pub percent: Option<i32>,
    pub grape_id: i32,
    pub wine_id: i32,
}

#[derive(Queryable, Clone, Serialize, Debug)]
pub struct WineType {
    pub id: i32,
    pub name: String,
}

#[derive(Deserialize, Insertable, Debug)]
#[table_name = "wine_types"]
pub struct WineTypeForm<'a> {
    pub name: &'a str,
}

#[derive(Queryable, Clone)]
pub struct WineRow {
    pub id: i32,
    pub description: Option<String>,
    pub notes: Option<String>,
    pub rating: Option<f64>,
    pub inventory: u8,
    pub why: Option<String>,
    pub color_id: Option<i32>,
    pub producer_id: Option<i32>,
    pub viti_area_id: Option<i32>,
    pub name: Option<String>,
    pub wine_type_id: Option<i32>,
}
