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

read -rp "Would you like to add an alias for vinoteca to your .bashrc? [y/N] " response
case "$response" in
    [yY][eE][yY])_
        # Add to .bashrc
        echo -e "alias vinoteca=\"$scripts_dir/cli.py\"" >> $HOME/.bashrc
        echo "Successfully added vinoteca alias..."
        echo "Bash configuration will need to be reloaded to work."
        echo "Either restart the terminal or run: "
        echo "$ source ~/.bashrc"
        ;;
    *)
        ;;
esac
