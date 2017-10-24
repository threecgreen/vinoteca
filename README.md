# vinoteca
A wine purchase tracker and review system in a django web app.

## Installation
### macOS/Linux
 1. Install sqlite3 if not already installed
 1. Create a new virtual environment and activate it
     ```bash
     $ create -n vinoteca python=3.6
     $ source activate vinoteca
     ```
     or use virtualenv
 1. Install dependencies
    ```bash
    $ pip install -r requirements.txt
    ```
 1. Create a new sqlite3 database in `data/wine.db`
    ```bash
    $ sqlite3 data/wine.db < data/schema.sql
    ```
### Windows Linux Subsystem
1. Activate the [Windows Linux Subsystem](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide)
    1. Open PowerShell as an Administrator
    1. Run the following command:
        ```PowerShell
        > Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
        ```
    1. Restart your computer
1. Run the Bash program
1. Clone the repository
1. Run the following commands
```bash
$ bash scripts/install.sh
$ bash scripts/run.sh
```

### Windows
TODO

## Built-With
* Django
* sqlite3
* Materialize CSS

## Acknowledgements
* Homepage image taken by [CollideStorm](https://www.reddit.com/r/wine/comments/6z7d6c/one_of_my_favorite_road_trips_i_have_ever_done_i/)
