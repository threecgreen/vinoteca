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
extern crate rocket_multipart_form_data;
extern crate image;

// Diesel modules
pub mod models;
mod schema;
/////////////////////
// Rocket handlers //
/////////////////////
// Templates (HTML)
pub mod templates;
// Rest
pub mod colors;
pub mod grapes;
pub mod logs;
pub mod producers;
pub mod purchases;
pub mod regions;
pub mod stores;
pub mod viti_areas;
pub mod wine_grapes;
pub mod wine_types;
pub mod wines;
// Misc
pub mod error;
mod query_utils;

#[database("vinoteca")]
pub struct DbConn(SqliteConnection);
