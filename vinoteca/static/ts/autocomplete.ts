/// <reference path ="../../../node_modules/@types/jquery/index.d.ts" />

import { Dict } from "./dict";

/** Streamlines the configuration of Materialize CSS autocomplete. */
export function autocomplete(data: Dict<string>, dataModel: JQuery<HTMLElement>,
    limit = 5, minLength = 1): void {

    $(dataModel).autocomplete({
        // Request data model objects from JSON endpoint
        data: data,
        limit: limit,
        minLength: minLength
    })
}
