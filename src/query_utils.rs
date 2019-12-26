use diesel::result::Error;
use rocket::http::Status;

pub fn error_status(error: Error) -> Status {
    match error {
        Error::NotFound => Status::NotFound,
        e => {
            warn!("Error encountered: {:?}", e);
            Status::InternalServerError
        }
    }
}
