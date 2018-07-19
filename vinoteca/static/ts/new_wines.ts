/// <reference path ="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path ="../../../node_modules/@types/materialize-css/index.d.ts" />

/// <reference path ="./utils.ts" />

import { pipe, range } from "utils";

/** Disable region selection if producer is chosen and show grayed region for that producer. */
export function toggleRegion(producer: JQuery<HTMLInputElement>, region: JQuery<HTMLInputElement>,
    producerRegionURL: string, producersURL: string): void {

    $(producer).on("change", () => {
        $.getJSON(producersURL, (responseJSON) => {
            if ($.inArray($(producer).val(), Object.keys(responseJSON)) !== -1) {
                $.getJSON(producerRegionURL, { "producer": $(producer).val() }, (responseJSON) => {
                    $(region).val(responseJSON["country_name"]);
                    $(region).prop('disabled', true);
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
    })
}

/** Update viticultural area autocomplete depending on region selection. */
export function updateVitiAreaSelections(region: JQuery<HTMLInputElement>, viti_area: JQuery<HTMLInputElement>,
    getJSONURL: string): void {

    $(region).on("change", function () {
        $.get(getJSONURL, { "country": $(this).val() }, (responseJSON) => {
            $(viti_area).autocomplete({
                data: responseJSON,
                limit: 5,
                minLength: 1
            });
        });
    });;
}

/** Enables/disables a rating slider depending on the state of checkbox. */
export function toggleRating(hasRatingSelector: JQuery<HTMLInputElement>, ratingSelector: JQuery<HTMLInputElement>,
    checked = false): void {

    $(hasRatingSelector).prop("checked", checked);
    $(hasRatingSelector).on("click", function () {
        $(ratingSelector).prop("disabled", !$(this).prop("checked"));
    });
}

/** Determine the percentage of grape composition not yet accounted for. */
function remGrapePct(lastVisibleId: number): number {
    return range(lastVisibleId).reduce((sum, i) => {
        return sum + <number>$(`[id^=grape-${i + 1}-pct]`).val()
    });
    // let sum = 0;
    // for (let i = 1; i <= lastVisibleId; i++) {
    //     sum += <number>$(`[id^=grape-${i}-pct]`).val();
    // }
    // return sum;
}

function setGrapePct(id: number): void {
    $(`[id^=grape-${id}-pct`).val(id);
}

/** Show additional grape forms with click of + button. */
export function showNextGrapeInput(grapeBtnSelector: JQuery<HTMLButtonElement>): void {
    $(grapeBtnSelector).on("click", function () {
        // Hide parent div and thus self
        $(this).parent().hide();
        let id = parseInt(this.id.slice(-1));
        // All elements starting with grape-form-2
        $(`[id^=grape-form-${id}]`).show();
        // Show next plus button if less than 5
        if (id < 5) {
            let grape_btn_parent = $(`#grape-btn-${id + 1}`).parent();
            grape_btn_parent.show();
            grape_btn_parent.parent().show();
        }
        // Update wine percentage
        pipe(remGrapePct(id)).chain(setGrapePct);
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
    $("#reset-btn").on("click", function () {
        (<HTMLFormElement>$("form")[0]).reset();
        clearTable();
    });
}


/** Update search results when search fields change */
export function liveWineSearch(searchParams: JQuery<HTMLInputElement>[], searchURL: string,
    wineType: JQuery<HTMLInputElement>, color: JQuery<HTMLInputElement>, producer: JQuery<HTMLInputElement>,
    region: JQuery<HTMLInputElement>, vitiArea: JQuery<HTMLInputElement>) {

    $(searchParams).on("change", function (e) {
        // Prevents double event
        if (e.originalEvent) {
            return;
        }
        clearTable();
        // Send search fields data to Search Wines URL
        $.get(searchURL, {
            "wine_type": wineType.val(),
            "color": color.val(),
            "producer": producer.val(),
            "country": region.val(),
            "viti_area": vitiArea.val()
        }, function (responseJSON) {
            // Update search results with received data
            // Greater than 1 because spaces count in length
            console.log(responseJSON);
            if (responseJSON["results"].length > 1) {
                $("table tbody").append(responseJSON["results"]);
                $("table").show();
            } else {
                $("#no-results").show();
            }
        });
    });
}