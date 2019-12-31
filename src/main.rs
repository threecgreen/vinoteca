#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use]
extern crate rocket;
extern crate rocket_contrib;
extern crate vinoteca;

// Rest
use vinoteca::{colors, producers, purchases, regions, viti_areas, wine_grapes, wine_types, wines};
// Templates
use vinoteca::templates;

use rocket_contrib::serve::StaticFiles;

fn main() {
    rocket::ignite()
        .attach(vinoteca::DbConn::fairing())
        .mount("/", routes![templates::about])
        .mount(
            "/rest",
            routes![
                colors::get,
                producers::get,
                producers::put,
                producers::post,
                producers::delete,
                purchases::get,
                purchases::put,
                regions::get,
                regions::put,
                regions::post,
                viti_areas::get,
                viti_areas::put,
                viti_areas::post,
                wines::get,
                wine_grapes::get,
                wine_types::get,
                wine_types::put,
                wine_types::post,
            ],
        )
        .mount("/static", StaticFiles::from("static"))
        .launch();
}
