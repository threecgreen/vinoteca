#! /bin/bash
echo "Backing up database"
dir="$(dirname $0)"
parentdir="$(dirname "$dir")"
cp -a $parentdir/data/wine.db "$parentdir/data/wine_$(date +"%y%m%d_%H%M%S").db"
source activate vinoteca
python manage.py runserver
