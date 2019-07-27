import "chart.js";
import "materialize-css";
import { Grape, IWineGrape } from "../../lib/RestTypes";
import { hFloatingActnBtn, navbar, tabs, modal } from "../../lib/widgets";
import { applyChart, pieChart } from "../../lib/wine_charts";
import { onLoad } from "../../lib/JQueryCompat";
import { get } from "../../lib/ApiHelper";

declare const wineId: number;

onLoad(() => {
    modal("delete-modal");
    navbar();
    tabs();
    hFloatingActnBtn();

    // Grape chart
    get("/rest/wine-grapes/", {wine: wineId})
        .then((wineGrapeJSON: IWineGrape[]) => {
            if (wineGrapeJSON.length > 0) {
                applyChart(pieChart, Grape.fromArray(wineGrapeJSON), "grape-comp");
            }
        });
});
