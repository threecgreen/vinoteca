/// <reference path ="../../../node_modules/@types/jquery/index.d.ts" />
var specialCharBtns = $(".spec-chars");
var shiftBtn = $("#shift");
var textInputs = $("[type=text]");
/* Keep track of last active text element */
var lastInput = null;
/**
 * Sets up special character buttons to insert their respective character
 * into the last input field that was in focus. Also defines a function that
 * allows for changing between capital and miniscule special characters.
 */
$(function () {
    /* Add special character to last input field */
    $(specialCharBtns).on("click", function () {
        $(lastInput).val($(lastInput).val() + $(this).text());
        // Set focus back to last input
        $(lastInput).focus();
    });
    /* Change special character buttons between upper and lowercase */
    $(shiftBtn).on("click", function () {
        if ($(shiftBtn).text() === "↑") {
            $(specialCharBtns).each(function () {
                $(this).text($(this).text().toUpperCase());
            });
            $(shiftBtn).text("↓");
        }
        else {
            $(specialCharBtns).each(function () {
                $(this).text($(this).text().toLowerCase());
            });
            $(shiftBtn).text("↑");
        }
    });
    /* Update last active input field each time the focus changes */
    $(textInputs).on("focusout", function () {
        lastInput = "#" + this.id;
    });
});
//# sourceMappingURL=special_chars.js.map