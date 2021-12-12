use super::auth::{Auth, COOKIE_NAME};
use super::models::{ChangePasswordForm, ChangeUserForm, LoginForm};
use crate::error::{RestResult, VinotecaError};
use crate::models::{InternalUser, NewUser, User, UserForm};
use crate::schema::users;
use crate::DbConn;

use chrono::Utc;
use diesel::prelude::*;
use rocket::http::private::cookie::Expiration;
use rocket::http::{Cookie, CookieJar, SameSite};
use rocket::serde::json::Json;
use validator::Validate;

// TODO: store bad login attempts and lock after 10

#[get("/users")]
pub async fn get(auth: Auth, conn: DbConn) -> RestResult<User> {
    conn.run(move |c| {
        users::table
            .filter(users::id.eq(auth.id))
            .select((
                users::email,
                users::name,
                users::image,
                users::created_at,
                users::last_login,
            ))
            .first(c)
            .map(Json)
            .map_err(VinotecaError::from)
    })
    .await
}

#[post("/users/login", format = "json", data = "<form>")]
pub async fn login(
    form: Json<LoginForm>,
    cookies: &CookieJar<'_>,
    conn: DbConn,
) -> RestResult<User> {
    let form = form.into_inner();
    let user = conn
        .run(move |c| {
            let user = users::table
                .filter(users::email.eq(form.email))
                .first::<InternalUser>(c)
                .map_err(|_| VinotecaError::NotFound("Email not recognized".to_owned()))?;
            let valid = bcrypt::verify(form.password, &user.hash)?;
            if !valid {
                return Err(VinotecaError::Forbidden("Bad password".to_string()));
            }
            diesel::update(users::table)
                .filter(users::id.eq(user.id))
                .set(users::last_login.eq(Utc::now()))
                .execute(c)?;
            Ok(user)
        })
        .await?;

    add_auth_cookie(cookies, user.id);

    Ok(Json(User::from(user)))
}

#[post("/users", format = "json", data = "<form>")]
pub async fn create(
    form: Json<UserForm>,
    cookies: &CookieJar<'_>,
    conn: DbConn,
) -> RestResult<User> {
    let form = form.into_inner();
    form.validate()?;

    let hash = bcrypt::hash(form.password, bcrypt::DEFAULT_COST)?;

    let new_user = NewUser {
        email: form.email,
        name: form.name,
        image: None,
        hash,
    };
    let user_id = conn
        .run(move |c| {
            diesel::insert_into(users::table)
                .values(new_user)
                .returning(users::id)
                .get_result(c)
                .map_err(VinotecaError::from)
        })
        .await?;
    add_auth_cookie(cookies, user_id);
    get(Auth { id: user_id }, conn).await
}

#[post("/users/password", format = "json", data = "<form>")]
pub async fn change_password(
    auth: Auth,
    form: Json<ChangePasswordForm<'_>>,
    cookies: &CookieJar<'_>,
    conn: DbConn,
) -> RestResult<()> {
    let form = form.into_inner();
    form.validate()?;
    let user = conn
        .run(move |c| {
            users::table
                .filter(users::id.eq(auth.id))
                .first::<InternalUser>(c)
        })
        .await?;
    let valid = bcrypt::verify(form.old_password, &user.hash)?;
    if !valid {
        return Err(VinotecaError::Forbidden("Bad password".to_string()));
    }

    let new_hash = bcrypt::hash(form.new_password, bcrypt::DEFAULT_COST)?;
    conn.run(move |c| {
        diesel::update(users::table.filter(users::id.eq(auth.id)))
            .set(users::hash.eq(new_hash))
            .execute(c)
    })
    .await?;
    add_auth_cookie(cookies, auth.id);
    Ok(Json(()))
}

#[post("/users/logout")]
pub fn logout(cookies: &CookieJar<'_>) -> RestResult<()> {
    cookies.remove_private(Cookie::named(COOKIE_NAME));
    Ok(Json(()))
}

#[put("/users", format = "json", data = "<form>")]
pub async fn modify_profile(
    auth: Auth,
    form: Json<ChangeUserForm>,
    conn: DbConn,
) -> RestResult<User> {
    let form = form.into_inner();
    form.validate()?;

    // Check if exists
    conn.run(move |c| -> Result<(), diesel::result::Error> {
        users::table
            .filter(users::id.eq(auth.id))
            .first::<InternalUser>(c)?;
        diesel::update(users::table.filter(users::id.eq(auth.id)))
            .set(form)
            .execute(c)?;
        Ok(())
    })
    .await?;
    get(auth, conn).await
}

fn add_auth_cookie(cookies: &CookieJar<'_>, user_id: i32) {
    let expiration = time::OffsetDateTime::now_utc() + time::Duration::days(14);
    let cookie = Cookie::build(COOKIE_NAME, user_id.to_string())
        .path("/")
        .same_site(SameSite::Strict)
        .http_only(true)
        .secure(true)
        .expires(Expiration::DateTime(expiration))
        .finish();
    cookies.add_private(cookie);
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::testing::PW;

    use rocket::http::{ContentType, Status};
    use rocket::local::asynchronous::Client;
    use rocket::Build;

    fn mounted_rocket(rocket: rocket::Rocket<Build>) -> rocket::Rocket<Build> {
        rocket.mount(
            "/",
            routes![get, login, create, change_password, logout, modify_profile],
        )
    }

    #[rocket::async_test]
    async fn logon_adds_cookie() {
        db_test!(|rocket, _conn| {
            let rocket = mounted_rocket(rocket);
            let client = Client::tracked(rocket).await.expect("rocket client");
            assert!(client.cookies().get(COOKIE_NAME).is_none());
            let req = client.post("/users/login");
            let form = LoginForm {
                email: "test@gmail.com".to_owned(),
                password: PW.to_owned(),
            };
            let mut req = req.header(ContentType::JSON);
            req.set_body(serde_json::to_string(&form).unwrap());
            let response = req.dispatch().await;
            assert_eq!(response.status(), Status::Ok);
            assert!(response.cookies().get(COOKIE_NAME).is_some());
        })
    }

    #[rocket::async_test]
    async fn logoff_removes_cookie() {
        db_test!(|rocket, _conn| {
            let rocket = mounted_rocket(rocket);
            let client = Client::tracked(rocket).await.expect("rocket client");
            // Login and add cookie
            let req = client.post("/users/login");
            let form = LoginForm {
                email: "test@gmail.com".to_owned(),
                password: PW.to_owned(),
            };
            let mut req = req.header(ContentType::JSON);
            req.set_body(serde_json::to_string(&form).unwrap());
            let response = req.dispatch().await;
            assert_eq!(response.status(), Status::Ok);
            assert!(client.cookies().get(COOKIE_NAME).is_some());
            // Logout and remove
            let req = client.post("/users/logout");
            let response = req.dispatch().await;
            assert_eq!(response.status(), Status::Ok);
            assert_eq!(response.cookies().get(COOKIE_NAME).unwrap().value(), "");
        })
    }

    #[rocket::async_test]
    async fn logout_when_not_logged_in_is_no_op() {
        db_test!(|rocket, _conn| {
            let rocket = mounted_rocket(rocket);
            let client = Client::tracked(rocket).await.expect("rocket client");
            assert!(client.cookies().get(COOKIE_NAME).is_none());
            let req = client.post("/users/logout");
            let response = req.dispatch().await;
            assert_eq!(response.status(), Status::Ok);
            assert!(response.cookies().get(COOKIE_NAME).is_none());
        })
    }

    #[rocket::async_test]
    async fn new_user() {
        const EMAIL: &str = "test@example.com";
        const NAME: &str = "Test";
        const PASSWORD: &str = "compromised";

        db_test!(|rocket, _conn| {
            let rocket = mounted_rocket(rocket);
            let client = Client::tracked(rocket).await.expect("rocket client");
            assert!(client.cookies().get(COOKIE_NAME).is_none());
            let req = client.post("/users");
            let form = UserForm {
                email: EMAIL.to_string(),
                name: NAME.to_string(),
                password: PASSWORD.to_string(),
            };
            let mut req = req.header(ContentType::JSON);
            req.set_body(serde_json::to_string(&form).unwrap());
            let response = req.dispatch().await;
            assert_eq!(response.status(), Status::Ok);
            assert!(client.cookies().get(COOKIE_NAME).is_some());
            let req = client.get("/users");
            let response = req.dispatch().await;
            assert_eq!(response.status(), Status::Ok);
            let user: User =
                serde_json::from_str(&response.into_string().await.expect("response body"))
                    .unwrap();
            assert_eq!(user.email, EMAIL);
            assert_eq!(user.name, NAME);
        })
    }

    #[rocket::async_test]
    async fn new_user_bad_input() {
        db_test!(|rocket, _conn| {
            let rocket = mounted_rocket(rocket);
            let client = Client::tracked(rocket).await.expect("rocket client");
            assert!(client.cookies().get(COOKIE_NAME).is_none());
            let req = client.post("/users");
            let form = UserForm {
                email: "test@example.com".to_owned(),
                name: "test".to_owned(),
                password: "short".to_owned(),
            };
            let mut req = req.header(ContentType::JSON);
            req.set_body(serde_json::to_string(&form).unwrap());
            let response = req.dispatch().await;
            assert_eq!(response.status(), Status::BadRequest);
            assert!(client.cookies().get(COOKIE_NAME).is_none());
            let req = client.get("/users");
            let response = req.dispatch().await;
            assert_eq!(response.status(), Status::Unauthorized);
        })
    }
}
