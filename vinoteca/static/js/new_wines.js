/// <reference path ="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path ="../../../node_modules/@types/materialize-css/index.d.ts" />
/** Disable region selection if producer is chosen and show grayed region for that producer. */
export function toggleRegion(producer, region, producerRegionURL, producersURL) {
    $(producer).on("change", function () {
        $.getJSON(producersURL, function (producersJSON) {
            if ($.inArray($(producer).val(), Object.keys(producersJSON)) !== -1) {
                $.getJSON(producerRegionURL, { producer: $(producer).val() }, function (regionJSON) {
                    $(region).val(regionJSON["region_name"]);
                    $(region).prop("disabled", true);
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
export function updateVitiAreaSelections(region, vitiArea, getJSONURL) {
    $(region).on("change", function () {
        $.get(getJSONURL, { region: $(this).val() }, function (responseJSON) {
            $(vitiArea).autocomplete({
                data: responseJSON,
                limit: 5,
                minLength: 1
            });
        });
    });
}
/** Enables/disables a rating slider depending on the state of checkbox. */
export function toggleRating(hasRatingSelector, ratingSelector, checked) {
    if (checked === void 0) { checked = false; }
    $(hasRatingSelector).prop("checked", checked);
    $(hasRatingSelector).on("click", function () {
        $(ratingSelector).prop("disabled", !$(this).prop("checked"));
    });
}
/** Determine the percentage of grape composition not yet accounted for. */
function remGrapePct(lastVisibleId) {
    var sum = 0;
    for (var i = 1; i < lastVisibleId; i++) {
        sum += parseInt($("#grape-" + i + "-pct").val(), 10);
    }
    return sum < 100 ? 100 - sum : 0;
}
/** Updates a percentage for a given grape id.  */
function setGrapePct(id, pct) {
    $("#grape-" + id + "-pct").val(pct);
}
/** Show additional grape forms with click of + button. */
export function showNextGrapeInput(grapeBtnSelector) {
    $(grapeBtnSelector).on("click", function () {
        // Hide parent div and thus self
        $(this).parent().hide();
        var id = parseInt(this.id.slice(-1), 10);
        // All elements starting with grape-form-2
        $("[id^=grape-form-" + id + "]").show();
        // Show next plus button if less than 5
        if (id < 5) {
            var grapeBtnParent = $("#grape-btn-" + (id + 1)).parent();
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
export function resetFormBtn() {
    $("#reset-btn").on("click", function () {
        $("form")[0].reset();
        clearTable();
    });
}
/** Update search results when search fields change */
export function liveWineSearch(searchParams, searchURL, wineType, color, producer, region, vitiArea) {
    $(searchParams).on("change", function (event) {
        // Prevents double event
        if (event.originalEvent) {
            return;
        }
        clearTable();
        // Send search fields data to Search Wines URL
        $.get(searchURL, {
            color: color.val(),
            producer: producer.val(),
            region: region.val(),
            viti_area: vitiArea.val(),
            wine_type: wineType.val()
        }, function (searchResultsJSON) {
            // Update search results with received data
            // Greater than 1 because spaces count in length
            if (searchResultsJSON["results"].length > 1) {
                $("table tbody").append(searchResultsJSON["results"]);
                $("table").show();
            }
            else {
                $("#no-results").show();
            }
        });
    });
}
//# sourceMappingURL=new_wines.js.map