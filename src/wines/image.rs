use crate::error::VinotecaError;
use crate::models::Wine;

use std::io::Cursor;

pub fn handle_image(wine: &Wine, raw_img: Vec<u8>) -> Result<(), VinotecaError> {
    let img = image::io::Reader::new(Cursor::new(raw_img))
        .with_guessed_format()?
        .decode()?;
    // FIXME: read from config for this path
    img.save(format!("media/{}.png", wine.id))?;
    Ok(())
}
