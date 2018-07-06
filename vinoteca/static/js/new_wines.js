/// <reference path ="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path ="../../../node_modules/@types/materialize-css/index.d.ts" />
/** Disable region selection if producer is chosen and show grayed region for that producer. */
export function toggleRegion(producer, region, producerRegionURL, producersURL) {
    $(producer).on("change", function () {
        $.getJSON(producersURL, function (responseJSON) {
            if ($.inArray($(producer).val(), Object.keys(responseJSON)) !== -1) {
                $.getJSON(producerRegionURL, { "producer": $(producer).val() }, function (responseJSON) {
                    $(region).val(responseJSON["country_name"]);
                    $(region).prop('disabled', true);
                    $("label[for='auto-country']").text("");
                    // Update viticulture area autocomplete
                    $(region).trigger("change");
                });
            }
            else {
                $(region).prop("disabled", false);
                $(region).val("");
                $("label[for='auto-region']").text("Region");
            }
        });
    });
}
/** Update viticultural area autocomplete depending on region selection. */
export function updateVitiAreaSelections(region, viti_area, getJSONURL) {
    $(region).on("change", function () {
        $.get(getJSONURL, { "country": $(this).val() }, function (responseJSON) {
            $(viti_area).autocomplete({
                data: responseJSON,
                limit: 5,
                minLength: 1
            });
        });
    });
    ;
}
/** Enables/disables a rating slider depending on the state of checkbox. */
export function toggleRating(hasRatingSelector, ratingSelector, checked) {
    if (checked === void 0) { checked = false; }
    $(hasRatingSelector).prop("checked", checked);
    $(hasRatingSelector).on("click", function () {
        $(ratingSelector).prop("disabled", !$(this).prop("checked"));
    });
}
/** Show additional grape forms with click of + button. */
export function showNextGrapeInput(grapeBtnSelector) {
    $(grapeBtnSelector).on("click", function () {
        // Hide parent div and thus self
        $(this).parent().hide();
        var id_num = this.id.slice(-1);
        // All elements starting with grape-form-2
        $("[id^=grape-form-" + id_num + "]").show();
        //"Show next plus b"tton if less"t"an 5
        if (parseInt(id_num) < 5) {
            var grape_btn_parent = $("#grape-btn-" + (parseInt(id_num) + 1).toString()).parent();
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
export function resetFormBtn() {
    $("#reset-btn").on("click", function () {
        $("form")[0].reset();
        clearTable();
    });
}
/** Update search results when search fields change */
export function liveWineSearch(searchParams, searchURL, wineType, color, producer, region, vitiArea) {
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
            }
            else {
                $("#no-results").show();
            }
        });
    });
}
//# sourceMappingURL=new_wines.js.map