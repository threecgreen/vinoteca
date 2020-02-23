use rocket_contrib::json::Json;
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
pub struct LogForm {
    pub level: String,
    pub module: String,
    pub message: String,
    pub url: String,
}

#[derive(Serialize)]
pub struct LogResponse {
    success: bool,
}

#[post("/logs", format = "json", data = "<log_form>")]
pub fn post(log_form: Json<LogForm>) -> Json<LogResponse> {
    let log_form = log_form.into_inner();
    match &log_form.level as &str {
        "critical" | "error" => error!(
            "Client {} @ {}: {}",
            log_form.module, log_form.url, log_form.message
        ),
        "warning" => warn!(
            "Client {} @ {}: {}",
            log_form.module, log_form.url, log_form.message
        ),
        "info" => info!(
            "Client {} @ {}: {}",
            log_form.module, log_form.url, log_form.message
        ),
        _ => debug!(
            "Client {} @ {}: {}",
            log_form.module, log_form.url, log_form.message
        ),
    }
    Json(LogResponse { success: true })
}
