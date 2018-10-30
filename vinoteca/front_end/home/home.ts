import { GenericStat, IGenericStatJSON } from "../../lib/rest";
import { navbar, tabs } from "../../lib/widgets";
import { applyChart, barChart } from "../../lib/wine_charts";

declare const wineTypePurchases: IGenericStatJSON;
declare const wineTypeVarieties: IGenericStatJSON;
declare const wineTypePrice: IGenericStatJSON;

$(() => {
    navbar();
    $(".parallax").parallax();
    tabs();

    applyChart(barChart, GenericStat.fromJSON(wineTypePurchases), "top-wt-purchases");
    applyChart(barChart, GenericStat.fromJSON(wineTypeVarieties), "top-wt-varieties");
    applyChart(barChart, GenericStat.fromJSON(wineTypePrice), "top-wt-price");
});
