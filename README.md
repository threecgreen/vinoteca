[![Run Status](https://api.shippable.com/projects/5b0095e52ce7330700a7d8d5/badge?branch=master)]()
[![Coverage Badge](https://api.shippable.com/projects/5b0095e52ce7330700a7d8d5/coverageBadge?branch=master)]()
# vinoteca
A wine purchase tracker and review system in a Django web app.
I created this project to give my dad a better way to track his wine purchases than the Excel spreadsheet he was using.
As such, vinoteca is designed with one specific user in mind and it shows.

## Installation
 1. Install sqlite3 if not already installed
 1. Clone the repository
     ```bash
     $ git clone https://github.com/threecgreen/vinoteca
     ```
 1. Create a new virtual environment and activate it
     ```bash
     $ conda create -n vinoteca python=3.6
     $ conda activate vinoteca
     ```
     or use virtualenv
 1. Install dependencies
    ```bash
    $ pip install -r requirements.txt
    ```
 1. Run Django migrations
    ```bash
    $ python manage.py migrate
    ```

**NB: Many of the tests currently rely on specific data in the database.
I haven't gotten around to creating test data.**

## Built-With
* Django
* sqlite3
* Materialize CSS
* Typescript
* Chart.js
* Sigma.js

## Acknowledgements
* Homepage image taken by [CollideStorm](https://www.reddit.com/r/wine/comments/6z7d6c/one_of_my_favorite_road_trips_i_have_ever_done_i/)
