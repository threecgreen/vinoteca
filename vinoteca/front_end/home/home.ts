import { Parallax } from "materialize-css";
import { GenericStat, IGenericStat } from "../../lib/RestTypes";
import { navbar, tabs } from "../../lib/widgets";
import { applyChart, barChart } from "../../lib/wine_charts";

declare const wineTypePurchases: IGenericStat;
declare const wineTypeVarieties: IGenericStat;
declare const wineTypePrice: IGenericStat;

navbar();
const elems = document.querySelectorAll('.parallax');
const instances = new Parallax(elems[0]);
tabs();

applyChart(barChart, GenericStat.fromJSON(wineTypePurchases), "top-wt-purchases");
applyChart(barChart, GenericStat.fromJSON(wineTypeVarieties), "top-wt-varieties");
applyChart(barChart, GenericStat.fromJSON(wineTypePrice), "top-wt-price");
