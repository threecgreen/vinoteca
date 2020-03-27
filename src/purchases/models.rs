use chrono::NaiveDate;
use diesel::sql_types::{Float, Integer, Nullable, Text};
use diesel::QueryableByName;
use serde::Serialize;
use typescript_definitions::TypeScriptify;

// Includes wine info for convenience
#[derive(Queryable, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct RecentPurchase {
    pub id: i32,
    pub price: Option<f64>,
    pub quantity: i32,
    pub vintage: Option<i32>,
    pub memo: Option<String>,
    pub store: Option<String>,
    pub date: Option<NaiveDate>,
    pub wine_id: i32,
    pub wine_name: Option<String>,
    pub producer_id: i32,
    pub producer: String,
    pub region_id: i32,
    pub region: String,
    pub wine_type_id: i32,
    pub wine_type: String,
}

#[derive(QueryableByName, Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct YearsPurchases {
    #[sql_type = "Integer"]
    pub year: i32,
    #[sql_type = "Integer"]
    pub quantity: i32,
    #[sql_type = "Nullable<Float>"]
    pub total_price: Option<f32>,
    #[sql_type = "Nullable<Float>"]
    pub avg_price: Option<f32>,
}

#[derive(Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct TotalLiters {
    pub total_liters: f32,
}

#[derive(Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct PurchaseCount {
    pub count: i64,
}

#[derive(Serialize, QueryableByName, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct MostCommonPurchaseDate {
    #[sql_type = "Nullable<Text>"]
    pub most_common_purchase_date: Option<String>,
}
