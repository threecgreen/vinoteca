-- Create users table
CREATE TABLE users (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    hash TEXT NOT NULL
);

CREATE INDEX idx_users_email ON users (email);
CREATE INDEX idx_users_name ON users (name);
