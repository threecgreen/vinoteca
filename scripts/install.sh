#! /bin/bash
# Install script for Debian-based systems
# Get admin privileges before running
sudo echo
# Assumes nothing is installed
echo "Updating system"
sudo apt-get -y update
sudo apt-get -y upgrade
sudo apt-get -y install git execstack

# Download Python
echo "Downloading Miniconda Python distribution"
wget repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh

# Install Python
echo "Installing..."
bash Miniconda3-latest-Linux-x86_64.sh -p $HOME/miniconda -b
# add miniconda to PATH
echo -e "export PATH=\"\$HOME/miniconda/bin:\$PATH\"" >> $HOME/.bashrc
conda=$HOME/miniconda/bin/conda

# Create environment
echo "Creating a new python virtual environment called 'vinoteca'"
execstack -c $HOME/miniconda/lib/libcrypto.so.1.0.0
$conda create -n vinoteca -y python=3.6
source activate vinoteca
echo "Installing vinoteca dependencies..."
pip install -r requirements.txt

# Finishing up
echo
echo "Installation complete"
echo "run '$ python manage.py runserver' to begin running Web app."
