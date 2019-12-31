#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use]
extern crate rocket;
extern crate rocket_contrib;
extern crate simplelog;
extern crate vinoteca;

// Rest
use vinoteca::{colors, regions, viti_areas, wine_grapes, wine_types};
// Templates
use vinoteca::templates;

use rocket_contrib::serve::StaticFiles;
use simplelog::TermLogger;

fn main() {
    // TODO: make configurable
    // TermLogger::init(
    //     simplelog::LevelFilter::Info,
    //     simplelog::Config::default(),
    //     simplelog::TerminalMode::Mixed,
    // )
    // .expect("No interactive terminal found");

    rocket::ignite()
        .attach(vinoteca::DbConn::fairing())
        .mount("/", routes![templates::about])
        .mount(
            "/rest",
            routes![
                colors::get,
                regions::get,
                regions::put,
                regions::post,
                viti_areas::get,
                viti_areas::put,
                viti_areas::post,
                wine_grapes::get,
                wine_types::get,
                wine_types::put,
                wine_types::post,
            ],
        )
        .mount("/static", StaticFiles::from("static"))
        .launch();
}
