/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../node_modules/@types/materialize-css/index.d.ts" />
/// <reference path="../../../node_modules/@types/pickadate/index.d.ts" />
/** Streamlines the configuration of Materialize CSS autocomplete. */
export function autocomplete(modelName, limit, minLength, selector) {
    if (limit === void 0) { limit = 5; }
    if (minLength === void 0) { minLength = 1; }
    var jqSelector = selector ? selector : "#auto-" + modelName;
    $.getJSON("/" + modelName + "s/all/", function (responseJSON) {
        $(selector ? selector : "#auto-" + modelName).autocomplete({
            data: responseJSON,
            limit: limit,
            minLength: minLength
        });
    });
}
/** Streamlines the Materialize CSS datepicker widget, whose configuration
 * isn"t changed.
 */
export function datepicker(selector) {
    if (selector === void 0) { selector = ".datepicker"; }
    $(selector).pickadate({
        selectMonths: true,
        selectYears: 15,
        today: "Today",
        clear: "Clear",
        close: "Ok",
        closeOnSelect: false // Close upon selecting a date,
    });
}
//# sourceMappingURL=widgets.js.map