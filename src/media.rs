use crate::error::VinotecaError;

use rocket_multipart_form_data::mime;
use s3::bucket::Bucket;

pub fn put_object(
    s3_bucket: &Bucket,
    path: &str,
    content: &[u8],
    content_type: &mime::Mime,
) -> Result<(), VinotecaError> {
    let (_, code) = s3_bucket
        .put_object_blocking(path, content, &content_type.to_string())
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
