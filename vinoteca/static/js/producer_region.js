"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
require("materialize-css");
/** Disable region selection if producer is chosen and show grayed region for that producer */
function toggleRegion(producer, country, producerRegionURL, producersURL) {
    var producers;
    jquery_1.default.getJSON(producersURL, function (responseJSON) {
        responseJSON.forEach(function (element) {
            producers.push(element);
        });
    });
    jquery_1.default(producer).on("change", function () {
        if (jquery_1.default.inArray(jquery_1.default(this).val(), producers) !== -1) {
            jquery_1.default.getJSON(producerRegionURL, { 'producer': jquery_1.default(this).val() }, function (responseJSON) {
                jquery_1.default(country).val(responseJSON["country_name"]);
                jquery_1.default(country).prop('disabled', true);
                jquery_1.default("label[for='auto-country']").text("");
                // Update viticultural area autocomplete
                jquery_1.default(country).trigger("change");
            });
        }
        else {
            jquery_1.default(country).prop('disabled', false);
            jquery_1.default(country).val("");
            jquery_1.default("label[for='auto-country']").text("Country");
        }
    });
}
exports.toggleRegion = toggleRegion;
/** Update viticultural area autocomplete depending on country selection */
function updateVitiAreaSelections(country, viti_area, getJSONURL) {
    var _this = this;
    jquery_1.default(country).on("change", function () {
        jquery_1.default.get(getJSONURL, { "country": jquery_1.default(_this).val() }, function (responseJSON) {
            jquery_1.default(viti_area).autocomplete({
                data: responseJSON,
                limit: 5,
                minLength: 1
            });
        });
    });
}
exports.updateVitiAreaSelections = updateVitiAreaSelections;
//# sourceMappingURL=producer_region.js.map