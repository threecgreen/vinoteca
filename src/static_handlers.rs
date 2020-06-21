use rocket::response::content::{Html, Plain, Xml};
use std::path::PathBuf;

// Lower ranking than /static and /media
#[get("/<_path..>", rank = 2)]
pub fn any_other(_path: PathBuf) -> Html<&'static str> {
    home()
}

#[get("/")]
pub fn home() -> Html<&'static str> {
    Html(include_str!("static/index.html"))
}

#[get("/robots.txt")]
pub fn robots() -> Plain<&'static str> {
    Plain(include_str!("static/robots.txt"))
}

#[get("/sitemap.xml")]
pub fn sitemap() -> Xml<&'static str> {
    Xml(include_str!("static/sitemap.xml"))
}
