import { Autocomplete, Dropdown, Sidenav } from "materialize-css";
import React from "react";
import { IDict } from "./utils";

type OnChange = (e: string) => void;

/** Setup autocompletion with provided completion options. */
export function autocomplete(elem: React.MutableRefObject<HTMLInputElement>,
                             completions: IDict<string | null>,
                             onChange: OnChange, minLength = 1, limit = 5) {
    if (elem.current) {
        // tslint:disable-next-line no-unused-expression
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

function activateNavbarTab(name: string): void {
    (document.getElementById(`${name}-nav`) as HTMLElement).classList.add("active");
}

/** Enables navbar menus. Should be called on every page. */
export function navbar(activeNavTab?: string) {
    if (activeNavTab) {
        activateNavbarTab(activeNavTab);
    }
    const sideNavElem = document.querySelector(".sidenav");
    // tslint:disable-next-line no-unused-expression
    new Sidenav(sideNavElem!);
    const dropdownElem = document.querySelector(".dropdown-trigger");
    // tslint:disable-next-line no-unused-expression
    new Dropdown(dropdownElem!);
}

export function useNavBar(activeNavTab: string) {
    React.useEffect(() => {
        activateNavbarTab(activeNavTab);
    }, [activeNavTab]);
}

/** Simplifies displaying of toast messages to user */
export function toast(message: string) {
    M.toast({
        classes: "red-bg",
        displayLength: 10000,
        html: message,
    });
}

export function useTitle(title: string) {
    React.useEffect(() => {
        setTitle(title);
    }, [title]);
}

export function setTitle(title: string) {
    document.title = `vinoteca | ${title}`;
}
