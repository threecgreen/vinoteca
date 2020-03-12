use crate::error::VinotecaError;
use crate::models::Wine;

use std::io::Cursor;

pub fn handle_image(wine: &Wine, raw_img: Vec<u8>, media_dir: &str) -> Result<(), VinotecaError> {
    let img = image::io::Reader::new(Cursor::new(raw_img))
        .with_guessed_format()?
        .decode()?;
    img.save(format!("{}/{}.png", media_dir, wine.id))?;
    Ok(())
}
