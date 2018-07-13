/// <reference path="../../../node_modules/@types/chart.js/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
var fontFamily = "'Roboto', sans-serif";
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
/** Creates a pie chart on the provided canvas using the provided data. */
export function pieChart(canvas, data) {
    var _a = splitData(data), chartLabels = _a[0], chartData = _a[1];
    // Only create chart if one or more grapes has a non-zero value
    if (chartData.length == 0 || allZero(chartData)) {
        console.log("Unable to create grape composition pie chart due to grape \
                     composition data signature.");
        return;
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
                bodyFontSize: 14,
            }
        }
    };
    // @ts-ignore
    var pie = new Chart(canvas, config);
}
/** Creates a horizontal bar chart on the provided canvas using the provided data. */
export function barChart(canvas, data) {
    var _a = splitData(data), chartLabels = _a[0], chartData = _a[1];
    var config = {
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
    var bar = new Chart(canvas, config);
}
//# sourceMappingURL=wine_charts.js.map