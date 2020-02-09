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
/******/ 		"wine_profile": 0
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
/******/ 	deferredModules.push([9,"vendors"]);
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

/***/ "./components/CheckboxInput.tsx":
/*!**************************************!*\
  !*** ./components/CheckboxInput.tsx ***!
  \**************************************/
/*! exports provided: CheckboxInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxInput", function() { return CheckboxInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid */ "./components/Grid.tsx");



class CheckboxInput extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        const id = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["nameToId"])(this.props.name);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], Object.assign({}, this.props),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "switch" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { htmlFor: id },
                    this.props.text,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "checkbox", id: id, name: this.props.name, checked: this.props.isChecked, onChange: (e) => this.props.onClick(e.target.checked), disabled: !this.props.enabled }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "lever" })))));
    }
}
CheckboxInput.defaultProps = {
    enabled: true,
};


/***/ }),

/***/ "./components/ColorInput.tsx":
/*!***********************************!*\
  !*** ./components/ColorInput.tsx ***!
  \***********************************/
/*! exports provided: useColorsSelect, ColorInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useColorsSelect", function() { return useColorsSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInput", function() { return ColorInput; });
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectInput */ "./components/SelectInput.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const useColorsSelect = (logger, extraChoice) => {
    const [selectionOptions, setSelectionOptions] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
    const selectRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
    const concatIfNotNull = (options) => {
        if (extraChoice) {
            return [extraChoice].concat(options);
        }
        return options;
    };
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
        function fetchColors() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const colors = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_3__["getColors"])({});
                    setSelectionOptions(concatIfNotNull(colors.map((color) => color.name)));
                    new materialize_css__WEBPACK_IMPORTED_MODULE_0__["FormSelect"](selectRef.current);
                }
                catch (_a) {
                    logger.logError("Failed to get colors");
                }
            });
        }
        fetchColors();
    }, []);
    return [selectionOptions, selectRef];
};
const ColorInput = (props) => {
    const logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_2__["default"](ColorInput.name);
    const [selectionOptions, selectRef] = useColorsSelect(logger, props.extraChoice);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SelectInput__WEBPACK_IMPORTED_MODULE_4__["SelectInput"], Object.assign({ name: "Color", s: 4, l: 2, selectRef: selectRef, options: selectionOptions, onChange: (v) => { var _a; return (_a = props) === null || _a === void 0 ? void 0 : _a.onChange(v); } }, props)));
};
ColorInput.displayName = "ColorInput";


/***/ }),

/***/ "./components/DateInput.tsx":
/*!**********************************!*\
  !*** ./components/DateInput.tsx ***!
  \**********************************/
/*! exports provided: DateInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return DateInput; });
/* harmony import */ var date_fns_esm_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/esm/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./components/Input.tsx");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");





const DateInput = ({ date, onChange }) => {
    const inputRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
    react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {
        const datepicker = new materialize_css__WEBPACK_IMPORTED_MODULE_1__["Datepicker"](inputRef.current, {
            autoClose: false,
            defaultDate: new Date(),
            maxDate: new Date(),
            // tslint:disable-next-line: object-literal-shorthand
            onClose: function () {
                onChange(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_4__["dateToNum"])(datepicker.date));
            },
            yearRange: 15,
        });
    }, [inputRef]);
    const dateString = date ? Object(date_fns_esm_format__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_4__["numToDate"])(date), "MMM dd, yyyy") : "";
    const isValueSet = date !== null;
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["Input"], { name: name, value: dateString, className: "datepicker", s: 6, l: 3, active: isValueSet, inputRef: inputRef }));
};
DateInput.displayName = "DateInput";


/***/ }),

/***/ "./components/FileInput.tsx":
/*!**********************************!*\
  !*** ./components/FileInput.tsx ***!
  \**********************************/
/*! exports provided: FileInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInput", function() { return FileInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");


const FileInput = ({ name, onChange }) => {
    const id = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["nameToId"])(name);
    // TODO: hint file extensions
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "file-field input-field col s12 l6" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "btn yellow darken-2" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, name),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "file", name: id, id: id, onChange: (e) => { var _a, _b; return onChange((_b = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a.item(0), (_b !== null && _b !== void 0 ? _b : null))); } })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "file-path-wrapper" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "text", className: "file-path validate" })))));
};
FileInput.displayName = "FileInput";


/***/ }),

/***/ "./components/FixedActionList.tsx":
/*!****************************************!*\
  !*** ./components/FixedActionList.tsx ***!
  \****************************************/
/*! exports provided: FixedActionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedActionList", function() { return FixedActionList; });
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _MaterialIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MaterialIcon */ "./components/MaterialIcon.tsx");




const FixedActionList = (props) => {
    const divRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
        new materialize_css__WEBPACK_IMPORTED_MODULE_0__["FloatingActionButton"](divRef.current, { direction: "left" });
    }, [divRef]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "fixed-action-btn horizontal", ref: divRef },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__["FloatingBtn"], { classes: ["btn-large", "red-bg"], onClick: () => null },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MaterialIcon__WEBPACK_IMPORTED_MODULE_3__["MaterialIcon"], { iconName: "menu" })),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null,
            " ",
            react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(props.children, (child) => (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, child))),
            " ")));
};
FixedActionList.displayName = "FixedActionList";


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

/***/ "./components/Input.tsx":
/*!******************************!*\
  !*** ./components/Input.tsx ***!
  \******************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Grid */ "./components/Grid.tsx");




class Input extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    render() {
        const id = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["nameToId"])(this.props.name);
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_3__["InputField"], { s: this.props.s, m: this.props.m, l: this.props.l },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { id: id, name: id, className: this.props.className, ref: this.props.inputRef, type: this.props.inputType, disabled: !this.props.enabled, value: this.props.value, onChange: (e) => this.onChange(e), onBlur: this.props.onBlur, onFocus: this.props.onFocus, step: this.props.step, min: this.props.min, max: this.props.max }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: this.props.active ? "active" : "", htmlFor: id }, this.props.name)));
    }
    componentDidMount() {
        materialize_css__WEBPACK_IMPORTED_MODULE_0___default.a.updateTextFields();
    }
    componentDidUpdate() {
        materialize_css__WEBPACK_IMPORTED_MODULE_0___default.a.updateTextFields();
    }
    onChange(e) {
        this.props.onChange(e.target.value);
    }
}
Input.defaultProps = {
    enabled: true,
    onChange: () => undefined,
    onFocus: () => undefined,
    onBlur: (_) => undefined,
};


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

/***/ "./components/Modal.tsx":
/*!******************************!*\
  !*** ./components/Modal.tsx ***!
  \******************************/
/*! exports provided: Modal, ModalContent, ModalFooter, DeleteModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContent", function() { return ModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return ModalFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteModal", function() { return DeleteModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons */ "./components/Buttons.tsx");



const Modal = ({ children }) => {
    const ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        const instance = new materialize_css__WEBPACK_IMPORTED_MODULE_1___default.a.Modal(ref.current);
        instance.open();
        // Returning function from useEffect will be called when the
        // component is unmounted
        return () => { var _a; return (_a = instance) === null || _a === void 0 ? void 0 : _a.close(); };
    }, [ref]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: ref, className: "modal" }, children));
};
Modal.displayName = "Modal";
const ModalContent = ({ children }) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", { className: "modal-content" }, children));
ModalContent.displayName = "ModalContent";
const ModalFooter = ({ children }) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", { className: "modal-footer" }, children));
ModalFooter.displayName = "ModalFooter";
const DeleteModal = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modal, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalContent, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null,
                "Are you sure you want to delete this ",
                props.item,
                "?"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This action is irreversible.")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalFooter, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__["Btn"], { classes: ["modal-action", "red-bg"], onClick: props.onYesClick },
                "Yes, delete this ",
                props.item),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__["Btn"], { classes: ["modal-action", "modal-close", "green-bg"], onClick: props.onNoClick }, "No"))));
};
DeleteModal.displayName = "DeleteModal";


/***/ }),

/***/ "./components/NumberInput.tsx":
/*!************************************!*\
  !*** ./components/NumberInput.tsx ***!
  \************************************/
/*! exports provided: NumberInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberInput", function() { return NumberInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./components/Input.tsx");


const NumberInput = (props) => {
    var _a;
    const onChange = (val) => {
        const float = parseFloat(val);
        const int = parseInt(val, 10);
        // The highest level of precision we care about is 1/100ths (cents)
        props.onChange(float - 0.005 > int ? float : int);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["Input"], { inputType: "number", name: props.name, enabled: (_a = props.enabled, (_a !== null && _a !== void 0 ? _a : true)), className: "validate", value: props.number || "", onChange: onChange, max: props.max, min: props.min, step: props.step, s: props.s, m: props.m, l: props.l }));
};
NumberInput.displayName = "NumberInput";


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

/***/ "./components/ProducerInput.tsx":
/*!**************************************!*\
  !*** ./components/ProducerInput.tsx ***!
  \**************************************/
/*! exports provided: ProducerInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProducerInput", function() { return ProducerInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _lib_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/widgets */ "./lib/widgets.ts");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextInput */ "./components/TextInput.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const ProducerInput = ({ value, onChange }) => {
    const logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_1__["default"](ProducerInput.name);
    const inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        function fetchProducers() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const producers = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_2__["getProducers"])({});
                    Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_3__["autocomplete"])(inputRef, Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_2__["toDict"])(producers), onChange);
                }
                catch (_a) {
                    logger.logError("Failed to get producer autocomplete options");
                }
            });
        }
        fetchProducers();
    }, [inputRef]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { name: "Producer", className: "autocomplete", s: 6, l: 3, inputRef: inputRef, value: value, onChange: onChange }));
};
ProducerInput.displayName = "ProducerInput";


/***/ }),

/***/ "./components/PurchaseInputs.tsx":
/*!***************************************!*\
  !*** ./components/PurchaseInputs.tsx ***!
  \***************************************/
/*! exports provided: initPurchaseInputData, purchaseDataToForm, purchaseInputReducer, PurchaseInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPurchaseInputData", function() { return initPurchaseInputData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseDataToForm", function() { return purchaseDataToForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseInputReducer", function() { return purchaseInputReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseInputs", function() { return PurchaseInputs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _lib_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/widgets */ "./lib/widgets.ts");
/* harmony import */ var _CheckboxInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CheckboxInput */ "./components/CheckboxInput.tsx");
/* harmony import */ var _DateInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DateInput */ "./components/DateInput.tsx");
/* harmony import */ var _NumberInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NumberInput */ "./components/NumberInput.tsx");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TextInput */ "./components/TextInput.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









const initPurchaseInputData = () => ({
    date: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["dateToNum"])(new Date()),
    quantity: 1,
    shouldAddToInventory: true,
    price: 0.00,
    vintage: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["defaultVintageYear"])(),
    store: "",
    memo: "",
});
const purchaseDataToForm = (data, wineId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    let store = null;
    if (data.store) {
        store = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_2__["getOrCreateStore"])({ name: data.store }, { name: data.store });
    }
    return {
        date: data.date,
        wineId,
        quantity: data.quantity,
        storeId: (_b = (_a = store) === null || _a === void 0 ? void 0 : _a.id, (_b !== null && _b !== void 0 ? _b : null)),
        price: data.price,
        vintage: data.vintage,
        memo: data.memo
    };
});
const purchaseInputReducer = (state, action) => {
    switch (action.type) {
        case "setDate":
            return Object.assign(Object.assign({}, state), { date: action.date });
        case "setQuantity":
            return Object.assign(Object.assign({}, state), { quantity: action.quantity });
        case "setShouldAddToInventory":
            return Object.assign(Object.assign({}, state), { shouldAddToInventory: action.shouldAddToInventory });
        case "setPrice":
            return Object.assign(Object.assign({}, state), { price: action.price });
        case "setVintage":
            return Object.assign(Object.assign({}, state), { vintage: action.vintage });
        case "setStore":
            return Object.assign(Object.assign({}, state), { store: action.store });
        case "setMemo":
            return Object.assign(Object.assign({}, state), { memo: action.memo });
        default:
            return state;
    }
};
const PurchaseInputs = ({ displayInventoryBtn, data, dispatch }) => {
    const logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_1__["default"](PurchaseInputs.name);
    const storeInputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    const onStoreChange = (store) => {
        dispatch({ type: "setStore", store });
    };
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        function fetchStores() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const stores = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_2__["getStores"])({});
                    Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_4__["autocomplete"])(storeInputRef, Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_2__["toDict"])(stores), onStoreChange);
                }
                catch (e) {
                    logger.logError("Failed to get store autocomplete options");
                }
            });
        }
        fetchStores();
    }, [storeInputRef]);
    const [quantityS, quantityL] = displayInventoryBtn ? [3, 2] : [6, 3];
    const inventory = displayInventoryBtn
        ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckboxInput__WEBPACK_IMPORTED_MODULE_5__["CheckboxInput"], { text: "Add to Inventory", enabled: true, name: "add-to-inventory", isChecked: data.shouldAddToInventory, onClick: (checked) => dispatch({ type: "setShouldAddToInventory", shouldAddToInventory: checked }), s: 3, l: 1 })
        : null;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DateInput__WEBPACK_IMPORTED_MODULE_6__["DateInput"], { name: "Purchase Date", date: data.date, onChange: (date) => dispatch({ type: "setDate", date: date }) }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NumberInput__WEBPACK_IMPORTED_MODULE_7__["NumberInput"], { name: "Quantity", number: data.quantity, onChange: (quantity) => dispatch({ type: "setQuantity", quantity }), min: 0, step: "1", s: quantityS, l: quantityL }),
        inventory,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NumberInput__WEBPACK_IMPORTED_MODULE_7__["NumberInput"], { name: "Price", number: data.price, onChange: (price) => dispatch({ type: "setPrice", price }), min: 0, step: "0.01", s: 6, l: 3 }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NumberInput__WEBPACK_IMPORTED_MODULE_7__["NumberInput"], { name: "Vintage", number: data.vintage, onChange: (vintage) => dispatch({ type: "setVintage", vintage }), min: 1900, step: "1", max: new Date().getFullYear(), s: 6, l: 3 }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_8__["TextInput"], { name: "Store", className: "autocomplete", value: data.store, onChange: onStoreChange, s: 6, l: 3, inputRef: storeInputRef }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_8__["TextInput"], { name: "Memo", className: "", value: data.memo, onChange: (memo) => dispatch({ type: "setMemo", memo }), s: 6, l: 3 })));
};
PurchaseInputs.displayName = "PurchaseInputs";


/***/ }),

/***/ "./components/RatingInput.tsx":
/*!************************************!*\
  !*** ./components/RatingInput.tsx ***!
  \************************************/
/*! exports provided: RatingInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingInput", function() { return RatingInput; });
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CheckboxInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckboxInput */ "./components/CheckboxInput.tsx");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Grid */ "./components/Grid.tsx");




const RatingInput = ({ isChecked, onIsCheckedChange, rating, onRatingChange }) => {
    const ref = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
        new materialize_css__WEBPACK_IMPORTED_MODULE_0__["Range"](ref.current);
    }, [ref]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 4, l: 2, classes: ["range-field"] },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CheckboxInput__WEBPACK_IMPORTED_MODULE_2__["CheckboxInput"], { name: "has-rating", text: "Rating", isChecked: isChecked, onClick: onIsCheckedChange }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { htmlFor: "rating" }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "range-field" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "range", name: "rating", ref: ref, min: 0, max: 10, step: 1, value: rating, disabled: !isChecked, onChange: (e) => onRatingChange(parseInt(e.target.value, 10)) }))));
};
RatingInput.displayName = "RatingInput";


/***/ }),

/***/ "./components/RegionInput.tsx":
/*!************************************!*\
  !*** ./components/RegionInput.tsx ***!
  \************************************/
/*! exports provided: RegionInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionInput", function() { return RegionInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _lib_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/widgets */ "./lib/widgets.ts");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextInput */ "./components/TextInput.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const RegionInput = ({ value, producerText, onChange }) => {
    const logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_1__["default"](RegionInput.name);
    const inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    // Get autocomplete options
    const [autocompleteOptions, setAutocompleteOptions] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({});
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        function fetchAutocompleteOptions() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const regions = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_2__["getRegions"])({});
                    setAutocompleteOptions(Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_2__["toDict"])(regions));
                    Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_3__["autocomplete"])(inputRef, autocompleteOptions, onChange);
                }
                catch (_a) {
                    logger.logError("Failed to get region autocomplete options");
                }
            });
        }
        fetchAutocompleteOptions();
    }, [inputRef, setAutocompleteOptions]);
    const [enabled, setEnabled] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
    // Try to get region from producer input. If found, lock and set value
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        function fetchProducerRegion() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    logger.logInfo("Updating region autocomplete options");
                    const regions = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_2__["getRegions"])({ producerName: producerText });
                    if (regions.length === 1) {
                        onChange(regions[0].name);
                        setEnabled(false);
                    }
                    else {
                        setEnabled(true);
                    }
                }
                catch (e) {
                    // Ignore empty result errors
                    if (!_lib_RestApi__WEBPACK_IMPORTED_MODULE_2__["EmptyResultError"].isInstance(e)) {
                        logger.logWarning(`Error fetching regions based on producer. ${e}`);
                        Promise.reject(e);
                    }
                }
            });
        }
        if (producerText) {
            fetchProducerRegion();
        }
        else {
            setEnabled(true);
        }
    }, [producerText, setEnabled]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { name: "Region", className: "autocomplete", s: 6, l: 3, enabled: enabled, value: value, onChange: onChange }));
};
RegionInput.displayName = "RegionInput";


/***/ }),

/***/ "./components/SelectInput.tsx":
/*!************************************!*\
  !*** ./components/SelectInput.tsx ***!
  \************************************/
/*! exports provided: SelectInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectInput", function() { return SelectInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid */ "./components/Grid.tsx");



const SelectInput = (props) => {
    const id = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["nameToId"])(props.name);
    let selectText;
    if (props.selectText) {
        selectText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: "", disabled: true }, props.selectText);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_2__["InputField"], { s: props.s, m: props.m, l: props.l },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { id: id, name: id, onChange: (e) => props.onChange(e.target.value), value: props.selection || props.selectText, ref: props.selectRef },
            selectText,
            props.options.map((option) => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: option, key: option }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["capitalizeFirstLetter"])(option)));
            })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { htmlFor: id }, props.name)));
};


/***/ }),

/***/ "./components/SpecialCharBtn.tsx":
/*!***************************************!*\
  !*** ./components/SpecialCharBtn.tsx ***!
  \***************************************/
/*! exports provided: SpecialCharBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialCharBtn", function() { return SpecialCharBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons */ "./components/Buttons.tsx");


const SpecialCharBtn = (props) => {
    const classes = ["btn-small", "center", "spec-char-btn"];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { classes: classes, onClick: () => null, onMouseDown: () => props.onClick(props.char) }, props.char));
};


/***/ }),

/***/ "./components/SpecialChars.tsx":
/*!*************************************!*\
  !*** ./components/SpecialChars.tsx ***!
  \*************************************/
/*! exports provided: SpecialChars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialChars", function() { return SpecialChars; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid */ "./components/Grid.tsx");
/* harmony import */ var _SpecialCharBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpecialCharBtn */ "./components/SpecialCharBtn.tsx");




var Case;
(function (Case) {
    Case[Case["Upper"] = 0] = "Upper";
    Case[Case["Lower"] = 1] = "Lower";
})(Case || (Case = {}));
class SpecialChars extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static insertCharAt(val, char, position) {
        if (isNaN(position)) {
            return val + char;
        }
        return val.substr(0, position) + char + val.substr(position);
    }
    constructor(props) {
        super(props);
        this.state = {
            chars: [
                "à", "á", "â", "ã", "æ", "č", "ç", "è", "é", "ê", "ë", "í", "î",
                "ï", "ñ", "ó", "ô", "õ", "œ", "š", "ù", "ú", "û", "ü", "ž",
            ],
            currentCase: Case.Lower,
        };
    }
    render() {
        var _a;
        const classes = ["special-chars"];
        if (this.props.display) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], { classes: classes.concat((_a = this.props.classes, (_a !== null && _a !== void 0 ? _a : []))) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { classes: ["center", "green-bg", "shift-btn"], onClick: () => null, onMouseDown: this.handleShift.bind(this) }, this.state.currentCase === Case.Lower ? "↑" : "↓"),
                this.state.chars.map((char) => {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SpecialCharBtn__WEBPACK_IMPORTED_MODULE_3__["SpecialCharBtn"], { char: char, key: char, onClick: (c) => this.props.onClick(c) }));
                })));
        }
        return null;
    }
    handleShift() {
        this.setState((state) => {
            if (state.currentCase === Case.Lower) {
                return {
                    chars: state.chars.map((char) => char.toUpperCase()),
                    currentCase: Case.Upper,
                };
            }
            return {
                chars: state.chars.map((char) => char.toLowerCase()),
                currentCase: Case.Lower,
            };
        });
    }
}


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

/***/ "./components/TableHeader.tsx":
/*!************************************!*\
  !*** ./components/TableHeader.tsx ***!
  \************************************/
/*! exports provided: SortingState, TableHeader, FilterHeader, SelectFilterHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingState", function() { return SortingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeader", function() { return TableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterHeader", function() { return FilterHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFilterHeader", function() { return SelectFilterHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _ColorInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorInput */ "./components/ColorInput.tsx");
/* harmony import */ var _MaterialIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MaterialIcon */ "./components/MaterialIcon.tsx");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectInput */ "./components/SelectInput.tsx");





var SortingState;
(function (SortingState) {
    SortingState[SortingState["NotSorted"] = 0] = "NotSorted";
    SortingState[SortingState["Ascending"] = 1] = "Ascending";
    SortingState[SortingState["Descending"] = 2] = "Descending";
})(SortingState || (SortingState = {}));
class TableHeader extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { className: (this.props.className || "") + `${this.props.isNumCol ? " num-col" : ""}` }, this.renderContent()));
    }
    renderContent() {
        const text = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "", onClick: this.props.onClick, className: "table-header" }, this.props.children));
        return this.props.isNumCol
            ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                this.renderIcon(),
                text)) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            text,
            this.renderIcon()));
    }
    renderIcon() {
        switch (this.props.sortingState) {
            case SortingState.Ascending:
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MaterialIcon__WEBPACK_IMPORTED_MODULE_3__["MaterialIcon"], { iconName: "arrow_drop_up" });
            case SortingState.Descending:
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MaterialIcon__WEBPACK_IMPORTED_MODULE_3__["MaterialIcon"], { iconName: "arrow_drop_down" });
            default:
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MaterialIcon__WEBPACK_IMPORTED_MODULE_3__["MaterialIcon"], { iconName: "arrow_drop_down", className: "invisible" });
        }
    }
}
TableHeader.defaultProps = {
    isNumCol: false,
};
const FilterHeader = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "search", onChange: (e) => props.onChange(e.target.value), value: props.text })));
};
FilterHeader.displayName = "FilterHeader";
const SelectFilterHeader = (props) => {
    const extraChoice = "Any";
    const logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_1__["default"](SelectFilterHeader.name);
    const onChange = (selection) => {
        if (selection === extraChoice) {
            props.onChange("");
        }
        else {
            props.onChange(selection);
        }
    };
    const selection = props.text === "" ? extraChoice : props.text;
    const [selectionOptions, selectRef] = Object(_ColorInput__WEBPACK_IMPORTED_MODULE_2__["useColorsSelect"])(logger, extraChoice);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SelectInput__WEBPACK_IMPORTED_MODULE_4__["SelectInput"], { name: "", selectRef: selectRef, options: selectionOptions, selection: selection, onChange: onChange })));
};
SelectFilterHeader.displayName = SelectFilterHeader.name;


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

/***/ "./components/TextInput.tsx":
/*!**********************************!*\
  !*** ./components/TextInput.tsx ***!
  \**********************************/
/*! exports provided: TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./components/Input.tsx");
/* harmony import */ var _SpecialChars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpecialChars */ "./components/SpecialChars.tsx");



const TextInput = (props) => {
    var _a;
    const [timestamp, _] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(new Date());
    const [isActive, setIsActive] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
    const inputRef = (_a = props.inputRef, (_a !== null && _a !== void 0 ? _a : react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef()));
    const onSpecialCharClick = (char) => {
        var _a, _b;
        setIsActive(true);
        const position = (_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.selectionStart, (_b !== null && _b !== void 0 ? _b : NaN));
        props.onChange(_SpecialChars__WEBPACK_IMPORTED_MODULE_2__["SpecialChars"].insertCharAt(props.value, char, position));
        setTimeout(() => inputRef.current.setSelectionRange(position + 1, position + 1), 10);
    };
    const onBlur = () => {
        var _a, _b;
        const now = new Date();
        // @ts-ignore
        if (now - timestamp > 100) {
            setIsActive(false);
        }
        (_b = (_a = props).onBlur) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    const onChange = (val) => {
        setIsActive(true);
        props.onChange(val);
    };
    const onFocus = () => {
        var _a, _b;
        setIsActive(true);
        (_b = (_a = props).onFocus) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["Input"], { inputType: "text", name: props.name, value: props.value, enabled: props.enabled, onChange: (val) => onChange(val), onBlur: onBlur, onFocus: onFocus, className: props.className, s: props.s, m: props.m, l: props.l, inputRef: inputRef }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SpecialChars__WEBPACK_IMPORTED_MODULE_2__["SpecialChars"], { classes: ["inline-block"], onClick: (c) => onSpecialCharClick(c), display: isActive })));
};
TextInput.displayName = "TextInput";


/***/ }),

/***/ "./components/VitiAreaInput.tsx":
/*!**************************************!*\
  !*** ./components/VitiAreaInput.tsx ***!
  \**************************************/
/*! exports provided: VitiAreaInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitiAreaInput", function() { return VitiAreaInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _lib_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/widgets */ "./lib/widgets.ts");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextInput */ "./components/TextInput.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const VitiAreaInput = ({ value, regionText, onChange }) => {
    const logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_1__["default"](VitiAreaInput.name);
    const inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        function fetchVitiAreas() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const vitiAreas = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_2__["getVitiAreas"])({ regionName: regionText });
                    Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_3__["autocomplete"])(inputRef, Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_2__["toDict"])(vitiAreas), onChange);
                }
                catch (e) {
                    logger.logError("Failed to get viti area autocomplete options");
                }
            });
        }
        fetchVitiAreas();
    }, [inputRef, regionText]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { name: "Viti Area", className: "autocomplete", inputRef: inputRef, s: 8, l: 4, value: value, onChange: onChange }));
};
VitiAreaInput.displayName = "VitiAreaInput";


/***/ }),

/***/ "./components/WineTypeInput.tsx":
/*!**************************************!*\
  !*** ./components/WineTypeInput.tsx ***!
  \**************************************/
/*! exports provided: WineTypeInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineTypeInput", function() { return WineTypeInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _lib_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/widgets */ "./lib/widgets.ts");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextInput */ "./components/TextInput.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const WineTypeInput = (props) => {
    const inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        function fetchWineTypes() {
            return __awaiter(this, void 0, void 0, function* () {
                const wineTypes = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_1__["getWineTypes"])({});
                Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_2__["autocomplete"])(inputRef, Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_1__["toDict"])(wineTypes), props.onChange);
            });
        }
        fetchWineTypes();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { name: "Wine Type", className: "autocomplete", s: 8, l: 4, value: props.value, inputRef: inputRef, onFocus: props.onFocus, onChange: props.onChange, onBlur: props.onBlur }));
};
WineTypeInput.displayName = "WineTypeInput";


/***/ }),

/***/ "./front_end/inventory/InventoryTable.tsx":
/*!************************************************!*\
  !*** ./front_end/inventory/InventoryTable.tsx ***!
  \************************************************/
/*! exports provided: InventoryChange, InventoryTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryChange", function() { return InventoryChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryTable", function() { return InventoryTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_MaterialIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MaterialIcon */ "./components/MaterialIcon.tsx");
/* harmony import */ var _components_TableCells__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TableCells */ "./components/TableCells.tsx");
/* harmony import */ var _components_TableHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/TableHeader */ "./components/TableHeader.tsx");





var InventoryChange;
(function (InventoryChange) {
    InventoryChange[InventoryChange["Increase"] = 0] = "Increase";
    InventoryChange[InventoryChange["Decrease"] = 1] = "Decrease";
})(InventoryChange || (InventoryChange = {}));
;
var SortingValue;
(function (SortingValue) {
    SortingValue[SortingValue["Inventory"] = 0] = "Inventory";
    SortingValue[SortingValue["Color"] = 1] = "Color";
    SortingValue[SortingValue["NameAndType"] = 2] = "NameAndType";
    SortingValue[SortingValue["Producer"] = 3] = "Producer";
    SortingValue[SortingValue["Region"] = 4] = "Region";
    SortingValue[SortingValue["Vintage"] = 5] = "Vintage";
    SortingValue[SortingValue["PurchaseDate"] = 6] = "PurchaseDate";
    SortingValue[SortingValue["Price"] = 7] = "Price";
})(SortingValue || (SortingValue = {}));
;
class InventoryTable extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            ascending: true,
            sorting: SortingValue.PurchaseDate,
        };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "responsive highlight condensed" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Modify"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableHeader__WEBPACK_IMPORTED_MODULE_4__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.Inventory), { isNumCol: true }), "Inventory"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableHeader__WEBPACK_IMPORTED_MODULE_4__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.Color)), "Color"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableHeader__WEBPACK_IMPORTED_MODULE_4__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.NameAndType)), "Name and Type"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableHeader__WEBPACK_IMPORTED_MODULE_4__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.Producer)), "Producer"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableHeader__WEBPACK_IMPORTED_MODULE_4__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.Region)), "Region"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableHeader__WEBPACK_IMPORTED_MODULE_4__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.Vintage), { isNumCol: true }), "Vintage"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableHeader__WEBPACK_IMPORTED_MODULE_4__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.PurchaseDate)), "Purchase Date"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableHeader__WEBPACK_IMPORTED_MODULE_4__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.Price), { isNumCol: true }), "Price"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, this.sortedWines.map((wine) => {
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: wine.id },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { className: "inventory-plus-minus" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { classes: ["green-bg", "btn-small"], onClick: () => this.props.onInventoryChange(wine.id, InventoryChange.Increase) },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_2__["MaterialIcon"], { iconName: "add_circle" })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { classes: ["red-bg", "btn-small"], onClick: () => this.props.onInventoryChange(wine.id, InventoryChange.Decrease) },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_2__["MaterialIcon"], { iconName: "do_not_disturb_on" }))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_3__["NumCell"], { num: wine.inventory, maxDecimals: 0 }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_3__["ColorCell"], { color: wine.color }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_3__["NameAndTypeCell"], { id: wine.id, name: wine.name, wineType: wine.wineType }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_3__["ProducerCell"], { id: wine.producerId, name: wine.producer }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_3__["RegionCell"], { id: wine.regionId, name: wine.region }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_3__["YearCell"], { year: wine.lastPurchaseVintage }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_3__["DateCell"], { date: wine.lastPurchaseDate }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_3__["PriceCell"], { price: wine.lastPurchasePrice })));
            }))));
    }
    get sortedWines() {
        const ascendingMultiplier = this.state.ascending ? 1 : -1;
        switch (this.state.sorting) {
            case SortingValue.Inventory:
                return this.props.wines.sort((w1, w2) => {
                    return (w1.inventory) > (w2.inventory) ? -ascendingMultiplier : ascendingMultiplier;
                });
            case SortingValue.Color:
                return this.props.wines.sort((w1, w2) => {
                    return w1.color.localeCompare(w2.color) * ascendingMultiplier;
                });
            case SortingValue.NameAndType:
                return this.props.wines.sort((w1, w2) => {
                    var _a, _b;
                    // Sort by wineType then name
                    const wineTypeComparison = (_a = w1.wineType, (_a !== null && _a !== void 0 ? _a : "")).localeCompare((_b = w2.wineType, (_b !== null && _b !== void 0 ? _b : ""))) * ascendingMultiplier;
                    if (wineTypeComparison === 0) {
                        // Name comparison
                        if (w1.name && w2.name) {
                            return w1.name.localeCompare(w2.name) * ascendingMultiplier;
                        }
                        if (w1.name) {
                            return ascendingMultiplier;
                        }
                        if (w2.name) {
                            return -ascendingMultiplier;
                        }
                    }
                    return wineTypeComparison;
                });
            case SortingValue.Producer:
                return this.props.wines.sort((w1, w2) => {
                    return w1.producer.localeCompare(w2.producer) * ascendingMultiplier;
                });
            case SortingValue.Region:
                return this.props.wines.sort((w1, w2) => {
                    return w1.region.localeCompare(w2.region) * ascendingMultiplier;
                });
            case SortingValue.Vintage:
                return this.props.wines.sort((w1, w2) => {
                    return (w1.lastPurchaseVintage || 0) > (w2.lastPurchaseVintage || 0) ? -ascendingMultiplier : ascendingMultiplier;
                });
            case SortingValue.PurchaseDate:
                return this.props.wines.sort((w1, w2) => {
                    return (w1.lastPurchaseDate) > (w2.lastPurchaseDate) ? -ascendingMultiplier : ascendingMultiplier;
                });
            case SortingValue.Price:
                return this.props.wines.sort((w1, w2) => {
                    return (w1.lastPurchasePrice || 0) > (w2.lastPurchasePrice || 0) ? -ascendingMultiplier : ascendingMultiplier;
                });
            case SortingValue.PurchaseDate:
                return this.props.wines.sort((w1, w2) => {
                    return (w1.lastPurchaseDate) > (w2.lastPurchaseDate) ? -ascendingMultiplier : ascendingMultiplier;
                });
            default:
                return this.props.wines;
        }
    }
    onHeaderClick(e, sortingVal) {
        e.preventDefault();
        if (sortingVal === this.state.sorting) {
            this.setState((prevState) => ({ ascending: !prevState.ascending }));
        }
        else {
            this.setState({
                ascending: true,
                sorting: sortingVal,
            });
        }
    }
    tableHeaderProps(sortingVal) {
        if (this.state.sorting === sortingVal) {
            const sortingState = this.state.ascending ? _components_TableHeader__WEBPACK_IMPORTED_MODULE_4__["SortingState"].Ascending : _components_TableHeader__WEBPACK_IMPORTED_MODULE_4__["SortingState"].Descending;
            return {
                sortingState,
                onClick: (e) => this.onHeaderClick(e, sortingVal),
            };
        }
        return {
            sortingState: _components_TableHeader__WEBPACK_IMPORTED_MODULE_4__["SortingState"].NotSorted,
            onClick: (e) => this.onHeaderClick(e, sortingVal),
        };
    }
}


/***/ }),

/***/ "./front_end/new_wine/WineInputs.tsx":
/*!*******************************************!*\
  !*** ./front_end/new_wine/WineInputs.tsx ***!
  \*******************************************/
/*! exports provided: initWineInputData, wineDataToForm, wineInputReducer, WineInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initWineInputData", function() { return initWineInputData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wineDataToForm", function() { return wineDataToForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wineInputReducer", function() { return wineInputReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineInputs", function() { return WineInputs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ColorInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ColorInput */ "./components/ColorInput.tsx");
/* harmony import */ var _components_FileInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FileInput */ "./components/FileInput.tsx");
/* harmony import */ var _components_ProducerInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ProducerInput */ "./components/ProducerInput.tsx");
/* harmony import */ var _components_RatingInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/RatingInput */ "./components/RatingInput.tsx");
/* harmony import */ var _components_RegionInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/RegionInput */ "./components/RegionInput.tsx");
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TextInput */ "./components/TextInput.tsx");
/* harmony import */ var _components_VitiAreaInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/VitiAreaInput */ "./components/VitiAreaInput.tsx");
/* harmony import */ var _components_WineTypeInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/WineTypeInput */ "./components/WineTypeInput.tsx");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/RestApi */ "./lib/RestApi.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










const initWineInputData = () => ({
    color: "",
    wineType: "",
    producer: "",
    region: "",
    isRatingEnabled: false,
    rating: 5,
    name: "",
    why: "",
    vitiArea: "",
    description: "",
    notes: "",
    file: null,
});
const getOrCreateVitiAreaForRegion = (data, regionId) => __awaiter(void 0, void 0, void 0, function* () {
    if (data.vitiArea) {
        return Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["getOrCreateVitiArea"])({ name: data.vitiArea }, { name: data.vitiArea, regionId });
    }
    return null;
});
const getProducerAndVitiArea = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const region = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["getOrCreateRegion"])({ name: data.region }, { name: data.region });
    return Promise.all([
        Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["getOrCreateProducer"])({ name: data.producer }, { name: data.producer, regionId: region.id }),
        getOrCreateVitiAreaForRegion(data, region.id),
    ]);
});
const wineDataToForm = (data, inventory) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const [color, wineType, [producer, vitiArea]] = yield Promise.all([
        Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["getColor"])({ name: data.color }),
        Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["getOrCreateWineType"])({ name: data.wineType }, { name: data.wineType }),
        getProducerAndVitiArea(data),
    ]);
    return {
        colorId: color.id,
        wineTypeId: wineType.id,
        producerId: producer.id,
        vitiAreaId: (_b = (_a = vitiArea) === null || _a === void 0 ? void 0 : _a.id, (_b !== null && _b !== void 0 ? _b : null)),
        name: data.name || null,
        why: data.why || null,
        description: data.description || null,
        rating: data.isRatingEnabled ? data.rating : null,
        inventory: inventory,
        notes: data.notes || null,
    };
});
const wineInputReducer = (state, action) => {
    switch (action.type) {
        case "setColor":
            return Object.assign(Object.assign({}, state), { color: action.color });
        case "setWineType":
            return Object.assign(Object.assign({}, state), { wineType: action.wineType });
        case "setProducer":
            return Object.assign(Object.assign({}, state), { producer: action.producer });
        case "setRegion":
            return Object.assign(Object.assign({}, state), { region: action.region });
        case "setIsRatingEnabled":
            return Object.assign(Object.assign({}, state), { isRatingEnabled: action.isRatingEnabled });
        case "setRating":
            return Object.assign(Object.assign({}, state), { rating: action.rating });
        case "setName":
            return Object.assign(Object.assign({}, state), { name: action.name });
        case "setWhy":
            return Object.assign(Object.assign({}, state), { why: action.why });
        case "setVitiArea":
            return Object.assign(Object.assign({}, state), { vitiArea: action.vitiArea });
        case "setDescription":
            return Object.assign(Object.assign({}, state), { description: action.description });
        case "setNotes":
            return Object.assign(Object.assign({}, state), { notes: action.notes });
        case "setFile":
            return Object.assign(Object.assign({}, state), { file: action.file });
        default:
            return state;
    }
};
const WineInputs = ({ data, dispatch }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ColorInput__WEBPACK_IMPORTED_MODULE_1__["ColorInput"], { selection: data.color, onChange: (color) => dispatch({ type: "setColor", color }), extraChoice: "Select a color" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WineTypeInput__WEBPACK_IMPORTED_MODULE_8__["WineTypeInput"], { value: data.wineType, onChange: (wineType) => dispatch({ type: "setWineType", wineType }) }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_6__["TextInput"], { name: "Name", className: "", s: 12, l: 6, value: data.name, onChange: (name) => dispatch({ type: "setName", name }) }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProducerInput__WEBPACK_IMPORTED_MODULE_3__["ProducerInput"], { value: data.producer, onChange: (producer) => dispatch({ type: "setProducer", producer }) }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RegionInput__WEBPACK_IMPORTED_MODULE_5__["RegionInput"], { value: data.region, onChange: (region) => dispatch({ type: "setRegion", region }), producerText: data.producer }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RatingInput__WEBPACK_IMPORTED_MODULE_4__["RatingInput"], { isChecked: data.isRatingEnabled, onIsCheckedChange: (isRatingEnabled) => dispatch({ type: "setIsRatingEnabled", isRatingEnabled }), rating: data.rating, onRatingChange: (rating) => dispatch({ type: "setRating", rating }) }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_VitiAreaInput__WEBPACK_IMPORTED_MODULE_7__["VitiAreaInput"], { value: data.vitiArea, onChange: (vitiArea) => dispatch({ type: "setVitiArea", vitiArea }), regionText: data.region }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_6__["TextInput"], { name: "Description", className: "", value: data.description, onChange: (description) => dispatch({ type: "setDescription", description }), s: 12, l: 6 }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_6__["TextInput"], { name: "Notes", className: "", s: 12, l: 6, value: data.notes, onChange: (notes) => dispatch({ type: "setNotes", notes }) }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FileInput__WEBPACK_IMPORTED_MODULE_2__["FileInput"], { name: "Wine Image", onChange: (file) => dispatch({ type: "setFile", file }) })));
};
WineInputs.displayName = "WineInputs";


/***/ }),

/***/ "./front_end/wine_profile/EditWine.tsx":
/*!*********************************************!*\
  !*** ./front_end/wine_profile/EditWine.tsx ***!
  \*********************************************/
/*! exports provided: EditWine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWine", function() { return EditWine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Modal */ "./components/Modal.tsx");
/* harmony import */ var _new_wine_WineInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../new_wine/WineInputs */ "./front_end/new_wine/WineInputs.tsx");





// TODO: include file
// TODO: include grapes
const EditWine = ({ wine, onSubmit, onCancel }) => {
    var _a, _b, _c, _d, _e, _f;
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(_new_wine_WineInputs__WEBPACK_IMPORTED_MODULE_4__["wineInputReducer"], Object.assign(Object.assign({}, wine), { name: (_a = wine.name, (_a !== null && _a !== void 0 ? _a : "")), description: (_b = wine.description, (_b !== null && _b !== void 0 ? _b : "")), rating: (_c = wine.rating, (_c !== null && _c !== void 0 ? _c : 5)), isRatingEnabled: wine.rating !== null, file: null, notes: (_d = wine.notes, (_d !== null && _d !== void 0 ? _d : "")), vitiArea: (_e = wine.vitiArea, (_e !== null && _e !== void 0 ? _e : "")), why: (_f = wine.why, (_f !== null && _f !== void 0 ? _f : "")) }));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["Modal"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["ModalContent"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Edit wine"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_new_wine_WineInputs__WEBPACK_IMPORTED_MODULE_4__["WineInputs"], { data: state, dispatch: dispatch }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["CancelOrConfirmBtns"], { onConfirmClick: () => onSubmit(state), onCancelClick: onCancel }))));
};
EditWine.displayName = EditWine.name;


/***/ }),

/***/ "./front_end/wine_profile/GrapesTable.tsx":
/*!************************************************!*\
  !*** ./front_end/wine_profile/GrapesTable.tsx ***!
  \************************************************/
/*! exports provided: GrapesTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrapesTable", function() { return GrapesTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Chart */ "./components/Chart.tsx");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Table */ "./components/Table.tsx");
/* harmony import */ var _components_TableCells__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TableCells */ "./components/TableCells.tsx");
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Tabs */ "./components/Tabs.tsx");





const GrapesTable = ({ grapes }) => {
    const tabIdxer = Object(_components_Tabs__WEBPACK_IMPORTED_MODULE_4__["indexFactory"])(GrapesTable.name);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", { className: "light" }, "Grape composition"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tabs__WEBPACK_IMPORTED_MODULE_4__["Tabs"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tabs__WEBPACK_IMPORTED_MODULE_4__["Tab"], { target: tabIdxer(0), color: _components_Tabs__WEBPACK_IMPORTED_MODULE_4__["TabColor"].Red }, "Table"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tabs__WEBPACK_IMPORTED_MODULE_4__["Tab"], { target: tabIdxer(1), color: _components_Tabs__WEBPACK_IMPORTED_MODULE_4__["TabColor"].Green }, "Pie chart")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], { id: tabIdxer(0) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_2__["Table"], { columns: ["Grape", { name: "Percentage", isNumCol: true }] }, grapes.map((grape) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: grape.id },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_3__["TextCell"], { text: grape.grape }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_3__["NumCell"], { num: grape.percent, maxDecimals: 0 })))))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], { id: tabIdxer(1) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Chart__WEBPACK_IMPORTED_MODULE_1__["PieChart"], { data: grapes.map((grape) => ({ label: grape.grape, value: grape.percent || 0 })) }))));
};
GrapesTable.displayName = "GrapesTable";


/***/ }),

/***/ "./front_end/wine_profile/ModifyPurchase.tsx":
/*!***************************************************!*\
  !*** ./front_end/wine_profile/ModifyPurchase.tsx ***!
  \***************************************************/
/*! exports provided: ModifyPurchase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyPurchase", function() { return ModifyPurchase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Modal */ "./components/Modal.tsx");
/* harmony import */ var _components_PurchaseInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PurchaseInputs */ "./components/PurchaseInputs.tsx");





/**
 * Used for creating a new purchase as well as editing an existing one, hence
 * `ModifyPurchase`
 */
const ModifyPurchase = ({ title, purchase, onCancel, onSubmit }) => {
    var _a, _b;
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(_components_PurchaseInputs__WEBPACK_IMPORTED_MODULE_4__["purchaseInputReducer"], Object.assign(Object.assign({}, purchase), { store: (_a = purchase.store, (_a !== null && _a !== void 0 ? _a : "")), memo: (_b = purchase.memo, (_b !== null && _b !== void 0 ? _b : "")), shouldAddToInventory: null }));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["Modal"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["ModalContent"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, title),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PurchaseInputs__WEBPACK_IMPORTED_MODULE_4__["PurchaseInputs"], { displayInventoryBtn: false, data: state, dispatch: dispatch }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["CancelOrConfirmBtns"], { onConfirmClick: () => onSubmit(state), onCancelClick: onCancel }))));
};
ModifyPurchase.displayName = "ModifyPurchase";


/***/ }),

/***/ "./front_end/wine_profile/Purchases.tsx":
/*!**********************************************!*\
  !*** ./front_end/wine_profile/Purchases.tsx ***!
  \**********************************************/
/*! exports provided: Purchases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Purchases", function() { return Purchases; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TableHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TableHeader */ "./components/TableHeader.tsx");
/* harmony import */ var _components_TableCells__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TableCells */ "./components/TableCells.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MaterialIcon */ "./components/MaterialIcon.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");






var SortingValue;
(function (SortingValue) {
    SortingValue[SortingValue["Date"] = 0] = "Date";
    SortingValue[SortingValue["Quantity"] = 1] = "Quantity";
    SortingValue[SortingValue["Price"] = 2] = "Price";
    SortingValue[SortingValue["Vintage"] = 3] = "Vintage";
    SortingValue[SortingValue["Store"] = 4] = "Store";
    SortingValue[SortingValue["Memo"] = 5] = "Memo";
})(SortingValue || (SortingValue = {}));
const Purchases = ({ purchases, onEditClick, onDeleteClick }) => {
    const [ascending, setAscending] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
    const [sorting, setSorting] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(SortingValue.Date);
    const onHeaderClick = (event, sortingVal) => {
        event.preventDefault();
        if (sortingVal === sorting) {
            setAscending(!ascending);
        }
        else {
            setSorting(sortingVal);
            setAscending(false);
        }
    };
    const tableHeaderProps = (sortingVal) => {
        if (sorting === sortingVal) {
            const sortingState = ascending ? _components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["SortingState"].Ascending : _components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["SortingState"].Descending;
            return {
                sortingState,
                onClick: (e) => onHeaderClick(e, sortingVal),
            };
        }
        return {
            sortingState: _components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["SortingState"].NotSorted,
            onClick: (e) => onHeaderClick(e, sortingVal),
        };
    };
    const sortedPurchases = () => {
        const ascendingMultiplier = ascending ? 1 : -1;
        switch (sorting) {
            case SortingValue.Date:
                return purchases.sort((p1, p2) => { var _a, _b; return ((_a = p1.date, (_a !== null && _a !== void 0 ? _a : 0)) - (_b = p2.date, (_b !== null && _b !== void 0 ? _b : 0))) * ascendingMultiplier; });
            case SortingValue.Memo:
                return purchases.sort((p1, p2) => { var _a, _b; return ((_a = p1.memo, (_a !== null && _a !== void 0 ? _a : "")).localeCompare((_b = p2.memo, (_b !== null && _b !== void 0 ? _b : "")))) * ascendingMultiplier; });
            case SortingValue.Price:
                return purchases.sort((p1, p2) => { var _a, _b; return ((_a = p1.price, (_a !== null && _a !== void 0 ? _a : 0)) - (_b = p2.price, (_b !== null && _b !== void 0 ? _b : 0))) * ascendingMultiplier; });
            case SortingValue.Quantity:
                return purchases.sort((p1, p2) => { var _a, _b; return ((_a = p1.quantity, (_a !== null && _a !== void 0 ? _a : 0)) - (_b = p2.quantity, (_b !== null && _b !== void 0 ? _b : 0))) * ascendingMultiplier; });
            case SortingValue.Store:
                return purchases.sort((p1, p2) => { var _a, _b; return ((_a = p1.store, (_a !== null && _a !== void 0 ? _a : "")).localeCompare((_b = p2.store, (_b !== null && _b !== void 0 ? _b : "")))) * ascendingMultiplier; });
            case SortingValue.Vintage:
                // Sort NV first
                return purchases.sort((p1, p2) => { var _a, _b; return ((_a = p1.vintage, (_a !== null && _a !== void 0 ? _a : 3000)) - (_b = p2.vintage, (_b !== null && _b !== void 0 ? _b : 3000))) * ascendingMultiplier; });
            default:
                return purchases;
        }
    };
    if (purchases) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "responsive highlight" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["TableHeader"], { sortingState: _components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["SortingState"].NotSorted, onClick: () => null }, "Modify"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["TableHeader"], Object.assign({}, tableHeaderProps(SortingValue.Date)), "Date"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["TableHeader"], Object.assign({}, tableHeaderProps(SortingValue.Quantity), { isNumCol: true }), "Quantity"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["TableHeader"], Object.assign({}, tableHeaderProps(SortingValue.Price), { isNumCol: true }), "Price"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["TableHeader"], Object.assign({}, tableHeaderProps(SortingValue.Vintage), { isNumCol: true }), "Vintage"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["TableHeader"], Object.assign({}, tableHeaderProps(SortingValue.Store)), "Store"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["TableHeader"], Object.assign({}, tableHeaderProps(SortingValue.Memo)), "Memo"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, sortedPurchases().map((purchase) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: purchase.id },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_5__["Btn"], { classes: ["btn-small", "yellow-bg"], onClick: () => onEditClick(purchase.id) },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__["MaterialIcon"], { iconName: "edit" })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_5__["Btn"], { classes: ["btn-small", "red-bg"], onClick: () => onDeleteClick(purchase.id) },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__["MaterialIcon"], { iconName: "delete" }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_2__["DateCell"], { date: purchase.date }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_2__["NumCell"], { num: purchase.quantity, maxDecimals: 0 }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_2__["PriceCell"], { price: purchase.price }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_2__["YearCell"], { year: purchase.vintage }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_2__["TextCell"], { text: purchase.store }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_2__["TextCell"], { text: purchase.memo }))))))));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "No previously recorded purchases"))));
};
Purchases.displayName = "Purchases";


/***/ }),

/***/ "./front_end/wine_profile/WineData.tsx":
/*!*********************************************!*\
  !*** ./front_end/wine_profile/WineData.tsx ***!
  \*********************************************/
/*! exports provided: WineData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineData", function() { return WineData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _inventory_InventoryTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inventory/InventoryTable */ "./front_end/inventory/InventoryTable.tsx");
/* harmony import */ var _components_MaterialIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MaterialIcon */ "./components/MaterialIcon.tsx");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.ts");





const WineData = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", { className: "light" }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_4__["capitalizeFirstLetter"])(props.color)),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", { className: "inline-h" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Inventory: "),
            " ",
            props.inventory),
        "\u00A0",
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { classes: ["green-bg", "btn-floating-small"], onClick: () => props.onInventoryChange(_inventory_InventoryTable__WEBPACK_IMPORTED_MODULE_2__["InventoryChange"].Increase) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_3__["MaterialIcon"], { iconName: "add_circle" })),
        "\u2009",
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { classes: ["red-bg", "btn-floating-small"], onClick: () => props.onInventoryChange(_inventory_InventoryTable__WEBPACK_IMPORTED_MODULE_2__["InventoryChange"].Decrease) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_3__["MaterialIcon"], { iconName: "do_not_disturb_on" })),
        props.lastPurchaseVintage &&
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Vintage:"),
                " ",
                props.lastPurchaseVintage),
        props.vitiArea && props.vitiAreaId &&
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Viticultural area:"),
                "\u00A0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: `/viti-areas/${props.vitiAreaId}`, className: "text-link" }, props.vitiArea)),
        props.description &&
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Description:"),
                " ",
                props.description),
        props.rating &&
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Rating:"),
                " ",
                props.rating),
        props.notes &&
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Notes:"),
                " ",
                props.notes),
        props.why &&
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Why:"),
                " ",
                props.why)));
};
WineData.displayName = "WineData";


/***/ }),

/***/ "./front_end/wine_profile/WineHeader.tsx":
/*!***********************************************!*\
  !*** ./front_end/wine_profile/WineHeader.tsx ***!
  \***********************************************/
/*! exports provided: WineHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineHeader", function() { return WineHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");


const WineHeader = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_1__["Row"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { s: 12 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NameType, Object.assign({}, props)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: `/producers/${props.producerId}`, className: "text-link" }, props.producer),
                " of ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: `/regions/${props.regionId}`, className: "text-link" }, props.region))),
        props.children));
};
WineHeader.displayName = "WineHeader";
const NameType = ({ name, wineType, wineTypeId }) => {
    const wineTypeElem = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: `/wine-types/${wineTypeId}/` }, wineType));
    if (name) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "bold" },
            name,
            " ",
            wineTypeElem));
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "bold" }, wineTypeElem);
};
NameType.displayName = "NameType";


/***/ }),

/***/ "./front_end/wine_profile/WineImg.tsx":
/*!********************************************!*\
  !*** ./front_end/wine_profile/WineImg.tsx ***!
  \********************************************/
/*! exports provided: WineImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineImg", function() { return WineImg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WineImg = ({ id }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card", id: "wine-image" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-image" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: `/media/${id}.png`, alt: "Wine Image", className: "responsive-img" }))));
};
WineImg.displayName = "WineImg";


/***/ }),

/***/ "./front_end/wine_profile/WineProfileApp.tsx":
/*!***************************************************!*\
  !*** ./front_end/wine_profile/WineProfileApp.tsx ***!
  \***************************************************/
/*! exports provided: WineProfileApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineProfileApp", function() { return WineProfileApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_FixedActionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FixedActionList */ "./components/FixedActionList.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MaterialIcon */ "./components/MaterialIcon.tsx");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Modal */ "./components/Modal.tsx");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Preloader */ "./components/Preloader.tsx");
/* harmony import */ var _components_PurchaseInputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PurchaseInputs */ "./components/PurchaseInputs.tsx");
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _inventory_InventoryTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../inventory/InventoryTable */ "./front_end/inventory/InventoryTable.tsx");
/* harmony import */ var _new_wine_WineInputs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../new_wine/WineInputs */ "./front_end/new_wine/WineInputs.tsx");
/* harmony import */ var _EditWine__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EditWine */ "./front_end/wine_profile/EditWine.tsx");
/* harmony import */ var _GrapesTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GrapesTable */ "./front_end/wine_profile/GrapesTable.tsx");
/* harmony import */ var _ModifyPurchase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ModifyPurchase */ "./front_end/wine_profile/ModifyPurchase.tsx");
/* harmony import */ var _Purchases__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Purchases */ "./front_end/wine_profile/Purchases.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./state */ "./front_end/wine_profile/state.ts");
/* harmony import */ var _WineData__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./WineData */ "./front_end/wine_profile/WineData.tsx");
/* harmony import */ var _WineHeader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./WineHeader */ "./front_end/wine_profile/WineHeader.tsx");
/* harmony import */ var _WineImg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./WineImg */ "./front_end/wine_profile/WineImg.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





















const WineProfileApp = ({ id }) => {
    // Setup
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(_state__WEBPACK_IMPORTED_MODULE_17__["wineReducer"], Object(_state__WEBPACK_IMPORTED_MODULE_17__["initState"])());
    const logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_8__["default"](WineProfileApp.name);
    // Data fetchers
    const fetchWine = () => __awaiter(void 0, void 0, void 0, function* () {
        const wine = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["getWine"])({ id });
        dispatch({ type: "setWine", wine });
    });
    const fetchPurchases = () => __awaiter(void 0, void 0, void 0, function* () {
        const purchases = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["getPurchases"])({ wineId: id });
        dispatch({ type: "setPurchases", purchases });
    });
    const fetchHasImage = () => __awaiter(void 0, void 0, void 0, function* () {
        const hasImage = yield Object(_lib_utils__WEBPACK_IMPORTED_MODULE_10__["imageExists"])(`/media/${id}.png`);
        dispatch({ type: "setHasImage", hasImage });
    });
    const fetchGrapes = () => __awaiter(void 0, void 0, void 0, function* () {
        const grapes = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["getWineGrapes"])({ wineId: id });
        dispatch({ type: "setGrapes", grapes });
    });
    // FetchInitialState
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        function fetchData() {
            return __awaiter(this, void 0, void 0, function* () {
                Promise.all([
                    fetchWine(),
                    fetchPurchases(),
                    fetchHasImage(),
                    fetchGrapes(),
                ]);
            });
        }
        fetchData();
    }, [id]);
    // Event handlers
    const onInventoryChange = (inventoryChange) => __awaiter(void 0, void 0, void 0, function* () {
        if (state.wine) {
            const copy = state.wine;
            if (inventoryChange == _inventory_InventoryTable__WEBPACK_IMPORTED_MODULE_11__["InventoryChange"].Increase) {
                copy.inventory += 1;
            }
            else {
                copy.inventory -= 1;
            }
            try {
                // TODO: include file
                const wine = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["updateWine"])(id, copy, null);
                dispatch({ type: "setWine", wine });
            }
            catch (e) {
                logger.logWarning(`Failed to change inventory. ${e.message}`);
            }
        }
    });
    const onSubmitWineEdit = (editedWine) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        try {
            const form = yield Object(_new_wine_WineInputs__WEBPACK_IMPORTED_MODULE_12__["wineDataToForm"])(editedWine, (_b = (_a = state.wine) === null || _a === void 0 ? void 0 : _a.inventory, (_b !== null && _b !== void 0 ? _b : 0)));
            // TODO: handle file edit
            const updatedWine = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["updateWine"])(id, form, null);
            dispatch({ type: "setWine", wine: updatedWine });
            dispatch({ type: "setMode", mode: { type: "display" } });
        }
        catch (e) {
            logger.logWarning(`Failed to update wine. ${e.message}`);
        }
    });
    const onSubmitPurchaseEdit = (purchase) => __awaiter(void 0, void 0, void 0, function* () {
        // @ts-ignore
        const purchaseId = state.mode.id;
        try {
            const form = yield Object(_components_PurchaseInputs__WEBPACK_IMPORTED_MODULE_7__["purchaseDataToForm"])(purchase, id);
            const updatedPurchase = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["updatePurchase"])(purchaseId, form);
            dispatch({ type: "setPurchases", purchases: state.purchases.map((purchase) => {
                    if (purchase.id === purchaseId) {
                        return updatedPurchase;
                    }
                    return purchase;
                }) });
        }
        catch (err) {
            logger.logWarning(`Failed to update purchase: ${err.message}`);
        }
        finally {
            dispatch({ type: "setMode", mode: { "type": "display" } });
        }
    });
    const onDeletePurchase = (purchaseId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["deletePurchase"])(purchaseId);
        }
        catch (e) {
            logger.logWarning(`Error deleting purchase with id: ${purchaseId}. ${e.message}`);
        }
        finally {
            dispatch({ type: "setMode", mode: { "type": "display" } });
        }
    });
    // TODO: add to inventory
    const onSubmitAddPurchase = (purchase) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const form = yield Object(_components_PurchaseInputs__WEBPACK_IMPORTED_MODULE_7__["purchaseDataToForm"])(purchase, id);
            const newPurchase = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["createPurchase"])(form);
            dispatch({ type: "setPurchases", purchases: state.purchases.concat([newPurchase]) });
        }
        catch (err) {
            logger.logWarning(`Failed to create new purchase: ${err.message}`);
        }
        finally {
            dispatch({ type: "setMode", mode: { "type": "display" } });
        }
    });
    // Render helpers
    const renderWineData = () => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WineData__WEBPACK_IMPORTED_MODULE_18__["WineData"], { color: state.wine.color, description: state.wine.description, inventory: state.wine.inventory, onInventoryChange: (ic) => onInventoryChange(ic), lastPurchaseVintage: state.wine.lastPurchaseVintage, notes: state.wine.notes, rating: state.wine.rating, vitiArea: state.wine.vitiArea, vitiAreaId: state.wine.vitiAreaId, why: state.wine.why }));
    const renderWineDetails = () => {
        if (state.hasImage && state.grapes.length) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12, l: 4 }, renderWineData()),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12, l: 4 }, renderGrapes()),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12, l: 4 }, renderWineImg())));
        }
        if (state.hasImage) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12, l: 6 }, renderWineData()),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12, l: 6 }, renderWineImg())));
        }
        if (state.grapes.length) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12, l: 6 }, renderWineData()),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12, l: 6 }, renderGrapes())));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12 }, renderWineData()));
    };
    const renderGrapes = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GrapesTable__WEBPACK_IMPORTED_MODULE_14__["GrapesTable"], { grapes: state.grapes });
    const renderWineImg = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WineImg__WEBPACK_IMPORTED_MODULE_20__["WineImg"], { id: id });
    // Displays relevant modal for editing/deleting
    const renderModal = () => {
        if (state.mode.type === "editWine") {
            if (state.wine) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditWine__WEBPACK_IMPORTED_MODULE_13__["EditWine"], { wine: state.wine, onSubmit: onSubmitWineEdit, onCancel: () => dispatch({ type: "setMode", mode: { type: "display" } }) }));
            }
        }
        else if (state.mode.type === "editPurchase") {
            const purchaseId = state.mode.id;
            const purchase = state.purchases.find((p) => p.id === purchaseId);
            if (purchase) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModifyPurchase__WEBPACK_IMPORTED_MODULE_15__["ModifyPurchase"], { title: "Edit purchase", purchase: purchase, onCancel: () => dispatch({ type: "setMode", mode: { type: "display" } }), onSubmit: onSubmitPurchaseEdit }));
            }
            return null;
        }
        else if (state.mode.type === "deletePurchase") {
            const purchaseId = state.mode.id;
            const purchase = state.purchases.find((p) => p.id === purchaseId);
            if (purchase) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_5__["DeleteModal"], { item: "Purchase", onYesClick: () => onDeletePurchase(purchaseId), onNoClick: () => dispatch({ type: "setMode", mode: { type: "display" } }) }));
            }
            return null;
        }
        else if (state.mode.type === "addPurchase") {
            const newPurchaseData = Object(_components_PurchaseInputs__WEBPACK_IMPORTED_MODULE_7__["initPurchaseInputData"])();
            const newPurchase = Object.assign(Object.assign({}, newPurchaseData), { id: 0, wineId: id, storeId: null });
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModifyPurchase__WEBPACK_IMPORTED_MODULE_15__["ModifyPurchase"], { title: "Add purchase", purchase: newPurchase, onCancel: () => dispatch({ type: "setMode", mode: { type: "display" } }), onSubmit: onSubmitAddPurchase }));
        }
        else {
            return null;
        }
    };
    if (!state.wine) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_6__["Preloader"], null);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WineHeader__WEBPACK_IMPORTED_MODULE_19__["WineHeader"], { name: state.wine.name, producer: state.wine.producer, producerId: state.wine.producerId, region: state.wine.region, regionId: state.wine.regionId, wineType: state.wine.wineType, wineTypeId: state.wine.wineTypeId }, renderWineDetails()),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12, m: 9 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Purchases")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12, m: 3, classes: ["fixed-action-div"] },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FixedActionList__WEBPACK_IMPORTED_MODULE_2__["FixedActionList"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { onClick: () => dispatch({ type: "setMode", mode: { type: "addPurchase" } }), classes: ["green-bg"] },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__["MaterialIcon"], { iconName: "add" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { onClick: () => dispatch({ type: "setMode", mode: { type: "editWine" } }), classes: ["yellow-bg"] },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__["MaterialIcon"], { iconName: "edit" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { onClick: () => dispatch({ type: "setMode", mode: { type: "deleteWine" } }), classes: ["red-bg"] },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__["MaterialIcon"], { iconName: "delete" })))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Purchases__WEBPACK_IMPORTED_MODULE_16__["Purchases"], { purchases: state.purchases, onEditClick: (id) => dispatch({ type: "setMode", mode: { type: "editPurchase", id } }), onDeleteClick: (id) => dispatch({ type: "setMode", mode: { type: "deletePurchase", id } }) }))),
        renderModal()));
};
WineProfileApp.displayName = "WineProfileApp";


/***/ }),

/***/ "./front_end/wine_profile/state.ts":
/*!*****************************************!*\
  !*** ./front_end/wine_profile/state.ts ***!
  \*****************************************/
/*! exports provided: initState, wineReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wineReducer", function() { return wineReducer; });
const initState = () => ({
    mode: { type: "display" },
    hasImage: false,
    grapes: [],
    wine: undefined,
    purchases: [],
});
const wineReducer = (state, action) => {
    switch (action.type) {
        case "setMode":
            return Object.assign(Object.assign({}, state), { mode: action.mode });
        case "setHasImage":
            return Object.assign(Object.assign({}, state), { hasImage: action.hasImage });
        case "setGrapes":
            return Object.assign(Object.assign({}, state), { grapes: action.grapes });
        case "setWine":
            return Object.assign(Object.assign({}, state), { wine: action.wine });
        case "setPurchases":
            return Object.assign(Object.assign({}, state), { purchases: action.purchases });
        default:
            return state;
    }
};


/***/ }),

/***/ "./front_end/wine_profile/wine_profile.ts":
/*!************************************************!*\
  !*** ./front_end/wine_profile/wine_profile.ts ***!
  \************************************************/
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
/* harmony import */ var _WineProfileApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WineProfileApp */ "./front_end/wine_profile/WineProfileApp.tsx");





Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"])(() => {
    Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_3__["navbar"])();
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_WineProfileApp__WEBPACK_IMPORTED_MODULE_4__["WineProfileApp"], { id }), document.getElementById("wine_profile-container"));
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

/***/ 9:
/*!******************************************************!*\
  !*** multi ./front_end/wine_profile/wine_profile.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carter/git/vinoteca/vinoteca/front_end/wine_profile/wine_profile.ts */"./front_end/wine_profile/wine_profile.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25zLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrYm94SW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29sb3JJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRlSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmlsZUlucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpeGVkQWN0aW9uTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdGVyaWFsSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OdW1iZXJJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QcmVsb2FkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZHVjZXJJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QdXJjaGFzZUlucHV0cy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SYXRpbmdJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWdpb25JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWxlY3RJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGVjaWFsQ2hhckJ0bi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGVjaWFsQ2hhcnMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFibGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFibGVDZWxscy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZUhlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RleHRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9WaXRpQXJlYUlucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dpbmVUeXBlSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC9pbnZlbnRvcnkvSW52ZW50b3J5VGFibGUudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC9uZXdfd2luZS9XaW5lSW5wdXRzLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvd2luZV9wcm9maWxlL0VkaXRXaW5lLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvd2luZV9wcm9maWxlL0dyYXBlc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvd2luZV9wcm9maWxlL01vZGlmeVB1cmNoYXNlLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvd2luZV9wcm9maWxlL1B1cmNoYXNlcy50c3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRfZW5kL3dpbmVfcHJvZmlsZS9XaW5lRGF0YS50c3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRfZW5kL3dpbmVfcHJvZmlsZS9XaW5lSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvd2luZV9wcm9maWxlL1dpbmVJbWcudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC93aW5lX3Byb2ZpbGUvV2luZVByb2ZpbGVBcHAudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC93aW5lX3Byb2ZpbGUvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRfZW5kL3dpbmVfcHJvZmlsZS93aW5lX3Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL0FwaUhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9saWIvQ29va2llcy50cyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL2xpYi9SZXN0QXBpLnRzIiwid2VicGFjazovLy8uL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9saWIvd2lkZ2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRUY7QUFDaUI7QUFPOUMsU0FBUyxjQUFjLENBQUMsT0FBNkI7SUFDakQsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVNLE1BQU0sV0FBVyxHQUFnQyxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzlELE1BQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFrRCxFQUFFLEVBQUU7UUFDckUsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQ25CLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUNELE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBc0MsRUFBRSxFQUFFO1FBQ3ZELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELE9BQU8sQ0FDSCwyREFBRyxJQUFJLEVBQUMsR0FBRyxFQUNQLFNBQVMsRUFBRyx5Q0FBeUMsT0FBTyxFQUFFLEVBQzlELE9BQU8sRUFBRyxPQUFPLEVBQ2pCLFdBQVcsRUFBRyxTQUFTLElBRXJCLEtBQUssQ0FBQyxRQUFRLENBQ2hCLENBQ1AsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNGLFdBQVcsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO0FBQ3hDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBTXRELE1BQU0sR0FBRyxHQUF3QixDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzlDLE1BQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFzQyxFQUFFLEVBQUU7UUFDdkQsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsT0FBTyxDQUNILGdFQUFRLFNBQVMsRUFBRyxxQ0FBcUMsT0FBTyxFQUFFLEVBQzlELE9BQU8sRUFBRyxPQUFPLElBRWYsS0FBSyxDQUFDLFFBQVEsQ0FDWCxDQUNaLENBQUM7QUFDTixDQUFDO0FBQ0QsR0FBRyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFPakIsTUFBTSxtQkFBbUIsR0FDNUIsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUVWLE9BQU8sQ0FDSCxvREFBQyx5Q0FBRyxJQUFDLENBQUMsRUFBRyxFQUFFO1FBQ1Asb0RBQUMsR0FBRyxJQUFDLE9BQU8sRUFBRyxDQUFDLFVBQVUsQ0FBQyxFQUN2QixPQUFPLEVBQUcsS0FBSyxDQUFDLGNBQWM7O1lBRzlCLG9EQUFDLDBEQUFZLElBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsT0FBTyxHQUFHLENBQ2hEO1FBQ04sb0RBQUMsR0FBRyxJQUFDLE9BQU8sRUFBRyxDQUFDLFFBQVEsQ0FBQyxFQUNyQixPQUFPLEVBQUcsS0FBSyxDQUFDLGFBQWEsYUFHM0IsQ0FDSixDQUNULENBQUM7QUFDTixDQUFDO0FBQ0QsbUJBQW1CLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDcEZ4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDRztBQUNNO0FBT25DLE1BQU0sV0FBVyxHQUFHLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFpQjtJQUNuQyxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQztJQUNqQyxDQUFDLFFBQVEsRUFBRSx5QkFBeUIsQ0FBQztJQUNyQyxDQUFDLFFBQVEsRUFBRSx5QkFBeUIsQ0FBQztJQUNyQyxDQUFDLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQztJQUNuQyxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQztJQUNuQyxDQUFDLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQztJQUNuQyxDQUFDLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQztJQUNoQyxDQUFDLFNBQVMsRUFBRSx5QkFBeUIsQ0FBQztJQUN0QyxDQUFDLFFBQVEsRUFBRSx5QkFBeUIsQ0FBQztDQUN4QyxDQUFDLENBQUM7QUFFSCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDeEIsTUFBTSxpQkFBaUIsR0FBRywwQkFBMEIsQ0FBQztBQUNyRCxNQUFNLGdCQUFnQixHQUFHLDBCQUEwQixDQUFDO0FBRXBELFNBQVMsa0JBQWtCLENBQUMsS0FBYSxFQUFFLFlBQW9CO0lBQzNELElBQUksWUFBWSxJQUFJLENBQUMsSUFBSSxZQUFZLElBQUksQ0FBQyxFQUFFO1FBQ3hDLE1BQU0sS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7S0FDdkQ7SUFDRCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQzNELENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUM3QixDQUFDO0lBRUYsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQztJQUN6QixPQUFPLFFBQVEsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDMUUsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsU0FBUyxDQUFDLElBQW1CO0lBQ2xDLE1BQU0sU0FBUyxHQUFhLEVBQUUsQ0FBQztJQUMvQixNQUFNLFdBQVcsR0FBYSxFQUFFLENBQUM7SUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1FBQ2hCLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRUQsMkVBQTJFO0FBQzNFLFNBQVMsa0JBQWtCLENBQUMsU0FBbUI7SUFDM0MsK0RBQStEO0lBQy9ELElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUM3RCxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFNTSxNQUFNLFFBQVEsR0FBNkIsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUU7SUFDekQsTUFBTSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFakQsTUFBTSxNQUFNLEdBQTZCO1FBQ3JDLElBQUksRUFBRTtZQUNGLFFBQVEsRUFBRSxDQUFDO29CQUNQLGVBQWUsRUFBRTt3QkFDYixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRTt3QkFDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUU7d0JBQ3JCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFFO3FCQUV4QjtvQkFDRCxXQUFXLEVBQUUsQ0FBQztvQkFDZCxJQUFJLEVBQUUsU0FBUztvQkFDZixLQUFLLEVBQUUsRUFBRTtpQkFDWixDQUFDO1lBQ0YsTUFBTSxFQUFFLFdBQVc7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDTCxrQ0FBa0M7WUFDbEMsTUFBTSxFQUFFO2dCQUNKLE9BQU8sRUFBRTtvQkFDTCxNQUFNLEVBQUUsRUFBRTtvQkFDVixHQUFHLEVBQUUsRUFBRTtpQkFDVjthQUNKO1lBQ0QsTUFBTSxFQUFFO2dCQUNKLE1BQU0sRUFBRTtvQkFDSixVQUFVLEVBQUUsV0FBVztvQkFDdkIsUUFBUSxFQUFFLEVBQUU7aUJBQ2Y7Z0JBQ0QsUUFBUSxFQUFFLFFBQVE7YUFDckI7WUFDRCxVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUU7Z0JBQ04sY0FBYyxFQUFFLFdBQVc7Z0JBQzNCLFlBQVksRUFBRSxFQUFFO2FBQ25CO1NBQ0o7UUFDRCxJQUFJLEVBQUUsS0FBSztLQUNkLENBQUM7SUFFRixNQUFNLFNBQVMsR0FBRyw0Q0FBSyxDQUFDLE1BQU0sRUFBK0MsQ0FBQztJQUU5RSw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDakIsTUFBTSxHQUFHLEdBQUcsSUFBSSwrQ0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFeEIsT0FBTyxDQUNILHVFQUFRLE1BQU0sRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFFLFNBQVMsR0FBSSxDQUM1QyxDQUFDO0FBQ04sQ0FBQztBQUNELFFBQVEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0FBTzNCLE1BQU0sUUFBUSxHQUE2QixDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxFQUFFLEVBQUU7SUFDakUsTUFBTSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsaUJBQWlCO0lBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUNoQyxPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUVoRCxNQUFNLE1BQU0sR0FBNkI7UUFDckMsSUFBSSxFQUFFO1lBQ0YsUUFBUSxFQUFFLENBQUM7b0JBQ1AsZUFBZSxFQUFFLFdBQVc7b0JBQzVCLElBQUksRUFBRSxTQUFTO2lCQUNsQixDQUFDO1lBQ0YsTUFBTSxFQUFFLFdBQVc7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDTCxNQUFNLEVBQUU7Z0JBQ0osT0FBTyxFQUFFO29CQUNMLE1BQU0sRUFBRSxFQUFFO29CQUNWLEdBQUcsRUFBRSxFQUFFO2lCQUNWO2FBQ0o7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLEtBQUs7YUFDakI7WUFDRCxVQUFVLEVBQUUsSUFBSTtZQUNoQixNQUFNLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLENBQUM7d0JBQ0osU0FBUyxFQUFFOzRCQUNQLEtBQUssRUFBRSxnQkFBZ0I7eUJBQzFCO3dCQUNELEtBQUssRUFBRTs0QkFDSCxXQUFXLEVBQUUsSUFBSTs0QkFDakIsU0FBUyxFQUFFLGlCQUFpQjs0QkFDNUIsVUFBVSxFQUFFLFdBQVc7NEJBQ3ZCLFFBQVEsRUFBRSxFQUFFO3lCQUNmO3FCQUNKLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7d0JBQ0osU0FBUyxFQUFFOzRCQUNQLEtBQUssRUFBRSxnQkFBZ0I7eUJBQzFCO3dCQUNELEtBQUssRUFBRTs0QkFDSCxTQUFTLEVBQUUsaUJBQWlCOzRCQUM1QixVQUFVLEVBQUUsV0FBVzs0QkFDdkIsUUFBUSxFQUFFLEVBQUU7eUJBQ2Y7cUJBQ0osQ0FBQzthQUNMO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLGNBQWMsRUFBRSxXQUFXO2dCQUMzQixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsZUFBZSxFQUFFLFdBQVc7Z0JBQzVCLGFBQWEsRUFBRSxFQUFFO2FBQ3BCO1NBQ0o7UUFDRCxJQUFJLEVBQUUsZUFBZTtLQUN4QixDQUFDO0lBRUYsTUFBTSxTQUFTLEdBQUcsNENBQUssQ0FBQyxNQUFNLEVBQStDLENBQUM7SUFFOUUsNENBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2pCLE1BQU0sR0FBRyxHQUFHLElBQUksK0NBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRXhCLE9BQU8sQ0FDSCx1RUFBUSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEdBQUksQ0FDN0MsQ0FBQztBQUNOLENBQUM7QUFDRCxRQUFRLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztBQU8zQixNQUFNLFNBQVMsR0FBOEIsQ0FBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUMsRUFBRSxFQUFFO0lBQ3pFLE1BQU0sTUFBTSxHQUFHLElBQUksbURBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUMsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsTUFBTSxFQUFFO1FBQ3JDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0RBQWdEO1lBQ3ZELEdBQUcsSUFBSSxDQUFDLE1BQU0sUUFBUSxZQUFZLENBQUMsTUFBTSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxNQUFNLE1BQU0sR0FBNkI7UUFDckMsSUFBSSxFQUFFO1lBQ0YsUUFBUSxFQUFFLEVBQUU7WUFDWixNQUFNLEVBQUUsV0FBVztTQUN0QjtRQUNELE9BQU8sRUFBRTtZQUNMLE1BQU0sRUFBRTtnQkFDSixPQUFPLEVBQUU7b0JBQ0wsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsR0FBRyxFQUFFLEVBQUU7aUJBQ1Y7YUFDSjtZQUNELFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE1BQU0sRUFBRTtnQkFDSixLQUFLLEVBQUUsQ0FBQzt3QkFDSixTQUFTLEVBQUU7NEJBQ1AsS0FBSyxFQUFFLGdCQUFnQjt5QkFDMUI7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILFdBQVcsRUFBRSxJQUFJOzRCQUNqQixTQUFTLEVBQUUsaUJBQWlCOzRCQUM1QixVQUFVLEVBQUUsV0FBVzs0QkFDdkIsUUFBUSxFQUFFLEVBQUU7eUJBQ2Y7cUJBQ0osQ0FBQztnQkFDRixLQUFLLEVBQUUsQ0FBQzt3QkFDSixTQUFTLEVBQUU7NEJBQ1AsS0FBSyxFQUFFLGdCQUFnQjt5QkFDMUI7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILFNBQVMsRUFBRSxpQkFBaUI7NEJBQzVCLFVBQVUsRUFBRSxXQUFXOzRCQUN2QixRQUFRLEVBQUUsRUFBRTt5QkFDZjtxQkFDSixDQUFDO2FBQ0w7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sY0FBYyxFQUFFLFdBQVc7Z0JBQzNCLFlBQVksRUFBRSxFQUFFO2dCQUNoQixlQUFlLEVBQUUsV0FBVztnQkFDNUIsYUFBYSxFQUFFLEVBQUU7YUFDcEI7U0FDSjtRQUNELElBQUksRUFBRSxNQUFNO0tBQ2YsQ0FBQztJQUVGLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDaEQsK0NBQStDO0lBQy9DLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUMsTUFBTSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsZ0VBQWdFO1FBQ2hFLGFBQWE7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsZUFBZSxFQUFFLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDeEQsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztTQUN6QixDQUFDLENBQUM7UUFDSCxpQkFBaUI7UUFDakIsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDckMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDckMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxNQUFNLFNBQVMsR0FBRyw0Q0FBSyxDQUFDLE1BQU0sRUFBK0MsQ0FBQztJQUU5RSw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDakIsTUFBTSxJQUFJLEdBQUcsSUFBSSwrQ0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFeEIsT0FBTyxDQUNILHVFQUFRLEdBQUcsRUFBRSxTQUFTLEdBQUksQ0FDN0IsQ0FBQztBQUNOLENBQUM7QUFDRCxTQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pTcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ2M7QUFDQztBQVVsQyxNQUFNLGFBQWMsU0FBUSw0Q0FBSyxDQUFDLFNBQWlCO0lBSy9DLE1BQU07UUFDVCxNQUFNLEVBQUUsR0FBRywyREFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUNILDJEQUFDLHlDQUFHLG9CQUFNLElBQUksQ0FBQyxLQUFLO1lBQ2hCLG9FQUFLLFNBQVMsRUFBQyxRQUFRO2dCQUNuQixzRUFBTyxPQUFPLEVBQUcsRUFBRTtvQkFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7b0JBQ2pCLHNFQUFPLElBQUksRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFHLEVBQUUsRUFBRyxJQUFJLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ25ELE9BQU8sRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDOUIsUUFBUSxFQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUN0RCxRQUFRLEVBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FDaEM7b0JBQ0YscUVBQU0sU0FBUyxFQUFDLE9BQU8sR0FBRyxDQUN0QixDQUNOLENBQ0osQ0FDVCxDQUFDO0lBQ04sQ0FBQzs7QUFyQmEsMEJBQVksR0FBRztJQUN6QixPQUFPLEVBQUUsSUFBSTtDQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z1QztBQUNuQjtBQUNTO0FBRVE7QUFFQztBQU9yQyxNQUFNLGVBQWUsR0FBRyxDQUFDLE1BQWMsRUFBRSxXQUFvQixFQUF5RCxFQUFFO0lBQzNILE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxHQUFHLDRDQUFLLENBQUMsUUFBUSxDQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLE1BQU0sU0FBUyxHQUFHLDRDQUFLLENBQUMsTUFBTSxFQUErQyxDQUFDO0lBRTlFLE1BQU0sZUFBZSxHQUFFLENBQUMsT0FBaUIsRUFBWSxFQUFFO1FBQ25ELElBQUksV0FBVyxFQUFFO1lBQ2IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDakIsU0FBZSxXQUFXOztnQkFDdEIsSUFBSTtvQkFDQSxNQUFNLE1BQU0sR0FBYSxNQUFNLDhEQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzdDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4RSxJQUFJLDBEQUFVLENBQUMsU0FBUyxDQUFDLE9BQVEsQ0FBQyxDQUFDO2lCQUN0QztnQkFBQyxXQUFNO29CQUNKLE1BQU0sQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztpQkFDM0M7WUFDTCxDQUFDO1NBQUE7UUFFRCxXQUFXLEVBQUUsQ0FBQztJQUNsQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDO0FBQ3hDLENBQUM7QUFFTSxNQUFNLFVBQVUsR0FBcUIsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNsRCxNQUFNLE1BQU0sR0FBRyxJQUFJLG1EQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTNDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVqRixPQUFPLENBQ0gsMkRBQUMsd0RBQVcsa0JBQUMsSUFBSSxFQUFDLE9BQU8sRUFDckIsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUNiLFNBQVMsRUFBRyxTQUFTLEVBQ3JCLE9BQU8sRUFBRyxnQkFBZ0IsRUFDMUIsUUFBUSxFQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsd0JBQUMsS0FBSywwQ0FBRSxRQUFRLENBQUMsQ0FBQyxJQUFDLElBQy9CLEtBQUssRUFDWixDQUNMLENBQUM7QUFDTixDQUFDO0FBQ0QsVUFBVSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2RHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUNJO0FBQ25CO0FBQ007QUFDb0I7QUFRN0MsTUFBTSxTQUFTLEdBQXFCLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtJQUM5RCxNQUFNLFFBQVEsR0FBRyw0Q0FBSyxDQUFDLE1BQU0sRUFBOEMsQ0FBQztJQUU1RSw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDakIsTUFBTSxVQUFVLEdBQUcsSUFBSSwwREFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDaEQsU0FBUyxFQUFFLEtBQUs7WUFDaEIsV0FBVyxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRTtZQUNuQixxREFBcUQ7WUFDckQsT0FBTyxFQUFFO2dCQUNMLFFBQVEsQ0FBQyw0REFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7WUFDRCxTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDLENBQUM7SUFDUCxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWYsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxtRUFBTSxDQUFDLDREQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RSxNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBRWpDLE9BQU8sQ0FDSCwyREFBQyw0Q0FBSyxJQUFDLElBQUksRUFBRyxJQUFJLEVBQ2QsS0FBSyxFQUFHLFVBQVUsRUFDbEIsU0FBUyxFQUFDLFlBQVksRUFDdEIsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUNiLE1BQU0sRUFBRyxVQUFVLEVBQ25CLFFBQVEsRUFBRyxRQUFRLEdBQ3JCLENBQ0wsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNGLFNBQVMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekNwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ2M7QUFPakMsTUFBTSxTQUFTLEdBQXFCLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLEVBQUUsRUFBRTtJQUM1RCxNQUFNLEVBQUUsR0FBRywyREFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLDZCQUE2QjtJQUM3QixPQUFPLENBQ0g7UUFDSSxvRUFBSyxTQUFTLEVBQUMsbUNBQW1DO1lBQzlDLG9FQUFLLFNBQVMsRUFBQyxxQkFBcUI7Z0JBQ2hDLHlFQUFRLElBQUksQ0FBUztnQkFDckIsc0VBQU8sSUFBSSxFQUFDLE1BQU0sRUFDZCxJQUFJLEVBQUcsRUFBRSxFQUNULEVBQUUsRUFBRyxFQUFFLEVBQ1AsUUFBUSxFQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsZUFBQyxlQUFRLGFBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLDBDQUFFLElBQUksQ0FBQyxDQUFDLHdDQUFLLElBQUksR0FBQyxNQUM3RCxDQUNBO1lBQ04sb0VBQUssU0FBUyxFQUFDLG1CQUFtQjtnQkFDOUIsc0VBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsb0JBQW9CLEdBQUcsQ0FDbEQsQ0FDSixDQUNQLENBQ04sQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNGLFNBQVMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOUJwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVEO0FBQzdCO0FBQ2M7QUFFTTtBQUV2QyxNQUFNLGVBQWUsR0FBNEIsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUM5RCxNQUFNLE1BQU0sR0FBRyw0Q0FBSyxDQUFDLE1BQU0sRUFBNEMsQ0FBQztJQUV4RSw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDakIsSUFBSSxvRUFBb0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUViLE9BQU8sQ0FDQyxvRUFBSyxTQUFTLEVBQUMsNkJBQTZCLEVBQ3hDLEdBQUcsRUFBRyxNQUFNO1FBRVosMkRBQUMsb0RBQVcsSUFBQyxPQUFPLEVBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEVBQzFDLE9BQU8sRUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJO1lBRXBCLDJEQUFDLDBEQUFZLElBQUMsUUFBUSxFQUFDLE1BQU0sR0FBRyxDQUN0QjtRQUNkOztZQUFPLDRDQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUNqRCx1RUFBTSxLQUFLLENBQU8sQ0FDckIsQ0FBQztnQkFBUSxDQUNSLENBQ2IsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNGLGVBQWUsQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM1QmhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQVkxQixTQUFTLFdBQVcsQ0FBQyxJQUFjLEVBQUUsT0FBa0I7SUFDbkQsSUFBSSxVQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtRQUNoQixJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2QjtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsS0FBb0I7SUFDckMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1QyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDNUMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNoRCxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxTQUFpQixFQUFFLFdBQW1CLEVBQTJCLEVBQUU7SUFDN0YsTUFBTSxTQUFTLEdBQTRCLENBQUMsS0FBb0IsRUFBRSxFQUFFO1FBQ2hFLE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sQ0FDSCxvRUFBSyxTQUFTLEVBQUcsR0FBRyxTQUFTLElBQUksWUFBWSxFQUFFLElBQ3pDLEtBQUssQ0FBQyxRQUFRLENBQ2QsQ0FDVCxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBQ0YsU0FBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDcEMsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQUVNLE1BQU0sR0FBRyxHQUE0QixvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFeEUsTUFBTSxHQUFHLEdBQTRCLG9CQUFvQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUV4RSxNQUFNLFVBQVUsR0FBNEIsb0JBQW9CLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaER4RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ047QUFDYztBQUNKO0FBdUI3QixNQUFNLEtBQTZCLFNBQVEsNENBQUssQ0FBQyxTQUF5QjtJQVF0RSxNQUFNO1FBQ1QsTUFBTSxFQUFFLEdBQUcsMkRBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FDSCwyREFBQyxnREFBVSxJQUFDLENBQUMsRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRyxDQUFDLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUcsQ0FBQyxFQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5RCxzRUFBTyxFQUFFLEVBQUcsRUFBRSxFQUNWLElBQUksRUFBRyxFQUFFLEVBQ1QsU0FBUyxFQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUNoQyxHQUFHLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQ3pCLElBQUksRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDM0IsUUFBUSxFQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQzlCLEtBQUssRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDeEIsUUFBUSxFQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUNsQyxNQUFNLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQzFCLE9BQU8sRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDNUIsSUFBSSxFQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUN0QixHQUFHLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQ3BCLEdBQUcsRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FDdEI7WUFDRixzRUFBTyxTQUFTLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFHLE9BQU8sRUFBRyxFQUFFLElBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLENBQ0MsQ0FDaEIsQ0FBQztJQUNOLENBQUM7SUFFTSxpQkFBaUI7UUFDcEIsc0RBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxrQkFBa0I7UUFDckIsc0RBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxRQUFRLENBQUMsQ0FBc0M7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDOztBQTFDYSxrQkFBWSxHQUFHO0lBQ3pCLE9BQU8sRUFBRSxJQUFJO0lBQ2IsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVM7SUFDekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVM7SUFDeEIsTUFBTSxFQUFFLENBQUMsQ0FBcUMsRUFBRSxFQUFFLENBQUMsU0FBUztDQUMvRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaENOO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBT3hCLE1BQU0sWUFBWSxHQUFxQixDQUFDLEtBQUssRUFBRSxFQUFFO0lBQ3BELE9BQU8sQ0FDRiwyREFBRyxTQUFTLEVBQUcsa0JBQWtCLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFDN0MsS0FBSyxDQUFDLFFBQVEsQ0FDaEIsQ0FDUCxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBQ0YsWUFBWSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNkMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDTTtBQUNBO0FBTXpCLE1BQU0sS0FBSyxHQUEwQixDQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBRTtJQUN2RCxNQUFNLEdBQUcsR0FBRyw0Q0FBSyxDQUFDLE1BQU0sRUFBNEMsQ0FBQztJQUNyRSw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDakIsTUFBTSxRQUFRLEdBQUcsSUFBSSxzREFBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLDREQUE0RDtRQUM1RCx5QkFBeUI7UUFDekIsT0FBTyxHQUFHLEVBQUUsd0JBQUMsUUFBUSwwQ0FBRSxLQUFLLEtBQUU7SUFDbEMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVWLE9BQU8sQ0FDSCxvRUFBSyxHQUFHLEVBQUcsR0FBRyxFQUFHLFNBQVMsRUFBQyxPQUFPLElBQzVCLFFBQVEsQ0FDUixDQUNULENBQUM7QUFDTixDQUFDO0FBQ0QsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFFckIsTUFBTSxZQUFZLEdBQTRCLENBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFFLENBQUMsQ0FDakUsd0VBQVMsU0FBUyxFQUFDLGVBQWUsSUFDNUIsUUFBUSxDQUNKLENBQ2I7QUFDRCxZQUFZLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztBQUVuQyxNQUFNLFdBQVcsR0FBNEIsQ0FBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUUsQ0FBQyxDQUNoRSx3RUFBUyxTQUFTLEVBQUMsY0FBYyxJQUMzQixRQUFRLENBQ0osQ0FDYjtBQUNELFdBQVcsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO0FBUWpDLE1BQU0sV0FBVyxHQUFnQyxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzlELE9BQU8sQ0FDSCwyREFBQyxLQUFLO1FBQ0YsMkRBQUMsWUFBWTtZQUNUOztnQkFBMkMsS0FBSyxDQUFDLElBQUk7b0JBQVE7WUFDN0QscUdBQW1DLENBQ3hCO1FBQ2YsMkRBQUMsV0FBVztZQUNSLDJEQUFDLDRDQUFHLElBQUMsT0FBTyxFQUFHLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxFQUNyQyxPQUFPLEVBQUcsS0FBSyxDQUFDLFVBQVU7O2dCQUVQLEtBQUssQ0FBQyxJQUFJLENBQzNCO1lBQ04sMkRBQUMsNENBQUcsSUFBRSxPQUFPLEVBQUcsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQyxFQUN2RCxPQUFPLEVBQUcsS0FBSyxDQUFDLFNBQVMsU0FHdkIsQ0FDSSxDQUNWLENBQ1gsQ0FBQztBQUNOLENBQUM7QUFDRCxXQUFXLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BFeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNNO0FBZXpCLE1BQU0sV0FBVyxHQUFxQixDQUFDLEtBQUssRUFBRSxFQUFFOztJQUNuRCxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO1FBQzdCLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLG1FQUFtRTtRQUNuRSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxPQUFPLENBQ0gsMkRBQUMsNENBQUssSUFBQyxTQUFTLEVBQUMsUUFBUSxFQUNyQixJQUFJLEVBQUcsS0FBSyxDQUFDLElBQUksRUFDakIsT0FBTyxRQUFHLEtBQUssQ0FBQyxPQUFPLHVDQUFJLElBQUksSUFDL0IsU0FBUyxFQUFDLFVBQVUsRUFDcEIsS0FBSyxFQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxFQUMxQixRQUFRLEVBQUcsUUFBUSxFQUNuQixHQUFHLEVBQUcsS0FBSyxDQUFDLEdBQUcsRUFDZixHQUFHLEVBQUcsS0FBSyxDQUFDLEdBQUcsRUFDZixJQUFJLEVBQUcsS0FBSyxDQUFDLElBQUksRUFDakIsQ0FBQyxFQUFHLEtBQUssQ0FBQyxDQUFDLEVBQ1gsQ0FBQyxFQUFHLEtBQUssQ0FBQyxDQUFDLEVBQ1gsQ0FBQyxFQUFHLEtBQUssQ0FBQyxDQUFDLEdBQ2IsQ0FDTDtBQUNMLENBQUMsQ0FBQztBQUNGLFdBQVcsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDeEN4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRXhCLE1BQU0sU0FBUyxHQUFpQixDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3pDLE9BQU8sQ0FDSCw2REFBSyxTQUFTLEVBQUMsVUFBVTtRQUNyQiw2REFBSyxTQUFTLEVBQUMsZUFBZSxHQUFPLENBQ25DLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFDRCxTQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUU3QixNQUFNLGFBQWEsR0FBaUIsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUM3QyxPQUFPLENBQ0gsNkRBQUssU0FBUyxFQUFDLDBCQUEwQjtRQUNyQyw2REFBSyxTQUFTLEVBQUMsZUFBZTtZQUMxQiw2REFBSyxTQUFTLEVBQUMscUJBQXFCO2dCQUNoQyw2REFBSyxTQUFTLEVBQUMsUUFBUSxHQUFPLENBQzVCO1lBQUEsNkRBQUssU0FBUyxFQUFDLFdBQVc7Z0JBQzVCLDZEQUFLLFNBQVMsRUFBQyxRQUFRLEdBQU8sQ0FDNUI7WUFBQSw2REFBSyxTQUFTLEVBQUMsc0JBQXNCO2dCQUN2Qyw2REFBSyxTQUFTLEVBQUMsUUFBUSxHQUFPLENBQzVCLENBQ0osQ0FDSixDQUNULENBQUM7QUFDTixDQUFDO0FBQ0QsYUFBYSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCbEI7QUFDUztBQUVtQjtBQUNSO0FBRU47QUFNakMsTUFBTSxhQUFhLEdBQXFCLENBQUMsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLEVBQUUsRUFBRTtJQUNqRSxNQUFNLE1BQU0sR0FBRyxJQUFJLG1EQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLE1BQU0sUUFBUSxHQUFHLDRDQUFLLENBQUMsTUFBTSxFQUE4QyxDQUFDO0lBRTVFLDRDQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNqQixTQUFlLGNBQWM7O2dCQUN6QixJQUFJO29CQUNBLE1BQU0sU0FBUyxHQUFnQixNQUFNLGlFQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3RELGlFQUFZLENBQUMsUUFBUSxFQUFFLDJEQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQ3ZEO2dCQUFDLFdBQU07b0JBQ0osTUFBTSxDQUFDLFFBQVEsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO2lCQUNsRTtZQUNMLENBQUM7U0FBQTtRQUVELGNBQWMsRUFBRSxDQUFDO0lBQ3JCLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFZixPQUFPLENBQ0gsMkRBQUMsb0RBQVMsSUFBQyxJQUFJLEVBQUMsVUFBVSxFQUN0QixTQUFTLEVBQUMsY0FBYyxFQUN4QixDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQ2IsUUFBUSxFQUFHLFFBQVEsRUFDbkIsS0FBSyxFQUFHLEtBQUssRUFDYixRQUFRLEVBQUcsUUFBUSxHQUNyQixDQUNMO0FBQ0wsQ0FBQyxDQUFDO0FBQ0YsYUFBYSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q2xCO0FBQ1M7QUFFa0M7QUFDUjtBQUNmO0FBQ0U7QUFDUjtBQUNJO0FBQ0o7QUFZakMsTUFBTSxxQkFBcUIsR0FBd0IsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM3RCxJQUFJLEVBQUUsNERBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzNCLFFBQVEsRUFBRSxDQUFDO0lBQ1gsb0JBQW9CLEVBQUUsSUFBSTtJQUMxQixLQUFLLEVBQUUsSUFBSTtJQUNYLE9BQU8sRUFBRSxxRUFBa0IsRUFBRTtJQUM3QixLQUFLLEVBQUUsRUFBRTtJQUNULElBQUksRUFBRSxFQUFFO0NBQ1gsQ0FBQyxDQUFDO0FBRUksTUFBTSxrQkFBa0IsR0FBRyxDQUFPLElBQW1CLEVBQUUsTUFBYyxFQUEwQixFQUFFOztJQUNwRyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1osS0FBSyxHQUFHLE1BQU0scUVBQWdCLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0tBQzFFO0lBQ0QsT0FBTztRQUNILElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLE1BQU07UUFDTixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7UUFDdkIsT0FBTyxjQUFFLEtBQUssMENBQUUsRUFBRSx1Q0FBSSxJQUFJO1FBQzFCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztRQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87UUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO0tBQ2xCLENBQUM7QUFDTixDQUFDO0FBV00sTUFBTSxvQkFBb0IsR0FBeUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDeEYsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2pCLEtBQUssU0FBUztZQUNWLHVDQUFZLEtBQUssS0FBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBRztRQUMzQyxLQUFLLGFBQWE7WUFDZCx1Q0FBWSxLQUFLLEtBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLElBQUc7UUFDbkQsS0FBSyx5QkFBeUI7WUFDMUIsdUNBQVksS0FBSyxLQUFFLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxvQkFBb0IsSUFBRztRQUMzRSxLQUFLLFVBQVU7WUFDWCx1Q0FBWSxLQUFLLEtBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUc7UUFDN0MsS0FBSyxZQUFZO1lBQ2IsdUNBQVksS0FBSyxLQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxJQUFHO1FBQ2pELEtBQUssVUFBVTtZQUNYLHVDQUFZLEtBQUssS0FBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFBRztRQUM3QyxLQUFLLFNBQVM7WUFDVix1Q0FBWSxLQUFLLEtBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQUc7UUFDM0M7WUFDSSxPQUFPLEtBQUssQ0FBQztLQUNwQjtBQUNMLENBQUM7QUFRTSxNQUFNLGNBQWMsR0FBcUIsQ0FBQyxFQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsRUFBRSxFQUFFO0lBQ3RGLE1BQU0sTUFBTSxHQUFHLElBQUksbURBQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsTUFBTSxhQUFhLEdBQUcsNENBQUssQ0FBQyxNQUFNLEVBQThDLENBQUM7SUFFakYsTUFBTSxhQUFhLEdBQTRCLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDckQsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDakIsU0FBZSxXQUFXOztnQkFDdEIsSUFBSTtvQkFDQSxNQUFNLE1BQU0sR0FBYSxNQUFNLDhEQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzdDLGlFQUFZLENBQUMsYUFBYSxFQUFFLDJEQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7aUJBQzlEO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNSLE1BQU0sQ0FBQyxRQUFRLENBQUMsMENBQTBDLENBQUMsQ0FBQztpQkFDL0Q7WUFDTCxDQUFDO1NBQUE7UUFFRCxXQUFXLEVBQUUsQ0FBQztJQUNsQixDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBRXBCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRSxNQUFNLFNBQVMsR0FBRyxtQkFBbUI7UUFDakMsQ0FBQyxDQUFDLDJEQUFDLDREQUFhLElBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLE9BQU8sUUFDNUMsSUFBSSxFQUFDLGtCQUFrQixFQUN2QixTQUFTLEVBQUcsSUFBSSxDQUFDLG9CQUFxQixFQUN0QyxPQUFPLEVBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBRSxPQUFPLEVBQUMsQ0FBQyxFQUNqRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEdBQ2Y7UUFDRixDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsT0FBTyxDQUNIO1FBQ0ksMkRBQUMsb0RBQVMsSUFBQyxJQUFJLEVBQUMsZUFBZSxFQUMzQixJQUFJLEVBQUcsSUFBSSxDQUFDLElBQUksRUFDaEIsUUFBUSxFQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxHQUM5RDtRQUNGLDJEQUFDLHdEQUFXLElBQUMsSUFBSSxFQUFDLFVBQVUsRUFDeEIsTUFBTSxFQUFHLElBQUksQ0FBQyxRQUFRLEVBQ3RCLFFBQVEsRUFBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxFQUNsRSxHQUFHLEVBQUcsQ0FBQyxFQUNQLElBQUksRUFBQyxHQUFHLEVBQ1IsQ0FBQyxFQUFHLFNBQVMsRUFBRyxDQUFDLEVBQUcsU0FBUyxHQUMvQjtRQUNBLFNBQVM7UUFDWCwyREFBQyx3REFBVyxJQUFDLElBQUksRUFBQyxPQUFPLEVBQ3JCLE1BQU0sRUFBRyxJQUFJLENBQUMsS0FBSyxFQUNuQixRQUFRLEVBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFDekQsR0FBRyxFQUFHLENBQUMsRUFDUCxJQUFJLEVBQUMsTUFBTSxFQUNYLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsR0FDZjtRQUNGLDJEQUFDLHdEQUFXLElBQUMsSUFBSSxFQUFDLFNBQVMsRUFDdkIsTUFBTSxFQUFHLElBQUksQ0FBQyxPQUFPLEVBQ3JCLFFBQVEsRUFBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUMsQ0FBQyxFQUMvRCxHQUFHLEVBQUcsSUFBSSxFQUNWLElBQUksRUFBQyxHQUFHLEVBQ1IsR0FBRyxFQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQzlCLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsR0FDZjtRQUNGLDJEQUFDLG9EQUFTLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFDbkIsU0FBUyxFQUFDLGNBQWMsRUFDeEIsS0FBSyxFQUFHLElBQUksQ0FBQyxLQUFLLEVBQ2xCLFFBQVEsRUFBRyxhQUFhLEVBQ3hCLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFDYixRQUFRLEVBQUcsYUFBYSxHQUMxQjtRQUNGLDJEQUFDLG9EQUFTLElBQUMsSUFBSSxFQUFDLE1BQU0sRUFDbEIsU0FBUyxFQUFDLEVBQUUsRUFDWixLQUFLLEVBQUcsSUFBSSxDQUFDLElBQUksRUFDakIsUUFBUSxFQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLEVBQ3RELENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsR0FDZixDQUNILENBQ04sQ0FBQztBQUVOLENBQUM7QUFDRCxjQUFjLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDL0o5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ2Q7QUFDc0I7QUFDbkI7QUFTdEIsTUFBTSxXQUFXLEdBQXFCLENBQUMsRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUFHLEVBQUU7SUFDckcsTUFBTSxHQUFHLEdBQUcsNENBQUssQ0FBQyxNQUFNLEVBQThDLENBQUM7SUFFdkUsNENBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2pCLElBQUkscURBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzFCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFVixPQUFPLENBQ0gsMkRBQUMseUNBQUcsSUFBQyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsT0FBTyxFQUFHLENBQUMsYUFBYSxDQUFFO1FBQzNDLDJEQUFDLDREQUFhLElBQUMsSUFBSSxFQUFDLFlBQVksRUFDNUIsSUFBSSxFQUFDLFFBQVEsRUFDYixTQUFTLEVBQUcsU0FBUyxFQUNyQixPQUFPLEVBQUcsaUJBQWlCLEdBQzdCO1FBQ0Ysc0VBQU8sT0FBTyxFQUFDLFFBQVEsR0FBRztRQUMxQixrRUFBRyxTQUFTLEVBQUMsYUFBYTtZQUN0QixzRUFBTyxJQUFJLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQzdCLEdBQUcsRUFBRyxHQUFHLEVBQ1QsR0FBRyxFQUFHLENBQUMsRUFBRyxHQUFHLEVBQUcsRUFBRSxFQUFHLElBQUksRUFBRyxDQUFDLEVBQzdCLEtBQUssRUFBRyxNQUFNLEVBQ2QsUUFBUSxFQUFHLENBQUMsU0FBUyxFQUNyQixRQUFRLEVBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FDaEUsQ0FDRixDQUNGLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFDRCxXQUFXLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNkO0FBQ1M7QUFFbUM7QUFFeEI7QUFFTjtBQU9qQyxNQUFNLFdBQVcsR0FBcUIsQ0FBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFDLEVBQUUsRUFBRTtJQUM3RSxNQUFNLE1BQU0sR0FBRyxJQUFJLG1EQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTVDLE1BQU0sUUFBUSxHQUFHLDRDQUFLLENBQUMsTUFBTSxFQUE4QyxDQUFDO0lBRTVFLDJCQUEyQjtJQUMzQixNQUFNLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUMsR0FBRyw0Q0FBSyxDQUFDLFFBQVEsQ0FBdUIsRUFBRSxDQUFDLENBQUM7SUFDL0YsNENBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2pCLFNBQWUsd0JBQXdCOztnQkFDbkMsSUFBSTtvQkFDQSxNQUFNLE9BQU8sR0FBYyxNQUFNLCtEQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2hELHNCQUFzQixDQUFDLDJEQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDeEMsaUVBQVksQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQ3pEO2dCQUFDLFdBQU07b0JBQ0osTUFBTSxDQUFDLFFBQVEsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO2lCQUNoRTtZQUNMLENBQUM7U0FBQTtRQUNELHdCQUF3QixFQUFFLENBQUM7SUFDL0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUV2QyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLDRDQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRW5ELHNFQUFzRTtJQUN0RSw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDakIsU0FBZSxtQkFBbUI7O2dCQUM5QixJQUFJO29CQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztvQkFDdkQsTUFBTSxPQUFPLEdBQUcsTUFBTSwrREFBVSxDQUFDLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUM7b0JBQy9ELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQ3RCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzFCLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDckI7eUJBQU07d0JBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNwQjtpQkFDSjtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDUiw2QkFBNkI7b0JBQzdCLElBQUksQ0FBQyw2REFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ2pDLE1BQU0sQ0FBQyxVQUFVLENBQUMsNkNBQTZDLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3BFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3JCO2lCQUNKO1lBQ0wsQ0FBQztTQUFBO1FBRUQsSUFBSSxZQUFZLEVBQUU7WUFDZCxtQkFBbUIsRUFBRSxDQUFDO1NBQ3pCO2FBQU07WUFDSCxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUUvQixPQUFPLENBQ0gsMkRBQUMsb0RBQVMsSUFBQyxJQUFJLEVBQUMsUUFBUSxFQUNwQixTQUFTLEVBQUMsY0FBYyxFQUN4QixDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQ2IsT0FBTyxFQUFHLE9BQU8sRUFDakIsS0FBSyxFQUFHLEtBQUssRUFDYixRQUFRLEVBQUcsUUFBUSxHQUNyQixDQUNMLENBQUM7QUFDTixDQUFDO0FBQ0QsV0FBVyxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMxRXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNxQztBQUMzQjtBQWM3QixNQUFNLFdBQVcsR0FBcUIsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNuRCxNQUFNLEVBQUUsR0FBRywyREFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxJQUFJLFVBQW1DLENBQUM7SUFDeEMsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1FBQ2xCLFVBQVUsR0FBRyx1RUFBUSxLQUFLLEVBQUMsRUFBRSxFQUFDLFFBQVEsVUFDaEMsS0FBSyxDQUFDLFVBQVUsQ0FDYixDQUFDO0tBQ2I7SUFDRCxPQUFPLENBQ0gsMkRBQUMsZ0RBQVUsSUFBQyxDQUFDLEVBQUcsS0FBSyxDQUFDLENBQUMsRUFBRyxDQUFDLEVBQUcsS0FBSyxDQUFDLENBQUMsRUFBRyxDQUFDLEVBQUcsS0FBSyxDQUFDLENBQUM7UUFDL0MsdUVBQVEsRUFBRSxFQUFHLEVBQUUsRUFDWCxJQUFJLEVBQUcsRUFBRSxFQUNULFFBQVEsRUFBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUNoRCxLQUFLLEVBQUcsS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUMzQyxHQUFHLEVBQUcsS0FBSyxDQUFDLFNBQVM7WUFFbkIsVUFBVTtZQUNWLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQzNCLE9BQU8sQ0FDSCx1RUFBUSxLQUFLLEVBQUcsTUFBTSxFQUFHLEdBQUcsRUFBRyxNQUFNLElBQy9CLHdFQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUMxQixDQUNaLENBQUM7WUFDTixDQUFDLENBQUMsQ0FDRztRQUNULHNFQUFPLE9BQU8sRUFBRyxFQUFFLElBQUssS0FBSyxDQUFDLElBQUksQ0FBVSxDQUNuQyxDQUNoQixDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDNUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDYztBQU9qQyxNQUFNLGNBQWMsR0FBcUIsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUN0RCxNQUFNLE9BQU8sR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDekQsT0FBTyxDQUNILDJEQUFDLG9EQUFXLElBQUMsT0FBTyxFQUFHLE9BQU8sRUFDMUIsT0FBTyxFQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFDcEIsV0FBVyxFQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUUzQyxLQUFLLENBQUMsSUFBSSxDQUNGLENBQ2pCLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDYztBQUNYO0FBQ3FCO0FBRWxELElBQUssSUFHSjtBQUhELFdBQUssSUFBSTtJQUNMLGlDQUFLO0lBQ0wsaUNBQUs7QUFDVCxDQUFDLEVBSEksSUFBSSxLQUFKLElBQUksUUFHUjtBQWFNLE1BQU0sWUFBYSxTQUFRLDRDQUFLLENBQUMsU0FBeUI7SUFDdEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFXLEVBQUUsSUFBWSxFQUFFLFFBQWdCO1FBQ2xFLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQztTQUNyQjtRQUNELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsS0FBSyxFQUFFO2dCQUNILEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7Z0JBQy9ELEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRzthQUM3RDtZQUNELFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMxQixDQUFDO0lBQ04sQ0FBQztJQUVNLE1BQU07O1FBQ1QsTUFBTSxPQUFPLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3BCLE9BQU8sQ0FDSCwyREFBQyx5Q0FBRyxJQUFDLE9BQU8sRUFBRyxPQUFPLENBQUMsTUFBTSxPQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyx1Q0FBSSxFQUFFLEdBQUM7Z0JBRW5ELDJEQUFDLG9EQUFXLElBQUMsT0FBTyxFQUFHLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsRUFDdEQsT0FBTyxFQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFDcEIsV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUV2QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDekM7Z0JBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQzVCLE9BQU8sQ0FDSCwyREFBQyw4REFBYyxJQUFDLElBQUksRUFBRyxJQUFJLEVBQ3ZCLEdBQUcsRUFBRyxJQUFJLEVBQ1YsT0FBTyxFQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FDeEMsQ0FDTCxDQUFDO2dCQUNOLENBQUMsQ0FBQyxDQUNBLENBQ1QsQ0FBQztTQUNMO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xDLE9BQU87b0JBQ0gsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3BELFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSztpQkFDMUIsQ0FBQzthQUNMO1lBQ0QsT0FBTztnQkFDSCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEQsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQzFCLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ2hGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBUXhCLE1BQU0sZ0JBQWdCLEdBQW9CO0lBQzdDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDckMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDckM7QUFPTSxNQUFNLEtBQUssR0FBcUIsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7SUFDN0MsTUFBTSxTQUFTLFNBQUcsS0FBSyxDQUFDLFNBQVMsdUNBQUksSUFBSSxHQUFDO0lBQzFDLE9BQU8sQ0FDSCwrREFBTyxTQUFTLEVBQUcsd0JBQXdCLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDckU7WUFDSSxnRUFDTSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUN4QixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtvQkFDekIsT0FBTyw0REFBSSxHQUFHLEVBQUcsR0FBRyxJQUFLLEdBQUcsQ0FBTztpQkFDdEM7Z0JBQ0QsT0FBTyxDQUNILDREQUFJLEdBQUcsRUFBRyxHQUFHLENBQUMsSUFBSSxFQUNkLFNBQVMsRUFBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFDdkMsR0FBRyxDQUFDLElBQUksQ0FDVCxDQUNSLENBQUM7WUFDTixDQUFDLENBQUMsQ0FDRCxDQUNEO1FBQ1IsbUVBQ00sS0FBSyxDQUFDLFFBQVEsQ0FDWixDQUNKLENBQ1gsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNGLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDNUM1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUNmO0FBQytEO0FBT2xGLE1BQU0sUUFBUyxTQUFRLDRDQUFLLENBQUMsU0FBeUI7SUFLbEQsTUFBTTs7UUFDVCxPQUFPLDZFQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSx1Q0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBTyxDQUFDO0lBQzlELENBQUM7O0FBTmEscUJBQVksR0FBRztJQUN6QixPQUFPLEVBQUUsRUFBRTtDQUNkO0FBS0osQ0FBQztBQVFLLE1BQU0sT0FBTyxHQUE0QixDQUFDLEtBQUssRUFBRSxFQUFFO0lBQ3RELE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHO1FBQ2pCLG9DQUFvQztRQUNwQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUNULEVBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDeEMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBQyxDQUFDO1FBQ3RFLENBQUMsQ0FBQyxrREFBTyxDQUFDO0lBQ2QsT0FBTyxDQUNILG1FQUFJLFNBQVMsRUFBQyxTQUFTLElBQUcsR0FBRyxDQUFPLENBQ3ZDLENBQUM7QUFDTixDQUFDLENBQUM7QUFDRixPQUFPLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztBQU16QixNQUFNLFNBQVMsR0FBOEIsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUMxRCxPQUFPLENBQ0gsMkRBQUMsT0FBTyxJQUFDLEdBQUcsRUFBRyxLQUFLLENBQUMsS0FBSyxFQUN0QixXQUFXLEVBQUcsQ0FBQyxFQUNmLFdBQVcsRUFBRyxDQUFDLEdBQ2pCLENBQ0wsQ0FBQztBQUNOLENBQUM7QUFDRCxTQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUU3QixNQUFNLFFBQVEsR0FBb0MsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7SUFDL0QsTUFBTSxJQUFJLGVBQUcsS0FBSyxDQUFDLElBQUksMENBQUUsUUFBUSx5Q0FBTSxJQUFJLEdBQUM7SUFDNUMsT0FBTyxDQUNILG1FQUFJLFNBQVMsRUFBQyxTQUFTLElBQ2pCLElBQUksQ0FDTCxDQUNSLENBQUM7QUFDTixDQUFDO0FBQ0QsUUFBUSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7QUFNM0IsTUFBTSxRQUFRLEdBQTZCLENBQUMsS0FBSyxFQUFFLEVBQUU7O0lBQ3hELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1FQUFNLENBQUMsNERBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQUUsS0FBSyxDQUFDLE1BQU0sdUNBQUksY0FBYyxHQUFDLENBQUMsQ0FBQyxDQUFDLGtEQUFPLENBQUM7SUFDckcsT0FBTyxDQUNILHVFQUFNLE9BQU8sQ0FBTyxDQUN2QixDQUFDO0FBQ04sQ0FBQztBQUNELFFBQVEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0FBTTNCLE1BQU0sU0FBUyxHQUE4QixDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzFELElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtRQUNiLE9BQU8sdUVBQU0sd0VBQXFCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFPLENBQUM7S0FDMUQ7SUFDRCxPQUFPLHNFQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBQ0YsU0FBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFRcEMsTUFBTSxVQUFVLEdBQStCLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDckQsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUMxQyxPQUFPLENBQ0g7UUFDSSxrRUFBRyxJQUFJLEVBQUcsR0FBRyxJQUNQLEtBQUssQ0FBQyxJQUFJLENBQ1osQ0FDSCxDQUNSO0FBQ0wsQ0FBQztBQUNELFVBQVUsQ0FBQyxXQUFXLEdBQUcsWUFBWTtBQVM5QixNQUFNLGVBQWUsR0FBZ0MsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNsRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDWDtZQUNJLGtFQUFHLElBQUksRUFBRyxLQUFLLENBQUMsR0FBRyxJQUNiLGlFQUFjLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQzVDLENBQ0g7S0FDUjtJQUNELE9BQU8sQ0FDSCwyREFBQyxVQUFVLElBQUMsRUFBRSxFQUFHLEtBQUssQ0FBQyxFQUFFLEVBQ3JCLEtBQUssRUFBQyxPQUFPLEVBQ2IsSUFBSSxFQUFHLGlFQUFjLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQ25ELENBQ0wsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNGLGVBQWUsQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUM7QUFFekMsTUFBTSxZQUFZLEdBQXlDLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDeEUsT0FBTyxDQUNILDJEQUFDLFVBQVUsSUFBQyxFQUFFLEVBQUcsS0FBSyxDQUFDLEVBQUUsRUFDckIsS0FBSyxFQUFDLFdBQVcsRUFDakIsSUFBSSxFQUFHLEtBQUssQ0FBQyxJQUFJLEdBQ25CLENBQ0wsQ0FBQztBQUNOLENBQUM7QUFDRCxZQUFZLENBQUMsV0FBVyxHQUFHLGNBQWM7QUFFbEMsTUFBTSxVQUFVLEdBQXlDLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDdEUsT0FBTyxDQUNILDJEQUFDLFVBQVUsSUFBQyxFQUFFLEVBQUcsS0FBSyxDQUFDLEVBQUUsRUFDckIsS0FBSyxFQUFDLFNBQVMsRUFDZixJQUFJLEVBQUcsS0FBSyxDQUFDLElBQUksR0FDbkIsQ0FDTCxDQUFDO0FBQ04sQ0FBQztBQUNELFVBQVUsQ0FBQyxXQUFXLEdBQUcsWUFBWTtBQUU5QixNQUFNLFlBQVksR0FBdUQsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUN0RixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFDMUIsT0FBTyxzRUFBTSxDQUFDO0tBQ2pCO0lBQ0QsT0FBTyxDQUNILDJEQUFDLFVBQVUsSUFBQyxFQUFFLEVBQUcsS0FBSyxDQUFDLEVBQUUsRUFDckIsS0FBSyxFQUFDLFlBQVksRUFDbEIsSUFBSSxFQUFHLEtBQUssQ0FBQyxJQUFJLEdBQ25CLENBQ0wsQ0FBQztBQUNOLENBQUM7QUFDRCxZQUFZLENBQUMsV0FBVyxHQUFHLGNBQWM7QUFFbEMsTUFBTSxZQUFZLEdBQXlDLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDeEUsT0FBTyxDQUNILDJEQUFDLFVBQVUsSUFBQyxFQUFFLEVBQUcsS0FBSyxDQUFDLEVBQUUsRUFDckIsS0FBSyxFQUFDLFlBQVksRUFDbEIsSUFBSSxFQUFHLEtBQUssQ0FBQyxJQUFJLEdBQ25CLENBQ0wsQ0FBQztBQUNOLENBQUM7QUFDRCxZQUFZLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pLMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNTO0FBQ1k7QUFDRDtBQUNGO0FBRTVDLElBQVksWUFJWDtBQUpELFdBQVksWUFBWTtJQUNwQix5REFBUztJQUNULHlEQUFTO0lBQ1QsMkRBQVU7QUFDZCxDQUFDLEVBSlcsWUFBWSxLQUFaLFlBQVksUUFJdkI7QUFTTSxNQUFNLFdBQVksU0FBUSw0Q0FBSyxDQUFDLFNBQWlCO0lBS3BELFlBQW1CLEtBQWE7UUFDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyxDQUNILG1FQUFJLFNBQVMsRUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRyxFQUFFLElBQ3BGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FDckIsQ0FDUixDQUFDO0lBQ04sQ0FBQztJQUVPLGFBQWE7UUFDakIsTUFBTSxJQUFJLEdBQUcsQ0FDVCxrRUFBRyxJQUFJLEVBQUMsRUFBRSxFQUNOLE9BQU8sRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDNUIsU0FBUyxFQUFDLGNBQWMsSUFFdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ3JCLENBQ1AsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQ3RCLENBQUMsQ0FBQyxDQUNFO2dCQUNNLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLElBQUksQ0FDUCxDQUNOLENBQUMsQ0FBQyxDQUFDLENBQ0E7WUFDTSxJQUFJO1lBQ0osSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUNwQixDQUNOO0lBQ1QsQ0FBQztJQUVPLFVBQVU7UUFDZCxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO1lBQzdCLEtBQUssWUFBWSxDQUFDLFNBQVM7Z0JBQ3ZCLE9BQU8sMkRBQUMsMERBQVksSUFBQyxRQUFRLEVBQUMsZUFBZSxHQUFHLENBQUM7WUFDckQsS0FBSyxZQUFZLENBQUMsVUFBVTtnQkFDeEIsT0FBTywyREFBQywwREFBWSxJQUFDLFFBQVEsRUFBQyxpQkFBaUIsR0FBRyxDQUFDO1lBQ3ZEO2dCQUNJLE9BQU8sMkRBQUMsMERBQVksSUFBQyxRQUFRLEVBQUMsaUJBQWlCLEVBQUMsU0FBUyxFQUFDLFdBQVcsR0FBRyxDQUFDO1NBQ2hGO0lBQ0wsQ0FBQzs7QUFoRGEsd0JBQVksR0FBRztJQUN6QixRQUFRLEVBQUUsS0FBSztDQUNsQixDQUFDO0FBc0RDLE1BQU0sWUFBWSxHQUEyQixDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzFELE9BQU8sQ0FDSDtRQUNJLHNFQUFPLElBQUksRUFBQyxRQUFRLEVBQ2hCLFFBQVEsRUFBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUNoRCxLQUFLLEVBQUcsS0FBSyxDQUFDLElBQUksR0FDcEIsQ0FDRCxDQUNSLENBQUM7QUFDTixDQUFDO0FBQ0QsWUFBWSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7QUFFbkMsTUFBTSxrQkFBa0IsR0FBMkIsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNoRSxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDMUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxtREFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBRW5ELE1BQU0sUUFBUSxHQUFHLENBQUMsU0FBaUIsRUFBRSxFQUFFO1FBQ25DLElBQUksU0FBUyxLQUFLLFdBQVcsRUFBRTtZQUMzQixLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RCO2FBQU07WUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUUvRCxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLEdBQUcsbUVBQWUsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFM0UsT0FBTyxDQUNIO1FBQ0ksMkRBQUMsd0RBQVcsSUFBQyxJQUFJLEVBQUMsRUFBRSxFQUNoQixTQUFTLEVBQUcsU0FBUyxFQUNyQixPQUFPLEVBQUcsZ0JBQWdCLEVBQzFCLFNBQVMsRUFBRyxTQUFTLEVBQ3JCLFFBQVEsRUFBRyxRQUFRLEdBQ3JCLENBQ0QsQ0FDUixDQUFDO0FBQ04sQ0FBQztBQUNELGtCQUFrQixDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsSHpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRU07QUFFL0MsSUFBWSxRQUdYO0FBSEQsV0FBWSxRQUFRO0lBQ2hCLG9DQUF3QjtJQUN4QixnQ0FBb0I7QUFDeEIsQ0FBQyxFQUhXLFFBQVEsS0FBUixRQUFRLFFBR25CO0FBRU0sTUFBTSxJQUFJLEdBQTRCLENBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFFO0lBQ3hELE1BQU0sT0FBTyxHQUFHLDRDQUFLLENBQUMsTUFBTSxFQUE4QyxDQUFDO0lBQzNFLHVEQUFTLENBQUMsR0FBRyxFQUFFO1FBQ1gsTUFBTSxDQUFDLEdBQUcsSUFBSSxvREFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2QsT0FBTyxDQUNILG1FQUFJLFNBQVMsRUFBQyw2Q0FBNkMsRUFBQyxHQUFHLEVBQUcsT0FBTyxJQUNoRSxRQUFRLENBQ1osQ0FDUixDQUFDO0FBQ04sQ0FBQztBQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0FBRW5CLFNBQVMsWUFBWSxDQUFDLElBQVk7SUFDckMsT0FBTyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDN0MsQ0FBQztBQU9NLE1BQU0sR0FBRyxHQUF3QixDQUFDLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsRUFBRSxFQUFFO0lBQ2xFLE9BQU8sQ0FDSCxtRUFBSSxTQUFTLEVBQUcsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDcEMsa0VBQUcsSUFBSSxFQUFHLElBQUksTUFBTSxFQUFFLElBQ2IsUUFBUSxDQUNiLENBQ0gsQ0FDUixDQUFDO0FBQ04sQ0FBQztBQUNELEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0FBTWpCLE1BQU0sUUFBUSxHQUE2QixDQUFDLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQyxFQUFFLEVBQUU7SUFDakUsT0FBTyxDQUNILG9FQUFLLEVBQUUsRUFBRyxFQUFFLElBQ0gsUUFBUSxDQUNYLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFDRCxRQUFRLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JEbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ007QUFDYztBQWdCdkMsTUFBTSxTQUFTLEdBQXFCLENBQUMsS0FBSyxFQUFFLEVBQUU7O0lBQ2pELE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsNENBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsNENBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsTUFBTSxRQUFRLFNBQUcsS0FBSyxDQUFDLFFBQVEsdUNBQUksNENBQUssQ0FBQyxNQUFNLEVBQThDLEdBQUM7SUFFOUYsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFOztRQUN4QyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsTUFBTSxRQUFRLGVBQUcsUUFBUSxDQUFDLE9BQU8sMENBQUUsY0FBYyx1Q0FBSSxHQUFHLEdBQUM7UUFDekQsS0FBSyxDQUFDLFFBQVEsQ0FBQywwREFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDLENBQUM7SUFFRixNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUU7O1FBQ2hCLE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkIsYUFBYTtRQUNiLElBQUksR0FBRyxHQUFHLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDdkIsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO1FBQ0QsaUJBQUssRUFBQyxNQUFNLG1EQUFLO0lBQ3JCLENBQUMsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7UUFDN0IsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTs7UUFDakIsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLGlCQUFLLEVBQUMsT0FBTyxtREFBSztJQUN0QixDQUFDO0lBRUQsT0FBTyxDQUNIO1FBQ0ksMkRBQUMsNENBQUssSUFBQyxTQUFTLEVBQUMsTUFBTSxFQUNuQixJQUFJLEVBQUcsS0FBSyxDQUFDLElBQUksRUFDakIsS0FBSyxFQUFHLEtBQUssQ0FBQyxLQUFLLEVBQ25CLE9BQU8sRUFBRyxLQUFLLENBQUMsT0FBTyxFQUN2QixRQUFRLEVBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDakMsTUFBTSxFQUFHLE1BQU0sRUFDZixPQUFPLEVBQUcsT0FBTyxFQUNqQixTQUFTLEVBQUcsS0FBSyxDQUFDLFNBQVMsRUFDM0IsQ0FBQyxFQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUcsQ0FBQyxFQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUcsQ0FBQyxFQUFHLEtBQUssQ0FBQyxDQUFDLEVBQ3ZDLFFBQVEsRUFBRyxRQUFRLEdBQ3JCO1FBQ0YsMkRBQUMsMERBQVksSUFDVCxPQUFPLEVBQUcsQ0FBQyxjQUFjLENBQUMsRUFDMUIsT0FBTyxFQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFDdEMsT0FBTyxFQUFHLFFBQVEsR0FDcEIsQ0FDSCxDQUNOLENBQUM7QUFDTixDQUFDO0FBQ0QsU0FBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFVjtBQUNTO0FBRW1CO0FBQ1I7QUFFTjtBQU9qQyxNQUFNLGFBQWEsR0FBcUIsQ0FBQyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLEVBQUUsRUFBRTtJQUM3RSxNQUFNLE1BQU0sR0FBRyxJQUFJLG1EQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLE1BQU0sUUFBUSxHQUFHLDRDQUFLLENBQUMsTUFBTSxFQUE4QyxDQUFDO0lBRTVFLDRDQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNqQixTQUFlLGNBQWM7O2dCQUN6QixJQUFJO29CQUNBLE1BQU0sU0FBUyxHQUFnQixNQUFNLGlFQUFZLENBQUMsRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztvQkFDNUUsaUVBQVksQ0FBQyxRQUFRLEVBQUUsMkRBQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDdkQ7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1IsTUFBTSxDQUFDLFFBQVEsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO2lCQUNuRTtZQUNMLENBQUM7U0FBQTtRQUVELGNBQWMsRUFBRSxDQUFDO0lBQ3JCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRTNCLE9BQU8sQ0FDSCwyREFBQyxvREFBUyxJQUFDLElBQUksRUFBQyxXQUFXLEVBQ3ZCLFNBQVMsRUFBQyxjQUFjLEVBQ3hCLFFBQVEsRUFBRyxRQUFRLEVBQ25CLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFDYixLQUFLLEVBQUcsS0FBSyxFQUNiLFFBQVEsRUFBRyxRQUFRLEdBQ3JCLENBQ0wsQ0FBQztBQUNOLENBQUM7QUFDRCxhQUFhLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q2xCO0FBRTRCO0FBQ1I7QUFFTjtBQU1qQyxNQUFNLGFBQWEsR0FBa0MsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNsRSxNQUFNLFFBQVEsR0FBRyw0Q0FBSyxDQUFDLE1BQU0sRUFBOEMsQ0FBQztJQUU1RSw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDakIsU0FBZSxjQUFjOztnQkFDekIsTUFBTSxTQUFTLEdBQWdCLE1BQU0saUVBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdEQsaUVBQVksQ0FBQyxRQUFRLEVBQUUsMkRBQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUQsQ0FBQztTQUFBO1FBQ0QsY0FBYyxFQUFFLENBQUM7SUFDckIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxDQUNILDJEQUFDLG9EQUFTLElBQUMsSUFBSSxFQUFDLFdBQVcsRUFDdkIsU0FBUyxFQUFDLGNBQWMsRUFDeEIsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUNiLEtBQUssRUFBRyxLQUFLLENBQUMsS0FBSyxFQUNuQixRQUFRLEVBQUcsUUFBUSxFQUNuQixPQUFPLEVBQUcsS0FBSyxDQUFDLE9BQU8sRUFDdkIsUUFBUSxFQUFHLEtBQUssQ0FBQyxRQUFRLEVBQ3pCLE1BQU0sRUFBRyxLQUFLLENBQUMsTUFBTSxHQUN2QixDQUNMLENBQUM7QUFDTixDQUFDO0FBQ0QsYUFBYSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsQzVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUN3QjtBQUNNO0FBQzhFO0FBQ2xFO0FBR3pFLElBQVksZUFHWDtBQUhELFdBQVksZUFBZTtJQUN2Qiw2REFBUTtJQUNSLDZEQUFRO0FBQ1osQ0FBQyxFQUhXLGVBQWUsS0FBZixlQUFlLFFBRzFCO0FBQUEsQ0FBQztBQUVGLElBQUssWUFTSjtBQVRELFdBQUssWUFBWTtJQUNiLHlEQUFTO0lBQ1QsaURBQUs7SUFDTCw2REFBVztJQUNYLHVEQUFRO0lBQ1IsbURBQU07SUFDTixxREFBTztJQUNQLCtEQUFZO0lBQ1osaURBQUs7QUFDVCxDQUFDLEVBVEksWUFBWSxLQUFaLFlBQVksUUFTaEI7QUFBQSxDQUFDO0FBWUssTUFBTSxjQUFlLFNBQVEsK0NBQStCO0lBQy9ELFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsU0FBUyxFQUFFLElBQUk7WUFDZixPQUFPLEVBQUUsWUFBWSxDQUFDLFlBQVk7U0FDckMsQ0FBQztJQUNOLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyxDQUNILCtEQUFPLFNBQVMsRUFBQyxnQ0FBZ0M7WUFDN0M7Z0JBQ0k7b0JBQ0kseUVBQWU7b0JBQ2Ysb0RBQUMsbUVBQVcsb0JBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBRSxRQUFRLHVCQUUxRDtvQkFDZCxvREFBQyxtRUFBVyxvQkFBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUU1QztvQkFDZCxvREFBQyxtRUFBVyxvQkFBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxtQkFFbEQ7b0JBQ2Qsb0RBQUMsbUVBQVcsb0JBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsY0FFL0M7b0JBQ2Qsb0RBQUMsbUVBQVcsb0JBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsWUFFN0M7b0JBQ2Qsb0RBQUMsbUVBQVcsb0JBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBRSxRQUFRLHFCQUV4RDtvQkFDZCxvREFBQyxtRUFBVyxvQkFBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxtQkFFbkQ7b0JBQ2Qsb0RBQUMsbUVBQVcsb0JBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBRSxRQUFRLG1CQUV0RCxDQUNiLENBQ0Q7WUFDUixtRUFDTSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM1QixPQUFPLENBQ0gsNERBQUksR0FBRyxFQUFHLElBQUksQ0FBQyxFQUFFO29CQUNiLDREQUFJLFNBQVMsRUFBQyxzQkFBc0I7d0JBQ2hDLG9EQUFDLCtEQUFXLElBQUMsT0FBTyxFQUFHLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxFQUM1QyxPQUFPLEVBQ0gsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FDOUIsSUFBSSxDQUFDLEVBQUUsRUFBRSxlQUFlLENBQUMsUUFBUSxDQUNwQzs0QkFHTCxvREFBQyxxRUFBWSxJQUFDLFFBQVEsRUFBQyxZQUFZLEdBQUcsQ0FDNUI7d0JBQ2Qsb0RBQUMsK0RBQVcsSUFBQyxPQUFPLEVBQUcsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQzFDLE9BQU8sRUFDSCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUM5QixJQUFJLENBQUMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxRQUFRLENBQ3BDOzRCQUdMLG9EQUFDLHFFQUFZLElBQUMsUUFBUSxFQUFDLG1CQUFtQixHQUFHLENBQ25DLENBQ2I7b0JBQ0wsb0RBQUMsOERBQU8sSUFBQyxHQUFHLEVBQUcsSUFBSSxDQUFDLFNBQVMsRUFDekIsV0FBVyxFQUFHLENBQUMsR0FDakI7b0JBQ0Ysb0RBQUMsZ0VBQVMsSUFBQyxLQUFLLEVBQUcsSUFBSSxDQUFDLEtBQUssR0FBSztvQkFDbEMsb0RBQUMsc0VBQWUsSUFBQyxFQUFFLEVBQUcsSUFBSSxDQUFDLEVBQUUsRUFDekIsSUFBSSxFQUFHLElBQUksQ0FBQyxJQUFJLEVBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUN6QjtvQkFDRixvREFBQyxtRUFBWSxJQUFDLEVBQUUsRUFBRyxJQUFJLENBQUMsVUFBVSxFQUM5QixJQUFJLEVBQUcsSUFBSSxDQUFDLFFBQVEsR0FDdEI7b0JBQ0Ysb0RBQUMsaUVBQVUsSUFBQyxFQUFFLEVBQUcsSUFBSSxDQUFDLFFBQVEsRUFDMUIsSUFBSSxFQUFHLElBQUksQ0FBQyxNQUFNLEdBQ3BCO29CQUNGLG9EQUFDLCtEQUFRLElBQUMsSUFBSSxFQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBSztvQkFDOUMsb0RBQUMsK0RBQVEsSUFBQyxJQUFJLEVBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFLO29CQUMzQyxvREFBQyxnRUFBUyxJQUFDLEtBQUssRUFBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUssQ0FDN0MsQ0FDUixDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQ0UsQ0FDSixDQUNYLENBQUM7SUFDTixDQUFDO0lBRUQsSUFBWSxXQUFXO1FBQ25CLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUN4QixLQUFLLFlBQVksQ0FBQyxTQUFTO2dCQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtvQkFDcEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3hGLENBQUMsQ0FBQyxDQUFDO1lBQ1AsS0FBSyxZQUFZLENBQUMsS0FBSztnQkFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLG1CQUFtQixDQUFDO2dCQUNsRSxDQUFDLENBQUM7WUFDTixLQUFLLFlBQVksQ0FBQyxXQUFXO2dCQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTs7b0JBQ3BDLDZCQUE2QjtvQkFDN0IsTUFBTSxrQkFBa0IsR0FBRyxNQUFDLEVBQUUsQ0FBQyxRQUFRLHVDQUFJLEVBQUUsRUFBQyxDQUFDLGFBQWEsT0FBQyxFQUFFLENBQUMsUUFBUSx1Q0FBSSxFQUFFLEdBQUMsR0FBRyxtQkFBbUIsQ0FBQztvQkFDdEcsSUFBSSxrQkFBa0IsS0FBSyxDQUFDLEVBQUU7d0JBQzFCLGtCQUFrQjt3QkFDbEIsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUU7NEJBQ3BCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLG1CQUFtQjt5QkFDOUQ7d0JBQ0QsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFOzRCQUNULE9BQU8sbUJBQW1CLENBQUM7eUJBQzlCO3dCQUNELElBQUksRUFBRSxDQUFDLElBQUksRUFBRTs0QkFDVCxPQUFPLENBQUMsbUJBQW1CLENBQUM7eUJBQy9CO3FCQUNKO29CQUNELE9BQU8sa0JBQWtCLENBQUM7Z0JBQzlCLENBQUMsQ0FBQztZQUNOLEtBQUssWUFBWSxDQUFDLFFBQVE7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxtQkFBbUIsQ0FBQztnQkFDeEUsQ0FBQyxDQUFDO1lBQ04sS0FBSyxZQUFZLENBQUMsTUFBTTtnQkFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLG1CQUFtQixDQUFDO2dCQUNwRSxDQUFDLENBQUM7WUFDTixLQUFLLFlBQVksQ0FBQyxPQUFPO2dCQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtvQkFDcEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3RILENBQUMsQ0FBQyxDQUFDO1lBQ1AsS0FBSyxZQUFZLENBQUMsWUFBWTtnQkFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7b0JBQ3BDLE9BQU8sQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDdEcsQ0FBQyxDQUFDLENBQUM7WUFDUCxLQUFLLFlBQVksQ0FBQyxLQUFLO2dCQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtvQkFDcEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2xILENBQUMsQ0FBQyxDQUFDO1lBQ1AsS0FBSyxZQUFZLENBQUMsWUFBWTtnQkFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7b0JBQ3BDLE9BQU8sQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDdEcsQ0FBQyxDQUFDLENBQUM7WUFDUDtnQkFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVPLGFBQWEsQ0FBQyxDQUFtQixFQUFFLFVBQXdCO1FBQy9ELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixTQUFTLEVBQUUsSUFBSTtnQkFDZixPQUFPLEVBQUUsVUFBVTthQUN0QixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxVQUF3QjtRQUc3QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtZQUNuQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsb0VBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLG9FQUFZLENBQUMsVUFBVSxDQUFDO1lBQzdGLE9BQU87Z0JBQ0gsWUFBWTtnQkFDWixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQzthQUNwRCxDQUFDO1NBQ0w7UUFDRCxPQUFPO1lBQ0gsWUFBWSxFQUFFLG9FQUFZLENBQUMsU0FBUztZQUNwQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztTQUNwRCxDQUFDO0lBQ04sQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hOeUI7QUFDK0I7QUFDRjtBQUNRO0FBQ0o7QUFDQTtBQUNKO0FBQ1E7QUFDQTtBQUVnRTtBQWtCeEgsTUFBTSxpQkFBaUIsR0FBRyxHQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLEtBQUssRUFBRSxFQUFFO0lBQ1QsUUFBUSxFQUFFLEVBQUU7SUFDWixRQUFRLEVBQUUsRUFBRTtJQUNaLE1BQU0sRUFBRSxFQUFFO0lBQ1YsZUFBZSxFQUFFLEtBQUs7SUFDdEIsTUFBTSxFQUFFLENBQUM7SUFDVCxJQUFJLEVBQUUsRUFBRTtJQUNSLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLEVBQUU7SUFDWixXQUFXLEVBQUUsRUFBRTtJQUNmLEtBQUssRUFBRSxFQUFFO0lBQ1QsSUFBSSxFQUFFLElBQUk7Q0FDYixDQUFDLENBQUM7QUFFSCxNQUFNLDRCQUE0QixHQUFHLENBQU8sSUFBZSxFQUFFLFFBQWdCLEVBQUUsRUFBRTtJQUM3RSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDZixPQUFPLHdFQUFtQixDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7S0FDdEY7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRUQsTUFBTSxzQkFBc0IsR0FBRyxDQUFPLElBQWUsRUFBRSxFQUFFO0lBQ3JELE1BQU0sTUFBTSxHQUFHLE1BQU0sc0VBQWlCLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQ2pGLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBOEI7UUFDNUMsd0VBQW1CLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQztRQUN0Riw0QkFBNEIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQztLQUNoRCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRU0sTUFBTSxjQUFjLEdBQUcsQ0FBTyxJQUFlLEVBQUUsU0FBaUIsRUFBc0IsRUFBRTs7SUFDM0YsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQW1EO1FBQ2hILDZEQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDO1FBQzVCLHdFQUFtQixDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUM7UUFDakUsc0JBQXNCLENBQUMsSUFBSSxDQUFDO0tBQy9CLENBQUMsQ0FBQztJQUNILE9BQU87UUFDSCxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDakIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxFQUFFO1FBQ3ZCLFVBQVUsRUFBRSxRQUFRLENBQUMsRUFBRTtRQUN2QixVQUFVLGNBQUUsUUFBUSwwQ0FBRSxFQUFFLHVDQUFJLElBQUk7UUFDaEMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtRQUN2QixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJO1FBQ3JCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUk7UUFDckMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDakQsU0FBUyxFQUFFLFNBQVM7UUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtLQUM1QixDQUFDO0FBQ04sQ0FBQztBQWdCTSxNQUFNLGdCQUFnQixHQUFxQyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNoRixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDakIsS0FBSyxVQUFVO1lBQ1gsdUNBQVksS0FBSyxLQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxJQUFHO1FBQzdDLEtBQUssYUFBYTtZQUNkLHVDQUFZLEtBQUssS0FBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsSUFBRztRQUNuRCxLQUFLLGFBQWE7WUFDZCx1Q0FBWSxLQUFLLEtBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLElBQUc7UUFDbkQsS0FBSyxXQUFXO1lBQ1osdUNBQVksS0FBSyxLQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxJQUFHO1FBQy9DLEtBQUssb0JBQW9CO1lBQ3JCLHVDQUFZLEtBQUssS0FBRSxlQUFlLEVBQUUsTUFBTSxDQUFDLGVBQWUsSUFBRztRQUNqRSxLQUFLLFdBQVc7WUFDWix1Q0FBWSxLQUFLLEtBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQUc7UUFDL0MsS0FBSyxTQUFTO1lBQ1YsdUNBQVksS0FBSyxLQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFHO1FBQzNDLEtBQUssUUFBUTtZQUNULHVDQUFZLEtBQUssS0FBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBRztRQUN6QyxLQUFLLGFBQWE7WUFDZCx1Q0FBWSxLQUFLLEtBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLElBQUc7UUFDbkQsS0FBSyxnQkFBZ0I7WUFDakIsdUNBQVksS0FBSyxLQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVyxJQUFHO1FBQ3pELEtBQUssVUFBVTtZQUNYLHVDQUFZLEtBQUssS0FBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFBRztRQUM3QyxLQUFLLFNBQVM7WUFDVix1Q0FBWSxLQUFLLEtBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQUc7UUFDM0M7WUFDSSxPQUFPLEtBQUssQ0FBQztLQUNwQjtBQUNMLENBQUM7QUFRTSxNQUFNLFVBQVUsR0FBcUIsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsRUFBRSxFQUFFO0lBQzdELE9BQU8sQ0FDSDtRQUNJLDJEQUFDLGlFQUFVLElBQUMsU0FBUyxFQUFHLElBQUksQ0FBQyxLQUFLLEVBQzlCLFFBQVEsRUFBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUN6RCxXQUFXLEVBQUMsZ0JBQWdCLEdBQzlCO1FBQ0YsMkRBQUMsdUVBQWEsSUFBQyxLQUFLLEVBQUcsSUFBSSxDQUFDLFFBQVEsRUFDaEMsUUFBUSxFQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBQyxDQUFDLEdBQ3BFO1FBQ0YsMkRBQUMsK0RBQVMsSUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxFQUFFLEVBQy9CLENBQUMsRUFBRyxFQUFFLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFDZCxLQUFLLEVBQUcsSUFBSSxDQUFDLElBQUksRUFDakIsUUFBUSxFQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLEdBQ3hEO1FBQ0YsMkRBQUMsdUVBQWEsSUFBQyxLQUFLLEVBQUcsSUFBSSxDQUFDLFFBQVEsRUFDaEMsUUFBUSxFQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBQyxDQUFDLEdBQ3BFO1FBQ0YsMkRBQUMsbUVBQVcsSUFBQyxLQUFLLEVBQUcsSUFBSSxDQUFDLE1BQU0sRUFDNUIsUUFBUSxFQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQzVELFlBQVksRUFBRyxJQUFJLENBQUMsUUFBUSxHQUM5QjtRQUNGLDJEQUFDLG1FQUFXLElBQUMsU0FBUyxFQUFHLElBQUksQ0FBQyxlQUFlLEVBQ3pDLGlCQUFpQixFQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFDLENBQUMsRUFDaEcsTUFBTSxFQUFHLElBQUksQ0FBQyxNQUFNLEVBQ3BCLGNBQWMsRUFBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUMsQ0FBQyxHQUNwRTtRQUNGLDJEQUFDLHVFQUFhLElBQUMsS0FBSyxFQUFHLElBQUksQ0FBQyxRQUFRLEVBQ2hDLFFBQVEsRUFBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxFQUNsRSxVQUFVLEVBQUcsSUFBSSxDQUFDLE1BQU0sR0FDMUI7UUFDRiwyREFBQywrREFBUyxJQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLEVBQUUsRUFDdEMsS0FBSyxFQUFHLElBQUksQ0FBQyxXQUFXLEVBQ3hCLFFBQVEsRUFBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBQyxDQUFDLEVBQzNFLENBQUMsRUFBRyxFQUFFLEVBQUcsQ0FBQyxFQUFHLENBQUMsR0FDaEI7UUFDRiwyREFBQywrREFBUyxJQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEVBQUUsRUFDaEMsQ0FBQyxFQUFHLEVBQUUsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUNkLEtBQUssRUFBRyxJQUFJLENBQUMsS0FBSyxFQUNsQixRQUFRLEVBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFDLENBQUMsR0FDM0Q7UUFDRiwyREFBQywrREFBUyxJQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLEdBQUssQ0FDekYsQ0FDTixDQUFDO0FBQ04sQ0FBQztBQUNELFVBQVUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOUt0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ3FDO0FBQ25CO0FBQzhCO0FBRU87QUFRakYscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUNoQixNQUFNLFFBQVEsR0FBcUIsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLEVBQUUsRUFBRTs7SUFDckUsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyw0Q0FBSyxDQUFDLFVBQVUsQ0FBQyxxRUFBZ0Isa0NBQ3BELElBQUksS0FDUCxJQUFJLFFBQUUsSUFBSSxDQUFDLElBQUksdUNBQUksRUFBRSxJQUNyQixXQUFXLFFBQUUsSUFBSSxDQUFDLFdBQVcsdUNBQUksRUFBRSxJQUNuQyxNQUFNLFFBQUUsSUFBSSxDQUFDLE1BQU0sdUNBQUksQ0FBQyxJQUN4QixlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQ3JDLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxRQUFFLElBQUksQ0FBQyxLQUFLLHVDQUFJLEVBQUUsSUFDdkIsUUFBUSxRQUFFLElBQUksQ0FBQyxRQUFRLHVDQUFJLEVBQUUsSUFDN0IsR0FBRyxRQUFFLElBQUksQ0FBQyxHQUFHLHVDQUFJLEVBQUUsTUFDckIsQ0FBQztJQUVILE9BQU8sQ0FDSCwyREFBQyx1REFBSztRQUNGLDJEQUFDLDhEQUFZO1lBQ1QsMkRBQUMsb0RBQUc7Z0JBQ0EsbUZBQWtCO2dCQUNsQiwyREFBQywrREFBVSxJQUFDLElBQUksRUFBRyxLQUFLLEVBQ3BCLFFBQVEsRUFBRyxRQUFRLEdBQ3JCLENBQ0EsQ0FDSztRQUNmLDJEQUFDLDZEQUFXO1lBQ1IsMkRBQUMsdUVBQW1CLElBQ2hCLGNBQWMsRUFBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQ3RDLGFBQWEsRUFBRyxRQUFRLEdBQzFCLENBQ1EsQ0FDVixDQUNYLENBQUM7QUFDTixDQUFDO0FBQ0QsUUFBUSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDL0NyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ3dCO0FBQ0g7QUFDaUI7QUFDb0I7QUFPN0UsTUFBTSxXQUFXLEdBQXFCLENBQUMsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFFO0lBQ3RELE1BQU0sUUFBUSxHQUFHLHFFQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELE9BQU8sQ0FDSDtRQUNJLG1FQUFJLFNBQVMsRUFBQyxPQUFPLHdCQUF1QjtRQUM1QywyREFBQyxxREFBSTtZQUNELDJEQUFDLG9EQUFHLElBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUseURBQVEsQ0FBQyxHQUFHLFlBRXZDO1lBQ04sMkRBQUMsb0RBQUcsSUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSx5REFBUSxDQUFDLEtBQUssZ0JBRXpDLENBQ0g7UUFDUCwyREFBQyx5REFBUSxJQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLDJEQUFDLHVEQUFLLElBQUMsT0FBTyxFQUFHLENBQUMsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsSUFDMUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FDcEIsbUVBQUksR0FBRyxFQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNkLDJEQUFDLCtEQUFRLElBQUMsSUFBSSxFQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUs7Z0JBQ2pDLDJEQUFDLDhEQUFPLElBQUMsR0FBRyxFQUFHLEtBQUssQ0FBQyxPQUFPLEVBQ3hCLFdBQVcsRUFBRyxDQUFDLEdBQ2pCLENBQ0QsQ0FDUixDQUFDLENBQ0UsQ0FDRDtRQUNYLDJEQUFDLHlEQUFRLElBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDckIsMkRBQUMsMERBQVEsSUFBQyxJQUFJLEVBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBSyxDQUN2RixDQUNaLENBQ04sQ0FBQztBQUNOLENBQUM7QUFDRCxXQUFXLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzFDeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNxQztBQUNuQjtBQUM4QjtBQUM0QjtBQVV0Rzs7O0dBR0c7QUFDSSxNQUFNLGNBQWMsR0FBcUIsQ0FBQyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxFQUFFLEVBQUU7O0lBQ3RGLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsNENBQUssQ0FBQyxVQUFVLENBQUMsK0VBQW9CLGtDQUN4RCxRQUFRLEtBQ1gsS0FBSyxRQUFFLFFBQVEsQ0FBQyxLQUFLLHVDQUFJLEVBQUUsSUFDM0IsSUFBSSxRQUFFLFFBQVEsQ0FBQyxJQUFJLHVDQUFJLEVBQUUsSUFDekIsb0JBQW9CLEVBQUUsSUFBSSxJQUM1QixDQUFDO0lBRUgsT0FBTyxDQUNILDJEQUFDLHVEQUFLO1FBQ0YsMkRBQUMsOERBQVk7WUFDVCwyREFBQyxvREFBRztnQkFDQSx1RUFBTSxLQUFLLENBQU87Z0JBQ2xCLDJEQUFDLHlFQUFjLElBQUMsbUJBQW1CLEVBQUcsS0FBSyxFQUN2QyxJQUFJLEVBQUcsS0FBSyxFQUNaLFFBQVEsRUFBRyxRQUFRLEdBQ3JCLENBQ0EsQ0FDSztRQUNmLDJEQUFDLDZEQUFXO1lBQ1IsMkRBQUMsdUVBQW1CLElBQ2hCLGNBQWMsRUFBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQ3RDLGFBQWEsRUFBRyxRQUFRLEdBQzFCLENBQ1EsQ0FDVixDQUNYLENBQUM7QUFDTixDQUFDO0FBQ0QsY0FBYyxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlDOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBRStDO0FBQ3NCO0FBQzlDO0FBQ1k7QUFDZDtBQUUvQyxJQUFLLFlBT0o7QUFQRCxXQUFLLFlBQVk7SUFDYiwrQ0FBSTtJQUNKLHVEQUFRO0lBQ1IsaURBQUs7SUFDTCxxREFBTztJQUNQLGlEQUFLO0lBQ0wsK0NBQUk7QUFDUixDQUFDLEVBUEksWUFBWSxLQUFaLFlBQVksUUFPaEI7QUFRTSxNQUFNLFNBQVMsR0FBcUIsQ0FBQyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFDLEVBQUUsRUFBRTtJQUNuRixNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLDRDQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsNENBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhFLE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBdUIsRUFBRSxVQUF3QixFQUFFLEVBQUU7UUFDeEUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksVUFBVSxLQUFLLE9BQU8sRUFBRTtZQUN4QixZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ0gsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFDRCxNQUFNLGdCQUFnQixHQUFHLENBQUMsVUFBd0IsRUFBRSxFQUFFO1FBQ2xELElBQUksT0FBTyxLQUFLLFVBQVUsRUFBRTtZQUN4QixNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLG9FQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxvRUFBWSxDQUFDLFVBQVUsQ0FBQztZQUNsRixPQUFPO2dCQUNILFlBQVk7Z0JBQ1osT0FBTyxFQUFFLENBQUMsQ0FBbUIsRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUM7YUFDakUsQ0FBQztTQUNMO1FBQ0QsT0FBTztZQUNILFlBQVksRUFBRSxvRUFBWSxDQUFDLFNBQVM7WUFDcEMsT0FBTyxFQUFFLENBQUMsQ0FBbUIsRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUM7U0FDakUsQ0FBQztJQUNOLENBQUM7SUFFRCxNQUFNLGVBQWUsR0FBRyxHQUFHLEVBQUU7UUFDekIsTUFBTSxtQkFBbUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsUUFBUSxPQUFPLEVBQUU7WUFDYixLQUFLLFlBQVksQ0FBQyxJQUFJO2dCQUNsQixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBQyxRQUFDLE1BQUMsRUFBRSxDQUFDLElBQUksdUNBQUksQ0FBQyxFQUFDLEdBQUcsTUFBQyxFQUFFLENBQUMsSUFBSSx1Q0FBSSxDQUFDLEVBQUMsQ0FBQyxHQUFHLG1CQUFtQixJQUFDLENBQUM7WUFDL0YsS0FBSyxZQUFZLENBQUMsSUFBSTtnQkFDbEIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQUMsUUFBQyxNQUFDLEVBQUUsQ0FBQyxJQUFJLHVDQUFJLEVBQUUsRUFBQyxDQUFDLGFBQWEsT0FBQyxFQUFFLENBQUMsSUFBSSx1Q0FBSSxFQUFFLEdBQUMsQ0FBQyxHQUFHLG1CQUFtQixJQUFDLENBQUM7WUFDNUcsS0FBSyxZQUFZLENBQUMsS0FBSztnQkFDbkIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQUMsUUFBQyxNQUFDLEVBQUUsQ0FBQyxLQUFLLHVDQUFJLENBQUMsRUFBQyxHQUFHLE1BQUMsRUFBRSxDQUFDLEtBQUssdUNBQUksQ0FBQyxFQUFDLENBQUMsR0FBRyxtQkFBbUIsSUFBQyxDQUFDO1lBQ2pHLEtBQUssWUFBWSxDQUFDLFFBQVE7Z0JBQ3RCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFDLFFBQUMsTUFBQyxFQUFFLENBQUMsUUFBUSx1Q0FBSSxDQUFDLEVBQUMsR0FBRyxNQUFDLEVBQUUsQ0FBQyxRQUFRLHVDQUFJLENBQUMsRUFBQyxDQUFDLEdBQUcsbUJBQW1CLElBQUMsQ0FBQztZQUN2RyxLQUFLLFlBQVksQ0FBQyxLQUFLO2dCQUNuQixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBQyxRQUFDLE1BQUMsRUFBRSxDQUFDLEtBQUssdUNBQUksRUFBRSxFQUFDLENBQUMsYUFBYSxPQUFDLEVBQUUsQ0FBQyxLQUFLLHVDQUFJLEVBQUUsR0FBQyxDQUFDLEdBQUcsbUJBQW1CLElBQUMsQ0FBQztZQUM5RyxLQUFLLFlBQVksQ0FBQyxPQUFPO2dCQUNyQixnQkFBZ0I7Z0JBQ2hCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFDLFFBQUMsTUFBQyxFQUFFLENBQUMsT0FBTyx1Q0FBSSxJQUFJLEVBQUMsR0FBRyxNQUFDLEVBQUUsQ0FBQyxPQUFPLHVDQUFJLElBQUksRUFBQyxDQUFDLEdBQUcsbUJBQW1CLElBQUMsQ0FBQztZQUMzRztnQkFDSSxPQUFPLFNBQVMsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRCxJQUFJLFNBQVMsRUFBRTtRQUNYLE9BQU8sQ0FDSDtZQUNJLHNFQUFPLFNBQVMsRUFBQyxzQkFBc0I7Z0JBQ25DO29CQUNJO3dCQUNJLDJEQUFDLG1FQUFXLElBQUMsWUFBWSxFQUFHLG9FQUFZLENBQUMsU0FBUyxFQUM5QyxPQUFPLEVBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxhQUdWO3dCQUNkLDJEQUFDLG1FQUFXLG9CQUFLLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFFdEM7d0JBQ2QsMkRBQUMsbUVBQVcsb0JBQUssZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUNwRCxRQUFRLHNCQUdFO3dCQUNkLDJEQUFDLG1FQUFXLG9CQUFLLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFDakQsUUFBUSxtQkFHRTt3QkFDZCwyREFBQyxtRUFBVyxvQkFBSyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQ25ELFFBQVEscUJBR0U7d0JBQ2QsMkRBQUMsbUVBQVcsb0JBQUssZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUV2Qzt3QkFDZCwyREFBQyxtRUFBVyxvQkFBSyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBRXRDLENBQ2IsQ0FDRDtnQkFDUiwwRUFDTSxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQ2xDLG1FQUFJLEdBQUcsRUFBRyxRQUFRLENBQUMsRUFBRTtvQkFDakI7d0JBQ0ksMkRBQUMsdURBQUcsSUFBQyxPQUFPLEVBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQ3JDLE9BQU8sRUFBRyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQzs0QkFFeEMsMkRBQUMscUVBQVksSUFBQyxRQUFRLEVBQUMsTUFBTSxHQUFHLENBQzlCO3dCQUNOLDJEQUFDLHVEQUFHLElBQUMsT0FBTyxFQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxFQUNsQyxPQUFPLEVBQUcsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7NEJBRTFDLDJEQUFDLHFFQUFZLElBQUMsUUFBUSxFQUFDLFFBQVEsR0FBRyxDQUNoQyxDQUNMO29CQUNMLDJEQUFDLCtEQUFRLElBQUMsSUFBSSxFQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUs7b0JBQ25DLDJEQUFDLDhEQUFPLElBQUMsR0FBRyxFQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQzVCLFdBQVcsRUFBRyxDQUFDLEdBQ2pCO29CQUNGLDJEQUFDLGdFQUFTLElBQUMsS0FBSyxFQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUs7b0JBQ3RDLDJEQUFDLCtEQUFRLElBQUMsSUFBSSxFQUFHLFFBQVEsQ0FBQyxPQUFPLEdBQUs7b0JBQ3RDLDJEQUFDLCtEQUFRLElBQUMsSUFBSSxFQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUs7b0JBQ3BDLDJEQUFDLCtEQUFRLElBQUMsSUFBSSxFQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUssQ0FDbEMsQ0FDUixDQUFDLENBQ0UsQ0FDSixDQUNULENBQ04sQ0FBQztLQUNMO0lBQ0QsT0FBTyxDQUNILDJEQUFDLG9EQUFHO1FBQ0EsMkRBQUMsb0RBQUcsSUFBQyxDQUFDLEVBQUcsRUFBRTtZQUNQLDBHQUF5QyxDQUN2QyxDQUNKLENBQ1Q7QUFDTCxDQUFDLENBQUM7QUFDRixTQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xKcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUM2QjtBQUNPO0FBQ0Q7QUFDTDtBQWdCakQsTUFBTSxRQUFRLEdBQXFCLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDaEQsT0FBTyxDQUNIO1FBQ0ksbUVBQUksU0FBUyxFQUFDLE9BQU8sSUFBRyx3RUFBcUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQU87UUFDakUsbUVBQUksU0FBUyxFQUFDLFVBQVU7WUFDcEIsb0ZBQWtCOztZQUFHLEtBQUssQ0FBQyxTQUFTLENBQ25DOztRQUVMLDJEQUFDLCtEQUFXLElBQUMsT0FBTyxFQUFHLENBQUMsVUFBVSxFQUFFLG9CQUFvQixDQUFDLEVBQ3JELE9BQU8sRUFBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMseUVBQWUsQ0FBQyxRQUFRLENBQUM7WUFFakUsMkRBQUMscUVBQVksSUFBQyxRQUFRLEVBQUMsWUFBWSxHQUFHLENBQzVCOztRQUVkLDJEQUFDLCtEQUFXLElBQUMsT0FBTyxFQUFHLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLEVBQ25ELE9BQU8sRUFBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMseUVBQWUsQ0FBQyxRQUFRLENBQUM7WUFFakUsMkRBQUMscUVBQVksSUFBQyxRQUFRLEVBQUMsbUJBQW1CLEdBQUcsQ0FDbkM7UUFDWixLQUFLLENBQUMsbUJBQW1CO1lBQ3ZCO2dCQUFJLGlGQUFlOztnQkFBRyxLQUFLLENBQUMsbUJBQW1CLENBQU87UUFFeEQsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsVUFBVTtZQUNoQztnQkFDSSwyRkFBeUI7O2dCQUN6QixrRUFBRyxJQUFJLEVBQUcsZUFBZSxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQ3ZDLFNBQVMsRUFBQyxXQUFXLElBRW5CLEtBQUssQ0FBQyxRQUFRLENBQ2hCLENBQ0g7UUFFUCxLQUFLLENBQUMsV0FBVztZQUNmO2dCQUFJLHFGQUFtQjs7Z0JBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBTztRQUdwRCxLQUFLLENBQUMsTUFBTTtZQUNWO2dCQUFJLGdGQUFjOztnQkFBRyxLQUFLLENBQUMsTUFBTSxDQUFPO1FBRTFDLEtBQUssQ0FBQyxLQUFLO1lBQ1Q7Z0JBQUksK0VBQWE7O2dCQUFHLEtBQUssQ0FBQyxLQUFLLENBQU87UUFFeEMsS0FBSyxDQUFDLEdBQUc7WUFDUDtnQkFBSSw2RUFBVzs7Z0JBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBTyxDQUV2QyxDQUNOLENBQUM7QUFDTixDQUFDO0FBQ0QsUUFBUSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwRWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDdUI7QUFhMUMsTUFBTSxVQUFVLEdBQXFCLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDbEQsT0FBTyxDQUNILDJEQUFDLG9EQUFHO1FBQ0EsMkRBQUMsb0RBQUcsSUFBQyxDQUFDLEVBQUcsRUFBRTtZQUNQLDJEQUFDLFFBQVEsb0JBQU0sS0FBSyxFQUFLO1lBQ3pCO2dCQUNJLGtFQUFHLElBQUksRUFBRyxjQUFjLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFDdEMsU0FBUyxFQUFDLFdBQVcsSUFFbkIsS0FBSyxDQUFDLFFBQVEsQ0FDaEI7O2dCQUFJLGtFQUFHLElBQUksRUFBRyxZQUFZLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFDMUMsU0FBUyxFQUFDLFdBQVcsSUFFbkIsS0FBSyxDQUFDLE1BQU0sQ0FDZCxDQUNILENBQ0g7UUFDRCxLQUFLLENBQUMsUUFBUSxDQUNqQixDQUNULENBQUM7QUFDTixDQUFDLENBQUM7QUFDRixVQUFVLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztBQUV0QyxNQUFNLFFBQVEsR0FBMEUsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDLEVBQUUsRUFBRTtJQUNySCxNQUFNLFlBQVksR0FBRyxDQUNqQixrRUFBRyxJQUFJLEVBQUcsZUFBZSxVQUFVLEdBQUcsSUFDaEMsUUFBUSxDQUNWLENBQ1AsQ0FBQztJQUNGLElBQUksSUFBSSxFQUFFO1FBQ04sT0FBTyxDQUNILG1FQUFJLFNBQVMsRUFBQyxNQUFNO1lBQ2QsSUFBSTs7WUFBSyxZQUFZLENBQ3RCLENBQ1IsQ0FBQztLQUNMO0lBQ0QsT0FBTyxtRUFBSSxTQUFTLEVBQUMsTUFBTSxJQUFHLFlBQVksQ0FBTyxDQUFDO0FBQ3RELENBQUM7QUFDRCxRQUFRLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BEbEM7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFNeEIsTUFBTSxPQUFPLEdBQXFCLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFO0lBQzlDLE9BQU8sQ0FDSCw2REFBSyxTQUFTLEVBQUMsTUFBTSxFQUFDLEVBQUUsRUFBQyxZQUFZO1FBQ2pDLDZEQUFLLFNBQVMsRUFBQyxZQUFZO1lBQ3ZCLDZEQUFLLEdBQUcsRUFBRyxVQUFXLEVBQUcsTUFBTSxFQUMzQixHQUFHLEVBQUMsWUFBWSxFQUNoQixTQUFTLEVBQUMsZ0JBQWdCLEdBQzVCLENBQ0EsQ0FDSixDQUNULENBQUM7QUFDTixDQUFDO0FBQ0QsT0FBTyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQk47QUFDNkI7QUFDWTtBQUNsQjtBQUNZO0FBQ1I7QUFDRTtBQUNvRDtBQUNyRTtBQUUrRjtBQUN2RjtBQUNnQjtBQUNLO0FBQzdCO0FBQ007QUFDTTtBQUNWO0FBQ1M7QUFDWDtBQUNJO0FBQ047QUFNN0IsTUFBTSxjQUFjLEdBQXFCLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFO0lBQ3JELFFBQVE7SUFDUixNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLDRDQUFLLENBQUMsVUFBVSxDQUFDLG1EQUFXLEVBQUUseURBQVMsRUFBRSxDQUFDLENBQUM7SUFDckUsTUFBTSxNQUFNLEdBQUcsSUFBSSxtREFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUvQyxnQkFBZ0I7SUFDaEIsTUFBTSxTQUFTLEdBQUcsR0FBUyxFQUFFO1FBQ3pCLE1BQU0sSUFBSSxHQUFHLE1BQU0sNERBQU8sQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDakMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxNQUFNLGNBQWMsR0FBRyxHQUFTLEVBQUU7UUFDOUIsTUFBTSxTQUFTLEdBQUcsTUFBTSxpRUFBWSxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDbkQsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxNQUFNLGFBQWEsR0FBRyxHQUFTLEVBQUU7UUFDN0IsTUFBTSxRQUFRLEdBQUcsTUFBTSwrREFBVyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RCxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELE1BQU0sV0FBVyxHQUFHLEdBQVMsRUFBRTtRQUMzQixNQUFNLE1BQU0sR0FBRyxNQUFNLGtFQUFhLENBQUMsRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUNqRCxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELG9CQUFvQjtJQUNwQiw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDakIsU0FBZSxTQUFTOztnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDUixTQUFTLEVBQUU7b0JBQ1gsY0FBYyxFQUFFO29CQUNoQixhQUFhLEVBQUU7b0JBQ2YsV0FBVyxFQUFFO2lCQUNoQixDQUFDLENBQUM7WUFDUCxDQUFDO1NBQUE7UUFFRCxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRVQsaUJBQWlCO0lBQ2pCLE1BQU0saUJBQWlCLEdBQUcsQ0FBTyxlQUFnQyxFQUFFLEVBQUU7UUFDakUsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ1osTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLGVBQWUsSUFBSSwwRUFBZSxDQUFDLFFBQVEsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7YUFDdkI7WUFDRCxJQUFJO2dCQUNBLHFCQUFxQjtnQkFDckIsTUFBTSxJQUFJLEdBQUcsTUFBTSwrREFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzlDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQzthQUNyQztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLE1BQU0sQ0FBQyxVQUFVLENBQUMsK0JBQStCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQ2pFO1NBQ0o7SUFDTCxDQUFDO0lBRUQsTUFBTSxnQkFBZ0IsR0FBRyxDQUFPLFVBQXFCLEVBQUUsRUFBRTs7UUFDckQsSUFBSTtZQUNBLE1BQU0sSUFBSSxHQUFHLE1BQU0sNEVBQWMsQ0FBQyxVQUFVLGNBQUUsS0FBSyxDQUFDLElBQUksMENBQUUsU0FBUyx1Q0FBSSxDQUFDLEdBQUMsQ0FBQztZQUMxRSx5QkFBeUI7WUFDekIsTUFBTSxXQUFXLEdBQUcsTUFBTSwrREFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckQsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztZQUMvQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBQyxDQUFDLENBQUM7U0FDeEQ7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE1BQU0sQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO0lBQ0wsQ0FBQztJQUVELE1BQU0sb0JBQW9CLEdBQUcsQ0FBTyxRQUF1QixFQUFFLEVBQUU7UUFDM0QsYUFBYTtRQUNiLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2pDLElBQUk7WUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLHFGQUFrQixDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwRCxNQUFNLGVBQWUsR0FBRyxNQUFNLG1FQUFjLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9ELFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQ3hFLElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxVQUFVLEVBQUU7d0JBQzVCLE9BQU8sZUFBZSxDQUFDO3FCQUMxQjtvQkFDRCxPQUFPLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ1I7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE1BQU0sQ0FBQyxVQUFVLENBQUMsOEJBQThCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ2xFO2dCQUFTO1lBQ04sUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQzFEO0lBQ0wsQ0FBQztJQUVELE1BQU0sZ0JBQWdCLEdBQUcsQ0FBTyxVQUFrQixFQUFFLEVBQUU7UUFDbEQsSUFBSTtZQUNBLE1BQU0sbUVBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNwQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxvQ0FBb0MsVUFBVSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3JGO2dCQUFTO1lBQ04sUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQzFEO0lBQ0wsQ0FBQztJQUVELHlCQUF5QjtJQUN6QixNQUFNLG1CQUFtQixHQUFHLENBQU8sUUFBdUIsRUFBRSxFQUFFO1FBQzFELElBQUk7WUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLHFGQUFrQixDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwRCxNQUFNLFdBQVcsR0FBRyxNQUFNLG1FQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUN0RjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsTUFBTSxDQUFDLFVBQVUsQ0FBQyxrQ0FBa0MsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDdEU7Z0JBQVM7WUFDTixRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsRUFBQyxDQUFDLENBQUM7U0FDMUQ7SUFDTCxDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLE1BQU0sY0FBYyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQ3pCLDJEQUFDLG1EQUFRLElBQ0wsS0FBSyxFQUFHLEtBQUssQ0FBQyxJQUFLLENBQUMsS0FBSyxFQUN6QixXQUFXLEVBQUcsS0FBSyxDQUFDLElBQUssQ0FBQyxXQUFXLEVBQ3JDLFNBQVMsRUFBRyxLQUFLLENBQUMsSUFBSyxDQUFDLFNBQVMsRUFDakMsaUJBQWlCLEVBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxFQUNqRCxtQkFBbUIsRUFBRyxLQUFLLENBQUMsSUFBSyxDQUFDLG1CQUFtQixFQUNyRCxLQUFLLEVBQUcsS0FBSyxDQUFDLElBQUssQ0FBQyxLQUFLLEVBQ3pCLE1BQU0sRUFBRyxLQUFLLENBQUMsSUFBSyxDQUFDLE1BQU0sRUFDM0IsUUFBUSxFQUFHLEtBQUssQ0FBQyxJQUFLLENBQUMsUUFBUSxFQUMvQixVQUFVLEVBQUcsS0FBSyxDQUFDLElBQUssQ0FBQyxVQUFVLEVBQ25DLEdBQUcsRUFBRyxLQUFLLENBQUMsSUFBSyxDQUFDLEdBQUcsR0FDdkIsQ0FDTCxDQUFDO0lBRUYsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7UUFDM0IsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLE9BQU8sQ0FDSDtnQkFDSSwyREFBQyxvREFBRyxJQUFDLENBQUMsRUFBRyxFQUFFLEVBQUcsQ0FBQyxFQUFHLENBQUMsSUFDYixjQUFjLEVBQUUsQ0FDaEI7Z0JBQ04sMkRBQUMsb0RBQUcsSUFBQyxDQUFDLEVBQUcsRUFBRSxFQUFHLENBQUMsRUFBRyxDQUFDLElBQ2IsWUFBWSxFQUFFLENBQ2Q7Z0JBQ04sMkRBQUMsb0RBQUcsSUFBQyxDQUFDLEVBQUcsRUFBRSxFQUFHLENBQUMsRUFBRyxDQUFDLElBQ2IsYUFBYSxFQUFFLENBQ2YsQ0FDUCxDQUNOLENBQUM7U0FDTDtRQUNELElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNoQixPQUFPLENBQ0g7Z0JBQ0ksMkRBQUMsb0RBQUcsSUFBQyxDQUFDLEVBQUcsRUFBRSxFQUFHLENBQUMsRUFBRyxDQUFDLElBQ2IsY0FBYyxFQUFFLENBQ2hCO2dCQUNOLDJEQUFDLG9EQUFHLElBQUMsQ0FBQyxFQUFHLEVBQUUsRUFBRyxDQUFDLEVBQUcsQ0FBQyxJQUNiLGFBQWEsRUFBRSxDQUNmLENBQ1AsQ0FDTixDQUFDO1NBQ0w7UUFDRCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3JCLE9BQU8sQ0FDSDtnQkFDSSwyREFBQyxvREFBRyxJQUFDLENBQUMsRUFBRyxFQUFFLEVBQUcsQ0FBQyxFQUFHLENBQUMsSUFDYixjQUFjLEVBQUUsQ0FDaEI7Z0JBQ04sMkRBQUMsb0RBQUcsSUFBQyxDQUFDLEVBQUcsRUFBRSxFQUFHLENBQUMsRUFBRyxDQUFDLElBQ2IsWUFBWSxFQUFFLENBQ2QsQ0FDUCxDQUNOLENBQUM7U0FDTDtRQUNELE9BQU8sQ0FDSCwyREFBQyxvREFBRyxJQUFDLENBQUMsRUFBRyxFQUFFLElBQ0wsY0FBYyxFQUFFLENBQ2hCLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFFRCxNQUFNLFlBQVksR0FBRyxHQUFHLEVBQUUsQ0FBQywyREFBQyx5REFBVyxJQUFDLE1BQU0sRUFBRyxLQUFLLENBQUMsTUFBTSxHQUFLLENBQUM7SUFDbkUsTUFBTSxhQUFhLEdBQUcsR0FBRyxFQUFFLENBQUMsMkRBQUMsaURBQU8sSUFBQyxFQUFFLEVBQUcsRUFBRSxHQUFLLENBQUM7SUFFbEQsK0NBQStDO0lBQy9DLE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtRQUNyQixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUNoQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ1osT0FBTyxDQUNILDJEQUFDLG1EQUFRLElBQUMsSUFBSSxFQUFHLEtBQUssQ0FBQyxJQUFJLEVBQ3ZCLFFBQVEsRUFBRyxnQkFBZ0IsRUFDM0IsUUFBUSxFQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxFQUFDLENBQUMsR0FDdkUsQ0FDTCxDQUFDO2FBQ0w7U0FDSjthQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssY0FBYyxFQUFFO1lBQzNDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLFVBQVUsQ0FBQyxDQUFDO1lBQ2xFLElBQUksUUFBUSxFQUFFO2dCQUNWLE9BQU8sQ0FDSCwyREFBQywrREFBYyxJQUFDLEtBQUssRUFBQyxlQUFlLEVBQ2pDLFFBQVEsRUFBRyxRQUFRLEVBQ25CLFFBQVEsRUFBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBQyxDQUFDLEVBQ3JFLFFBQVEsRUFBRyxvQkFBb0IsR0FDakMsQ0FDTCxDQUFDO2FBQ0w7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNmO2FBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxnQkFBZ0IsRUFBRTtZQUM3QyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNqQyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxVQUFVLENBQUMsQ0FBQztZQUNsRSxJQUFJLFFBQVEsRUFBRTtnQkFDVixPQUFPLENBQ0gsMkRBQUMsNkRBQVcsSUFDUixJQUFJLEVBQUMsVUFBVSxFQUNmLFVBQVUsRUFBRyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFDL0MsU0FBUyxFQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxFQUFDLENBQUMsR0FDeEUsQ0FDTDthQUNKO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUFFO1lBQzFDLE1BQU0sZUFBZSxHQUFHLHdGQUFxQixFQUFFLENBQUM7WUFDaEQsTUFBTSxXQUFXLG1DQUNWLGVBQWUsS0FDbEIsRUFBRSxFQUFFLENBQUMsRUFDTCxNQUFNLEVBQUUsRUFBRSxFQUNWLE9BQU8sRUFBRSxJQUFJLEdBQ2hCLENBQUM7WUFDRixPQUFPLENBQ0gsMkRBQUMsK0RBQWMsSUFBQyxLQUFLLEVBQUMsY0FBYyxFQUNoQyxRQUFRLEVBQUcsV0FBVyxFQUN0QixRQUFRLEVBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLEVBQUMsQ0FBQyxFQUNyRSxRQUFRLEVBQUcsbUJBQW1CLEdBQ2hDLENBQ0wsQ0FBQztTQUNMO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ2IsT0FBTywyREFBQywrREFBUyxPQUFHLENBQUM7S0FDeEI7SUFDRCxPQUFPLENBQ0gsb0VBQUssU0FBUyxFQUFDLFdBQVc7UUFDdEIsMkRBQUMsdURBQVUsSUFDUCxJQUFJLEVBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ3RCLFFBQVEsRUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDOUIsVUFBVSxFQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUNsQyxNQUFNLEVBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQzFCLFFBQVEsRUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDOUIsUUFBUSxFQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUM5QixVQUFVLEVBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLElBRWhDLGlCQUFpQixFQUFFLENBQ1o7UUFDYiwyREFBQyxvREFBRztZQUNBLDJEQUFDLG9EQUFHLElBQUMsQ0FBQyxFQUFHLEVBQUUsRUFBRyxDQUFDLEVBQUcsQ0FBQztnQkFDZixtRkFBa0IsQ0FDaEI7WUFDTiwyREFBQyxvREFBRyxJQUFDLENBQUMsRUFBRyxFQUFFLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxPQUFPLEVBQUcsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDaEQsMkRBQUMsMkVBQWU7b0JBQ1osMkRBQUMsK0RBQVcsSUFBQyxPQUFPLEVBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDLEVBQUMsQ0FBQyxFQUNqRixPQUFPLEVBQUcsQ0FBQyxVQUFVLENBQUM7d0JBRXRCLDJEQUFDLHFFQUFZLElBQUMsUUFBUSxFQUFDLEtBQUssR0FBRyxDQUNyQjtvQkFDZCwyREFBQywrREFBVyxJQUFDLE9BQU8sRUFBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUMsRUFBQyxDQUFDLEVBQzlFLE9BQU8sRUFBRyxDQUFDLFdBQVcsQ0FBQzt3QkFFdkIsMkRBQUMscUVBQVksSUFBQyxRQUFRLEVBQUMsTUFBTSxHQUFHLENBQ3RCO29CQUNkLDJEQUFDLCtEQUFXLElBQUMsT0FBTyxFQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQyxFQUFDLENBQUMsRUFDaEYsT0FBTyxFQUFHLENBQUMsUUFBUSxDQUFDO3dCQUVwQiwyREFBQyxxRUFBWSxJQUFDLFFBQVEsRUFBQyxRQUFRLEdBQUcsQ0FDeEIsQ0FDQSxDQUNoQjtZQUNOLDJEQUFDLG9EQUFHLElBQUMsQ0FBQyxFQUFHLEVBQUU7Z0JBQ1AsMkRBQUMscURBQVMsSUFBQyxTQUFTLEVBQUcsS0FBSyxDQUFDLFNBQVMsRUFDbEMsV0FBVyxFQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFDLEVBQUMsQ0FBQyxFQUNuRixhQUFhLEVBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBQyxFQUFDLENBQUMsR0FDekYsQ0FDQSxDQUNKO1FBQ0osV0FBVyxFQUFFLENBQ2IsQ0FDVCxDQUFDO0FBQ04sQ0FBQztBQUNELGNBQWMsQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMvUjlDO0FBQUE7QUFBQTtBQUFPLE1BQU0sU0FBUyxHQUFHLEdBQVcsRUFBRSxDQUFDLENBQUM7SUFDcEMsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQztJQUN2QixRQUFRLEVBQUUsS0FBSztJQUNmLE1BQU0sRUFBRSxFQUFFO0lBQ1YsSUFBSSxFQUFFLFNBQVM7SUFDZixTQUFTLEVBQUUsRUFBRTtDQUNoQixDQUFDLENBQUM7QUFTSSxNQUFNLFdBQVcsR0FBa0MsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDeEUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2pCLEtBQUssU0FBUztZQUNWLHVDQUFXLEtBQUssS0FBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBRTtRQUN6QyxLQUFLLGFBQWE7WUFDZCx1Q0FBVyxLQUFLLEtBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLElBQUU7UUFDakQsS0FBSyxXQUFXO1lBQ1osdUNBQVcsS0FBSyxLQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxJQUFFO1FBQzdDLEtBQUssU0FBUztZQUNWLHVDQUFXLEtBQUssS0FBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBRTtRQUN6QyxLQUFLLGNBQWM7WUFDZix1Q0FBVyxLQUFLLEtBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLElBQUU7UUFDbkQ7WUFDSSxPQUFPLEtBQUssQ0FBQztLQUNwQjtBQUNMLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ0g7QUFDTTtBQUNFO0FBQ087QUFJbEQseURBQU0sQ0FBQyxHQUFHLEVBQUU7SUFDUiwyREFBTSxFQUFFLENBQUM7SUFDVCx3REFBTSxDQUFDLDJEQUFhLENBQUMsOERBQWMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQ25DLFFBQVEsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pvQztBQUNFO0FBRXpDLE1BQU0sT0FBTyxHQUFHO0lBQ1osY0FBYyxFQUFFLGtCQUFrQjtJQUNsQyxhQUFhLEVBQUUsMkRBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO0NBQy9DLENBQUM7QUFJRixTQUFTLFlBQVksQ0FBQyxNQUFvQjtJQUN0QyxJQUFJLHNEQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDakIsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNELE9BQU8sR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2SCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsR0FBVztJQUMzQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUVELFNBQWUsZUFBZSxDQUFDLFFBQWtCOzs7UUFDN0MsSUFBSSxVQUFVLE9BQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsdUNBQUksR0FBRyxHQUFDLEdBQUcsQ0FBQztlQUMxRCxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxrQkFBa0IsRUFBRTtZQUNoRSxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQjs7Q0FDSjtBQVFELFNBQVMsZUFBZSxDQUFDLEdBQVc7SUFDaEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztXQUNqQixDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO2FBQ3pELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQztBQUN0RCxDQUFDO0FBRUQsU0FBZSxhQUFhLENBQUMsUUFBa0I7O1FBQzNDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxPQUFPLEdBQUcsTUFBTSxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzFCLE1BQU0sS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzRTtZQUNELE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtZQUN6QixPQUFPLEVBQUUsQ0FBQztTQUNiO1FBQ0QsSUFBSTtZQUNBLE9BQU8sZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixNQUFNLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztDQUFBO0FBRUQ7Ozs7OztHQU1HO0FBQ0ksU0FBZSxHQUFHLENBQVcsR0FBVyxFQUFFLFNBQXVCLEVBQUU7O1FBQ3RFLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6RCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQUE7QUFFRDs7Ozs7OztHQU9HO0FBQ0ksU0FBZSxJQUFJLENBQVcsR0FBVyxFQUFFLElBQVksRUFDekIsU0FBdUIsRUFBRTs7UUFFMUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyRCxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQztZQUN0QixPQUFPLEVBQUUsT0FBTztZQUNoQixNQUFNLEVBQUUsTUFBTTtTQUNqQixDQUFDLENBQUM7UUFDSCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQUE7QUFFTSxTQUFlLFFBQVEsQ0FBVyxHQUFXLEVBQUUsSUFBYyxFQUMzQixTQUF1QixFQUFFOztRQUM5RCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JELElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLE1BQU07U0FDakIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUFBO0FBRUQ7Ozs7Ozs7R0FPRztBQUNJLFNBQWUsR0FBRyxDQUFXLEdBQVcsRUFBRSxJQUFZLEVBQ3pCLFNBQXVCLEVBQUU7O1FBQ3pELE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckQsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDdEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUFBO0FBRU0sU0FBZSxPQUFPLENBQVcsR0FBVyxFQUFFLElBQWMsRUFDM0IsU0FBdUIsRUFBRTs7UUFDN0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyRCxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztRQUNILE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FBQTtBQUVNLFNBQWUsS0FBSyxDQUFXLEdBQVcsRUFBRSxJQUFZLEVBQ3pCLFNBQXNCLEVBQUU7O1FBQzFELE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckQsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDdEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsTUFBTSxFQUFFLE9BQU87U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUFBO0FBRU0sU0FBZSxPQUFPLENBQVcsR0FBVyxFQUFFLFNBQXVCLEVBQUU7O1FBQzFFLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckQsT0FBTyxFQUFFLE9BQU87WUFDaEIsTUFBTSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUFBOzs7Ozs7Ozs7Ozs7O0FDOUlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTSxtQkFBbUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFFaEQ7Ozs7O0dBS0c7QUFDSSxTQUFTLFlBQVksQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLElBQWE7SUFDbkUsSUFBSSxPQUFPLENBQUM7SUFDWixJQUFJLElBQUksRUFBRTtRQUNOLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQzVELE9BQU8sR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQy9DO1NBQU07UUFDSCxPQUFPLEdBQUcsRUFBRSxDQUFDO0tBQ2hCO0lBQ0QsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxPQUFPLEdBQUcsVUFBVSxDQUFDO0FBQ2hFLENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBQyxJQUFZO0lBQ25DLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7SUFDMUIsS0FBSyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0QyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xDO0tBQ0o7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFFTSxTQUFTLFlBQVksQ0FBQyxJQUFZO0lBQ3JDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ2tDO0FBQ0Q7QUFFbEMsd0VBQXdFO0FBQ3hFLElBQUssUUFNSjtBQU5ELFdBQUssUUFBUTtJQUNULGlDQUFxQjtJQUNyQiwyQkFBZTtJQUNmLCtCQUFtQjtJQUNuQix5QkFBYTtJQUNiLDJCQUFlO0FBQ25CLENBQUMsRUFOSSxRQUFRLEtBQVIsUUFBUSxRQU1aO0FBTWMsTUFBTSxNQUFNO0lBQ3ZCOzs7Ozs7T0FNRztJQUNILFlBQW9CLE1BQWMsRUFBVSxZQUFZLEtBQUs7UUFBekMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVE7SUFDN0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxXQUFXLENBQUMsT0FBZTtRQUM5QixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVEsQ0FBQyxPQUFlO1FBQzNCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksVUFBVSxDQUFDLE9BQWU7UUFDN0IsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxPQUFPLENBQUMsT0FBZTtRQUMxQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sUUFBUSxDQUFDLE9BQWU7UUFDM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVhLEdBQUcsQ0FBQyxLQUFlLEVBQUUsT0FBZTs7WUFDOUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQ2xGO1lBQ0QsTUFBTSxRQUFRLEdBQWUsTUFBTSx1REFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbEQsS0FBSztnQkFDTCxhQUFhO2dCQUNiLE9BQU8sRUFBRSxPQUFPLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU87Z0JBQ2pELE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUN0QixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLDRDQUE0QyxDQUFDLENBQUM7YUFDNUU7UUFDTCxDQUFDO0tBQUE7SUFFTyxLQUFLLENBQUMsS0FBZSxFQUFFLE9BQWU7UUFDMUMsc0RBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGNkY7QUFDaEU7QUFRdkIsU0FBUyxNQUFNLENBQUMsTUFBb0I7SUFDdkMsTUFBTSxNQUFNLEdBQXlCLEVBQUUsQ0FBQztJQUN4QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRU0sTUFBTSxnQkFBaUIsU0FBUSxLQUFLO0lBT3ZDLFlBQVksT0FBZTtRQUN2QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBVE0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFVO1FBQy9CLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7O0FBRWMscUJBQUksR0FBRyxrQkFBa0IsQ0FBQztBQVE3QyxTQUFTLFFBQVEsQ0FBQyxHQUFpRDtJQUMvRCxNQUFNLENBQUMsR0FBaUIsRUFBRSxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUMxRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBOEIsQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQ3ZCLFVBQStDO0lBRS9DLGtCQUFrQjtJQUNsQixNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxPQUFPLENBQU8sTUFBYyxFQUFFLEVBQUU7UUFDNUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQixNQUFNLE9BQU8sR0FBRywwQkFBMEIsT0FBTywrQkFBK0IsQ0FBQztZQUNqRixNQUFNLE1BQU0sR0FBRyxJQUFJLCtDQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QixNQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtRQUNELE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsRUFBQztBQUNOLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FDaEIsVUFBa0QsRUFDbEQsT0FBc0M7SUFFdEMsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsT0FBTyxDQUFPLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUMxQixNQUFNLE9BQU8sR0FBRyxNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN0QixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQjtRQUNELE1BQU0sT0FBTyxHQUFHLDBCQUEwQixPQUFPLCtCQUErQixDQUFDO1FBQ2pGLElBQUksK0NBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQyxFQUFDO0FBQ04sQ0FBQztBQVFNLFNBQWUsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBbUI7O1FBQ3pELE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sTUFBTSxHQUFhLE1BQU0sc0RBQUcsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDbEUsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyQixNQUFNLElBQUksZ0JBQWdCLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUNqRTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FBQTtBQUVNLE1BQU0sUUFBUSxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRS9DLFNBQWUsWUFBWTs7UUFDOUIsT0FBTyxzREFBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUFBO0FBUU0sU0FBZSxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFvQjs7UUFDMUQsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0MsT0FBTyxzREFBRyxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQUE7QUFFTSxNQUFNLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQyxNQUFNLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFN0QsU0FBZSxXQUFXLENBQUMsS0FBaUI7O1FBQy9DLE9BQU8sdURBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUFBO0FBRU0sU0FBZSxXQUFXLENBQUMsRUFBVSxFQUFFLEtBQWlCOztRQUMzRCxPQUFPLHNEQUFHLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FBQTtBQUVNLFNBQWUsWUFBWSxDQUFDLEtBQWM7O1FBQzdDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDeEMsT0FBTyxzREFBRyxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FBQTtBQVNELDJDQUEyQztBQUNwQyxTQUFlLFlBQVksQ0FBQyxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFzQjs7UUFDeEUsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztRQUNoRSxNQUFNLFNBQVMsR0FBZ0IsTUFBTSxzREFBRyxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzNFLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Q0FBQTtBQUVNLE1BQU0sV0FBVyxHQUFHLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3JELE1BQU0sbUJBQW1CLEdBQUcsV0FBVyxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztBQUV0RSxTQUFlLGNBQWMsQ0FBQyxRQUF1Qjs7UUFDeEQsT0FBTyx1REFBSSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FBQTtBQUVNLFNBQWUsY0FBYyxDQUFDLFFBQW1COztRQUNwRCxPQUFPLHNEQUFHLENBQUMsbUJBQW1CLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBQUE7QUFFTSxTQUFlLGNBQWMsQ0FBQyxFQUFVOztRQUMzQyxPQUFPLDBEQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUFBO0FBRU0sU0FBZSxlQUFlLENBQUMsS0FBYzs7UUFDaEQsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUN4QyxPQUFPLHNEQUFHLENBQUMscUJBQXFCLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUFBO0FBT00sU0FBZSxZQUFZLENBQUMsRUFBQyxNQUFNLEVBQXNCOztRQUM1RCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNwRCxNQUFNLFNBQVMsR0FBRyxNQUFNLHNEQUFHLENBQWMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDM0UsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztDQUFBO0FBRU0sU0FBZSxjQUFjLENBQUMsUUFBdUI7O1FBQ3hELE9BQU8sdURBQUksQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQUE7QUFFTSxTQUFlLGNBQWMsQ0FBQyxFQUFVLEVBQUUsUUFBdUI7O1FBQ3BFLE9BQU8sc0RBQUcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUFBO0FBRU0sU0FBZSxjQUFjLENBQUMsRUFBVTs7UUFDM0MsT0FBTywwREFBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FBQTtBQUVNLFNBQWUseUJBQXlCOztRQUMzQyxPQUFPLHNEQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBQUE7QUFFTSxTQUFlLGNBQWM7O1FBQ2hDLE9BQU8sc0RBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FBQTtBQUVNLFNBQWUsZ0JBQWdCOztRQUNsQyxPQUFPLHNEQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQUE7QUFTTSxTQUFlLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFvQjs7UUFDekUsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUMxRSxNQUFNLE9BQU8sR0FBYyxNQUFNLHNEQUFHLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7Q0FBQTtBQUVNLE1BQU0sU0FBUyxHQUFHLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pELE1BQU0saUJBQWlCLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUVoRSxTQUFlLFlBQVksQ0FBQyxNQUFtQjs7UUFDbEQsT0FBTyx1REFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQUE7QUFFTSxTQUFlLFlBQVksQ0FBQyxNQUFlOztRQUM5QyxPQUFPLHNEQUFHLENBQUMsaUJBQWlCLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQUE7QUFFTSxTQUFlLGFBQWEsQ0FBQyxLQUFjOztRQUM5QyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sc0RBQUcsQ0FBQyxtQkFBbUIsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQUE7QUFRTSxTQUFlLFNBQVMsQ0FBQyxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQWtCOztRQUN2RCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMzQyxNQUFNLE1BQU0sR0FBYSxNQUFNLHNEQUFHLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FBQTtBQUVNLE1BQU0sUUFBUSxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9DLE1BQU0sZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUU3RCxTQUFlLFdBQVcsQ0FBQyxLQUFpQjs7UUFDL0MsT0FBTyx1REFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQUE7QUFTTSxTQUFlLFlBQVksQ0FDOUIsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBdUI7O1FBRTdDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDdEUsTUFBTSxTQUFTLEdBQWdCLE1BQU0sc0RBQUcsQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM1RSxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0NBQUE7QUFFTSxNQUFNLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNyRCxNQUFNLG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFFdEUsU0FBZSxjQUFjLENBQUMsUUFBdUI7O1FBQ3hELE9BQU8sdURBQUksQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQUE7QUFFTSxTQUFlLGNBQWMsQ0FBQyxRQUFtQjs7UUFDcEQsT0FBTyxzREFBRyxDQUFDLG9CQUFvQixRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUFBO0FBT00sU0FBZSxnQkFBZ0IsQ0FDbEMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUEyQjs7UUFFekMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sc0RBQUcsQ0FBQyx3QkFBd0IsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBQUE7QUFFTSxTQUFlLGVBQWUsQ0FBQyxLQUFjOztRQUNoRCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sc0RBQUcsQ0FBQyxzQkFBc0IsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQUE7QUFXTSxTQUFlLFFBQVEsQ0FDMUIsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFtQjs7UUFFckUsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDO1lBQzNCLEVBQUUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxVQUFVO1lBQ2hELFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVU7U0FDckQsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxLQUFLLEdBQVksTUFBTSxzREFBRyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMvRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQUE7QUFFTSxNQUFNLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVwRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsSUFBZSxFQUFFLElBQWlCLEVBQUUsRUFBRTtJQUM5RCxNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLElBQUksSUFBSSxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDOUI7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFSyxTQUFlLFVBQVUsQ0FBQyxJQUFlLEVBQUUsSUFBaUI7O1FBQy9ELE1BQU0sSUFBSSxHQUFHLGtCQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxPQUFPLDJEQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FBQTtBQUVNLFNBQWUsVUFBVSxDQUFDLEVBQVUsRUFBRSxJQUFlLEVBQUUsSUFBaUI7O1FBQzNFLE1BQU0sSUFBSSxHQUFHLGtCQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxPQUFPLDBEQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQUE7QUFFTSxTQUFlLGNBQWMsQ0FBQyxFQUFVLEVBQUUsSUFBb0I7O1FBQ2pFLE9BQU8sd0RBQUssQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FBQTtBQVVNLFNBQWUsV0FBVyxDQUM3QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQXNCOztRQUV2RixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUM7WUFDM0IsVUFBVSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZO1lBQ2hGLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFlBQVk7U0FDeEQsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxzREFBRyxDQUFDLG9CQUFvQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FBQTtBQUVNLFNBQWUsZ0JBQWdCOztRQUNsQyxPQUFPLHNEQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQUE7QUFRRCwyQ0FBMkM7QUFDcEMsU0FBZSxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUF3Qjs7UUFDekUsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2RSxNQUFNLFVBQVUsR0FBaUIsTUFBTSxzREFBRyxDQUFDLG1CQUFtQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQy9FLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7Q0FBQTtBQUVNLFNBQWUsZ0JBQWdCLENBQUMsVUFBMkI7O1FBQzlELE9BQU8sdURBQUksQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQUE7QUFRTSxTQUFlLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQXVCOztRQUNoRSxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3QyxNQUFNLFNBQVMsR0FBZ0IsTUFBTSxzREFBRyxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzVFLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Q0FBQTtBQUVNLE1BQU0sV0FBVyxHQUFHLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3JELE1BQU0sbUJBQW1CLEdBQUcsV0FBVyxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztBQUV0RSxTQUFlLGNBQWMsQ0FBQyxRQUF1Qjs7UUFDeEQsT0FBTyx1REFBSSxDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FBQTtBQUVNLFNBQWUsY0FBYyxDQUFDLFFBQW1COztRQUNwRCxPQUFPLHNEQUFHLENBQUMsb0JBQW9CLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBQUE7QUFFTSxTQUFlLGVBQWUsQ0FBQyxLQUFjOztRQUNoRCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sc0RBQUcsQ0FBQyxzQkFBc0IsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdYRDs7OztHQUlHO0FBQ0ksU0FBUyxvQkFBb0IsQ0FBQyxPQUFxQjtJQUN0RCxNQUFNLElBQUksR0FBZ0IsRUFBRSxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRDs7O0dBR0c7QUFDSSxTQUFTLFNBQVMsQ0FBQyxHQUFXO0lBQ2pDLE1BQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDeEIsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQ25EO0lBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsd0JBQXdCO0lBQ3hCLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEYsQ0FBQztBQUVNLFNBQVMsU0FBUyxDQUFDLElBQVU7SUFDaEMsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdEYsQ0FBQztBQUVNLE1BQU0sT0FBTyxHQUFXLEdBQUcsQ0FBQztBQUVuQzs7OztHQUlHO0FBQ0ksU0FBUyxrQkFBa0I7SUFDOUIsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQ7OztHQUdHO0FBQ0ksU0FBUyxPQUFPLENBQUMsR0FBVztJQUMvQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRUQ7OztHQUdHO0FBQ0ksU0FBUyxxQkFBcUIsQ0FBQyxDQUFTO0lBQzNDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDbkUsQ0FBQztBQUVEOzs7R0FHRztBQUNJLFNBQVMsUUFBUSxDQUFDLElBQVk7SUFDakMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNyRCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNJLFNBQVMsS0FBSyxDQUFJLEdBQVEsRUFBRSxRQUE2QjtJQUM1RCxJQUFJLE9BQXNCLENBQUM7SUFDM0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDdkIsS0FBSyxNQUFNLElBQUksSUFBSSxHQUFHLEVBQUU7UUFDcEIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBRTtZQUNkLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDZixNQUFNLEdBQUcsR0FBRyxDQUFDO1NBQ2hCO0tBQ0o7SUFDRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNJLFNBQVMsS0FBSyxDQUFJLEdBQVEsRUFBRSxRQUE2QjtJQUM1RCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixLQUFLLE1BQU0sSUFBSSxJQUFJLEdBQUcsRUFBRTtRQUNwQixHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNJLFNBQVMsUUFBUSxDQUFDLENBQU0sRUFBRSxDQUFNO0lBQ25DLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUMvQixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELEtBQUssTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFO1FBQ25CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNmLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0tBQ0o7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBUUQ7Ozs7O0dBS0c7QUFDSSxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBYztJQUNwRCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNqQixLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNuQixJQUFJLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDckMsTUFBTSxDQUFDLENBQUM7S0FDWDtBQUNMLENBQUM7QUFFTSxTQUFlLFdBQVcsQ0FBQyxRQUFnQjs7UUFDOUMsSUFBSTtZQUNBLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1lBQ3pELE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQztTQUN0QjtRQUFDLFdBQU07WUFDSixPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7Q0FBQTtBQUVNLFNBQVMsY0FBYyxDQUFDLElBQW1CLEVBQUUsUUFBZ0I7SUFDaEUsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQztBQUNwRCxDQUFDO0FBRUQsc0RBQXNEO0FBQy9DLFNBQVMsUUFBUSxDQUFDLEdBQVc7SUFDaEMsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7QUFDeEIsQ0FBQztBQUVNLFNBQVMsTUFBTSxDQUFDLEdBQWU7SUFDbEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7Ozs7Ozs7Ozs7Ozs7QUMxS0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtFO0FBS2xFLDZEQUE2RDtBQUN0RCxTQUFTLFlBQVksQ0FBQyxJQUE4QyxFQUM5QyxXQUFpQyxFQUNqQyxRQUFrQixFQUFFLFNBQVMsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUM7SUFDckUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ2QsZ0RBQWdEO1FBQ2hELElBQUksNERBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzNCLElBQUksRUFBRSxXQUFXO1lBQ2pCLEtBQUs7WUFDTCxTQUFTO1lBRVQsY0FBYyxFQUFFLFVBQWUsSUFBSTtnQkFDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25CLENBQUM7U0FDSixDQUFDLENBQUM7UUFDSCw0QkFBNEI7UUFDNUIsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDeEI7QUFDTCxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxFQUFVO0lBQ2hDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekUsQ0FBQztBQUVELDREQUE0RDtBQUNyRCxTQUFTLE1BQU0sQ0FBQyxjQUF1QjtJQUMxQyxJQUFJLGNBQWMsRUFBRTtRQUNoQixpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUNyQztJQUNELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkQsZ0RBQWdEO0lBQ2hELElBQUksdURBQU8sQ0FBQyxXQUFZLENBQUMsQ0FBQztJQUMxQixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDakUsZ0RBQWdEO0lBQ2hELElBQUksd0RBQVEsQ0FBQyxZQUFhLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsc0RBQXNEO0FBQy9DLFNBQVMsS0FBSyxDQUFDLE9BQWU7SUFDakMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNKLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLElBQUksRUFBRSxPQUFPO0tBQ2hCLENBQUMsQ0FBQztBQUNQLENBQUMiLCJmaWxlIjoid2luZV9wcm9maWxlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJ3aW5lX3Byb2ZpbGVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbOSxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgQ29sIH0gZnJvbSBcIi4vR3JpZFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4vTWF0ZXJpYWxJY29uXCI7XG5cbmludGVyZmFjZSBJRmxvYXRpbmdCdG5Qcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB7XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgICBvbk1vdXNlRG93bj86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKGNsYXNzZXMgfHwgW10pLmpvaW4oXCIgXCIpO1xufVxuXG5leHBvcnQgY29uc3QgRmxvYXRpbmdCdG46IFJlYWN0LkZDPElGbG9hdGluZ0J0blByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21iaW5lQ2xhc3Nlcyhwcm9wcy5jbGFzc2VzKTtcbiAgICBjb25zdCBtb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICAgICAgaWYgKHByb3BzLm9uTW91c2VEb3duKSB7XG4gICAgICAgICAgICBwcm9wcy5vbk1vdXNlRG93bihlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudD4pID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9wcy5vbkNsaWNrKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgYHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4tZmxvYXRpbmcgJHtjbGFzc2VzfWAgfVxuICAgICAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyBtb3VzZURvd24gfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9hPlxuICAgICk7XG59O1xuRmxvYXRpbmdCdG4uZGlzcGxheU5hbWUgPSBcIkZsb2F0aW5nQnRuXCI7XG5GbG9hdGluZ0J0bi5kZWZhdWx0UHJvcHMgPSB7IG9uTW91c2VEb3duOiAoXykgPT4gdW5kZWZpbmVkIH07XG5cbmludGVyZmFjZSBJQnRuUHJvcHMgZXh0ZW5kcyBJQ2hpbGRyZW5Qcm9wLCBJQ2xhc3Nlc1Byb3Age1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBCdG46IFJlYWN0LkZDPElCdG5Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tYmluZUNsYXNzZXMocHJvcHMuY2xhc3Nlcyk7XG4gICAgY29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb3BzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17IGByYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gJHtjbGFzc2VzfWAgfVxuICAgICAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cbkJ0bi5kaXNwbGF5TmFtZSA9IFwiQnRuXCI7XG5cbmludGVyZmFjZSBJQ2FuY2VsT3JDb25maXJtUHJvcHMge1xuICAgIG9uQ29uZmlybUNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIG9uQ2FuY2VsQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBDYW5jZWxPckNvbmZpcm1CdG5zOiBSZWFjdC5GQzxJQ2FuY2VsT3JDb25maXJtUHJvcHM+ID1cbiAgICAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICA8QnRuIGNsYXNzZXM9eyBbXCJncmVlbi1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uQ29uZmlybUNsaWNrIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cInNlbmRcIiBjbGFzc05hbWU9XCJyaWdodFwiIC8+XG4gICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcInJlZC1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uQ2FuY2VsQ2xpY2sgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdG4+XG4gICAgICAgIDwvQ29sPlxuICAgICk7XG59XG5DYW5jZWxPckNvbmZpcm1CdG5zLmRpc3BsYXlOYW1lID0gXCJDYW5jZWxPckNvbmZpcm1CdG5zXCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9saWIvTG9nZ2VyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0SW5wdXQge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IG51bWJlcjtcbn1cblxuY29uc3QgRk9OVF9GQU1JTFkgPSBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCI7XG5cbmNvbnN0IENPTE9SUyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KFtcbiAgICBbXCJyZWRcIiwgXCJyZ2JhKDIzMCwgMjUsIDc1LCAwLjgpXCJdLFxuICAgIFtcIm9yYW5nZVwiLCBcInJnYmEoMjQ1LCAxMzAsIDQ4LCAwLjgpXCJdLFxuICAgIFtcInllbGxvd1wiLCBcInJnYmEoMjU1LCAyMjUsIDI1LCAwLjgpXCJdLFxuICAgIFtcImxpbWVcIiwgXCJyZ2JhKDIxMCwgMjQ1LCA2MCwgMC44KVwiXSxcbiAgICBbXCJncmVlblwiLCBcInJnYmEoNjAsIDE4MCwgNzUsIDAuOClcIl0sXG4gICAgW1wiY3lhblwiLCBcInJnYmEoNzAsIDI0MCwgMjQwLCAwLjgpXCJdLFxuICAgIFtcImJsdWVcIiwgXCJyZ2JhKDAsIDEzMCwgMjAwLCAwLjgpXCJdLFxuICAgIFtcIm5hdnlcIiwgXCJyZ2JhKDAsIDAsIDEyOCwgMC44KVwiXSxcbiAgICBbXCJtYWdlbnRhXCIsIFwicmdiYSgyNDAsIDUwLCAyMzAsIDAuOClcIl0sXG4gICAgW1wicHVycGxlXCIsIFwicmdiYSgxNDUsIDMwLCAxODAsIDAuOClcIl0sXG5dKTtcblxuY29uc3QgV0hJVEUgPSBcIiNmOGY4ZjhcIjtcbmNvbnN0IFRSQU5TTFVDRU5UX1dISVRFID0gXCJyZ2JhKDI0MCwgMjQwLCAyNDAsIDAuOSlcIjtcbmNvbnN0IFRSQU5TTFVDRU5UX0dSQVkgPSBcInJnYmEoMjAwLCAyMDAsIDIwMCwgMC45KVwiO1xuXG5mdW5jdGlvbiBjaGFuZ2VUcmFuc3BhcmVuY3koY29sb3I6IHN0cmluZywgdHJhbnNwYXJlbmN5OiBudW1iZXIpIHtcbiAgICBpZiAodHJhbnNwYXJlbmN5IDw9IDAgfHwgdHJhbnNwYXJlbmN5ID49IDEpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJUcmFuc3BhcmVuY3kgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDFcIik7XG4gICAgfVxuICAgIGNvbnN0IGZpZWxkcyA9IGNvbG9yLnN1YnN0cig1LCBjb2xvci5sZW5ndGggLSA3KS5zcGxpdChcIixcIikubWFwKFxuICAgICAgICAodmFsKSA9PiBwYXJzZUludCh2YWwsIDEwKSxcbiAgICApO1xuXG4gICAgZmllbGRzWzNdID0gdHJhbnNwYXJlbmN5O1xuICAgIHJldHVybiBgcmdiYSgke2ZpZWxkc1swXX0sICR7ZmllbGRzWzFdfSwgJHtmaWVsZHNbMl19LCAke2ZpZWxkc1szXX0pYDtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHNwbGl0dGluZyBEaWN0IHRvIHNlcGVyYXRlIGxhYmVsIGFuZCBrZXkgYXJyYXlzIGZvclxuICogaW50ZXJmYWNpbmcgd2l0aCBDaGFydHMuanNcbiAqL1xuZnVuY3Rpb24gc3BsaXREYXRhKGRhdGE6IElDaGFydElucHV0W10pOiBbc3RyaW5nW10sIG51bWJlcltdXSB7XG4gICAgY29uc3QgY2hhcnREYXRhOiBudW1iZXJbXSA9IFtdO1xuICAgIGNvbnN0IGNoYXJ0TGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGRhdGEuZm9yRWFjaCgoY28pID0+IHtcbiAgICAgICAgY2hhcnREYXRhLnB1c2goY28udmFsdWUpO1xuICAgICAgICBjaGFydExhYmVscy5wdXNoKGNvLmxhYmVsKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NoYXJ0TGFiZWxzLCBjaGFydERhdGFdO1xufVxuXG4vKiogSGVscGVyIGZ1bmN0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIHRvIHByb2NlZWQgd2l0aCBjaGFydCBjcmVhdGlvbi4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hhcnRJbnB1dChjaGFydERhdGE6IG51bWJlcltdKSB7XG4gICAgLy8gT25seSBjcmVhdGUgY2hhcnQgaWYgb25lIG9yIG1vcmUgZ3JhcGVzIGhhcyBhIG5vbi16ZXJvIHZhbHVlXG4gICAgaWYgKGNoYXJ0RGF0YS5sZW5ndGggPT09IDAgfHwgY2hhcnREYXRhLmV2ZXJ5KG51bSA9PiBudW0gPT09IDApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmludGVyZmFjZSBJUGllQ2hhcnRQcm9wcyB7XG4gICAgZGF0YTogSUNoYXJ0SW5wdXRbXTtcbn1cblxuZXhwb3J0IGNvbnN0IFBpZUNoYXJ0OiBSZWFjdC5GQzxJUGllQ2hhcnRQcm9wcz4gPSAoe2RhdGF9KSA9PiB7XG4gICAgY29uc3QgW2NoYXJ0TGFiZWxzLCBjaGFydERhdGFdID0gc3BsaXREYXRhKGRhdGEpO1xuXG4gICAgY29uc3QgY29uZmlnOiBDaGFydC5DaGFydENvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICAgICAgICAgICBcInJnYmEoMTM5LCAxOTUsIDc0KVwiLFxuICAgICAgICAgICAgICAgICAgICBcInJnYmEoMTczLCAyMCwgODcpXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmdiYSgyNTEsIDE5MiwgNDUpXCIsXG4gICAgICAgICAgICAgICAgICAgIENPTE9SUy5nZXQoXCJibHVlXCIpISxcbiAgICAgICAgICAgICAgICAgICAgQ09MT1JTLmdldChcInB1cnBsZVwiKSEsXG4gICAgICAgICAgICAgICAgICAgIENPTE9SUy5nZXQoXCJvcmFuZ2VcIikhLFxuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBkYXRhOiBjaGFydERhdGEsXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnRMYWJlbHMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIC8vIFJlc2l6ZSBjaGFydCB3aXRoIGl0cyBjb250YWluZXJcbiAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBGT05UX0ZBTUlMWSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgYm9keUZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgICAgIGJvZHlGb250U2l6ZTogMTQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiBcInBpZVwiLFxuICAgIH07XG5cbiAgICBjb25zdCBjYW52YXNSZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxDYW52YXNFbGVtZW50PjtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBpZSA9IG5ldyBDaGFydChjYW52YXNSZWYuY3VycmVudCwgY29uZmlnKTtcbiAgICB9LCBbY2FudmFzUmVmLCBjb25maWddKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxjYW52YXMgaGVpZ2h0PVwiMTAwcHhcIiByZWY9e2NhbnZhc1JlZn0gLz5cbiAgICApO1xufVxuUGllQ2hhcnQuZGlzcGxheU5hbWUgPSBcIlBpZUNoYXJ0XCI7XG5cbmludGVyZmFjZSBJQmFyQ2hhcnRQcm9wcyB7XG4gICAgZGF0YTogSUNoYXJ0SW5wdXRbXTtcbiAgICBoZWlnaHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEJhckNoYXJ0OiBSZWFjdC5GQzxJQmFyQ2hhcnRQcm9wcz4gPSAoe2RhdGEsIGhlaWdodH0pID0+IHtcbiAgICBjb25zdCBbY2hhcnRMYWJlbHMsIGNoYXJ0RGF0YV0gPSBzcGxpdERhdGEoZGF0YSk7XG4gICAgLy8gRXJyb3IgY2hlY2tpbmdcbiAgICBpZiAoIXZhbGlkYXRlQ2hhcnRJbnB1dChjaGFydERhdGEpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjb2xvclZhbHVlcyA9IEFycmF5LmZyb20oQ09MT1JTLnZhbHVlcygpKTtcblxuICAgIGNvbnN0IGNvbmZpZzogQ2hhcnQuQ2hhcnRDb25maWd1cmF0aW9uID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yVmFsdWVzLFxuICAgICAgICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YSxcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgbGFiZWxzOiBjaGFydExhYmVscyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDE1LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDE1LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBUUkFOU0xVQ0VOVF9HUkFZLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6IFRSQU5TTFVDRU5UX1dISVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogRk9OVF9GQU1JTFksXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFRSQU5TTFVDRU5UX0dSQVksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6IFRSQU5TTFVDRU5UX1dISVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogRk9OVF9GQU1JTFksXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICBib2R5Rm9udEZhbWlseTogRk9OVF9GQU1JTFksXG4gICAgICAgICAgICAgICAgYm9keUZvbnRTaXplOiAxMixcbiAgICAgICAgICAgICAgICB0aXRsZUZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgICAgIHRpdGxlRm9udFNpemU6IDE0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogXCJob3Jpem9udGFsQmFyXCIsXG4gICAgfTtcblxuICAgIGNvbnN0IGNhbnZhc1JlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTENhbnZhc0VsZW1lbnQ+O1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgYmFyID0gbmV3IENoYXJ0KGNhbnZhc1JlZi5jdXJyZW50LCBjb25maWcpO1xuICAgIH0sIFtjYW52YXNSZWYsIGNvbmZpZ10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGNhbnZhcyBoZWlnaHQ9e2hlaWdodH0gcmVmPXtjYW52YXNSZWZ9IC8+XG4gICAgKTtcbn1cbkJhckNoYXJ0LmRpc3BsYXlOYW1lID0gXCJCYXJDaGFydFwiO1xuXG5pbnRlcmZhY2UgSUxpbmVDaGFydFByb3BzIHtcbiAgICBkYXRhOiBJQ2hhcnRJbnB1dFtdW107XG4gICAgc2VyaWVzTGFiZWxzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IExpbmVDaGFydDogUmVhY3QuRkM8SUxpbmVDaGFydFByb3BzPiA9ICh7ZGF0YSwgc2VyaWVzTGFiZWxzfSkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoTGluZUNoYXJ0Lm5hbWUpO1xuXG4gICAgY29uc3QgY2hhcnRMYWJlbHMgPSBzcGxpdERhdGEoZGF0YVswXSlbMF07XG4gICAgaWYgKGRhdGEubGVuZ3RoICE9PSBzZXJpZXNMYWJlbHMubGVuZ3RoKSB7XG4gICAgICAgIGxvZ2dlci5sb2dXYXJuaW5nKGBEYXRhIGFuZCBzZXJpZXNMYWJlbHMgaGF2ZSBkaWZmZXJlbnQgbGVuZ2h0cy4gYCArXG4gICAgICAgICAgICAgICAgICAgYCR7ZGF0YS5sZW5ndGh9IGFuZCAke3Nlcmllc0xhYmVscy5sZW5ndGh9IHJlc3BlY3RpdmVseS5gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnOiBDaGFydC5DaGFydENvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXSxcbiAgICAgICAgICAgIGxhYmVsczogY2hhcnRMYWJlbHMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogVFJBTlNMVUNFTlRfR1JBWSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiBUUkFOU0xVQ0VOVF9XSElURSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBUUkFOU0xVQ0VOVF9HUkFZLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiBUUkFOU0xVQ0VOVF9XSElURSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgYm9keUZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgICAgIGJvZHlGb250U2l6ZTogMTIsXG4gICAgICAgICAgICAgICAgdGl0bGVGb250RmFtaWx5OiBGT05UX0ZBTUlMWSxcbiAgICAgICAgICAgICAgICB0aXRsZUZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgIH07XG5cbiAgICBjb25zdCBjb2xvclZhbHVlcyA9IEFycmF5LmZyb20oQ09MT1JTLnZhbHVlcygpKTtcbiAgICAvLyBWYWxpZGF0ZSB0aGVuIGFkZCBlYWNoIGRhdGEgc2VyaWVzIHRvIGNvbmZpZ1xuICAgIGNvbnN0IGRhdGFWYWxpZGF0aW9uID0gZGF0YS5tYXAoKHNlcmllcywgaSkgPT4ge1xuICAgICAgICBjb25zdCBbXywgY2hhcnREYXRhXSA9IHNwbGl0RGF0YShzZXJpZXMpO1xuICAgICAgICAvLyBBZGQgdGhlIHNlcmllcyBkYXRhIHRvIHRoZSBjb3JyZXNwb25kaW5nIGtleSBpbiBkYXRhc2V0TGFiZWxzXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uZmlnLmRhdGEuZGF0YXNldHMucHVzaCh7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoYW5nZVRyYW5zcGFyZW5jeShjb2xvclZhbHVlc1tpXSwgMC41KSxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvclZhbHVlc1tpXSxcbiAgICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YSxcbiAgICAgICAgICAgIGxhYmVsOiBzZXJpZXNMYWJlbHNbaV0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBFcnJvciBjaGVja2luZ1xuICAgICAgICBpZiAoY2hhcnREYXRhLmV2ZXJ5KChudW0pID0+IG51bSA9PT0gMCkpIHtcbiAgICAgICAgICAgIGxvZ2dlci5sb2dXYXJuaW5nKFwiQWxsIHplcm9lcyBmb3IgY2hhcnRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICBpZiAoIWRhdGFWYWxpZGF0aW9uLmV2ZXJ5KCh2YWwpID0+IHZhbCkpIHtcbiAgICAgICAgbG9nZ2VyLmxvZ1dhcm5pbmcoXCJEYXRhIHZhbGlkYXRpb24gb2YgY2hhcnREYXRhIGZhaWxlZFwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY2FudmFzUmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MQ2FudmFzRWxlbWVudD47XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5lID0gbmV3IENoYXJ0KGNhbnZhc1JlZi5jdXJyZW50LCBjb25maWcpO1xuICAgIH0sIFtjYW52YXNSZWYsIGNvbmZpZ10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gLz5cbiAgICApO1xufVxuTGluZUNoYXJ0LmRpc3BsYXlOYW1lID0gXCJMaW5lQ2hhcnRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG5hbWVUb0lkIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgQ29sLCBJR3JpZFByb3BzIH0gZnJvbSBcIi4vR3JpZFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSUdyaWRQcm9wcyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBlbmFibGVkOiBib29sZWFuO1xuICAgIGlzQ2hlY2tlZDogYm9vbGVhbjtcbiAgICBvbkNsaWNrOiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENoZWNrYm94SW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzPiB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgfTtcblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gbmFtZVRvSWQodGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb2wgeyAuLi50aGlzLnByb3BzIH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9eyBpZCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLnRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPXsgaWQgfSBuYW1lPXsgdGhpcy5wcm9wcy5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgdGhpcy5wcm9wcy5pc0NoZWNrZWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHRoaXMucHJvcHMub25DbGljayhlLnRhcmdldC5jaGVja2VkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyAhdGhpcy5wcm9wcy5lbmFibGVkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZXZlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGb3JtU2VsZWN0IH0gZnJvbSBcIm1hdGVyaWFsaXplLWNzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vbGliL0xvZ2dlclwiO1xuaW1wb3J0IHsgSUNvbG9yIH0gZnJvbSBcIi4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBnZXRDb2xvcnMgfSBmcm9tIFwiLi4vbGliL1Jlc3RBcGlcIjtcbmltcG9ydCB7IElPbkNoYW5nZSB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgU2VsZWN0SW5wdXQgfSBmcm9tIFwiLi9TZWxlY3RJbnB1dFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSU9uQ2hhbmdlIHtcbiAgICBzZWxlY3Rpb246IHN0cmluZztcbiAgICBleHRyYUNob2ljZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUNvbG9yc1NlbGVjdCA9IChsb2dnZXI6IExvZ2dlciwgZXh0cmFDaG9pY2U/OiBzdHJpbmcpOiBbc3RyaW5nW10sIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTFNlbGVjdEVsZW1lbnQ+XSA9PiB7XG4gICAgY29uc3QgW3NlbGVjdGlvbk9wdGlvbnMsIHNldFNlbGVjdGlvbk9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgICBjb25zdCBzZWxlY3RSZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxTZWxlY3RFbGVtZW50PjtcblxuICAgIGNvbnN0IGNvbmNhdElmTm90TnVsbD0gKG9wdGlvbnM6IHN0cmluZ1tdKTogc3RyaW5nW10gPT4ge1xuICAgICAgICBpZiAoZXh0cmFDaG9pY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBbZXh0cmFDaG9pY2VdLmNvbmNhdChvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbG9ycygpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JzOiBJQ29sb3JbXSA9IGF3YWl0IGdldENvbG9ycyh7fSk7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uT3B0aW9ucyhjb25jYXRJZk5vdE51bGwoY29sb3JzLm1hcCgoY29sb3IpID0+IGNvbG9yLm5hbWUpKSk7XG4gICAgICAgICAgICAgICAgbmV3IEZvcm1TZWxlY3Qoc2VsZWN0UmVmLmN1cnJlbnQhKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihcIkZhaWxlZCB0byBnZXQgY29sb3JzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hDb2xvcnMoKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFtzZWxlY3Rpb25PcHRpb25zLCBzZWxlY3RSZWZdXG59XG5cbmV4cG9ydCBjb25zdCBDb2xvcklucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihDb2xvcklucHV0Lm5hbWUpO1xuXG4gICAgY29uc3QgW3NlbGVjdGlvbk9wdGlvbnMsIHNlbGVjdFJlZl0gPSB1c2VDb2xvcnNTZWxlY3QobG9nZ2VyLCBwcm9wcy5leHRyYUNob2ljZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VsZWN0SW5wdXQgbmFtZT1cIkNvbG9yXCJcbiAgICAgICAgICAgIHM9eyA0IH0gbD17IDIgfVxuICAgICAgICAgICAgc2VsZWN0UmVmPXsgc2VsZWN0UmVmIH1cbiAgICAgICAgICAgIG9wdGlvbnM9eyBzZWxlY3Rpb25PcHRpb25zIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHYpID0+IHByb3BzPy5vbkNoYW5nZSh2KSB9XG4gICAgICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuQ29sb3JJbnB1dC5kaXNwbGF5TmFtZSA9IFwiQ29sb3JJbnB1dFwiO1xuIiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZXNtL2Zvcm1hdFwiO1xuaW1wb3J0IHsgRGF0ZXBpY2tlciB9IGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCB7IGRhdGVUb051bSwgbnVtVG9EYXRlIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBkYXRlOiBudW1iZXIgfCBudWxsO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBvbkNoYW5nZTogKGRhdGU6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IERhdGVJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9ICh7IGRhdGUsIG9uQ2hhbmdlIH0pID0+IHtcbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRlcGlja2VyID0gbmV3IERhdGVwaWNrZXIoaW5wdXRSZWYuY3VycmVudCwge1xuICAgICAgICAgICAgYXV0b0Nsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHREYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgbWF4RGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogb2JqZWN0LWxpdGVyYWwtc2hvcnRoYW5kXG4gICAgICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbih0aGlzKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoZGF0ZVRvTnVtKGRhdGVwaWNrZXIuZGF0ZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHllYXJSYW5nZTogMTUsXG4gICAgICAgIH0pO1xuICAgIH0sIFtpbnB1dFJlZl0pO1xuXG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGRhdGUgPyBmb3JtYXQobnVtVG9EYXRlKGRhdGUpLCBcIk1NTSBkZCwgeXl5eVwiKSA6IFwiXCI7XG4gICAgY29uc3QgaXNWYWx1ZVNldCA9IGRhdGUgIT09IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXQgbmFtZT17IG5hbWUgfVxuICAgICAgICAgICAgdmFsdWU9eyBkYXRlU3RyaW5nIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhdGVwaWNrZXJcIlxuICAgICAgICAgICAgcz17IDYgfSBsPXsgMyB9XG4gICAgICAgICAgICBhY3RpdmU9eyBpc1ZhbHVlU2V0IH1cbiAgICAgICAgICAgIGlucHV0UmVmPXsgaW5wdXRSZWYgfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuRGF0ZUlucHV0LmRpc3BsYXlOYW1lID0gXCJEYXRlSW5wdXRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG5hbWVUb0lkIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb25DaGFuZ2U6IChmaWxlczogRmlsZSB8IG51bGwpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBGaWxlSW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAoe25hbWUsIG9uQ2hhbmdlfSkgPT4ge1xuICAgIGNvbnN0IGlkID0gbmFtZVRvSWQobmFtZSk7XG5cbiAgICAvLyBUT0RPOiBoaW50IGZpbGUgZXh0ZW5zaW9uc1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtZmllbGQgaW5wdXQtZmllbGQgY29sIHMxMiBsNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIHllbGxvdyBkYXJrZW4tMlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57IG5hbWUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyBpZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17IGlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IG9uQ2hhbmdlKGUudGFyZ2V0LmZpbGVzPy5pdGVtKDApID8/IG51bGwpIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtcGF0aC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZpbGUtcGF0aCB2YWxpZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5GaWxlSW5wdXQuZGlzcGxheU5hbWUgPSBcIkZpbGVJbnB1dFwiO1xuIiwiaW1wb3J0IHsgRmxvYXRpbmdBY3Rpb25CdXR0b24gfSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGbG9hdGluZ0J0biB9IGZyb20gXCIuL0J1dHRvbnNcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AgfSBmcm9tIFwiLi9JUHJvcHNcIjtcbmltcG9ydCB7IE1hdGVyaWFsSWNvbiB9IGZyb20gXCIuL01hdGVyaWFsSWNvblwiO1xuXG5leHBvcnQgY29uc3QgRml4ZWRBY3Rpb25MaXN0OiBSZWFjdC5GQzxJQ2hpbGRyZW5Qcm9wPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGRpdlJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbmV3IEZsb2F0aW5nQWN0aW9uQnV0dG9uKGRpdlJlZi5jdXJyZW50LCB7ZGlyZWN0aW9uOiBcImxlZnRcIn0pO1xuICAgIH0sIFtkaXZSZWZdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLWFjdGlvbi1idG4gaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgcmVmPXsgZGl2UmVmIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmxvYXRpbmdCdG4gY2xhc3Nlcz17IFtcImJ0bi1sYXJnZVwiLCBcInJlZC1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBudWxsIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJtZW51XCIgLz5cbiAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nQnRuPlxuICAgICAgICAgICAgICAgIDx1bD4geyBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGk+eyBjaGlsZCB9PC9saT5cbiAgICAgICAgICAgICAgICApKSB9IDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbkZpeGVkQWN0aW9uTGlzdC5kaXNwbGF5TmFtZSA9IFwiRml4ZWRBY3Rpb25MaXN0XCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQ2hpbGRyZW5Qcm9wLCBJQ2xhc3Nlc1Byb3AgfSBmcm9tIFwiLi9JUHJvcHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFByb3BzIHtcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbiAgICB4bD86IG51bWJlcjtcbn1cblxudHlwZSBJQWxsR3JpZFByb3BzID0gSUdyaWRQcm9wcyAmIElDbGFzc2VzUHJvcCAmIElDaGlsZHJlblByb3A7XG5cbmZ1bmN0aW9uIGpvaW5DbGFzc2VzKGdyaWQ6IHN0cmluZ1tdLCBjbGFzc2VzPzogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIGxldCBhbGxDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGdyaWQuZm9yRWFjaCgoZ2MpID0+IHtcbiAgICAgICAgaWYgKGdjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFsbENsYXNzZXMucHVzaChnYyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBhbGxDbGFzc2VzID0gYWxsQ2xhc3Nlcy5jb25jYXQoY2xhc3NlcyB8fCBbXSk7XG4gICAgcmV0dXJuIGFsbENsYXNzZXMuam9pbihcIiBcIik7XG59XG5cbmZ1bmN0aW9uIGdyaWRDbGFzc2VzKHByb3BzOiBJQWxsR3JpZFByb3BzKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHNDbGFzcyA9IHByb3BzLnMgPyBgcyR7cHJvcHMuc31gIDogXCJcIjtcbiAgICBjb25zdCBtQ2xhc3MgPSBwcm9wcy5tID8gYG0ke3Byb3BzLm19YCA6IFwiXCI7XG4gICAgY29uc3QgbENsYXNzID0gcHJvcHMubCA/IGBsJHtwcm9wcy5sfWAgOiBcIlwiO1xuICAgIGNvbnN0IHhsQ2xhc3MgPSBwcm9wcy54bCA/IGB4bCR7cHJvcHMueGx9YCA6IFwiXCI7XG4gICAgcmV0dXJuIFtzQ2xhc3MsIG1DbGFzcywgbENsYXNzLCB4bENsYXNzXTtcbn1cblxuY29uc3QgR3JpZENvbXBvbmVudEZhY3RvcnkgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIGRpc3BsYXlOYW1lOiBzdHJpbmcpOiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50OiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IChwcm9wczogSUFsbEdyaWRQcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBvdGhlckNsYXNzZXMgPSBqb2luQ2xhc3NlcyhncmlkQ2xhc3Nlcyhwcm9wcyksIHByb3BzLmNsYXNzZXMpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgJHtjbGFzc05hbWV9ICR7b3RoZXJDbGFzc2VzfWAgfT5cbiAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG4gICAgY29tcG9uZW50LmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGNvbnN0IFJvdzogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcInJvd1wiLCBcIlJvd1wiKTtcblxuZXhwb3J0IGNvbnN0IENvbDogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcImNvbFwiLCBcIkNvbFwiKTtcblxuZXhwb3J0IGNvbnN0IElucHV0RmllbGQ6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0gR3JpZENvbXBvbmVudEZhY3RvcnkoXCJjb2wgaW5wdXQtZmllbGRcIiwgXCJJbnB1dEZpZWxkXCIpXG4iLCJpbXBvcnQgTSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBuYW1lVG9JZCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi9HcmlkXCI7XG5cbnR5cGUgSUlucHV0VmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXTtcblxuZXhwb3J0IGludGVyZmFjZSBJSW5wdXRQcm9wczxUIGV4dGVuZHMgSUlucHV0VmFsdWU+IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdmFsdWU6IFQ7XG4gICAgZW5hYmxlZDogYm9vbGVhbjtcbiAgICBjbGFzc05hbWU6IHN0cmluZztcbiAgICBvbkNoYW5nZTogKHZhbDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uRm9jdXM6ICgpID0+IHZvaWQ7XG4gICAgb25CbHVyOiAoKSA9PiB2b2lkO1xuICAgIGlucHV0UmVmPzogUmVhY3QuUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICAgIGlucHV0VHlwZT86IHN0cmluZztcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIHN0ZXA/OiBzdHJpbmc7XG4gICAgbWF4PzogbnVtYmVyO1xuICAgIG1pbj86IG51bWJlcjtcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIElucHV0PFUgZXh0ZW5kcyBJSW5wdXRWYWx1ZT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUlucHV0UHJvcHM8VT4+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgb25DaGFuZ2U6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgb25Gb2N1czogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBvbkJsdXI6IChfOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gbmFtZVRvSWQodGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbnB1dEZpZWxkIHM9eyB0aGlzLnByb3BzLnMgfSBtPXsgdGhpcy5wcm9wcy5tIH0gbD17IHRoaXMucHJvcHMubCB9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17IGlkIH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17IGlkIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5jbGFzc05hbWUgfVxuICAgICAgICAgICAgICAgICAgICByZWY9eyB0aGlzLnByb3BzLmlucHV0UmVmIH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17IHRoaXMucHJvcHMuaW5wdXRUeXBlIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyAhdGhpcy5wcm9wcy5lbmFibGVkIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnByb3BzLnZhbHVlIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gdGhpcy5vbkNoYW5nZShlKSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMucHJvcHMub25CbHVyIH1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17IHRoaXMucHJvcHMub25Gb2N1cyB9XG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9eyB0aGlzLnByb3BzLnN0ZXAgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyB0aGlzLnByb3BzLm1pbiB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IHRoaXMucHJvcHMubWF4IH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwiIH0gaHRtbEZvcj17IGlkIH0+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5uYW1lIH1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9JbnB1dEZpZWxkPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBpY29uTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTWF0ZXJpYWxJY29uOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgIDxpIGNsYXNzTmFtZT17IGBtYXRlcmlhbC1pY29ucyAke3Byb3BzLmNsYXNzTmFtZX1gIH0+XG4gICAgICAgICAgICB7IHByb3BzLmljb25OYW1lIH1cbiAgICAgICAgPC9pPlxuICAgICk7XG59O1xuTWF0ZXJpYWxJY29uLmRpc3BsYXlOYW1lID0gXCJNYXRlcmlhbEljb25cIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNIGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCB7IEJ0biB9IGZyb20gXCIuL0J1dHRvbnNcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AgfSBmcm9tIFwiLi9JUHJvcHNcIjtcblxuaW50ZXJmYWNlIElNb2RhbFByb3BzIGV4dGVuZHMgSUNoaWxkcmVuUHJvcCB7XG59XG5cbmV4cG9ydCBjb25zdCBNb2RhbDogUmVhY3QuRkM8SU1vZGFsUHJvcHM+ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNLk1vZGFsKHJlZi5jdXJyZW50KTtcbiAgICAgICAgaW5zdGFuY2Uub3BlbigpO1xuICAgICAgICAvLyBSZXR1cm5pbmcgZnVuY3Rpb24gZnJvbSB1c2VFZmZlY3Qgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGVcbiAgICAgICAgLy8gY29tcG9uZW50IGlzIHVubW91bnRlZFxuICAgICAgICByZXR1cm4gKCkgPT4gaW5zdGFuY2U/LmNsb3NlKClcbiAgICB9LCBbcmVmXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHJlZj17IHJlZiB9IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbk1vZGFsLmRpc3BsYXlOYW1lID0gXCJNb2RhbFwiO1xuXG5leHBvcnQgY29uc3QgTW9kYWxDb250ZW50OiBSZWFjdC5GQzxJQ2hpbGRyZW5Qcm9wPiA9ICh7Y2hpbGRyZW59KSA9PiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L3NlY3Rpb24+XG4pXG5Nb2RhbENvbnRlbnQuZGlzcGxheU5hbWUgPSBcIk1vZGFsQ29udGVudFwiO1xuXG5leHBvcnQgY29uc3QgTW9kYWxGb290ZXI6IFJlYWN0LkZDPElDaGlsZHJlblByb3A+ID0gKHtjaGlsZHJlbn0pID0+IChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9zZWN0aW9uPlxuKVxuTW9kYWxGb290ZXIuZGlzcGxheU5hbWUgPSBcIk1vZGFsRm9vdGVyXCI7XG5cbmludGVyZmFjZSBJRGVsZXRlTW9kYWxQcm9wcyB7XG4gICAgaXRlbTogc3RyaW5nO1xuICAgIG9uWWVzQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgb25Ob0NsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRGVsZXRlTW9kYWw6IFJlYWN0LkZDPElEZWxldGVNb2RhbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbD5cbiAgICAgICAgICAgIDxNb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPGg1PkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB7IHByb3BzLml0ZW0gfT88L2g1PlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgYWN0aW9uIGlzIGlycmV2ZXJzaWJsZS48L3A+XG4gICAgICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8QnRuIGNsYXNzZXM9eyBbXCJtb2RhbC1hY3Rpb25cIiwgXCJyZWQtYmdcIl0gfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25ZZXNDbGljayB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBZZXMsIGRlbGV0ZSB0aGlzIHsgcHJvcHMuaXRlbSB9XG4gICAgICAgICAgICAgICAgPC9CdG4+XG4gICAgICAgICAgICAgICAgPEJ0biAgY2xhc3Nlcz17IFtcIm1vZGFsLWFjdGlvblwiLCBcIm1vZGFsLWNsb3NlXCIsIFwiZ3JlZW4tYmdcIl19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5vbk5vQ2xpY2sgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn1cbkRlbGV0ZU1vZGFsLmRpc3BsYXlOYW1lID0gXCJEZWxldGVNb2RhbFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9JbnB1dFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgbnVtYmVyOiBudW1iZXIgfCBudWxsO1xuICAgIG9uQ2hhbmdlOiAobnVtOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgbWF4PzogbnVtYmVyO1xuICAgIG1pbjogbnVtYmVyO1xuICAgIHN0ZXA6IHN0cmluZztcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IE51bWJlcklucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZmxvYXQgPSBwYXJzZUZsb2F0KHZhbCk7XG4gICAgICAgIGNvbnN0IGludCA9IHBhcnNlSW50KHZhbCwgMTApO1xuICAgICAgICAvLyBUaGUgaGlnaGVzdCBsZXZlbCBvZiBwcmVjaXNpb24gd2UgY2FyZSBhYm91dCBpcyAxLzEwMHRocyAoY2VudHMpXG4gICAgICAgIHByb3BzLm9uQ2hhbmdlKGZsb2F0IC0gMC4wMDUgPiBpbnQgPyBmbG9hdCA6IGludCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0IGlucHV0VHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgICAgICBlbmFibGVkPXsgcHJvcHMuZW5hYmxlZCA/PyB0cnVlIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInZhbGlkYXRlXCJcbiAgICAgICAgICAgIHZhbHVlPXsgcHJvcHMubnVtYmVyIHx8IFwiXCIgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZSB9XG4gICAgICAgICAgICBtYXg9eyBwcm9wcy5tYXggfVxuICAgICAgICAgICAgbWluPXsgcHJvcHMubWluIH1cbiAgICAgICAgICAgIHN0ZXA9eyBwcm9wcy5zdGVwIH1cbiAgICAgICAgICAgIHM9eyBwcm9wcy5zIH1cbiAgICAgICAgICAgIG09eyBwcm9wcy5tIH1cbiAgICAgICAgICAgIGw9eyBwcm9wcy5sIH1cbiAgICAgICAgLz5cbiAgICApXG59O1xuTnVtYmVySW5wdXQuZGlzcGxheU5hbWUgPSBcIk51bWJlcklucHV0XCI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFByZWxvYWRlcjogUmVhY3QuRkM8e30+ID0gKF8pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV0ZXJtaW5hdGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblByZWxvYWRlci5kaXNwbGF5TmFtZSA9IFwiUHJlbG9hZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBQcmVsb2FkZXJDaXJjOiBSZWFjdC5GQzx7fT4gPSAoXykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZGVyLXdyYXBwZXIgYWN0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItbGF5ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImdhcC1wYXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuUHJlbG9hZGVyQ2lyYy5kaXNwbGF5TmFtZSA9IFwiUHJlbG9hZGVyQ2lyY1wiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vbGliL0xvZ2dlclwiO1xuaW1wb3J0IHsgSVByb2R1Y2VyIH0gZnJvbSBcIi4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBnZXRQcm9kdWNlcnMsIHRvRGljdCB9IGZyb20gXCIuLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgYXV0b2NvbXBsZXRlIH0gZnJvbSBcIi4uL2xpYi93aWRnZXRzXCI7XG5pbXBvcnQgeyBJT25DaGFuZ2UgfSBmcm9tIFwiLi9JUHJvcHNcIjtcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gXCIuL1RleHRJbnB1dFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSU9uQ2hhbmdlIHtcbiAgICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUHJvZHVjZXJJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9ICh7dmFsdWUsIG9uQ2hhbmdlfSkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoUHJvZHVjZXJJbnB1dC5uYW1lKTtcbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y2VycygpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjZXJzOiBJUHJvZHVjZXJbXSA9IGF3YWl0IGdldFByb2R1Y2Vycyh7fSk7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlKGlucHV0UmVmLCB0b0RpY3QocHJvZHVjZXJzKSwgb25DaGFuZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFwiRmFpbGVkIHRvIGdldCBwcm9kdWNlciBhdXRvY29tcGxldGUgb3B0aW9uc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoUHJvZHVjZXJzKCk7XG4gICAgfSwgW2lucHV0UmVmXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJQcm9kdWNlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgcz17IDYgfSBsPXsgMyB9XG4gICAgICAgICAgICBpbnB1dFJlZj17IGlucHV0UmVmIH1cbiAgICAgICAgICAgIHZhbHVlPXsgdmFsdWUgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZSB9XG4gICAgICAgIC8+XG4gICAgKVxufTtcblByb2R1Y2VySW5wdXQuZGlzcGxheU5hbWUgPSBcIlByb2R1Y2VySW5wdXRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElQdXJjaGFzZUZvcm0sIElTdG9yZSB9IGZyb20gXCIuLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVTdG9yZSwgZ2V0U3RvcmVzLCB0b0RpY3QgfSBmcm9tIFwiLi4vbGliL1Jlc3RBcGlcIjtcbmltcG9ydCB7IGRhdGVUb051bSwgZGVmYXVsdFZpbnRhZ2VZZWFyIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgYXV0b2NvbXBsZXRlIH0gZnJvbSBcIi4uL2xpYi93aWRnZXRzXCI7XG5pbXBvcnQgeyBDaGVja2JveElucHV0IH0gZnJvbSBcIi4vQ2hlY2tib3hJbnB1dFwiO1xuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSBcIi4vRGF0ZUlucHV0XCI7XG5pbXBvcnQgeyBOdW1iZXJJbnB1dCB9IGZyb20gXCIuL051bWJlcklucHV0XCI7XG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tIFwiLi9UZXh0SW5wdXRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUHVyY2hhc2VEYXRhIHtcbiAgICBkYXRlOiBudW1iZXIgfCBudWxsO1xuICAgIHF1YW50aXR5OiBudW1iZXIgfCBudWxsO1xuICAgIHNob3VsZEFkZFRvSW52ZW50b3J5OiBib29sZWFuIHwgbnVsbDtcbiAgICBwcmljZTogbnVtYmVyIHwgbnVsbDtcbiAgICB2aW50YWdlOiBudW1iZXIgfCBudWxsO1xuICAgIHN0b3JlOiBzdHJpbmc7XG4gICAgbWVtbzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdFB1cmNoYXNlSW5wdXREYXRhOiAoKSA9PiBJUHVyY2hhc2VEYXRhID0gKCkgPT4gKHtcbiAgICBkYXRlOiBkYXRlVG9OdW0obmV3IERhdGUoKSksXG4gICAgcXVhbnRpdHk6IDEsXG4gICAgc2hvdWxkQWRkVG9JbnZlbnRvcnk6IHRydWUsXG4gICAgcHJpY2U6IDAuMDAsXG4gICAgdmludGFnZTogZGVmYXVsdFZpbnRhZ2VZZWFyKCksXG4gICAgc3RvcmU6IFwiXCIsXG4gICAgbWVtbzogXCJcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgcHVyY2hhc2VEYXRhVG9Gb3JtID0gYXN5bmMgKGRhdGE6IElQdXJjaGFzZURhdGEsIHdpbmVJZDogbnVtYmVyKTogUHJvbWlzZTxJUHVyY2hhc2VGb3JtPiA9PiB7XG4gICAgbGV0IHN0b3JlID0gbnVsbDtcbiAgICBpZiAoZGF0YS5zdG9yZSkge1xuICAgICAgICBzdG9yZSA9IGF3YWl0IGdldE9yQ3JlYXRlU3RvcmUoe25hbWU6IGRhdGEuc3RvcmV9LCB7bmFtZTogZGF0YS5zdG9yZX0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXG4gICAgICAgIHdpbmVJZCxcbiAgICAgICAgcXVhbnRpdHk6IGRhdGEucXVhbnRpdHksXG4gICAgICAgIHN0b3JlSWQ6IHN0b3JlPy5pZCA/PyBudWxsLFxuICAgICAgICBwcmljZTogZGF0YS5wcmljZSxcbiAgICAgICAgdmludGFnZTogZGF0YS52aW50YWdlLFxuICAgICAgICBtZW1vOiBkYXRhLm1lbW9cbiAgICB9O1xufVxuXG50eXBlIEFjdGlvbiA9XG4gICAgfCB7IHR5cGU6IFwic2V0RGF0ZVwiLCBkYXRlOiBudW1iZXIgfVxuICAgIHwgeyB0eXBlOiBcInNldFF1YW50aXR5XCIsIHF1YW50aXR5OiBudW1iZXIgfVxuICAgIHwgeyB0eXBlOiBcInNldFNob3VsZEFkZFRvSW52ZW50b3J5XCIsIHNob3VsZEFkZFRvSW52ZW50b3J5OiBib29sZWFuIH1cbiAgICB8IHsgdHlwZTogXCJzZXRQcmljZVwiLCBwcmljZTogbnVtYmVyIH1cbiAgICB8IHsgdHlwZTogXCJzZXRWaW50YWdlXCIsIHZpbnRhZ2U6IG51bWJlciB9XG4gICAgfCB7IHR5cGU6IFwic2V0U3RvcmVcIiwgc3RvcmU6IHN0cmluZyB9XG4gICAgfCB7IHR5cGU6IFwic2V0TWVtb1wiLCBtZW1vOiBzdHJpbmcgfTtcblxuZXhwb3J0IGNvbnN0IHB1cmNoYXNlSW5wdXRSZWR1Y2VyOiBSZWFjdC5SZWR1Y2VyPElQdXJjaGFzZURhdGEsIEFjdGlvbj4gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInNldERhdGVcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRlOiBhY3Rpb24uZGF0ZSB9O1xuICAgICAgICBjYXNlIFwic2V0UXVhbnRpdHlcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBxdWFudGl0eTogYWN0aW9uLnF1YW50aXR5IH07XG4gICAgICAgIGNhc2UgXCJzZXRTaG91bGRBZGRUb0ludmVudG9yeVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNob3VsZEFkZFRvSW52ZW50b3J5OiBhY3Rpb24uc2hvdWxkQWRkVG9JbnZlbnRvcnkgfTtcbiAgICAgICAgY2FzZSBcInNldFByaWNlXCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJpY2U6IGFjdGlvbi5wcmljZSB9O1xuICAgICAgICBjYXNlIFwic2V0VmludGFnZVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZpbnRhZ2U6IGFjdGlvbi52aW50YWdlIH07XG4gICAgICAgIGNhc2UgXCJzZXRTdG9yZVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN0b3JlOiBhY3Rpb24uc3RvcmUgfTtcbiAgICAgICAgY2FzZSBcInNldE1lbW9cIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtZW1vOiBhY3Rpb24ubWVtbyB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgZGlzcGxheUludmVudG9yeUJ0bjogYm9vbGVhbjtcbiAgICBkYXRhOiBJUHVyY2hhc2VEYXRhO1xuICAgIGRpc3BhdGNoOiBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+O1xufVxuXG5leHBvcnQgY29uc3QgUHVyY2hhc2VJbnB1dHM6IFJlYWN0LkZDPElQcm9wcz4gPSAoe2Rpc3BsYXlJbnZlbnRvcnlCdG4sIGRhdGEsIGRpc3BhdGNofSkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoUHVyY2hhc2VJbnB1dHMubmFtZSk7XG4gICAgY29uc3Qgc3RvcmVJbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG5cbiAgICBjb25zdCBvblN0b3JlQ2hhbmdlOiAoc3RvcmU6IHN0cmluZykgPT4gdm9pZCA9IChzdG9yZSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJzZXRTdG9yZVwiLCBzdG9yZX0pO1xuICAgIH1cblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoU3RvcmVzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yZXM6IElTdG9yZVtdID0gYXdhaXQgZ2V0U3RvcmVzKHt9KTtcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGUoc3RvcmVJbnB1dFJlZiwgdG9EaWN0KHN0b3JlcyksIG9uU3RvcmVDaGFuZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihcIkZhaWxlZCB0byBnZXQgc3RvcmUgYXV0b2NvbXBsZXRlIG9wdGlvbnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaFN0b3JlcygpO1xuICAgIH0sIFtzdG9yZUlucHV0UmVmXSk7XG5cbiAgICBjb25zdCBbcXVhbnRpdHlTLCBxdWFudGl0eUxdID0gZGlzcGxheUludmVudG9yeUJ0biA/IFszLCAyXSA6IFs2LCAzXTtcbiAgICBjb25zdCBpbnZlbnRvcnkgPSBkaXNwbGF5SW52ZW50b3J5QnRuXG4gICAgICAgID8gPENoZWNrYm94SW5wdXQgdGV4dD1cIkFkZCB0byBJbnZlbnRvcnlcIiBlbmFibGVkXG4gICAgICAgICAgICBuYW1lPVwiYWRkLXRvLWludmVudG9yeVwiXG4gICAgICAgICAgICBpc0NoZWNrZWQ9eyBkYXRhLnNob3VsZEFkZFRvSW52ZW50b3J5ISB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgKGNoZWNrZWQpID0+IGRpc3BhdGNoKHt0eXBlOiBcInNldFNob3VsZEFkZFRvSW52ZW50b3J5XCIsIHNob3VsZEFkZFRvSW52ZW50b3J5OiBjaGVja2VkfSkgfVxuICAgICAgICAgICAgcz17IDMgfSBsPXsgMSB9XG4gICAgICAgIC8+XG4gICAgICAgIDogbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPERhdGVJbnB1dCBuYW1lPVwiUHVyY2hhc2UgRGF0ZVwiXG4gICAgICAgICAgICAgICAgZGF0ZT17IGRhdGEuZGF0ZSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZGF0ZSkgPT4gZGlzcGF0Y2goe3R5cGU6IFwic2V0RGF0ZVwiLCBkYXRlOiBkYXRlfSkgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxOdW1iZXJJbnB1dCBuYW1lPVwiUXVhbnRpdHlcIlxuICAgICAgICAgICAgICAgIG51bWJlcj17IGRhdGEucXVhbnRpdHkgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHF1YW50aXR5KSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRRdWFudGl0eVwiLCBxdWFudGl0eX0pIH1cbiAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgcz17IHF1YW50aXR5UyB9IGw9eyBxdWFudGl0eUwgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsgaW52ZW50b3J5IH1cbiAgICAgICAgICAgIDxOdW1iZXJJbnB1dCBuYW1lPVwiUHJpY2VcIlxuICAgICAgICAgICAgICAgIG51bWJlcj17IGRhdGEucHJpY2UgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHByaWNlKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRQcmljZVwiLCBwcmljZX0pIH1cbiAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICAgICAgcz17IDYgfSBsPXsgMyB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPE51bWJlcklucHV0IG5hbWU9XCJWaW50YWdlXCJcbiAgICAgICAgICAgICAgICBudW1iZXI9eyBkYXRhLnZpbnRhZ2UgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZpbnRhZ2UpID0+IGRpc3BhdGNoKHt0eXBlOiBcInNldFZpbnRhZ2VcIiwgdmludGFnZX0pIH1cbiAgICAgICAgICAgICAgICBtaW49eyAxOTAwIH1cbiAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgbWF4PXsgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIH1cbiAgICAgICAgICAgICAgICBzPXsgNiB9IGw9eyAzIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJTdG9yZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGRhdGEuc3RvcmUgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25TdG9yZUNoYW5nZSB9XG4gICAgICAgICAgICAgICAgcz17IDYgfSBsPXsgMyB9XG4gICAgICAgICAgICAgICAgaW5wdXRSZWY9eyBzdG9yZUlucHV0UmVmIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJNZW1vXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgZGF0YS5tZW1vIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChtZW1vKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRNZW1vXCIsIG1lbW99KSB9XG4gICAgICAgICAgICAgICAgcz17IDYgfSBsPXsgMyB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApO1xuXG59XG5QdXJjaGFzZUlucHV0cy5kaXNwbGF5TmFtZSA9IFwiUHVyY2hhc2VJbnB1dHNcIjtcbiIsImltcG9ydCB7IFJhbmdlIH0gZnJvbSBcIm1hdGVyaWFsaXplLWNzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hlY2tib3hJbnB1dCB9IGZyb20gXCIuL0NoZWNrYm94SW5wdXRcIjtcbmltcG9ydCB7IENvbCB9IGZyb20gXCIuL0dyaWRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgaXNDaGVja2VkOiBib29sZWFuO1xuICAgIG9uSXNDaGVja2VkQ2hhbmdlOiAoaXNDaGVja2VkOiBib29sZWFuKSA9PiB2b2lkO1xuICAgIHJhdGluZzogbnVtYmVyO1xuICAgIG9uUmF0aW5nQ2hhbmdlOiAocmF0aW5nOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBSYXRpbmdJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9ICh7aXNDaGVja2VkLCBvbklzQ2hlY2tlZENoYW5nZSwgcmF0aW5nLCBvblJhdGluZ0NoYW5nZX0pICA9PiB7XG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIG5ldyBSYW5nZShyZWYuY3VycmVudClcbiAgICB9LCBbcmVmXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29sIHM9eyA0IH0gbD17IDIgfSBjbGFzc2VzPXsgW1wicmFuZ2UtZmllbGRcIiBdIH0+XG4gICAgICAgICAgICA8Q2hlY2tib3hJbnB1dCBuYW1lPVwiaGFzLXJhdGluZ1wiXG4gICAgICAgICAgICAgICAgdGV4dD1cIlJhdGluZ1wiXG4gICAgICAgICAgICAgICAgaXNDaGVja2VkPXsgaXNDaGVja2VkIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgb25Jc0NoZWNrZWRDaGFuZ2UgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmF0aW5nXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJhbmdlLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG5hbWU9XCJyYXRpbmdcIlxuICAgICAgICAgICAgICAgICAgICByZWY9eyByZWYgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH0gbWF4PXsgMTAgfSBzdGVwPXsgMSB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcmF0aW5nIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyAhaXNDaGVja2VkIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gb25SYXRpbmdDaGFuZ2UocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSkgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvQ29sPlxuICAgICk7XG59XG5SYXRpbmdJbnB1dC5kaXNwbGF5TmFtZSA9IFwiUmF0aW5nSW5wdXRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElSZWdpb24gfSBmcm9tIFwiLi4vbGliL1Jlc3RcIjtcbmltcG9ydCB7IEVtcHR5UmVzdWx0RXJyb3IsIGdldFJlZ2lvbnMsIHRvRGljdCB9IGZyb20gXCIuLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgSURpY3QgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBhdXRvY29tcGxldGUgfSBmcm9tIFwiLi4vbGliL3dpZGdldHNcIjtcbmltcG9ydCB7IElPbkNoYW5nZSB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSBcIi4vVGV4dElucHV0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJT25DaGFuZ2Uge1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgcHJvZHVjZXJUZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUmVnaW9uSW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAoe3ZhbHVlLCBwcm9kdWNlclRleHQsIG9uQ2hhbmdlfSkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoUmVnaW9uSW5wdXQubmFtZSk7XG5cbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG5cbiAgICAvLyBHZXQgYXV0b2NvbXBsZXRlIG9wdGlvbnNcbiAgICBjb25zdCBbYXV0b2NvbXBsZXRlT3B0aW9ucywgc2V0QXV0b2NvbXBsZXRlT3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZTxJRGljdDxzdHJpbmcgfCBudWxsPj4oe30pO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQXV0b2NvbXBsZXRlT3B0aW9ucygpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnaW9uczogSVJlZ2lvbltdID0gYXdhaXQgZ2V0UmVnaW9ucyh7fSk7XG4gICAgICAgICAgICAgICAgc2V0QXV0b2NvbXBsZXRlT3B0aW9ucyh0b0RpY3QocmVnaW9ucykpO1xuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZShpbnB1dFJlZiwgYXV0b2NvbXBsZXRlT3B0aW9ucywgb25DaGFuZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFwiRmFpbGVkIHRvIGdldCByZWdpb24gYXV0b2NvbXBsZXRlIG9wdGlvbnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hBdXRvY29tcGxldGVPcHRpb25zKCk7XG4gICAgfSwgW2lucHV0UmVmLCBzZXRBdXRvY29tcGxldGVPcHRpb25zXSk7XG5cbiAgICBjb25zdCBbZW5hYmxlZCwgc2V0RW5hYmxlZF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICAgIC8vIFRyeSB0byBnZXQgcmVnaW9uIGZyb20gcHJvZHVjZXIgaW5wdXQuIElmIGZvdW5kLCBsb2NrIGFuZCBzZXQgdmFsdWVcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y2VyUmVnaW9uKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nSW5mbyhcIlVwZGF0aW5nIHJlZ2lvbiBhdXRvY29tcGxldGUgb3B0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdpb25zID0gYXdhaXQgZ2V0UmVnaW9ucyh7cHJvZHVjZXJOYW1lOiBwcm9kdWNlclRleHR9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVnaW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UocmVnaW9uc1swXS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RW5hYmxlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RW5hYmxlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIGVtcHR5IHJlc3VsdCBlcnJvcnNcbiAgICAgICAgICAgICAgICBpZiAoIUVtcHR5UmVzdWx0RXJyb3IuaXNJbnN0YW5jZShlKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nV2FybmluZyhgRXJyb3IgZmV0Y2hpbmcgcmVnaW9ucyBiYXNlZCBvbiBwcm9kdWNlci4gJHtlfWApO1xuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvZHVjZXJUZXh0KSB7XG4gICAgICAgICAgICBmZXRjaFByb2R1Y2VyUmVnaW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFbmFibGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb2R1Y2VyVGV4dCwgc2V0RW5hYmxlZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHRJbnB1dCBuYW1lPVwiUmVnaW9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICBzPXsgNiB9IGw9eyAzIH1cbiAgICAgICAgICAgIGVuYWJsZWQ9eyBlbmFibGVkIH1cbiAgICAgICAgICAgIHZhbHVlPXsgdmFsdWUgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblJlZ2lvbklucHV0LmRpc3BsYXlOYW1lID0gXCJSZWdpb25JbnB1dFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBuYW1lVG9JZCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi9HcmlkXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBvcHRpb25zOiBzdHJpbmdbXTtcbiAgICBzZWxlY3Rpb246IHN0cmluZztcbiAgICBzZWxlY3RUZXh0Pzogc3RyaW5nO1xuICAgIHNlbGVjdFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxTZWxlY3RFbGVtZW50PjtcbiAgICBvbkNoYW5nZTogKHZhbDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgU2VsZWN0SW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBpZCA9IG5hbWVUb0lkKHByb3BzLm5hbWUpO1xuICAgIGxldCBzZWxlY3RUZXh0OiBKU1guRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBpZiAocHJvcHMuc2VsZWN0VGV4dCkge1xuICAgICAgICBzZWxlY3RUZXh0ID0gPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPlxuICAgICAgICAgICAgeyBwcm9wcy5zZWxlY3RUZXh0IH1cbiAgICAgICAgPC9vcHRpb24+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRGaWVsZCBzPXsgcHJvcHMucyB9IG09eyBwcm9wcy5tIH0gbD17IHByb3BzLmwgfT5cbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9eyBpZCB9XG4gICAgICAgICAgICAgICAgbmFtZT17IGlkIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSkgfVxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcHJvcHMuc2VsZWN0aW9uIHx8IHByb3BzLnNlbGVjdFRleHQgfVxuICAgICAgICAgICAgICAgIHJlZj17IHByb3BzLnNlbGVjdFJlZiB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyBzZWxlY3RUZXh0IH1cbiAgICAgICAgICAgICAgICB7IHByb3BzLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyBvcHRpb24gfSBrZXk9eyBvcHRpb24gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhcGl0YWxpemVGaXJzdExldHRlcihvcHRpb24pIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17IGlkIH0+eyBwcm9wcy5uYW1lIH08L2xhYmVsPlxuICAgICAgICA8L0lucHV0RmllbGQ+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGbG9hdGluZ0J0biB9IGZyb20gXCIuL0J1dHRvbnNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgb25DbGljazogKGNoYXI6IHN0cmluZykgPT4gdm9pZDtcbiAgICBjaGFyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTcGVjaWFsQ2hhckJ0bjogUmVhY3QuRkM8SVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXCJidG4tc21hbGxcIiwgXCJjZW50ZXJcIiwgXCJzcGVjLWNoYXItYnRuXCJdO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGbG9hdGluZ0J0biBjbGFzc2VzPXsgY2xhc3NlcyB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gbnVsbCB9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17ICgpID0+IHByb3BzLm9uQ2xpY2socHJvcHMuY2hhcikgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoYXIgfVxuICAgICAgICA8L0Zsb2F0aW5nQnRuPlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmxvYXRpbmdCdG4gfSBmcm9tIFwiLi9CdXR0b25zXCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi9HcmlkXCI7XG5pbXBvcnQgeyBTcGVjaWFsQ2hhckJ0biB9IGZyb20gXCIuL1NwZWNpYWxDaGFyQnRuXCI7XG5cbmVudW0gQ2FzZSB7XG4gICAgVXBwZXIsXG4gICAgTG93ZXIsXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG9uQ2xpY2s6IChjaGFyOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgY2xhc3Nlcz86IHN0cmluZ1tdO1xuICAgIGRpc3BsYXk6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIGNoYXJzOiBzdHJpbmdbXTtcbiAgICBjdXJyZW50Q2FzZTogQ2FzZTtcbn1cblxuZXhwb3J0IGNsYXNzIFNwZWNpYWxDaGFycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zZXJ0Q2hhckF0KHZhbDogc3RyaW5nLCBjaGFyOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGlzTmFOKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbCArIGNoYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbC5zdWJzdHIoMCwgcG9zaXRpb24pICsgY2hhciArIHZhbC5zdWJzdHIocG9zaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhcnM6IFtcbiAgICAgICAgICAgICAgICBcIsOgXCIsIFwiw6FcIiwgXCLDolwiLCBcIsOjXCIsIFwiw6ZcIiwgXCLEjVwiLCBcIsOnXCIsIFwiw6hcIiwgXCLDqVwiLCBcIsOqXCIsIFwiw6tcIiwgXCLDrVwiLCBcIsOuXCIsXG4gICAgICAgICAgICAgICAgXCLDr1wiLCBcIsOxXCIsIFwiw7NcIiwgXCLDtFwiLCBcIsO1XCIsIFwixZNcIiwgXCLFoVwiLCBcIsO5XCIsIFwiw7pcIiwgXCLDu1wiLCBcIsO8XCIsIFwixb5cIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjdXJyZW50Q2FzZTogQ2FzZS5Mb3dlcixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gW1wic3BlY2lhbC1jaGFyc1wiXTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzcGxheSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzZXM9eyBjbGFzc2VzLmNvbmNhdCh0aGlzLnByb3BzLmNsYXNzZXMgPz8gW10pIH0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBTaGlmdCBidXR0b24gKi99XG4gICAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ0J0biBjbGFzc2VzPXsgW1wiY2VudGVyXCIsIFwiZ3JlZW4tYmdcIiwgXCJzaGlmdC1idG5cIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyB0aGlzLmhhbmRsZVNoaWZ0LmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuY3VycmVudENhc2UgPT09IENhc2UuTG93ZXIgPyBcIuKGkVwiIDogXCLihpNcIiB9XG4gICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5jaGFycy5tYXAoKGNoYXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNpYWxDaGFyQnRuIGNoYXI9eyBjaGFyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgY2hhciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoYykgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKGMpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSkgfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlU2hpZnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuY3VycmVudENhc2UgPT09IENhc2UuTG93ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjaGFyczogc3RhdGUuY2hhcnMubWFwKChjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FzZTogQ2FzZS5VcHBlcixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjaGFyczogc3RhdGUuY2hhcnMubWFwKChjaGFyKSA9PiBjaGFyLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRDYXNlOiBDYXNlLkxvd2VyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AgfSBmcm9tIFwiLi9JUHJvcHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sdW1uSGVhZGVyIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaXNOdW1Db2w/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgV2luZVRhYmxlTnVtQ29sczogSUNvbHVtbkhlYWRlcltdID0gW1xuICAgIHsgbmFtZTogXCJUb3RhbCBRdWFudGl0eVwiLCBpc051bUNvbDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogXCJBdmcgUHJpY2VcIiwgaXNOdW1Db2w6IHRydWUgfSxcbiAgICB7IG5hbWU6IFwiUmF0aW5nXCIsIGlzTnVtQ29sOiB0cnVlIH0sXG5dXG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJQ2hpbGRyZW5Qcm9wIHtcbiAgICBjb2x1bW5zOiAoc3RyaW5nIHwgSUNvbHVtbkhlYWRlcilbXTtcbiAgICBjb25kZW5zZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgVGFibGU6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjb25kZW5zZWQgPSBwcm9wcy5jb25kZW5zZWQgPz8gdHJ1ZTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXsgYGhpZ2hsaWdodCByZXNwb25zaXZlICR7Y29uZGVuc2VkID8gXCJjb25kZW5zZWRcIiA6IFwiXCJ9YCB9PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5jb2x1bW5zLm1hcCgoY29sKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGgga2V5PXsgY29sIH0+eyBjb2wgfTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9eyBjb2wubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGNvbC5pc051bUNvbCA/IFwibnVtLWNvbFwiIDogXCJcIiB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNvbC5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICk7XG59O1xuVGFibGUuZGlzcGxheU5hbWUgPSBcIlRhYmxlXCI7XG4iLCJpbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9lc20vZm9ybWF0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsIEVOX0RBU0gsIGdldE5hbWVBbmRUeXBlLCBudW1Ub0RhdGUgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5cbmludGVyZmFjZSBJVGV4dENlbGxQcm9wcyB7XG4gICAgZGVmYXVsdD86IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dENlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRleHRDZWxsUHJvcHM+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZGVmYXVsdDogXCJcIixcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPHRkPnsgdGhpcy5wcm9wcy50ZXh0ID8/IHRoaXMucHJvcHMuZGVmYXVsdCB9PC90ZD47XG4gICAgfVxufTtcblxuaW50ZXJmYWNlIElOdW1DZWxsUHJvcHMge1xuICAgIG51bTogbnVtYmVyIHwgbnVsbDtcbiAgICBtaW5EZWNpbWFscz86IG51bWJlcjtcbiAgICBtYXhEZWNpbWFscz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IE51bUNlbGw6IFJlYWN0LkZDPElOdW1DZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgbnVtID0gcHJvcHMubnVtXG4gICAgICAgIC8vIHVuZGVmaW5lZCB0byB1c2UgYnJvd3NlcidzIGxvY2FsZVxuICAgICAgICA/IHByb3BzLm51bS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByb3BzLm1pbkRlY2ltYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcm9wcy5tYXhEZWNpbWFsc30pXG4gICAgICAgIDogRU5fREFTSDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwibnVtLWNvbFwiPnsgbnVtIH08L3RkPlxuICAgICk7XG59O1xuTnVtQ2VsbC5kaXNwbGF5TmFtZSA9IFwiTnVtQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSVByaWNlQ2VsbFByb3BzIHtcbiAgICBwcmljZTogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IFByaWNlQ2VsbDogUmVhY3QuRkM8SVByaWNlQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxOdW1DZWxsIG51bT17IHByb3BzLnByaWNlIH1cbiAgICAgICAgICAgIG1pbkRlY2ltYWxzPXsgMiB9XG4gICAgICAgICAgICBtYXhEZWNpbWFscz17IDIgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5QcmljZUNlbGwuZGlzcGxheU5hbWUgPSBcIlByaWNlQ2VsbFwiO1xuXG5leHBvcnQgY29uc3QgWWVhckNlbGw6IFJlYWN0LkZDPHt5ZWFyOiBudW1iZXIgfCBudWxsfT4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB5ZWFyID0gcHJvcHMueWVhcj8udG9TdHJpbmcoKSA/PyBcIk5WXCI7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm51bS1jb2xcIj5cbiAgICAgICAgICAgIHsgeWVhciB9XG4gICAgICAgIDwvdGQ+XG4gICAgKTtcbn1cblllYXJDZWxsLmRpc3BsYXlOYW1lID0gXCJZZWFyQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSURhdGVDZWxsUHJvcHMge1xuICAgIGRhdGU6IG51bWJlciB8IG51bGw7XG4gICAgZm9ybWF0Pzogc3RyaW5nO1xufVxuZXhwb3J0IGNvbnN0IERhdGVDZWxsOiBSZWFjdC5GQzxJRGF0ZUNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBkYXRlU3RyID0gcHJvcHMuZGF0ZSA/IGZvcm1hdChudW1Ub0RhdGUocHJvcHMuZGF0ZSksIHByb3BzLmZvcm1hdCA/PyBcIk1NTSBkZCwgeXl5eVwiKSA6IEVOX0RBU0g7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkPnsgZGF0ZVN0ciB9PC90ZD5cbiAgICApO1xufVxuRGF0ZUNlbGwuZGlzcGxheU5hbWUgPSBcIkRhdGVDZWxsXCI7XG5cbmludGVyZmFjZSBJQ29sb3JDZWxsUHJvcHMge1xuICAgIGNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBDb2xvckNlbGw6IFJlYWN0LkZDPElDb2xvckNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBpZiAocHJvcHMuY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIDx0ZD57IGNhcGl0YWxpemVGaXJzdExldHRlcihwcm9wcy5jb2xvcikgfTwvdGQ+O1xuICAgIH1cbiAgICByZXR1cm4gPHRkIC8+O1xufTtcbkNvbG9yQ2VsbC5kaXNwbGF5TmFtZSA9IFwiQ29sb3JDZWxsXCI7XG5cbmludGVyZmFjZSBJTGlua2VkQ2VsbFByb3BzIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG1vZGVsOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBMaW5rZWRDZWxsOiBSZWFjdC5GQzxJTGlua2VkQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHVybCA9IGAvJHtwcm9wcy5tb2RlbH0vJHtwcm9wcy5pZH1gO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxhIGhyZWY9eyB1cmwgfT5cbiAgICAgICAgICAgICAgICB7IHByb3BzLm5hbWUgfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgIClcbn1cbkxpbmtlZENlbGwuZGlzcGxheU5hbWUgPSBcIkxpbmtlZENlbGxcIlxuXG5pbnRlcmZhY2UgSU5hbWVBbmRUeXBlUHJvcHMge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICB3aW5lVHlwZTogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE5hbWVBbmRUeXBlQ2VsbDogUmVhY3QuRkM8SU5hbWVBbmRUeXBlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKHByb3BzLnVybCkge1xuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YSBocmVmPXsgcHJvcHMudXJsIH0+XG4gICAgICAgICAgICAgICAgeyBnZXROYW1lQW5kVHlwZShwcm9wcy5uYW1lLCBwcm9wcy53aW5lVHlwZSkgfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwid2luZXNcIlxuICAgICAgICAgICAgbmFtZT17IGdldE5hbWVBbmRUeXBlKHByb3BzLm5hbWUsIHByb3BzLndpbmVUeXBlKSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5OYW1lQW5kVHlwZUNlbGwuZGlzcGxheU5hbWUgPSBcIk5hbWVBbmRUeXBlQ2VsbFwiO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjZXJDZWxsOiBSZWFjdC5GQzx7aWQ6IG51bWJlciwgbmFtZTogc3RyaW5nfT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwicHJvZHVjZXJzXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUHJvZHVjZXJDZWxsLmRpc3BsYXlOYW1lID0gXCJQcm9kdWNlckNlbGxcIlxuXG5leHBvcnQgY29uc3QgUmVnaW9uQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cInJlZ2lvbnNcIlxuICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5SZWdpb25DZWxsLmRpc3BsYXlOYW1lID0gXCJSZWdpb25DZWxsXCJcblxuZXhwb3J0IGNvbnN0IFZpdGlBcmVhQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIgfCBudWxsLCBuYW1lOiBzdHJpbmcgfCBudWxsfT4gPSAocHJvcHMpID0+IHtcbiAgICBpZiAoIXByb3BzLmlkIHx8ICFwcm9wcy5uYW1lKSB7XG4gICAgICAgIHJldHVybiA8dGQgLz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJ2aXRpLWFyZWFzXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuVml0aUFyZWFDZWxsLmRpc3BsYXlOYW1lID0gXCJWaXRpQXJlYUNlbGxcIlxuXG5leHBvcnQgY29uc3QgV2luZVR5cGVDZWxsOiBSZWFjdC5GQzx7aWQ6IG51bWJlciwgbmFtZTogc3RyaW5nfT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwid2luZS10eXBlc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cbldpbmVUeXBlQ2VsbC5kaXNwbGF5TmFtZSA9IFwiV2luZVR5cGVDZWxsXCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyB1c2VDb2xvcnNTZWxlY3QgfSBmcm9tIFwiLi9Db2xvcklucHV0XCI7XG5pbXBvcnQgeyBNYXRlcmlhbEljb24gfSBmcm9tIFwiLi9NYXRlcmlhbEljb25cIjtcbmltcG9ydCB7IFNlbGVjdElucHV0IH0gZnJvbSBcIi4vU2VsZWN0SW5wdXRcIjtcblxuZXhwb3J0IGVudW0gU29ydGluZ1N0YXRlIHtcbiAgICBOb3RTb3J0ZWQsXG4gICAgQXNjZW5kaW5nLFxuICAgIERlc2NlbmRpbmcsXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgICBzb3J0aW5nU3RhdGU6IFNvcnRpbmdTdGF0ZTtcbiAgICBpc051bUNvbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcz4ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpc051bUNvbDogZmFsc2UsXG4gICAgfTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17ICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCBcIlwiKSArIGAke3RoaXMucHJvcHMuaXNOdW1Db2wgPyBcIiBudW0tY29sXCIgOiBcIlwiIH1gIH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNvbnRlbnQoKSB9XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IChcbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLnByb3BzLm9uQ2xpY2sgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXNOdW1Db2xcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJJY29uKCkgfVxuICAgICAgICAgICAgICAgICAgICB7IHRleHQgfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICB7IHRleHQgfVxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVySWNvbigpIH1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckljb24oKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5zb3J0aW5nU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1N0YXRlLkFzY2VuZGluZzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImFycm93X2Ryb3BfdXBcIiAvPjtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1N0YXRlLkRlc2NlbmRpbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJhcnJvd19kcm9wX2Rvd25cIiAvPjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJhcnJvd19kcm9wX2Rvd25cIiBjbGFzc05hbWU9XCJpbnZpc2libGVcIiAvPjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW50ZXJmYWNlIElGaWx0ZXJQcm9wcyB7XG4gICAgb25DaGFuZ2U6ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcbiAgICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJIZWFkZXI6IFJlYWN0LkZDPElGaWx0ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gcHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17IHByb3BzLnRleHQgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICApO1xufVxuRmlsdGVySGVhZGVyLmRpc3BsYXlOYW1lID0gXCJGaWx0ZXJIZWFkZXJcIjtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdEZpbHRlckhlYWRlcjogUmVhY3QuRkM8SUZpbHRlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGV4dHJhQ2hvaWNlID0gXCJBbnlcIjtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKFNlbGVjdEZpbHRlckhlYWRlci5uYW1lKTtcblxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKHNlbGVjdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT09IGV4dHJhQ2hvaWNlKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKHNlbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHByb3BzLnRleHQgPT09IFwiXCIgPyBleHRyYUNob2ljZSA6IHByb3BzLnRleHQ7XG5cbiAgICBjb25zdCBbc2VsZWN0aW9uT3B0aW9ucywgc2VsZWN0UmVmXSA9IHVzZUNvbG9yc1NlbGVjdChsb2dnZXIsIGV4dHJhQ2hvaWNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxTZWxlY3RJbnB1dCBuYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RSZWY9eyBzZWxlY3RSZWYgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBzZWxlY3Rpb25PcHRpb25zIH1cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb249eyBzZWxlY3Rpb24gfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICApO1xufVxuU2VsZWN0RmlsdGVySGVhZGVyLmRpc3BsYXlOYW1lID0gU2VsZWN0RmlsdGVySGVhZGVyLm5hbWU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQ2hpbGRyZW5Qcm9wIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBUYWJzIGFzIE1UYWJzIH0gZnJvbSBcIm1hdGVyaWFsaXplLWNzc1wiXG5cbmV4cG9ydCBlbnVtIFRhYkNvbG9yIHtcbiAgICBHcmVlbiA9IFwid2luZS1ncmVlbi10YWJcIixcbiAgICBSZWQgPSBcIndpbmUtcmVkLXRhYlwiLFxufVxuXG5leHBvcnQgY29uc3QgVGFiczogUmVhY3QuRkM8SUNoaWxkcmVuUHJvcD4gPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IHRhYnNSZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxVTGlzdEVsZW1lbnQ+O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IF8gPSBuZXcgTVRhYnModGFic1JlZi5jdXJyZW50KTtcbiAgICB9LCBbdGFic1JlZl0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YWJzIHRhYnMtZml4ZWQtd2lkdGggbmFycm93LXRhYnMgei1kZXB0aC0xXCIgcmVmPXsgdGFic1JlZiB9PlxuICAgICAgICAgICAgeyAuLi5jaGlsZHJlbiB9XG4gICAgICAgIDwvdWw+XG4gICAgKTtcbn1cblRhYnMuZGlzcGxheU5hbWUgPSBcIlRhYnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4RmFjdG9yeShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKGlkeDogbnVtYmVyKSA9PiBgJHtuYW1lfS0ke2lkeH1gO1xufVxuXG5pbnRlcmZhY2UgSVRhYlByb3BzIGV4dGVuZHMgSUNoaWxkcmVuUHJvcCB7XG4gICAgdGFyZ2V0OiBzdHJpbmc7XG4gICAgY29sb3I6IFRhYkNvbG9yLFxufVxuXG5leHBvcnQgY29uc3QgVGFiOiBSZWFjdC5GQzxJVGFiUHJvcHM+ID0gKHtjaGlsZHJlbiwgY29sb3IsIHRhcmdldH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXsgYHRhYiAke2NvbG9yLnZhbHVlT2YoKX1gIH0+XG4gICAgICAgICAgICA8YSBocmVmPXsgYCMke3RhcmdldH1gIH0+XG4gICAgICAgICAgICAgICAgeyAuLi5jaGlsZHJlbiB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgKTtcbn1cblRhYi5kaXNwbGF5TmFtZSA9IFwiVGFiXCI7XG5cbmludGVyZmFjZSBJVGFiUGFuZWxQcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3Age1xuICAgIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBUYWJQYW5lbDogUmVhY3QuRkM8SVRhYlBhbmVsUHJvcHM+ID0gKHtjaGlsZHJlbiwgaWR9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD17IGlkIH0+XG4gICAgICAgICAgICB7IC4uLmNoaWxkcmVuIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblRhYlBhbmVsLmRpc3BsYXlOYW1lID0gXCJUYWJQYW5lbFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9JbnB1dFwiO1xuaW1wb3J0IHsgU3BlY2lhbENoYXJzIH0gZnJvbSBcIi4vU3BlY2lhbENoYXJzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Gb2N1cz86ICgpID0+IHZvaWQ7XG4gICAgb25CbHVyPzogKCkgPT4gdm9pZDtcbiAgICBjbGFzc05hbWU6IHN0cmluZztcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbiAgICBpbnB1dFJlZj86IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG59XG5cbmV4cG9ydCBjb25zdCBUZXh0SW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbdGltZXN0YW1wLCBfXSA9IFJlYWN0LnVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGlucHV0UmVmID0gcHJvcHMuaW5wdXRSZWYgPz8gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcblxuICAgIGNvbnN0IG9uU3BlY2lhbENoYXJDbGljayA9IChjaGFyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaW5wdXRSZWYuY3VycmVudD8uc2VsZWN0aW9uU3RhcnQgPz8gTmFOO1xuICAgICAgICBwcm9wcy5vbkNoYW5nZShTcGVjaWFsQ2hhcnMuaW5zZXJ0Q2hhckF0KHByb3BzLnZhbHVlLCBjaGFyLCBwb3NpdGlvbikpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5wdXRSZWYuY3VycmVudC5zZXRTZWxlY3Rpb25SYW5nZShwb3NpdGlvbiArIDEsIHBvc2l0aW9uICsgMSksIDEwKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChub3cgLSB0aW1lc3RhbXAgPiAxMDApIHtcbiAgICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9wcy5vbkJsdXI/LigpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UodmFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkZvY3VzID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICAgICAgcHJvcHMub25Gb2N1cz8uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxJbnB1dCBpbnB1dFR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwcm9wcy52YWx1ZSB9XG4gICAgICAgICAgICAgICAgZW5hYmxlZD17IHByb3BzLmVuYWJsZWQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbCkgPT4gb25DaGFuZ2UodmFsKSB9XG4gICAgICAgICAgICAgICAgb25CbHVyPXsgb25CbHVyIH1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsgb25Gb2N1cyB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgcHJvcHMuY2xhc3NOYW1lIH1cbiAgICAgICAgICAgICAgICBzPXsgcHJvcHMucyB9IG09eyBwcm9wcy5tIH0gbD17IHByb3BzLmwgfVxuICAgICAgICAgICAgICAgIGlucHV0UmVmPXsgaW5wdXRSZWYgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTcGVjaWFsQ2hhcnNcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXsgW1wiaW5saW5lLWJsb2NrXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGMpID0+IG9uU3BlY2lhbENoYXJDbGljayhjKSB9XG4gICAgICAgICAgICAgICAgZGlzcGxheT17IGlzQWN0aXZlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5UZXh0SW5wdXQuZGlzcGxheU5hbWUgPSBcIlRleHRJbnB1dFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vbGliL0xvZ2dlclwiO1xuaW1wb3J0IHsgSVZpdGlBcmVhIH0gZnJvbSBcIi4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBnZXRWaXRpQXJlYXMsIHRvRGljdCB9IGZyb20gXCIuLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgYXV0b2NvbXBsZXRlIH0gZnJvbSBcIi4uL2xpYi93aWRnZXRzXCI7XG5pbXBvcnQgeyBJT25DaGFuZ2UgfSBmcm9tIFwiLi9JUHJvcHNcIjtcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gXCIuL1RleHRJbnB1dFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSU9uQ2hhbmdlIHtcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIHJlZ2lvblRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBWaXRpQXJlYUlucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHt2YWx1ZSwgcmVnaW9uVGV4dCwgb25DaGFuZ2V9KSA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihWaXRpQXJlYUlucHV0Lm5hbWUpO1xuICAgIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVml0aUFyZWFzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aXRpQXJlYXM6IElWaXRpQXJlYVtdID0gYXdhaXQgZ2V0Vml0aUFyZWFzKHtyZWdpb25OYW1lOiByZWdpb25UZXh0fSk7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlKGlucHV0UmVmLCB0b0RpY3Qodml0aUFyZWFzKSwgb25DaGFuZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihcIkZhaWxlZCB0byBnZXQgdml0aSBhcmVhIGF1dG9jb21wbGV0ZSBvcHRpb25zXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hWaXRpQXJlYXMoKTtcbiAgICB9LCBbaW5wdXRSZWYsIHJlZ2lvblRleHRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0SW5wdXQgbmFtZT1cIlZpdGkgQXJlYVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyBpbnB1dFJlZiB9XG4gICAgICAgICAgICBzPXsgOCB9IGw9eyA0IH1cbiAgICAgICAgICAgIHZhbHVlPXsgdmFsdWUgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblZpdGlBcmVhSW5wdXQuZGlzcGxheU5hbWUgPSBcIlZpdGlBcmVhSW5wdXRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElXaW5lVHlwZSB9IGZyb20gXCIuLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgZ2V0V2luZVR5cGVzLCB0b0RpY3QgfSBmcm9tIFwiLi4vbGliL1Jlc3RBcGlcIjtcbmltcG9ydCB7IGF1dG9jb21wbGV0ZSB9IGZyb20gXCIuLi9saWIvd2lkZ2V0c1wiO1xuaW1wb3J0IHsgSU9uQ2hhbmdlIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tIFwiLi9UZXh0SW5wdXRcIjtcblxuaW50ZXJmYWNlIElXaW5lVHlwZUlucHV0UHJvcHMgZXh0ZW5kcyBJT25DaGFuZ2Uge1xuICAgIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBXaW5lVHlwZUlucHV0OiBSZWFjdC5GQzxJV2luZVR5cGVJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoV2luZVR5cGVzKCkge1xuICAgICAgICAgICAgY29uc3Qgd2luZVR5cGVzOiBJV2luZVR5cGVbXSA9IGF3YWl0IGdldFdpbmVUeXBlcyh7fSk7XG4gICAgICAgICAgICBhdXRvY29tcGxldGUoaW5wdXRSZWYsIHRvRGljdCh3aW5lVHlwZXMpLCBwcm9wcy5vbkNoYW5nZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hXaW5lVHlwZXMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJXaW5lIFR5cGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgIHM9eyA4IH0gbD17IDQgfVxuICAgICAgICAgICAgdmFsdWU9eyBwcm9wcy52YWx1ZSB9XG4gICAgICAgICAgICBpbnB1dFJlZj17IGlucHV0UmVmIH1cbiAgICAgICAgICAgIG9uRm9jdXM9eyBwcm9wcy5vbkZvY3VzIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgcHJvcHMub25DaGFuZ2UgfVxuICAgICAgICAgICAgb25CbHVyPXsgcHJvcHMub25CbHVyIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuV2luZVR5cGVJbnB1dC5kaXNwbGF5TmFtZSA9IFwiV2luZVR5cGVJbnB1dFwiO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGbG9hdGluZ0J0biB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvbnNcIjtcbmltcG9ydCB7IE1hdGVyaWFsSWNvbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01hdGVyaWFsSWNvblwiO1xuaW1wb3J0IHsgQ29sb3JDZWxsLCBEYXRlQ2VsbCwgTmFtZUFuZFR5cGVDZWxsLCBOdW1DZWxsLCBQcmljZUNlbGwsIFByb2R1Y2VyQ2VsbCwgUmVnaW9uQ2VsbCwgWWVhckNlbGwgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWJsZUNlbGxzXCI7XG5pbXBvcnQgeyBTb3J0aW5nU3RhdGUsIFRhYmxlSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGFibGVIZWFkZXJcIjtcbmltcG9ydCB7IElJbnZlbnRvcnlXaW5lIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5cbmV4cG9ydCBlbnVtIEludmVudG9yeUNoYW5nZSB7XG4gICAgSW5jcmVhc2UsXG4gICAgRGVjcmVhc2Vcbn07XG5cbmVudW0gU29ydGluZ1ZhbHVlIHtcbiAgICBJbnZlbnRvcnksXG4gICAgQ29sb3IsXG4gICAgTmFtZUFuZFR5cGUsXG4gICAgUHJvZHVjZXIsXG4gICAgUmVnaW9uLFxuICAgIFZpbnRhZ2UsXG4gICAgUHVyY2hhc2VEYXRlLFxuICAgIFByaWNlLFxufTtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgd2luZXM6IElJbnZlbnRvcnlXaW5lW10sXG4gICAgb25JbnZlbnRvcnlDaGFuZ2U6IChpZDogbnVtYmVyLCBjaGFuZ2U6IEludmVudG9yeUNoYW5nZSkgPT4gdm9pZCxcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgYXNjZW5kaW5nOiBib29sZWFuLFxuICAgIHNvcnRpbmc6IFNvcnRpbmdWYWx1ZSxcbn1cblxuZXhwb3J0IGNsYXNzIEludmVudG9yeVRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhc2NlbmRpbmc6IHRydWUsXG4gICAgICAgICAgICBzb3J0aW5nOiBTb3J0aW5nVmFsdWUuUHVyY2hhc2VEYXRlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZSBoaWdobGlnaHQgY29uZGVuc2VkXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TW9kaWZ5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB7Li4udGhpcy50YWJsZUhlYWRlclByb3BzKFNvcnRpbmdWYWx1ZS5JbnZlbnRvcnkpfSBpc051bUNvbCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52ZW50b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyIHsuLi50aGlzLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLkNvbG9yKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuTmFtZUFuZFR5cGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lIGFuZCBUeXBlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyIHsuLi50aGlzLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLlByb2R1Y2VyKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUmVnaW9uKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVnaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyIHsuLi50aGlzLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLlZpbnRhZ2UpfSBpc051bUNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaW50YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyIHsuLi50aGlzLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLlB1cmNoYXNlRGF0ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB1cmNoYXNlIERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUHJpY2UpfSBpc051bUNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnNvcnRlZFdpbmVzLm1hcCgod2luZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXsgd2luZS5pZCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaW52ZW50b3J5LXBsdXMtbWludXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ0J0biBjbGFzc2VzPXsgW1wiZ3JlZW4tYmdcIiwgXCJidG4tc21hbGxcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnByb3BzLm9uSW52ZW50b3J5Q2hhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZS5pZCwgSW52ZW50b3J5Q2hhbmdlLkluY3JlYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImFkZF9jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbG9hdGluZ0J0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ0J0biBjbGFzc2VzPXsgW1wicmVkLWJnXCIsIFwiYnRuLXNtYWxsXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5wcm9wcy5vbkludmVudG9yeUNoYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmUuaWQsIEludmVudG9yeUNoYW5nZS5EZWNyZWFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJkb19ub3RfZGlzdHVyYl9vblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtQ2VsbCBudW09eyB3aW5lLmludmVudG9yeSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhEZWNpbWFscz17IDAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JDZWxsIGNvbG9yPXsgd2luZS5jb2xvciB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYW1lQW5kVHlwZUNlbGwgaWQ9eyB3aW5lLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyB3aW5lLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZVR5cGU9e3dpbmUud2luZVR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWNlckNlbGwgaWQ9eyB3aW5lLnByb2R1Y2VySWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IHdpbmUucHJvZHVjZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVnaW9uQ2VsbCBpZD17IHdpbmUucmVnaW9uSWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IHdpbmUucmVnaW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFllYXJDZWxsIHllYXI9eyB3aW5lLmxhc3RQdXJjaGFzZVZpbnRhZ2UgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZUNlbGwgZGF0ZT17IHdpbmUubGFzdFB1cmNoYXNlRGF0ZSB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZUNlbGwgcHJpY2U9eyB3aW5lLmxhc3RQdXJjaGFzZVByaWNlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgc29ydGVkV2luZXMoKSB7XG4gICAgICAgIGNvbnN0IGFzY2VuZGluZ011bHRpcGxpZXIgPSB0aGlzLnN0YXRlLmFzY2VuZGluZyA/IDEgOiAtMTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLnNvcnRpbmcpIHtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLkludmVudG9yeTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcy5zb3J0KCh3MSwgdzIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh3MS5pbnZlbnRvcnkpID4gKHcyLmludmVudG9yeSkgPyAtYXNjZW5kaW5nTXVsdGlwbGllciA6IGFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5Db2xvcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcy5zb3J0KCh3MSwgdzIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHcxLmNvbG9yLmxvY2FsZUNvbXBhcmUodzIuY29sb3IpICogYXNjZW5kaW5nTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuTmFtZUFuZFR5cGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNvcnQgYnkgd2luZVR5cGUgdGhlbiBuYW1lXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpbmVUeXBlQ29tcGFyaXNvbiA9ICh3MS53aW5lVHlwZSA/PyBcIlwiKS5sb2NhbGVDb21wYXJlKHcyLndpbmVUeXBlID8/IFwiXCIpICogYXNjZW5kaW5nTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmVUeXBlQ29tcGFyaXNvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmFtZSBjb21wYXJpc29uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodzEubmFtZSAmJiB3Mi5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHcxLm5hbWUubG9jYWxlQ29tcGFyZSh3Mi5uYW1lKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3MS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodzIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtYXNjZW5kaW5nTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZVR5cGVDb21wYXJpc29uO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5Qcm9kdWNlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcy5zb3J0KCh3MSwgdzIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHcxLnByb2R1Y2VyLmxvY2FsZUNvbXBhcmUodzIucHJvZHVjZXIpICogYXNjZW5kaW5nTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuUmVnaW9uOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdzEucmVnaW9uLmxvY2FsZUNvbXBhcmUodzIucmVnaW9uKSAqIGFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLlZpbnRhZ2U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodzEubGFzdFB1cmNoYXNlVmludGFnZSB8fCAwKSA+ICh3Mi5sYXN0UHVyY2hhc2VWaW50YWdlIHx8IDApID8gLWFzY2VuZGluZ011bHRpcGxpZXIgOiBhc2NlbmRpbmdNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuUHVyY2hhc2VEYXRlOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHcxLmxhc3RQdXJjaGFzZURhdGUpID4gKHcyLmxhc3RQdXJjaGFzZURhdGUpID8gLWFzY2VuZGluZ011bHRpcGxpZXIgOiBhc2NlbmRpbmdNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuUHJpY2U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodzEubGFzdFB1cmNoYXNlUHJpY2UgfHwgMCkgPiAodzIubGFzdFB1cmNoYXNlUHJpY2UgfHwgMCkgPyAtYXNjZW5kaW5nTXVsdGlwbGllciA6IGFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5QdXJjaGFzZURhdGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodzEubGFzdFB1cmNoYXNlRGF0ZSkgPiAodzIubGFzdFB1cmNoYXNlRGF0ZSkgPyAtYXNjZW5kaW5nTXVsdGlwbGllciA6IGFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkhlYWRlckNsaWNrKGU6IFJlYWN0Lk1vdXNlRXZlbnQsIHNvcnRpbmdWYWw6IFNvcnRpbmdWYWx1ZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChzb3J0aW5nVmFsID09PSB0aGlzLnN0YXRlLnNvcnRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHthc2NlbmRpbmc6ICFwcmV2U3RhdGUuYXNjZW5kaW5nfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYXNjZW5kaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNvcnRpbmc6IHNvcnRpbmdWYWwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdGFibGVIZWFkZXJQcm9wcyhzb3J0aW5nVmFsOiBTb3J0aW5nVmFsdWUpOlxuICAgICAgICB7c29ydGluZ1N0YXRlOiBTb3J0aW5nU3RhdGUsIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB2b2lkfSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc29ydGluZyA9PT0gc29ydGluZ1ZhbCkge1xuICAgICAgICAgICAgY29uc3Qgc29ydGluZ1N0YXRlID0gdGhpcy5zdGF0ZS5hc2NlbmRpbmcgPyBTb3J0aW5nU3RhdGUuQXNjZW5kaW5nIDogU29ydGluZ1N0YXRlLkRlc2NlbmRpbmc7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNvcnRpbmdTdGF0ZSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoZSkgPT4gdGhpcy5vbkhlYWRlckNsaWNrKGUsIHNvcnRpbmdWYWwpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc29ydGluZ1N0YXRlOiBTb3J0aW5nU3RhdGUuTm90U29ydGVkLFxuICAgICAgICAgICAgb25DbGljazogKGUpID0+IHRoaXMub25IZWFkZXJDbGljayhlLCBzb3J0aW5nVmFsKSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb2xvcklucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29sb3JJbnB1dFwiO1xuaW1wb3J0IHsgRmlsZUlucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRmlsZUlucHV0XCI7XG5pbXBvcnQgeyBQcm9kdWNlcklucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZHVjZXJJbnB1dFwiO1xuaW1wb3J0IHsgUmF0aW5nSW5wdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SYXRpbmdJbnB1dFwiO1xuaW1wb3J0IHsgUmVnaW9uSW5wdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SZWdpb25JbnB1dFwiO1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGV4dElucHV0XCI7XG5pbXBvcnQgeyBWaXRpQXJlYUlucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVml0aUFyZWFJbnB1dFwiO1xuaW1wb3J0IHsgV2luZVR5cGVJbnB1dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dpbmVUeXBlSW5wdXRcIjtcbmltcG9ydCB7IElDb2xvciwgSVByb2R1Y2VyLCBJVml0aUFyZWEsIElXaW5lRm9ybSwgSVdpbmVUeXBlIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBnZXRDb2xvciwgZ2V0T3JDcmVhdGVXaW5lVHlwZSwgZ2V0T3JDcmVhdGVQcm9kdWNlciwgZ2V0T3JDcmVhdGVWaXRpQXJlYSwgZ2V0T3JDcmVhdGVSZWdpb24gfSBmcm9tIFwiLi4vLi4vbGliL1Jlc3RBcGlcIjtcblxuLy8gVE9ETzogaGFuZGxlIGZpbGVcbmV4cG9ydCBpbnRlcmZhY2UgSVdpbmVEYXRhIHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIHdpbmVUeXBlOiBzdHJpbmc7XG4gICAgcHJvZHVjZXI6IHN0cmluZztcbiAgICByZWdpb246IHN0cmluZztcbiAgICBpc1JhdGluZ0VuYWJsZWQ6IGJvb2xlYW47XG4gICAgcmF0aW5nOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHdoeTogc3RyaW5nO1xuICAgIHZpdGlBcmVhOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBub3Rlczogc3RyaW5nO1xuICAgIGZpbGU6IEZpbGUgfCBudWxsLFxufVxuXG5leHBvcnQgY29uc3QgaW5pdFdpbmVJbnB1dERhdGEgPSAoKTogSVdpbmVEYXRhID0+ICh7XG4gICAgY29sb3I6IFwiXCIsXG4gICAgd2luZVR5cGU6IFwiXCIsXG4gICAgcHJvZHVjZXI6IFwiXCIsXG4gICAgcmVnaW9uOiBcIlwiLFxuICAgIGlzUmF0aW5nRW5hYmxlZDogZmFsc2UsXG4gICAgcmF0aW5nOiA1LFxuICAgIG5hbWU6IFwiXCIsXG4gICAgd2h5OiBcIlwiLFxuICAgIHZpdGlBcmVhOiBcIlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIG5vdGVzOiBcIlwiLFxuICAgIGZpbGU6IG51bGwsXG59KTtcblxuY29uc3QgZ2V0T3JDcmVhdGVWaXRpQXJlYUZvclJlZ2lvbiA9IGFzeW5jIChkYXRhOiBJV2luZURhdGEsIHJlZ2lvbklkOiBudW1iZXIpID0+IHtcbiAgICBpZiAoZGF0YS52aXRpQXJlYSkge1xuICAgICAgICByZXR1cm4gZ2V0T3JDcmVhdGVWaXRpQXJlYSh7bmFtZTogZGF0YS52aXRpQXJlYX0sIHtuYW1lOiBkYXRhLnZpdGlBcmVhLCByZWdpb25JZH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgZ2V0UHJvZHVjZXJBbmRWaXRpQXJlYSA9IGFzeW5jIChkYXRhOiBJV2luZURhdGEpID0+IHtcbiAgICBjb25zdCByZWdpb24gPSBhd2FpdCBnZXRPckNyZWF0ZVJlZ2lvbih7bmFtZTogZGF0YS5yZWdpb259LCB7bmFtZTogZGF0YS5yZWdpb259KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGw8SVByb2R1Y2VyLCBJVml0aUFyZWEgfCBudWxsPihbXG4gICAgICAgIGdldE9yQ3JlYXRlUHJvZHVjZXIoe25hbWU6IGRhdGEucHJvZHVjZXJ9LCB7bmFtZTogZGF0YS5wcm9kdWNlciwgcmVnaW9uSWQ6IHJlZ2lvbi5pZH0pLFxuICAgICAgICBnZXRPckNyZWF0ZVZpdGlBcmVhRm9yUmVnaW9uKGRhdGEsIHJlZ2lvbi5pZCksXG4gICAgXSk7XG59XG5cbmV4cG9ydCBjb25zdCB3aW5lRGF0YVRvRm9ybSA9IGFzeW5jIChkYXRhOiBJV2luZURhdGEsIGludmVudG9yeTogbnVtYmVyKTogUHJvbWlzZTxJV2luZUZvcm0+ID0+IHtcbiAgICBjb25zdCBbY29sb3IsIHdpbmVUeXBlLCBbcHJvZHVjZXIsIHZpdGlBcmVhXV0gPSBhd2FpdCBQcm9taXNlLmFsbDxJQ29sb3IsIElXaW5lVHlwZSwgW0lQcm9kdWNlciwgSVZpdGlBcmVhIHwgbnVsbF0+KFtcbiAgICAgICAgZ2V0Q29sb3Ioe25hbWU6IGRhdGEuY29sb3J9KSxcbiAgICAgICAgZ2V0T3JDcmVhdGVXaW5lVHlwZSh7bmFtZTogZGF0YS53aW5lVHlwZX0sIHtuYW1lOiBkYXRhLndpbmVUeXBlfSksXG4gICAgICAgIGdldFByb2R1Y2VyQW5kVml0aUFyZWEoZGF0YSksXG4gICAgXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29sb3JJZDogY29sb3IuaWQsXG4gICAgICAgIHdpbmVUeXBlSWQ6IHdpbmVUeXBlLmlkLFxuICAgICAgICBwcm9kdWNlcklkOiBwcm9kdWNlci5pZCxcbiAgICAgICAgdml0aUFyZWFJZDogdml0aUFyZWE/LmlkID8/IG51bGwsXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSB8fCBudWxsLFxuICAgICAgICB3aHk6IGRhdGEud2h5IHx8IG51bGwsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXG4gICAgICAgIHJhdGluZzogZGF0YS5pc1JhdGluZ0VuYWJsZWQgPyBkYXRhLnJhdGluZyA6IG51bGwsXG4gICAgICAgIGludmVudG9yeTogaW52ZW50b3J5LFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBudWxsLFxuICAgIH07XG59XG5cbnR5cGUgQWN0aW9uID1cbiAgICB8IHt0eXBlOiBcInNldENvbG9yXCIsIGNvbG9yOiBzdHJpbmd9XG4gICAgfCB7dHlwZTogXCJzZXRXaW5lVHlwZVwiLCB3aW5lVHlwZTogc3RyaW5nfVxuICAgIHwge3R5cGU6IFwic2V0UHJvZHVjZXJcIiwgcHJvZHVjZXI6IHN0cmluZ31cbiAgICB8IHt0eXBlOiBcInNldFJlZ2lvblwiLCByZWdpb246IHN0cmluZ31cbiAgICB8IHt0eXBlOiBcInNldElzUmF0aW5nRW5hYmxlZFwiLCBpc1JhdGluZ0VuYWJsZWQ6IGJvb2xlYW59XG4gICAgfCB7dHlwZTogXCJzZXRSYXRpbmdcIiwgcmF0aW5nOiBudW1iZXJ9XG4gICAgfCB7dHlwZTogXCJzZXROYW1lXCIsIG5hbWU6IHN0cmluZ31cbiAgICB8IHt0eXBlOiBcInNldFdoeVwiLCB3aHk6IHN0cmluZ31cbiAgICB8IHt0eXBlOiBcInNldFZpdGlBcmVhXCIsIHZpdGlBcmVhOiBzdHJpbmd9XG4gICAgfCB7dHlwZTogXCJzZXREZXNjcmlwdGlvblwiLCBkZXNjcmlwdGlvbjogc3RyaW5nfVxuICAgIHwge3R5cGU6IFwic2V0Tm90ZXNcIiwgbm90ZXM6IHN0cmluZ31cbiAgICB8IHt0eXBlOiBcInNldEZpbGVcIiwgZmlsZTogRmlsZSB8IG51bGx9O1xuXG5leHBvcnQgY29uc3Qgd2luZUlucHV0UmVkdWNlcjogUmVhY3QuUmVkdWNlcjxJV2luZURhdGEsIEFjdGlvbj4gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInNldENvbG9yXCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY29sb3I6IGFjdGlvbi5jb2xvciB9O1xuICAgICAgICBjYXNlIFwic2V0V2luZVR5cGVcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB3aW5lVHlwZTogYWN0aW9uLndpbmVUeXBlIH07XG4gICAgICAgIGNhc2UgXCJzZXRQcm9kdWNlclwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y2VyOiBhY3Rpb24ucHJvZHVjZXIgfTtcbiAgICAgICAgY2FzZSBcInNldFJlZ2lvblwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlZ2lvbjogYWN0aW9uLnJlZ2lvbiB9O1xuICAgICAgICBjYXNlIFwic2V0SXNSYXRpbmdFbmFibGVkXCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNSYXRpbmdFbmFibGVkOiBhY3Rpb24uaXNSYXRpbmdFbmFibGVkIH07XG4gICAgICAgIGNhc2UgXCJzZXRSYXRpbmdcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByYXRpbmc6IGFjdGlvbi5yYXRpbmcgfTtcbiAgICAgICAgY2FzZSBcInNldE5hbWVcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuYW1lOiBhY3Rpb24ubmFtZSB9O1xuICAgICAgICBjYXNlIFwic2V0V2h5XCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgd2h5OiBhY3Rpb24ud2h5IH07XG4gICAgICAgIGNhc2UgXCJzZXRWaXRpQXJlYVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZpdGlBcmVhOiBhY3Rpb24udml0aUFyZWEgfTtcbiAgICAgICAgY2FzZSBcInNldERlc2NyaXB0aW9uXCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGVzY3JpcHRpb246IGFjdGlvbi5kZXNjcmlwdGlvbiB9O1xuICAgICAgICBjYXNlIFwic2V0Tm90ZXNcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBub3RlczogYWN0aW9uLm5vdGVzIH07XG4gICAgICAgIGNhc2UgXCJzZXRGaWxlXCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZmlsZTogYWN0aW9uLmZpbGUgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgZGF0YTogSVdpbmVEYXRhLFxuICAgIGRpc3BhdGNoOiBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+O1xufVxuXG5leHBvcnQgY29uc3QgV2luZUlucHV0czogUmVhY3QuRkM8SVByb3BzPiA9ICh7ZGF0YSwgZGlzcGF0Y2h9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDb2xvcklucHV0IHNlbGVjdGlvbj17IGRhdGEuY29sb3IgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGNvbG9yKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRDb2xvclwiLCBjb2xvcn0pIH1cbiAgICAgICAgICAgICAgICBleHRyYUNob2ljZT1cIlNlbGVjdCBhIGNvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8V2luZVR5cGVJbnB1dCB2YWx1ZT17IGRhdGEud2luZVR5cGUgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHdpbmVUeXBlKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRXaW5lVHlwZVwiLCB3aW5lVHlwZX0pIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJOYW1lXCIgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBzPXsgMTIgfSBsPXsgNiB9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyBkYXRhLm5hbWUgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKG5hbWUpID0+IGRpc3BhdGNoKHt0eXBlOiBcInNldE5hbWVcIiwgbmFtZX0pIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJvZHVjZXJJbnB1dCB2YWx1ZT17IGRhdGEucHJvZHVjZXIgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHByb2R1Y2VyKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRQcm9kdWNlclwiLCBwcm9kdWNlcn0pIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UmVnaW9uSW5wdXQgdmFsdWU9eyBkYXRhLnJlZ2lvbiB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAocmVnaW9uKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRSZWdpb25cIiwgcmVnaW9ufSkgfVxuICAgICAgICAgICAgICAgIHByb2R1Y2VyVGV4dD17IGRhdGEucHJvZHVjZXIgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSYXRpbmdJbnB1dCBpc0NoZWNrZWQ9eyBkYXRhLmlzUmF0aW5nRW5hYmxlZCB9XG4gICAgICAgICAgICAgICAgb25Jc0NoZWNrZWRDaGFuZ2U9eyAoaXNSYXRpbmdFbmFibGVkKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRJc1JhdGluZ0VuYWJsZWRcIiwgaXNSYXRpbmdFbmFibGVkfSkgfVxuICAgICAgICAgICAgICAgIHJhdGluZz17IGRhdGEucmF0aW5nIH1cbiAgICAgICAgICAgICAgICBvblJhdGluZ0NoYW5nZT17IChyYXRpbmcpID0+IGRpc3BhdGNoKHt0eXBlOiBcInNldFJhdGluZ1wiLCByYXRpbmd9KSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZpdGlBcmVhSW5wdXQgdmFsdWU9eyBkYXRhLnZpdGlBcmVhIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2aXRpQXJlYSkgPT4gZGlzcGF0Y2goe3R5cGU6IFwic2V0Vml0aUFyZWFcIiwgdml0aUFyZWF9KSB9XG4gICAgICAgICAgICAgICAgcmVnaW9uVGV4dD17IGRhdGEucmVnaW9uIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJEZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBkYXRhLmRlc2NyaXB0aW9uIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChkZXNjcmlwdGlvbikgPT4gZGlzcGF0Y2goe3R5cGU6IFwic2V0RGVzY3JpcHRpb25cIiwgZGVzY3JpcHRpb259KSB9XG4gICAgICAgICAgICAgICAgcz17IDEyIH0gbD17IDYgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0SW5wdXQgbmFtZT1cIk5vdGVzXCIgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBzPXsgMTIgfSBsPXsgNiB9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyBkYXRhLm5vdGVzIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChub3RlcykgPT4gZGlzcGF0Y2goe3R5cGU6IFwic2V0Tm90ZXNcIiwgbm90ZXN9KSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZpbGVJbnB1dCBuYW1lPVwiV2luZSBJbWFnZVwiIG9uQ2hhbmdlPXsgKGZpbGUpID0+IGRpc3BhdGNoKHt0eXBlOiBcInNldEZpbGVcIiwgZmlsZX0pIH0gLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbldpbmVJbnB1dHMuZGlzcGxheU5hbWUgPSBcIldpbmVJbnB1dHNcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhbmNlbE9yQ29uZmlybUJ0bnMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25zXCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmlkXCI7XG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxDb250ZW50LCBNb2RhbEZvb3RlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01vZGFsXCI7XG5pbXBvcnQgeyBJV2luZSB9IGZyb20gXCIuLi8uLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgSVdpbmVEYXRhLCB3aW5lSW5wdXRSZWR1Y2VyLCBXaW5lSW5wdXRzIH0gZnJvbSBcIi4uL25ld193aW5lL1dpbmVJbnB1dHNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgd2luZTogSVdpbmU7XG4gICAgb25TdWJtaXQ6ICh3aW5lOiBJV2luZURhdGEpID0+IHZvaWQ7XG4gICAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG59XG5cbi8vIFRPRE86IGluY2x1ZGUgZmlsZVxuLy8gVE9ETzogaW5jbHVkZSBncmFwZXNcbmV4cG9ydCBjb25zdCBFZGl0V2luZTogUmVhY3QuRkM8SVByb3BzPiA9ICh7d2luZSwgb25TdWJtaXQsIG9uQ2FuY2VsfSkgPT4ge1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcih3aW5lSW5wdXRSZWR1Y2VyLCB7XG4gICAgICAgIC4uLndpbmUsXG4gICAgICAgIG5hbWU6IHdpbmUubmFtZSA/PyBcIlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogd2luZS5kZXNjcmlwdGlvbiA/PyBcIlwiLFxuICAgICAgICByYXRpbmc6IHdpbmUucmF0aW5nID8/IDUsXG4gICAgICAgIGlzUmF0aW5nRW5hYmxlZDogd2luZS5yYXRpbmcgIT09IG51bGwsXG4gICAgICAgIGZpbGU6IG51bGwsXG4gICAgICAgIG5vdGVzOiB3aW5lLm5vdGVzID8/IFwiXCIsXG4gICAgICAgIHZpdGlBcmVhOiB3aW5lLnZpdGlBcmVhID8/IFwiXCIsXG4gICAgICAgIHdoeTogd2luZS53aHkgPz8gXCJcIixcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbD5cbiAgICAgICAgICAgIDxNb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGg0PkVkaXQgd2luZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxXaW5lSW5wdXRzIGRhdGE9eyBzdGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaD17IGRpc3BhdGNoIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxDYW5jZWxPckNvbmZpcm1CdG5zXG4gICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybUNsaWNrPXsgKCkgPT4gb25TdWJtaXQoc3RhdGUpIH1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWxDbGljaz17IG9uQ2FuY2VsIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufVxuRWRpdFdpbmUuZGlzcGxheU5hbWUgPSBFZGl0V2luZS5uYW1lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGllQ2hhcnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DaGFydFwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWJsZVwiO1xuaW1wb3J0IHsgTnVtQ2VsbCwgVGV4dENlbGwgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWJsZUNlbGxzXCI7XG5pbXBvcnQgeyBpbmRleEZhY3RvcnksIFRhYiwgVGFiQ29sb3IsIFRhYlBhbmVsLCBUYWJzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGFic1wiO1xuaW1wb3J0IHsgSVdpbmVHcmFwZSB9IGZyb20gXCIuLi8uLi9saWIvUmVzdFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBncmFwZXM6IElXaW5lR3JhcGVbXTtcbn1cblxuZXhwb3J0IGNvbnN0IEdyYXBlc1RhYmxlOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtncmFwZXN9KSA9PiB7XG4gICAgY29uc3QgdGFiSWR4ZXIgPSBpbmRleEZhY3RvcnkoR3JhcGVzVGFibGUubmFtZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaWdodFwiPkdyYXBlIGNvbXBvc2l0aW9uPC9oNT5cbiAgICAgICAgICAgIDxUYWJzPlxuICAgICAgICAgICAgICAgIDxUYWIgdGFyZ2V0PXt0YWJJZHhlcigwKX0gY29sb3I9e1RhYkNvbG9yLlJlZH0+XG4gICAgICAgICAgICAgICAgICAgIFRhYmxlXG4gICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgPFRhYiB0YXJnZXQ9e3RhYklkeGVyKDEpfSBjb2xvcj17VGFiQ29sb3IuR3JlZW59PlxuICAgICAgICAgICAgICAgICAgICBQaWUgY2hhcnRcbiAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgIDxUYWJQYW5lbCBpZD17dGFiSWR4ZXIoMCl9PlxuICAgICAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXsgW1wiR3JhcGVcIiwge25hbWU6IFwiUGVyY2VudGFnZVwiLCBpc051bUNvbDogdHJ1ZX1dfT5cbiAgICAgICAgICAgICAgICAgICAgeyBncmFwZXMubWFwKChncmFwZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17IGdyYXBlLmlkIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDZWxsIHRleHQ9eyBncmFwZS5ncmFwZSB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bUNlbGwgbnVtPXsgZ3JhcGUucGVyY2VudCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heERlY2ltYWxzPXsgMCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICkpIH1cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgIDxUYWJQYW5lbCBpZD17dGFiSWR4ZXIoMSl9PlxuICAgICAgICAgICAgICAgIDxQaWVDaGFydCBkYXRhPXsgZ3JhcGVzLm1hcCgoZ3JhcGUpID0+ICh7bGFiZWw6IGdyYXBlLmdyYXBlLCB2YWx1ZTogZ3JhcGUucGVyY2VudCB8fCAwfSkpIH0gLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5HcmFwZXNUYWJsZS5kaXNwbGF5TmFtZSA9IFwiR3JhcGVzVGFibGVcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhbmNlbE9yQ29uZmlybUJ0bnMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25zXCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmlkXCI7XG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxDb250ZW50LCBNb2RhbEZvb3RlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01vZGFsXCI7XG5pbXBvcnQgeyBJUHVyY2hhc2VEYXRhLCBwdXJjaGFzZUlucHV0UmVkdWNlciwgUHVyY2hhc2VJbnB1dHMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QdXJjaGFzZUlucHV0c1wiO1xuaW1wb3J0IHsgSVB1cmNoYXNlIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgcHVyY2hhc2U6IElQdXJjaGFzZTtcbiAgICBvblN1Ym1pdDogKHB1cmNoYXNlOiBJUHVyY2hhc2VEYXRhKSA9PiB2b2lkO1xuICAgIG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIFVzZWQgZm9yIGNyZWF0aW5nIGEgbmV3IHB1cmNoYXNlIGFzIHdlbGwgYXMgZWRpdGluZyBhbiBleGlzdGluZyBvbmUsIGhlbmNlXG4gKiBgTW9kaWZ5UHVyY2hhc2VgXG4gKi9cbmV4cG9ydCBjb25zdCBNb2RpZnlQdXJjaGFzZTogUmVhY3QuRkM8SVByb3BzPiA9ICh7dGl0bGUsIHB1cmNoYXNlLCBvbkNhbmNlbCwgb25TdWJtaXR9KSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHB1cmNoYXNlSW5wdXRSZWR1Y2VyLCB7XG4gICAgICAgIC4uLnB1cmNoYXNlLFxuICAgICAgICBzdG9yZTogcHVyY2hhc2Uuc3RvcmUgPz8gXCJcIixcbiAgICAgICAgbWVtbzogcHVyY2hhc2UubWVtbyA/PyBcIlwiLFxuICAgICAgICBzaG91bGRBZGRUb0ludmVudG9yeTogbnVsbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsPlxuICAgICAgICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8aDQ+eyB0aXRsZSB9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPFB1cmNoYXNlSW5wdXRzIGRpc3BsYXlJbnZlbnRvcnlCdG49eyBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXsgc3RhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g9eyBkaXNwYXRjaCB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8Q2FuY2VsT3JDb25maXJtQnRuc1xuICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm1DbGljaz17ICgpID0+IG9uU3VibWl0KHN0YXRlKSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsQ2xpY2s9eyBvbkNhbmNlbCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn1cbk1vZGlmeVB1cmNoYXNlLmRpc3BsYXlOYW1lID0gXCJNb2RpZnlQdXJjaGFzZVwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSVB1cmNoYXNlIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBTb3J0aW5nU3RhdGUsIFRhYmxlSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGFibGVIZWFkZXJcIjtcbmltcG9ydCB7IERhdGVDZWxsLCBOdW1DZWxsLCBQcmljZUNlbGwsIFllYXJDZWxsLCBUZXh0Q2VsbCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWF0ZXJpYWxJY29uXCI7XG5pbXBvcnQgeyBCdG4gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25zXCI7XG5cbmVudW0gU29ydGluZ1ZhbHVlIHtcbiAgICBEYXRlLFxuICAgIFF1YW50aXR5LFxuICAgIFByaWNlLFxuICAgIFZpbnRhZ2UsXG4gICAgU3RvcmUsXG4gICAgTWVtbyxcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcHVyY2hhc2VzOiBJUHVyY2hhc2VbXTtcbiAgICBvbkVkaXRDbGljazogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgb25EZWxldGVDbGljazogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBQdXJjaGFzZXM6IFJlYWN0LkZDPElQcm9wcz4gPSAoe3B1cmNoYXNlcywgb25FZGl0Q2xpY2ssIG9uRGVsZXRlQ2xpY2t9KSA9PiB7XG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc29ydGluZywgc2V0U29ydGluZ10gPSBSZWFjdC51c2VTdGF0ZShTb3J0aW5nVmFsdWUuRGF0ZSk7XG5cbiAgICBjb25zdCBvbkhlYWRlckNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50LCBzb3J0aW5nVmFsOiBTb3J0aW5nVmFsdWUpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHNvcnRpbmdWYWwgPT09IHNvcnRpbmcpIHtcbiAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFNvcnRpbmcoc29ydGluZ1ZhbCk7XG4gICAgICAgICAgICBzZXRBc2NlbmRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRhYmxlSGVhZGVyUHJvcHMgPSAoc29ydGluZ1ZhbDogU29ydGluZ1ZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChzb3J0aW5nID09PSBzb3J0aW5nVmFsKSB7XG4gICAgICAgICAgICBjb25zdCBzb3J0aW5nU3RhdGUgPSBhc2NlbmRpbmcgPyBTb3J0aW5nU3RhdGUuQXNjZW5kaW5nIDogU29ydGluZ1N0YXRlLkRlc2NlbmRpbmc7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNvcnRpbmdTdGF0ZSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gb25IZWFkZXJDbGljayhlLCBzb3J0aW5nVmFsKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvcnRpbmdTdGF0ZTogU29ydGluZ1N0YXRlLk5vdFNvcnRlZCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiBvbkhlYWRlckNsaWNrKGUsIHNvcnRpbmdWYWwpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHNvcnRlZFB1cmNoYXNlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXNjZW5kaW5nTXVsdGlwbGllciA9IGFzY2VuZGluZyA/IDEgOiAtMTtcbiAgICAgICAgc3dpdGNoIChzb3J0aW5nKSB7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5EYXRlOlxuICAgICAgICAgICAgICAgIHJldHVybiBwdXJjaGFzZXMuc29ydCgocDEsIHAyKSA9PiAoKHAxLmRhdGUgPz8gMCkgLSAocDIuZGF0ZSA/PyAwKSkgKiBhc2NlbmRpbmdNdWx0aXBsaWVyKTtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLk1lbW86XG4gICAgICAgICAgICAgICAgcmV0dXJuIHB1cmNoYXNlcy5zb3J0KChwMSwgcDIpID0+ICgocDEubWVtbyA/PyBcIlwiKS5sb2NhbGVDb21wYXJlKHAyLm1lbW8gPz8gXCJcIikpICogYXNjZW5kaW5nTXVsdGlwbGllcik7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5QcmljZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gcHVyY2hhc2VzLnNvcnQoKHAxLCBwMikgPT4gKChwMS5wcmljZSA/PyAwKSAtIChwMi5wcmljZSA/PyAwKSkgKiBhc2NlbmRpbmdNdWx0aXBsaWVyKTtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLlF1YW50aXR5OlxuICAgICAgICAgICAgICAgIHJldHVybiBwdXJjaGFzZXMuc29ydCgocDEsIHAyKSA9PiAoKHAxLnF1YW50aXR5ID8/IDApIC0gKHAyLnF1YW50aXR5ID8/IDApKSAqIGFzY2VuZGluZ011bHRpcGxpZXIpO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuU3RvcmU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHB1cmNoYXNlcy5zb3J0KChwMSwgcDIpID0+ICgocDEuc3RvcmUgPz8gXCJcIikubG9jYWxlQ29tcGFyZShwMi5zdG9yZSA/PyBcIlwiKSkgKiBhc2NlbmRpbmdNdWx0aXBsaWVyKTtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLlZpbnRhZ2U6XG4gICAgICAgICAgICAgICAgLy8gU29ydCBOViBmaXJzdFxuICAgICAgICAgICAgICAgIHJldHVybiBwdXJjaGFzZXMuc29ydCgocDEsIHAyKSA9PiAoKHAxLnZpbnRhZ2UgPz8gMzAwMCkgLSAocDIudmludGFnZSA/PyAzMDAwKSkgKiBhc2NlbmRpbmdNdWx0aXBsaWVyKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHB1cmNoYXNlcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwdXJjaGFzZXMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInJlc3BvbnNpdmUgaGlnaGxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgc29ydGluZ1N0YXRlPXsgU29ydGluZ1N0YXRlLk5vdFNvcnRlZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGlmeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyIHsuLi50YWJsZUhlYWRlclByb3BzKFNvcnRpbmdWYWx1ZS5EYXRlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB7Li4udGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUXVhbnRpdHkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc051bUNvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB7Li4udGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUHJpY2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc051bUNvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB7Li4udGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuVmludGFnZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTnVtQ29sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaW50YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLlN0b3JlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLk1lbW8pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVtb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHNvcnRlZFB1cmNoYXNlcygpLm1hcCgocHVyY2hhc2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXsgcHVyY2hhc2UuaWQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ0biBjbGFzc2VzPXsgW1wiYnRuLXNtYWxsXCIsIFwieWVsbG93LWJnXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gb25FZGl0Q2xpY2socHVyY2hhc2UuaWQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwiZWRpdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcImJ0bi1zbWFsbFwiLCBcInJlZC1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG9uRGVsZXRlQ2xpY2socHVyY2hhc2UuaWQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwiZGVsZXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZUNlbGwgZGF0ZT17IHB1cmNoYXNlLmRhdGUgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtQ2VsbCBudW09eyBwdXJjaGFzZS5xdWFudGl0eSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhEZWNpbWFscz17IDAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VDZWxsIHByaWNlPXsgcHVyY2hhc2UucHJpY2UgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WWVhckNlbGwgeWVhcj17IHB1cmNoYXNlLnZpbnRhZ2UgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENlbGwgdGV4dD17IHB1cmNoYXNlLnN0b3JlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDZWxsIHRleHQ9eyBwdXJjaGFzZS5tZW1vIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBzPXsgMTIgfT5cbiAgICAgICAgICAgICAgICA8aDU+Tm8gcHJldmlvdXNseSByZWNvcmRlZCBwdXJjaGFzZXM8L2g1PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgIClcbn07XG5QdXJjaGFzZXMuZGlzcGxheU5hbWUgPSBcIlB1cmNoYXNlc1wiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmxvYXRpbmdCdG4gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25zXCI7XG5pbXBvcnQgeyBJbnZlbnRvcnlDaGFuZ2UgfSBmcm9tIFwiLi4vaW52ZW50b3J5L0ludmVudG9yeVRhYmxlXCI7XG5pbXBvcnQgeyBNYXRlcmlhbEljb24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYXRlcmlhbEljb25cIjtcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nIHwgbnVsbDtcbiAgICBpbnZlbnRvcnk6IG51bWJlcjtcbiAgICBsYXN0UHVyY2hhc2VWaW50YWdlOiBudW1iZXIgfCBudWxsO1xuICAgIG5vdGVzOiBzdHJpbmcgfCBudWxsO1xuICAgIHJhdGluZzogbnVtYmVyIHwgbnVsbDtcbiAgICB2aXRpQXJlYTogc3RyaW5nIHwgbnVsbDtcbiAgICB2aXRpQXJlYUlkOiBudW1iZXIgfCBudWxsO1xuICAgIHdoeTogc3RyaW5nIHwgbnVsbDtcbiAgICAvLyBIYW5kbGVyc1xuICAgIG9uSW52ZW50b3J5Q2hhbmdlOiAoY2hhbmdlVHlwZTogSW52ZW50b3J5Q2hhbmdlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgV2luZURhdGE6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpZ2h0XCI+eyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIocHJvcHMuY29sb3IpIH08L2g1PlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImlubGluZS1oXCI+XG4gICAgICAgICAgICAgICAgPGI+SW52ZW50b3J5OiA8L2I+IHsgcHJvcHMuaW52ZW50b3J5IH1cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgIDxGbG9hdGluZ0J0biBjbGFzc2VzPXsgW1wiZ3JlZW4tYmdcIiwgXCJidG4tZmxvYXRpbmctc21hbGxcIl0gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBwcm9wcy5vbkludmVudG9yeUNoYW5nZShJbnZlbnRvcnlDaGFuZ2UuSW5jcmVhc2UpIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwiYWRkX2NpcmNsZVwiIC8+XG4gICAgICAgICAgICA8L0Zsb2F0aW5nQnRuPlxuICAgICAgICAgICAgJnRoaW5zcDtcbiAgICAgICAgICAgIDxGbG9hdGluZ0J0biBjbGFzc2VzPXsgW1wicmVkLWJnXCIsIFwiYnRuLWZsb2F0aW5nLXNtYWxsXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gcHJvcHMub25JbnZlbnRvcnlDaGFuZ2UoSW52ZW50b3J5Q2hhbmdlLkRlY3JlYXNlKSB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImRvX25vdF9kaXN0dXJiX29uXCIgLz5cbiAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICB7IHByb3BzLmxhc3RQdXJjaGFzZVZpbnRhZ2UgJiZcbiAgICAgICAgICAgICAgICA8aDU+PGI+VmludGFnZTo8L2I+IHsgcHJvcHMubGFzdFB1cmNoYXNlVmludGFnZSB9PC9oNT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgcHJvcHMudml0aUFyZWEgJiYgcHJvcHMudml0aUFyZWFJZCAmJlxuICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgPGI+Vml0aWN1bHR1cmFsIGFyZWE6PC9iPiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYC92aXRpLWFyZWFzLyR7cHJvcHMudml0aUFyZWFJZH1gIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMudml0aUFyZWEgfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgcHJvcHMuZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICAgICAgICA8aDY+PGI+RGVzY3JpcHRpb246PC9iPiB7IHByb3BzLmRlc2NyaXB0aW9uIH08L2g2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgey8qIFRPRE86IEZsb2F0IGZvcm1hdHRpbmcgKi99XG4gICAgICAgICAgICB7IHByb3BzLnJhdGluZyAmJlxuICAgICAgICAgICAgICAgIDxoNj48Yj5SYXRpbmc6PC9iPiB7IHByb3BzLnJhdGluZyB9PC9oNj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgcHJvcHMubm90ZXMgJiZcbiAgICAgICAgICAgICAgICA8aDY+PGI+Tm90ZXM6PC9iPiB7IHByb3BzLm5vdGVzIH08L2g2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyBwcm9wcy53aHkgJiZcbiAgICAgICAgICAgICAgICA8aDY+PGI+V2h5OjwvYj4geyBwcm9wcy53aHkgfTwvaDY+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5XaW5lRGF0YS5kaXNwbGF5TmFtZSA9IFwiV2luZURhdGFcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JpZFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBuYW1lOiBzdHJpbmcgfCBudWxsO1xuICAgIHByb2R1Y2VyOiBzdHJpbmc7XG4gICAgcHJvZHVjZXJJZDogbnVtYmVyO1xuICAgIHJlZ2lvbjogc3RyaW5nO1xuICAgIHJlZ2lvbklkOiBudW1iZXI7XG4gICAgd2luZVR5cGU6IHN0cmluZztcbiAgICB3aW5lVHlwZUlkOiBudW1iZXI7XG4gICAgY2hpbGRyZW46IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IFdpbmVIZWFkZXI6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBzPXsgMTIgfT5cbiAgICAgICAgICAgICAgICA8TmFtZVR5cGUgeyAuLi5wcm9wcyB9IC8+XG4gICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYC9wcm9kdWNlcnMvJHtwcm9wcy5wcm9kdWNlcklkfWAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5wcm9kdWNlciB9XG4gICAgICAgICAgICAgICAgICAgIDwvYT4gb2YgPGEgaHJlZj17IGAvcmVnaW9ucy8ke3Byb3BzLnJlZ2lvbklkfWAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5yZWdpb24gfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgeyAuLi5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvUm93PlxuICAgICk7XG59O1xuV2luZUhlYWRlci5kaXNwbGF5TmFtZSA9IFwiV2luZUhlYWRlclwiO1xuXG5jb25zdCBOYW1lVHlwZTogUmVhY3QuRkM8e25hbWU6IHN0cmluZyB8IG51bGwsIHdpbmVUeXBlOiBzdHJpbmcsIHdpbmVUeXBlSWQ6IG51bWJlcn0+ID0gKHtuYW1lLCB3aW5lVHlwZSwgd2luZVR5cGVJZH0pID0+IHtcbiAgICBjb25zdCB3aW5lVHlwZUVsZW0gPSAoXG4gICAgICAgIDxhIGhyZWY9eyBgL3dpbmUtdHlwZXMvJHt3aW5lVHlwZUlkfS9gIH0+XG4gICAgICAgICAgICB7IHdpbmVUeXBlIH1cbiAgICAgICAgPC9hPlxuICAgICk7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgeyBuYW1lIH0geyB3aW5lVHlwZUVsZW0gfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIDxoMyBjbGFzc05hbWU9XCJib2xkXCI+eyB3aW5lVHlwZUVsZW0gfTwvaDM+O1xufVxuTmFtZVR5cGUuZGlzcGxheU5hbWUgPSBcIk5hbWVUeXBlXCI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFdpbmVJbWc6IFJlYWN0LkZDPElQcm9wcz4gPSAoe2lkfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGlkPVwid2luZS1pbWFnZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eyBgL21lZGlhLyR7IGlkIH0ucG5nYCB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIldpbmUgSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNwb25zaXZlLWltZ1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuV2luZUltZy5kaXNwbGF5TmFtZSA9IFwiV2luZUltZ1wiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmxvYXRpbmdCdG4gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25zXCI7XG5pbXBvcnQgeyBGaXhlZEFjdGlvbkxpc3QgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9GaXhlZEFjdGlvbkxpc3RcIjtcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWF0ZXJpYWxJY29uXCI7XG5pbXBvcnQgeyBEZWxldGVNb2RhbCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01vZGFsXCI7XG5pbXBvcnQgeyBQcmVsb2FkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QcmVsb2FkZXJcIjtcbmltcG9ydCB7IGluaXRQdXJjaGFzZUlucHV0RGF0YSwgSVB1cmNoYXNlRGF0YSwgcHVyY2hhc2VEYXRhVG9Gb3JtIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHVyY2hhc2VJbnB1dHNcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uLy4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElQdXJjaGFzZSB9IGZyb20gXCIuLi8uLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgY3JlYXRlUHVyY2hhc2UsIGRlbGV0ZVB1cmNoYXNlLCBnZXRQdXJjaGFzZXMsIGdldFdpbmUsIGdldFdpbmVHcmFwZXMsIHVwZGF0ZVB1cmNoYXNlLCB1cGRhdGVXaW5lIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0QXBpXCI7XG5pbXBvcnQgeyBpbWFnZUV4aXN0cyB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IEludmVudG9yeUNoYW5nZSB9IGZyb20gXCIuLi9pbnZlbnRvcnkvSW52ZW50b3J5VGFibGVcIjtcbmltcG9ydCB7IElXaW5lRGF0YSwgd2luZURhdGFUb0Zvcm0gfSBmcm9tIFwiLi4vbmV3X3dpbmUvV2luZUlucHV0c1wiO1xuaW1wb3J0IHsgRWRpdFdpbmUgfSBmcm9tIFwiLi9FZGl0V2luZVwiO1xuaW1wb3J0IHsgR3JhcGVzVGFibGUgfSBmcm9tIFwiLi9HcmFwZXNUYWJsZVwiO1xuaW1wb3J0IHsgTW9kaWZ5UHVyY2hhc2UgfSBmcm9tIFwiLi9Nb2RpZnlQdXJjaGFzZVwiO1xuaW1wb3J0IHsgUHVyY2hhc2VzIH0gZnJvbSBcIi4vUHVyY2hhc2VzXCI7XG5pbXBvcnQgeyBpbml0U3RhdGUsIHdpbmVSZWR1Y2VyIH0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCB7IFdpbmVEYXRhIH0gZnJvbSBcIi4vV2luZURhdGFcIjtcbmltcG9ydCB7IFdpbmVIZWFkZXIgfSBmcm9tIFwiLi9XaW5lSGVhZGVyXCI7XG5pbXBvcnQgeyBXaW5lSW1nIH0gZnJvbSBcIi4vV2luZUltZ1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgV2luZVByb2ZpbGVBcHA6IFJlYWN0LkZDPElQcm9wcz4gPSAoe2lkfSkgPT4ge1xuICAgIC8vIFNldHVwXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHdpbmVSZWR1Y2VyLCBpbml0U3RhdGUoKSk7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihXaW5lUHJvZmlsZUFwcC5uYW1lKTtcblxuICAgIC8vIERhdGEgZmV0Y2hlcnNcbiAgICBjb25zdCBmZXRjaFdpbmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpbmUgPSBhd2FpdCBnZXRXaW5lKHtpZH0pO1xuICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJzZXRXaW5lXCIsIHdpbmV9KTtcbiAgICB9XG4gICAgY29uc3QgZmV0Y2hQdXJjaGFzZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHB1cmNoYXNlcyA9IGF3YWl0IGdldFB1cmNoYXNlcyh7d2luZUlkOiBpZH0pO1xuICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJzZXRQdXJjaGFzZXNcIiwgcHVyY2hhc2VzfSk7XG4gICAgfVxuICAgIGNvbnN0IGZldGNoSGFzSW1hZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc0ltYWdlID0gYXdhaXQgaW1hZ2VFeGlzdHMoYC9tZWRpYS8ke2lkfS5wbmdgKTtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwic2V0SGFzSW1hZ2VcIiwgaGFzSW1hZ2V9KTtcbiAgICB9XG4gICAgY29uc3QgZmV0Y2hHcmFwZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyYXBlcyA9IGF3YWl0IGdldFdpbmVHcmFwZXMoe3dpbmVJZDogaWR9KTtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwic2V0R3JhcGVzXCIsIGdyYXBlc30pO1xuICAgIH1cbiAgICAvLyBGZXRjaEluaXRpYWxTdGF0ZVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBmZXRjaFdpbmUoKSxcbiAgICAgICAgICAgICAgICBmZXRjaFB1cmNoYXNlcygpLFxuICAgICAgICAgICAgICAgIGZldGNoSGFzSW1hZ2UoKSxcbiAgICAgICAgICAgICAgICBmZXRjaEdyYXBlcygpLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbaWRdKTtcblxuICAgIC8vIEV2ZW50IGhhbmRsZXJzXG4gICAgY29uc3Qgb25JbnZlbnRvcnlDaGFuZ2UgPSBhc3luYyAoaW52ZW50b3J5Q2hhbmdlOiBJbnZlbnRvcnlDaGFuZ2UpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlLndpbmUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcHkgPSBzdGF0ZS53aW5lO1xuICAgICAgICAgICAgaWYgKGludmVudG9yeUNoYW5nZSA9PSBJbnZlbnRvcnlDaGFuZ2UuSW5jcmVhc2UpIHtcbiAgICAgICAgICAgICAgICBjb3B5LmludmVudG9yeSArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb3B5LmludmVudG9yeSAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBpbmNsdWRlIGZpbGVcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5lID0gYXdhaXQgdXBkYXRlV2luZShpZCwgY29weSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwic2V0V2luZVwiLCB3aW5lfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ1dhcm5pbmcoYEZhaWxlZCB0byBjaGFuZ2UgaW52ZW50b3J5LiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uU3VibWl0V2luZUVkaXQgPSBhc3luYyAoZWRpdGVkV2luZTogSVdpbmVEYXRhKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gYXdhaXQgd2luZURhdGFUb0Zvcm0oZWRpdGVkV2luZSwgc3RhdGUud2luZT8uaW52ZW50b3J5ID8/IDApO1xuICAgICAgICAgICAgLy8gVE9ETzogaGFuZGxlIGZpbGUgZWRpdFxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFdpbmUgPSBhd2FpdCB1cGRhdGVXaW5lKGlkLCBmb3JtLCBudWxsKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcInNldFdpbmVcIiwgd2luZTogdXBkYXRlZFdpbmV9KTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcInNldE1vZGVcIiwgbW9kZToge3R5cGU6IFwiZGlzcGxheVwifX0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2dnZXIubG9nV2FybmluZyhgRmFpbGVkIHRvIHVwZGF0ZSB3aW5lLiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uU3VibWl0UHVyY2hhc2VFZGl0ID0gYXN5bmMgKHB1cmNoYXNlOiBJUHVyY2hhc2VEYXRhKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgcHVyY2hhc2VJZCA9IHN0YXRlLm1vZGUuaWQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gYXdhaXQgcHVyY2hhc2VEYXRhVG9Gb3JtKHB1cmNoYXNlLCBpZCk7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUHVyY2hhc2UgPSBhd2FpdCB1cGRhdGVQdXJjaGFzZShwdXJjaGFzZUlkLCBmb3JtKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcInNldFB1cmNoYXNlc1wiLCBwdXJjaGFzZXM6IHN0YXRlLnB1cmNoYXNlcy5tYXAoKHB1cmNoYXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHB1cmNoYXNlLmlkID09PSBwdXJjaGFzZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVkUHVyY2hhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwdXJjaGFzZTtcbiAgICAgICAgICAgIH0pfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nZ2VyLmxvZ1dhcm5pbmcoYEZhaWxlZCB0byB1cGRhdGUgcHVyY2hhc2U6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJzZXRNb2RlXCIsIG1vZGU6IHtcInR5cGVcIjogXCJkaXNwbGF5XCJ9fSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvbkRlbGV0ZVB1cmNoYXNlID0gYXN5bmMgKHB1cmNoYXNlSWQ6IG51bWJlcikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZGVsZXRlUHVyY2hhc2UocHVyY2hhc2VJZCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZ2dlci5sb2dXYXJuaW5nKGBFcnJvciBkZWxldGluZyBwdXJjaGFzZSB3aXRoIGlkOiAke3B1cmNoYXNlSWR9LiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcInNldE1vZGVcIiwgbW9kZToge1widHlwZVwiOiBcImRpc3BsYXlcIn19KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPRE86IGFkZCB0byBpbnZlbnRvcnlcbiAgICBjb25zdCBvblN1Ym1pdEFkZFB1cmNoYXNlID0gYXN5bmMgKHB1cmNoYXNlOiBJUHVyY2hhc2VEYXRhKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gYXdhaXQgcHVyY2hhc2VEYXRhVG9Gb3JtKHB1cmNoYXNlLCBpZCk7XG4gICAgICAgICAgICBjb25zdCBuZXdQdXJjaGFzZSA9IGF3YWl0IGNyZWF0ZVB1cmNoYXNlKGZvcm0pO1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwic2V0UHVyY2hhc2VzXCIsIHB1cmNoYXNlczogc3RhdGUucHVyY2hhc2VzLmNvbmNhdChbbmV3UHVyY2hhc2VdKX0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxvZ2dlci5sb2dXYXJuaW5nKGBGYWlsZWQgdG8gY3JlYXRlIG5ldyBwdXJjaGFzZTogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcInNldE1vZGVcIiwgbW9kZToge1widHlwZVwiOiBcImRpc3BsYXlcIn19KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbmRlciBoZWxwZXJzXG4gICAgY29uc3QgcmVuZGVyV2luZURhdGEgPSAoKSA9PiAoXG4gICAgICAgIDxXaW5lRGF0YVxuICAgICAgICAgICAgY29sb3I9eyBzdGF0ZS53aW5lIS5jb2xvciB9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17IHN0YXRlLndpbmUhLmRlc2NyaXB0aW9uIH1cbiAgICAgICAgICAgIGludmVudG9yeT17IHN0YXRlLndpbmUhLmludmVudG9yeSB9XG4gICAgICAgICAgICBvbkludmVudG9yeUNoYW5nZT17IChpYykgPT4gb25JbnZlbnRvcnlDaGFuZ2UoaWMpIH1cbiAgICAgICAgICAgIGxhc3RQdXJjaGFzZVZpbnRhZ2U9eyBzdGF0ZS53aW5lIS5sYXN0UHVyY2hhc2VWaW50YWdlIH1cbiAgICAgICAgICAgIG5vdGVzPXsgc3RhdGUud2luZSEubm90ZXMgfVxuICAgICAgICAgICAgcmF0aW5nPXsgc3RhdGUud2luZSEucmF0aW5nIH1cbiAgICAgICAgICAgIHZpdGlBcmVhPXsgc3RhdGUud2luZSEudml0aUFyZWEgfVxuICAgICAgICAgICAgdml0aUFyZWFJZD17IHN0YXRlLndpbmUhLnZpdGlBcmVhSWQgfVxuICAgICAgICAgICAgd2h5PXsgc3RhdGUud2luZSEud2h5IH1cbiAgICAgICAgLz5cbiAgICApO1xuXG4gICAgY29uc3QgcmVuZGVyV2luZURldGFpbHMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNJbWFnZSAmJiBzdGF0ZS5ncmFwZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgcz17IDEyIH0gbD17IDQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVuZGVyV2luZURhdGEoKSB9XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHM9eyAxMiB9IGw9eyA0IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlbmRlckdyYXBlcygpIH1cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgcz17IDEyIH0gbD17IDQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVuZGVyV2luZUltZygpIH1cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5oYXNJbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHM9eyAxMiB9IGw9eyA2IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlbmRlcldpbmVEYXRhKCkgfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBzPXsgMTIgfSBsPXsgNiB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyByZW5kZXJXaW5lSW1nKCkgfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLmdyYXBlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBzPXsgMTIgfSBsPXsgNiB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyByZW5kZXJXaW5lRGF0YSgpIH1cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgcz17IDEyIH0gbD17IDYgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVuZGVyR3JhcGVzKCkgfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICAgICAgeyByZW5kZXJXaW5lRGF0YSgpIH1cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckdyYXBlcyA9ICgpID0+IDxHcmFwZXNUYWJsZSBncmFwZXM9eyBzdGF0ZS5ncmFwZXMgfSAvPjtcbiAgICBjb25zdCByZW5kZXJXaW5lSW1nID0gKCkgPT4gPFdpbmVJbWcgaWQ9eyBpZCB9IC8+O1xuXG4gICAgLy8gRGlzcGxheXMgcmVsZXZhbnQgbW9kYWwgZm9yIGVkaXRpbmcvZGVsZXRpbmdcbiAgICBjb25zdCByZW5kZXJNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlLm1vZGUudHlwZSA9PT0gXCJlZGl0V2luZVwiKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUud2luZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxFZGl0V2luZSB3aW5lPXsgc3RhdGUud2luZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17IG9uU3VibWl0V2luZUVkaXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eyAoKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRNb2RlXCIsIG1vZGU6IHt0eXBlOiBcImRpc3BsYXlcIn19KSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5tb2RlLnR5cGUgPT09IFwiZWRpdFB1cmNoYXNlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHB1cmNoYXNlSWQgPSBzdGF0ZS5tb2RlLmlkO1xuICAgICAgICAgICAgY29uc3QgcHVyY2hhc2UgPSBzdGF0ZS5wdXJjaGFzZXMuZmluZCgocCkgPT4gcC5pZCA9PT0gcHVyY2hhc2VJZCk7XG4gICAgICAgICAgICBpZiAocHVyY2hhc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TW9kaWZ5UHVyY2hhc2UgdGl0bGU9XCJFZGl0IHB1cmNoYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlPXsgcHVyY2hhc2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eyAoKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRNb2RlXCIsIG1vZGU6IHt0eXBlOiBcImRpc3BsYXlcIn19KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17IG9uU3VibWl0UHVyY2hhc2VFZGl0IH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUubW9kZS50eXBlID09PSBcImRlbGV0ZVB1cmNoYXNlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHB1cmNoYXNlSWQgPSBzdGF0ZS5tb2RlLmlkO1xuICAgICAgICAgICAgY29uc3QgcHVyY2hhc2UgPSBzdGF0ZS5wdXJjaGFzZXMuZmluZCgocCkgPT4gcC5pZCA9PT0gcHVyY2hhc2VJZCk7XG4gICAgICAgICAgICBpZiAocHVyY2hhc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RGVsZXRlTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09XCJQdXJjaGFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvblllc0NsaWNrPXsgKCkgPT4gb25EZWxldGVQdXJjaGFzZShwdXJjaGFzZUlkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk5vQ2xpY2s9eyAoKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRNb2RlXCIsIG1vZGU6IHt0eXBlOiBcImRpc3BsYXlcIn19KSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUubW9kZS50eXBlID09PSBcImFkZFB1cmNoYXNlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1B1cmNoYXNlRGF0YSA9IGluaXRQdXJjaGFzZUlucHV0RGF0YSgpO1xuICAgICAgICAgICAgY29uc3QgbmV3UHVyY2hhc2U6IElQdXJjaGFzZSA9IHtcbiAgICAgICAgICAgICAgICAuLi5uZXdQdXJjaGFzZURhdGEsXG4gICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgd2luZUlkOiBpZCxcbiAgICAgICAgICAgICAgICBzdG9yZUlkOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE1vZGlmeVB1cmNoYXNlIHRpdGxlPVwiQWRkIHB1cmNoYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2U9eyBuZXdQdXJjaGFzZSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsgKCkgPT4gZGlzcGF0Y2goe3R5cGU6IFwic2V0TW9kZVwiLCBtb2RlOiB7dHlwZTogXCJkaXNwbGF5XCJ9fSkgfVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17IG9uU3VibWl0QWRkUHVyY2hhc2UgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLndpbmUpIHtcbiAgICAgICAgcmV0dXJuIDxQcmVsb2FkZXIgLz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8V2luZUhlYWRlclxuICAgICAgICAgICAgICAgIG5hbWU9eyBzdGF0ZS53aW5lLm5hbWUgfVxuICAgICAgICAgICAgICAgIHByb2R1Y2VyPXsgc3RhdGUud2luZS5wcm9kdWNlciB9XG4gICAgICAgICAgICAgICAgcHJvZHVjZXJJZD17IHN0YXRlLndpbmUucHJvZHVjZXJJZCB9XG4gICAgICAgICAgICAgICAgcmVnaW9uPXsgc3RhdGUud2luZS5yZWdpb24gfVxuICAgICAgICAgICAgICAgIHJlZ2lvbklkPXsgc3RhdGUud2luZS5yZWdpb25JZCB9XG4gICAgICAgICAgICAgICAgd2luZVR5cGU9eyBzdGF0ZS53aW5lLndpbmVUeXBlIH1cbiAgICAgICAgICAgICAgICB3aW5lVHlwZUlkPXsgc3RhdGUud2luZS53aW5lVHlwZUlkIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7IHJlbmRlcldpbmVEZXRhaWxzKCkgfVxuICAgICAgICAgICAgPC9XaW5lSGVhZGVyPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sIHM9eyAxMiB9IG09eyA5IH0+XG4gICAgICAgICAgICAgICAgICAgIDxoND5QdXJjaGFzZXM8L2g0PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgcz17IDEyIH0gbT17IDMgfSBjbGFzc2VzPXsgW1wiZml4ZWQtYWN0aW9uLWRpdlwiXSB9PlxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWRBY3Rpb25MaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nQnRuIG9uQ2xpY2s9eyAoKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRNb2RlXCIsIG1vZGU6IHt0eXBlOiBcImFkZFB1cmNoYXNlXCJ9fSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9eyBbXCJncmVlbi1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImFkZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nQnRuIG9uQ2xpY2s9eyAoKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRNb2RlXCIsIG1vZGU6IHt0eXBlOiBcImVkaXRXaW5lXCJ9fSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9eyBbXCJ5ZWxsb3ctYmdcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJlZGl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdCdG4gb25DbGljaz17ICgpID0+IGRpc3BhdGNoKHt0eXBlOiBcInNldE1vZGVcIiwgbW9kZToge3R5cGU6IFwiZGVsZXRlV2luZVwifX0pIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXsgW1wicmVkLWJnXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwiZGVsZXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICAgICAgICAgIDwvRml4ZWRBY3Rpb25MaXN0PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICAgICAgICAgIDxQdXJjaGFzZXMgcHVyY2hhc2VzPXsgc3RhdGUucHVyY2hhc2VzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRWRpdENsaWNrPXsgKGlkKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRNb2RlXCIsIG1vZGU6IHt0eXBlOiBcImVkaXRQdXJjaGFzZVwiLCBpZH19KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZUNsaWNrPXsgKGlkKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRNb2RlXCIsIG1vZGU6IHt0eXBlOiBcImRlbGV0ZVB1cmNoYXNlXCIsIGlkfX0pIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgeyByZW5kZXJNb2RhbCgpIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbldpbmVQcm9maWxlQXBwLmRpc3BsYXlOYW1lID0gXCJXaW5lUHJvZmlsZUFwcFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSVB1cmNoYXNlLCBJV2luZSwgSVdpbmVHcmFwZSB9IGZyb20gXCIuLi8uLi9saWIvUmVzdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgbW9kZTogTW9kZTtcbiAgICBoYXNJbWFnZTogYm9vbGVhbjtcbiAgICBncmFwZXM6IElXaW5lR3JhcGVbXTtcbiAgICB3aW5lPzogSVdpbmU7XG4gICAgcHVyY2hhc2VzOiBJUHVyY2hhc2VbXTtcbn1cblxuLyoqXG4gKiBTdGF0ZSBtYWNoaW5lIGZvciBwcm9maWxlIGFwcFxuICovXG5leHBvcnQgdHlwZSBNb2RlID1cbiAgICB8IHt0eXBlOiBcImRpc3BsYXlcIn1cbiAgICB8IHt0eXBlOiBcImVkaXRXaW5lXCJ9XG4gICAgfCB7dHlwZTogXCJkZWxldGVXaW5lXCJ9XG4gICAgfCB7dHlwZTogXCJlZGl0UHVyY2hhc2VcIiwgaWQ6IG51bWJlcn1cbiAgICB8IHt0eXBlOiBcImRlbGV0ZVB1cmNoYXNlXCIsIGlkOiBudW1iZXJ9XG4gICAgfCB7dHlwZTogXCJhZGRQdXJjaGFzZVwifTtcblxuZXhwb3J0IGNvbnN0IGluaXRTdGF0ZSA9ICgpOiBJU3RhdGUgPT4gKHtcbiAgICBtb2RlOiB7dHlwZTogXCJkaXNwbGF5XCJ9LFxuICAgIGhhc0ltYWdlOiBmYWxzZSxcbiAgICBncmFwZXM6IFtdLFxuICAgIHdpbmU6IHVuZGVmaW5lZCxcbiAgICBwdXJjaGFzZXM6IFtdLFxufSk7XG5cbmV4cG9ydCB0eXBlIEFjdGlvbiA9XG4gICAgfCB7dHlwZTogXCJzZXRNb2RlXCIsIG1vZGU6IE1vZGV9XG4gICAgfCB7dHlwZTogXCJzZXRIYXNJbWFnZVwiLCBoYXNJbWFnZTogYm9vbGVhbn1cbiAgICB8IHt0eXBlOiBcInNldEdyYXBlc1wiLCBncmFwZXM6IElXaW5lR3JhcGVbXX1cbiAgICB8IHt0eXBlOiBcInNldFdpbmVcIiwgd2luZTogSVdpbmV9XG4gICAgfCB7dHlwZTogXCJzZXRQdXJjaGFzZXNcIiwgcHVyY2hhc2VzOiBJUHVyY2hhc2VbXX07XG5cbmV4cG9ydCBjb25zdCB3aW5lUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxJU3RhdGUsIEFjdGlvbj4gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInNldE1vZGVcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG1vZGU6IGFjdGlvbi5tb2RlfTtcbiAgICAgICAgY2FzZSBcInNldEhhc0ltYWdlXCI6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNJbWFnZTogYWN0aW9uLmhhc0ltYWdlfTtcbiAgICAgICAgY2FzZSBcInNldEdyYXBlc1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZ3JhcGVzOiBhY3Rpb24uZ3JhcGVzfTtcbiAgICAgICAgY2FzZSBcInNldFdpbmVcIjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHdpbmU6IGFjdGlvbi53aW5lfTtcbiAgICAgICAgY2FzZSBcInNldFB1cmNoYXNlc1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcHVyY2hhc2VzOiBhY3Rpb24ucHVyY2hhc2VzfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgb25Mb2FkIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcIi4uLy4uL2xpYi93aWRnZXRzXCI7XG5pbXBvcnQgeyBXaW5lUHJvZmlsZUFwcCB9IGZyb20gXCIuL1dpbmVQcm9maWxlQXBwXCI7XG5cbmRlY2xhcmUgY29uc3QgaWQ6IG51bWJlcjtcblxub25Mb2FkKCgpID0+IHtcbiAgICBuYXZiYXIoKTtcbiAgICByZW5kZXIoY3JlYXRlRWxlbWVudChXaW5lUHJvZmlsZUFwcCwge2lkfSksXG4gICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZV9wcm9maWxlLWNvbnRhaW5lclwiKSk7XG59KTtcbiIsImltcG9ydCB7IHJlYWRDb29raWUgfSBmcm9tIFwiLi9Db29raWVzXCI7XG5pbXBvcnQgeyBJRGljdCwgaXNFbXB0eSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IEhFQURFUlMgPSB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJYLUNTUkZUb2tlblwiOiByZWFkQ29va2llKFwiY3NyZnRva2VuXCIpIHx8IFwiXCIsXG59O1xuXG5leHBvcnQgdHlwZSBJUXVlcnlQYXJhbXMgPSBJRGljdDxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPjtcblxuZnVuY3Rpb24gZW5jb2RlUGFyYW1zKHBhcmFtczogSVF1ZXJ5UGFyYW1zKTogc3RyaW5nIHtcbiAgICBpZiAoaXNFbXB0eShwYXJhbXMpKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gXCI/XCIgKyBPYmplY3QuZW50cmllcyhwYXJhbXMpLm1hcCgoW2ssIHZdKSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoayl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHYpfWApLmpvaW4oXCImXCIpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVKc29uKG9iajogb2JqZWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVjb2RlSnNvbklmQW55KHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIGlmIChwYXJzZUZsb2F0KHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC1sZW5ndGhcIikgPz8gXCIwXCIpID4gMFxuICAgICAgICAmJiByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG59XG5cbnR5cGUgVmlub3RlY2FFcnJvciA9XG4gICAgfCB7XCJOb3RGb3VuZFwiOiBzdHJpbmd9XG4gICAgfCB7XCJJbnRlcm5hbFwiOiBzdHJpbmd9XG4gICAgfCB7XCJNaXNzaW5nQ29uc3RyYWludFwiOiBzdHJpbmd9XG4gICAgfCB7XCJCYWRSZXF1ZXN0XCI6IHN0cmluZ307XG5cbmZ1bmN0aW9uIGlzVmlub3RlY2FFcnJvcihvYmo6IG9iamVjdCk6IG9iaiBpcyBWaW5vdGVjYUVycm9yIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICByZXR1cm4ga2V5cy5sZW5ndGggPT09IDFcbiAgICAgICAgJiYgW1wiTm90Rm91bmRcIiwgXCJJbnRlcm5hbFwiLCBcIk1pc3NpbmdDb25zdHJhaW50XCIsIFwiQmFkUmVxdWVzdFwiXVxuICAgICAgICAgICAgLmZpbmQoKGkpID0+IGkgPT09IGtleXNbMF0pICE9PSB1bmRlZmluZWQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrUmVzcG9uc2UocmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID4gMzEwKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBkZWNvZGVKc29uSWZBbnkocmVzcG9uc2UpO1xuICAgICAgICBpZiAoaXNWaW5vdGVjYUVycm9yKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgJHtPYmplY3Qua2V5cyhtZXNzYWdlKVswXX06ICR7T2JqZWN0LnZhbHVlcyhtZXNzYWdlKVswXX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZUpzb25JZkFueShyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IEVycm9yKGF3YWl0IHJlc3BvbnNlLnRleHQoKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgR0VUIHJlcXVlc3QgdG8gdGhlIHVybCB3aXRoIHRoZSBvcHRpb25hbCBwYXJhbWV0ZXJzLCB0aGVuIHBhcnNlc1xuICogdGhlIEpTT04gcmVzcG9uc2UuXG4gKiBAcGFyYW0gdXJsIEEgVVJMIHRvIHJlcXVlc3RcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb3B0aW9uYWwgZGljdGlvbmFyeSBvZiBwYXJhbWV0ZXJzIHRvIHRoZWlyIHZhbHVlc1xuICogQHJldHVybnMgcGFyc2VkIEpTT04gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgUE9TVCByZXF1ZXN0IHRvIHRoZSB1cmwgd2l0aCB0aGUgb3B0aW9uYWwgcGFyYW1ldGVycyBjb250YWluaW5nXG4gKiB0aGUgYm9keSwgdGhlbiBwYXJzZXMgdGhlIEpTT04gcmVzcG9uc2UuXG4gKiBAcGFyYW0gdXJsIEEgVVJMIHRvIHJlcXVlc3RcbiAqIEBwYXJhbSBib2R5IEpTT04gb2JqZWN0IHRvIGVuY29kZSBhbmQgc2VuZCB0byB0aGUgc2VydmVyXG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9wdGlvbmFsIGRpY3Rpb25hcnkgb2YgcGFyYW1ldGVycyB0byB0aGVpciB2YWx1ZXNcbiAqIEByZXR1cm5zIHBhcnNlZCBKU09OIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0PFJlc3BvbnNlPih1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGVuY29kZUpzb24oYm9keSksXG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdEZvcm08UmVzcG9uc2U+KHVybDogc3RyaW5nLCBmb3JtOiBGb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGZvcm0sXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgUFVUIHJlcXVlc3QgdG8gdGhlIHVybCB3aXRoIHRoZSBvcHRpb25hbCBwYXJhbWV0ZXJzIGNvbnRhaW5pbmdcbiAqIHRoZSBib2R5LCB0aGVuIHBhcnNlcyB0aGUgSlNPTiByZXNwb25zZS5cbiAqIEBwYXJhbSB1cmwgQSBVUkwgdG8gcmVxdWVzdFxuICogQHBhcmFtIGJvZHkgSlNPTiBvYmplY3QgdG8gZW5jb2RlIGFuZCBzZW5kIHRvIHRoZSBzZXJ2ZXJcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb3B0aW9uYWwgZGljdGlvbmFyeSBvZiBwYXJhbWV0ZXJzIGFuZCB0aGVpciB2YWx1ZXNcbiAqIEByZXR1cm5zIHBhcnNlZCBKU09OIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXQ8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBib2R5OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZW5jb2RlSnNvbihib2R5KSxcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dEZvcm08UmVzcG9uc2U+KHVybDogc3RyaW5nLCBmb3JtOiBGb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZm9ybSxcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhdGNoPFJlc3BvbnNlPih1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcz0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBlbmNvZGVKc29uKGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVfPFJlc3BvbnNlPih1cmw6IHN0cmluZywgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG4iLCJjb25zdCBNSUxMSVNFQ09ORFNfSU5fREFZID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBDcmVhdGUgb3IgdXBkYXRlIGEgY29va2llXG4gKiBAcGFyYW0gbmFtZSBuYW1lL2tleSBvZiB0aGUgY29va2llXG4gKiBAcGFyYW0gdmFsdWUgdmFsdWUgdG8gc3RvcmVcbiAqIEBwYXJhbSBkYXlzIG51bWJlciBvZiBkYXlzIHRoZSBjb29raWUgaXMgdmFsaWQsIGRlZmF1bHRzIHRvIHRoZSBjdXJyZW50IHNlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGRheXM/OiBudW1iZXIpIHtcbiAgICBsZXQgZXhwaXJlcztcbiAgICBpZiAoZGF5cykge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiBNSUxMSVNFQ09ORFNfSU5fREFZKSk7XG4gICAgICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBleHBpcmVzID0gXCJcIjtcbiAgICB9XG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZENvb2tpZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcbiAgICBmb3IgKGxldCBjIG9mIGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikpIHtcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSBcIiBcIikge1xuICAgICAgICAgICAgYyA9IGMuc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyKG5hbWVFUS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29va2llKG5hbWU6IHN0cmluZykge1xuICAgIGNyZWF0ZUNvb2tpZShuYW1lLCBcIlwiLCAtMSk7XG59XG4iLCJpbXBvcnQgeyBwb3N0IH0gZnJvbSBcIi4vQXBpSGVscGVyXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCIuL3dpZGdldHNcIjtcblxuLyoqIFByb3ZpZGVzIGxvZ2dpbmcgZnVuY3Rpb25hbGl0eSBmb3IgY2xpZW50LXNpZGUgSmF2YVNjcmlwdCBlcnJvcnMuICovXG5lbnVtIExvZ0xldmVsIHtcbiAgICBDcml0aWNhbCA9IFwiY3JpdGljYWxcIixcbiAgICBFcnJvciA9IFwiZXJyb3JcIixcbiAgICBXYXJuaW5nID0gXCJ3YXJuaW5nXCIsXG4gICAgSW5mbyA9IFwiaW5mb1wiLFxuICAgIERlYnVnID0gXCJkZWJ1Z1wiLFxufVxuXG5pbnRlcmZhY2UgSUxvZ1Jlc3VsdCB7XG4gICAgc3VjY2VzczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcbiAgICAvKipcbiAgICAgKiBMb2dnaW5nIGNsYXNzIGZvciBjbGllbnQtc2lkZSBlcnJvcnMgdGhhdCB3aWxsIGJlIHBvc3RlZCB0byB0aGUgc2VydmVyXG4gICAgICogZm9yIGxvZ2dpbmcgdG8gdGhlIHNhbWUgZmlsZSBhcyBhbGwgb3RoZXIgdmlub3RlY2EgbG9ncy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtb2R1bGUgdGhlIG5hbWUgb2YgdGhlIG1vZHVsZSBmcm9tIHdoaWNoIHRoZSBsb2cgbWVzc2FnZXMgb3JpZ2luYXRlLlxuICAgICAqIEBwYXJhbSB0b0NvbnNvbGUgd2hldGhlciB0byBhbHNvIHByaW50IG1lc3NhZ2VzIHRvIHRoZSBjb25zb2xlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2R1bGU6IHN0cmluZywgcHJpdmF0ZSB0b0NvbnNvbGUgPSBmYWxzZSkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lYW50IGZvciBpcnJlY292ZXJhYmxlIG9yIHRydWx5IGV4Y2VwdGlvbmFsIGVycm9ycy4gQSB0b2FzdCB3aXRoIHRoZVxuICAgICAqIGxvZyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgbG9nIHdpbGwgYmUgc2VudCBiYWNrIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBmb3IgcG9zdGVyaXR5LlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dDcml0aWNhbChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBMb2dMZXZlbC5Dcml0aWNhbDtcbiAgICAgICAgdGhpcy50b2FzdChsZXZlbCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSB0b2FzdCB3aXRoIHRoZSBsb2cgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIGxvZyB3aWxsIGJlIHNlbnRcbiAgICAgKiBiYWNrIHRvIHRoZSBzZXJ2ZXIgZm9yIHBvc3Rlcml0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nRXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gTG9nTGV2ZWwuRXJyb3I7XG4gICAgICAgIHRoaXMudG9hc3QobGV2ZWwsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgdG9hc3Qgd2l0aCB0aGUgbG9nIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSBsb2cgd2lsbCBiZSBzZW50XG4gICAgICogYmFjayB0byB0aGUgc2VydmVyIGZvciBwb3N0ZXJpdHkuXG4gICAgICovXG4gICAgcHVibGljIGxvZ1dhcm5pbmcobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gTG9nTGV2ZWwuV2FybmluZztcbiAgICAgICAgdGhpcy50b2FzdChsZXZlbCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ0luZm8obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhMb2dMZXZlbC5JbmZvLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nRGVidWcobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhMb2dMZXZlbC5EZWJ1ZywgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2cobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMudG9Db25zb2xlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtsZXZlbC50b1VwcGVyQ2FzZSgpfSAke25ldyBEYXRlKCl9ICR7dGhpcy5tb2R1bGV9OiAke21lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IElMb2dSZXN1bHQgPSBhd2FpdCBwb3N0KFwiL3Jlc3QvbG9nc1wiLCB7XG4gICAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgaW5zdGFuY2VvZiBPYmplY3QgPyBcIlwiIDogbWVzc2FnZSxcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5tb2R1bGUsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3QoTG9nTGV2ZWwuRXJyb3IsIFwiRmFpbGVkIHRvIHNlbmQgY2xpZW50LXNpZGUgbG9ncyB0byBzZXJ2ZXIuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2FzdChsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0b2FzdChgJHtsZXZlbC50b1VwcGVyQ2FzZSgpfTogJHttZXNzYWdlfWApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGRlbGV0ZV8sIGdldCwgSVF1ZXJ5UGFyYW1zLCBwYXRjaCwgcG9zdCwgcG9zdEZvcm0sIHB1dCwgcHV0Rm9ybSB9IGZyb20gXCIuL0FwaUhlbHBlclwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7IElDb2xvciwgSUdyYXBlLCBJR3JhcGVGb3JtLCBJTW9zdENvbW1vblB1cmNoYXNlRGF0ZSwgSVByb2R1Y2VyLCBJUHJvZHVjZXJGb3JtLCBJUHVyY2hhc2UsXG4gICAgICAgICBJUHVyY2hhc2VDb3VudCwgSVB1cmNoYXNlRm9ybSwgSVJlZ2lvbiwgSVJlZ2lvbkZvcm0sIElTdG9yZSwgSVN0b3JlRm9ybSwgSVRvcEVudGl0eSxcbiAgICAgICAgIElUb3RhbExpdGVycywgSVZpdGlBcmVhLCBJVml0aUFyZWFGb3JtLCBJVml0aUFyZWFTdGF0cywgSVdpbmUsIElXaW5lQ291bnQsIElXaW5lRm9ybSxcbiAgICAgICAgIElXaW5lR3JhcGUsIElXaW5lR3JhcGVzRm9ybSwgSVdpbmVQYXRjaEZvcm0sIElXaW5lVHlwZSwgSVdpbmVUeXBlRm9ybSB9IGZyb20gXCIuL1Jlc3RcIjtcbmltcG9ydCB7IElSZXN0TW9kZWwgfSBmcm9tIFwiLi9SZXN0VHlwZXNcIjtcbmltcG9ydCB7IElEaWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGljdChtb2RlbHM6IElSZXN0TW9kZWxbXSk6IElEaWN0PHN0cmluZyB8IG51bGw+IHtcbiAgICBjb25zdCByZXN1bHQ6IElEaWN0PHN0cmluZyB8IG51bGw+ID0ge307XG4gICAgbW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICAgIHJlc3VsdFttb2RlbC5uYW1lXSA9IG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNsYXNzIEVtcHR5UmVzdWx0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgcHVibGljIHN0YXRpYyBpc0luc3RhbmNlKGVycjogRXJyb3IpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGVyci5uYW1lID09PSB0aGlzLk5BTUU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgTkFNRSA9IFwiRW1wdHlSZXN1bHRFcnJvclwiO1xuXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBFbXB0eVJlc3VsdEVycm9yLk5BTUU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub25OdWxscyhvYmo6IElEaWN0PHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCB1bmRlZmluZWQ+KTogSVF1ZXJ5UGFyYW1zIHtcbiAgICBjb25zdCBxOiBJUXVlcnlQYXJhbXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoaykgPT4gQm9vbGVhbihvYmpba10pKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIHFba10gPSBvYmpba10gYXMgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcbiAgICB9KTtcbiAgICByZXR1cm4gcTtcbn1cblxuZnVuY3Rpb24gc2luZ2xlRW50aXR5R2V0dGVyPFBhcmFtcywgUmVzcD4oXG4gICAgbGlzdEdldHRlcjogKHBhcmFtczogUGFyYW1zKSA9PiBQcm9taXNlPFJlc3BbXT4sXG4pOiAocGFyYW1zOiBQYXJhbXMpID0+IFByb21pc2U8UmVzcD4ge1xuICAgIC8vIFNoYXZlIG9mZiAnZ2V0J1xuICAgIGNvbnN0IG9iak5hbWUgPSBsaXN0R2V0dGVyLm5hbWUuc3Vic3RyKDMpO1xuICAgIHJldHVybiBhc3luYyAocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGxpc3RHZXR0ZXIocGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBSZWNlaXZlZCBtb3JlIHRoYW4gb25lICR7b2JqTmFtZX0gcmVzdWx0IHdoZW4gb25lIHdhcyBleHBlY3RlZGA7XG4gICAgICAgICAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKFwiUmVzdEFwaVwiKTtcbiAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgIHRocm93IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlPFJlcVBhcmFtcywgUmVzcCwgRm9ybT4oXG4gICAgbGlzdEdldHRlcjogKHBhcmFtczogUmVxUGFyYW1zKSA9PiBQcm9taXNlPFJlc3BbXT4sXG4gICAgY3JlYXRvcjogKGZvcm06IEZvcm0pID0+IFByb21pc2U8UmVzcD4sXG4pOiAocGFyYW1zOiBSZXFQYXJhbXMsIGZvcm06IEZvcm0pID0+IFByb21pc2U8UmVzcD4ge1xuICAgIGNvbnN0IG9iak5hbWUgPSBsaXN0R2V0dGVyLm5hbWUuc3Vic3RyKDMpO1xuICAgIHJldHVybiBhc3luYyAocGFyYW1zLCBmb3JtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBsaXN0R2V0dGVyKHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbmV3T2JqID0gYXdhaXQgY3JlYXRvcihmb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgUmVjZWl2ZWQgbW9yZSB0aGFuIG9uZSAke29iak5hbWV9IHJlc3VsdCB3aGVuIG9uZSB3YXMgZXhwZWN0ZWRgO1xuICAgICAgICBuZXcgTG9nZ2VyKFwiUmVzdEFwaVwiKS5sb2dFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgdGhyb3cgRXJyb3IobWVzc2FnZSk7XG4gICAgfTtcbn1cblxuLyogQ09MT1JTICovXG5pbnRlcmZhY2UgSUdldENvbG9yUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29sb3JzKHsgaWQsIG5hbWUgfTogSUdldENvbG9yUGFyYW1zKTogUHJvbWlzZTxJQ29sb3JbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lIH0pO1xuICAgIGNvbnN0IGNvbG9yczogSUNvbG9yW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9jb2xvcnNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgaWYgKGNvbG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVtcHR5UmVzdWx0RXJyb3IoXCJFbXB0eSByZXN1bHQgcmV0dXJuZWQgZm9yIGNvbG9yXCIpO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3JzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q29sb3IgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0Q29sb3JzKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcENvbG9ycygpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9jb2xvcnMvdG9wXCIpO1xufVxuXG4vKiBHUkFQRVMgKi9cbmludGVyZmFjZSBJR2V0R3JhcGVzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R3JhcGVzKHsgaWQsIG5hbWUgfTogSUdldEdyYXBlc1BhcmFtcyk6IFByb21pc2U8SUdyYXBlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSB9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvZ3JhcGVzXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0R3JhcGUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0R3JhcGVzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZUdyYXBlID0gZ2V0T3JDcmVhdGUoZ2V0R3JhcGVzLCBjcmVhdGVHcmFwZSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcmFwZShncmFwZTogSUdyYXBlRm9ybSk6IFByb21pc2U8SUdyYXBlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9ncmFwZXNcIiwgZ3JhcGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR3JhcGUoaWQ6IG51bWJlciwgZ3JhcGU6IElHcmFwZUZvcm0pOiBQcm9taXNlPElHcmFwZT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L2dyYXBlcy8ke2lkfWAsIGdyYXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcEdyYXBlcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9ncmFwZXMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBQUk9EVUNFUlMgKi9cbmludGVyZmFjZSBJR2V0UHJvZHVjZXJzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHJlZ2lvbklkPzogbnVtYmVyO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmUtbGVuZ3RoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjZXJzKHtpZCwgbmFtZSwgcmVnaW9uSWR9OiBJR2V0UHJvZHVjZXJzUGFyYW1zKTogUHJvbWlzZTxJUHJvZHVjZXJbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7aWQsIG5hbWUsIHJlZ2lvbl9pZDogcmVnaW9uSWR9KTtcbiAgICBjb25zdCBwcm9kdWNlcnM6IElQcm9kdWNlcltdID0gYXdhaXQgZ2V0KFwiL3Jlc3QvcHJvZHVjZXJzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiBwcm9kdWNlcnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWNlciA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRQcm9kdWNlcnMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlUHJvZHVjZXIgPSBnZXRPckNyZWF0ZShnZXRQcm9kdWNlcnMsIGNyZWF0ZVByb2R1Y2VyKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y2VyKHByb2R1Y2VyOiBJUHJvZHVjZXJGb3JtKTogUHJvbWlzZTxJUHJvZHVjZXI+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3Byb2R1Y2Vyc1wiLCBwcm9kdWNlcik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWNlcihwcm9kdWNlcjogSVByb2R1Y2VyKTogUHJvbWlzZTxJUHJvZHVjZXI+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9wcm9kdWNlcnMvJHtwcm9kdWNlci5pZH1gLCBwcm9kdWNlcik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWNlcihpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGRlbGV0ZV8oYC9yZXN0L3Byb2R1Y2Vycy8ke2lkfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wUHJvZHVjZXJzKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3Byb2R1Y2Vycy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFBVUkNIQVNFUyAqL1xuaW50ZXJmYWNlIElHZXRQdXJjaGFzZXNQYXJhbXMge1xuICAgIHdpbmVJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFB1cmNoYXNlcyh7d2luZUlkfTogSUdldFB1cmNoYXNlc1BhcmFtcyk6IFByb21pc2U8SVB1cmNoYXNlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyB3aW5lX2lkOiB3aW5lSWQgfSk7XG4gICAgY29uc3QgcHVyY2hhc2VzID0gYXdhaXQgZ2V0PElQdXJjaGFzZVtdPihcIi9yZXN0L3B1cmNoYXNlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gcHVyY2hhc2VzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2UocHVyY2hhc2U6IElQdXJjaGFzZUZvcm0pOiBQcm9taXNlPElQdXJjaGFzZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvcHVyY2hhc2VzXCIsIHB1cmNoYXNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVB1cmNoYXNlKGlkOiBudW1iZXIsIHB1cmNoYXNlOiBJUHVyY2hhc2VGb3JtKTogUHJvbWlzZTxJUHVyY2hhc2U+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9wdXJjaGFzZXMvJHtpZH1gLCBwdXJjaGFzZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQdXJjaGFzZShpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGRlbGV0ZV8oYC9yZXN0L3B1cmNoYXNlcy8ke2lkfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9zdENvbW1vblB1cmNoYXNlRGF0ZSgpOiBQcm9taXNlPElNb3N0Q29tbW9uUHVyY2hhc2VEYXRlPiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3B1cmNoYXNlcy9tb3N0LWNvbW1vbi1wdXJjaGFzZS1kYXRlXCIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG90YWxMaXRlcnMoKTogUHJvbWlzZTxJVG90YWxMaXRlcnM+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHVyY2hhc2VzL3RvdGFsLWxpdGVyc1wiKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFB1cmNoYXNlQ291bnQoKTogUHJvbWlzZTxJUHVyY2hhc2VDb3VudD4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wdXJjaGFzZXMvY291bnRcIik7XG59XG5cbi8qIFJFR0lPTlMgKi9cbmludGVyZmFjZSBJR2V0UmVnaW9uUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHByb2R1Y2VyTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlZ2lvbnMoeyBpZCwgbmFtZSwgcHJvZHVjZXJOYW1lIH06IElHZXRSZWdpb25QYXJhbXMpOiBQcm9taXNlPElSZWdpb25bXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lLCBwcm9kdWNlcl9uYW1lOiBwcm9kdWNlck5hbWUgfSk7XG4gICAgY29uc3QgcmVnaW9uczogSVJlZ2lvbltdID0gYXdhaXQgZ2V0KFwiL3Jlc3QvcmVnaW9uc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gcmVnaW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlZ2lvbiA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRSZWdpb25zKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVJlZ2lvbiA9IGdldE9yQ3JlYXRlKGdldFJlZ2lvbnMsIGNyZWF0ZVJlZ2lvbik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZWdpb24ocmVnaW9uOiBJUmVnaW9uRm9ybSk6IFByb21pc2U8SVJlZ2lvbj4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvcmVnaW9uc1wiLCByZWdpb24pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVnaW9uKHJlZ2lvbjogSVJlZ2lvbik6IFByb21pc2U8SVJlZ2lvbj4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3JlZ2lvbnMvJHtyZWdpb24uaWR9YCwgcmVnaW9uKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFJlZ2lvbnMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcmVnaW9ucy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFNUT1JFUyAqL1xuaW50ZXJmYWNlIElHZXRTdG9yZVBhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0b3Jlcyh7aWQsIG5hbWV9OiBJR2V0U3RvcmVQYXJhbXMpOiBQcm9taXNlPElTdG9yZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtpZCwgbmFtZX0pO1xuICAgIGNvbnN0IHN0b3JlczogSVN0b3JlW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9zdG9yZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHN0b3Jlcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0b3JlID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFN0b3Jlcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVTdG9yZSA9IGdldE9yQ3JlYXRlKGdldFN0b3JlcywgY3JlYXRlU3RvcmUpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3RvcmUoc3RvcmU6IElTdG9yZUZvcm0pOiBQcm9taXNlPElTdG9yZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvc3RvcmVzXCIsIHN0b3JlKTtcbn1cblxuLyogVklUSSBBUkVBUyAqL1xuaW50ZXJmYWNlIElHZXRWaXRpQXJlYXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcmVnaW9uTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZpdGlBcmVhcyhcbiAgICB7IGlkLCBuYW1lLCByZWdpb25OYW1lIH06IElHZXRWaXRpQXJlYXNQYXJhbXMsXG4pOiBQcm9taXNlPElWaXRpQXJlYVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUsIHJlZ2lvbl9uYW1lOiByZWdpb25OYW1lIH0pO1xuICAgIGNvbnN0IHZpdGlBcmVhczogSVZpdGlBcmVhW10gPSBhd2FpdCBnZXQoXCIvcmVzdC92aXRpLWFyZWFzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB2aXRpQXJlYXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRWaXRpQXJlYSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRWaXRpQXJlYXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlVml0aUFyZWEgPSBnZXRPckNyZWF0ZShnZXRWaXRpQXJlYXMsIGNyZWF0ZVZpdGlBcmVhKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVZpdGlBcmVhKHZpdGlBcmVhOiBJVml0aUFyZWFGb3JtKTogUHJvbWlzZTxJVml0aUFyZWE+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3ZpdGktYXJlYXNcIiwgdml0aUFyZWEpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVml0aUFyZWEodml0aUFyZWE6IElWaXRpQXJlYSk6IFByb21pc2U8SVZpdGlBcmVhPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3Qvdml0aS1hcmVhcy8ke3ZpdGlBcmVhLmlkfWAsIHZpdGlBcmVhKTtcbn1cblxuaW50ZXJmYWNlIElHZXRWaXRpQXJlYVN0YXRzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICByZWdpb25JZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZpdGlBcmVhU3RhdHMoXG4gICAgeyBpZCwgcmVnaW9uSWQgfTogSUdldFZpdGlBcmVhU3RhdHNQYXJhbXMsXG4pOiBQcm9taXNlPElWaXRpQXJlYVN0YXRzW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgcmVnaW9uX2lkOiByZWdpb25JZCB9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvdml0aS1hcmVhcy9zdGF0c1wiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFZpdGlBcmVhcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC92aXRpLWFyZWFzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogV0lORVMgKi9cbmludGVyZmFjZSBJR2V0V2luZXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIHByb2R1Y2VySWQ/OiBudW1iZXI7XG4gICAgcmVnaW9uSWQ/OiBudW1iZXI7XG4gICAgdml0aUFyZWFJZD86IG51bWJlcjtcbiAgICB3aW5lVHlwZUlkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZXMoXG4gICAgeyBpZCwgcHJvZHVjZXJJZCwgcmVnaW9uSWQsIHZpdGlBcmVhSWQsIHdpbmVUeXBlSWQgfTogSUdldFdpbmVzUGFyYW1zLFxuKTogUHJvbWlzZTxJV2luZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtcbiAgICAgICAgaWQsIHJlZ2lvbl9pZDogcmVnaW9uSWQsIHByb2R1Y2VyX2lkOiBwcm9kdWNlcklkLFxuICAgICAgICB2aXRpX2FyZWFfaWQ6IHZpdGlBcmVhSWQsIHdpbmVfdHlwZV9pZDogd2luZVR5cGVJZCxcbiAgICB9KTtcbiAgICBjb25zdCB3aW5lczogSVdpbmVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3dpbmVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB3aW5lcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFdpbmUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0V2luZXMpO1xuXG5jb25zdCBjcmVhdGVXaW5lSHR0cEZvcm0gPSAod2luZTogSVdpbmVGb3JtLCBmaWxlOiBGaWxlIHwgbnVsbCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtLmFwcGVuZChcIndpbmVfZm9ybVwiLCBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkod2luZSldLCB7dHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCJ9KSk7XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJpbWFnZVwiLCBmaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZSh3aW5lOiBJV2luZUZvcm0sIGZpbGU6IEZpbGUgfCBudWxsKTogUHJvbWlzZTxJV2luZT4ge1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVXaW5lSHR0cEZvcm0od2luZSwgZmlsZSk7XG4gICAgcmV0dXJuIHBvc3RGb3JtKFwiL3Jlc3Qvd2luZXNcIiwgZm9ybSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVXaW5lKGlkOiBudW1iZXIsIHdpbmU6IElXaW5lRm9ybSwgZmlsZTogRmlsZSB8IG51bGwpOiBQcm9taXNlPElXaW5lPiB7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVdpbmVIdHRwRm9ybSh3aW5lLCBmaWxlKTtcbiAgICByZXR1cm4gcHV0Rm9ybShgL3Jlc3Qvd2luZXMvJHtpZH1gLCBmb3JtKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnRVcGRhdGVXaW5lKGlkOiBudW1iZXIsIHdpbmU6IElXaW5lUGF0Y2hGb3JtKTogUHJvbWlzZTxJV2luZT4ge1xuICAgIHJldHVybiBwYXRjaChgL3Jlc3Qvd2luZXMvJHtpZH1gLCB3aW5lKTtcbn1cblxuaW50ZXJmYWNlIElTZWFyY2hXaW5lc1BhcmFtcyB7XG4gICAgY29sb3JMaWtlPzogc3RyaW5nO1xuICAgIHdpbmVUeXBlTGlrZT86IHN0cmluZztcbiAgICBwcm9kdWNlckxpa2U/OiBzdHJpbmc7XG4gICAgcmVnaW9uTGlrZT86IHN0cmluZztcbiAgICB2aXRpQXJlYUxpa2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hXaW5lcyhcbiAgICB7IGNvbG9yTGlrZSwgd2luZVR5cGVMaWtlLCBwcm9kdWNlckxpa2UsIHJlZ2lvbkxpa2UsIHZpdGlBcmVhTGlrZSB9OiBJU2VhcmNoV2luZXNQYXJhbXMsXG4pOiBQcm9taXNlPElXaW5lW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe1xuICAgICAgICBjb2xvcl9saWtlOiBjb2xvckxpa2UsIHdpbmVfdHlwZV9saWtlOiB3aW5lVHlwZUxpa2UsIHByb2R1Y2VyX2xpa2U6IHByb2R1Y2VyTGlrZSxcbiAgICAgICAgcmVnaW9uX2xpa2U6IHJlZ2lvbkxpa2UsIHZpdGlfYXJlYV9saWtlOiB2aXRpQXJlYUxpa2UsXG4gICAgfSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3dpbmVzL3NlYXJjaFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVWYXJpZXRpZXMoKTogUHJvbWlzZTxJV2luZUNvdW50PiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3dpbmVzL2NvdW50XCIpO1xufVxuXG4vKiBXSU5FIEdSQVBFUyAqL1xuaW50ZXJmYWNlIElHZXRXaW5lR3JhcGVzUGFyYW1zIHtcbiAgICB3aW5lSWQ/OiBudW1iZXI7XG4gICAgZ3JhcGVJZD86IG51bWJlcjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lLWxlbmd0aFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVHcmFwZXMoeyB3aW5lSWQsIGdyYXBlSWQgfTogSUdldFdpbmVHcmFwZXNQYXJhbXMpOiBQcm9taXNlPElXaW5lR3JhcGVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IHdpbmVfaWQ6IHdpbmVJZCwgZ3JhcGVfaWQ6IGdyYXBlSWQgfSk7XG4gICAgY29uc3Qgd2luZUdyYXBlczogSVdpbmVHcmFwZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvd2luZS1ncmFwZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHdpbmVHcmFwZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5lR3JhcGVzKHdpbmVHcmFwZXM6IElXaW5lR3JhcGVzRm9ybSk6IFByb21pc2U8SVdpbmVHcmFwZVtdPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC93aW5lLWdyYXBlc1wiLCB3aW5lR3JhcGVzKTtcbn1cblxuLyogV0lORSBUWVBFUyAqL1xuaW50ZXJmYWNlIElHZXRXaW5lVHlwZXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lVHlwZXMoeyBpZCwgbmFtZSB9OiBJR2V0V2luZVR5cGVzUGFyYW1zKTogUHJvbWlzZTxJV2luZVR5cGVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lIH0pO1xuICAgIGNvbnN0IHdpbmVUeXBlczogSVdpbmVUeXBlW10gPSBhd2FpdCBnZXQoXCIvcmVzdC93aW5lLXR5cGVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB3aW5lVHlwZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRXaW5lVHlwZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRXaW5lVHlwZXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlV2luZVR5cGUgPSBnZXRPckNyZWF0ZShnZXRXaW5lVHlwZXMsIGNyZWF0ZVdpbmVUeXBlKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmVUeXBlKHdpbmVUeXBlOiBJV2luZVR5cGVGb3JtKTogUHJvbWlzZTxJV2luZVR5cGU+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3dpbmUtdHlwZXNcIiwgd2luZVR5cGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2luZVR5cGUod2luZVR5cGU6IElXaW5lVHlwZSk6IFByb21pc2U8SVdpbmVUeXBlPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3Qvd2luZS10eXBlcy8ke3dpbmVUeXBlLmlkfWAsIHdpbmVUeXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFdpbmVUeXBlcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC93aW5lLXR5cGVzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cbiIsIi8qKiBCYXNpYyB0eXBlIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHJlc3BvbnNlIEpTT04gb2YgbWFueSBhc3luY2hyb25vdXMgcmVxdWVzdHMuICovXG5pbXBvcnQgeyBJUmVzdE1vZGVsIH0gZnJvbSBcIi4vUmVzdFR5cGVzXCI7XG5cbi8qKlxuICogS2V5LXZhbHVlIHN0b3JlIHdoZXJlIHRoZSBrZXkgbXVzdCBiZSBhIHN0cmluZywgYnV0IHRoZSB2YWx1ZSBpcyBvZiBhbnkgdHlwZVxuICogVC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRGljdDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgb2JqZWN0cyB0byBhIHNpbmdsZSBvYmplY3Qgb2YgbmFtZXMgdG8gbnVsbCBmb3IgdXNlIHdpdGggbWF0ZXJpYWxpemVcbiAqIGF1dG9jb21wbGV0ZS5cbiAqIEBwYXJhbSBvYmplY3RzIEFuIGFycmF5IG9mIFJFU1QgbW9kZWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXN0TW9kZWxzVG9OYW1lRGljdChvYmplY3RzOiBJUmVzdE1vZGVsW10pOiBJRGljdDxudWxsPiB7XG4gICAgY29uc3QgZGljdDogSURpY3Q8bnVsbD4gPSB7fTtcbiAgICBvYmplY3RzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgIGRpY3Rbb2JqLm5hbWVdID0gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gZGljdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiA4LWRpZ2l0IG51bWJlciBvZiBmb3JtYXQgJ3l5eXltbWRkJyB0byBhIERhdGUgb2JqZWN0LlxuICogQHBhcmFtIG51bSBhIGRhdGUgbnVtYmVyIG9mIGZvcm1hdCAneXl5eW1tZGQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBudW1Ub0RhdGUobnVtOiBudW1iZXIpOiBEYXRlIHtcbiAgICBjb25zdCBzdHJOdW0gPSBgJHtudW19YDtcbiAgICBpZiAoc3RyTnVtLmxlbmd0aCAhPT0gOCkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgZGF0ZSBudW1iZXIgJyR7c3RyTnVtfSdgKTtcbiAgICB9XG4gICAgY29uc3QgeWVhciA9IHN0ck51bS5zdWJzdHIoMCwgNCk7XG4gICAgY29uc3QgbW9udGggPSBzdHJOdW0uc3Vic3RyKDQsIDIpO1xuICAgIGNvbnN0IGRheSA9IHN0ck51bS5zdWJzdHIoNiwgMik7XG4gICAgLy8gSlMgbW9udGhzIGFyZSAwLWJhc2VkXG4gICAgcmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHllYXIsIDEwKSwgcGFyc2VJbnQobW9udGgsIDEwKSAtIDEsIHBhcnNlSW50KGRheSwgMTApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb051bShkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICogMTBfMDAwICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpICogMTAwICsgZGF0ZS5nZXREYXRlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBFTl9EQVNIOiBzdHJpbmcgPSBcIuKAk1wiO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgdmludGFnZSB5ZWFyLCB3aGljaCBpcyB0d28geWVhcnMgcHJpb3IgdG8gdGhlIGN1cnJlbnRcbiAqIHllYXIuIFRoaXMgZnVuY3Rpb24gZHVwbGljYXRlcyB0aGUgUHl0aG9uIGZ1bmN0aW9uXG4gKiB2aW5vdGVjYS51dGlscy5kZWZhdWx0X3ZpbnRhZ2VfeWVhclxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFZpbnRhZ2VZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGFuIG9iamVjdCBpcyBlbXB0eSwgaS5lLiBoYXMgbm8ga2V5cy5cbiAqIEBwYXJhbSBvYmogQW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iajogb2JqZWN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIFJldHVybnMgcyB3aXRoIHRoZSBmaXJzdCBsZXR0ZXIgY2FwaXRhbGl6ZWQuXG4gKiBAcGFyYW0gcyBBIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHMubGVuZ3RoID4gMCA/IHNbMF0udG9VcHBlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpIDogXCJcIjtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGRpc3BsYXkgbmFtZSB0byBhbiBodG1sIGlkXG4gKiBAcGFyYW0gbmFtZSBBIGNvbXBvbmVudCBkaXNwbGF5IG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hbWVUb0lkKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvKFxccykrL2csIFwiLVwiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBtYXhpbXVtIGVsZW1lbnQgYnkgb25lIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSB0eXBlIG9mIGVsZW1lbnRcbiAqIEBwYXJhbSBhcnIgQW4gYXJyYXkgb2Ygb2JqY2VjdHNcbiAqIEBwYXJhbSBhY2Nlc3NvciBBIGZ1bmN0aW9uIGZvciBhY2Nlc3NpbmcgYSBudW1iZXIgcHJvcGVydHkgb2YgdGhlIG9iamVjdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heEJ5PFQ+KGFycjogVFtdLCBhY2Nlc3NvcjogKGVsZW06IFQpID0+IG51bWJlcik6IFQgfCB1bmRlZmluZWQge1xuICAgIGxldCBtYXhFbGVtOiBUIHwgdW5kZWZpbmVkO1xuICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHk7XG4gICAgZm9yIChjb25zdCBlbGVtIG9mIGFycikge1xuICAgICAgICBjb25zdCB2YWwgPSBhY2Nlc3NvcihlbGVtKTtcbiAgICAgICAgaWYgKHZhbCA+IG1heFZhbCkge1xuICAgICAgICAgICAgbWF4RWxlbSA9IGVsZW07XG4gICAgICAgICAgICBtYXhWYWwgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1heEVsZW07XG59XG5cbi8qKlxuICogU3VtcyBhbiBhcnJheSBvZiBvYmplY3RzIGJ5IG9uZSBvZiB0aGUgb2JqZWN0cycgcHJvcGVydGllcy5cbiAqIEBwYXJhbSBhcnIgQW4gYXJyYXkgb2Ygb2JqZWN0c1xuICogQHBhcmFtIGFjY2Vzc29yIEEgZnVuY3Rpb24gZm9yIGFjY2Vzc2luZyBvbmUgb2YgdGhlIG9iamVjdHMnIHByb3BlcnRpZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1bUJ5PFQ+KGFycjogVFtdLCBhY2Nlc3NvcjogKGVsZW06IFQpID0+IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChjb25zdCBlbGVtIG9mIGFycikge1xuICAgICAgICBzdW0gKz0gYWNjZXNzb3IoZWxlbSk7XG4gICAgfVxuICAgIHJldHVybiBzdW07XG59XG5cbi8qKlxuICogQ29tcGFyZXMgdHdvIG9iamVjdHMgZm9yIGRlZXAgZXF1YWxpdHkuXG4gKiBAcGFyYW0gYSBBbiBvYmplY3RcbiAqIEBwYXJhbSBiIEFuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJlRXF1YWwoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGNvbnN0IGJLZXlzID0gT2JqZWN0LmtleXMoYik7XG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrIG9mIGFLZXlzKSB7XG4gICAgICAgIGlmIChhW2tdICE9PSBiW2tdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmludGVyZmFjZSBJUmFuZ2VBcmdzIHtcbiAgICBzdGFydD86IG51bWJlcjtcbiAgICBzdG9wPzogbnVtYmVyO1xuICAgIHN0ZXA/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYWJsZSByYW5nZSBvZiBudW1iZXJzb25DbGljay5cbiAqIEBwYXJhbSBzdGFydCBGaXJzdCBudW1iZXIgb2YgdGhlIHJhbmdlXG4gKiBAcGFyYW0gc3RvcCBFbmQgb2YgdGhlIHJhbmdlIChub24taW5jbHVzaXZlKVxuICogQHBhcmFtIHN0ZXAgSW5jcmVtZW50IG9mIHRoZSByYW5nZVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHJhbmdlKHsgc3RhcnQsIHN0b3AsIHN0ZXAgfTogSVJhbmdlQXJncyk6IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPiB7XG4gICAgc3RlcCA9IHN0ZXAgfHwgMTtcbiAgICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gICAgc3RvcCA9IHN0b3AgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgICAgIHlpZWxkIGk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW1hZ2VFeGlzdHMoaW1hZ2VVcmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW1hZ2VVcmwsIHttZXRob2Q6IFwiSEVBRFwifSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5vaztcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVBbmRUeXBlKG5hbWU6IHN0cmluZyB8IG51bGwsIHdpbmVUeXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHsobmFtZSA/IG5hbWUgKyBcIiBcIiA6IFwiXCIpfSR7d2luZVR5cGV9YDtcbn1cblxuLy8gVE9ETzogbW92ZSB0byB1c2UgUmVhY3Qgcm91dGVyIG9yIHNvbWV0aGluZyBzaW1pbGFyXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3QodXJsOiBzdHJpbmcpIHtcbiAgICBsb2NhdGlvbi5ocmVmID0gdXJsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2FkKGZ1bjogKCkgPT4gdm9pZCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bik7XG59XG4iLCJpbXBvcnQgeyBBdXRvY29tcGxldGUsIERyb3Bkb3duLCBTaWRlbmF2IH0gZnJvbSBcIm1hdGVyaWFsaXplLWNzc1wiO1xuaW1wb3J0IHsgSURpY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG50eXBlIE9uQ2hhbmdlID0gKGU6IHN0cmluZykgPT4gdm9pZDtcblxuLyoqIFNldHVwIGF1dG9jb21wbGV0aW9uIHdpdGggcHJvdmlkZWQgY29tcGxldGlvbiBvcHRpb25zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF1dG9jb21wbGV0ZShlbGVtOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uczogSURpY3Q8c3RyaW5nIHwgbnVsbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBPbkNoYW5nZSwgbWluTGVuZ3RoID0gMSwgbGltaXQgPSA1KSB7XG4gICAgaWYgKGVsZW0uY3VycmVudCkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICAgICAgbmV3IEF1dG9jb21wbGV0ZShlbGVtLmN1cnJlbnQsIHtcbiAgICAgICAgICAgIGRhdGE6IGNvbXBsZXRpb25zLFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICBtaW5MZW5ndGgsXG5cbiAgICAgICAgICAgIG9uQXV0b2NvbXBsZXRlOiBmdW5jdGlvbih0aGlzLCB0ZXh0KSB7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG9iamVjdC1saXRlcmFsLXNob3J0aGFuZFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHRleHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZpeCBvdmVybGFwcHRpbmcgdGV4dCBidWdcbiAgICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZU5hdmJhclRhYihpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuLyoqIEVuYWJsZXMgbmF2YmFyIG1lbnVzLiBTaG91bGQgYmUgY2FsbGVkIG9uIGV2ZXJ5IHBhZ2UuICovXG5leHBvcnQgZnVuY3Rpb24gbmF2YmFyKGFjdGl2ZU5hdlRhYklkPzogc3RyaW5nKSB7XG4gICAgaWYgKGFjdGl2ZU5hdlRhYklkKSB7XG4gICAgICAgIGFjdGl2YXRlTmF2YmFyVGFiKGFjdGl2ZU5hdlRhYklkKTtcbiAgICB9XG4gICAgY29uc3Qgc2lkZU5hdkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVuYXZcIik7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgbmV3IFNpZGVuYXYoc2lkZU5hdkVsZW0hKTtcbiAgICBjb25zdCBkcm9wZG93bkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLXRyaWdnZXJcIik7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgbmV3IERyb3Bkb3duKGRyb3Bkb3duRWxlbSEpO1xufVxuXG4vKiogU2ltcGxpZmllcyBkaXNwbGF5aW5nIG9mIHRvYXN0IG1lc3NhZ2VzIHRvIHVzZXIgKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2FzdChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBNLnRvYXN0KHtcbiAgICAgICAgY2xhc3NlczogXCJyZWQtYmdcIixcbiAgICAgICAgZGlzcGxheUxlbmd0aDogMTAwMDAsXG4gICAgICAgIGh0bWw6IG1lc3NhZ2UsXG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9