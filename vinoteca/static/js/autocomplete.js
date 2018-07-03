/// <reference path ="../../../node_modules/@types/jquery/index.d.ts" />
/** Streamlines the configuration of Materialize CSS autocomplete. */
export function autocomplete(data, dataModel, limit, minLength) {
    if (limit === void 0) { limit = 5; }
    if (minLength === void 0) { minLength = 1; }
    $(dataModel).autocomplete({
        // Request data model objects from JSON endpoint
        data: data,
        limit: limit,
        minLength: minLength
    });
}
//# sourceMappingURL=autocomplete.js.map