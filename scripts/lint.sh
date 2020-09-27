#!/usr/bin/env bash
source "$(dirname $0)/utils.sh"
find_tslint

rust()
{
    info_text "Running rust linter."
    cd $root_dir
    if [ "$CI" = "true" ]; then
        rustup component add clippy --toolchain nightly-x86_64-unknown-linux-gnu || return 0
    fi
    cargo clippy || error_exit "Clippy error(s)"
    cd -
}

typescript()
# Runs typescript linter called tslint
{
    info_text "Running Typescript linter."
    cd "$root_dir/web"
    npm run lint || error_exit "ESLint error(s)"
    cd -
}

case $# in
    0)
        rust
        typescript
        ;;
    1)
        if [ $1 = "rust" ]; then
            rust
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
