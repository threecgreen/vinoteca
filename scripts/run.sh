#! /bin/bash
echo "Backing up database..."
dir="$(dirname $0)"
parentdir="$(dirname "$dir")"
cp -a $parentdir/data/wine.db "$parentdir/data/wine_$(date +"%y%m%d_%H%M%S").db"
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
python manage.py runserver
