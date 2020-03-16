/// Integration tests
use super::create_rocket;

use rocket::local::Client;

pub fn create_client() -> Client {
    let rocket = create_rocket();
    Client::new(rocket).expect("Valid rocket instance")
}
