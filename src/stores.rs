use crate::error::{RestResult, VinotecaError};
use crate::models::{NewStore, Store, StoreForm};
use crate::query_utils::IntoFirst;
use crate::schema::stores;
use crate::users::Auth;
use crate::DbConn;

use diesel::prelude::*;
use rocket::serde::json::Json;
use validator::Validate;

#[get("/stores?<id>&<name>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    conn: DbConn,
) -> RestResult<Vec<Store>> {
    conn.run(move |c| {
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
            .load::<Store>(c)
            .map(Json)
            .map_err(VinotecaError::from)
    })
    .await
}

#[post("/stores", format = "json", data = "<store_form>")]
pub async fn post(auth: Auth, store_form: Json<StoreForm>, conn: DbConn) -> RestResult<Store> {
    let store_form = store_form.into_inner();
    store_form.validate()?;

    let store_id = conn
        .run(move |c| {
            diesel::insert_into(stores::table)
                .values(NewStore::from((auth, store_form)))
                .returning(stores::id)
                .get_result(c)
                .map_err(VinotecaError::from)
        })
        .await?;
    get(auth, Some(store_id), None, conn)
        .await?
        .into_first("Newly-created store")
}
