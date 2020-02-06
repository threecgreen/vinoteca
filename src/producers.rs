use crate::error::{RestResult, VinotecaError};
use crate::models::{Producer, ProducerForm};
use crate::schema::{producers, purchases, regions, wines};
use crate::wine_types::TopWineType;
use crate::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::{Float, Integer};
use rocket_contrib::json::Json;
use validator::Validate;

#[get("/producers?<id>&<name>&<region_id>&<region_name>")]
pub fn get(
    id: Option<i32>,
    name: Option<String>,
    region_id: Option<i32>,
    region_name: Option<String>,
    connection: DbConn,
) -> RestResult<Vec<Producer>> {
    let mut query = producers::table.inner_join(regions::table).into_boxed();
    if let Some(id) = id {
        query = query.filter(producers::id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(producers::name.eq(name));
    }
    if let Some(region_id) = region_id {
        query = query.filter(regions::id.eq(region_id))
    }
    if let Some(region_name) = region_name {
        query = query.filter(regions::name.eq(region_name));
    }
    let final_query = query
        .select((producers::id, producers::name, producers::region_id))
        .distinct();
    final_query
        .load::<Producer>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

pub fn top<Table: diesel::Table + diesel::query_dsl::InternalJoinDsl<_, diesel::query_source::joins::Inner, _>>(table: Table, limit: usize, connection: DbConn) -> RestResult<Vec<TopWineType>> {
    table
        .inner_join(wines::table.inner_join(purchases::table))
        .group_by((producers::id, producers::name))
        .select((
            wines::id,
            wines::name,
            sql::<Integer>("sum(purchases.quantity)"),
            // Should probably be distinct
            sql::<Integer>("count(wines.id)"),
            sql::<Float>("avg(purchases.price)"),
        ))
        .order_by(sql::<Integer>("sum(purchases.quantity) DESC"))
        .limit(limit as i64)
        .load::<TopWineType>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/producers/top?<limit>")]
pub fn top2(limit: Option<usize>, connection: DbConn) -> RestResult<Vec<TopWineType>> {
    let limit = limit.unwrap_or(10);
    producers::table
        .inner_join(wines::table.inner_join(purchases::table))
        .group_by((producers::id, producers::name))
        .select((
            producers::id,
            producers::name,
            sql::<Integer>("sum(purchases.quantity)"),
            // Should probably be distinct
            sql::<Integer>("count(wines.id)"),
            sql::<Float>("avg(purchases.price)"),
        ))
        .order_by(sql::<Integer>("sum(purchases.quantity) DESC"))
        .limit(limit as i64)
        .load::<TopWineType>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

#[post("/producers", format = "json", data = "<producer_form>")]
pub fn post(producer_form: Json<ProducerForm>, connection: DbConn) -> RestResult<Producer> {
    let producer_form = producer_form.into_inner();
    producer_form.validate()?;
    diesel::insert_into(producers::table)
        .values(&producer_form)
        .execute(&*connection)
        .and_then(|_| {
            producers::table
                .filter(producers::name.eq((*producer_form.name).to_owned()))
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from)
}

#[put("/producers/<id>", format = "json", data = "<producer_form>")]
pub fn put(id: i32, producer_form: Json<ProducerForm>, connection: DbConn) -> RestResult<Producer> {
    let producer_form = producer_form.into_inner();
    producer_form.validate()?;
    diesel::update(producers::table.filter(producers::id.eq(id)))
        .set(producer_form)
        .execute(&*connection)
        .and_then(|_| {
            producers::table
                .filter(producers::id.eq(id))
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from)
}

#[delete("/producers/<id>")]
pub fn delete(id: i32, connection: DbConn) -> Result<(), VinotecaError> {
    diesel::delete(producers::table.filter(producers::id.eq(id)))
        .execute(&*connection)
        .map(|_| ())
        .map_err(VinotecaError::from)
}
