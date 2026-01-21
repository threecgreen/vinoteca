use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, NewProducer, Producer, ProducerForm};
use crate::query_utils::{DbConn, IntoFirst};
use crate::schema::{producers, purchases, regions, wines};
use crate::users::Auth;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel_async::{AsyncPgConnection, RunQueryDsl};
use rocket::serde::json::Json;
use rocket::{delete, get, post, put};
use validator::Validate;

#[get("/producers?<id>&<name>&<region_id>&<region_name>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    region_id: Option<i32>,
    region_name: Option<String>,
    mut connection: DbConn,
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
    query
        .select((producers::id, producers::name, producers::region_id))
        .distinct()
        .load::<Producer>(&mut connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/producers/<id>")]
pub async fn get_one(auth: Auth, id: i32, mut connection: DbConn) -> RestResult<Producer> {
    producers::table
        .inner_join(regions::table)
        .filter(producers::user_id.eq(auth.id))
        .filter(producers::id.eq(id))
        .select((producers::id, producers::name, producers::region_id))
        .load::<Producer>(&mut connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)?
        .into_first(&format!("Producer with id: {}", id))
}

#[get("/producers/top?<limit>")]
pub async fn top(
    auth: Auth,
    limit: Option<usize>,
    mut connection: DbConn,
) -> RestResult<Vec<generic::TopEntity>> {
    let limit = limit.unwrap_or(10);
    top_table!(
        producers::table
            .inner_join(wines::table.inner_join(purchases::table))
            .filter(producers::user_id.eq(auth.id)),
        producers::id,
        producers::name,
        limit,
        &mut connection
    )
}

#[post("/producers", format = "json", data = "<producer_form>")]
pub async fn post(
    auth: Auth,
    producer_form: Json<ProducerForm<'_>>,
    mut connection: DbConn,
) -> RestResult<Producer> {
    let producer_form = producer_form.into_inner();
    producer_form.validate()?;

    let producer_id: i32 = diesel::insert_into(producers::table)
        .values(NewProducer::from((auth, producer_form)))
        .returning(producers::id)
        .get_result(&mut connection)
        .await
        .map_err(VinotecaError::from)?;

    // Query the newly created producer
    producers::table
        .inner_join(regions::table)
        .filter(producers::user_id.eq(auth.id))
        .filter(producers::id.eq(producer_id))
        .select((producers::id, producers::name, producers::region_id))
        .load::<Producer>(&mut connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)?
        .into_first("Newly-created producer")
}

#[put("/producers/<id>", format = "json", data = "<producer_form>")]
pub async fn put(
    auth: Auth,
    id: i32,
    producer_form: Json<ProducerForm<'_>>,
    mut connection: DbConn,
) -> RestResult<Producer> {
    let producer_form = producer_form.into_inner();
    producer_form.validate()?;

    validate_owns_producer(auth, id, &mut connection).await?;

    diesel::update(producers::table.filter(producers::id.eq(id)))
        .set(NewProducer::from((auth, producer_form)))
        .execute(&mut connection)
        .await
        .map_err(VinotecaError::from)?;

    // Query the updated producer
    producers::table
        .inner_join(regions::table)
        .filter(producers::user_id.eq(auth.id))
        .filter(producers::id.eq(id))
        .select((producers::id, producers::name, producers::region_id))
        .load::<Producer>(&mut connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)?
        .into_first("Edited producer")
}

#[delete("/producers/<id>")]
pub async fn delete(auth: Auth, id: i32, mut connection: DbConn) -> Result<(), VinotecaError> {
    validate_owns_producer(auth, id, &mut connection).await?;

    diesel::delete(producers::table.filter(producers::id.eq(id)))
        .execute(&mut connection)
        .await
        .map(|_| ())
        .map_err(VinotecaError::from)
}

async fn validate_owns_producer(
    auth: Auth,
    id: i32,
    connection: &mut AsyncPgConnection,
) -> Result<(), VinotecaError> {
    producers::table
        .filter(producers::id.eq(id))
        .filter(producers::user_id.eq(auth.id))
        .select(producers::id)
        .first::<i32>(connection)
        .await?;

    Ok(())
}
