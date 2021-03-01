use super::models::{InventoryWine, WineCount};
use crate::error::{RestResult, VinotecaError};
use crate::models::Wine;
use crate::query_utils::{lower, IntoFirst};
use crate::schema::{colors, producers, recent_purchases, regions, viti_areas, wine_types, wines};
use crate::users::Auth;
use crate::DbConn;

use diesel::dsl::count;
use diesel::prelude::*;
use diesel::sql_query;
use diesel::sql_types::Integer;
use rocket_contrib::json::Json;

fn add_wildcards(query: &str) -> String {
    format!("%{}%", query)
}

/// Contains all information used in the wine table
#[allow(clippy::too_many_arguments)]
#[get("/wines?<id>&<producer_id>&<region_id>&<viti_area_id>&<wine_type_id>&<color>&<is_in_shopping_list>&<wine_type>&<producer>&<region>&<viti_area>")]
pub async fn get(
    auth: Auth,
    // Exact match parameters
    id: Option<i32>,
    producer_id: Option<i32>,
    region_id: Option<i32>,
    viti_area_id: Option<i32>,
    wine_type_id: Option<i32>,
    is_in_shopping_list: Option<bool>,
    // Fuzzy parameters for search
    color: Option<String>,
    wine_type: Option<String>,
    producer: Option<String>,
    region: Option<String>,
    viti_area: Option<String>,

    conn: DbConn,
) -> RestResult<Vec<Wine>> {
    conn.run(move |c| {
        let mut query = wines::table
            .inner_join(producers::table.inner_join(regions::table))
            .inner_join(colors::table)
            .inner_join(wine_types::table)
            .left_join(recent_purchases::table)
            .left_join(viti_areas::table)
            .filter(wines::user_id.eq(auth.id))
            .into_boxed();
        if let Some(id) = id {
            query = query.filter(wines::id.eq(id));
        }
        if let Some(producer_id) = producer_id {
            query = query.filter(wines::producer_id.eq(producer_id));
        }
        if let Some(region_id) = region_id {
            query = query.filter(producers::region_id.eq(region_id));
        }
        if let Some(viti_area_id) = viti_area_id {
            query = query.filter(wines::viti_area_id.eq(viti_area_id));
        }
        if let Some(wine_type_id) = wine_type_id {
            query = query.filter(wines::wine_type_id.eq(wine_type_id));
        }
        if let Some(is_in_shopping_list) = is_in_shopping_list {
            query = query.filter(wines::is_in_shopping_list.eq(is_in_shopping_list));
        }
        if let Some(color) = color {
            query = query.filter(colors::name.like(add_wildcards(&color)));
        }
        if let Some(wine_type) = wine_type {
            query = query.filter(wine_types::name.like(add_wildcards(&wine_type)));
        }
        if let Some(producer) = producer {
            query = query.filter(producers::name.like(add_wildcards(&producer)));
        }
        if let Some(region) = region {
            query = query.filter(regions::name.like(add_wildcards(&region)));
        }
        if let Some(viti_area) = viti_area {
            query = query.filter(viti_areas::name.like(add_wildcards(&viti_area)));
        }

        query
            .select((
                wines::id,
                wines::description,
                wines::notes,
                wines::rating,
                wines::inventory,
                wines::why,
                wines::color_id,
                colors::name,
                wines::producer_id,
                producers::name,
                producers::region_id,
                regions::name,
                wines::viti_area_id,
                viti_areas::name.nullable(), // Left join
                wines::name,
                wines::wine_type_id,
                wine_types::name,
                recent_purchases::vintage.nullable(),
                wines::image,
                wines::is_in_shopping_list,
            ))
            .load::<Wine>(c)
            .map(Json)
            .map_err(VinotecaError::from)
    })
    .await
}

#[get("/wines/<id>")]
pub async fn get_one(auth: Auth, id: i32, conn: DbConn) -> RestResult<Wine> {
    let wines = get(
        auth,
        Some(id),
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        conn,
    )
    .await?;
    wines.into_first(&format!("No wine with id {}", id))
}

#[get("/wines/inventory")]
pub async fn inventory(auth: Auth, conn: DbConn) -> RestResult<Vec<InventoryWine>> {
    conn.run(move |c| {
        // TODO: move to diesel
        sql_query(include_str!("inventory.sql"))
            .bind::<Integer, _>(auth.id)
            .load::<InventoryWine>(c)
            .map(Json)
            .map_err(VinotecaError::from)
    })
    .await
}

fn wrap_in_wildcards(filter_str: &str) -> String {
    format!("%{}%", filter_str)
}

#[get("/wines/search?<color_like>&<wine_type_like>&<producer_like>&<region_like>&<viti_area_like>")]
pub async fn search(
    auth: Auth,
    color_like: Option<String>,
    wine_type_like: Option<String>,
    producer_like: Option<String>,
    region_like: Option<String>,
    viti_area_like: Option<String>,
    conn: DbConn,
) -> RestResult<Vec<Wine>> {
    conn.run(move |c| {
        let mut query = wines::table
            .inner_join(producers::table.inner_join(regions::table))
            .inner_join(colors::table)
            .inner_join(wine_types::table)
            .left_join(recent_purchases::table)
            .left_join(viti_areas::table)
            .filter(wines::user_id.eq(auth.id))
            .into_boxed();
        if let Some(color_like) = color_like {
            query = query
                .filter(lower(colors::name).like(wrap_in_wildcards(&color_like.to_lowercase())));
        }
        if let Some(wine_type_like) = wine_type_like {
            query = query.filter(
                lower(wine_types::name).like(wrap_in_wildcards(&wine_type_like.to_lowercase())),
            );
        }
        if let Some(producer_like) = producer_like {
            query = query.filter(
                lower(producers::name).like(wrap_in_wildcards(&producer_like.to_lowercase())),
            );
        }
        if let Some(region_like) = region_like {
            query = query
                .filter(lower(regions::name).like(wrap_in_wildcards(&region_like.to_lowercase())));
        }
        if let Some(viti_area_like) = viti_area_like {
            query = query.filter(
                lower(viti_areas::name).like(wrap_in_wildcards(&viti_area_like.to_lowercase())),
            );
        }
        query
            .select((
                wines::id,
                wines::description,
                wines::notes,
                wines::rating,
                wines::inventory,
                wines::why,
                wines::color_id,
                colors::name,
                wines::producer_id,
                producers::name,
                producers::region_id,
                regions::name,
                wines::viti_area_id,
                viti_areas::name.nullable(), // Left join
                wines::name,
                wines::wine_type_id,
                wine_types::name,
                recent_purchases::vintage.nullable(),
                wines::image,
                wines::is_in_shopping_list,
            ))
            .load::<Wine>(c)
            .map(Json)
            .map_err(VinotecaError::from)
    })
    .await
}

#[get("/wines/count")]
pub async fn varieties(auth: Auth, conn: DbConn) -> Json<WineCount> {
    let count = conn
        .run(move |c| {
            wines::table
                .filter(wines::user_id.eq(auth.id))
                .select(count(wines::id))
                .first(c)
                .unwrap_or(0)
        })
        .await;
    Json(WineCount { count })
}

#[cfg(test)]
mod test {
    use super::super::models::RawWineForm;
    use super::super::post;
    use super::*;
    use crate::config::Config;
    use crate::models::WineForm;
    use crate::storage::MockStorage;
    use crate::DbConn;

    use rocket::State;

    #[test]
    fn wine_without_purchases_appears_in_inventory() {
        db_test!(|rocket, connection| {
            let auth = Auth { id: 1 };
            let mock = MockStorage::new();
            let rocket = rocket.manage(Config::new(mock));
            let config = State::from(&rocket).unwrap();
            let form = RawWineForm {
                image: None,
                wine_form: WineForm {
                    description: None,
                    notes: None,
                    rating: Some(5),
                    inventory: 2,
                    why: None,
                    color_id: 1,
                    producer_id: 1,
                    viti_area_id: None,
                    name: None,
                    wine_type_id: 1,
                    is_in_shopping_list: false,
                },
            };
            let wine_response = post(auth, form, connection, config);
            assert!(wine_response.is_ok());
            let wine_id = wine_response.unwrap().id;

            let connection = DbConn::get_one(&rocket).expect("database connection");
            let inventory_response = inventory(auth, connection);
            assert!(inventory_response.is_ok());
            let inventory = inventory_response.unwrap().into_inner();
            assert!(inventory.iter().any(|w| w.id == wine_id));
        })
    }
}
