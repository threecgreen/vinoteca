use crate::schema::users;
use crate::DbConn;

use diesel::prelude::*;
use rocket::http::Status;
use rocket::request::{self, FromRequest, Request};
use rocket::Outcome;
use serde::{Deserialize, Serialize};

// If more fields are added, remove `Copy`
#[derive(Copy, Clone, Debug, Deserialize, Serialize)]
pub struct Auth {
    /// user id
    pub id: i32,
}

pub static COOKIE_NAME: &str = "vinoteca-auth";

impl<'a, 'r> FromRequest<'a, 'r> for Auth {
    type Error = ();

    fn from_request(request: &'a Request<'r>) -> request::Outcome<Auth, Self::Error> {
        let connection = request.guard::<DbConn>()?;
        let auth = request
            .cookies()
            .get_private(COOKIE_NAME)
            .and_then(|cookie| cookie.value().parse().ok())
            .and_then(|id: i32|
                users::table
                    .filter(users::id.eq(id))
                    .select(users::id)
                    .first(&*connection)
                    .ok()
            )
            .map(|id| Auth { id });
        if let Some(auth) = auth {
            Outcome::Success(auth)
        } else {
            Outcome::Failure((Status::Forbidden, ()))
        }
    }
}
