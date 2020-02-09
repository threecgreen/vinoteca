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
/******/ 		"wines": 0
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
/******/ 	deferredModules.push([10,"vendors"]);
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

/***/ "./components/Pagination.tsx":
/*!***********************************!*\
  !*** ./components/Pagination.tsx ***!
  \***********************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MaterialIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MaterialIcon */ "./components/MaterialIcon.tsx");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");



var Arrow;
(function (Arrow) {
    Arrow[Arrow["Left"] = 0] = "Left";
    Arrow[Arrow["Right"] = 1] = "Right";
})(Arrow || (Arrow = {}));
class Pagination extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "pagination center-align" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: this.arrowIsEnabled(Arrow.Left) ? "waves-effect" : "disabled " },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { onClick: (e) => this.onArrowClick(e, Arrow.Left) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MaterialIcon__WEBPACK_IMPORTED_MODULE_1__["MaterialIcon"], { iconName: "chevron_left" }))),
            [...Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["range"])({ start: 1, stop: this.props.pageCount + 1 })].map((pgNum) => {
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: this.props.currentPage === pgNum ? "active red-bg" : "waves-effect", key: pgNum },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { onClick: (e) => { e.preventDefault(); this.props.onClick(pgNum); } }, pgNum)));
            }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: this.arrowIsEnabled(Arrow.Right) ? "waves-effect" : "disabled " },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { onClick: (e) => this.onArrowClick(e, Arrow.Right) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MaterialIcon__WEBPACK_IMPORTED_MODULE_1__["MaterialIcon"], { iconName: "chevron_right" })))));
    }
    arrowIsEnabled(arrow) {
        switch (arrow) {
            case Arrow.Left:
                return this.props.currentPage > 1;
            case Arrow.Right:
                return this.props.currentPage < this.props.pageCount;
            default:
                return false;
        }
    }
    onArrowClick(e, arrow) {
        e.preventDefault();
        if (this.arrowIsEnabled(arrow)) {
            switch (arrow) {
                case Arrow.Left:
                    this.props.onClick(this.props.currentPage - 1);
                    return;
                case Arrow.Right:
                    this.props.onClick(this.props.currentPage + 1);
                    return;
                default:
                    return;
            }
        }
    }
}


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

/***/ "./components/WinesTable.tsx":
/*!***********************************!*\
  !*** ./components/WinesTable.tsx ***!
  \***********************************/
/*! exports provided: ColumnToExclude, WinesTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnToExclude", function() { return ColumnToExclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinesTable", function() { return WinesTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TableCells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableCells */ "./components/TableCells.tsx");
/* harmony import */ var _TableHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableHeader */ "./components/TableHeader.tsx");



var SortingValue;
(function (SortingValue) {
    SortingValue[SortingValue["Inventory"] = 0] = "Inventory";
    SortingValue[SortingValue["Color"] = 1] = "Color";
    SortingValue[SortingValue["NameAndType"] = 2] = "NameAndType";
    SortingValue[SortingValue["Producer"] = 3] = "Producer";
    SortingValue[SortingValue["Region"] = 4] = "Region";
    SortingValue[SortingValue["VitiArea"] = 5] = "VitiArea";
    SortingValue[SortingValue["Vintage"] = 6] = "Vintage";
    SortingValue[SortingValue["Rating"] = 7] = "Rating";
})(SortingValue || (SortingValue = {}));
;
var ColumnToExclude;
(function (ColumnToExclude) {
    ColumnToExclude[ColumnToExclude["Producer"] = 0] = "Producer";
    ColumnToExclude[ColumnToExclude["Region"] = 1] = "Region";
    ColumnToExclude[ColumnToExclude["VitiArea"] = 2] = "VitiArea";
})(ColumnToExclude || (ColumnToExclude = {}));
const defaultProps = {
    currentPage: 1,
    winesPerPage: 250,
};
class WinesTable extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            ascending: true,
            sorting: SortingValue.NameAndType,
            colorSelection: "",
        };
    }
    render() {
        const filterHeader = this.props.filterTexts
            ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: "filters" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["FilterHeader"], Object.assign({}, this.filterHeaderProps("inventory"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["SelectFilterHeader"], Object.assign({}, this.filterHeaderProps("color"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["FilterHeader"], Object.assign({}, this.filterHeaderProps("wineType"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["FilterHeader"], Object.assign({}, this.filterHeaderProps("producer"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["FilterHeader"], Object.assign({}, this.filterHeaderProps("region"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["FilterHeader"], Object.assign({}, this.filterHeaderProps("vitiArea"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["FilterHeader"], Object.assign({}, this.filterHeaderProps("lastPurchaseVintage"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["FilterHeader"], Object.assign({}, this.filterHeaderProps("rating"))))) : null;
        const exCol = this.props.excludeColumn;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "responsive highlight condensed" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: "headers" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.Inventory), { isNumCol: true }), "Inventory"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.Color)), "Color"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.NameAndType)), "Name and Type"),
                    exCol === ColumnToExclude.Producer
                        || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.Producer)), "Producer"),
                    exCol === ColumnToExclude.Region
                        || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.Region)), "Region"),
                    exCol === ColumnToExclude.VitiArea
                        || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.VitiArea)), "Viticultural Area"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.Vintage), { isNumCol: true }), "Vintage"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], Object.assign({}, this.tableHeaderProps(SortingValue.Rating), { isNumCol: true }), "Rating")),
                filterHeader),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.winesForPage.map((wine) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: wine.id },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableCells__WEBPACK_IMPORTED_MODULE_1__["NumCell"], { num: wine.inventory, maxDecimals: 0 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableCells__WEBPACK_IMPORTED_MODULE_1__["ColorCell"], { color: wine.color }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableCells__WEBPACK_IMPORTED_MODULE_1__["NameAndTypeCell"], { id: wine.id, name: wine.name, wineType: wine.wineType }),
                exCol === ColumnToExclude.Producer
                    || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableCells__WEBPACK_IMPORTED_MODULE_1__["ProducerCell"], { id: wine.producerId, name: wine.producer }),
                exCol === ColumnToExclude.Region
                    || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableCells__WEBPACK_IMPORTED_MODULE_1__["RegionCell"], { id: wine.regionId, name: wine.region }),
                exCol === ColumnToExclude.VitiArea
                    || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableCells__WEBPACK_IMPORTED_MODULE_1__["VitiAreaCell"], { id: wine.vitiAreaId, name: wine.vitiArea }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableCells__WEBPACK_IMPORTED_MODULE_1__["YearCell"], { year: wine.lastPurchaseVintage }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableCells__WEBPACK_IMPORTED_MODULE_1__["NumCell"], { maxDecimals: 0, num: wine.rating })))))));
    }
    get winesForPage() {
        const start = (this.props.currentPage - 1) * this.props.winesPerPage;
        const sortedWines = this.sortedWines;
        return sortedWines.slice(start, Math.min(sortedWines.length, start + this.props.winesPerPage));
    }
    get sortedWines() {
        const ascendingMultiplier = this.state.ascending ? 1 : -1;
        switch (this.state.sorting) {
            case SortingValue.Inventory:
                return this.props.wines.sort((w1, w2) => (w1.inventory - w2.inventory) * ascendingMultiplier);
            case SortingValue.Color:
                return this.props.wines.sort((w1, w2) => w1.color.localeCompare(w2.color) * ascendingMultiplier);
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
                return this.props.wines.sort((w1, w2) => w1.producer.localeCompare(w2.producer) * ascendingMultiplier);
            case SortingValue.Region:
                return this.props.wines.sort((w1, w2) => w1.region.localeCompare(w2.region) * ascendingMultiplier);
            case SortingValue.VitiArea:
                return this.props.wines.sort((w1, w2) => (w1.vitiArea || "").localeCompare(w2.vitiArea || "") * ascendingMultiplier);
            case SortingValue.Vintage:
                // Sort NV first
                return this.props.wines.sort((w1, w2) => { var _a, _b; return (_a = w1.lastPurchaseVintage, (_a !== null && _a !== void 0 ? _a : 3000)) - (_b = w2.lastPurchaseVintage, (_b !== null && _b !== void 0 ? _b : 3000)) * ascendingMultiplier; });
            case SortingValue.Rating:
                return this.props.wines.sort((w1, w2) => { var _a, _b; return (_a = w1.rating, (_a !== null && _a !== void 0 ? _a : 0)) - (_b = w2.rating, (_b !== null && _b !== void 0 ? _b : 0)) * ascendingMultiplier; });
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
            const sortingState = this.state.ascending ? _TableHeader__WEBPACK_IMPORTED_MODULE_2__["SortingState"].Ascending : _TableHeader__WEBPACK_IMPORTED_MODULE_2__["SortingState"].Descending;
            return {
                sortingState,
                onClick: (e) => this.onHeaderClick(e, sortingVal),
            };
        }
        return {
            sortingState: _TableHeader__WEBPACK_IMPORTED_MODULE_2__["SortingState"].NotSorted,
            onClick: (e) => this.onHeaderClick(e, sortingVal),
        };
    }
    // Constructs props for a filter header
    filterHeaderProps(columnName) {
        var _a;
        // This should only be called if both props exist
        return {
            onChange: (filterExpr) => this.props.onFilterChange(columnName, filterExpr),
            text: (_a = this.props.filterTexts.get(columnName), (_a !== null && _a !== void 0 ? _a : "")),
        };
    }
}
WinesTable.defaultProps = defaultProps;


/***/ }),

/***/ "./front_end/wines/WinesApp.tsx":
/*!**************************************!*\
  !*** ./front_end/wines/WinesApp.tsx ***!
  \**************************************/
/*! exports provided: WinesApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinesApp", function() { return WinesApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Pagination */ "./components/Pagination.tsx");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Preloader */ "./components/Preloader.tsx");
/* harmony import */ var _components_WinesTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/WinesTable */ "./components/WinesTable.tsx");
/* harmony import */ var _lib_Cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/Cookies */ "./lib/Cookies.ts");
/* harmony import */ var _lib_FilterExpr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/FilterExpr */ "./lib/FilterExpr.ts");
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











class WinesApp extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_8__["default"](this.constructor.name);
        const filterTexts = this.deserializeFilters(Object(_lib_Cookies__WEBPACK_IMPORTED_MODULE_6__["readCookie"])(WinesApp.cookieName));
        this.state = {
            wines: [],
            filterTexts: filterTexts,
            predicates: this.parseAllFilters(filterTexts),
            hasLoaded: false,
            currentPage: 1,
            winesPerPage: 50,
        };
    }
    serializeFilters() {
        if (this.state.filterTexts) {
            const predStrings = Array.from(this.state.filterTexts.entries());
            this.logger.logInfo(`Filter texts: '${predStrings}'`);
            const serializedPredicates = JSON.stringify(predStrings);
            this.logger.logDebug(`Updating cookie to '${serializedPredicates}'`);
            Object(_lib_Cookies__WEBPACK_IMPORTED_MODULE_6__["deleteCookie"])(WinesApp.cookieName);
            Object(_lib_Cookies__WEBPACK_IMPORTED_MODULE_6__["createCookie"])(WinesApp.cookieName, serializedPredicates, 90);
        }
        else {
            Object(_lib_Cookies__WEBPACK_IMPORTED_MODULE_6__["deleteCookie"])(WinesApp.cookieName);
        }
    }
    deserializeFilters(json) {
        if (!json) {
            return new Map();
        }
        this.logger.logDebug(`Deserializing JSON: ${json}`);
        const predicates = new Map();
        try {
            const arr = JSON.parse(json);
            arr.forEach((item) => {
                const [key, text] = item;
                predicates.set(key, text);
            });
            return predicates;
        }
        catch (err) {
            Object(_lib_Cookies__WEBPACK_IMPORTED_MODULE_6__["deleteCookie"])(WinesApp.cookieName);
            this.logger.logWarning(`Failed reading filters cookie with error: ${err}`);
            return new Map();
        }
    }
    parseAllFilters(filterTexts) {
        const predicates = new Map();
        for (const entry of filterTexts.entries()) {
            predicates.set(entry[0], _lib_FilterExpr__WEBPACK_IMPORTED_MODULE_7__["default"].parse(entry[1]));
        }
        return predicates;
    }
    render() {
        if (!this.state.hasLoaded) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_4__["Preloader"], null);
        }
        let wines = undefined;
        if (this.state.wines.length === 0) {
            wines = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", { className: "bold center-align" }, "You haven\u2019t entered any wines yet."),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["Btn"], { classes: ["green-bg"], onClick: () => Object(_lib_utils__WEBPACK_IMPORTED_MODULE_10__["redirect"])("/wines/new/") }, "Add a new wine")));
        }
        else {
            wines = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "page-title" }, "Wines"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["Btn"], { classes: ["yellow-bg"], onClick: this.onResetFilters.bind(this) }, "Reset Filters"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WinesTable__WEBPACK_IMPORTED_MODULE_5__["WinesTable"], { onFilterChange: (c, text) => this.onFilterChange(c, text), wines: this.filteredWines, filterTexts: this.state.filterTexts, currentPage: this.state.currentPage, winesPerPage: this.state.winesPerPage }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__["Pagination"], { currentPage: this.state.currentPage, pageCount: Math.max(1, Math.ceil(this.filteredWines.length / this.state.winesPerPage)), onClick: this.onPageClick.bind(this) })));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], { s: 12 }, wines))));
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wines = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["getWines"])({});
                this.setState({
                    wines,
                    hasLoaded: true
                });
            }
            catch (_a) {
                this.logger.logError("Failed to get wines");
            }
        });
    }
    get filteredWines() {
        // Reduce predicates
        const combinedPred = [...this.state.predicates.entries()]
            .reduceRight((prevVal, [column, filterExpr]) => {
            return (wine) => prevVal(wine) && filterExpr.call(wine[column]);
        }, (_) => true);
        return this.state.wines.filter(combinedPred);
    }
    onFilterChange(columnName, text) {
        this.setState((prevState) => {
            prevState.predicates.set(columnName, _lib_FilterExpr__WEBPACK_IMPORTED_MODULE_7__["default"].parse(text));
            prevState.filterTexts.set(columnName, text);
            return {
                predicates: prevState.predicates,
                filterTexts: prevState.filterTexts,
            };
        }, this.serializeFilters);
    }
    onResetFilters() {
        this.setState({
            predicates: new Map(),
            filterTexts: new Map(),
        }, this.serializeFilters);
    }
    onPageClick(pageNumber) {
        if (pageNumber === this.state.currentPage) {
            return;
        }
        this.setState({
            currentPage: pageNumber,
        });
    }
}
WinesApp.cookieName = "WinesAppPredicates";


/***/ }),

/***/ "./front_end/wines/wines.ts":
/*!**********************************!*\
  !*** ./front_end/wines/wines.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/widgets */ "./lib/widgets.ts");
/* harmony import */ var _WinesApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WinesApp */ "./front_end/wines/WinesApp.tsx");




Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_2__["navbar"])("wines-nav");
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_WinesApp__WEBPACK_IMPORTED_MODULE_3__["WinesApp"]), document.getElementById("wines-container"));


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

/***/ "./lib/FilterExpr.ts":
/*!***************************!*\
  !*** ./lib/FilterExpr.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterExpr; });
const operators = new Map();
operators.set("==", (l, r) => l === r);
operators.set("=", (l, r) => l === r);
operators.set("<>", (l, r) => l !== r);
operators.set("!=", (l, r) => l !== r);
operators.set("<=", (l, r) => l <= r);
operators.set("<", (l, r) => l < r);
operators.set(">=", (l, r) => l >= r);
operators.set(">", (l, r) => l > r);
// tslint:disable:no-construct
operators.set("INCLUDES", (l, r) => new String(l).toLowerCase().includes(r));
class FilterExpr {
    constructor(funName, rhs) {
        this.funName = funName;
        this.rhs = rhs;
    }
    static parse(expr) {
        if (operators.has(expr.substr(0, 2))) {
            return new FilterExpr(expr.substr(0, 2), eval(expr.substr(2)));
        }
        if (operators.has(expr[0])) {
            return new FilterExpr(expr[0], eval(expr.substr(1)));
        }
        return new FilterExpr("INCLUDES", expr);
    }
    static fromJson(json) {
        const obj = JSON.parse(json);
        return new FilterExpr(obj.funName, obj.rhs);
    }
    call(val) {
        const operatorFun = operators.get(this.funName);
        return operatorFun(val, this.rhs);
    }
    /**
     * Return the JSON equivalent of this `FilterExpr`
     */
    toJson() {
        return JSON.stringify(this);
    }
    /**
     * Return the plaintext string equivalent of this object
     */
    toString() {
        if (this.funName === "INCLUDES") {
            return this.rhs;
        }
        return this.funName + this.rhs;
    }
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

/***/ 10:
/*!****************************************!*\
  !*** multi ./front_end/wines/wines.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carter/git/vinoteca/vinoteca/front_end/wines/wines.ts */"./front_end/wines/wines.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25zLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbG9ySW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXRlcmlhbEljb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnaW5hdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QcmVsb2FkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFibGVDZWxscy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZUhlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XaW5lc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvd2luZXMvV2luZXNBcHAudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC93aW5lcy93aW5lcy50cyIsIndlYnBhY2s6Ly8vLi9saWIvQXBpSGVscGVyLnRzIiwid2VicGFjazovLy8uL2xpYi9Db29raWVzLnRzIiwid2VicGFjazovLy8uL2xpYi9GaWx0ZXJFeHByLnRzIiwid2VicGFjazovLy8uL2xpYi9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL1Jlc3RBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL2xpYi93aWRnZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7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QztBQUVELFNBQVMsaUJBQWlCLENBQUMsRUFBVTtJQUNoQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFFRCw0REFBNEQ7QUFDckQsU0FBUyxNQUFNLENBQUMsY0FBdUI7SUFDMUMsSUFBSSxjQUFjLEVBQUU7UUFDaEIsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDckM7SUFDRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZELGdEQUFnRDtJQUNoRCxJQUFJLHVEQUFPLENBQUMsV0FBWSxDQUFDLENBQUM7SUFDMUIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pFLGdEQUFnRDtJQUNoRCxJQUFJLHdEQUFRLENBQUMsWUFBYSxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVELHNEQUFzRDtBQUMvQyxTQUFTLEtBQUssQ0FBQyxPQUFlO0lBQ2pDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDSixPQUFPLEVBQUUsUUFBUTtRQUNqQixhQUFhLEVBQUUsS0FBSztRQUNwQixJQUFJLEVBQUUsT0FBTztLQUNoQixDQUFDLENBQUM7QUFDUCxDQUFDIiwiZmlsZSI6IndpbmVzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJ3aW5lc1wiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFsxMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgQ29sIH0gZnJvbSBcIi4vR3JpZFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4vTWF0ZXJpYWxJY29uXCI7XG5cbmludGVyZmFjZSBJRmxvYXRpbmdCdG5Qcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB7XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgICBvbk1vdXNlRG93bj86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKGNsYXNzZXMgfHwgW10pLmpvaW4oXCIgXCIpO1xufVxuXG5leHBvcnQgY29uc3QgRmxvYXRpbmdCdG46IFJlYWN0LkZDPElGbG9hdGluZ0J0blByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21iaW5lQ2xhc3Nlcyhwcm9wcy5jbGFzc2VzKTtcbiAgICBjb25zdCBtb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICAgICAgaWYgKHByb3BzLm9uTW91c2VEb3duKSB7XG4gICAgICAgICAgICBwcm9wcy5vbk1vdXNlRG93bihlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudD4pID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9wcy5vbkNsaWNrKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgYHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4tZmxvYXRpbmcgJHtjbGFzc2VzfWAgfVxuICAgICAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyBtb3VzZURvd24gfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9hPlxuICAgICk7XG59O1xuRmxvYXRpbmdCdG4uZGlzcGxheU5hbWUgPSBcIkZsb2F0aW5nQnRuXCI7XG5GbG9hdGluZ0J0bi5kZWZhdWx0UHJvcHMgPSB7IG9uTW91c2VEb3duOiAoXykgPT4gdW5kZWZpbmVkIH07XG5cbmludGVyZmFjZSBJQnRuUHJvcHMgZXh0ZW5kcyBJQ2hpbGRyZW5Qcm9wLCBJQ2xhc3Nlc1Byb3Age1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBCdG46IFJlYWN0LkZDPElCdG5Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tYmluZUNsYXNzZXMocHJvcHMuY2xhc3Nlcyk7XG4gICAgY29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb3BzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17IGByYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gJHtjbGFzc2VzfWAgfVxuICAgICAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cbkJ0bi5kaXNwbGF5TmFtZSA9IFwiQnRuXCI7XG5cbmludGVyZmFjZSBJQ2FuY2VsT3JDb25maXJtUHJvcHMge1xuICAgIG9uQ29uZmlybUNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIG9uQ2FuY2VsQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBDYW5jZWxPckNvbmZpcm1CdG5zOiBSZWFjdC5GQzxJQ2FuY2VsT3JDb25maXJtUHJvcHM+ID1cbiAgICAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICA8QnRuIGNsYXNzZXM9eyBbXCJncmVlbi1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uQ29uZmlybUNsaWNrIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cInNlbmRcIiBjbGFzc05hbWU9XCJyaWdodFwiIC8+XG4gICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcInJlZC1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uQ2FuY2VsQ2xpY2sgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdG4+XG4gICAgICAgIDwvQ29sPlxuICAgICk7XG59XG5DYW5jZWxPckNvbmZpcm1CdG5zLmRpc3BsYXlOYW1lID0gXCJDYW5jZWxPckNvbmZpcm1CdG5zXCI7XG4iLCJpbXBvcnQgeyBGb3JtU2VsZWN0IH0gZnJvbSBcIm1hdGVyaWFsaXplLWNzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vbGliL0xvZ2dlclwiO1xuaW1wb3J0IHsgSUNvbG9yIH0gZnJvbSBcIi4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBnZXRDb2xvcnMgfSBmcm9tIFwiLi4vbGliL1Jlc3RBcGlcIjtcbmltcG9ydCB7IElPbkNoYW5nZSB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgU2VsZWN0SW5wdXQgfSBmcm9tIFwiLi9TZWxlY3RJbnB1dFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSU9uQ2hhbmdlIHtcbiAgICBzZWxlY3Rpb246IHN0cmluZztcbiAgICBleHRyYUNob2ljZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUNvbG9yc1NlbGVjdCA9IChsb2dnZXI6IExvZ2dlciwgZXh0cmFDaG9pY2U/OiBzdHJpbmcpOiBbc3RyaW5nW10sIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTFNlbGVjdEVsZW1lbnQ+XSA9PiB7XG4gICAgY29uc3QgW3NlbGVjdGlvbk9wdGlvbnMsIHNldFNlbGVjdGlvbk9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgICBjb25zdCBzZWxlY3RSZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxTZWxlY3RFbGVtZW50PjtcblxuICAgIGNvbnN0IGNvbmNhdElmTm90TnVsbD0gKG9wdGlvbnM6IHN0cmluZ1tdKTogc3RyaW5nW10gPT4ge1xuICAgICAgICBpZiAoZXh0cmFDaG9pY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBbZXh0cmFDaG9pY2VdLmNvbmNhdChvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbG9ycygpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JzOiBJQ29sb3JbXSA9IGF3YWl0IGdldENvbG9ycyh7fSk7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uT3B0aW9ucyhjb25jYXRJZk5vdE51bGwoY29sb3JzLm1hcCgoY29sb3IpID0+IGNvbG9yLm5hbWUpKSk7XG4gICAgICAgICAgICAgICAgbmV3IEZvcm1TZWxlY3Qoc2VsZWN0UmVmLmN1cnJlbnQhKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihcIkZhaWxlZCB0byBnZXQgY29sb3JzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hDb2xvcnMoKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFtzZWxlY3Rpb25PcHRpb25zLCBzZWxlY3RSZWZdXG59XG5cbmV4cG9ydCBjb25zdCBDb2xvcklucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihDb2xvcklucHV0Lm5hbWUpO1xuXG4gICAgY29uc3QgW3NlbGVjdGlvbk9wdGlvbnMsIHNlbGVjdFJlZl0gPSB1c2VDb2xvcnNTZWxlY3QobG9nZ2VyLCBwcm9wcy5leHRyYUNob2ljZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VsZWN0SW5wdXQgbmFtZT1cIkNvbG9yXCJcbiAgICAgICAgICAgIHM9eyA0IH0gbD17IDIgfVxuICAgICAgICAgICAgc2VsZWN0UmVmPXsgc2VsZWN0UmVmIH1cbiAgICAgICAgICAgIG9wdGlvbnM9eyBzZWxlY3Rpb25PcHRpb25zIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHYpID0+IHByb3BzPy5vbkNoYW5nZSh2KSB9XG4gICAgICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuQ29sb3JJbnB1dC5kaXNwbGF5TmFtZSA9IFwiQ29sb3JJbnB1dFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSUNoaWxkcmVuUHJvcCwgSUNsYXNzZXNQcm9wIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRQcm9wcyB7XG4gICAgcz86IG51bWJlcjtcbiAgICBtPzogbnVtYmVyO1xuICAgIGw/OiBudW1iZXI7XG4gICAgeGw/OiBudW1iZXI7XG59XG5cbnR5cGUgSUFsbEdyaWRQcm9wcyA9IElHcmlkUHJvcHMgJiBJQ2xhc3Nlc1Byb3AgJiBJQ2hpbGRyZW5Qcm9wO1xuXG5mdW5jdGlvbiBqb2luQ2xhc3NlcyhncmlkOiBzdHJpbmdbXSwgY2xhc3Nlcz86IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICBsZXQgYWxsQ2xhc3Nlczogc3RyaW5nW10gPSBbXTtcbiAgICBncmlkLmZvckVhY2goKGdjKSA9PiB7XG4gICAgICAgIGlmIChnYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhbGxDbGFzc2VzLnB1c2goZ2MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgYWxsQ2xhc3NlcyA9IGFsbENsYXNzZXMuY29uY2F0KGNsYXNzZXMgfHwgW10pO1xuICAgIHJldHVybiBhbGxDbGFzc2VzLmpvaW4oXCIgXCIpO1xufVxuXG5mdW5jdGlvbiBncmlkQ2xhc3Nlcyhwcm9wczogSUFsbEdyaWRQcm9wcyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBzQ2xhc3MgPSBwcm9wcy5zID8gYHMke3Byb3BzLnN9YCA6IFwiXCI7XG4gICAgY29uc3QgbUNsYXNzID0gcHJvcHMubSA/IGBtJHtwcm9wcy5tfWAgOiBcIlwiO1xuICAgIGNvbnN0IGxDbGFzcyA9IHByb3BzLmwgPyBgbCR7cHJvcHMubH1gIDogXCJcIjtcbiAgICBjb25zdCB4bENsYXNzID0gcHJvcHMueGwgPyBgeGwke3Byb3BzLnhsfWAgOiBcIlwiO1xuICAgIHJldHVybiBbc0NsYXNzLCBtQ2xhc3MsIGxDbGFzcywgeGxDbGFzc107XG59XG5cbmNvbnN0IEdyaWRDb21wb25lbnRGYWN0b3J5ID0gKGNsYXNzTmFtZTogc3RyaW5nLCBkaXNwbGF5TmFtZTogc3RyaW5nKTogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudDogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSAocHJvcHM6IElBbGxHcmlkUHJvcHMpID0+IHtcbiAgICAgICAgY29uc3Qgb3RoZXJDbGFzc2VzID0gam9pbkNsYXNzZXMoZ3JpZENsYXNzZXMocHJvcHMpLCBwcm9wcy5jbGFzc2VzKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYCR7Y2xhc3NOYW1lfSAke290aGVyQ2xhc3Nlc31gIH0+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuICAgIGNvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBSb3c6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0gR3JpZENvbXBvbmVudEZhY3RvcnkoXCJyb3dcIiwgXCJSb3dcIik7XG5cbmV4cG9ydCBjb25zdCBDb2w6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0gR3JpZENvbXBvbmVudEZhY3RvcnkoXCJjb2xcIiwgXCJDb2xcIik7XG5cbmV4cG9ydCBjb25zdCBJbnB1dEZpZWxkOiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IEdyaWRDb21wb25lbnRGYWN0b3J5KFwiY29sIGlucHV0LWZpZWxkXCIsIFwiSW5wdXRGaWVsZFwiKVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBpY29uTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTWF0ZXJpYWxJY29uOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgIDxpIGNsYXNzTmFtZT17IGBtYXRlcmlhbC1pY29ucyAke3Byb3BzLmNsYXNzTmFtZX1gIH0+XG4gICAgICAgICAgICB7IHByb3BzLmljb25OYW1lIH1cbiAgICAgICAgPC9pPlxuICAgICk7XG59O1xuTWF0ZXJpYWxJY29uLmRpc3BsYXlOYW1lID0gXCJNYXRlcmlhbEljb25cIjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4vTWF0ZXJpYWxJY29uXCI7XG5pbXBvcnQgeyByYW5nZSB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgICBwYWdlQ291bnQ6IG51bWJlcjtcbiAgICBvbkNsaWNrOiAocGFnZU51bWJlcjogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5lbnVtIEFycm93IHtcbiAgICBMZWZ0LFxuICAgIFJpZ2h0XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcz4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbiBjZW50ZXItYWxpZ25cIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdGhpcy5hcnJvd0lzRW5hYmxlZChBcnJvdy5MZWZ0KSA/IFwid2F2ZXMtZWZmZWN0XCIgOiBcImRpc2FibGVkIFwifT5cbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17IChlKSA9PiB0aGlzLm9uQXJyb3dDbGljayhlLCBBcnJvdy5MZWZ0KSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImNoZXZyb25fbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIHsgWy4uLnJhbmdlKHtzdGFydDogMSwgc3RvcDogdGhpcy5wcm9wcy5wYWdlQ291bnQgKyAxfSldLm1hcCgocGdOdW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmN1cnJlbnRQYWdlID09PSBwZ051bSA/IFwiYWN0aXZlIHJlZC1iZ1wiIDogXCJ3YXZlcy1lZmZlY3RcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyBwZ051bSB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17IChlKSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLnByb3BzLm9uQ2xpY2socGdOdW0pfSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHBnTnVtIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdGhpcy5hcnJvd0lzRW5hYmxlZChBcnJvdy5SaWdodCkgPyBcIndhdmVzLWVmZmVjdFwiIDogXCJkaXNhYmxlZCBcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eyAoZSkgPT4gdGhpcy5vbkFycm93Q2xpY2soZSwgQXJyb3cuUmlnaHQpIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwiY2hldnJvbl9yaWdodFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFycm93SXNFbmFibGVkKGFycm93OiBBcnJvdyk6IGJvb2xlYW4ge1xuICAgICAgICBzd2l0Y2goYXJyb3cpIHtcbiAgICAgICAgICAgIGNhc2UgQXJyb3cuTGVmdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jdXJyZW50UGFnZSA+IDE7XG4gICAgICAgICAgICBjYXNlIEFycm93LlJpZ2h0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmN1cnJlbnRQYWdlIDwgdGhpcy5wcm9wcy5wYWdlQ291bnQ7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25BcnJvd0NsaWNrKGU6IFJlYWN0Lk1vdXNlRXZlbnQsIGFycm93OiBBcnJvdykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmFycm93SXNFbmFibGVkKGFycm93KSkge1xuICAgICAgICAgICAgc3dpdGNoIChhcnJvdykge1xuICAgICAgICAgICAgICAgIGNhc2UgQXJyb3cuTGVmdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMuY3VycmVudFBhZ2UgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNhc2UgQXJyb3cuUmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLmN1cnJlbnRQYWdlICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFByZWxvYWRlcjogUmVhY3QuRkM8e30+ID0gKF8pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV0ZXJtaW5hdGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblByZWxvYWRlci5kaXNwbGF5TmFtZSA9IFwiUHJlbG9hZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBQcmVsb2FkZXJDaXJjOiBSZWFjdC5GQzx7fT4gPSAoXykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZGVyLXdyYXBwZXIgYWN0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItbGF5ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImdhcC1wYXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuUHJlbG9hZGVyQ2lyYy5kaXNwbGF5TmFtZSA9IFwiUHJlbG9hZGVyQ2lyY1wiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBuYW1lVG9JZCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi9HcmlkXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBvcHRpb25zOiBzdHJpbmdbXTtcbiAgICBzZWxlY3Rpb246IHN0cmluZztcbiAgICBzZWxlY3RUZXh0Pzogc3RyaW5nO1xuICAgIHNlbGVjdFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxTZWxlY3RFbGVtZW50PjtcbiAgICBvbkNoYW5nZTogKHZhbDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgU2VsZWN0SW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBpZCA9IG5hbWVUb0lkKHByb3BzLm5hbWUpO1xuICAgIGxldCBzZWxlY3RUZXh0OiBKU1guRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBpZiAocHJvcHMuc2VsZWN0VGV4dCkge1xuICAgICAgICBzZWxlY3RUZXh0ID0gPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPlxuICAgICAgICAgICAgeyBwcm9wcy5zZWxlY3RUZXh0IH1cbiAgICAgICAgPC9vcHRpb24+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRGaWVsZCBzPXsgcHJvcHMucyB9IG09eyBwcm9wcy5tIH0gbD17IHByb3BzLmwgfT5cbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9eyBpZCB9XG4gICAgICAgICAgICAgICAgbmFtZT17IGlkIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSkgfVxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcHJvcHMuc2VsZWN0aW9uIHx8IHByb3BzLnNlbGVjdFRleHQgfVxuICAgICAgICAgICAgICAgIHJlZj17IHByb3BzLnNlbGVjdFJlZiB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyBzZWxlY3RUZXh0IH1cbiAgICAgICAgICAgICAgICB7IHByb3BzLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyBvcHRpb24gfSBrZXk9eyBvcHRpb24gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhcGl0YWxpemVGaXJzdExldHRlcihvcHRpb24pIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17IGlkIH0+eyBwcm9wcy5uYW1lIH08L2xhYmVsPlxuICAgICAgICA8L0lucHV0RmllbGQ+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9lc20vZm9ybWF0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsIEVOX0RBU0gsIGdldE5hbWVBbmRUeXBlLCBudW1Ub0RhdGUgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5cbmludGVyZmFjZSBJVGV4dENlbGxQcm9wcyB7XG4gICAgZGVmYXVsdD86IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dENlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRleHRDZWxsUHJvcHM+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZGVmYXVsdDogXCJcIixcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPHRkPnsgdGhpcy5wcm9wcy50ZXh0ID8/IHRoaXMucHJvcHMuZGVmYXVsdCB9PC90ZD47XG4gICAgfVxufTtcblxuaW50ZXJmYWNlIElOdW1DZWxsUHJvcHMge1xuICAgIG51bTogbnVtYmVyIHwgbnVsbDtcbiAgICBtaW5EZWNpbWFscz86IG51bWJlcjtcbiAgICBtYXhEZWNpbWFscz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IE51bUNlbGw6IFJlYWN0LkZDPElOdW1DZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgbnVtID0gcHJvcHMubnVtXG4gICAgICAgIC8vIHVuZGVmaW5lZCB0byB1c2UgYnJvd3NlcidzIGxvY2FsZVxuICAgICAgICA/IHByb3BzLm51bS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByb3BzLm1pbkRlY2ltYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcm9wcy5tYXhEZWNpbWFsc30pXG4gICAgICAgIDogRU5fREFTSDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwibnVtLWNvbFwiPnsgbnVtIH08L3RkPlxuICAgICk7XG59O1xuTnVtQ2VsbC5kaXNwbGF5TmFtZSA9IFwiTnVtQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSVByaWNlQ2VsbFByb3BzIHtcbiAgICBwcmljZTogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IFByaWNlQ2VsbDogUmVhY3QuRkM8SVByaWNlQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxOdW1DZWxsIG51bT17IHByb3BzLnByaWNlIH1cbiAgICAgICAgICAgIG1pbkRlY2ltYWxzPXsgMiB9XG4gICAgICAgICAgICBtYXhEZWNpbWFscz17IDIgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5QcmljZUNlbGwuZGlzcGxheU5hbWUgPSBcIlByaWNlQ2VsbFwiO1xuXG5leHBvcnQgY29uc3QgWWVhckNlbGw6IFJlYWN0LkZDPHt5ZWFyOiBudW1iZXIgfCBudWxsfT4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB5ZWFyID0gcHJvcHMueWVhcj8udG9TdHJpbmcoKSA/PyBcIk5WXCI7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm51bS1jb2xcIj5cbiAgICAgICAgICAgIHsgeWVhciB9XG4gICAgICAgIDwvdGQ+XG4gICAgKTtcbn1cblllYXJDZWxsLmRpc3BsYXlOYW1lID0gXCJZZWFyQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSURhdGVDZWxsUHJvcHMge1xuICAgIGRhdGU6IG51bWJlciB8IG51bGw7XG4gICAgZm9ybWF0Pzogc3RyaW5nO1xufVxuZXhwb3J0IGNvbnN0IERhdGVDZWxsOiBSZWFjdC5GQzxJRGF0ZUNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBkYXRlU3RyID0gcHJvcHMuZGF0ZSA/IGZvcm1hdChudW1Ub0RhdGUocHJvcHMuZGF0ZSksIHByb3BzLmZvcm1hdCA/PyBcIk1NTSBkZCwgeXl5eVwiKSA6IEVOX0RBU0g7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkPnsgZGF0ZVN0ciB9PC90ZD5cbiAgICApO1xufVxuRGF0ZUNlbGwuZGlzcGxheU5hbWUgPSBcIkRhdGVDZWxsXCI7XG5cbmludGVyZmFjZSBJQ29sb3JDZWxsUHJvcHMge1xuICAgIGNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBDb2xvckNlbGw6IFJlYWN0LkZDPElDb2xvckNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBpZiAocHJvcHMuY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIDx0ZD57IGNhcGl0YWxpemVGaXJzdExldHRlcihwcm9wcy5jb2xvcikgfTwvdGQ+O1xuICAgIH1cbiAgICByZXR1cm4gPHRkIC8+O1xufTtcbkNvbG9yQ2VsbC5kaXNwbGF5TmFtZSA9IFwiQ29sb3JDZWxsXCI7XG5cbmludGVyZmFjZSBJTGlua2VkQ2VsbFByb3BzIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG1vZGVsOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBMaW5rZWRDZWxsOiBSZWFjdC5GQzxJTGlua2VkQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHVybCA9IGAvJHtwcm9wcy5tb2RlbH0vJHtwcm9wcy5pZH1gO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxhIGhyZWY9eyB1cmwgfT5cbiAgICAgICAgICAgICAgICB7IHByb3BzLm5hbWUgfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgIClcbn1cbkxpbmtlZENlbGwuZGlzcGxheU5hbWUgPSBcIkxpbmtlZENlbGxcIlxuXG5pbnRlcmZhY2UgSU5hbWVBbmRUeXBlUHJvcHMge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICB3aW5lVHlwZTogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE5hbWVBbmRUeXBlQ2VsbDogUmVhY3QuRkM8SU5hbWVBbmRUeXBlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKHByb3BzLnVybCkge1xuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YSBocmVmPXsgcHJvcHMudXJsIH0+XG4gICAgICAgICAgICAgICAgeyBnZXROYW1lQW5kVHlwZShwcm9wcy5uYW1lLCBwcm9wcy53aW5lVHlwZSkgfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwid2luZXNcIlxuICAgICAgICAgICAgbmFtZT17IGdldE5hbWVBbmRUeXBlKHByb3BzLm5hbWUsIHByb3BzLndpbmVUeXBlKSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5OYW1lQW5kVHlwZUNlbGwuZGlzcGxheU5hbWUgPSBcIk5hbWVBbmRUeXBlQ2VsbFwiO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjZXJDZWxsOiBSZWFjdC5GQzx7aWQ6IG51bWJlciwgbmFtZTogc3RyaW5nfT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwicHJvZHVjZXJzXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUHJvZHVjZXJDZWxsLmRpc3BsYXlOYW1lID0gXCJQcm9kdWNlckNlbGxcIlxuXG5leHBvcnQgY29uc3QgUmVnaW9uQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cInJlZ2lvbnNcIlxuICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5SZWdpb25DZWxsLmRpc3BsYXlOYW1lID0gXCJSZWdpb25DZWxsXCJcblxuZXhwb3J0IGNvbnN0IFZpdGlBcmVhQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIgfCBudWxsLCBuYW1lOiBzdHJpbmcgfCBudWxsfT4gPSAocHJvcHMpID0+IHtcbiAgICBpZiAoIXByb3BzLmlkIHx8ICFwcm9wcy5uYW1lKSB7XG4gICAgICAgIHJldHVybiA8dGQgLz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJ2aXRpLWFyZWFzXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuVml0aUFyZWFDZWxsLmRpc3BsYXlOYW1lID0gXCJWaXRpQXJlYUNlbGxcIlxuXG5leHBvcnQgY29uc3QgV2luZVR5cGVDZWxsOiBSZWFjdC5GQzx7aWQ6IG51bWJlciwgbmFtZTogc3RyaW5nfT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwid2luZS10eXBlc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cbldpbmVUeXBlQ2VsbC5kaXNwbGF5TmFtZSA9IFwiV2luZVR5cGVDZWxsXCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyB1c2VDb2xvcnNTZWxlY3QgfSBmcm9tIFwiLi9Db2xvcklucHV0XCI7XG5pbXBvcnQgeyBNYXRlcmlhbEljb24gfSBmcm9tIFwiLi9NYXRlcmlhbEljb25cIjtcbmltcG9ydCB7IFNlbGVjdElucHV0IH0gZnJvbSBcIi4vU2VsZWN0SW5wdXRcIjtcblxuZXhwb3J0IGVudW0gU29ydGluZ1N0YXRlIHtcbiAgICBOb3RTb3J0ZWQsXG4gICAgQXNjZW5kaW5nLFxuICAgIERlc2NlbmRpbmcsXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgICBzb3J0aW5nU3RhdGU6IFNvcnRpbmdTdGF0ZTtcbiAgICBpc051bUNvbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcz4ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpc051bUNvbDogZmFsc2UsXG4gICAgfTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17ICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCBcIlwiKSArIGAke3RoaXMucHJvcHMuaXNOdW1Db2wgPyBcIiBudW0tY29sXCIgOiBcIlwiIH1gIH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNvbnRlbnQoKSB9XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IChcbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLnByb3BzLm9uQ2xpY2sgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXNOdW1Db2xcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJJY29uKCkgfVxuICAgICAgICAgICAgICAgICAgICB7IHRleHQgfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICB7IHRleHQgfVxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVySWNvbigpIH1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckljb24oKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5zb3J0aW5nU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1N0YXRlLkFzY2VuZGluZzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImFycm93X2Ryb3BfdXBcIiAvPjtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1N0YXRlLkRlc2NlbmRpbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJhcnJvd19kcm9wX2Rvd25cIiAvPjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJhcnJvd19kcm9wX2Rvd25cIiBjbGFzc05hbWU9XCJpbnZpc2libGVcIiAvPjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW50ZXJmYWNlIElGaWx0ZXJQcm9wcyB7XG4gICAgb25DaGFuZ2U6ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcbiAgICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJIZWFkZXI6IFJlYWN0LkZDPElGaWx0ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gcHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17IHByb3BzLnRleHQgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICApO1xufVxuRmlsdGVySGVhZGVyLmRpc3BsYXlOYW1lID0gXCJGaWx0ZXJIZWFkZXJcIjtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdEZpbHRlckhlYWRlcjogUmVhY3QuRkM8SUZpbHRlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGV4dHJhQ2hvaWNlID0gXCJBbnlcIjtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKFNlbGVjdEZpbHRlckhlYWRlci5uYW1lKTtcblxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKHNlbGVjdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT09IGV4dHJhQ2hvaWNlKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKHNlbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHByb3BzLnRleHQgPT09IFwiXCIgPyBleHRyYUNob2ljZSA6IHByb3BzLnRleHQ7XG5cbiAgICBjb25zdCBbc2VsZWN0aW9uT3B0aW9ucywgc2VsZWN0UmVmXSA9IHVzZUNvbG9yc1NlbGVjdChsb2dnZXIsIGV4dHJhQ2hvaWNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxTZWxlY3RJbnB1dCBuYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RSZWY9eyBzZWxlY3RSZWYgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBzZWxlY3Rpb25PcHRpb25zIH1cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb249eyBzZWxlY3Rpb24gfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICApO1xufVxuU2VsZWN0RmlsdGVySGVhZGVyLmRpc3BsYXlOYW1lID0gU2VsZWN0RmlsdGVySGVhZGVyLm5hbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJV2luZSB9IGZyb20gXCIuLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgQ29sb3JDZWxsLCBOYW1lQW5kVHlwZUNlbGwsIE51bUNlbGwsIFByb2R1Y2VyQ2VsbCwgUmVnaW9uQ2VsbCwgVml0aUFyZWFDZWxsLCBZZWFyQ2VsbCB9IGZyb20gXCIuL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCB7IEZpbHRlckhlYWRlciwgU29ydGluZ1N0YXRlLCBUYWJsZUhlYWRlciwgU2VsZWN0RmlsdGVySGVhZGVyIH0gZnJvbSBcIi4vVGFibGVIZWFkZXJcIjtcblxuZW51bSBTb3J0aW5nVmFsdWUge1xuICAgIEludmVudG9yeSxcbiAgICBDb2xvcixcbiAgICBOYW1lQW5kVHlwZSxcbiAgICBQcm9kdWNlcixcbiAgICBSZWdpb24sXG4gICAgVml0aUFyZWEsXG4gICAgVmludGFnZSxcbiAgICBSYXRpbmdcbn07XG5cbmV4cG9ydCBlbnVtIENvbHVtblRvRXhjbHVkZSB7XG4gICAgUHJvZHVjZXIsXG4gICAgUmVnaW9uLFxuICAgIFZpdGlBcmVhLFxufVxuXG50eXBlIElQcm9wcyA9IHtcbiAgICB3aW5lczogSVdpbmVbXTtcbiAgICBmaWx0ZXJUZXh0cz86IE1hcDxrZXlvZiBJV2luZSwgc3RyaW5nPjtcbiAgICBvbkZpbHRlckNoYW5nZT86IChjb2x1bW46IGtleW9mIElXaW5lLCB0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgZXhjbHVkZUNvbHVtbj86IENvbHVtblRvRXhjbHVkZTtcbn0gJiBQYXJ0aWFsPERlZmF1bHRQcm9wcz5cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgYXNjZW5kaW5nOiBib29sZWFuO1xuICAgIHNvcnRpbmc6IFNvcnRpbmdWYWx1ZTtcbiAgICBjb2xvclNlbGVjdGlvbjogc3RyaW5nO1xufVxuXG50eXBlIERlZmF1bHRQcm9wcyA9IFJlYWRvbmx5PHR5cGVvZiBkZWZhdWx0UHJvcHM+XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICB3aW5lc1BlclBhZ2U6IDI1MCxcbn07XG5cbmV4cG9ydCBjbGFzcyBXaW5lc1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcyAmIERlZmF1bHRQcm9wcywgSVN0YXRlPiB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzICYgRGVmYXVsdFByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFzY2VuZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHNvcnRpbmc6IFNvcnRpbmdWYWx1ZS5OYW1lQW5kVHlwZSxcbiAgICAgICAgICAgIGNvbG9yU2VsZWN0aW9uOiBcIlwiLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlckhlYWRlciA9IHRoaXMucHJvcHMuZmlsdGVyVGV4dHNcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJIZWFkZXIgeyAuLi50aGlzLmZpbHRlckhlYWRlclByb3BzKFwiaW52ZW50b3J5XCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJjb2xvclwiKSB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJIZWFkZXIgeyAuLi50aGlzLmZpbHRlckhlYWRlclByb3BzKFwid2luZVR5cGVcIikgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVySGVhZGVyIHsgLi4udGhpcy5maWx0ZXJIZWFkZXJQcm9wcyhcInByb2R1Y2VyXCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJyZWdpb25cIikgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVySGVhZGVyIHsgLi4udGhpcy5maWx0ZXJIZWFkZXJQcm9wcyhcInZpdGlBcmVhXCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJsYXN0UHVyY2hhc2VWaW50YWdlXCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJyYXRpbmdcIikgfSAvPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgY29uc3QgZXhDb2wgPSB0aGlzLnByb3BzLmV4Y2x1ZGVDb2x1bW47XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZSBoaWdobGlnaHQgY29uZGVuc2VkXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PVwiaGVhZGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyIHsuLi50aGlzLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLkludmVudG9yeSl9IGlzTnVtQ29sID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZlbnRvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuQ29sb3IpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB7Li4udGhpcy50YWJsZUhlYWRlclByb3BzKFNvcnRpbmdWYWx1ZS5OYW1lQW5kVHlwZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUgYW5kIFR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4Q29sID09PSBDb2x1bW5Ub0V4Y2x1ZGUuUHJvZHVjZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUHJvZHVjZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4Q29sID09PSBDb2x1bW5Ub0V4Y2x1ZGUuUmVnaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgPFRhYmxlSGVhZGVyIHsuLi50aGlzLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLlJlZ2lvbil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4Q29sID09PSBDb2x1bW5Ub0V4Y2x1ZGUuVml0aUFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuVml0aUFyZWEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVml0aWN1bHR1cmFsIEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuVmludGFnZSl9IGlzTnVtQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUmF0aW5nKX0gaXNOdW1Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICB7IGZpbHRlckhlYWRlciB9XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy53aW5lc0ZvclBhZ2UubWFwKCh3aW5lKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXsgd2luZS5pZCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1DZWxsIG51bT17IHdpbmUuaW52ZW50b3J5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4RGVjaW1hbHM9eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvckNlbGwgY29sb3I9eyB3aW5lLmNvbG9yIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmFtZUFuZFR5cGVDZWxsIGlkPXsgd2luZS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyB3aW5lLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5lVHlwZT17IHdpbmUud2luZVR5cGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBleENvbCA9PT0gQ29sdW1uVG9FeGNsdWRlLlByb2R1Y2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IDxQcm9kdWNlckNlbGwgaWQ9eyB3aW5lLnByb2R1Y2VySWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IHdpbmUucHJvZHVjZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBleENvbCA9PT0gQ29sdW1uVG9FeGNsdWRlLlJlZ2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8UmVnaW9uQ2VsbCBpZD17IHdpbmUucmVnaW9uSWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IHdpbmUucmVnaW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhDb2wgPT09IENvbHVtblRvRXhjbHVkZS5WaXRpQXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8Vml0aUFyZWFDZWxsIGlkPXsgd2luZS52aXRpQXJlYUlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyB3aW5lLnZpdGlBcmVhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxZZWFyQ2VsbCB5ZWFyPXsgd2luZS5sYXN0UHVyY2hhc2VWaW50YWdlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtQ2VsbCBtYXhEZWNpbWFscz17IDAgfSBudW09eyB3aW5lLnJhdGluZyB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCB3aW5lc0ZvclBhZ2UoKTogSVdpbmVbXSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gKHRoaXMucHJvcHMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucHJvcHMud2luZXNQZXJQYWdlO1xuICAgICAgICBjb25zdCBzb3J0ZWRXaW5lcyA9IHRoaXMuc29ydGVkV2luZXM7XG4gICAgICAgIHJldHVybiBzb3J0ZWRXaW5lcy5zbGljZShzdGFydCwgIE1hdGgubWluKHNvcnRlZFdpbmVzLmxlbmd0aCxcbiAgICAgICAgICAgIHN0YXJ0ICsgdGhpcy5wcm9wcy53aW5lc1BlclBhZ2UpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBzb3J0ZWRXaW5lcygpIHtcbiAgICAgICAgY29uc3QgYXNjZW5kaW5nTXVsdGlwbGllciA9IHRoaXMuc3RhdGUuYXNjZW5kaW5nID8gMSA6IC0xO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuc29ydGluZykge1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuSW52ZW50b3J5OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT5cbiAgICAgICAgICAgICAgICAgICAgKHcxLmludmVudG9yeSAtIHcyLmludmVudG9yeSkgKiBhc2NlbmRpbmdNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLkNvbG9yOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT5cbiAgICAgICAgICAgICAgICAgICAgdzEuY29sb3IubG9jYWxlQ29tcGFyZSh3Mi5jb2xvcikgKiBhc2NlbmRpbmdNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLk5hbWVBbmRUeXBlOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBTb3J0IGJ5IHdpbmVUeXBlIHRoZW4gbmFtZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3aW5lVHlwZUNvbXBhcmlzb24gPSAodzEud2luZVR5cGUgPz8gXCJcIikubG9jYWxlQ29tcGFyZSh3Mi53aW5lVHlwZSA/PyBcIlwiKSAqIGFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5lVHlwZUNvbXBhcmlzb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5hbWUgY29tcGFyaXNvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHcxLm5hbWUgJiYgdzIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3MS5uYW1lLmxvY2FsZUNvbXBhcmUodzIubmFtZSkgKiBhc2NlbmRpbmdNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodzEubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc2NlbmRpbmdNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHcyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLWFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmVUeXBlQ29tcGFyaXNvbjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuUHJvZHVjZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICB3MS5wcm9kdWNlci5sb2NhbGVDb21wYXJlKHcyLnByb2R1Y2VyKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuUmVnaW9uOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT5cbiAgICAgICAgICAgICAgICAgICAgdzEucmVnaW9uLmxvY2FsZUNvbXBhcmUodzIucmVnaW9uKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuVml0aUFyZWE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICAodzEudml0aUFyZWEgfHwgXCJcIikubG9jYWxlQ29tcGFyZSh3Mi52aXRpQXJlYSB8fCBcIlwiKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuVmludGFnZTpcbiAgICAgICAgICAgICAgICAvLyBTb3J0IE5WIGZpcnN0XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICAodzEubGFzdFB1cmNoYXNlVmludGFnZSA/PyAzMDAwKSAtICh3Mi5sYXN0UHVyY2hhc2VWaW50YWdlID8/IDMwMDApICogYXNjZW5kaW5nTXVsdGlwbGllclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5SYXRpbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICAodzEucmF0aW5nID8/IDApIC0gKHcyLnJhdGluZyA/PyAwKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25IZWFkZXJDbGljayhlOiBSZWFjdC5Nb3VzZUV2ZW50LCBzb3J0aW5nVmFsOiBTb3J0aW5nVmFsdWUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoc29ydGluZ1ZhbCA9PT0gdGhpcy5zdGF0ZS5zb3J0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7YXNjZW5kaW5nOiAhcHJldlN0YXRlLmFzY2VuZGluZ30pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFzY2VuZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzb3J0aW5nOiBzb3J0aW5nVmFsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRhYmxlSGVhZGVyUHJvcHMoc29ydGluZ1ZhbDogU29ydGluZ1ZhbHVlKTpcbiAgICAgICAge3NvcnRpbmdTdGF0ZTogU29ydGluZ1N0YXRlLCBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZH0ge1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmcgPT09IHNvcnRpbmdWYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRpbmdTdGF0ZSA9IHRoaXMuc3RhdGUuYXNjZW5kaW5nID8gU29ydGluZ1N0YXRlLkFzY2VuZGluZyA6IFNvcnRpbmdTdGF0ZS5EZXNjZW5kaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzb3J0aW5nU3RhdGUsXG4gICAgICAgICAgICAgICAgb25DbGljazogKGUpID0+IHRoaXMub25IZWFkZXJDbGljayhlLCBzb3J0aW5nVmFsKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvcnRpbmdTdGF0ZTogU29ydGluZ1N0YXRlLk5vdFNvcnRlZCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IChlKSA9PiB0aGlzLm9uSGVhZGVyQ2xpY2soZSwgc29ydGluZ1ZhbCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ29uc3RydWN0cyBwcm9wcyBmb3IgYSBmaWx0ZXIgaGVhZGVyXG4gICAgcHJpdmF0ZSBmaWx0ZXJIZWFkZXJQcm9wcyhjb2x1bW5OYW1lOiBrZXlvZiBJV2luZSk6XG4gICAgICAgIHtvbkNoYW5nZTogKHRleHQ6IHN0cmluZykgPT4gdm9pZCxcbiAgICAgICAgIHRleHQ6IHN0cmluZ30ge1xuXG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGlmIGJvdGggcHJvcHMgZXhpc3RcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoZmlsdGVyRXhwcikgPT4gdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSEoY29sdW1uTmFtZSwgZmlsdGVyRXhwciksXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnByb3BzLmZpbHRlclRleHRzIS5nZXQoY29sdW1uTmFtZSkgPz8gXCJcIixcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdG4gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25zXCI7XG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyaWRcIjtcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uXCI7XG5pbXBvcnQgeyBQcmVsb2FkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QcmVsb2FkZXJcIjtcbmltcG9ydCB7IFdpbmVzVGFibGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XaW5lc1RhYmxlXCI7XG5pbXBvcnQgeyBjcmVhdGVDb29raWUsIGRlbGV0ZUNvb2tpZSwgcmVhZENvb2tpZSB9IGZyb20gXCIuLi8uLi9saWIvQ29va2llc1wiO1xuaW1wb3J0IEZpbHRlckV4cHIgZnJvbSBcIi4uLy4uL2xpYi9GaWx0ZXJFeHByXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi8uLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyBJV2luZSB9IGZyb20gXCIuLi8uLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgZ2V0V2luZXMgfSBmcm9tIFwiLi4vLi4vbGliL1Jlc3RBcGlcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICB3aW5lczogSVdpbmVbXTtcbiAgICBwcmVkaWNhdGVzOiBNYXA8a2V5b2YgSVdpbmUsIEZpbHRlckV4cHI+O1xuICAgIGZpbHRlclRleHRzOiBNYXA8a2V5b2YgSVdpbmUsIHN0cmluZz47XG4gICAgaGFzTG9hZGVkOiBib29sZWFuO1xuICAgIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gICAgd2luZXNQZXJQYWdlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBXaW5lc0FwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgSVN0YXRlPiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBsb2dnZXI6IExvZ2dlcjtcbiAgICBwcml2YXRlIHN0YXRpYyBjb29raWVOYW1lOiBzdHJpbmcgPSBcIldpbmVzQXBwUHJlZGljYXRlc1wiO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByb3BzOiB7fSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyVGV4dHMgPSB0aGlzLmRlc2VyaWFsaXplRmlsdGVycyhyZWFkQ29va2llKFdpbmVzQXBwLmNvb2tpZU5hbWUpKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgd2luZXM6IFtdLFxuICAgICAgICAgICAgZmlsdGVyVGV4dHM6IGZpbHRlclRleHRzLFxuICAgICAgICAgICAgcHJlZGljYXRlczogdGhpcy5wYXJzZUFsbEZpbHRlcnMoZmlsdGVyVGV4dHMpLFxuICAgICAgICAgICAgaGFzTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICAgICAgd2luZXNQZXJQYWdlOiA1MCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlcmlhbGl6ZUZpbHRlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZpbHRlclRleHRzKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVkU3RyaW5ncyA9IEFycmF5LmZyb20odGhpcy5zdGF0ZS5maWx0ZXJUZXh0cy5lbnRyaWVzKCkpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nSW5mbyhgRmlsdGVyIHRleHRzOiAnJHtwcmVkU3RyaW5nc30nYClcbiAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRQcmVkaWNhdGVzID0gSlNPTi5zdHJpbmdpZnkocHJlZFN0cmluZ3MpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nRGVidWcoYFVwZGF0aW5nIGNvb2tpZSB0byAnJHtzZXJpYWxpemVkUHJlZGljYXRlc30nYCk7XG4gICAgICAgICAgICBkZWxldGVDb29raWUoV2luZXNBcHAuY29va2llTmFtZSk7XG4gICAgICAgICAgICBjcmVhdGVDb29raWUoV2luZXNBcHAuY29va2llTmFtZSwgc2VyaWFsaXplZFByZWRpY2F0ZXMsIDkwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZUNvb2tpZShXaW5lc0FwcC5jb29raWVOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZGVzZXJpYWxpemVGaWx0ZXJzKGpzb246IHN0cmluZyk6IE1hcDxrZXlvZiBJV2luZSwgc3RyaW5nPiB7XG4gICAgICAgIGlmICghanNvbikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvZ2dlci5sb2dEZWJ1ZyhgRGVzZXJpYWxpemluZyBKU09OOiAke2pzb259YCk7XG4gICAgICAgIGNvbnN0IHByZWRpY2F0ZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhcnI6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+ID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2tleSwgdGV4dF0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIHByZWRpY2F0ZXMuc2V0KGtleSwgdGV4dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBwcmVkaWNhdGVzO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGRlbGV0ZUNvb2tpZShXaW5lc0FwcC5jb29raWVOYW1lKTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ1dhcm5pbmcoYEZhaWxlZCByZWFkaW5nIGZpbHRlcnMgY29va2llIHdpdGggZXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcGFyc2VBbGxGaWx0ZXJzKGZpbHRlclRleHRzOiBNYXA8a2V5b2YgSVdpbmUsIHN0cmluZz4pOiBNYXA8a2V5b2YgSVdpbmUsIEZpbHRlckV4cHI+IHtcbiAgICAgICAgY29uc3QgcHJlZGljYXRlcyA9IG5ldyBNYXA8a2V5b2YgSVdpbmUsIEZpbHRlckV4cHI+KClcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBmaWx0ZXJUZXh0cy5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIHByZWRpY2F0ZXMuc2V0KGVudHJ5WzBdLCBGaWx0ZXJFeHByLnBhcnNlKGVudHJ5WzFdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZWRpY2F0ZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmhhc0xvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDxQcmVsb2FkZXIgLz47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdpbmVzID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS53aW5lcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHdpbmVzID0gKFxuICAgICAgICAgICAgICAgIDw+XG5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImJvbGQgY2VudGVyLWFsaWduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgaGF2ZW4mcnNxdW87dCBlbnRlcmVkIGFueSB3aW5lcyB5ZXQuXG4gICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcImdyZWVuLWJnXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiByZWRpcmVjdChcIi93aW5lcy9uZXcvXCIpIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIGEgbmV3IHdpbmVcbiAgICAgICAgICAgICAgICAgICAgPC9CdG4+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZXMgPSAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5XaW5lczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcInllbGxvdy1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblJlc2V0RmlsdGVycy5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzZXQgRmlsdGVyc1xuICAgICAgICAgICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgICAgICAgICAgPFdpbmVzVGFibGUgb25GaWx0ZXJDaGFuZ2U9eyAoYywgdGV4dCkgPT4gdGhpcy5vbkZpbHRlckNoYW5nZShjLCB0ZXh0KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5lcz17IHRoaXMuZmlsdGVyZWRXaW5lcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJUZXh0cz17IHRoaXMuc3RhdGUuZmlsdGVyVGV4dHMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9eyB0aGlzLnN0YXRlLmN1cnJlbnRQYWdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmVzUGVyUGFnZT17IHRoaXMuc3RhdGUud2luZXNQZXJQYWdlIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gY3VycmVudFBhZ2U9eyB0aGlzLnN0YXRlLmN1cnJlbnRQYWdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDb3VudD17IE1hdGgubWF4KDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5jZWlsKHRoaXMuZmlsdGVyZWRXaW5lcy5sZW5ndGggLyB0aGlzLnN0YXRlLndpbmVzUGVyUGFnZSApKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblBhZ2VDbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBzPXsgMTIgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgd2luZXMgfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdpbmVzID0gYXdhaXQgZ2V0V2luZXMoe30pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgd2luZXMsXG4gICAgICAgICAgICAgICAgaGFzTG9hZGVkOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dFcnJvcihcIkZhaWxlZCB0byBnZXQgd2luZXNcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBmaWx0ZXJlZFdpbmVzKCkge1xuICAgICAgICAvLyBSZWR1Y2UgcHJlZGljYXRlc1xuICAgICAgICBjb25zdCBjb21iaW5lZFByZWQgPSBbLi4udGhpcy5zdGF0ZS5wcmVkaWNhdGVzLmVudHJpZXMoKV1cbiAgICAgICAgICAgIC5yZWR1Y2VSaWdodCgocHJldlZhbCwgW2NvbHVtbiwgZmlsdGVyRXhwcl0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHdpbmUpID0+IHByZXZWYWwod2luZSkgJiYgZmlsdGVyRXhwci5jYWxsKHdpbmVbY29sdW1uXSEpO1xuICAgICAgICAgICAgfSwgKF86IElXaW5lKSA9PiB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUud2luZXMuZmlsdGVyKGNvbWJpbmVkUHJlZCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIG9uRmlsdGVyQ2hhbmdlKGNvbHVtbk5hbWU6IGtleW9mIElXaW5lLCB0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICBwcmV2U3RhdGUucHJlZGljYXRlcy5zZXQoY29sdW1uTmFtZSwgRmlsdGVyRXhwci5wYXJzZSh0ZXh0KSk7XG4gICAgICAgICAgICBwcmV2U3RhdGUuZmlsdGVyVGV4dHMuc2V0KGNvbHVtbk5hbWUsIHRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwcmVkaWNhdGVzOiBwcmV2U3RhdGUucHJlZGljYXRlcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJUZXh0czogcHJldlN0YXRlLmZpbHRlclRleHRzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgdGhpcy5zZXJpYWxpemVGaWx0ZXJzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUmVzZXRGaWx0ZXJzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHByZWRpY2F0ZXM6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgIGZpbHRlclRleHRzOiBuZXcgTWFwKCksXG4gICAgICAgIH0sIHRoaXMuc2VyaWFsaXplRmlsdGVycyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblBhZ2VDbGljayhwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHBhZ2VOdW1iZXIgPT09IHRoaXMuc3RhdGUuY3VycmVudFBhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBwYWdlTnVtYmVyLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwiLi4vLi4vbGliL3dpZGdldHNcIjtcbmltcG9ydCB7IFdpbmVzQXBwIH0gZnJvbSBcIi4vV2luZXNBcHBcIjtcblxubmF2YmFyKFwid2luZXMtbmF2XCIpO1xucmVuZGVyKGNyZWF0ZUVsZW1lbnQoV2luZXNBcHApLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmVzLWNvbnRhaW5lclwiKSk7XG4iLCJpbXBvcnQgeyByZWFkQ29va2llIH0gZnJvbSBcIi4vQ29va2llc1wiO1xuaW1wb3J0IHsgSURpY3QsIGlzRW1wdHkgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBIRUFERVJTID0ge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiWC1DU1JGVG9rZW5cIjogcmVhZENvb2tpZShcImNzcmZ0b2tlblwiKSB8fCBcIlwiLFxufTtcblxuZXhwb3J0IHR5cGUgSVF1ZXJ5UGFyYW1zID0gSURpY3Q8c3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj47XG5cbmZ1bmN0aW9uIGVuY29kZVBhcmFtcyhwYXJhbXM6IElRdWVyeVBhcmFtcyk6IHN0cmluZyB7XG4gICAgaWYgKGlzRW1wdHkocGFyYW1zKSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiP1wiICsgT2JqZWN0LmVudHJpZXMocGFyYW1zKS5tYXAoKFtrLCB2XSkgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGspfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2KX1gKS5qb2luKFwiJlwiKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlSnNvbihvYmo6IG9iamVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlY29kZUpzb25JZkFueShyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICBpZiAocGFyc2VGbG9hdChyZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtbGVuZ3RoXCIpID8/IFwiMFwiKSA+IDBcbiAgICAgICAgJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIikgPT09IFwiYXBwbGljYXRpb24vanNvblwiKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxufVxuXG50eXBlIFZpbm90ZWNhRXJyb3IgPVxuICAgIHwge1wiTm90Rm91bmRcIjogc3RyaW5nfVxuICAgIHwge1wiSW50ZXJuYWxcIjogc3RyaW5nfVxuICAgIHwge1wiTWlzc2luZ0NvbnN0cmFpbnRcIjogc3RyaW5nfVxuICAgIHwge1wiQmFkUmVxdWVzdFwiOiBzdHJpbmd9O1xuXG5mdW5jdGlvbiBpc1Zpbm90ZWNhRXJyb3Iob2JqOiBvYmplY3QpOiBvYmogaXMgVmlub3RlY2FFcnJvciB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgcmV0dXJuIGtleXMubGVuZ3RoID09PSAxXG4gICAgICAgICYmIFtcIk5vdEZvdW5kXCIsIFwiSW50ZXJuYWxcIiwgXCJNaXNzaW5nQ29uc3RyYWludFwiLCBcIkJhZFJlcXVlc3RcIl1cbiAgICAgICAgICAgIC5maW5kKChpKSA9PiBpID09PSBrZXlzWzBdKSAhPT0gdW5kZWZpbmVkO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlOiBSZXNwb25zZSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDMxMCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgZGVjb2RlSnNvbklmQW55KHJlc3BvbnNlKTtcbiAgICAgICAgaWYgKGlzVmlub3RlY2FFcnJvcihtZXNzYWdlKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYCR7T2JqZWN0LmtleXMobWVzc2FnZSlbMF19OiAke09iamVjdC52YWx1ZXMobWVzc2FnZSlbMF19YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVKc29uSWZBbnkocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBFcnJvcihhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBNYWtlcyBhbiBIVFRQIEdFVCByZXF1ZXN0IHRvIHRoZSB1cmwgd2l0aCB0aGUgb3B0aW9uYWwgcGFyYW1ldGVycywgdGhlbiBwYXJzZXNcbiAqIHRoZSBKU09OIHJlc3BvbnNlLlxuICogQHBhcmFtIHVybCBBIFVSTCB0byByZXF1ZXN0XG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9wdGlvbmFsIGRpY3Rpb25hcnkgb2YgcGFyYW1ldGVycyB0byB0aGVpciB2YWx1ZXNcbiAqIEByZXR1cm5zIHBhcnNlZCBKU09OIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXQ8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcykpO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhbiBIVFRQIFBPU1QgcmVxdWVzdCB0byB0aGUgdXJsIHdpdGggdGhlIG9wdGlvbmFsIHBhcmFtZXRlcnMgY29udGFpbmluZ1xuICogdGhlIGJvZHksIHRoZW4gcGFyc2VzIHRoZSBKU09OIHJlc3BvbnNlLlxuICogQHBhcmFtIHVybCBBIFVSTCB0byByZXF1ZXN0XG4gKiBAcGFyYW0gYm9keSBKU09OIG9iamVjdCB0byBlbmNvZGUgYW5kIHNlbmQgdG8gdGhlIHNlcnZlclxuICogQHBhcmFtIHBhcmFtcyBBbiBvcHRpb25hbCBkaWN0aW9uYXJ5IG9mIHBhcmFtZXRlcnMgdG8gdGhlaXIgdmFsdWVzXG4gKiBAcmV0dXJucyBwYXJzZWQgSlNPTiByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGJvZHk6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBlbmNvZGVKc29uKGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RGb3JtPFJlc3BvbnNlPih1cmw6IHN0cmluZywgZm9ybTogRm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBmb3JtLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhbiBIVFRQIFBVVCByZXF1ZXN0IHRvIHRoZSB1cmwgd2l0aCB0aGUgb3B0aW9uYWwgcGFyYW1ldGVycyBjb250YWluaW5nXG4gKiB0aGUgYm9keSwgdGhlbiBwYXJzZXMgdGhlIEpTT04gcmVzcG9uc2UuXG4gKiBAcGFyYW0gdXJsIEEgVVJMIHRvIHJlcXVlc3RcbiAqIEBwYXJhbSBib2R5IEpTT04gb2JqZWN0IHRvIGVuY29kZSBhbmQgc2VuZCB0byB0aGUgc2VydmVyXG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9wdGlvbmFsIGRpY3Rpb25hcnkgb2YgcGFyYW1ldGVycyBhbmQgdGhlaXIgdmFsdWVzXG4gKiBAcmV0dXJucyBwYXJzZWQgSlNPTiByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHV0PFJlc3BvbnNlPih1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGVuY29kZUpzb24oYm9keSksXG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXRGb3JtPFJlc3BvbnNlPih1cmw6IHN0cmluZywgZm9ybTogRm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGZvcm0sXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXRjaDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGJvZHk6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXM9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZW5jb2RlSnNvbihib2R5KSxcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlXzxSZXNwb25zZT4odXJsOiBzdHJpbmcsIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuIiwiY29uc3QgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQ3JlYXRlIG9yIHVwZGF0ZSBhIGNvb2tpZVxuICogQHBhcmFtIG5hbWUgbmFtZS9rZXkgb2YgdGhlIGNvb2tpZVxuICogQHBhcmFtIHZhbHVlIHZhbHVlIHRvIHN0b3JlXG4gKiBAcGFyYW0gZGF5cyBudW1iZXIgb2YgZGF5cyB0aGUgY29va2llIGlzIHZhbGlkLCBkZWZhdWx0cyB0byB0aGUgY3VycmVudCBzZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb29raWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBkYXlzPzogbnVtYmVyKSB7XG4gICAgbGV0IGV4cGlyZXM7XG4gICAgaWYgKGRheXMpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogTUlMTElTRUNPTkRTX0lOX0RBWSkpO1xuICAgICAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZXhwaXJlcyA9IFwiXCI7XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRDb29raWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XG4gICAgZm9yIChsZXQgYyBvZiBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpKSB7XG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGMgPSBjLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cihuYW1lRVEubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNvb2tpZShuYW1lOiBzdHJpbmcpIHtcbiAgICBjcmVhdGVDb29raWUobmFtZSwgXCJcIiwgLTEpO1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tZXZhbFxudHlwZSBCaW5hcnlQcmVkID0gKGw6IGFueSwgcjogYW55KSA9PiBib29sZWFuO1xuY29uc3Qgb3BlcmF0b3JzOiBNYXA8c3RyaW5nLCBCaW5hcnlQcmVkPiA9IG5ldyBNYXAoKTtcbm9wZXJhdG9ycy5zZXQoXCI9PVwiLCAobCwgcikgPT4gbCA9PT0gcik7XG5vcGVyYXRvcnMuc2V0KFwiPVwiLCAobCwgcikgPT4gbCA9PT0gcik7XG5vcGVyYXRvcnMuc2V0KFwiPD5cIiwgKGwsIHIpID0+IGwgIT09IHIpO1xub3BlcmF0b3JzLnNldChcIiE9XCIsIChsLCByKSA9PiBsICE9PSByKTtcbm9wZXJhdG9ycy5zZXQoXCI8PVwiLCAobCwgcikgPT4gbCA8PSByKTtcbm9wZXJhdG9ycy5zZXQoXCI8XCIsIChsLCByKSA9PiBsIDwgcik7XG5vcGVyYXRvcnMuc2V0KFwiPj1cIiwgKGwsIHIpID0+IGwgPj0gcik7XG5vcGVyYXRvcnMuc2V0KFwiPlwiLCAobCwgcikgPT4gbCA+IHIpO1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc3RydWN0XG5vcGVyYXRvcnMuc2V0KFwiSU5DTFVERVNcIiwgKGwsIHIpID0+IG5ldyBTdHJpbmcobCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhyKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckV4cHIge1xuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2UoZXhwcjogc3RyaW5nKTogRmlsdGVyRXhwciB7XG4gICAgICAgIGlmIChvcGVyYXRvcnMuaGFzKGV4cHIuc3Vic3RyKDAsIDIpKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGaWx0ZXJFeHByKGV4cHIuc3Vic3RyKDAsIDIpLCBldmFsKGV4cHIuc3Vic3RyKDIpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wZXJhdG9ycy5oYXMoZXhwclswXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmlsdGVyRXhwcihleHByWzBdLCBldmFsKGV4cHIuc3Vic3RyKDEpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBGaWx0ZXJFeHByKFwiSU5DTFVERVNcIiwgZXhwcik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBmcm9tSnNvbihqc29uOiBzdHJpbmcpOiBGaWx0ZXJFeHByIHtcbiAgICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgcmV0dXJuIG5ldyBGaWx0ZXJFeHByKG9iai5mdW5OYW1lLCBvYmoucmhzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZnVuTmFtZTogc3RyaW5nLCBwcml2YXRlIHJlYWRvbmx5IHJoczogYW55KSB7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGwodmFsOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgb3BlcmF0b3JGdW4gPSBvcGVyYXRvcnMuZ2V0KHRoaXMuZnVuTmFtZSkhO1xuICAgICAgICByZXR1cm4gb3BlcmF0b3JGdW4odmFsLCB0aGlzLnJocyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBKU09OIGVxdWl2YWxlbnQgb2YgdGhpcyBgRmlsdGVyRXhwcmBcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9Kc29uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHBsYWludGV4dCBzdHJpbmcgZXF1aXZhbGVudCBvZiB0aGlzIG9iamVjdFxuICAgICAqL1xuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5mdW5OYW1lID09PSBcIklOQ0xVREVTXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJocztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5mdW5OYW1lICsgdGhpcy5yaHM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcG9zdCB9IGZyb20gXCIuL0FwaUhlbHBlclwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwiLi93aWRnZXRzXCI7XG5cbi8qKiBQcm92aWRlcyBsb2dnaW5nIGZ1bmN0aW9uYWxpdHkgZm9yIGNsaWVudC1zaWRlIEphdmFTY3JpcHQgZXJyb3JzLiAqL1xuZW51bSBMb2dMZXZlbCB7XG4gICAgQ3JpdGljYWwgPSBcImNyaXRpY2FsXCIsXG4gICAgRXJyb3IgPSBcImVycm9yXCIsXG4gICAgV2FybmluZyA9IFwid2FybmluZ1wiLFxuICAgIEluZm8gPSBcImluZm9cIixcbiAgICBEZWJ1ZyA9IFwiZGVidWdcIixcbn1cblxuaW50ZXJmYWNlIElMb2dSZXN1bHQge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG4gICAgLyoqXG4gICAgICogTG9nZ2luZyBjbGFzcyBmb3IgY2xpZW50LXNpZGUgZXJyb3JzIHRoYXQgd2lsbCBiZSBwb3N0ZWQgdG8gdGhlIHNlcnZlclxuICAgICAqIGZvciBsb2dnaW5nIHRvIHRoZSBzYW1lIGZpbGUgYXMgYWxsIG90aGVyIHZpbm90ZWNhIGxvZ3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbW9kdWxlIHRoZSBuYW1lIG9mIHRoZSBtb2R1bGUgZnJvbSB3aGljaCB0aGUgbG9nIG1lc3NhZ2VzIG9yaWdpbmF0ZS5cbiAgICAgKiBAcGFyYW0gdG9Db25zb2xlIHdoZXRoZXIgdG8gYWxzbyBwcmludCBtZXNzYWdlcyB0byB0aGUgY29uc29sZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kdWxlOiBzdHJpbmcsIHByaXZhdGUgdG9Db25zb2xlID0gZmFsc2UpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZWFudCBmb3IgaXJyZWNvdmVyYWJsZSBvciB0cnVseSBleGNlcHRpb25hbCBlcnJvcnMuIEEgdG9hc3Qgd2l0aCB0aGVcbiAgICAgKiBsb2cgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIGxvZyB3aWxsIGJlIHNlbnQgYmFjayB0byB0aGUgc2VydmVyXG4gICAgICogZm9yIHBvc3Rlcml0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nQ3JpdGljYWwobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gTG9nTGV2ZWwuQ3JpdGljYWw7XG4gICAgICAgIHRoaXMudG9hc3QobGV2ZWwsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgdG9hc3Qgd2l0aCB0aGUgbG9nIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSBsb2cgd2lsbCBiZSBzZW50XG4gICAgICogYmFjayB0byB0aGUgc2VydmVyIGZvciBwb3N0ZXJpdHkuXG4gICAgICovXG4gICAgcHVibGljIGxvZ0Vycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IExvZ0xldmVsLkVycm9yO1xuICAgICAgICB0aGlzLnRvYXN0KGxldmVsLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHRvYXN0IHdpdGggdGhlIGxvZyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgbG9nIHdpbGwgYmUgc2VudFxuICAgICAqIGJhY2sgdG8gdGhlIHNlcnZlciBmb3IgcG9zdGVyaXR5LlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dXYXJuaW5nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IExvZ0xldmVsLldhcm5pbmc7XG4gICAgICAgIHRoaXMudG9hc3QobGV2ZWwsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dJbmZvKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2coTG9nTGV2ZWwuSW5mbywgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ0RlYnVnKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2coTG9nTGV2ZWwuRGVidWcsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbG9nKGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnRvQ29uc29sZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bGV2ZWwudG9VcHBlckNhc2UoKX0gJHtuZXcgRGF0ZSgpfSAke3RoaXMubW9kdWxlfTogJHttZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBJTG9nUmVzdWx0ID0gYXdhaXQgcG9zdChcIi9yZXN0L2xvZ3NcIiwge1xuICAgICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlIGluc3RhbmNlb2YgT2JqZWN0ID8gXCJcIiA6IG1lc3NhZ2UsXG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMubW9kdWxlLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0KExvZ0xldmVsLkVycm9yLCBcIkZhaWxlZCB0byBzZW5kIGNsaWVudC1zaWRlIGxvZ3MgdG8gc2VydmVyLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdG9hc3QobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdG9hc3QoYCR7bGV2ZWwudG9VcHBlckNhc2UoKX06ICR7bWVzc2FnZX1gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBkZWxldGVfLCBnZXQsIElRdWVyeVBhcmFtcywgcGF0Y2gsIHBvc3QsIHBvc3RGb3JtLCBwdXQsIHB1dEZvcm0gfSBmcm9tIFwiLi9BcGlIZWxwZXJcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4vTG9nZ2VyXCI7XG5pbXBvcnQgeyBJQ29sb3IsIElHcmFwZSwgSUdyYXBlRm9ybSwgSU1vc3RDb21tb25QdXJjaGFzZURhdGUsIElQcm9kdWNlciwgSVByb2R1Y2VyRm9ybSwgSVB1cmNoYXNlLFxuICAgICAgICAgSVB1cmNoYXNlQ291bnQsIElQdXJjaGFzZUZvcm0sIElSZWdpb24sIElSZWdpb25Gb3JtLCBJU3RvcmUsIElTdG9yZUZvcm0sIElUb3BFbnRpdHksXG4gICAgICAgICBJVG90YWxMaXRlcnMsIElWaXRpQXJlYSwgSVZpdGlBcmVhRm9ybSwgSVZpdGlBcmVhU3RhdHMsIElXaW5lLCBJV2luZUNvdW50LCBJV2luZUZvcm0sXG4gICAgICAgICBJV2luZUdyYXBlLCBJV2luZUdyYXBlc0Zvcm0sIElXaW5lUGF0Y2hGb3JtLCBJV2luZVR5cGUsIElXaW5lVHlwZUZvcm0gfSBmcm9tIFwiLi9SZXN0XCI7XG5pbXBvcnQgeyBJUmVzdE1vZGVsIH0gZnJvbSBcIi4vUmVzdFR5cGVzXCI7XG5pbXBvcnQgeyBJRGljdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RpY3QobW9kZWxzOiBJUmVzdE1vZGVsW10pOiBJRGljdDxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3QgcmVzdWx0OiBJRGljdDxzdHJpbmcgfCBudWxsPiA9IHt9O1xuICAgIG1vZGVscy5mb3JFYWNoKChtb2RlbCkgPT4ge1xuICAgICAgICByZXN1bHRbbW9kZWwubmFtZV0gPSBudWxsO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjbGFzcyBFbXB0eVJlc3VsdEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIHB1YmxpYyBzdGF0aWMgaXNJbnN0YW5jZShlcnI6IEVycm9yKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBlcnIubmFtZSA9PT0gdGhpcy5OQU1FO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIE5BTUUgPSBcIkVtcHR5UmVzdWx0RXJyb3JcIjtcblxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gRW1wdHlSZXN1bHRFcnJvci5OQU1FO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9uTnVsbHMob2JqOiBJRGljdDxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgdW5kZWZpbmVkPik6IElRdWVyeVBhcmFtcyB7XG4gICAgY29uc3QgcTogSVF1ZXJ5UGFyYW1zID0ge307XG4gICAgT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoKGspID0+IEJvb2xlYW4ob2JqW2tdKSkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICBxW2tdID0gb2JqW2tdIGFzIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG4gICAgfSk7XG4gICAgcmV0dXJuIHE7XG59XG5cbmZ1bmN0aW9uIHNpbmdsZUVudGl0eUdldHRlcjxQYXJhbXMsIFJlc3A+KFxuICAgIGxpc3RHZXR0ZXI6IChwYXJhbXM6IFBhcmFtcykgPT4gUHJvbWlzZTxSZXNwW10+LFxuKTogKHBhcmFtczogUGFyYW1zKSA9PiBQcm9taXNlPFJlc3A+IHtcbiAgICAvLyBTaGF2ZSBvZmYgJ2dldCdcbiAgICBjb25zdCBvYmpOYW1lID0gbGlzdEdldHRlci5uYW1lLnN1YnN0cigzKTtcbiAgICByZXR1cm4gYXN5bmMgKHBhcmFtczogUGFyYW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBsaXN0R2V0dGVyKHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgUmVjZWl2ZWQgbW9yZSB0aGFuIG9uZSAke29iak5hbWV9IHJlc3VsdCB3aGVuIG9uZSB3YXMgZXhwZWN0ZWRgO1xuICAgICAgICAgICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihcIlJlc3RBcGlcIik7XG4gICAgICAgICAgICBsb2dnZXIubG9nRXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRPckNyZWF0ZTxSZXFQYXJhbXMsIFJlc3AsIEZvcm0+KFxuICAgIGxpc3RHZXR0ZXI6IChwYXJhbXM6IFJlcVBhcmFtcykgPT4gUHJvbWlzZTxSZXNwW10+LFxuICAgIGNyZWF0b3I6IChmb3JtOiBGb3JtKSA9PiBQcm9taXNlPFJlc3A+LFxuKTogKHBhcmFtczogUmVxUGFyYW1zLCBmb3JtOiBGb3JtKSA9PiBQcm9taXNlPFJlc3A+IHtcbiAgICBjb25zdCBvYmpOYW1lID0gbGlzdEdldHRlci5uYW1lLnN1YnN0cigzKTtcbiAgICByZXR1cm4gYXN5bmMgKHBhcmFtcywgZm9ybSkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgbGlzdEdldHRlcihwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld09iaiA9IGF3YWl0IGNyZWF0b3IoZm9ybSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFJlY2VpdmVkIG1vcmUgdGhhbiBvbmUgJHtvYmpOYW1lfSByZXN1bHQgd2hlbiBvbmUgd2FzIGV4cGVjdGVkYDtcbiAgICAgICAgbmV3IExvZ2dlcihcIlJlc3RBcGlcIikubG9nRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIHRocm93IEVycm9yKG1lc3NhZ2UpO1xuICAgIH07XG59XG5cbi8qIENPTE9SUyAqL1xuaW50ZXJmYWNlIElHZXRDb2xvclBhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbG9ycyh7IGlkLCBuYW1lIH06IElHZXRDb2xvclBhcmFtcyk6IFByb21pc2U8SUNvbG9yW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSB9KTtcbiAgICBjb25zdCBjb2xvcnM6IElDb2xvcltdID0gYXdhaXQgZ2V0KFwiL3Jlc3QvY29sb3JzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIGlmIChjb2xvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFbXB0eVJlc3VsdEVycm9yKFwiRW1wdHkgcmVzdWx0IHJldHVybmVkIGZvciBjb2xvclwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9ycztcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvbG9yID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldENvbG9ycyk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BDb2xvcnMoKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvY29sb3JzL3RvcFwiKTtcbn1cblxuLyogR1JBUEVTICovXG5pbnRlcmZhY2UgSUdldEdyYXBlc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyYXBlcyh7IGlkLCBuYW1lIH06IElHZXRHcmFwZXNQYXJhbXMpOiBQcm9taXNlPElHcmFwZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUgfSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L2dyYXBlc1wiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEdyYXBlID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldEdyYXBlcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVHcmFwZSA9IGdldE9yQ3JlYXRlKGdldEdyYXBlcywgY3JlYXRlR3JhcGUpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR3JhcGUoZ3JhcGU6IElHcmFwZUZvcm0pOiBQcm9taXNlPElHcmFwZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvZ3JhcGVzXCIsIGdyYXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdyYXBlKGlkOiBudW1iZXIsIGdyYXBlOiBJR3JhcGVGb3JtKTogUHJvbWlzZTxJR3JhcGU+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9ncmFwZXMvJHtpZH1gLCBncmFwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BHcmFwZXMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvZ3JhcGVzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogUFJPRFVDRVJTICovXG5pbnRlcmZhY2UgSUdldFByb2R1Y2Vyc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICByZWdpb25JZD86IG51bWJlcjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lLWxlbmd0aFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y2Vycyh7aWQsIG5hbWUsIHJlZ2lvbklkfTogSUdldFByb2R1Y2Vyc1BhcmFtcyk6IFByb21pc2U8SVByb2R1Y2VyW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2lkLCBuYW1lLCByZWdpb25faWQ6IHJlZ2lvbklkfSk7XG4gICAgY29uc3QgcHJvZHVjZXJzOiBJUHJvZHVjZXJbXSA9IGF3YWl0IGdldChcIi9yZXN0L3Byb2R1Y2Vyc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gcHJvZHVjZXJzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjZXIgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0UHJvZHVjZXJzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVByb2R1Y2VyID0gZ2V0T3JDcmVhdGUoZ2V0UHJvZHVjZXJzLCBjcmVhdGVQcm9kdWNlcik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWNlcihwcm9kdWNlcjogSVByb2R1Y2VyRm9ybSk6IFByb21pc2U8SVByb2R1Y2VyPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9wcm9kdWNlcnNcIiwgcHJvZHVjZXIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZHVjZXIocHJvZHVjZXI6IElQcm9kdWNlcik6IFByb21pc2U8SVByb2R1Y2VyPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3QvcHJvZHVjZXJzLyR7cHJvZHVjZXIuaWR9YCwgcHJvZHVjZXIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjZXIoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBkZWxldGVfKGAvcmVzdC9wcm9kdWNlcnMvJHtpZH1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFByb2R1Y2VycyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wcm9kdWNlcnMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBQVVJDSEFTRVMgKi9cbmludGVyZmFjZSBJR2V0UHVyY2hhc2VzUGFyYW1zIHtcbiAgICB3aW5lSWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQdXJjaGFzZXMoe3dpbmVJZH06IElHZXRQdXJjaGFzZXNQYXJhbXMpOiBQcm9taXNlPElQdXJjaGFzZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgd2luZV9pZDogd2luZUlkIH0pO1xuICAgIGNvbnN0IHB1cmNoYXNlcyA9IGF3YWl0IGdldDxJUHVyY2hhc2VbXT4oXCIvcmVzdC9wdXJjaGFzZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHB1cmNoYXNlcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVB1cmNoYXNlKHB1cmNoYXNlOiBJUHVyY2hhc2VGb3JtKTogUHJvbWlzZTxJUHVyY2hhc2U+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3B1cmNoYXNlc1wiLCBwdXJjaGFzZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQdXJjaGFzZShpZDogbnVtYmVyLCBwdXJjaGFzZTogSVB1cmNoYXNlRm9ybSk6IFByb21pc2U8SVB1cmNoYXNlPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3QvcHVyY2hhc2VzLyR7aWR9YCwgcHVyY2hhc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHVyY2hhc2UoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBkZWxldGVfKGAvcmVzdC9wdXJjaGFzZXMvJHtpZH1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vc3RDb21tb25QdXJjaGFzZURhdGUoKTogUHJvbWlzZTxJTW9zdENvbW1vblB1cmNoYXNlRGF0ZT4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wdXJjaGFzZXMvbW9zdC1jb21tb24tcHVyY2hhc2UtZGF0ZVwiKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvdGFsTGl0ZXJzKCk6IFByb21pc2U8SVRvdGFsTGl0ZXJzPiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3B1cmNoYXNlcy90b3RhbC1saXRlcnNcIik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQdXJjaGFzZUNvdW50KCk6IFByb21pc2U8SVB1cmNoYXNlQ291bnQ+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHVyY2hhc2VzL2NvdW50XCIpO1xufVxuXG4vKiBSRUdJT05TICovXG5pbnRlcmZhY2UgSUdldFJlZ2lvblBhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBwcm9kdWNlck5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWdpb25zKHsgaWQsIG5hbWUsIHByb2R1Y2VyTmFtZSB9OiBJR2V0UmVnaW9uUGFyYW1zKTogUHJvbWlzZTxJUmVnaW9uW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSwgcHJvZHVjZXJfbmFtZTogcHJvZHVjZXJOYW1lIH0pO1xuICAgIGNvbnN0IHJlZ2lvbnM6IElSZWdpb25bXSA9IGF3YWl0IGdldChcIi9yZXN0L3JlZ2lvbnNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHJlZ2lvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZWdpb24gPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0UmVnaW9ucyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVSZWdpb24gPSBnZXRPckNyZWF0ZShnZXRSZWdpb25zLCBjcmVhdGVSZWdpb24pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVnaW9uKHJlZ2lvbjogSVJlZ2lvbkZvcm0pOiBQcm9taXNlPElSZWdpb24+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3JlZ2lvbnNcIiwgcmVnaW9uKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVJlZ2lvbihyZWdpb246IElSZWdpb24pOiBQcm9taXNlPElSZWdpb24+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9yZWdpb25zLyR7cmVnaW9uLmlkfWAsIHJlZ2lvbik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BSZWdpb25zKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3JlZ2lvbnMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBTVE9SRVMgKi9cbmludGVyZmFjZSBJR2V0U3RvcmVQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdG9yZXMoe2lkLCBuYW1lfTogSUdldFN0b3JlUGFyYW1zKTogUHJvbWlzZTxJU3RvcmVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7aWQsIG5hbWV9KTtcbiAgICBjb25zdCBzdG9yZXM6IElTdG9yZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvc3RvcmVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiBzdG9yZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdG9yZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRTdG9yZXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlU3RvcmUgPSBnZXRPckNyZWF0ZShnZXRTdG9yZXMsIGNyZWF0ZVN0b3JlKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHN0b3JlOiBJU3RvcmVGb3JtKTogUHJvbWlzZTxJU3RvcmU+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3N0b3Jlc1wiLCBzdG9yZSk7XG59XG5cbi8qIFZJVEkgQVJFQVMgKi9cbmludGVyZmFjZSBJR2V0Vml0aUFyZWFzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHJlZ2lvbk5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWaXRpQXJlYXMoXG4gICAgeyBpZCwgbmFtZSwgcmVnaW9uTmFtZSB9OiBJR2V0Vml0aUFyZWFzUGFyYW1zLFxuKTogUHJvbWlzZTxJVml0aUFyZWFbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lLCByZWdpb25fbmFtZTogcmVnaW9uTmFtZSB9KTtcbiAgICBjb25zdCB2aXRpQXJlYXM6IElWaXRpQXJlYVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvdml0aS1hcmVhc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gdml0aUFyZWFzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Vml0aUFyZWEgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0Vml0aUFyZWFzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVZpdGlBcmVhID0gZ2V0T3JDcmVhdGUoZ2V0Vml0aUFyZWFzLCBjcmVhdGVWaXRpQXJlYSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVWaXRpQXJlYSh2aXRpQXJlYTogSVZpdGlBcmVhRm9ybSk6IFByb21pc2U8SVZpdGlBcmVhPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC92aXRpLWFyZWFzXCIsIHZpdGlBcmVhKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVZpdGlBcmVhKHZpdGlBcmVhOiBJVml0aUFyZWEpOiBQcm9taXNlPElWaXRpQXJlYT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3ZpdGktYXJlYXMvJHt2aXRpQXJlYS5pZH1gLCB2aXRpQXJlYSk7XG59XG5cbmludGVyZmFjZSBJR2V0Vml0aUFyZWFTdGF0c1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgcmVnaW9uSWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWaXRpQXJlYVN0YXRzKFxuICAgIHsgaWQsIHJlZ2lvbklkIH06IElHZXRWaXRpQXJlYVN0YXRzUGFyYW1zLFxuKTogUHJvbWlzZTxJVml0aUFyZWFTdGF0c1tdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIHJlZ2lvbl9pZDogcmVnaW9uSWQgfSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3ZpdGktYXJlYXMvc3RhdHNcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BWaXRpQXJlYXMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvdml0aS1hcmVhcy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFdJTkVTICovXG5pbnRlcmZhY2UgSUdldFdpbmVzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBwcm9kdWNlcklkPzogbnVtYmVyO1xuICAgIHJlZ2lvbklkPzogbnVtYmVyO1xuICAgIHZpdGlBcmVhSWQ/OiBudW1iZXI7XG4gICAgd2luZVR5cGVJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVzKFxuICAgIHsgaWQsIHByb2R1Y2VySWQsIHJlZ2lvbklkLCB2aXRpQXJlYUlkLCB3aW5lVHlwZUlkIH06IElHZXRXaW5lc1BhcmFtcyxcbik6IFByb21pc2U8SVdpbmVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7XG4gICAgICAgIGlkLCByZWdpb25faWQ6IHJlZ2lvbklkLCBwcm9kdWNlcl9pZDogcHJvZHVjZXJJZCxcbiAgICAgICAgdml0aV9hcmVhX2lkOiB2aXRpQXJlYUlkLCB3aW5lX3R5cGVfaWQ6IHdpbmVUeXBlSWQsXG4gICAgfSk7XG4gICAgY29uc3Qgd2luZXM6IElXaW5lW10gPSBhd2FpdCBnZXQoXCIvcmVzdC93aW5lc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gd2luZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRXaW5lID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFdpbmVzKTtcblxuY29uc3QgY3JlYXRlV2luZUh0dHBGb3JtID0gKHdpbmU6IElXaW5lRm9ybSwgZmlsZTogRmlsZSB8IG51bGwpID0+IHtcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybS5hcHBlbmQoXCJ3aW5lX2Zvcm1cIiwgbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KHdpbmUpXSwge3R5cGU6IFwiYXBwbGljYXRpb24vanNvblwifSkpO1xuICAgIGlmIChmaWxlKSB7XG4gICAgICAgIGZvcm0uYXBwZW5kKFwiaW1hZ2VcIiwgZmlsZSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmUod2luZTogSVdpbmVGb3JtLCBmaWxlOiBGaWxlIHwgbnVsbCk6IFByb21pc2U8SVdpbmU+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlV2luZUh0dHBGb3JtKHdpbmUsIGZpbGUpO1xuICAgIHJldHVybiBwb3N0Rm9ybShcIi9yZXN0L3dpbmVzXCIsIGZvcm0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2luZShpZDogbnVtYmVyLCB3aW5lOiBJV2luZUZvcm0sIGZpbGU6IEZpbGUgfCBudWxsKTogUHJvbWlzZTxJV2luZT4ge1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVXaW5lSHR0cEZvcm0od2luZSwgZmlsZSk7XG4gICAgcmV0dXJuIHB1dEZvcm0oYC9yZXN0L3dpbmVzLyR7aWR9YCwgZm9ybSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXJ0VXBkYXRlV2luZShpZDogbnVtYmVyLCB3aW5lOiBJV2luZVBhdGNoRm9ybSk6IFByb21pc2U8SVdpbmU+IHtcbiAgICByZXR1cm4gcGF0Y2goYC9yZXN0L3dpbmVzLyR7aWR9YCwgd2luZSk7XG59XG5cbmludGVyZmFjZSBJU2VhcmNoV2luZXNQYXJhbXMge1xuICAgIGNvbG9yTGlrZT86IHN0cmluZztcbiAgICB3aW5lVHlwZUxpa2U/OiBzdHJpbmc7XG4gICAgcHJvZHVjZXJMaWtlPzogc3RyaW5nO1xuICAgIHJlZ2lvbkxpa2U/OiBzdHJpbmc7XG4gICAgdml0aUFyZWFMaWtlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoV2luZXMoXG4gICAgeyBjb2xvckxpa2UsIHdpbmVUeXBlTGlrZSwgcHJvZHVjZXJMaWtlLCByZWdpb25MaWtlLCB2aXRpQXJlYUxpa2UgfTogSVNlYXJjaFdpbmVzUGFyYW1zLFxuKTogUHJvbWlzZTxJV2luZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtcbiAgICAgICAgY29sb3JfbGlrZTogY29sb3JMaWtlLCB3aW5lX3R5cGVfbGlrZTogd2luZVR5cGVMaWtlLCBwcm9kdWNlcl9saWtlOiBwcm9kdWNlckxpa2UsXG4gICAgICAgIHJlZ2lvbl9saWtlOiByZWdpb25MaWtlLCB2aXRpX2FyZWFfbGlrZTogdml0aUFyZWFMaWtlLFxuICAgIH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC93aW5lcy9zZWFyY2hcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lVmFyaWV0aWVzKCk6IFByb21pc2U8SVdpbmVDb3VudD4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC93aW5lcy9jb3VudFwiKTtcbn1cblxuLyogV0lORSBHUkFQRVMgKi9cbmludGVyZmFjZSBJR2V0V2luZUdyYXBlc1BhcmFtcyB7XG4gICAgd2luZUlkPzogbnVtYmVyO1xuICAgIGdyYXBlSWQ/OiBudW1iZXI7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZS1sZW5ndGhcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lR3JhcGVzKHsgd2luZUlkLCBncmFwZUlkIH06IElHZXRXaW5lR3JhcGVzUGFyYW1zKTogUHJvbWlzZTxJV2luZUdyYXBlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyB3aW5lX2lkOiB3aW5lSWQsIGdyYXBlX2lkOiBncmFwZUlkIH0pO1xuICAgIGNvbnN0IHdpbmVHcmFwZXM6IElXaW5lR3JhcGVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3dpbmUtZ3JhcGVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB3aW5lR3JhcGVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZUdyYXBlcyh3aW5lR3JhcGVzOiBJV2luZUdyYXBlc0Zvcm0pOiBQcm9taXNlPElXaW5lR3JhcGVbXT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvd2luZS1ncmFwZXNcIiwgd2luZUdyYXBlcyk7XG59XG5cbi8qIFdJTkUgVFlQRVMgKi9cbmludGVyZmFjZSBJR2V0V2luZVR5cGVzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZVR5cGVzKHsgaWQsIG5hbWUgfTogSUdldFdpbmVUeXBlc1BhcmFtcyk6IFByb21pc2U8SVdpbmVUeXBlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSB9KTtcbiAgICBjb25zdCB3aW5lVHlwZXM6IElXaW5lVHlwZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvd2luZS10eXBlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gd2luZVR5cGVzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0V2luZVR5cGUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0V2luZVR5cGVzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVdpbmVUeXBlID0gZ2V0T3JDcmVhdGUoZ2V0V2luZVR5cGVzLCBjcmVhdGVXaW5lVHlwZSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5lVHlwZSh3aW5lVHlwZTogSVdpbmVUeXBlRm9ybSk6IFByb21pc2U8SVdpbmVUeXBlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC93aW5lLXR5cGVzXCIsIHdpbmVUeXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdpbmVUeXBlKHdpbmVUeXBlOiBJV2luZVR5cGUpOiBQcm9taXNlPElXaW5lVHlwZT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3dpbmUtdHlwZXMvJHt3aW5lVHlwZS5pZH1gLCB3aW5lVHlwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BXaW5lVHlwZXMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvd2luZS10eXBlcy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG4iLCIvKiogQmFzaWMgdHlwZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSByZXNwb25zZSBKU09OIG9mIG1hbnkgYXN5bmNocm9ub3VzIHJlcXVlc3RzLiAqL1xuaW1wb3J0IHsgSVJlc3RNb2RlbCB9IGZyb20gXCIuL1Jlc3RUeXBlc1wiO1xuXG4vKipcbiAqIEtleS12YWx1ZSBzdG9yZSB3aGVyZSB0aGUga2V5IG11c3QgYmUgYSBzdHJpbmcsIGJ1dCB0aGUgdmFsdWUgaXMgb2YgYW55IHR5cGVcbiAqIFQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSURpY3Q8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIG9iamVjdHMgdG8gYSBzaW5nbGUgb2JqZWN0IG9mIG5hbWVzIHRvIG51bGwgZm9yIHVzZSB3aXRoIG1hdGVyaWFsaXplXG4gKiBhdXRvY29tcGxldGUuXG4gKiBAcGFyYW0gb2JqZWN0cyBBbiBhcnJheSBvZiBSRVNUIG1vZGVsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzdE1vZGVsc1RvTmFtZURpY3Qob2JqZWN0czogSVJlc3RNb2RlbFtdKTogSURpY3Q8bnVsbD4ge1xuICAgIGNvbnN0IGRpY3Q6IElEaWN0PG51bGw+ID0ge307XG4gICAgb2JqZWN0cy5tYXAoKG9iaikgPT4ge1xuICAgICAgICBkaWN0W29iai5uYW1lXSA9IG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpY3Q7XG59XG5cbi8qKlxuICogQ29udmVydHMgYW4gOC1kaWdpdCBudW1iZXIgb2YgZm9ybWF0ICd5eXl5bW1kZCcgdG8gYSBEYXRlIG9iamVjdC5cbiAqIEBwYXJhbSBudW0gYSBkYXRlIG51bWJlciBvZiBmb3JtYXQgJ3l5eXltbWRkJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbnVtVG9EYXRlKG51bTogbnVtYmVyKTogRGF0ZSB7XG4gICAgY29uc3Qgc3RyTnVtID0gYCR7bnVtfWA7XG4gICAgaWYgKHN0ck51bS5sZW5ndGggIT09IDgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBJbnZhbGlkIGRhdGUgbnVtYmVyICcke3N0ck51bX0nYCk7XG4gICAgfVxuICAgIGNvbnN0IHllYXIgPSBzdHJOdW0uc3Vic3RyKDAsIDQpO1xuICAgIGNvbnN0IG1vbnRoID0gc3RyTnVtLnN1YnN0cig0LCAyKTtcbiAgICBjb25zdCBkYXkgPSBzdHJOdW0uc3Vic3RyKDYsIDIpO1xuICAgIC8vIEpTIG1vbnRocyBhcmUgMC1iYXNlZFxuICAgIHJldHVybiBuZXcgRGF0ZShwYXJzZUludCh5ZWFyLCAxMCksIHBhcnNlSW50KG1vbnRoLCAxMCkgLSAxLCBwYXJzZUludChkYXksIDEwKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRlVG9OdW0oZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSAqIDEwXzAwMCArIChkYXRlLmdldE1vbnRoKCkgKyAxKSAqIDEwMCArIGRhdGUuZ2V0RGF0ZSgpO1xufVxuXG5leHBvcnQgY29uc3QgRU5fREFTSDogc3RyaW5nID0gXCLigJNcIjtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHZpbnRhZ2UgeWVhciwgd2hpY2ggaXMgdHdvIHllYXJzIHByaW9yIHRvIHRoZSBjdXJyZW50XG4gKiB5ZWFyLiBUaGlzIGZ1bmN0aW9uIGR1cGxpY2F0ZXMgdGhlIFB5dGhvbiBmdW5jdGlvblxuICogdmlub3RlY2EudXRpbHMuZGVmYXVsdF92aW50YWdlX3llYXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRWaW50YWdlWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhbiBvYmplY3QgaXMgZW1wdHksIGkuZS4gaGFzIG5vIGtleXMuXG4gKiBAcGFyYW0gb2JqIEFuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShvYmo6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHMgd2l0aCB0aGUgZmlyc3QgbGV0dGVyIGNhcGl0YWxpemVkLlxuICogQHBhcmFtIHMgQSBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzLmxlbmd0aCA+IDAgPyBzWzBdLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKSA6IFwiXCI7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBkaXNwbGF5IG5hbWUgdG8gYW4gaHRtbCBpZFxuICogQHBhcmFtIG5hbWUgQSBjb21wb25lbnQgZGlzcGxheSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYW1lVG9JZChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoLyhcXHMpKy9nLCBcIi1cIikudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgbWF4aW11bSBlbGVtZW50IGJ5IG9uZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgdHlwZSBvZiBlbGVtZW50XG4gKiBAcGFyYW0gYXJyIEFuIGFycmF5IG9mIG9iamNlY3RzXG4gKiBAcGFyYW0gYWNjZXNzb3IgQSBmdW5jdGlvbiBmb3IgYWNjZXNzaW5nIGEgbnVtYmVyIHByb3BlcnR5IG9mIHRoZSBvYmplY3RzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXhCeTxUPihhcnI6IFRbXSwgYWNjZXNzb3I6IChlbGVtOiBUKSA9PiBudW1iZXIpOiBUIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgbWF4RWxlbTogVCB8IHVuZGVmaW5lZDtcbiAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5O1xuICAgIGZvciAoY29uc3QgZWxlbSBvZiBhcnIpIHtcbiAgICAgICAgY29uc3QgdmFsID0gYWNjZXNzb3IoZWxlbSk7XG4gICAgICAgIGlmICh2YWwgPiBtYXhWYWwpIHtcbiAgICAgICAgICAgIG1heEVsZW0gPSBlbGVtO1xuICAgICAgICAgICAgbWF4VmFsID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXhFbGVtO1xufVxuXG4vKipcbiAqIFN1bXMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBieSBvbmUgb2YgdGhlIG9iamVjdHMnIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0gYXJyIEFuIGFycmF5IG9mIG9iamVjdHNcbiAqIEBwYXJhbSBhY2Nlc3NvciBBIGZ1bmN0aW9uIGZvciBhY2Nlc3Npbmcgb25lIG9mIHRoZSBvYmplY3RzJyBwcm9wZXJ0aWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdW1CeTxUPihhcnI6IFRbXSwgYWNjZXNzb3I6IChlbGVtOiBUKSA9PiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAoY29uc3QgZWxlbSBvZiBhcnIpIHtcbiAgICAgICAgc3VtICs9IGFjY2Vzc29yKGVsZW0pO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xufVxuXG4vKipcbiAqIENvbXBhcmVzIHR3byBvYmplY3RzIGZvciBkZWVwIGVxdWFsaXR5LlxuICogQHBhcmFtIGEgQW4gb2JqZWN0XG4gKiBAcGFyYW0gYiBBbiBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyZUVxdWFsKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBjb25zdCBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3QgayBvZiBhS2V5cykge1xuICAgICAgICBpZiAoYVtrXSAhPT0gYltrXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5pbnRlcmZhY2UgSVJhbmdlQXJncyB7XG4gICAgc3RhcnQ/OiBudW1iZXI7XG4gICAgc3RvcD86IG51bWJlcjtcbiAgICBzdGVwPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmFibGUgcmFuZ2Ugb2YgbnVtYmVyc29uQ2xpY2suXG4gKiBAcGFyYW0gc3RhcnQgRmlyc3QgbnVtYmVyIG9mIHRoZSByYW5nZVxuICogQHBhcmFtIHN0b3AgRW5kIG9mIHRoZSByYW5nZSAobm9uLWluY2x1c2l2ZSlcbiAqIEBwYXJhbSBzdGVwIEluY3JlbWVudCBvZiB0aGUgcmFuZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiByYW5nZSh7IHN0YXJ0LCBzdG9wLCBzdGVwIH06IElSYW5nZUFyZ3MpOiBJdGVyYWJsZUl0ZXJhdG9yPG51bWJlcj4ge1xuICAgIHN0ZXAgPSBzdGVwIHx8IDE7XG4gICAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICAgIHN0b3AgPSBzdG9wIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgICAgICB5aWVsZCBpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGltYWdlRXhpc3RzKGltYWdlVXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGltYWdlVXJsLCB7bWV0aG9kOiBcIkhFQURcIn0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2Uub2s7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lQW5kVHlwZShuYW1lOiBzdHJpbmcgfCBudWxsLCB3aW5lVHlwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7KG5hbWUgPyBuYW1lICsgXCIgXCIgOiBcIlwiKX0ke3dpbmVUeXBlfWA7XG59XG5cbi8vIFRPRE86IG1vdmUgdG8gdXNlIFJlYWN0IHJvdXRlciBvciBzb21ldGhpbmcgc2ltaWxhclxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0KHVybDogc3RyaW5nKSB7XG4gICAgbG9jYXRpb24uaHJlZiA9IHVybDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZChmdW46ICgpID0+IHZvaWQpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW4pO1xufVxuIiwiaW1wb3J0IHsgQXV0b2NvbXBsZXRlLCBEcm9wZG93biwgU2lkZW5hdiB9IGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCB7IElEaWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxudHlwZSBPbkNoYW5nZSA9IChlOiBzdHJpbmcpID0+IHZvaWQ7XG5cbi8qKiBTZXR1cCBhdXRvY29tcGxldGlvbiB3aXRoIHByb3ZpZGVkIGNvbXBsZXRpb24gb3B0aW9ucy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdXRvY29tcGxldGUoZWxlbTogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbnM6IElEaWN0PHN0cmluZyB8IG51bGw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogT25DaGFuZ2UsIG1pbkxlbmd0aCA9IDEsIGxpbWl0ID0gNSkge1xuICAgIGlmIChlbGVtLmN1cnJlbnQpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgICAgIG5ldyBBdXRvY29tcGxldGUoZWxlbS5jdXJyZW50LCB7XG4gICAgICAgICAgICBkYXRhOiBjb21wbGV0aW9ucyxcbiAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgbWluTGVuZ3RoLFxuXG4gICAgICAgICAgICBvbkF1dG9jb21wbGV0ZTogZnVuY3Rpb24odGhpcywgdGV4dCkgeyAgLy8gdHNsaW50OmRpc2FibGUtbGluZSBvYmplY3QtbGl0ZXJhbC1zaG9ydGhhbmRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSh0ZXh0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGaXggb3ZlcmxhcHB0aW5nIHRleHQgYnVnXG4gICAgICAgIE0udXBkYXRlVGV4dEZpZWxkcygpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVOYXZiYXJUYWIoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbi8qKiBFbmFibGVzIG5hdmJhciBtZW51cy4gU2hvdWxkIGJlIGNhbGxlZCBvbiBldmVyeSBwYWdlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hdmJhcihhY3RpdmVOYXZUYWJJZD86IHN0cmluZykge1xuICAgIGlmIChhY3RpdmVOYXZUYWJJZCkge1xuICAgICAgICBhY3RpdmF0ZU5hdmJhclRhYihhY3RpdmVOYXZUYWJJZCk7XG4gICAgfVxuICAgIGNvbnN0IHNpZGVOYXZFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlbmF2XCIpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBTaWRlbmF2KHNpZGVOYXZFbGVtISk7XG4gICAgY29uc3QgZHJvcGRvd25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi10cmlnZ2VyXCIpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBEcm9wZG93bihkcm9wZG93bkVsZW0hKTtcbn1cblxuLyoqIFNpbXBsaWZpZXMgZGlzcGxheWluZyBvZiB0b2FzdCBtZXNzYWdlcyB0byB1c2VyICovXG5leHBvcnQgZnVuY3Rpb24gdG9hc3QobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgTS50b2FzdCh7XG4gICAgICAgIGNsYXNzZXM6IFwicmVkLWJnXCIsXG4gICAgICAgIGRpc3BsYXlMZW5ndGg6IDEwMDAwLFxuICAgICAgICBodG1sOiBtZXNzYWdlLFxuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==