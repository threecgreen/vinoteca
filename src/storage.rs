use crate::error::VinotecaError;

use s3::bucket::Bucket as S3Bucket;
use uuid::Uuid;

/// Trait for persistin
#[cfg(test)]
use mockall::{automock, predicate::*};
#[cfg_attr(test, automock)]
#[rocket::async_trait]
pub trait Storage: Send + Sync + 'static {
    /// read object at `path`
    async fn get_object(&self, path: &str) -> Result<Vec<u8>, VinotecaError>;
    /// Get a pre-signed URL for creating an object
    async fn presign_create_object(&self, dir: &str) -> Result<PresignedCreate, VinotecaError>;
    /// Get a pre-signed URL for updating an object
    async fn presign_update_object(&self, path: &str) -> Result<String, VinotecaError>;
}

/// Stores files on AWS S3 bucket.
#[derive(Debug)]
pub struct S3 {
    bucket: S3Bucket,
}

#[derive(Debug)]
pub struct PresignedCreate {
    /// path of the pre-signed object
    path: String,
    /// URL to update the object
    url: String,
}

const BUCKET_NAME: &str = "vinoteca";
const EXPIRY_SECONDS: u32 = 60 * 10;

#[rocket::async_trait]
impl Storage for S3 {
    // async fn create_object(
    //     &self,
    //     dir: &str,
    //     content: &[u8],
    //     content_type: &str,
    // ) -> Result<String, VinotecaError> {
    //     let (data, code) = self
    //         .bucket
    //         .put_object_with_content_type(self.path(dir), content, content_type)
    //         .await?;
    //     // TODO: may be able to delete code checks with fail on err feature enabled
    //     if code > 304 {
    //         warn!(
    //             "Error saving image. Code: {}, AWSResponseData: {:?}",
    //             code,
    //             String::from_utf8(data)
    //         );
    //         Err(VinotecaError::Internal("Error saving image".to_owned()))
    //     } else {
    //         Ok(path)
    //     }
    // }

    async fn get_object(&self, path: &str) -> Result<Vec<u8>, VinotecaError> {
        let resp = self.bucket.get_object(path).await?;
        if resp.status_code() > 304 {
            warn!(
                "Failed to get file from S3. Code: {}, AWSResponseData: {:?}",
                resp.status_code(),
                resp.as_str()
            );
            Err(VinotecaError::Internal("Error getting file".to_owned()))
        } else {
            Ok(resp.to_vec())
        }
    }

    // async fn update_object(&self, path: &str, content: &[u8]) -> Result<(), VinotecaError> {
    //     let (data, code) = self.bucket.put_object(path, content).await?;
    //     if code > 304 {
    //         warn!(
    //             "Error saving image. Code: {}, AWSResponseData: {:?}",
    //             code,
    //             String::from_utf8(data)
    //         );
    //         Err(VinotecaError::Internal("Error saving image".to_owned()))
    //     } else {
    //         Ok(())
    //     }
    // }

    // async fn delete_object(&self, path: &str) -> Result<(), VinotecaError> {
    //     let (data, code) = self.bucket.delete_object(path).await?;
    //     if code > 304 {
    //         warn!(
    //             "Error deleting existing file. Code: {}, AWSResponseData: {:?}",
    //             code,
    //             String::from_utf8(data)
    //         );
    //         Err(VinotecaError::Internal("Error deleting file".to_owned()))
    //     } else {
    //         Ok(())
    //     }
    // }

    async fn presign_create_object(&self, dir: &str) -> Result<PresignedCreate, VinotecaError> {
        let path = Uuid::new_v4().to_string();
        let url = self
            .bucket
            .presign_put(format!("{dir}/{path}"), EXPIRY_SECONDS, None)?;
        Ok(PresignedCreate { path, url })
    }

    async fn presign_update_object(&self, path: &str) -> Result<String, VinotecaError> {
        Ok(self.bucket.presign_put(path, EXPIRY_SECONDS, None)?)
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
