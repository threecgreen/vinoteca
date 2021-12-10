#[macro_use]
extern crate diesel;
#[macro_use]
extern crate lazy_static;
#[macro_use]
extern crate rocket;
#[macro_use]
extern crate rocket_sync_db_pools;
#[macro_use]
extern crate validator_derive;

// Diesel modules
pub mod models;
mod schema;
// Server internals
mod cached_static;
mod catchers;
mod config;
pub mod error;
mod serde;
mod storage;

#[macro_use] // Must be declared before modules using macros
mod query_utils;
// Test helpers
#[cfg(test)]
#[macro_use]
mod testing;
/////////////////////
// Rocket handlers //
/////////////////////
mod static_handlers;
// Rest
mod colors;
mod grapes;
pub mod logs;
mod producers;
pub mod purchases;
pub mod regions;
mod stores;
pub mod users;
pub mod version;
pub mod viti_areas;
pub mod wine_grapes;
mod wine_types;
pub mod wines;

use cached_static::CachedStaticFiles;
use query_utils::DbConn;

use rocket::{fairing::AdHoc, Rocket};
use storage::Storage;

#[macro_use]
extern crate diesel_migrations;
embed_migrations!();

pub async fn run_db_migrations(
    rocket: Rocket<rocket::Build>,
) -> Result<Rocket<rocket::Build>, Rocket<rocket::Build>> {
    let connection = DbConn::get_one(&rocket).await.expect("database connection");
    connection
        .run(|conn| match embedded_migrations::run(conn) {
            Ok(()) => {
                info!("Successfully ran database migrations");
                Ok(rocket)
            }
            Err(e) => {
                error!("Failed to run database migrations: {:?}", e);
                Err(rocket)
            }
        })
        .await
}

pub async fn create_rocket() -> Result<rocket::Rocket<rocket::Ignite>, rocket::Error> {
    let rocket = rocket::build()
        // Allow handlers access to the database
        .attach(DbConn::fairing())
        // Run embedded database migrations on startup
        .attach(AdHoc::try_on_ignite(
            "Database migrations",
            run_db_migrations,
        ))
        .mount("/", static_handlers::get_routes())
        .mount(
            "/rest",
            routes![
                colors::get,
                colors::top,
                grapes::get,
                grapes::post,
                grapes::put,
                grapes::delete,
                grapes::top,
                logs::post,
                producers::get,
                producers::get_one,
                producers::put,
                producers::post,
                producers::delete,
                producers::top,
                purchases::get,
                purchases::post,
                purchases::put,
                purchases::delete,
                purchases::by_year,
                purchases::total_liters,
                purchases::most_common_purchase_date,
                purchases::recent,
                purchases::count,
                regions::get,
                regions::top,
                stores::get,
                stores::post,
                users::create,
                users::get,
                users::login,
                users::logout,
                users::modify_profile,
                users::change_password,
                version::get,
                viti_areas::get,
                viti_areas::get_one,
                viti_areas::put,
                viti_areas::post,
                viti_areas::stats,
                viti_areas::top,
                wines::get,
                wines::get_one,
                wines::patch,
                wines::post,
                wines::put,
                wines::delete_,
                wines::inventory,
                wines::search,
                wines::varieties,
                wines::image::post,
                wines::image::rotate,
                wines::image::delete,
                wine_grapes::get,
                wine_grapes::post,
                wine_types::get,
                wine_types::get_one,
                wine_types::put,
                wine_types::post,
                wine_types::top,
            ],
        )
        // TODO: register separate handlers for /
        // These errors should only happen with rest requests so they also return JSON
        .register(
            "/rest",
            catchers![
                catchers::unauthorized,
                catchers::forbidden,
                catchers::not_found
            ],
        );
    let app_config: config::AppConfig = rocket.figment().extract().expect("config");
    let storage: Box<dyn Storage> = Box::new(
        storage::S3::new(&app_config.aws_access_key, &app_config.aws_secret_key)
            .expect("AWS S3 bucket connection"),
    );

    Ok(rocket
        .manage(storage)
        .mount("/static", CachedStaticFiles::from("web/static").rank(1))
        .ignite()
        .await?)
}
