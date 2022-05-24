use crate::schema::{grapes, producers, users, wine_types, wines};
/// Integration tests
use crate::{run_db_migrations, DbConn};

use diesel::prelude::*;
use diesel::sql_query;
use rocket::fairing::{AdHoc, Fairing};
use rocket::tokio::sync::Mutex;
use rocket::Rocket;
use std::env;

// Use a lock to synchronize between tests so database operations from one
// test don't interfere with another
lazy_static! {
    pub static ref DB_LOCK: Mutex<()> = Mutex::new(());
}

/// password for a test user
pub const PW: &str = "testing123";

lazy_static! {
    pub static ref PW_HASH: String = bcrypt::hash(PW, bcrypt::DEFAULT_COST).unwrap();
}

macro_rules! db_test {
    (|$rocket: ident, $conn: ident| $test_block: expr) => {{
        use crate::testing::{create_test_rocket, DB_LOCK};

        let _lock = DB_LOCK.lock().await;
        let $rocket = create_test_rocket().await;
        let $conn = DbConn::get_one(&$rocket)
            .await
            .expect("database connection");

        // Execute test code
        $test_block
        // `_lock` is dropped
    }};
}

/// Doesn't include database access
pub fn simple_rocket() -> Rocket<rocket::Build> {
    let mut config = rocket::Config::default();
    config.workers = 1;
    rocket::custom(config)
}

/// `MediaDir`
pub async fn create_test_rocket() -> Rocket<rocket::Build> {
    let rocket = test_rocket_config();
    // Hack to call these fairings before calling `ignite` on `rocket`. This way we can mount
    // individual routes in tests and have more flexibility in general
    let rocket = DbConn::fairing().on_ignite(rocket).await.unwrap();
    AdHoc::try_on_ignite("Setup test db", setup_test_db)
        .on_ignite(rocket)
        .await
        .expect("Successful migration")
}

fn test_rocket_config() -> Rocket<rocket::Build> {
    use rocket::figment::{
        self,
        value::{Map, Value},
    };

    let test_db = env::var("ROCKET_TEST_DB").expect("Test database connection string");
    // Testing db should have test in the name
    assert!(test_db.contains("test"));

    let db_config: Map<_, Value> = figment::util::map! {
        "url" => test_db.into(),
        "pool_size" => 2.into(),
    };

    let config = rocket::Config::figment().merge((
        "databases",
        rocket::figment::util::map! { "vinoteca" => db_config },
    ));
    rocket::custom(config)
}

async fn setup_test_db(
    rocket: Rocket<rocket::Build>,
) -> Result<Rocket<rocket::Build>, Rocket<rocket::Build>> {
    let rocket = run_db_migrations(rocket).await?;
    // TODO: test with multiple users
    let conn = DbConn::get_one(&rocket).await.expect("database connection");

    let user_id = 1;
    let mock_grapes = vec![
        "Cabernet Sauvignon",
        "Tempranillo",
        "Merlot",
        "Pinot Noir",
        "Riesling",
        "Pinot Grigio",
        "Garnacha",
    ];
    let mock_wine_types = vec![
        "Sauvignon Blanc",
        "Pinot Noir",
        "Cabernet Sauvignon",
        "Chardonnary",
        "Cava",
    ];
    // Truncate most tables
    conn.run(move |c| {
        sql_query("TRUNCATE TABLE wines, purchases, grapes, wine_grapes, producers, viti_areas, users, wine_types CASCADE;")
                .execute(c).unwrap();
    diesel::insert_into(users::table)
        .values((
            users::id.eq(user_id),
            users::email.eq("test@gmail.com"),
            users::name.eq("John Doe"),
            users::hash.eq(&*PW_HASH),
        ))
        .execute(c)
        .unwrap();

    for (i, grape) in mock_grapes.iter().enumerate() {
        diesel::insert_into(grapes::table)
            .values((
                grapes::id.eq(i as i32 + 1),
                grapes::name.eq(grape),
                grapes::user_id.eq(user_id),
            ))
            .execute(c)
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
            .execute(c)
            .unwrap();
    }

    for (i, wine_type) in mock_wine_types.iter().enumerate() {
        diesel::insert_into(wine_types::table)
            .values((
                wine_types::id.eq(i as i32 + 1),
                wine_types::name.eq(wine_type),
                wine_types::user_id.eq(user_id),
            ))
            .execute(c)
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
        .execute(c)
        .unwrap();

    }).await;

    Ok(rocket)
}
