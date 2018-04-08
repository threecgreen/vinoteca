#!/usr/bin/env bash
scripts_dir="$(dirname $0)"
root_dir="$(dirname "$scripts_dir")"
echo "Updating project source..."
git reset --hard
git pull -r
source activate vinoteca || (echo "No Python environment 'vinoteca'." && exit 1)
# Sometimes needed in WSL
if [ -f $HOME/miniconda/lib/libcrypto.so.1.0.0 ]; then
    execstack -c $HOME/miniconda/lib/libcrypto.so.1.0.0
fi

echo "Updating dependencies..."
conda update python -y
pip install -r "$root_dir/requirements.txt"

python "$root_dir/manage.py" migrate

echo
echo "Running test suite..."
bash "$scripts_dir/test.sh" || \
    echo "Some tests failed. Some functionality might not work properly."

echo
echo "Checking for vinoteca alias..."
command -v vinoteca
# grep will return 0 if found
if [ $? -ne 0 ]; then
    # Add executable ability to all scripts
    chmod +x "$scripts_dir/cli.py"
    find "$scripts_dir" -name "*.sh" -exec chmod +x {} \;
    # Add to PATH and .bashrc
    echo -e "alias vinoteca=\"$scripts_dir/cli.py\"" >> $HOME/.bashrc
    alias vinoteca="$scripts_dir/cli.py"
    echo "Successfully added vinoteca alias..."
    echo "Bash configuration will need to be reloaded to work."
    echo "Either restart the terminal or run: "
    echo "$ source ~/.bashrc"
else
    echo "vinoteca alias already exists."
fi
