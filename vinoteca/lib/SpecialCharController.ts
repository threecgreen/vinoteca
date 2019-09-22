import { selectById } from "./JQueryCompat";

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
        this.shiftBtn = selectById("shift") as HTMLLinkElement;
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
        this.shiftBtn.onclick = () => {
            if (this.shiftBtn.textContent === "↑") {
                this.shiftBtn.textContent = "↓";
                this.specialCharBtns.forEach((btn) => {
                    if (btn.textContent) {
                        btn.textContent = btn.textContent.toUpperCase();
                    }
                })
            } else {
                this.specialCharBtns.forEach((btn) => {
                    if (btn.textContent) {
                        btn.textContent = btn.textContent.toLowerCase();
                    }
                })
                this.shiftBtn.textContent = "↑";
            }
        }
    }

    /**
     * Update last active input field each time the focus changes
     */
    private updateLastInputListener() {
        this.textInputs.forEach((input) => {
            input.addEventListener("focusout", (event) => {
                if (event.target) {
                    // @ts-ignore
                    this.lastInputId = event.target.getAttribute("id");
                }
            })
        })
    }
}
