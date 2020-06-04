use crate::schema::users;
use crate::serde::trim_str;

use serde::Deserialize;
use typescript_definitions::TypeScriptify;
use validator::Validate;

#[derive(Deserialize, TypeScriptify, Validate, Debug)]
#[serde(rename_all = "camelCase")]
pub struct LoginForm<'a> {
    #[validate(email(message = "Email %s is invalid"))]
    #[serde(deserialize_with = "trim_str")]
    pub email: &'a str,
    #[validate(length(min = 8, message = "Password does not meet minimum length of 8"))]
    pub password: &'a str,
}

#[derive(Deserialize, TypeScriptify, Validate, Debug)]
#[serde(rename_all = "camelCase")]
pub struct ChangePasswordForm<'a> {
    #[validate(length(min = 8))]
    pub old_password: &'a str,
    #[validate(length(min = 8))]
    pub new_password: &'a str,
}

#[derive(AsChangeset, Deserialize, TypeScriptify, Validate, Debug)]
#[table_name = "users"]
#[serde(rename_all = "camelCase")]
pub struct ChangeUserForm<'a> {
    #[validate(email)]
    #[serde(deserialize_with = "trim_str")]
    pub email: &'a str,
    #[validate(length(min = 2))]
    #[serde(deserialize_with = "trim_str")]
    pub name: &'a str,
}
