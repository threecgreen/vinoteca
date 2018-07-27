/// <reference path="../../../node_modules/@types/chart.js/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />

import { Dict } from "./utils.js"

const fontFamily = "'Roboto', sans-serif";
const white = "#f8f8f8";
const translucentWhite = "rgba(240, 240, 240, 0.9)";
const translucentGray = "rgba(200, 200, 200, 0.9)";

function allZero(array: number[]): boolean {
    for (let num of array) {
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

/** Helper higher-order function for piping data to a chart function. */
export function chartHelper(chartFn: (canvas: JQuery<HTMLCanvasElement>, data: Dict<number>) => boolean,
    canvas: JQuery<HTMLCanvasElement>) {

    return (data: Dict<number>) => chartFn(canvas, data);
}

/** Creates a pie chart on the provided canvas using the provided data.
 * Returns a boolean as to whether the chart was successfully created.
 */
export function pieChart(canvas: JQuery<HTMLCanvasElement>, data: Dict<number>): boolean {
    const [chartLabels, chartData] = splitData(data);
    // Only create chart if one or more grapes has a non-zero value
    if (chartData.length == 0 || allZero(chartData)) {
        console.log("Unable to create grape composition pie chart due to grape \
                     composition data signature.")
        console.log(`Chart data: ${chartData}`);
        return false;
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
                bodyFontSize: 14
            }
        }
    };

    // @ts-ignore
    const pie = new Chart(canvas, config);
    return true;
}

/** Creates a horizontal bar chart on the provided canvas using the provided data.
 * Returns a boolean indicating whether the chart was created successfully.
 */
export function barChart(canvas: JQuery<HTMLCanvasElement>, data: Dict<number>, whiteText = true): boolean {
    const [chartLabels, chartData] = splitData(data);

    const config = {
        type: "horizontalBar",
        data: {
            datasets: [{
                data: chartData,
                backgroundColor: [
                    "rgba(230, 25, 75, 0.8)",   // Red
                    "rgba(245, 130, 48, 0.8)",  // Orange
                    "rgba(255, 225, 25, 0.8)",  // Yellow
                    "rgba(210, 245, 60, 0.8)",  // Lime
                    "rgba(60, 180, 75, 0.8)",   // Green
                    "rgba(70, 240, 240, 0.8)",  // Cyan
                    "rgba(0, 130, 200, 0.8)",   // Blue
                    "rgba(0, 0, 128, 0.8)",     // Navy
                    "rgba(240, 50, 230, 0.8)",  // Magenta
                    "rgba(145, 30, 180, 0.8)",  // Purple
                ],
            }],
            labels: chartLabels
        },
        options: {
            responsive: true,
            layout: {
                padding: {
                    top: 15,
                    bottom: 15
                }
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontSize: 14,
                        fontFamily: fontFamily,
                        fontColor: translucentWhite,
                    },
                    gridLines: {
                        color: translucentGray
                    },
                    borderWidth: 40,
                    // barPercentage: 1.0,
                    // categoryPercentage: 1.0
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 14,
                        fontFamily: fontFamily,
                        fontColor: translucentWhite,
                        beginAtZero: true
                    },
                    gridLines: {
                        color: translucentGray
                    },
                    borderWidth: 40,
                    // categoryPercentage: 1.0
                }]
            },
            tooltips: {
                titleFontFamily: fontFamily,
                titleFontSize: 14,
                bodyFontFamily: fontFamily,
                bodyFontSize: 12,
                fontColor: white,
            }
        }
    };

    // @ts-ignore
    const bar = new Chart(canvas, config);
    return true
}