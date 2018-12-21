#!/usr/bin/env bash

source "$(dirname $0)/utils.sh"

parse_args()
# Parses command-line arguments by assigning them a variable. Pass with $@
{
    GIT_PULL="true"
    while [ $1 != "" ]; do
        case $1 in
            -g | --no-git-pull)
                GIT_PULL="false"
                ;;
            *)
                error_exit "Invalid argument $1"
                ;;
        esac
        shift
    done
}

parse_args $@
find_vinoteca_version
old_ver="$vinoteca_ver"
find_python_env

if [ $GIT_PULL = true ]; then
    info_text "Updating project source..."
    git stash
    git pull -r || error_exit "Failed to update source code."
fi

# Sometimes needed in WSL
if [ -f $HOME/miniconda/lib/libcrypto.so.1.0.0 ]; then
    execstack -c $HOME/miniconda/lib/libcrypto.so.1.0.0
fi

find_python_env
info_text "Updating dependencies..."
"$conda" env update -f environment.yml || error_exit "Failed to update Python"
info_text "Migrating database..."
"$py_env/python" "$root_dir/manage.py" migrate || error_exit "Failed to migrate database"

check_for_install

# Javascript
info_text "Installing NPM dependencies..."
check_for_node
cd vinoteca
"$py_env/npm" install --save-dev --no-optional || error_exit "Failed installing JavaScript dependencies"
"$py_env/npm" run-script build || error_exit "Failed building webpack bundles"
cd "$root_dir"

echo
info_text "Running test suite..."
bash "$scripts_dir/test.sh" || error_exit "Some tests failed. Some functionality might not work properly."

echo
find_vinoteca_version
if [ "$old_ver" != "$vinoteca_ver" ]; then
    info_text "Successfully updated vinoteca from version $old_ver to $vinoteca_ver"
fi
