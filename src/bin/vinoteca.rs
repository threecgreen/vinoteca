use std::env;
use std::process;

#[rocket::main]
async fn main() {
    let args: Vec<_> = env::args().collect();
    if args.len() == 1 {
        let res = vinoteca::create_rocket().launch().await;
        if let Err(e) = res {
            print_error(&format!("Error launching rocket: {}", e));
        }
    } else {
        let option = &args[1];
        match option.as_str() {
            "-h" | "--help" => print_help(),
            "-V" | "--version" => print_version(),
            _ => {
                print_error(&format!("Unknown option '{}'", option));
                print_options();
                process::exit(1);
            }
        };
    }
}

fn print_error(text: &str) {
    // Bold red
    eprintln!("\x1b[1;31m{}\x1b[0m", text);
}

fn print_options() {
    println!("OPTIONS:");
    println!("    -h, --help: display help text");
    println!("    -V, --version: display current version");
}

fn print_help() {
    println!("vinoteca is a wine purchase tracking system.");
    println!();
    println!("Calling this command starts the web server");
    println!("    $ vinoteca [OPTIONS]");
    print_options();
}

fn print_version() {
    let version = env!("CARGO_PKG_VERSION");
    println!("vinoteca version {}", version);
}
