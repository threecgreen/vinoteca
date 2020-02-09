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
/******/ 		"inventory": 0
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
/******/ 	deferredModules.push([6,"vendors"]);
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

/***/ "./front_end/inventory/InventoryApp.tsx":
/*!**********************************************!*\
  !*** ./front_end/inventory/InventoryApp.tsx ***!
  \**********************************************/
/*! exports provided: InventoryApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryApp", function() { return InventoryApp; });
/* harmony import */ var date_fns_esm_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/esm/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Preloader */ "./components/Preloader.tsx");
/* harmony import */ var _lib_ApiHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/ApiHelper */ "./lib/ApiHelper.ts");
/* harmony import */ var _lib_CSV__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/CSV */ "./lib/CSV.ts");
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _InventoryTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InventoryTable */ "./front_end/inventory/InventoryTable.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











class InventoryApp extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false,
            wines: [],
        };
        this.logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_7__["default"](this.constructor.name);
    }
    render() {
        if (!this.state.hasLoaded) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_4__["Preloader"], null);
        }
        const table = this.state.wines.length > 0
            ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["Btn"], { classes: ["green-bg"], onClick: this.downloadInventory.bind(this) }, "Export to CSV"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InventoryTable__WEBPACK_IMPORTED_MODULE_10__["InventoryTable"], { wines: this.state.wines, onInventoryChange: this.onInventoryChange.bind(this) }))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", { className: "bold center-align" }, "Your inventory is currently empty.");
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "container" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12 },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", { className: "page-title" }, "Current inventory"),
                    table))));
    }
    componentDidMount() {
        this.updateInventory();
    }
    onInventoryChange(id, change) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wine = this.state.wines.find((w) => w.id === id);
                if (wine) {
                    let newInventory = wine.inventory;
                    if (change === _InventoryTable__WEBPACK_IMPORTED_MODULE_10__["InventoryChange"].Increase) {
                        newInventory += 1;
                    }
                    else if (wine.inventory > 0) {
                        newInventory -= 1;
                    }
                    const updatedWine = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_8__["partUpdateWine"])(id, { inventory: newInventory });
                    this.setState((prevState, _) => (Object.assign(Object.assign({}, prevState), { wines: prevState.wines.map((w) => w.id === id ? Object.assign(Object.assign({}, w), { inventory: updatedWine.inventory }) : w) })));
                }
            }
            catch (err) {
                this.setState({ hasLoaded: true });
                this.logger.logWarning(`Failed to update inventory: ${err.message}`);
            }
        });
    }
    updateInventory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wines = yield Object(_lib_ApiHelper__WEBPACK_IMPORTED_MODULE_5__["get"])("/rest/wines/inventory");
                this.setState({ wines, hasLoaded: true });
            }
            catch (err) {
                this.setState({ hasLoaded: true });
                this.logger.logError(`Failed to load inventory`);
            }
        });
    }
    downloadInventory() {
        Object(_lib_CSV__WEBPACK_IMPORTED_MODULE_6__["download"])(`vinoteca_inventory_${Object(date_fns_esm_format__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(), 'yyyy-MM-dd')}.csv`, Object(_lib_CSV__WEBPACK_IMPORTED_MODULE_6__["generateCSV"])(this.state.wines, [
            "inventory", "color", "name", "wineType", "producer", "region", "lastPurchaseVintage",
            "lastPurchaseDate", "lastPurchasePrice"
        ], { "lastPurchasedDate": (date) => Object(date_fns_esm_format__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_9__["numToDate"])(date), 'yyyy-MM-dd') }));
    }
}


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

/***/ "./front_end/inventory/inventory.ts":
/*!******************************************!*\
  !*** ./front_end/inventory/inventory.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/widgets */ "./lib/widgets.ts");
/* harmony import */ var _InventoryApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InventoryApp */ "./front_end/inventory/InventoryApp.tsx");




Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_2__["navbar"])("inventory-nav");
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_InventoryApp__WEBPACK_IMPORTED_MODULE_3__["InventoryApp"]), document.getElementById("inventory-container"));


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

/***/ "./lib/CSV.ts":
/*!********************!*\
  !*** ./lib/CSV.ts ***!
  \********************/
/*! exports provided: generateCSV, download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCSV", function() { return generateCSV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
function generateCSV(objects, columnOrder, hooks = {}) {
    return objects.reduceRight((acc, obj) => {
        const fields = columnOrder.map((col) => {
            if (col in hooks) {
                // @ts-ignore
                return hooks[col](obj[col]);
            }
            return obj[col];
        });
        return `${acc}\n${fields.join(",")}`;
        // Column names
    }, columnOrder.join(","));
}
function download(fileName, data, type = "text/csv") {
    const blob = new Blob([data], { type });
    // Create a link element, click it, then destroy it
    const elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(blob);
    elem.download = fileName;
    elem.style.display = "none";
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
    window.URL.revokeObjectURL(elem.href);
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

/***/ 6:
/*!************************************************!*\
  !*** multi ./front_end/inventory/inventory.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carter/git/vinoteca/vinoteca/front_end/inventory/inventory.ts */"./front_end/inventory/inventory.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25zLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbG9ySW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXRlcmlhbEljb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJlbG9hZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlbGVjdElucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYmxlQ2VsbHMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFibGVIZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC9pbnZlbnRvcnkvSW52ZW50b3J5QXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvaW52ZW50b3J5L0ludmVudG9yeVRhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvaW52ZW50b3J5L2ludmVudG9yeS50cyIsIndlYnBhY2s6Ly8vLi9saWIvQXBpSGVscGVyLnRzIiwid2VicGFjazovLy8uL2xpYi9DU1YudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nvb2tpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9saWIvUmVzdEFwaS50cyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3dpZGdldHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFF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QUFnQixFQUFFLENBQUM7S0FDeEI7QUFDTCxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxFQUFVO0lBQ2hDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekUsQ0FBQztBQUVELDREQUE0RDtBQUNyRCxTQUFTLE1BQU0sQ0FBQyxjQUF1QjtJQUMxQyxJQUFJLGNBQWMsRUFBRTtRQUNoQixpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUNyQztJQUNELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkQsZ0RBQWdEO0lBQ2hELElBQUksdURBQU8sQ0FBQyxXQUFZLENBQUMsQ0FBQztJQUMxQixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDakUsZ0RBQWdEO0lBQ2hELElBQUksd0RBQVEsQ0FBQyxZQUFhLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsc0RBQXNEO0FBQy9DLFNBQVMsS0FBSyxDQUFDLE9BQWU7SUFDakMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNKLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLElBQUksRUFBRSxPQUFPO0tBQ2hCLENBQUMsQ0FBQztBQUNQLENBQUMiLCJmaWxlIjoiaW52ZW50b3J5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJpbnZlbnRvcnlcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbNixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgQ29sIH0gZnJvbSBcIi4vR3JpZFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4vTWF0ZXJpYWxJY29uXCI7XG5cbmludGVyZmFjZSBJRmxvYXRpbmdCdG5Qcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB7XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgICBvbk1vdXNlRG93bj86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKGNsYXNzZXMgfHwgW10pLmpvaW4oXCIgXCIpO1xufVxuXG5leHBvcnQgY29uc3QgRmxvYXRpbmdCdG46IFJlYWN0LkZDPElGbG9hdGluZ0J0blByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21iaW5lQ2xhc3Nlcyhwcm9wcy5jbGFzc2VzKTtcbiAgICBjb25zdCBtb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICAgICAgaWYgKHByb3BzLm9uTW91c2VEb3duKSB7XG4gICAgICAgICAgICBwcm9wcy5vbk1vdXNlRG93bihlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudD4pID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9wcy5vbkNsaWNrKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgYHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4tZmxvYXRpbmcgJHtjbGFzc2VzfWAgfVxuICAgICAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyBtb3VzZURvd24gfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9hPlxuICAgICk7XG59O1xuRmxvYXRpbmdCdG4uZGlzcGxheU5hbWUgPSBcIkZsb2F0aW5nQnRuXCI7XG5GbG9hdGluZ0J0bi5kZWZhdWx0UHJvcHMgPSB7IG9uTW91c2VEb3duOiAoXykgPT4gdW5kZWZpbmVkIH07XG5cbmludGVyZmFjZSBJQnRuUHJvcHMgZXh0ZW5kcyBJQ2hpbGRyZW5Qcm9wLCBJQ2xhc3Nlc1Byb3Age1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBCdG46IFJlYWN0LkZDPElCdG5Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tYmluZUNsYXNzZXMocHJvcHMuY2xhc3Nlcyk7XG4gICAgY29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb3BzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17IGByYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gJHtjbGFzc2VzfWAgfVxuICAgICAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cbkJ0bi5kaXNwbGF5TmFtZSA9IFwiQnRuXCI7XG5cbmludGVyZmFjZSBJQ2FuY2VsT3JDb25maXJtUHJvcHMge1xuICAgIG9uQ29uZmlybUNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIG9uQ2FuY2VsQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBDYW5jZWxPckNvbmZpcm1CdG5zOiBSZWFjdC5GQzxJQ2FuY2VsT3JDb25maXJtUHJvcHM+ID1cbiAgICAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICA8QnRuIGNsYXNzZXM9eyBbXCJncmVlbi1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uQ29uZmlybUNsaWNrIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cInNlbmRcIiBjbGFzc05hbWU9XCJyaWdodFwiIC8+XG4gICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcInJlZC1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uQ2FuY2VsQ2xpY2sgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdG4+XG4gICAgICAgIDwvQ29sPlxuICAgICk7XG59XG5DYW5jZWxPckNvbmZpcm1CdG5zLmRpc3BsYXlOYW1lID0gXCJDYW5jZWxPckNvbmZpcm1CdG5zXCI7XG4iLCJpbXBvcnQgeyBGb3JtU2VsZWN0IH0gZnJvbSBcIm1hdGVyaWFsaXplLWNzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vbGliL0xvZ2dlclwiO1xuaW1wb3J0IHsgSUNvbG9yIH0gZnJvbSBcIi4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBnZXRDb2xvcnMgfSBmcm9tIFwiLi4vbGliL1Jlc3RBcGlcIjtcbmltcG9ydCB7IElPbkNoYW5nZSB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgU2VsZWN0SW5wdXQgfSBmcm9tIFwiLi9TZWxlY3RJbnB1dFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSU9uQ2hhbmdlIHtcbiAgICBzZWxlY3Rpb246IHN0cmluZztcbiAgICBleHRyYUNob2ljZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUNvbG9yc1NlbGVjdCA9IChsb2dnZXI6IExvZ2dlciwgZXh0cmFDaG9pY2U/OiBzdHJpbmcpOiBbc3RyaW5nW10sIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTFNlbGVjdEVsZW1lbnQ+XSA9PiB7XG4gICAgY29uc3QgW3NlbGVjdGlvbk9wdGlvbnMsIHNldFNlbGVjdGlvbk9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgICBjb25zdCBzZWxlY3RSZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxTZWxlY3RFbGVtZW50PjtcblxuICAgIGNvbnN0IGNvbmNhdElmTm90TnVsbD0gKG9wdGlvbnM6IHN0cmluZ1tdKTogc3RyaW5nW10gPT4ge1xuICAgICAgICBpZiAoZXh0cmFDaG9pY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBbZXh0cmFDaG9pY2VdLmNvbmNhdChvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbG9ycygpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JzOiBJQ29sb3JbXSA9IGF3YWl0IGdldENvbG9ycyh7fSk7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uT3B0aW9ucyhjb25jYXRJZk5vdE51bGwoY29sb3JzLm1hcCgoY29sb3IpID0+IGNvbG9yLm5hbWUpKSk7XG4gICAgICAgICAgICAgICAgbmV3IEZvcm1TZWxlY3Qoc2VsZWN0UmVmLmN1cnJlbnQhKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihcIkZhaWxlZCB0byBnZXQgY29sb3JzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hDb2xvcnMoKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFtzZWxlY3Rpb25PcHRpb25zLCBzZWxlY3RSZWZdXG59XG5cbmV4cG9ydCBjb25zdCBDb2xvcklucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihDb2xvcklucHV0Lm5hbWUpO1xuXG4gICAgY29uc3QgW3NlbGVjdGlvbk9wdGlvbnMsIHNlbGVjdFJlZl0gPSB1c2VDb2xvcnNTZWxlY3QobG9nZ2VyLCBwcm9wcy5leHRyYUNob2ljZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VsZWN0SW5wdXQgbmFtZT1cIkNvbG9yXCJcbiAgICAgICAgICAgIHM9eyA0IH0gbD17IDIgfVxuICAgICAgICAgICAgc2VsZWN0UmVmPXsgc2VsZWN0UmVmIH1cbiAgICAgICAgICAgIG9wdGlvbnM9eyBzZWxlY3Rpb25PcHRpb25zIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHYpID0+IHByb3BzPy5vbkNoYW5nZSh2KSB9XG4gICAgICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuQ29sb3JJbnB1dC5kaXNwbGF5TmFtZSA9IFwiQ29sb3JJbnB1dFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSUNoaWxkcmVuUHJvcCwgSUNsYXNzZXNQcm9wIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRQcm9wcyB7XG4gICAgcz86IG51bWJlcjtcbiAgICBtPzogbnVtYmVyO1xuICAgIGw/OiBudW1iZXI7XG4gICAgeGw/OiBudW1iZXI7XG59XG5cbnR5cGUgSUFsbEdyaWRQcm9wcyA9IElHcmlkUHJvcHMgJiBJQ2xhc3Nlc1Byb3AgJiBJQ2hpbGRyZW5Qcm9wO1xuXG5mdW5jdGlvbiBqb2luQ2xhc3NlcyhncmlkOiBzdHJpbmdbXSwgY2xhc3Nlcz86IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICBsZXQgYWxsQ2xhc3Nlczogc3RyaW5nW10gPSBbXTtcbiAgICBncmlkLmZvckVhY2goKGdjKSA9PiB7XG4gICAgICAgIGlmIChnYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhbGxDbGFzc2VzLnB1c2goZ2MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgYWxsQ2xhc3NlcyA9IGFsbENsYXNzZXMuY29uY2F0KGNsYXNzZXMgfHwgW10pO1xuICAgIHJldHVybiBhbGxDbGFzc2VzLmpvaW4oXCIgXCIpO1xufVxuXG5mdW5jdGlvbiBncmlkQ2xhc3Nlcyhwcm9wczogSUFsbEdyaWRQcm9wcyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBzQ2xhc3MgPSBwcm9wcy5zID8gYHMke3Byb3BzLnN9YCA6IFwiXCI7XG4gICAgY29uc3QgbUNsYXNzID0gcHJvcHMubSA/IGBtJHtwcm9wcy5tfWAgOiBcIlwiO1xuICAgIGNvbnN0IGxDbGFzcyA9IHByb3BzLmwgPyBgbCR7cHJvcHMubH1gIDogXCJcIjtcbiAgICBjb25zdCB4bENsYXNzID0gcHJvcHMueGwgPyBgeGwke3Byb3BzLnhsfWAgOiBcIlwiO1xuICAgIHJldHVybiBbc0NsYXNzLCBtQ2xhc3MsIGxDbGFzcywgeGxDbGFzc107XG59XG5cbmNvbnN0IEdyaWRDb21wb25lbnRGYWN0b3J5ID0gKGNsYXNzTmFtZTogc3RyaW5nLCBkaXNwbGF5TmFtZTogc3RyaW5nKTogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudDogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSAocHJvcHM6IElBbGxHcmlkUHJvcHMpID0+IHtcbiAgICAgICAgY29uc3Qgb3RoZXJDbGFzc2VzID0gam9pbkNsYXNzZXMoZ3JpZENsYXNzZXMocHJvcHMpLCBwcm9wcy5jbGFzc2VzKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYCR7Y2xhc3NOYW1lfSAke290aGVyQ2xhc3Nlc31gIH0+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuICAgIGNvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBSb3c6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0gR3JpZENvbXBvbmVudEZhY3RvcnkoXCJyb3dcIiwgXCJSb3dcIik7XG5cbmV4cG9ydCBjb25zdCBDb2w6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0gR3JpZENvbXBvbmVudEZhY3RvcnkoXCJjb2xcIiwgXCJDb2xcIik7XG5cbmV4cG9ydCBjb25zdCBJbnB1dEZpZWxkOiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IEdyaWRDb21wb25lbnRGYWN0b3J5KFwiY29sIGlucHV0LWZpZWxkXCIsIFwiSW5wdXRGaWVsZFwiKVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBpY29uTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTWF0ZXJpYWxJY29uOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgIDxpIGNsYXNzTmFtZT17IGBtYXRlcmlhbC1pY29ucyAke3Byb3BzLmNsYXNzTmFtZX1gIH0+XG4gICAgICAgICAgICB7IHByb3BzLmljb25OYW1lIH1cbiAgICAgICAgPC9pPlxuICAgICk7XG59O1xuTWF0ZXJpYWxJY29uLmRpc3BsYXlOYW1lID0gXCJNYXRlcmlhbEljb25cIjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyOiBSZWFjdC5GQzx7fT4gPSAoXykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXRlcm1pbmF0ZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuUHJlbG9hZGVyLmRpc3BsYXlOYW1lID0gXCJQcmVsb2FkZXJcIjtcblxuZXhwb3J0IGNvbnN0IFByZWxvYWRlckNpcmM6IFJlYWN0LkZDPHt9PiA9IChfKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVsb2FkZXItd3JhcHBlciBhY3RpdmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1sYXllclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiZ2FwLXBhdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+PGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5QcmVsb2FkZXJDaXJjLmRpc3BsYXlOYW1lID0gXCJQcmVsb2FkZXJDaXJjXCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsIG5hbWVUb0lkIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gXCIuL0dyaWRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG9wdGlvbnM6IHN0cmluZ1tdO1xuICAgIHNlbGVjdGlvbjogc3RyaW5nO1xuICAgIHNlbGVjdFRleHQ/OiBzdHJpbmc7XG4gICAgc2VsZWN0UmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTFNlbGVjdEVsZW1lbnQ+O1xuICAgIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgcz86IG51bWJlcjtcbiAgICBtPzogbnVtYmVyO1xuICAgIGw/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGlkID0gbmFtZVRvSWQocHJvcHMubmFtZSk7XG4gICAgbGV0IHNlbGVjdFRleHQ6IEpTWC5FbGVtZW50IHwgdW5kZWZpbmVkO1xuICAgIGlmIChwcm9wcy5zZWxlY3RUZXh0KSB7XG4gICAgICAgIHNlbGVjdFRleHQgPSA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICB7IHByb3BzLnNlbGVjdFRleHQgfVxuICAgICAgICA8L29wdGlvbj47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dEZpZWxkIHM9eyBwcm9wcy5zIH0gbT17IHByb3BzLm0gfSBsPXsgcHJvcHMubCB9PlxuICAgICAgICAgICAgPHNlbGVjdCBpZD17IGlkIH1cbiAgICAgICAgICAgICAgICBuYW1lPXsgaWQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKSB9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwcm9wcy5zZWxlY3Rpb24gfHwgcHJvcHMuc2VsZWN0VGV4dCB9XG4gICAgICAgICAgICAgICAgcmVmPXsgcHJvcHMuc2VsZWN0UmVmIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7IHNlbGVjdFRleHQgfVxuICAgICAgICAgICAgICAgIHsgcHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17IG9wdGlvbiB9IGtleT17IG9wdGlvbiB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKG9wdGlvbikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXsgaWQgfT57IHByb3BzLm5hbWUgfTwvbGFiZWw+XG4gICAgICAgIDwvSW5wdXRGaWVsZD5cbiAgICApO1xufTtcbiIsImltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2VzbS9mb3JtYXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciwgRU5fREFTSCwgZ2V0TmFtZUFuZFR5cGUsIG51bVRvRGF0ZSB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcblxuaW50ZXJmYWNlIElUZXh0Q2VsbFByb3BzIHtcbiAgICBkZWZhdWx0Pzogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0Q2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJVGV4dENlbGxQcm9wcz4ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkZWZhdWx0OiBcIlwiLFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8dGQ+eyB0aGlzLnByb3BzLnRleHQgPz8gdGhpcy5wcm9wcy5kZWZhdWx0IH08L3RkPjtcbiAgICB9XG59O1xuXG5pbnRlcmZhY2UgSU51bUNlbGxQcm9wcyB7XG4gICAgbnVtOiBudW1iZXIgfCBudWxsO1xuICAgIG1pbkRlY2ltYWxzPzogbnVtYmVyO1xuICAgIG1heERlY2ltYWxzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgTnVtQ2VsbDogUmVhY3QuRkM8SU51bUNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBudW0gPSBwcm9wcy5udW1cbiAgICAgICAgLy8gdW5kZWZpbmVkIHRvIHVzZSBicm93c2VyJ3MgbG9jYWxlXG4gICAgICAgID8gcHJvcHMubnVtLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJvcHMubWluRGVjaW1hbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByb3BzLm1heERlY2ltYWxzfSlcbiAgICAgICAgOiBFTl9EQVNIO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJudW0tY29sXCI+eyBudW0gfTwvdGQ+XG4gICAgKTtcbn07XG5OdW1DZWxsLmRpc3BsYXlOYW1lID0gXCJOdW1DZWxsXCI7XG5cbmludGVyZmFjZSBJUHJpY2VDZWxsUHJvcHMge1xuICAgIHByaWNlOiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgUHJpY2VDZWxsOiBSZWFjdC5GQzxJUHJpY2VDZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE51bUNlbGwgbnVtPXsgcHJvcHMucHJpY2UgfVxuICAgICAgICAgICAgbWluRGVjaW1hbHM9eyAyIH1cbiAgICAgICAgICAgIG1heERlY2ltYWxzPXsgMiB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblByaWNlQ2VsbC5kaXNwbGF5TmFtZSA9IFwiUHJpY2VDZWxsXCI7XG5cbmV4cG9ydCBjb25zdCBZZWFyQ2VsbDogUmVhY3QuRkM8e3llYXI6IG51bWJlciB8IG51bGx9PiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHllYXIgPSBwcm9wcy55ZWFyPy50b1N0cmluZygpID8/IFwiTlZcIjtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwibnVtLWNvbFwiPlxuICAgICAgICAgICAgeyB5ZWFyIH1cbiAgICAgICAgPC90ZD5cbiAgICApO1xufVxuWWVhckNlbGwuZGlzcGxheU5hbWUgPSBcIlllYXJDZWxsXCI7XG5cbmludGVyZmFjZSBJRGF0ZUNlbGxQcm9wcyB7XG4gICAgZGF0ZTogbnVtYmVyIHwgbnVsbDtcbiAgICBmb3JtYXQ/OiBzdHJpbmc7XG59XG5leHBvcnQgY29uc3QgRGF0ZUNlbGw6IFJlYWN0LkZDPElEYXRlQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGRhdGVTdHIgPSBwcm9wcy5kYXRlID8gZm9ybWF0KG51bVRvRGF0ZShwcm9wcy5kYXRlKSwgcHJvcHMuZm9ybWF0ID8/IFwiTU1NIGRkLCB5eXl5XCIpIDogRU5fREFTSDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQ+eyBkYXRlU3RyIH08L3RkPlxuICAgICk7XG59XG5EYXRlQ2VsbC5kaXNwbGF5TmFtZSA9IFwiRGF0ZUNlbGxcIjtcblxuaW50ZXJmYWNlIElDb2xvckNlbGxQcm9wcyB7XG4gICAgY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IENvbG9yQ2VsbDogUmVhY3QuRkM8SUNvbG9yQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGlmIChwcm9wcy5jb2xvcikge1xuICAgICAgICByZXR1cm4gPHRkPnsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHByb3BzLmNvbG9yKSB9PC90ZD47XG4gICAgfVxuICAgIHJldHVybiA8dGQgLz47XG59O1xuQ29sb3JDZWxsLmRpc3BsYXlOYW1lID0gXCJDb2xvckNlbGxcIjtcblxuaW50ZXJmYWNlIElMaW5rZWRDZWxsUHJvcHMge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbW9kZWw6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IExpbmtlZENlbGw6IFJlYWN0LkZDPElMaW5rZWRDZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgdXJsID0gYC8ke3Byb3BzLm1vZGVsfS8ke3Byb3BzLmlkfWA7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGEgaHJlZj17IHVybCB9PlxuICAgICAgICAgICAgICAgIHsgcHJvcHMubmFtZSB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvdGQ+XG4gICAgKVxufVxuTGlua2VkQ2VsbC5kaXNwbGF5TmFtZSA9IFwiTGlua2VkQ2VsbFwiXG5cbmludGVyZmFjZSBJTmFtZUFuZFR5cGVQcm9wcyB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmcgfCBudWxsO1xuICAgIHdpbmVUeXBlOiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTmFtZUFuZFR5cGVDZWxsOiBSZWFjdC5GQzxJTmFtZUFuZFR5cGVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBpZiAocHJvcHMudXJsKSB7XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxhIGhyZWY9eyBwcm9wcy51cmwgfT5cbiAgICAgICAgICAgICAgICB7IGdldE5hbWVBbmRUeXBlKHByb3BzLm5hbWUsIHByb3BzLndpbmVUeXBlKSB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvdGQ+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJ3aW5lc1wiXG4gICAgICAgICAgICBuYW1lPXsgZ2V0TmFtZUFuZFR5cGUocHJvcHMubmFtZSwgcHJvcHMud2luZVR5cGUpIH1cbiAgICAgICAgLz5cbiAgICApO1xufTtcbk5hbWVBbmRUeXBlQ2VsbC5kaXNwbGF5TmFtZSA9IFwiTmFtZUFuZFR5cGVDZWxsXCI7XG5cbmV4cG9ydCBjb25zdCBQcm9kdWNlckNlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmd9PiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJwcm9kdWNlcnNcIlxuICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5Qcm9kdWNlckNlbGwuZGlzcGxheU5hbWUgPSBcIlByb2R1Y2VyQ2VsbFwiXG5cbmV4cG9ydCBjb25zdCBSZWdpb25DZWxsOiBSZWFjdC5GQzx7aWQ6IG51bWJlciwgbmFtZTogc3RyaW5nfT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwicmVnaW9uc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblJlZ2lvbkNlbGwuZGlzcGxheU5hbWUgPSBcIlJlZ2lvbkNlbGxcIlxuXG5leHBvcnQgY29uc3QgVml0aUFyZWFDZWxsOiBSZWFjdC5GQzx7aWQ6IG51bWJlciB8IG51bGwsIG5hbWU6IHN0cmluZyB8IG51bGx9PiA9IChwcm9wcykgPT4ge1xuICAgIGlmICghcHJvcHMuaWQgfHwgIXByb3BzLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIDx0ZCAvPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cInZpdGktYXJlYXNcIlxuICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5WaXRpQXJlYUNlbGwuZGlzcGxheU5hbWUgPSBcIlZpdGlBcmVhQ2VsbFwiXG5cbmV4cG9ydCBjb25zdCBXaW5lVHlwZUNlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmd9PiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJ3aW5lLXR5cGVzXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuV2luZVR5cGVDZWxsLmRpc3BsYXlOYW1lID0gXCJXaW5lVHlwZUNlbGxcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IHVzZUNvbG9yc1NlbGVjdCB9IGZyb20gXCIuL0NvbG9ySW5wdXRcIjtcbmltcG9ydCB7IE1hdGVyaWFsSWNvbiB9IGZyb20gXCIuL01hdGVyaWFsSWNvblwiO1xuaW1wb3J0IHsgU2VsZWN0SW5wdXQgfSBmcm9tIFwiLi9TZWxlY3RJbnB1dFwiO1xuXG5leHBvcnQgZW51bSBTb3J0aW5nU3RhdGUge1xuICAgIE5vdFNvcnRlZCxcbiAgICBBc2NlbmRpbmcsXG4gICAgRGVzY2VuZGluZyxcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB2b2lkO1xuICAgIHNvcnRpbmdTdGF0ZTogU29ydGluZ1N0YXRlO1xuICAgIGlzTnVtQ29sOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgVGFibGVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzPiB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGlzTnVtQ29sOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8IFwiXCIpICsgYCR7dGhpcy5wcm9wcy5pc051bUNvbCA/IFwiIG51bS1jb2xcIiA6IFwiXCIgfWAgfT5cbiAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyQ29udGVudCgpIH1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJDb250ZW50KCkge1xuICAgICAgICBjb25zdCB0ZXh0ID0gKFxuICAgICAgICAgICAgPGEgaHJlZj1cIlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMucHJvcHMub25DbGljayB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUtaGVhZGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5pc051bUNvbFxuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckljb24oKSB9XG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dCB9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dCB9XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJJY29uKCkgfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVySWNvbigpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnNvcnRpbmdTdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nU3RhdGUuQXNjZW5kaW5nOlxuICAgICAgICAgICAgICAgIHJldHVybiA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwiYXJyb3dfZHJvcF91cFwiIC8+O1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nU3RhdGUuRGVzY2VuZGluZzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImFycm93X2Ryb3BfZG93blwiIC8+O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImFycm93X2Ryb3BfZG93blwiIGNsYXNzTmFtZT1cImludmlzaWJsZVwiIC8+O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgSUZpbHRlclByb3BzIHtcbiAgICBvbkNoYW5nZTogKHZhbDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEZpbHRlckhlYWRlcjogUmVhY3QuRkM8SUZpbHRlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSkgfVxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcHJvcHMudGV4dCB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgICk7XG59XG5GaWx0ZXJIZWFkZXIuZGlzcGxheU5hbWUgPSBcIkZpbHRlckhlYWRlclwiO1xuXG5leHBvcnQgY29uc3QgU2VsZWN0RmlsdGVySGVhZGVyOiBSZWFjdC5GQzxJRmlsdGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZXh0cmFDaG9pY2UgPSBcIkFueVwiO1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoU2VsZWN0RmlsdGVySGVhZGVyLm5hbWUpO1xuXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoc2VsZWN0aW9uOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gZXh0cmFDaG9pY2UpIHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2Uoc2VsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gcHJvcHMudGV4dCA9PT0gXCJcIiA/IGV4dHJhQ2hvaWNlIDogcHJvcHMudGV4dDtcblxuICAgIGNvbnN0IFtzZWxlY3Rpb25PcHRpb25zLCBzZWxlY3RSZWZdID0gdXNlQ29sb3JzU2VsZWN0KGxvZ2dlciwgZXh0cmFDaG9pY2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPFNlbGVjdElucHV0IG5hbWU9XCJcIlxuICAgICAgICAgICAgICAgIHNlbGVjdFJlZj17IHNlbGVjdFJlZiB9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17IHNlbGVjdGlvbk9wdGlvbnMgfVxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17IHNlbGVjdGlvbiB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgICk7XG59XG5TZWxlY3RGaWx0ZXJIZWFkZXIuZGlzcGxheU5hbWUgPSBTZWxlY3RGaWx0ZXJIZWFkZXIubmFtZTtcbiIsImltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2VzbS9mb3JtYXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ0biB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvbnNcIjtcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IHsgUHJlbG9hZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJlbG9hZGVyXCI7XG5pbXBvcnQgeyBnZXQgfSBmcm9tIFwiLi4vLi4vbGliL0FwaUhlbHBlclwiO1xuaW1wb3J0IHsgZG93bmxvYWQsIGdlbmVyYXRlQ1NWIH0gZnJvbSBcIi4uLy4uL2xpYi9DU1ZcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uLy4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElJbnZlbnRvcnlXaW5lIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBwYXJ0VXBkYXRlV2luZSB9IGZyb20gXCIuLi8uLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgbnVtVG9EYXRlIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgSW52ZW50b3J5Q2hhbmdlLCBJbnZlbnRvcnlUYWJsZSB9IGZyb20gXCIuL0ludmVudG9yeVRhYmxlXCI7XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIHdpbmVzOiBJSW52ZW50b3J5V2luZVtdLFxuICAgIGhhc0xvYWRlZDogYm9vbGVhbixcbn1cblxuZXhwb3J0IGNsYXNzIEludmVudG9yeUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgSVN0YXRlPiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBsb2dnZXI6IExvZ2dlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiB7fSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoYXNMb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgd2luZXM6IFtdLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5oYXNMb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiA8UHJlbG9hZGVyIC8+O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhYmxlID0gdGhpcy5zdGF0ZS53aW5lcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8QnRuIGNsYXNzZXM9eyBbXCJncmVlbi1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5kb3dubG9hZEludmVudG9yeS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRXhwb3J0IHRvIENTVlxuICAgICAgICAgICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgICAgICAgICAgPEludmVudG9yeVRhYmxlIHdpbmVzPXsgdGhpcy5zdGF0ZS53aW5lcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkludmVudG9yeUNoYW5nZT17IHRoaXMub25JbnZlbnRvcnlDaGFuZ2UuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogPGg2IGNsYXNzTmFtZT1cImJvbGQgY2VudGVyLWFsaWduXCI+WW91ciBpbnZlbnRvcnkgaXMgY3VycmVudGx5IGVtcHR5LjwvaDY+O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHM9eyAxMiB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5DdXJyZW50IGludmVudG9yeTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRhYmxlIH1cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW52ZW50b3J5KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG9uSW52ZW50b3J5Q2hhbmdlKGlkOiBudW1iZXIsIGNoYW5nZTogSW52ZW50b3J5Q2hhbmdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3aW5lID0gdGhpcy5zdGF0ZS53aW5lcy5maW5kKCh3KSA9PiB3LmlkID09PSBpZCk7XG4gICAgICAgICAgICBpZiAod2luZSkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdJbnZlbnRvcnkgPSB3aW5lLmludmVudG9yeTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlID09PSBJbnZlbnRvcnlDaGFuZ2UuSW5jcmVhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SW52ZW50b3J5ICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5lLmludmVudG9yeSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SW52ZW50b3J5IC09IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRXaW5lID0gYXdhaXQgcGFydFVwZGF0ZVdpbmUoaWQsIHtpbnZlbnRvcnk6IG5ld0ludmVudG9yeX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgXykgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgICAgICAgICB3aW5lczogcHJldlN0YXRlLndpbmVzLm1hcCgodykgPT4gdy5pZCA9PT0gaWQgPyB7Li4udywgaW52ZW50b3J5OiB1cGRhdGVkV2luZS5pbnZlbnRvcnl9IDogdylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGFzTG9hZGVkOiB0cnVlfSk7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dXYXJuaW5nKGBGYWlsZWQgdG8gdXBkYXRlIGludmVudG9yeTogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlSW52ZW50b3J5KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2luZXM6IElJbnZlbnRvcnlXaW5lW10gPSBhd2FpdCBnZXQoXCIvcmVzdC93aW5lcy9pbnZlbnRvcnlcIik7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3aW5lcywgaGFzTG9hZGVkOiB0cnVlfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGFzTG9hZGVkOiB0cnVlfSk7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dFcnJvcihgRmFpbGVkIHRvIGxvYWQgaW52ZW50b3J5YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRvd25sb2FkSW52ZW50b3J5KCkge1xuICAgICAgICBkb3dubG9hZChgdmlub3RlY2FfaW52ZW50b3J5XyR7Zm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyl9LmNzdmAsXG4gICAgICAgICAgICAgICAgIGdlbmVyYXRlQ1NWKHRoaXMuc3RhdGUud2luZXMsIFtcbiAgICAgICAgICAgICAgICAgICAgIFwiaW52ZW50b3J5XCIsIFwiY29sb3JcIiwgXCJuYW1lXCIsIFwid2luZVR5cGVcIiwgXCJwcm9kdWNlclwiLCBcInJlZ2lvblwiLCBcImxhc3RQdXJjaGFzZVZpbnRhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgIFwibGFzdFB1cmNoYXNlRGF0ZVwiLCBcImxhc3RQdXJjaGFzZVByaWNlXCJcbiAgICAgICAgICAgICAgICAgXSwge1wibGFzdFB1cmNoYXNlZERhdGVcIjogKGRhdGU6IG51bWJlcikgPT4gZm9ybWF0KG51bVRvRGF0ZShkYXRlKSwgJ3l5eXktTU0tZGQnKX0pKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZsb2F0aW5nQnRuIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uc1wiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWF0ZXJpYWxJY29uXCI7XG5pbXBvcnQgeyBDb2xvckNlbGwsIERhdGVDZWxsLCBOYW1lQW5kVHlwZUNlbGwsIE51bUNlbGwsIFByaWNlQ2VsbCwgUHJvZHVjZXJDZWxsLCBSZWdpb25DZWxsLCBZZWFyQ2VsbCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCB7IFNvcnRpbmdTdGF0ZSwgVGFibGVIZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWJsZUhlYWRlclwiO1xuaW1wb3J0IHsgSUludmVudG9yeVdpbmUgfSBmcm9tIFwiLi4vLi4vbGliL1Jlc3RcIjtcblxuZXhwb3J0IGVudW0gSW52ZW50b3J5Q2hhbmdlIHtcbiAgICBJbmNyZWFzZSxcbiAgICBEZWNyZWFzZVxufTtcblxuZW51bSBTb3J0aW5nVmFsdWUge1xuICAgIEludmVudG9yeSxcbiAgICBDb2xvcixcbiAgICBOYW1lQW5kVHlwZSxcbiAgICBQcm9kdWNlcixcbiAgICBSZWdpb24sXG4gICAgVmludGFnZSxcbiAgICBQdXJjaGFzZURhdGUsXG4gICAgUHJpY2UsXG59O1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICB3aW5lczogSUludmVudG9yeVdpbmVbXSxcbiAgICBvbkludmVudG9yeUNoYW5nZTogKGlkOiBudW1iZXIsIGNoYW5nZTogSW52ZW50b3J5Q2hhbmdlKSA9PiB2b2lkLFxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICBhc2NlbmRpbmc6IGJvb2xlYW4sXG4gICAgc29ydGluZzogU29ydGluZ1ZhbHVlLFxufVxuXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5VGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFzY2VuZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHNvcnRpbmc6IFNvcnRpbmdWYWx1ZS5QdXJjaGFzZURhdGUsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJyZXNwb25zaXZlIGhpZ2hsaWdodCBjb25kZW5zZWRcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb2RpZnk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyIHsuLi50aGlzLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLkludmVudG9yeSl9IGlzTnVtQ29sID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZlbnRvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuQ29sb3IpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB7Li4udGhpcy50YWJsZUhlYWRlclByb3BzKFNvcnRpbmdWYWx1ZS5OYW1lQW5kVHlwZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUgYW5kIFR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUHJvZHVjZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWNlclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB7Li4udGhpcy50YWJsZUhlYWRlclByb3BzKFNvcnRpbmdWYWx1ZS5SZWdpb24pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuVmludGFnZSl9IGlzTnVtQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUHVyY2hhc2VEYXRlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHVyY2hhc2UgRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB7Li4udGhpcy50YWJsZUhlYWRlclByb3BzKFNvcnRpbmdWYWx1ZS5QcmljZSl9IGlzTnVtQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc29ydGVkV2luZXMubWFwKCh3aW5lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9eyB3aW5lLmlkIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJpbnZlbnRvcnktcGx1cy1taW51c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nQnRuIGNsYXNzZXM9eyBbXCJncmVlbi1iZ1wiLCBcImJ0bi1zbWFsbFwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMucHJvcHMub25JbnZlbnRvcnlDaGFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5lLmlkLCBJbnZlbnRvcnlDaGFuZ2UuSW5jcmVhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwiYWRkX2NpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nQnRuIGNsYXNzZXM9eyBbXCJyZWQtYmdcIiwgXCJidG4tc21hbGxcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnByb3BzLm9uSW52ZW50b3J5Q2hhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZS5pZCwgSW52ZW50b3J5Q2hhbmdlLkRlY3JlYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImRvX25vdF9kaXN0dXJiX29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1DZWxsIG51bT17IHdpbmUuaW52ZW50b3J5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heERlY2ltYWxzPXsgMCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvckNlbGwgY29sb3I9eyB3aW5lLmNvbG9yIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hbWVBbmRUeXBlQ2VsbCBpZD17IHdpbmUuaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IHdpbmUubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5lVHlwZT17d2luZS53aW5lVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y2VyQ2VsbCBpZD17IHdpbmUucHJvZHVjZXJJZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsgd2luZS5wcm9kdWNlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWdpb25DZWxsIGlkPXsgd2luZS5yZWdpb25JZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsgd2luZS5yZWdpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WWVhckNlbGwgeWVhcj17IHdpbmUubGFzdFB1cmNoYXNlVmludGFnZSB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlQ2VsbCBkYXRlPXsgd2luZS5sYXN0UHVyY2hhc2VEYXRlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlQ2VsbCBwcmljZT17IHdpbmUubGFzdFB1cmNoYXNlUHJpY2UgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBzb3J0ZWRXaW5lcygpIHtcbiAgICAgICAgY29uc3QgYXNjZW5kaW5nTXVsdGlwbGllciA9IHRoaXMuc3RhdGUuYXNjZW5kaW5nID8gMSA6IC0xO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuc29ydGluZykge1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuSW52ZW50b3J5OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHcxLmludmVudG9yeSkgPiAodzIuaW52ZW50b3J5KSA/IC1hc2NlbmRpbmdNdWx0aXBsaWVyIDogYXNjZW5kaW5nTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLkNvbG9yOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdzEuY29sb3IubG9jYWxlQ29tcGFyZSh3Mi5jb2xvcikgKiBhc2NlbmRpbmdNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5OYW1lQW5kVHlwZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcy5zb3J0KCh3MSwgdzIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU29ydCBieSB3aW5lVHlwZSB0aGVuIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2luZVR5cGVDb21wYXJpc29uID0gKHcxLndpbmVUeXBlID8/IFwiXCIpLmxvY2FsZUNvbXBhcmUodzIud2luZVR5cGUgPz8gXCJcIikgKiBhc2NlbmRpbmdNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZVR5cGVDb21wYXJpc29uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOYW1lIGNvbXBhcmlzb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3MS5uYW1lICYmIHcyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdzEubmFtZS5sb2NhbGVDb21wYXJlKHcyLm5hbWUpICogYXNjZW5kaW5nTXVsdGlwbGllclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHcxLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNjZW5kaW5nTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3Mi5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC1hc2NlbmRpbmdNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5lVHlwZUNvbXBhcmlzb247XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLlByb2R1Y2VyOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdzEucHJvZHVjZXIubG9jYWxlQ29tcGFyZSh3Mi5wcm9kdWNlcikgKiBhc2NlbmRpbmdNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5SZWdpb246XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3MS5yZWdpb24ubG9jYWxlQ29tcGFyZSh3Mi5yZWdpb24pICogYXNjZW5kaW5nTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuVmludGFnZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcy5zb3J0KCh3MSwgdzIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh3MS5sYXN0UHVyY2hhc2VWaW50YWdlIHx8IDApID4gKHcyLmxhc3RQdXJjaGFzZVZpbnRhZ2UgfHwgMCkgPyAtYXNjZW5kaW5nTXVsdGlwbGllciA6IGFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5QdXJjaGFzZURhdGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodzEubGFzdFB1cmNoYXNlRGF0ZSkgPiAodzIubGFzdFB1cmNoYXNlRGF0ZSkgPyAtYXNjZW5kaW5nTXVsdGlwbGllciA6IGFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5QcmljZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcy5zb3J0KCh3MSwgdzIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh3MS5sYXN0UHVyY2hhc2VQcmljZSB8fCAwKSA+ICh3Mi5sYXN0UHVyY2hhc2VQcmljZSB8fCAwKSA/IC1hc2NlbmRpbmdNdWx0aXBsaWVyIDogYXNjZW5kaW5nTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLlB1cmNoYXNlRGF0ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcy5zb3J0KCh3MSwgdzIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh3MS5sYXN0UHVyY2hhc2VEYXRlKSA+ICh3Mi5sYXN0UHVyY2hhc2VEYXRlKSA/IC1hc2NlbmRpbmdNdWx0aXBsaWVyIDogYXNjZW5kaW5nTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uSGVhZGVyQ2xpY2soZTogUmVhY3QuTW91c2VFdmVudCwgc29ydGluZ1ZhbDogU29ydGluZ1ZhbHVlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHNvcnRpbmdWYWwgPT09IHRoaXMuc3RhdGUuc29ydGluZykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe2FzY2VuZGluZzogIXByZXZTdGF0ZS5hc2NlbmRpbmd9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhc2NlbmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgc29ydGluZzogc29ydGluZ1ZhbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0YWJsZUhlYWRlclByb3BzKHNvcnRpbmdWYWw6IFNvcnRpbmdWYWx1ZSk6XG4gICAgICAgIHtzb3J0aW5nU3RhdGU6IFNvcnRpbmdTdGF0ZSwgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHZvaWR9IHtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zb3J0aW5nID09PSBzb3J0aW5nVmFsKSB7XG4gICAgICAgICAgICBjb25zdCBzb3J0aW5nU3RhdGUgPSB0aGlzLnN0YXRlLmFzY2VuZGluZyA/IFNvcnRpbmdTdGF0ZS5Bc2NlbmRpbmcgOiBTb3J0aW5nU3RhdGUuRGVzY2VuZGluZztcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc29ydGluZ1N0YXRlLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IChlKSA9PiB0aGlzLm9uSGVhZGVyQ2xpY2soZSwgc29ydGluZ1ZhbCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzb3J0aW5nU3RhdGU6IFNvcnRpbmdTdGF0ZS5Ob3RTb3J0ZWQsXG4gICAgICAgICAgICBvbkNsaWNrOiAoZSkgPT4gdGhpcy5vbkhlYWRlckNsaWNrKGUsIHNvcnRpbmdWYWwpLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuLi8uLi9saWIvd2lkZ2V0c1wiO1xuaW1wb3J0IHsgSW52ZW50b3J5QXBwIH0gZnJvbSBcIi4vSW52ZW50b3J5QXBwXCI7XG5cbm5hdmJhcihcImludmVudG9yeS1uYXZcIik7XG5SZWFjdERPTS5yZW5kZXIoY3JlYXRlRWxlbWVudChJbnZlbnRvcnlBcHApLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmVudG9yeS1jb250YWluZXJcIikpO1xuIiwiaW1wb3J0IHsgcmVhZENvb2tpZSB9IGZyb20gXCIuL0Nvb2tpZXNcIjtcbmltcG9ydCB7IElEaWN0LCBpc0VtcHR5IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgSEVBREVSUyA9IHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIlgtQ1NSRlRva2VuXCI6IHJlYWRDb29raWUoXCJjc3JmdG9rZW5cIikgfHwgXCJcIixcbn07XG5cbmV4cG9ydCB0eXBlIElRdWVyeVBhcmFtcyA9IElEaWN0PHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+O1xuXG5mdW5jdGlvbiBlbmNvZGVQYXJhbXMocGFyYW1zOiBJUXVlcnlQYXJhbXMpOiBzdHJpbmcge1xuICAgIGlmIChpc0VtcHR5KHBhcmFtcykpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBcIj9cIiArIE9iamVjdC5lbnRyaWVzKHBhcmFtcykubWFwKChbaywgdl0pID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrKX09JHtlbmNvZGVVUklDb21wb25lbnQodil9YCkuam9pbihcIiZcIik7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUpzb24ob2JqOiBvYmplY3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZWNvZGVKc29uSWZBbnkocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgaWYgKHBhcnNlRmxvYXQocmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LWxlbmd0aFwiKSA/PyBcIjBcIikgPiAwXG4gICAgICAgICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbn1cblxudHlwZSBWaW5vdGVjYUVycm9yID1cbiAgICB8IHtcIk5vdEZvdW5kXCI6IHN0cmluZ31cbiAgICB8IHtcIkludGVybmFsXCI6IHN0cmluZ31cbiAgICB8IHtcIk1pc3NpbmdDb25zdHJhaW50XCI6IHN0cmluZ31cbiAgICB8IHtcIkJhZFJlcXVlc3RcIjogc3RyaW5nfTtcblxuZnVuY3Rpb24gaXNWaW5vdGVjYUVycm9yKG9iajogb2JqZWN0KTogb2JqIGlzIFZpbm90ZWNhRXJyb3Ige1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHJldHVybiBrZXlzLmxlbmd0aCA9PT0gMVxuICAgICAgICAmJiBbXCJOb3RGb3VuZFwiLCBcIkludGVybmFsXCIsIFwiTWlzc2luZ0NvbnN0cmFpbnRcIiwgXCJCYWRSZXF1ZXN0XCJdXG4gICAgICAgICAgICAuZmluZCgoaSkgPT4gaSA9PT0ga2V5c1swXSkgIT09IHVuZGVmaW5lZDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tSZXNwb25zZShyZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPiAzMTApIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IGRlY29kZUpzb25JZkFueShyZXNwb25zZSk7XG4gICAgICAgIGlmIChpc1Zpbm90ZWNhRXJyb3IobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke09iamVjdC5rZXlzKG1lc3NhZ2UpWzBdfTogJHtPYmplY3QudmFsdWVzKG1lc3NhZ2UpWzBdfWApO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlSnNvbklmQW55KHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICB9XG59XG5cbi8qKlxuICogTWFrZXMgYW4gSFRUUCBHRVQgcmVxdWVzdCB0byB0aGUgdXJsIHdpdGggdGhlIG9wdGlvbmFsIHBhcmFtZXRlcnMsIHRoZW4gcGFyc2VzXG4gKiB0aGUgSlNPTiByZXNwb25zZS5cbiAqIEBwYXJhbSB1cmwgQSBVUkwgdG8gcmVxdWVzdFxuICogQHBhcmFtIHBhcmFtcyBBbiBvcHRpb25hbCBkaWN0aW9uYXJ5IG9mIHBhcmFtZXRlcnMgdG8gdGhlaXIgdmFsdWVzXG4gKiBAcmV0dXJucyBwYXJzZWQgSlNPTiByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0PFJlc3BvbnNlPih1cmw6IHN0cmluZywgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpKTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbi8qKlxuICogTWFrZXMgYW4gSFRUUCBQT1NUIHJlcXVlc3QgdG8gdGhlIHVybCB3aXRoIHRoZSBvcHRpb25hbCBwYXJhbWV0ZXJzIGNvbnRhaW5pbmdcbiAqIHRoZSBib2R5LCB0aGVuIHBhcnNlcyB0aGUgSlNPTiByZXNwb25zZS5cbiAqIEBwYXJhbSB1cmwgQSBVUkwgdG8gcmVxdWVzdFxuICogQHBhcmFtIGJvZHkgSlNPTiBvYmplY3QgdG8gZW5jb2RlIGFuZCBzZW5kIHRvIHRoZSBzZXJ2ZXJcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb3B0aW9uYWwgZGljdGlvbmFyeSBvZiBwYXJhbWV0ZXJzIHRvIHRoZWlyIHZhbHVlc1xuICogQHJldHVybnMgcGFyc2VkIEpTT04gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3Q8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBib2R5OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZW5jb2RlSnNvbihib2R5KSxcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0Rm9ybTxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGZvcm06IEZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZm9ybSxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbi8qKlxuICogTWFrZXMgYW4gSFRUUCBQVVQgcmVxdWVzdCB0byB0aGUgdXJsIHdpdGggdGhlIG9wdGlvbmFsIHBhcmFtZXRlcnMgY29udGFpbmluZ1xuICogdGhlIGJvZHksIHRoZW4gcGFyc2VzIHRoZSBKU09OIHJlc3BvbnNlLlxuICogQHBhcmFtIHVybCBBIFVSTCB0byByZXF1ZXN0XG4gKiBAcGFyYW0gYm9keSBKU09OIG9iamVjdCB0byBlbmNvZGUgYW5kIHNlbmQgdG8gdGhlIHNlcnZlclxuICogQHBhcmFtIHBhcmFtcyBBbiBvcHRpb25hbCBkaWN0aW9uYXJ5IG9mIHBhcmFtZXRlcnMgYW5kIHRoZWlyIHZhbHVlc1xuICogQHJldHVybnMgcGFyc2VkIEpTT04gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGJvZHk6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBlbmNvZGVKc29uKGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHV0Rm9ybTxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGZvcm06IEZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBmb3JtLFxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF0Y2g8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBib2R5OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGVuY29kZUpzb24oYm9keSksXG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZV88UmVzcG9uc2U+KHVybDogc3RyaW5nLCBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cbiIsImltcG9ydCB7IElEaWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ1NWPE8+KG9iamVjdHM6IE9bXSwgY29sdW1uT3JkZXI6IEFycmF5PGtleW9mIE8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvb2tzOiBJRGljdDwodmFsOiBhbnkpID0+IHN0cmluZz4gPSB7fSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG9iamVjdHMucmVkdWNlUmlnaHQoKGFjYywgb2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IGNvbHVtbk9yZGVyLm1hcCgoY29sKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29sIGluIGhvb2tzKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHJldHVybiBob29rc1tjb2xdKG9ialtjb2xdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmpbY29sXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBgJHthY2N9XFxuJHtmaWVsZHMuam9pbihcIixcIil9YDtcbiAgICAvLyBDb2x1bW4gbmFtZXNcbiAgICB9LCBjb2x1bW5PcmRlci5qb2luKFwiLFwiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZChmaWxlTmFtZTogc3RyaW5nLCBkYXRhOiBzdHJpbmcsIHR5cGUgPSBcInRleHQvY3N2XCIpIHtcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2RhdGFdLCB7dHlwZX0pO1xuICAgIC8vIENyZWF0ZSBhIGxpbmsgZWxlbWVudCwgY2xpY2sgaXQsIHRoZW4gZGVzdHJveSBpdFxuICAgIGNvbnN0IGVsZW0gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZWxlbS5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgZWxlbS5kb3dubG9hZCA9IGZpbGVOYW1lO1xuICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgZWxlbS5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbSk7XG4gICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwoZWxlbS5ocmVmKTtcbn1cbiIsImNvbnN0IE1JTExJU0VDT05EU19JTl9EQVkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIENyZWF0ZSBvciB1cGRhdGUgYSBjb29raWVcbiAqIEBwYXJhbSBuYW1lIG5hbWUva2V5IG9mIHRoZSBjb29raWVcbiAqIEBwYXJhbSB2YWx1ZSB2YWx1ZSB0byBzdG9yZVxuICogQHBhcmFtIGRheXMgbnVtYmVyIG9mIGRheXMgdGhlIGNvb2tpZSBpcyB2YWxpZCwgZGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgc2Vzc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29va2llKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZGF5cz86IG51bWJlcikge1xuICAgIGxldCBleHBpcmVzO1xuICAgIGlmIChkYXlzKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyAqIE1JTExJU0VDT05EU19JTl9EQVkpKTtcbiAgICAgICAgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b1VUQ1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGV4cGlyZXMgPSBcIlwiO1xuICAgIH1cbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkQ29va2llKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xuICAgIGZvciAobGV0IGMgb2YgZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKSkge1xuICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICBjID0gYy5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYy5zdWJzdHIobmFtZUVRLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDb29raWUobmFtZTogc3RyaW5nKSB7XG4gICAgY3JlYXRlQ29va2llKG5hbWUsIFwiXCIsIC0xKTtcbn1cbiIsImltcG9ydCB7IHBvc3QgfSBmcm9tIFwiLi9BcGlIZWxwZXJcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcIi4vd2lkZ2V0c1wiO1xuXG4vKiogUHJvdmlkZXMgbG9nZ2luZyBmdW5jdGlvbmFsaXR5IGZvciBjbGllbnQtc2lkZSBKYXZhU2NyaXB0IGVycm9ycy4gKi9cbmVudW0gTG9nTGV2ZWwge1xuICAgIENyaXRpY2FsID0gXCJjcml0aWNhbFwiLFxuICAgIEVycm9yID0gXCJlcnJvclwiLFxuICAgIFdhcm5pbmcgPSBcIndhcm5pbmdcIixcbiAgICBJbmZvID0gXCJpbmZvXCIsXG4gICAgRGVidWcgPSBcImRlYnVnXCIsXG59XG5cbmludGVyZmFjZSBJTG9nUmVzdWx0IHtcbiAgICBzdWNjZXNzOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuICAgIC8qKlxuICAgICAqIExvZ2dpbmcgY2xhc3MgZm9yIGNsaWVudC1zaWRlIGVycm9ycyB0aGF0IHdpbGwgYmUgcG9zdGVkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBmb3IgbG9nZ2luZyB0byB0aGUgc2FtZSBmaWxlIGFzIGFsbCBvdGhlciB2aW5vdGVjYSBsb2dzLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1vZHVsZSB0aGUgbmFtZSBvZiB0aGUgbW9kdWxlIGZyb20gd2hpY2ggdGhlIGxvZyBtZXNzYWdlcyBvcmlnaW5hdGUuXG4gICAgICogQHBhcmFtIHRvQ29uc29sZSB3aGV0aGVyIHRvIGFsc28gcHJpbnQgbWVzc2FnZXMgdG8gdGhlIGNvbnNvbGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZHVsZTogc3RyaW5nLCBwcml2YXRlIHRvQ29uc29sZSA9IGZhbHNlKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVhbnQgZm9yIGlycmVjb3ZlcmFibGUgb3IgdHJ1bHkgZXhjZXB0aW9uYWwgZXJyb3JzLiBBIHRvYXN0IHdpdGggdGhlXG4gICAgICogbG9nIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSBsb2cgd2lsbCBiZSBzZW50IGJhY2sgdG8gdGhlIHNlcnZlclxuICAgICAqIGZvciBwb3N0ZXJpdHkuXG4gICAgICovXG4gICAgcHVibGljIGxvZ0NyaXRpY2FsKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IExvZ0xldmVsLkNyaXRpY2FsO1xuICAgICAgICB0aGlzLnRvYXN0KGxldmVsLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHRvYXN0IHdpdGggdGhlIGxvZyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgbG9nIHdpbGwgYmUgc2VudFxuICAgICAqIGJhY2sgdG8gdGhlIHNlcnZlciBmb3IgcG9zdGVyaXR5LlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBMb2dMZXZlbC5FcnJvcjtcbiAgICAgICAgdGhpcy50b2FzdChsZXZlbCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSB0b2FzdCB3aXRoIHRoZSBsb2cgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIGxvZyB3aWxsIGJlIHNlbnRcbiAgICAgKiBiYWNrIHRvIHRoZSBzZXJ2ZXIgZm9yIHBvc3Rlcml0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nV2FybmluZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBMb2dMZXZlbC5XYXJuaW5nO1xuICAgICAgICB0aGlzLnRvYXN0KGxldmVsLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nSW5mbyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKExvZ0xldmVsLkluZm8sIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dEZWJ1ZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKExvZ0xldmVsLkRlYnVnLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxvZyhsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy50b0NvbnNvbGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2xldmVsLnRvVXBwZXJDYXNlKCl9ICR7bmV3IERhdGUoKX0gJHt0aGlzLm1vZHVsZX06ICR7bWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZTogSUxvZ1Jlc3VsdCA9IGF3YWl0IHBvc3QoXCIvcmVzdC9sb2dzXCIsIHtcbiAgICAgICAgICAgIGxldmVsLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSBpbnN0YW5jZW9mIE9iamVjdCA/IFwiXCIgOiBtZXNzYWdlLFxuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLm1vZHVsZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy50b2FzdChMb2dMZXZlbC5FcnJvciwgXCJGYWlsZWQgdG8gc2VuZCBjbGllbnQtc2lkZSBsb2dzIHRvIHNlcnZlci5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvYXN0KGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRvYXN0KGAke2xldmVsLnRvVXBwZXJDYXNlKCl9OiAke21lc3NhZ2V9YCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZGVsZXRlXywgZ2V0LCBJUXVlcnlQYXJhbXMsIHBhdGNoLCBwb3N0LCBwb3N0Rm9ybSwgcHV0LCBwdXRGb3JtIH0gZnJvbSBcIi4vQXBpSGVscGVyXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHsgSUNvbG9yLCBJR3JhcGUsIElHcmFwZUZvcm0sIElNb3N0Q29tbW9uUHVyY2hhc2VEYXRlLCBJUHJvZHVjZXIsIElQcm9kdWNlckZvcm0sIElQdXJjaGFzZSxcbiAgICAgICAgIElQdXJjaGFzZUNvdW50LCBJUHVyY2hhc2VGb3JtLCBJUmVnaW9uLCBJUmVnaW9uRm9ybSwgSVN0b3JlLCBJU3RvcmVGb3JtLCBJVG9wRW50aXR5LFxuICAgICAgICAgSVRvdGFsTGl0ZXJzLCBJVml0aUFyZWEsIElWaXRpQXJlYUZvcm0sIElWaXRpQXJlYVN0YXRzLCBJV2luZSwgSVdpbmVDb3VudCwgSVdpbmVGb3JtLFxuICAgICAgICAgSVdpbmVHcmFwZSwgSVdpbmVHcmFwZXNGb3JtLCBJV2luZVBhdGNoRm9ybSwgSVdpbmVUeXBlLCBJV2luZVR5cGVGb3JtIH0gZnJvbSBcIi4vUmVzdFwiO1xuaW1wb3J0IHsgSVJlc3RNb2RlbCB9IGZyb20gXCIuL1Jlc3RUeXBlc1wiO1xuaW1wb3J0IHsgSURpY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9EaWN0KG1vZGVsczogSVJlc3RNb2RlbFtdKTogSURpY3Q8c3RyaW5nIHwgbnVsbD4ge1xuICAgIGNvbnN0IHJlc3VsdDogSURpY3Q8c3RyaW5nIHwgbnVsbD4gPSB7fTtcbiAgICBtb2RlbHMuZm9yRWFjaCgobW9kZWwpID0+IHtcbiAgICAgICAgcmVzdWx0W21vZGVsLm5hbWVdID0gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgY2xhc3MgRW1wdHlSZXN1bHRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBwdWJsaWMgc3RhdGljIGlzSW5zdGFuY2UoZXJyOiBFcnJvcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZXJyLm5hbWUgPT09IHRoaXMuTkFNRTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBOQU1FID0gXCJFbXB0eVJlc3VsdEVycm9yXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IEVtcHR5UmVzdWx0RXJyb3IuTkFNRTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vbk51bGxzKG9iajogSURpY3Q8c3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IHVuZGVmaW5lZD4pOiBJUXVlcnlQYXJhbXMge1xuICAgIGNvbnN0IHE6IElRdWVyeVBhcmFtcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKG9iaikuZmlsdGVyKChrKSA9PiBCb29sZWFuKG9ialtrXSkpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgcVtrXSA9IG9ialtrXSBhcyBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuICAgIH0pO1xuICAgIHJldHVybiBxO1xufVxuXG5mdW5jdGlvbiBzaW5nbGVFbnRpdHlHZXR0ZXI8UGFyYW1zLCBSZXNwPihcbiAgICBsaXN0R2V0dGVyOiAocGFyYW1zOiBQYXJhbXMpID0+IFByb21pc2U8UmVzcFtdPixcbik6IChwYXJhbXM6IFBhcmFtcykgPT4gUHJvbWlzZTxSZXNwPiB7XG4gICAgLy8gU2hhdmUgb2ZmICdnZXQnXG4gICAgY29uc3Qgb2JqTmFtZSA9IGxpc3RHZXR0ZXIubmFtZS5zdWJzdHIoMyk7XG4gICAgcmV0dXJuIGFzeW5jIChwYXJhbXM6IFBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgbGlzdEdldHRlcihwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFJlY2VpdmVkIG1vcmUgdGhhbiBvbmUgJHtvYmpOYW1lfSByZXN1bHQgd2hlbiBvbmUgd2FzIGV4cGVjdGVkYDtcbiAgICAgICAgICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoXCJSZXN0QXBpXCIpO1xuICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0T3JDcmVhdGU8UmVxUGFyYW1zLCBSZXNwLCBGb3JtPihcbiAgICBsaXN0R2V0dGVyOiAocGFyYW1zOiBSZXFQYXJhbXMpID0+IFByb21pc2U8UmVzcFtdPixcbiAgICBjcmVhdG9yOiAoZm9ybTogRm9ybSkgPT4gUHJvbWlzZTxSZXNwPixcbik6IChwYXJhbXM6IFJlcVBhcmFtcywgZm9ybTogRm9ybSkgPT4gUHJvbWlzZTxSZXNwPiB7XG4gICAgY29uc3Qgb2JqTmFtZSA9IGxpc3RHZXR0ZXIubmFtZS5zdWJzdHIoMyk7XG4gICAgcmV0dXJuIGFzeW5jIChwYXJhbXMsIGZvcm0pID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGxpc3RHZXR0ZXIocGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdPYmogPSBhd2FpdCBjcmVhdG9yKGZvcm0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBSZWNlaXZlZCBtb3JlIHRoYW4gb25lICR7b2JqTmFtZX0gcmVzdWx0IHdoZW4gb25lIHdhcyBleHBlY3RlZGA7XG4gICAgICAgIG5ldyBMb2dnZXIoXCJSZXN0QXBpXCIpLmxvZ0Vycm9yKG1lc3NhZ2UpO1xuICAgICAgICB0aHJvdyBFcnJvcihtZXNzYWdlKTtcbiAgICB9O1xufVxuXG4vKiBDT0xPUlMgKi9cbmludGVyZmFjZSBJR2V0Q29sb3JQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2xvcnMoeyBpZCwgbmFtZSB9OiBJR2V0Q29sb3JQYXJhbXMpOiBQcm9taXNlPElDb2xvcltdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUgfSk7XG4gICAgY29uc3QgY29sb3JzOiBJQ29sb3JbXSA9IGF3YWl0IGdldChcIi9yZXN0L2NvbG9yc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRW1wdHlSZXN1bHRFcnJvcihcIkVtcHR5IHJlc3VsdCByZXR1cm5lZCBmb3IgY29sb3JcIik7XG4gICAgfVxuICAgIHJldHVybiBjb2xvcnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb2xvciA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRDb2xvcnMpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wQ29sb3JzKCk6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L2NvbG9ycy90b3BcIik7XG59XG5cbi8qIEdSQVBFUyAqL1xuaW50ZXJmYWNlIElHZXRHcmFwZXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHcmFwZXMoeyBpZCwgbmFtZSB9OiBJR2V0R3JhcGVzUGFyYW1zKTogUHJvbWlzZTxJR3JhcGVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lIH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9ncmFwZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRHcmFwZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRHcmFwZXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlR3JhcGUgPSBnZXRPckNyZWF0ZShnZXRHcmFwZXMsIGNyZWF0ZUdyYXBlKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUdyYXBlKGdyYXBlOiBJR3JhcGVGb3JtKTogUHJvbWlzZTxJR3JhcGU+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L2dyYXBlc1wiLCBncmFwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVHcmFwZShpZDogbnVtYmVyLCBncmFwZTogSUdyYXBlRm9ybSk6IFByb21pc2U8SUdyYXBlPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3QvZ3JhcGVzLyR7aWR9YCwgZ3JhcGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wR3JhcGVzKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L2dyYXBlcy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFBST0RVQ0VSUyAqL1xuaW50ZXJmYWNlIElHZXRQcm9kdWNlcnNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcmVnaW9uSWQ/OiBudW1iZXI7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZS1sZW5ndGhcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWNlcnMoe2lkLCBuYW1lLCByZWdpb25JZH06IElHZXRQcm9kdWNlcnNQYXJhbXMpOiBQcm9taXNlPElQcm9kdWNlcltdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtpZCwgbmFtZSwgcmVnaW9uX2lkOiByZWdpb25JZH0pO1xuICAgIGNvbnN0IHByb2R1Y2VyczogSVByb2R1Y2VyW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9wcm9kdWNlcnNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHByb2R1Y2Vycztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y2VyID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFByb2R1Y2Vycyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVQcm9kdWNlciA9IGdldE9yQ3JlYXRlKGdldFByb2R1Y2VycywgY3JlYXRlUHJvZHVjZXIpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjZXIocHJvZHVjZXI6IElQcm9kdWNlckZvcm0pOiBQcm9taXNlPElQcm9kdWNlcj4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvcHJvZHVjZXJzXCIsIHByb2R1Y2VyKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y2VyKHByb2R1Y2VyOiBJUHJvZHVjZXIpOiBQcm9taXNlPElQcm9kdWNlcj4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3Byb2R1Y2Vycy8ke3Byb2R1Y2VyLmlkfWAsIHByb2R1Y2VyKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y2VyKGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gZGVsZXRlXyhgL3Jlc3QvcHJvZHVjZXJzLyR7aWR9YCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BQcm9kdWNlcnMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHJvZHVjZXJzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogUFVSQ0hBU0VTICovXG5pbnRlcmZhY2UgSUdldFB1cmNoYXNlc1BhcmFtcyB7XG4gICAgd2luZUlkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHVyY2hhc2VzKHt3aW5lSWR9OiBJR2V0UHVyY2hhc2VzUGFyYW1zKTogUHJvbWlzZTxJUHVyY2hhc2VbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IHdpbmVfaWQ6IHdpbmVJZCB9KTtcbiAgICBjb25zdCBwdXJjaGFzZXMgPSBhd2FpdCBnZXQ8SVB1cmNoYXNlW10+KFwiL3Jlc3QvcHVyY2hhc2VzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiBwdXJjaGFzZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQdXJjaGFzZShwdXJjaGFzZTogSVB1cmNoYXNlRm9ybSk6IFByb21pc2U8SVB1cmNoYXNlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9wdXJjaGFzZXNcIiwgcHVyY2hhc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHVyY2hhc2UoaWQ6IG51bWJlciwgcHVyY2hhc2U6IElQdXJjaGFzZUZvcm0pOiBQcm9taXNlPElQdXJjaGFzZT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3B1cmNoYXNlcy8ke2lkfWAsIHB1cmNoYXNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVB1cmNoYXNlKGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gZGVsZXRlXyhgL3Jlc3QvcHVyY2hhc2VzLyR7aWR9YCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNb3N0Q29tbW9uUHVyY2hhc2VEYXRlKCk6IFByb21pc2U8SU1vc3RDb21tb25QdXJjaGFzZURhdGU+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHVyY2hhc2VzL21vc3QtY29tbW9uLXB1cmNoYXNlLWRhdGVcIik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3RhbExpdGVycygpOiBQcm9taXNlPElUb3RhbExpdGVycz4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wdXJjaGFzZXMvdG90YWwtbGl0ZXJzXCIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHVyY2hhc2VDb3VudCgpOiBQcm9taXNlPElQdXJjaGFzZUNvdW50PiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3B1cmNoYXNlcy9jb3VudFwiKTtcbn1cblxuLyogUkVHSU9OUyAqL1xuaW50ZXJmYWNlIElHZXRSZWdpb25QYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcHJvZHVjZXJOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVnaW9ucyh7IGlkLCBuYW1lLCBwcm9kdWNlck5hbWUgfTogSUdldFJlZ2lvblBhcmFtcyk6IFByb21pc2U8SVJlZ2lvbltdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUsIHByb2R1Y2VyX25hbWU6IHByb2R1Y2VyTmFtZSB9KTtcbiAgICBjb25zdCByZWdpb25zOiBJUmVnaW9uW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9yZWdpb25zXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiByZWdpb25zO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UmVnaW9uID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFJlZ2lvbnMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlUmVnaW9uID0gZ2V0T3JDcmVhdGUoZ2V0UmVnaW9ucywgY3JlYXRlUmVnaW9uKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlZ2lvbihyZWdpb246IElSZWdpb25Gb3JtKTogUHJvbWlzZTxJUmVnaW9uPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9yZWdpb25zXCIsIHJlZ2lvbik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZWdpb24ocmVnaW9uOiBJUmVnaW9uKTogUHJvbWlzZTxJUmVnaW9uPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3QvcmVnaW9ucy8ke3JlZ2lvbi5pZH1gLCByZWdpb24pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wUmVnaW9ucyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9yZWdpb25zL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogU1RPUkVTICovXG5pbnRlcmZhY2UgSUdldFN0b3JlUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RvcmVzKHtpZCwgbmFtZX06IElHZXRTdG9yZVBhcmFtcyk6IFByb21pc2U8SVN0b3JlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2lkLCBuYW1lfSk7XG4gICAgY29uc3Qgc3RvcmVzOiBJU3RvcmVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3N0b3Jlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gc3RvcmVzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RvcmUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0U3RvcmVzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVN0b3JlID0gZ2V0T3JDcmVhdGUoZ2V0U3RvcmVzLCBjcmVhdGVTdG9yZSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTdG9yZShzdG9yZTogSVN0b3JlRm9ybSk6IFByb21pc2U8SVN0b3JlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9zdG9yZXNcIiwgc3RvcmUpO1xufVxuXG4vKiBWSVRJIEFSRUFTICovXG5pbnRlcmZhY2UgSUdldFZpdGlBcmVhc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICByZWdpb25OYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Vml0aUFyZWFzKFxuICAgIHsgaWQsIG5hbWUsIHJlZ2lvbk5hbWUgfTogSUdldFZpdGlBcmVhc1BhcmFtcyxcbik6IFByb21pc2U8SVZpdGlBcmVhW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSwgcmVnaW9uX25hbWU6IHJlZ2lvbk5hbWUgfSk7XG4gICAgY29uc3Qgdml0aUFyZWFzOiBJVml0aUFyZWFbXSA9IGF3YWl0IGdldChcIi9yZXN0L3ZpdGktYXJlYXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHZpdGlBcmVhcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFZpdGlBcmVhID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFZpdGlBcmVhcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVWaXRpQXJlYSA9IGdldE9yQ3JlYXRlKGdldFZpdGlBcmVhcywgY3JlYXRlVml0aUFyZWEpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVml0aUFyZWEodml0aUFyZWE6IElWaXRpQXJlYUZvcm0pOiBQcm9taXNlPElWaXRpQXJlYT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvdml0aS1hcmVhc1wiLCB2aXRpQXJlYSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVWaXRpQXJlYSh2aXRpQXJlYTogSVZpdGlBcmVhKTogUHJvbWlzZTxJVml0aUFyZWE+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC92aXRpLWFyZWFzLyR7dml0aUFyZWEuaWR9YCwgdml0aUFyZWEpO1xufVxuXG5pbnRlcmZhY2UgSUdldFZpdGlBcmVhU3RhdHNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIHJlZ2lvbklkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Vml0aUFyZWFTdGF0cyhcbiAgICB7IGlkLCByZWdpb25JZCB9OiBJR2V0Vml0aUFyZWFTdGF0c1BhcmFtcyxcbik6IFByb21pc2U8SVZpdGlBcmVhU3RhdHNbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCByZWdpb25faWQ6IHJlZ2lvbklkIH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC92aXRpLWFyZWFzL3N0YXRzXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wVml0aUFyZWFzKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3ZpdGktYXJlYXMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBXSU5FUyAqL1xuaW50ZXJmYWNlIElHZXRXaW5lc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgcHJvZHVjZXJJZD86IG51bWJlcjtcbiAgICByZWdpb25JZD86IG51bWJlcjtcbiAgICB2aXRpQXJlYUlkPzogbnVtYmVyO1xuICAgIHdpbmVUeXBlSWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lcyhcbiAgICB7IGlkLCBwcm9kdWNlcklkLCByZWdpb25JZCwgdml0aUFyZWFJZCwgd2luZVR5cGVJZCB9OiBJR2V0V2luZXNQYXJhbXMsXG4pOiBQcm9taXNlPElXaW5lW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe1xuICAgICAgICBpZCwgcmVnaW9uX2lkOiByZWdpb25JZCwgcHJvZHVjZXJfaWQ6IHByb2R1Y2VySWQsXG4gICAgICAgIHZpdGlfYXJlYV9pZDogdml0aUFyZWFJZCwgd2luZV90eXBlX2lkOiB3aW5lVHlwZUlkLFxuICAgIH0pO1xuICAgIGNvbnN0IHdpbmVzOiBJV2luZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvd2luZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHdpbmVzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0V2luZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRXaW5lcyk7XG5cbmNvbnN0IGNyZWF0ZVdpbmVIdHRwRm9ybSA9ICh3aW5lOiBJV2luZUZvcm0sIGZpbGU6IEZpbGUgfCBudWxsKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm0uYXBwZW5kKFwid2luZV9mb3JtXCIsIG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeSh3aW5lKV0sIHt0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIn0pKTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgICBmb3JtLmFwcGVuZChcImltYWdlXCIsIGZpbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5lKHdpbmU6IElXaW5lRm9ybSwgZmlsZTogRmlsZSB8IG51bGwpOiBQcm9taXNlPElXaW5lPiB7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVdpbmVIdHRwRm9ybSh3aW5lLCBmaWxlKTtcbiAgICByZXR1cm4gcG9zdEZvcm0oXCIvcmVzdC93aW5lc1wiLCBmb3JtKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdpbmUoaWQ6IG51bWJlciwgd2luZTogSVdpbmVGb3JtLCBmaWxlOiBGaWxlIHwgbnVsbCk6IFByb21pc2U8SVdpbmU+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlV2luZUh0dHBGb3JtKHdpbmUsIGZpbGUpO1xuICAgIHJldHVybiBwdXRGb3JtKGAvcmVzdC93aW5lcy8ke2lkfWAsIGZvcm0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFydFVwZGF0ZVdpbmUoaWQ6IG51bWJlciwgd2luZTogSVdpbmVQYXRjaEZvcm0pOiBQcm9taXNlPElXaW5lPiB7XG4gICAgcmV0dXJuIHBhdGNoKGAvcmVzdC93aW5lcy8ke2lkfWAsIHdpbmUpO1xufVxuXG5pbnRlcmZhY2UgSVNlYXJjaFdpbmVzUGFyYW1zIHtcbiAgICBjb2xvckxpa2U/OiBzdHJpbmc7XG4gICAgd2luZVR5cGVMaWtlPzogc3RyaW5nO1xuICAgIHByb2R1Y2VyTGlrZT86IHN0cmluZztcbiAgICByZWdpb25MaWtlPzogc3RyaW5nO1xuICAgIHZpdGlBcmVhTGlrZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFdpbmVzKFxuICAgIHsgY29sb3JMaWtlLCB3aW5lVHlwZUxpa2UsIHByb2R1Y2VyTGlrZSwgcmVnaW9uTGlrZSwgdml0aUFyZWFMaWtlIH06IElTZWFyY2hXaW5lc1BhcmFtcyxcbik6IFByb21pc2U8SVdpbmVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7XG4gICAgICAgIGNvbG9yX2xpa2U6IGNvbG9yTGlrZSwgd2luZV90eXBlX2xpa2U6IHdpbmVUeXBlTGlrZSwgcHJvZHVjZXJfbGlrZTogcHJvZHVjZXJMaWtlLFxuICAgICAgICByZWdpb25fbGlrZTogcmVnaW9uTGlrZSwgdml0aV9hcmVhX2xpa2U6IHZpdGlBcmVhTGlrZSxcbiAgICB9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvd2luZXMvc2VhcmNoXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZVZhcmlldGllcygpOiBQcm9taXNlPElXaW5lQ291bnQ+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvd2luZXMvY291bnRcIik7XG59XG5cbi8qIFdJTkUgR1JBUEVTICovXG5pbnRlcmZhY2UgSUdldFdpbmVHcmFwZXNQYXJhbXMge1xuICAgIHdpbmVJZD86IG51bWJlcjtcbiAgICBncmFwZUlkPzogbnVtYmVyO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmUtbGVuZ3RoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZUdyYXBlcyh7IHdpbmVJZCwgZ3JhcGVJZCB9OiBJR2V0V2luZUdyYXBlc1BhcmFtcyk6IFByb21pc2U8SVdpbmVHcmFwZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgd2luZV9pZDogd2luZUlkLCBncmFwZV9pZDogZ3JhcGVJZCB9KTtcbiAgICBjb25zdCB3aW5lR3JhcGVzOiBJV2luZUdyYXBlW10gPSBhd2FpdCBnZXQoXCIvcmVzdC93aW5lLWdyYXBlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gd2luZUdyYXBlcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmVHcmFwZXMod2luZUdyYXBlczogSVdpbmVHcmFwZXNGb3JtKTogUHJvbWlzZTxJV2luZUdyYXBlW10+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3dpbmUtZ3JhcGVzXCIsIHdpbmVHcmFwZXMpO1xufVxuXG4vKiBXSU5FIFRZUEVTICovXG5pbnRlcmZhY2UgSUdldFdpbmVUeXBlc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVUeXBlcyh7IGlkLCBuYW1lIH06IElHZXRXaW5lVHlwZXNQYXJhbXMpOiBQcm9taXNlPElXaW5lVHlwZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUgfSk7XG4gICAgY29uc3Qgd2luZVR5cGVzOiBJV2luZVR5cGVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3dpbmUtdHlwZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHdpbmVUeXBlcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFdpbmVUeXBlID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFdpbmVUeXBlcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVXaW5lVHlwZSA9IGdldE9yQ3JlYXRlKGdldFdpbmVUeXBlcywgY3JlYXRlV2luZVR5cGUpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZVR5cGUod2luZVR5cGU6IElXaW5lVHlwZUZvcm0pOiBQcm9taXNlPElXaW5lVHlwZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvd2luZS10eXBlc1wiLCB3aW5lVHlwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVXaW5lVHlwZSh3aW5lVHlwZTogSVdpbmVUeXBlKTogUHJvbWlzZTxJV2luZVR5cGU+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC93aW5lLXR5cGVzLyR7d2luZVR5cGUuaWR9YCwgd2luZVR5cGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wV2luZVR5cGVzKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3dpbmUtdHlwZXMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuIiwiLyoqIEJhc2ljIHR5cGUgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgcmVzcG9uc2UgSlNPTiBvZiBtYW55IGFzeW5jaHJvbm91cyByZXF1ZXN0cy4gKi9cbmltcG9ydCB7IElSZXN0TW9kZWwgfSBmcm9tIFwiLi9SZXN0VHlwZXNcIjtcblxuLyoqXG4gKiBLZXktdmFsdWUgc3RvcmUgd2hlcmUgdGhlIGtleSBtdXN0IGJlIGEgc3RyaW5nLCBidXQgdGhlIHZhbHVlIGlzIG9mIGFueSB0eXBlXG4gKiBULlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElEaWN0PFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBvYmplY3RzIHRvIGEgc2luZ2xlIG9iamVjdCBvZiBuYW1lcyB0byBudWxsIGZvciB1c2Ugd2l0aCBtYXRlcmlhbGl6ZVxuICogYXV0b2NvbXBsZXRlLlxuICogQHBhcmFtIG9iamVjdHMgQW4gYXJyYXkgb2YgUkVTVCBtb2RlbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RNb2RlbHNUb05hbWVEaWN0KG9iamVjdHM6IElSZXN0TW9kZWxbXSk6IElEaWN0PG51bGw+IHtcbiAgICBjb25zdCBkaWN0OiBJRGljdDxudWxsPiA9IHt9O1xuICAgIG9iamVjdHMubWFwKChvYmopID0+IHtcbiAgICAgICAgZGljdFtvYmoubmFtZV0gPSBudWxsO1xuICAgIH0pO1xuICAgIHJldHVybiBkaWN0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGFuIDgtZGlnaXQgbnVtYmVyIG9mIGZvcm1hdCAneXl5eW1tZGQnIHRvIGEgRGF0ZSBvYmplY3QuXG4gKiBAcGFyYW0gbnVtIGEgZGF0ZSBudW1iZXIgb2YgZm9ybWF0ICd5eXl5bW1kZCdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG51bVRvRGF0ZShudW06IG51bWJlcik6IERhdGUge1xuICAgIGNvbnN0IHN0ck51bSA9IGAke251bX1gO1xuICAgIGlmIChzdHJOdW0ubGVuZ3RoICE9PSA4KSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBkYXRlIG51bWJlciAnJHtzdHJOdW19J2ApO1xuICAgIH1cbiAgICBjb25zdCB5ZWFyID0gc3RyTnVtLnN1YnN0cigwLCA0KTtcbiAgICBjb25zdCBtb250aCA9IHN0ck51bS5zdWJzdHIoNCwgMik7XG4gICAgY29uc3QgZGF5ID0gc3RyTnVtLnN1YnN0cig2LCAyKTtcbiAgICAvLyBKUyBtb250aHMgYXJlIDAtYmFzZWRcbiAgICByZXR1cm4gbmV3IERhdGUocGFyc2VJbnQoeWVhciwgMTApLCBwYXJzZUludChtb250aCwgMTApIC0gMSwgcGFyc2VJbnQoZGF5LCAxMCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVRvTnVtKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKiAxMF8wMDAgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkgKiAxMDAgKyBkYXRlLmdldERhdGUoKTtcbn1cblxuZXhwb3J0IGNvbnN0IEVOX0RBU0g6IHN0cmluZyA9IFwi4oCTXCI7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZGVmYXVsdCB2aW50YWdlIHllYXIsIHdoaWNoIGlzIHR3byB5ZWFycyBwcmlvciB0byB0aGUgY3VycmVudFxuICogeWVhci4gVGhpcyBmdW5jdGlvbiBkdXBsaWNhdGVzIHRoZSBQeXRob24gZnVuY3Rpb25cbiAqIHZpbm90ZWNhLnV0aWxzLmRlZmF1bHRfdmludGFnZV95ZWFyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VmludGFnZVllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYW4gb2JqZWN0IGlzIGVtcHR5LCBpLmUuIGhhcyBubyBrZXlzLlxuICogQHBhcmFtIG9iaiBBbiBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkob2JqOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5cbi8qKlxuICogUmV0dXJucyBzIHdpdGggdGhlIGZpcnN0IGxldHRlciBjYXBpdGFsaXplZC5cbiAqIEBwYXJhbSBzIEEgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPiAwID8gc1swXS50b1VwcGVyQ2FzZSgpICsgcy5zdWJzdHJpbmcoMSkgOiBcIlwiO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgZGlzcGxheSBuYW1lIHRvIGFuIGh0bWwgaWRcbiAqIEBwYXJhbSBuYW1lIEEgY29tcG9uZW50IGRpc3BsYXkgbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZVRvSWQobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmFtZS5yZXBsYWNlKC8oXFxzKSsvZywgXCItXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIG1heGltdW0gZWxlbWVudCBieSBvbmUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHR5cGUgb2YgZWxlbWVudFxuICogQHBhcmFtIGFyciBBbiBhcnJheSBvZiBvYmpjZWN0c1xuICogQHBhcmFtIGFjY2Vzc29yIEEgZnVuY3Rpb24gZm9yIGFjY2Vzc2luZyBhIG51bWJlciBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4Qnk8VD4oYXJyOiBUW10sIGFjY2Vzc29yOiAoZWxlbTogVCkgPT4gbnVtYmVyKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IG1heEVsZW06IFQgfCB1bmRlZmluZWQ7XG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eTtcbiAgICBmb3IgKGNvbnN0IGVsZW0gb2YgYXJyKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGFjY2Vzc29yKGVsZW0pO1xuICAgICAgICBpZiAodmFsID4gbWF4VmFsKSB7XG4gICAgICAgICAgICBtYXhFbGVtID0gZWxlbTtcbiAgICAgICAgICAgIG1heFZhbCA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF4RWxlbTtcbn1cblxuLyoqXG4gKiBTdW1zIGFuIGFycmF5IG9mIG9iamVjdHMgYnkgb25lIG9mIHRoZSBvYmplY3RzJyBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIGFyciBBbiBhcnJheSBvZiBvYmplY3RzXG4gKiBAcGFyYW0gYWNjZXNzb3IgQSBmdW5jdGlvbiBmb3IgYWNjZXNzaW5nIG9uZSBvZiB0aGUgb2JqZWN0cycgcHJvcGVydGllc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3VtQnk8VD4oYXJyOiBUW10sIGFjY2Vzc29yOiAoZWxlbTogVCkgPT4gbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGNvbnN0IGVsZW0gb2YgYXJyKSB7XG4gICAgICAgIHN1bSArPSBhY2Nlc3NvcihlbGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbn1cblxuLyoqXG4gKiBDb21wYXJlcyB0d28gb2JqZWN0cyBmb3IgZGVlcCBlcXVhbGl0eS5cbiAqIEBwYXJhbSBhIEFuIG9iamVjdFxuICogQHBhcmFtIGIgQW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmVFcXVhbChhOiBhbnksIGI6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgY29uc3QgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcbiAgICBpZiAoYUtleXMubGVuZ3RoICE9PSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGsgb2YgYUtleXMpIHtcbiAgICAgICAgaWYgKGFba10gIT09IGJba10pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuaW50ZXJmYWNlIElSYW5nZUFyZ3Mge1xuICAgIHN0YXJ0PzogbnVtYmVyO1xuICAgIHN0b3A/OiBudW1iZXI7XG4gICAgc3RlcD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhYmxlIHJhbmdlIG9mIG51bWJlcnNvbkNsaWNrLlxuICogQHBhcmFtIHN0YXJ0IEZpcnN0IG51bWJlciBvZiB0aGUgcmFuZ2VcbiAqIEBwYXJhbSBzdG9wIEVuZCBvZiB0aGUgcmFuZ2UgKG5vbi1pbmNsdXNpdmUpXG4gKiBAcGFyYW0gc3RlcCBJbmNyZW1lbnQgb2YgdGhlIHJhbmdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogcmFuZ2UoeyBzdGFydCwgc3RvcCwgc3RlcCB9OiBJUmFuZ2VBcmdzKTogSXRlcmFibGVJdGVyYXRvcjxudW1iZXI+IHtcbiAgICBzdGVwID0gc3RlcCB8fCAxO1xuICAgIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgICBzdG9wID0gc3RvcCB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICAgICAgeWllbGQgaTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbWFnZUV4aXN0cyhpbWFnZVVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpbWFnZVVybCwge21ldGhvZDogXCJIRUFEXCJ9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZUFuZFR5cGUobmFtZTogc3RyaW5nIHwgbnVsbCwgd2luZVR5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAkeyhuYW1lID8gbmFtZSArIFwiIFwiIDogXCJcIil9JHt3aW5lVHlwZX1gO1xufVxuXG4vLyBUT0RPOiBtb3ZlIHRvIHVzZSBSZWFjdCByb3V0ZXIgb3Igc29tZXRoaW5nIHNpbWlsYXJcbmV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdCh1cmw6IHN0cmluZykge1xuICAgIGxvY2F0aW9uLmhyZWYgPSB1cmw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWQoZnVuOiAoKSA9PiB2b2lkKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuKTtcbn1cbiIsImltcG9ydCB7IEF1dG9jb21wbGV0ZSwgRHJvcGRvd24sIFNpZGVuYXYgfSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgeyBJRGljdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbnR5cGUgT25DaGFuZ2UgPSAoZTogc3RyaW5nKSA9PiB2b2lkO1xuXG4vKiogU2V0dXAgYXV0b2NvbXBsZXRpb24gd2l0aCBwcm92aWRlZCBjb21wbGV0aW9uIG9wdGlvbnMuICovXG5leHBvcnQgZnVuY3Rpb24gYXV0b2NvbXBsZXRlKGVsZW06IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25zOiBJRGljdDxzdHJpbmcgfCBudWxsPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IE9uQ2hhbmdlLCBtaW5MZW5ndGggPSAxLCBsaW1pdCA9IDUpIHtcbiAgICBpZiAoZWxlbS5jdXJyZW50KSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgICAgICBuZXcgQXV0b2NvbXBsZXRlKGVsZW0uY3VycmVudCwge1xuICAgICAgICAgICAgZGF0YTogY29tcGxldGlvbnMsXG4gICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIG1pbkxlbmd0aCxcblxuICAgICAgICAgICAgb25BdXRvY29tcGxldGU6IGZ1bmN0aW9uKHRoaXMsIHRleHQpIHsgIC8vIHRzbGludDpkaXNhYmxlLWxpbmUgb2JqZWN0LWxpdGVyYWwtc2hvcnRoYW5kXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UodGV4dCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gRml4IG92ZXJsYXBwdGluZyB0ZXh0IGJ1Z1xuICAgICAgICBNLnVwZGF0ZVRleHRGaWVsZHMoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlTmF2YmFyVGFiKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG4vKiogRW5hYmxlcyBuYXZiYXIgbWVudXMuIFNob3VsZCBiZSBjYWxsZWQgb24gZXZlcnkgcGFnZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYXZiYXIoYWN0aXZlTmF2VGFiSWQ/OiBzdHJpbmcpIHtcbiAgICBpZiAoYWN0aXZlTmF2VGFiSWQpIHtcbiAgICAgICAgYWN0aXZhdGVOYXZiYXJUYWIoYWN0aXZlTmF2VGFiSWQpO1xuICAgIH1cbiAgICBjb25zdCBzaWRlTmF2RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZW5hdlwiKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICBuZXcgU2lkZW5hdihzaWRlTmF2RWxlbSEpO1xuICAgIGNvbnN0IGRyb3Bkb3duRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tdHJpZ2dlclwiKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICBuZXcgRHJvcGRvd24oZHJvcGRvd25FbGVtISk7XG59XG5cbi8qKiBTaW1wbGlmaWVzIGRpc3BsYXlpbmcgb2YgdG9hc3QgbWVzc2FnZXMgdG8gdXNlciAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvYXN0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIE0udG9hc3Qoe1xuICAgICAgICBjbGFzc2VzOiBcInJlZC1iZ1wiLFxuICAgICAgICBkaXNwbGF5TGVuZ3RoOiAxMDAwMCxcbiAgICAgICAgaHRtbDogbWVzc2FnZSxcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=