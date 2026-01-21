use crate::query_utils::DbPool;
use crate::schema::{grapes, producers, users, wine_types, wines};
use crate::MIGRATIONS;

use diesel::prelude::*;
use diesel::sql_query;
use diesel::Connection;
use diesel_async::pooled_connection::deadpool::Pool;
use diesel_async::pooled_connection::AsyncDieselConnectionManager;
use diesel_migrations::MigrationHarness;
use rocket::figment::Figment;
use rocket::{Build, Rocket};
use std::env;
use std::sync::{Mutex, MutexGuard};

// Use a lock to synchronize between tests so database operations from one
// test don't interfere with another
static DB_LOCK: Mutex<()> = Mutex::new(());

/// Acquire the database lock before running a test.
/// Hold onto the returned guard for the duration of the test.
pub fn acquire_db_lock() -> MutexGuard<'static, ()> {
    DB_LOCK.lock().unwrap_or_else(|e| e.into_inner())
}

/// Doesn't include database access
pub fn simple_rocket() -> Rocket<Build> {
    let figment = Figment::from(rocket::Config::debug_default()).merge(("workers", 1));
    rocket::custom(figment)
}

/// Create a test rocket instance with database
pub async fn create_test_rocket() -> Rocket<Build> {
    let rocket_test_db = env::var("ROCKET_TEST_DB").expect("Test database connection string");
    // Testing db should be on localhost
    assert!(rocket_test_db.contains("localhost"));

    // Run migrations synchronously
    let mut conn = diesel::PgConnection::establish(&rocket_test_db)
        .expect("Failed to connect to test database");
    conn.run_pending_migrations(MIGRATIONS)
        .expect("Failed to run migrations");

    // Setup test data synchronously
    setup_test_db_sync(&mut conn);

    // Create async pool
    let config = AsyncDieselConnectionManager::<diesel_async::AsyncPgConnection>::new(&rocket_test_db);
    let pool: DbPool = Pool::builder(config)
        .build()
        .expect("Failed to create test database pool");

    let figment = Figment::from(rocket::Config::debug_default())
        .merge(("workers", 1))
        .merge(("databases.vinoteca.url", &rocket_test_db));

    rocket::custom(figment).manage(pool)
}

fn setup_test_db_sync(connection: &mut diesel::PgConnection) {
    let user_id = 1;
    // Truncate most tables
    sql_query("TRUNCATE TABLE wines, purchases, grapes, wine_grapes, producers, viti_areas, users, wine_types CASCADE;")
        .execute(connection)
        .unwrap();
    diesel::insert_into(users::table)
        .values((
            users::id.eq(user_id),
            users::email.eq("test@gmail.com"),
            users::name.eq("John Doe"),
            users::hash.eq("browns"),
        ))
        .execute(connection)
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
            .execute(connection)
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
            .execute(connection)
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
            .execute(connection)
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
        .execute(connection)
        .unwrap();
    // Correct auto-increment ID
    sql_query("ALTER SEQUENCE wines_id_seq RESTART WITH 2;")
        .execute(connection)
        .unwrap();
}
