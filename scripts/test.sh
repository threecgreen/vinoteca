#!/usr/bin/env bash
# Run unit tests
# shellcheck source=scripts/utils.sh
source "$(dirname "$0")/utils.sh"

cargo test || error_exit "Rust test(s) failed"
cd "$root_dir/web" || exit
npm run test || error_exit "JS test(s) failed"
cd -
