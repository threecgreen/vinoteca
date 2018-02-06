#!/usr/bin/env bash
set -e
scripts_dir="$(dirname $0)"
root_dir="$(dirname "$scripts_dir")"

# Only backup db if --backup-db arg passed
if [ "$1" == "--backup-db" ]; then
    echo "Backing up database..."
    cp -a "$root_dir/data/wine.db" "$root_dir/data/wine_$(date +"%y%m%d_%H%M%S").db"
fi

source activate vinoteca
# Run browser
echo "Attempting to open browser..."
cmd=false
case `uname -a` in
    # macOS
    *Darwin*) cmd=open;;
    # Windows Linux subsystem
    *Microsoft*) cmd="windows";;
    # All other Linux distros
    *Linux*)  cmd=xdg-open;;
    *) echo "Don't know how to open URLs on "`uname`;;
esac
if [ "$cmd" == "windows" ] ; then
    (sleep 4; cmd.exe /c "start http://localhost:8000")&
elif [ "$cmd" != "false" ] ; then
    (sleep 4;$cmd http://localhost:8000)&
fi
# Run django server
echo "Starting server..."
python "$root_dir/manage.py" runserver
