import Chart from "chart.js";
import { useLogger } from "lib/Logger";
import React from "react";

export interface IChartInput {
    label: string;
    value: number;
}

const FONT_FAMILY = "'Roboto', sans-serif";

const COLORS: Record<string, string> = {
    red: "rgba(230, 25, 75, 0.8)",
    orange: "rgba(245, 130, 48, 0.8)",
    yellow: "rgba(255, 225, 25, 0.8)",
    lime: "rgba(210, 245, 60, 0.8)",
    green: "rgba(60, 180, 75, 0.8)",
    cyan: "rgba(70, 240, 240, 0.8)",
    blue: "rgba(0, 130, 200, 0.8)",
    navy: "rgba(0, 0, 128, 0.8)",
    magenta: "rgba(240, 50, 230, 0.8)",
    purple: "rgba(145, 30, 180, 0.8)",
};

const TRANSLUCENT_WHITE = "rgba(240, 240, 240, 0.9)";
const TRANSLUCENT_GRAY = "rgba(200, 200, 200, 0.9)";

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
 * Helper function for splitting Dict to seperate label and key arrays for
 * interfacing with Charts.js
 */
function splitData(data: IChartInput[]): [string[], number[]] {
    const chartData: number[] = [];
    const chartLabels: string[] = [];
    data.forEach((co) => {
        chartData.push(co.value);
        chartLabels.push(co.label);
    });
    return [chartLabels, chartData];
}

/** Helper function to determine whether to proceed with chart creation. */
function validateChartInput(chartData: number[]) {
    // Only create chart if one or more grapes has a non-zero value
    if (chartData.length === 0 || chartData.every((num) => num === 0)) {
        return false;
    }
    return true;
}

interface IPieChartProps {
    data: IChartInput[];
}

export const PieChart: React.FC<IPieChartProps> = ({data}) => {
    const canvasRef = React.useRef() as React.MutableRefObject<HTMLCanvasElement>;

    React.useEffect(() => {
        const [chartLabels, chartData] = splitData(data);
        const config: Chart.ChartConfiguration = {
            data: {
                datasets: [{
                    backgroundColor: [
                        "rgba(139, 195, 74)",
                        "rgba(173, 20, 87)",
                        "rgba(251, 192, 45)",
                        COLORS.blue,
                        COLORS.purple,
                        COLORS.orange,
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
                        fontFamily: FONT_FAMILY,
                        fontSize: 16,
                    },
                    position: "bottom",
                },
                responsive: true,
                tooltips: {
                    bodyFontFamily: FONT_FAMILY,
                    bodyFontSize: 14,
                },
            },
            type: "pie",
        };

        new Chart(canvasRef.current, config);
    });

    return (
        <div className="canvas-container">
            <canvas height={ "175px" } ref={ canvasRef } />
        </div>
    );
};
PieChart.displayName = "PieChart";

interface IBarChartProps {
    data: IChartInput[];
    height: string;
}

export const BarChart: React.FC<IBarChartProps> = ({data, height}) => {
    const canvasRef = React.useRef() as React.MutableRefObject<HTMLCanvasElement>;

    React.useEffect(() => {
        const [chartLabels, chartData] = splitData(data);
        // Error checking
        if (!validateChartInput(chartData)) {
            return;
        }

        const config: Chart.ChartConfiguration = {
            data: {
                datasets: [{
                    backgroundColor: Object.values(COLORS),
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
                            color: TRANSLUCENT_GRAY,
                        },
                        ticks: {
                            beginAtZero: true,
                            fontColor: TRANSLUCENT_WHITE,
                            fontFamily: FONT_FAMILY,
                            fontSize: 14,
                        },
                    }],
                    yAxes: [{
                        gridLines: {
                            color: TRANSLUCENT_GRAY,
                        },
                        ticks: {
                            fontColor: TRANSLUCENT_WHITE,
                            fontFamily: FONT_FAMILY,
                            fontSize: 14,
                        },
                    }],
                },
                tooltips: {
                    bodyFontFamily: FONT_FAMILY,
                    bodyFontSize: 12,
                    titleFontFamily: FONT_FAMILY,
                    titleFontSize: 14,
                },
            },
            type: "horizontalBar",
        };

        new Chart(canvasRef.current, config);
    });

    return (
        <canvas height={height} ref={canvasRef} />
    );
};
BarChart.displayName = "BarChart";

interface ILineChartProps {
    data: IChartInput[][];
    seriesLabels: string[];
}
export const LineChart: React.FC<ILineChartProps> = ({data, seriesLabels}) => {
    const logger = useLogger("LineChart");

    const canvasRef = React.useRef() as React.MutableRefObject<HTMLCanvasElement>;

    React.useEffect(() => {
        const chartLabels = splitData(data[0])[0];
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
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: TRANSLUCENT_GRAY,
                        },
                        ticks: {
                            beginAtZero: true,
                            fontColor: TRANSLUCENT_WHITE,
                            fontFamily: FONT_FAMILY,
                            fontSize: 14,
                        },
                    }],
                    yAxes: [{
                        gridLines: {
                            color: TRANSLUCENT_GRAY,
                        },
                        ticks: {
                            fontColor: TRANSLUCENT_WHITE,
                            fontFamily: FONT_FAMILY,
                            fontSize: 14,
                        },
                    }],
                },
                tooltips: {
                    bodyFontFamily: FONT_FAMILY,
                    bodyFontSize: 12,
                    titleFontFamily: FONT_FAMILY,
                    titleFontSize: 14,
                },
            },
            type: "line",
        };
        const colorValues = Object.values(COLORS);
        // Validate then add each data series to config
        const dataValidation = data.map((series, i) => {
            const [_, chartData] = splitData(series);
            // Add the series data to the corresponding key in datasetLabels
            config?.data?.datasets?.push({
                backgroundColor: changeTransparency(colorValues[i], 0.5),
                borderColor: colorValues[i],
                data: chartData,
                label: seriesLabels[i],
            });
            // Error checking
            if (chartData.every((num) => num === 0)) {
                logger.logWarning("All zeroes for chart");
                return false;
            }
            return true;
        });

        if (!dataValidation.every((val) => val)) {
            logger.logWarning("Data validation of chartData failed");
            return;
        }

        if (data.length !== seriesLabels.length) {
            logger.logWarning(`Data and seriesLabels have different lenghts. ` +
                    `${data.length} and ${seriesLabels.length} respectively.`);
            return;
        }


        new Chart(canvasRef.current, config);
    });

    return (
        <div className="canvas-container">
            <canvas ref={canvasRef} height={ 300 } />
        </div>
    );
};
LineChart.displayName = "LineChart";
