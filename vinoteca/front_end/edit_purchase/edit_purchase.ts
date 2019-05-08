import * as $ from "jquery";
import { get } from "../../lib/ApiHelper";
import { Grape, IWineGrape } from "../../lib/RestTypes";
import { autocomplete, datepicker, navbar, tabs } from "../../lib/widgets";
import { applyChart, pieChart } from "../../lib/wine_charts";

declare const wineId: number;

$(() => {
    // Wine profile stuff
    navbar();
    tabs();
    // Grape chart
    get("/rest/wine-grapes/", {wine: wineId})
        .then((wineGrapes: IWineGrape[]) => {
            applyChart(pieChart, Grape.fromArray(wineGrapes), "grape-comp");
        });
    // Edit purchase stuff
    datepicker();
    autocomplete("store");
    $("#delete-modal").modal();
});
