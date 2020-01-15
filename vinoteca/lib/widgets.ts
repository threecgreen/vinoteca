import { Autocomplete, Datepicker, Dropdown, FloatingActionButton, Modal, Sidenav, Tabs } from "materialize-css";
import { get } from "./ApiHelper";
import { selectById } from "./JQueryCompat";
import Logger from "./Logger";
import { toDict } from "./RestApi";
import { IRestModel } from "./RestTypes";
import { IDict, nameToId } from "./utils";

type OnChange = (e: string) => void;

// TODO: use refs
/** Setup autocompletion with provided completion options. */
export function autocomplete(elem: React.MutableRefObject<HTMLInputElement>,
                             completions: IDict<string | null>,
                             onChange: OnChange, minLength = 1, limit = 5) {
    if (elem.current) {
        const instance = new Autocomplete(elem.current, {
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

/**
 * Streamlines the Materialize CSS datepicker widget, whose configuration
 * isn't changed.
 */
export function datepicker(selector = ".datepicker"): void {
    const elem = document.querySelector(selector) as HTMLElement;
    const instance = new Datepicker(elem, {
        autoClose: false,            // Close upon selecting a date,
        yearRange: 15,               // Creates a dropdown of 5 years to control year,
    });
}

function activateNavbarTab(id: string): void {
    selectById(id).classList.add("active");
}

/** Enables navbar menus. Should be called on every page. */
export function navbar(activeNavTabId?: string) {
    if (activeNavTabId) {
        activateNavbarTab(activeNavTabId);
    }
    const sideNavElem = document.querySelector(".sidenav");
    const sideNav = new Sidenav(sideNavElem!);
    const dropdownElem = document.querySelector(".dropdown-trigger");
    const dropdown = new Dropdown(dropdownElem!);
}

/** Streamlines the Materialize CSS tab widget. */
export function tabs(selector = ".tabs"): void {
    const elem = document.querySelectorAll(selector);
    elem.forEach((e) => new Tabs(e));
}

/** Either enable or disable a Materialize CSS tab. */
export function setTabAccessibility(tabListElem: HTMLUListElement, ability: boolean) {
    if (ability) {
        tabListElem.classList.remove("disabled");
    } else {
        tabListElem.classList.add("disabled");
    }
}

/** Activates all horizontal floating action buttons in class fixed-action-btn.  */
export function hFloatingActnBtn() {
    document.querySelectorAll(".fixed-action-btn").forEach((elem) => {
        const instance = new FloatingActionButton(elem, { direction: "left" });
    });
}

/** Simplifies displaying of toast messages to user */
export function toast(message: string) {
    M.toast({
        classes: "red-bg",
        displayLength: 10000,
        html: message,
    });
}

export function modal(id: string) {
    const modalElem = selectById(id);
    const instance = new Modal(modalElem);
}
