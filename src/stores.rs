use diesel::prelude::*;
use diesel_async::RunQueryDsl;
use rocket::serde::json::Json;
use rocket_db_pools::Connection;
use validator::Validate;

use crate::error::{RestResult, VinotecaError};
use crate::models::{NewStore, Store, StoreForm};
use crate::query_utils::IntoFirst;
use crate::schema::stores;
use crate::users::Auth;
use crate::Db;

#[get("/stores?<id>&<name>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    mut conn: Connection<Db>,
) -> RestResult<Vec<Store>> {
    let mut query = stores::table
        .filter(stores::user_id.eq(auth.id))
        .into_boxed();
    if let Some(id) = id {
        query = query.filter(stores::id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(stores::name.eq(name));
    }
    query
        .select((stores::id, stores::name))
        .load::<Store>(&mut **conn)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[post("/stores", format = "json", data = "<store_form>")]
pub async fn post(
    auth: Auth,
    store_form: Json<StoreForm>,
    mut conn: Connection<Db>,
) -> RestResult<Store> {
    let store_form = store_form.into_inner();
    store_form.validate()?;

    let store_id = diesel::insert_into(stores::table)
        .values(NewStore::from((auth, store_form)))
        .returning(stores::id)
        .get_result(&mut **conn)
        .await
        .map_err(VinotecaError::from)?;
    get(auth, Some(store_id), None, conn)
        .await?
        .into_first("Newly-created store")
}
