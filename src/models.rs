use crate::auth::Auth;
use crate::schema::*;

use chrono::NaiveDate;
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

#[derive(Deserialize, Validate, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct GrapeForm<'a> {
    #[validate(length(min = 1))]
    pub name: &'a str,
}

#[derive(Insertable, Debug)]
#[table_name = "grapes"]
pub struct NewGrape<'a> {
    pub name: &'a str,
    pub user_id: i32,
}

impl<'a> From<(Auth, GrapeForm<'a>)> for NewGrape<'a> {
    fn from((auth, form): (Auth, GrapeForm<'a>)) -> Self {
        Self {
            name: form.name,
            user_id: auth.id,
        }
    }
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Producer {
    pub id: i32,
    pub name: String,
    pub region_id: i32,
}

#[derive(Deserialize, Validate, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct ProducerForm<'a> {
    #[validate(length(min = 1))]
    pub name: &'a str,
    pub region_id: i32,
}

#[derive(AsChangeset, Insertable, Debug)]
#[table_name = "producers"]
pub struct NewProducer<'a> {
    pub name: &'a str,
    pub region_id: i32,
    pub user_id: i32,
}

impl<'a> From<(Auth, ProducerForm<'a>)> for NewProducer<'a> {
    fn from((auth, form): (Auth, ProducerForm<'a>)) -> Self {
        Self {
            name: form.name,
            region_id: form.region_id,
            user_id: auth.id,
        }
    }
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Purchase {
    pub id: i32,
    pub price: Option<f64>,
    pub quantity: i32,
    pub vintage: Option<i32>,
    pub memo: Option<String>,
    pub store: Option<String>,
    pub store_id: Option<i32>,
    pub wine_id: i32,
    pub date: Option<NaiveDate>,
}

#[derive(AsChangeset, Deserialize, Insertable, Validate, TypeScriptify, Debug)]
#[table_name = "purchases"]
#[serde(rename_all = "camelCase")]
pub struct PurchaseForm {
    #[validate(range(min = 0.0))]
    pub price: Option<f64>,
    #[validate(range(min = 1))]
    pub quantity: i32,
    #[validate(range(min = 1900))]
    pub vintage: Option<i32>,
    #[validate(length(min = 1))]
    pub memo: Option<String>,
    pub store_id: Option<i32>,
    pub wine_id: i32,
    // FIXME:
    // #[validate(range(min = 19900101))]
    pub date: Option<NaiveDate>,
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

#[derive(Deserialize, Validate, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct StoreForm<'a> {
    #[validate(length(min = 1))]
    pub name: &'a str,
}

#[derive(Insertable, Debug)]
#[table_name = "stores"]
pub struct NewStore<'a> {
    pub name: &'a str,
    pub user_id: i32,
}

impl<'a> From<(Auth, StoreForm<'a>)> for NewStore<'a> {
    fn from((auth, form): (Auth, StoreForm<'a>)) -> Self {
        Self {
            name: form.name,
            user_id: auth.id,
        }
    }
}

#[derive(Queryable)]
pub struct InternalUser {
    pub id: i32,
    pub email: String,
    pub name: String,
    pub image: Option<String>,
    pub hash: String,
}

#[derive(Clone, Queryable, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct User {
    pub email: String,
    pub name: String,
    pub image: Option<String>,
}

impl From<InternalUser> for User {
    fn from(internal: InternalUser) -> Self {
        Self {
            email: internal.email,
            name: internal.name,
            image: internal.image,
        }
    }
}

#[derive(Deserialize, Validate, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct UserForm<'a> {
    pub email: &'a str,
    pub name: &'a str,
    pub password: &'a str,
}

#[derive(AsChangeset, Insertable, Debug)]
#[table_name = "users"]
pub struct NewUser<'a> {
    pub email: &'a str,
    pub name: &'a str,
    pub image: Option<String>,
    pub hash: String,
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct VitiArea {
    pub id: i32,
    pub name: String,
    pub region_id: i32,
    pub region: String,
}

#[derive(Deserialize, Validate, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct VitiAreaForm<'a> {
    #[validate(length(min = 1))]
    pub name: &'a str,
    pub region_id: i32,
}

#[derive(AsChangeset, Insertable, Debug)]
#[table_name = "viti_areas"]
pub struct NewVitiArea<'a> {
    pub name: &'a str,
    pub region_id: i32,
    pub user_id: i32,
}

impl<'a> From<(Auth, VitiAreaForm<'a>)> for NewVitiArea<'a> {
    fn from((auth, form): (Auth, VitiAreaForm<'a>)) -> Self {
        Self {
            name: form.name,
            region_id: form.region_id,
            user_id: auth.id,
        }
    }
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Wine {
    pub id: i32,
    pub description: Option<String>,
    pub notes: Option<String>,
    pub rating: Option<i32>,
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

#[derive(Deserialize, Validate, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct WineForm {
    #[validate(length(min = 1))]
    pub description: Option<String>,
    #[validate(length(min = 1))]
    pub notes: Option<String>,
    #[validate(range(min = 0, max = 10))]
    pub rating: Option<i32>,
    #[validate(range(min = 0))]
    pub inventory: i32,
    #[validate(length(min = 1))]
    pub why: Option<String>,
    pub color_id: i32,
    pub producer_id: i32,
    pub viti_area_id: Option<i32>,
    #[validate(length(min = 1))]
    pub name: Option<String>,
    pub wine_type_id: i32,
}

#[derive(AsChangeset, Insertable, Debug)]
#[table_name = "wines"]
pub struct NewWine {
    pub description: Option<String>,
    pub notes: Option<String>,
    pub rating: Option<i32>,
    pub inventory: i32,
    pub why: Option<String>,
    pub color_id: i32,
    pub producer_id: i32,
    pub viti_area_id: Option<i32>,
    pub name: Option<String>,
    pub wine_type_id: i32,
    pub user_id: i32,
}

impl From<(Auth, WineForm)> for NewWine {
    fn from((auth, form): (Auth, WineForm)) -> Self {
        Self {
            description: form.description,
            notes: form.notes,
            rating: form.rating,
            inventory: form.inventory,
            why: form.why,
            color_id: form.color_id,
            producer_id: form.producer_id,
            viti_area_id: form.viti_area_id,
            name: form.name,
            wine_type_id: form.wine_type_id,
            user_id: auth.id,
        }
    }
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct WineGrape {
    pub percent: Option<i32>,
    pub grape_id: i32,
    pub grape: String,
    pub wine_id: i32,
}

#[derive(Deserialize, Insertable, Validate, TypeScriptify, Debug)]
#[table_name = "wine_grapes"]
#[serde(rename_all = "camelCase")]
pub struct WineGrapeForm {
    pub percent: Option<i32>,
    pub grape_id: i32,
    pub wine_id: i32,
}

#[derive(Queryable, Clone, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct WineType {
    pub id: i32,
    pub name: String,
}

#[derive(Deserialize, Validate, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct WineTypeForm<'a> {
    #[validate(length(min = 1))]
    pub name: &'a str,
}

#[derive(Insertable, Debug)]
#[table_name = "wine_types"]
pub struct NewWineType<'a> {
    pub name: &'a str,
    pub user_id: i32,
}

impl<'a> From<(Auth, WineTypeForm<'a>)> for NewWineType<'a> {
    fn from((auth, form): (Auth, WineTypeForm<'a>)) -> Self {
        Self {
            name: form.name,
            user_id: auth.id,
        }
    }
}

pub mod generic {
    use super::*;

    #[derive(Queryable, Serialize, TypeScriptify, Debug)]
    #[serde(rename_all = "camelCase")]
    pub struct TopEntity {
        pub id: i32,
        pub name: String,
        pub quantity: i32,
        pub varieties: i32,
        pub avg_price: f32,
    }
}
