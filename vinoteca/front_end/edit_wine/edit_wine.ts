import GrapeController from "../../lib/GrapeController";
import { toggleRating, toggleRegion, updateVitiAreaSelections} from "../../lib/new_wines";
import SpecialCharController from "../../lib/SpecialCharController";
import { autocomplete, hFloatingActnBtn, navbar } from "../../lib/widgets";

declare const hasRating: boolean;

const region: JQuery<HTMLInputElement> = $("#auto-region");

$(() => {
    navbar();
    const specCharCtl = new SpecialCharController();
    hFloatingActnBtn();
    $("select").formSelect();

    autocomplete("wine-type");
    autocomplete("producer");
    toggleRegion($("#auto-producer"), region);
    autocomplete("region");
    toggleRating($("#has-rating")[0] as HTMLInputElement, $("#rating")[0] as HTMLInputElement,
                 hasRating);
    updateVitiAreaSelections(region, $("#auto-viti-area"));
    const grapeCtl = new GrapeController(".grape-block");
    $("#delete-modal").modal();
});

// Gave weird error when in same document ready function
$(() => {
    // Run first for initial region
    $(region).trigger("change");
});
