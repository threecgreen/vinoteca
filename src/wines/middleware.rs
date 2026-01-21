use super::image::Image;
use super::models::RawWineForm;
use crate::error::VinotecaError;
use crate::models::WineForm;

use mime::Mime;
use multer::Multipart;
use rocket::data::{FromData, Outcome, ToByteUnit};
use rocket::http::Status;
use rocket::{Data, Request};

async fn parse_multipart<'r>(
    request: &'r Request<'_>,
    data: Data<'r>,
) -> Result<(WineForm, Option<Image>), (Status, VinotecaError)> {
    // Get boundary from content-type
    let content_type = request.content_type().ok_or((
        Status::BadRequest,
        VinotecaError::BadRequest("Missing content-type header".to_owned()),
    ))?;

    let boundary = content_type
        .params()
        .find(|(k, _)| *k == "boundary")
        .map(|(_, v)| v.to_string())
        .ok_or((
            Status::BadRequest,
            VinotecaError::BadRequest("Missing boundary in content-type".to_owned()),
        ))?;

    // Read data stream
    let stream = data.open(16.mebibytes());
    let bytes = stream.into_bytes().await.map_err(|e| {
        (
            Status::BadRequest,
            VinotecaError::BadRequest(format!("Failed to read request body: {}", e)),
        )
    })?;

    let mut multipart = Multipart::new(futures::stream::once(async move {
        Ok::<_, std::io::Error>(bytes.value)
    }), boundary);

    let mut wine_form: Option<WineForm> = None;
    let mut image: Option<Image> = None;

    while let Some(field) = multipart.next_field().await.map_err(|e| {
        (
            Status::BadRequest,
            VinotecaError::BadRequest(format!("Failed to parse multipart field: {}", e)),
        )
    })? {
        let name = field.name().map(|s| s.to_string());

        match name.as_deref() {
            Some("wine_form") => {
                let text = field.text().await.map_err(|e| {
                    (
                        Status::BadRequest,
                        VinotecaError::BadRequest(format!("Failed to read wine_form field: {}", e)),
                    )
                })?;
                wine_form = Some(serde_json::from_str::<WineForm>(&text).map_err(|e| {
                    (
                        Status::BadRequest,
                        VinotecaError::BadRequest(format!("Failed to parse wine form JSON: {}", e)),
                    )
                })?);
            }
            Some("image") => {
                let content_type = field
                    .content_type()
                    .map(|ct| ct.to_string())
                    .unwrap_or_else(|| "image/png".to_string());
                let mime_type: Mime = content_type.parse().unwrap_or_else(|_| "image/png".parse().unwrap());
                let data = field.bytes().await.map_err(|e| {
                    (
                        Status::BadRequest,
                        VinotecaError::BadRequest(format!("Failed to read image data: {}", e)),
                    )
                })?;
                image = Some(Image {
                    mime_type,
                    data: data.to_vec(),
                });
            }
            _ => {
                // Skip unknown fields
            }
        }
    }

    let wine_form = wine_form.ok_or((
        Status::BadRequest,
        VinotecaError::BadRequest("Missing required field 'wine_form'".to_owned()),
    ))?;

    Ok((wine_form, image))
}

#[rocket::async_trait]
impl<'r> FromData<'r> for RawWineForm {
    type Error = VinotecaError;

    async fn from_data(request: &'r Request<'_>, data: Data<'r>) -> Outcome<'r, Self> {
        match parse_multipart(request, data).await {
            Ok((wine_form, image)) => Outcome::Success(RawWineForm { wine_form, image }),
            Err((status, error)) => Outcome::Error((status, error)),
        }
    }
}

#[rocket::async_trait]
impl<'r> FromData<'r> for Image {
    type Error = VinotecaError;

    async fn from_data(request: &'r Request<'_>, data: Data<'r>) -> Outcome<'r, Self> {
        // Get boundary from content-type
        let content_type = match request.content_type() {
            Some(ct) => ct,
            None => {
                return Outcome::Error((
                    Status::BadRequest,
                    VinotecaError::BadRequest("Missing content-type header".to_owned()),
                ))
            }
        };

        let boundary = match content_type
            .params()
            .find(|(k, _)| *k == "boundary")
            .map(|(_, v)| v.to_string())
        {
            Some(b) => b,
            None => {
                return Outcome::Error((
                    Status::BadRequest,
                    VinotecaError::BadRequest("Missing boundary in content-type".to_owned()),
                ))
            }
        };

        // Read data stream
        let stream = data.open(16.mebibytes());
        let bytes = match stream.into_bytes().await {
            Ok(b) => b,
            Err(e) => {
                return Outcome::Error((
                    Status::BadRequest,
                    VinotecaError::BadRequest(format!("Failed to read request body: {}", e)),
                ))
            }
        };

        let mut multipart = Multipart::new(futures::stream::once(async move {
            Ok::<_, std::io::Error>(bytes.value)
        }), boundary);

        while let Ok(Some(field)) = multipart.next_field().await {
            let name = field.name().map(|s| s.to_string());
            if name.as_deref() == Some("image") {
                let content_type = field
                    .content_type()
                    .map(|ct| ct.to_string())
                    .unwrap_or_else(|| "image/jpeg".to_string());
                let mime_type: Mime = content_type.parse().unwrap_or_else(|_| "image/jpeg".parse().unwrap());
                match field.bytes().await {
                    Ok(data) => {
                        return Outcome::Success(Image {
                            mime_type,
                            data: data.to_vec(),
                        })
                    }
                    Err(e) => {
                        return Outcome::Error((
                            Status::BadRequest,
                            VinotecaError::BadRequest(format!("Failed to read image data: {}", e)),
                        ))
                    }
                }
            }
        }

        Outcome::Error((
            Status::BadRequest,
            VinotecaError::BadRequest("Missing required field 'image'".to_owned()),
        ))
    }
}
