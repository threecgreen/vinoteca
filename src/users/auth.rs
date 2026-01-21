use crate::error::VinotecaError;
use crate::query_utils::DbConn;
use crate::schema::users;

use diesel::prelude::*;
use diesel_async::RunQueryDsl;
use rocket::http::Status;
use rocket::request::{self, FromRequest, Outcome, Request};
use rocket::serde::json::Json;
use serde::{Deserialize, Serialize};

// If more fields are added, remove `Copy`
#[derive(Copy, Clone, Debug, Deserialize, Serialize)]
pub struct Auth {
    /// user id
    pub id: i32,
}

pub const COOKIE_NAME: &str = "vinoteca-auth";

#[rocket::async_trait]
impl<'r> FromRequest<'r> for Auth {
    type Error = Json<VinotecaError>;

    async fn from_request(request: &'r Request<'_>) -> request::Outcome<Auth, Self::Error> {
        let connection = request.guard::<DbConn>().await;
        let mut connection = match connection {
            Outcome::Success(conn) => conn,
            Outcome::Error(_) => {
                log::error!("Failed to acquire database connection");
                return Outcome::Error((
                    Status::InternalServerError,
                    Json(VinotecaError::Internal(
                        "Database connection failed".to_owned(),
                    )),
                ));
            }
            Outcome::Forward(status) => return Outcome::Forward(status),
        };

        let cookie = request.cookies().get_private(COOKIE_NAME);
        match cookie {
            Some(cookie) => {
                let user_id: Option<i32> = cookie.value().parse().ok();
                let auth = match user_id {
                    Some(id) => {
                        let result: Result<i32, _> = users::table
                            .filter(users::id.eq(id))
                            .select(users::id)
                            .first(&mut *connection)
                            .await;
                        result.ok().map(|id| Auth { id })
                    }
                    None => None,
                };

                if let Some(auth) = auth {
                    Outcome::Success(auth)
                } else {
                    Outcome::Error((
                        Status::Forbidden,
                        Json(VinotecaError::Forbidden("Bad email or password".to_owned())),
                    ))
                }
            }
            None => Outcome::Error((
                Status::Unauthorized,
                Json(VinotecaError::Unauthorized("Login required".to_owned())),
            )),
        }
    }
}

#[cfg(test)]
mod test {
    use super::*;

    use crate::testing::{acquire_db_lock, create_test_rocket};
    use rocket::http::Cookie;
    use rocket::local::asynchronous::Client;
    use rocket::{get, routes};

    #[get("/")]
    async fn handle_auth(auth: Auth) -> Json<i32> {
        Json(auth.id)
    }

    #[rocket::async_test]
    async fn missing_cookie() {
        let _lock = acquire_db_lock();
        let rocket = create_test_rocket().await;
        let rocket = rocket.mount("/", routes![handle_auth]);
        let client = Client::tracked(rocket).await.expect("rocket client");
        let response = client.get("/").dispatch().await;
        assert_eq!(response.status(), Status::Unauthorized);
    }

    #[rocket::async_test]
    async fn missing_user() {
        let _lock = acquire_db_lock();
        let rocket = create_test_rocket().await;
        let rocket = rocket.mount("/", routes![handle_auth]);
        let client = Client::tracked(rocket).await.expect("rocket client");
        let response = client
            .get("/")
            // User that doesn't exist
            .private_cookie(Cookie::new("vinoteca-auth", "-1"))
            .dispatch()
            .await;
        assert_eq!(response.status(), Status::Forbidden);
    }

    #[rocket::async_test]
    async fn authorize() {
        let _lock = acquire_db_lock();
        let rocket = create_test_rocket().await;
        let rocket = rocket.mount("/", routes![handle_auth]);
        let client = Client::tracked(rocket).await.expect("rocket client");
        let response = client
            .get("/")
            .private_cookie(Cookie::new("vinoteca-auth", "1"))
            .dispatch()
            .await;
        assert_eq!(response.status(), Status::Ok);
    }
}
