/// <reference path ="../../../node_modules/@types/jquery/index.d.ts" />
var spec_char_btns = $(".spec-chars");
var shift_btn = $("#shift");
var text_inputs = $("[type=text]");
/* Keep track of last active text element */
var last_input = null;
$(function () {
    var _this = this;
    /* Add special character to last input */
    $(spec_char_btns).on("click", function () {
        last_input = last_input + $(_this).text();
    });
    /* Change special character buttons between upper and lowercase */
    $(shift_btn).on("click", function () {
        if ($(shift_btn).text() === "↑") {
            $(spec_char_btns).each(function () {
                $(_this).text($(_this).text().toUpperCase());
            });
            $(shift_btn).text("↓");
        }
        else {
            $(spec_char_btns).each(function () {
                $(_this).text($(_this).text().toLowerCase());
            });
            $(shift_btn).text("↑");
        }
    });
    /* Update last active input field each time the focus changes */
    $(text_inputs).on("focusout", function () {
        last_input = "#" + this.id;
    });
});
//# sourceMappingURL=special_chars.js.map