/// <reference path="../../../node_modules/@types/chart.js/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
import { elementExists, pipe } from "./utils.js";
import { setTabAccessibility } from "./widgets.js";
var fontFamily = "'Roboto', sans-serif";
var white = "#f8f8f8";
var translucentWhite = "rgba(240, 240, 240, 0.9)";
var translucentGray = "rgba(200, 200, 200, 0.9)";
var tenColorRainbow = [
    "rgba(230, 25, 75, 0.8)",
    "rgba(245, 130, 48, 0.8)",
    "rgba(255, 225, 25, 0.8)",
    "rgba(210, 245, 60, 0.8)",
    "rgba(60, 180, 75, 0.8)",
    "rgba(70, 240, 240, 0.8)",
    "rgba(0, 130, 200, 0.8)",
    "rgba(0, 0, 128, 0.8)",
    "rgba(240, 50, 230, 0.8)",
    "rgba(145, 30, 180, 0.8)",
];
function allZero(array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
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
function splitData(data) {
    var chartData = [];
    var chartLabels = [];
    for (var key in data) {
        chartData.push(data[key]);
        chartLabels.push(key);
    }
    return [chartLabels, chartData];
}
/** Helper function to determine whether to proceed with chart creation. */
function doChart(canvas, chartData) {
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
function changeTransparency(color, transparency) {
    if (transparency <= 0 || transparency >= 1) {
        throw Error("Transparency must be between 0 and 1");
    }
    var fields = color.substr(5, color.length - 7).split(",").map(function (val) { return parseInt(val, 10); });
    fields[3] = transparency;
    return "rgba(" + fields[0] + ", " + fields[1] + ", " + fields[2] + ", " + fields[3] + ")";
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
export function applyChart(chartFn, data, chartNamePrefix) {
    var canvas = $("#" + chartNamePrefix + "-chart");
    var chartLi = $("#" + chartNamePrefix + "-chart-li");
    pipe(chartFn(canvas, data)).chain(function (success) { return setTabAccessibility(chartLi, success); });
}
/**
 * Creates a pie chart on the provided canvas using the provided data.
 * Returns a boolean as to whether the chart was successfully created.
 */
export function pieChart(canvas, data) {
    var _a = splitData(data), chartLabels = _a[0], chartData = _a[1];
    // Error checking
    if (!doChart(canvas, chartData)) {
        return false;
    }
    var config = {
        data: {
            datasets: [{
                    backgroundColor: [
                        "rgba(139, 195, 74)",
                        "rgba(173, 20, 87)",
                        "rgba(251, 192, 45)",
                    ],
                    borderWidth: 0,
                    data: chartData,
                    label: ""
                }],
            labels: chartLabels
        },
        options: {
            // Resize chart with its container
            layout: {
                padding: {
                    bottom: 15,
                    top: 15
                }
            },
            legend: {
                labels: {
                    fontFamily: fontFamily,
                    fontSize: 16
                },
                position: "bottom"
            },
            responsive: true,
            tooltips: {
                bodyFontFamily: fontFamily,
                bodyFontSize: 14
            }
        },
        type: "pie"
    };
    try {
        // @ts-ignore
        var pie = new Chart(canvas, config);
    }
    catch (e) {
        return false;
    }
    return true;
}
/**
 * Creates a horizontal bar chart on the provided canvas using the provided data.
 * Returns a boolean indicating whether the chart was created successfully.
 */
export function barChart(canvas, data) {
    var _a = splitData(data), chartLabels = _a[0], chartData = _a[1];
    // Error checking
    if (!doChart(canvas, chartData)) {
        return false;
    }
    var config = {
        data: {
            datasets: [{
                    backgroundColor: tenColorRainbow,
                    data: chartData
                }],
            labels: chartLabels
        },
        options: {
            layout: {
                padding: {
                    bottom: 15,
                    top: 15
                }
            },
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                        borderWidth: 40,
                        gridLines: {
                            color: translucentGray
                        },
                        ticks: {
                            beginAtZero: true,
                            fontColor: translucentWhite,
                            fontFamily: fontFamily,
                            fontSize: 14
                        }
                    }],
                yAxes: [{
                        borderWidth: 40,
                        gridLines: {
                            color: translucentGray
                        },
                        ticks: {
                            fontColor: translucentWhite,
                            fontFamily: fontFamily,
                            fontSize: 14
                        }
                    }]
            },
            tooltips: {
                bodyFontFamily: fontFamily,
                bodyFontSize: 12,
                fontColor: white,
                titleFontFamily: fontFamily,
                titleFontSize: 14
            }
        },
        type: "horizontalBar"
    };
    try {
        // @ts-ignore
        var pie = new Chart(canvas, config);
    }
    catch (e) {
        return false;
    }
    return true;
}
export function lineChart(canvas, data, seriesLabels) {
    var chartLabels = splitData(data[0])[0].map(function (x) { return parseInt(x, 10); });
    // Error checking
    if (!elementExists(canvas)) {
        return false;
    }
    if (data.length !== seriesLabels.length) {
        return false;
    }
    var config = {
        data: {
            datasets: [],
            labels: chartLabels
        },
        options: {
            backgroundColor: white,
            layout: {
                padding: {
                    bottom: 15,
                    top: 15
                }
            },
            responsive: true,
            scales: {
                xAxes: [{
                        borderWidth: 40,
                        gridLines: {
                            color: translucentGray
                        },
                        ticks: {
                            beginAtZero: true,
                            fontColor: translucentWhite,
                            fontFamily: fontFamily,
                            fontSize: 14
                        }
                    }],
                yAxes: [{
                        borderWidth: 40,
                        gridLines: {
                            color: translucentGray
                        },
                        ticks: {
                            fontColor: translucentWhite,
                            fontFamily: fontFamily,
                            fontSize: 14
                        }
                    }]
            },
            tooltips: {
                bodyFontFamily: fontFamily,
                bodyFontSize: 12,
                fontColor: white,
                titleFontFamily: fontFamily,
                titleFontSize: 14
            }
        },
        type: "line"
    };
    // Validate then add each data series to config
    var dataValidation = data.map(function (series, i) {
        // @ts-ignore
        var _a = splitData(series), _ = _a[0], chartData = _a[1];
        // Add the series data to the corresponding key in datasetLabels
        config.data.datasets.push({
            backgroundColor: changeTransparency(tenColorRainbow[i], 0.5),
            borderColor: tenColorRainbow[i],
            data: chartData,
            label: seriesLabels[i]
        });
        // Error checking
        if (allZero(chartData)) {
            return false;
        }
        return true;
    });
    if (!dataValidation.every(function (val) { return val; })) {
        return false;
    }
    try {
        // @ts-ignore
        var pie = new Chart(canvas, config);
    }
    catch (e) {
        return false;
    }
    return true;
}
//# sourceMappingURL=wine_charts.js.map