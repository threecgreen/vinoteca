# vinoteca
A wine purchase tracker and review system in a rust web app.
I created this project to give my dad a better way to track his wine purchases
than the Excel spreadsheet he was using.
As such, vinoteca was designed with a specific user in mind.

## Installation
 1. Install sqlite3 if not already installed
 1. Download and install the latest release

### Building from source
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
    $ rustup override add nightly
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

## Configuration
Configuration is managed via `Rocket.toml`.

## Built-With
* Rocket
* sqlite3
* Materialize CSS
* React
* Webpack
* Chart.js

## Acknowledgements
* Homepage image taken by [CollideStorm](https://www.reddit.com/r/wine/comments/6z7d6c/one_of_my_favorite_road_trips_i_have_ever_done_i/)
