use super::models::WineGrapesForm;
use super::validation::validate_user_owns_grapes;
use crate::error::{RestResult, VinotecaError};
use crate::models::{WineGrape, WineGrapeForm};
use crate::schema::{grapes, wine_grapes};
use crate::users::Auth;
use crate::DbConn;

use diesel::prelude::*;
use rocket_contrib::json::Json;
use validator::Validate;

#[get("/wine-grapes?<wine_id>&<grape_id>")]
pub fn get(
    auth: Auth,
    wine_id: Option<i32>,
    grape_id: Option<i32>,
    connection: DbConn,
) -> RestResult<Vec<WineGrape>> {
    let mut query = wine_grapes::table
        .inner_join(grapes::table)
        .filter(grapes::user_id.eq(auth.id))
        .into_boxed();
    if let Some(wine_id) = wine_id {
        query = query.filter(wine_grapes::wine_id.eq(wine_id));
    }
    if let Some(grape_id) = grape_id {
        query = query.filter(wine_grapes::grape_id.eq(grape_id));
    }
    query
        .select((
            wine_grapes::percent,
            wine_grapes::grape_id,
            grapes::name,
            wine_grapes::wine_id,
        ))
        .load::<WineGrape>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

#[post("/wine-grapes", format = "json", data = "<wine_grape_form>")]
pub fn post(
    auth: Auth,
    wine_grape_form: Json<WineGrapesForm>,
    connection: DbConn,
) -> RestResult<Vec<WineGrape>> {
    let wine_grape_form = wine_grape_form.into_inner();
    wine_grape_form.validate()?;
    validate_user_owns_grapes(auth.id, &wine_grape_form.grapes, &connection)?;

    let wine_id = wine_grape_form.wine_id;
    let wine_grapes: Vec<WineGrapeForm> = wine_grape_form.into();

    // Delete existing wine grapes
    let delete_result = diesel::delete(wine_grapes::table.filter(wine_grapes::wine_id.eq(wine_id)))
        .execute(&*connection);
    if let Err(e) = delete_result {
        return Err(VinotecaError::Internal(format!(
            "Error deleting existing wine grapes for wine with id {}: {}",
            wine_id, e
        )));
    }

    if !wine_grapes.is_empty() {
        diesel::insert_into(wine_grapes::table)
            .values(&wine_grapes)
            .execute(&*connection)?;
    }
    get(auth, Some(wine_id), None, connection)
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::wine_grapes::AssociatedGrape;

    #[test]
    fn post_many() {
        run_test!(|rocket, connection| {
            let form = WineGrapesForm {
                wine_id: 1,
                grapes: vec![
                    AssociatedGrape {
                        grape_id: 1,
                        percent: Some(50),
                    },
                    AssociatedGrape {
                        grape_id: 2,
                        percent: Some(25),
                    },
                    AssociatedGrape {
                        grape_id: 3,
                        percent: Some(5),
                    },
                    AssociatedGrape {
                        grape_id: 4,
                        percent: Some(5),
                    },
                    AssociatedGrape {
                        grape_id: 5,
                        percent: Some(5),
                    },
                    AssociatedGrape {
                        grape_id: 6,
                        percent: Some(5),
                    },
                ],
            };
            let response = post(Auth { id: 1 }, Json(form), connection);
            assert!(response.is_ok());
            let wine_grapes = response.unwrap();
            assert_eq!(wine_grapes.len(), 6);
        })
    }

    #[test]
    fn post_high_percent() {
        run_test!(|rocket, connection| {
            let form = WineGrapesForm {
                wine_id: 2,
                grapes: vec![
                    AssociatedGrape {
                        grape_id: 2,
                        percent: Some(40),
                    },
                    AssociatedGrape {
                        grape_id: 3,
                        percent: Some(76),
                    },
                ],
            };
            let response = post(Auth { id: 1 }, Json(form), connection);
            assert!(
                matches!(response, Err(VinotecaError::BadRequest(desc)) if desc.contains("maximum"))
            );
        })
    }

    #[test]
    fn post_negative_percent() {
        run_test!(|rocket, connection| {
            let form = WineGrapesForm {
                wine_id: 3,
                grapes: vec![AssociatedGrape {
                    grape_id: 2,
                    percent: Some(-3),
                }],
            };
            let response = post(Auth { id: 1 }, Json(form), connection);
            assert!(matches!(response, Err(VinotecaError::BadRequest(_))));
        })
    }

    #[test]
    fn post_duplicate() {
        run_test!(|rocket, connection| {
            let form = WineGrapesForm {
                wine_id: 1,
                grapes: vec![
                    AssociatedGrape {
                        grape_id: 1,
                        percent: None,
                    },
                    AssociatedGrape {
                        grape_id: 2,
                        percent: Some(5),
                    },
                    AssociatedGrape {
                        grape_id: 1,
                        percent: Some(75),
                    },
                ],
            };
            let response = post(Auth { id: 1 }, Json(form), connection);
            assert!(
                matches!(response, Err(VinotecaError::BadRequest(desc)) if desc.contains("Duplicate"))
            );
        })
    }

    #[test]
    fn post_empty_no_op() {
        run_test!(|rocket, connection| {
            let form = WineGrapesForm {
                wine_id: 3,
                grapes: Vec::new(),
            };
            let response = post(Auth { id: 1 }, Json(form), connection);
            assert!(matches!(response, Ok(Json(wg)) if wg.is_empty() ));
        })
    }

    #[test]
    fn post_empty_delete_existing() {
        run_test!(|rocket, connection| {
            let form = WineGrapesForm {
                wine_id: 1,
                grapes: vec![
                    AssociatedGrape {
                        grape_id: 1,
                        percent: Some(45),
                    },
                    AssociatedGrape {
                        grape_id: 2,
                        percent: Some(55),
                    },
                ],
            };
            let response = post(Auth { id: 1 }, Json(form), connection);
            assert!(matches!(response, Ok(Json(wg)) if wg.len() == 2));
            // Post empty wine grapes for same wine
            let connection = DbConn::get_one(&rocket).expect("database connection");
            let form = WineGrapesForm {
                wine_id: 1,
                grapes: Vec::new(),
            };
            let response = post(Auth { id: 1 }, Json(form), connection);
            dbg!(&response);
            assert!(matches!(response, Ok(Json(wg)) if wg.is_empty() ));
        })
    }
}
