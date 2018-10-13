import $ = require("jquery");
import { flattenToDict, IRESTObject } from "./utils";

/** Disable region selection if producer is chosen and show grayed region for that producer. */
export function toggleRegion(producer: JQuery<HTMLInputElement>, region: JQuery<HTMLInputElement>,
                             producerRegionURL: string, producersURL: string): void {

    $(producer).on("change", () => {
        $.getJSON(producersURL, (producersJSON) => {
            if ($.inArray($(producer).val(), Object.keys(producersJSON)) !== -1) {
                $.getJSON(producerRegionURL,
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
                                         vitiArea: JQuery<HTMLInputElement>,
                                         getJSONURL: string): void {
    $(region).on("change", function() {
        $.get(getJSONURL, { region__name: $(this).val() }, (responseJSON) => {
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
export function toggleRating(hasRatingSelector: JQuery<HTMLInputElement>,
                             ratingSelector: JQuery<HTMLInputElement>,
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

/** Show additional grape forms with click of + button. */
export function showNextGrapeInput(grapeBtnSelector: JQuery<HTMLButtonElement>): void {
    $(grapeBtnSelector).on("click", function() {
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
function clearTable() {
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

/** Update search results when search fields change */
export function liveWineSearch(searchParams: Array<JQuery<HTMLInputElement>>, searchURL: string,
                               wineType: JQuery<HTMLInputElement>, color: JQuery<HTMLInputElement>,
                               producer: JQuery<HTMLInputElement>, region: JQuery<HTMLInputElement>,
                               vitiArea: JQuery<HTMLInputElement>) {

    $(searchParams).on("change", (event) => {
        // Prevents double event
        if (event.originalEvent) {
            return;
        }
        // Send search fields data to Search Wines URL
        $.get(searchURL, {
            color: color.val(),
            producer: producer.val(),
            region: region.val(),
            viti_area: vitiArea.val(),
            wine_type: wineType.val(),
        }, (searchResultsJSON) => {
            clearTable();
            // Update search results with received data
            // Greater than 1 because spaces count in length
            if (searchResultsJSON["results"].length > 1) {
                $("table tbody").append(searchResultsJSON["results"]);
                $("table").show();
            } else {
                $("#no-results").show();
            }
        });
    });
}
