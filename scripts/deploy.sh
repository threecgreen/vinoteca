#!/usr/bin/env bash

source "$(dirname $0)/utils.sh"

rust_build release
js_install_and_build
mkdir out
cp ./target/release/vinoteca out
strip out/vinoteca
cp -r static out

tar --create --gzip --file vinoteca.tar.gz --directory=out
