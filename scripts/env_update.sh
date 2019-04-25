#!/usr/bin/env bash
# Updates the environment.yml file
source "$(dirname $0)/utils.sh"
find_python_env
"$conda" env export --no-builds | sed '/prefix:/d' > "$root_dir/environment.yml"
