/// Integration tests
use super::rocket;

use rocket::local::Client;

fn construct_client() -> Client {
    let rocket = rocket().ignite();
    Client::new(rocket).expect("Valid rocket instance")
}

#[test]
fn test_create_wine() {
    unimplemented!();
}
