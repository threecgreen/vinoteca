#! /bin/bash
# Get admin privileges before running
sudo echo
echo "Update project"
git pull -r
source activate vinoteca
execstack -c $HOME/miniconda/lib/libcrypto.so.1.0.0
pip install -r ../requirements.txt
echo "Updating system"
sudo apt-get -y update
sudo apt-get -y upgrade
