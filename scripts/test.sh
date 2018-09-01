#!/usr/bin/env bash
# Run Python tests
source "$(dirname $0)/utils.sh"
find_python_env

"$py_env/pytest" --cov --cov-config="$root_dir/tests/.coveragerc" "$root_dir" \
    --cov-report term-missing --create-db
