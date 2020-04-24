use rocket::http::ContentType;
use rocket::request::Request;
use rocket::response::{self, Responder};
use std::path::PathBuf;

// Lower ranking than /static and /media
#[get("/<_path..>", rank = 2)]
pub fn any_other(_path: PathBuf) -> StaticHtml {
    home()
}

#[get("/")]
pub fn home() -> StaticHtml {
    StaticHtml(include_str!("static/index.html"))
}

#[get("/robots.txt")]
pub fn robots() -> String {
    include_str!("static/robots.txt").to_owned()
}

#[derive(Debug)]
pub struct StaticHtml(&'static str);

impl<'r> Responder<'r> for StaticHtml {
    fn respond_to(self, req: &Request) -> response::Result<'r> {
        let mut response = self.0.respond_to(req)?;
        response.set_header(ContentType::HTML);
        Ok(response)
    }
}
