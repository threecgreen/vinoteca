use crate::schema::{grapes, producers, users, wine_types, wines};
/// Integration tests
use crate::{run_db_migrations, DbConn};

use diesel::prelude::*;
use diesel::sql_query;
use rocket::config::{Config, Environment, Value};
use rocket::fairing::AdHoc;
use rocket::Rocket;
use std::collections::HashMap;
use std::env;
use std::sync::Mutex;

// Use a lock to synchronize between tests so database operations from one
// test don't interfere with another
lazy_static! {
    pub static ref DB_LOCK: Mutex<()> = Mutex::new(());
}

macro_rules! db_test {
    (|$rocket: ident, $conn: ident| $test_block: expr) => {{
        use crate::testing::{create_test_rocket, DB_LOCK};

        let _lock = DB_LOCK.lock();
        let $rocket = create_test_rocket();
        let $conn = DbConn::get_one(&$rocket).expect("database connection");

        // Execute test code
        $test_block
        // `_lock` is dropped
    }};
}

macro_rules! rocket_test {
    (|$rocket: ident| $test_block: expr) => {{
        use crate::testing::{create_test_rocket, DB_LOCK};

        let _lock = DB_LOCK.lock();
        let $rocket = create_test_rocket();

        // Execute test code
        $test_block
        // `_lock` is dropped
    }};
}

/// Doesn't include database access
pub fn simple_rocket() -> Rocket {
    let config = Config::build(Environment::Development)
        .workers(1)
        .finalize()
        .unwrap();
    rocket::custom(config)
}

/// `MediaDir`
pub fn create_test_rocket() -> Rocket {
    test_rocket_config()
        .attach(DbConn::fairing())
        .attach(AdHoc::on_attach("Setup test db", setup_test_db))
}

fn test_rocket_config() -> Rocket {
    let mut database_config = HashMap::new();
    let mut databases = HashMap::new();
    let rocket_test_db = env::var("ROCKET_TEST_DB").expect("Test database connection string");
    // Testing db should have test in the name
    assert!(rocket_test_db.contains("test"));

    database_config.insert("url", Value::from(rocket_test_db));
    databases.insert("vinoteca", Value::from(database_config));
    let config = Config::build(Environment::Development)
        .workers(1)
        .extra("databases", databases)
        .finalize()
        .unwrap();
    rocket::custom(config)
}

fn setup_test_db(rocket: Rocket) -> Result<Rocket, Rocket> {
    let rocket = run_db_migrations(rocket);
    if let Ok(rocket) = rocket {
        // TODO: test with multiple users
        let connection = DbConn::get_one(&rocket).expect("database connection");

        // TODO: timing logs
        let user_id = 1;
        // Truncate most tables
        sql_query("TRUNCATE TABLE wines, purchases, grapes, wine_grapes, producers, viti_areas, users, wine_types CASCADE;")
            .execute(&*connection).unwrap();
        diesel::insert_into(users::table)
            .values((
                users::id.eq(user_id),
                users::email.eq("test@gmail.com"),
                users::name.eq("John Doe"),
                users::hash.eq("browns"),
            ))
            .execute(&*connection)
            .unwrap();

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
                .values((
                    grapes::id.eq(i as i32 + 1),
                    grapes::name.eq(grape),
                    grapes::user_id.eq(user_id),
                ))
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
                    producers::user_id.eq(user_id),
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
                    wine_types::user_id.eq(user_id),
                ))
                .execute(&*connection)
                .unwrap();
        }

        diesel::insert_into(wines::table)
            .values((
                wines::id.eq(1),
                wines::wine_type_id.eq(1),
                wines::producer_id.eq(1),
                wines::color_id.eq(2),
                wines::inventory.eq(0),
                wines::user_id.eq(user_id),
                wines::image.eq(Some("unique_id")),
            ))
            .execute(&*connection)
            .unwrap();

        Ok(rocket)
    } else {
        panic!("Failed to create test database")
    }
}
