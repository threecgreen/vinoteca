use super::image::handle_image;
use super::models::RawWineForm;
use crate::error::{RestResult, VinotecaError};
use crate::models::Wine;
use crate::schema::{colors, producers, purchases, regions, viti_areas, wine_types, wines};
use crate::{DbConn, MediaDir};

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::{Integer, Nullable};
use rocket::State;
use rocket_contrib::json::Json;
use validator::Validate;

#[post("/wines", data = "<raw_wine_form>")]
pub fn post(
    raw_wine_form: RawWineForm,
    connection: DbConn,
    media_dir: State<MediaDir>,
) -> RestResult<Wine> {
    let wine_form = raw_wine_form.wine_form;
    wine_form.validate()?;

    connection.set_timeout(1_000)?;
    let result: RestResult<Wine> = diesel::insert_into(wines::table)
        .values(&wine_form)
        .execute(&*connection)
        .and_then(|_| {
            wines::table
                .inner_join(producers::table.inner_join(regions::table))
                .inner_join(colors::table)
                .inner_join(wine_types::table)
                .left_join(purchases::table)
                .left_join(viti_areas::table)
                .group_by((
                    wines::id,
                    wines::description,
                    wines::notes,
                    wines::rating,
                    wines::inventory,
                    wines::why,
                    wines::color_id,
                    colors::name,
                    wines::producer_id,
                    producers::name,
                    producers::region_id,
                    regions::name,
                    wines::viti_area_id,
                    viti_areas::name,
                    wines::name,
                    wines::wine_type_id,
                    wine_types::name,
                ))
                .select((
                    wines::id,
                    wines::description,
                    wines::notes,
                    wines::rating,
                    wines::inventory,
                    wines::why,
                    wines::color_id,
                    colors::name,
                    wines::producer_id,
                    producers::name,
                    producers::region_id,
                    regions::name,
                    wines::viti_area_id,
                    viti_areas::name.nullable(), // Left join
                    wines::name,
                    wines::wine_type_id,
                    wine_types::name,
                    sql::<Nullable<Integer>>("max(purchases.vintage)"),
                ))
                .order(wines::id.desc())
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from);

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
