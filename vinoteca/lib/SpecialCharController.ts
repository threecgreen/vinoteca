import { selectById } from "./JQueryCompat";

// import * as $ from "jquery";

/**
 * Sets up special character buttons to insert their respective character
 * into the last input field that was in focus. Also defines a function that
 * allows for changing between capital and miniscule special characters.
 */
export default class SpecialCharController {
    private specialCharBtns: NodeListOf<HTMLLinkElement>;
    private shiftBtn: HTMLLinkElement;
    private textInputs: HTMLInputElement[];
    /* Keep track of last active text element */
    private lastInputId: string;

    constructor() {
        this.specialCharBtns = document.querySelectorAll(".spec-char-btn");
        this.shiftBtn = selectById("#shift") as HTMLLinkElement;
        const inputs = document.getElementsByTagName("input");
        this.textInputs = []
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type === "text") {
                this.textInputs.push(inputs[i]);
            }
        }
        this.lastInputId = "";
        this.updateTextInputs();
        this.setUpShiftBtnListener();
    }

    private get lastInput(): HTMLInputElement {
        return selectById(this.lastInputId) as HTMLInputElement;
    }

    /**
     * Add special character to last input field
     */
    public updateTextInputs() {
        this.specialCharBtns.forEach((btn) => {
            btn.onclick = (e) => {
                e.preventDefault();
                this.lastInput.value += btn.textContent;
                this.lastInput.focus();
            }
        })
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
            this.lastInputId = event.target.id;
        });
    }
}
