import "chart.js";
import "materialize-css";
import { get } from "../../lib/ApiHelper";
import { onLoad } from "../../lib/JQueryCompat";
import { Grape, IWineGrape } from "../../lib/RestTypes";
import { hFloatingActnBtn, modal, navbar, tabs } from "../../lib/widgets";
import { applyChart, pieChart } from "../../lib/wine_charts";

declare const wineId: number;

onLoad(() => {
    modal("delete-modal");
    navbar();
    tabs();
    hFloatingActnBtn();

    // Grape chart
    get<IWineGrape[]>("/rest/wine-grapes/", {wine: wineId})
        .then((wineGrapeJSON) => {
            if (wineGrapeJSON.every((e: IWineGrape) => e.percent !== undefined)) {
                applyChart(pieChart, Grape.fromArray(wineGrapeJSON), "grape-comp");
            }
        });
});
