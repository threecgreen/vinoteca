use crate::auth::Auth;
use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, NewWineType, WineType, WineTypeForm};
use crate::query_utils::IntoFirst;
use crate::schema::{purchases, wine_types, wines};
use crate::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use rocket_contrib::json::Json;
use validator::Validate;

#[get("/wine-types?<id>&<name>")]
pub fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    connection: DbConn,
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
        .load::<WineType>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

#[get("/wine-types/top?<limit>")]
pub fn top(
    auth: Auth,
    limit: Option<usize>,
    connection: DbConn,
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
        connection
    )
}

#[post("/wine-types", format = "json", data = "<wine_type_form>")]
pub fn post(
    auth: Auth,
    wine_type_form: Json<WineTypeForm>,
    connection: DbConn,
) -> RestResult<WineType> {
    let wine_type_form = wine_type_form.into_inner();
    wine_type_form.validate()?;

    diesel::insert_into(wine_types::table)
        .values(NewWineType::from((auth, wine_type_form)))
        .returning(wine_types::id)
        .get_result(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|wine_type_id| {
            get(auth, Some(wine_type_id), None, connection)?.into_first("Newly-created wine type")
        })
}

#[put("/wine-types/<id>", format = "json", data = "<wine_type_form>")]
pub fn put(
    auth: Auth,
    id: i32,
    wine_type_form: Json<WineTypeForm>,
    connection: DbConn,
) -> RestResult<WineType> {
    let wine_type_form = wine_type_form.into_inner();
    wine_type_form.validate()?;

    // Validate is user's wine type
    wine_types::table
        .filter(wine_types::id.eq(id))
        .filter(wine_types::user_id.eq(auth.id))
        .select(wine_types::id)
        .first::<i32>(&*connection)?;

    diesel::update(wine_types::table.filter(wine_types::id.eq(id)))
        .set(wine_types::name.eq(wine_type_form.name))
        .execute(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|_| get(auth, Some(id), None, connection)?.into_first("Edited wine type"))
}
