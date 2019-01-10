#!/usr/bin/env bash
source "$(dirname $0)/utils.sh"

# Install script for Debian-based systems
# Get admin privileges before running
sudo echo

# Download Python
info_text "Downloading miniconda python..."
wget repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh

# Install Python
info_text "Installing python..."
bash Miniconda3-latest-Linux-x86_64.sh -p "$HOME/miniconda" -b

# Create environment
info_text "Creating 'vinoteca' virtual environment..."
if [ $CI != true ]; then
    execstack -c "$HOME/miniconda/lib/libcrypto.so.1.0.0"
fi
"$HOME/miniconda/bin/conda" env create -f environment.yml
find_python_env
info_text "Creating data and media directories..."
mkdir -p data
mkdir -p media
info_text "Creating database..."
"$py_env/python" "$root_dir/manage.py" migrate

check_for_install

# Javascript
info_text "Installing NPM dependencies..."
check_for_node
cd vinoteca
"$py_env/npm" install --no-optional || error_exit "Failed installing JavaScript dependencies"
info_text "Building webpack bundles..."
"$py_env/npm" run-script build || error_exit "Failed building webpack bundles"
cd "$root_dir"


# Finishing up
echo
info_text "Installation complete."
