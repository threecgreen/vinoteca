import "chart.js";
import "materialize-css";
import { get } from "../../lib/ApiHelper";
import { onLoad } from "../../lib/JQueryCompat";
import { Grape, IWineGrape } from "../../lib/RestTypes";
import { hFloatingActnBtn, modal, navbar, tabs } from "../../lib/widgets";
import { applyChart, pieChart } from "../../lib/wine_charts";
import { WineGrape } from "../../components/GrapesFormApp";

declare const wineId: number;

onLoad(() => {
    modal("delete-modal");
    navbar();
    tabs();
    hFloatingActnBtn();

    // Grape chart
    get("/rest/wine-grapes/", {wine: wineId})
        .then((wineGrapeJSON: IWineGrape[]) => {
            if (wineGrapeJSON.all((e: WineGrape) => e.percent !== undefined)) {
                applyChart(pieChart, Grape.fromArray(wineGrapeJSON), "grape-comp");
            }
        });
});
