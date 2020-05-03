use crate::error::VinotecaError;

use s3::bucket::Bucket;

pub async fn put_object(
    s3_bucket: &Bucket,
    path: &str,
    content: &[u8],
    content_type: &mime::Mime,
) -> Result<(), VinotecaError> {
    let (_, code) = s3_bucket
        .put_object(path, content, &content_type.to_string())
        .await
        .map_err(|e| {
            error!("Aws error putting object: {:?}", e);
            VinotecaError::Internal("Error saving file".to_owned())
        })?;
    if code == 201 {
        Ok(())
    } else {
        Err(VinotecaError::Internal("Error saving file".to_owned()))
    }
}
