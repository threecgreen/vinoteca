use super::auth::{Auth, COOKIE_NAME};
use super::models::{ChangePasswordForm, ChangeUserForm, LoginForm};
use crate::error::{RestResult, VinotecaError};
use crate::models::{InternalUser, NewUser, User, UserForm};
use crate::query_utils::DbConn;
use crate::schema::users;

use chrono::Utc;
use diesel::prelude::*;
use diesel_async::RunQueryDsl;
use rocket::http::{Cookie, CookieJar, SameSite};
use rocket::serde::json::Json;
use rocket::{get, post, put};
use time::{Duration, OffsetDateTime};
use validator::Validate;

// TODO: store bad login attempts and lock after 10

#[get("/users")]
pub async fn get(auth: Auth, mut connection: DbConn) -> RestResult<User> {
    users::table
        .filter(users::id.eq(auth.id))
        .select((
            users::email,
            users::name,
            users::image,
            users::created_at,
            users::last_login,
        ))
        .first(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[post("/users/login", format = "json", data = "<form>")]
pub async fn login(
    form: Json<LoginForm<'_>>,
    cookies: &CookieJar<'_>,
    mut connection: DbConn,
) -> RestResult<User> {
    let form = form.into_inner();
    let user = users::table
        .filter(users::email.eq(form.email))
        .first::<InternalUser>(&mut *connection)
        .await
        .map_err(|_| VinotecaError::NotFound("Email not recognized".to_owned()))?;
    let valid = bcrypt::verify(form.password, &user.hash)?;
    if !valid {
        return Err(VinotecaError::Forbidden("Bad password".to_string()));
    }
    diesel::update(users::table)
        .filter(users::id.eq(user.id))
        .set(users::last_login.eq(Utc::now()))
        .execute(&mut *connection)
        .await?;

    add_auth_cookie(cookies, user.id);

    Ok(Json(User::from(user)))
}

#[post("/users", format = "json", data = "<form>")]
pub async fn create(
    form: Json<UserForm<'_>>,
    cookies: &CookieJar<'_>,
    mut connection: DbConn,
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
    let user_id: i32 = diesel::insert_into(users::table)
        .values(new_user)
        .returning(users::id)
        .get_result(&mut *connection)
        .await
        .map_err(VinotecaError::from)?;

    add_auth_cookie(cookies, user_id);

    // Query the newly created user
    users::table
        .filter(users::id.eq(user_id))
        .select((
            users::email,
            users::name,
            users::image,
            users::created_at,
            users::last_login,
        ))
        .first(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

#[post("/users/password", format = "json", data = "<form>")]
pub async fn change_password(
    auth: Auth,
    form: Json<ChangePasswordForm<'_>>,
    cookies: &CookieJar<'_>,
    mut connection: DbConn,
) -> RestResult<()> {
    let form = form.into_inner();
    form.validate()?;
    let user = users::table
        .filter(users::id.eq(auth.id))
        .first::<InternalUser>(&mut *connection)
        .await?;
    let valid = bcrypt::verify(form.old_password, &user.hash)?;
    if !valid {
        return Err(VinotecaError::Forbidden("Bad password".to_string()));
    }

    let new_hash = bcrypt::hash(form.new_password, bcrypt::DEFAULT_COST)?;
    diesel::update(users::table.filter(users::id.eq(auth.id)))
        .set(users::hash.eq(new_hash))
        .execute(&mut *connection)
        .await?;
    add_auth_cookie(cookies, auth.id);
    Ok(Json(()))
}

#[post("/users/logout")]
pub fn logout(cookies: &CookieJar<'_>) -> RestResult<()> {
    cookies.remove_private(Cookie::from(COOKIE_NAME));

    Ok(Json(()))
}

#[put("/users", format = "json", data = "<form>")]
pub async fn modify_profile(
    auth: Auth,
    form: Json<ChangeUserForm<'_>>,
    mut connection: DbConn,
) -> RestResult<User> {
    let form = form.into_inner();
    form.validate()?;

    // Check if exists
    users::table
        .filter(users::id.eq(auth.id))
        .first::<InternalUser>(&mut *connection)
        .await?;
    diesel::update(users::table.filter(users::id.eq(auth.id)))
        .set(form)
        .execute(&mut *connection)
        .await?;

    users::table
        .filter(users::id.eq(auth.id))
        .select((
            users::email,
            users::name,
            users::image,
            users::created_at,
            users::last_login,
        ))
        .first(&mut *connection)
        .await
        .map(Json)
        .map_err(VinotecaError::from)
}

fn add_auth_cookie(cookies: &CookieJar<'_>, user_id: i32) {
    let expiration = OffsetDateTime::now_utc() + Duration::days(14);
    let mut cookie = Cookie::new(COOKIE_NAME, user_id.to_string());
    cookie.set_path("/");
    cookie.set_same_site(SameSite::Strict);
    cookie.set_http_only(true);
    cookie.set_secure(true);
    cookie.set_expires(expiration);
    cookies.add_private(cookie);
}

#[cfg(test)]
mod test {
    // use super::*;

    #[test]
    #[ignore]
    fn logon_adds_cookie() {}

    #[test]
    #[ignore]
    fn logoff_removes_cookie() {}

    #[test]
    #[ignore]
    fn new_user() {}

    #[test]
    #[ignore]
    fn new_user_bad_input() {}
}
