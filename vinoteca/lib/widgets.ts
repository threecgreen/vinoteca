import "materialize-css";
import { format } from "url";

/** Streamlines the configuration of Materialize CSS autocomplete. */
export function autocomplete(modelName: string, limit = 5, minLength = 1, selector?: string): void {
    $.getJSON(`/rest/${modelName}s/all/`, (responseJSON) => {
        $(selector ? selector : `#auto-${modelName}`).autocomplete({
            data: responseJSON,
            limit,
            minLength,
        });
    });
}

/**
 * Streamlines the Materialize CSS datepicker widget, whose configuration
 * isn"t changed.
 */
export function datepicker(value?: number, selector = ".datepicker"): void {
    const options = {
        autoClose: false,            // Close upon selecting a date,
        yearRange: 15,               // Creates a dropdown of 5 years to control year,
    };
    if (value !== undefined && value > 0) {
        options["defaultDate"] = "yyyymmdd";

    }
    // $(selector).datepicker(options);
    $(selector).datepicker({
    });
}

/** Enables navbar menus. Should be called on every page. */
export function navbar() {
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
