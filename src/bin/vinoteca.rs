extern crate vinoteca;

use std::env;
use std::process;

fn print_error(text: &str) {
    // Bold red
    eprintln!("\033[1;31m{}\033[0m", text);
}

fn print_subcommands() {
    println!("Available subcommands:");
    println!("    help: display help text");
    println!("    run: run the web server");
    println!("    update: download and extract the latest version of vinoteca");
}

fn print_help() {
    println!("vinoteca is a wine purchase tracking system.");
    println!("");
    println!("Perform an action using the following format:");
    println!("    $ vinoteca SUBCOMMAND [...ARGS]");
    print_subcommands();
}

fn run(args: Vec<String>) {
    vinoteca::create_rocket().launch();
    // TODO: attempt to open browser window
}

fn update() {
    process::Command::new(include_str!("../../scripts/update.sh"))
        .spawn()
        .expect("Failed to execute update script");
    // TODO: run database migrations and any other necessary work here
}

fn main() {
    let args: Vec<_> = env::args().collect();
    if args.len() == 1 {
        print_error("Missing subcommand.\n");
        print_subcommands();
        process::exit(1);
    }
    let subcommand = &args[1];

    match subcommand.as_ref() {
        "-h" | "--help" | "help" => print_help(),
        "run" => run(args),
        "update" => update(),
        _ => {
            print_error(&format!("Unknown subcommand '{}'", subcommand));
            print_subcommands();
            process::exit(2);
        }
    };
}
