use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, NewProducer, Producer, ProducerForm};
use crate::query_utils::IntoFirst;
use crate::schema::{producers, purchases, regions, wines};
use crate::users::Auth;
use crate::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use rocket::serde::json::Json;
use validator::Validate;

#[get("/producers?<id>&<name>&<region_id>&<region_name>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    region_id: Option<i32>,
    region_name: Option<String>,
    conn: DbConn,
) -> RestResult<Vec<Producer>> {
    conn.run(move |c| {
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
            .load::<Producer>(c)
            .map(Json)
            .map_err(VinotecaError::from)
    })
    .await
}

#[get("/producers/<id>")]
pub async fn get_one(auth: Auth, id: i32, conn: DbConn) -> RestResult<Producer> {
    let producer = get(auth, Some(id), None, None, None, conn).await?;
    producer.into_first(&format!("Producer with id: {}", id))
}

#[get("/producers/top?<limit>")]
pub async fn top(
    auth: Auth,
    limit: Option<usize>,
    conn: DbConn,
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
    .await
}

#[post("/producers", format = "json", data = "<producer_form>")]
pub async fn post(
    auth: Auth,
    producer_form: Json<ProducerForm>,
    conn: DbConn,
) -> RestResult<Producer> {
    let producer_form = producer_form.into_inner();
    producer_form.validate()?;
    let new_producer = NewProducer::from((auth, producer_form));

    let producer_id = conn
        .run(move |c| {
            diesel::insert_into(producers::table)
                .values(new_producer)
                .returning(producers::id)
                .get_result::<i32>(c)
                .map_err(VinotecaError::from)
        })
        .await?;
    get(auth, Some(producer_id), None, None, None, conn)
        .await?
        .into_first("Newly-created producer")
}

#[put("/producers/<id>", format = "json", data = "<producer_form>")]
pub async fn put(
    auth: Auth,
    id: i32,
    producer_form: Json<ProducerForm>,
    conn: DbConn,
) -> RestResult<Producer> {
    let producer_form = producer_form.into_inner();
    producer_form.validate()?;

    validate_owns_producer(auth, id, &conn).await?;

    conn.run(move |c| {
        diesel::update(producers::table.filter(producers::id.eq(id)))
            .set(NewProducer::from((auth, producer_form)))
            .execute(c)
            .map_err(VinotecaError::from)
    })
    .await?;

    get(auth, Some(id), None, None, None, conn)
        .await?
        .into_first("Edited producer")
}

#[delete("/producers/<id>")]
pub async fn delete(auth: Auth, id: i32, conn: DbConn) -> Result<(), VinotecaError> {
    validate_owns_producer(auth, id, &conn).await?;

    conn.run(move |c| {
        diesel::delete(producers::table.filter(producers::id.eq(id)))
            .execute(c)
            .map(|_| ())
            .map_err(VinotecaError::from)
    })
    .await
}

async fn validate_owns_producer(auth: Auth, id: i32, conn: &DbConn) -> Result<(), VinotecaError> {
    conn.run(move |c| {
        producers::table
            .filter(producers::id.eq(id))
            .filter(producers::user_id.eq(auth.id))
            .select(producers::id)
            .first::<i32>(c)
    })
    .await?;

    Ok(())
}
