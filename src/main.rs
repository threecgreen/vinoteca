#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use]
extern crate rocket;
extern crate simplelog;
extern crate vinoteca;
use simplelog::TermLogger;
use vinoteca::{colors, regions, viti_areas, wine_grapes, wine_types};

fn main() {
    // TODO: make configurable
    TermLogger::init(
        simplelog::LevelFilter::Info,
        simplelog::Config::default(),
        simplelog::TerminalMode::Mixed,
    )
    .expect("No interactive terminal found");

    rocket::ignite()
        .attach(vinoteca::DbConn::fairing())
        .mount(
            "/",
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
        .launch();
}
