use crate::models::WineForm;

pub struct RawWineForm {
    /// raw submitted wine image
    pub image: Option<Vec<u8>>,
    /// JSON data for database
    pub wine_form: WineForm,
}
