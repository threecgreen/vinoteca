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

// TODO: rename this page singular 'Dashboard'
#[get("/dashboards")]
pub fn dashboards() -> ReactAppTemplate<'static> {
    ReactAppTemplate {
        app: "dashboards",
        this_year: this_year(),
        page_name: "Dashboards",
        version: &VERSION,
    }
}

#[get("/grapes")]
pub fn grapes() -> ReactAppTemplate<'static> {
    ReactAppTemplate {
        app: "grapes",
        this_year: this_year(),
        page_name: "Grapes",
        version: &VERSION,
    }
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
    ReactAppTemplate {
        app: "inventory",
        this_year: this_year(),
        page_name: "Inventory",
        version: &VERSION,
    }
}

#[get("/wines/new")]
pub fn new_wine() -> ReactAppTemplate<'static> {
    ReactAppTemplate {
        app: "new_wine",
        this_year: this_year(),
        page_name: "New Wine",
        version: &VERSION,
    }
}

#[get("/wines/search")]
pub fn search_wines() -> ReactAppTemplate<'static> {
    ReactAppTemplate {
        app: "search_wines",
        this_year: this_year(),
        page_name: "Search Wines",
        version: &VERSION,
    }
}

#[get("/wines")]
pub fn wines() -> ReactAppTemplate<'static> {
    ReactAppTemplate {
        app: "wines",
        this_year: this_year(),
        page_name: "Wines",
        version: &VERSION,
    }
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
#[get("/producers/<id>")]
pub fn producer_profile(id: i32) -> ReactProfileAppTemplate<'static> {
    ReactProfileAppTemplate {
        id,
        app: "producer_profile",
        this_year: this_year(),
        page_name: "Producer Profile",
        version: &VERSION,
    }
}

#[get("/regions/<id>")]
pub fn region_profile(id: i32) -> ReactProfileAppTemplate<'static> {
    ReactProfileAppTemplate {
        id,
        app: "region_profile",
        this_year: this_year(),
        // TODO: maybe it makes sense for the page name to be the name of the region, ie set dynamically
        page_name: "Region Profile",
        version: &VERSION,
    }
}

#[get("/viti-areas/<id>")]
pub fn viti_area_profile(id: i32) -> ReactProfileAppTemplate<'static> {
    ReactProfileAppTemplate {
        id,
        app: "viti_area_profile",
        this_year: this_year(),
        page_name: "Viti Area Profile",
        version: &VERSION,
    }
}

#[get("/wines/<id>")]
pub fn wine_profile(id: i32) -> ReactProfileAppTemplate<'static> {
    ReactProfileAppTemplate {
        id,
        app: "wine_profile",
        this_year: this_year(),
        page_name: "Wine Profile",
        version: &VERSION,
    }
}

#[get("/wine-types/<id>")]
pub fn wine_type_profile(id: i32) -> ReactProfileAppTemplate<'static> {
    ReactProfileAppTemplate {
        id,
        app: "wine_type_profile",
        this_year: this_year(),
        page_name: "Wine Type Profile",
        version: &VERSION,
    }
}
