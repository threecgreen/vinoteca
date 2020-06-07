use crate::error::VinotecaError;

#[catch(401)]
pub fn unauthorized() -> VinotecaError {
    warn!("Handling unauthorized request");
    VinotecaError::Unauthorized("Login required".to_owned())
}

#[catch(403)]
pub fn forbidden() -> VinotecaError {
    warn!("Handling forbidden request");
    VinotecaError::Forbidden("Bad email or password".to_owned())
}
