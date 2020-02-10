#!/usr/bin/env bash

source "$(dirname $0)/utils.sh"

rust_build release
js_install_and_build
mkdir vinoteca
cp ./target/release/server vinoteca/vinoteca
strip ./vinoteca/vinoteca
cp -r ./web/static vinoteca

tar --create --gzip --file vinoteca.tar.gz vinoteca
