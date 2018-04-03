CREATE TABLE sqlite_sequence(name,seq);
CREATE TABLE additionals
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    additional TEXT
);
CREATE UNIQUE INDEX idx_add_additional ON additionals(additional);
CREATE TABLE colors
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    color TEXT
);
CREATE UNIQUE INDEX idx_colors_color ON colors(color);
CREATE TABLE purchases
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    store_id INTEGER,
    wine_id INTEGER,
    price INTEGER,
    quantity INTEGER,
    date INTEGER,
    vintage INTEGER,
    why TEXT,
    FOREIGN KEY(store_id) REFERENCES stores(id),
    FOREIGN KEY(wine_id) REFERENCES wines(id)
);
CREATE INDEX fk_purchases_store_id ON purchases(store_id);
CREATE INDEX fk_purchases_wine_id ON purchases(wine_id);
CREATE INDEX idx_purchases_date ON purchases(date);
CREATE INDEX idx_purchases_vintage ON purchases(vintage);
CREATE TABLE countries
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    is_us INTEGER
);
CREATE UNIQUE INDEX idx_countries_name ON countries(name);
CREATE TABLE IF NOT EXISTS "wine_types"
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type_name TEXT
);
CREATE UNIQUE INDEX idx_wine_types_type ON "wine_types" (type_name);
CREATE TABLE producers
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    country_id INTEGER,
    CONSTRAINT producers_countries_id_fk FOREIGN KEY (country_id) REFERENCES countries (id) ON DELETE SET NULL ON UPDATE SET NULL
);
CREATE UNIQUE INDEX producers_name_uindex ON producers (name);
CREATE TABLE IF NOT EXISTS "django_migrations" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "app" varchar(255) NOT NULL, "name" varchar(255) NOT NULL, "applied" datetime NOT NULL);
CREATE TABLE IF NOT EXISTS "auth_group" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(80) NOT NULL UNIQUE);
CREATE TABLE IF NOT EXISTS "auth_group_permissions" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "group_id" integer NOT NULL REFERENCES "auth_group" ("id"), "permission_id" integer NOT NULL REFERENCES "auth_permission" ("id"));
CREATE TABLE IF NOT EXISTS "auth_user_groups" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "user_id" integer NOT NULL REFERENCES "auth_user" ("id"), "group_id" integer NOT NULL REFERENCES "auth_group" ("id"));
CREATE TABLE IF NOT EXISTS "auth_user_user_permissions" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "user_id" integer NOT NULL REFERENCES "auth_user" ("id"), "permission_id" integer NOT NULL REFERENCES "auth_permission" ("id"));
CREATE UNIQUE INDEX "auth_group_permissions_group_id_permission_id_0cd325b0_uniq" ON "auth_group_permissions" ("group_id", "permission_id");
CREATE INDEX "auth_group_permissions_group_id_b120cbf9" ON "auth_group_permissions" ("group_id");
CREATE INDEX "auth_group_permissions_permission_id_84c5c92e" ON "auth_group_permissions" ("permission_id");
CREATE UNIQUE INDEX "auth_user_groups_user_id_group_id_94350c0c_uniq" ON "auth_user_groups" ("user_id", "group_id");
CREATE INDEX "auth_user_groups_user_id_6a12ed8b" ON "auth_user_groups" ("user_id");
CREATE INDEX "auth_user_groups_group_id_97559544" ON "auth_user_groups" ("group_id");
CREATE UNIQUE INDEX "auth_user_user_permissions_user_id_permission_id_14a6b632_uniq" ON "auth_user_user_permissions" ("user_id", "permission_id");
CREATE INDEX "auth_user_user_permissions_user_id_a95ead1b" ON "auth_user_user_permissions" ("user_id");
CREATE INDEX "auth_user_user_permissions_permission_id_1fbb5f2c" ON "auth_user_user_permissions" ("permission_id");
CREATE TABLE IF NOT EXISTS "django_admin_log" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "object_id" text NULL, "object_repr" varchar(200) NOT NULL, "action_flag" smallint unsigned NOT NULL, "change_message" text NOT NULL, "content_type_id" integer NULL REFERENCES "django_content_type" ("id"), "user_id" integer NOT NULL REFERENCES "auth_user" ("id"), "action_time" datetime NOT NULL);
CREATE INDEX "django_admin_log_content_type_id_c4bce8eb" ON "django_admin_log" ("content_type_id");
CREATE INDEX "django_admin_log_user_id_c564eba6" ON "django_admin_log" ("user_id");
CREATE TABLE IF NOT EXISTS "django_content_type" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "app_label" varchar(100) NOT NULL, "model" varchar(100) NOT NULL);
CREATE UNIQUE INDEX "django_content_type_app_label_model_76bd3d3b_uniq" ON "django_content_type" ("app_label", "model");
CREATE TABLE IF NOT EXISTS "auth_permission" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "content_type_id" integer NOT NULL REFERENCES "django_content_type" ("id"), "codename" varchar(100) NOT NULL, "name" varchar(255) NOT NULL);
CREATE UNIQUE INDEX "auth_permission_content_type_id_codename_01ab375a_uniq" ON "auth_permission" ("content_type_id", "codename");
CREATE INDEX "auth_permission_content_type_id_2f476e4b" ON "auth_permission" ("content_type_id");
CREATE TABLE IF NOT EXISTS "django_session" ("session_key" varchar(40) NOT NULL PRIMARY KEY, "session_data" text NOT NULL, "expire_date" datetime NOT NULL);
CREATE INDEX "django_session_expire_date_a5c62663" ON "django_session" ("expire_date");
CREATE TABLE wine_grapes
(
    wine_id INTEGER NOT NULL,
    grape_id INTEGER NOT NULL,
    percent INTEGER,
  PRIMARY KEY (wine_id, grape_id)
    CONSTRAINT wine_grapes_wines_id_fk FOREIGN KEY (wine_id) REFERENCES wines (id),
    CONSTRAINT wine_grapes_grapes_id_fk FOREIGN KEY (grape_id) REFERENCES grapes (id)
);
CREATE TABLE viti_areas
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    region_id INTEGER,
    CONSTRAINT viti_areas_countries_id_fk FOREIGN KEY (region_id) REFERENCES countries (id)
);
CREATE INDEX viti_areas_name_index ON viti_areas (name);
CREATE INDEX viti_areas_region_id_index ON viti_areas (region_id);
CREATE TABLE IF NOT EXISTS "auth_user" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "password" varchar(128) NOT NULL, "last_login" datetime NULL, "is_superuser" bool NOT NULL, "username" varchar(150) NOT NULL UNIQUE, "first_name" varchar(30) NOT NULL, "email" varchar(254) NOT NULL, "is_staff" bool NOT NULL, "is_active" bool NOT NULL, "date_joined" datetime NOT NULL, "last_name" varchar(150) NOT NULL);
CREATE VIEW incomplete_grape_wines AS
SELECT
  w.id as wine_id
  , w.description as description
  , p.name as producer
  , sum(wg.percent) as total_percent
  , count(wg.percent) as grape_count
FROM wine_grapes wg
LEFT JOIN wines w ON wg.wine_id = w.id
LEFT JOIN producers p on p.id = w.producer_id
GROUP BY w.id
HAVING sum(wg.percent) < 100
/* incomplete_grape_wines(wine_id,description,producer,total_percent,grape_count) */;
CREATE TABLE IF NOT EXISTS "grapes"
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);
CREATE UNIQUE INDEX grapes_name_uindex ON "grapes" (name);
CREATE TABLE IF NOT EXISTS "stores"
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);
CREATE INDEX idx_stores_name ON "stores" (name);
CREATE TABLE IF NOT EXISTS "wines"
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT,
    notes TEXT,
    producer_id INTEGER,
    type_id INTEGER,
    add_id INTEGER,
    color_id INTEGER,
    rating FLOAT,
    inventory INTEGER DEFAULT 0 NOT NULL,
    viti_area_id INTEGER, why text NULL,
    CONSTRAINT wine_prod_fkey FOREIGN KEY (producer_id) REFERENCES producers (id),
    FOREIGN KEY (type_id) REFERENCES wine_types (id),
    FOREIGN KEY (add_id) REFERENCES additionals (id),
    FOREIGN KEY (color_id) REFERENCES colors (id),
    CONSTRAINT wines_viti_areas_id_fk FOREIGN KEY (viti_area_id) REFERENCES viti_areas (id)
);
CREATE INDEX fk_wines_country_id ON "wines" (producer_id);
CREATE INDEX fk_wines_type_id ON "wines" (type_id);
CREATE INDEX fk_wines_add_id ON "wines" (add_id);
CREATE INDEX fk_wines_color_id ON "wines" (color_id);
CREATE INDEX wines_viti_area_id_index ON "wines" (viti_area_id);
