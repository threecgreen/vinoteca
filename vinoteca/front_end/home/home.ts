import { IDict } from "../../lib/utils";
import { navbar, tabs } from "../../lib/widgets";
import { applyChart, barChart } from "../../lib/wine_charts";

declare const wineTypePurchases: IDict<number>;
declare const wineTypeVarieties: IDict<number>;
declare const wineTypePrice: IDict<number>;

$(() => {
    navbar();
    $(".parallax").parallax();
    tabs();

    applyChart(barChart, wineTypePurchases, "top-wt-purchases");
    applyChart(barChart, wineTypeVarieties, "top-wt-varieties");
    applyChart(barChart, wineTypePrice, "top-wt-price");
});
