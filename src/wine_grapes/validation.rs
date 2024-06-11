use diesel::prelude::*;
use diesel_async::{AsyncPgConnection, RunQueryDsl};
use rocket_db_pools::Connection;
use std::collections::HashSet;
use validator::ValidationError;

use super::models::AssociatedGrape;
use crate::error::VinotecaError;
use crate::schema::grapes;

pub fn validate_total_percentage(grapes: &[AssociatedGrape]) -> Result<(), ValidationError> {
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

pub fn validate_unique(grapes: &[AssociatedGrape]) -> Result<(), ValidationError> {
    let mut unique_grapes = HashSet::new();
    for wg in grapes {
        if !unique_grapes.insert(wg.grape_id) {
            return Err(ValidationError::new("Duplicate grapes"));
        }
    }
    Ok(())
}

pub async fn validate_user_owns_grapes(
    user_id: i32,
    wine_grapes: &[AssociatedGrape],
    pg_conn: &mut AsyncPgConnection,
) -> Result<(), VinotecaError> {
    let valid_grape_count = grapes::table
        .filter(grapes::user_id.eq(user_id))
        .filter(
            grapes::id.eq_any(
                wine_grapes
                    .iter()
                    .map(|wg| wg.grape_id)
                    .collect::<Vec<i32>>(),
            ),
        )
        .count()
        .get_result::<i64>(pg_conn)
        .await?;
    if valid_grape_count as usize == wine_grapes.len() {
        Ok(())
    } else {
        Err(VinotecaError::BadRequest(
            "One or more of the grapes are invalid".to_owned(),
        ))
    }
}

#[cfg(test)]
mod test {
    use super::*;

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
}
