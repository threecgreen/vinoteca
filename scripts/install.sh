#!/usr/bin/env bash
source "$(dirname $0)/utils.sh"

# Install script for Debian-based systems
# Get admin privileges before running
sudo echo

# Download Python
info_text "Downloading miniconda python..."
wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh || error_exit "Failed to download miniconda"

# Install Python
info_text "Installing python..."
bash Miniconda3-latest-Linux-x86_64.sh -p "$HOME/miniconda" -b || error_exit "Failed to install miniconda"
# Add to path
echo 'export PATH="$HOME/miniconda/bin:$PATH"' >> "$HOME/.bashrc"
export PATH="$HOME/miniconda/bin:$PATH"

# Create environment
info_text "Creating 'vinoteca' virtual environment..."
if [ "$CI" != true ]; then
    execstack -c "$HOME/miniconda/lib/libcrypto.so.1.0.0"
fi
conda env create -f "$root_dir/environment.yml" || error_exit "Failed to create conda environment"
find_python_env
info_text "Creating data and media directories..."
mkdir -p data
mkdir -p media
info_text "Creating database..."
"$py_env/python" "$root_dir/manage.py" migrate || error_exit "Failed to create database"
"$py_env/python" "$root_dir/manage.py" migrate dashboards || error_exit "Failed to migrate database"

check_for_install

# Javascript
js_install_and_build

# Finishing up
echo
info_text "Installation complete."
