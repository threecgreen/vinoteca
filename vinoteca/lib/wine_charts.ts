import { Chart } from "chart.js";
import { elementExists, pipe } from "./utils";
import { setTabAccessibility } from "./widgets";

export interface IChartInput {
    label(): string;
    datum(): number;
}

const fontFamily = "'Roboto', sans-serif";

class Colors {
    public static red(): string {
        return Colors.TEN_COLOR_RAINBOW[0];
    }
    public static orange(): string {
        return Colors.TEN_COLOR_RAINBOW[1];
    }
    public static yellow(): string {
        return Colors.TEN_COLOR_RAINBOW[2];
    }
    public static lime(): string {
        return Colors.TEN_COLOR_RAINBOW[3];
    }
    public static green(): string {
        return Colors.TEN_COLOR_RAINBOW[4];
    }
    public static cyan(): string {
        return Colors.TEN_COLOR_RAINBOW[5];
    }
    public static blue(): string {
        return Colors.TEN_COLOR_RAINBOW[6];
    }
    public static navy(): string {
        return Colors.TEN_COLOR_RAINBOW[7];
    }
    public static magenta(): string {
        return Colors.TEN_COLOR_RAINBOW[8];
    }
    public static purple(): string {
        return Colors.TEN_COLOR_RAINBOW[9];
    }
    public static all(): string[] {
        return Colors.TEN_COLOR_RAINBOW;
    }
    public static rainbow(colorCount: number): string[] {
        return Colors.TEN_COLOR_RAINBOW.slice(colorCount);
    }
    public static index(index: number, transparency?: number): string {
        if (transparency) {
            return Colors.changeTransparency(Colors.TEN_COLOR_RAINBOW[index], transparency);
        }
        return Colors.TEN_COLOR_RAINBOW[index];
    }
    public static white(): string {
        return Colors.WHITE;
    }
    public static translucentWhite(): string {
        return Colors.TRANSLUCENT_WHITE;
    }
    public static translucentGray(): string {
        return Colors.TRANSLUCENT_GRAY;
    }

    /**
     * Takes in a rgb color string and transparency value, and * creates a rgba
     * string.
     * @param color rgb string
     * @param transparency between 0 and 1
     */
    public static changeTransparency(color: string, transparency: number) {
        if (transparency <= 0 || transparency >= 1) {
            throw Error("Transparency must be between 0 and 1");
        }
        const fields = color.substr(5, color.length - 7).split(",").map(
            (val) => parseInt(val, 10),
        );

        fields[3] = transparency;
        return `rgba(${fields[0]}, ${fields[1]}, ${fields[2]}, ${fields[3]})`;
    }

    private static readonly TEN_COLOR_RAINBOW = [
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
    private static readonly WHITE = "#f8f8f8";
    private static readonly TRANSLUCENT_WHITE = "rgba(240, 240, 240, 0.9)";
    private static readonly TRANSLUCENT_GRAY = "rgba(200, 200, 200, 0.9)";
}

/**
 * Predicate function that checks whether every element of a given array is
 * equal to 0.
 * @param array the array that will be checked
 */
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

/**
 * Helper function for creating a chart and enabling/disabling its container tab depending on
 * success of creating the chart.
 *
 * @param chartFn the chart function, e.g. pieChart or barChart
 * @param data chart data
 * @param chartNamePrefix prefix of the HTML IDs of the elements associated with the chart.
 * The prefix format is `"${dashboardName}-${chartName}"` and then
 *  * Canvas is `"${dashboardName}-${chartName}-chart"`
 *  * List element controlling the tab is `${dashboardName}-${chartName}-chart-li`
 *  * Chart div `${dashboardName}-${chartName}-chart-tab`
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

    const config: Chart.ChartConfiguration = {
        data: {
            datasets: [{
                backgroundColor: [
                    "rgba(139, 195, 74)",
                    "rgba(173, 20, 87)",
                    "rgba(251, 192, 45)",
                    Colors.blue(),
                    Colors.purple(),
                    Colors.orange(),

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

    const config: Chart.ChartConfiguration = {
        data: {
            datasets: [{
                backgroundColor: Colors.all(),
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
                    gridLines: {
                        color: Colors.translucentGray(),
                    },
                    ticks: {
                        beginAtZero: true,
                        fontColor: Colors.translucentWhite(),
                        fontFamily,
                        fontSize: 14,
                    },
                }],
                yAxes: [{
                    gridLines: {
                        color: Colors.translucentGray(),
                    },
                    ticks: {
                        fontColor: Colors.translucentWhite(),
                        fontFamily,
                        fontSize: 14,
                    },
                }],
            },
            tooltips: {
                bodyFontFamily: fontFamily,
                bodyFontSize: 12,
                titleFontFamily: fontFamily,
                titleFontSize: 14,
            },
        },
        type: "horizontalBar",
    };

    try {
        const pie = new Chart(canvas, config);
    } catch (e) {
        console.warn(e);
        return false;
    }
    return true;
}

/**
 * Function that creates a new chart.js line chart on the page.
 * @param canvas location where the line chart will be placed on the page
 * @param data chart data
 * @param seriesLabels labels of each series or line present on the chart
 */
export function lineChart(canvas: JQuery<HTMLCanvasElement>, data: IChartInput[][],
                          seriesLabels: string[]): boolean {
    // const chartLabels = splitData(data[0])[0].map((x) => parseInt(x, 10));
    const chartLabels = splitData(data[0])[0];
    // Error checking
    if (!elementExists(canvas)) {
        return false;
    }
    if (data.length !== seriesLabels.length) {
        return false;
    }

    const config: Chart.ChartConfiguration = {
        data: {
            datasets: [],
            labels: chartLabels,
        },
        options: {
            layout: {
                padding: {
                    bottom: 15,
                    top: 15,
                },
            },
            responsive: true,
            scales: {
                xAxes: [{
                    gridLines: {
                        color: Colors.translucentGray(),
                    },
                    ticks: {
                        beginAtZero: true,
                        fontColor: Colors.translucentWhite(),
                        fontFamily,
                        fontSize: 14,
                    },
                }],
                yAxes: [{
                    gridLines: {
                        color: Colors.translucentGray(),
                    },
                    ticks: {
                        fontColor: Colors.translucentWhite(),
                        fontFamily,
                        fontSize: 14,
                    },
                }],
            },
            tooltips: {
                bodyFontFamily: fontFamily,
                bodyFontSize: 12,
                titleFontFamily: fontFamily,
                titleFontSize: 14,
            },
        },
        type: "line",
    };
    // Validate then add each data series to config
    const dataValidation = data.map((series, i) => {
        const [_, chartData] = splitData(series);
        // Add the series data to the corresponding key in datasetLabels
        // @ts-ignore
        config.data.datasets.push({
            backgroundColor: Colors.index(i, 0.5),
            borderColor: Colors.index(i),
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
        const pie = new Chart(canvas, config);
    } catch (e) {
        console.warn(e);
        return false;
    }
    return true;
}
