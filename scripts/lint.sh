#!/usr/bin/env bash
# Runs code linters. If no arguments are specified, all linters are run. To
# run a specific linter, pass the name of the language. For example:
# $ ./lint.sh python
# will pylint, the Python linter.
source "$(dirname $0)/utils.sh"
find_python_env
find_tslint

pylint()
# Runs Python linter called pylint
{
    info_text "Running Python linter."
    "$py_env/pylint" "$root_dir/dashboards" "$root_dir/places" "$root_dir/producers" \
        "$root_dir/rest" "$root_dir/vinoteca" "$root_dir/wine_attrs" "$root_dir/wines" \
        --rcfile="$root_dir/.pylintrc" --output-format=colorized
}

typescript()
# Runs typescript linter called tslint
{
    info_text "Running Typescript linter."
    "$tslint" -c "$root_dir/tslint.json" "$root_dir/vinoteca/front_end/**/*.ts" \
            "$root_dir/vinoteca/lib/**/*.ts" "$root_dir/vinoteca/@types/**/*.ts"
}

case $# in
    0)
        pylint
        typescript
        ;;
    1)
        if [ $1 = "python" ]; then
            pylint
        elif [ $1 = "typescript" ]; then
            typescript
        else
            error_exit "Unknown linter type."
        fi
        ;;
    *)
        error_exit "Invalid number of arguments."
        ;;
esac
exit 0
