#!/usr/bin/env python3
"""
Script for performing common vinoteca tasks:
    - run: running the local web server
    - test: run test suite
    - update: check and perform updates

Should be added to PATH with the update.sh script so that it can be run from
any directory. It relies on the other bash scripts in this directory (scripts),
however it is written in Python for easier argument parsing and extensibility.
Unlike the rest of the Python in this project, it only uses the standard
library and therefore uses the default environment Python3.
"""
import sys
from pathlib import Path
from subprocess import call


def print_subcommands(options):
    print("Available subcommands:")
    print("    ", end="")
    print(*options.keys(), sep="\n    ")


def vinoteca_help(options):
    print("vinoteca is a wine purchase tracking system.")
    print()
    print("Perform an action using the following format:")
    print("    $ vinoteca [subcommand]")
    print_subcommands(options)


def main():
    scripts_dir = Path(__file__).parent
    options = {
        "help": None,
        "run": (scripts_dir / "run.sh").resolve(),
        "test": (scripts_dir / "test.sh").resolve(),
        "update": (scripts_dir / "update.sh").resolve(),
    }
    if len(sys.argv) == 1:
        print(f"Missing subcommand", file=sys.stderr)
        print()
        print_subcommands(options)
    elif len(sys.argv) == 2:
        subcommand = sys.argv[1]
        if subcommand not in options.keys():
            # Invalid argument
            print(f"Invalid subcommand '{sys.argv[1]}'.", file=sys.stderr)
            print()
            print_subcommands(options)
        elif subcommand == "help":
            vinoteca_help(options)
        else:
            # Run corresponding bash script
            call([options[subcommand]], cwd=scripts_dir)
    else:
        print("Too many arguments.", file=sys.stderr)
        print()
        print("Run vinoteca with a subcommand.")
        print()
        print_subcommands(options)


if __name__ == '__main__':
    main()
