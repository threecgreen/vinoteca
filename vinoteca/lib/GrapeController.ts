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
export class GrapeController {
    private selectorPrefix: string;
    private lastBlock: JQuery<HTMLDivElement>;
    private grapeRow: JQuery<HTMLDivElement>;

    constructor(selectorPrefix: string) {
        this.selectorPrefix = selectorPrefix;
        this.lastBlock = $(selectorPrefix).last() as JQuery<HTMLDivElement>;
        this.grapeRow = this.lastBlock.parent();
        this.setUpListeners();
        // console.log(`grapeRow = ${this.grapeRow}`);
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
        const grapePctInput = elem.children(`#grape-form-${oldId}-pct`);
        grapePctInput.attr("id", `grape-form-${id}-pct`);
        grapePctInput.children().first().attr("id", `grape-${id}-pct`);
        grapePctInput.children().first().attr("name", `grape-${id}-pct`);
        grapePctInput.children().last().attr("for", `grape-${id}-pct`);
        const grapeNameInput = elem.children(`#grape-form-${oldId}-name`);
        grapeNameInput.attr("id", `auto-grape-${id}`);
        grapePctInput.children().first().attr("id", `auto-grape-${id}`);
        grapePctInput.children().first().attr("name", `grape-${id}`);
        grapePctInput.children().last().attr("for", `auto-grape-${id}`);
        const buttonDiv = elem.children(".col").last();
        buttonDiv.children(`#grape-btn-add-${oldId}`).attr("id", `grape-btn-add-${id}`);
        buttonDiv.children(`#grape-btn-remove-${oldId}`).attr("id", `grape-btn-remove-${id}`);
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
     * Hides or shows the grape add and remove buttons of the given id.
     */
    private hideShowButtons(id: number, hideOrShow: HideOrShow): void {
        const addBtn = $(`#grape-btn-add-${id}`);
        const removeBtn = $(`#grape-btn-remove-${id}`);
        switch (hideOrShow) {
            case HideOrShow.Hide:
                addBtn.hide();
                removeBtn.hide();
                return;
            case HideOrShow.Show:
                addBtn.show();
                removeBtn.show();
                return;
        }
    }

    /**
     * Determine the percentage of grape composition not yet accounted for.
     */
    private remGrapePct(lastVisibleId: number): number {
        let sum = 0;
        for (let i = 1; i < lastVisibleId; i++) {
            sum += parseInt($(`#grape-${i}-pct`).val() as string, 10);
        }
        return sum < 100 ? 100 - sum : 0;
    }

    /**
     * Updates a percentage for a given grape id.
     */
    private setGrapePct(id: number, pct: number): void {
        $(`#grape-${id}-pct`).val(pct);
    }

    /**
     * Creates a new grape block copied from the last grape block and cleared
     * data.
     */
    private newDiv(): void {
        const newGrapeBlock = this.lastBlock.clone();
        this.grapeRow.append(newGrapeBlock);
        // Clear values
        this.grapeRow.children(".input-field").each((_: number, inputField: HTMLInputElement) => {
            $(inputField).val();
        });
        this.renumberBlocks();
        this.lastBlock = newGrapeBlock;
        this.hideShowButtons(this.getId(this.lastBlock), HideOrShow.Show);
    }

    /**
     * Hides old buttons, shows next grape form and its buttons, sets the
     * percent value in the percent field of next grape form to the remaining
     * percentage, and creates a new hidden grape block.
     */
    private showNext(): void {
        // Hide currently shown buttons
        const lastVisibleId = this.getId(this.lastBlock);
        this.hideShowButtons(lastVisibleId, HideOrShow.Hide);
        this.newDiv();
        this.setGrapePct(lastVisibleId + 1, this.remGrapePct(lastVisibleId));
        this.setUpListeners();
    }

    /**
     * Delete a grape with the given id and its accompanying block. This will be
     * tricky because need to renumber all grape blocks after the deleted grape
     * block.
     */
    private deleteGrape(id: number): void {
        this.getBlockById(id).remove();
        this.renumberBlocks();
        this.setUpListeners();
    }

    /**
     * Sets up event listeners.
     */
    private setUpListeners(): void {
        $(".grape-btn-add").on("click", () => {
            console.debug("Add button clicked.");
            this.showNext();
        });
        $(".grape-btn-remove").on("click", (event) => {
            console.debug("Remove button clicked.");
            const clickedElem = $(event.target);
            this.deleteGrape(this.getId(clickedElem.data("id")));
        });
    }
}
