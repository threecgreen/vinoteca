import { tabs, navbar } from "../../lib/widgets";
import { barChart, applyChart, lineChart, IChartInput } from "../../lib/wine_charts";
import { IGenericStatJSON, GenericStat } from "../../lib/rest";

declare const colorPurchases: IGenericStatJSON;
declare const colorVarieties: IGenericStatJSON;
declare const colorPrice: IGenericStatJSON;
declare const wineTypePurchases: IGenericStatJSON;
declare const wineTypeVarieties: IGenericStatJSON;
declare const wineTypePrice: IGenericStatJSON;
declare const grapeVarieties: IGenericStatJSON;
declare const grapePrice: IGenericStatJSON;
declare const grapePct: IGenericStatJSON;
declare const vitiAreasVarieties: IGenericStatJSON;
declare const vitiAreasProducers: IGenericStatJSON;
declare const vitiAreasPrice: IGenericStatJSON;

declare const purchasesByYearData: IGenericStatJSON[];

declare const doPurchasesByYear: boolean;

$(() => {
    navbar();
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

    if(doPurchasesByYear) {
        lineChart($("#pb-year-chart"), purchasesByYearData.map(j => GenericStat.fromJSON(j)),
                  purchasesByYearLabels);
    }
});
