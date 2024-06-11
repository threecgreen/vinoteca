use diesel::dsl::sql;
use diesel::prelude::*;
use diesel_async::RunQueryDsl;
use rocket::serde::json::Json;
use rocket_db_pools::Connection;
use validator::Validate;

use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, NewWineType, WineType, WineTypeForm};
use crate::query_utils::IntoFirst;
use crate::schema::{purchases, wine_types, wines};
use crate::users::Auth;
use crate::Db;

#[get("/wine-types?<id>&<name>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    mut conn: Connection<Db>,
) -> RestResult<Vec<WineType>> {
    let mut query = wine_types::table
        .filter(wine_types::user_id.eq(auth.id))
        .into_boxed();
    if let Some(id) = id {
        query = query.filter(wine_types::id.eq(id));
    }
    if let Some(name) = name {
        query = query.filter(wine_types::name.eq(name));
    }
    query
        .select((wine_types::id, wine_types::name))
        .load::<WineType>(&mut **conn)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/wine-types/<id>")]
pub async fn get_one(auth: Auth, id: i32, conn: Connection<Db>) -> RestResult<WineType> {
    let wine_types = get(auth, Some(id), None, conn).await?;
    wine_types.into_first(&format!("No wine type with id {}", id))
}

#[get("/wine-types/top?<limit>")]
pub async fn top(
    auth: Auth,
    limit: Option<usize>,
    mut conn: Connection<Db>,
) -> RestResult<Vec<generic::TopEntity>> {
    let limit = limit.unwrap_or(10);
    top_table!(
        wine_types::table
            .inner_join(wines::table.inner_join(purchases::table))
            .filter(wines::user_id.eq(auth.id))
            .filter(wine_types::user_id.eq(auth.id)),
        wine_types::id,
        wine_types::name,
        limit,
        conn
    )
}

#[post("/wine-types", format = "json", data = "<wine_type_form>")]
pub async fn post(
    auth: Auth,
    wine_type_form: Json<WineTypeForm>,
    mut conn: Connection<Db>,
) -> RestResult<WineType> {
    let wine_type_form = wine_type_form.into_inner();
    wine_type_form.validate()?;

    let wine_type_id = diesel::insert_into(wine_types::table)
        .values(NewWineType::from((auth, wine_type_form)))
        .returning(wine_types::id)
        .get_result(&mut **conn)
        .await
        .map_err(VinotecaError::from)?;
    get(auth, Some(wine_type_id), None, conn)
        .await?
        .into_first("Newly-created wine type")
}

#[put("/wine-types/<id>", format = "json", data = "<wine_type_form>")]
pub async fn put(
    auth: Auth,
    id: i32,
    wine_type_form: Json<WineTypeForm>,
    mut conn: Connection<Db>,
) -> RestResult<WineType> {
    let wine_type_form = wine_type_form.into_inner();
    wine_type_form.validate()?;

    // Validate is user's wine type
    wine_types::table
        .filter(wine_types::id.eq(id))
        .filter(wine_types::user_id.eq(auth.id))
        .select(wine_types::id)
        .first::<i32>(&mut **conn)
        .await?;

    diesel::update(wine_types::table.filter(wine_types::id.eq(id)))
        .set(wine_types::name.eq(wine_type_form.name))
        .execute(&mut **conn)
        .await
        .map_err(VinotecaError::from)?;
    get(auth, Some(id), None, conn)
        .await?
        .into_first("Edited wine type")
}
