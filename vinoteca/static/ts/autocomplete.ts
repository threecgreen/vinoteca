/// <reference path ="../../../node_modules/@types/jquery/index.d.ts" />

import { Dict } from "dict";

/** This function assists in configuring Materialize CSS autocomplete given the
 * name of the data model. It fetches the corresponding data models from a JSON
 * endpoint.
 */
export function autocomplete(dataModel: string, limit = 5, minLength = 1): void {
    let data: Dict<string>;
    data: $.when(
        $.getJSON(`/${dataModel}s/all`)
    ).done( function (json) {
        data = json;
    });
    console.log(data);
    $(`#auto-${dataModel}`).autocomplete({
        // Request data model objects from JSON endpoint
        data: data,
        limit: limit,
        minLength: minLength
    })
}
