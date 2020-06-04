use crate::error::{RestResult, VinotecaError};
use crate::models::{NewStore, Store, StoreForm};
use crate::query_utils::IntoFirst;
use crate::schema::stores;
use crate::users::Auth;
use crate::DbConn;

use diesel::prelude::*;
use rocket_contrib::json::Json;
use validator::Validate;

#[get("/stores?<id>&<name>")]
pub fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    connection: DbConn,
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
        .load::<Store>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

#[post("/stores", format = "json", data = "<store_form>")]
pub fn post(auth: Auth, store_form: Json<StoreForm>, connection: DbConn) -> RestResult<Store> {
    let store_form = store_form.into_inner();
    store_form.validate()?;

    diesel::insert_into(stores::table)
        .values(NewStore::from((auth, store_form)))
        .returning(stores::id)
        .get_result(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|store_id| {
            get(auth, Some(store_id), None, connection)?.into_first("Newly-created store")
        })
}
