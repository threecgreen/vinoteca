import { get } from "../../lib/ApiHelper";
import { onLoad } from "../../lib/JQueryCompat";
import { Grape, IWineGrape } from "../../lib/RestTypes";
import { autocomplete, datepicker, modal, navbar, tabs } from "../../lib/widgets";
import { applyChart, pieChart } from "../../lib/wine_charts";

declare const wineId: number;

onLoad(() => {
    // Wine profile stuff
    navbar();
    tabs();
    // Grape chart
    get<IWineGrape[]>("/rest/wine-grapes/", {wine: wineId})
        .then((wineGrapes) => {
            applyChart(pieChart, Grape.fromArray(wineGrapes), "grape-comp");
        });
    // Edit purchase stuff
    datepicker();
    autocomplete("store");
    modal("delete-modal");
});
