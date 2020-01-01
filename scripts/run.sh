#!/usr/bin/env bash
# Pass -n/--no-tab to not open a browser tab

source "$(dirname $0)/utils.sh"

parse_args()
# Parses command-line arguments by assigning them a variable. Pass with $@
{
    BACKUP_DB="false"
    NO_TAB="false"
    while [ "$1" != "" ]; do
        case $1 in
            -n | --no-tab)
                NO_TAB="true"
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
info_text "Running vinoteca $vinoteca_ver"

# Run browser if the user didn't pass --no-tab/-n
if [ $NO_TAB == "false" ]; then
    info_text "Attempting to open browser…"
    cmd=false
    case `uname -a` in
        # macOS
        *Darwin*) cmd=open;;
        # Windows Linux subsystem
        *Microsoft*) cmd="windows";;
        # All other Linux distros
        *Linux*)  cmd=xdg-open;;
        *) info_text "Don't know how to open URLs on "`uname`;;
    esac
    if [ "$cmd" == "windows" ] ; then
        (sleep 3; cmd.exe /c "start http://localhost:8000")&
    elif [ "$cmd" != "false" ] ; then
        (sleep 3;$cmd http://localhost:8000)&
    fi
fi

# Run django server
info_text "Starting server…"
cd $root_dir
cargo run
cd -
