use super::image::handle_image;
use super::models::RawWineForm;
use super::read::get;
use crate::config::Config;
use crate::error::{RestResult, VinotecaError};
use crate::models::{NewWine, Wine};
use crate::query_utils::IntoFirst;
use crate::schema::wines;
use crate::users::Auth;
use crate::DbConn;

use diesel::prelude::*;
use rocket::State;
use validator::Validate;

#[post("/wines", data = "<raw_wine_form>")]
pub fn post(
    auth: Auth,
    raw_wine_form: RawWineForm,
    connection: DbConn,
    config: State<Config>,
) -> RestResult<Wine> {
    let wine_form = raw_wine_form.wine_form;
    let image = raw_wine_form.image;
    wine_form.validate()?;

    diesel::insert_into(wines::table)
        .values(NewWine::from((auth, wine_form)))
        .returning(wines::id)
        .get_result(&*connection)
        .map_err(VinotecaError::from)
        .map(|wine_id| {
            if let Some(image) = image {
                if let Err(e) = handle_image(wine_id, image, &*config.storage, &connection) {
                    warn!("Error adding image for new wine with id {}: {}", wine_id, e);
                };
            }
            wine_id
        })
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
        })
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::config::Config;
    use crate::models::WineForm;
    use crate::storage::MockStorage;
    use crate::wines::models::RawWineForm;
    use crate::DbConn;

    use rocket::State;

    const FORM: RawWineForm = RawWineForm {
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

    // TODO: add mock image data and enabled

    #[test]
    #[ignore]
    fn insert_wine() {
        run_test!(|rocket, connection| {
            let mut mock = MockStorage::new();
            mock.expect_put_object()
                // .times(1)
                .return_const(Ok("uuid123".to_owned()));
            let rocket = rocket.manage(Config::new(mock));
            let config = State::from(&rocket).unwrap();
            let response = post(Auth { id: 1 }, FORM, connection, config);
            assert!(response.is_ok());
        })
    }

    #[test]
    #[ignore]
    fn image_failure_still_saves_wine() {
        run_test!(|rocket, connection| {
            let mut mock = MockStorage::new();
            mock.expect_put_object()
                // .times(1)
                .return_const(Err(VinotecaError::Internal("No good".to_owned())));
            let rocket = rocket.manage(Config::new(mock));
            let config = State::from(&rocket).unwrap();
            let response = post(Auth { id: 1 }, FORM, connection, config);
            assert!(response.is_ok());
        })
    }
}
