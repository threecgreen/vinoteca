import { toggleRegion, updateVitiAreaSelections, toggleRating, showNextGrapeInput } from "../../lib/new_wines";
import { autocomplete, navbar } from "../../lib/widgets";
import { specialChars } from "../../lib/special_chars";

declare const hasRating: boolean;

const region: JQuery<HTMLInputElement> = $("#auto-region");

$(() => {
    navbar();
    specialChars();
    $('select').formSelect();

    autocomplete("wine-type");
    autocomplete("producer");
    toggleRegion($('#auto-producer'), region);
    autocomplete("region");
    toggleRating($("#has-rating")[0] as HTMLInputElement, $("#rating")[0] as HTMLInputElement,
                 hasRating);
    updateVitiAreaSelections(region, $('#auto-viti-area'));
    showNextGrapeInput($(".grape-btn"));
});

// Gave weird error when in same document ready function
$(() => {
    autocomplete("grape", 5, 1, "[id^=auto-grape-]");
    // Run first for initial region
    $(region).trigger("change");
})
