use crate::error::{RestResult, VinotecaError};
use crate::models::{Region, RegionForm};
use crate::schema::{producers, regions};
use crate::DbConn;

use diesel;
use diesel::prelude::*;
use rocket_contrib::json::Json;
use validator::Validate;

// TODO: get flag data for autocomplete
#[get("/regions?<id>&<name>&<producer_name>")]
pub fn get(
    id: Option<i32>,
    name: Option<String>,
    producer_name: Option<String>,
    connection: DbConn,
) -> RestResult<Vec<Region>> {
    // Still want to include regions that don't have a producer associated with them
    let mut query = regions::table.left_join(producers::table).into_boxed();
    if let Some(id) = id {
        query = query.filter(regions::id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(regions::name.eq(name));
    }
    if let Some(producer_name) = producer_name {
        query = query.filter(producers::name.eq(producer_name));
    }
    query
        .select((regions::id, regions::name))
        .distinct()
        .load::<Region>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

#[post("/regions", format = "json", data = "<region_form>")]
pub fn post(region_form: Json<RegionForm>, connection: DbConn) -> RestResult<Region> {
    let region_form = region_form.into_inner();
    region_form.validate()?;

    diesel::insert_into(regions::table)
        .values(&region_form)
        .execute(&*connection)
        .and_then(|_| {
            regions::table
                .filter(regions::name.eq((*region_form.name).to_owned()))
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from)
}

#[put("/regions/<id>", format = "json", data = "<region_form>")]
pub fn put(id: i32, region_form: Json<RegionForm>, connection: DbConn) -> RestResult<Region> {
    let region_form = region_form.into_inner();
    region_form.validate()?;

    diesel::update(regions::table.filter(regions::id.eq(id)))
        .set(regions::name.eq(region_form.name))
        .execute(&*connection)
        .and_then(|_| {
            regions::table
                .filter(regions::id.eq(id))
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from)
}
