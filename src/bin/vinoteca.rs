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

fn print_version() {
    let version = env!("CARGO_PKG_VERSION");
    println!("vinoteca version {}", version);
}

fn get_open_tab_command() -> Option<String> {
    let url = "http://localhost:8000";
    let sys_info = {
        let uname_output = process::Command::new("uname")
            .arg("-a")
            .output()
            .expect("To run uname command");
        String::from_utf8(uname_output.stdout)
            .expect("To convert uname output to string")
            .to_lowercase()
    };
    if sys_info.contains("darwin") {
        Some(format!("open {}", url))
    // WSL
    } else if sys_info.contains("microsoft") {
        Some(format!("cmd.exe /c \"start {}\"", url))
    } else if sys_info.contains("linux") {
        Some(format!("xdg-open {}", url))
    } else {
        print_error(&format!("Don't know how to open URLs on {}", sys_info));
        None
    }
}

fn run(args: &[String]) {
    if args.is_empty() || (args[0] != "-n" && args[0] != "--no-tab") {
        let open_cmd = get_open_tab_command();
        if let Some(open_cmd) = open_cmd {
            let open = process::Command::new("bash")
                .args(&["-c", &format!("sleep 1; {}", open_cmd)])
                .spawn();
            if let Err(e) = open {
                print_error(&format!("Couldn't open browser tab: {}", e));
            }
        }
    }
    // Set working directory to home to solve config issue
    #[cfg(not(debug_assertions))]
    std::env::set_current_dir(std::env::var("HOME").expect("User's home directory"))
        .expect("Current working directory to be set");

    vinoteca::create_rocket().launch();
}

/// Bootstrap code to check latest GitHub release and download latest version
/// if we're not already on it.
fn update(args: &[String]) {
    let should_force = !args.is_empty() && (args[0] == "-f" || args[0] == "--force");
    let current_version = env!("CARGO_PKG_VERSION");
    // Get latest release
    let curl = process::Command::new("curl")
        .args(&[
            "--silent",
            "https://api.github.com/repos/threecgreen/vinoteca/releases/latest",
        ])
        .output()
        .expect("To execute curl");
    let curl_json = String::from_utf8(curl.stdout).expect("Release version output");
    // Parse untyped json
    let map: serde_json::Value = serde_json::from_str(&curl_json).expect("version JSON");
    let version = &map
        .get("tag_name")
        .expect("tag_name in version JSON")
        .as_str()
        .expect("tag_name to be a string")
        // GitHub tags start with 'v'
        [1..];
    if !should_force && version == current_version {
        println!("{} is already the latest version", current_version);
        return;
    }
    let url = &map
        .get("assets")
        .expect("Assets in version JSON")
        .as_array()
        .expect("Assets to be an array")
        .get(0)
        .expect("Assets to not be empty")
        .get("browser_download_url")
        .expect("browser_download_url field")
        .as_str()
        .expect("browser_download_url to be a string");
    let download_success = process::Command::new("curl")
        .args(&["-sOL", &url])
        .status()
        .expect("To download latest release")
        .success();
    if !download_success {
        print_error("Failed to download latest release");
        process::exit(1);
    }
    println!("Successfully downloaded the latest version: {}", version);
    let install_success = process::Command::new("sudo")
        .args(&[
            "apt",
            "install",
            &format!("./vinoteca_{}_amd64.deb", version),
        ])
        .status()
        .expect("Installation")
        .success();
    if !install_success {
        print_error(&format!(
            "Try running `sudo apt install ./vinoteca_{}_amd64.deb` to complete the installation",
            version,
        ));
        process::exit(2);
    }
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
        "-v" | "--version" => print_version(),
        "run" => run(&args[2..]),
        "update" => update(&args[2..]),
        _ => {
            print_error(&format!("Unknown subcommand '{}'", subcommand));
            print_subcommands();
            process::exit(2);
        }
    };
}
