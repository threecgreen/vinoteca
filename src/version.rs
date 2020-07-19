use rocket_contrib::json::Json;
use serde::Serialize;
use typescript_definitions::TypeScriptify;

#[derive(Serialize, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Version {
    pub version: &'static str,
    pub git_sha: &'static str,
}

lazy_static! {
    /// Git SHA of most recent commit, i.e. the HEAD of the current branch
    pub static ref GIT_SHA: String = String::from_utf8(
        std::process::Command::new("git")
            .args(&["rev-parse", "HEAD"])
            .output()
            .expect("git rev-parse result")
            .stdout
    )
    .unwrap()
    .trim()
    .to_owned();
}

#[get("/version")]
pub fn get() -> Json<Version> {
    Json(Version {
        version: env!("CARGO_PKG_VERSION"),
        git_sha: &GIT_SHA,
    })
}
