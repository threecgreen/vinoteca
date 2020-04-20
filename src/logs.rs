use crate::users::Auth;

use rocket_contrib::json::Json;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use typescript_definitions::TypeScriptify;

#[derive(Debug, Deserialize, TypeScriptify)]
pub struct LogForm {
    pub level: String,
    pub module: String,
    pub message: String,
    pub url: String,
    pub tags: HashMap<String, String>,
}

#[derive(Debug, Serialize, TypeScriptify)]
pub struct LogResponse {
    success: bool,
}

/// Can only use string literals as fmt strings
macro_rules! fmt_str {
    () => {
        "Client::{} @ '{}': {}. {}"
    };
}

#[post("/logs", format = "json", data = "<log_form>")]
pub fn post(auth: Option<Auth>, log_form: Json<LogForm>) -> Json<LogResponse> {
    let log_form = log_form.into_inner();
    let tags = fmt_tags(auth, log_form.tags);
    match &log_form.level as &str {
        "critical" | "error" => error!(
            fmt_str!(),
            log_form.module, log_form.url, log_form.message, tags
        ),
        "warning" => warn!(
            fmt_str!(),
            log_form.module, log_form.url, log_form.message, tags
        ),
        "info" => info!(
            fmt_str!(),
            log_form.module, log_form.url, log_form.message, tags
        ),
        _ => debug!(
            fmt_str!(),
            log_form.module, log_form.url, log_form.message, tags
        ),
    }
    Json(LogResponse { success: true })
}

fn fmt_tags(auth: Option<Auth>, mut tags: HashMap<String, String>) -> String {
    if let Some(auth) = auth {
        tags.insert("user_id".to_owned(), auth.id.to_string());
    }
    if tags.is_empty() {
        "".to_owned()
    } else {
        format!("{:?}", tags)
    }
}
