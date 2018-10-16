import { Dropdown, Sidenav } from "materialize-css";

export function navbar() {
    const sidenav = new Sidenav($(".button-collapse")[0]);
    const dropdown = new Dropdown($(".dropdown-button")[0]);
}

$(() => {
    navbar();
});
