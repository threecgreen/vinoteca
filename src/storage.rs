use crate::error::VinotecaError;

use log::warn;
use rocket::async_trait;
use s3::bucket::Bucket as S3Bucket;
use s3::request::ResponseData;
use uuid::Uuid;

#[cfg(test)]
use mockall::automock;

/// Persists user files such as wine images.
#[cfg_attr(test, automock)]
#[async_trait]
pub trait Storage: Send + Sync + 'static {
    /// Store object `content` in `dir` at a generated path. Returns the path where
    /// `content` is stored.
    async fn create_object(
        &self,
        dir: &str,
        content: &[u8],
        content_type: &str,
    ) -> Result<String, VinotecaError>;
    /// read object at `path`
    async fn get_object(&self, path: &str) -> Result<Vec<u8>, VinotecaError>;
    /// update object at `path`
    async fn update_object(&self, path: &str, content: &[u8]) -> Result<(), VinotecaError>;
    /// Delete object at `path`.
    async fn delete_object(&self, path: &str) -> Result<(), VinotecaError>;
}

/// Stores files on AWS S3 bucket.
#[derive(Debug)]
pub struct S3 {
    bucket: Box<S3Bucket>,
}

const BUCKET_NAME: &str = "vinoteca";

#[async_trait]
impl Storage for S3 {
    async fn create_object(
        &self,
        dir: &str,
        content: &[u8],
        content_type: &str,
    ) -> Result<String, VinotecaError> {
        let path = Uuid::new_v4().to_string();
        let response = self
            .bucket
            .put_object_with_content_type(format!("{}/{}", dir, path), content, content_type)
            .await?;
        check_response(response, "saving image").map(|_| path)
    }

    async fn get_object(&self, path: &str) -> Result<Vec<u8>, VinotecaError> {
        let response = self.bucket.get_object(path).await?;
        check_response(response, "getting file").map(Into::into)
    }

    async fn update_object(&self, path: &str, content: &[u8]) -> Result<(), VinotecaError> {
        let response = self.bucket.put_object(path, content).await?;
        check_response(response, "saving image").map(|_| ())
    }

    async fn delete_object(&self, path: &str) -> Result<(), VinotecaError> {
        let response = self.bucket.delete_object(path).await?;
        check_response(response, "deleting file").map(|_| ())
    }
}

fn check_response(response: ResponseData, action: &str) -> Result<ResponseData, VinotecaError> {
    if response.status_code() > 304 {
        warn!(
            "Error {}. Code: {}, AWSResponseData: {:?}",
            action,
            response.status_code(),
            String::from_utf8(response.into())
        );
        Err(VinotecaError::Internal(format!("Error {}", action)))
    } else {
        Ok(response)
    }
}

impl S3 {
    pub fn new(aws_access_key: &str, aws_secret_key: &str) -> Result<S3, VinotecaError> {
        let creds = s3::creds::Credentials::new(
            Some(aws_access_key),
            Some(aws_secret_key),
            None,
            None,
            None,
        )
        .map_err(|e| {
            VinotecaError::Internal(format!("Could not authorize S3 instance: {:?}", e))
        })?;
        Ok(Self {
            bucket: S3Bucket::new(BUCKET_NAME, "us-east-2".parse().expect("AWS region"), creds)?,
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use s3::creds::Credentials;
    use s3::Region;

    /// An `S3` whose endpoint refuses connections, so every request fails fast
    /// without touching the network.
    fn unreachable_s3() -> S3 {
        let creds = Credentials::new(Some("key"), Some("secret"), None, None, None).unwrap();
        let region = Region::Custom {
            region: "us-east-2".to_owned(),
            endpoint: "http://127.0.0.1:1".to_owned(),
        };
        S3 {
            bucket: S3Bucket::new(BUCKET_NAME, region, creds)
                .unwrap()
                .with_path_style(),
        }
    }

    /// rust-s3's `*_blocking` methods build a fresh tokio runtime and panic
    /// with "Cannot start a runtime from within a runtime" when called from a
    /// Rocket worker. Every storage call must instead surface a plain error.
    #[tokio::test]
    async fn s3_calls_inside_runtime_return_errors_instead_of_panicking() {
        let storage = unreachable_s3();

        let created = storage.create_object("dir", b"bytes", "image/jpeg").await;
        assert!(
            matches!(created, Err(VinotecaError::Internal(_))),
            "{created:?}"
        );

        let got = storage.get_object("dir/path").await;
        assert!(matches!(got, Err(VinotecaError::Internal(_))), "{got:?}");

        let updated = storage.update_object("dir/path", b"bytes").await;
        assert!(
            matches!(updated, Err(VinotecaError::Internal(_))),
            "{updated:?}"
        );

        let deleted = storage.delete_object("dir/path").await;
        assert!(
            matches!(deleted, Err(VinotecaError::Internal(_))),
            "{deleted:?}"
        );
    }
}
