#!/usr/bin/env bash
# Run Python tests
source "$(dirname $0)/utils.sh"
find_python_env

if [ "$CI" == "true" ]; then
    "$py_env/pytest" --cov --cov-config="$root_dir/.coveragerc" "$root_dir" \
        --cov-report term-missing --create-db
else
    "$py_env/pytest" --cov --cov-config="$root_dir/.coveragerc" "$root_dir" \
        --cov-report=xml:shippable/codecoverage/coverage.xml \
        --create-db --junitxml=shippable/testresults/nosetests.xml
fi
