import { createElement } from "react";
import { render } from "react-dom";
import { GrapeFormApp } from "../../components/GrapesFormApp";
import { toggleRating, toggleRegion, updateVitiAreaSelections} from "../../lib/new_wines";
import SpecialCharController from "../../lib/SpecialCharController";
import { autocomplete, hFloatingActnBtn, navbar, modal } from "../../lib/widgets";
import { FormSelect } from "materialize-css";
import { selectById, onLoad } from "../../lib/JQueryCompat";

declare const hasRating: boolean;

const REGION = selectById("auto-region") as HTMLInputElement;

onLoad(() => {
    navbar();
    const specCharCtl = new SpecialCharController();
    hFloatingActnBtn();
    const selects = document.querySelectorAll('select');
    const instances = FormSelect.init(selects);

    autocomplete("wine-type");
    autocomplete("producer");
    toggleRegion(selectById("auto-producer") as HTMLInputElement, REGION);
    autocomplete("region");
    toggleRating(selectById("has-rating") as HTMLInputElement, selectById("rating") as HTMLInputElement,
                 hasRating);
    updateVitiAreaSelections(REGION, selectById("auto-viti-area") as HTMLInputElement);
    render(createElement(GrapeFormApp),
           document.getElementById("grapes-form-app-container"));
    modal("delete-modal")
});

// Gave weird error when in same document ready function
onLoad(() => {
    // Run first for initial region
    REGION.triggerChange();
});
