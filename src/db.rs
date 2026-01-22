use crate::query_utils::DbPool;
use diesel_async::pooled_connection::deadpool::Pool;
use diesel_async::pooled_connection::{AsyncDieselConnectionManager, ManagerConfig};
use diesel_async::AsyncPgConnection;
use futures::future::BoxFuture;
use futures::FutureExt;

fn establish_tls_connection(
    url: &str,
) -> BoxFuture<'_, diesel::ConnectionResult<AsyncPgConnection>> {
    let url = url.to_string();
    async move {
        let tls_connector = native_tls::TlsConnector::builder()
            .danger_accept_invalid_certs(true)
            .build()
            .map_err(|e| diesel::ConnectionError::BadConnection(e.to_string()))?;
        let postgres_tls = postgres_native_tls::MakeTlsConnector::new(tls_connector);

        let (client, connection) = tokio_postgres::connect(&url, postgres_tls)
            .await
            .map_err(|e| diesel::ConnectionError::BadConnection(e.to_string()))?;

        tokio::spawn(async move {
            if let Err(e) = connection.await {
                log::error!("Database connection error: {e}");
            }
        });

        AsyncPgConnection::try_from(client).await
    }
    .boxed()
}

pub fn create_pool(database_url: String) -> DbPool {
    let mut config = ManagerConfig::default();
    config.custom_setup = Box::new(establish_tls_connection);
    let manager =
        AsyncDieselConnectionManager::<AsyncPgConnection>::new_with_config(database_url, config);
    Pool::builder(manager)
        .build()
        .expect("Failed to create database pool")
}
