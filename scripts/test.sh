#! /bin/bash
set -e
source activate vinoteca
dir="$(dirname $0)"
parentdir="$(dirname "$dir")"
pytest --cov --cov-config="$parentdir/tests/.coveragerc" "$parentdir" --cov-report term-missing
