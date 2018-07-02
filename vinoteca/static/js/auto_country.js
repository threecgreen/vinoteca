"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
require("materialize-css");
jquery_1.default(function () {
    jquery_1.default('#auto-country').autocomplete({
        data: {
        // {% for country in countries %}
        //     "{{ country.name }}": null,
        // {% endfor %}
        },
        limit: 5,
        minLength: 1
    });
});
//# sourceMappingURL=auto_country.js.map