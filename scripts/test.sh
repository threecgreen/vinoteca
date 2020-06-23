#!/usr/bin/env bash
# Run unit tests
source "$(dirname $0)/utils.sh"

cargo test || error_exit "Rust test(s) failed"
cd "$root_dir/web"
npm run test || error_exit "JS test(s) failed"
cd -
