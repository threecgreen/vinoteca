#!/usr/bin/env bash
# shellcheck source=scripts/utils.sh
source "$(dirname "$0")/utils.sh"
find_tslint

rust()
{
    info_text "Running rust linter."
    cd "$root_dir" || exit
    if [ "$CI" = "true" ]; then
        rustup component add clippy --toolchain nightly-x86_64-unknown-linux-gnu || return 0
    fi
    cargo clippy -- --deny warnings || error_exit "Clippy error(s)"
    cd - || exit
}

typescript()
# Runs typescript linter called tslint
{
    info_text "Running Typescript linter."
    cd "$root_dir/web" || exit
    npm run lint || error_exit "ESLint error(s)"
    cd - || exit
}

case $# in
    0)
        rust
        typescript
        ;;
    1)
        if [ "$1" = "rust" ]; then
            rust
        elif [ "$1" = "typescript" ]; then
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
