import * as M from "materialize-css";
import { autocomplete } from "./widgets";

enum HideOrShow {
    Hide,
    Show,
}

/**
 * This class controls the adding and removal of grape inputs and the
 * calculation of remaining grape percentage. In reality everything is called
 * in the constructor so it be a simple function but a class seeemed like a
 * better grouping.
 */
export default class GrapeController {
    private selectorPrefix: string;
    private lastBlock: JQuery<HTMLDivElement>;
    private blockHTML: string;
    private grapeRow: JQuery<HTMLDivElement>;

    constructor(selectorPrefix: string) {
        this.selectorPrefix = selectorPrefix;
        this.lastBlock = $(selectorPrefix).last() as JQuery<HTMLDivElement>;
        this.blockHTML = this.lastBlock[0].outerHTML;
        this.grapeRow = this.lastBlock.parent();
        this.setUpListeners();
        this.updateAutocomplete();
    }

    private getId(elem: JQuery<HTMLElement>): number {
        return parseInt(elem.attr("id") as string, 10);
    }

    /**
     * Very explicit and repeptitive way of changing all the ids of elements in
     * a grape block to be the same.
     *
     * @param elem Grape block containing inputs with ids to be renumbered and
     * renamed.
     * @param id the new id number.
     */
    private setId(elem: JQuery<HTMLElement>, id: number): void {
        const oldId = this.getId(elem);
        if (oldId === id) {
            return;
        }
        elem.attr("id", `${id}`);
        const buttonDiv = elem.children(".col").first();
        buttonDiv.children(`#grape-btn-remove-${oldId}`).attr("id", `grape-btn-remove-${id}`);
        const grapePctInput = elem.children(`#grape-form-${oldId}-pct`);
        grapePctInput.attr("id", `grape-form-${id}-pct`);
        grapePctInput.children().first().attr("id", `grape-${id}-pct`);
        grapePctInput.children().first().attr("name", `grape-${id}-pct`);
        grapePctInput.children().last().attr("for", `grape-${id}-pct`);
        const grapeNameInput = elem.children(`#grape-form-${oldId}-name`);
        grapeNameInput.attr("id", `auto-grape-${id}`);
        grapeNameInput.children().first().attr("id", `auto-grape-${id}`);
        grapeNameInput.children().first().attr("name", `grape-${id}`);
        grapeNameInput.children().last().attr("for", `auto-grape-${id}`);
    }

    private getBlockById(id: number): JQuery<HTMLDivElement> {
        return $(`${this.selectorPrefix}#${id}`).first() as JQuery<HTMLDivElement>;
    }

    private renumberBlocks(): void {
        this.grapeRow.children(".grape-block").each((id: number, elem: HTMLElement) => {
            this.setId($(elem), id + 1);
        });
    }

    /**
     * Hides or shows the grape block div of the given id.
     */
    private hideShowDiv(id: number, hideOrShow: HideOrShow): void {
        const div = this.getBlockById(id);
        switch (hideOrShow) {
            case HideOrShow.Hide:
                div.hide();
                return;
            case HideOrShow.Show:
                div.show();
                return;
        }
    }

    /**
     * Determine whether any grape has a percentage set.
     */
    private hasGrapePct(lastVisibleId: number): boolean {
        for (let i = 1; i < lastVisibleId; i++) {
            if ($(`#grape-${i}-pct`).val() !== "") {
                return true;
            }
        }
        return false;
    }

    /**
     * Determine the percentage of grape composition not yet accounted for.
     */
    private remGrapePct(lastVisibleId: number): number {
        let sum = 0;
        for (let i = 1; i < lastVisibleId; i++) {
            const pct = parseInt($(`#grape-${i}-pct`).val() as string, 10);
            // Only add if not undefined
            if (pct) {
                sum += pct;
            }
        }
        return sum < 100 ? 100 - sum : 0;
    }

    /**
     * Updates a percentage for a given grape id.
     */
    private setGrapePct(id: number, pct: number): void {
        $(`#grape-${id}-pct`).val(pct);
        // Fix overlapping text bug
        M.updateTextFields();
    }

    /**
     * Creates a new grape block copied from the last grape block and cleared
     * data.
     */
    private newDiv(): void {
        if (this.grapeRow.children(".grape-block").length > 0) {
            /* Create new grape block after the last current grape block. Can't use
            * append here because plus button is the last child
            */
            this.grapeRow.children(".grape-block").last().after(this.blockHTML);
        } else {
            // Special case when no grape inputs
            this.grapeRow.children(".col").first().after(this.blockHTML);
        }
        this.lastBlock = this.grapeRow.children(".grape-block").last();
        // Clear values
        this.lastBlock.children(".input-field").each((_: number, inputField: HTMLDivElement) => {
            $(inputField).val();
        });
        this.renumberBlocks();
        const newBlockId = this.getId(this.lastBlock);
        this.hideShowDiv(newBlockId, HideOrShow.Show);
    }

    /**
     * Creates new grape inputs and minus button, sets the percent value in the
     * percent field of next grape form to the remaining percentage.
     */
    private addGrapeInput(): void {
        let lastVisibleId = this.getId(this.lastBlock) || 0;
        this.newDiv();
        lastVisibleId++;
        // Only set the percentage if other grapes have percentages
        if (this.hasGrapePct(lastVisibleId)) {
            this.setGrapePct(lastVisibleId, this.remGrapePct(lastVisibleId));
        }
        this.setUpRemoveListeners();
        this.updateAutocomplete();
    }

    /**
     * Delete a grape with the given id and its accompanying block. This will be
     * tricky because need to renumber all grape blocks after the deleted grape
     * block.
     */
    private deleteGrape(id: number): void {
        this.getBlockById(id).remove();
        this.renumberBlocks();
        this.lastBlock = this.grapeRow.children(".grape-block").last();
        this.setUpRemoveListeners();
    }

    /**
     * Sets up event listeners.
     */
    private setUpListeners(): void {
        this.setUpAddListener();
        this.setUpRemoveListeners();
    }

    private setUpRemoveListeners(): void {
        $(".grape-btn.remove").off("click");
        $(".grape-btn-remove").on("click", (event) => {
            // event.target is the inner <i/> element
            const idStr = $(event.target).parent().attr("id") as string;
            this.deleteGrape(parseInt(idStr.substr(idStr.length - 1), 10));
            event.stopImmediatePropagation();
        });
    }

    private setUpAddListener(): void {
        $(".grape-btn.add").unbind("click");
        $(".grape-btn-add").on("click", () => {
            this.addGrapeInput();
        });
    }

    private updateAutocomplete(): void {
        autocomplete("grape", 5, 1, "[id^=auto-grape-]");
    }
}
