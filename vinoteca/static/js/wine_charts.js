/// <reference path="../../../node_modules/@types/chart.js/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/** Creates a pie chart on the provided canvas using the provided data. */
export function pieChart(label, chartID, data) {
    var chartVals;
    for (var key in data) {
        chartVals.concat(data[key]);
    }
    var config = {
        type: 'pie',
        data: {
            datasets: [{
                    data: chartVals,
                    backgroundColor: [],
                    label: label
                }],
            labels: Object.getOwnPropertyNames(data)
        },
        options: {
            responsive: true
        }
    };
}
//# sourceMappingURL=wine_charts.js.map