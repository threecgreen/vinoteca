import "chart.js";
import { Grape, IGrapeJSON } from "../../lib/rest";
import { tabs } from "../../lib/widgets";
import { applyChart, pieChart  } from "../../lib/wine_charts";

declare const wineId: number;

$(() => {
    $("#delete-modal").modal();
    tabs();

    // Grape chart
    $.getJSON("/rest/grapes/", {wine: wineId}, (grapesJSON) => {
        applyChart(pieChart, Grape.fromArray(grapesJSON as IGrapeJSON[]), "grape-comp");
    });
});
