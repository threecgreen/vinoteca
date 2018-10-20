import { Chart } from "chart.js";
import { elementExists, pipe } from "./utils";
import { setTabAccessibility } from "./widgets";

export interface IChartInput {
    label(): string;
    datum(): number;
}

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
    for (const num of array) {
        if (num !== 0) {
            return false;
        }
    }
    return true;
}

/**
 * Helper function for splitting Dict to seperate label and key arrays for
 * interfacing with Charts.js
 */
function splitData(data: IChartInput[]): [string[], number[]] {
    const chartData: number[] = [];
    const chartLabels: string[] = [];
    data.forEach((co) => {
        chartData.push(co.datum());
        chartLabels.push(co.label());
    });
    return [chartLabels, chartData];
}

/** Helper function to determine whether to proceed with chart creation. */
function validateChartInput(canvas: JQuery<HTMLCanvasElement>, chartData: number[]) {
    // Only create chart if one or more grapes has a non-zero value
    if (chartData.length === 0 || allZero(chartData)) {
        return false;
    }
    // Only create chart if the canvas element is valid
    if (!elementExists(canvas)) {
        return false;
    }
    return true;
}

function changeTransparency(color: string, transparency: number) {
    if (transparency <= 0 || transparency >= 1) {
        throw Error("Transparency must be between 0 and 1");
    }
    const fields = color.substr(5, color.length - 7).split(",").map(
        (val) => parseInt(val, 10),
    );

    fields[3] = transparency;
    return `rgba(${fields[0]}, ${fields[1]}, ${fields[2]}, ${fields[3]})`;
}

/**
 * Helper function for creating a chart and enabling/disabling its container tab depending on
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
export function applyChart(
        chartFn: (canvas: JQuery<HTMLCanvasElement>, data: IChartInput[]) => boolean,
        data: IChartInput[], chartNamePrefix: string,
    ) {
    const canvas: JQuery<HTMLCanvasElement> = $(`#${chartNamePrefix}-chart`);
    const chartLi: JQuery<HTMLUListElement> = $(`#${chartNamePrefix}-chart-li`);

    pipe(
        chartFn(canvas, data),
    ).chain(
        (success) => setTabAccessibility(chartLi, success),
    );
}

/**
 * Creates a pie chart on the provided canvas using the provided data.
 * Returns a boolean as to whether the chart was successfully created.
 */
export function pieChart(canvas: JQuery<HTMLCanvasElement>, data: IChartInput[]): boolean {
    const [chartLabels, chartData] = splitData(data);
    // Error checking
    if (!validateChartInput(canvas, chartData)) {
        return false;
    }

    const config = {
        data: {
            datasets: [{
                backgroundColor: [
                    "rgba(139, 195, 74)",
                    "rgba(173, 20, 87)",
                    "rgba(251, 192, 45)",
                ],
                borderWidth: 0,
                data: chartData,
                label: "",
            }],
            labels: chartLabels,
        },
        options: {
            // Resize chart with its container
            layout: {
                padding: {
                    bottom: 15,
                    top: 15,
                },
            },
            legend: {
                labels: {
                    fontFamily,
                    fontSize: 16,
                },
                position: "bottom",
            },
            responsive: true,
            tooltips: {
                bodyFontFamily: fontFamily,
                bodyFontSize: 14,
            },
        },
        type: "pie",
    };

    try {
        // @ts-ignore
        const pie = new Chart(canvas, config);
    } catch (e) {
        console.warn(e);
        return false;
    }
    return true;
}

/**
 * Creates a horizontal bar chart on the provided canvas using the provided data.
 * Returns a boolean indicating whether the chart was created successfully.
 */
export function barChart(canvas: JQuery<HTMLCanvasElement>, data: IChartInput[]): boolean {
    const [chartLabels, chartData] = splitData(data);
    // Error checking
    if (!validateChartInput(canvas, chartData)) {
        return false;
    }

    const config = {
        data: {
            datasets: [{
                backgroundColor: tenColorRainbow,
                data: chartData,
            }],
            labels: chartLabels,
        },
        options: {
            layout: {
                padding: {
                    bottom: 15,
                    top: 15,
                },
            },
            legend: {
                display: false,
            },
            responsive: true,
            scales: {
                xAxes: [{
                    borderWidth: 40,
                    gridLines: {
                        color: translucentGray,
                    },
                    ticks: {
                        beginAtZero: true,
                        fontColor: translucentWhite,
                        fontFamily,
                        fontSize: 14,
                    },
                }],
                yAxes: [{
                    borderWidth: 40,
                    gridLines: {
                        color: translucentGray,
                    },
                    ticks: {
                        fontColor: translucentWhite,
                        fontFamily,
                        fontSize: 14,
                    },
                }],
            },
            tooltips: {
                bodyFontFamily: fontFamily,
                bodyFontSize: 12,
                fontColor: white,
                titleFontFamily: fontFamily,
                titleFontSize: 14,
            },
        },
        type: "horizontalBar",
    };

    try {
        // @ts-ignore
        const pie = new Chart(canvas, config);
    } catch (e) {
        console.warn(e);
        return false;
    }
    return true;
}

export function lineChart(canvas: JQuery<HTMLCanvasElement>, data: IChartInput[][],
                          seriesLabels: string[]): boolean {
    const chartLabels = splitData(data[0])[0].map((x) => parseInt(x, 10));
    // Error checking
    if (!elementExists(canvas)) {
        return false;
    }
    if (data.length !== seriesLabels.length) {
        return false;
    }

    const config = {
        data: {
            datasets: [],
            labels: chartLabels,
        },
        options: {
            backgroundColor: white,
            layout: {
                padding: {
                    bottom: 15,
                    top: 15,
                },
            },
            responsive: true,
            scales: {
                xAxes: [{
                    borderWidth: 40,
                    gridLines: {
                        color: translucentGray,
                    },
                    ticks: {
                        beginAtZero: true,
                        fontColor: translucentWhite,
                        fontFamily,
                        fontSize: 14,
                    },
                    // categoryPercentage: 1.0
                }],
                yAxes: [{
                    borderWidth: 40,
                    gridLines: {
                        color: translucentGray,
                    },
                    ticks: {
                        fontColor: translucentWhite,
                        fontFamily,
                        fontSize: 14,
                    },
                    // barPercentage: 1.0,
                    // categoryPercentage: 1.0
                }],
            },
            tooltips: {
                bodyFontFamily: fontFamily,
                bodyFontSize: 12,
                fontColor: white,
                titleFontFamily: fontFamily,
                titleFontSize: 14,
            },
        },
        type: "line",
    };

    // Validate then add each data series to config
    const dataValidation = data.map((series, i) => {
        // @ts-ignore
        const [_, chartData] = splitData(series);
        // Add the series data to the corresponding key in datasetLabels
        config.data.datasets.push({
            backgroundColor: changeTransparency(tenColorRainbow[i], 0.5),
            borderColor: tenColorRainbow[i],
            data: chartData,
            label: seriesLabels[i],
        });
        // Error checking
        if (allZero(chartData)) {
            return false;
        }
        return true;
    });

    if (!dataValidation.every((val) => val)) {
        return false;
    }

    try {
        // @ts-ignore
        const pie = new Chart(canvas, config);
    } catch (e) {
        console.warn(e);
        return false;
    }
    return true;
}
