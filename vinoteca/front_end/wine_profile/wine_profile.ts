import "chart.js";
import "materialize-css";
import { Grape, IWineGrapeJSON } from "../../lib/rest";
import { hFloatingActnBtn, navbar, tabs } from "../../lib/widgets";
import { applyChart, pieChart  } from "../../lib/wine_charts";

declare const wineId: number;

$(() => {
    $("#delete-modal").modal();
    navbar();
    tabs();
    hFloatingActnBtn();

    // Grape chart
    $.getJSON("/rest/wine-grapes/", {wine: wineId}, (wineGrapeJSON: IWineGrapeJSON[]) => {
        applyChart(pieChart, Grape.fromArray(wineGrapeJSON), "grape-comp");
    });
});
