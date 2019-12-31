extern crate askama;

#[derive(askama::Template)]
#[template(path = "about.html")]
pub struct AboutTemplate<'a> {
    this_year: u16,
    page_name: &'a str,
    version: &'a str,
}

#[get("/about")]
pub fn about() -> AboutTemplate<'static> {
    AboutTemplate {
        this_year: 2020,
        page_name: "About",
        version: "5.0.0",
    }
}
