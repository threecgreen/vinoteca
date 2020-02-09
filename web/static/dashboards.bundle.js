/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"dashboards": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([2,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cards.tsx":
/*!******************************!*\
  !*** ./components/Cards.tsx ***!
  \******************************/
/*! exports provided: RedCard, GreenCard, YellowCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedCard", function() { return RedCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenCard", function() { return GreenCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YellowCard", function() { return YellowCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Card = ({ classes, children, title }) => {
    var _a, _b;
    const joinedClasses = (_b = (_a = classes) === null || _a === void 0 ? void 0 : _a.join(" "), (_b !== null && _b !== void 0 ? _b : ""));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: `card ${joinedClasses}` },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-content" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", { className: "card-title" }, title),
            children)));
};
Card.displayName = "Card";
const RedCard = ({ classes, children, title }) => {
    const allClasses = ((classes !== null && classes !== void 0 ? classes : [])).concat(["wine-red-card"]);
    return Card({ classes: allClasses, children, title });
};
RedCard.displayName = "RedCard";
const GreenCard = ({ classes, children, title }) => {
    const allClasses = ((classes !== null && classes !== void 0 ? classes : [])).concat(["wine-green-card"]);
    return Card({ classes: allClasses, children, title });
};
GreenCard.displayName = "GreenCard";
const YellowCard = ({ classes, children, title }) => {
    const allClasses = ((classes !== null && classes !== void 0 ? classes : [])).concat(["golden-yellow-card"]);
    return Card({ classes: allClasses, children, title });
};
YellowCard.displayName = "YellowCard";


/***/ }),

/***/ "./components/Chart.tsx":
/*!******************************!*\
  !*** ./components/Chart.tsx ***!
  \******************************/
/*! exports provided: PieChart, BarChart, LineChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChart", function() { return PieChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChart", function() { return BarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChart", function() { return LineChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Logger */ "./lib/Logger.ts");



const FONT_FAMILY = "'Roboto', sans-serif";
const COLORS = new Map([
    ["red", "rgba(230, 25, 75, 0.8)"],
    ["orange", "rgba(245, 130, 48, 0.8)"],
    ["yellow", "rgba(255, 225, 25, 0.8)"],
    ["lime", "rgba(210, 245, 60, 0.8)"],
    ["green", "rgba(60, 180, 75, 0.8)"],
    ["cyan", "rgba(70, 240, 240, 0.8)"],
    ["blue", "rgba(0, 130, 200, 0.8)"],
    ["navy", "rgba(0, 0, 128, 0.8)"],
    ["magenta", "rgba(240, 50, 230, 0.8)"],
    ["purple", "rgba(145, 30, 180, 0.8)"],
]);
const WHITE = "#f8f8f8";
const TRANSLUCENT_WHITE = "rgba(240, 240, 240, 0.9)";
const TRANSLUCENT_GRAY = "rgba(200, 200, 200, 0.9)";
function changeTransparency(color, transparency) {
    if (transparency <= 0 || transparency >= 1) {
        throw Error("Transparency must be between 0 and 1");
    }
    const fields = color.substr(5, color.length - 7).split(",").map((val) => parseInt(val, 10));
    fields[3] = transparency;
    return `rgba(${fields[0]}, ${fields[1]}, ${fields[2]}, ${fields[3]})`;
}
/**
 * Helper function for splitting Dict to seperate label and key arrays for
 * interfacing with Charts.js
 */
function splitData(data) {
    const chartData = [];
    const chartLabels = [];
    data.forEach((co) => {
        chartData.push(co.value);
        chartLabels.push(co.label);
    });
    return [chartLabels, chartData];
}
/** Helper function to determine whether to proceed with chart creation. */
function validateChartInput(chartData) {
    // Only create chart if one or more grapes has a non-zero value
    if (chartData.length === 0 || chartData.every(num => num === 0)) {
        return false;
    }
    return true;
}
const PieChart = ({ data }) => {
    const [chartLabels, chartData] = splitData(data);
    const config = {
        data: {
            datasets: [{
                    backgroundColor: [
                        "rgba(139, 195, 74)",
                        "rgba(173, 20, 87)",
                        "rgba(251, 192, 45)",
                        COLORS.get("blue"),
                        COLORS.get("purple"),
                        COLORS.get("orange"),
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
    const canvasRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        const pie = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(canvasRef.current, config);
    }, [canvasRef, config]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", { height: "100px", ref: canvasRef }));
};
PieChart.displayName = "PieChart";
const BarChart = ({ data, height }) => {
    const [chartLabels, chartData] = splitData(data);
    // Error checking
    if (!validateChartInput(chartData)) {
        return null;
    }
    const colorValues = Array.from(COLORS.values());
    const config = {
        data: {
            datasets: [{
                    backgroundColor: colorValues,
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
    const canvasRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        const bar = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(canvasRef.current, config);
    }, [canvasRef, config]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", { height: height, ref: canvasRef }));
};
BarChart.displayName = "BarChart";
const LineChart = ({ data, seriesLabels }) => {
    const logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_2__["default"](LineChart.name);
    const chartLabels = splitData(data[0])[0];
    if (data.length !== seriesLabels.length) {
        logger.logWarning(`Data and seriesLabels have different lenghts. ` +
            `${data.length} and ${seriesLabels.length} respectively.`);
        return null;
    }
    const config = {
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
    const colorValues = Array.from(COLORS.values());
    // Validate then add each data series to config
    const dataValidation = data.map((series, i) => {
        const [_, chartData] = splitData(series);
        // Add the series data to the corresponding key in datasetLabels
        // @ts-ignore
        config.data.datasets.push({
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
        return null;
    }
    const canvasRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        const line = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(canvasRef.current, config);
    }, [canvasRef, config]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", { ref: canvasRef }));
};
LineChart.displayName = "LineChart";


/***/ }),

/***/ "./components/Grid.tsx":
/*!*****************************!*\
  !*** ./components/Grid.tsx ***!
  \*****************************/
/*! exports provided: Row, Col, InputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputField", function() { return InputField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function joinClasses(grid, classes) {
    let allClasses = [];
    grid.forEach((gc) => {
        if (gc.length > 0) {
            allClasses.push(gc);
        }
    });
    allClasses = allClasses.concat(classes || []);
    return allClasses.join(" ");
}
function gridClasses(props) {
    const sClass = props.s ? `s${props.s}` : "";
    const mClass = props.m ? `m${props.m}` : "";
    const lClass = props.l ? `l${props.l}` : "";
    const xlClass = props.xl ? `xl${props.xl}` : "";
    return [sClass, mClass, lClass, xlClass];
}
const GridComponentFactory = (className, displayName) => {
    const component = (props) => {
        const otherClasses = joinClasses(gridClasses(props), props.classes);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: `${className} ${otherClasses}` }, props.children));
    };
    component.displayName = displayName;
    return component;
};
const Row = GridComponentFactory("row", "Row");
const Col = GridComponentFactory("col", "Col");
const InputField = GridComponentFactory("col input-field", "InputField");


/***/ }),

/***/ "./components/Preloader.tsx":
/*!**********************************!*\
  !*** ./components/Preloader.tsx ***!
  \**********************************/
/*! exports provided: Preloader, PreloaderCirc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preloader", function() { return Preloader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderCirc", function() { return PreloaderCirc; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Preloader = (_) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "progress" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "indeterminate" })));
};
Preloader.displayName = "Preloader";
const PreloaderCirc = (_) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "preloader-wrapper active" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "spinner-layer" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "circle-clipper left" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "circle" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "gap-patch" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "circle" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "circle-clipper right" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "circle" })))));
};
PreloaderCirc.displayName = "PreloaderCirc";


/***/ }),

/***/ "./components/Table.tsx":
/*!******************************!*\
  !*** ./components/Table.tsx ***!
  \******************************/
/*! exports provided: WineTableNumCols, Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineTableNumCols", function() { return WineTableNumCols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WineTableNumCols = [
    { name: "Total Quantity", isNumCol: true },
    { name: "Avg Price", isNumCol: true },
    { name: "Rating", isNumCol: true },
];
const Table = (props) => {
    var _a;
    const condensed = (_a = props.condensed, (_a !== null && _a !== void 0 ? _a : true));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: `highlight responsive ${condensed ? "condensed" : ""}` },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null, props.columns.map((col) => {
                if (typeof col === "string") {
                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { key: col }, col);
                }
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { key: col.name, className: col.isNumCol ? "num-col" : "" }, col.name));
            }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, props.children)));
};
Table.displayName = "Table";


/***/ }),

/***/ "./components/TableCells.tsx":
/*!***********************************!*\
  !*** ./components/TableCells.tsx ***!
  \***********************************/
/*! exports provided: TextCell, NumCell, PriceCell, YearCell, DateCell, ColorCell, NameAndTypeCell, ProducerCell, RegionCell, VitiAreaCell, WineTypeCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextCell", function() { return TextCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumCell", function() { return NumCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceCell", function() { return PriceCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearCell", function() { return YearCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCell", function() { return DateCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorCell", function() { return ColorCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameAndTypeCell", function() { return NameAndTypeCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProducerCell", function() { return ProducerCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionCell", function() { return RegionCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitiAreaCell", function() { return VitiAreaCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineTypeCell", function() { return WineTypeCell; });
/* harmony import */ var date_fns_esm_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/esm/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");



class TextCell extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    render() {
        var _a;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, (_a = this.props.text, (_a !== null && _a !== void 0 ? _a : this.props.default)));
    }
}
TextCell.defaultProps = {
    default: "",
};
;
const NumCell = (props) => {
    const num = props.num
        // undefined to use browser's locale
        ? props.num.toLocaleString(undefined, { minimumFractionDigits: props.minDecimals,
            maximumFractionDigits: props.maxDecimals })
        : _lib_utils__WEBPACK_IMPORTED_MODULE_2__["EN_DASH"];
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "num-col" }, num));
};
NumCell.displayName = "NumCell";
const PriceCell = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NumCell, { num: props.price, minDecimals: 2, maxDecimals: 2 }));
};
PriceCell.displayName = "PriceCell";
const YearCell = (props) => {
    var _a, _b;
    const year = (_b = (_a = props.year) === null || _a === void 0 ? void 0 : _a.toString(), (_b !== null && _b !== void 0 ? _b : "NV"));
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "num-col" }, year));
};
YearCell.displayName = "YearCell";
const DateCell = (props) => {
    var _a;
    const dateStr = props.date ? Object(date_fns_esm_format__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["numToDate"])(props.date), (_a = props.format, (_a !== null && _a !== void 0 ? _a : "MMM dd, yyyy"))) : _lib_utils__WEBPACK_IMPORTED_MODULE_2__["EN_DASH"];
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, dateStr));
};
DateCell.displayName = "DateCell";
const ColorCell = (props) => {
    if (props.color) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["capitalizeFirstLetter"])(props.color));
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null);
};
ColorCell.displayName = "ColorCell";
const LinkedCell = (props) => {
    const url = `/${props.model}/${props.id}`;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { href: url }, props.name)));
};
LinkedCell.displayName = "LinkedCell";
const NameAndTypeCell = (props) => {
    if (props.url) {
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { href: props.url }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["getNameAndType"])(props.name, props.wineType)));
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkedCell, { id: props.id, model: "wines", name: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["getNameAndType"])(props.name, props.wineType) }));
};
NameAndTypeCell.displayName = "NameAndTypeCell";
const ProducerCell = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkedCell, { id: props.id, model: "producers", name: props.name }));
};
ProducerCell.displayName = "ProducerCell";
const RegionCell = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkedCell, { id: props.id, model: "regions", name: props.name }));
};
RegionCell.displayName = "RegionCell";
const VitiAreaCell = (props) => {
    if (!props.id || !props.name) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null);
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkedCell, { id: props.id, model: "viti-areas", name: props.name }));
};
VitiAreaCell.displayName = "VitiAreaCell";
const WineTypeCell = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkedCell, { id: props.id, model: "wine-types", name: props.name }));
};
WineTypeCell.displayName = "WineTypeCell";


/***/ }),

/***/ "./components/Tabs.tsx":
/*!*****************************!*\
  !*** ./components/Tabs.tsx ***!
  \*****************************/
/*! exports provided: TabColor, Tabs, indexFactory, Tab, TabPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabColor", function() { return TabColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexFactory", function() { return indexFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return TabPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);


var TabColor;
(function (TabColor) {
    TabColor["Green"] = "wine-green-tab";
    TabColor["Red"] = "wine-red-tab";
})(TabColor || (TabColor = {}));
const Tabs = ({ children }) => {
    const tabsRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        const _ = new materialize_css__WEBPACK_IMPORTED_MODULE_1__["Tabs"](tabsRef.current);
    }, [tabsRef]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "tabs tabs-fixed-width narrow-tabs z-depth-1", ref: tabsRef }, children));
};
Tabs.displayName = "Tabs";
function indexFactory(name) {
    return (idx) => `${name}-${idx}`;
}
const Tab = ({ children, color, target }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { className: `tab ${color.valueOf()}` },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: `#${target}` }, children)));
};
Tab.displayName = "Tab";
const TabPanel = ({ children, id }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: id }, children));
};
TabPanel.displayName = "TabPanel";


/***/ }),

/***/ "./components/TopEntity.tsx":
/*!**********************************!*\
  !*** ./components/TopEntity.tsx ***!
  \**********************************/
/*! exports provided: TopEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopEntity", function() { return TopEntity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chart */ "./components/Chart.tsx");
/* harmony import */ var _Preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Preloader */ "./components/Preloader.tsx");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Table */ "./components/Table.tsx");
/* harmony import */ var _TableCells__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TableCells */ "./components/TableCells.tsx");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tabs */ "./components/Tabs.tsx");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








function TopEntity({ name, EntityCell, fetchEntity, minQuantity }) {
    minQuantity = (minQuantity !== null && minQuantity !== void 0 ? minQuantity : 5);
    const logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_1__["default"](TopEntity.name);
    const [hasLoaded, setHasLoaded] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
    const [topEntities, setTopEntities] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        function fetchTopEntities() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const entities = yield fetchEntity();
                    setTopEntities(entities);
                }
                catch (e) {
                    logger.logError(`Error fetching top ${name}s. ${e.message}`);
                }
                finally {
                    setHasLoaded(true);
                }
            });
        }
        fetchTopEntities();
    }, [setHasLoaded, setTopEntities]);
    if (!hasLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Preloader__WEBPACK_IMPORTED_MODULE_3__["PreloaderCirc"], null);
    }
    if (topEntities.length >= minQuantity) {
        const tabIdxer = Object(_Tabs__WEBPACK_IMPORTED_MODULE_6__["indexFactory"])(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_7__["nameToId"])(name));
        const canvasHeight = "350px";
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tabs"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tab"], { target: tabIdxer(0), color: _Tabs__WEBPACK_IMPORTED_MODULE_6__["TabColor"].Red }, "Table"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tab"], { target: tabIdxer(1), color: _Tabs__WEBPACK_IMPORTED_MODULE_6__["TabColor"].Green }, "Purchases"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tab"], { target: tabIdxer(2), color: _Tabs__WEBPACK_IMPORTED_MODULE_6__["TabColor"].Green }, "Varieties"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tab"], { target: tabIdxer(3), color: _Tabs__WEBPACK_IMPORTED_MODULE_6__["TabColor"].Green }, "Avg Price")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], { id: tabIdxer(0) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Table__WEBPACK_IMPORTED_MODULE_4__["Table"], { columns: [name, { name: "Purchases", isNumCol: true },
                        { name: "Varieties", isNumCol: true }, { name: "Price", isNumCol: true }], condensed: false }, topEntities.map((entity) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: entity.id },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EntityCell, { id: entity.id, name: entity.name }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableCells__WEBPACK_IMPORTED_MODULE_5__["NumCell"], { maxDecimals: 0, num: entity.quantity }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableCells__WEBPACK_IMPORTED_MODULE_5__["NumCell"], { maxDecimals: 0, num: entity.varieties }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableCells__WEBPACK_IMPORTED_MODULE_5__["PriceCell"], { price: entity.avgPrice }))))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], { id: tabIdxer(1) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart__WEBPACK_IMPORTED_MODULE_2__["BarChart"], { height: canvasHeight, data: topEntities.map((ent) => ({ label: ent.name, value: ent.quantity })) })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], { id: tabIdxer(2) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart__WEBPACK_IMPORTED_MODULE_2__["BarChart"], { height: canvasHeight, data: topEntities.map((ent) => ({ label: ent.name, value: ent.varieties })) })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], { id: tabIdxer(3) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart__WEBPACK_IMPORTED_MODULE_2__["BarChart"], { height: canvasHeight, data: topEntities.map((ent) => ({ label: ent.name, value: ent.avgPrice })) }))));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", { className: "bold" }, `Insufficent ${name}s.`));
}
TopEntity.displayName = TopEntity.name;


/***/ }),

/***/ "./front_end/dashboards/ByTheNumbers.tsx":
/*!***********************************************!*\
  !*** ./front_end/dashboards/ByTheNumbers.tsx ***!
  \***********************************************/
/*! exports provided: ByTheNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByTheNumbers", function() { return ByTheNumbers; });
/* harmony import */ var date_fns_esm_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/esm/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Cards */ "./components/Cards.tsx");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Preloader */ "./components/Preloader.tsx");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const ByTheNumbers = (_) => {
    const [totalLiters, setTotalLiters] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
    const [mostCommonPurchaseDate, setMostCommonPurchaseDate] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
    const [totalPurchases, setTotalPurchases] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
    const [totalVarieties, setTotalVarieties] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
    const [hasLoaded, setHasLoaded] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
        function fetchData() {
            return __awaiter(this, void 0, void 0, function* () {
                yield Promise.all([
                    () => __awaiter(this, void 0, void 0, function* () {
                        const tl = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_4__["getTotalLiters"])();
                        setTotalLiters(tl.totalLiters);
                    }),
                    () => __awaiter(this, void 0, void 0, function* () {
                        const mcd = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_4__["getMostCommonPurchaseDate"])();
                        if (mcd.mostCommonPurchaseDate) {
                            setMostCommonPurchaseDate(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["numToDate"])(mcd.mostCommonPurchaseDate));
                        }
                    }),
                    () => __awaiter(this, void 0, void 0, function* () {
                        const v = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_4__["getWineVarieties"])();
                        setTotalVarieties(v.count);
                    }),
                    () => __awaiter(this, void 0, void 0, function* () {
                        const pc = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_4__["getPurchaseCount"])();
                        setTotalPurchases(pc.count);
                    })
                ].map((f) => f()));
                setHasLoaded(true);
            });
        }
        fetchData();
    }, [setTotalLiters, setMostCommonPurchaseDate, setTotalLiters, setTotalVarieties, setHasLoaded]);
    if (hasLoaded) {
        const formattedDate = mostCommonPurchaseDate ? Object(date_fns_esm_format__WEBPACK_IMPORTED_MODULE_0__["default"])(mostCommonPurchaseDate, "MMM dd") : _lib_utils__WEBPACK_IMPORTED_MODULE_5__["EN_DASH"];
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Cards__WEBPACK_IMPORTED_MODULE_2__["YellowCard"], { title: "By the numbers" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "by-the-numbers" }, totalLiters),
                "Liters of wine"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "by-the-numbers" }, formattedDate),
                "Most common purchase date"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "by-the-numbers" }, totalPurchases),
                "Total purchases"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "by-the-numbers" }, totalVarieties),
                "Total varieties")));
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Cards__WEBPACK_IMPORTED_MODULE_2__["YellowCard"], { title: "By the numbers" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_3__["PreloaderCirc"], null)));
};
ByTheNumbers.displayName = ByTheNumbers.name;


/***/ }),

/***/ "./front_end/dashboards/DashboardApp.tsx":
/*!***********************************************!*\
  !*** ./front_end/dashboards/DashboardApp.tsx ***!
  \***********************************************/
/*! exports provided: DashboardApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardApp", function() { return DashboardApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _ByTheNumbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ByTheNumbers */ "./front_end/dashboards/ByTheNumbers.tsx");
/* harmony import */ var _PurchasesByYear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PurchasesByYear */ "./front_end/dashboards/PurchasesByYear.tsx");
/* harmony import */ var _Top__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Top */ "./front_end/dashboards/Top.tsx");





const DashboardApp = (_) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_1__["Row"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { s: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "page-title" }, "Wine purchase stats"))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_1__["Row"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { s: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PurchasesByYear__WEBPACK_IMPORTED_MODULE_3__["PurchasesByYearGraph"], null)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { s: 12, l: 6, xl: 4 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Top__WEBPACK_IMPORTED_MODULE_4__["TopProducers"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Top__WEBPACK_IMPORTED_MODULE_4__["TopRegions"], null)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { s: 12, l: 6, xl: 4 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ByTheNumbers__WEBPACK_IMPORTED_MODULE_2__["ByTheNumbers"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Top__WEBPACK_IMPORTED_MODULE_4__["TopColors"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Top__WEBPACK_IMPORTED_MODULE_4__["TopGrapes"], null)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { s: 12, l: 6, xl: 4 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PurchasesByYear__WEBPACK_IMPORTED_MODULE_3__["PurchasesByYearTable"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Top__WEBPACK_IMPORTED_MODULE_4__["TopVitiAreas"], null)))));
};
DashboardApp.displayName = "DashboardApp";


/***/ }),

/***/ "./front_end/dashboards/PurchasesByYear.tsx":
/*!**************************************************!*\
  !*** ./front_end/dashboards/PurchasesByYear.tsx ***!
  \**************************************************/
/*! exports provided: PurchasesByYearGraph, PurchasesByYearTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasesByYearGraph", function() { return PurchasesByYearGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasesByYearTable", function() { return PurchasesByYearTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Cards */ "./components/Cards.tsx");
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_ApiHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/ApiHelper */ "./lib/ApiHelper.ts");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Preloader */ "./components/Preloader.tsx");
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Chart */ "./components/Chart.tsx");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Table */ "./components/Table.tsx");
/* harmony import */ var _components_TableCells__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/TableCells */ "./components/TableCells.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const usePurchasesByYear = (logger) => {
    const [hasLoaded, setHasLoaded] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
    const [yearsPurchases, setYearsPurchases] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        function fetchYearsPurchases() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const yearsPurchases = yield Object(_lib_ApiHelper__WEBPACK_IMPORTED_MODULE_3__["get"])("/rest/purchases/by-year");
                    setYearsPurchases(yearsPurchases);
                }
                catch (_a) {
                    logger.logError("Error fetching purchases by year");
                }
                finally {
                    setHasLoaded(true);
                }
            });
        }
        fetchYearsPurchases();
    }, [setHasLoaded, setYearsPurchases]);
    return [hasLoaded, yearsPurchases];
};
const PurchasesByYearGraph = (_) => {
    const logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_2__["default"](PurchasesByYearGraph.name);
    const [hasLoaded, yearsPurchases] = usePurchasesByYear(logger);
    let content;
    if (!hasLoaded) {
        content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_4__["PreloaderCirc"], null);
    }
    else if (yearsPurchases.length > 1) {
        content = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Chart__WEBPACK_IMPORTED_MODULE_5__["LineChart"], { data: [
                yearsPurchases.map((y) => ({ label: `${y.year}`, value: y.quantity })),
                yearsPurchases.map((y) => { var _a; return ({ label: `${y.year}`, value: (_a = y.totalPrice, (_a !== null && _a !== void 0 ? _a : 0.0)) }); }),
                yearsPurchases.map((y) => { var _a; return ({ label: `${y.year}`, value: (_a = y.avgPrice, (_a !== null && _a !== void 0 ? _a : 0.0)) }); })
            ], seriesLabels: ["Bottle", "Total Spent", "Avg Price"] }));
    }
    else {
        content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", { className: "bold" }, "Insufficient purchases");
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cards__WEBPACK_IMPORTED_MODULE_1__["GreenCard"], { title: "Purchases by year | graph" }, content));
};
PurchasesByYearGraph.displayName = PurchasesByYearGraph.name;
const PurchasesByYearTable = (_) => {
    const logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_2__["default"](PurchasesByYearTable.name);
    const [hasLoaded, yearsPurchases] = usePurchasesByYear(logger);
    let content;
    if (!hasLoaded) {
        content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_4__["PreloaderCirc"], null);
    }
    else if (yearsPurchases.length > 0) {
        content = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_6__["Table"], { columns: ["Year",
                { name: "Bottles", isNumCol: true },
                { name: "Total Spent", isNumCol: true },
                { name: "Avg Price", isNumCol: true }] }, yearsPurchases.map((year) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: year.year },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_7__["YearCell"], { year: year.year }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_7__["NumCell"], { num: year.quantity, maxDecimals: 0 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_7__["PriceCell"], { price: year.totalPrice }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_7__["PriceCell"], { price: year.avgPrice })))));
    }
    else {
        content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", { className: "bold" }, "No purchases");
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cards__WEBPACK_IMPORTED_MODULE_1__["RedCard"], { title: "Purchases by year | table" }, content));
};


/***/ }),

/***/ "./front_end/dashboards/Top.tsx":
/*!**************************************!*\
  !*** ./front_end/dashboards/Top.tsx ***!
  \**************************************/
/*! exports provided: TopProducers, TopRegions, TopVitiAreas, TopGrapes, TopColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopProducers", function() { return TopProducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRegions", function() { return TopRegions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopVitiAreas", function() { return TopVitiAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopGrapes", function() { return TopGrapes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopColors", function() { return TopColors; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Cards */ "./components/Cards.tsx");
/* harmony import */ var _components_TableCells__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TableCells */ "./components/TableCells.tsx");
/* harmony import */ var _components_TopEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TopEntity */ "./components/TopEntity.tsx");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const TopProducers = (_) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cards__WEBPACK_IMPORTED_MODULE_1__["RedCard"], { title: "Top producers" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopEntity__WEBPACK_IMPORTED_MODULE_3__["TopEntity"], { name: "Producers", EntityCell: _components_TableCells__WEBPACK_IMPORTED_MODULE_2__["ProducerCell"], fetchEntity: _lib_RestApi__WEBPACK_IMPORTED_MODULE_4__["getTopProducers"] })));
};
TopProducers.displayName = TopProducers.name;
const TopRegions = (_) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cards__WEBPACK_IMPORTED_MODULE_1__["YellowCard"], { title: "Top regions" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopEntity__WEBPACK_IMPORTED_MODULE_3__["TopEntity"], { name: "Region", EntityCell: _components_TableCells__WEBPACK_IMPORTED_MODULE_2__["RegionCell"], fetchEntity: _lib_RestApi__WEBPACK_IMPORTED_MODULE_4__["getTopRegions"] })));
};
TopRegions.displayName = TopRegions.name;
const TopVitiAreas = (_) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cards__WEBPACK_IMPORTED_MODULE_1__["GreenCard"], { title: "Top viticultural areas" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopEntity__WEBPACK_IMPORTED_MODULE_3__["TopEntity"], { name: "Viti area", 
            // @ts-ignore viti area ids won't be null here
            EntityCell: _components_TableCells__WEBPACK_IMPORTED_MODULE_2__["VitiAreaCell"], fetchEntity: _lib_RestApi__WEBPACK_IMPORTED_MODULE_4__["getTopVitiAreas"] })));
};
TopVitiAreas.displayName = TopVitiAreas.name;
const NonLinkCell = ({ name }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, name));
};
NonLinkCell.displayName = NonLinkCell.name;
const TopGrapes = (_) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cards__WEBPACK_IMPORTED_MODULE_1__["RedCard"], { title: "Top grapes" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopEntity__WEBPACK_IMPORTED_MODULE_3__["TopEntity"], { name: "Grape", EntityCell: NonLinkCell, fetchEntity: _lib_RestApi__WEBPACK_IMPORTED_MODULE_4__["getTopGrapes"] })));
};
const TopColors = (_) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cards__WEBPACK_IMPORTED_MODULE_1__["GreenCard"], { title: "Purchases by color" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopEntity__WEBPACK_IMPORTED_MODULE_3__["TopEntity"], { name: "Color", EntityCell: NonLinkCell, fetchEntity: () => __awaiter(void 0, void 0, void 0, function* () {
                const colors = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_4__["getTopColors"])();
                return colors.map((c) => (Object.assign(Object.assign({}, c), { name: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["capitalizeFirstLetter"])(c.name) })));
            }), minQuantity: 1 })));
};


/***/ }),

/***/ "./front_end/dashboards/dashboards.ts":
/*!********************************************!*\
  !*** ./front_end/dashboards/dashboards.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _lib_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/widgets */ "./lib/widgets.ts");
/* harmony import */ var _DashboardApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DashboardApp */ "./front_end/dashboards/DashboardApp.tsx");





Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"])(() => {
    Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_3__["navbar"])("dashboard-nav");
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_DashboardApp__WEBPACK_IMPORTED_MODULE_4__["DashboardApp"]), document.getElementById("dashboards-container"));
});


/***/ }),

/***/ "./lib/ApiHelper.ts":
/*!**************************!*\
  !*** ./lib/ApiHelper.ts ***!
  \**************************/
/*! exports provided: get, post, postForm, put, putForm, patch, delete_ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postForm", function() { return postForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "put", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putForm", function() { return putForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_", function() { return delete_; });
/* harmony import */ var _Cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cookies */ "./lib/Cookies.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./lib/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const HEADERS = {
    "Content-Type": "application/json",
    "X-CSRFToken": Object(_Cookies__WEBPACK_IMPORTED_MODULE_0__["readCookie"])("csrftoken") || "",
};
function encodeParams(params) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(params)) {
        return "";
    }
    return "?" + Object.entries(params).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");
}
function encodeJson(obj) {
    return JSON.stringify(obj);
}
function decodeJsonIfAny(response) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (parseFloat((_a = response.headers.get("content-length"), (_a !== null && _a !== void 0 ? _a : "0"))) > 0
            && response.headers.get("content-type") === "application/json") {
            return response.json();
        }
    });
}
function isVinotecaError(obj) {
    const keys = Object.keys(obj);
    return keys.length === 1
        && ["NotFound", "Internal", "MissingConstraint", "BadRequest"]
            .find((i) => i === keys[0]) !== undefined;
}
function checkResponse(response) {
    return __awaiter(this, void 0, void 0, function* () {
        if (response.status > 310) {
            const message = yield decodeJsonIfAny(response);
            if (isVinotecaError(message)) {
                throw Error(`${Object.keys(message)[0]}: ${Object.values(message)[0]}`);
            }
            throw Error(message);
        }
        if (response.status === 204) {
            return [];
        }
        try {
            return decodeJsonIfAny(response);
        }
        catch (err) {
            throw Error(yield response.text());
        }
    });
}
/**
 * Makes an HTTP GET request to the url with the optional parameters, then parses
 * the JSON response.
 * @param url A URL to request
 * @param params An optional dictionary of parameters to their values
 * @returns parsed JSON response
 */
function get(url, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url + encodeParams(params));
        return checkResponse(response);
    });
}
/**
 * Makes an HTTP POST request to the url with the optional parameters containing
 * the body, then parses the JSON response.
 * @param url A URL to request
 * @param body JSON object to encode and send to the server
 * @param params An optional dictionary of parameters to their values
 * @returns parsed JSON response
 */
function post(url, body, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url + encodeParams(params), {
            body: encodeJson(body),
            headers: HEADERS,
            method: "POST",
        });
        return checkResponse(response);
    });
}
function postForm(url, form, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url + encodeParams(params), {
            body: form,
            method: "POST",
        });
        return checkResponse(response);
    });
}
/**
 * Makes an HTTP PUT request to the url with the optional parameters containing
 * the body, then parses the JSON response.
 * @param url A URL to request
 * @param body JSON object to encode and send to the server
 * @param params An optional dictionary of parameters and their values
 * @returns parsed JSON response
 */
function put(url, body, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url + encodeParams(params), {
            body: encodeJson(body),
            headers: HEADERS,
            method: "PUT",
        });
        return checkResponse(response);
    });
}
function putForm(url, form, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url + encodeParams(params), {
            body: form,
            method: "PUT",
        });
        return checkResponse(response);
    });
}
function patch(url, body, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url + encodeParams(params), {
            body: encodeJson(body),
            headers: HEADERS,
            method: "PATCH",
        });
        return checkResponse(response);
    });
}
function delete_(url, params = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url + encodeParams(params), {
            headers: HEADERS,
            method: "DELETE",
        });
        return checkResponse(response);
    });
}


/***/ }),

/***/ "./lib/Cookies.ts":
/*!************************!*\
  !*** ./lib/Cookies.ts ***!
  \************************/
/*! exports provided: createCookie, readCookie, deleteCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCookie", function() { return createCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readCookie", function() { return readCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCookie", function() { return deleteCookie; });
const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
/**
 * Create or update a cookie
 * @param name name/key of the cookie
 * @param value value to store
 * @param days number of days the cookie is valid, defaults to the current session
 */
function createCookie(name, value, days) {
    let expires;
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * MILLISECONDS_IN_DAY));
        expires = "; expires=" + date.toUTCString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    const nameEQ = name + "=";
    for (let c of document.cookie.split(";")) {
        while (c.charAt(0) === " ") {
            c = c.substr(1);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substr(nameEQ.length);
        }
    }
    return "";
}
function deleteCookie(name) {
    createCookie(name, "", -1);
}


/***/ }),

/***/ "./lib/Logger.ts":
/*!***********************!*\
  !*** ./lib/Logger.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logger; });
/* harmony import */ var _ApiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiHelper */ "./lib/ApiHelper.ts");
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets */ "./lib/widgets.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/** Provides logging functionality for client-side JavaScript errors. */
var LogLevel;
(function (LogLevel) {
    LogLevel["Critical"] = "critical";
    LogLevel["Error"] = "error";
    LogLevel["Warning"] = "warning";
    LogLevel["Info"] = "info";
    LogLevel["Debug"] = "debug";
})(LogLevel || (LogLevel = {}));
class Logger {
    /**
     * Logging class for client-side errors that will be posted to the server
     * for logging to the same file as all other vinoteca logs.
     *
     * @param module the name of the module from which the log messages originate.
     * @param toConsole whether to also print messages to the console
     */
    constructor(module, toConsole = false) {
        this.module = module;
        this.toConsole = toConsole;
    }
    /**
     * Meant for irrecoverable or truly exceptional errors. A toast with the
     * log message will be displayed and the log will be sent back to the server
     * for posterity.
     */
    logCritical(message) {
        const level = LogLevel.Critical;
        this.toast(level, message);
        return this.log(level, message);
    }
    /**
     * A toast with the log message will be displayed and the log will be sent
     * back to the server for posterity.
     */
    logError(message) {
        const level = LogLevel.Error;
        this.toast(level, message);
        return this.log(level, message);
    }
    /**
     * A toast with the log message will be displayed and the log will be sent
     * back to the server for posterity.
     */
    logWarning(message) {
        const level = LogLevel.Warning;
        this.toast(level, message);
        return this.log(level, message);
    }
    logInfo(message) {
        return this.log(LogLevel.Info, message);
    }
    logDebug(message) {
        return this.log(LogLevel.Debug, message);
    }
    log(level, message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.toConsole) {
                console.log(`${level.toUpperCase()} ${new Date()} ${this.module}: ${message}`);
            }
            const response = yield Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["post"])("/rest/logs", {
                level,
                // @ts-ignore
                message: message instanceof Object ? "" : message,
                module: this.module,
            });
            if (!response.success) {
                this.toast(LogLevel.Error, "Failed to send client-side logs to server.");
            }
        });
    }
    toast(level, message) {
        Object(_widgets__WEBPACK_IMPORTED_MODULE_1__["toast"])(`${level.toUpperCase()}: ${message}`);
    }
}


/***/ }),

/***/ "./lib/RestApi.ts":
/*!************************!*\
  !*** ./lib/RestApi.ts ***!
  \************************/
/*! exports provided: toDict, EmptyResultError, getColors, getColor, getTopColors, getGrapes, getGrape, getOrCreateGrape, createGrape, updateGrape, getTopGrapes, getProducers, getProducer, getOrCreateProducer, createProducer, updateProducer, deleteProducer, getTopProducers, getPurchases, createPurchase, updatePurchase, deletePurchase, getMostCommonPurchaseDate, getTotalLiters, getPurchaseCount, getRegions, getRegion, getOrCreateRegion, createRegion, updateRegion, getTopRegions, getStores, getStore, getOrCreateStore, createStore, getVitiAreas, getVitiArea, getOrCreateVitiArea, createVitiArea, updateVitiArea, getVitiAreaStats, getTopVitiAreas, getWines, getWine, createWine, updateWine, partUpdateWine, searchWines, getWineVarieties, getWineGrapes, createWineGrapes, getWineTypes, getWineType, getOrCreateWineType, createWineType, updateWineType, getTopWineTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDict", function() { return toDict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyResultError", function() { return EmptyResultError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColors", function() { return getColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return getColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopColors", function() { return getTopColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGrapes", function() { return getGrapes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGrape", function() { return getGrape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateGrape", function() { return getOrCreateGrape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGrape", function() { return createGrape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGrape", function() { return updateGrape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopGrapes", function() { return getTopGrapes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducers", function() { return getProducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducer", function() { return getProducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateProducer", function() { return getOrCreateProducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProducer", function() { return createProducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProducer", function() { return updateProducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProducer", function() { return deleteProducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopProducers", function() { return getTopProducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPurchases", function() { return getPurchases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPurchase", function() { return createPurchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePurchase", function() { return updatePurchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePurchase", function() { return deletePurchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMostCommonPurchaseDate", function() { return getMostCommonPurchaseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalLiters", function() { return getTotalLiters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPurchaseCount", function() { return getPurchaseCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegions", function() { return getRegions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegion", function() { return getRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateRegion", function() { return getOrCreateRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegion", function() { return createRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRegion", function() { return updateRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopRegions", function() { return getTopRegions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStores", function() { return getStores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return getStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateStore", function() { return getOrCreateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVitiAreas", function() { return getVitiAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVitiArea", function() { return getVitiArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateVitiArea", function() { return getOrCreateVitiArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVitiArea", function() { return createVitiArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateVitiArea", function() { return updateVitiArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVitiAreaStats", function() { return getVitiAreaStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopVitiAreas", function() { return getTopVitiAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWines", function() { return getWines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWine", function() { return getWine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWine", function() { return createWine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWine", function() { return updateWine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partUpdateWine", function() { return partUpdateWine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchWines", function() { return searchWines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWineVarieties", function() { return getWineVarieties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWineGrapes", function() { return getWineGrapes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWineGrapes", function() { return createWineGrapes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWineTypes", function() { return getWineTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWineType", function() { return getWineType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateWineType", function() { return getOrCreateWineType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWineType", function() { return createWineType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWineType", function() { return updateWineType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopWineTypes", function() { return getTopWineTypes; });
/* harmony import */ var _ApiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiHelper */ "./lib/ApiHelper.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logger */ "./lib/Logger.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function toDict(models) {
    const result = {};
    models.forEach((model) => {
        result[model.name] = null;
    });
    return result;
}
class EmptyResultError extends Error {
    constructor(message) {
        super(message);
        this.name = EmptyResultError.NAME;
    }
    static isInstance(err) {
        return err.name === this.NAME;
    }
}
EmptyResultError.NAME = "EmptyResultError";
function nonNulls(obj) {
    const q = {};
    Object.keys(obj).filter((k) => Boolean(obj[k])).forEach((k) => {
        q[k] = obj[k];
    });
    return q;
}
function singleEntityGetter(listGetter) {
    // Shave off 'get'
    const objName = listGetter.name.substr(3);
    return (params) => __awaiter(this, void 0, void 0, function* () {
        const results = yield listGetter(params);
        if (results.length > 1) {
            const message = `Received more than one ${objName} result when one was expected`;
            const logger = new _Logger__WEBPACK_IMPORTED_MODULE_1__["default"]("RestApi");
            logger.logError(message);
            throw Error(message);
        }
        return results[0];
    });
}
function getOrCreate(listGetter, creator) {
    const objName = listGetter.name.substr(3);
    return (params, form) => __awaiter(this, void 0, void 0, function* () {
        const results = yield listGetter(params);
        if (results.length === 0) {
            const newObj = yield creator(form);
        }
        if (results.length === 1) {
            return results[0];
        }
        const message = `Received more than one ${objName} result when one was expected`;
        new _Logger__WEBPACK_IMPORTED_MODULE_1__["default"]("RestApi").logError(message);
        throw Error(message);
    });
}
function getColors({ id, name }) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ id, name });
        const colors = yield Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/colors", nonNullParams);
        if (colors.length === 0) {
            throw new EmptyResultError("Empty result returned for color");
        }
        return colors;
    });
}
const getColor = singleEntityGetter(getColors);
function getTopColors() {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/colors/top");
    });
}
function getGrapes({ id, name }) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ id, name });
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/grapes", nonNullParams);
    });
}
const getGrape = singleEntityGetter(getGrapes);
const getOrCreateGrape = getOrCreate(getGrapes, createGrape);
function createGrape(grape) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["post"])("/rest/grapes", grape);
    });
}
function updateGrape(id, grape) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["put"])(`/rest/grapes/${id}`, grape);
    });
}
function getTopGrapes(limit) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ limit });
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/grapes/top", nonNullParams);
    });
}
// tslint:disable-next-line max-line-length
function getProducers({ id, name, regionId }) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ id, name, region_id: regionId });
        const producers = yield Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/producers", nonNullParams);
        return producers;
    });
}
const getProducer = singleEntityGetter(getProducers);
const getOrCreateProducer = getOrCreate(getProducers, createProducer);
function createProducer(producer) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["post"])("/rest/producers", producer);
    });
}
function updateProducer(producer) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["put"])(`/rest/producers/${producer.id}`, producer);
    });
}
function deleteProducer(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["delete_"])(`/rest/producers/${id}`);
    });
}
function getTopProducers(limit) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ limit });
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/producers/top", nonNullParams);
    });
}
function getPurchases({ wineId }) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ wine_id: wineId });
        const purchases = yield Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/purchases", nonNullParams);
        return purchases;
    });
}
function createPurchase(purchase) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["post"])("/rest/purchases", purchase);
    });
}
function updatePurchase(id, purchase) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["put"])(`/rest/purchases/${id}`, purchase);
    });
}
function deletePurchase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["delete_"])(`/rest/purchases/${id}`);
    });
}
function getMostCommonPurchaseDate() {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/purchases/most-common-purchase-date");
    });
}
function getTotalLiters() {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/purchases/total-liters");
    });
}
function getPurchaseCount() {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/purchases/count");
    });
}
function getRegions({ id, name, producerName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ id, name, producer_name: producerName });
        const regions = yield Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/regions", nonNullParams);
        return regions;
    });
}
const getRegion = singleEntityGetter(getRegions);
const getOrCreateRegion = getOrCreate(getRegions, createRegion);
function createRegion(region) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["post"])("/rest/regions", region);
    });
}
function updateRegion(region) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["put"])(`/rest/regions/${region.id}`, region);
    });
}
function getTopRegions(limit) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ limit });
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/regions/top", nonNullParams);
    });
}
function getStores({ id, name }) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ id, name });
        const stores = yield Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/stores", nonNullParams);
        return stores;
    });
}
const getStore = singleEntityGetter(getStores);
const getOrCreateStore = getOrCreate(getStores, createStore);
function createStore(store) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["post"])("/rest/stores", store);
    });
}
function getVitiAreas({ id, name, regionName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ id, name, region_name: regionName });
        const vitiAreas = yield Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/viti-areas", nonNullParams);
        return vitiAreas;
    });
}
const getVitiArea = singleEntityGetter(getVitiAreas);
const getOrCreateVitiArea = getOrCreate(getVitiAreas, createVitiArea);
function createVitiArea(vitiArea) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["post"])("/rest/viti-areas", vitiArea);
    });
}
function updateVitiArea(vitiArea) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["put"])(`/rest/viti-areas/${vitiArea.id}`, vitiArea);
    });
}
function getVitiAreaStats({ id, regionId }) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ id, region_id: regionId });
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/viti-areas/stats", nonNullParams);
    });
}
function getTopVitiAreas(limit) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ limit });
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/viti-areas/top", nonNullParams);
    });
}
function getWines({ id, producerId, regionId, vitiAreaId, wineTypeId }) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({
            id, region_id: regionId, producer_id: producerId,
            viti_area_id: vitiAreaId, wine_type_id: wineTypeId,
        });
        const wines = yield Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/wines", nonNullParams);
        return wines;
    });
}
const getWine = singleEntityGetter(getWines);
const createWineHttpForm = (wine, file) => {
    const form = new FormData();
    form.append("wine_form", new Blob([JSON.stringify(wine)], { type: "application/json" }));
    if (file) {
        form.append("image", file);
    }
    return form;
};
function createWine(wine, file) {
    return __awaiter(this, void 0, void 0, function* () {
        const form = createWineHttpForm(wine, file);
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["postForm"])("/rest/wines", form);
    });
}
function updateWine(id, wine, file) {
    return __awaiter(this, void 0, void 0, function* () {
        const form = createWineHttpForm(wine, file);
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["putForm"])(`/rest/wines/${id}`, form);
    });
}
function partUpdateWine(id, wine) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["patch"])(`/rest/wines/${id}`, wine);
    });
}
function searchWines({ colorLike, wineTypeLike, producerLike, regionLike, vitiAreaLike }) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({
            color_like: colorLike, wine_type_like: wineTypeLike, producer_like: producerLike,
            region_like: regionLike, viti_area_like: vitiAreaLike,
        });
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/wines/search", nonNullParams);
    });
}
function getWineVarieties() {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/wines/count");
    });
}
// tslint:disable-next-line max-line-length
function getWineGrapes({ wineId, grapeId }) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ wine_id: wineId, grape_id: grapeId });
        const wineGrapes = yield Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/wine-grapes", nonNullParams);
        return wineGrapes;
    });
}
function createWineGrapes(wineGrapes) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["post"])("/rest/wine-grapes", wineGrapes);
    });
}
function getWineTypes({ id, name }) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ id, name });
        const wineTypes = yield Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/wine-types", nonNullParams);
        return wineTypes;
    });
}
const getWineType = singleEntityGetter(getWineTypes);
const getOrCreateWineType = getOrCreate(getWineTypes, createWineType);
function createWineType(wineType) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["post"])("/rest/wine-types", wineType);
    });
}
function updateWineType(wineType) {
    return __awaiter(this, void 0, void 0, function* () {
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["put"])(`/rest/wine-types/${wineType.id}`, wineType);
    });
}
function getTopWineTypes(limit) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonNullParams = nonNulls({ limit });
        return Object(_ApiHelper__WEBPACK_IMPORTED_MODULE_0__["get"])("/rest/wine-types/top", nonNullParams);
    });
}


/***/ }),

/***/ "./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/*! exports provided: restModelsToNameDict, numToDate, dateToNum, EN_DASH, defaultVintageYear, isEmpty, capitalizeFirstLetter, nameToId, maxBy, sumBy, areEqual, range, imageExists, getNameAndType, redirect, onLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restModelsToNameDict", function() { return restModelsToNameDict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numToDate", function() { return numToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToNum", function() { return dateToNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EN_DASH", function() { return EN_DASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultVintageYear", function() { return defaultVintageYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameToId", function() { return nameToId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxBy", function() { return maxBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumBy", function() { return sumBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areEqual", function() { return areEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageExists", function() { return imageExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNameAndType", function() { return getNameAndType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirect", function() { return redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return onLoad; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Converts the objects to a single object of names to null for use with materialize
 * autocomplete.
 * @param objects An array of REST models
 */
function restModelsToNameDict(objects) {
    const dict = {};
    objects.map((obj) => {
        dict[obj.name] = null;
    });
    return dict;
}
/**
 * Converts an 8-digit number of format 'yyyymmdd' to a Date object.
 * @param num a date number of format 'yyyymmdd'
 */
function numToDate(num) {
    const strNum = `${num}`;
    if (strNum.length !== 8) {
        console.warn(`Invalid date number '${strNum}'`);
    }
    const year = strNum.substr(0, 4);
    const month = strNum.substr(4, 2);
    const day = strNum.substr(6, 2);
    // JS months are 0-based
    return new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
}
function dateToNum(date) {
    return date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
}
const EN_DASH = "–";
/**
 * Returns the default vintage year, which is two years prior to the current
 * year. This function duplicates the Python function
 * vinoteca.utils.default_vintage_year
 */
function defaultVintageYear() {
    return new Date().getFullYear() - 2;
}
/**
 * Checks if an object is empty, i.e. has no keys.
 * @param obj An object
 */
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
/**
 * Returns s with the first letter capitalized.
 * @param s A string
 */
function capitalizeFirstLetter(s) {
    return s.length > 0 ? s[0].toUpperCase() + s.substring(1) : "";
}
/**
 * Converts a display name to an html id
 * @param name A component display name
 */
function nameToId(name) {
    return name.replace(/(\s)+/g, "-").toLowerCase();
}
/**
 * Finds the maximum element by one the properties of the type of element
 * @param arr An array of objcects
 * @param accessor A function for accessing a number property of the objects
 */
function maxBy(arr, accessor) {
    let maxElem;
    let maxVal = -Infinity;
    for (const elem of arr) {
        const val = accessor(elem);
        if (val > maxVal) {
            maxElem = elem;
            maxVal = val;
        }
    }
    return maxElem;
}
/**
 * Sums an array of objects by one of the objects' properties.
 * @param arr An array of objects
 * @param accessor A function for accessing one of the objects' properties
 */
function sumBy(arr, accessor) {
    let sum = 0;
    for (const elem of arr) {
        sum += accessor(elem);
    }
    return sum;
}
/**
 * Compares two objects for deep equality.
 * @param a An object
 * @param b An object
 */
function areEqual(a, b) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
        return false;
    }
    for (const k of aKeys) {
        if (a[k] !== b[k]) {
            return false;
        }
    }
    return true;
}
/**
 * Creates an iterable range of numbersonClick.
 * @param start First number of the range
 * @param stop End of the range (non-inclusive)
 * @param step Increment of the range
 */
function* range({ start, stop, step }) {
    step = step || 1;
    start = start || 0;
    stop = stop || Number.MAX_SAFE_INTEGER;
    for (let i = start; i < stop; i += step) {
        yield i;
    }
}
function imageExists(imageUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(imageUrl, { method: "HEAD" });
            return response.ok;
        }
        catch (_a) {
            return false;
        }
    });
}
function getNameAndType(name, wineType) {
    return `${(name ? name + " " : "")}${wineType}`;
}
// TODO: move to use React router or something similar
function redirect(url) {
    location.href = url;
}
function onLoad(fun) {
    document.addEventListener("DOMContentLoaded", fun);
}


/***/ }),

/***/ "./lib/widgets.ts":
/*!************************!*\
  !*** ./lib/widgets.ts ***!
  \************************/
/*! exports provided: autocomplete, navbar, toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autocomplete", function() { return autocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbar", function() { return navbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return toast; });
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_0__);

/** Setup autocompletion with provided completion options. */
function autocomplete(elem, completions, onChange, minLength = 1, limit = 5) {
    if (elem.current) {
        // tslint:disable-next-line no-unused-expression
        new materialize_css__WEBPACK_IMPORTED_MODULE_0__["Autocomplete"](elem.current, {
            data: completions,
            limit,
            minLength,
            onAutocomplete: function (text) {
                onChange(text);
            },
        });
        // Fix overlappting text bug
        M.updateTextFields();
    }
}
function activateNavbarTab(id) {
    document.getElementById(id).classList.add("active");
}
/** Enables navbar menus. Should be called on every page. */
function navbar(activeNavTabId) {
    if (activeNavTabId) {
        activateNavbarTab(activeNavTabId);
    }
    const sideNavElem = document.querySelector(".sidenav");
    // tslint:disable-next-line no-unused-expression
    new materialize_css__WEBPACK_IMPORTED_MODULE_0__["Sidenav"](sideNavElem);
    const dropdownElem = document.querySelector(".dropdown-trigger");
    // tslint:disable-next-line no-unused-expression
    new materialize_css__WEBPACK_IMPORTED_MODULE_0__["Dropdown"](dropdownElem);
}
/** Simplifies displaying of toast messages to user */
function toast(message) {
    M.toast({
        classes: "red-bg",
        displayLength: 10000,
        html: message,
    });
}


/***/ }),

/***/ 2:
/*!**************************************************!*\
  !*** multi ./front_end/dashboards/dashboards.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carter/git/vinoteca/vinoteca/front_end/dashboards/dashboards.ts */"./front_end/dashboards/dashboards.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGFydC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByZWxvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZUNlbGxzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYnMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9wRW50aXR5LnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvZGFzaGJvYXJkcy9CeVRoZU51bWJlcnMudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC9kYXNoYm9hcmRzL0Rhc2hib2FyZEFwcC50c3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRfZW5kL2Rhc2hib2FyZHMvUHVyY2hhc2VzQnlZZWFyLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvZGFzaGJvYXJkcy9Ub3AudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC9kYXNoYm9hcmRzL2Rhc2hib2FyZHMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL0FwaUhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9saWIvQ29va2llcy50cyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL2xpYi9SZXN0QXBpLnRzIiwid2VicGFjazovLy8uL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9saWIvd2lkZ2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDM0IsSUFBSSxFQUFFLFdBQVc7WUFDakIsS0FBSztZQUNMLFNBQVM7WUFFVCxjQUFjLEVBQUUsVUFBZSxJQUFJO2dCQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkIsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUNILDRCQUE0QjtRQUM1QixDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN4QjtBQUNMLENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLEVBQVU7SUFDaEMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBRUQsNERBQTREO0FBQ3JELFNBQVMsTUFBTSxDQUFDLGNBQXVCO0lBQzFDLElBQUksY0FBYyxFQUFFO1FBQ2hCLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2RCxnREFBZ0Q7SUFDaEQsSUFBSSx1REFBTyxDQUFDLFdBQVksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqRSxnREFBZ0Q7SUFDaEQsSUFBSSx3REFBUSxDQUFDLFlBQWEsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRCxzREFBc0Q7QUFDL0MsU0FBUyxLQUFLLENBQUMsT0FBZTtJQUNqQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ0osT0FBTyxFQUFFLFFBQVE7UUFDakIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsSUFBSSxFQUFFLE9BQU87S0FDaEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsImZpbGUiOiJkYXNoYm9hcmRzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJkYXNoYm9hcmRzXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSUNoaWxkcmVuUHJvcCwgSUNsYXNzZXNQcm9wIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJQ2hpbGRyZW5Qcm9wLCBJQ2xhc3Nlc1Byb3Age1xuICAgIHRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IENhcmQ6IFJlYWN0LkZDPElQcm9wcz4gPSAoe2NsYXNzZXMsIGNoaWxkcmVuLCB0aXRsZX0pID0+IHtcbiAgICBjb25zdCBqb2luZWRDbGFzc2VzID0gY2xhc3Nlcz8uam9pbihcIiBcIikgPz8gXCJcIjtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGBjYXJkICR7am9pbmVkQ2xhc3Nlc31gIH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+eyB0aXRsZSB9PC9oMj5cbiAgICAgICAgICAgICAgICB7IC4uLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5DYXJkLmRpc3BsYXlOYW1lID0gXCJDYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBSZWRDYXJkOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtjbGFzc2VzLCBjaGlsZHJlbiwgdGl0bGV9KSA9PiB7XG4gICAgY29uc3QgYWxsQ2xhc3NlcyA9IChjbGFzc2VzID8/IFtdKS5jb25jYXQoW1wid2luZS1yZWQtY2FyZFwiXSk7XG4gICAgcmV0dXJuIENhcmQoe2NsYXNzZXM6IGFsbENsYXNzZXMsIGNoaWxkcmVuLCB0aXRsZX0pO1xufVxuUmVkQ2FyZC5kaXNwbGF5TmFtZSA9IFwiUmVkQ2FyZFwiO1xuXG5leHBvcnQgY29uc3QgR3JlZW5DYXJkOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtjbGFzc2VzLCBjaGlsZHJlbiwgdGl0bGV9KSA9PiB7XG4gICAgY29uc3QgYWxsQ2xhc3NlcyA9IChjbGFzc2VzID8/IFtdKS5jb25jYXQoW1wid2luZS1ncmVlbi1jYXJkXCJdKTtcbiAgICByZXR1cm4gQ2FyZCh7Y2xhc3NlczogYWxsQ2xhc3NlcywgY2hpbGRyZW4sIHRpdGxlfSk7XG59XG5HcmVlbkNhcmQuZGlzcGxheU5hbWUgPSBcIkdyZWVuQ2FyZFwiO1xuXG5leHBvcnQgY29uc3QgWWVsbG93Q2FyZDogUmVhY3QuRkM8SVByb3BzPiA9ICh7Y2xhc3NlcywgY2hpbGRyZW4sIHRpdGxlfSkgPT4ge1xuICAgIGNvbnN0IGFsbENsYXNzZXMgPSAoY2xhc3NlcyA/PyBbXSkuY29uY2F0KFtcImdvbGRlbi15ZWxsb3ctY2FyZFwiXSk7XG4gICAgcmV0dXJuIENhcmQoe2NsYXNzZXM6IGFsbENsYXNzZXMsIGNoaWxkcmVuLCB0aXRsZX0pO1xufVxuWWVsbG93Q2FyZC5kaXNwbGF5TmFtZSA9IFwiWWVsbG93Q2FyZFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vbGliL0xvZ2dlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydElucHV0IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHZhbHVlOiBudW1iZXI7XG59XG5cbmNvbnN0IEZPTlRfRkFNSUxZID0gXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiO1xuXG5jb25zdCBDT0xPUlMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPihbXG4gICAgW1wicmVkXCIsIFwicmdiYSgyMzAsIDI1LCA3NSwgMC44KVwiXSxcbiAgICBbXCJvcmFuZ2VcIiwgXCJyZ2JhKDI0NSwgMTMwLCA0OCwgMC44KVwiXSxcbiAgICBbXCJ5ZWxsb3dcIiwgXCJyZ2JhKDI1NSwgMjI1LCAyNSwgMC44KVwiXSxcbiAgICBbXCJsaW1lXCIsIFwicmdiYSgyMTAsIDI0NSwgNjAsIDAuOClcIl0sXG4gICAgW1wiZ3JlZW5cIiwgXCJyZ2JhKDYwLCAxODAsIDc1LCAwLjgpXCJdLFxuICAgIFtcImN5YW5cIiwgXCJyZ2JhKDcwLCAyNDAsIDI0MCwgMC44KVwiXSxcbiAgICBbXCJibHVlXCIsIFwicmdiYSgwLCAxMzAsIDIwMCwgMC44KVwiXSxcbiAgICBbXCJuYXZ5XCIsIFwicmdiYSgwLCAwLCAxMjgsIDAuOClcIl0sXG4gICAgW1wibWFnZW50YVwiLCBcInJnYmEoMjQwLCA1MCwgMjMwLCAwLjgpXCJdLFxuICAgIFtcInB1cnBsZVwiLCBcInJnYmEoMTQ1LCAzMCwgMTgwLCAwLjgpXCJdLFxuXSk7XG5cbmNvbnN0IFdISVRFID0gXCIjZjhmOGY4XCI7XG5jb25zdCBUUkFOU0xVQ0VOVF9XSElURSA9IFwicmdiYSgyNDAsIDI0MCwgMjQwLCAwLjkpXCI7XG5jb25zdCBUUkFOU0xVQ0VOVF9HUkFZID0gXCJyZ2JhKDIwMCwgMjAwLCAyMDAsIDAuOSlcIjtcblxuZnVuY3Rpb24gY2hhbmdlVHJhbnNwYXJlbmN5KGNvbG9yOiBzdHJpbmcsIHRyYW5zcGFyZW5jeTogbnVtYmVyKSB7XG4gICAgaWYgKHRyYW5zcGFyZW5jeSA8PSAwIHx8IHRyYW5zcGFyZW5jeSA+PSAxKSB7XG4gICAgICAgIHRocm93IEVycm9yKFwiVHJhbnNwYXJlbmN5IG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxXCIpO1xuICAgIH1cbiAgICBjb25zdCBmaWVsZHMgPSBjb2xvci5zdWJzdHIoNSwgY29sb3IubGVuZ3RoIC0gNykuc3BsaXQoXCIsXCIpLm1hcChcbiAgICAgICAgKHZhbCkgPT4gcGFyc2VJbnQodmFsLCAxMCksXG4gICAgKTtcblxuICAgIGZpZWxkc1szXSA9IHRyYW5zcGFyZW5jeTtcbiAgICByZXR1cm4gYHJnYmEoJHtmaWVsZHNbMF19LCAke2ZpZWxkc1sxXX0sICR7ZmllbGRzWzJdfSwgJHtmaWVsZHNbM119KWA7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBzcGxpdHRpbmcgRGljdCB0byBzZXBlcmF0ZSBsYWJlbCBhbmQga2V5IGFycmF5cyBmb3JcbiAqIGludGVyZmFjaW5nIHdpdGggQ2hhcnRzLmpzXG4gKi9cbmZ1bmN0aW9uIHNwbGl0RGF0YShkYXRhOiBJQ2hhcnRJbnB1dFtdKTogW3N0cmluZ1tdLCBudW1iZXJbXV0ge1xuICAgIGNvbnN0IGNoYXJ0RGF0YTogbnVtYmVyW10gPSBbXTtcbiAgICBjb25zdCBjaGFydExhYmVsczogc3RyaW5nW10gPSBbXTtcbiAgICBkYXRhLmZvckVhY2goKGNvKSA9PiB7XG4gICAgICAgIGNoYXJ0RGF0YS5wdXNoKGNvLnZhbHVlKTtcbiAgICAgICAgY2hhcnRMYWJlbHMucHVzaChjby5sYWJlbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjaGFydExhYmVscywgY2hhcnREYXRhXTtcbn1cblxuLyoqIEhlbHBlciBmdW5jdGlvbiB0byBkZXRlcm1pbmUgd2hldGhlciB0byBwcm9jZWVkIHdpdGggY2hhcnQgY3JlYXRpb24uICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNoYXJ0SW5wdXQoY2hhcnREYXRhOiBudW1iZXJbXSkge1xuICAgIC8vIE9ubHkgY3JlYXRlIGNoYXJ0IGlmIG9uZSBvciBtb3JlIGdyYXBlcyBoYXMgYSBub24temVybyB2YWx1ZVxuICAgIGlmIChjaGFydERhdGEubGVuZ3RoID09PSAwIHx8IGNoYXJ0RGF0YS5ldmVyeShudW0gPT4gbnVtID09PSAwKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5pbnRlcmZhY2UgSVBpZUNoYXJ0UHJvcHMge1xuICAgIGRhdGE6IElDaGFydElucHV0W107XG59XG5cbmV4cG9ydCBjb25zdCBQaWVDaGFydDogUmVhY3QuRkM8SVBpZUNoYXJ0UHJvcHM+ID0gKHtkYXRhfSkgPT4ge1xuICAgIGNvbnN0IFtjaGFydExhYmVscywgY2hhcnREYXRhXSA9IHNwbGl0RGF0YShkYXRhKTtcblxuICAgIGNvbnN0IGNvbmZpZzogQ2hhcnQuQ2hhcnRDb25maWd1cmF0aW9uID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJyZ2JhKDEzOSwgMTk1LCA3NClcIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZ2JhKDE3MywgMjAsIDg3KVwiLFxuICAgICAgICAgICAgICAgICAgICBcInJnYmEoMjUxLCAxOTIsIDQ1KVwiLFxuICAgICAgICAgICAgICAgICAgICBDT0xPUlMuZ2V0KFwiYmx1ZVwiKSEsXG4gICAgICAgICAgICAgICAgICAgIENPTE9SUy5nZXQoXCJwdXJwbGVcIikhLFxuICAgICAgICAgICAgICAgICAgICBDT0xPUlMuZ2V0KFwib3JhbmdlXCIpISxcblxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgZGF0YTogY2hhcnREYXRhLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlwiLFxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0TGFiZWxzLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAvLyBSZXNpemUgY2hhcnQgd2l0aCBpdHMgY29udGFpbmVyXG4gICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTUsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogRk9OVF9GQU1JTFksXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgIGJvZHlGb250RmFtaWx5OiBGT05UX0ZBTUlMWSxcbiAgICAgICAgICAgICAgICBib2R5Rm9udFNpemU6IDE0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogXCJwaWVcIixcbiAgICB9O1xuXG4gICAgY29uc3QgY2FudmFzUmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MQ2FudmFzRWxlbWVudD47XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBwaWUgPSBuZXcgQ2hhcnQoY2FudmFzUmVmLmN1cnJlbnQsIGNvbmZpZyk7XG4gICAgfSwgW2NhbnZhc1JlZiwgY29uZmlnXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Y2FudmFzIGhlaWdodD1cIjEwMHB4XCIgcmVmPXtjYW52YXNSZWZ9IC8+XG4gICAgKTtcbn1cblBpZUNoYXJ0LmRpc3BsYXlOYW1lID0gXCJQaWVDaGFydFwiO1xuXG5pbnRlcmZhY2UgSUJhckNoYXJ0UHJvcHMge1xuICAgIGRhdGE6IElDaGFydElucHV0W107XG4gICAgaGVpZ2h0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBCYXJDaGFydDogUmVhY3QuRkM8SUJhckNoYXJ0UHJvcHM+ID0gKHtkYXRhLCBoZWlnaHR9KSA9PiB7XG4gICAgY29uc3QgW2NoYXJ0TGFiZWxzLCBjaGFydERhdGFdID0gc3BsaXREYXRhKGRhdGEpO1xuICAgIC8vIEVycm9yIGNoZWNraW5nXG4gICAgaWYgKCF2YWxpZGF0ZUNoYXJ0SW5wdXQoY2hhcnREYXRhKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY29sb3JWYWx1ZXMgPSBBcnJheS5mcm9tKENPTE9SUy52YWx1ZXMoKSk7XG5cbiAgICBjb25zdCBjb25maWc6IENoYXJ0LkNoYXJ0Q29uZmlndXJhdGlvbiA9IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclZhbHVlcyxcbiAgICAgICAgICAgICAgICBkYXRhOiBjaGFydERhdGEsXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnRMYWJlbHMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogVFJBTlNMVUNFTlRfR1JBWSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiBUUkFOU0xVQ0VOVF9XSElURSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBUUkFOU0xVQ0VOVF9HUkFZLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiBUUkFOU0xVQ0VOVF9XSElURSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgYm9keUZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgICAgIGJvZHlGb250U2l6ZTogMTIsXG4gICAgICAgICAgICAgICAgdGl0bGVGb250RmFtaWx5OiBGT05UX0ZBTUlMWSxcbiAgICAgICAgICAgICAgICB0aXRsZUZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IFwiaG9yaXpvbnRhbEJhclwiLFxuICAgIH07XG5cbiAgICBjb25zdCBjYW52YXNSZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxDYW52YXNFbGVtZW50PjtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhciA9IG5ldyBDaGFydChjYW52YXNSZWYuY3VycmVudCwgY29uZmlnKTtcbiAgICB9LCBbY2FudmFzUmVmLCBjb25maWddKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxjYW52YXMgaGVpZ2h0PXtoZWlnaHR9IHJlZj17Y2FudmFzUmVmfSAvPlxuICAgICk7XG59XG5CYXJDaGFydC5kaXNwbGF5TmFtZSA9IFwiQmFyQ2hhcnRcIjtcblxuaW50ZXJmYWNlIElMaW5lQ2hhcnRQcm9wcyB7XG4gICAgZGF0YTogSUNoYXJ0SW5wdXRbXVtdO1xuICAgIHNlcmllc0xhYmVsczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBMaW5lQ2hhcnQ6IFJlYWN0LkZDPElMaW5lQ2hhcnRQcm9wcz4gPSAoe2RhdGEsIHNlcmllc0xhYmVsc30pID0+IHtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKExpbmVDaGFydC5uYW1lKTtcblxuICAgIGNvbnN0IGNoYXJ0TGFiZWxzID0gc3BsaXREYXRhKGRhdGFbMF0pWzBdO1xuICAgIGlmIChkYXRhLmxlbmd0aCAhPT0gc2VyaWVzTGFiZWxzLmxlbmd0aCkge1xuICAgICAgICBsb2dnZXIubG9nV2FybmluZyhgRGF0YSBhbmQgc2VyaWVzTGFiZWxzIGhhdmUgZGlmZmVyZW50IGxlbmdodHMuIGAgK1xuICAgICAgICAgICAgICAgICAgIGAke2RhdGEubGVuZ3RofSBhbmQgJHtzZXJpZXNMYWJlbHMubGVuZ3RofSByZXNwZWN0aXZlbHkuYCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZzogQ2hhcnQuQ2hhcnRDb25maWd1cmF0aW9uID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkYXRhc2V0czogW10sXG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0TGFiZWxzLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTUsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFRSQU5TTFVDRU5UX0dSQVksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogVFJBTlNMVUNFTlRfV0hJVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBGT05UX0ZBTUlMWSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogVFJBTlNMVUNFTlRfR1JBWSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogVFJBTlNMVUNFTlRfV0hJVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBGT05UX0ZBTUlMWSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgIGJvZHlGb250RmFtaWx5OiBGT05UX0ZBTUlMWSxcbiAgICAgICAgICAgICAgICBib2R5Rm9udFNpemU6IDEyLFxuICAgICAgICAgICAgICAgIHRpdGxlRm9udEZhbWlseTogRk9OVF9GQU1JTFksXG4gICAgICAgICAgICAgICAgdGl0bGVGb250U2l6ZTogMTQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiBcImxpbmVcIixcbiAgICB9O1xuXG4gICAgY29uc3QgY29sb3JWYWx1ZXMgPSBBcnJheS5mcm9tKENPTE9SUy52YWx1ZXMoKSk7XG4gICAgLy8gVmFsaWRhdGUgdGhlbiBhZGQgZWFjaCBkYXRhIHNlcmllcyB0byBjb25maWdcbiAgICBjb25zdCBkYXRhVmFsaWRhdGlvbiA9IGRhdGEubWFwKChzZXJpZXMsIGkpID0+IHtcbiAgICAgICAgY29uc3QgW18sIGNoYXJ0RGF0YV0gPSBzcGxpdERhdGEoc2VyaWVzKTtcbiAgICAgICAgLy8gQWRkIHRoZSBzZXJpZXMgZGF0YSB0byB0aGUgY29ycmVzcG9uZGluZyBrZXkgaW4gZGF0YXNldExhYmVsc1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbmZpZy5kYXRhLmRhdGFzZXRzLnB1c2goe1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGFuZ2VUcmFuc3BhcmVuY3koY29sb3JWYWx1ZXNbaV0sIDAuNSksXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3JWYWx1ZXNbaV0sXG4gICAgICAgICAgICBkYXRhOiBjaGFydERhdGEsXG4gICAgICAgICAgICBsYWJlbDogc2VyaWVzTGFiZWxzW2ldLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gRXJyb3IgY2hlY2tpbmdcbiAgICAgICAgaWYgKGNoYXJ0RGF0YS5ldmVyeSgobnVtKSA9PiBudW0gPT09IDApKSB7XG4gICAgICAgICAgICBsb2dnZXIubG9nV2FybmluZyhcIkFsbCB6ZXJvZXMgZm9yIGNoYXJ0XCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgaWYgKCFkYXRhVmFsaWRhdGlvbi5ldmVyeSgodmFsKSA9PiB2YWwpKSB7XG4gICAgICAgIGxvZ2dlci5sb2dXYXJuaW5nKFwiRGF0YSB2YWxpZGF0aW9uIG9mIGNoYXJ0RGF0YSBmYWlsZWRcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbnZhc1JlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTENhbnZhc0VsZW1lbnQ+O1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbGluZSA9IG5ldyBDaGFydChjYW52YXNSZWYuY3VycmVudCwgY29uZmlnKTtcbiAgICB9LCBbY2FudmFzUmVmLCBjb25maWddKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IC8+XG4gICAgKTtcbn1cbkxpbmVDaGFydC5kaXNwbGF5TmFtZSA9IFwiTGluZUNoYXJ0XCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQ2hpbGRyZW5Qcm9wLCBJQ2xhc3Nlc1Byb3AgfSBmcm9tIFwiLi9JUHJvcHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFByb3BzIHtcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbiAgICB4bD86IG51bWJlcjtcbn1cblxudHlwZSBJQWxsR3JpZFByb3BzID0gSUdyaWRQcm9wcyAmIElDbGFzc2VzUHJvcCAmIElDaGlsZHJlblByb3A7XG5cbmZ1bmN0aW9uIGpvaW5DbGFzc2VzKGdyaWQ6IHN0cmluZ1tdLCBjbGFzc2VzPzogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIGxldCBhbGxDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGdyaWQuZm9yRWFjaCgoZ2MpID0+IHtcbiAgICAgICAgaWYgKGdjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFsbENsYXNzZXMucHVzaChnYyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBhbGxDbGFzc2VzID0gYWxsQ2xhc3Nlcy5jb25jYXQoY2xhc3NlcyB8fCBbXSk7XG4gICAgcmV0dXJuIGFsbENsYXNzZXMuam9pbihcIiBcIik7XG59XG5cbmZ1bmN0aW9uIGdyaWRDbGFzc2VzKHByb3BzOiBJQWxsR3JpZFByb3BzKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHNDbGFzcyA9IHByb3BzLnMgPyBgcyR7cHJvcHMuc31gIDogXCJcIjtcbiAgICBjb25zdCBtQ2xhc3MgPSBwcm9wcy5tID8gYG0ke3Byb3BzLm19YCA6IFwiXCI7XG4gICAgY29uc3QgbENsYXNzID0gcHJvcHMubCA/IGBsJHtwcm9wcy5sfWAgOiBcIlwiO1xuICAgIGNvbnN0IHhsQ2xhc3MgPSBwcm9wcy54bCA/IGB4bCR7cHJvcHMueGx9YCA6IFwiXCI7XG4gICAgcmV0dXJuIFtzQ2xhc3MsIG1DbGFzcywgbENsYXNzLCB4bENsYXNzXTtcbn1cblxuY29uc3QgR3JpZENvbXBvbmVudEZhY3RvcnkgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIGRpc3BsYXlOYW1lOiBzdHJpbmcpOiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50OiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IChwcm9wczogSUFsbEdyaWRQcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBvdGhlckNsYXNzZXMgPSBqb2luQ2xhc3NlcyhncmlkQ2xhc3Nlcyhwcm9wcyksIHByb3BzLmNsYXNzZXMpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgJHtjbGFzc05hbWV9ICR7b3RoZXJDbGFzc2VzfWAgfT5cbiAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG4gICAgY29tcG9uZW50LmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGNvbnN0IFJvdzogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcInJvd1wiLCBcIlJvd1wiKTtcblxuZXhwb3J0IGNvbnN0IENvbDogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcImNvbFwiLCBcIkNvbFwiKTtcblxuZXhwb3J0IGNvbnN0IElucHV0RmllbGQ6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0gR3JpZENvbXBvbmVudEZhY3RvcnkoXCJjb2wgaW5wdXQtZmllbGRcIiwgXCJJbnB1dEZpZWxkXCIpXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFByZWxvYWRlcjogUmVhY3QuRkM8e30+ID0gKF8pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV0ZXJtaW5hdGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblByZWxvYWRlci5kaXNwbGF5TmFtZSA9IFwiUHJlbG9hZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBQcmVsb2FkZXJDaXJjOiBSZWFjdC5GQzx7fT4gPSAoXykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZGVyLXdyYXBwZXIgYWN0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItbGF5ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImdhcC1wYXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuUHJlbG9hZGVyQ2lyYy5kaXNwbGF5TmFtZSA9IFwiUHJlbG9hZGVyQ2lyY1wiO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQ2hpbGRyZW5Qcm9wIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbHVtbkhlYWRlciB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGlzTnVtQ29sPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFdpbmVUYWJsZU51bUNvbHM6IElDb2x1bW5IZWFkZXJbXSA9IFtcbiAgICB7IG5hbWU6IFwiVG90YWwgUXVhbnRpdHlcIiwgaXNOdW1Db2w6IHRydWUgfSxcbiAgICB7IG5hbWU6IFwiQXZnIFByaWNlXCIsIGlzTnVtQ29sOiB0cnVlIH0sXG4gICAgeyBuYW1lOiBcIlJhdGluZ1wiLCBpc051bUNvbDogdHJ1ZSB9LFxuXVxuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSUNoaWxkcmVuUHJvcCB7XG4gICAgY29sdW1uczogKHN0cmluZyB8IElDb2x1bW5IZWFkZXIpW107XG4gICAgY29uZGVuc2VkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFRhYmxlOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgY29uZGVuc2VkID0gcHJvcHMuY29uZGVuc2VkID8/IHRydWU7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17IGBoaWdobGlnaHQgcmVzcG9uc2l2ZSAke2NvbmRlbnNlZCA/IFwiY29uZGVuc2VkXCIgOiBcIlwifWAgfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY29sdW1ucy5tYXAoKGNvbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2wgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRoIGtleT17IGNvbCB9PnsgY29sIH08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXsgY29sLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBjb2wuaXNOdW1Db2wgPyBcIm51bS1jb2xcIiA6IFwiXCIgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjb2wubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICApO1xufTtcblRhYmxlLmRpc3BsYXlOYW1lID0gXCJUYWJsZVwiO1xuIiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZXNtL2Zvcm1hdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBFTl9EQVNILCBnZXROYW1lQW5kVHlwZSwgbnVtVG9EYXRlIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgSVRleHRDZWxsUHJvcHMge1xuICAgIGRlZmF1bHQ/OiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIFRleHRDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUZXh0Q2VsbFByb3BzPiB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDx0ZD57IHRoaXMucHJvcHMudGV4dCA/PyB0aGlzLnByb3BzLmRlZmF1bHQgfTwvdGQ+O1xuICAgIH1cbn07XG5cbmludGVyZmFjZSBJTnVtQ2VsbFByb3BzIHtcbiAgICBudW06IG51bWJlciB8IG51bGw7XG4gICAgbWluRGVjaW1hbHM/OiBudW1iZXI7XG4gICAgbWF4RGVjaW1hbHM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBOdW1DZWxsOiBSZWFjdC5GQzxJTnVtQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IG51bSA9IHByb3BzLm51bVxuICAgICAgICAvLyB1bmRlZmluZWQgdG8gdXNlIGJyb3dzZXIncyBsb2NhbGVcbiAgICAgICAgPyBwcm9wcy5udW0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcm9wcy5taW5EZWNpbWFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJvcHMubWF4RGVjaW1hbHN9KVxuICAgICAgICA6IEVOX0RBU0g7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm51bS1jb2xcIj57IG51bSB9PC90ZD5cbiAgICApO1xufTtcbk51bUNlbGwuZGlzcGxheU5hbWUgPSBcIk51bUNlbGxcIjtcblxuaW50ZXJmYWNlIElQcmljZUNlbGxQcm9wcyB7XG4gICAgcHJpY2U6IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBQcmljZUNlbGw6IFJlYWN0LkZDPElQcmljZUNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TnVtQ2VsbCBudW09eyBwcm9wcy5wcmljZSB9XG4gICAgICAgICAgICBtaW5EZWNpbWFscz17IDIgfVxuICAgICAgICAgICAgbWF4RGVjaW1hbHM9eyAyIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUHJpY2VDZWxsLmRpc3BsYXlOYW1lID0gXCJQcmljZUNlbGxcIjtcblxuZXhwb3J0IGNvbnN0IFllYXJDZWxsOiBSZWFjdC5GQzx7eWVhcjogbnVtYmVyIHwgbnVsbH0+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeWVhciA9IHByb3BzLnllYXI/LnRvU3RyaW5nKCkgPz8gXCJOVlwiO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJudW0tY29sXCI+XG4gICAgICAgICAgICB7IHllYXIgfVxuICAgICAgICA8L3RkPlxuICAgICk7XG59XG5ZZWFyQ2VsbC5kaXNwbGF5TmFtZSA9IFwiWWVhckNlbGxcIjtcblxuaW50ZXJmYWNlIElEYXRlQ2VsbFByb3BzIHtcbiAgICBkYXRlOiBudW1iZXIgfCBudWxsO1xuICAgIGZvcm1hdD86IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBEYXRlQ2VsbDogUmVhY3QuRkM8SURhdGVDZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZGF0ZVN0ciA9IHByb3BzLmRhdGUgPyBmb3JtYXQobnVtVG9EYXRlKHByb3BzLmRhdGUpLCBwcm9wcy5mb3JtYXQgPz8gXCJNTU0gZGQsIHl5eXlcIikgOiBFTl9EQVNIO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZD57IGRhdGVTdHIgfTwvdGQ+XG4gICAgKTtcbn1cbkRhdGVDZWxsLmRpc3BsYXlOYW1lID0gXCJEYXRlQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSUNvbG9yQ2VsbFByb3BzIHtcbiAgICBjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ29sb3JDZWxsOiBSZWFjdC5GQzxJQ29sb3JDZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKHByb3BzLmNvbG9yKSB7XG4gICAgICAgIHJldHVybiA8dGQ+eyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIocHJvcHMuY29sb3IpIH08L3RkPjtcbiAgICB9XG4gICAgcmV0dXJuIDx0ZCAvPjtcbn07XG5Db2xvckNlbGwuZGlzcGxheU5hbWUgPSBcIkNvbG9yQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSUxpbmtlZENlbGxQcm9wcyB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBtb2RlbDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgTGlua2VkQ2VsbDogUmVhY3QuRkM8SUxpbmtlZENlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgLyR7cHJvcHMubW9kZWx9LyR7cHJvcHMuaWR9YDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YSBocmVmPXsgdXJsIH0+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5uYW1lIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICApXG59XG5MaW5rZWRDZWxsLmRpc3BsYXlOYW1lID0gXCJMaW5rZWRDZWxsXCJcblxuaW50ZXJmYWNlIElOYW1lQW5kVHlwZVByb3BzIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZyB8IG51bGw7XG4gICAgd2luZVR5cGU6IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBOYW1lQW5kVHlwZUNlbGw6IFJlYWN0LkZDPElOYW1lQW5kVHlwZVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGlmIChwcm9wcy51cmwpIHtcbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGEgaHJlZj17IHByb3BzLnVybCB9PlxuICAgICAgICAgICAgICAgIHsgZ2V0TmFtZUFuZFR5cGUocHJvcHMubmFtZSwgcHJvcHMud2luZVR5cGUpIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cIndpbmVzXCJcbiAgICAgICAgICAgIG5hbWU9eyBnZXROYW1lQW5kVHlwZShwcm9wcy5uYW1lLCBwcm9wcy53aW5lVHlwZSkgfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuTmFtZUFuZFR5cGVDZWxsLmRpc3BsYXlOYW1lID0gXCJOYW1lQW5kVHlwZUNlbGxcIjtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y2VyQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cInByb2R1Y2Vyc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblByb2R1Y2VyQ2VsbC5kaXNwbGF5TmFtZSA9IFwiUHJvZHVjZXJDZWxsXCJcblxuZXhwb3J0IGNvbnN0IFJlZ2lvbkNlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmd9PiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJyZWdpb25zXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUmVnaW9uQ2VsbC5kaXNwbGF5TmFtZSA9IFwiUmVnaW9uQ2VsbFwiXG5cbmV4cG9ydCBjb25zdCBWaXRpQXJlYUNlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyIHwgbnVsbCwgbmFtZTogc3RyaW5nIHwgbnVsbH0+ID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKCFwcm9wcy5pZCB8fCAhcHJvcHMubmFtZSkge1xuICAgICAgICByZXR1cm4gPHRkIC8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwidml0aS1hcmVhc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblZpdGlBcmVhQ2VsbC5kaXNwbGF5TmFtZSA9IFwiVml0aUFyZWFDZWxsXCJcblxuZXhwb3J0IGNvbnN0IFdpbmVUeXBlQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cIndpbmUtdHlwZXNcIlxuICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5XaW5lVHlwZUNlbGwuZGlzcGxheU5hbWUgPSBcIldpbmVUeXBlQ2VsbFwiO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSUNoaWxkcmVuUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgVGFicyBhcyBNVGFicyB9IGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIlxuXG5leHBvcnQgZW51bSBUYWJDb2xvciB7XG4gICAgR3JlZW4gPSBcIndpbmUtZ3JlZW4tdGFiXCIsXG4gICAgUmVkID0gXCJ3aW5lLXJlZC10YWJcIixcbn1cblxuZXhwb3J0IGNvbnN0IFRhYnM6IFJlYWN0LkZDPElDaGlsZHJlblByb3A+ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCB0YWJzUmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MVUxpc3RFbGVtZW50PjtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBfID0gbmV3IE1UYWJzKHRhYnNSZWYuY3VycmVudCk7XG4gICAgfSwgW3RhYnNSZWZdKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFicyB0YWJzLWZpeGVkLXdpZHRoIG5hcnJvdy10YWJzIHotZGVwdGgtMVwiIHJlZj17IHRhYnNSZWYgfT5cbiAgICAgICAgICAgIHsgLi4uY2hpbGRyZW4gfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59XG5UYWJzLmRpc3BsYXlOYW1lID0gXCJUYWJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleEZhY3RvcnkobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChpZHg6IG51bWJlcikgPT4gYCR7bmFtZX0tJHtpZHh9YDtcbn1cblxuaW50ZXJmYWNlIElUYWJQcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3Age1xuICAgIHRhcmdldDogc3RyaW5nO1xuICAgIGNvbG9yOiBUYWJDb2xvcixcbn1cblxuZXhwb3J0IGNvbnN0IFRhYjogUmVhY3QuRkM8SVRhYlByb3BzPiA9ICh7Y2hpbGRyZW4sIGNvbG9yLCB0YXJnZXR9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17IGB0YWIgJHtjb2xvci52YWx1ZU9mKCl9YCB9PlxuICAgICAgICAgICAgPGEgaHJlZj17IGAjJHt0YXJnZXR9YCB9PlxuICAgICAgICAgICAgICAgIHsgLi4uY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICk7XG59XG5UYWIuZGlzcGxheU5hbWUgPSBcIlRhYlwiO1xuXG5pbnRlcmZhY2UgSVRhYlBhbmVsUHJvcHMgZXh0ZW5kcyBJQ2hpbGRyZW5Qcm9wIHtcbiAgICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgVGFiUGFuZWw6IFJlYWN0LkZDPElUYWJQYW5lbFByb3BzPiA9ICh7Y2hpbGRyZW4sIGlkfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9eyBpZCB9PlxuICAgICAgICAgICAgeyAuLi5jaGlsZHJlbiB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5UYWJQYW5lbC5kaXNwbGF5TmFtZSA9IFwiVGFiUGFuZWxcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IEJhckNoYXJ0IH0gZnJvbSBcIi4vQ2hhcnRcIjtcbmltcG9ydCB7IFByZWxvYWRlckNpcmMgfSBmcm9tIFwiLi9QcmVsb2FkZXJcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4vVGFibGVcIjtcbmltcG9ydCB7IE51bUNlbGwsIFByaWNlQ2VsbCB9IGZyb20gXCIuL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCB7IGluZGV4RmFjdG9yeSwgVGFiLCBUYWJDb2xvciwgVGFiUGFuZWwsIFRhYnMgfSBmcm9tIFwiLi9UYWJzXCI7XG5pbXBvcnQgeyBuYW1lVG9JZCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcblxuaW50ZXJmYWNlIElFbnRpdHkge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHF1YW50aXR5OiBudW1iZXI7XG4gICAgdmFyaWV0aWVzOiBudW1iZXI7XG4gICAgYXZnUHJpY2U6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElFbnRpdHlDZWxsUHJvcHMge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzPEVudGl0eT4ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBFbnRpdHlDZWxsOiBSZWFjdC5GQzxJRW50aXR5Q2VsbFByb3BzPjtcbiAgICBmZXRjaEVudGl0eTogKCkgPT4gUHJvbWlzZTxFbnRpdHlbXT47XG4gICAgbWluUXVhbnRpdHk/OiBudW1iZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gVG9wRW50aXR5PEVudGl0eSBleHRlbmRzIElFbnRpdHk+KHtuYW1lLCBFbnRpdHlDZWxsLCBmZXRjaEVudGl0eSwgbWluUXVhbnRpdHl9OiBJUHJvcHM8RW50aXR5Pikge1xuICAgIG1pblF1YW50aXR5ID0gbWluUXVhbnRpdHkgPz8gNTtcblxuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoVG9wRW50aXR5Lm5hbWUpO1xuICAgIGNvbnN0IFtoYXNMb2FkZWQsIHNldEhhc0xvYWRlZF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW3RvcEVudGl0aWVzLCBzZXRUb3BFbnRpdGllc10gPSBSZWFjdC51c2VTdGF0ZTxFbnRpdHlbXT4oW10pO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVG9wRW50aXRpZXMoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVudGl0aWVzID0gYXdhaXQgZmV0Y2hFbnRpdHkoKTtcbiAgICAgICAgICAgICAgICBzZXRUb3BFbnRpdGllcyhlbnRpdGllcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKGBFcnJvciBmZXRjaGluZyB0b3AgJHtuYW1lfXMuICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRIYXNMb2FkZWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaFRvcEVudGl0aWVzKCk7XG4gICAgfSwgW3NldEhhc0xvYWRlZCwgc2V0VG9wRW50aXRpZXNdKTtcblxuXG4gICAgaWYgKCFoYXNMb2FkZWQpIHtcbiAgICAgICAgcmV0dXJuIDxQcmVsb2FkZXJDaXJjIC8+O1xuICAgIH1cbiAgICBpZiAodG9wRW50aXRpZXMubGVuZ3RoID49IG1pblF1YW50aXR5KSB7XG4gICAgICAgIGNvbnN0IHRhYklkeGVyID0gaW5kZXhGYWN0b3J5KG5hbWVUb0lkKG5hbWUpKTtcbiAgICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gXCIzNTBweFwiO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VGFicz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYiB0YXJnZXQ9e3RhYklkeGVyKDApfSBjb2xvcj17VGFiQ29sb3IuUmVkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRhYmxlXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICA8VGFiIHRhcmdldD17dGFiSWR4ZXIoMSl9IGNvbG9yPXtUYWJDb2xvci5HcmVlbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBQdXJjaGFzZXNcbiAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgIDxUYWIgdGFyZ2V0PXt0YWJJZHhlcigyKX0gY29sb3I9e1RhYkNvbG9yLkdyZWVufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZhcmlldGllc1xuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgICAgPFRhYiB0YXJnZXQ9e3RhYklkeGVyKDMpfSBjb2xvcj17VGFiQ29sb3IuR3JlZW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgQXZnIFByaWNlXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWwgaWQ9e3RhYklkeGVyKDApfT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGNvbHVtbnM9e1tuYW1lLCB7IG5hbWU6IFwiUHVyY2hhc2VzXCIsIGlzTnVtQ29sOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiVmFyaWV0aWVzXCIsIGlzTnVtQ29sOiB0cnVlIH0sIHsgbmFtZTogXCJQcmljZVwiLCBpc051bUNvbDogdHJ1ZSB9XX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRlbnNlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0b3BFbnRpdGllcy5tYXAoKGVudGl0eSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtlbnRpdHkuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RW50aXR5Q2VsbCBpZD17IGVudGl0eS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsgZW50aXR5Lm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtQ2VsbCBtYXhEZWNpbWFscz17MH0gbnVtPXtlbnRpdHkucXVhbnRpdHl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1DZWxsIG1heERlY2ltYWxzPXswfSBudW09e2VudGl0eS52YXJpZXRpZXN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZUNlbGwgcHJpY2U9e2VudGl0eS5hdmdQcmljZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBpZD17dGFiSWR4ZXIoMSl9PlxuICAgICAgICAgICAgICAgICAgICA8QmFyQ2hhcnQgaGVpZ2h0PXtjYW52YXNIZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0b3BFbnRpdGllcy5tYXAoKGVudCkgPT4gKHsgbGFiZWw6IGVudC5uYW1lLCB2YWx1ZTogZW50LnF1YW50aXR5IH0pKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBpZD17dGFiSWR4ZXIoMil9PlxuICAgICAgICAgICAgICAgICAgICA8QmFyQ2hhcnQgaGVpZ2h0PXtjYW52YXNIZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0b3BFbnRpdGllcy5tYXAoKGVudCkgPT4gKHsgbGFiZWw6IGVudC5uYW1lLCB2YWx1ZTogZW50LnZhcmlldGllcyB9KSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWwgaWQ9e3RhYklkeGVyKDMpfT5cbiAgICAgICAgICAgICAgICAgICAgPEJhckNoYXJ0IGhlaWdodD17Y2FudmFzSGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dG9wRW50aXRpZXMubWFwKChlbnQpID0+ICh7IGxhYmVsOiBlbnQubmFtZSwgdmFsdWU6IGVudC5hdmdQcmljZSB9KSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiYm9sZFwiPnsgYEluc3VmZmljZW50ICR7bmFtZX1zLmAgfTwvaDY+XG4gICAgKTtcbn1cblRvcEVudGl0eS5kaXNwbGF5TmFtZSA9IFRvcEVudGl0eS5uYW1lO1xuIiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZXNtL2Zvcm1hdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgWWVsbG93Q2FyZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmRzXCI7XG5pbXBvcnQgeyBQcmVsb2FkZXJDaXJjIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJlbG9hZGVyXCI7XG5pbXBvcnQgeyBnZXRNb3N0Q29tbW9uUHVyY2hhc2VEYXRlLCBnZXRUb3RhbExpdGVycywgZ2V0V2luZVZhcmlldGllcywgZ2V0UHVyY2hhc2VDb3VudCB9IGZyb20gXCIuLi8uLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgRU5fREFTSCwgbnVtVG9EYXRlIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgQnlUaGVOdW1iZXJzOiBSZWFjdC5GQzx7fT4gPSAoXykgPT4ge1xuICAgIGNvbnN0IFt0b3RhbExpdGVycywgc2V0VG90YWxMaXRlcnNdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW21vc3RDb21tb25QdXJjaGFzZURhdGUsIHNldE1vc3RDb21tb25QdXJjaGFzZURhdGVdID0gUmVhY3QudXNlU3RhdGU8RGF0ZSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IFt0b3RhbFB1cmNoYXNlcywgc2V0VG90YWxQdXJjaGFzZXNdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3RvdGFsVmFyaWV0aWVzLCBzZXRUb3RhbFZhcmlldGllc10gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbaGFzTG9hZGVkLCBzZXRIYXNMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGFzeW5jKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0bCA9IGF3YWl0IGdldFRvdGFsTGl0ZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRvdGFsTGl0ZXJzKHRsLnRvdGFsTGl0ZXJzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFzeW5jKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtY2QgPSBhd2FpdCBnZXRNb3N0Q29tbW9uUHVyY2hhc2VEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtY2QubW9zdENvbW1vblB1cmNoYXNlRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9zdENvbW1vblB1cmNoYXNlRGF0ZShudW1Ub0RhdGUobWNkLm1vc3RDb21tb25QdXJjaGFzZURhdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXN5bmMoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBhd2FpdCBnZXRXaW5lVmFyaWV0aWVzKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRvdGFsVmFyaWV0aWVzKHYuY291bnQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXN5bmMoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBjID0gYXdhaXQgZ2V0UHVyY2hhc2VDb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUb3RhbFB1cmNoYXNlcyhwYy5jb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXS5tYXAoKGYpID0+IGYoKSkpO1xuICAgICAgICAgICAgc2V0SGFzTG9hZGVkKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSwgW3NldFRvdGFsTGl0ZXJzLCBzZXRNb3N0Q29tbW9uUHVyY2hhc2VEYXRlLCBzZXRUb3RhbExpdGVycywgc2V0VG90YWxWYXJpZXRpZXMsIHNldEhhc0xvYWRlZF0pO1xuICAgIGlmIChoYXNMb2FkZWQpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IG1vc3RDb21tb25QdXJjaGFzZURhdGUgPyBmb3JtYXQobW9zdENvbW1vblB1cmNoYXNlRGF0ZSwgXCJNTU0gZGRcIikgOiBFTl9EQVNIO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFllbGxvd0NhcmQgdGl0bGU9XCJCeSB0aGUgbnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJieS10aGUtbnVtYmVyc1wiPnsgdG90YWxMaXRlcnMgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgTGl0ZXJzIG9mIHdpbmVcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ5LXRoZS1udW1iZXJzXCI+eyBmb3JtYXR0ZWREYXRlIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIE1vc3QgY29tbW9uIHB1cmNoYXNlIGRhdGVcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ5LXRoZS1udW1iZXJzXCI+eyB0b3RhbFB1cmNoYXNlcyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICBUb3RhbCBwdXJjaGFzZXNcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ5LXRoZS1udW1iZXJzXCI+eyB0b3RhbFZhcmlldGllcyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICBUb3RhbCB2YXJpZXRpZXNcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L1llbGxvd0NhcmQ+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxZZWxsb3dDYXJkIHRpdGxlPVwiQnkgdGhlIG51bWJlcnNcIj5cbiAgICAgICAgICAgIDxQcmVsb2FkZXJDaXJjIC8+XG4gICAgICAgIDwvWWVsbG93Q2FyZD5cbiAgICApXG59XG5CeVRoZU51bWJlcnMuZGlzcGxheU5hbWUgPSBCeVRoZU51bWJlcnMubmFtZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IHsgQnlUaGVOdW1iZXJzIH0gZnJvbSBcIi4vQnlUaGVOdW1iZXJzXCI7XG5pbXBvcnQgeyBQdXJjaGFzZXNCeVllYXJHcmFwaCwgUHVyY2hhc2VzQnlZZWFyVGFibGUgfSBmcm9tIFwiLi9QdXJjaGFzZXNCeVllYXJcIjtcbmltcG9ydCB7IFRvcEdyYXBlcywgVG9wUHJvZHVjZXJzLCBUb3BSZWdpb25zLCBUb3BWaXRpQXJlYXMsIFRvcENvbG9ycyB9IGZyb20gXCIuL1RvcFwiO1xuXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkQXBwOiBSZWFjdC5GQzx7fT4gPSAoXykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+V2luZSBwdXJjaGFzZSBzdGF0czwvaDM+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbCBzPXsgMTIgfT5cbiAgICAgICAgICAgICAgICAgICAgPFB1cmNoYXNlc0J5WWVhckdyYXBoIC8+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCBzPXsgMTIgfSBsPXsgNiB9IHhsPXsgNCB9PlxuICAgICAgICAgICAgICAgICAgICA8VG9wUHJvZHVjZXJzIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BSZWdpb25zIC8+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCBzPXsgMTIgfSBsPXsgNiB9IHhsPXsgNCB9PlxuICAgICAgICAgICAgICAgICAgICA8QnlUaGVOdW1iZXJzIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BDb2xvcnMgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEdyYXBlcyAvPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgcz17IDEyIH0gbD17IDYgfSB4bD17IDQgfT5cbiAgICAgICAgICAgICAgICAgICAgPFB1cmNoYXNlc0J5WWVhclRhYmxlIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BWaXRpQXJlYXMgLz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuRGFzaGJvYXJkQXBwLmRpc3BsYXlOYW1lID0gXCJEYXNoYm9hcmRBcHBcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdyZWVuQ2FyZCwgUmVkQ2FyZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmRzXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi8uLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyBnZXQgfSBmcm9tIFwiLi4vLi4vbGliL0FwaUhlbHBlclwiO1xuaW1wb3J0IHsgUHJlbG9hZGVyQ2lyYyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1ByZWxvYWRlclwiO1xuaW1wb3J0IHsgTGluZUNoYXJ0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2hhcnRcIjtcbmltcG9ydCB7IElZZWFyc1B1cmNoYXNlcyB9IGZyb20gXCIuLi8uLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWJsZVwiO1xuaW1wb3J0IHsgWWVhckNlbGwsIE51bUNlbGwsIFByaWNlQ2VsbCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhYmxlQ2VsbHNcIjtcblxuY29uc3QgdXNlUHVyY2hhc2VzQnlZZWFyID0gKGxvZ2dlcjogTG9nZ2VyKTogW2Jvb2xlYW4sIElZZWFyc1B1cmNoYXNlc1tdXSA9PiB7XG4gICAgY29uc3QgW2hhc0xvYWRlZCwgc2V0SGFzTG9hZGVkXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbeWVhcnNQdXJjaGFzZXMsIHNldFllYXJzUHVyY2hhc2VzXSA9IFJlYWN0LnVzZVN0YXRlPElZZWFyc1B1cmNoYXNlc1tdPihbXSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hZZWFyc1B1cmNoYXNlcygpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhcnNQdXJjaGFzZXMgPSBhd2FpdCBnZXQ8SVllYXJzUHVyY2hhc2VzW10+KFwiL3Jlc3QvcHVyY2hhc2VzL2J5LXllYXJcIik7XG4gICAgICAgICAgICAgICAgc2V0WWVhcnNQdXJjaGFzZXMoeWVhcnNQdXJjaGFzZXMpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcHVyY2hhc2VzIGJ5IHllYXJcIik7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldEhhc0xvYWRlZCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoWWVhcnNQdXJjaGFzZXMoKTtcbiAgICB9LCBbc2V0SGFzTG9hZGVkLCBzZXRZZWFyc1B1cmNoYXNlc10pO1xuXG4gICAgcmV0dXJuIFtoYXNMb2FkZWQsIHllYXJzUHVyY2hhc2VzXTtcbn1cblxuZXhwb3J0IGNvbnN0IFB1cmNoYXNlc0J5WWVhckdyYXBoOiBSZWFjdC5GQzx7fT4gPSAoXykgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoUHVyY2hhc2VzQnlZZWFyR3JhcGgubmFtZSk7XG4gICAgY29uc3QgW2hhc0xvYWRlZCwgeWVhcnNQdXJjaGFzZXNdID0gdXNlUHVyY2hhc2VzQnlZZWFyKGxvZ2dlcik7XG5cbiAgICBsZXQgY29udGVudDtcbiAgICBpZiAoIWhhc0xvYWRlZCkge1xuICAgICAgICBjb250ZW50ID0gPFByZWxvYWRlckNpcmMgLz47XG4gICAgfSBlbHNlIGlmICh5ZWFyc1B1cmNoYXNlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgICAgICA8TGluZUNoYXJ0IGRhdGE9e1tcbiAgICAgICAgICAgICAgICAgICAgeWVhcnNQdXJjaGFzZXMubWFwKCh5KSA9PiAoeyBsYWJlbDogYCR7eS55ZWFyfWAsIHZhbHVlOiB5LnF1YW50aXR5IH0pKSxcbiAgICAgICAgICAgICAgICAgICAgeWVhcnNQdXJjaGFzZXMubWFwKCh5KSA9PiAoeyBsYWJlbDogYCR7eS55ZWFyfWAsIHZhbHVlOiB5LnRvdGFsUHJpY2UgPz8gMC4wIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgeWVhcnNQdXJjaGFzZXMubWFwKCh5KSA9PiAoeyBsYWJlbDogYCR7eS55ZWFyfWAsIHZhbHVlOiB5LmF2Z1ByaWNlID8/IDAuMCB9KSlcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIHNlcmllc0xhYmVscz17W1wiQm90dGxlXCIsIFwiVG90YWwgU3BlbnRcIiwgXCJBdmcgUHJpY2VcIl19XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnQgPSA8aDYgY2xhc3NOYW1lPVwiYm9sZFwiPkluc3VmZmljaWVudCBwdXJjaGFzZXM8L2g2PjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyZWVuQ2FyZCB0aXRsZT1cIlB1cmNoYXNlcyBieSB5ZWFyIHwgZ3JhcGhcIj5cbiAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L0dyZWVuQ2FyZD5cbiAgICApO1xufVxuUHVyY2hhc2VzQnlZZWFyR3JhcGguZGlzcGxheU5hbWUgPSBQdXJjaGFzZXNCeVllYXJHcmFwaC5uYW1lO1xuXG5leHBvcnQgY29uc3QgUHVyY2hhc2VzQnlZZWFyVGFibGU6IFJlYWN0LkZDPHt9PiA9IChfKSA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihQdXJjaGFzZXNCeVllYXJUYWJsZS5uYW1lKTtcbiAgICBjb25zdCBbaGFzTG9hZGVkLCB5ZWFyc1B1cmNoYXNlc10gPSB1c2VQdXJjaGFzZXNCeVllYXIobG9nZ2VyKTtcblxuICAgIGxldCBjb250ZW50O1xuICAgIGlmICghaGFzTG9hZGVkKSB7XG4gICAgICAgIGNvbnRlbnQgPSA8UHJlbG9hZGVyQ2lyYyAvPjtcbiAgICB9IGVsc2UgaWYgKHllYXJzUHVyY2hhc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29udGVudCA9IChcbiAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtbXCJZZWFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIkJvdHRsZXNcIiwgaXNOdW1Db2w6IHRydWV9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJUb3RhbCBTcGVudFwiLCBpc051bUNvbDogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIkF2ZyBQcmljZVwiLCBpc051bUNvbDogdHJ1ZX0gXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7IHllYXJzUHVyY2hhc2VzLm1hcCgoeWVhcikgPT5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17IHllYXIueWVhciB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFllYXJDZWxsIHllYXI9eyB5ZWFyLnllYXIgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE51bUNlbGwgbnVtPXsgeWVhci5xdWFudGl0eSB9IG1heERlY2ltYWxzPXsgMCB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VDZWxsIHByaWNlPXsgeWVhci50b3RhbFByaWNlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZUNlbGwgcHJpY2U9eyB5ZWFyLmF2Z1ByaWNlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50ID0gPGg2IGNsYXNzTmFtZT1cImJvbGRcIj5ObyBwdXJjaGFzZXM8L2g2PjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlZENhcmQgdGl0bGU9XCJQdXJjaGFzZXMgYnkgeWVhciB8IHRhYmxlXCI+XG4gICAgICAgICAgICB7IGNvbnRlbnQgfVxuICAgICAgICA8L1JlZENhcmQ+XG4gICAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlZENhcmQsIFllbGxvd0NhcmQsIEdyZWVuQ2FyZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmRzXCI7XG5pbXBvcnQgeyBQcm9kdWNlckNlbGwsIFJlZ2lvbkNlbGwsIFZpdGlBcmVhQ2VsbCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCB7IFRvcEVudGl0eSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RvcEVudGl0eVwiO1xuaW1wb3J0IHsgZ2V0VG9wQ29sb3JzLCBnZXRUb3BHcmFwZXMsIGdldFRvcFByb2R1Y2VycywgZ2V0VG9wUmVnaW9ucywgZ2V0VG9wVml0aUFyZWFzIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0QXBpXCI7XG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBUb3BQcm9kdWNlcnM6IFJlYWN0LkZDPHt9PiA9IChfKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlZENhcmQgdGl0bGU9XCJUb3AgcHJvZHVjZXJzXCI+XG4gICAgICAgICAgICA8VG9wRW50aXR5IG5hbWU9XCJQcm9kdWNlcnNcIlxuICAgICAgICAgICAgICAgIEVudGl0eUNlbGw9eyBQcm9kdWNlckNlbGwgfVxuICAgICAgICAgICAgICAgIGZldGNoRW50aXR5PXsgZ2V0VG9wUHJvZHVjZXJzIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvUmVkQ2FyZD5cbiAgICApO1xufVxuVG9wUHJvZHVjZXJzLmRpc3BsYXlOYW1lID0gVG9wUHJvZHVjZXJzLm5hbWU7XG5cbmV4cG9ydCBjb25zdCBUb3BSZWdpb25zOiBSZWFjdC5GQzx7fT4gPSAoXykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxZZWxsb3dDYXJkIHRpdGxlPVwiVG9wIHJlZ2lvbnNcIj5cbiAgICAgICAgICAgIDxUb3BFbnRpdHkgbmFtZT1cIlJlZ2lvblwiXG4gICAgICAgICAgICAgICAgRW50aXR5Q2VsbD17IFJlZ2lvbkNlbGwgfVxuICAgICAgICAgICAgICAgIGZldGNoRW50aXR5PXsgZ2V0VG9wUmVnaW9ucyB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L1llbGxvd0NhcmQ+XG4gICAgKTtcbn1cblRvcFJlZ2lvbnMuZGlzcGxheU5hbWUgPSBUb3BSZWdpb25zLm5hbWU7XG5cbmV4cG9ydCBjb25zdCBUb3BWaXRpQXJlYXM6IFJlYWN0LkZDPHt9PiA9IChfKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyZWVuQ2FyZCB0aXRsZT1cIlRvcCB2aXRpY3VsdHVyYWwgYXJlYXNcIj5cbiAgICAgICAgICAgIDxUb3BFbnRpdHkgbmFtZT1cIlZpdGkgYXJlYVwiXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB2aXRpIGFyZWEgaWRzIHdvbid0IGJlIG51bGwgaGVyZVxuICAgICAgICAgICAgICAgIEVudGl0eUNlbGw9eyBWaXRpQXJlYUNlbGwgfVxuICAgICAgICAgICAgICAgIGZldGNoRW50aXR5PXsgZ2V0VG9wVml0aUFyZWFzIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JlZW5DYXJkPlxuICAgICk7XG59XG5Ub3BWaXRpQXJlYXMuZGlzcGxheU5hbWUgPSBUb3BWaXRpQXJlYXMubmFtZTtcblxuY29uc3QgTm9uTGlua0NlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmd9PiA9ICh7bmFtZX0pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIHsgbmFtZSB9XG4gICAgICAgIDwvdGQ+XG4gICAgKTtcbn1cbk5vbkxpbmtDZWxsLmRpc3BsYXlOYW1lID0gTm9uTGlua0NlbGwubmFtZTtcblxuZXhwb3J0IGNvbnN0IFRvcEdyYXBlczogUmVhY3QuRkM8e30+ID0gKF8pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVkQ2FyZCB0aXRsZT1cIlRvcCBncmFwZXNcIj5cbiAgICAgICAgICAgIDxUb3BFbnRpdHkgbmFtZT1cIkdyYXBlXCJcbiAgICAgICAgICAgICAgICBFbnRpdHlDZWxsPXsgTm9uTGlua0NlbGwgfVxuICAgICAgICAgICAgICAgIGZldGNoRW50aXR5PXsgZ2V0VG9wR3JhcGVzIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvUmVkQ2FyZD5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBUb3BDb2xvcnM6IFJlYWN0LkZDPHt9PiA9IChfKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyZWVuQ2FyZCB0aXRsZT1cIlB1cmNoYXNlcyBieSBjb2xvclwiPlxuICAgICAgICAgICAgPFRvcEVudGl0eSBuYW1lPVwiQ29sb3JcIlxuICAgICAgICAgICAgICAgIEVudGl0eUNlbGw9eyBOb25MaW5rQ2VsbCB9XG4gICAgICAgICAgICAgICAgZmV0Y2hFbnRpdHk9eyBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IGF3YWl0IGdldFRvcENvbG9ycygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JzLm1hcCgoYykgPT4gKHsuLi5jLCBuYW1lOiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoYy5uYW1lKX0pKTtcbiAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICBtaW5RdWFudGl0eT17IDEgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9HcmVlbkNhcmQ+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgb25Mb2FkIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcIi4uLy4uL2xpYi93aWRnZXRzXCI7XG5pbXBvcnQgeyBEYXNoYm9hcmRBcHAgfSBmcm9tIFwiLi9EYXNoYm9hcmRBcHBcIjtcblxub25Mb2FkKCgpID0+IHtcbiAgICBuYXZiYXIoXCJkYXNoYm9hcmQtbmF2XCIpO1xuXG4gICAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQoRGFzaGJvYXJkQXBwKSxcbiAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXNoYm9hcmRzLWNvbnRhaW5lclwiKSk7XG59KTtcbiIsImltcG9ydCB7IHJlYWRDb29raWUgfSBmcm9tIFwiLi9Db29raWVzXCI7XG5pbXBvcnQgeyBJRGljdCwgaXNFbXB0eSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IEhFQURFUlMgPSB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJYLUNTUkZUb2tlblwiOiByZWFkQ29va2llKFwiY3NyZnRva2VuXCIpIHx8IFwiXCIsXG59O1xuXG5leHBvcnQgdHlwZSBJUXVlcnlQYXJhbXMgPSBJRGljdDxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPjtcblxuZnVuY3Rpb24gZW5jb2RlUGFyYW1zKHBhcmFtczogSVF1ZXJ5UGFyYW1zKTogc3RyaW5nIHtcbiAgICBpZiAoaXNFbXB0eShwYXJhbXMpKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gXCI/XCIgKyBPYmplY3QuZW50cmllcyhwYXJhbXMpLm1hcCgoW2ssIHZdKSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoayl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHYpfWApLmpvaW4oXCImXCIpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVKc29uKG9iajogb2JqZWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVjb2RlSnNvbklmQW55KHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIGlmIChwYXJzZUZsb2F0KHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC1sZW5ndGhcIikgPz8gXCIwXCIpID4gMFxuICAgICAgICAmJiByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG59XG5cbnR5cGUgVmlub3RlY2FFcnJvciA9XG4gICAgfCB7XCJOb3RGb3VuZFwiOiBzdHJpbmd9XG4gICAgfCB7XCJJbnRlcm5hbFwiOiBzdHJpbmd9XG4gICAgfCB7XCJNaXNzaW5nQ29uc3RyYWludFwiOiBzdHJpbmd9XG4gICAgfCB7XCJCYWRSZXF1ZXN0XCI6IHN0cmluZ307XG5cbmZ1bmN0aW9uIGlzVmlub3RlY2FFcnJvcihvYmo6IG9iamVjdCk6IG9iaiBpcyBWaW5vdGVjYUVycm9yIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICByZXR1cm4ga2V5cy5sZW5ndGggPT09IDFcbiAgICAgICAgJiYgW1wiTm90Rm91bmRcIiwgXCJJbnRlcm5hbFwiLCBcIk1pc3NpbmdDb25zdHJhaW50XCIsIFwiQmFkUmVxdWVzdFwiXVxuICAgICAgICAgICAgLmZpbmQoKGkpID0+IGkgPT09IGtleXNbMF0pICE9PSB1bmRlZmluZWQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrUmVzcG9uc2UocmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID4gMzEwKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBkZWNvZGVKc29uSWZBbnkocmVzcG9uc2UpO1xuICAgICAgICBpZiAoaXNWaW5vdGVjYUVycm9yKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgJHtPYmplY3Qua2V5cyhtZXNzYWdlKVswXX06ICR7T2JqZWN0LnZhbHVlcyhtZXNzYWdlKVswXX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZUpzb25JZkFueShyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IEVycm9yKGF3YWl0IHJlc3BvbnNlLnRleHQoKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgR0VUIHJlcXVlc3QgdG8gdGhlIHVybCB3aXRoIHRoZSBvcHRpb25hbCBwYXJhbWV0ZXJzLCB0aGVuIHBhcnNlc1xuICogdGhlIEpTT04gcmVzcG9uc2UuXG4gKiBAcGFyYW0gdXJsIEEgVVJMIHRvIHJlcXVlc3RcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb3B0aW9uYWwgZGljdGlvbmFyeSBvZiBwYXJhbWV0ZXJzIHRvIHRoZWlyIHZhbHVlc1xuICogQHJldHVybnMgcGFyc2VkIEpTT04gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgUE9TVCByZXF1ZXN0IHRvIHRoZSB1cmwgd2l0aCB0aGUgb3B0aW9uYWwgcGFyYW1ldGVycyBjb250YWluaW5nXG4gKiB0aGUgYm9keSwgdGhlbiBwYXJzZXMgdGhlIEpTT04gcmVzcG9uc2UuXG4gKiBAcGFyYW0gdXJsIEEgVVJMIHRvIHJlcXVlc3RcbiAqIEBwYXJhbSBib2R5IEpTT04gb2JqZWN0IHRvIGVuY29kZSBhbmQgc2VuZCB0byB0aGUgc2VydmVyXG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9wdGlvbmFsIGRpY3Rpb25hcnkgb2YgcGFyYW1ldGVycyB0byB0aGVpciB2YWx1ZXNcbiAqIEByZXR1cm5zIHBhcnNlZCBKU09OIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0PFJlc3BvbnNlPih1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGVuY29kZUpzb24oYm9keSksXG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdEZvcm08UmVzcG9uc2U+KHVybDogc3RyaW5nLCBmb3JtOiBGb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGZvcm0sXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgUFVUIHJlcXVlc3QgdG8gdGhlIHVybCB3aXRoIHRoZSBvcHRpb25hbCBwYXJhbWV0ZXJzIGNvbnRhaW5pbmdcbiAqIHRoZSBib2R5LCB0aGVuIHBhcnNlcyB0aGUgSlNPTiByZXNwb25zZS5cbiAqIEBwYXJhbSB1cmwgQSBVUkwgdG8gcmVxdWVzdFxuICogQHBhcmFtIGJvZHkgSlNPTiBvYmplY3QgdG8gZW5jb2RlIGFuZCBzZW5kIHRvIHRoZSBzZXJ2ZXJcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb3B0aW9uYWwgZGljdGlvbmFyeSBvZiBwYXJhbWV0ZXJzIGFuZCB0aGVpciB2YWx1ZXNcbiAqIEByZXR1cm5zIHBhcnNlZCBKU09OIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXQ8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBib2R5OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZW5jb2RlSnNvbihib2R5KSxcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dEZvcm08UmVzcG9uc2U+KHVybDogc3RyaW5nLCBmb3JtOiBGb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZm9ybSxcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhdGNoPFJlc3BvbnNlPih1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcz0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBlbmNvZGVKc29uKGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVfPFJlc3BvbnNlPih1cmw6IHN0cmluZywgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG4iLCJjb25zdCBNSUxMSVNFQ09ORFNfSU5fREFZID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBDcmVhdGUgb3IgdXBkYXRlIGEgY29va2llXG4gKiBAcGFyYW0gbmFtZSBuYW1lL2tleSBvZiB0aGUgY29va2llXG4gKiBAcGFyYW0gdmFsdWUgdmFsdWUgdG8gc3RvcmVcbiAqIEBwYXJhbSBkYXlzIG51bWJlciBvZiBkYXlzIHRoZSBjb29raWUgaXMgdmFsaWQsIGRlZmF1bHRzIHRvIHRoZSBjdXJyZW50IHNlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGRheXM/OiBudW1iZXIpIHtcbiAgICBsZXQgZXhwaXJlcztcbiAgICBpZiAoZGF5cykge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiBNSUxMSVNFQ09ORFNfSU5fREFZKSk7XG4gICAgICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBleHBpcmVzID0gXCJcIjtcbiAgICB9XG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZENvb2tpZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcbiAgICBmb3IgKGxldCBjIG9mIGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikpIHtcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSBcIiBcIikge1xuICAgICAgICAgICAgYyA9IGMuc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyKG5hbWVFUS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29va2llKG5hbWU6IHN0cmluZykge1xuICAgIGNyZWF0ZUNvb2tpZShuYW1lLCBcIlwiLCAtMSk7XG59XG4iLCJpbXBvcnQgeyBwb3N0IH0gZnJvbSBcIi4vQXBpSGVscGVyXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCIuL3dpZGdldHNcIjtcblxuLyoqIFByb3ZpZGVzIGxvZ2dpbmcgZnVuY3Rpb25hbGl0eSBmb3IgY2xpZW50LXNpZGUgSmF2YVNjcmlwdCBlcnJvcnMuICovXG5lbnVtIExvZ0xldmVsIHtcbiAgICBDcml0aWNhbCA9IFwiY3JpdGljYWxcIixcbiAgICBFcnJvciA9IFwiZXJyb3JcIixcbiAgICBXYXJuaW5nID0gXCJ3YXJuaW5nXCIsXG4gICAgSW5mbyA9IFwiaW5mb1wiLFxuICAgIERlYnVnID0gXCJkZWJ1Z1wiLFxufVxuXG5pbnRlcmZhY2UgSUxvZ1Jlc3VsdCB7XG4gICAgc3VjY2VzczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcbiAgICAvKipcbiAgICAgKiBMb2dnaW5nIGNsYXNzIGZvciBjbGllbnQtc2lkZSBlcnJvcnMgdGhhdCB3aWxsIGJlIHBvc3RlZCB0byB0aGUgc2VydmVyXG4gICAgICogZm9yIGxvZ2dpbmcgdG8gdGhlIHNhbWUgZmlsZSBhcyBhbGwgb3RoZXIgdmlub3RlY2EgbG9ncy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtb2R1bGUgdGhlIG5hbWUgb2YgdGhlIG1vZHVsZSBmcm9tIHdoaWNoIHRoZSBsb2cgbWVzc2FnZXMgb3JpZ2luYXRlLlxuICAgICAqIEBwYXJhbSB0b0NvbnNvbGUgd2hldGhlciB0byBhbHNvIHByaW50IG1lc3NhZ2VzIHRvIHRoZSBjb25zb2xlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2R1bGU6IHN0cmluZywgcHJpdmF0ZSB0b0NvbnNvbGUgPSBmYWxzZSkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lYW50IGZvciBpcnJlY292ZXJhYmxlIG9yIHRydWx5IGV4Y2VwdGlvbmFsIGVycm9ycy4gQSB0b2FzdCB3aXRoIHRoZVxuICAgICAqIGxvZyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgbG9nIHdpbGwgYmUgc2VudCBiYWNrIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBmb3IgcG9zdGVyaXR5LlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dDcml0aWNhbChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBMb2dMZXZlbC5Dcml0aWNhbDtcbiAgICAgICAgdGhpcy50b2FzdChsZXZlbCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSB0b2FzdCB3aXRoIHRoZSBsb2cgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIGxvZyB3aWxsIGJlIHNlbnRcbiAgICAgKiBiYWNrIHRvIHRoZSBzZXJ2ZXIgZm9yIHBvc3Rlcml0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nRXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gTG9nTGV2ZWwuRXJyb3I7XG4gICAgICAgIHRoaXMudG9hc3QobGV2ZWwsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgdG9hc3Qgd2l0aCB0aGUgbG9nIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSBsb2cgd2lsbCBiZSBzZW50XG4gICAgICogYmFjayB0byB0aGUgc2VydmVyIGZvciBwb3N0ZXJpdHkuXG4gICAgICovXG4gICAgcHVibGljIGxvZ1dhcm5pbmcobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gTG9nTGV2ZWwuV2FybmluZztcbiAgICAgICAgdGhpcy50b2FzdChsZXZlbCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ0luZm8obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhMb2dMZXZlbC5JbmZvLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nRGVidWcobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhMb2dMZXZlbC5EZWJ1ZywgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2cobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMudG9Db25zb2xlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtsZXZlbC50b1VwcGVyQ2FzZSgpfSAke25ldyBEYXRlKCl9ICR7dGhpcy5tb2R1bGV9OiAke21lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IElMb2dSZXN1bHQgPSBhd2FpdCBwb3N0KFwiL3Jlc3QvbG9nc1wiLCB7XG4gICAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgaW5zdGFuY2VvZiBPYmplY3QgPyBcIlwiIDogbWVzc2FnZSxcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5tb2R1bGUsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3QoTG9nTGV2ZWwuRXJyb3IsIFwiRmFpbGVkIHRvIHNlbmQgY2xpZW50LXNpZGUgbG9ncyB0byBzZXJ2ZXIuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2FzdChsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0b2FzdChgJHtsZXZlbC50b1VwcGVyQ2FzZSgpfTogJHttZXNzYWdlfWApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGRlbGV0ZV8sIGdldCwgSVF1ZXJ5UGFyYW1zLCBwYXRjaCwgcG9zdCwgcG9zdEZvcm0sIHB1dCwgcHV0Rm9ybSB9IGZyb20gXCIuL0FwaUhlbHBlclwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7IElDb2xvciwgSUdyYXBlLCBJR3JhcGVGb3JtLCBJTW9zdENvbW1vblB1cmNoYXNlRGF0ZSwgSVByb2R1Y2VyLCBJUHJvZHVjZXJGb3JtLCBJUHVyY2hhc2UsXG4gICAgICAgICBJUHVyY2hhc2VDb3VudCwgSVB1cmNoYXNlRm9ybSwgSVJlZ2lvbiwgSVJlZ2lvbkZvcm0sIElTdG9yZSwgSVN0b3JlRm9ybSwgSVRvcEVudGl0eSxcbiAgICAgICAgIElUb3RhbExpdGVycywgSVZpdGlBcmVhLCBJVml0aUFyZWFGb3JtLCBJVml0aUFyZWFTdGF0cywgSVdpbmUsIElXaW5lQ291bnQsIElXaW5lRm9ybSxcbiAgICAgICAgIElXaW5lR3JhcGUsIElXaW5lR3JhcGVzRm9ybSwgSVdpbmVQYXRjaEZvcm0sIElXaW5lVHlwZSwgSVdpbmVUeXBlRm9ybSB9IGZyb20gXCIuL1Jlc3RcIjtcbmltcG9ydCB7IElSZXN0TW9kZWwgfSBmcm9tIFwiLi9SZXN0VHlwZXNcIjtcbmltcG9ydCB7IElEaWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGljdChtb2RlbHM6IElSZXN0TW9kZWxbXSk6IElEaWN0PHN0cmluZyB8IG51bGw+IHtcbiAgICBjb25zdCByZXN1bHQ6IElEaWN0PHN0cmluZyB8IG51bGw+ID0ge307XG4gICAgbW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICAgIHJlc3VsdFttb2RlbC5uYW1lXSA9IG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNsYXNzIEVtcHR5UmVzdWx0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgcHVibGljIHN0YXRpYyBpc0luc3RhbmNlKGVycjogRXJyb3IpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGVyci5uYW1lID09PSB0aGlzLk5BTUU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgTkFNRSA9IFwiRW1wdHlSZXN1bHRFcnJvclwiO1xuXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBFbXB0eVJlc3VsdEVycm9yLk5BTUU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub25OdWxscyhvYmo6IElEaWN0PHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCB1bmRlZmluZWQ+KTogSVF1ZXJ5UGFyYW1zIHtcbiAgICBjb25zdCBxOiBJUXVlcnlQYXJhbXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoaykgPT4gQm9vbGVhbihvYmpba10pKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIHFba10gPSBvYmpba10gYXMgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcbiAgICB9KTtcbiAgICByZXR1cm4gcTtcbn1cblxuZnVuY3Rpb24gc2luZ2xlRW50aXR5R2V0dGVyPFBhcmFtcywgUmVzcD4oXG4gICAgbGlzdEdldHRlcjogKHBhcmFtczogUGFyYW1zKSA9PiBQcm9taXNlPFJlc3BbXT4sXG4pOiAocGFyYW1zOiBQYXJhbXMpID0+IFByb21pc2U8UmVzcD4ge1xuICAgIC8vIFNoYXZlIG9mZiAnZ2V0J1xuICAgIGNvbnN0IG9iak5hbWUgPSBsaXN0R2V0dGVyLm5hbWUuc3Vic3RyKDMpO1xuICAgIHJldHVybiBhc3luYyAocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGxpc3RHZXR0ZXIocGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBSZWNlaXZlZCBtb3JlIHRoYW4gb25lICR7b2JqTmFtZX0gcmVzdWx0IHdoZW4gb25lIHdhcyBleHBlY3RlZGA7XG4gICAgICAgICAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKFwiUmVzdEFwaVwiKTtcbiAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgIHRocm93IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlPFJlcVBhcmFtcywgUmVzcCwgRm9ybT4oXG4gICAgbGlzdEdldHRlcjogKHBhcmFtczogUmVxUGFyYW1zKSA9PiBQcm9taXNlPFJlc3BbXT4sXG4gICAgY3JlYXRvcjogKGZvcm06IEZvcm0pID0+IFByb21pc2U8UmVzcD4sXG4pOiAocGFyYW1zOiBSZXFQYXJhbXMsIGZvcm06IEZvcm0pID0+IFByb21pc2U8UmVzcD4ge1xuICAgIGNvbnN0IG9iak5hbWUgPSBsaXN0R2V0dGVyLm5hbWUuc3Vic3RyKDMpO1xuICAgIHJldHVybiBhc3luYyAocGFyYW1zLCBmb3JtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBsaXN0R2V0dGVyKHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbmV3T2JqID0gYXdhaXQgY3JlYXRvcihmb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgUmVjZWl2ZWQgbW9yZSB0aGFuIG9uZSAke29iak5hbWV9IHJlc3VsdCB3aGVuIG9uZSB3YXMgZXhwZWN0ZWRgO1xuICAgICAgICBuZXcgTG9nZ2VyKFwiUmVzdEFwaVwiKS5sb2dFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgdGhyb3cgRXJyb3IobWVzc2FnZSk7XG4gICAgfTtcbn1cblxuLyogQ09MT1JTICovXG5pbnRlcmZhY2UgSUdldENvbG9yUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29sb3JzKHsgaWQsIG5hbWUgfTogSUdldENvbG9yUGFyYW1zKTogUHJvbWlzZTxJQ29sb3JbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lIH0pO1xuICAgIGNvbnN0IGNvbG9yczogSUNvbG9yW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9jb2xvcnNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgaWYgKGNvbG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVtcHR5UmVzdWx0RXJyb3IoXCJFbXB0eSByZXN1bHQgcmV0dXJuZWQgZm9yIGNvbG9yXCIpO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3JzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q29sb3IgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0Q29sb3JzKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcENvbG9ycygpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9jb2xvcnMvdG9wXCIpO1xufVxuXG4vKiBHUkFQRVMgKi9cbmludGVyZmFjZSBJR2V0R3JhcGVzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R3JhcGVzKHsgaWQsIG5hbWUgfTogSUdldEdyYXBlc1BhcmFtcyk6IFByb21pc2U8SUdyYXBlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSB9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvZ3JhcGVzXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0R3JhcGUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0R3JhcGVzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZUdyYXBlID0gZ2V0T3JDcmVhdGUoZ2V0R3JhcGVzLCBjcmVhdGVHcmFwZSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcmFwZShncmFwZTogSUdyYXBlRm9ybSk6IFByb21pc2U8SUdyYXBlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9ncmFwZXNcIiwgZ3JhcGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR3JhcGUoaWQ6IG51bWJlciwgZ3JhcGU6IElHcmFwZUZvcm0pOiBQcm9taXNlPElHcmFwZT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L2dyYXBlcy8ke2lkfWAsIGdyYXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcEdyYXBlcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9ncmFwZXMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBQUk9EVUNFUlMgKi9cbmludGVyZmFjZSBJR2V0UHJvZHVjZXJzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHJlZ2lvbklkPzogbnVtYmVyO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmUtbGVuZ3RoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjZXJzKHtpZCwgbmFtZSwgcmVnaW9uSWR9OiBJR2V0UHJvZHVjZXJzUGFyYW1zKTogUHJvbWlzZTxJUHJvZHVjZXJbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7aWQsIG5hbWUsIHJlZ2lvbl9pZDogcmVnaW9uSWR9KTtcbiAgICBjb25zdCBwcm9kdWNlcnM6IElQcm9kdWNlcltdID0gYXdhaXQgZ2V0KFwiL3Jlc3QvcHJvZHVjZXJzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiBwcm9kdWNlcnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWNlciA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRQcm9kdWNlcnMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlUHJvZHVjZXIgPSBnZXRPckNyZWF0ZShnZXRQcm9kdWNlcnMsIGNyZWF0ZVByb2R1Y2VyKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y2VyKHByb2R1Y2VyOiBJUHJvZHVjZXJGb3JtKTogUHJvbWlzZTxJUHJvZHVjZXI+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3Byb2R1Y2Vyc1wiLCBwcm9kdWNlcik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWNlcihwcm9kdWNlcjogSVByb2R1Y2VyKTogUHJvbWlzZTxJUHJvZHVjZXI+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9wcm9kdWNlcnMvJHtwcm9kdWNlci5pZH1gLCBwcm9kdWNlcik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWNlcihpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGRlbGV0ZV8oYC9yZXN0L3Byb2R1Y2Vycy8ke2lkfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wUHJvZHVjZXJzKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3Byb2R1Y2Vycy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFBVUkNIQVNFUyAqL1xuaW50ZXJmYWNlIElHZXRQdXJjaGFzZXNQYXJhbXMge1xuICAgIHdpbmVJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFB1cmNoYXNlcyh7d2luZUlkfTogSUdldFB1cmNoYXNlc1BhcmFtcyk6IFByb21pc2U8SVB1cmNoYXNlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyB3aW5lX2lkOiB3aW5lSWQgfSk7XG4gICAgY29uc3QgcHVyY2hhc2VzID0gYXdhaXQgZ2V0PElQdXJjaGFzZVtdPihcIi9yZXN0L3B1cmNoYXNlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gcHVyY2hhc2VzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2UocHVyY2hhc2U6IElQdXJjaGFzZUZvcm0pOiBQcm9taXNlPElQdXJjaGFzZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvcHVyY2hhc2VzXCIsIHB1cmNoYXNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVB1cmNoYXNlKGlkOiBudW1iZXIsIHB1cmNoYXNlOiBJUHVyY2hhc2VGb3JtKTogUHJvbWlzZTxJUHVyY2hhc2U+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9wdXJjaGFzZXMvJHtpZH1gLCBwdXJjaGFzZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQdXJjaGFzZShpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGRlbGV0ZV8oYC9yZXN0L3B1cmNoYXNlcy8ke2lkfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9zdENvbW1vblB1cmNoYXNlRGF0ZSgpOiBQcm9taXNlPElNb3N0Q29tbW9uUHVyY2hhc2VEYXRlPiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3B1cmNoYXNlcy9tb3N0LWNvbW1vbi1wdXJjaGFzZS1kYXRlXCIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG90YWxMaXRlcnMoKTogUHJvbWlzZTxJVG90YWxMaXRlcnM+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHVyY2hhc2VzL3RvdGFsLWxpdGVyc1wiKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFB1cmNoYXNlQ291bnQoKTogUHJvbWlzZTxJUHVyY2hhc2VDb3VudD4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wdXJjaGFzZXMvY291bnRcIik7XG59XG5cbi8qIFJFR0lPTlMgKi9cbmludGVyZmFjZSBJR2V0UmVnaW9uUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHByb2R1Y2VyTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlZ2lvbnMoeyBpZCwgbmFtZSwgcHJvZHVjZXJOYW1lIH06IElHZXRSZWdpb25QYXJhbXMpOiBQcm9taXNlPElSZWdpb25bXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lLCBwcm9kdWNlcl9uYW1lOiBwcm9kdWNlck5hbWUgfSk7XG4gICAgY29uc3QgcmVnaW9uczogSVJlZ2lvbltdID0gYXdhaXQgZ2V0KFwiL3Jlc3QvcmVnaW9uc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gcmVnaW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlZ2lvbiA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRSZWdpb25zKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVJlZ2lvbiA9IGdldE9yQ3JlYXRlKGdldFJlZ2lvbnMsIGNyZWF0ZVJlZ2lvbik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZWdpb24ocmVnaW9uOiBJUmVnaW9uRm9ybSk6IFByb21pc2U8SVJlZ2lvbj4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvcmVnaW9uc1wiLCByZWdpb24pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVnaW9uKHJlZ2lvbjogSVJlZ2lvbik6IFByb21pc2U8SVJlZ2lvbj4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3JlZ2lvbnMvJHtyZWdpb24uaWR9YCwgcmVnaW9uKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFJlZ2lvbnMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcmVnaW9ucy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFNUT1JFUyAqL1xuaW50ZXJmYWNlIElHZXRTdG9yZVBhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0b3Jlcyh7aWQsIG5hbWV9OiBJR2V0U3RvcmVQYXJhbXMpOiBQcm9taXNlPElTdG9yZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtpZCwgbmFtZX0pO1xuICAgIGNvbnN0IHN0b3JlczogSVN0b3JlW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9zdG9yZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHN0b3Jlcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0b3JlID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFN0b3Jlcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVTdG9yZSA9IGdldE9yQ3JlYXRlKGdldFN0b3JlcywgY3JlYXRlU3RvcmUpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3RvcmUoc3RvcmU6IElTdG9yZUZvcm0pOiBQcm9taXNlPElTdG9yZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvc3RvcmVzXCIsIHN0b3JlKTtcbn1cblxuLyogVklUSSBBUkVBUyAqL1xuaW50ZXJmYWNlIElHZXRWaXRpQXJlYXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcmVnaW9uTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZpdGlBcmVhcyhcbiAgICB7IGlkLCBuYW1lLCByZWdpb25OYW1lIH06IElHZXRWaXRpQXJlYXNQYXJhbXMsXG4pOiBQcm9taXNlPElWaXRpQXJlYVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUsIHJlZ2lvbl9uYW1lOiByZWdpb25OYW1lIH0pO1xuICAgIGNvbnN0IHZpdGlBcmVhczogSVZpdGlBcmVhW10gPSBhd2FpdCBnZXQoXCIvcmVzdC92aXRpLWFyZWFzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB2aXRpQXJlYXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRWaXRpQXJlYSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRWaXRpQXJlYXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlVml0aUFyZWEgPSBnZXRPckNyZWF0ZShnZXRWaXRpQXJlYXMsIGNyZWF0ZVZpdGlBcmVhKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVZpdGlBcmVhKHZpdGlBcmVhOiBJVml0aUFyZWFGb3JtKTogUHJvbWlzZTxJVml0aUFyZWE+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3ZpdGktYXJlYXNcIiwgdml0aUFyZWEpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVml0aUFyZWEodml0aUFyZWE6IElWaXRpQXJlYSk6IFByb21pc2U8SVZpdGlBcmVhPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3Qvdml0aS1hcmVhcy8ke3ZpdGlBcmVhLmlkfWAsIHZpdGlBcmVhKTtcbn1cblxuaW50ZXJmYWNlIElHZXRWaXRpQXJlYVN0YXRzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICByZWdpb25JZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZpdGlBcmVhU3RhdHMoXG4gICAgeyBpZCwgcmVnaW9uSWQgfTogSUdldFZpdGlBcmVhU3RhdHNQYXJhbXMsXG4pOiBQcm9taXNlPElWaXRpQXJlYVN0YXRzW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgcmVnaW9uX2lkOiByZWdpb25JZCB9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvdml0aS1hcmVhcy9zdGF0c1wiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFZpdGlBcmVhcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC92aXRpLWFyZWFzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogV0lORVMgKi9cbmludGVyZmFjZSBJR2V0V2luZXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIHByb2R1Y2VySWQ/OiBudW1iZXI7XG4gICAgcmVnaW9uSWQ/OiBudW1iZXI7XG4gICAgdml0aUFyZWFJZD86IG51bWJlcjtcbiAgICB3aW5lVHlwZUlkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZXMoXG4gICAgeyBpZCwgcHJvZHVjZXJJZCwgcmVnaW9uSWQsIHZpdGlBcmVhSWQsIHdpbmVUeXBlSWQgfTogSUdldFdpbmVzUGFyYW1zLFxuKTogUHJvbWlzZTxJV2luZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtcbiAgICAgICAgaWQsIHJlZ2lvbl9pZDogcmVnaW9uSWQsIHByb2R1Y2VyX2lkOiBwcm9kdWNlcklkLFxuICAgICAgICB2aXRpX2FyZWFfaWQ6IHZpdGlBcmVhSWQsIHdpbmVfdHlwZV9pZDogd2luZVR5cGVJZCxcbiAgICB9KTtcbiAgICBjb25zdCB3aW5lczogSVdpbmVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3dpbmVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB3aW5lcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFdpbmUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0V2luZXMpO1xuXG5jb25zdCBjcmVhdGVXaW5lSHR0cEZvcm0gPSAod2luZTogSVdpbmVGb3JtLCBmaWxlOiBGaWxlIHwgbnVsbCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtLmFwcGVuZChcIndpbmVfZm9ybVwiLCBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkod2luZSldLCB7dHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCJ9KSk7XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJpbWFnZVwiLCBmaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZSh3aW5lOiBJV2luZUZvcm0sIGZpbGU6IEZpbGUgfCBudWxsKTogUHJvbWlzZTxJV2luZT4ge1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVXaW5lSHR0cEZvcm0od2luZSwgZmlsZSk7XG4gICAgcmV0dXJuIHBvc3RGb3JtKFwiL3Jlc3Qvd2luZXNcIiwgZm9ybSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVXaW5lKGlkOiBudW1iZXIsIHdpbmU6IElXaW5lRm9ybSwgZmlsZTogRmlsZSB8IG51bGwpOiBQcm9taXNlPElXaW5lPiB7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVdpbmVIdHRwRm9ybSh3aW5lLCBmaWxlKTtcbiAgICByZXR1cm4gcHV0Rm9ybShgL3Jlc3Qvd2luZXMvJHtpZH1gLCBmb3JtKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnRVcGRhdGVXaW5lKGlkOiBudW1iZXIsIHdpbmU6IElXaW5lUGF0Y2hGb3JtKTogUHJvbWlzZTxJV2luZT4ge1xuICAgIHJldHVybiBwYXRjaChgL3Jlc3Qvd2luZXMvJHtpZH1gLCB3aW5lKTtcbn1cblxuaW50ZXJmYWNlIElTZWFyY2hXaW5lc1BhcmFtcyB7XG4gICAgY29sb3JMaWtlPzogc3RyaW5nO1xuICAgIHdpbmVUeXBlTGlrZT86IHN0cmluZztcbiAgICBwcm9kdWNlckxpa2U/OiBzdHJpbmc7XG4gICAgcmVnaW9uTGlrZT86IHN0cmluZztcbiAgICB2aXRpQXJlYUxpa2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hXaW5lcyhcbiAgICB7IGNvbG9yTGlrZSwgd2luZVR5cGVMaWtlLCBwcm9kdWNlckxpa2UsIHJlZ2lvbkxpa2UsIHZpdGlBcmVhTGlrZSB9OiBJU2VhcmNoV2luZXNQYXJhbXMsXG4pOiBQcm9taXNlPElXaW5lW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe1xuICAgICAgICBjb2xvcl9saWtlOiBjb2xvckxpa2UsIHdpbmVfdHlwZV9saWtlOiB3aW5lVHlwZUxpa2UsIHByb2R1Y2VyX2xpa2U6IHByb2R1Y2VyTGlrZSxcbiAgICAgICAgcmVnaW9uX2xpa2U6IHJlZ2lvbkxpa2UsIHZpdGlfYXJlYV9saWtlOiB2aXRpQXJlYUxpa2UsXG4gICAgfSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3dpbmVzL3NlYXJjaFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVWYXJpZXRpZXMoKTogUHJvbWlzZTxJV2luZUNvdW50PiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3dpbmVzL2NvdW50XCIpO1xufVxuXG4vKiBXSU5FIEdSQVBFUyAqL1xuaW50ZXJmYWNlIElHZXRXaW5lR3JhcGVzUGFyYW1zIHtcbiAgICB3aW5lSWQ/OiBudW1iZXI7XG4gICAgZ3JhcGVJZD86IG51bWJlcjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lLWxlbmd0aFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVHcmFwZXMoeyB3aW5lSWQsIGdyYXBlSWQgfTogSUdldFdpbmVHcmFwZXNQYXJhbXMpOiBQcm9taXNlPElXaW5lR3JhcGVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IHdpbmVfaWQ6IHdpbmVJZCwgZ3JhcGVfaWQ6IGdyYXBlSWQgfSk7XG4gICAgY29uc3Qgd2luZUdyYXBlczogSVdpbmVHcmFwZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvd2luZS1ncmFwZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHdpbmVHcmFwZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5lR3JhcGVzKHdpbmVHcmFwZXM6IElXaW5lR3JhcGVzRm9ybSk6IFByb21pc2U8SVdpbmVHcmFwZVtdPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC93aW5lLWdyYXBlc1wiLCB3aW5lR3JhcGVzKTtcbn1cblxuLyogV0lORSBUWVBFUyAqL1xuaW50ZXJmYWNlIElHZXRXaW5lVHlwZXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lVHlwZXMoeyBpZCwgbmFtZSB9OiBJR2V0V2luZVR5cGVzUGFyYW1zKTogUHJvbWlzZTxJV2luZVR5cGVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lIH0pO1xuICAgIGNvbnN0IHdpbmVUeXBlczogSVdpbmVUeXBlW10gPSBhd2FpdCBnZXQoXCIvcmVzdC93aW5lLXR5cGVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB3aW5lVHlwZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRXaW5lVHlwZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRXaW5lVHlwZXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlV2luZVR5cGUgPSBnZXRPckNyZWF0ZShnZXRXaW5lVHlwZXMsIGNyZWF0ZVdpbmVUeXBlKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmVUeXBlKHdpbmVUeXBlOiBJV2luZVR5cGVGb3JtKTogUHJvbWlzZTxJV2luZVR5cGU+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3dpbmUtdHlwZXNcIiwgd2luZVR5cGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2luZVR5cGUod2luZVR5cGU6IElXaW5lVHlwZSk6IFByb21pc2U8SVdpbmVUeXBlPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3Qvd2luZS10eXBlcy8ke3dpbmVUeXBlLmlkfWAsIHdpbmVUeXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFdpbmVUeXBlcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC93aW5lLXR5cGVzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cbiIsIi8qKiBCYXNpYyB0eXBlIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHJlc3BvbnNlIEpTT04gb2YgbWFueSBhc3luY2hyb25vdXMgcmVxdWVzdHMuICovXG5pbXBvcnQgeyBJUmVzdE1vZGVsIH0gZnJvbSBcIi4vUmVzdFR5cGVzXCI7XG5cbi8qKlxuICogS2V5LXZhbHVlIHN0b3JlIHdoZXJlIHRoZSBrZXkgbXVzdCBiZSBhIHN0cmluZywgYnV0IHRoZSB2YWx1ZSBpcyBvZiBhbnkgdHlwZVxuICogVC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRGljdDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgb2JqZWN0cyB0byBhIHNpbmdsZSBvYmplY3Qgb2YgbmFtZXMgdG8gbnVsbCBmb3IgdXNlIHdpdGggbWF0ZXJpYWxpemVcbiAqIGF1dG9jb21wbGV0ZS5cbiAqIEBwYXJhbSBvYmplY3RzIEFuIGFycmF5IG9mIFJFU1QgbW9kZWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXN0TW9kZWxzVG9OYW1lRGljdChvYmplY3RzOiBJUmVzdE1vZGVsW10pOiBJRGljdDxudWxsPiB7XG4gICAgY29uc3QgZGljdDogSURpY3Q8bnVsbD4gPSB7fTtcbiAgICBvYmplY3RzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgIGRpY3Rbb2JqLm5hbWVdID0gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gZGljdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiA4LWRpZ2l0IG51bWJlciBvZiBmb3JtYXQgJ3l5eXltbWRkJyB0byBhIERhdGUgb2JqZWN0LlxuICogQHBhcmFtIG51bSBhIGRhdGUgbnVtYmVyIG9mIGZvcm1hdCAneXl5eW1tZGQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBudW1Ub0RhdGUobnVtOiBudW1iZXIpOiBEYXRlIHtcbiAgICBjb25zdCBzdHJOdW0gPSBgJHtudW19YDtcbiAgICBpZiAoc3RyTnVtLmxlbmd0aCAhPT0gOCkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgZGF0ZSBudW1iZXIgJyR7c3RyTnVtfSdgKTtcbiAgICB9XG4gICAgY29uc3QgeWVhciA9IHN0ck51bS5zdWJzdHIoMCwgNCk7XG4gICAgY29uc3QgbW9udGggPSBzdHJOdW0uc3Vic3RyKDQsIDIpO1xuICAgIGNvbnN0IGRheSA9IHN0ck51bS5zdWJzdHIoNiwgMik7XG4gICAgLy8gSlMgbW9udGhzIGFyZSAwLWJhc2VkXG4gICAgcmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHllYXIsIDEwKSwgcGFyc2VJbnQobW9udGgsIDEwKSAtIDEsIHBhcnNlSW50KGRheSwgMTApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb051bShkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICogMTBfMDAwICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpICogMTAwICsgZGF0ZS5nZXREYXRlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBFTl9EQVNIOiBzdHJpbmcgPSBcIuKAk1wiO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgdmludGFnZSB5ZWFyLCB3aGljaCBpcyB0d28geWVhcnMgcHJpb3IgdG8gdGhlIGN1cnJlbnRcbiAqIHllYXIuIFRoaXMgZnVuY3Rpb24gZHVwbGljYXRlcyB0aGUgUHl0aG9uIGZ1bmN0aW9uXG4gKiB2aW5vdGVjYS51dGlscy5kZWZhdWx0X3ZpbnRhZ2VfeWVhclxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFZpbnRhZ2VZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGFuIG9iamVjdCBpcyBlbXB0eSwgaS5lLiBoYXMgbm8ga2V5cy5cbiAqIEBwYXJhbSBvYmogQW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iajogb2JqZWN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIFJldHVybnMgcyB3aXRoIHRoZSBmaXJzdCBsZXR0ZXIgY2FwaXRhbGl6ZWQuXG4gKiBAcGFyYW0gcyBBIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHMubGVuZ3RoID4gMCA/IHNbMF0udG9VcHBlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpIDogXCJcIjtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGRpc3BsYXkgbmFtZSB0byBhbiBodG1sIGlkXG4gKiBAcGFyYW0gbmFtZSBBIGNvbXBvbmVudCBkaXNwbGF5IG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hbWVUb0lkKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvKFxccykrL2csIFwiLVwiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBtYXhpbXVtIGVsZW1lbnQgYnkgb25lIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSB0eXBlIG9mIGVsZW1lbnRcbiAqIEBwYXJhbSBhcnIgQW4gYXJyYXkgb2Ygb2JqY2VjdHNcbiAqIEBwYXJhbSBhY2Nlc3NvciBBIGZ1bmN0aW9uIGZvciBhY2Nlc3NpbmcgYSBudW1iZXIgcHJvcGVydHkgb2YgdGhlIG9iamVjdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heEJ5PFQ+KGFycjogVFtdLCBhY2Nlc3NvcjogKGVsZW06IFQpID0+IG51bWJlcik6IFQgfCB1bmRlZmluZWQge1xuICAgIGxldCBtYXhFbGVtOiBUIHwgdW5kZWZpbmVkO1xuICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHk7XG4gICAgZm9yIChjb25zdCBlbGVtIG9mIGFycikge1xuICAgICAgICBjb25zdCB2YWwgPSBhY2Nlc3NvcihlbGVtKTtcbiAgICAgICAgaWYgKHZhbCA+IG1heFZhbCkge1xuICAgICAgICAgICAgbWF4RWxlbSA9IGVsZW07XG4gICAgICAgICAgICBtYXhWYWwgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1heEVsZW07XG59XG5cbi8qKlxuICogU3VtcyBhbiBhcnJheSBvZiBvYmplY3RzIGJ5IG9uZSBvZiB0aGUgb2JqZWN0cycgcHJvcGVydGllcy5cbiAqIEBwYXJhbSBhcnIgQW4gYXJyYXkgb2Ygb2JqZWN0c1xuICogQHBhcmFtIGFjY2Vzc29yIEEgZnVuY3Rpb24gZm9yIGFjY2Vzc2luZyBvbmUgb2YgdGhlIG9iamVjdHMnIHByb3BlcnRpZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1bUJ5PFQ+KGFycjogVFtdLCBhY2Nlc3NvcjogKGVsZW06IFQpID0+IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChjb25zdCBlbGVtIG9mIGFycikge1xuICAgICAgICBzdW0gKz0gYWNjZXNzb3IoZWxlbSk7XG4gICAgfVxuICAgIHJldHVybiBzdW07XG59XG5cbi8qKlxuICogQ29tcGFyZXMgdHdvIG9iamVjdHMgZm9yIGRlZXAgZXF1YWxpdHkuXG4gKiBAcGFyYW0gYSBBbiBvYmplY3RcbiAqIEBwYXJhbSBiIEFuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJlRXF1YWwoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGNvbnN0IGJLZXlzID0gT2JqZWN0LmtleXMoYik7XG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrIG9mIGFLZXlzKSB7XG4gICAgICAgIGlmIChhW2tdICE9PSBiW2tdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmludGVyZmFjZSBJUmFuZ2VBcmdzIHtcbiAgICBzdGFydD86IG51bWJlcjtcbiAgICBzdG9wPzogbnVtYmVyO1xuICAgIHN0ZXA/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYWJsZSByYW5nZSBvZiBudW1iZXJzb25DbGljay5cbiAqIEBwYXJhbSBzdGFydCBGaXJzdCBudW1iZXIgb2YgdGhlIHJhbmdlXG4gKiBAcGFyYW0gc3RvcCBFbmQgb2YgdGhlIHJhbmdlIChub24taW5jbHVzaXZlKVxuICogQHBhcmFtIHN0ZXAgSW5jcmVtZW50IG9mIHRoZSByYW5nZVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHJhbmdlKHsgc3RhcnQsIHN0b3AsIHN0ZXAgfTogSVJhbmdlQXJncyk6IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPiB7XG4gICAgc3RlcCA9IHN0ZXAgfHwgMTtcbiAgICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gICAgc3RvcCA9IHN0b3AgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgICAgIHlpZWxkIGk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW1hZ2VFeGlzdHMoaW1hZ2VVcmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW1hZ2VVcmwsIHttZXRob2Q6IFwiSEVBRFwifSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5vaztcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVBbmRUeXBlKG5hbWU6IHN0cmluZyB8IG51bGwsIHdpbmVUeXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHsobmFtZSA/IG5hbWUgKyBcIiBcIiA6IFwiXCIpfSR7d2luZVR5cGV9YDtcbn1cblxuLy8gVE9ETzogbW92ZSB0byB1c2UgUmVhY3Qgcm91dGVyIG9yIHNvbWV0aGluZyBzaW1pbGFyXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3QodXJsOiBzdHJpbmcpIHtcbiAgICBsb2NhdGlvbi5ocmVmID0gdXJsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2FkKGZ1bjogKCkgPT4gdm9pZCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bik7XG59XG4iLCJpbXBvcnQgeyBBdXRvY29tcGxldGUsIERyb3Bkb3duLCBTaWRlbmF2IH0gZnJvbSBcIm1hdGVyaWFsaXplLWNzc1wiO1xuaW1wb3J0IHsgSURpY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG50eXBlIE9uQ2hhbmdlID0gKGU6IHN0cmluZykgPT4gdm9pZDtcblxuLyoqIFNldHVwIGF1dG9jb21wbGV0aW9uIHdpdGggcHJvdmlkZWQgY29tcGxldGlvbiBvcHRpb25zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF1dG9jb21wbGV0ZShlbGVtOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uczogSURpY3Q8c3RyaW5nIHwgbnVsbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBPbkNoYW5nZSwgbWluTGVuZ3RoID0gMSwgbGltaXQgPSA1KSB7XG4gICAgaWYgKGVsZW0uY3VycmVudCkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICAgICAgbmV3IEF1dG9jb21wbGV0ZShlbGVtLmN1cnJlbnQsIHtcbiAgICAgICAgICAgIGRhdGE6IGNvbXBsZXRpb25zLFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICBtaW5MZW5ndGgsXG5cbiAgICAgICAgICAgIG9uQXV0b2NvbXBsZXRlOiBmdW5jdGlvbih0aGlzLCB0ZXh0KSB7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG9iamVjdC1saXRlcmFsLXNob3J0aGFuZFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHRleHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZpeCBvdmVybGFwcHRpbmcgdGV4dCBidWdcbiAgICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZU5hdmJhclRhYihpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuLyoqIEVuYWJsZXMgbmF2YmFyIG1lbnVzLiBTaG91bGQgYmUgY2FsbGVkIG9uIGV2ZXJ5IHBhZ2UuICovXG5leHBvcnQgZnVuY3Rpb24gbmF2YmFyKGFjdGl2ZU5hdlRhYklkPzogc3RyaW5nKSB7XG4gICAgaWYgKGFjdGl2ZU5hdlRhYklkKSB7XG4gICAgICAgIGFjdGl2YXRlTmF2YmFyVGFiKGFjdGl2ZU5hdlRhYklkKTtcbiAgICB9XG4gICAgY29uc3Qgc2lkZU5hdkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVuYXZcIik7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgbmV3IFNpZGVuYXYoc2lkZU5hdkVsZW0hKTtcbiAgICBjb25zdCBkcm9wZG93bkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLXRyaWdnZXJcIik7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgbmV3IERyb3Bkb3duKGRyb3Bkb3duRWxlbSEpO1xufVxuXG4vKiogU2ltcGxpZmllcyBkaXNwbGF5aW5nIG9mIHRvYXN0IG1lc3NhZ2VzIHRvIHVzZXIgKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2FzdChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBNLnRvYXN0KHtcbiAgICAgICAgY2xhc3NlczogXCJyZWQtYmdcIixcbiAgICAgICAgZGlzcGxheUxlbmd0aDogMTAwMDAsXG4gICAgICAgIGh0bWw6IG1lc3NhZ2UsXG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9