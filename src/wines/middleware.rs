use super::image::Image;
use super::models::RawWineForm;
use crate::error::VinotecaError;
use crate::models::WineForm;

use rocket::data::{FromDataSimple, Outcome};
use rocket::http::Status;
use rocket::{Data, Outcome::*, Request};
use rocket_multipart_form_data::{
    mime, MultipartFormData, MultipartFormDataField, MultipartFormDataOptions, RawField,
};

impl FromDataSimple for RawWineForm {
    type Error = VinotecaError;

    fn from_data(request: &Request, data: Data) -> Outcome<Self, Self::Error> {
        // Create form parser
        let mut options = MultipartFormDataOptions::new();
        options.allowed_fields.push(
            MultipartFormDataField::raw("image")
                .size_limit(16 * 1024 * 1024) // 16 MB
                .content_type_by_string(Some(mime::IMAGE_STAR))
                .unwrap(),
        );
        options
            .allowed_fields
            .push(MultipartFormDataField::text("wine_form").content_type(Some(mime::STAR_STAR)));

        // Check if content type is correct
        let content_type = match request.content_type() {
            Some(content_type) => content_type,
            _ => {
                return Failure((
                    Status::BadRequest,
                    VinotecaError::BadRequest(
                        "Incorrect content-type, should be 'multipart/form-data'".to_owned(),
                    ),
                ))
            }
        };

        // Parse form
        let mut multipart_form = match MultipartFormData::parse(content_type, data, options) {
            Ok(m) => m,
            Err(e) => {
                error!("Failed to parse multipart form. {:?}", e);
                return Failure((
                    Status::BadRequest,
                    VinotecaError::BadRequest(format!("Failed to parse multipart form. {:?}", e)),
                ));
            }
        };
        // Check for wine_form field
        let wine_form_json = match multipart_form.texts.remove("wine_form") {
            Some(wine_form_json) => wine_form_json,
            _ => {
                return Failure((
                    Status::BadRequest,
                    VinotecaError::BadRequest("Missing required field 'wine_form'".to_owned()),
                ))
            }
        };
        // Check for image field
        let image_part: Option<Vec<RawField>> = multipart_form.raw.remove("image");
        // Verify only one text field
        let wine_form = match wine_form_json {
            texts if texts.len() == 1 => match serde_json::from_str::<WineForm>(&texts[0].text) {
                Ok(parsed) => parsed,
                Err(e) => {
                    return Failure((
                        Status::BadRequest,
                        VinotecaError::BadRequest(format!(
                            "Failed to parse wine form JSON: {:?}",
                            e
                        )),
                    ))
                }
            },
            _text => {
                return Failure((
                    Status::BadRequest,
                    VinotecaError::BadRequest("Extra text fields supplied".to_owned()),
                ))
            }
        };
        // Verify only one image provided
        let image = match image_part {
            Some(raw) if raw.len() == 1 => {
                let raw = &raw[0];
                Some(Image {
                    // FIXME: clone
                    data: raw.raw.clone(),
                    // TODO: determine if default is good
                    mime_type: raw
                        .content_type
                        .clone()
                        .unwrap_or_else(|| "image/png".parse().expect("PNG mime")),
                })
            }
            Some(_raw) => {
                return Failure((
                    Status::BadRequest,
                    VinotecaError::BadRequest("Invalid number of image fields supplied".to_owned()),
                ))
            }
            None => None,
        };

        Success(RawWineForm { wine_form, image })
    }
}

impl FromDataSimple for Image {
    type Error = VinotecaError;

    fn from_data(request: &Request, data: Data) -> Outcome<Self, Self::Error> {
        let mut options = MultipartFormDataOptions::new();
        options.allowed_fields.push(
            MultipartFormDataField::raw("image")
                .size_limit(16 * 1024 * 1024) // 16 MB
                .content_type_by_string(Some(mime::IMAGE_STAR))
                .unwrap(),
        );

        // Check if content type is correct
        let content_type = match request.content_type() {
            Some(content_type) => content_type,
            _ => {
                return Failure((
                    Status::BadRequest,
                    VinotecaError::BadRequest(
                        "Incorrect content-type, should be 'multipart/form-data'".to_owned(),
                    ),
                ))
            }
        };

        // Parse form
        let mut multipart_form = match MultipartFormData::parse(content_type, data, options) {
            Ok(m) => m,
            Err(e) => {
                error!("Failed to parse multipart form. {:?}", e);
                return Failure((
                    Status::BadRequest,
                    VinotecaError::BadRequest(format!("Failed to parse multipart form. {:?}", e)),
                ));
            }
        };
        // Check for image field. `remove()` get owned `RawField`
        let raw_field = match multipart_form.raw.remove("image") {
            Some(field) => field,
            _ => {
                return Failure((
                    Status::BadRequest,
                    VinotecaError::BadRequest("Missing required field 'image'".to_owned()),
                ))
            }
        };
        // Verify only one image provided
        if raw_field.len() == 1 {
            let raw = &raw_field[0];
            Success(Image {
                // FIXME: clone
                data: raw.raw.clone(),
                // TODO: determine if default is good
                mime_type: raw
                    .content_type
                    .clone()
                    .unwrap_or_else(|| "image/jpeg".parse().expect("JPEG mime")),
            })
        } else {
            Failure((
                Status::BadRequest,
                VinotecaError::BadRequest("Invalid number of image fields supplied".to_owned()),
            ))
        }
    }
}
