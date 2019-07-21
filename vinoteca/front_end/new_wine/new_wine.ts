import { FormSelect } from "materialize-css";
import { createElement } from "react";
import { render } from "react-dom";
import { GrapeFormApp } from "../../components/GrapesFormApp";
import { onLoad, selectById } from "../../lib/JQueryCompat";
import { toggleRating, toggleRegion, updateVitiAreaSelections } from "../../lib/new_wines";
import SpecialCharController from "../../lib/SpecialCharController";
import { autocomplete, datepicker, navbar } from "../../lib/widgets";

onLoad(() => {
    navbar("new-wine-nav");
    datepicker();
    const selects = document.querySelectorAll('select');
    const instances = FormSelect.init(selects);

    autocomplete("store");
    autocomplete("wine-type");
    autocomplete("producer");
    autocomplete("region");
    const region = document.getElementById("auto-region") as HTMLInputElement;
    toggleRegion(document.getElementById("auto-producer") as HTMLInputElement, region);
    updateVitiAreaSelections(region, selectById("auto-viti-area") as HTMLInputElement);

    toggleRating(selectById("has-rating") as HTMLInputElement, selectById("rating") as HTMLInputElement);

    render(createElement(GrapeFormApp),
           document.getElementById("grapes-form-app-container"));
    const specCharCtl = new SpecialCharController();
});
