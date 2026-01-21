use crate::static_handlers;

use bcrypt::BcryptError;
use log::{error, warn};
use image::ImageError;
use rocket::http::{Header, Status};
use rocket::request::Request;
use rocket::response::{self, Responder, Response};
use rocket::serde::json::Json;
use s3::error::S3Error;
use serde::Serialize;
use std::convert::From;
use std::error::Error;
use std::fmt::{self, Display};
use typescript_definitions::TypeScriptify;
use validator::ValidationErrors;

#[derive(Clone, Debug, Serialize, TypeScriptify)]
#[serde(tag = "type", content = "message")]
pub enum VinotecaError {
    /// Entity not found
    NotFound(String),
    Internal(String),
    /// Foreign key or `CHECK` constraint
    MissingConstraint(String),
    /// The request is missing a requirement or otherwise malformed
    BadRequest(String),
    /// The user is not authorized to access the resource
    Forbidden(String),
    /// The user has not yet been authorized
    Unauthorized(String),
}

pub type RestResult<T> = Result<Json<T>, VinotecaError>;

impl<'r, 'o: 'r> Responder<'r, 'o> for VinotecaError {
    fn respond_to(self, req: &'r Request<'_>) -> response::Result<'o> {
        // Return JSON or HTML depending on accept header
        let status = match &self {
            VinotecaError::NotFound(_) => Status::NotFound,
            VinotecaError::Internal(_) => Status::InternalServerError,
            VinotecaError::MissingConstraint(_) => Status::BadRequest,
            VinotecaError::BadRequest(_) => Status::BadRequest,
            VinotecaError::Forbidden(_) => Status::Forbidden,
            VinotecaError::Unauthorized(_) => Status::Unauthorized,
        };

        let mut builder = if req
            .accept()
            .is_some_and(|a| a.preferred().media_type().is_html())
        {
            Response::build_from(static_handlers::home().respond_to(req)?)
        } else {
            Response::build_from(Json(self.clone()).respond_to(req)?)
        };

        builder.status(status);

        if let VinotecaError::Unauthorized(_) = self {
            // Response with 401 Unauthorized must set this header
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate
            builder.header(Header::new("WWW-Authenticate", "cookie"));
        }

        builder.ok()
    }
}

impl From<BcryptError> for VinotecaError {
    fn from(bcrypt_error: BcryptError) -> Self {
        error!("Error performing password hash: {bcrypt_error:?}");
        VinotecaError::Internal("Error hashing password".to_owned())
    }
}

impl From<diesel::result::Error> for VinotecaError {
    fn from(diesel_error: diesel::result::Error) -> Self {
        match diesel_error {
            e @ diesel::result::Error::NotFound => VinotecaError::NotFound(format!("{}", e)),
            diesel::result::Error::DatabaseError(kind, info) => {
                warn!("diesel database error. Kind: {:#?} Info: {:#?}", kind, info);
                VinotecaError::MissingConstraint(format!("{:?}", info))
            }
            e => {
                warn!("other diesel error. {:#?}", e);
                VinotecaError::Internal(format!("{}", e))
            }
        }
    }
}

impl From<std::io::Error> for VinotecaError {
    fn from(io_error: std::io::Error) -> Self {
        warn!("IOError: {:#?}", io_error);
        VinotecaError::Internal(format!("{}", io_error))
    }
}

impl From<ValidationErrors> for VinotecaError {
    fn from(val_errors: ValidationErrors) -> Self {
        // TODO: Improve formatting
        VinotecaError::BadRequest(format!("{}", val_errors))
    }
}

impl From<ImageError> for VinotecaError {
    fn from(img_error: ImageError) -> Self {
        warn!("Error reading or writing image: {:#?}", img_error);
        VinotecaError::Internal(format!("{}", img_error))
    }
}

impl From<S3Error> for VinotecaError {
    fn from(s3_error: S3Error) -> Self {
        warn!("Error saving file to s3: {:?}", s3_error);
        VinotecaError::Internal("Error handling file".to_owned())
    }
}

impl From<exif::Error> for VinotecaError {
    fn from(exif_error: exif::Error) -> Self {
        warn!("Error reading exif data: {:?}", exif_error);
        VinotecaError::Internal("Error handling image metadata".to_owned())
    }
}

impl Display for VinotecaError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let fmt_arg = match self {
            Self::NotFound(msg) => format!("Error not found: {}", msg),
            Self::Internal(msg) => format!("Internal error: {}", msg),
            Self::MissingConstraint(msg) => format!("Error missing constraint: {}", msg),
            Self::BadRequest(msg) => format!("Error bad request: {}", msg),
            Self::Forbidden(msg) => format!("Error forbidden: {}", msg),
            Self::Unauthorized(msg) => format!("Error unauthorized: {}", msg),
        };
        write!(f, "{}", fmt_arg)
    }
}

impl Error for VinotecaError {
    fn description(&self) -> &str {
        match self {
            Self::NotFound(_) => "Expected to find something in the database that wasn't there",
            Self::Internal(_) => "Unexpected interal error",
            Self::MissingConstraint(_) => "Missing foreign key",
            Self::BadRequest(_) => "Invalid data received from the request",
            Self::Forbidden(_) => "Forbidden",
            Self::Unauthorized(_) => "Unauthorized",
        }
    }

    fn cause(&self) -> Option<&dyn Error> {
        None
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::testing::simple_rocket;

    use rocket::{
        get, routes,
        http::{Accept, ContentType},
        local::blocking::Client,
    };

    #[get("/")]
    fn handle_err() -> Result<(), VinotecaError> {
        Err(VinotecaError::Unauthorized("No user".to_owned()))
    }

    fn error_rocket_client() -> Client {
        let rocket = simple_rocket().mount("/", routes![handle_err]);
        Client::tracked(rocket).unwrap()
    }

    #[test]
    fn accept_html_bad_request_receives_html() {
        let client = error_rocket_client();
        let response = client.get("/").header(Accept::HTML).dispatch();
        assert_eq!(response.status(), Status::Unauthorized);
        assert_eq!(response.content_type(), Some(ContentType::HTML));
    }

    #[test]
    fn plain_bad_request_receives_json() {
        let client = error_rocket_client();
        let response = client.get("/").dispatch();
        assert_eq!(response.status(), Status::Unauthorized);
        assert_eq!(response.content_type(), Some(ContentType::JSON));
    }

    #[test]
    fn accept_json_bad_request_receives_json() {
        let client = error_rocket_client();
        let response = client.get("/").header(Accept::JSON).dispatch();
        assert_eq!(response.status(), Status::Unauthorized);
        assert_eq!(response.content_type(), Some(ContentType::JSON));
    }
}
