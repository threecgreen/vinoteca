#!/usr/bin/env bash
# One-time script to migrate from Python to Rust
source "$(dirname $0)/utils.sh"

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

# Acquire sudo
sudo echo

# Check if dpkg is installed
command -v dpkg
if [ "$?" != "0" ]; then
    error_exit "dpkg needs to be installed for this script to work"
fi

find_python_env

# Remove link
sudo rm /usr/local/bin/vinoteca

# Download latest version
curl --silent "https://api.github.com/repos/threecgreen/vinoteca/releases/latest" |
    grep '"tag_name":' |
    sed -E 's/.*"([^"]+)".*/\1/' |
    xargs -I {} curl -sOL "https://github.com/threecgreen/vinoteca/archive/vinoteca_"{}'_amd64.deb'

# Install
sudo dpkg -i vinoteca*.deb || error_exit "Failed to install vinoteca package"

# Migrate configs
sudo "$py_env/python" "$scripts_dir/migrate_conf.py" || error_exit "Failed to migrate configs"

# Clean up folders
cp "$root_dir/vinoteca/config.yaml" "$root_dir/config.yaml.bak"
rm -r dashboards
rm -r places
rm -r producers
rm -r rest
rm -r vinoteca
rm -r wine_attrs
rm -r wines
