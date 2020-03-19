use chrono::Datelike;
use std::path::PathBuf;

const VERSION: &str = env!("CARGO_PKG_VERSION");

fn this_year() -> u16 {
    chrono::Local::today().year() as u16
}

#[derive(askama::Template)]
#[template(path = "index.html")]
pub struct AppTemplate<'a> {
    this_year: u16,
    version: &'a str,
}

// TODO: handle robots.txt

// Lower ranking than /static and /media
#[get("/<_path..>", rank = 2)]
pub fn any_other(_path: PathBuf) -> AppTemplate<'static> {
    home()
}

#[get("/")]
pub fn home() -> AppTemplate<'static> {
    AppTemplate {
        this_year: this_year(),
        version: &VERSION,
    }
}
