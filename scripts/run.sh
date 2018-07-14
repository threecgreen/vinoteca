#!/usr/bin/env bash

error_exit()
# Function that exits after a fatal error. Prints error message in red
# bold text to STDERR.
#
# Accepts one argument:
#   string containing error message
{
    echo -e "\033[1;31mERROR: $1\033[0m" 1>&2
    exit 1
}

info_text()
# Function that prints text to STDOUT in a blue color to differentiate it from
# output from other programs called within the script.
#
# Accepts one argument:
#   string containing text
{
    echo -e "\033[1;34m$1\033[0m"
}

scripts_dir="$(dirname $0)"
root_dir="$(dirname "$scripts_dir")"

# Only backup db if --backup-db arg passed
if [ "$1" == "--backup-db" ]; then
    info_text "Backing up database..."
    cp -a "$root_dir/data/wine.db" "$root_dir/data/wine_$(date +"%y%m%d_%H%M%S").db"
fi

source activate vinoteca 2> /dev/null || error_exit "Failed to find vinoteca Python environment."
# Run browser
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
    (sleep 4; cmd.exe /c "start http://localhost:8000")&
elif [ "$cmd" != "false" ] ; then
    (sleep 4;$cmd http://localhost:8000)&
fi
# Run django server
info_text "Starting server..."
python "$root_dir/manage.py" runserver
