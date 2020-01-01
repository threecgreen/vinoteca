#!/usr/bin/env bash
# Run Python tests
source "$(dirname $0)/utils.sh"
find_python_env

cd "$root_dir"
if [ "$CI" == "true" ]; then
    cargo test
    # "$py_env/pytest" --cov=. --cov-branch --cov-config="$root_dir/.coveragerc" \
        # --cov-report=xml:shippable/codecoverage/coverage.xml \
        # --junitxml=shippable/testresults/nosetests.xml
else
    cargo test
fi
cd -

