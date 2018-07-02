import $ from "jquery"
import "materialize-css"
import { Dict } from "./dict"


/** Disable region selection if producer is chosen and show grayed region for that producer */
export function toggleRegion(producer: JQuery<HTMLInputElement>, country: JQuery<HTMLInputElement>,
    producerRegionURL: string, producersURL: string): void {
    let producers: string[];
    $.getJSON(producersURL, (responseJSON) => {
        responseJSON.forEach(element => {
            producers.push(element);
        });
    });
    $(producer).on("change", function () {
        if ($.inArray($(this).val(), producers) !== -1) {
            $.getJSON(producerRegionURL, { 'producer': $(this).val() }, (responseJSON) => {
                $(country).val(responseJSON["country_name"]);
                $(country).prop('disabled', true);
                $("label[for='auto-country']").text("");
                // Update viticultural area autocomplete
                $(country).trigger("change");
            }
            )
        } else {
            $(country).prop('disabled', false);
            $(country).val("");
            $("label[for='auto-country']").text("Country");
        }
    });
}

/** Update viticultural area autocomplete depending on country selection */
export function updateVitiAreaSelections(country: JQuery<HTMLInputElement>, viti_area: JQuery<HTMLInputElement>,
    getJSONURL: string): void {
    $(country).on("change", () => {
        $.get(getJSONURL, { "country": $(this).val() }, (responseJSON) => {
                $(viti_area).autocomplete({
                    data: responseJSON,
                    limit: 5,
                    minLength: 1
                });
            }
        )
    });
}