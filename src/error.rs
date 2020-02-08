use image::ImageError;
use rocket::http::Status;
use rocket::request::Request;
use rocket::response::{self, Responder};
use rocket_contrib::json::Json;
use serde::Serialize;
use std::convert::From;
use std::error::Error;
use std::fmt::{self, Display};
use validator::ValidationErrors;

#[derive(Clone, Debug, Serialize)]
pub enum VinotecaError {
    NotFound(String),
    Internal(String),
    // Foreign key
    MissingConstraint(String),
    BadRequest(String),
}

pub type RestResult<T> = Result<Json<T>, VinotecaError>;

impl<'r> Responder<'r> for VinotecaError {
    fn respond_to(self, _r: &Request) -> response::Result<'static> {
        Json(self.clone()).respond_to(_r).map(|mut res| {
            res.set_status(match self {
                VinotecaError::NotFound(_) => Status::NotFound,
                VinotecaError::Internal(_) => Status::InternalServerError,
                VinotecaError::MissingConstraint(_) => Status::BadRequest,
                VinotecaError::BadRequest(_) => Status::BadRequest,
            });
            res
        })
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

impl From<ImageError> for VinotecaError {
    fn from(img_error: ImageError) -> Self {
        warn!("Error reading or writing image: {:#?}", img_error);
        VinotecaError::Internal(format!("{}", img_error))
    }
}

impl From<ValidationErrors> for VinotecaError {
    fn from(val_errors: ValidationErrors) -> Self {
        VinotecaError::BadRequest(format!("{}", val_errors))
    }
}

impl Display for VinotecaError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let fmt_arg = match &*self {
            Self::NotFound(msg) => format!("NotFound({})", msg),
            Self::Internal(msg) => format!("Internal({})", msg),
            Self::MissingConstraint(msg) => format!("MissingConstraint({})", msg),
            Self::BadRequest(msg) => format!("BadRequest({})", msg),
        };
        write!(f, "{}", fmt_arg)
    }
}

impl Error for VinotecaError {
    fn description(&self) -> &str {
        match *self {
            Self::NotFound(_) => "Expected to find something in the database that wasn't there",
            Self::Internal(_) => "Unexpected interal error",
            Self::MissingConstraint(_) => "Missing foreign key",
            Self::BadRequest(_) => "Invalid data received from the request",
        }
    }

    fn cause(&self) -> Option<&dyn Error> {
        None
    }
}
