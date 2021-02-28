use crate::error::{RestResult, VinotecaError};
use crate::models::{generic, NewWineType, WineType, WineTypeForm};
use crate::query_utils::IntoFirst;
use crate::schema::{purchases, wine_types, wines};
use crate::users::Auth;
use crate::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use rocket_contrib::json::Json;
use validator::Validate;

#[get("/wine-types?<id>&<name>")]
pub async fn get(
    auth: Auth,
    id: Option<i32>,
    name: Option<String>,
    conn: DbConn,
) -> RestResult<Vec<WineType>> {
    conn.run(move |c| {
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
            .load::<WineType>(c)
            .map(Json)
            .map_err(VinotecaError::from)
    })
    .await
}

#[get("/wine-types/<id>")]
pub async fn get_one(auth: Auth, id: i32, conn: DbConn) -> RestResult<WineType> {
    let wine_types = get(auth, Some(id), None, conn).await?;
    wine_types.into_first(&format!("No wine type with id {}", id))
}

#[get("/wine-types/top?<limit>")]
pub async fn top(
    auth: Auth,
    limit: Option<usize>,
    conn: DbConn,
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
    .await
}

#[post("/wine-types", format = "json", data = "<wine_type_form>")]
pub async fn post(
    auth: Auth,
    wine_type_form: Json<WineTypeForm>,
    conn: DbConn,
) -> RestResult<WineType> {
    let wine_type_form = wine_type_form.into_inner();
    wine_type_form.validate()?;

    let wine_type_id = conn
        .run(move |c| {
            diesel::insert_into(wine_types::table)
                .values(NewWineType::from((auth, wine_type_form)))
                .returning(wine_types::id)
                .get_result(c)
                .map_err(VinotecaError::from)
        })
        .await?;
    get(auth, Some(wine_type_id), None, conn)
        .await?
        .into_first("Newly-created wine type")
}

#[put("/wine-types/<id>", format = "json", data = "<wine_type_form>")]
pub async fn put(
    auth: Auth,
    id: i32,
    wine_type_form: Json<WineTypeForm>,
    conn: DbConn,
) -> RestResult<WineType> {
    let wine_type_form = wine_type_form.into_inner();
    wine_type_form.validate()?;

    conn.run(move |c| {
        // Validate is user's wine type
        wine_types::table
            .filter(wine_types::id.eq(id))
            .filter(wine_types::user_id.eq(auth.id))
            .select(wine_types::id)
            .first::<i32>(c)?;

        diesel::update(wine_types::table.filter(wine_types::id.eq(id)))
            .set(wine_types::name.eq(wine_type_form.name))
            .execute(c)
            .map_err(VinotecaError::from)
    })
    .await?;
    get(auth, Some(id), None, conn)
        .await?
        .into_first("Edited wine type")
}
