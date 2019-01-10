import "chart.js";
import "materialize-css";
import { Grape, IGrapeJSON } from "../../lib/rest";
import { hFloatingActnBtn, navbar, tabs } from "../../lib/widgets";
import { applyChart, pieChart  } from "../../lib/wine_charts";

declare const wineId: number;

$(() => {
    $("#delete-modal").modal();
    navbar();
    tabs();
    hFloatingActnBtn();

    // Grape chart
    $.getJSON("/rest/grapes/", {wine: wineId}, (grapesJSON: IGrapeJSON[]) => {
        applyChart(pieChart, Grape.fromArray(grapesJSON), "grape-comp");
    });
});
