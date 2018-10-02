#!/usr/bin/env bash

source "$(dirname $0)/utils.sh"

parse_args()
# Parses command-line arguments by assigning them a variable. Pass with $@
{
    SYS_UPGRADE="true"
    GIT_PULL="true"
    while [ "$1" != "" ]; do
        case $1 in
            -g | --no-git-pull)
                GIT_PULL="false"
                ;;
            -s | --no-sys-upgrade)
                SYS_UPGRADE="false"
                ;;
            *)
                error_exit "Invalid argument $1"
                ;;
        esac
        shift
    done
}

parse_args $@
old_ver="$(cat "$root_dir/vinoteca/__init__.py" | awk 'NR==1 {print $3}' | sed 's/\"//g')"
find_python_env

if [ "$GIT_PULL" = "true" ]; then
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
if [ "$SYS_UPGRADE" = "true" ]; then
    "$conda" update python -y || error_exit "Failed to update Python"
fi
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
