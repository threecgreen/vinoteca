#![feature(decl_macro, proc_macro_hygiene)]

#[macro_use]
extern crate diesel;
#[macro_use]
extern crate lazy_static;
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

use rocket::fairing::AdHoc;
use rocket::Rocket;

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
    let mut rocket = rocket::ignite();

    rocket = rocket
        // Allow handlers access to the database
        .attach(DbConn::fairing())
        // Run embedded database migrations on startup
        .attach(AdHoc::on_attach("Database migrations", run_db_migrations))
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
                wines::delete,
                wines::inventory,
                wines::search,
                wines::varieties,
                wines::image::post,
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
        // These errors should only happen with rest requests so they also return JSON
        .register(catchers![
            catchers::unauthorized,
            catchers::forbidden,
            catchers::not_found
        ]);
    let static_dir = rocket
        .config()
        .get_str("static_dir")
        .unwrap_or("web/static")
        .to_owned();
    let aws_access_key = rocket
        .config()
        .get_str("aws_access_key")
        .expect("AWS access key")
        .to_owned();
    let aws_secret_key = rocket
        .config()
        .get_str("aws_secret_key")
        .expect("AWS secret key")
        .to_owned();
    let storage =
        storage::S3::new(&aws_access_key, &aws_secret_key).expect("AWS S3 bucket connection");
    rocket
        .manage(config::Config::new(storage))
        .mount("/static", CachedStaticFiles::from(static_dir).rank(1))
}
