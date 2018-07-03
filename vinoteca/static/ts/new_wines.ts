/// <reference path ="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path ="../../../node_modules/@types/materialize-css/index.d.ts" />

import { datepicker } from "./widgets";

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
export function toggleRating(hasRatingSelector: JQuery<HTMLInputElement>, ratingSelector: JQuery<HTMLInputElement>): void {
    $(hasRatingSelector).prop("checked", false);
    $(hasRatingSelector).on("click", function () {
        $(ratingSelector).prop("disabled", !$(this).prop("checked"));
    });
}

/** Show additional grape forms with click of + button. */
export function showNextGrapeInput(grapeBtnSelector: JQuery<HTMLButtonElement>): void {
    $(grapeBtnSelector).on("click", function () {
        // Hide parent div and thus self
        $(this).parent().hide();
        let id_num = this.id.slice(-1);
        // All elements starting with grape-form-2
        $("[id^=grape-form-" + id_num + "]").show();
        //"Show next plus b"tton if less"t"an 5
        if (parseInt(id_num) < 5) {
            let grape_btn_parent = $("#grape-btn-" + (parseInt(id_num) + 1).toString()).parent();
            grape_btn_parent.show();
            grape_btn_parent.parent().show();
        }
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
    wineType: JQuery<HTMLInputElement>, color: JQuery<HTMLInputElement>, producer: JQuery<HTMLInputElement>, region: JQuery<HTMLInputElement>,
    vitiArea: JQuery<HTMLInputElement>) {

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