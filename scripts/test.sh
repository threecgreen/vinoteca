#!/usr/bin/env bash
set -e
source activate vinoteca
scripts_dir="$(dirname $0)"
root_dir="$(dirname "$scripts_dir")"
pytest --cov --cov-config="$root_dir/tests/.coveragerc" "$root_dir" \
    --cov-report term-missing
