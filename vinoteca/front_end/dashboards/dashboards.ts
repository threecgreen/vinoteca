import { GenericStat, IGenericStat } from "../../lib/RestTypes";
import { navbar, tabs } from "../../lib/widgets";
import { applyChart, barChart, lineChart } from "../../lib/wine_charts";
import { onLoad } from "../../lib/JQueryCompat";

declare const colorPurchases: IGenericStat;
declare const colorVarieties: IGenericStat;
declare const colorPrice: IGenericStat;
declare const wineTypePurchases: IGenericStat;
declare const wineTypeVarieties: IGenericStat;
declare const wineTypePrice: IGenericStat;
declare const grapePurchases: IGenericStat;
declare const grapePrice: IGenericStat;
declare const grapePct: IGenericStat;
declare const vitiAreasPurchases: IGenericStat;
declare const vitiAreasProducers: IGenericStat;
declare const vitiAreasPrice: IGenericStat;

declare const purchasesByYearData: IGenericStat[];

declare const doPurchasesByYear: boolean;

onLoad(() => {
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
    applyChart(barChart, GenericStat.fromJSON(grapePurchases), "grapes-varieties");
    applyChart(barChart, GenericStat.fromJSON(grapePrice), "grapes-price");
    applyChart(barChart, GenericStat.fromJSON(grapePct), "grapes-pct");

    // Top Viti Areas
    applyChart(barChart, GenericStat.fromJSON(vitiAreasPurchases), "viti-areas-varieties");
    applyChart(barChart, GenericStat.fromJSON(vitiAreasProducers), "viti-areas-producers");
    applyChart(barChart, GenericStat.fromJSON(vitiAreasPrice), "viti-areas-price");

    // Purchases by Year
    const purchasesByYearLabels = [
        "Bottles",
        "Total Spent",
        "Avg Price",
    ];

    if (doPurchasesByYear) {
        lineChart((document.getElementById("pb-year-chart") as HTMLCanvasElement), purchasesByYearData.map((j) => GenericStat.fromJSON(j)),
                    purchasesByYearLabels);
    }
});
