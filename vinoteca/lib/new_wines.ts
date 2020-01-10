import { updateTextFields } from "materialize-css";
import { get } from "./ApiHelper";
import { getRegion, getVitiAreas } from "./RestApi";
import { IVitiArea } from "./Rest";
import { IDict, restModelsToNameDict } from "./utils";
import { staticAutocomplete } from "./widgets";

/** Disable region selection if producer is chosen and show grayed region for that producer. */
export function toggleRegion(producerInput: HTMLInputElement, regionInput: HTMLInputElement): void {
    // If no region or other error, disable field
    const noRegion = () => {
        regionInput.disabled = false;
        regionInput.value = "";
        // $("label[for='auto-region']").text("Region");
    };
    producerInput.onChange(async () => {
        const producers: IDict<string> = await get("/rest/producers/all/");
        if (!(producerInput.value in producers)) {
            noRegion();
            return Promise.resolve();
        }
        try {
            const region = await getRegion({producerName: producerInput.value});
            regionInput.value = region.name;
            // Fix overlapping text bug
            updateTextFields();
            regionInput.disabled = true;
            // $("label[for='auto-country']").text("");
            // Update viticulture area autocomplete
            regionInput.triggerChange();
        } catch (err) {
            noRegion();
            return Promise.reject(err);
        }
    });
}

/** Update viticultural area autocomplete depending on region selection. */
export function updateVitiAreaSelections(regionInput: HTMLInputElement,
                                         vitiAreaInput: HTMLInputElement): void {
    regionInput.onChange(() => {
        getVitiAreas({regionName: regionInput.value})
            .then((vitiAreas: IVitiArea[]) => {
                staticAutocomplete(vitiAreaInput.id, restModelsToNameDict(vitiAreas),
                                   () => undefined);
            });
    });
}

/** Enables/disables a rating slider depending on the state of checkbox. */
export function toggleRating(hasRatingSelector: HTMLInputElement,
                             ratingSelector: HTMLInputElement,
                             checked = false) {
    hasRatingSelector.checked = checked;
    hasRatingSelector.onclick = () => {
        ratingSelector.disabled = !hasRatingSelector.checked;
    };
}
