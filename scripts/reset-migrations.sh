#!/usr/bin/env bash
set -e
scripts_dir="$(dirname $0)"
root_dir="$(dirname "$scripts_dir")"

source activate vinoteca || (echo "No Python environment 'vinoteca'." && exit 1)

# Delete old migrations files
cd "$root_dir"
rm -rf vinoteca/migrations
python manage.py migrate --fake
python manage.py makemigrations vinoteca
python manage.py migrate --fake-initial
