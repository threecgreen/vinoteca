"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
var spec_char_btns = jquery_1.default(".spec-chars");
var shift_btn = jquery_1.default("#shift");
var text_inputs = jquery_1.default("[type=text]");
/* Keep track of last active text element */
var last_input = null;
jquery_1.default(function () {
    /* Add special character to last input */
    jquery_1.default(spec_char_btns).on("click", function () {
        last_input = last_input + jquery_1.default(this).text();
    });
    /* Change special character buttons between upper and lowercase */
    jquery_1.default(shift_btn).on("click", function () {
        if (jquery_1.default(shift_btn).text() === "↑") {
            jquery_1.default(spec_char_btns).each(function () {
                jquery_1.default(this).text(jquery_1.default(this).text().toUpperCase());
            });
            jquery_1.default(shift_btn).text("↓");
        }
        else {
            jquery_1.default(spec_char_btns).each(function () {
                jquery_1.default(this).text(jquery_1.default(this).text().toLowerCase());
            });
            jquery_1.default(shift_btn).text("↑");
        }
    });
    /* Update last active input field each time the focus changes */
    jquery_1.default(text_inputs).on("focusout", function () {
        last_input = "#" + this.id;
    });
});
//# sourceMappingURL=special_chars.js.map