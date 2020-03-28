use super::image::handle_image;
use super::models::RawWineForm;
use super::read::get;
use crate::auth::Auth;
use crate::error::{RestResult, VinotecaError};
use crate::models::{NewWine, Wine};
use crate::query_utils::IntoFirst;
use crate::schema::wines;
use crate::{DbConn, MediaDir};

use diesel::prelude::*;
use rocket::State;
use validator::Validate;

#[post("/wines", format = "json", data = "<raw_wine_form>")]
pub fn post(
    auth: Auth,
    raw_wine_form: RawWineForm,
    connection: DbConn,
    media_dir: State<MediaDir>,
) -> RestResult<Wine> {
    let wine_form = raw_wine_form.wine_form;
    wine_form.validate()?;

    let result: RestResult<Wine> = diesel::insert_into(wines::table)
        .values(NewWine::from((auth, wine_form)))
        .returning(wines::id)
        .get_result(&*connection)
        .map_err(VinotecaError::from)
        .and_then(|wine_id| {
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
                connection,
            )?
            .into_first("Newly-created wine")
        });

    if let Ok(wine) = &result {
        if let Some(image) = raw_wine_form.image {
            if let Err(e) = handle_image(wine, image, &media_dir.0) {
                warn!("Error adding image for new wine with id {}: {}", wine.id, e);
            };
        }
    }
    result
}

#[cfg(test)]
mod test {
    use super::super::models::RawWineForm;
    use super::*;
    use crate::models::WineForm;
    use crate::testing::create_test_rocket;
    use crate::DbConn;
    use rocket::State;

    #[test]
    fn insert_wine() {
        let rocket = create_test_rocket();
        let media_dir = State::from(&rocket).unwrap();
        let connection = DbConn::get_one(&rocket).expect("database connection");
        let form = RawWineForm {
            image: None,
            wine_form: WineForm {
                description: None,
                notes: None,
                rating: Some(5),
                inventory: 0,
                why: None,
                color_id: 1,
                producer_id: 1,
                viti_area_id: None,
                name: None,
                wine_type_id: 1,
            },
        };
        let response = post(form, connection, media_dir);
        assert!(response.is_ok());
    }
}
