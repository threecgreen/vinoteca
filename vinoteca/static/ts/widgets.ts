/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../node_modules/@types/materialize-css/index.d.ts" />
/// <reference path="../../../node_modules/@types/pickadate/index.d.ts" />

/** Streamlines the configuration of Materialize CSS autocomplete. */
export function autocomplete(modelName: string, limit = 5, minLength = 1, selector?: string): void {
    $.getJSON(`/${modelName}s/all/`, (responseJSON) => {
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
export function datepicker(selector = ".datepicker"): void {
    $(selector).pickadate({
        clear: "Clear",
        close: "Ok",
        closeOnSelect: false,            // Close upon selecting a date,
        selectMonths: true,              // Creates a dropdown to control month
        selectYears: 15,                 // Creates a dropdown of 5 years to control year,
        today: "Today",
    });
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
