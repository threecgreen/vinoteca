"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
require("materialize-css");
function autocomplete(dataModel, limit, minLength) {
    if (limit === void 0) { limit = 5; }
    if (minLength === void 0) { minLength = 1; }
    jquery_1.default("#auto-" + dataModel).autocomplete({
        // Request data model objects from JSON endpoint
        data: {},
        limit: limit,
        minLength: minLength
    });
}
exports.autocomplete = autocomplete;
//# sourceMappingURL=autocomplete.js.map