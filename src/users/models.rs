use crate::schema::users;
use crate::serde::trim_string;

use serde::Deserialize;
use typescript_definitions::TypeScriptify;

#[derive(Deserialize, TypeScriptify, Validate, Debug)]
#[serde(rename_all = "camelCase")]
pub struct LoginForm {
    #[validate(email(message = "Email %s is invalid"))]
    #[serde(deserialize_with = "trim_string")]
    pub email: String,
    #[validate(length(min = 8, message = "Password does not meet minimum length of 8"))]
    pub password: String,
}

#[derive(Deserialize, TypeScriptify, Validate, Debug)]
#[serde(rename_all = "camelCase")]
pub struct ChangePasswordForm {
    #[validate(length(min = 8))]
    pub old_password: String,
    #[validate(length(min = 8))]
    pub new_password: String,
}

#[derive(AsChangeset, Deserialize, TypeScriptify, Validate, Debug)]
#[table_name = "users"]
#[serde(rename_all = "camelCase")]
pub struct ChangeUserForm {
    #[validate(email)]
    #[serde(deserialize_with = "trim_string")]
    pub email: String,
    #[validate(length(min = 2))]
    #[serde(deserialize_with = "trim_string")]
    pub name: String,
}
