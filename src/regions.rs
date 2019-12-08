use super::{error_status, DbConn};
use diesel;
use diesel::prelude::*;
use models::{Region, RegionForm};
use rocket::http::Status;
use rocket_contrib::json::Json;
use schema::{producers, regions};

#[get("/regions?<id>&<name>&<producer_name>")]
pub fn get(
    id: Option<i32>,
    name: Option<String>,
    producer_name: Option<String>,
    connection: DbConn,
) -> Result<Json<Vec<Region>>, Status> {
    let mut query = regions::table.into_boxed();
    if let Some(region_id) = id {
        query = query.filter(regions::id.eq(region_id));
    }
    if let Some(region_name) = name {
        query = query.filter(regions::name.eq(region_name))
    }
    // if let Some(s_producer_name) = producer_name {
    //     query = query.inner_join(producers::table)
    //         .filter(producers::name.eq(s_producer_name))
    //         .select((regions::id, regions::name));
    //         // .filter(producers::name.eq(s_producer_name));
    // }
    query
        .load::<Region>(&*connection)
        .map(Json)
        .map_err(error_status)
}

#[post("/regions", format = "json", data = "<region_form>")]
pub fn post(connection: DbConn, region_form: Json<RegionForm>) -> Result<Json<Region>, Status> {
    diesel::insert_into(regions::table)
        .values(&region_form)
        .execute(&*connection)
        .map_err(error_status)
}
