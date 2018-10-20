import { IWineTypesDictJSON, WineTypeStat } from "../../lib/rest";
import { navbar, tabs } from "../../lib/widgets";
import { applyChart, barChart } from "../../lib/wine_charts";

declare const wineTypePurchases: IWineTypesDictJSON;
declare const wineTypeVarieties: IWineTypesDictJSON;
declare const wineTypePrice: IWineTypesDictJSON;

$(() => {
    navbar();
    $(".parallax").parallax();
    tabs();

    applyChart(barChart, WineTypeStat.fromDict(wineTypePurchases), "top-wt-purchases");
    applyChart(barChart, WineTypeStat.fromDict(wineTypeVarieties), "top-wt-varieties");
    applyChart(barChart, WineTypeStat.fromDict(wineTypePrice), "top-wt-price");
});
