const spec_char_btns = $(".spec-chars");
const shift_btn = $("#shift");
let text_inputs = $("[type=text]");
/* Keep track of last active text element */
let last_input = null;

$(function() {
    /* Add special character to last input */
    $(spec_char_btns).on("click", function () {
        last_input = last_input + $(this).text();
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
            $(spec_char_btns).each(function () {
                $(this).text($(this).text().toLowerCase());
            });
            $(shift_btn).text("↑");
        }
    });
    /* Update last active input field each time the focus changes */
    $(text_inputs).on("focusout", function () {
        last_input = "#" + this.id;
    });
});
