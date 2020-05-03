use std::env;
use std::error::Error;
use std::process;

fn run() -> Result<(), impl Error> {
    vinoteca::create_rocket().launch()
}

// TODO: convert to returning result
fn main() -> Result<(), impl Error> {
    let args: Vec<_> = env::args().collect();
    if args.len() == 1 {
        run()
    } else {
        let subcommand = &args[1];

        match subcommand.as_ref() {
            "-h" | "--help" => print_help(),
            "-v" | "--version" => print_version(),
            _ => {
                print_error(&format!("Unknown argument '{}'", subcommand));
                print_args();
                process::exit(1);
            }
        }
        Ok(())
    }
}

fn print_error(text: &str) {
    // Bold red
    eprintln!("\x1b[1;31m{}\x1b[0m", text);
}

fn print_args() {
    println!("Args:");
    println!("    -h , --help: display help text");
    println!("    -v , --version: display version");
}

fn print_help() {
    println!("vinoteca is a wine purchase tracking system.");
    println!();
    print_args();
}

fn print_version() {
    let version = env!("CARGO_PKG_VERSION");
    println!("vinoteca version {}", version);
}
