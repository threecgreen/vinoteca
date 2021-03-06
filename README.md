# vinoteca

[![CI](https://github.com/threecgreen/vinoteca/workflows/CI/badge.svg?branch=master)](https://github.com/threecgreen/vinoteca/actions?query=workflow%3ACI)

A wine purchase tracker and review app built with Rust and React with TypeScript.
I created this project to give my dad a better way to track his wine purchases
than the Excel spreadsheet he was using.

## Built-With
 * Rocket
 * PostgreSQL
 * React
 * TypeScript
 * Materialize CSS
 * Chart.js

## Building from source
 1. Clone the repository
     ```bash
     $ git clone https://github.com/threecgreen/vinoteca
     $ cd vinoteca
     ```
 1. Install rust via rustup if not already installed
    ```bash
    $ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    ```
 1. Build the web server
    ```bash
    $ cargo build
    ```
 1. Generate contracts
    ```bash
    $ cargo run --bin gen_contracts
    ```
 1. Install JavaScript dependencies and create the webpack bundle
    ```bash
    $ npm install --save --no-optional
    $ npm run-script build
    ```
 1. Start the web server
    ```bash
    $ cargo run
    ```
 1. Navigate to [localhost:8000](http://localhost:8000). The service will run
    the necessary database migrations on startup.

## Configuration
Configuration is managed via `Rocket.toml`.

Required configurations:
 * Postgres database
 * AWS S3 access keys

Optional configurations
 * Secret key for generating encrypted cookies
 * Log level
 * Number of worker threads

## Acknowledgements
The background image on the main page was taken by [CollideStorm](https://www.reddit.com/r/wine/comments/6z7d6c/one_of_my_favorite_road_trips_i_have_ever_done_i/)
