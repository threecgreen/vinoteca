use super::image::Image;
use super::models::RawWineForm;
use crate::error::VinotecaError;
use crate::models::WineForm;

use multer::{Field, Multipart};
use rocket::async_trait;
use rocket::data::{ByteUnit, FromData, Outcome};
use rocket::http::Status;
use rocket::{Data, Request};

const BODY_LIMIT: ByteUnit = ByteUnit::Mebibyte(16);

/// Buffer the whole multipart body. Bodies over `BODY_LIMIT` are rejected
/// rather than truncated, since a truncated body fails later with a misleading
/// "missing field" error.
async fn read_multipart<'r>(
    request: &'r Request<'_>,
    data: Data<'r>,
) -> Result<Multipart<'static>, VinotecaError> {
    let content_type = request
        .content_type()
        .ok_or_else(|| VinotecaError::BadRequest("Missing content-type header".to_owned()))?;
    let boundary = content_type
        .params()
        .find(|(k, _)| *k == "boundary")
        .map(|(_, v)| v.to_string())
        .ok_or_else(|| VinotecaError::BadRequest("Missing boundary in content-type".to_owned()))?;

    let bytes =
        data.open(BODY_LIMIT).into_bytes().await.map_err(|e| {
            VinotecaError::BadRequest(format!("Failed to read request body: {}", e))
        })?;
    if !bytes.is_complete() {
        return Err(VinotecaError::BadRequest(format!(
            "Request body exceeds the {} upload limit",
            BODY_LIMIT
        )));
    }

    Ok(Multipart::new(
        futures::stream::once(async move { Ok::<_, std::io::Error>(bytes.value) }),
        boundary,
    ))
}

fn multipart_error(e: multer::Error) -> VinotecaError {
    VinotecaError::BadRequest(format!("Failed to parse multipart field: {}", e))
}

async fn read_image(field: Field<'_>) -> Result<Image, VinotecaError> {
    let mime_type = field.content_type().cloned().unwrap_or(mime::IMAGE_JPEG);
    let data = field
        .bytes()
        .await
        .map_err(|e| VinotecaError::BadRequest(format!("Failed to read image data: {}", e)))?;
    Ok(Image {
        mime_type,
        data: data.to_vec(),
    })
}

async fn parse_wine_form<'r>(
    request: &'r Request<'_>,
    data: Data<'r>,
) -> Result<RawWineForm, VinotecaError> {
    let mut multipart = read_multipart(request, data).await?;
    let mut wine_form: Option<WineForm> = None;
    let mut image: Option<Image> = None;

    while let Some(field) = multipart.next_field().await.map_err(multipart_error)? {
        match field.name() {
            Some("wine_form") => {
                let text = field.text().await.map_err(|e| {
                    VinotecaError::BadRequest(format!("Failed to read wine_form field: {}", e))
                })?;
                wine_form = Some(serde_json::from_str::<WineForm>(&text).map_err(|e| {
                    VinotecaError::BadRequest(format!("Failed to parse wine form JSON: {}", e))
                })?);
            }
            Some("image") => image = Some(read_image(field).await?),
            _ => {}
        }
    }

    let wine_form = wine_form.ok_or_else(|| {
        VinotecaError::BadRequest("Missing required field 'wine_form'".to_owned())
    })?;
    Ok(RawWineForm { wine_form, image })
}

async fn parse_image<'r>(request: &'r Request<'_>, data: Data<'r>) -> Result<Image, VinotecaError> {
    let mut multipart = read_multipart(request, data).await?;
    while let Some(field) = multipart.next_field().await.map_err(multipart_error)? {
        if field.name() == Some("image") {
            return read_image(field).await;
        }
    }
    Err(VinotecaError::BadRequest(
        "Missing required field 'image'".to_owned(),
    ))
}

#[async_trait]
impl<'r> FromData<'r> for RawWineForm {
    type Error = VinotecaError;

    async fn from_data(request: &'r Request<'_>, data: Data<'r>) -> Outcome<'r, Self> {
        match parse_wine_form(request, data).await {
            Ok(form) => Outcome::Success(form),
            Err(error) => Outcome::Error((Status::BadRequest, error)),
        }
    }
}

#[async_trait]
impl<'r> FromData<'r> for Image {
    type Error = VinotecaError;

    async fn from_data(request: &'r Request<'_>, data: Data<'r>) -> Outcome<'r, Self> {
        match parse_image(request, data).await {
            Ok(image) => Outcome::Success(image),
            Err(error) => Outcome::Error((Status::BadRequest, error)),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::error::RestResult;
    use crate::testing::simple_rocket;

    use rocket::http::ContentType;
    use rocket::local::blocking::{Client, LocalResponse};
    use rocket::serde::json::Json;
    use rocket::{post, routes};

    const BOUNDARY: &str = "vinoteca-test-boundary";

    /// Echo back the uploaded image size so tests can tell the guard succeeded.
    #[post("/wine", data = "<form>")]
    fn wine(form: Result<RawWineForm, VinotecaError>) -> RestResult<Option<usize>> {
        Ok(Json(form?.image.map(|image| image.data.len())))
    }

    #[post("/image", data = "<image>")]
    fn image(image: Result<Image, VinotecaError>) -> RestResult<usize> {
        Ok(Json(image?.data.len()))
    }

    fn client() -> Client {
        Client::tracked(simple_rocket().mount("/", routes![wine, image])).unwrap()
    }

    fn multipart_body(parts: &[(&str, &[u8])]) -> Vec<u8> {
        let mut body = Vec::new();
        for (name, content) in parts {
            body.extend_from_slice(format!("--{}\r\n", BOUNDARY).as_bytes());
            body.extend_from_slice(
                format!(
                    "Content-Disposition: form-data; name=\"{}\"; filename=\"f\"\r\n\r\n",
                    name
                )
                .as_bytes(),
            );
            body.extend_from_slice(content);
            body.extend_from_slice(b"\r\n");
        }
        body.extend_from_slice(format!("--{}--\r\n", BOUNDARY).as_bytes());
        body
    }

    fn post<'c>(client: &'c Client, uri: &str, body: Vec<u8>) -> LocalResponse<'c> {
        client
            .post(uri.to_owned())
            .header(ContentType::new("multipart", "form-data").with_params(("boundary", BOUNDARY)))
            .body(body)
            .dispatch()
    }

    fn bad_request_message(response: LocalResponse<'_>) -> String {
        assert_eq!(response.status(), Status::BadRequest);
        let error: serde_json::Value = response.into_json().unwrap();
        assert_eq!(error["type"], "BadRequest", "{error}");
        error["message"].as_str().unwrap().to_owned()
    }

    const WINE_FORM_JSON: &[u8] = br#"{"description":null,"notes":null,"rating":null,"inventory":1,"why":null,"colorId":1,"producerId":1,"vitiAreaId":null,"name":null,"wineTypeId":1,"isInShoppingList":false}"#;

    #[test]
    fn image_within_limit_is_accepted() {
        let client = client();
        let response = post(
            &client,
            "/image",
            multipart_body(&[("image", &[7u8; 1024])]),
        );
        assert_eq!(response.status(), Status::Ok);
        assert_eq!(response.into_json::<usize>(), Some(1024));
    }

    #[test]
    fn wine_form_with_image_is_accepted() {
        let client = client();
        let body = multipart_body(&[("wine_form", WINE_FORM_JSON), ("image", &[7u8; 1024])]);
        let response = post(&client, "/wine", body);
        assert_eq!(response.status(), Status::Ok);
        assert_eq!(response.into_json::<Option<usize>>(), Some(Some(1024)));
    }

    #[test]
    fn oversized_image_is_rejected_with_limit_message() {
        let client = client();
        let too_big = vec![7u8; BODY_LIMIT.as_u64() as usize];
        let response = post(&client, "/image", multipart_body(&[("image", &too_big)]));
        let message = bad_request_message(response);
        assert_eq!(message, "Request body exceeds the 16MiB upload limit");
    }

    #[test]
    fn oversized_wine_form_is_rejected_with_limit_message() {
        let client = client();
        let too_big = vec![7u8; BODY_LIMIT.as_u64() as usize];
        let body = multipart_body(&[("wine_form", WINE_FORM_JSON), ("image", &too_big)]);
        let response = post(&client, "/wine", body);
        let message = bad_request_message(response);
        assert_eq!(message, "Request body exceeds the 16MiB upload limit");
    }

    /// A body with no boundary at all fails in `next_field`, the error the
    /// old `while let Ok(Some(..))` loop swallowed into "missing field".
    #[test]
    fn malformed_multipart_reports_parse_error_not_missing_field() {
        let client = client();
        let message =
            bad_request_message(post(&client, "/image", b"not a multipart body".to_vec()));
        assert_eq!(
            message,
            "Failed to parse multipart field: incomplete multipart stream"
        );
    }

    #[test]
    fn missing_image_field_is_reported() {
        let client = client();
        let message = bad_request_message(post(&client, "/image", multipart_body(&[])));
        assert_eq!(message, "Missing required field 'image'");
    }
}
