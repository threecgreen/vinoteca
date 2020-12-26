use crate::error::VinotecaError;
use crate::schema::users;
use crate::DbConn;

use diesel::prelude::*;
use rocket::http::Status;
use rocket::request::{self, FromRequest, Request};
use rocket::Outcome;
use rocket_contrib::json::Json;
use serde::{Deserialize, Serialize};

// If more fields are added, remove `Copy`
#[derive(Copy, Clone, Debug, Deserialize, Serialize)]
pub struct Auth {
    /// user id
    pub id: i32,
}

pub static COOKIE_NAME: &str = "vinoteca-auth";

impl<'a, 'r> FromRequest<'a, 'r> for Auth {
    type Error = Json<VinotecaError>;

    fn from_request(request: &'a Request<'r>) -> request::Outcome<Auth, Self::Error> {
        let connection = request.guard::<DbConn>().map_failure(|e| {
            error!("Failed to acquire database connection: {:?}", e);
            (
                Status::InternalServerError,
                Json(VinotecaError::Internal(
                    "Database connection failed".to_owned(),
                )),
            )
        })?;
        let cookie = request.cookies().get_private(COOKIE_NAME);
        match cookie {
            Some(cookie) => {
                let auth = cookie
                    .value()
                    .parse()
                    .ok()
                    .and_then(|id: i32| {
                        users::table
                            .filter(users::id.eq(id))
                            .select(users::id)
                            .first(&*connection)
                            .ok()
                    })
                    .map(|id| Auth { id });
                if let Some(auth) = auth {
                    Outcome::Success(auth)
                } else {
                    Outcome::Failure((
                        Status::Forbidden,
                        Json(VinotecaError::Forbidden("Bad email or password".to_owned())),
                    ))
                }
            }
            None => Outcome::Failure((
                Status::Unauthorized,
                Json(VinotecaError::Unauthorized("Login required".to_owned())),
            )),
        }
    }
}

#[cfg(test)]
mod test {
    use super::*;

    use rocket::http::Cookie;
    use rocket::local::Client;

    #[get("/")]
    fn handle_auth(auth: Auth) -> Json<i32> {
        Json(auth.id)
    }

    #[test]
    fn missing_cookie() {
        rocket_test!(|rocket| {
            let rocket = rocket.mount("/", routes![handle_auth]);
            let client = Client::new(rocket).expect("rocket client");
            let req = client.get("/");
            let response = req.dispatch();
            assert_eq!(response.status(), Status::Unauthorized);
        })
    }

    #[test]
    fn missing_user() {
        rocket_test!(|rocket| {
            let rocket = rocket.mount("/", routes![handle_auth]);
            let client = Client::new(rocket).expect("rocket client");
            let req = client
                .get("/")
                // User that doesn't exist
                .private_cookie(Cookie::new("vinoteca-auth", "-1"));
            let response = req.dispatch();
            assert_eq!(response.status(), Status::Forbidden);
        })
    }

    #[test]
    fn authorize() {
        rocket_test!(|rocket| {
            let rocket = rocket.mount("/", routes![handle_auth]);
            let client = Client::new(rocket).expect("rocket client");
            let req = client
                .get("/")
                .private_cookie(Cookie::new("vinoteca-auth", "1"));
            let response = req.dispatch();
            assert_eq!(response.status(), Status::Ok);
        })
    }
}
