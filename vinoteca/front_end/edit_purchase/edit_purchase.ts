import { Grape, IWineGrapeJSON } from "../../lib/rest";
import { autocomplete, datepicker, navbar, tabs } from "../../lib/widgets";
import { applyChart, pieChart } from "../../lib/wine_charts";

declare const wineId: number;

$(() => {
    // Wine profile stuff
    navbar();
    tabs();
    // Grape chart
    $.getJSON("/rest/wine-grapes/", {wine: wineId}, (wineGrapeJSON: IWineGrapeJSON[]) => {
        applyChart(pieChart, Grape.fromArray(wineGrapeJSON), "grape-comp");
    });
    // Edit purchase stuff
    datepicker();
    autocomplete("store");
    $("#delete-modal").modal();
});
