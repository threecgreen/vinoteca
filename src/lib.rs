#![feature(decl_macro, proc_macro_hygiene)]

#[macro_use]
extern crate diesel;
#[macro_use]
extern crate rocket_contrib;
use rocket_contrib::databases::diesel::SqliteConnection;
#[macro_use]
extern crate rocket;
extern crate serde;

use diesel::result::Error;
use rocket::http::Status;

pub mod models;
pub mod schema;

pub mod colors;
pub mod dashboards;
pub mod regions;
pub mod wines;

#[database("vinoteca")]
pub struct DbConn(SqliteConnection);

fn error_status(error: Error) -> Status {
    match error {
        Error::NotFound => Status::NotFound,
        _ => Status::InternalServerError,
    }
}
