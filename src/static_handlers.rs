use crate::users::Auth;

use rocket::response::content::{Html, Plain, Xml};

pub fn get_routes() -> Vec<rocket::Route> {
    routes![home, robots, sitemap, about, login, register, dashboards, grapes,
        wines, wine_profile, inventory, new_wine, search_wines, shopping_list,
        producer_profile, region_profile, user_profile, viti_area_profile,
        wine_type_profile]
}
// Keep in sync with Router.tsx

#[get("/")]
pub fn home() -> Html<&'static str> {
    Html(include_str!("static/index.html"))
}
#[get("/about")]
pub fn about() -> Html<&'static str> {
    home()
}
#[get("/login")]
pub fn login() -> Html<&'static str> {
    home()
}
#[get("/register")]
pub fn register() -> Html<&'static str> {
    home()
}
#[get("/dashboards")]
pub fn dashboards(_auth: Auth) -> Html<&'static str> {
    home()
}
#[get("/grapes")]
pub fn grapes(_auth: Auth) -> Html<&'static str> {
    home()
}
#[get("/wines")]
pub fn wines(_auth: Auth) -> Html<&'static str> {
    home()
}
#[get("/wines/<_id>")]
pub fn wine_profile(_auth: Auth, _id: i32) -> Html<&'static str> {
    home()
}
#[get("/inventory")]
pub fn inventory(_auth: Auth) -> Html<&'static str> {
    home()
}
#[get("/wines/new")]
pub fn new_wine(_auth: Auth) -> Html<&'static str> {
    home()
}
#[get("/wines/search")]
pub fn search_wines(_auth: Auth) -> Html<&'static str> {
    home()
}
#[get("/wines/shopping-list")]
pub fn shopping_list(_auth: Auth) -> Html<&'static str> {
    home()
}
#[get("/producers/<_id>")]
pub fn producer_profile(_auth: Auth, _id: i32) -> Html<&'static str> {
    home()
}
#[get("/regions/<_id>")]
pub fn region_profile(_auth: Auth, _id: i32) -> Html<&'static str> {
    home()
}
#[get("/profile")]
pub fn user_profile(_auth: Auth) -> Html<&'static str> {
    home()
}
#[get("/viti-areas/<_id>")]
pub fn viti_area_profile(_auth: Auth, _id: i32) -> Html<&'static str> {
    home()
}
#[get("/wine-types/<_id>")]
pub fn wine_type_profile(_auth: Auth, _id: i32) -> Html<&'static str> {
    home()
}

#[get("/robots.txt")]
pub fn robots() -> Plain<&'static str> {
    Plain(include_str!("static/robots.txt"))
}

#[get("/sitemap.xml")]
pub fn sitemap() -> Xml<&'static str> {
    Xml(include_str!("static/sitemap.xml"))
}
