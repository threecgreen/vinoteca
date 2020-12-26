use crate::static_handlers;

use bcrypt::BcryptError;
use image::ImageError;
use rocket::http::{uncased::Uncased, Header, Status};
use rocket::request::Request;
use rocket::response::{self, Responder};
use rocket_contrib::json::Json;
use s3::S3Error;
use serde::Serialize;
use std::borrow::Cow;
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

impl<'r> Responder<'r> for VinotecaError {
    fn respond_to(self, req: &Request) -> response::Result<'static> {
        // Return JSON or HTML depending on accept header
        let mut res = if req
            .accept()
            .map_or(false, |a| a.preferred().media_type().is_html())
        {
            static_handlers::home().respond_to(req)
        } else {
            Json(self.clone()).respond_to(req)
        }?;
        res.set_status(match self {
            VinotecaError::NotFound(_) => Status::NotFound,
            VinotecaError::Internal(_) => Status::InternalServerError,
            VinotecaError::MissingConstraint(_) => Status::BadRequest,
            VinotecaError::BadRequest(_) => Status::BadRequest,
            VinotecaError::Forbidden(_) => Status::Forbidden,
            VinotecaError::Unauthorized(_) => Status::Unauthorized,
        });
        if let VinotecaError::Unauthorized(_) = self {
            // Response with 401 Unauthorized must set this header
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate
            res.set_header(Header {
                name: Uncased::new("WWW-Authenticate"),
                value: Cow::from("cookie"),
            });
        };
        Ok(res)
    }
}

impl From<BcryptError> for VinotecaError {
    fn from(bcrypt_error: BcryptError) -> Self {
        let msg = "Error hashing password".to_owned();
        match bcrypt_error {
            BcryptError::InvalidPassword => VinotecaError::Forbidden("Bad password".to_owned()),
            e => {
                error!("Error performing password hash: {:?}", e);
                VinotecaError::Internal(msg)
            }
        }
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
