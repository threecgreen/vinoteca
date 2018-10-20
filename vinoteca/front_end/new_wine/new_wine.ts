import "materialize-css";
import { showNextGrapeInput, toggleRating, toggleRegion,
         updateVitiAreaSelections } from "../../lib/new_wines";
import { specialChars } from "../../lib/special_chars";
import { autocomplete, datepicker, navbar } from "../../lib/widgets" ;

$(() => {
    navbar();
    datepicker();
    $("select").formSelect();

    autocomplete("store");
    autocomplete("wine-type");
    autocomplete("producer");
    autocomplete("region");
    autocomplete("grape", 5, 1, "[id^=auto-grape-]");

    const region: JQuery<HTMLInputElement> = $("#auto-region");
    toggleRegion($("#auto-producer"), region);
    updateVitiAreaSelections(region, $("#auto-viti-area"));

    toggleRating($("#has-rating")[0] as HTMLInputElement, $("#rating")[0] as HTMLInputElement);

    showNextGrapeInput($(".grape-btn"));
    specialChars();
});