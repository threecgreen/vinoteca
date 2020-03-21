use rocket::request::Request;
use rocket::response::{self, Responder};
use rocket::http::ContentType;
use std::path::PathBuf;


const INDEX_HTML: &str = include_str!("../templates/index.html");

// TODO: handle robots.txt
// Lower ranking than /static and /media
#[get("/<_path..>", rank = 2)]
pub fn any_other(_path: PathBuf) -> StaticHtml {
    home()
}

#[get("/")]
pub fn home() -> StaticHtml {
    StaticHtml(INDEX_HTML)
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
