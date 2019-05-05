import * as $ from "jquery";
import { createElement } from "react";
import { render } from "react-dom";
import { GrapeFormApp } from "../../components/GrapesFormApp";
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

    render(createElement(GrapeFormApp),
           document.getElementById("grapes-form-app-container"));
    const specCharCtl = new SpecialCharController();
});
