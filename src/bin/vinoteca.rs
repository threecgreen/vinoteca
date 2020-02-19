extern crate serde_json;
extern crate vinoteca;

use std::env;
use std::process;

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

fn run(args: &[String]) {
    if args.is_empty() || (args[0] != "-n" && args[0] != "--no-tab") {
        let open = process::Command::new("bash")
            .args(&["-c", "sleep 1; xdg-open http://localhost:8000"])
            .spawn();
        if let Err(e) = open {
            print_error(&format!("Couldn't open browser tab: {}", e));
        }
    }
    vinoteca::create_rocket().launch();
}

/// Bootstrap code to check latest GitHub release and download latest version
/// if we're not already on it.
fn update(args: &[String]) {
    let should_force = !args.is_empty() && (args[0] == "-f" || args[1] == "--force");
    let current_version = env!("CARGO_PKG_VERSION");
    // Get latest release
    let curl = process::Command::new("curl")
        .args(&[
            "--silent",
            "https://api.github.com/repos/threecgreen/vinoteca/releases/latest",
        ])
        .output()
        .unwrap_or_else(|e| panic!("Failed to execute curl: {}", e));
    let curl_json =
        String::from_utf8(curl.stdout).expect("Failed to parse curl release version output");
    // Parse untyped json
    let map: serde_json::Value =
        serde_json::from_str(&curl_json).expect("Failed to deserialize curl version JSON");
    let version = map
        .get("tag_name")
        .expect("No tag_name in version JSON")
        .as_str()
        .expect("tag_name wasn't a string");
    // GitHub tags start with 'v'
    if !should_force && &version[1..] == current_version {
        println!("{} is already the latest version", current_version);
        return;
    }
    let url = format!(
        "https://github.com/threecgreen/vinoteca/archive/{}.tar.gz",
        version
    );
    let download_success = process::Command::new("curl")
        .args(&["-sOL", &url])
        .status()
        .unwrap_or_else(|e| panic!("Failed to download latest release: {}", e))
        .success();
    if !download_success {
        panic!("Failed to download release");
    }
    let unpack_success = process::Command::new("tar")
        .args(&["-xzf", &format!("{}.tar.gz", version)])
        .status()
        .unwrap_or_else(|e| panic!("Failed to extract new release: {}", e))
        .success();
    if !unpack_success {
        panic!("Failed to unpack release");
    }
    println!("Successfully downloaded the latest version: {}", version);
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
        "run" => run(&args[2..]),
        "update" => update(&args[2..]),
        _ => {
            print_error(&format!("Unknown subcommand '{}'", subcommand));
            print_subcommands();
            process::exit(2);
        }
    };
}
