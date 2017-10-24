CREATE TABLE IF NOT EXISTS countries
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    is_us INTEGER
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_countries_name ON countries(name);

CREATE TABLE IF NOT EXISTS wine_types
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type_name TEXT
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_wine_types_type on wine_types(type_name);

CREATE TABLE IF NOT EXISTS additionals
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    additional TEXT
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_add_additional ON additionals(additional);

CREATE TABLE IF NOT EXISTS colors
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    color TEXT
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_colors_color ON colors(color);

CREATE TABLE IF NOT EXISTS wines
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    notes TEXT,
    country_id INTEGER,
    type_id INTEGER,
    add_id INTEGER,
    color_id INTEGER,
    FOREIGN KEY(type_id) REFERENCES wine_types(id),
    FOREIGN KEY(country_id) REFERENCES countries(id),
    FOREIGN KEY(add_id) REFERENCES additionals(id),
    FOREIGN KEY(color_id) REFERENCES colors(id)
);

CREATE INDEX IF NOT EXISTS idx_wines_name ON wines(name);
CREATE INDEX IF NOT EXISTS fk_wines_country_id ON wines(producer_id);
CREATE INDEX IF NOT EXISTS fk_wines_type_id ON wines(type_id);
CREATE INDEX IF NOT EXISTS fk_wines_add_id ON wines(add_id);
CREATE INDEX IF NOT EXISTS fk_wines_color_id ON wines(color_id);

CREATE TABLE IF NOT EXISTS stores
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    address TEXT
);

CREATE INDEX IF NOT EXISTS idx_stores_name ON stores(name);

CREATE TABLE IF NOT EXISTS purchases
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    store_id INTEGER,
    wine_id INTEGER,
    price REAL,
    quantity INTEGER,
    date INTEGER,
    vintage INTEGER,
    why TEXT,
    FOREIGN KEY(store_id) REFERENCES stores(id),
    FOREIGN KEY(wine_id) REFERENCES wines(id)
);

CREATE INDEX IF NOT EXISTS fk_purchases_store_id ON purchases(store_id);
CREATE INDEX IF NOT EXISTS fk_purchases_wine_id ON purchases(wine_id);
CREATE INDEX IF NOT EXISTS idx_purchases_date ON purchases(date);
CREATE INDEX IF NOT EXISTS idx_purchases_vintage ON purchases(vintage);