#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use]
extern crate rocket;
extern crate vinoteca;
use vinoteca::{colors, regions};

fn main() {
    // Environment variables
    // dotenv().ok();

    rocket::ignite()
        .attach(vinoteca::DbConn::fairing())
        .mount("/", routes![colors::get, regions::get])
        .launch();
}
