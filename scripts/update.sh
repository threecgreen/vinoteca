#!/usr/bin/env bash

source "$(dirname $0)/utils.sh"

old_ver="$(cat "$root_dir/vinoteca/__init__.py" | awk 'NR==1 {print $3}' | sed 's/\"//g')"

info_text "Updating project source..."
git stash
git pull -r || error_exit "Failed to update source code."

# Sometimes needed in WSL
if [ -f $HOME/miniconda/lib/libcrypto.so.1.0.0 ]; then
    execstack -c $HOME/miniconda/lib/libcrypto.so.1.0.0
fi

find_python_env
info_text "Updating dependencies..."
"$conda" update python -y || error_exit "Failed to update Python"
"$py_env/pip" install -r "$root_dir/requirements.txt" || error_exit "Failed to install dependencies"

"$py_env/python" "$root_dir/manage.py" migrate || error_exit "Failed to migrate database"

echo
info_text "Running test suite..."
bash "$scripts_dir/test.sh" || error_exit "Some tests failed. Some functionality might not work properly."

echo
new_ver="$(cat "$root_dir/vinoteca/__init__.py" | awk 'NR==1 {print $3}' | sed 's/\"//g')"
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
