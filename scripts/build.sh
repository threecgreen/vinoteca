#!/usr/bin/env bash
# shellcheck source=scripts/utils.sh
source "$(dirname "$0")/utils.sh"

rust_build
js_install_and_build
