use rocket::get;
use rocket::serde::json::Json;
use serde::Serialize;
use std::sync::LazyLock;
use typescript_definitions::TypeScriptify;

#[derive(Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Version {
    pub version: &'static str,
    pub git_sha: &'static str,
}

/// Git SHA of most recent commit, i.e. the HEAD of the current branch
pub static GIT_SHA: LazyLock<String> = LazyLock::new(|| {
    String::from_utf8(
        std::process::Command::new("git")
            .args(["rev-parse", "--short", "HEAD"])
            .output()
            .expect("git rev-parse result")
            .stdout,
    )
    .unwrap()
    .trim()
    .to_owned()
});

#[get("/version")]
pub fn get() -> Json<Version> {
    Json(Version {
        version: env!("CARGO_PKG_VERSION"),
        git_sha: &GIT_SHA,
    })
}
