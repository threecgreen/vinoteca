use diesel::prelude::*;
use diesel_async::RunQueryDsl;
use rocket::http::Status;
use rocket::outcome::Outcome;
use rocket::request::{self, FromRequest, Request};
use rocket::serde::json::Json;
use rocket_db_pools::Connection;
use serde::{Deserialize, Serialize};

use crate::error::VinotecaError;
use crate::schema::users;
use crate::Db;

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
        let mut conn =
            rocket::outcome::try_outcome!(request.guard::<Connection<Db>>().await.map_error(|e| {
                error!("Failed to acquire database connection: {e:?}");
                (
                    Status::InternalServerError,
                    Json(VinotecaError::Internal(
                        "Database connection failed".to_owned(),
                    )),
                )
            }));
        // Extract user id from cookie
        let user_id: Option<i32> = request
            .cookies()
            .get_private(COOKIE_NAME)
            .and_then(|cookie| cookie.value().parse().ok());
        let user_id = match user_id {
            Some(user_id) => user_id,
            None => {
                return Outcome::Error((
                    Status::Unauthorized,
                    Json(VinotecaError::Unauthorized("Login required".to_owned())),
                ));
            }
        };
        // Verify user id exists
        let id = users::table
            .filter(users::id.eq(user_id))
            .select(users::id)
            .first(&mut **conn)
            .await
            .ok();

        if let Some(id) = id {
            Outcome::Success(Auth { id })
        } else {
            Outcome::Error((
                Status::Forbidden,
                Json(VinotecaError::Forbidden("Bad email or password".to_owned())),
            ))
        }
    }
}

#[cfg(test)]
mod test {
    use super::*;

    use rocket::{http::Cookie, local::asynchronous::Client};

    #[get("/")]
    fn handle_auth(auth: Auth) -> Json<i32> {
        Json(auth.id)
    }

    #[rocket::async_test]
    async fn missing_cookie() {
        db_test!(|rocket, _conn| {
            let rocket = rocket.mount("/", routes![handle_auth]);
            let client = Client::tracked(rocket).await.expect("rocket client");
            let req = client.get("/");
            let response = req.dispatch().await;
            assert_eq!(response.status(), Status::Unauthorized);
        })
    }

    #[rocket::async_test]
    async fn missing_user() {
        db_test!(|rocket, _conn| {
            let rocket = rocket.mount("/", routes![handle_auth]);
            let client = Client::tracked(rocket).await.expect("rocket client");
            let req = client
                .get("/")
                // User that doesn't exist
                .private_cookie(Cookie::new("vinoteca-auth", "-1"));
            let response = req.dispatch().await;
            assert_eq!(response.status(), Status::Forbidden);
        })
    }

    #[rocket::async_test]
    async fn authorize() {
        db_test!(|rocket, _conn| {
            let rocket = rocket.mount("/", routes![handle_auth]);
            let client = Client::tracked(rocket).await.expect("rocket client");
            let req = client
                .get("/")
                .private_cookie(Cookie::new("vinoteca-auth", "1"));
            let response = req.dispatch().await;
            assert_eq!(response.status(), Status::Ok);
        })
    }
}
