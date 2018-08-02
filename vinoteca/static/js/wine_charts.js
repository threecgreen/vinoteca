/// <reference path="../../../node_modules/@types/chart.js/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
import { pipe, elementExists } from "./utils.js";
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
        if (num != 0) {
            return false;
        }
    }
    return true;
}
/** Helper function for splitting Dict to seperate label and key arrays for
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
    if (chartData.length == 0 || allZero(chartData)) {
        console.error("Unable to create grape composition pie chart due to grape \
                     composition data signature.");
        console.log("Chart data: " + chartData);
        return false;
    }
    // Only create chart if the canvas element is valid
    if (!elementExists(canvas)) {
        console.error("Unable to create chart; canvas element is invalid.");
        return false;
    }
    return true;
}
function changeTransparency(color, transparency) {
    if (transparency <= 0 || transparency >= 1) {
        throw Error("Transparency must be between 0 and 1");
    }
    var fields = color.substr(5, color.length - 7).split(",").map(function (val) { return parseInt(val); });
    fields[3] = transparency;
    return "rgba(" + fields[0] + ", " + fields[1] + ", " + fields[2] + ", " + fields[3] + ")";
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
export function applyChart(chartFn, data, chartNamePrefix) {
    var canvas = $("#" + chartNamePrefix + "-chart");
    var chartLi = $("#" + chartNamePrefix + "-chart-li");
    pipe(chartFn(canvas, data)).chain(function (success) { return setTabAccessibility(chartLi, success); });
}
/** Creates a pie chart on the provided canvas using the provided data.
 * Returns a boolean as to whether the chart was successfully created.
 */
export function pieChart(canvas, data) {
    var _a = splitData(data), chartLabels = _a[0], chartData = _a[1];
    // Error checking
    if (!doChart(canvas, chartData)) {
        return false;
    }
    var config = {
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
        var pie = new Chart(canvas, config);
    }
    catch (e) {
        console.log(e);
        return false;
    }
    return true;
}
/** Creates a horizontal bar chart on the provided canvas using the provided data.
 * Returns a boolean indicating whether the chart was created successfully.
 */
export function barChart(canvas, data, whiteText) {
    if (whiteText === void 0) { whiteText = true; }
    var _a = splitData(data), chartLabels = _a[0], chartData = _a[1];
    // Error checking
    if (!doChart(canvas, chartData)) {
        return false;
    }
    var config = {
        type: "horizontalBar",
        data: {
            datasets: [{
                    data: chartData,
                    backgroundColor: tenColorRainbow
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
                            fontColor: translucentWhite
                        },
                        gridLines: {
                            color: translucentGray
                        },
                        borderWidth: 40
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
                        borderWidth: 40
                    }]
            },
            tooltips: {
                titleFontFamily: fontFamily,
                titleFontSize: 14,
                bodyFontFamily: fontFamily,
                bodyFontSize: 12,
                fontColor: white
            }
        }
    };
    try {
        // @ts-ignore
        var pie = new Chart(canvas, config);
    }
    catch (e) {
        console.log(e);
        return false;
    }
    return true;
}
export function lineChart(canvas, data, seriesLabels) {
    var chartLabels = splitData(data[0])[0].map(function (x) { return parseInt(x); });
    // Error checking
    if (!elementExists(canvas)) {
        console.error("Invalid canvas element.");
        return false;
    }
    if (data.length != seriesLabels.length) {
        console.error("Series labels and the data have different lengths.");
        return false;
    }
    var config = {
        type: "line",
        data: {
            datasets: [],
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
            scales: {
                yAxes: [{
                        ticks: {
                            fontSize: 14,
                            fontFamily: fontFamily,
                            fontColor: translucentWhite
                        },
                        gridLines: {
                            color: translucentGray
                        },
                        borderWidth: 40
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
                        borderWidth: 40
                    }]
            },
            backgroundColor: white,
            tooltips: {
                titleFontFamily: fontFamily,
                titleFontSize: 14,
                bodyFontFamily: fontFamily,
                bodyFontSize: 12,
                fontColor: white
            }
        }
    };
    // Validate then add each data series to config
    var dataValidation = data.map(function (series, i) {
        var _a = splitData(series), _ = _a[0], chartData = _a[1];
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
    if (!dataValidation.every(function (val) { return val; })) {
        console.error("Invalid data.");
        return false;
    }
    try {
        // @ts-ignore
        var pie = new Chart(canvas, config);
    }
    catch (e) {
        console.log(e);
        return false;
    }
    return true;
}
//# sourceMappingURL=wine_charts.js.map