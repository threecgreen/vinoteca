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

#[rocket::async_trait]
impl<'r> Responder<'r> for StaticHtml {
    async fn respond_to(self, req: &'r Request<'_>) -> response::Result<'r> {
        let mut response = self.0.respond_to(req).await?;
        response.set_header(ContentType::HTML);
        Ok(response)
    }
}
