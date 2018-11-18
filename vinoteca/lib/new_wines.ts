import { flattenToDict, IRESTObject } from "./utils";

/** Disable region selection if producer is chosen and show grayed region for that producer. */
export function toggleRegion(producer: JQuery<HTMLInputElement>,
                             region: JQuery<HTMLInputElement>): void {
    $(producer).on("change", () => {
        $.getJSON("/rest/producers/all/", (producersJSON) => {
            if ($.inArray($(producer).val(), Object.keys(producersJSON)) !== -1) {
                $.getJSON("/rest/regions/",
                          { producers__name: $(producer).val() },
                          (regionJSON) => {
                    $(region).val(regionJSON[0]["name"]);
                    $(region).prop("disabled", true);
                    $("label[for='auto-country']").text("");
                    // Update viticulture area autocomplete
                    $(region).trigger("change");
                });
            } else {
                $(region).prop("disabled", false);
                $(region).val("");
                $("label[for='auto-region']").text("Region");
            }
        });
    });
}

/** Update viticultural area autocomplete depending on region selection. */
export function updateVitiAreaSelections(region: JQuery<HTMLInputElement>,
                                         vitiArea: JQuery<HTMLInputElement>): void {
    $(region).on("change", function() {
        $.get("/rest/viti-areas/", { region__name: $(this).val() }, (responseJSON) => {
            // const vitiAreasDict = flattenToDict(responseJSON as IRESTObject[]);
            // console.log(vitiAreasDict);
            $(vitiArea).autocomplete({
                data: flattenToDict(responseJSON as IRESTObject[]),
                limit: 5,
                minLength: 1,
            });
        });
    });
}

/** Enables/disables a rating slider depending on the state of checkbox. */
export function toggleRating(hasRatingSelector: HTMLInputElement,
                             ratingSelector: HTMLInputElement,
                             checked = false): void {
    $(hasRatingSelector).prop("checked", checked);
    $(hasRatingSelector).on("click", function() {
        $(ratingSelector).prop("disabled", !$(this).prop("checked"));
    });
}

/** Determine the percentage of grape composition not yet accounted for. */
function remGrapePct(lastVisibleId: number): number {
    let sum = 0;
    for (let i = 1; i < lastVisibleId; i++) {
        sum += parseInt($(`#grape-${i}-pct`).val() as string, 10);
    }
    return sum < 100 ? 100 - sum : 0;
}

/** Updates a percentage for a given grape id.  */
function setGrapePct(id: number, pct: number): void {
    $(`#grape-${id}-pct`).val(pct);
}

export class GrapeBtnListener {
    private selector: JQuery<HTMLButtonElement>;
    constructor(selector: JQuery<HTMLButtonElement>) {
        this.selector = selector;
    }

    private setupPlusBtn() {
        this.selector.on("click", function() {
            // Hide parent div and thus self
            $(this).parent().hide();
            const id = parseInt(this.id.slice(-1), 10);
            // All elements starting with grape-form-2
            $(`[id^=grape-form-${id}]`).show();
            // Show next plus button if less than 5
            if (id < 5) {
                const grapeBtnParent = $(`#grape-btn-${id + 1}`).parent();
                grapeBtnParent.show();
                grapeBtnParent.parent().show();
            }
            // Update wine percentage
            setGrapePct(id, remGrapePct(id));
        });
    }

    private setupMinusBtn() {
        console.warn("not implemented");
    }
}

/** Show additional grape forms with click of + button. */
export function showNextGrapeInput(grapeBtnSelector: JQuery<HTMLButtonElement>): void {
    grapeBtnSelector.on("click", function() {
        // Hide parent div and thus self
        $(this).parent().hide();
        const id = parseInt(this.id.slice(-1), 10);
        // All elements starting with grape-form-2
        $(`[id^=grape-form-${id}]`).show();
        // Show next plus button if less than 5
        if (id < 5) {
            const grapeBtnParent = $(`#grape-btn-${id + 1}`).parent();
            grapeBtnParent.show();
            grapeBtnParent.parent().show();
        }
        // Update wine percentage
        setGrapePct(id, remGrapePct(id));
    });
}

/** Helper function for clearing table */
export function clearTable() {
    $("table").hide();
    $("#no-results").hide();
    $("table tbody").empty();
}

/** Empty all fields when reset button is clicked */
export function resetFormBtn(): void {
    $("#reset-btn").on("click", () => {
        ($("form")[0] as HTMLFormElement).reset();
        clearTable();
    });
}
