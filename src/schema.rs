table! {
    colors (id) {
        id -> Int4,
        name -> Text,
    }
}

table! {
    grapes (id) {
        id -> Int4,
        name -> Text,
        user_id -> Int4,
    }
}

table! {
    producers (id) {
        id -> Int4,
        name -> Text,
        region_id -> Int4,
        user_id -> Int4,
    }
}

table! {
    purchases (id) {
        id -> Int4,
        price -> Nullable<Float8>,
        quantity -> Int4,
        vintage -> Nullable<Int4>,
        memo -> Nullable<Text>,
        store_id -> Nullable<Int4>,
        wine_id -> Int4,
        date -> Nullable<Date>,
    }
}

table! {
    regions (id) {
        id -> Int4,
        name -> Text,
    }
}

table! {
    stores (id) {
        id -> Int4,
        name -> Text,
        user_id -> Int4,
    }
}

table! {
    users (id) {
        id -> Int4,
        email -> Text,
        name -> Text,
        image -> Nullable<Text>,
        hash -> Text,
        created_at -> Timestamptz,
        last_login -> Timestamptz,
    }
}

table! {
    viti_areas (id) {
        id -> Int4,
        name -> Text,
        region_id -> Int4,
        user_id -> Int4,
    }
}

table! {
    wine_grapes (wine_id, grape_id) {
        wine_id -> Int4,
        grape_id -> Int4,
        percent -> Nullable<Int4>,
    }
}

table! {
    wines (id) {
        id -> Int4,
        name -> Nullable<Text>,
        description -> Nullable<Text>,
        notes -> Nullable<Text>,
        why -> Nullable<Text>,
        inventory -> Int4,
        rating -> Nullable<Int4>,
        image -> Nullable<Text>,
        color_id -> Int4,
        wine_type_id -> Int4,
        producer_id -> Int4,
        viti_area_id -> Nullable<Int4>,
        user_id -> Int4,
    }
}

table! {
    wine_types (id) {
        id -> Int4,
        name -> Text,
        user_id -> Int4,
    }
}

table! {
    recent_purchases(wine_id) {
        wine_id -> Int4,
        price -> Nullable<Float8>,
        quantity -> Int4,
        vintage -> Nullable<Int4>,
        memo -> Nullable<Text>,
        store_id -> Nullable<Int4>,
        date -> Nullable<Date>,
    }
}

joinable!(grapes -> users (user_id));
joinable!(producers -> regions (region_id));
joinable!(producers -> users (user_id));
joinable!(purchases -> stores (store_id));
joinable!(purchases -> wines (wine_id));
joinable!(recent_purchases -> stores (store_id));
joinable!(recent_purchases -> wines (wine_id));
joinable!(stores -> users (user_id));
joinable!(viti_areas -> regions (region_id));
joinable!(viti_areas -> users (user_id));
joinable!(wine_grapes -> grapes (grape_id));
joinable!(wine_grapes -> wines (wine_id));
joinable!(wine_types -> users (user_id));
joinable!(wines -> colors (color_id));
joinable!(wines -> producers (producer_id));
joinable!(wines -> users (user_id));
joinable!(wines -> viti_areas (viti_area_id));
joinable!(wines -> wine_types (wine_type_id));

allow_tables_to_appear_in_same_query!(
    colors,
    grapes,
    producers,
    purchases,
    regions,
    stores,
    users,
    viti_areas,
    wine_grapes,
    wines,
    wine_types,
    recent_purchases,
);
