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

// Diesel modules
pub mod models;
pub mod schema;
// Rocket handlers
pub mod colors;
pub mod dashboards;
pub mod purchases;
pub mod regions;
pub mod viti_areas;
pub mod wine_grapes;
pub mod wine_types;
pub mod wines;
// Misc
mod query_utils;

#[database("vinoteca")]
pub struct DbConn(SqliteConnection);
