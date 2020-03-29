CREATE TABLE wines (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    notes TEXT,
    why TEXT,
    inventory INTEGER NOT NULL CHECK (inventory >= 0),
    rating INTEGER CHECK (rating BETWEEN 0 AND 10),
    image TEXT,
    color_id INTEGER NOT NULL REFERENCES colors(id) ON DELETE RESTRICT,
    wine_type_id INTEGER NOT NULL REFERENCES wine_types(id) ON DELETE RESTRICT,
    producer_id INTEGER NOT NULL REFERENCES producers(id) ON DELETE RESTRICT,
    viti_area_id INTEGER REFERENCES viti_areas(id) ON DELETE RESTRICT,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);
