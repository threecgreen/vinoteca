import GrapeController from "../../lib/GrapeController";
import { toggleRating, toggleRegion, updateVitiAreaSelections } from "../../lib/new_wines";
import SpecialCharController from "../../lib/SpecialCharController";
import { autocomplete, datepicker, navbar } from "../../lib/widgets" ;

$(() => {
    navbar("new-wine-nav");
    datepicker();
    $("select").formSelect();

    autocomplete("store");
    autocomplete("wine-type");
    autocomplete("producer");
    autocomplete("region");
    const region: JQuery<HTMLInputElement> = $("#auto-region");
    toggleRegion($("#auto-producer"), region);
    updateVitiAreaSelections(region, $("#auto-viti-area"));

    toggleRating($("#has-rating")[0] as HTMLInputElement, $("#rating")[0] as HTMLInputElement);

    const grapeCtl = new GrapeController(".grape-block");
    const specCharCtl = new SpecialCharController();
});
