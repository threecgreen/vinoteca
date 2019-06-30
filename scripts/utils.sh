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

find_python_env()
# Function that tries to locate the vinoteca Python environment and the conda path
# Accepts zero arguments
# Will exit the program if the environment cannot be found
{
    # Check cache
    if [ -f "$scripts_dir/.py_env.cache" ] &&  [ -f "$scripts_dir/.conda.cache" ]; then
        py_env="$(cat "$scripts_dir/.py_env.cache")"
        conda="$(cat "$scripts_dir/.conda.cache")"
        update_path
        return 0
    fi
    command -v conda > /dev/null 2>&1
    if [ $? = 0 ]; then
        py_env="$(conda env list | grep vinoteca | awk '{print $2}')/bin"
        conda="conda"
    elif [ -f "/opt/anaconda/bin/conda" ]; then
        conda="/opt/anaconda/bin/conda"
        py_env="$($conda env list | grep vinoteca | awk '{print $2}')/bin"
    elif [ -f "$HOME/.conda/bin/conda" ]; then
        conda="$HOME/.conda/bin/conda"
        py_env="$($conda env list | grep vinoteca | awk '{print $2}')/bin"
    else
        error_exit "Failed to find vinoteca Python environment."
    fi
    # Handle when env is active
    if [ "$py_env" = '*/bin' ]; then
        py_env="$($conda env list | grep vinoteca | awk '{print $3}')/bin"
    fi
    # Test length of environment variable
    if [ ${#py_env} = 0 ]; then
        error_exit "Failed to find vinoteca Python environment."
    fi
    # Cache to file
    echo $py_env > "$scripts_dir/.py_env.cache"
    echo $conda > "$scripts_dir/.conda.cache"
    update_path
}

find_vinoteca_version()
{
    local git_ver="$(git --git-dir="$root_dir/.git" --work-tree="$root_dir" branch | grep \* | cut -d' ' -f2)"
    vinoteca_ver="$(cat "$root_dir/vinoteca/__init__.py" | awk 'NR==2 {print $3}' | sed 's/\"//g')-$git_ver"
}

check_for_node()
{
    command -v "$py_env/npm" > /dev/null 2>&1
    if [ $? != 0 ]; then
        error_exit "NPM is not installed."
    fi
}

js_install_and_build()
{
    info_text "Installing JavaScript dependencies..."
    check_for_node
    cd vinoteca
    "$py_env/npm" ci || error_exit "Failed installing JavaScript dependencies"
    info_text "Building webpack bundles..."
    "$py_env/npm" run-script build || error_exit "Failed building webpack bundles"
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
        if [ $CI ]; then
            ln -s "$scripts_dir/cli.py" /usr/local/bin/vinoteca
        else
            sudo ln -s "$scripts_dir/cli.py" /usr/local/bin/vinoteca
        fi
    fi
}
