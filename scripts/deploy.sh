#!/usr/bin/env bash
# Build release for use on render

source "$(dirname $0)/utils.sh"

rust_build release
js_install_and_build
