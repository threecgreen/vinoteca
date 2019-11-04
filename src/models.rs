use diesel::Queryable;

#[derive(Queryable, Clone)]
pub struct Color {
    pub id: i32,
    pub name: String,
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

#[derive(Queryable, Clone)]
pub struct Region {
    pub id: i32,
    pub name: String,
}

#[derive(Queryable, Clone)]
pub struct Store {
    pub id: i32,
    pub name: String,
}

#[derive(Queryable, Clone)]
pub struct VitiAreaRow {
    pub id: i32,
    pub name: String,
    pub region_id: i32,
}

#[derive(Queryable, Clone)]
pub struct WineGrapeRow {
    pub id: i32,
    pub percent: Option<u8>,
    pub grape_id: i32,
    pub wine_id: i32,
}

#[derive(Queryable, Clone)]
pub struct WineType {
    pub id: i32,
    pub name: String,
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
