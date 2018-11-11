/**
 * Sets up special character buttons to insert their respective character
 * into the last input field that was in focus. Also defines a function that
 * allows for changing between capital and miniscule special characters.
 */
export function specialChars() {
    const specialCharBtns: JQuery<HTMLLinkElement> = $(".spec-chars");
    const shiftBtn: JQuery<HTMLLinkElement> = $("#shift");
    const textInputs: JQuery<HTMLInputElement> = $("[type=text]");
    /* Keep track of last active text element */
    let lastInput: string = null;

    /* Add special character to last input field */
    $(specialCharBtns).on("click", function() {
        $(lastInput).val($(lastInput).val() + $(this).text());
        // Set focus back to last input
        $(lastInput).focus();
    });

    /* Change special character buttons between upper and lowercase */
    $(shiftBtn).on("click", () => {
        console.log("Click shift button");
        if ($(shiftBtn).text() === "↑") {
            $(specialCharBtns).each(function() {
                $(this).text($(this).text().toUpperCase());
            });
            $(shiftBtn).text("↓");
        } else {
            $(specialCharBtns).each(function() {
                $(this).text($(this).text().toLowerCase());
            });
            $(shiftBtn).text("↑");
        }
    });

    /* Update last active input field each time the focus changes */
    $(textInputs).on("focusout", function() {
        lastInput = "#" + this.id;
    });
}
