ALTER TABLE wines
-- Null until we can associate it with a users
ADD COLUMN user_id INTEGER REFERENCES users (id);
