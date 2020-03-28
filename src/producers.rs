use crate::auth::Auth;
use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, NewProducer, Producer, ProducerForm};
use crate::query_utils::IntoFirst;
use crate::schema::{producers, purchases, regions, wines};
use crate::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::{Float, Integer};
use rocket_contrib::json::Json;
use validator::Validate;

#[get("/producers?<id>&<name>&<region_id>&<region_name>")]
pub fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    region_id: Option<i32>,
    region_name: Option<String>,
    connection: DbConn,
) -> RestResult<Vec<Producer>> {
    let mut query = producers::table
        .inner_join(regions::table)
        .filter(producers::user_id.eq(auth.id))
        .into_boxed();
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

#[get("/producers/top?<limit>")]
pub fn top(
    auth: Auth,
    limit: Option<usize>,
    connection: DbConn,
) -> RestResult<Vec<generic::TopEntity>> {
    let limit = limit.unwrap_or(10);
    top_table!(
        producers::table
            .inner_join(wines::table.inner_join(purchases::table))
            .filter(producers::user_id.eq(auth.id)),
        producers::id,
        producers::name,
        limit,
        connection
    )
}

#[post("/producers", format = "json", data = "<producer_form>")]
pub fn post(
    auth: Auth,
    producer_form: Json<ProducerForm>,
    connection: DbConn,
) -> RestResult<Producer> {
    let producer_form = producer_form.into_inner();
    producer_form.validate()?;

    diesel::insert_into(producers::table)
        .values(NewProducer::from((auth, producer_form)))
        .returning(producers::id)
        .get_result::<i32>(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|producer_id| {
            get(auth, Some(producer_id), None, None, None, connection)?
                .into_first("Newly-created producer")
        })
}

#[put("/producers/<id>", format = "json", data = "<producer_form>")]
pub fn put(
    auth: Auth,
    id: i32,
    producer_form: Json<ProducerForm>,
    connection: DbConn,
) -> RestResult<Producer> {
    let producer_form = producer_form.into_inner();
    producer_form.validate()?;

    validate_owns_producer(&auth, id, &connection)?;

    diesel::update(producers::table.filter(producers::id.eq(id)))
        .set(NewProducer::from((auth, producer_form)))
        .execute(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|_| {
            get(auth, Some(id), None, None, None, connection)?.into_first("Edited producer")
        })
}

#[delete("/producers/<id>")]
pub fn delete(auth: Auth, id: i32, connection: DbConn) -> Result<(), VinotecaError> {
    validate_owns_producer(&auth, id, &connection)?;

    diesel::delete(producers::table.filter(producers::id.eq(id)))
        .execute(&*connection)
        .map(|_| ())
        .map_err(VinotecaError::from)
}

fn validate_owns_producer(auth: &Auth, id: i32, connection: &DbConn) -> Result<(), VinotecaError> {
    producers::table
        .filter(producers::id.eq(id))
        .filter(producers::user_id.eq(auth.id))
        .select(producers::id)
        .first::<i32>(&**connection)?;

    Ok(())
}
