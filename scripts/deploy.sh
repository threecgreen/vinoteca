#!/usr/bin/env bash

source "$(dirname $0)/utils.sh"

rust_build release
js_install_and_build
