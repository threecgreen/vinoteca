use crate::error::{RestResult, VinotecaError};
use crate::models::{NewStore, Store, StoreForm};
use crate::query_utils::{DbConn, IntoFirst};
use crate::schema::stores;
use crate::users::Auth;

use diesel::prelude::*;
use diesel_async::RunQueryDsl;
use rocket::serde::json::Json;
use rocket::{get, post};
use validator::Validate;

#[get("/stores?<id>&<name>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    mut connection: DbConn,
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
        .load::<Store>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[post("/stores", format = "json", data = "<store_form>")]
pub async fn post(
    auth: Auth,
    store_form: Json<StoreForm<'_>>,
    mut connection: DbConn,
) -> RestResult<Store> {
    let store_form = store_form.into_inner();
    store_form.validate()?;

    let store_id: i32 = diesel::insert_into(stores::table)
        .values(NewStore::from((auth, store_form)))
        .returning(stores::id)
        .get_result(&mut *connection)
        .await
        .map_err(VinotecaError::from)?;

    // Query the newly created store
    stores::table
        .filter(stores::user_id.eq(auth.id))
        .filter(stores::id.eq(store_id))
        .select((stores::id, stores::name))
        .load::<Store>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)?
        .into_first("Newly-created store")
}
