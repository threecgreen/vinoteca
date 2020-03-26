CREATE TABLE wine_grapes (
    wine_id INTEGER NOT NULL REFERENCES wines(id) ON DELETE CASCADE,
    grape_id INTEGER NOT NULL REFERENCES grapes(id) ON DELETE RESTRICT,
    percent INTEGER CHECK(percent BETWEEN 0 AND 100),
    PRIMARY KEY(wine_id, grape_id)
);
