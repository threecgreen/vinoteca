import { Grape, IGrapeJSON } from "../../lib/rest";
import { autocomplete, datepicker, navbar, tabs } from "../../lib/widgets";
import { applyChart, pieChart } from "../../lib/wine_charts";

declare const wineId: number;

$(() => {
    // Wine profile stuff
    navbar();
    tabs();
    // Grape chart
    $.getJSON("/rest/grapes/", {wine: wineId}, (grapesJSON: IGrapeJSON[]) => {
        applyChart(pieChart, Grape.fromArray(grapesJSON), "grape-comp");
    });
    // Edit purchase stuff
    datepicker();
    autocomplete("store");
    $("#delete-modal").modal();
});
