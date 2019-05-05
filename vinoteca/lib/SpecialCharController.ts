import * as $ from "jquery";

/**
 * Sets up special character buttons to insert their respective character
 * into the last input field that was in focus. Also defines a function that
 * allows for changing between capital and miniscule special characters.
 */
export default class SpecialCharController {
    private specialCharBtns: JQuery<HTMLLinkElement>;
    private shiftBtn: JQuery<HTMLLinkElement>;
    private textInputs: JQuery<HTMLInputElement>;
    /* Keep track of last active text element */
    private lastInput: string;

    constructor() {
        this.specialCharBtns = $(".spec-chars");
        this.shiftBtn = $("#shift");
        this.textInputs = $("[type=text]");
        this.lastInput = "";
        this.updateTextInputs();
        this.setUpShiftBtnListener();
    }

    /**
     * Add special character to last input field
     */
    public updateTextInputs() {
        $(this.specialCharBtns).on("click", (event) => {
            $(this.lastInput).val($(this.lastInput).val() + $(event.target).text());
            // Set focus back to last input
            $(this.lastInput).focus();
        });
        this.updateLastInputListener();
    }

    /**
     * Change special character buttons between upper and lowercase
     */
    private setUpShiftBtnListener() {
        $(this.shiftBtn).on("click", () => {
            if ($(this.shiftBtn).text() === "↑") {
                $(this.specialCharBtns).each((_, btn) => {
                    $(btn).text($(btn).text().toUpperCase());
                });
                $(this.shiftBtn).text("↓");
            } else {
                $(this.specialCharBtns).each((_, btn) => {
                    $(btn).text($(btn).text().toLowerCase());
                });
                $(this.shiftBtn).text("↑");
            }
        });
    }

    /**
     * Update last active input field each time the focus changes
     */
    private updateLastInputListener() {
        $(this.textInputs).on("focusout", (event) => {
            this.lastInput = `#${event.target.id}`;
        });
    }
}
