#!/usr/bin/env bash
source "$(dirname $0)/utils.sh"

# Install script for Debian-based systems
# Get admin privileges before running
sudo echo
# Assumes nothing is installed
info_text "Updating system..."
sudo apt-get -y update
sudo apt-get -y upgrade
sudo apt-get -y install git execstack nodejs

# Download Python
info_text "Downloading Miniconda Python distribution..."
wget repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh

# Install Python
info_text "Installing..."
bash Miniconda3-latest-Linux-x86_64.sh -p $HOME/miniconda -b
# add miniconda to PATH
info_text -e "export PATH=\"\$HOME/miniconda/bin:\$PATH\"" >> "$HOME/.bashrc"
bin="$HOME/miniconda/bin"

# Create environment
info_text "Creating a new python virtual environment called 'vinoteca'..."
if [ "$CI" != "true" ]; then
    execstack -c "$HOME/miniconda/lib/libcrypto.so.1.0.0"
fi
$bin/conda create -n vinoteca -y python=3.6
find_python_env
echo "$py_env"
echo
info_text "$(ls /root/miniconda/envs/vinoteca/bin) -al"
echo
info_text "$(ls /root/miniconda/bin -al)"
echo
info_text "Installing vinoteca dependencies..."
$py_env/pip install -r requirements.txt

# Javascript
info_text "Installing NPM dependencies..."
check_for_node
cd vinoteca
npm install --save --no-optional
info_text "Building webpack bundles..."
npm run-script build
cd "$root_dir"

# Finishing up
echo
info_text "Installation complete."
echo

