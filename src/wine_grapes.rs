use crate::error::{RestResult, VinotecaError};
use crate::models::{WineGrape, WineGrapeForm};
use crate::schema::{grapes, wine_grapes};
use crate::DbConn;

use diesel::prelude::*;
use rocket_contrib::json::Json;
use serde::{Deserialize, Serialize};
use std::collections::HashSet;
use typescript_definitions::TypeScriptify;
use validator::{Validate, ValidationError};

#[get("/wine-grapes?<wine_id>&<grape_id>")]
pub fn get(
    wine_id: Option<i32>,
    grape_id: Option<i32>,
    connection: DbConn,
) -> RestResult<Vec<WineGrape>> {
    let mut query = wine_grapes::table.inner_join(grapes::table).into_boxed();
    if let Some(wine_id) = wine_id {
        query = query.filter(wine_grapes::wine_id.eq(wine_id));
    }
    if let Some(grape_id) = grape_id {
        query = query.filter(wine_grapes::grape_id.eq(grape_id));
    }
    query
        .select((
            wine_grapes::id,
            wine_grapes::percent,
            wine_grapes::grape_id,
            grapes::name,
            wine_grapes::wine_id,
        ))
        .load::<WineGrape>(&*connection)
        .map(Json)
        .map_err(VinotecaError::from)
}

#[derive(Deserialize, Serialize, Validate, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct AssociatedGrape {
    #[validate(range(min = 0, max = 100))]
    pub percent: Option<i32>,
    pub grape_id: i32,
}

#[derive(Deserialize, Serialize, Validate, TypeScriptify, Debug)]
#[serde(rename_all = "camelCase")]
pub struct WineGrapesForm {
    pub wine_id: i32,
    #[validate] // Nested validation
    #[validate(custom = "validate_total_percentage")]
    #[validate(custom = "validate_unique")]
    pub grapes: Vec<AssociatedGrape>,
}

impl From<WineGrapesForm> for Vec<WineGrapeForm> {
    fn from(wine_grapes_form: WineGrapesForm) -> Self {
        wine_grapes_form
            .grapes
            .iter()
            .map(|g| WineGrapeForm {
                percent: g.percent,
                grape_id: g.grape_id,
                wine_id: wine_grapes_form.wine_id,
            })
            .collect()
    }
}

fn validate_total_percentage(grapes: &[AssociatedGrape]) -> Result<(), ValidationError> {
    let total_percentage = grapes
        .iter()
        .fold(0, |sum, wg| sum + wg.percent.unwrap_or(0));
    if total_percentage > 100 {
        Err(ValidationError::new(
            "Grape percentage exceeds maximum of 100 allowed",
        ))
    } else {
        Ok(())
    }
}

fn validate_unique(grapes: &[AssociatedGrape]) -> Result<(), ValidationError> {
    let mut unique_grapes = HashSet::new();
    for wg in grapes {
        if !unique_grapes.insert(wg.grape_id) {
            return Err(ValidationError::new("Duplicate grapes"));
        }
    }
    Ok(())
}

#[post("/wine-grapes", format = "json", data = "<wine_grape_form>")]
pub fn post(
    wine_grape_form: Json<WineGrapesForm>,
    connection: DbConn,
) -> RestResult<Vec<WineGrape>> {
    let wine_grape_form = wine_grape_form.into_inner();
    wine_grape_form.validate()?;
    let wine_id = wine_grape_form.wine_id;
    let wine_grapes: Vec<WineGrapeForm> = wine_grape_form.into();

    connection.set_timeout(1_000)?;
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
    get(Some(wine_id), None, connection)
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::testing::{create_test_db, create_test_rocket};

    #[test]
    fn post_many() {
        let connection = create_test_db();
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
        let response = post(Json(form), connection);
        assert!(response.is_ok());
        let wine_grapes = response.unwrap();
        assert_eq!(wine_grapes.len(), 6);
    }

    #[test]
    fn post_high_percent() {
        let connection = create_test_db();
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
        let response = post(Json(form), connection);
        assert!(
            matches!(response, Err(VinotecaError::BadRequest(desc)) if desc.contains("maximum"))
        );
    }

    #[test]
    fn post_negative_percent() {
        let connection = create_test_db();
        let form = WineGrapesForm {
            wine_id: 3,
            grapes: vec![AssociatedGrape {
                grape_id: 2,
                percent: Some(-3),
            }],
        };
        let response = post(Json(form), connection);
        assert!(matches!(response, Err(VinotecaError::BadRequest(_))));
    }

    #[test]
    fn post_duplicate() {
        let connection = create_test_db();
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
        let response = post(Json(form), connection);
        assert!(
            matches!(response, Err(VinotecaError::BadRequest(desc)) if desc.contains("Duplicate"))
        );
    }

    #[test]
    fn total_percentage_some_and_none() {
        let associated_grapes = vec![
            AssociatedGrape {
                grape_id: 1,
                percent: Some(45),
            },
            AssociatedGrape {
                grape_id: 2,
                percent: None,
            },
            AssociatedGrape {
                grape_id: 3,
                percent: Some(56),
            },
            AssociatedGrape {
                grape_id: 4,
                percent: None,
            },
        ];
        let result = validate_total_percentage(&associated_grapes);
        assert!(result.is_err());
    }

    #[test]
    fn post_empty_no_op() {
        let connection = create_test_db();
        let form = WineGrapesForm {
            wine_id: 3,
            grapes: Vec::new(),
        };
        let response = post(Json(form), connection);
        assert!(matches!(response, Ok(Json(wg)) if wg.is_empty() ));
    }

    #[test]
    fn post_empty_delete_existing() {
        let rocket = create_test_rocket();
        // Create initial wine grapes
        let connection = DbConn::get_one(&rocket).expect("database connection");
        let form = WineGrapesForm {
            wine_id: 4,
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
        let response = post(Json(form), connection);
        assert!(matches!(response, Ok(Json(wg)) if wg.len() == 2));
        // Post empty wine grapes for same wine
        let connection = DbConn::get_one(&rocket).expect("database connection");
        let form = WineGrapesForm {
            wine_id: 4,
            grapes: Vec::new(),
        };
        let response = post(Json(form), connection);
        dbg!(&response);
        assert!(matches!(response, Ok(Json(wg)) if wg.is_empty() ));
    }
}
