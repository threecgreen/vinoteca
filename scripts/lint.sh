#!/usr/bin/env bash
# Run linters
source "$(dirname $0)/utils.sh"

if [ $(command -v pylint) ]; then
    info_text "Running Python linter."
    pylint "$root_dir/dashboards" "$root_dir/new_purchase" "$root_dir/rest" \
        "$root_dir/view" "$root_dir/vinoteca" \
        --rcfile="$root_dir/.pylintrc" --output-format=colorized
else
    info_text "Pylint not found; skipping..."
fi
if [ $(command -v tslint) ]; then
    info_text "Running Typescript linter."
    tslint -c "$root_dir/tslint.json" "$root_dir/**/*.ts" --exclude "$root_dir/node_modules"
else
    info_text "TSlint not found; skipping..."
fi
