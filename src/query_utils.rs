use diesel::result::Error;
use rocket::http::Status;

/// Macro for fetching the `$limit` top rows from `$table`. We use a macro
/// because of issues with creating generic diesel functions
macro_rules! top_table {
    ($table: expr, $id: expr, $name: expr, $limit: expr, $connection: expr) => {
        $table
            .group_by(($id, $name))
            .select((
                $id,
                $name,
                sql::<Integer>("sum(purchases.quantity)"),
                // Should probably be distinct
                sql::<Integer>("count(wines.id)"),
                sql::<Float>("avg(purchases.price)"),
            ))
            .order_by(sql::<Integer>("sum(purchases.quantity) DESC"))
            .limit($limit as i64)
            .load::<generic::TopEntity>(&*$connection)
            .map(Json)
            .map_err(VinotecaError::from)
    };
}

pub fn error_status(error: Error) -> Status {
    match error {
        Error::NotFound => Status::NotFound,
        e => {
            warn!("Error encountered: {:?}", e);
            Status::InternalServerError
        }
    }
}
