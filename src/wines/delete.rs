use super::image;
use crate::config::Config;
use crate::error::{RestResult, VinotecaError};
use crate::query_utils::DbConn;
use crate::schema::wines;
use crate::users::Auth;

use diesel::prelude::*;
use diesel_async::RunQueryDsl;
use rocket::delete;
use rocket::serde::json::Json;
use rocket::State;

#[delete("/wines/<id>")]
pub async fn delete(
    auth: Auth,
    id: i32,
    mut connection: DbConn,
    config: &State<Config>,
) -> RestResult<()> {
    // Validate is user's wine
    let image_path = wines::table
        .filter(wines::id.eq(id))
        .filter(wines::user_id.eq(auth.id))
        .select(wines::image)
        .first::<Option<String>>(&mut *connection)
        .await?;

    if let Some(image_path) = image_path {
        if let Err(e) = image::delete_from_storage(&*config.storage, &image_path) {
            log::warn!("Error deleting image for deleted wine: {:?}", e);
        };
    }
    diesel::delete(wines::table.filter(wines::id.eq(id)))
        .execute(&mut *connection)
        .await
        .map(|_| Json(()))
        .map_err(VinotecaError::from)
}

#[cfg(test)]
mod test {
    // Tests need to be updated for async
}
