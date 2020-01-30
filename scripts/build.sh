#!/usr/bin/env bash

source "$(dirname $0)/utils.sh"

check_for_install
rust_build
js_install_and_build
