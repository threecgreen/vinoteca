use std::env;
use std::process;

fn run() {
    vinoteca::create_rocket().launch();
}

// TODO: convert to returning result
fn main() {
    let args: Vec<_> = env::args().collect();
    if args.len() == 1 {
        run()
    } else {
        let subcommand = &args[1];

        match subcommand.as_ref() {
            "-h" | "--help" | "help" => print_help(),
            "-v" | "--version" => print_version(),
            "run" => run(),
            _ => {
                print_error(&format!("Unknown subcommand '{}'", subcommand));
                print_subcommands();
                process::exit(1);
            }
        };
    }
}

fn print_error(text: &str) {
    // Bold red
    eprintln!("\x1b[1;31m{}\x1b[0m", text);
}

fn print_subcommands() {
    println!("Available subcommands:");
    println!("    help: display help text");
    println!("    run [--no-tab]: run the web server");
    println!("    update [--force]: download and extract the latest version of vinoteca");
}

fn print_help() {
    println!("vinoteca is a wine purchase tracking system.");
    println!();
    println!("Perform an action using the following format:");
    println!("    $ vinoteca SUBCOMMAND [...ARGS]");
    print_subcommands();
}

fn print_version() {
    let version = env!("CARGO_PKG_VERSION");
    println!("vinoteca version {}", version);
}
