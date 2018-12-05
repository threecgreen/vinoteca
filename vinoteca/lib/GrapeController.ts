import { pipe } from "./utils";

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
    }

    private getId(elem: JQuery<HTMLElement>): number {
        return parseInt(elem.attr("id") as string, 10);
    }

    private getBlockById(id: number): JQuery<HTMLDivElement> {
        return $(`${this.selectorPrefix}#${id}`).first() as JQuery<HTMLDivElement>;
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
                addBtn.hide();
                removeBtn.hide();
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
        this.grapeRow.children(".input-field").each(function() {
            $(this).val();
        });
        // TODO: set ids
        this.lastBlock = newGrapeBlock;
    }

    /**
     * Hides old buttons, shows next grape form and its buttons, sets the
     * percent value in the percent field of next grape form to the remaining
     * percentage, and creates a new hidden grape block.
     */
    private showNext(): void {
        // Hide currently shown buttons
        const newVisibleId = this.getId(this.lastBlock);
        this.hideShowButtons(newVisibleId - 1, HideOrShow.Hide);
        this.setGrapePct(newVisibleId, this.remGrapePct(newVisibleId));
        this.newDiv();
    }

    /**
     * Delete a grape with the given id and its accompanying block. This will be
     * tricky because need to renumber all grape blocks after the deleted grape
     * block.
     */
    private deleteGrape(id: number): void {
        this.getBlockById(id).remove();
        // TODO: set other ids
    }
}
