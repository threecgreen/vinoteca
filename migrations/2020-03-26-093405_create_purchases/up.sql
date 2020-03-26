CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    price NUMERIC,
    quantity INTEGER NOT NULL CHECK(quantity > 0),
    vintage INTEGER CHECK(vintage BETWEEN 1700 AND EXTRACT(YEAR FROM current_date)),
    memo TEXT,
    store_id INTEGER REFERENCES stores(id) ON DELETE RESTRICT,
    wine_id INTEGER NOT NULL REFERENCES wines(id) ON DELETE CASCADE,
    "date" DATE CHECK("date" BETWEEN '1900-01-01' AND current_date + INTERVAL '1 day')
);
