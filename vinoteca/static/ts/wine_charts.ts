/// <reference path="../../../node_modules/@types/chart.js/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />

import { Dict } from "./dict"

const fontFamily = "'Roboto', sans-serif";

function allZero(array: number[]): boolean {
    for (var num of array) {
        if (num != 0) {
            return false;
        }
    }
    return true;
}

/** Helper function for splitting Dict to seperate label and key arrays for
 * interfacing with Charts.js
 */
function splitData(data: Dict<number>): [string[], number[]] {
    let chartData: number[] = [];
    let chartLabels: string[] = [];
    for (let key in data) {
        chartData.push(data[key]);
        chartLabels.push(key);
    }
    return [chartLabels, chartData];
}

/** Creates a pie chart on the provided canvas using the provided data. */
export function pieChart(canvas: JQuery<HTMLCanvasElement>, data: Dict<number>): void {
    const [chartLabels, chartData] = splitData(data);
    // Only create chart if one or more grapes has a non-zero value
    if (chartData.length == 0 || allZero(chartData)) {
        console.log("Unable to create grape composition pie chart due to grape \
                     composition data signature.")
        return;
    }

    const config = {
        type: 'pie',
        data: {
            datasets: [{
                data: chartData,
                backgroundColor: [
                    'rgba(139, 195, 74)',
                    'rgba(173, 20, 87)',
                    'rgba(251, 192, 45)',
                ],
                label: "",
                borderWidth: 0
            }],
            labels: chartLabels
        },
        options: {
            // Resize chart with its container
            responsive: true,
            layout: {
                padding: {
                    top: 15,
                    bottom: 15
                }
            },
            legend: {
                position: "bottom",
                labels: {
                    fontSize: 16,
                    fontFamily: fontFamily
                }
            },
            tooltips: {
                bodyFontFamily: fontFamily,
                bodyFontSize: 14,
                // callbacks: {
                //     afterLabel: (tooltipItem, data) => {
                //         return "%";
                //     }
                // }
            }
        }
    };

    // @ts-ignore
    const pie = new Chart(canvas, config);
}

/** Creates a horizontal bar chart on the provided canvas using the provided data. */
export function barChart(canvas: JQuery<HTMLCanvasElement>, data: Dict<number>): void {
    const [chartLabels, chartData] = splitData(data);

    const config = {
        type: "horizontalBar",
        data: {
            datasets: [{
                data: chartData,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(201, 203, 207, 0.2)"
                ],
            }]
        },
        options: {
            responsive: true,
        }
    };

    // @ts-ignore
    const bar = new Chart(canvas, config);
}