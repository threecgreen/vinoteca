/// <reference path ="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path ="../../../node_modules/@types/materialize-css/index.d.ts" />

/** Disable region selection if producer is chosen and show grayed region for that producer */
export function toggleRegion(producer: JQuery<HTMLInputElement>, region: JQuery<HTMLInputElement>,
    producerRegionURL: string, producersURL: string): void {
    let producers: string[];
    $.getJSON(producersURL, (responseJSON) => {
        producers = responseJSON.keys;
    });
    $(producer).on("change", function () {
        if ($.inArray($(this).val(), producers) !== -1) {
            $.getJSON(producerRegionURL, { 'producer': $(this).val() }, (responseJSON) => {
                $(region).val(responseJSON["country_name"]);
                $(region).prop('disabled', true);
                $("label[for='auto-country']").text("");
                // Update viticultural area autocomplete
                $(region).trigger("change");
            }
            )
        } else {
            $(region).prop('disabled', false);
            $(region).val("");
            $("label[for='auto-country']").text("Country");
        }
    });
}

/** Update viticultural area autocomplete depending on region selection */
export function updateVitiAreaSelections(region: JQuery<HTMLInputElement>, viti_area: JQuery<HTMLInputElement>,
    getJSONURL: string): void {
    $(region).on("change", function () {
        $.get(getJSONURL, { "country": $(this).val() }, (responseJSON) => {
            console.log(responseJSON);
            $(viti_area).autocomplete({
                data: responseJSON,
                limit: 5,
                minLength: 1
            });
        }
        )
    });
}