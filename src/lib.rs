#![feature(decl_macro, proc_macro_hygiene)]

#[macro_use]
extern crate diesel;
#[macro_use]
extern crate log;
#[macro_use]
extern crate rocket_contrib;
#[macro_use]
extern crate rocket;
#[macro_use]
extern crate validator_derive;

// Diesel modules
pub mod models;
mod schema;
// Server internals
mod auth;
mod cached_static;
mod config;
mod error;
#[macro_use] // Must be declared before modules using macros
mod query_utils;
/////////////////////
// Rocket handlers //
/////////////////////
mod html;
// Rest
mod colors;
mod grapes;
pub mod logs;
mod producers;
pub mod purchases;
pub mod regions;
mod stores;
pub mod users;
pub mod viti_areas;
pub mod wine_grapes;
mod wine_types;
pub mod wines;
// Test helpers
#[cfg(test)]
mod testing;

use cached_static::CachedStaticFiles;
use query_utils::DbConn;

use rocket::fairing::AdHoc;
use rocket::Rocket;

/// Keep media dir as global variable for use when saving new images
pub struct MediaDir(String);

#[macro_use]
extern crate diesel_migrations;
embed_migrations!();

pub fn run_db_migrations(rocket: Rocket) -> Result<Rocket, Rocket> {
    let connection = DbConn::get_one(&rocket).expect("database connection");
    match embedded_migrations::run(&*connection) {
        Ok(()) => {
            info!("Successfully ran database migrations");
            Ok(rocket)
        }
        Err(e) => {
            error!("Failed to run database migrations: {:?}", e);
            Err(rocket)
        }
    }
}

pub fn create_rocket() -> rocket::Rocket {
    // Use in-memory database if testing
    #[cfg(test)]
    let mut rocket = testing::test_rocket_config();
    #[cfg(not(test))]
    let mut rocket = rocket::ignite();

    rocket = rocket
        // Allow handlers access to the database
        .attach(DbConn::fairing())
        // Run embedded database migrations on startup
        .attach(AdHoc::on_attach("Database migrations", run_db_migrations))
        // TODO: persistent logger
        .mount("/", routes![html::home, html::any_other])
        .mount(
            "/rest",
            routes![
                colors::get,
                colors::top,
                grapes::get,
                grapes::post,
                grapes::put,
                grapes::top,
                logs::post,
                producers::get,
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
                // regions::put,
                // regions::post,
                regions::top,
                stores::get,
                stores::post,
                users::create,
                users::get,
                users::login,
                viti_areas::get,
                viti_areas::put,
                viti_areas::post,
                viti_areas::stats,
                viti_areas::top,
                wines::get,
                wines::patch,
                wines::post,
                wines::put,
                wines::delete,
                wines::inventory,
                wines::search,
                wines::varieties,
                wine_grapes::get,
                wine_grapes::post,
                wine_types::get,
                wine_types::put,
                wine_types::post,
                wine_types::top,
            ],
        );
    let static_dir = rocket
        .config()
        .get_str("static_dir")
        .unwrap_or("web/static")
        .to_string();
    let media_dir = rocket
        .config()
        .get_str("media_dir")
        .unwrap_or("media")
        .to_string();
    rocket
        .manage(MediaDir(media_dir.clone()))
        .mount("/static", CachedStaticFiles::from(static_dir).rank(1))
        .mount("/media", CachedStaticFiles::from(media_dir).rank(1))
}
