use crate::storage::Storage;

/// Holds runtime configurations
pub struct Config {
    /// Storage object for user images and other files
    pub storage: Box<dyn Storage>,
}

impl Config {
    pub fn new<S: Storage>(storage: S) -> Config {
        Config {
            storage: Box::new(storage),
        }
    }
}
