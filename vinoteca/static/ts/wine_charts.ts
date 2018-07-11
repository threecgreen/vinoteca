/// <reference path="../../../node_modules/@types/chart.js/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />

import { Dict } from "./dict"

/** Creates a pie chart on the provided canvas using the provided data. */
export function pieChart(label: string, chartID: JQuery<HTMLCanvasElement>, data: Dict<number>): void {
    let chartVals: number[];
    for (let key in data) {
        chartVals.concat(data[key]);
    }

    const config = {
        type: 'pie',
        data: {
            datasets: [{
                data: chartVals,
                backgroundColor: [
                ],
                label: label
            }],
            labels: Object.getOwnPropertyNames(data)
        },
        options: {
            responsive: true
        }
    };
}