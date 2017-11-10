#! /bin/bash
echo "Backing up database"
dir="$(dirname $0)"
parentdir="$(dirname "$dir")"
cp -a $parentdir/data/wine.db "$parentdir/data/wine_$(date +"%y%m%d_%H%M%S").db"
source activate vinoteca
# Run browser
echo "Attempting to open browser..."
cmd=false
case `uname` in
    Darwin) cmd=open;;
    Linux)  cmd=xdg-open;;
    *) echo "Don't know how to open URLs on "`uname`;;
esac
if [ "$cmd" != "false" ] ; then
    (sleep 4;$cmd http://localhost:8000)&
fi
# Run django server
python manage.py runserver
