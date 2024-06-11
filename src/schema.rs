diesel::table! {
    colors (id) {
        id -> Int4,
        name -> Text,
    }
}

diesel::table! {
    grapes (id) {
        id -> Int4,
        name -> Text,
        user_id -> Int4,
    }
}

diesel::table! {
    producers (id) {
        id -> Int4,
        name -> Text,
        region_id -> Int4,
        user_id -> Int4,
    }
}

diesel::table! {
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

diesel::table! {
    regions (id) {
        id -> Int4,
        name -> Text,
    }
}

diesel::table! {
    stores (id) {
        id -> Int4,
        name -> Text,
        user_id -> Int4,
    }
}

diesel::table! {
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

diesel::table! {
    viti_areas (id) {
        id -> Int4,
        name -> Text,
        region_id -> Int4,
        user_id -> Int4,
    }
}

diesel::table! {
    wine_grapes (wine_id, grape_id) {
        wine_id -> Int4,
        grape_id -> Int4,
        percent -> Nullable<Int4>,
    }
}

diesel::table! {
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
        is_in_shopping_list -> Bool,
    }
}

diesel::table! {
    wine_types (id) {
        id -> Int4,
        name -> Text,
        user_id -> Int4,
    }
}

diesel::table! {
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

diesel::joinable!(grapes -> users (user_id));
diesel::joinable!(producers -> regions (region_id));
diesel::joinable!(producers -> users (user_id));
diesel::joinable!(purchases -> stores (store_id));
diesel::joinable!(purchases -> wines (wine_id));
diesel::joinable!(recent_purchases -> stores (store_id));
diesel::joinable!(recent_purchases -> wines (wine_id));
diesel::joinable!(stores -> users (user_id));
diesel::joinable!(viti_areas -> regions (region_id));
diesel::joinable!(viti_areas -> users (user_id));
diesel::joinable!(wine_grapes -> grapes (grape_id));
diesel::joinable!(wine_grapes -> wines (wine_id));
diesel::joinable!(wine_types -> users (user_id));
diesel::joinable!(wines -> colors (color_id));
diesel::joinable!(wines -> producers (producer_id));
diesel::joinable!(wines -> users (user_id));
diesel::joinable!(wines -> viti_areas (viti_area_id));
diesel::joinable!(wines -> wine_types (wine_type_id));

diesel::allow_tables_to_appear_in_same_query!(
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
