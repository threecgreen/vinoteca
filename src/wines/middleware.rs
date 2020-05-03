use super::image::Image;
use super::models::RawWineForm;
use crate::error::VinotecaError;
use crate::models::WineForm;

use multipart_async::mime;
use multipart_async::server::Multipart;
use futures::stream::{Stream, self};
use rocket::data::{FromDataFuture, FromDataSimple, Outcome};
use rocket::http::Status;
use rocket::{Data, Outcome::*, Request};
use rocket::tokio::io;
use rocket::tokio::prelude::AsyncRead;
use tokio_util::codec;
// use rocket_multipart_form_data::{
//     mime, MultipartFormData, MultipartFormDataField, MultipartFormDataOptions, RawField, TextField,
// };

impl FromDataSimple for RawWineForm {
    type Error = VinotecaError;

    fn from_data(request: &Request, data: Data) -> FromDataFuture<'static, Self, Self::Error> {
        todo!("Rewrite with multipart-async");
        // // Create form parser
        // let mut options = MultipartFormDataOptions::new();
        // options.allowed_fields.push(
        //     MultipartFormDataField::raw("image")
        //         .size_limit(16 * 1024 * 1024) // 16 MB
        //         .content_type_by_string(Some(mime::IMAGE_STAR))
        //         .unwrap(),
        // );
        // options
        //     .allowed_fields
        //     .push(MultipartFormDataField::text("wine_form").content_type(Some(mime::STAR_STAR)));

        // // Check if content type is correct
        // let content_type = match request.content_type() {
        //     Some(content_type) => content_type,
        //     _ => {
        //         return Failure((
        //             Status::BadRequest,
        //             VinotecaError::BadRequest(
        //                 "Incorrect content-type, should be 'multipart/form-data'".to_owned(),
        //             ),
        //         ))
        //     }
        // };

        // // Parse form
        // let mut multipart_form = match MultipartFormData::parse(&content_type, data, options) {
        //     Ok(m) => m,
        //     Err(e) => {
        //         error!("Failed to parse multipart form. {:?}", e);
        //         return Failure((
        //             Status::BadRequest,
        //             VinotecaError::BadRequest(format!("Failed to parse multipart form. {:?}", e)),
        //         ));
        //     }
        // };
        // // Check for wine_form field
        // let wine_form_json = match multipart_form.texts.remove("wine_form") {
        //     Some(wine_form_json) => wine_form_json,
        //     _ => {
        //         return Failure((
        //             Status::BadRequest,
        //             VinotecaError::BadRequest("Missing required field 'wine_form'".to_owned()),
        //         ))
        //     }
        // };
        // // Check for image field
        // let image_part: Option<RawField> = multipart_form.raw.remove("image");
        // // Verify only one text field
        // let wine_form = match wine_form_json {
        //     TextField::Single(text) => match serde_json::from_str::<WineForm>(&text.text) {
        //         Ok(parsed) => parsed,
        //         Err(e) => {
        //             return Failure((
        //                 Status::BadRequest,
        //                 VinotecaError::BadRequest(format!(
        //                     "Failed to parse wine form JSON: {:?}",
        //                     e
        //                 )),
        //             ))
        //         }
        //     },
        //     TextField::Multiple(_text) => {
        //         return Failure((
        //             Status::BadRequest,
        //             VinotecaError::BadRequest("Extra text fields supplied".to_owned()),
        //         ))
        //     }
        // };
        // // Verify only one image provided
        // let image = match image_part {
        //     Some(RawField::Single(raw)) => {
        //         Some(Image {
        //             data: raw.raw,
        //             // TODO: determine if default is good
        //             mime_type: raw
        //                 .content_type
        //                 .unwrap_or_else(|| "image/png".parse().expect("PNG mime")),
        //         })
        //     }
        //     Some(RawField::Multiple(_raw)) => {
        //         return Failure((
        //             Status::BadRequest,
        //             VinotecaError::BadRequest("Invalid number of image fields supplied".to_owned()),
        //         ))
        //     }
        //     None => None,
        // };

        // Success(RawWineForm { wine_form, image })
    }
}

fn into_byte_stream<R>(r: R) -> impl Stream<Item=io::Result<u8>>
where
    R: AsyncRead,
{
    codec::FramedRead::new(r, codec::BytesCodec::new())
        .map_ok(|bytes| stream::iter(bytes).map(Ok))
        .try_flatten()
}

fn try_from_rocket_request(request: &Request, data: Data) -> Result<Multipart<impl Stream<Item=io::Result<u8>>>, VinotecaError> {
    if request.method() != rocket::http::Method::Post {
        return Err(VinotecaError::BadRequest(format!("Invalid method: {:?}", request.method())))
    }
    if let Some((_, boundary)) = request.content_type().and_then(|c| c.params().find(|&(k, _)| k == mime::BOUNDARY)) {
        Ok(Multipart::with_body( into_byte_stream(data.open()), boundary))
    } else {
        Err(VinotecaError::BadRequest("Couldn't find multipart form boundary".to_owned()))
    }
}

impl FromDataSimple for Image {
    type Error = VinotecaError;

    fn from_data(request: &Request, data: Data) -> FromDataFuture<'static, Self, Self::Error> {
        todo!("Rewrite with multipart-async");

        // let mut options = MultipartFormDataOptions::new();
        // options.allowed_fields.push(
        //     MultipartFormDataField::raw("image")
        //         .size_limit(16 * 1024 * 1024) // 16 MB
        //         .content_type_by_string(Some(mime::IMAGE_STAR))
        //         .unwrap(),
        // );

        // // Check if content type is correct
        // let content_type = match request.content_type() {
        //     Some(content_type) => content_type,
        //     _ => {
        //         return Failure((
        //             Status::BadRequest,
        //             VinotecaError::BadRequest(
        //                 "Incorrect content-type, should be 'multipart/form-data'".to_owned(),
        //             ),
        //         ))
        //     }
        // };

        // // Parse form
        // let mut multipart_form = match MultipartFormData::parse(&content_type, data, options) {
        //     Ok(m) => m,
        //     Err(e) => {
        //         error!("Failed to parse multipart form. {:?}", e);
        //         return Failure((
        //             Status::BadRequest,
        //             VinotecaError::BadRequest(format!("Failed to parse multipart form. {:?}", e)),
        //         ));
        //     }
        // };
        // // Check for image field. `remove()` get owned `RawField`
        // let raw_field = match multipart_form.raw.remove("image") {
        //     Some(field) => field,
        //     _ => {
        //         return Failure((
        //             Status::BadRequest,
        //             VinotecaError::BadRequest("Missing required field 'image'".to_owned()),
        //         ))
        //     }
        // };
        // // Verify only one image provided
        // match raw_field {
        //     RawField::Single(raw) => {
        //         Success(Image {
        //             data: raw.raw,
        //             // TODO: determine if default is good
        //             mime_type: raw
        //                 .content_type
        //                 .unwrap_or_else(|| "image/jpeg".parse().expect("JPEG mime")),
        //         })
        //     }
        //     RawField::Multiple(_raw) => Failure((
        //         Status::BadRequest,
        //         VinotecaError::BadRequest("Invalid number of image fields supplied".to_owned()),
        //     )),
        // }
    }
}
