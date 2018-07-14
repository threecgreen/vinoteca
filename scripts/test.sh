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

source activate vinoteca 2> /dev/null || error_exit "Failed to find vinoteca Python environment."
scripts_dir="$(dirname $0)"
root_dir="$(dirname "$scripts_dir")"
pytest --cov --cov-config="$root_dir/tests/.coveragerc" "$root_dir" \
    --cov-report term-missing
