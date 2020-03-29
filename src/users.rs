use crate::auth::{Auth, COOKIE_NAME};
use crate::error::{RestResult, VinotecaError};
use crate::models::{InternalUser, NewUser, User, UserForm};
use crate::schema::users;
use crate::DbConn;

use diesel::prelude::*;
use rocket::http::{Cookie, Cookies, SameSite};
use rocket_contrib::json::Json;
use serde::Deserialize;
use typescript_definitions::TypeScriptify;
use validator::Validate;

#[derive(Deserialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct LoginForm<'a> {
    pub email: &'a str,
    pub password: &'a str,
}

#[get("/users")]
pub fn get(auth: Auth, connection: DbConn) -> RestResult<User> {
    users::table
        .filter(users::id.eq(auth.id))
        .select((users::email, users::name, users::image))
        .first(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

#[post("/users/login", format = "json", data = "<form>")]
pub fn login(form: Json<LoginForm>, cookies: Cookies, connection: DbConn) -> RestResult<User> {
    let form = form.into_inner();
    let user = users::table
        .filter(users::email.eq(form.email))
        .first::<InternalUser>(&*connection)?;
    let valid = bcrypt::verify(form.password, &user.hash)?;
    if !valid {
        return Err(VinotecaError::Forbidden("Bad password".to_string()));
    }
    add_auth_cookie(cookies, user.id);

    Ok(Json(User::from(user)))
}

#[post("/users", format = "json", data = "<form>")]
pub fn create(form: Json<UserForm>, cookies: Cookies, connection: DbConn) -> RestResult<User> {
    let form = form.into_inner();
    form.validate()?;

    let hash = bcrypt::hash(form.password, bcrypt::DEFAULT_COST)?;

    let new_user = NewUser {
        email: form.email,
        name: form.name,
        image: None,
        hash,
    };
    diesel::insert_into(users::table)
        .values(new_user)
        .returning(users::id)
        .get_result(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|user_id| {
            add_auth_cookie(cookies, user_id);
            get(Auth { id: user_id }, connection)
        })
}

#[post("/users/logout")]
pub fn logout(mut cookies: Cookies) -> RestResult<()> {
    cookies.remove_private(Cookie::named(COOKIE_NAME));

    Ok(Json(()))
}

fn add_auth_cookie(mut cookies: Cookies, user_id: i32) {
    let cookie = Cookie::build(COOKIE_NAME, user_id.to_string())
        .path("/")
        .same_site(SameSite::Strict)
        .http_only(true)
        .secure(true)
        .expires(time::now() + time::Duration::days(5))
        .finish();
    cookies.add_private(cookie);
}
