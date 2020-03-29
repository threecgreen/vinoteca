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
        "Client::{} @ '{}': {}. {:?}"
    };
}

#[post("/logs", format = "json", data = "<log_form>")]
pub fn post(log_form: Json<LogForm>) -> Json<LogResponse> {
    let log_form = log_form.into_inner();
    // TODO: optionally include user in logs
    // TODO: better handling of when tags are empty
    match &log_form.level as &str {
        "critical" | "error" => error!(
            fmt_str!(),
            log_form.module, log_form.url, log_form.message, log_form.tags
        ),
        "warning" => warn!(
            fmt_str!(),
            log_form.module, log_form.url, log_form.message, log_form.tags
        ),
        "info" => info!(
            fmt_str!(),
            log_form.module, log_form.url, log_form.message, log_form.tags
        ),
        _ => debug!(
            fmt_str!(),
            log_form.module, log_form.url, log_form.message, log_form.tags
        ),
    }
    Json(LogResponse { success: true })
}
