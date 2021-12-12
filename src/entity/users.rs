//! SeaORM Entity. Generated by sea-orm-codegen 0.4.1

use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]
#[sea_orm(table_name = "users")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    #[sea_orm(column_type = "Text", unique)]
    pub email: String,
    #[sea_orm(column_type = "Text")]
    pub name: String,
    #[sea_orm(column_type = "Text", nullable)]
    pub image: Option<String>,
    #[sea_orm(column_type = "Text")]
    pub hash: String,
    pub created_at: DateTimeWithTimeZone,
    pub last_login: DateTimeWithTimeZone,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(has_many = "super::grapes::Entity")]
    Grapes,
    #[sea_orm(has_many = "super::producers::Entity")]
    Producers,
    #[sea_orm(has_many = "super::viti_areas::Entity")]
    VitiAreas,
    #[sea_orm(has_many = "super::wine_types::Entity")]
    WineTypes,
    #[sea_orm(has_many = "super::wines::Entity")]
    Wines,
    #[sea_orm(has_many = "super::stores::Entity")]
    Stores,
}

impl Related<super::grapes::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Grapes.def()
    }
}

impl Related<super::producers::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Producers.def()
    }
}

impl Related<super::viti_areas::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::VitiAreas.def()
    }
}

impl Related<super::wine_types::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::WineTypes.def()
    }
}

impl Related<super::wines::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Wines.def()
    }
}

impl Related<super::stores::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Stores.def()
    }
}

impl ActiveModelBehavior for ActiveModel {}
