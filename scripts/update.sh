#!/usr/bin/env bash

source "$(dirname $0)/utils.sh"

parse_args()
# Parses command-line arguments by assigning them a variable. Pass with $@
{
    GIT_PULL="true"
    FORCE_UPDATE="false"
    FAST_UPDATE="false"
    while [ "$1" != "" ]; do
        case "$1" in
            -g | --no-git-pull)
                GIT_PULL="false"
                ;;
            -f | --force)
                FORCE_UPDATE="true"
                ;;
            --fast)
                FAST_UPDATE="true"
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

if [ "$GIT_PULL" = true ]; then
    info_text "Updating project source..."
    # Check for clean directory
    if [ -n "$(git status -uno --porcelain)" ]; then
        git stash
    fi
    git remote update
    # Check for clean directory
    git status -uno | grep 'behind'
    if [ $? = 0 ]; then
        git pull -r || error_exit "Failed to update source code."
    elif [ "$FORCE_UPDATE" != true ]; then
        info_text "Up to date."
        exit 0;
    fi
fi

check_for_install

rust_build
js_install_and_build

if [ "$FAST_UPDATE" = false ]; then
    echo
    info_text "Running test suite..."
    bash "$scripts_dir/test.sh" || error_exit "Some tests failed. Some functionality might not work properly."
fi

echo
find_vinoteca_version
if [ "$old_ver" != "$vinoteca_ver" ]; then
    info_text "Successfully updated vinoteca from version $old_ver to $vinoteca_ver"
fi
