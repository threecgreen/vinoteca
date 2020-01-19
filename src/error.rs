use serde::Serialize;
use std::convert::From;
use std::error::Error;
use std::fmt::{self, Display};

#[derive(Debug, Serialize)]
pub enum VinotecaError {
    NotFound(String),
    Internal(String),
    // Foreign key
    MissingConstraint(String),
    BadRequest(String),
}

impl From<diesel::result::Error> for VinotecaError {
    fn from(diesel_error: diesel::result::Error) -> Self {
        // TODO: set status?
        match diesel_error {
            e @ diesel::result::Error::NotFound => VinotecaError::NotFound(format!("{}", e)),
            diesel::result::Error::DatabaseError(kind, _info) => {
                VinotecaError::MissingConstraint(format!("{:#?}", kind))
            }
            e => VinotecaError::Internal(format!("{}", e)),
        }
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
