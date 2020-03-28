CREATE TABLE producers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    region_id INTEGER NOT NULL REFERENCES regions(id) ON DELETE RESTRICT,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE (name, user_id)
);
