extern crate askama;
extern crate chrono;

use templates::chrono::Datelike;

const VERSION: &str = env!("CARGO_PKG_VERSION");

fn this_year() -> u16 {
    chrono::Local::today().year() as u16
}

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
        this_year: this_year(),
        page_name: "About",
        version: &VERSION,
    }
}

#[derive(askama::Template)]
#[template(path = "react.html")]
pub struct ReactAppTemplate<'a> {
    app: &'a str,
    this_year: u16,
    page_name: &'a str,
    version: &'a str,
}

#[get("/dashboards")]
pub fn dashboards() -> ReactAppTemplate<'static> {
    home()
}

#[get("/grapes")]
pub fn grapes() -> ReactAppTemplate<'static> {
    home()
}

#[get("/")]
pub fn home() -> ReactAppTemplate<'static> {
    ReactAppTemplate {
        // Naming the page 'Home' feels redundant
        app: "home",
        this_year: this_year(),
        page_name: "Home",
        version: &VERSION,
    }
}

#[get("/home")]
pub fn home_redirect() -> ReactAppTemplate<'static> {
    home()
}

#[get("/wines/inventory")]
pub fn inventory() -> ReactAppTemplate<'static> {
    home()
}

#[get("/wines/new")]
pub fn new_wine() -> ReactAppTemplate<'static> {
    home()
}

#[get("/wines/search")]
pub fn search_wines() -> ReactAppTemplate<'static> {
    home()
}

#[get("/wines")]
pub fn wines() -> ReactAppTemplate<'static> {
    home()
}

#[derive(askama::Template)]
#[template(path = "react_profile.html")]
pub struct ReactProfileAppTemplate<'a> {
    id: i32,
    app: &'a str,
    this_year: u16,
    page_name: &'a str,
    version: &'a str,
}

// TODO: check if producer exists
#[get("/producers/<_id>")]
pub fn producer_profile(_id: i32) -> ReactAppTemplate<'static> {
    home()
}

#[get("/regions/<_id>")]
pub fn region_profile(_id: i32) -> ReactAppTemplate<'static> {
    home()
}

#[get("/viti-areas/<_id>")]
pub fn viti_area_profile(_id: i32) -> ReactAppTemplate<'static> {
    home()
}

#[get("/wines/<_id>")]
pub fn wine_profile(_id: i32) -> ReactAppTemplate<'static> {
    home()
}

#[get("/wine-types/<_id>")]
pub fn wine_type_profile(_id: i32) -> ReactAppTemplate<'static> {
    home()
}
