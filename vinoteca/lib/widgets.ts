import { Autocomplete } from "materialize-css";
import { IDict, nameToId } from "./utils";
import { get } from "./ApiHelper";
import Logger from "./Logger";

type OnChange = (text: string) => void;

/** Setup autocompletion with provided completion options. */
export function staticAutocomplete(elementId: string, completions: IDict<string | null>,
                                   onChange: OnChange,
                                   minLength = 1, limit = 5) {
    const logger = new Logger("widgets");
    const elem = document.getElementById(elementId);
    if (elem) {
        const instance = new Autocomplete(elem, {
            data: completions,
            limit,
            minLength,
            onAutocomplete: function(this, text) {
                onChange(text);
            },
        });
        // Fix overlappting text bug
        M.updateTextFields();
    } else {
        logger.logError(`Could not find DOM element with id ${elementId}`);
    }
}

/** Improved autocomplete without JQuery. Meant for use with React. */
export function rAutocomplete(modelName: string, onChange: OnChange,
                              minLength = 1, limit = 5) {
    const logger = new Logger("widgets");
    get(`/rest/${modelName.toLowerCase()}s/all/`)
        .then((completions: IDict<string>) => {
            staticAutocomplete(nameToId(modelName), completions, onChange, minLength, limit);
        })
        .catch(() => {
            logger.logWarning(`Failed to fetch autocompletion data for ${modelName}`);
        });
}

/**
 * Streamlines the configuration of Materialize CSS autocomplete. Deprecated in
 * favor of rAutocomplete which doesn't use JQuery.
*/
export function autocomplete(modelName: string, limit = 5, minLength = 1, selector?: string) {
    $.getJSON(`/rest/${modelName.toLowerCase()}s/all/`, (responseJSON: IDict<string>) => {
        $(selector ? selector : `#auto-${modelName}`).autocomplete({
            data: responseJSON,
            limit,
            minLength,
        });
    });
}

/**
 * Streamlines the Materialize CSS datepicker widget, whose configuration
 * isn't changed.
 */
export function datepicker(selector = ".datepicker"): void {
    $(selector).datepicker({
        autoClose: false,            // Close upon selecting a date,
        yearRange: 15,               // Creates a dropdown of 5 years to control year,
    });
}

function activateNavbarTab(id: string): void {
    $(`#${id}`).addClass("active");
}

/** Enables navbar menus. Should be called on every page. */
export function navbar(activeNavTabId?: string) {
    if (activeNavTabId) {
        activateNavbarTab(activeNavTabId);
    }
    $(".sidenav").sidenav();
    $(".dropdown-trigger").dropdown();
}

/** Streamlines the Materialize CSS tab widget. */
export function tabs(selector = ".tabs"): void {
    $(selector).tabs();
}

/** Either enable or disable a Materialize CSS tab. */
export function setTabAccessibility(tabListElem: JQuery<HTMLUListElement>, ability: boolean) {
    if (ability) {
        $(tabListElem).removeClass("disabled");
    } else {
        $(tabListElem).addClass("disabled");
    }
}

/** Activates all horizontal floating action buttons in class fixed-action-btn.  */
export function hFloatingActnBtn() {
    $(".fixed-action-btn").floatingActionButton({direction: "left"});
}

/** Simplifies displaying of toast messages to user */
export function toast(message: string) {
    M.toast({
        classes: "red-bg",
        displayLength: 10000,
        html: message,
    });
}
