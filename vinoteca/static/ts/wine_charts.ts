/// <reference path="../../../node_modules/@types/chart.js/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />

import { Dict, pipe, elementExists } from "./utils.js"
import { setTabAccessibility } from "./widgets.js"

const fontFamily = "'Roboto', sans-serif";
const white = "#f8f8f8";
const translucentWhite = "rgba(240, 240, 240, 0.9)";
const translucentGray = "rgba(200, 200, 200, 0.9)";
const tenColorRainbow = [
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
];

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

/** Helper function to determine whether to proceed with chart creation. */
function doChart(canvas: JQuery<HTMLCanvasElement>, chartData: number[]) {
    // Only create chart if one or more grapes has a non-zero value
    if (chartData.length == 0 || allZero(chartData)) {
        console.error("Unable to create grape composition pie chart due to grape \
                     composition data signature.")
        console.log(`Chart data: ${chartData}`);
        return false;
    }
    // Only create chart if the canvas element is valid
    if (!elementExists(canvas)) {
        console.error("Unable to create chart; canvas element is invalid.");
        return false;
    }
    return true;
}

function changeTransparency(color: string, transparency: number) {
    if (transparency <= 0 || transparency >= 1) {
        throw Error("Transparency must be between 0 and 1");
    }
    let fields = color.substr(5, color.length - 7).split(",").map(
        val => parseInt(val)
    );

    fields[3] = transparency;
    return `rgba(${fields[0]}, ${fields[1]}, ${fields[2]}, ${fields[3]})`;
}

/** Helper function for creating a chart and enabling/disabling its container tab depending on
 * success of creating the chart.
 *
 * Parameters:
 *      chartFn: the chart function, e.g. pieChart or barChart
 *      data: chart data
 *      chartNamePrefix: prefix of the HTML IDs of the elements associated with the chart.
 *          The prefix format is `${dashboardName}-${chartName}` and then
 *              * Canvas is `${dashboardName}-${chartName}-chart`
 *              * List element controlling the tab is `${dashboardName}-${chartName}-chart-li`
 *              * Chart div `${dashboardName}-${chartName}-chart-tab`
 */
export function applyChart(chartFn: (canvas: JQuery<HTMLCanvasElement>, data: Dict<number>) => boolean,
    data: Dict<number>, chartNamePrefix: string) {
    const canvas: JQuery<HTMLCanvasElement> = $(`#${chartNamePrefix}-chart`);
    const chartLi: JQuery<HTMLUListElement> = $(`#${chartNamePrefix}-chart-li`);

    pipe(
        chartFn(canvas, data)
    ).chain(
        success => setTabAccessibility(chartLi, success)
    );
}

/** Creates a pie chart on the provided canvas using the provided data.
 * Returns a boolean as to whether the chart was successfully created.
 */
export function pieChart(canvas: JQuery<HTMLCanvasElement>, data: Dict<number>): boolean {
    const [chartLabels, chartData] = splitData(data);
    // Error checking
    if (!doChart(canvas, chartData)) {
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

    try {
        // @ts-ignore
        const pie = new Chart(canvas, config);
    } catch (e) {
        console.log(e);
        return false;
    }
    return true;
}

/** Creates a horizontal bar chart on the provided canvas using the provided data.
 * Returns a boolean indicating whether the chart was created successfully.
 */
export function barChart(canvas: JQuery<HTMLCanvasElement>, data: Dict<number>, whiteText = true): boolean {

    const [chartLabels, chartData] = splitData(data);
    // Error checking
    if (!doChart(canvas, chartData)) {
        return false;
    }

    const config = {
        type: "horizontalBar",
        data: {
            datasets: [{
                data: chartData,
                backgroundColor: tenColorRainbow,
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

    try {
        // @ts-ignore
        const pie = new Chart(canvas, config);
    } catch (e) {
        console.log(e);
        return false;
    }
    return true;
}

export function lineChart(canvas: JQuery<HTMLCanvasElement>, data: Dict<number>[], seriesLabels: string[]): boolean {

    const [chartLabels, _] = splitData(data[0]);
    // Error checking
    if (!elementExists(canvas)) {
        console.error("Invalid canvas element.")
        return false;
    }
    if (data.length != seriesLabels.length) {
        console.error("Series labels and the data have different lengths.")
        return false;
    }

    const config = {
        type: "line",
        data: {
            datasets: [],
            labels: chartLabels,
        },
        options: {
            responsive: true,
            layout: {
                padding: {
                    top: 15,
                    bottom: 15
                }
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
            backgroundColor: white,
            tooltips: {
                titleFontFamily: fontFamily,
                titleFontSize: 14,
                bodyFontFamily: fontFamily,
                bodyFontSize: 12,
                fontColor: white,
            }
        }
    };
    const dataValidation = data.map((series, i) => {
        const [_, chartData] = splitData(series);
        // Add the series data to the corresponding key in datasetLabels
        config.data.datasets.push({
            data: chartData,
            label: seriesLabels[i],
            borderColor: tenColorRainbow[i],
            backgroundColor: changeTransparency(tenColorRainbow[i], 0.5)
        });
        // Error checking
        if (allZero(chartData)) {
            return false;
        }
        return true;
    });

    if (!dataValidation.every(val => val)) {
        console.error("Invalid data.")
        return false;
    }

    try {
        // @ts-ignore
        const pie = new Chart(canvas, config);
    } catch (e) {
        console.log(e);
        return false;
    }
    return true;
}