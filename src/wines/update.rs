use crate::error::{RestResult, VinotecaError};
use super::models::RawWineForm;
use super::image::handle_image;
use crate::models::Wine;
use crate::schema::{colors, producers, purchases, regions, viti_areas, wine_types, wines};
use crate::DbConn;

use diesel::dsl::sql;
use diesel::prelude::*;
use diesel::sql_types::{Integer, Nullable};
use rocket_contrib::json::Json;

#[put("/wines/<id>", data = "<raw_wine_form>")]
pub fn put(
    id: i32,
    raw_wine_form: RawWineForm,
    connection: DbConn,
) -> RestResult<Wine> {
    let wine_form = raw_wine_form.wine_form;

    let result: RestResult<Wine> = diesel::update(wines::table.filter(wines::id.eq(id)))
        .set(wine_form)
        .execute(&*connection)
        .and_then(|_| {
            wines::table
                .filter(wines::id.eq(id))
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
                .first(&*connection)
                .map(Json)
        })
        .map_err(VinotecaError::from);

    if let Ok(wine) = &result {
        if let Some(image) = raw_wine_form.image {
            match handle_image(wine, image) {
                Err(e) => warn!("Error updating image for wine with id {}: {}", id, e),
                _ => (),
            };
        }
    }
    result
}
