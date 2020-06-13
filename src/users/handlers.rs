use super::auth::{Auth, COOKIE_NAME};
use super::models::{ChangePasswordForm, ChangeUserForm, LoginForm};
use crate::error::{RestResult, VinotecaError};
use crate::models::{InternalUser, NewUser, User, UserForm};
use crate::schema::users;
use crate::DbConn;

use chrono::Utc;
use diesel::prelude::*;
use rocket::http::{Cookie, Cookies, SameSite};
use rocket_contrib::json::Json;
use validator::Validate;

// TODO: store bad login attempts and lock after 10

#[get("/users")]
pub fn get(auth: Auth, connection: DbConn) -> RestResult<User> {
    users::table
        .filter(users::id.eq(auth.id))
        .select((
            users::email,
            users::name,
            users::image,
            users::created_at,
            users::last_login,
        ))
        .first(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

#[post("/users/login", format = "json", data = "<form>")]
pub fn login(form: Json<LoginForm>, mut cookies: Cookies, connection: DbConn) -> RestResult<User> {
    let form = form.into_inner();
    let user = users::table
        .filter(users::email.eq(form.email))
        .first::<InternalUser>(&*connection)
        .map_err(|_| VinotecaError::NotFound("Email not recognized".to_owned()))?;
    let valid = bcrypt::verify(form.password, &user.hash)?;
    if !valid {
        return Err(VinotecaError::Forbidden("Bad password".to_string()));
    }
    diesel::update(users::table)
        .filter(users::id.eq(user.id))
        .set(users::last_login.eq(Utc::now()))
        .execute(&*connection)?;

    add_auth_cookie(&mut cookies, user.id);

    Ok(Json(User::from(user)))
}

#[post("/users", format = "json", data = "<form>")]
pub fn create(form: Json<UserForm>, mut cookies: Cookies, connection: DbConn) -> RestResult<User> {
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
            add_auth_cookie(&mut cookies, user_id);
            get(Auth { id: user_id }, connection)
        })
}

#[post("/users/password", format = "json", data = "<form>")]
pub fn change_password(
    auth: Auth,
    form: Json<ChangePasswordForm>,
    mut cookies: Cookies,
    connection: DbConn,
) -> RestResult<()> {
    let form = form.into_inner();
    form.validate()?;
    let user = users::table
        .filter(users::id.eq(auth.id))
        .first::<InternalUser>(&*connection)?;
    let valid = bcrypt::verify(form.old_password, &user.hash)?;
    if !valid {
        return Err(VinotecaError::Forbidden("Bad password".to_string()));
    }

    let new_hash = bcrypt::hash(form.new_password, bcrypt::DEFAULT_COST)?;
    diesel::update(users::table.filter(users::id.eq(auth.id)))
        .set(users::hash.eq(new_hash))
        .execute(&*connection)?;
    add_auth_cookie(&mut cookies, auth.id);
    Ok(Json(()))
}

#[post("/users/logout")]
pub fn logout(mut cookies: Cookies) -> RestResult<()> {
    cookies.remove_private(Cookie::named(COOKIE_NAME));

    Ok(Json(()))
}

#[put("/users", format = "json", data = "<form>")]
pub fn modify_profile(
    auth: Auth,
    form: Json<ChangeUserForm>,
    connection: DbConn,
) -> RestResult<User> {
    let form = form.into_inner();
    form.validate()?;

    // Check if exists
    users::table
        .filter(users::id.eq(auth.id))
        .first::<InternalUser>(&*connection)?;
    diesel::update(users::table.filter(users::id.eq(auth.id)))
        .set(form)
        .execute(&*connection)?;
    get(auth, connection)
}

fn add_auth_cookie(cookies: &mut Cookies, user_id: i32) {
    let cookie = Cookie::build(COOKIE_NAME, user_id.to_string())
        .path("/")
        .same_site(SameSite::Strict)
        .http_only(true)
        .secure(true)
        .expires(time::now() + time::Duration::days(5))
        .finish();
    cookies.add_private(cookie);
}

#[cfg(test)]
mod test {
    use super::*;

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
