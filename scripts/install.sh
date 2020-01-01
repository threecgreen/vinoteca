#!/usr/bin/env bash
source "$(dirname $0)/utils.sh"

# Install script for Debian-based systems
# Get admin privileges before running
sudo echo

info_text "Installing rust, npm and SQLite…"
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
sudo apt install npm libsqlite3-dev

info_text "Creating data and media directories…"
mkdir -p data
mkdir -p media
info_text "Creating database…"
"$py_env/python" "$root_dir/manage.py" migrate || error_exit "Failed to create database"
"$py_env/python" "$root_dir/manage.py" migrate dashboards || error_exit "Failed to migrate database"
"$py_env/python" "$root_dir/manage.py" migrate wines || error_exit "Failed to migrate database"

check_for_install

rust_build
js_install_and_build

# Finishing up
echo
info_text "Installation complete."
