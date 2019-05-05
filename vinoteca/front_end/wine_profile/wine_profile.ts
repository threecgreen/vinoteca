import * as $ from "jquery";
import "chart.js";
import "materialize-css";
import { Grape, IWineGrape } from "../../lib/RestTypes";
import { hFloatingActnBtn, navbar, tabs } from "../../lib/widgets";
import { applyChart, pieChart  } from "../../lib/wine_charts";

declare const wineId: number;

$(() => {
    $("#delete-modal").modal();
    navbar();
    tabs();
    hFloatingActnBtn();

    // Grape chart
    $.getJSON("/rest/wine-grapes/", {wine: wineId}, (wineGrapeJSON: IWineGrape[]) => {
        applyChart(pieChart, Grape.fromArray(wineGrapeJSON), "grape-comp");
    });
});
