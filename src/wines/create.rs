use super::image::handle_image;
use super::models::RawWineForm;
use super::read::get;
use crate::config::Config;
use crate::error::{RestResult, VinotecaError};
use crate::models::{NewWine, Wine};
use crate::query_utils::{DbPool, IntoFirst};
use crate::schema::wines;
use crate::users::Auth;
use crate::DbConn;

use diesel::prelude::*;
use rocket::State;
use validator::Validate;

#[post("/wines", data = "<raw_wine_form>")]
pub async fn post(
    auth: Auth,
    raw_wine_form: RawWineForm,
    // connection: DbConn,
    pool: State<'_, DbPool>,
    config: State<'_, Config>,
) -> RestResult<Wine> {
    let wine_form = raw_wine_form.wine_form;
    let image = raw_wine_form.image;
    wine_form.validate()?;

    let connection = pool.get()?;
    let wine_id = diesel::insert_into(wines::table)
        .values(NewWine::from((auth, wine_form)))
        .returning(wines::id)
        .get_result(&connection)
        .map_err(VinotecaError::from)?;
    if let Some(image) = image {
        if let Err(e) = handle_image(wine_id, image, &config.s3_bucket, pool.get()?).await {
            warn!("Error adding image for new wine with id {}: {}", wine_id, e);
        };
    }
    get(
        auth,
        Some(wine_id),
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        None,
        DbConn(connection),
    )?
    .into_first("Newly-created wine")
}

#[cfg(test)]
mod test {
    use super::super::models::RawWineForm;
    use super::*;
    use crate::models::WineForm;
    use crate::DbConn;
    use rocket::State;

    #[ignore]
    #[test]
    fn insert_wine() {
        // run_test!(|rocket, connection| {
        //     // TODO: mock out
        //     let media_dir = State::from(&rocket).unwrap();
        //     let form = RawWineForm {
        //         image: None,
        //         wine_form: WineForm {
        //             description: None,
        //             notes: None,
        //             rating: Some(5),
        //             inventory: 0,
        //             why: None,
        //             color_id: 1,
        //             producer_id: 1,
        //             viti_area_id: None,
        //             name: None,
        //             wine_type_id: 1,
        //         },
        //     };
        //     let response = post(Auth { id: 1 }, form, connection, media_dir);
        //     assert!(response.is_ok());
        // })
    }
}
