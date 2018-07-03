/// <reference path ="../../../node_modules/@types/jquery/index.d.ts" />

const spec_char_btns: JQuery<HTMLLinkElement> = $(".spec-chars");
const shift_btn: JQuery<HTMLLinkElement> = $("#shift");
let text_inputs: JQuery<HTMLInputElement> = $("[type=text]");
/* Keep track of last active text element */
let last_input: string = null;

/** Sets up special character buttons to insert their respective character
 * into the last input field that was in focus. Also defines a function that
 * allows for changing between capital and miniscule special characters.
 */
$(function () {
    /* Add special character to last input field */
    $(spec_char_btns).on("click", function () {
        $(last_input).val($(last_input).val() + $(this).text());
        // Set focus back to last input
        $(last_input).focus();
    });

    /* Change special character buttons between upper and lowercase */
    $(shift_btn).on("click", function () {
        if ($(shift_btn).text() === "↑") {
            $(spec_char_btns).each(function () {
                $(this).text($(this).text().toUpperCase());
            });
            $(shift_btn).text("↓");
        }
        else {
            $(spec_char_btns).each( function() {
                $(this).text($(this).text().toLowerCase());
            });
            $(shift_btn).text("↑");
        }
    });

    /* Update last active input field each time the focus changes */
    $(text_inputs).on("focusout", function () {
        last_input = "#" + this.id;
    });
})