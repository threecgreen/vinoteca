table! {
    colors (id) {
        id -> Integer,
        name -> Text,
    }
}

table! {
    grapes (id) {
        id -> Integer,
        name -> Text,
    }
}

table! {
    producers (id) {
        id -> Integer,
        name -> Text,
        region_id -> Integer,
    }
}

table! {
    purchases (id) {
        id -> Integer,
        price -> Nullable<Float>,
        quantity -> Nullable<Integer>,
        vintage -> Nullable<Integer>,
        memo -> Nullable<Text>,
        store_id -> Nullable<Integer>,
        wine_id -> Integer,
        date -> Nullable<Integer>,
    }
}

table! {
    regions (id) {
        id -> Integer,
        name -> Text,
    }
}

table! {
    stores (id) {
        id -> Integer,
        name -> Text,
    }
}

table! {
    viti_areas (id) {
        id -> Integer,
        name -> Text,
        region_id -> Integer,
    }
}

table! {
    wine_grapes (id) {
        id -> Integer,
        percent -> Nullable<Integer>,
        grape_id -> Integer,
        wine_id -> Integer,
    }
}

table! {
    wine_types (id) {
        id -> Integer,
        name -> Text,
    }
}

table! {
    wines (id) {
        id -> Integer,
        description -> Nullable<Text>,
        notes -> Nullable<Text>,
        rating -> Nullable<Float>,
        inventory -> Integer,
        why -> Nullable<Text>,
        color_id -> Integer,
        producer_id -> Integer,
        viti_area_id -> Nullable<Integer>,
        name -> Nullable<Text>,
        wine_type_id -> Integer,
    }
}

joinable!(producers -> regions (region_id));
joinable!(purchases -> stores (store_id));
joinable!(purchases -> wines (wine_id));
joinable!(viti_areas -> regions (region_id));
joinable!(wine_grapes -> grapes (grape_id));
joinable!(wine_grapes -> wines (wine_id));
joinable!(wines -> colors (color_id));
joinable!(wines -> producers (producer_id));
joinable!(wines -> viti_areas (viti_area_id));
joinable!(wines -> wine_types (wine_type_id));

allow_tables_to_appear_in_same_query!(
    colors,
    grapes,
    producers,
    purchases,
    regions,
    stores,
    viti_areas,
    wine_grapes,
    wine_types,
    wines,
);
