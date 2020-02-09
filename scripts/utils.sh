#!/usr/bin/env bash
# Contains utility functions for vinoteca bash scripts

# Print each line in continuous integration
if [ $CI ]; then
    set -x
fi

# Important filesystem locations
scripts_dir="$(cd "$(dirname "$0")" ; pwd -P )"
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

update_path()
# Adds vinoteca environment to path
{
    export PATH="$PATH:$py_env"
}

find_vinoteca_version()
{
    local git_ver="$(git --git-dir="$root_dir/.git" --work-tree="$root_dir" branch | grep \* | cut -d' ' -f2)"
    vinoteca_ver="$(cat "$root_dir/vinoteca/__init__.py" | awk 'NR==2 {print $3}' | sed 's/\"//g')-$git_ver"
}

check_for_node()
{
    command -v npm > /dev/null 2>&1
    if [ $? != 0 ]; then
        error_exit "npm is not installed."
    fi
}

rust_build()
{
    info_text "Building web server…"
    cd $root_dir
    local flag
    if [ $1 = "release" ]; then
        flag="--release"
    else
        flag="--verbose"
    fi
    cargo build "$flag" || error_exit "Failed build rust web server"
    cargo run "$flag" --bin gen_contracts || error_exit "Failed generating contracts"
    cd -
}

js_install_and_build()
{
    info_text "Building web application…"
    check_for_node
    cd "$root_dir/vinoteca"
    npm ci || error_exit "Failed installing JavaScript dependencies"
    npm run-script build || error_exit "Failed building webpack bundles"
    cd -
}

find_tslint()
{
    command -v tslint > /dev/null 2>&1
    if [ $? = 0 ]; then
        tslint="tslint"
    else
        tslint="$root_dir/vinoteca/node_modules/.bin/tslint"
    fi
}

check_for_install()
{
    command -v vinoteca > /dev/null 2>&1
    if [ $? != 0 ]; then
        info_text "Adding vinoteca CLI to PATH..."
        sudo ln -s "$scripts_dir/cli.py" /usr/local/bin/vinoteca
    fi
}
