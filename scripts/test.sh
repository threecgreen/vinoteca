#!/usr/bin/env bash
# Run Python tests
source "$(dirname $0)/utils.sh"
find_python_env

if [ "$CI" == "true" ]; then
    "$py_env/pytest" --cov --cov-branch --cov-config="$root_dir/.coveragerc" "$root_dir" \
        --cov-report=xml:shippable/codecoverage/coverage.xml \
        --junitxml=shippable/testresults/nosetests.xml
else
    "$py_env/pytest" --cov --cov-branch --cov-config="$root_dir/.coveragerc" "$root_dir" \
        --cov-report term-missing
fi
