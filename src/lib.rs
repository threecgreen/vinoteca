#![feature(decl_macro, proc_macro_hygiene)]

#[macro_use]
extern crate diesel;
#[macro_use]
extern crate log;
#[macro_use]
extern crate rocket_contrib;
use rocket_contrib::databases::diesel::SqliteConnection;
#[macro_use]
extern crate rocket;
extern crate serde;
extern crate typescript_definitions;
extern crate validator;
#[macro_use]
extern crate validator_derive;
extern crate image;
extern crate rocket_multipart_form_data;
use rocket_contrib::serve::StaticFiles;

// Diesel modules
pub mod models;
mod schema;
// Misc
mod error;
#[macro_use] // Must be declared before modules using macros
mod query_utils;
/////////////////////
// Rocket handlers //
/////////////////////
// Templates (HTML)
mod templates;
// Rest
mod colors;
mod grapes;
mod logs;
mod producers;
pub mod purchases;
pub mod regions;
mod stores;
pub mod viti_areas;
pub mod wine_grapes;
mod wine_types;
pub mod wines;
// Tests
#[cfg(tests)]
mod tests;

#[database("vinoteca")]
pub struct DbConn(SqliteConnection);

pub fn rocket() -> rocket::Rocket {
    rocket::ignite()
        .attach(DbConn::fairing())
        .mount(
            "/",
            routes![
                templates::about,
                templates::dashboards,
                templates::grapes,
                templates::home,
                templates::home_redirect,
                templates::inventory,
                templates::new_wine,
                templates::producer_profile,
                templates::region_profile,
                templates::search_wines,
                templates::viti_area_profile,
                templates::wines,
                templates::wine_profile,
                templates::wine_type_profile,
            ],
        )
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
                regions::put,
                regions::post,
                regions::top,
                stores::get,
                stores::post,
                viti_areas::get,
                viti_areas::put,
                viti_areas::post,
                viti_areas::stats,
                viti_areas::top,
                wines::get,
                wines::post,
                wines::put,
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
        )
        .mount("/static", StaticFiles::from("static"))
        // TODO: make configurable
        .mount("/media", StaticFiles::from("media"))
}
