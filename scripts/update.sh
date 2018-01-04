#! /bin/bash
# Get admin privileges before running
sudo echo
dir="$(dirname $0)"
parentdir="$(dirname "$dir")"
echo "Updating project source..."
git pull -r
source activate vinoteca
execstack -c $HOME/miniconda/lib/libcrypto.so.1.0.0

echo "Updating dependencies..."
pip install -r $parentdir/requirements.txt

python $parentdir/manage.py migrate
