#!/usr/bin/env bash
# Downloads and extracts latest release

curl --silent "https://api.github.com/repos/threecgreen/vinoteca/releases/latest" | # Get latest release from GitHub api
    grep '"tag_name":' |                                                            # Get tag line
    sed -E 's/.*"([^"]+)".*/\1/' |
    xargs -I {} curl -sOL "https://github.com/threecgreen/vinoteca/archive/"\{\}'.tar.gz'
tar -xzf *.tar.gz
cd vinoteca
