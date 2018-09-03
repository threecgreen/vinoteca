#!/usr/bin/env bash
# Pass -b/--backup-db to backup the database before starting
# Pass -n/--no-tab to not open a browser tab

source "$(dirname $0)/utils.sh"

parse_args()
# Parses command-line arguments by assigning them a variable. Pass with $@
{
    BACKUP_DB="false"
    NO_TAB="false"
    while [ "$1" != "" ]; do
        case $1 in
            -b | --backup-db)
                BACKUP_DB="true"
                ;;
            -n | --no-tab)
                NO_TAB="true"
                ;;
            *)
                error_exit "Invalid argument $1"
                ;;
        esac
        shift
    done
}

parse_args $@

# Only backup db if --backup-db arg passed
if [ $BACKUP_DB = "true" ]; then
    info_text "Backing up database..."
    cp -a "$root_dir/data/wine.db" "$root_dir/data/wine_$(date +"%y%m%d_%H%M%S").db"
fi

find_python_env

# Run browser if the user didn't pass --no-tab/-n
if [ $NO_TAB == "false" ]; then
    info_text "Attempting to open browser..."
    cmd=false
    case `uname -a` in
        # macOS
        *Darwin*) cmd=open;;
        # Windows Linux subsystem
        *Microsoft*) cmd="windows";;
        # All other Linux distros
        *Linux*)  cmd=xdg-open;;
        *) info_text "Don't know how to open URLs on "`uname`;;
    esac
    if [ "$cmd" == "windows" ] ; then
        (sleep 2; cmd.exe /c "start http://localhost:8000")&
    elif [ "$cmd" != "false" ] ; then
        (sleep 2;$cmd http://localhost:8000)&
    fi
else
    echo "What happened?"
fi

# Run django server
info_text "Starting server..."
"$py_env/python" "$root_dir/manage.py" runserver
