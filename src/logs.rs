use rocket_contrib::json::Json;
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
pub struct LogForm<'a> {
    level: &'a str,
    module: &'a str,
    message: &'a str,
}

#[derive(Serialize)]
pub struct LogResponse {
    success: bool,
}

#[post("/logs", format = "json", data = "<log_form>")]
pub fn post(log_form: Json<LogForm>) -> Json<LogResponse> {
    let log_form = log_form.into_inner();
    match log_form.level {
        "critical" | "error" => error!("Client {}: {}", log_form.module, log_form.message),
        "warning" => warn!("Client {}: {}", log_form.module, log_form.message),
        "info" => info!("Client {}: {}", log_form.module, log_form.message),
        _ => debug!("Client {}: {}", log_form.module, log_form.message),
    }
    Json(LogResponse { success: true })
}
