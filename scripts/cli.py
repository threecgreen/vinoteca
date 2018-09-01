#!/usr/bin/env python3
"""
Script for performing common vinoteca tasks:
    - run: running the local web server
    - test: run test suite
    - update: check and perform updates
    - lint: run code linters

Should be added to PATH with the update.sh script so that it can be run from
any directory. It relies on the other bash scripts in this directory (scripts),
however it is written in Python for easier argument parsing and extensibility.
Unlike the rest of the Python in this project, it only uses the standard
library and therefore uses the default environment Python3.
"""
import sys
from pathlib import Path
from subprocess import call


def print_error(text):
    # Bold red
    print(f"\033[1;31m{text}\033[0m", file=sys.stderr)


def print_subcommands(options):
    print("Available subcommands:")
    print("    ", end="")
    print(*options.keys(), sep="\n    ")


def vinoteca_help(options):
    print("vinoteca is a wine purchase tracking system.")
    print()
    print("Perform an action using the following format:")
    print("    $ vinoteca [subcommand] {optional arguments}")
    print_subcommands(options)


def main():
    scripts_dir = Path(__file__).parent
    options = {
        "help": None,
        "run": (scripts_dir / "run.sh").resolve(),
        "test": (scripts_dir / "test.sh").resolve(),
        "update": (scripts_dir / "update.sh").resolve(),
        "lint": (scripts_dir / "lint.sh").resolve(),
    }
    if len(sys.argv) == 1:
        print_error("Missing subcommand.\n")
        print_subcommands(options)
        return
    subcommand = sys.argv[1]
    if subcommand not in options.keys():
        # Invalid argument
        print_error(f"Invalid subcommand '{sys.argv[1]}'.\n")
        print_subcommands(options)
    elif subcommand == "help":
        vinoteca_help(options)
    else:
        # Run corresponding bash script
        call([options[subcommand], *sys.argv[2:]], cwd=scripts_dir)


if __name__ == '__main__':
    main()
