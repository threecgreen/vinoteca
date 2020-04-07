use crate::error::VinotecaError;

use awscreds::Credentials;
use awsregion::Region;
use std::env;

pub struct Config {
    pub aws_creds: Credentials,
    pub aws_region: Region,
}

impl Config {
    pub fn from_env() -> Result<Config, VinotecaError> {
        Ok(Config {
            aws_creds: Credentials::from_env()?,
            aws_region: env::var("AWS_REGION").is_ok(),
        })
    }
}
