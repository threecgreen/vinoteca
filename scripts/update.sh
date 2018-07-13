#!/usr/bin/env bash

error_exit()
# Function that exits after a fatal error. Prints error message in red
# bold text to STDERR.
#
# Accepts one argument:
#   string containing error message
{
    echo -e "\033[1;31mERROR: $1\033[0m" 1>&2
    exit 1
}

info_text()
# Function that prints text to STDOUT in a blue color to differentiate it from
# output from other programs called within the script.
#
# Accepts one argument:
#   string containing text
{
    echo -e "\033[1;34m$1\033[0m"
}

scripts_dir="$(dirname $0)"
root_dir="$(dirname "$scripts_dir")"

source activate vinoteca 2> /dev/null || error_exit "Failed to find vinoteca Python environment."
old_ver="$(python -c 'import vinoteca; print(vinoteca.__version__)')"

info_text "Updating project source..."
git reset --hard
git pull -r || error_exit "Failed to update source code."

# Sometimes needed in WSL
if [ -f $HOME/miniconda/lib/libcrypto.so.1.0.0 ]; then
    execstack -c $HOME/miniconda/lib/libcrypto.so.1.0.0
fi

info_text "Updating dependencies..."
conda update python -y || error_exit "Failed to update Python"
pip install -r "$root_dir/requirements.txt" || error_exit "Failed to install dependencies"

python "$root_dir/manage.py" migrate || error_exit "Failed to migrate database"

echo
info_text "Running test suite..."
bash "$scripts_dir/test.sh" || error_exit "Some tests failed. Some functionality might not work properly."

echo
new_ver="$(python -c 'import vinoteca; print(vinoteca.__version__)')"
if [ "$old_ver" != "$new_ver" ]; then
    info_text "Successfully updated vinoteca from version $old_ver to $new_ver"
fi

#read -rp "Would you like to add an alias for vinoteca to your .bashrc? [y/N] " response
#case "$response" in
#    [yY][eE][yY])_
#        # Add to .bashrc
#        echo -e "alias vinoteca=\"$scripts_dir/cli.py\"" >> $HOME/.bashrc
#        echo "Successfully added vinoteca alias..."
#        echo "Bash configuration will need to be reloaded to work."
#        echo "Either restart the terminal or run: "
#        echo "$ source ~/.bashrc"
#        ;;
#    *)
#        ;;
#esac
