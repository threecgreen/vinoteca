// import { Dropdown, Sidenav } from "materialize-css";
import "materialize-css";

export function navbar() {
    // $(".button-collapse").sidenav();
    $(".dropdown-trigger").dropdown();
    // const sidenav = new Sidenav([0]);
    // const dropdown = new Dropdown($(".dropdown-button")[0]);
}

$(() => {
    navbar();
});
