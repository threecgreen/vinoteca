#! /bin/bash
set -e
dir="$(dirname $0)"
parentdir="$(dirname "$dir")"
echo "Updating project source..."
git reset --hard
git pull -r
source activate vinoteca
execstack -c $HOME/miniconda/lib/libcrypto.so.1.0.0

echo "Updating dependencies..."
conda update python -y
pip install -r $parentdir/requirements.txt

python $parentdir/manage.py migrate

echo
echo "Running test suite..."
bash $parentdir/test.sh
