use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, NewWineType, WineType, WineTypeForm};
use crate::query_utils::{DbConn, IntoFirst};
use crate::schema::{purchases, wine_types, wines};
use crate::users::Auth;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel_async::RunQueryDsl;
use rocket::serde::json::Json;
use rocket::{get, post, put};
use validator::Validate;

#[get("/wine-types?<id>&<name>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    mut connection: DbConn,
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
        .load::<WineType>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/wine-types/<id>")]
pub async fn get_one(auth: Auth, id: i32, mut connection: DbConn) -> RestResult<WineType> {
    wine_types::table
        .filter(wine_types::user_id.eq(auth.id))
        .filter(wine_types::id.eq(id))
        .select((wine_types::id, wine_types::name))
        .load::<WineType>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)?
        .into_first(&format!("No wine type with id {}", id))
}

#[get("/wine-types/top?<limit>")]
pub async fn top(
    auth: Auth,
    limit: Option<usize>,
    mut connection: DbConn,
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
        &mut *connection
    )
}

#[post("/wine-types", format = "json", data = "<wine_type_form>")]
pub async fn post(
    auth: Auth,
    wine_type_form: Json<WineTypeForm<'_>>,
    mut connection: DbConn,
) -> RestResult<WineType> {
    let wine_type_form = wine_type_form.into_inner();
    wine_type_form.validate()?;

    let wine_type_id: i32 = diesel::insert_into(wine_types::table)
        .values(NewWineType::from((auth, wine_type_form)))
        .returning(wine_types::id)
        .get_result(&mut *connection)
        .await
        .map_err(VinotecaError::from)?;

    // Query the newly created wine type
    wine_types::table
        .filter(wine_types::user_id.eq(auth.id))
        .filter(wine_types::id.eq(wine_type_id))
        .select((wine_types::id, wine_types::name))
        .load::<WineType>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)?
        .into_first("Newly-created wine type")
}

#[put("/wine-types/<id>", format = "json", data = "<wine_type_form>")]
pub async fn put(
    auth: Auth,
    id: i32,
    wine_type_form: Json<WineTypeForm<'_>>,
    mut connection: DbConn,
) -> RestResult<WineType> {
    let wine_type_form = wine_type_form.into_inner();
    wine_type_form.validate()?;

    // Validate is user's wine type
    wine_types::table
        .filter(wine_types::id.eq(id))
        .filter(wine_types::user_id.eq(auth.id))
        .select(wine_types::id)
        .first::<i32>(&mut *connection)
        .await?;

    diesel::update(wine_types::table.filter(wine_types::id.eq(id)))
        .set(wine_types::name.eq(wine_type_form.name))
        .execute(&mut *connection)
        .await
        .map_err(VinotecaError::from)?;

    // Query the updated wine type
    wine_types::table
        .filter(wine_types::user_id.eq(auth.id))
        .filter(wine_types::id.eq(id))
        .select((wine_types::id, wine_types::name))
        .load::<WineType>(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)?
        .into_first("Edited wine type")
}
