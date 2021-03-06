#!/usr/bin/env bash
# Contains utility functions for vinoteca bash scripts

# Print each line in continuous integration
if [ "$CI" == "true" ]; then
    set -x
fi

# Important filesystem locations
scripts_dir="$(cd "$(dirname "$0")" || exit ; pwd -P )"
root_dir="$(dirname "$scripts_dir")"

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

check_for_node()
{
    command -v npm > /dev/null 2>&1
    if [ $? != 0 ]; then
        error_exit "npm is not installed."
    fi
    node -v
    npm -v
}

rust_build()
{
    info_text "Building web server…"
    cd "$root_dir" || exit
    if [ "$1" = "release" ]; then
        cargo build --release || error_exit "Failed build rust web server"
        cargo run --release --bin gen_contracts || error_exit "Failed generating contracts"
    else
        cargo build || error_exit "Failed build rust web server"
        cargo run --bin gen_contracts || error_exit "Failed generating contracts"
    fi
    cd - || exit
}

js_install_and_build()
{
    info_text "Building web application…"
    check_for_node
    cd "$root_dir/web" || exit
    if [ "$CI" == "true" ]; then
        npm ci --dev || error_exit "Failed installing JavaScript dependencies"
    else
        npm ci || error_exit "Failed installing JavaScript dependencies"
    fi
    npm run-script build || error_exit "Failed building webpack bundles"
    cd - || exit
}

find_tslint()
{
    command -v tslint > /dev/null 2>&1
    if [ $? = 0 ]; then
        export tslint="tslint"
    else
        export tslint="$root_dir/web/node_modules/.bin/tslint"
    fi
}
