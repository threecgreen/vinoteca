use serde::Deserialize;

/// Holds runtime configurations
#[derive(Debug, Deserialize)]
pub struct AppConfig {
    pub aws_access_key: String,
    pub aws_secret_key: String,
}
