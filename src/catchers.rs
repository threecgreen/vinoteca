use crate::error::VinotecaError;

#[catch(401)]
pub fn unauthorized() -> VinotecaError {
    VinotecaError::Unauthorized("Login required".to_owned())
}

#[catch(403)]
pub fn forbidden() -> VinotecaError {
    VinotecaError::Forbidden("Bad email or password".to_owned())
}
