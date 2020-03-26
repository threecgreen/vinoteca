CREATE TABLE viti_areas (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    region_id INTEGER NOT NULL REFERENCES region(id) ON DELETE RESTRICT
);
