use awscreds::Credentials;
use s3::bucket::Bucket;

static BUCKET_NAME: &str = "vinoteca";

pub struct Config {
    pub s3_bucket: Bucket,
}

impl Config {
    pub fn new(aws_access_key: &str, aws_secret_key: &str) -> Config {
        let creds =
            Credentials::new_blocking(Some(aws_access_key), Some(aws_secret_key), None, None, None)
                .expect("Valid credentials");
        Config {
            s3_bucket: Bucket::new(BUCKET_NAME, "us-east-2".parse().expect("AWS region"), creds)
                .expect("AWS bucket"),
        }
    }
}
