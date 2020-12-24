use crate::error::VinotecaError;

use s3::bucket::Bucket as S3Bucket;
use uuid::Uuid;

/// Trait for persistin
#[cfg(test)]
use mockall::{automock, predicate::*};
#[cfg_attr(test, automock)]
pub trait Storage: Send + Sync + 'static {
    /// Store object `content` in `dir` at a generated path. Returns the path where
    /// `content` is stored.
    fn put_object(
        &self,
        dir: &str,
        content: &[u8],
        content_type: &str,
    ) -> Result<String, VinotecaError>;
    /// Delete object at `path`.
    fn delete_object(&self, path: &str) -> Result<(), VinotecaError>;
}

/// Stores files on AWS S3 bucket.
#[derive(Debug)]
pub struct S3 {
    bucket: S3Bucket,
}

static BUCKET_NAME: &str = "vinoteca";

impl Storage for S3 {
    fn put_object(
        &self,
        dir: &str,
        content: &[u8],
        content_type: &str,
    ) -> Result<String, VinotecaError> {
        let path = Uuid::new_v4().to_string();
        let (data, code) =
            self.bucket
                .put_object_with_content_type_blocking(format!("{}/{}", dir, path), content, content_type)?;
        if code > 304 {
            warn!(
                "Error saving image. Code: {}, AWSResponseData: {:?}",
                code,
                String::from_utf8(data)
            );
            Err(VinotecaError::Internal("Error saving image".to_owned()))
        } else {
            Ok(path)
        }
    }

    fn delete_object(&self, path: &str) -> Result<(), VinotecaError> {
        let (data, code) = self.bucket.delete_object_blocking(path)?;
        if code > 304 {
            warn!(
                "Error deleting existing file. Code: {}, AWSResponseData: {:?}",
                code,
                String::from_utf8(data)
            );
            Err(VinotecaError::Internal(
                "Error deleting existing file".to_owned(),
            ))
        } else {
            Ok(())
        }
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
