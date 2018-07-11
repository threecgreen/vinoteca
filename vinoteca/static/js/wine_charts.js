/// <reference path="../../../node_modules/@types/chart.js/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/** Creates a pie chart on the provided canvas using the provided data. */
export function pieChart(chartID, data) {
    var config = {
        type: 'pie',
        data: {
            datasets: [{
                    data: [],
                    backgroundColor: [],
                    label: 'Dataset 1'
                }],
            labels: [
                'Red',
                'Orange',
                'Yellow',
                'Green',
                'Blue'
            ]
        },
        options: {
            responsive: true
        }
    };
}
//# sourceMappingURL=wine_charts.js.map