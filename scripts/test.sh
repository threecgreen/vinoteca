#!/usr/bin/env bash
# Run unit tests
source "$(dirname $0)/utils.sh"

cd "$root_dir"
if [ "$CI" == "true" ]; then
    cargo test --verbose || error_exit "Test(s) failed"
else
    cargo test || error_exit "Test(s) failed"
fi
cd -
