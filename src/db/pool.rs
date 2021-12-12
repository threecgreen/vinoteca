use std::time::Duration;

use sea_orm::{ConnectOptions, DatabaseConnection};
use sea_orm_rocket::Database;

#[derive(Database, Debug)]
#[database("vinoteca")]
pub struct Db(PostgresConnection);

#[derive(Debug)]
pub struct PostgresConnection(pub DatabaseConnection);

#[rocket::async_trait]
impl sea_orm_rocket::Pool for PostgresConnection {
    type Connection = sea_orm::DatabaseConnection;
    type Error = sea_orm::DbErr;

    async fn init(figment: &rocket::figment::Figment) -> Result<Self, Self::Error> {
        let config = figment.extract::<sea_orm_rocket::Config>().unwrap();
        let mut options: ConnectOptions = config.url.into();
        options
            .max_connections(config.max_connections as u32)
            .min_connections(config.min_connections.unwrap_or_default())
            .connect_timeout(Duration::from_secs(config.connect_timeout));
        if let Some(idle_timeout) = config.idle_timeout {
            options.idle_timeout(Duration::from_secs(idle_timeout));
        }
        let conn = sea_orm::SqlxPostgresConnector::connect(options).await?;

        Ok(PostgresConnection(conn))
    }

    fn borrow(&self) -> &Self::Connection {
        &self.0
    }
}
