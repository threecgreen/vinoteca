/// <reference path ="../../../node_modules/@types/jquery/index.d.ts" />

const spec_char_btns: JQuery<HTMLLinkElement> = $(".spec-chars");
const shift_btn: JQuery<HTMLLinkElement> = $("#shift");
let text_inputs: JQuery<HTMLInputElement> = $("[type=text]");
/* Keep track of last active text element */
let last_input: string = null;

$(function () {
    /* Add special character to last input */
    $(spec_char_btns).on("click", () => {
        last_input = last_input + $(this).text();
    });

    /* Change special character buttons between upper and lowercase */
    $(shift_btn).on("click", () => {
        if ($(shift_btn).text() === "↑") {
            $(spec_char_btns).each(() => {
                $(this).text($(this).text().toUpperCase());
            });
            $(shift_btn).text("↓");
        }
        else {
            $(spec_char_btns).each(() => {
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