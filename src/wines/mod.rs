mod create;
mod delete;
pub mod image;
mod middleware;
mod models;
mod read;
mod update;

pub use self::create::post;
pub use self::delete::delete as delete_wine;
pub use self::models::{InventoryWine, Rotation, RotationForm, WineCount, WinePatchForm};
pub use self::read::{get, get_one, inventory, search, varieties};
pub use self::update::{patch, put, validate_owns_wine};
