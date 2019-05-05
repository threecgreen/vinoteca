import * as $ from "jquery";
import { GenericStat, IGenericStat } from "../../lib/RestTypes";
import { navbar, tabs } from "../../lib/widgets";
import { applyChart, barChart, lineChart } from "../../lib/wine_charts";

declare const colorPurchases: IGenericStat;
declare const colorVarieties: IGenericStat;
declare const colorPrice: IGenericStat;
declare const wineTypePurchases: IGenericStat;
declare const wineTypeVarieties: IGenericStat;
declare const wineTypePrice: IGenericStat;
declare const grapeVarieties: IGenericStat;
declare const grapePrice: IGenericStat;
declare const grapePct: IGenericStat;
declare const vitiAreasVarieties: IGenericStat;
declare const vitiAreasProducers: IGenericStat;
declare const vitiAreasPrice: IGenericStat;

declare const purchasesByYearData: IGenericStat[];

declare const doPurchasesByYear: boolean;

$(() => {
    navbar("dashboard-nav");
    tabs();

    // Colors
    applyChart(barChart, GenericStat.fromJSON(colorPurchases), "pb-color-purchases");
    applyChart(barChart, GenericStat.fromJSON(colorVarieties), "pb-color-varieties");
    applyChart(barChart, GenericStat.fromJSON(colorPrice), "pb-color-price");

    // Top Wine Types
    applyChart(barChart, GenericStat.fromJSON(wineTypePurchases), "top-wt-purchases");
    applyChart(barChart, GenericStat.fromJSON(wineTypeVarieties), "top-wt-varieties");
    applyChart(barChart, GenericStat.fromJSON(wineTypePrice), "top-wt-price");

    // Top Grape Varieties
    applyChart(barChart, GenericStat.fromJSON(grapeVarieties), "grapes-varieties");
    applyChart(barChart, GenericStat.fromJSON(grapePrice), "grapes-price");
    applyChart(barChart, GenericStat.fromJSON(grapePct), "grapes-pct");

    // Top Viti Areas
    applyChart(barChart, GenericStat.fromJSON(vitiAreasVarieties), "viti-areas-varieties");
    applyChart(barChart, GenericStat.fromJSON(vitiAreasProducers), "viti-areas-producers");
    applyChart(barChart, GenericStat.fromJSON(vitiAreasPrice), "viti-areas-price");

    // Purchases by Year
    const purchasesByYearLabels = [
        "Bottles",
        "Total Spent",
        "Avg Price",
    ];

    if (doPurchasesByYear) {
        lineChart($("#pb-year-chart"), purchasesByYearData.map((j) => GenericStat.fromJSON(j)),
                  purchasesByYearLabels);
    }
});
