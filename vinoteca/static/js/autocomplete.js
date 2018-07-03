/// <reference path ="../../../node_modules/@types/jquery/index.d.ts" />
/** This function assists in configuring Materialize CSS autocomplete given the
 * name of the data model. It fetches the corresponding data models from a JSON
 * endpoint.
 */
export function autocomplete(dataModel, limit, minLength) {
    if (limit === void 0) { limit = 5; }
    if (minLength === void 0) { minLength = 1; }
    var data;
    data: $.when($.getJSON("/" + dataModel + "s/all")).done(function (json) {
        data = json;
    });
    console.log(data);
    $("#auto-" + dataModel).autocomplete({
        // Request data model objects from JSON endpoint
        data: data,
        limit: limit,
        minLength: minLength
    });
}
//# sourceMappingURL=autocomplete.js.map