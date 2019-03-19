import * as M from "materialize-css";
import { IRegionJSON, IRESTObject, IVitiAreaJSON } from "./rest";
import { restObjsToNameDict, IDict } from "./utils";

/** Disable region selection if producer is chosen and show grayed region for that producer. */
export function toggleRegion(producer: JQuery<HTMLInputElement>,
                             region: JQuery<HTMLInputElement>): void {
    // If no region or other error, disable field
    const noRegion = () => {
        $(region).prop("disabled", false);
        $(region).val("");
        $("label[for='auto-region']").text("Region");
    };
    $(producer).on("change", () => {
        $.getJSON("/rest/producers/all/", (producersJSON: IDict<string>) => {
            if ($.inArray($(producer).val(), Object.keys(producersJSON)) !== -1) {
                $.getJSON("/rest/regions/",
                          { producers__name: $(producer).val() },
                          (regionJSON: IRegionJSON[]) => {
                    if (regionJSON.length > 0) {
                        $(region).val(regionJSON[0].name);
                        // Fix overlapping text bug
                        M.updateTextFields();
                        $(region).prop("disabled", true);
                        $("label[for='auto-country']").text("");
                        // Update viticulture area autocomplete
                        $(region).trigger("change");
                    } else {
                        noRegion();
                    }
                });
            } else {
                noRegion();
            }
        });
    });
}

/** Update viticultural area autocomplete depending on region selection. */
export function updateVitiAreaSelections(region: JQuery<HTMLInputElement>,
                                         vitiArea: JQuery<HTMLInputElement>): void {
    $(region).on("change", function() {
        $.get("/rest/viti-areas/", { region__name: $(this).val() },
              (responseJSON: IVitiAreaJSON[]) => {
            // const vitiAreasDict = flattenToDict(responseJSON as IRESTObject[]);
            // console.log(vitiAreasDict);
            $(vitiArea).autocomplete({
                data: restObjsToNameDict(responseJSON as IRESTObject[]),
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
