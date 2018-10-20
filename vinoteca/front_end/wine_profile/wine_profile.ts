import "chart.js";
import "materialize-css";
import { Grape, IGrapeJSON } from "../../lib/rest";
import { navbar, tabs, hFloatingActnBtn } from "../../lib/widgets";
import { applyChart, pieChart  } from "../../lib/wine_charts";

declare const wineId: number;

$(() => {
    $("#delete-modal").modal();
    navbar();
    tabs();
    hFloatingActnBtn();

    // Grape chart
    $.getJSON("/rest/grapes/", {wine: wineId}, (grapesJSON) => {
        applyChart(pieChart, Grape.fromArray(grapesJSON as IGrapeJSON[]), "grape-comp");
    });
});
