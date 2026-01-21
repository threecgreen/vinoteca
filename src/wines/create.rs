use super::image::handle_image;
use super::models::RawWineForm;
use super::read::get_one;
use crate::config::Config;
use crate::error::{RestResult, VinotecaError};
use crate::models::{NewWine, Wine};
use crate::query_utils::DbConn;
use crate::schema::wines;
use crate::users::Auth;

use diesel_async::RunQueryDsl;
use rocket::post;
use rocket::State;
use validator::Validate;

#[post("/wines", data = "<raw_wine_form>")]
pub async fn post(
    auth: Auth,
    raw_wine_form: RawWineForm,
    mut connection: DbConn,
    config: &State<Config>,
) -> RestResult<Wine> {
    let wine_form = raw_wine_form.wine_form;
    let image = raw_wine_form.image;
    wine_form.validate()?;

    let wine_id: i32 = diesel::insert_into(wines::table)
        .values(NewWine::from((auth, wine_form)))
        .returning(wines::id)
        .get_result(&mut connection)
        .await
        .map_err(VinotecaError::from)?;

    if let Some(image) = image {
        if let Err(e) = handle_image(wine_id, image, &*config.storage, &mut connection).await {
            log::warn!("Error adding image for new wine with id {wine_id}: {e}");
        };
    }

    get_one(auth, wine_id, connection).await
}

#[cfg(test)]
mod test {
    // Tests need to be updated for async
}
