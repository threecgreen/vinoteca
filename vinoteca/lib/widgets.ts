import { Autocomplete, Dropdown, Sidenav } from "materialize-css";
import { IDict } from "./utils";

type OnChange = (e: string) => void;

/** Setup autocompletion with provided completion options. */
export function autocomplete(elem: React.MutableRefObject<HTMLInputElement>,
                             completions: IDict<string | null>,
                             onChange: OnChange, minLength = 1, limit = 5) {
    if (elem.current) {
        new Autocomplete(elem.current, {
            data: completions,
            limit,
            minLength,

            onAutocomplete: function(this, text) {  // tslint:disable-line object-literal-shorthand
                onChange(text);
            },
        });
        // Fix overlappting text bug
        M.updateTextFields();
    }
}

function activateNavbarTab(id: string): void {
    (document.getElementById(id) as HTMLElement).classList.add("active");
}

/** Enables navbar menus. Should be called on every page. */
export function navbar(activeNavTabId?: string) {
    if (activeNavTabId) {
        activateNavbarTab(activeNavTabId);
    }
    const sideNavElem = document.querySelector(".sidenav");
    new Sidenav(sideNavElem!);
    const dropdownElem = document.querySelector(".dropdown-trigger");
    new Dropdown(dropdownElem!);
}

/** Simplifies displaying of toast messages to user */
export function toast(message: string) {
    M.toast({
        classes: "red-bg",
        displayLength: 10000,
        html: message,
    });
}
