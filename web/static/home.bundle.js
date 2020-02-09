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
/******/ 		"home": 0
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
/******/ 	deferredModules.push([1,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Buttons.tsx":
/*!********************************!*\
  !*** ./components/Buttons.tsx ***!
  \********************************/
/*! exports provided: FloatingBtn, Btn, CancelOrConfirmBtns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatingBtn", function() { return FloatingBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Btn", function() { return Btn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelOrConfirmBtns", function() { return CancelOrConfirmBtns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ "./components/Grid.tsx");
/* harmony import */ var _MaterialIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MaterialIcon */ "./components/MaterialIcon.tsx");



function combineClasses(classes) {
    return (classes || []).join(" ");
}
const FloatingBtn = (props) => {
    const classes = combineClasses(props.classes);
    const mouseDown = (e) => {
        if (props.onMouseDown) {
            props.onMouseDown(e);
        }
    };
    const onClick = (e) => {
        e.preventDefault();
        props.onClick();
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#", className: `waves-effect waves-light btn-floating ${classes}`, onClick: onClick, onMouseDown: mouseDown }, props.children));
};
FloatingBtn.displayName = "FloatingBtn";
FloatingBtn.defaultProps = { onMouseDown: (_) => undefined };
const Btn = (props) => {
    const classes = combineClasses(props.classes);
    const onClick = (e) => {
        e.preventDefault();
        props.onClick();
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: `rbtn waves-effect waves-light btn ${classes}`, onClick: onClick }, props.children));
};
Btn.displayName = "Btn";
const CancelOrConfirmBtns = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { s: 12 },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Btn, { classes: ["green-bg"], onClick: props.onConfirmClick },
            "Confirm",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MaterialIcon__WEBPACK_IMPORTED_MODULE_2__["MaterialIcon"], { iconName: "send", className: "right" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Btn, { classes: ["red-bg"], onClick: props.onCancelClick }, "Cancel")));
};
CancelOrConfirmBtns.displayName = "CancelOrConfirmBtns";


/***/ }),

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

/***/ "./components/MaterialIcon.tsx":
/*!*************************************!*\
  !*** ./components/MaterialIcon.tsx ***!
  \*************************************/
/*! exports provided: MaterialIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialIcon", function() { return MaterialIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MaterialIcon = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: `material-icons ${props.className}` }, props.iconName));
};
MaterialIcon.displayName = "MaterialIcon";


/***/ }),

/***/ "./components/ParallaxImg.tsx":
/*!************************************!*\
  !*** ./components/ParallaxImg.tsx ***!
  \************************************/
/*! exports provided: ParallaxImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxImg", function() { return ParallaxImg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);


const ParallaxImg = ({ src: imgSource, alt }) => {
    const ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const instance = new materialize_css__WEBPACK_IMPORTED_MODULE_1__["Parallax"](ref.current);
    }, [ref]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "parallax-container" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "parallax", ref: ref },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: imgSource, alt: alt }))));
};


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

/***/ "./front_end/home/HomeApp.tsx":
/*!************************************!*\
  !*** ./front_end/home/HomeApp.tsx ***!
  \************************************/
/*! exports provided: HomeApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeApp", function() { return HomeApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ParallaxImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ParallaxImg */ "./components/ParallaxImg.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _RecentPurchases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecentPurchases */ "./front_end/home/RecentPurchases.tsx");
/* harmony import */ var _components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MaterialIcon */ "./components/MaterialIcon.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _TopWineTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopWineTypes */ "./front_end/home/TopWineTypes.tsx");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.ts");








const HomeApp = (_) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ParallaxImg__WEBPACK_IMPORTED_MODULE_1__["ParallaxImg"], { src: "/static/img/bourgogne.jpg", alt: "Vineyard" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "section white" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], { s: 12 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", { className: "center bold" },
                            "Welcome to ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "brand-logo" }, "vinoteca")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", { className: "center" }, "A wine purchase tracker and review system")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "center-align" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_5__["Btn"], { classes: ["yellow-bg"], onClick: () => Object(_lib_utils__WEBPACK_IMPORTED_MODULE_7__["redirect"])("/wines/new") },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__["MaterialIcon"], { iconName: "add_circle" }),
                            "add wine"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], { s: 12, xl: 7 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RecentPurchases__WEBPACK_IMPORTED_MODULE_3__["RecentPurchases"], null)),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], { s: 12, xl: 5 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TopWineTypes__WEBPACK_IMPORTED_MODULE_6__["TopWineTypes"], null)))))));
};
HomeApp.displayName = "HomeApp";


/***/ }),

/***/ "./front_end/home/RecentPurchases.tsx":
/*!********************************************!*\
  !*** ./front_end/home/RecentPurchases.tsx ***!
  \********************************************/
/*! exports provided: RecentPurchases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentPurchases", function() { return RecentPurchases; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Cards */ "./components/Cards.tsx");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Preloader */ "./components/Preloader.tsx");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Table */ "./components/Table.tsx");
/* harmony import */ var _components_TableCells__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/TableCells */ "./components/TableCells.tsx");
/* harmony import */ var _lib_ApiHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/ApiHelper */ "./lib/ApiHelper.ts");
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/Logger */ "./lib/Logger.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const RecentPurchases = (_) => {
    const logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_6__["default"](RecentPurchases.name);
    const [hasLoaded, setHasLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
    const [purchases, setPurchases] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        function fetchPurchases() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const purchases = yield Object(_lib_ApiHelper__WEBPACK_IMPORTED_MODULE_5__["get"])("/rest/purchases/recent");
                    setPurchases(purchases);
                }
                catch (_a) {
                    logger.logError("Error fetching recent purchases");
                }
                finally {
                    setHasLoaded(true);
                }
            });
        }
        fetchPurchases();
    }, [setHasLoaded, setPurchases]);
    let content;
    if (!hasLoaded) {
        content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_2__["PreloaderCirc"], null);
    }
    else if (purchases) {
        content = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_3__["Table"], { columns: ["Date", "Store", "Name and Type", "Producer", "Region",
                { name: "Price", isNumCol: true }, { name: "Quantity", isNumCol: true }], condensed: false }, purchases.map((purchase) => {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: purchase.id },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_4__["DateCell"], { date: purchase.date, format: "MMM dd" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_4__["TextCell"], { text: purchase.store }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_4__["NameAndTypeCell"], { id: purchase.wineId, name: purchase.wineName, wineType: purchase.wineType }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_4__["ProducerCell"], { id: purchase.producerId, name: purchase.producer }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_4__["RegionCell"], { id: purchase.regionId, name: purchase.region }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_4__["PriceCell"], { price: purchase.price }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_4__["NumCell"], { num: purchase.quantity })));
        })));
    }
    else {
        content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", { className: "bold" }, "No purchases yet");
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cards__WEBPACK_IMPORTED_MODULE_1__["GreenCard"], { title: "Recent purchases" }, content));
};
RecentPurchases.displayName = "RecentPurchases";


/***/ }),

/***/ "./front_end/home/TopWineTypes.tsx":
/*!*****************************************!*\
  !*** ./front_end/home/TopWineTypes.tsx ***!
  \*****************************************/
/*! exports provided: TopWineTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopWineTypes", function() { return TopWineTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Cards */ "./components/Cards.tsx");
/* harmony import */ var _components_TableCells__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TableCells */ "./components/TableCells.tsx");
/* harmony import */ var _components_TopEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TopEntity */ "./components/TopEntity.tsx");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/RestApi */ "./lib/RestApi.ts");





const TopWineTypes = (_) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cards__WEBPACK_IMPORTED_MODULE_1__["RedCard"], { title: "Top wine types" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopEntity__WEBPACK_IMPORTED_MODULE_3__["TopEntity"], { name: "Wine Type", EntityCell: _components_TableCells__WEBPACK_IMPORTED_MODULE_2__["WineTypeCell"], fetchEntity: _lib_RestApi__WEBPACK_IMPORTED_MODULE_4__["getTopWineTypes"] })));
};
TopWineTypes.displayName = "TopWineTypes";


/***/ }),

/***/ "./front_end/home/home.ts":
/*!********************************!*\
  !*** ./front_end/home/home.ts ***!
  \********************************/
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
/* harmony import */ var _HomeApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomeApp */ "./front_end/home/HomeApp.tsx");





Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"])(() => {
    Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_3__["navbar"])();
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_HomeApp__WEBPACK_IMPORTED_MODULE_4__["HomeApp"]), document.getElementById("home-container"));
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

/***/ 1:
/*!**************************************!*\
  !*** multi ./front_end/home/home.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carter/git/vinoteca/vinoteca/front_end/home/home.ts */"./front_end/home/home.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25zLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmRzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWF0ZXJpYWxJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhcmFsbGF4SW1nLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByZWxvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZUNlbGxzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYnMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9wRW50aXR5LnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvaG9tZS9Ib21lQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvaG9tZS9SZWNlbnRQdXJjaGFzZXMudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC9ob21lL1RvcFdpbmVUeXBlcy50c3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRfZW5kL2hvbWUvaG9tZS50cyIsIndlYnBhY2s6Ly8vLi9saWIvQXBpSGVscGVyLnRzIiwid2VicGFjazovLy8uL2xpYi9Db29raWVzLnRzIiwid2VicGFjazovLy8uL2xpYi9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL1Jlc3RBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL2xpYi93aWRnZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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IFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImhvbWVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMSxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgQ29sIH0gZnJvbSBcIi4vR3JpZFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4vTWF0ZXJpYWxJY29uXCI7XG5cbmludGVyZmFjZSBJRmxvYXRpbmdCdG5Qcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB7XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgICBvbk1vdXNlRG93bj86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKGNsYXNzZXMgfHwgW10pLmpvaW4oXCIgXCIpO1xufVxuXG5leHBvcnQgY29uc3QgRmxvYXRpbmdCdG46IFJlYWN0LkZDPElGbG9hdGluZ0J0blByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21iaW5lQ2xhc3Nlcyhwcm9wcy5jbGFzc2VzKTtcbiAgICBjb25zdCBtb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICAgICAgaWYgKHByb3BzLm9uTW91c2VEb3duKSB7XG4gICAgICAgICAgICBwcm9wcy5vbk1vdXNlRG93bihlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudD4pID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9wcy5vbkNsaWNrKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgYHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4tZmxvYXRpbmcgJHtjbGFzc2VzfWAgfVxuICAgICAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyBtb3VzZURvd24gfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9hPlxuICAgICk7XG59O1xuRmxvYXRpbmdCdG4uZGlzcGxheU5hbWUgPSBcIkZsb2F0aW5nQnRuXCI7XG5GbG9hdGluZ0J0bi5kZWZhdWx0UHJvcHMgPSB7IG9uTW91c2VEb3duOiAoXykgPT4gdW5kZWZpbmVkIH07XG5cbmludGVyZmFjZSBJQnRuUHJvcHMgZXh0ZW5kcyBJQ2hpbGRyZW5Qcm9wLCBJQ2xhc3Nlc1Byb3Age1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBCdG46IFJlYWN0LkZDPElCdG5Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tYmluZUNsYXNzZXMocHJvcHMuY2xhc3Nlcyk7XG4gICAgY29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb3BzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17IGByYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gJHtjbGFzc2VzfWAgfVxuICAgICAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cbkJ0bi5kaXNwbGF5TmFtZSA9IFwiQnRuXCI7XG5cbmludGVyZmFjZSBJQ2FuY2VsT3JDb25maXJtUHJvcHMge1xuICAgIG9uQ29uZmlybUNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIG9uQ2FuY2VsQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBDYW5jZWxPckNvbmZpcm1CdG5zOiBSZWFjdC5GQzxJQ2FuY2VsT3JDb25maXJtUHJvcHM+ID1cbiAgICAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICA8QnRuIGNsYXNzZXM9eyBbXCJncmVlbi1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uQ29uZmlybUNsaWNrIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cInNlbmRcIiBjbGFzc05hbWU9XCJyaWdodFwiIC8+XG4gICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcInJlZC1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uQ2FuY2VsQ2xpY2sgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdG4+XG4gICAgICAgIDwvQ29sPlxuICAgICk7XG59XG5DYW5jZWxPckNvbmZpcm1CdG5zLmRpc3BsYXlOYW1lID0gXCJDYW5jZWxPckNvbmZpcm1CdG5zXCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQ2hpbGRyZW5Qcm9wLCBJQ2xhc3Nlc1Byb3AgfSBmcm9tIFwiLi9JUHJvcHNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB7XG4gICAgdGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgQ2FyZDogUmVhY3QuRkM8SVByb3BzPiA9ICh7Y2xhc3NlcywgY2hpbGRyZW4sIHRpdGxlfSkgPT4ge1xuICAgIGNvbnN0IGpvaW5lZENsYXNzZXMgPSBjbGFzc2VzPy5qb2luKFwiIFwiKSA/PyBcIlwiO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYGNhcmQgJHtqb2luZWRDbGFzc2VzfWAgfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57IHRpdGxlIH08L2gyPlxuICAgICAgICAgICAgICAgIHsgLi4uY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbkNhcmQuZGlzcGxheU5hbWUgPSBcIkNhcmRcIjtcblxuZXhwb3J0IGNvbnN0IFJlZENhcmQ6IFJlYWN0LkZDPElQcm9wcz4gPSAoe2NsYXNzZXMsIGNoaWxkcmVuLCB0aXRsZX0pID0+IHtcbiAgICBjb25zdCBhbGxDbGFzc2VzID0gKGNsYXNzZXMgPz8gW10pLmNvbmNhdChbXCJ3aW5lLXJlZC1jYXJkXCJdKTtcbiAgICByZXR1cm4gQ2FyZCh7Y2xhc3NlczogYWxsQ2xhc3NlcywgY2hpbGRyZW4sIHRpdGxlfSk7XG59XG5SZWRDYXJkLmRpc3BsYXlOYW1lID0gXCJSZWRDYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBHcmVlbkNhcmQ6IFJlYWN0LkZDPElQcm9wcz4gPSAoe2NsYXNzZXMsIGNoaWxkcmVuLCB0aXRsZX0pID0+IHtcbiAgICBjb25zdCBhbGxDbGFzc2VzID0gKGNsYXNzZXMgPz8gW10pLmNvbmNhdChbXCJ3aW5lLWdyZWVuLWNhcmRcIl0pO1xuICAgIHJldHVybiBDYXJkKHtjbGFzc2VzOiBhbGxDbGFzc2VzLCBjaGlsZHJlbiwgdGl0bGV9KTtcbn1cbkdyZWVuQ2FyZC5kaXNwbGF5TmFtZSA9IFwiR3JlZW5DYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBZZWxsb3dDYXJkOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtjbGFzc2VzLCBjaGlsZHJlbiwgdGl0bGV9KSA9PiB7XG4gICAgY29uc3QgYWxsQ2xhc3NlcyA9IChjbGFzc2VzID8/IFtdKS5jb25jYXQoW1wiZ29sZGVuLXllbGxvdy1jYXJkXCJdKTtcbiAgICByZXR1cm4gQ2FyZCh7Y2xhc3NlczogYWxsQ2xhc3NlcywgY2hpbGRyZW4sIHRpdGxlfSk7XG59XG5ZZWxsb3dDYXJkLmRpc3BsYXlOYW1lID0gXCJZZWxsb3dDYXJkXCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9saWIvTG9nZ2VyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0SW5wdXQge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IG51bWJlcjtcbn1cblxuY29uc3QgRk9OVF9GQU1JTFkgPSBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCI7XG5cbmNvbnN0IENPTE9SUyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KFtcbiAgICBbXCJyZWRcIiwgXCJyZ2JhKDIzMCwgMjUsIDc1LCAwLjgpXCJdLFxuICAgIFtcIm9yYW5nZVwiLCBcInJnYmEoMjQ1LCAxMzAsIDQ4LCAwLjgpXCJdLFxuICAgIFtcInllbGxvd1wiLCBcInJnYmEoMjU1LCAyMjUsIDI1LCAwLjgpXCJdLFxuICAgIFtcImxpbWVcIiwgXCJyZ2JhKDIxMCwgMjQ1LCA2MCwgMC44KVwiXSxcbiAgICBbXCJncmVlblwiLCBcInJnYmEoNjAsIDE4MCwgNzUsIDAuOClcIl0sXG4gICAgW1wiY3lhblwiLCBcInJnYmEoNzAsIDI0MCwgMjQwLCAwLjgpXCJdLFxuICAgIFtcImJsdWVcIiwgXCJyZ2JhKDAsIDEzMCwgMjAwLCAwLjgpXCJdLFxuICAgIFtcIm5hdnlcIiwgXCJyZ2JhKDAsIDAsIDEyOCwgMC44KVwiXSxcbiAgICBbXCJtYWdlbnRhXCIsIFwicmdiYSgyNDAsIDUwLCAyMzAsIDAuOClcIl0sXG4gICAgW1wicHVycGxlXCIsIFwicmdiYSgxNDUsIDMwLCAxODAsIDAuOClcIl0sXG5dKTtcblxuY29uc3QgV0hJVEUgPSBcIiNmOGY4ZjhcIjtcbmNvbnN0IFRSQU5TTFVDRU5UX1dISVRFID0gXCJyZ2JhKDI0MCwgMjQwLCAyNDAsIDAuOSlcIjtcbmNvbnN0IFRSQU5TTFVDRU5UX0dSQVkgPSBcInJnYmEoMjAwLCAyMDAsIDIwMCwgMC45KVwiO1xuXG5mdW5jdGlvbiBjaGFuZ2VUcmFuc3BhcmVuY3koY29sb3I6IHN0cmluZywgdHJhbnNwYXJlbmN5OiBudW1iZXIpIHtcbiAgICBpZiAodHJhbnNwYXJlbmN5IDw9IDAgfHwgdHJhbnNwYXJlbmN5ID49IDEpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJUcmFuc3BhcmVuY3kgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDFcIik7XG4gICAgfVxuICAgIGNvbnN0IGZpZWxkcyA9IGNvbG9yLnN1YnN0cig1LCBjb2xvci5sZW5ndGggLSA3KS5zcGxpdChcIixcIikubWFwKFxuICAgICAgICAodmFsKSA9PiBwYXJzZUludCh2YWwsIDEwKSxcbiAgICApO1xuXG4gICAgZmllbGRzWzNdID0gdHJhbnNwYXJlbmN5O1xuICAgIHJldHVybiBgcmdiYSgke2ZpZWxkc1swXX0sICR7ZmllbGRzWzFdfSwgJHtmaWVsZHNbMl19LCAke2ZpZWxkc1szXX0pYDtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHNwbGl0dGluZyBEaWN0IHRvIHNlcGVyYXRlIGxhYmVsIGFuZCBrZXkgYXJyYXlzIGZvclxuICogaW50ZXJmYWNpbmcgd2l0aCBDaGFydHMuanNcbiAqL1xuZnVuY3Rpb24gc3BsaXREYXRhKGRhdGE6IElDaGFydElucHV0W10pOiBbc3RyaW5nW10sIG51bWJlcltdXSB7XG4gICAgY29uc3QgY2hhcnREYXRhOiBudW1iZXJbXSA9IFtdO1xuICAgIGNvbnN0IGNoYXJ0TGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGRhdGEuZm9yRWFjaCgoY28pID0+IHtcbiAgICAgICAgY2hhcnREYXRhLnB1c2goY28udmFsdWUpO1xuICAgICAgICBjaGFydExhYmVscy5wdXNoKGNvLmxhYmVsKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NoYXJ0TGFiZWxzLCBjaGFydERhdGFdO1xufVxuXG4vKiogSGVscGVyIGZ1bmN0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIHRvIHByb2NlZWQgd2l0aCBjaGFydCBjcmVhdGlvbi4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hhcnRJbnB1dChjaGFydERhdGE6IG51bWJlcltdKSB7XG4gICAgLy8gT25seSBjcmVhdGUgY2hhcnQgaWYgb25lIG9yIG1vcmUgZ3JhcGVzIGhhcyBhIG5vbi16ZXJvIHZhbHVlXG4gICAgaWYgKGNoYXJ0RGF0YS5sZW5ndGggPT09IDAgfHwgY2hhcnREYXRhLmV2ZXJ5KG51bSA9PiBudW0gPT09IDApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmludGVyZmFjZSBJUGllQ2hhcnRQcm9wcyB7XG4gICAgZGF0YTogSUNoYXJ0SW5wdXRbXTtcbn1cblxuZXhwb3J0IGNvbnN0IFBpZUNoYXJ0OiBSZWFjdC5GQzxJUGllQ2hhcnRQcm9wcz4gPSAoe2RhdGF9KSA9PiB7XG4gICAgY29uc3QgW2NoYXJ0TGFiZWxzLCBjaGFydERhdGFdID0gc3BsaXREYXRhKGRhdGEpO1xuXG4gICAgY29uc3QgY29uZmlnOiBDaGFydC5DaGFydENvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICAgICAgICAgICBcInJnYmEoMTM5LCAxOTUsIDc0KVwiLFxuICAgICAgICAgICAgICAgICAgICBcInJnYmEoMTczLCAyMCwgODcpXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmdiYSgyNTEsIDE5MiwgNDUpXCIsXG4gICAgICAgICAgICAgICAgICAgIENPTE9SUy5nZXQoXCJibHVlXCIpISxcbiAgICAgICAgICAgICAgICAgICAgQ09MT1JTLmdldChcInB1cnBsZVwiKSEsXG4gICAgICAgICAgICAgICAgICAgIENPTE9SUy5nZXQoXCJvcmFuZ2VcIikhLFxuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBkYXRhOiBjaGFydERhdGEsXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnRMYWJlbHMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIC8vIFJlc2l6ZSBjaGFydCB3aXRoIGl0cyBjb250YWluZXJcbiAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBGT05UX0ZBTUlMWSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgYm9keUZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgICAgIGJvZHlGb250U2l6ZTogMTQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiBcInBpZVwiLFxuICAgIH07XG5cbiAgICBjb25zdCBjYW52YXNSZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxDYW52YXNFbGVtZW50PjtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBpZSA9IG5ldyBDaGFydChjYW52YXNSZWYuY3VycmVudCwgY29uZmlnKTtcbiAgICB9LCBbY2FudmFzUmVmLCBjb25maWddKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxjYW52YXMgaGVpZ2h0PVwiMTAwcHhcIiByZWY9e2NhbnZhc1JlZn0gLz5cbiAgICApO1xufVxuUGllQ2hhcnQuZGlzcGxheU5hbWUgPSBcIlBpZUNoYXJ0XCI7XG5cbmludGVyZmFjZSBJQmFyQ2hhcnRQcm9wcyB7XG4gICAgZGF0YTogSUNoYXJ0SW5wdXRbXTtcbiAgICBoZWlnaHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEJhckNoYXJ0OiBSZWFjdC5GQzxJQmFyQ2hhcnRQcm9wcz4gPSAoe2RhdGEsIGhlaWdodH0pID0+IHtcbiAgICBjb25zdCBbY2hhcnRMYWJlbHMsIGNoYXJ0RGF0YV0gPSBzcGxpdERhdGEoZGF0YSk7XG4gICAgLy8gRXJyb3IgY2hlY2tpbmdcbiAgICBpZiAoIXZhbGlkYXRlQ2hhcnRJbnB1dChjaGFydERhdGEpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjb2xvclZhbHVlcyA9IEFycmF5LmZyb20oQ09MT1JTLnZhbHVlcygpKTtcblxuICAgIGNvbnN0IGNvbmZpZzogQ2hhcnQuQ2hhcnRDb25maWd1cmF0aW9uID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yVmFsdWVzLFxuICAgICAgICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YSxcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydExhYmVscyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDE1LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDE1LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBUUkFOU0xVQ0VOVF9HUkFZLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6IFRSQU5TTFVDRU5UX1dISVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogRk9OVF9GQU1JTFksXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFRSQU5TTFVDRU5UX0dSQVksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6IFRSQU5TTFVDRU5UX1dISVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogRk9OVF9GQU1JTFksXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICBib2R5Rm9udEZhbWlseTogRk9OVF9GQU1JTFksXG4gICAgICAgICAgICAgICAgYm9keUZvbnRTaXplOiAxMixcbiAgICAgICAgICAgICAgICB0aXRsZUZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgICAgIHRpdGxlRm9udFNpemU6IDE0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogXCJob3Jpem9udGFsQmFyXCIsXG4gICAgfTtcblxuICAgIGNvbnN0IGNhbnZhc1JlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTENhbnZhc0VsZW1lbnQ+O1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgYmFyID0gbmV3IENoYXJ0KGNhbnZhc1JlZi5jdXJyZW50LCBjb25maWcpO1xuICAgIH0sIFtjYW52YXNSZWYsIGNvbmZpZ10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGNhbnZhcyBoZWlnaHQ9e2hlaWdodH0gcmVmPXtjYW52YXNSZWZ9IC8+XG4gICAgKTtcbn1cbkJhckNoYXJ0LmRpc3BsYXlOYW1lID0gXCJCYXJDaGFydFwiO1xuXG5pbnRlcmZhY2UgSUxpbmVDaGFydFByb3BzIHtcbiAgICBkYXRhOiBJQ2hhcnRJbnB1dFtdW107XG4gICAgc2VyaWVzTGFiZWxzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IExpbmVDaGFydDogUmVhY3QuRkM8SUxpbmVDaGFydFByb3BzPiA9ICh7ZGF0YSwgc2VyaWVzTGFiZWxzfSkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoTGluZUNoYXJ0Lm5hbWUpO1xuXG4gICAgY29uc3QgY2hhcnRMYWJlbHMgPSBzcGxpdERhdGEoZGF0YVswXSlbMF07XG4gICAgaWYgKGRhdGEubGVuZ3RoICE9PSBzZXJpZXNMYWJlbHMubGVuZ3RoKSB7XG4gICAgICAgIGxvZ2dlci5sb2dXYXJuaW5nKGBEYXRhIGFuZCBzZXJpZXNMYWJlbHMgaGF2ZSBkaWZmZXJlbnQgbGVuZ2h0cy4gYCArXG4gICAgICAgICAgICAgICAgICAgYCR7ZGF0YS5sZW5ndGh9IGFuZCAke3Nlcmllc0xhYmVscy5sZW5ndGh9IHJlc3BlY3RpdmVseS5gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnOiBDaGFydC5DaGFydENvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXSxcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnRMYWJlbHMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogVFJBTlNMVUNFTlRfR1JBWSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiBUUkFOU0xVQ0VOVF9XSElURSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBUUkFOU0xVQ0VOVF9HUkFZLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiBUUkFOU0xVQ0VOVF9XSElURSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgYm9keUZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgICAgIGJvZHlGb250U2l6ZTogMTIsXG4gICAgICAgICAgICAgICAgdGl0bGVGb250RmFtaWx5OiBGT05UX0ZBTUlMWSxcbiAgICAgICAgICAgICAgICB0aXRsZUZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgIH07XG5cbiAgICBjb25zdCBjb2xvclZhbHVlcyA9IEFycmF5LmZyb20oQ09MT1JTLnZhbHVlcygpKTtcbiAgICAvLyBWYWxpZGF0ZSB0aGVuIGFkZCBlYWNoIGRhdGEgc2VyaWVzIHRvIGNvbmZpZ1xuICAgIGNvbnN0IGRhdGFWYWxpZGF0aW9uID0gZGF0YS5tYXAoKHNlcmllcywgaSkgPT4ge1xuICAgICAgICBjb25zdCBbXywgY2hhcnREYXRhXSA9IHNwbGl0RGF0YShzZXJpZXMpO1xuICAgICAgICAvLyBBZGQgdGhlIHNlcmllcyBkYXRhIHRvIHRoZSBjb3JyZXNwb25kaW5nIGtleSBpbiBkYXRhc2V0TGFiZWxzXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uZmlnLmRhdGEuZGF0YXNldHMucHVzaCh7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoYW5nZVRyYW5zcGFyZW5jeShjb2xvclZhbHVlc1tpXSwgMC41KSxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvclZhbHVlc1tpXSxcbiAgICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YSxcbiAgICAgICAgICAgIGxhYmVsOiBzZXJpZXNMYWJlbHNbaV0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBFcnJvciBjaGVja2luZ1xuICAgICAgICBpZiAoY2hhcnREYXRhLmV2ZXJ5KChudW0pID0+IG51bSA9PT0gMCkpIHtcbiAgICAgICAgICAgIGxvZ2dlci5sb2dXYXJuaW5nKFwiQWxsIHplcm9lcyBmb3IgY2hhcnRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICBpZiAoIWRhdGFWYWxpZGF0aW9uLmV2ZXJ5KCh2YWwpID0+IHZhbCkpIHtcbiAgICAgICAgbG9nZ2VyLmxvZ1dhcm5pbmcoXCJEYXRhIHZhbGlkYXRpb24gb2YgY2hhcnREYXRhIGZhaWxlZFwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY2FudmFzUmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MQ2FudmFzRWxlbWVudD47XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5lID0gbmV3IENoYXJ0KGNhbnZhc1JlZi5jdXJyZW50LCBjb25maWcpO1xuICAgIH0sIFtjYW52YXNSZWYsIGNvbmZpZ10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gLz5cbiAgICApO1xufVxuTGluZUNoYXJ0LmRpc3BsYXlOYW1lID0gXCJMaW5lQ2hhcnRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkUHJvcHMge1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xuICAgIHhsPzogbnVtYmVyO1xufVxuXG50eXBlIElBbGxHcmlkUHJvcHMgPSBJR3JpZFByb3BzICYgSUNsYXNzZXNQcm9wICYgSUNoaWxkcmVuUHJvcDtcblxuZnVuY3Rpb24gam9pbkNsYXNzZXMoZ3JpZDogc3RyaW5nW10sIGNsYXNzZXM/OiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgbGV0IGFsbENsYXNzZXM6IHN0cmluZ1tdID0gW107XG4gICAgZ3JpZC5mb3JFYWNoKChnYykgPT4ge1xuICAgICAgICBpZiAoZ2MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWxsQ2xhc3Nlcy5wdXNoKGdjKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGFsbENsYXNzZXMgPSBhbGxDbGFzc2VzLmNvbmNhdChjbGFzc2VzIHx8IFtdKTtcbiAgICByZXR1cm4gYWxsQ2xhc3Nlcy5qb2luKFwiIFwiKTtcbn1cblxuZnVuY3Rpb24gZ3JpZENsYXNzZXMocHJvcHM6IElBbGxHcmlkUHJvcHMpOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgc0NsYXNzID0gcHJvcHMucyA/IGBzJHtwcm9wcy5zfWAgOiBcIlwiO1xuICAgIGNvbnN0IG1DbGFzcyA9IHByb3BzLm0gPyBgbSR7cHJvcHMubX1gIDogXCJcIjtcbiAgICBjb25zdCBsQ2xhc3MgPSBwcm9wcy5sID8gYGwke3Byb3BzLmx9YCA6IFwiXCI7XG4gICAgY29uc3QgeGxDbGFzcyA9IHByb3BzLnhsID8gYHhsJHtwcm9wcy54bH1gIDogXCJcIjtcbiAgICByZXR1cm4gW3NDbGFzcywgbUNsYXNzLCBsQ2xhc3MsIHhsQ2xhc3NdO1xufVxuXG5jb25zdCBHcmlkQ29tcG9uZW50RmFjdG9yeSA9IChjbGFzc05hbWU6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZyk6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0+IHtcbiAgICBjb25zdCBjb21wb25lbnQ6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0gKHByb3BzOiBJQWxsR3JpZFByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IG90aGVyQ2xhc3NlcyA9IGpvaW5DbGFzc2VzKGdyaWRDbGFzc2VzKHByb3BzKSwgcHJvcHMuY2xhc3Nlcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGAke2NsYXNzTmFtZX0gJHtvdGhlckNsYXNzZXN9YCB9PlxuICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbiAgICBjb21wb25lbnQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgY29uc3QgUm93OiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IEdyaWRDb21wb25lbnRGYWN0b3J5KFwicm93XCIsIFwiUm93XCIpO1xuXG5leHBvcnQgY29uc3QgQ29sOiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IEdyaWRDb21wb25lbnRGYWN0b3J5KFwiY29sXCIsIFwiQ29sXCIpO1xuXG5leHBvcnQgY29uc3QgSW5wdXRGaWVsZDogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcImNvbCBpbnB1dC1maWVsZFwiLCBcIklucHV0RmllbGRcIilcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgaWNvbk5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE1hdGVyaWFsSWNvbjogUmVhY3QuRkM8SVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgICA8aSBjbGFzc05hbWU9eyBgbWF0ZXJpYWwtaWNvbnMgJHtwcm9wcy5jbGFzc05hbWV9YCB9PlxuICAgICAgICAgICAgeyBwcm9wcy5pY29uTmFtZSB9XG4gICAgICAgIDwvaT5cbiAgICApO1xufTtcbk1hdGVyaWFsSWNvbi5kaXNwbGF5TmFtZSA9IFwiTWF0ZXJpYWxJY29uXCI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSBcIm1hdGVyaWFsaXplLWNzc1wiO1xuXG5leHBvcnQgY29uc3QgUGFyYWxsYXhJbWc6IFJlYWN0LkZDPHtzcmM6IHN0cmluZywgYWx0OiBzdHJpbmd9PiA9ICh7c3JjOiBpbWdTb3VyY2UsIGFsdH0pID0+IHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBhcmFsbGF4KHJlZi5jdXJyZW50KTtcbiAgICB9LCBbcmVmXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmFsbGF4LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhbGxheFwiIHJlZj17IHJlZiB9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgaW1nU291cmNlIH0gYWx0PXsgYWx0IH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFByZWxvYWRlcjogUmVhY3QuRkM8e30+ID0gKF8pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV0ZXJtaW5hdGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblByZWxvYWRlci5kaXNwbGF5TmFtZSA9IFwiUHJlbG9hZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBQcmVsb2FkZXJDaXJjOiBSZWFjdC5GQzx7fT4gPSAoXykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZGVyLXdyYXBwZXIgYWN0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItbGF5ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImdhcC1wYXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuUHJlbG9hZGVyQ2lyYy5kaXNwbGF5TmFtZSA9IFwiUHJlbG9hZGVyQ2lyY1wiO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQ2hpbGRyZW5Qcm9wIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbHVtbkhlYWRlciB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGlzTnVtQ29sPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFdpbmVUYWJsZU51bUNvbHM6IElDb2x1bW5IZWFkZXJbXSA9IFtcbiAgICB7IG5hbWU6IFwiVG90YWwgUXVhbnRpdHlcIiwgaXNOdW1Db2w6IHRydWUgfSxcbiAgICB7IG5hbWU6IFwiQXZnIFByaWNlXCIsIGlzTnVtQ29sOiB0cnVlIH0sXG4gICAgeyBuYW1lOiBcIlJhdGluZ1wiLCBpc051bUNvbDogdHJ1ZSB9LFxuXVxuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSUNoaWxkcmVuUHJvcCB7XG4gICAgY29sdW1uczogKHN0cmluZyB8IElDb2x1bW5IZWFkZXIpW107XG4gICAgY29uZGVuc2VkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFRhYmxlOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgY29uZGVuc2VkID0gcHJvcHMuY29uZGVuc2VkID8/IHRydWU7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17IGBoaWdobGlnaHQgcmVzcG9uc2l2ZSAke2NvbmRlbnNlZCA/IFwiY29uZGVuc2VkXCIgOiBcIlwifWAgfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY29sdW1ucy5tYXAoKGNvbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2wgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRoIGtleT17IGNvbCB9PnsgY29sIH08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXsgY29sLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBjb2wuaXNOdW1Db2wgPyBcIm51bS1jb2xcIiA6IFwiXCIgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjb2wubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICApO1xufTtcblRhYmxlLmRpc3BsYXlOYW1lID0gXCJUYWJsZVwiO1xuIiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZXNtL2Zvcm1hdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBFTl9EQVNILCBnZXROYW1lQW5kVHlwZSwgbnVtVG9EYXRlIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgSVRleHRDZWxsUHJvcHMge1xuICAgIGRlZmF1bHQ/OiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIFRleHRDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUZXh0Q2VsbFByb3BzPiB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDx0ZD57IHRoaXMucHJvcHMudGV4dCA/PyB0aGlzLnByb3BzLmRlZmF1bHQgfTwvdGQ+O1xuICAgIH1cbn07XG5cbmludGVyZmFjZSBJTnVtQ2VsbFByb3BzIHtcbiAgICBudW06IG51bWJlciB8IG51bGw7XG4gICAgbWluRGVjaW1hbHM/OiBudW1iZXI7XG4gICAgbWF4RGVjaW1hbHM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBOdW1DZWxsOiBSZWFjdC5GQzxJTnVtQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IG51bSA9IHByb3BzLm51bVxuICAgICAgICAvLyB1bmRlZmluZWQgdG8gdXNlIGJyb3dzZXIncyBsb2NhbGVcbiAgICAgICAgPyBwcm9wcy5udW0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcm9wcy5taW5EZWNpbWFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJvcHMubWF4RGVjaW1hbHN9KVxuICAgICAgICA6IEVOX0RBU0g7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm51bS1jb2xcIj57IG51bSB9PC90ZD5cbiAgICApO1xufTtcbk51bUNlbGwuZGlzcGxheU5hbWUgPSBcIk51bUNlbGxcIjtcblxuaW50ZXJmYWNlIElQcmljZUNlbGxQcm9wcyB7XG4gICAgcHJpY2U6IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBQcmljZUNlbGw6IFJlYWN0LkZDPElQcmljZUNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TnVtQ2VsbCBudW09eyBwcm9wcy5wcmljZSB9XG4gICAgICAgICAgICBtaW5EZWNpbWFscz17IDIgfVxuICAgICAgICAgICAgbWF4RGVjaW1hbHM9eyAyIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUHJpY2VDZWxsLmRpc3BsYXlOYW1lID0gXCJQcmljZUNlbGxcIjtcblxuZXhwb3J0IGNvbnN0IFllYXJDZWxsOiBSZWFjdC5GQzx7eWVhcjogbnVtYmVyIHwgbnVsbH0+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeWVhciA9IHByb3BzLnllYXI/LnRvU3RyaW5nKCkgPz8gXCJOVlwiO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJudW0tY29sXCI+XG4gICAgICAgICAgICB7IHllYXIgfVxuICAgICAgICA8L3RkPlxuICAgICk7XG59XG5ZZWFyQ2VsbC5kaXNwbGF5TmFtZSA9IFwiWWVhckNlbGxcIjtcblxuaW50ZXJmYWNlIElEYXRlQ2VsbFByb3BzIHtcbiAgICBkYXRlOiBudW1iZXIgfCBudWxsO1xuICAgIGZvcm1hdD86IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBEYXRlQ2VsbDogUmVhY3QuRkM8SURhdGVDZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZGF0ZVN0ciA9IHByb3BzLmRhdGUgPyBmb3JtYXQobnVtVG9EYXRlKHByb3BzLmRhdGUpLCBwcm9wcy5mb3JtYXQgPz8gXCJNTU0gZGQsIHl5eXlcIikgOiBFTl9EQVNIO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZD57IGRhdGVTdHIgfTwvdGQ+XG4gICAgKTtcbn1cbkRhdGVDZWxsLmRpc3BsYXlOYW1lID0gXCJEYXRlQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSUNvbG9yQ2VsbFByb3BzIHtcbiAgICBjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ29sb3JDZWxsOiBSZWFjdC5GQzxJQ29sb3JDZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKHByb3BzLmNvbG9yKSB7XG4gICAgICAgIHJldHVybiA8dGQ+eyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIocHJvcHMuY29sb3IpIH08L3RkPjtcbiAgICB9XG4gICAgcmV0dXJuIDx0ZCAvPjtcbn07XG5Db2xvckNlbGwuZGlzcGxheU5hbWUgPSBcIkNvbG9yQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSUxpbmtlZENlbGxQcm9wcyB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBtb2RlbDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgTGlua2VkQ2VsbDogUmVhY3QuRkM8SUxpbmtlZENlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgLyR7cHJvcHMubW9kZWx9LyR7cHJvcHMuaWR9YDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YSBocmVmPXsgdXJsIH0+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5uYW1lIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICApXG59XG5MaW5rZWRDZWxsLmRpc3BsYXlOYW1lID0gXCJMaW5rZWRDZWxsXCJcblxuaW50ZXJmYWNlIElOYW1lQW5kVHlwZVByb3BzIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZyB8IG51bGw7XG4gICAgd2luZVR5cGU6IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBOYW1lQW5kVHlwZUNlbGw6IFJlYWN0LkZDPElOYW1lQW5kVHlwZVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGlmIChwcm9wcy51cmwpIHtcbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGEgaHJlZj17IHByb3BzLnVybCB9PlxuICAgICAgICAgICAgICAgIHsgZ2V0TmFtZUFuZFR5cGUocHJvcHMubmFtZSwgcHJvcHMud2luZVR5cGUpIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cIndpbmVzXCJcbiAgICAgICAgICAgIG5hbWU9eyBnZXROYW1lQW5kVHlwZShwcm9wcy5uYW1lLCBwcm9wcy53aW5lVHlwZSkgfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuTmFtZUFuZFR5cGVDZWxsLmRpc3BsYXlOYW1lID0gXCJOYW1lQW5kVHlwZUNlbGxcIjtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y2VyQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cInByb2R1Y2Vyc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblByb2R1Y2VyQ2VsbC5kaXNwbGF5TmFtZSA9IFwiUHJvZHVjZXJDZWxsXCJcblxuZXhwb3J0IGNvbnN0IFJlZ2lvbkNlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmd9PiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJyZWdpb25zXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUmVnaW9uQ2VsbC5kaXNwbGF5TmFtZSA9IFwiUmVnaW9uQ2VsbFwiXG5cbmV4cG9ydCBjb25zdCBWaXRpQXJlYUNlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyIHwgbnVsbCwgbmFtZTogc3RyaW5nIHwgbnVsbH0+ID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKCFwcm9wcy5pZCB8fCAhcHJvcHMubmFtZSkge1xuICAgICAgICByZXR1cm4gPHRkIC8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwidml0aS1hcmVhc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblZpdGlBcmVhQ2VsbC5kaXNwbGF5TmFtZSA9IFwiVml0aUFyZWFDZWxsXCJcblxuZXhwb3J0IGNvbnN0IFdpbmVUeXBlQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cIndpbmUtdHlwZXNcIlxuICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5XaW5lVHlwZUNlbGwuZGlzcGxheU5hbWUgPSBcIldpbmVUeXBlQ2VsbFwiO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSUNoaWxkcmVuUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgVGFicyBhcyBNVGFicyB9IGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIlxuXG5leHBvcnQgZW51bSBUYWJDb2xvciB7XG4gICAgR3JlZW4gPSBcIndpbmUtZ3JlZW4tdGFiXCIsXG4gICAgUmVkID0gXCJ3aW5lLXJlZC10YWJcIixcbn1cblxuZXhwb3J0IGNvbnN0IFRhYnM6IFJlYWN0LkZDPElDaGlsZHJlblByb3A+ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCB0YWJzUmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MVUxpc3RFbGVtZW50PjtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBfID0gbmV3IE1UYWJzKHRhYnNSZWYuY3VycmVudCk7XG4gICAgfSwgW3RhYnNSZWZdKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFicyB0YWJzLWZpeGVkLXdpZHRoIG5hcnJvdy10YWJzIHotZGVwdGgtMVwiIHJlZj17IHRhYnNSZWYgfT5cbiAgICAgICAgICAgIHsgLi4uY2hpbGRyZW4gfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59XG5UYWJzLmRpc3BsYXlOYW1lID0gXCJUYWJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleEZhY3RvcnkobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChpZHg6IG51bWJlcikgPT4gYCR7bmFtZX0tJHtpZHh9YDtcbn1cblxuaW50ZXJmYWNlIElUYWJQcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3Age1xuICAgIHRhcmdldDogc3RyaW5nO1xuICAgIGNvbG9yOiBUYWJDb2xvcixcbn1cblxuZXhwb3J0IGNvbnN0IFRhYjogUmVhY3QuRkM8SVRhYlByb3BzPiA9ICh7Y2hpbGRyZW4sIGNvbG9yLCB0YXJnZXR9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17IGB0YWIgJHtjb2xvci52YWx1ZU9mKCl9YCB9PlxuICAgICAgICAgICAgPGEgaHJlZj17IGAjJHt0YXJnZXR9YCB9PlxuICAgICAgICAgICAgICAgIHsgLi4uY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICk7XG59XG5UYWIuZGlzcGxheU5hbWUgPSBcIlRhYlwiO1xuXG5pbnRlcmZhY2UgSVRhYlBhbmVsUHJvcHMgZXh0ZW5kcyBJQ2hpbGRyZW5Qcm9wIHtcbiAgICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgVGFiUGFuZWw6IFJlYWN0LkZDPElUYWJQYW5lbFByb3BzPiA9ICh7Y2hpbGRyZW4sIGlkfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9eyBpZCB9PlxuICAgICAgICAgICAgeyAuLi5jaGlsZHJlbiB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5UYWJQYW5lbC5kaXNwbGF5TmFtZSA9IFwiVGFiUGFuZWxcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IEJhckNoYXJ0IH0gZnJvbSBcIi4vQ2hhcnRcIjtcbmltcG9ydCB7IFByZWxvYWRlckNpcmMgfSBmcm9tIFwiLi9QcmVsb2FkZXJcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4vVGFibGVcIjtcbmltcG9ydCB7IE51bUNlbGwsIFByaWNlQ2VsbCB9IGZyb20gXCIuL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCB7IGluZGV4RmFjdG9yeSwgVGFiLCBUYWJDb2xvciwgVGFiUGFuZWwsIFRhYnMgfSBmcm9tIFwiLi9UYWJzXCI7XG5pbXBvcnQgeyBuYW1lVG9JZCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcblxuaW50ZXJmYWNlIElFbnRpdHkge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHF1YW50aXR5OiBudW1iZXI7XG4gICAgdmFyaWV0aWVzOiBudW1iZXI7XG4gICAgYXZnUHJpY2U6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElFbnRpdHlDZWxsUHJvcHMge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzPEVudGl0eT4ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBFbnRpdHlDZWxsOiBSZWFjdC5GQzxJRW50aXR5Q2VsbFByb3BzPjtcbiAgICBmZXRjaEVudGl0eTogKCkgPT4gUHJvbWlzZTxFbnRpdHlbXT47XG4gICAgbWluUXVhbnRpdHk/OiBudW1iZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gVG9wRW50aXR5PEVudGl0eSBleHRlbmRzIElFbnRpdHk+KHtuYW1lLCBFbnRpdHlDZWxsLCBmZXRjaEVudGl0eSwgbWluUXVhbnRpdHl9OiBJUHJvcHM8RW50aXR5Pikge1xuICAgIG1pblF1YW50aXR5ID0gbWluUXVhbnRpdHkgPz8gNTtcblxuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoVG9wRW50aXR5Lm5hbWUpO1xuICAgIGNvbnN0IFtoYXNMb2FkZWQsIHNldEhhc0xvYWRlZF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW3RvcEVudGl0aWVzLCBzZXRUb3BFbnRpdGllc10gPSBSZWFjdC51c2VTdGF0ZTxFbnRpdHlbXT4oW10pO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVG9wRW50aXRpZXMoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVudGl0aWVzID0gYXdhaXQgZmV0Y2hFbnRpdHkoKTtcbiAgICAgICAgICAgICAgICBzZXRUb3BFbnRpdGllcyhlbnRpdGllcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKGBFcnJvciBmZXRjaGluZyB0b3AgJHtuYW1lfXMuICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRIYXNMb2FkZWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaFRvcEVudGl0aWVzKCk7XG4gICAgfSwgW3NldEhhc0xvYWRlZCwgc2V0VG9wRW50aXRpZXNdKTtcblxuXG4gICAgaWYgKCFoYXNMb2FkZWQpIHtcbiAgICAgICAgcmV0dXJuIDxQcmVsb2FkZXJDaXJjIC8+O1xuICAgIH1cbiAgICBpZiAodG9wRW50aXRpZXMubGVuZ3RoID49IG1pblF1YW50aXR5KSB7XG4gICAgICAgIGNvbnN0IHRhYklkeGVyID0gaW5kZXhGYWN0b3J5KG5hbWVUb0lkKG5hbWUpKTtcbiAgICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gXCIzNTBweFwiO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VGFicz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYiB0YXJnZXQ9e3RhYklkeGVyKDApfSBjb2xvcj17VGFiQ29sb3IuUmVkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRhYmxlXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICA8VGFiIHRhcmdldD17dGFiSWR4ZXIoMSl9IGNvbG9yPXtUYWJDb2xvci5HcmVlbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBQdXJjaGFzZXNcbiAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgIDxUYWIgdGFyZ2V0PXt0YWJJZHhlcigyKX0gY29sb3I9e1RhYkNvbG9yLkdyZWVufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZhcmlldGllc1xuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgICAgPFRhYiB0YXJnZXQ9e3RhYklkeGVyKDMpfSBjb2xvcj17VGFiQ29sb3IuR3JlZW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgQXZnIFByaWNlXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWwgaWQ9e3RhYklkeGVyKDApfT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGNvbHVtbnM9e1tuYW1lLCB7IG5hbWU6IFwiUHVyY2hhc2VzXCIsIGlzTnVtQ29sOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiVmFyaWV0aWVzXCIsIGlzTnVtQ29sOiB0cnVlIH0sIHsgbmFtZTogXCJQcmljZVwiLCBpc051bUNvbDogdHJ1ZSB9XX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRlbnNlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0b3BFbnRpdGllcy5tYXAoKGVudGl0eSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtlbnRpdHkuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RW50aXR5Q2VsbCBpZD17IGVudGl0eS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsgZW50aXR5Lm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtQ2VsbCBtYXhEZWNpbWFscz17MH0gbnVtPXtlbnRpdHkucXVhbnRpdHl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1DZWxsIG1heERlY2ltYWxzPXswfSBudW09e2VudGl0eS52YXJpZXRpZXN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZUNlbGwgcHJpY2U9e2VudGl0eS5hdmdQcmljZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBpZD17dGFiSWR4ZXIoMSl9PlxuICAgICAgICAgICAgICAgICAgICA8QmFyQ2hhcnQgaGVpZ2h0PXtjYW52YXNIZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0b3BFbnRpdGllcy5tYXAoKGVudCkgPT4gKHsgbGFiZWw6IGVudC5uYW1lLCB2YWx1ZTogZW50LnF1YW50aXR5IH0pKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBpZD17dGFiSWR4ZXIoMil9PlxuICAgICAgICAgICAgICAgICAgICA8QmFyQ2hhcnQgaGVpZ2h0PXtjYW52YXNIZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0b3BFbnRpdGllcy5tYXAoKGVudCkgPT4gKHsgbGFiZWw6IGVudC5uYW1lLCB2YWx1ZTogZW50LnZhcmlldGllcyB9KSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWwgaWQ9e3RhYklkeGVyKDMpfT5cbiAgICAgICAgICAgICAgICAgICAgPEJhckNoYXJ0IGhlaWdodD17Y2FudmFzSGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dG9wRW50aXRpZXMubWFwKChlbnQpID0+ICh7IGxhYmVsOiBlbnQubmFtZSwgdmFsdWU6IGVudC5hdmdQcmljZSB9KSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiYm9sZFwiPnsgYEluc3VmZmljZW50ICR7bmFtZX1zLmAgfTwvaDY+XG4gICAgKTtcbn1cblRvcEVudGl0eS5kaXNwbGF5TmFtZSA9IFRvcEVudGl0eS5uYW1lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGFyYWxsYXhJbWcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYXJhbGxheEltZ1wiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmlkXCI7XG5pbXBvcnQgeyBSZWNlbnRQdXJjaGFzZXMgfSBmcm9tIFwiLi9SZWNlbnRQdXJjaGFzZXNcIjtcbmltcG9ydCB7IE1hdGVyaWFsSWNvbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01hdGVyaWFsSWNvblwiO1xuaW1wb3J0IHsgQnRuIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uc1wiO1xuaW1wb3J0IHsgVG9wV2luZVR5cGVzIH0gZnJvbSBcIi4vVG9wV2luZVR5cGVzXCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IEhvbWVBcHA6IFJlYWN0LkZDPHt9PiA9IChfKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxQYXJhbGxheEltZyBzcmM9XCIvc3RhdGljL2ltZy9ib3VyZ29nbmUuanBnXCIgYWx0PVwiVmluZXlhcmRcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNlbnRlciBib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gPHNwYW4gY2xhc3NOYW1lPVwiYnJhbmQtbG9nb1wiPnZpbm90ZWNhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNlbnRlclwiPkEgd2luZSBwdXJjaGFzZSB0cmFja2VyIGFuZCByZXZpZXcgc3lzdGVtPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnRuIGNsYXNzZXM9eyBbXCJ5ZWxsb3ctYmdcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gcmVkaXJlY3QoXCIvd2luZXMvbmV3XCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJhZGRfY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkIHdpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgcz17IDEyIH0geGw9eyA3IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlY2VudFB1cmNoYXNlcyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHM9eyAxMiB9IHhsPXsgNSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb3BXaW5lVHlwZXMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuSG9tZUFwcC5kaXNwbGF5TmFtZSA9IFwiSG9tZUFwcFwiO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdyZWVuQ2FyZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmRzXCI7XG5pbXBvcnQgeyBQcmVsb2FkZXJDaXJjIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJlbG9hZGVyXCI7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhYmxlXCI7XG5pbXBvcnQgeyBEYXRlQ2VsbCwgTmFtZUFuZFR5cGVDZWxsLCBOdW1DZWxsLCBQcmljZUNlbGwsIFByb2R1Y2VyQ2VsbCwgUmVnaW9uQ2VsbCwgVGV4dENlbGwsIFdpbmVUeXBlQ2VsbCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCB7IGdldCB9IGZyb20gXCIuLi8uLi9saWIvQXBpSGVscGVyXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi8uLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyBJUmVjZW50UHVyY2hhc2UgfSBmcm9tIFwiLi4vLi4vbGliL1Jlc3RcIjtcblxuZXhwb3J0IGNvbnN0IFJlY2VudFB1cmNoYXNlczogUmVhY3QuRkM8e30+ID0gKF8pID0+IHtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKFJlY2VudFB1cmNoYXNlcy5uYW1lKTtcbiAgICBjb25zdCBbaGFzTG9hZGVkLCBzZXRIYXNMb2FkZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtwdXJjaGFzZXMsIHNldFB1cmNoYXNlc10gPSB1c2VTdGF0ZTxJUmVjZW50UHVyY2hhc2VbXT4oW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHVyY2hhc2VzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwdXJjaGFzZXMgPSBhd2FpdCBnZXQ8SVJlY2VudFB1cmNoYXNlW10+KFwiL3Jlc3QvcHVyY2hhc2VzL3JlY2VudFwiKTtcbiAgICAgICAgICAgICAgICBzZXRQdXJjaGFzZXMocHVyY2hhc2VzKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihcIkVycm9yIGZldGNoaW5nIHJlY2VudCBwdXJjaGFzZXNcIik7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldEhhc0xvYWRlZCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoUHVyY2hhc2VzKCk7XG4gICAgfSwgW3NldEhhc0xvYWRlZCwgc2V0UHVyY2hhc2VzXSk7XG5cbiAgICBsZXQgY29udGVudDtcbiAgICBpZiAoIWhhc0xvYWRlZCkge1xuICAgICAgICBjb250ZW50ID0gPFByZWxvYWRlckNpcmMgLz47XG4gICAgfSBlbHNlIGlmIChwdXJjaGFzZXMpIHtcbiAgICAgICAgY29udGVudCA9IChcbiAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXsgW1wiRGF0ZVwiLCBcIlN0b3JlXCIsIFwiTmFtZSBhbmQgVHlwZVwiLCBcIlByb2R1Y2VyXCIsIFwiUmVnaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJQcmljZVwiLCBpc051bUNvbDogdHJ1ZX0sIHtuYW1lOiBcIlF1YW50aXR5XCIsIGlzTnVtQ29sOiB0cnVlfV0gfVxuICAgICAgICAgICAgICAgIGNvbmRlbnNlZD17IGZhbHNlIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7IHB1cmNoYXNlcy5tYXAoKHB1cmNoYXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXsgcHVyY2hhc2UuaWQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZUNlbGwgZGF0ZT17IHB1cmNoYXNlLmRhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJNTU0gZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDZWxsIHRleHQ9eyBwdXJjaGFzZS5zdG9yZSB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hbWVBbmRUeXBlQ2VsbCBpZD17IHB1cmNoYXNlLndpbmVJZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyBwdXJjaGFzZS53aW5lTmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmVUeXBlPXsgcHVyY2hhc2Uud2luZVR5cGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y2VyQ2VsbCBpZD17IHB1cmNoYXNlLnByb2R1Y2VySWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsgcHVyY2hhc2UucHJvZHVjZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlZ2lvbkNlbGwgaWQ9eyBwdXJjaGFzZS5yZWdpb25JZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyBwdXJjaGFzZS5yZWdpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlQ2VsbCBwcmljZT17IHB1cmNoYXNlLnByaWNlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtQ2VsbCBudW09eyBwdXJjaGFzZS5xdWFudGl0eSB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudCA9IDxoNiBjbGFzc05hbWU9XCJib2xkXCI+Tm8gcHVyY2hhc2VzIHlldDwvaDY+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8R3JlZW5DYXJkIHRpdGxlPVwiUmVjZW50IHB1cmNoYXNlc1wiPlxuICAgICAgICAgICAgeyBjb250ZW50IH1cbiAgICAgICAgPC9HcmVlbkNhcmQ+XG4gICAgKTtcbn1cblJlY2VudFB1cmNoYXNlcy5kaXNwbGF5TmFtZSA9IFwiUmVjZW50UHVyY2hhc2VzXCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZWRDYXJkIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2FyZHNcIjtcbmltcG9ydCB7IFdpbmVUeXBlQ2VsbCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCB7IFRvcEVudGl0eSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RvcEVudGl0eVwiO1xuaW1wb3J0IHsgZ2V0VG9wV2luZVR5cGVzIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0QXBpXCI7XG5cbmV4cG9ydCBjb25zdCBUb3BXaW5lVHlwZXM6IFJlYWN0LkZDPHt9PiA9IChfKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlZENhcmQgdGl0bGU9XCJUb3Agd2luZSB0eXBlc1wiPlxuICAgICAgICAgICAgPFRvcEVudGl0eSBuYW1lPVwiV2luZSBUeXBlXCJcbiAgICAgICAgICAgICAgICBFbnRpdHlDZWxsPXsgV2luZVR5cGVDZWxsIH1cbiAgICAgICAgICAgICAgICBmZXRjaEVudGl0eT17IGdldFRvcFdpbmVUeXBlcyB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L1JlZENhcmQ+XG4gICAgKTtcbn1cblRvcFdpbmVUeXBlcy5kaXNwbGF5TmFtZSA9IFwiVG9wV2luZVR5cGVzXCI7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBvbkxvYWQgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwiLi4vLi4vbGliL3dpZGdldHNcIjtcbmltcG9ydCB7IEhvbWVBcHAgfSBmcm9tIFwiLi9Ib21lQXBwXCI7XG5cbm9uTG9hZCgoKSA9PiB7XG4gICAgbmF2YmFyKCk7XG4gICAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQoSG9tZUFwcCksXG4gICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1jb250YWluZXJcIikpO1xufSk7XG4iLCJpbXBvcnQgeyByZWFkQ29va2llIH0gZnJvbSBcIi4vQ29va2llc1wiO1xuaW1wb3J0IHsgSURpY3QsIGlzRW1wdHkgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBIRUFERVJTID0ge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiWC1DU1JGVG9rZW5cIjogcmVhZENvb2tpZShcImNzcmZ0b2tlblwiKSB8fCBcIlwiLFxufTtcblxuZXhwb3J0IHR5cGUgSVF1ZXJ5UGFyYW1zID0gSURpY3Q8c3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj47XG5cbmZ1bmN0aW9uIGVuY29kZVBhcmFtcyhwYXJhbXM6IElRdWVyeVBhcmFtcyk6IHN0cmluZyB7XG4gICAgaWYgKGlzRW1wdHkocGFyYW1zKSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiP1wiICsgT2JqZWN0LmVudHJpZXMocGFyYW1zKS5tYXAoKFtrLCB2XSkgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGspfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2KX1gKS5qb2luKFwiJlwiKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlSnNvbihvYmo6IG9iamVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlY29kZUpzb25JZkFueShyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICBpZiAocGFyc2VGbG9hdChyZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtbGVuZ3RoXCIpID8/IFwiMFwiKSA+IDBcbiAgICAgICAgJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIikgPT09IFwiYXBwbGljYXRpb24vanNvblwiKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxufVxuXG50eXBlIFZpbm90ZWNhRXJyb3IgPVxuICAgIHwge1wiTm90Rm91bmRcIjogc3RyaW5nfVxuICAgIHwge1wiSW50ZXJuYWxcIjogc3RyaW5nfVxuICAgIHwge1wiTWlzc2luZ0NvbnN0cmFpbnRcIjogc3RyaW5nfVxuICAgIHwge1wiQmFkUmVxdWVzdFwiOiBzdHJpbmd9O1xuXG5mdW5jdGlvbiBpc1Zpbm90ZWNhRXJyb3Iob2JqOiBvYmplY3QpOiBvYmogaXMgVmlub3RlY2FFcnJvciB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgcmV0dXJuIGtleXMubGVuZ3RoID09PSAxXG4gICAgICAgICYmIFtcIk5vdEZvdW5kXCIsIFwiSW50ZXJuYWxcIiwgXCJNaXNzaW5nQ29uc3RyYWludFwiLCBcIkJhZFJlcXVlc3RcIl1cbiAgICAgICAgICAgIC5maW5kKChpKSA9PiBpID09PSBrZXlzWzBdKSAhPT0gdW5kZWZpbmVkO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlOiBSZXNwb25zZSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDMxMCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgZGVjb2RlSnNvbklmQW55KHJlc3BvbnNlKTtcbiAgICAgICAgaWYgKGlzVmlub3RlY2FFcnJvcihtZXNzYWdlKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYCR7T2JqZWN0LmtleXMobWVzc2FnZSlbMF19OiAke09iamVjdC52YWx1ZXMobWVzc2FnZSlbMF19YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVKc29uSWZBbnkocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBFcnJvcihhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBNYWtlcyBhbiBIVFRQIEdFVCByZXF1ZXN0IHRvIHRoZSB1cmwgd2l0aCB0aGUgb3B0aW9uYWwgcGFyYW1ldGVycywgdGhlbiBwYXJzZXNcbiAqIHRoZSBKU09OIHJlc3BvbnNlLlxuICogQHBhcmFtIHVybCBBIFVSTCB0byByZXF1ZXN0XG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9wdGlvbmFsIGRpY3Rpb25hcnkgb2YgcGFyYW1ldGVycyB0byB0aGVpciB2YWx1ZXNcbiAqIEByZXR1cm5zIHBhcnNlZCBKU09OIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXQ8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcykpO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhbiBIVFRQIFBPU1QgcmVxdWVzdCB0byB0aGUgdXJsIHdpdGggdGhlIG9wdGlvbmFsIHBhcmFtZXRlcnMgY29udGFpbmluZ1xuICogdGhlIGJvZHksIHRoZW4gcGFyc2VzIHRoZSBKU09OIHJlc3BvbnNlLlxuICogQHBhcmFtIHVybCBBIFVSTCB0byByZXF1ZXN0XG4gKiBAcGFyYW0gYm9keSBKU09OIG9iamVjdCB0byBlbmNvZGUgYW5kIHNlbmQgdG8gdGhlIHNlcnZlclxuICogQHBhcmFtIHBhcmFtcyBBbiBvcHRpb25hbCBkaWN0aW9uYXJ5IG9mIHBhcmFtZXRlcnMgdG8gdGhlaXIgdmFsdWVzXG4gKiBAcmV0dXJucyBwYXJzZWQgSlNPTiByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGJvZHk6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBlbmNvZGVKc29uKGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RGb3JtPFJlc3BvbnNlPih1cmw6IHN0cmluZywgZm9ybTogRm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBmb3JtLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhbiBIVFRQIFBVVCByZXF1ZXN0IHRvIHRoZSB1cmwgd2l0aCB0aGUgb3B0aW9uYWwgcGFyYW1ldGVycyBjb250YWluaW5nXG4gKiB0aGUgYm9keSwgdGhlbiBwYXJzZXMgdGhlIEpTT04gcmVzcG9uc2UuXG4gKiBAcGFyYW0gdXJsIEEgVVJMIHRvIHJlcXVlc3RcbiAqIEBwYXJhbSBib2R5IEpTT04gb2JqZWN0IHRvIGVuY29kZSBhbmQgc2VuZCB0byB0aGUgc2VydmVyXG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9wdGlvbmFsIGRpY3Rpb25hcnkgb2YgcGFyYW1ldGVycyBhbmQgdGhlaXIgdmFsdWVzXG4gKiBAcmV0dXJucyBwYXJzZWQgSlNPTiByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHV0PFJlc3BvbnNlPih1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGVuY29kZUpzb24oYm9keSksXG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXRGb3JtPFJlc3BvbnNlPih1cmw6IHN0cmluZywgZm9ybTogRm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGZvcm0sXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXRjaDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGJvZHk6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXM9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZW5jb2RlSnNvbihib2R5KSxcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlXzxSZXNwb25zZT4odXJsOiBzdHJpbmcsIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuIiwiY29uc3QgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQ3JlYXRlIG9yIHVwZGF0ZSBhIGNvb2tpZVxuICogQHBhcmFtIG5hbWUgbmFtZS9rZXkgb2YgdGhlIGNvb2tpZVxuICogQHBhcmFtIHZhbHVlIHZhbHVlIHRvIHN0b3JlXG4gKiBAcGFyYW0gZGF5cyBudW1iZXIgb2YgZGF5cyB0aGUgY29va2llIGlzIHZhbGlkLCBkZWZhdWx0cyB0byB0aGUgY3VycmVudCBzZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb29raWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBkYXlzPzogbnVtYmVyKSB7XG4gICAgbGV0IGV4cGlyZXM7XG4gICAgaWYgKGRheXMpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogTUlMTElTRUNPTkRTX0lOX0RBWSkpO1xuICAgICAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZXhwaXJlcyA9IFwiXCI7XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRDb29raWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XG4gICAgZm9yIChsZXQgYyBvZiBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpKSB7XG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGMgPSBjLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cihuYW1lRVEubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNvb2tpZShuYW1lOiBzdHJpbmcpIHtcbiAgICBjcmVhdGVDb29raWUobmFtZSwgXCJcIiwgLTEpO1xufVxuIiwiaW1wb3J0IHsgcG9zdCB9IGZyb20gXCIuL0FwaUhlbHBlclwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwiLi93aWRnZXRzXCI7XG5cbi8qKiBQcm92aWRlcyBsb2dnaW5nIGZ1bmN0aW9uYWxpdHkgZm9yIGNsaWVudC1zaWRlIEphdmFTY3JpcHQgZXJyb3JzLiAqL1xuZW51bSBMb2dMZXZlbCB7XG4gICAgQ3JpdGljYWwgPSBcImNyaXRpY2FsXCIsXG4gICAgRXJyb3IgPSBcImVycm9yXCIsXG4gICAgV2FybmluZyA9IFwid2FybmluZ1wiLFxuICAgIEluZm8gPSBcImluZm9cIixcbiAgICBEZWJ1ZyA9IFwiZGVidWdcIixcbn1cblxuaW50ZXJmYWNlIElMb2dSZXN1bHQge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG4gICAgLyoqXG4gICAgICogTG9nZ2luZyBjbGFzcyBmb3IgY2xpZW50LXNpZGUgZXJyb3JzIHRoYXQgd2lsbCBiZSBwb3N0ZWQgdG8gdGhlIHNlcnZlclxuICAgICAqIGZvciBsb2dnaW5nIHRvIHRoZSBzYW1lIGZpbGUgYXMgYWxsIG90aGVyIHZpbm90ZWNhIGxvZ3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbW9kdWxlIHRoZSBuYW1lIG9mIHRoZSBtb2R1bGUgZnJvbSB3aGljaCB0aGUgbG9nIG1lc3NhZ2VzIG9yaWdpbmF0ZS5cbiAgICAgKiBAcGFyYW0gdG9Db25zb2xlIHdoZXRoZXIgdG8gYWxzbyBwcmludCBtZXNzYWdlcyB0byB0aGUgY29uc29sZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kdWxlOiBzdHJpbmcsIHByaXZhdGUgdG9Db25zb2xlID0gZmFsc2UpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZWFudCBmb3IgaXJyZWNvdmVyYWJsZSBvciB0cnVseSBleGNlcHRpb25hbCBlcnJvcnMuIEEgdG9hc3Qgd2l0aCB0aGVcbiAgICAgKiBsb2cgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIGxvZyB3aWxsIGJlIHNlbnQgYmFjayB0byB0aGUgc2VydmVyXG4gICAgICogZm9yIHBvc3Rlcml0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nQ3JpdGljYWwobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gTG9nTGV2ZWwuQ3JpdGljYWw7XG4gICAgICAgIHRoaXMudG9hc3QobGV2ZWwsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgdG9hc3Qgd2l0aCB0aGUgbG9nIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSBsb2cgd2lsbCBiZSBzZW50XG4gICAgICogYmFjayB0byB0aGUgc2VydmVyIGZvciBwb3N0ZXJpdHkuXG4gICAgICovXG4gICAgcHVibGljIGxvZ0Vycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IExvZ0xldmVsLkVycm9yO1xuICAgICAgICB0aGlzLnRvYXN0KGxldmVsLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHRvYXN0IHdpdGggdGhlIGxvZyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgbG9nIHdpbGwgYmUgc2VudFxuICAgICAqIGJhY2sgdG8gdGhlIHNlcnZlciBmb3IgcG9zdGVyaXR5LlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dXYXJuaW5nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IExvZ0xldmVsLldhcm5pbmc7XG4gICAgICAgIHRoaXMudG9hc3QobGV2ZWwsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dJbmZvKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2coTG9nTGV2ZWwuSW5mbywgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ0RlYnVnKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2coTG9nTGV2ZWwuRGVidWcsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbG9nKGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnRvQ29uc29sZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bGV2ZWwudG9VcHBlckNhc2UoKX0gJHtuZXcgRGF0ZSgpfSAke3RoaXMubW9kdWxlfTogJHttZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBJTG9nUmVzdWx0ID0gYXdhaXQgcG9zdChcIi9yZXN0L2xvZ3NcIiwge1xuICAgICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlIGluc3RhbmNlb2YgT2JqZWN0ID8gXCJcIiA6IG1lc3NhZ2UsXG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMubW9kdWxlLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0KExvZ0xldmVsLkVycm9yLCBcIkZhaWxlZCB0byBzZW5kIGNsaWVudC1zaWRlIGxvZ3MgdG8gc2VydmVyLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdG9hc3QobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdG9hc3QoYCR7bGV2ZWwudG9VcHBlckNhc2UoKX06ICR7bWVzc2FnZX1gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBkZWxldGVfLCBnZXQsIElRdWVyeVBhcmFtcywgcGF0Y2gsIHBvc3QsIHBvc3RGb3JtLCBwdXQsIHB1dEZvcm0gfSBmcm9tIFwiLi9BcGlIZWxwZXJcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4vTG9nZ2VyXCI7XG5pbXBvcnQgeyBJQ29sb3IsIElHcmFwZSwgSUdyYXBlRm9ybSwgSU1vc3RDb21tb25QdXJjaGFzZURhdGUsIElQcm9kdWNlciwgSVByb2R1Y2VyRm9ybSwgSVB1cmNoYXNlLFxuICAgICAgICAgSVB1cmNoYXNlQ291bnQsIElQdXJjaGFzZUZvcm0sIElSZWdpb24sIElSZWdpb25Gb3JtLCBJU3RvcmUsIElTdG9yZUZvcm0sIElUb3BFbnRpdHksXG4gICAgICAgICBJVG90YWxMaXRlcnMsIElWaXRpQXJlYSwgSVZpdGlBcmVhRm9ybSwgSVZpdGlBcmVhU3RhdHMsIElXaW5lLCBJV2luZUNvdW50LCBJV2luZUZvcm0sXG4gICAgICAgICBJV2luZUdyYXBlLCBJV2luZUdyYXBlc0Zvcm0sIElXaW5lUGF0Y2hGb3JtLCBJV2luZVR5cGUsIElXaW5lVHlwZUZvcm0gfSBmcm9tIFwiLi9SZXN0XCI7XG5pbXBvcnQgeyBJUmVzdE1vZGVsIH0gZnJvbSBcIi4vUmVzdFR5cGVzXCI7XG5pbXBvcnQgeyBJRGljdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RpY3QobW9kZWxzOiBJUmVzdE1vZGVsW10pOiBJRGljdDxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3QgcmVzdWx0OiBJRGljdDxzdHJpbmcgfCBudWxsPiA9IHt9O1xuICAgIG1vZGVscy5mb3JFYWNoKChtb2RlbCkgPT4ge1xuICAgICAgICByZXN1bHRbbW9kZWwubmFtZV0gPSBudWxsO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjbGFzcyBFbXB0eVJlc3VsdEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIHB1YmxpYyBzdGF0aWMgaXNJbnN0YW5jZShlcnI6IEVycm9yKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBlcnIubmFtZSA9PT0gdGhpcy5OQU1FO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIE5BTUUgPSBcIkVtcHR5UmVzdWx0RXJyb3JcIjtcblxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gRW1wdHlSZXN1bHRFcnJvci5OQU1FO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9uTnVsbHMob2JqOiBJRGljdDxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgdW5kZWZpbmVkPik6IElRdWVyeVBhcmFtcyB7XG4gICAgY29uc3QgcTogSVF1ZXJ5UGFyYW1zID0ge307XG4gICAgT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoKGspID0+IEJvb2xlYW4ob2JqW2tdKSkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICBxW2tdID0gb2JqW2tdIGFzIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG4gICAgfSk7XG4gICAgcmV0dXJuIHE7XG59XG5cbmZ1bmN0aW9uIHNpbmdsZUVudGl0eUdldHRlcjxQYXJhbXMsIFJlc3A+KFxuICAgIGxpc3RHZXR0ZXI6IChwYXJhbXM6IFBhcmFtcykgPT4gUHJvbWlzZTxSZXNwW10+LFxuKTogKHBhcmFtczogUGFyYW1zKSA9PiBQcm9taXNlPFJlc3A+IHtcbiAgICAvLyBTaGF2ZSBvZmYgJ2dldCdcbiAgICBjb25zdCBvYmpOYW1lID0gbGlzdEdldHRlci5uYW1lLnN1YnN0cigzKTtcbiAgICByZXR1cm4gYXN5bmMgKHBhcmFtczogUGFyYW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBsaXN0R2V0dGVyKHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgUmVjZWl2ZWQgbW9yZSB0aGFuIG9uZSAke29iak5hbWV9IHJlc3VsdCB3aGVuIG9uZSB3YXMgZXhwZWN0ZWRgO1xuICAgICAgICAgICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihcIlJlc3RBcGlcIik7XG4gICAgICAgICAgICBsb2dnZXIubG9nRXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRPckNyZWF0ZTxSZXFQYXJhbXMsIFJlc3AsIEZvcm0+KFxuICAgIGxpc3RHZXR0ZXI6IChwYXJhbXM6IFJlcVBhcmFtcykgPT4gUHJvbWlzZTxSZXNwW10+LFxuICAgIGNyZWF0b3I6IChmb3JtOiBGb3JtKSA9PiBQcm9taXNlPFJlc3A+LFxuKTogKHBhcmFtczogUmVxUGFyYW1zLCBmb3JtOiBGb3JtKSA9PiBQcm9taXNlPFJlc3A+IHtcbiAgICBjb25zdCBvYmpOYW1lID0gbGlzdEdldHRlci5uYW1lLnN1YnN0cigzKTtcbiAgICByZXR1cm4gYXN5bmMgKHBhcmFtcywgZm9ybSkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgbGlzdEdldHRlcihwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld09iaiA9IGF3YWl0IGNyZWF0b3IoZm9ybSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFJlY2VpdmVkIG1vcmUgdGhhbiBvbmUgJHtvYmpOYW1lfSByZXN1bHQgd2hlbiBvbmUgd2FzIGV4cGVjdGVkYDtcbiAgICAgICAgbmV3IExvZ2dlcihcIlJlc3RBcGlcIikubG9nRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIHRocm93IEVycm9yKG1lc3NhZ2UpO1xuICAgIH07XG59XG5cbi8qIENPTE9SUyAqL1xuaW50ZXJmYWNlIElHZXRDb2xvclBhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbG9ycyh7IGlkLCBuYW1lIH06IElHZXRDb2xvclBhcmFtcyk6IFByb21pc2U8SUNvbG9yW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSB9KTtcbiAgICBjb25zdCBjb2xvcnM6IElDb2xvcltdID0gYXdhaXQgZ2V0KFwiL3Jlc3QvY29sb3JzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIGlmIChjb2xvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFbXB0eVJlc3VsdEVycm9yKFwiRW1wdHkgcmVzdWx0IHJldHVybmVkIGZvciBjb2xvclwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9ycztcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvbG9yID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldENvbG9ycyk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BDb2xvcnMoKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvY29sb3JzL3RvcFwiKTtcbn1cblxuLyogR1JBUEVTICovXG5pbnRlcmZhY2UgSUdldEdyYXBlc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyYXBlcyh7IGlkLCBuYW1lIH06IElHZXRHcmFwZXNQYXJhbXMpOiBQcm9taXNlPElHcmFwZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUgfSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L2dyYXBlc1wiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEdyYXBlID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldEdyYXBlcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVHcmFwZSA9IGdldE9yQ3JlYXRlKGdldEdyYXBlcywgY3JlYXRlR3JhcGUpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR3JhcGUoZ3JhcGU6IElHcmFwZUZvcm0pOiBQcm9taXNlPElHcmFwZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvZ3JhcGVzXCIsIGdyYXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdyYXBlKGlkOiBudW1iZXIsIGdyYXBlOiBJR3JhcGVGb3JtKTogUHJvbWlzZTxJR3JhcGU+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9ncmFwZXMvJHtpZH1gLCBncmFwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BHcmFwZXMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvZ3JhcGVzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogUFJPRFVDRVJTICovXG5pbnRlcmZhY2UgSUdldFByb2R1Y2Vyc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICByZWdpb25JZD86IG51bWJlcjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lLWxlbmd0aFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y2Vycyh7aWQsIG5hbWUsIHJlZ2lvbklkfTogSUdldFByb2R1Y2Vyc1BhcmFtcyk6IFByb21pc2U8SVByb2R1Y2VyW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2lkLCBuYW1lLCByZWdpb25faWQ6IHJlZ2lvbklkfSk7XG4gICAgY29uc3QgcHJvZHVjZXJzOiBJUHJvZHVjZXJbXSA9IGF3YWl0IGdldChcIi9yZXN0L3Byb2R1Y2Vyc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gcHJvZHVjZXJzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjZXIgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0UHJvZHVjZXJzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVByb2R1Y2VyID0gZ2V0T3JDcmVhdGUoZ2V0UHJvZHVjZXJzLCBjcmVhdGVQcm9kdWNlcik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWNlcihwcm9kdWNlcjogSVByb2R1Y2VyRm9ybSk6IFByb21pc2U8SVByb2R1Y2VyPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9wcm9kdWNlcnNcIiwgcHJvZHVjZXIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZHVjZXIocHJvZHVjZXI6IElQcm9kdWNlcik6IFByb21pc2U8SVByb2R1Y2VyPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3QvcHJvZHVjZXJzLyR7cHJvZHVjZXIuaWR9YCwgcHJvZHVjZXIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjZXIoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBkZWxldGVfKGAvcmVzdC9wcm9kdWNlcnMvJHtpZH1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFByb2R1Y2VycyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wcm9kdWNlcnMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBQVVJDSEFTRVMgKi9cbmludGVyZmFjZSBJR2V0UHVyY2hhc2VzUGFyYW1zIHtcbiAgICB3aW5lSWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQdXJjaGFzZXMoe3dpbmVJZH06IElHZXRQdXJjaGFzZXNQYXJhbXMpOiBQcm9taXNlPElQdXJjaGFzZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgd2luZV9pZDogd2luZUlkIH0pO1xuICAgIGNvbnN0IHB1cmNoYXNlcyA9IGF3YWl0IGdldDxJUHVyY2hhc2VbXT4oXCIvcmVzdC9wdXJjaGFzZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHB1cmNoYXNlcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVB1cmNoYXNlKHB1cmNoYXNlOiBJUHVyY2hhc2VGb3JtKTogUHJvbWlzZTxJUHVyY2hhc2U+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3B1cmNoYXNlc1wiLCBwdXJjaGFzZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQdXJjaGFzZShpZDogbnVtYmVyLCBwdXJjaGFzZTogSVB1cmNoYXNlRm9ybSk6IFByb21pc2U8SVB1cmNoYXNlPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3QvcHVyY2hhc2VzLyR7aWR9YCwgcHVyY2hhc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHVyY2hhc2UoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBkZWxldGVfKGAvcmVzdC9wdXJjaGFzZXMvJHtpZH1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vc3RDb21tb25QdXJjaGFzZURhdGUoKTogUHJvbWlzZTxJTW9zdENvbW1vblB1cmNoYXNlRGF0ZT4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wdXJjaGFzZXMvbW9zdC1jb21tb24tcHVyY2hhc2UtZGF0ZVwiKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvdGFsTGl0ZXJzKCk6IFByb21pc2U8SVRvdGFsTGl0ZXJzPiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3B1cmNoYXNlcy90b3RhbC1saXRlcnNcIik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQdXJjaGFzZUNvdW50KCk6IFByb21pc2U8SVB1cmNoYXNlQ291bnQ+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHVyY2hhc2VzL2NvdW50XCIpO1xufVxuXG4vKiBSRUdJT05TICovXG5pbnRlcmZhY2UgSUdldFJlZ2lvblBhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBwcm9kdWNlck5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWdpb25zKHsgaWQsIG5hbWUsIHByb2R1Y2VyTmFtZSB9OiBJR2V0UmVnaW9uUGFyYW1zKTogUHJvbWlzZTxJUmVnaW9uW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSwgcHJvZHVjZXJfbmFtZTogcHJvZHVjZXJOYW1lIH0pO1xuICAgIGNvbnN0IHJlZ2lvbnM6IElSZWdpb25bXSA9IGF3YWl0IGdldChcIi9yZXN0L3JlZ2lvbnNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHJlZ2lvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZWdpb24gPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0UmVnaW9ucyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVSZWdpb24gPSBnZXRPckNyZWF0ZShnZXRSZWdpb25zLCBjcmVhdGVSZWdpb24pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVnaW9uKHJlZ2lvbjogSVJlZ2lvbkZvcm0pOiBQcm9taXNlPElSZWdpb24+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3JlZ2lvbnNcIiwgcmVnaW9uKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVJlZ2lvbihyZWdpb246IElSZWdpb24pOiBQcm9taXNlPElSZWdpb24+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9yZWdpb25zLyR7cmVnaW9uLmlkfWAsIHJlZ2lvbik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BSZWdpb25zKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3JlZ2lvbnMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBTVE9SRVMgKi9cbmludGVyZmFjZSBJR2V0U3RvcmVQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdG9yZXMoe2lkLCBuYW1lfTogSUdldFN0b3JlUGFyYW1zKTogUHJvbWlzZTxJU3RvcmVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7aWQsIG5hbWV9KTtcbiAgICBjb25zdCBzdG9yZXM6IElTdG9yZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvc3RvcmVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiBzdG9yZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdG9yZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRTdG9yZXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlU3RvcmUgPSBnZXRPckNyZWF0ZShnZXRTdG9yZXMsIGNyZWF0ZVN0b3JlKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHN0b3JlOiBJU3RvcmVGb3JtKTogUHJvbWlzZTxJU3RvcmU+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3N0b3Jlc1wiLCBzdG9yZSk7XG59XG5cbi8qIFZJVEkgQVJFQVMgKi9cbmludGVyZmFjZSBJR2V0Vml0aUFyZWFzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHJlZ2lvbk5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWaXRpQXJlYXMoXG4gICAgeyBpZCwgbmFtZSwgcmVnaW9uTmFtZSB9OiBJR2V0Vml0aUFyZWFzUGFyYW1zLFxuKTogUHJvbWlzZTxJVml0aUFyZWFbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lLCByZWdpb25fbmFtZTogcmVnaW9uTmFtZSB9KTtcbiAgICBjb25zdCB2aXRpQXJlYXM6IElWaXRpQXJlYVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvdml0aS1hcmVhc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gdml0aUFyZWFzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Vml0aUFyZWEgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0Vml0aUFyZWFzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVZpdGlBcmVhID0gZ2V0T3JDcmVhdGUoZ2V0Vml0aUFyZWFzLCBjcmVhdGVWaXRpQXJlYSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVWaXRpQXJlYSh2aXRpQXJlYTogSVZpdGlBcmVhRm9ybSk6IFByb21pc2U8SVZpdGlBcmVhPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC92aXRpLWFyZWFzXCIsIHZpdGlBcmVhKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVZpdGlBcmVhKHZpdGlBcmVhOiBJVml0aUFyZWEpOiBQcm9taXNlPElWaXRpQXJlYT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3ZpdGktYXJlYXMvJHt2aXRpQXJlYS5pZH1gLCB2aXRpQXJlYSk7XG59XG5cbmludGVyZmFjZSBJR2V0Vml0aUFyZWFTdGF0c1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgcmVnaW9uSWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWaXRpQXJlYVN0YXRzKFxuICAgIHsgaWQsIHJlZ2lvbklkIH06IElHZXRWaXRpQXJlYVN0YXRzUGFyYW1zLFxuKTogUHJvbWlzZTxJVml0aUFyZWFTdGF0c1tdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIHJlZ2lvbl9pZDogcmVnaW9uSWQgfSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3ZpdGktYXJlYXMvc3RhdHNcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BWaXRpQXJlYXMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvdml0aS1hcmVhcy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFdJTkVTICovXG5pbnRlcmZhY2UgSUdldFdpbmVzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBwcm9kdWNlcklkPzogbnVtYmVyO1xuICAgIHJlZ2lvbklkPzogbnVtYmVyO1xuICAgIHZpdGlBcmVhSWQ/OiBudW1iZXI7XG4gICAgd2luZVR5cGVJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVzKFxuICAgIHsgaWQsIHByb2R1Y2VySWQsIHJlZ2lvbklkLCB2aXRpQXJlYUlkLCB3aW5lVHlwZUlkIH06IElHZXRXaW5lc1BhcmFtcyxcbik6IFByb21pc2U8SVdpbmVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7XG4gICAgICAgIGlkLCByZWdpb25faWQ6IHJlZ2lvbklkLCBwcm9kdWNlcl9pZDogcHJvZHVjZXJJZCxcbiAgICAgICAgdml0aV9hcmVhX2lkOiB2aXRpQXJlYUlkLCB3aW5lX3R5cGVfaWQ6IHdpbmVUeXBlSWQsXG4gICAgfSk7XG4gICAgY29uc3Qgd2luZXM6IElXaW5lW10gPSBhd2FpdCBnZXQoXCIvcmVzdC93aW5lc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gd2luZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRXaW5lID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFdpbmVzKTtcblxuY29uc3QgY3JlYXRlV2luZUh0dHBGb3JtID0gKHdpbmU6IElXaW5lRm9ybSwgZmlsZTogRmlsZSB8IG51bGwpID0+IHtcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybS5hcHBlbmQoXCJ3aW5lX2Zvcm1cIiwgbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KHdpbmUpXSwge3R5cGU6IFwiYXBwbGljYXRpb24vanNvblwifSkpO1xuICAgIGlmIChmaWxlKSB7XG4gICAgICAgIGZvcm0uYXBwZW5kKFwiaW1hZ2VcIiwgZmlsZSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmUod2luZTogSVdpbmVGb3JtLCBmaWxlOiBGaWxlIHwgbnVsbCk6IFByb21pc2U8SVdpbmU+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlV2luZUh0dHBGb3JtKHdpbmUsIGZpbGUpO1xuICAgIHJldHVybiBwb3N0Rm9ybShcIi9yZXN0L3dpbmVzXCIsIGZvcm0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2luZShpZDogbnVtYmVyLCB3aW5lOiBJV2luZUZvcm0sIGZpbGU6IEZpbGUgfCBudWxsKTogUHJvbWlzZTxJV2luZT4ge1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVXaW5lSHR0cEZvcm0od2luZSwgZmlsZSk7XG4gICAgcmV0dXJuIHB1dEZvcm0oYC9yZXN0L3dpbmVzLyR7aWR9YCwgZm9ybSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXJ0VXBkYXRlV2luZShpZDogbnVtYmVyLCB3aW5lOiBJV2luZVBhdGNoRm9ybSk6IFByb21pc2U8SVdpbmU+IHtcbiAgICByZXR1cm4gcGF0Y2goYC9yZXN0L3dpbmVzLyR7aWR9YCwgd2luZSk7XG59XG5cbmludGVyZmFjZSBJU2VhcmNoV2luZXNQYXJhbXMge1xuICAgIGNvbG9yTGlrZT86IHN0cmluZztcbiAgICB3aW5lVHlwZUxpa2U/OiBzdHJpbmc7XG4gICAgcHJvZHVjZXJMaWtlPzogc3RyaW5nO1xuICAgIHJlZ2lvbkxpa2U/OiBzdHJpbmc7XG4gICAgdml0aUFyZWFMaWtlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoV2luZXMoXG4gICAgeyBjb2xvckxpa2UsIHdpbmVUeXBlTGlrZSwgcHJvZHVjZXJMaWtlLCByZWdpb25MaWtlLCB2aXRpQXJlYUxpa2UgfTogSVNlYXJjaFdpbmVzUGFyYW1zLFxuKTogUHJvbWlzZTxJV2luZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtcbiAgICAgICAgY29sb3JfbGlrZTogY29sb3JMaWtlLCB3aW5lX3R5cGVfbGlrZTogd2luZVR5cGVMaWtlLCBwcm9kdWNlcl9saWtlOiBwcm9kdWNlckxpa2UsXG4gICAgICAgIHJlZ2lvbl9saWtlOiByZWdpb25MaWtlLCB2aXRpX2FyZWFfbGlrZTogdml0aUFyZWFMaWtlLFxuICAgIH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC93aW5lcy9zZWFyY2hcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lVmFyaWV0aWVzKCk6IFByb21pc2U8SVdpbmVDb3VudD4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC93aW5lcy9jb3VudFwiKTtcbn1cblxuLyogV0lORSBHUkFQRVMgKi9cbmludGVyZmFjZSBJR2V0V2luZUdyYXBlc1BhcmFtcyB7XG4gICAgd2luZUlkPzogbnVtYmVyO1xuICAgIGdyYXBlSWQ/OiBudW1iZXI7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZS1sZW5ndGhcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lR3JhcGVzKHsgd2luZUlkLCBncmFwZUlkIH06IElHZXRXaW5lR3JhcGVzUGFyYW1zKTogUHJvbWlzZTxJV2luZUdyYXBlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyB3aW5lX2lkOiB3aW5lSWQsIGdyYXBlX2lkOiBncmFwZUlkIH0pO1xuICAgIGNvbnN0IHdpbmVHcmFwZXM6IElXaW5lR3JhcGVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3dpbmUtZ3JhcGVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB3aW5lR3JhcGVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZUdyYXBlcyh3aW5lR3JhcGVzOiBJV2luZUdyYXBlc0Zvcm0pOiBQcm9taXNlPElXaW5lR3JhcGVbXT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvd2luZS1ncmFwZXNcIiwgd2luZUdyYXBlcyk7XG59XG5cbi8qIFdJTkUgVFlQRVMgKi9cbmludGVyZmFjZSBJR2V0V2luZVR5cGVzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZVR5cGVzKHsgaWQsIG5hbWUgfTogSUdldFdpbmVUeXBlc1BhcmFtcyk6IFByb21pc2U8SVdpbmVUeXBlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSB9KTtcbiAgICBjb25zdCB3aW5lVHlwZXM6IElXaW5lVHlwZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvd2luZS10eXBlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gd2luZVR5cGVzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0V2luZVR5cGUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0V2luZVR5cGVzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVdpbmVUeXBlID0gZ2V0T3JDcmVhdGUoZ2V0V2luZVR5cGVzLCBjcmVhdGVXaW5lVHlwZSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5lVHlwZSh3aW5lVHlwZTogSVdpbmVUeXBlRm9ybSk6IFByb21pc2U8SVdpbmVUeXBlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC93aW5lLXR5cGVzXCIsIHdpbmVUeXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdpbmVUeXBlKHdpbmVUeXBlOiBJV2luZVR5cGUpOiBQcm9taXNlPElXaW5lVHlwZT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3dpbmUtdHlwZXMvJHt3aW5lVHlwZS5pZH1gLCB3aW5lVHlwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BXaW5lVHlwZXMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvd2luZS10eXBlcy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG4iLCIvKiogQmFzaWMgdHlwZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSByZXNwb25zZSBKU09OIG9mIG1hbnkgYXN5bmNocm9ub3VzIHJlcXVlc3RzLiAqL1xuaW1wb3J0IHsgSVJlc3RNb2RlbCB9IGZyb20gXCIuL1Jlc3RUeXBlc1wiO1xuXG4vKipcbiAqIEtleS12YWx1ZSBzdG9yZSB3aGVyZSB0aGUga2V5IG11c3QgYmUgYSBzdHJpbmcsIGJ1dCB0aGUgdmFsdWUgaXMgb2YgYW55IHR5cGVcbiAqIFQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSURpY3Q8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIG9iamVjdHMgdG8gYSBzaW5nbGUgb2JqZWN0IG9mIG5hbWVzIHRvIG51bGwgZm9yIHVzZSB3aXRoIG1hdGVyaWFsaXplXG4gKiBhdXRvY29tcGxldGUuXG4gKiBAcGFyYW0gb2JqZWN0cyBBbiBhcnJheSBvZiBSRVNUIG1vZGVsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzdE1vZGVsc1RvTmFtZURpY3Qob2JqZWN0czogSVJlc3RNb2RlbFtdKTogSURpY3Q8bnVsbD4ge1xuICAgIGNvbnN0IGRpY3Q6IElEaWN0PG51bGw+ID0ge307XG4gICAgb2JqZWN0cy5tYXAoKG9iaikgPT4ge1xuICAgICAgICBkaWN0W29iai5uYW1lXSA9IG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpY3Q7XG59XG5cbi8qKlxuICogQ29udmVydHMgYW4gOC1kaWdpdCBudW1iZXIgb2YgZm9ybWF0ICd5eXl5bW1kZCcgdG8gYSBEYXRlIG9iamVjdC5cbiAqIEBwYXJhbSBudW0gYSBkYXRlIG51bWJlciBvZiBmb3JtYXQgJ3l5eXltbWRkJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbnVtVG9EYXRlKG51bTogbnVtYmVyKTogRGF0ZSB7XG4gICAgY29uc3Qgc3RyTnVtID0gYCR7bnVtfWA7XG4gICAgaWYgKHN0ck51bS5sZW5ndGggIT09IDgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBJbnZhbGlkIGRhdGUgbnVtYmVyICcke3N0ck51bX0nYCk7XG4gICAgfVxuICAgIGNvbnN0IHllYXIgPSBzdHJOdW0uc3Vic3RyKDAsIDQpO1xuICAgIGNvbnN0IG1vbnRoID0gc3RyTnVtLnN1YnN0cig0LCAyKTtcbiAgICBjb25zdCBkYXkgPSBzdHJOdW0uc3Vic3RyKDYsIDIpO1xuICAgIC8vIEpTIG1vbnRocyBhcmUgMC1iYXNlZFxuICAgIHJldHVybiBuZXcgRGF0ZShwYXJzZUludCh5ZWFyLCAxMCksIHBhcnNlSW50KG1vbnRoLCAxMCkgLSAxLCBwYXJzZUludChkYXksIDEwKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRlVG9OdW0oZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSAqIDEwXzAwMCArIChkYXRlLmdldE1vbnRoKCkgKyAxKSAqIDEwMCArIGRhdGUuZ2V0RGF0ZSgpO1xufVxuXG5leHBvcnQgY29uc3QgRU5fREFTSDogc3RyaW5nID0gXCLigJNcIjtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHZpbnRhZ2UgeWVhciwgd2hpY2ggaXMgdHdvIHllYXJzIHByaW9yIHRvIHRoZSBjdXJyZW50XG4gKiB5ZWFyLiBUaGlzIGZ1bmN0aW9uIGR1cGxpY2F0ZXMgdGhlIFB5dGhvbiBmdW5jdGlvblxuICogdmlub3RlY2EudXRpbHMuZGVmYXVsdF92aW50YWdlX3llYXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRWaW50YWdlWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhbiBvYmplY3QgaXMgZW1wdHksIGkuZS4gaGFzIG5vIGtleXMuXG4gKiBAcGFyYW0gb2JqIEFuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShvYmo6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHMgd2l0aCB0aGUgZmlyc3QgbGV0dGVyIGNhcGl0YWxpemVkLlxuICogQHBhcmFtIHMgQSBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzLmxlbmd0aCA+IDAgPyBzWzBdLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKSA6IFwiXCI7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBkaXNwbGF5IG5hbWUgdG8gYW4gaHRtbCBpZFxuICogQHBhcmFtIG5hbWUgQSBjb21wb25lbnQgZGlzcGxheSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYW1lVG9JZChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoLyhcXHMpKy9nLCBcIi1cIikudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgbWF4aW11bSBlbGVtZW50IGJ5IG9uZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgdHlwZSBvZiBlbGVtZW50XG4gKiBAcGFyYW0gYXJyIEFuIGFycmF5IG9mIG9iamNlY3RzXG4gKiBAcGFyYW0gYWNjZXNzb3IgQSBmdW5jdGlvbiBmb3IgYWNjZXNzaW5nIGEgbnVtYmVyIHByb3BlcnR5IG9mIHRoZSBvYmplY3RzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXhCeTxUPihhcnI6IFRbXSwgYWNjZXNzb3I6IChlbGVtOiBUKSA9PiBudW1iZXIpOiBUIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgbWF4RWxlbTogVCB8IHVuZGVmaW5lZDtcbiAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5O1xuICAgIGZvciAoY29uc3QgZWxlbSBvZiBhcnIpIHtcbiAgICAgICAgY29uc3QgdmFsID0gYWNjZXNzb3IoZWxlbSk7XG4gICAgICAgIGlmICh2YWwgPiBtYXhWYWwpIHtcbiAgICAgICAgICAgIG1heEVsZW0gPSBlbGVtO1xuICAgICAgICAgICAgbWF4VmFsID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXhFbGVtO1xufVxuXG4vKipcbiAqIFN1bXMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBieSBvbmUgb2YgdGhlIG9iamVjdHMnIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0gYXJyIEFuIGFycmF5IG9mIG9iamVjdHNcbiAqIEBwYXJhbSBhY2Nlc3NvciBBIGZ1bmN0aW9uIGZvciBhY2Nlc3Npbmcgb25lIG9mIHRoZSBvYmplY3RzJyBwcm9wZXJ0aWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdW1CeTxUPihhcnI6IFRbXSwgYWNjZXNzb3I6IChlbGVtOiBUKSA9PiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAoY29uc3QgZWxlbSBvZiBhcnIpIHtcbiAgICAgICAgc3VtICs9IGFjY2Vzc29yKGVsZW0pO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xufVxuXG4vKipcbiAqIENvbXBhcmVzIHR3byBvYmplY3RzIGZvciBkZWVwIGVxdWFsaXR5LlxuICogQHBhcmFtIGEgQW4gb2JqZWN0XG4gKiBAcGFyYW0gYiBBbiBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyZUVxdWFsKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBjb25zdCBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3QgayBvZiBhS2V5cykge1xuICAgICAgICBpZiAoYVtrXSAhPT0gYltrXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5pbnRlcmZhY2UgSVJhbmdlQXJncyB7XG4gICAgc3RhcnQ/OiBudW1iZXI7XG4gICAgc3RvcD86IG51bWJlcjtcbiAgICBzdGVwPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmFibGUgcmFuZ2Ugb2YgbnVtYmVyc29uQ2xpY2suXG4gKiBAcGFyYW0gc3RhcnQgRmlyc3QgbnVtYmVyIG9mIHRoZSByYW5nZVxuICogQHBhcmFtIHN0b3AgRW5kIG9mIHRoZSByYW5nZSAobm9uLWluY2x1c2l2ZSlcbiAqIEBwYXJhbSBzdGVwIEluY3JlbWVudCBvZiB0aGUgcmFuZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiByYW5nZSh7IHN0YXJ0LCBzdG9wLCBzdGVwIH06IElSYW5nZUFyZ3MpOiBJdGVyYWJsZUl0ZXJhdG9yPG51bWJlcj4ge1xuICAgIHN0ZXAgPSBzdGVwIHx8IDE7XG4gICAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICAgIHN0b3AgPSBzdG9wIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgICAgICB5aWVsZCBpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGltYWdlRXhpc3RzKGltYWdlVXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGltYWdlVXJsLCB7bWV0aG9kOiBcIkhFQURcIn0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2Uub2s7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lQW5kVHlwZShuYW1lOiBzdHJpbmcgfCBudWxsLCB3aW5lVHlwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7KG5hbWUgPyBuYW1lICsgXCIgXCIgOiBcIlwiKX0ke3dpbmVUeXBlfWA7XG59XG5cbi8vIFRPRE86IG1vdmUgdG8gdXNlIFJlYWN0IHJvdXRlciBvciBzb21ldGhpbmcgc2ltaWxhclxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0KHVybDogc3RyaW5nKSB7XG4gICAgbG9jYXRpb24uaHJlZiA9IHVybDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZChmdW46ICgpID0+IHZvaWQpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW4pO1xufVxuIiwiaW1wb3J0IHsgQXV0b2NvbXBsZXRlLCBEcm9wZG93biwgU2lkZW5hdiB9IGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCB7IElEaWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxudHlwZSBPbkNoYW5nZSA9IChlOiBzdHJpbmcpID0+IHZvaWQ7XG5cbi8qKiBTZXR1cCBhdXRvY29tcGxldGlvbiB3aXRoIHByb3ZpZGVkIGNvbXBsZXRpb24gb3B0aW9ucy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdXRvY29tcGxldGUoZWxlbTogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbnM6IElEaWN0PHN0cmluZyB8IG51bGw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogT25DaGFuZ2UsIG1pbkxlbmd0aCA9IDEsIGxpbWl0ID0gNSkge1xuICAgIGlmIChlbGVtLmN1cnJlbnQpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgICAgIG5ldyBBdXRvY29tcGxldGUoZWxlbS5jdXJyZW50LCB7XG4gICAgICAgICAgICBkYXRhOiBjb21wbGV0aW9ucyxcbiAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgbWluTGVuZ3RoLFxuXG4gICAgICAgICAgICBvbkF1dG9jb21wbGV0ZTogZnVuY3Rpb24odGhpcywgdGV4dCkgeyAgLy8gdHNsaW50OmRpc2FibGUtbGluZSBvYmplY3QtbGl0ZXJhbC1zaG9ydGhhbmRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSh0ZXh0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGaXggb3ZlcmxhcHB0aW5nIHRleHQgYnVnXG4gICAgICAgIE0udXBkYXRlVGV4dEZpZWxkcygpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVOYXZiYXJUYWIoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbi8qKiBFbmFibGVzIG5hdmJhciBtZW51cy4gU2hvdWxkIGJlIGNhbGxlZCBvbiBldmVyeSBwYWdlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hdmJhcihhY3RpdmVOYXZUYWJJZD86IHN0cmluZykge1xuICAgIGlmIChhY3RpdmVOYXZUYWJJZCkge1xuICAgICAgICBhY3RpdmF0ZU5hdmJhclRhYihhY3RpdmVOYXZUYWJJZCk7XG4gICAgfVxuICAgIGNvbnN0IHNpZGVOYXZFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlbmF2XCIpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBTaWRlbmF2KHNpZGVOYXZFbGVtISk7XG4gICAgY29uc3QgZHJvcGRvd25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi10cmlnZ2VyXCIpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBEcm9wZG93bihkcm9wZG93bkVsZW0hKTtcbn1cblxuLyoqIFNpbXBsaWZpZXMgZGlzcGxheWluZyBvZiB0b2FzdCBtZXNzYWdlcyB0byB1c2VyICovXG5leHBvcnQgZnVuY3Rpb24gdG9hc3QobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgTS50b2FzdCh7XG4gICAgICAgIGNsYXNzZXM6IFwicmVkLWJnXCIsXG4gICAgICAgIGRpc3BsYXlMZW5ndGg6IDEwMDAwLFxuICAgICAgICBodG1sOiBtZXNzYWdlLFxuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==