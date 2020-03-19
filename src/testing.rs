use crate::schema::{colors, grapes, producers, regions, wine_types};
/// Integration tests
use crate::{create_rocket, run_db_migrations, DbConn, MediaDir};

use diesel::prelude::*;
use rocket::config::{Config, Environment, Value};
use rocket::fairing::AdHoc;
use rocket::local::Client;
use rocket::Rocket;
use std::collections::HashMap;

/// Create testing client for making requests to a test rocket instance
pub fn create_client() -> Client {
    let rocket = create_rocket();
    Client::new(rocket).expect("Valid rocket instance")
}

/// Create a test rocket instance with an in-memory database and a managed
/// `MediaDir`
pub fn create_test_rocket() -> Rocket {
    test_rocket_config()
        .manage(MediaDir("/tmp".to_owned()))
        .attach(DbConn::fairing())
        .attach(AdHoc::on_attach("Setup test db", setup_test_db))
}

/// Create an in-memory database with some mock data
pub fn create_test_db() -> DbConn {
    let rocket = create_test_rocket();
    DbConn::get_one(&rocket).expect("database connection")
}

pub fn test_rocket_config() -> rocket::Rocket {
    let mut database_config = HashMap::new();
    let mut databases = HashMap::new();
    database_config.insert("url", Value::from(":memory:"));
    databases.insert("vinoteca", Value::from(database_config));
    let config = Config::build(Environment::Development)
        .extra("databases", databases)
        .finalize()
        .unwrap();
    rocket::custom(config)
}

fn setup_test_db(rocket: Rocket) -> Result<Rocket, Rocket> {
    let rocket = run_db_migrations(rocket);
    if let Ok(rocket) = rocket {
        let connection = DbConn::get_one(&rocket).expect("database connection");
        for (i, region) in vec!["California", "France", "New Zealand", "Spain"]
            .iter()
            .enumerate()
        {
            diesel::insert_into(regions::table)
                .values((regions::id.eq(i as i32 + 1), regions::name.eq(region)))
                .execute(&*connection)
                .unwrap();
        }

        let mock_grapes = vec![
            "Cabernet Sauvignon",
            "Tempranillo",
            "Merlot",
            "Pinot Noir",
            "Riesling",
            "Pinot Grigio",
            "Garnacha",
        ];
        for (i, grape) in mock_grapes.iter().enumerate() {
            diesel::insert_into(grapes::table)
                .values((grapes::id.eq(i as i32 + 1), grapes::name.eq(grape)))
                .execute(&*connection)
                .unwrap();
        }

        for (i, producer) in vec!["Martineli", "Le Grand Noir", "Rodney Strong"]
            .iter()
            .enumerate()
        {
            diesel::insert_into(producers::table)
                .values((
                    producers::id.eq(i as i32),
                    producers::name.eq(producer),
                    producers::region_id.eq(if i % 2 == 0 { 1 } else { 2 }),
                ))
                .execute(&*connection)
                .unwrap();
        }

        let mock_wine_types = vec![
            "Sauvignon Blanc",
            "Pinot Noir",
            "Cabernet Sauvignon",
            "Chardonnary",
            "Cava",
        ];
        for (i, wine_type) in mock_wine_types.iter().enumerate() {
            diesel::insert_into(wine_types::table)
                .values((
                    wine_types::id.eq(i as i32 + 1),
                    wine_types::name.eq(wine_type),
                ))
                .execute(&*connection)
                .unwrap();
        }

        let mock_colors = vec!["Red", "White", "Rosé"];
        for (i, color) in mock_colors.iter().enumerate() {
            diesel::insert_into(colors::table)
                .values((colors::id.eq(i as i32 + 1), colors::name.eq(color)))
                .execute(&*connection)
                .unwrap();
        }

        Ok(rocket)
    } else {
        panic!("Failed to create test database")
    }
}
