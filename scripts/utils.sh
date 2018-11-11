#!/usr/bin/env bash
# Contains utility functions for vinoteca bash scripts

# Print each line in continuous integration
if [ "$CI" == "true" ]; then
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

find_python_env()
# Function that tries to locate the vinoteca Python environment and the conda path
# Accepts zero arguments
# Will exit the program if the environment cannot be found
{
    # Check cache
    if [ -f "$scripts_dir/.py_env.cache" ] &&  [ -f "$scripts_dir/.conda.cache" ]; then
        py_env="$(cat "$scripts_dir/.py_env.cache")"
        conda="$(cat "$scripts_dir/.conda.cache")"
        return 0
    fi
    command -v conda > /dev/null 2>&1
    if [ $? == 0 ]; then
        py_env="$(conda env list | grep vinoteca | awk '{print $2}')/bin"
        conda="conda"
    elif [ -f "/opt/anaconda/bin/conda" ]; then
        conda="/opt/anaconda/bin/conda"
        py_env="$($conda env list | grep vinoteca | awk '{print $2}')/bin"
    elif [ "$CI" == true ]; then
        py_env="/root/miniconda/envs/vinoteca/bin"
        conda="/root/miniconda/bin/conda"
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
        error_exit "Node is not installed."
    fi
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
