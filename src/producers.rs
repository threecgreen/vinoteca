use diesel::dsl::sql;
use diesel::prelude::*;
use diesel_async::{AsyncPgConnection, RunQueryDsl};
use rocket::serde::json::Json;
use rocket_db_pools::Connection;
use validator::Validate;

use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, NewProducer, Producer, ProducerForm};
use crate::query_utils::IntoFirst;
use crate::schema::{producers, purchases, regions, wines};
use crate::users::Auth;
use crate::Db;

#[get("/producers?<id>&<name>&<region_id>&<region_name>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    region_id: Option<i32>,
    region_name: Option<String>,
    mut conn: Connection<Db>,
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
        .load::<Producer>(&mut **conn)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/producers/<id>")]

pub async fn get_one(auth: Auth, id: i32, conn: Connection<Db>) -> RestResult<Producer> {
    let producer = get(auth, Some(id), None, None, None, conn).await?;
    producer.into_first(&format!("Producer with id: {}", id))
}

#[get("/producers/top?<limit>")]
pub async fn top(
    auth: Auth,
    limit: Option<usize>,
    mut conn: Connection<Db>,
) -> RestResult<Vec<generic::TopEntity>> {
    let limit = limit.unwrap_or(10);
    top_table!(
        producers::table
            .inner_join(wines::table.inner_join(purchases::table))
            .filter(producers::user_id.eq(auth.id)),
        producers::id,
        producers::name,
        limit,
        conn
    )
}

#[post("/producers", format = "json", data = "<producer_form>")]
pub async fn post(
    auth: Auth,
    producer_form: Json<ProducerForm>,
    mut conn: Connection<Db>,
) -> RestResult<Producer> {
    let producer_form = producer_form.into_inner();
    producer_form.validate()?;
    let new_producer = NewProducer::from((auth, producer_form));

    let producer_id = diesel::insert_into(producers::table)
        .values(new_producer)
        .returning(producers::id)
        .get_result::<i32>(&mut **conn)
        .await
        .map_err(VinotecaError::from)?;
    get(auth, Some(producer_id), None, None, None, conn)
        .await?
        .into_first("Newly-created producer")
}

#[put("/producers/<id>", format = "json", data = "<producer_form>")]
pub async fn put(
    auth: Auth,
    id: i32,
    producer_form: Json<ProducerForm>,
    mut conn: Connection<Db>,
) -> RestResult<Producer> {
    let producer_form = producer_form.into_inner();
    producer_form.validate()?;

    validate_owns_producer(auth, id, &mut **conn).await?;

    diesel::update(producers::table.filter(producers::id.eq(id)))
        .set(NewProducer::from((auth, producer_form)))
        .execute(&mut **conn)
        .await
        .map_err(VinotecaError::from)?;

    get(auth, Some(id), None, None, None, conn)
        .await?
        .into_first("Edited producer")
}

#[delete("/producers/<id>")]
pub async fn delete(auth: Auth, id: i32, mut conn: Connection<Db>) -> Result<(), VinotecaError> {
    validate_owns_producer(auth, id, &mut **conn).await?;

    diesel::delete(producers::table.filter(producers::id.eq(id)))
        .execute(&mut **conn)
        .await
        .map(|_| ())
        .map_err(VinotecaError::from)
}

async fn validate_owns_producer(
    auth: Auth,
    id: i32,
    conn: &mut AsyncPgConnection,
) -> Result<(), VinotecaError> {
    producers::table
        .filter(producers::id.eq(id))
        .filter(producers::user_id.eq(auth.id))
        .select(producers::id)
        .first::<i32>(conn)
        .await?;

    Ok(())
}
