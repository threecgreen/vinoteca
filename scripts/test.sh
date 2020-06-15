#!/usr/bin/env bash
# Run unit tests
source "$(dirname $0)/utils.sh"

cd "$root_dir"
if [ "$CI" == "true" ]; then
    cargo test --verbose || error_exit "Rust test(s) failed"
else
    cargo test || error_exit "Rust test(s) failed"
fi
cd -
cd "$root_dir/web"
npm run test || error_exit "JS test(s) failed"
cd -
