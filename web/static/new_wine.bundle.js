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
/******/ 		"new_wine": 0
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
/******/ 	deferredModules.push([7,"vendors"]);
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

/***/ "./components/CSRFToken.tsx":
/*!**********************************!*\
  !*** ./components/CSRFToken.tsx ***!
  \**********************************/
/*! exports provided: CSRFToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSRFToken", function() { return CSRFToken; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Cookies */ "./lib/Cookies.ts");


const CSRFToken = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { itemType: "hidden", style: { display: "none" }, name: "csrfmiddlewaretoken", defaultValue: Object(_lib_Cookies__WEBPACK_IMPORTED_MODULE_1__["readCookie"])("csrftoken") }));
};
CSRFToken.displayName = "CSRFToken";


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

/***/ "./components/GrapeInput.tsx":
/*!***********************************!*\
  !*** ./components/GrapeInput.tsx ***!
  \***********************************/
/*! exports provided: GrapeInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrapeInput", function() { return GrapeInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/widgets */ "./lib/widgets.ts");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Grid */ "./components/Grid.tsx");
/* harmony import */ var _MaterialIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MaterialIcon */ "./components/MaterialIcon.tsx");
/* harmony import */ var _NumberInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NumberInput */ "./components/NumberInput.tsx");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextInput */ "./components/TextInput.tsx");







const GrapeInput = ({ id, completions, grape, percent, handleDelete, onChange }) => {
    const inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_1__["autocomplete"])(inputRef, completions, (s) => onChange(id, s, percent));
    }, [inputRef, completions, onChange, id, percent]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { classes: ["grape-block"], s: 12, l: 6 },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_3__["InputField"], { s: 1 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__["FloatingBtn"], { onClick: () => handleDelete(id), classes: ["red-bg"] },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__["MaterialIcon"], { iconName: "remove" }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NumberInput__WEBPACK_IMPORTED_MODULE_5__["NumberInput"], { name: "Percent", s: 3, number: percent, min: 0, max: 100, step: "1", onChange: (n) => onChange(id, grape, n) }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_6__["TextInput"], { name: "Grape", s: 8, className: "autocomplete", value: grape, onChange: (grape) => onChange(id, grape, percent), inputRef: inputRef })));
};
GrapeInput.displayName = "GrapeInput";


/***/ }),

/***/ "./components/GrapesInputs.tsx":
/*!*************************************!*\
  !*** ./components/GrapesInputs.tsx ***!
  \*************************************/
/*! exports provided: wineGrapesToForm, grapeReducer, GrapesInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wineGrapesToForm", function() { return wineGrapesToForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grapeReducer", function() { return grapeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrapesInputs", function() { return GrapesInputs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _GrapeInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GrapeInput */ "./components/GrapeInput.tsx");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Grid */ "./components/Grid.tsx");
/* harmony import */ var _MaterialIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MaterialIcon */ "./components/MaterialIcon.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const wineGrapesToForm = (wineGrapes, wineId) => __awaiter(void 0, void 0, void 0, function* () {
    const wineGrapesForm = {
        wineId,
        grapes: yield Promise.all(wineGrapes.map((wg) => __awaiter(void 0, void 0, void 0, function* () {
            const grape = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_2__["getOrCreateGrape"])({ name: wg.grape }, { name: wg.grape });
            return {
                grapeId: grape.id,
                percent: wg.percent,
            };
        }))),
    };
    return wineGrapesForm;
});
const remainingGrapePct = (grapes) => {
    if (grapes.length > 0) {
        const sum = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["sumBy"])(grapes, (wg) => wg.percent || 0);
        if (sum <= 100) {
            return 100 - sum;
        }
        else {
            new _lib_Logger__WEBPACK_IMPORTED_MODULE_1__["default"](remainingGrapePct.name).logWarning("Total grape percentage is greater than 100%");
            return 0;
        }
    }
    return 100;
};
const grapeReducer = (grapes, action) => {
    var _a, _b;
    switch (action.type) {
        case "addGrape":
            const maxId = (_b = (_a = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["maxBy"])(grapes, (grape) => grape.id)) === null || _a === void 0 ? void 0 : _a.id, (_b !== null && _b !== void 0 ? _b : 0));
            const hasGrapePct = grapes.some((grape) => grape.percent !== null && grape.grape);
            const remPct = remainingGrapePct(grapes);
            const wineId = grapes.length > 0 ? grapes[grapes.length - 1].wineId : 0;
            // Need to create new array to assuage React diffing algo
            return [
                ...grapes, {
                    id: maxId + 1,
                    percent: hasGrapePct ? remPct : null,
                    grape: "",
                    grapeId: 0,
                    wineId,
                }
            ];
        case "deleteGrape":
            return grapes.filter((grape) => grape.id !== action.id);
        case "modifyGrape":
            return grapes.map((grape) => ((grape.id === action.id)
                ? { id: action.id, percent: action.percent, grape: action.grape, grapeId: grape.grapeId, wineId: grape.wineId }
                : grape));
        case "setWineId":
            return grapes.map((grape) => (Object.assign(Object.assign({}, grape), { wineId: action.wineId })));
        default:
            return grapes;
    }
};
const GrapesInputs = ({ grapes, dispatch }) => {
    const [completions, setCompletions] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({});
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        function fetchGrapes() {
            return __awaiter(this, void 0, void 0, function* () {
                const completions = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_2__["getGrapes"])({});
                setCompletions(Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_2__["toDict"])(completions));
            });
        }
        fetchGrapes();
    }, [setCompletions]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Row"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Col"], { s: 12 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Grape composition")),
        grapes.map((grape) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GrapeInput__WEBPACK_IMPORTED_MODULE_5__["GrapeInput"], { key: grape.id, id: grape.id, completions: completions, grape: grape.grape, percent: grape.percent, handleDelete: (id) => dispatch({ type: "deleteGrape", id }), onChange: (id, grape, percent) => dispatch({ type: "modifyGrape", id, grape, percent }) }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["InputField"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_4__["FloatingBtn"], { onClick: () => dispatch({ type: "addGrape" }), classes: ["green-bg"] },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MaterialIcon__WEBPACK_IMPORTED_MODULE_7__["MaterialIcon"], { iconName: "add" })))));
};
GrapesInputs.displayName = "GrapesInputs";


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

/***/ "./front_end/new_wine/NewWineApp.tsx":
/*!*******************************************!*\
  !*** ./front_end/new_wine/NewWineApp.tsx ***!
  \*******************************************/
/*! exports provided: NewWineApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWineApp", function() { return NewWineApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_CSRFToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CSRFToken */ "./components/CSRFToken.tsx");
/* harmony import */ var _components_GrapesInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/GrapesInputs */ "./components/GrapesInputs.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_MaterialIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MaterialIcon */ "./components/MaterialIcon.tsx");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Preloader */ "./components/Preloader.tsx");
/* harmony import */ var _components_PurchaseInputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PurchaseInputs */ "./components/PurchaseInputs.tsx");
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _WineInputs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WineInputs */ "./front_end/new_wine/WineInputs.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












const NewWineApp = (_props) => {
    const [purchaseState, purchaseDispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(_components_PurchaseInputs__WEBPACK_IMPORTED_MODULE_7__["purchaseInputReducer"], Object(_components_PurchaseInputs__WEBPACK_IMPORTED_MODULE_7__["initPurchaseInputData"])());
    const [wineState, wineDispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(_WineInputs__WEBPACK_IMPORTED_MODULE_11__["wineInputReducer"], Object(_WineInputs__WEBPACK_IMPORTED_MODULE_11__["initWineInputData"])());
    const [grapes, grapesDispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(_components_GrapesInputs__WEBPACK_IMPORTED_MODULE_3__["grapeReducer"], []);
    const [isSaving, setIsSaving] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
    const onSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        setIsSaving(true);
        // TODO: check certain forms aren't empty
        const logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_8__["default"](NewWineApp.name);
        try {
            const wineForm = yield Object(_WineInputs__WEBPACK_IMPORTED_MODULE_11__["wineDataToForm"])(wineState, purchaseState.shouldAddToInventory ? (_a = purchaseState.quantity, (_a !== null && _a !== void 0 ? _a : 0)) : 0);
            const wine = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["createWine"])(wineForm, wineState.file);
            yield Promise.all([
                () => __awaiter(void 0, void 0, void 0, function* () {
                    if (grapes.length > 0) {
                        const grapeForm = yield Object(_components_GrapesInputs__WEBPACK_IMPORTED_MODULE_3__["wineGrapesToForm"])(grapes, wine.id);
                        yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["createWineGrapes"])(grapeForm);
                    }
                }),
                () => __awaiter(void 0, void 0, void 0, function* () {
                    const purchaseForm = yield Object(_components_PurchaseInputs__WEBPACK_IMPORTED_MODULE_7__["purchaseDataToForm"])(purchaseState, wine.id);
                    yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["createPurchase"])(purchaseForm);
                })
            ].map((f) => f()));
            Object(_lib_utils__WEBPACK_IMPORTED_MODULE_10__["redirect"])(`/wines/${wine.id}`);
        }
        catch (err) {
            setIsSaving(false);
            logger.logError(`Error creating new wine: ${err.message}`);
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "page-title" }, "Enter new wine information"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { action: "", className: "col s12" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CSRFToken__WEBPACK_IMPORTED_MODULE_2__["CSRFToken"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_4__["Row"], { s: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PurchaseInputs__WEBPACK_IMPORTED_MODULE_7__["PurchaseInputs"], { displayInventoryBtn: true, data: purchaseState, dispatch: purchaseDispatch }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WineInputs__WEBPACK_IMPORTED_MODULE_11__["WineInputs"], { data: wineState, dispatch: wineDispatch })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GrapesInputs__WEBPACK_IMPORTED_MODULE_3__["GrapesInputs"], { grapes: grapes, dispatch: grapesDispatch }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["Btn"], { classes: ["green-bg"], onClick: onSubmit },
                "Confirm",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_5__["MaterialIcon"], { className: "right", iconName: "send" })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["Btn"], { classes: ["red-bg"], onClick: () => Object(_lib_utils__WEBPACK_IMPORTED_MODULE_10__["redirect"])("/") }, "Cancel"),
            isSaving && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_6__["PreloaderCirc"], null))));
};
NewWineApp.displayName = "NewWineApp";


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

/***/ "./front_end/new_wine/new_wine.ts":
/*!****************************************!*\
  !*** ./front_end/new_wine/new_wine.ts ***!
  \****************************************/
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
/* harmony import */ var _NewWineApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewWineApp */ "./front_end/new_wine/NewWineApp.tsx");





Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"])(() => {
    Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_3__["navbar"])("new-wine-nav");
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_NewWineApp__WEBPACK_IMPORTED_MODULE_4__["NewWineApp"]), document.getElementById("new_wine-container"));
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

/***/ 7:
/*!**********************************************!*\
  !*** multi ./front_end/new_wine/new_wine.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carter/git/vinoteca/vinoteca/front_end/new_wine/new_wine.ts */"./front_end/new_wine/new_wine.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25zLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NTUkZUb2tlbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja2JveElucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbG9ySW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZUlucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbGVJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmFwZUlucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyYXBlc0lucHV0cy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdGVyaWFsSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OdW1iZXJJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QcmVsb2FkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZHVjZXJJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QdXJjaGFzZUlucHV0cy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SYXRpbmdJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWdpb25JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWxlY3RJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGVjaWFsQ2hhckJ0bi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGVjaWFsQ2hhcnMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGV4dElucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpdGlBcmVhSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2luZVR5cGVJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRfZW5kL25ld193aW5lL05ld1dpbmVBcHAudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC9uZXdfd2luZS9XaW5lSW5wdXRzLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvbmV3X3dpbmUvbmV3X3dpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL0FwaUhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9saWIvQ29va2llcy50cyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL2xpYi9SZXN0QXBpLnRzIiwid2VicGFjazovLy8uL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9saWIvd2lkZ2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNB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RSxDQUFDO0FBRUQsNERBQTREO0FBQ3JELFNBQVMsTUFBTSxDQUFDLGNBQXVCO0lBQzFDLElBQUksY0FBYyxFQUFFO1FBQ2hCLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2RCxnREFBZ0Q7SUFDaEQsSUFBSSx1REFBTyxDQUFDLFdBQVksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqRSxnREFBZ0Q7SUFDaEQsSUFBSSx3REFBUSxDQUFDLFlBQWEsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRCxzREFBc0Q7QUFDL0MsU0FBUyxLQUFLLENBQUMsT0FBZTtJQUNqQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ0osT0FBTyxFQUFFLFFBQVE7UUFDakIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsSUFBSSxFQUFFLE9BQU87S0FDaEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsImZpbGUiOiJuZXdfd2luZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibmV3X3dpbmVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbNyxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgQ29sIH0gZnJvbSBcIi4vR3JpZFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4vTWF0ZXJpYWxJY29uXCI7XG5cbmludGVyZmFjZSBJRmxvYXRpbmdCdG5Qcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB7XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgICBvbk1vdXNlRG93bj86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKGNsYXNzZXMgfHwgW10pLmpvaW4oXCIgXCIpO1xufVxuXG5leHBvcnQgY29uc3QgRmxvYXRpbmdCdG46IFJlYWN0LkZDPElGbG9hdGluZ0J0blByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21iaW5lQ2xhc3Nlcyhwcm9wcy5jbGFzc2VzKTtcbiAgICBjb25zdCBtb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICAgICAgaWYgKHByb3BzLm9uTW91c2VEb3duKSB7XG4gICAgICAgICAgICBwcm9wcy5vbk1vdXNlRG93bihlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudD4pID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9wcy5vbkNsaWNrKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgYHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4tZmxvYXRpbmcgJHtjbGFzc2VzfWAgfVxuICAgICAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyBtb3VzZURvd24gfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9hPlxuICAgICk7XG59O1xuRmxvYXRpbmdCdG4uZGlzcGxheU5hbWUgPSBcIkZsb2F0aW5nQnRuXCI7XG5GbG9hdGluZ0J0bi5kZWZhdWx0UHJvcHMgPSB7IG9uTW91c2VEb3duOiAoXykgPT4gdW5kZWZpbmVkIH07XG5cbmludGVyZmFjZSBJQnRuUHJvcHMgZXh0ZW5kcyBJQ2hpbGRyZW5Qcm9wLCBJQ2xhc3Nlc1Byb3Age1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBCdG46IFJlYWN0LkZDPElCdG5Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tYmluZUNsYXNzZXMocHJvcHMuY2xhc3Nlcyk7XG4gICAgY29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb3BzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17IGByYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gJHtjbGFzc2VzfWAgfVxuICAgICAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cbkJ0bi5kaXNwbGF5TmFtZSA9IFwiQnRuXCI7XG5cbmludGVyZmFjZSBJQ2FuY2VsT3JDb25maXJtUHJvcHMge1xuICAgIG9uQ29uZmlybUNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIG9uQ2FuY2VsQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBDYW5jZWxPckNvbmZpcm1CdG5zOiBSZWFjdC5GQzxJQ2FuY2VsT3JDb25maXJtUHJvcHM+ID1cbiAgICAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICA8QnRuIGNsYXNzZXM9eyBbXCJncmVlbi1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uQ29uZmlybUNsaWNrIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cInNlbmRcIiBjbGFzc05hbWU9XCJyaWdodFwiIC8+XG4gICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcInJlZC1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uQ2FuY2VsQ2xpY2sgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdG4+XG4gICAgICAgIDwvQ29sPlxuICAgICk7XG59XG5DYW5jZWxPckNvbmZpcm1CdG5zLmRpc3BsYXlOYW1lID0gXCJDYW5jZWxPckNvbmZpcm1CdG5zXCI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlYWRDb29raWUgfSBmcm9tIFwiLi4vbGliL0Nvb2tpZXNcIjtcblxuZXhwb3J0IGNvbnN0IENTUkZUb2tlbjogUmVhY3QuRkMgPSAgKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxpbnB1dCBpdGVtVHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICBzdHlsZT17IHtkaXNwbGF5OiBcIm5vbmVcIn0gfVxuICAgICAgICAgICAgbmFtZT1cImNzcmZtaWRkbGV3YXJldG9rZW5cIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsgcmVhZENvb2tpZShcImNzcmZ0b2tlblwiKSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cbkNTUkZUb2tlbi5kaXNwbGF5TmFtZSA9IFwiQ1NSRlRva2VuXCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBuYW1lVG9JZCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IENvbCwgSUdyaWRQcm9wcyB9IGZyb20gXCIuL0dyaWRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIElHcmlkUHJvcHMge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgZW5hYmxlZDogYm9vbGVhbjtcbiAgICBpc0NoZWNrZWQ6IGJvb2xlYW47XG4gICAgb25DbGljazogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcz4ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgIH07XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpZCA9IG5hbWVUb0lkKHRoaXMucHJvcHMubmFtZSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29sIHsgLi4udGhpcy5wcm9wcyB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXsgaWQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy50ZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17IGlkIH0gbmFtZT17IHRoaXMucHJvcHMubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IHRoaXMucHJvcHMuaXNDaGVja2VkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soZS50YXJnZXQuY2hlY2tlZCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXsgIXRoaXMucHJvcHMuZW5hYmxlZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGV2ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRm9ybVNlbGVjdCB9IGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElDb2xvciB9IGZyb20gXCIuLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgZ2V0Q29sb3JzIH0gZnJvbSBcIi4uL2xpYi9SZXN0QXBpXCI7XG5pbXBvcnQgeyBJT25DaGFuZ2UgfSBmcm9tIFwiLi9JUHJvcHNcIjtcbmltcG9ydCB7IFNlbGVjdElucHV0IH0gZnJvbSBcIi4vU2VsZWN0SW5wdXRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIElPbkNoYW5nZSB7XG4gICAgc2VsZWN0aW9uOiBzdHJpbmc7XG4gICAgZXh0cmFDaG9pY2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VDb2xvcnNTZWxlY3QgPSAobG9nZ2VyOiBMb2dnZXIsIGV4dHJhQ2hvaWNlPzogc3RyaW5nKTogW3N0cmluZ1tdLCBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxTZWxlY3RFbGVtZW50Pl0gPT4ge1xuICAgIGNvbnN0IFtzZWxlY3Rpb25PcHRpb25zLCBzZXRTZWxlY3Rpb25PcHRpb25zXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gICAgY29uc3Qgc2VsZWN0UmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MU2VsZWN0RWxlbWVudD47XG5cbiAgICBjb25zdCBjb25jYXRJZk5vdE51bGw9IChvcHRpb25zOiBzdHJpbmdbXSk6IHN0cmluZ1tdID0+IHtcbiAgICAgICAgaWYgKGV4dHJhQ2hvaWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gW2V4dHJhQ2hvaWNlXS5jb25jYXQob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb2xvcnMoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yczogSUNvbG9yW10gPSBhd2FpdCBnZXRDb2xvcnMoe30pO1xuICAgICAgICAgICAgICAgIHNldFNlbGVjdGlvbk9wdGlvbnMoY29uY2F0SWZOb3ROdWxsKGNvbG9ycy5tYXAoKGNvbG9yKSA9PiBjb2xvci5uYW1lKSkpO1xuICAgICAgICAgICAgICAgIG5ldyBGb3JtU2VsZWN0KHNlbGVjdFJlZi5jdXJyZW50ISk7XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IGNvbG9yc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoQ29sb3JzKCk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBbc2VsZWN0aW9uT3B0aW9ucywgc2VsZWN0UmVmXVxufVxuXG5leHBvcnQgY29uc3QgQ29sb3JJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoQ29sb3JJbnB1dC5uYW1lKTtcblxuICAgIGNvbnN0IFtzZWxlY3Rpb25PcHRpb25zLCBzZWxlY3RSZWZdID0gdXNlQ29sb3JzU2VsZWN0KGxvZ2dlciwgcHJvcHMuZXh0cmFDaG9pY2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNlbGVjdElucHV0IG5hbWU9XCJDb2xvclwiXG4gICAgICAgICAgICBzPXsgNCB9IGw9eyAyIH1cbiAgICAgICAgICAgIHNlbGVjdFJlZj17IHNlbGVjdFJlZiB9XG4gICAgICAgICAgICBvcHRpb25zPXsgc2VsZWN0aW9uT3B0aW9ucyB9XG4gICAgICAgICAgICBvbkNoYW5nZT17ICh2KSA9PiBwcm9wcz8ub25DaGFuZ2UodikgfVxuICAgICAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cbkNvbG9ySW5wdXQuZGlzcGxheU5hbWUgPSBcIkNvbG9ySW5wdXRcIjtcbiIsImltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2VzbS9mb3JtYXRcIjtcbmltcG9ydCB7IERhdGVwaWNrZXIgfSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL0lucHV0XCI7XG5pbXBvcnQgeyBkYXRlVG9OdW0sIG51bVRvRGF0ZSB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgZGF0ZTogbnVtYmVyIHwgbnVsbDtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb25DaGFuZ2U6IChkYXRlOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBEYXRlSW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBkYXRlLCBvbkNoYW5nZSB9KSA9PiB7XG4gICAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZXBpY2tlciA9IG5ldyBEYXRlcGlja2VyKGlucHV0UmVmLmN1cnJlbnQsIHtcbiAgICAgICAgICAgIGF1dG9DbG9zZTogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0RGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIG1heERhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG9iamVjdC1saXRlcmFsLXNob3J0aGFuZFxuICAgICAgICAgICAgb25DbG9zZTogZnVuY3Rpb24odGhpcykge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGRhdGVUb051bShkYXRlcGlja2VyLmRhdGUpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5ZWFyUmFuZ2U6IDE1LFxuICAgICAgICB9KTtcbiAgICB9LCBbaW5wdXRSZWZdKTtcblxuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXRlID8gZm9ybWF0KG51bVRvRGF0ZShkYXRlKSwgXCJNTU0gZGQsIHl5eXlcIikgOiBcIlwiO1xuICAgIGNvbnN0IGlzVmFsdWVTZXQgPSBkYXRlICE9PSBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0IG5hbWU9eyBuYW1lIH1cbiAgICAgICAgICAgIHZhbHVlPXsgZGF0ZVN0cmluZyB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkYXRlcGlja2VyXCJcbiAgICAgICAgICAgIHM9eyA2IH0gbD17IDMgfVxuICAgICAgICAgICAgYWN0aXZlPXsgaXNWYWx1ZVNldCB9XG4gICAgICAgICAgICBpbnB1dFJlZj17IGlucHV0UmVmIH1cbiAgICAgICAgLz5cbiAgICApO1xufTtcbkRhdGVJbnB1dC5kaXNwbGF5TmFtZSA9IFwiRGF0ZUlucHV0XCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBuYW1lVG9JZCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG9uQ2hhbmdlOiAoZmlsZXM6IEZpbGUgfCBudWxsKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRmlsZUlucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtuYW1lLCBvbkNoYW5nZX0pID0+IHtcbiAgICBjb25zdCBpZCA9IG5hbWVUb0lkKG5hbWUpO1xuXG4gICAgLy8gVE9ETzogaGludCBmaWxlIGV4dGVuc2lvbnNcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWZpZWxkIGlucHV0LWZpZWxkIGNvbCBzMTIgbDZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biB5ZWxsb3cgZGFya2VuLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+eyBuYW1lIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsgaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBvbkNoYW5nZShlLnRhcmdldC5maWxlcz8uaXRlbSgwKSA/PyBudWxsKSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLXBhdGgtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmaWxlLXBhdGggdmFsaWRhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuRmlsZUlucHV0LmRpc3BsYXlOYW1lID0gXCJGaWxlSW5wdXRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElEaWN0IH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgYXV0b2NvbXBsZXRlIH0gZnJvbSBcIi4uL2xpYi93aWRnZXRzXCI7XG5pbXBvcnQgeyBGbG9hdGluZ0J0biB9IGZyb20gXCIuL0J1dHRvbnNcIjtcbmltcG9ydCB7IENvbCwgSW5wdXRGaWVsZCB9IGZyb20gXCIuL0dyaWRcIjtcbmltcG9ydCB7IE1hdGVyaWFsSWNvbiB9IGZyb20gXCIuL01hdGVyaWFsSWNvblwiO1xuaW1wb3J0IHsgTnVtYmVySW5wdXQgfSBmcm9tIFwiLi9OdW1iZXJJbnB1dFwiO1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSBcIi4vVGV4dElucHV0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGlkOiBudW1iZXI7XG4gICAgY29tcGxldGlvbnM6IElEaWN0PHN0cmluZyB8IG51bGw+O1xuICAgIGdyYXBlOiBzdHJpbmc7XG4gICAgcGVyY2VudDogbnVtYmVyIHwgbnVsbDtcbiAgICBoYW5kbGVEZWxldGU6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIG9uQ2hhbmdlOiAoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBwZXJjZW50OiBudW1iZXIgfCBudWxsKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgR3JhcGVJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9ICh7aWQsIGNvbXBsZXRpb25zLCBncmFwZSwgcGVyY2VudCwgaGFuZGxlRGVsZXRlLCBvbkNoYW5nZX0pID0+IHtcbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhdXRvY29tcGxldGUoaW5wdXRSZWYsIGNvbXBsZXRpb25zLCAocykgPT4gb25DaGFuZ2UoaWQsIHMsIHBlcmNlbnQpKVxuICAgIH0sIFtpbnB1dFJlZiwgY29tcGxldGlvbnMsIG9uQ2hhbmdlLCBpZCwgcGVyY2VudF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbCBjbGFzc2VzPXsgW1wiZ3JhcGUtYmxvY2tcIl0gfSBzPXsgMTIgfSBsPXsgNiB9PlxuICAgICAgICAgICAgPElucHV0RmllbGQgcz17IDEgfT5cbiAgICAgICAgICAgICAgICA8RmxvYXRpbmdCdG4gb25DbGljaz17ICgpID0+IGhhbmRsZURlbGV0ZShpZCkgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXsgW1wicmVkLWJnXCJdIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJyZW1vdmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICA8L0lucHV0RmllbGQ+XG4gICAgICAgICAgICA8TnVtYmVySW5wdXQgbmFtZT1cIlBlcmNlbnRcIlxuICAgICAgICAgICAgICAgIHM9eyAzIH1cbiAgICAgICAgICAgICAgICBudW1iZXI9eyBwZXJjZW50IH1cbiAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxuICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChuKSA9PiBvbkNoYW5nZShpZCwgZ3JhcGUsIG4pIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJHcmFwZVwiXG4gICAgICAgICAgICAgICAgcz17IDggfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBncmFwZSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZ3JhcGUpID0+IG9uQ2hhbmdlKGlkLCBncmFwZSwgcGVyY2VudCkgfVxuICAgICAgICAgICAgICAgIGlucHV0UmVmPXsgaW5wdXRSZWYgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgKTtcbn1cbkdyYXBlSW5wdXQuZGlzcGxheU5hbWUgPSBcIkdyYXBlSW5wdXRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElXaW5lR3JhcGUsIElXaW5lR3JhcGVzRm9ybSB9IGZyb20gXCIuLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgZ2V0R3JhcGVzLCBnZXRPckNyZWF0ZUdyYXBlLCB0b0RpY3QgfSBmcm9tIFwiLi4vbGliL1Jlc3RBcGlcIjtcbmltcG9ydCB7IElEaWN0LCBtYXhCeSwgc3VtQnkgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBGbG9hdGluZ0J0biB9IGZyb20gXCIuL0J1dHRvbnNcIjtcbmltcG9ydCB7IEdyYXBlSW5wdXQgfSBmcm9tIFwiLi9HcmFwZUlucHV0XCI7XG5pbXBvcnQgeyBDb2wsIElucHV0RmllbGQsIFJvdyB9IGZyb20gXCIuL0dyaWRcIjtcbmltcG9ydCB7IE1hdGVyaWFsSWNvbiB9IGZyb20gXCIuL01hdGVyaWFsSWNvblwiO1xuXG5leHBvcnQgY29uc3Qgd2luZUdyYXBlc1RvRm9ybSA9IGFzeW5jICh3aW5lR3JhcGVzOiBJV2luZUdyYXBlW10sIHdpbmVJZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgd2luZUdyYXBlc0Zvcm06IElXaW5lR3JhcGVzRm9ybSA9IHtcbiAgICAgICAgd2luZUlkLFxuICAgICAgICBncmFwZXM6IGF3YWl0IFByb21pc2UuYWxsKHdpbmVHcmFwZXMubWFwKGFzeW5jICh3ZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ3JhcGUgPSBhd2FpdCBnZXRPckNyZWF0ZUdyYXBlKHtuYW1lOiB3Zy5ncmFwZX0sIHtuYW1lOiB3Zy5ncmFwZX0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBncmFwZUlkOiBncmFwZS5pZCxcbiAgICAgICAgICAgICAgICBwZXJjZW50OiB3Zy5wZXJjZW50LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkpLFxuICAgIH07XG4gICAgcmV0dXJuIHdpbmVHcmFwZXNGb3JtO1xufVxuXG50eXBlIEFjdGlvbiA9XG4gICAgfCB7IHR5cGU6IFwiYWRkR3JhcGVcIiB9XG4gICAgfCB7IHR5cGU6IFwiZGVsZXRlR3JhcGVcIiwgaWQ6IG51bWJlciB9XG4gICAgfCB7IHR5cGU6IFwibW9kaWZ5R3JhcGVcIiwgaWQ6IG51bWJlciwgZ3JhcGU6IHN0cmluZywgcGVyY2VudDogbnVtYmVyIHwgbnVsbCB9XG4gICAgfCB7IHR5cGU6IFwic2V0V2luZUlkXCIsIHdpbmVJZDogbnVtYmVyIH1cblxuY29uc3QgcmVtYWluaW5nR3JhcGVQY3QgPSAoZ3JhcGVzOiBJV2luZUdyYXBlW10pOiBudW1iZXIgPT4ge1xuICAgIGlmIChncmFwZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBzdW0gPSBzdW1CeShncmFwZXMsICh3ZykgPT4gd2cucGVyY2VudCB8fCAwKTtcbiAgICAgICAgaWYgKHN1bSA8PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiAxMDAgLSBzdW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXcgTG9nZ2VyKHJlbWFpbmluZ0dyYXBlUGN0Lm5hbWUpLmxvZ1dhcm5pbmcoXCJUb3RhbCBncmFwZSBwZXJjZW50YWdlIGlzIGdyZWF0ZXIgdGhhbiAxMDAlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDEwMDtcbn1cblxuZXhwb3J0IGNvbnN0IGdyYXBlUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxJV2luZUdyYXBlW10sIEFjdGlvbj4gPSAoZ3JhcGVzLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJhZGRHcmFwZVwiOlxuICAgICAgICAgICAgY29uc3QgbWF4SWQgPSBtYXhCeShncmFwZXMsIChncmFwZSkgPT4gZ3JhcGUuaWQpPy5pZCA/PyAwO1xuICAgICAgICAgICAgY29uc3QgaGFzR3JhcGVQY3QgPSBncmFwZXMuc29tZSgoZ3JhcGUpID0+IGdyYXBlLnBlcmNlbnQgIT09IG51bGwgJiYgZ3JhcGUuZ3JhcGUpO1xuICAgICAgICAgICAgY29uc3QgcmVtUGN0ID0gcmVtYWluaW5nR3JhcGVQY3QoZ3JhcGVzKTtcbiAgICAgICAgICAgIGNvbnN0IHdpbmVJZCA9IGdyYXBlcy5sZW5ndGggPiAwID8gZ3JhcGVzW2dyYXBlcy5sZW5ndGggLSAxXS53aW5lSWQgOiAwO1xuICAgICAgICAgICAgLy8gTmVlZCB0byBjcmVhdGUgbmV3IGFycmF5IHRvIGFzc3VhZ2UgUmVhY3QgZGlmZmluZyBhbGdvXG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIC4uLmdyYXBlcywge1xuICAgICAgICAgICAgICAgIGlkOiBtYXhJZCArIDEsXG4gICAgICAgICAgICAgICAgcGVyY2VudDogaGFzR3JhcGVQY3QgPyByZW1QY3QgOiBudWxsLFxuICAgICAgICAgICAgICAgIGdyYXBlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGdyYXBlSWQ6IDAsXG4gICAgICAgICAgICAgICAgd2luZUlkLFxuICAgICAgICAgICAgfV07XG4gICAgICAgIGNhc2UgXCJkZWxldGVHcmFwZVwiOlxuICAgICAgICAgICAgcmV0dXJuIGdyYXBlcy5maWx0ZXIoKGdyYXBlKSA9PiBncmFwZS5pZCAhPT0gYWN0aW9uLmlkKTtcbiAgICAgICAgY2FzZSBcIm1vZGlmeUdyYXBlXCI6XG4gICAgICAgICAgICByZXR1cm4gZ3JhcGVzLm1hcCgoZ3JhcGUpID0+IChcbiAgICAgICAgICAgICAgICAoZ3JhcGUuaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgICAgICAgICAgICAgPyB7aWQ6IGFjdGlvbi5pZCwgcGVyY2VudDogYWN0aW9uLnBlcmNlbnQsIGdyYXBlOiBhY3Rpb24uZ3JhcGUsIGdyYXBlSWQ6IGdyYXBlLmdyYXBlSWQsIHdpbmVJZDogZ3JhcGUud2luZUlkfVxuICAgICAgICAgICAgICAgICAgICA6IGdyYXBlXG4gICAgICAgICAgICApKTtcbiAgICAgICAgY2FzZSBcInNldFdpbmVJZFwiOlxuICAgICAgICAgICAgcmV0dXJuIGdyYXBlcy5tYXAoKGdyYXBlKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLmdyYXBlLFxuICAgICAgICAgICAgICAgIHdpbmVJZDogYWN0aW9uLndpbmVJZCxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBncmFwZXM7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBncmFwZXM6IElXaW5lR3JhcGVbXTtcbiAgICBkaXNwYXRjaDogUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPjtcbn1cblxuZXhwb3J0IGNvbnN0IEdyYXBlc0lucHV0czogUmVhY3QuRkM8SVByb3BzPiA9ICh7Z3JhcGVzLCBkaXNwYXRjaH0pID0+IHtcbiAgICBjb25zdCBbY29tcGxldGlvbnMsIHNldENvbXBsZXRpb25zXSA9IFJlYWN0LnVzZVN0YXRlPElEaWN0PHN0cmluZyB8IG51bGw+Pih7fSk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEdyYXBlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRpb25zID0gYXdhaXQgZ2V0R3JhcGVzKHt9KTtcbiAgICAgICAgICAgIHNldENvbXBsZXRpb25zKHRvRGljdChjb21wbGV0aW9ucykpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hHcmFwZXMoKTtcbiAgICB9LCBbc2V0Q29tcGxldGlvbnNdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICAgICAgPGg2PkdyYXBlIGNvbXBvc2l0aW9uPC9oNj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgeyBncmFwZXMubWFwKChncmFwZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmFwZUlucHV0IGtleT17IGdyYXBlLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9eyBncmFwZS5pZCB9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25zPXsgY29tcGxldGlvbnMgfVxuICAgICAgICAgICAgICAgICAgICBncmFwZT17IGdyYXBlLmdyYXBlIH1cbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudD17IGdyYXBlLnBlcmNlbnQgfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGU9eyAoaWQpID0+IGRpc3BhdGNoKHt0eXBlOiBcImRlbGV0ZUdyYXBlXCIsIGlkfSkgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChpZCwgZ3JhcGUsIHBlcmNlbnQpID0+IGRpc3BhdGNoKHt0eXBlOiBcIm1vZGlmeUdyYXBlXCIsIGlkLCBncmFwZSwgcGVyY2VudH0pIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSkgfVxuICAgICAgICAgICAgPElucHV0RmllbGQ+XG4gICAgICAgICAgICAgICAgPEZsb2F0aW5nQnRuIG9uQ2xpY2s9eyAoKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJhZGRHcmFwZVwifSkgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXsgW1wiZ3JlZW4tYmdcIl0gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImFkZFwiIC8+XG4gICAgICAgICAgICAgICAgPC9GbG9hdGluZ0J0bj5cbiAgICAgICAgICAgIDwvSW5wdXRGaWVsZD5cbiAgICAgICAgPC9Sb3c+XG4gICAgKTtcbn1cbkdyYXBlc0lucHV0cy5kaXNwbGF5TmFtZSA9IFwiR3JhcGVzSW5wdXRzXCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQ2hpbGRyZW5Qcm9wLCBJQ2xhc3Nlc1Byb3AgfSBmcm9tIFwiLi9JUHJvcHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFByb3BzIHtcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbiAgICB4bD86IG51bWJlcjtcbn1cblxudHlwZSBJQWxsR3JpZFByb3BzID0gSUdyaWRQcm9wcyAmIElDbGFzc2VzUHJvcCAmIElDaGlsZHJlblByb3A7XG5cbmZ1bmN0aW9uIGpvaW5DbGFzc2VzKGdyaWQ6IHN0cmluZ1tdLCBjbGFzc2VzPzogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIGxldCBhbGxDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGdyaWQuZm9yRWFjaCgoZ2MpID0+IHtcbiAgICAgICAgaWYgKGdjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFsbENsYXNzZXMucHVzaChnYyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBhbGxDbGFzc2VzID0gYWxsQ2xhc3Nlcy5jb25jYXQoY2xhc3NlcyB8fCBbXSk7XG4gICAgcmV0dXJuIGFsbENsYXNzZXMuam9pbihcIiBcIik7XG59XG5cbmZ1bmN0aW9uIGdyaWRDbGFzc2VzKHByb3BzOiBJQWxsR3JpZFByb3BzKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHNDbGFzcyA9IHByb3BzLnMgPyBgcyR7cHJvcHMuc31gIDogXCJcIjtcbiAgICBjb25zdCBtQ2xhc3MgPSBwcm9wcy5tID8gYG0ke3Byb3BzLm19YCA6IFwiXCI7XG4gICAgY29uc3QgbENsYXNzID0gcHJvcHMubCA/IGBsJHtwcm9wcy5sfWAgOiBcIlwiO1xuICAgIGNvbnN0IHhsQ2xhc3MgPSBwcm9wcy54bCA/IGB4bCR7cHJvcHMueGx9YCA6IFwiXCI7XG4gICAgcmV0dXJuIFtzQ2xhc3MsIG1DbGFzcywgbENsYXNzLCB4bENsYXNzXTtcbn1cblxuY29uc3QgR3JpZENvbXBvbmVudEZhY3RvcnkgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIGRpc3BsYXlOYW1lOiBzdHJpbmcpOiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50OiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IChwcm9wczogSUFsbEdyaWRQcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBvdGhlckNsYXNzZXMgPSBqb2luQ2xhc3NlcyhncmlkQ2xhc3Nlcyhwcm9wcyksIHByb3BzLmNsYXNzZXMpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgJHtjbGFzc05hbWV9ICR7b3RoZXJDbGFzc2VzfWAgfT5cbiAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG4gICAgY29tcG9uZW50LmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGNvbnN0IFJvdzogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcInJvd1wiLCBcIlJvd1wiKTtcblxuZXhwb3J0IGNvbnN0IENvbDogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcImNvbFwiLCBcIkNvbFwiKTtcblxuZXhwb3J0IGNvbnN0IElucHV0RmllbGQ6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0gR3JpZENvbXBvbmVudEZhY3RvcnkoXCJjb2wgaW5wdXQtZmllbGRcIiwgXCJJbnB1dEZpZWxkXCIpXG4iLCJpbXBvcnQgTSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBuYW1lVG9JZCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi9HcmlkXCI7XG5cbnR5cGUgSUlucHV0VmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXTtcblxuZXhwb3J0IGludGVyZmFjZSBJSW5wdXRQcm9wczxUIGV4dGVuZHMgSUlucHV0VmFsdWU+IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdmFsdWU6IFQ7XG4gICAgZW5hYmxlZDogYm9vbGVhbjtcbiAgICBjbGFzc05hbWU6IHN0cmluZztcbiAgICBvbkNoYW5nZTogKHZhbDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uRm9jdXM6ICgpID0+IHZvaWQ7XG4gICAgb25CbHVyOiAoKSA9PiB2b2lkO1xuICAgIGlucHV0UmVmPzogUmVhY3QuUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICAgIGlucHV0VHlwZT86IHN0cmluZztcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIHN0ZXA/OiBzdHJpbmc7XG4gICAgbWF4PzogbnVtYmVyO1xuICAgIG1pbj86IG51bWJlcjtcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIElucHV0PFUgZXh0ZW5kcyBJSW5wdXRWYWx1ZT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUlucHV0UHJvcHM8VT4+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgb25DaGFuZ2U6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgb25Gb2N1czogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBvbkJsdXI6IChfOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gbmFtZVRvSWQodGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbnB1dEZpZWxkIHM9eyB0aGlzLnByb3BzLnMgfSBtPXsgdGhpcy5wcm9wcy5tIH0gbD17IHRoaXMucHJvcHMubCB9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17IGlkIH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17IGlkIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5jbGFzc05hbWUgfVxuICAgICAgICAgICAgICAgICAgICByZWY9eyB0aGlzLnByb3BzLmlucHV0UmVmIH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17IHRoaXMucHJvcHMuaW5wdXRUeXBlIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyAhdGhpcy5wcm9wcy5lbmFibGVkIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnByb3BzLnZhbHVlIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gdGhpcy5vbkNoYW5nZShlKSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMucHJvcHMub25CbHVyIH1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17IHRoaXMucHJvcHMub25Gb2N1cyB9XG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9eyB0aGlzLnByb3BzLnN0ZXAgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyB0aGlzLnByb3BzLm1pbiB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IHRoaXMucHJvcHMubWF4IH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwiIH0gaHRtbEZvcj17IGlkIH0+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5uYW1lIH1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9JbnB1dEZpZWxkPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBpY29uTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTWF0ZXJpYWxJY29uOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgIDxpIGNsYXNzTmFtZT17IGBtYXRlcmlhbC1pY29ucyAke3Byb3BzLmNsYXNzTmFtZX1gIH0+XG4gICAgICAgICAgICB7IHByb3BzLmljb25OYW1lIH1cbiAgICAgICAgPC9pPlxuICAgICk7XG59O1xuTWF0ZXJpYWxJY29uLmRpc3BsYXlOYW1lID0gXCJNYXRlcmlhbEljb25cIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4vSW5wdXRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIG51bWJlcjogbnVtYmVyIHwgbnVsbDtcbiAgICBvbkNoYW5nZTogKG51bTogbnVtYmVyKSA9PiB2b2lkO1xuICAgIG1heD86IG51bWJlcjtcbiAgICBtaW46IG51bWJlcjtcbiAgICBzdGVwOiBzdHJpbmc7XG4gICAgcz86IG51bWJlcjtcbiAgICBtPzogbnVtYmVyO1xuICAgIGw/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBOdW1iZXJJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGZsb2F0ID0gcGFyc2VGbG9hdCh2YWwpO1xuICAgICAgICBjb25zdCBpbnQgPSBwYXJzZUludCh2YWwsIDEwKTtcbiAgICAgICAgLy8gVGhlIGhpZ2hlc3QgbGV2ZWwgb2YgcHJlY2lzaW9uIHdlIGNhcmUgYWJvdXQgaXMgMS8xMDB0aHMgKGNlbnRzKVxuICAgICAgICBwcm9wcy5vbkNoYW5nZShmbG9hdCAtIDAuMDA1ID4gaW50ID8gZmxvYXQgOiBpbnQpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dCBpbnB1dFR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAgICAgZW5hYmxlZD17IHByb3BzLmVuYWJsZWQgPz8gdHJ1ZSB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ2YWxpZGF0ZVwiXG4gICAgICAgICAgICB2YWx1ZT17IHByb3BzLm51bWJlciB8fCBcIlwiIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuICAgICAgICAgICAgbWF4PXsgcHJvcHMubWF4IH1cbiAgICAgICAgICAgIG1pbj17IHByb3BzLm1pbiB9XG4gICAgICAgICAgICBzdGVwPXsgcHJvcHMuc3RlcCB9XG4gICAgICAgICAgICBzPXsgcHJvcHMucyB9XG4gICAgICAgICAgICBtPXsgcHJvcHMubSB9XG4gICAgICAgICAgICBsPXsgcHJvcHMubCB9XG4gICAgICAgIC8+XG4gICAgKVxufTtcbk51bWJlcklucHV0LmRpc3BsYXlOYW1lID0gXCJOdW1iZXJJbnB1dFwiO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBQcmVsb2FkZXI6IFJlYWN0LkZDPHt9PiA9IChfKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRldGVybWluYXRlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5QcmVsb2FkZXIuZGlzcGxheU5hbWUgPSBcIlByZWxvYWRlclwiO1xuXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyQ2lyYzogUmVhY3QuRkM8e30+ID0gKF8pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWxvYWRlci13cmFwcGVyIGFjdGl2ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWxheWVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+PGRpdiBjbGFzc05hbWU9XCJnYXAtcGF0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblByZWxvYWRlckNpcmMuZGlzcGxheU5hbWUgPSBcIlByZWxvYWRlckNpcmNcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElQcm9kdWNlciB9IGZyb20gXCIuLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgZ2V0UHJvZHVjZXJzLCB0b0RpY3QgfSBmcm9tIFwiLi4vbGliL1Jlc3RBcGlcIjtcbmltcG9ydCB7IGF1dG9jb21wbGV0ZSB9IGZyb20gXCIuLi9saWIvd2lkZ2V0c1wiO1xuaW1wb3J0IHsgSU9uQ2hhbmdlIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tIFwiLi9UZXh0SW5wdXRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIElPbkNoYW5nZSB7XG4gICAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFByb2R1Y2VySW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAoe3ZhbHVlLCBvbkNoYW5nZX0pID0+IHtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKFByb2R1Y2VySW5wdXQubmFtZSk7XG4gICAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9kdWNlcnMoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y2VyczogSVByb2R1Y2VyW10gPSBhd2FpdCBnZXRQcm9kdWNlcnMoe30pO1xuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZShpbnB1dFJlZiwgdG9EaWN0KHByb2R1Y2VycyksIG9uQ2hhbmdlKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihcIkZhaWxlZCB0byBnZXQgcHJvZHVjZXIgYXV0b2NvbXBsZXRlIG9wdGlvbnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaFByb2R1Y2VycygpO1xuICAgIH0sIFtpbnB1dFJlZl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHRJbnB1dCBuYW1lPVwiUHJvZHVjZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgIHM9eyA2IH0gbD17IDMgfVxuICAgICAgICAgICAgaW5wdXRSZWY9eyBpbnB1dFJlZiB9XG4gICAgICAgICAgICB2YWx1ZT17IHZhbHVlIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuICAgICAgICAvPlxuICAgIClcbn07XG5Qcm9kdWNlcklucHV0LmRpc3BsYXlOYW1lID0gXCJQcm9kdWNlcklucHV0XCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyBJUHVyY2hhc2VGb3JtLCBJU3RvcmUgfSBmcm9tIFwiLi4vbGliL1Jlc3RcIjtcbmltcG9ydCB7IGdldE9yQ3JlYXRlU3RvcmUsIGdldFN0b3JlcywgdG9EaWN0IH0gZnJvbSBcIi4uL2xpYi9SZXN0QXBpXCI7XG5pbXBvcnQgeyBkYXRlVG9OdW0sIGRlZmF1bHRWaW50YWdlWWVhciB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IGF1dG9jb21wbGV0ZSB9IGZyb20gXCIuLi9saWIvd2lkZ2V0c1wiO1xuaW1wb3J0IHsgQ2hlY2tib3hJbnB1dCB9IGZyb20gXCIuL0NoZWNrYm94SW5wdXRcIjtcbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gXCIuL0RhdGVJbnB1dFwiO1xuaW1wb3J0IHsgTnVtYmVySW5wdXQgfSBmcm9tIFwiLi9OdW1iZXJJbnB1dFwiO1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSBcIi4vVGV4dElucHV0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVB1cmNoYXNlRGF0YSB7XG4gICAgZGF0ZTogbnVtYmVyIHwgbnVsbDtcbiAgICBxdWFudGl0eTogbnVtYmVyIHwgbnVsbDtcbiAgICBzaG91bGRBZGRUb0ludmVudG9yeTogYm9vbGVhbiB8IG51bGw7XG4gICAgcHJpY2U6IG51bWJlciB8IG51bGw7XG4gICAgdmludGFnZTogbnVtYmVyIHwgbnVsbDtcbiAgICBzdG9yZTogc3RyaW5nO1xuICAgIG1lbW86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRQdXJjaGFzZUlucHV0RGF0YTogKCkgPT4gSVB1cmNoYXNlRGF0YSA9ICgpID0+ICh7XG4gICAgZGF0ZTogZGF0ZVRvTnVtKG5ldyBEYXRlKCkpLFxuICAgIHF1YW50aXR5OiAxLFxuICAgIHNob3VsZEFkZFRvSW52ZW50b3J5OiB0cnVlLFxuICAgIHByaWNlOiAwLjAwLFxuICAgIHZpbnRhZ2U6IGRlZmF1bHRWaW50YWdlWWVhcigpLFxuICAgIHN0b3JlOiBcIlwiLFxuICAgIG1lbW86IFwiXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IHB1cmNoYXNlRGF0YVRvRm9ybSA9IGFzeW5jIChkYXRhOiBJUHVyY2hhc2VEYXRhLCB3aW5lSWQ6IG51bWJlcik6IFByb21pc2U8SVB1cmNoYXNlRm9ybT4gPT4ge1xuICAgIGxldCBzdG9yZSA9IG51bGw7XG4gICAgaWYgKGRhdGEuc3RvcmUpIHtcbiAgICAgICAgc3RvcmUgPSBhd2FpdCBnZXRPckNyZWF0ZVN0b3JlKHtuYW1lOiBkYXRhLnN0b3JlfSwge25hbWU6IGRhdGEuc3RvcmV9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxuICAgICAgICB3aW5lSWQsXG4gICAgICAgIHF1YW50aXR5OiBkYXRhLnF1YW50aXR5LFxuICAgICAgICBzdG9yZUlkOiBzdG9yZT8uaWQgPz8gbnVsbCxcbiAgICAgICAgcHJpY2U6IGRhdGEucHJpY2UsXG4gICAgICAgIHZpbnRhZ2U6IGRhdGEudmludGFnZSxcbiAgICAgICAgbWVtbzogZGF0YS5tZW1vXG4gICAgfTtcbn1cblxudHlwZSBBY3Rpb24gPVxuICAgIHwgeyB0eXBlOiBcInNldERhdGVcIiwgZGF0ZTogbnVtYmVyIH1cbiAgICB8IHsgdHlwZTogXCJzZXRRdWFudGl0eVwiLCBxdWFudGl0eTogbnVtYmVyIH1cbiAgICB8IHsgdHlwZTogXCJzZXRTaG91bGRBZGRUb0ludmVudG9yeVwiLCBzaG91bGRBZGRUb0ludmVudG9yeTogYm9vbGVhbiB9XG4gICAgfCB7IHR5cGU6IFwic2V0UHJpY2VcIiwgcHJpY2U6IG51bWJlciB9XG4gICAgfCB7IHR5cGU6IFwic2V0VmludGFnZVwiLCB2aW50YWdlOiBudW1iZXIgfVxuICAgIHwgeyB0eXBlOiBcInNldFN0b3JlXCIsIHN0b3JlOiBzdHJpbmcgfVxuICAgIHwgeyB0eXBlOiBcInNldE1lbW9cIiwgbWVtbzogc3RyaW5nIH07XG5cbmV4cG9ydCBjb25zdCBwdXJjaGFzZUlucHV0UmVkdWNlcjogUmVhY3QuUmVkdWNlcjxJUHVyY2hhc2VEYXRhLCBBY3Rpb24+ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJzZXREYXRlXCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0ZTogYWN0aW9uLmRhdGUgfTtcbiAgICAgICAgY2FzZSBcInNldFF1YW50aXR5XCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcXVhbnRpdHk6IGFjdGlvbi5xdWFudGl0eSB9O1xuICAgICAgICBjYXNlIFwic2V0U2hvdWxkQWRkVG9JbnZlbnRvcnlcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaG91bGRBZGRUb0ludmVudG9yeTogYWN0aW9uLnNob3VsZEFkZFRvSW52ZW50b3J5IH07XG4gICAgICAgIGNhc2UgXCJzZXRQcmljZVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByaWNlOiBhY3Rpb24ucHJpY2UgfTtcbiAgICAgICAgY2FzZSBcInNldFZpbnRhZ2VcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aW50YWdlOiBhY3Rpb24udmludGFnZSB9O1xuICAgICAgICBjYXNlIFwic2V0U3RvcmVcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdG9yZTogYWN0aW9uLnN0b3JlIH07XG4gICAgICAgIGNhc2UgXCJzZXRNZW1vXCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWVtbzogYWN0aW9uLm1lbW8gfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGRpc3BsYXlJbnZlbnRvcnlCdG46IGJvb2xlYW47XG4gICAgZGF0YTogSVB1cmNoYXNlRGF0YTtcbiAgICBkaXNwYXRjaDogUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPjtcbn1cblxuZXhwb3J0IGNvbnN0IFB1cmNoYXNlSW5wdXRzOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtkaXNwbGF5SW52ZW50b3J5QnRuLCBkYXRhLCBkaXNwYXRjaH0pID0+IHtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKFB1cmNoYXNlSW5wdXRzLm5hbWUpO1xuICAgIGNvbnN0IHN0b3JlSW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gICAgY29uc3Qgb25TdG9yZUNoYW5nZTogKHN0b3JlOiBzdHJpbmcpID0+IHZvaWQgPSAoc3RvcmUpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwic2V0U3RvcmVcIiwgc3RvcmV9KTtcbiAgICB9XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFN0b3JlcygpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmVzOiBJU3RvcmVbXSA9IGF3YWl0IGdldFN0b3Jlcyh7fSk7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlKHN0b3JlSW5wdXRSZWYsIHRvRGljdChzdG9yZXMpLCBvblN0b3JlQ2hhbmdlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHN0b3JlIGF1dG9jb21wbGV0ZSBvcHRpb25zXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hTdG9yZXMoKTtcbiAgICB9LCBbc3RvcmVJbnB1dFJlZl0pO1xuXG4gICAgY29uc3QgW3F1YW50aXR5UywgcXVhbnRpdHlMXSA9IGRpc3BsYXlJbnZlbnRvcnlCdG4gPyBbMywgMl0gOiBbNiwgM107XG4gICAgY29uc3QgaW52ZW50b3J5ID0gZGlzcGxheUludmVudG9yeUJ0blxuICAgICAgICA/IDxDaGVja2JveElucHV0IHRleHQ9XCJBZGQgdG8gSW52ZW50b3J5XCIgZW5hYmxlZFxuICAgICAgICAgICAgbmFtZT1cImFkZC10by1pbnZlbnRvcnlcIlxuICAgICAgICAgICAgaXNDaGVja2VkPXsgZGF0YS5zaG91bGRBZGRUb0ludmVudG9yeSEgfVxuICAgICAgICAgICAgb25DbGljaz17IChjaGVja2VkKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRTaG91bGRBZGRUb0ludmVudG9yeVwiLCBzaG91bGRBZGRUb0ludmVudG9yeTogY2hlY2tlZH0pIH1cbiAgICAgICAgICAgIHM9eyAzIH0gbD17IDEgfVxuICAgICAgICAvPlxuICAgICAgICA6IG51bGw7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxEYXRlSW5wdXQgbmFtZT1cIlB1cmNoYXNlIERhdGVcIlxuICAgICAgICAgICAgICAgIGRhdGU9eyBkYXRhLmRhdGUgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGRhdGUpID0+IGRpc3BhdGNoKHt0eXBlOiBcInNldERhdGVcIiwgZGF0ZTogZGF0ZX0pIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TnVtYmVySW5wdXQgbmFtZT1cIlF1YW50aXR5XCJcbiAgICAgICAgICAgICAgICBudW1iZXI9eyBkYXRhLnF1YW50aXR5IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChxdWFudGl0eSkgPT4gZGlzcGF0Y2goe3R5cGU6IFwic2V0UXVhbnRpdHlcIiwgcXVhbnRpdHl9KSB9XG4gICAgICAgICAgICAgICAgbWluPXsgMCB9XG4gICAgICAgICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgICAgICAgIHM9eyBxdWFudGl0eVMgfSBsPXsgcXVhbnRpdHlMIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IGludmVudG9yeSB9XG4gICAgICAgICAgICA8TnVtYmVySW5wdXQgbmFtZT1cIlByaWNlXCJcbiAgICAgICAgICAgICAgICBudW1iZXI9eyBkYXRhLnByaWNlIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChwcmljZSkgPT4gZGlzcGF0Y2goe3R5cGU6IFwic2V0UHJpY2VcIiwgcHJpY2V9KSB9XG4gICAgICAgICAgICAgICAgbWluPXsgMCB9XG4gICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxuICAgICAgICAgICAgICAgIHM9eyA2IH0gbD17IDMgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxOdW1iZXJJbnB1dCBuYW1lPVwiVmludGFnZVwiXG4gICAgICAgICAgICAgICAgbnVtYmVyPXsgZGF0YS52aW50YWdlIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2aW50YWdlKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRWaW50YWdlXCIsIHZpbnRhZ2V9KSB9XG4gICAgICAgICAgICAgICAgbWluPXsgMTkwMCB9XG4gICAgICAgICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgICAgICAgIG1heD17IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSB9XG4gICAgICAgICAgICAgICAgcz17IDYgfSBsPXsgMyB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRJbnB1dCBuYW1lPVwiU3RvcmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBkYXRhLnN0b3JlIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uU3RvcmVDaGFuZ2UgfVxuICAgICAgICAgICAgICAgIHM9eyA2IH0gbD17IDMgfVxuICAgICAgICAgICAgICAgIGlucHV0UmVmPXsgc3RvcmVJbnB1dFJlZiB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRJbnB1dCBuYW1lPVwiTWVtb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGRhdGEubWVtbyB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAobWVtbykgPT4gZGlzcGF0Y2goe3R5cGU6IFwic2V0TWVtb1wiLCBtZW1vfSkgfVxuICAgICAgICAgICAgICAgIHM9eyA2IH0gbD17IDMgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcblxufVxuUHVyY2hhc2VJbnB1dHMuZGlzcGxheU5hbWUgPSBcIlB1cmNoYXNlSW5wdXRzXCI7XG4iLCJpbXBvcnQgeyBSYW5nZSB9IGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoZWNrYm94SW5wdXQgfSBmcm9tIFwiLi9DaGVja2JveElucHV0XCI7XG5pbXBvcnQgeyBDb2wgfSBmcm9tIFwiLi9HcmlkXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGlzQ2hlY2tlZDogYm9vbGVhbjtcbiAgICBvbklzQ2hlY2tlZENoYW5nZTogKGlzQ2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZDtcbiAgICByYXRpbmc6IG51bWJlcjtcbiAgICBvblJhdGluZ0NoYW5nZTogKHJhdGluZzogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUmF0aW5nSW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAoe2lzQ2hlY2tlZCwgb25Jc0NoZWNrZWRDaGFuZ2UsIHJhdGluZywgb25SYXRpbmdDaGFuZ2V9KSAgPT4ge1xuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuZXcgUmFuZ2UocmVmLmN1cnJlbnQpXG4gICAgfSwgW3JlZl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbCBzPXsgNCB9IGw9eyAyIH0gY2xhc3Nlcz17IFtcInJhbmdlLWZpZWxkXCIgXSB9PlxuICAgICAgICAgICAgPENoZWNrYm94SW5wdXQgbmFtZT1cImhhcy1yYXRpbmdcIlxuICAgICAgICAgICAgICAgIHRleHQ9XCJSYXRpbmdcIlxuICAgICAgICAgICAgICAgIGlzQ2hlY2tlZD17IGlzQ2hlY2tlZCB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IG9uSXNDaGVja2VkQ2hhbmdlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJhdGluZ1wiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyYW5nZS1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBuYW1lPVwicmF0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgcmVmIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9IG1heD17IDEwIH0gc3RlcD17IDEgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHJhdGluZyB9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXsgIWlzQ2hlY2tlZCB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IG9uUmF0aW5nQ2hhbmdlKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCkpIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L0NvbD5cbiAgICApO1xufVxuUmF0aW5nSW5wdXQuZGlzcGxheU5hbWUgPSBcIlJhdGluZ0lucHV0XCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyBJUmVnaW9uIH0gZnJvbSBcIi4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBFbXB0eVJlc3VsdEVycm9yLCBnZXRSZWdpb25zLCB0b0RpY3QgfSBmcm9tIFwiLi4vbGliL1Jlc3RBcGlcIjtcbmltcG9ydCB7IElEaWN0IH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgYXV0b2NvbXBsZXRlIH0gZnJvbSBcIi4uL2xpYi93aWRnZXRzXCI7XG5pbXBvcnQgeyBJT25DaGFuZ2UgfSBmcm9tIFwiLi9JUHJvcHNcIjtcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gXCIuL1RleHRJbnB1dFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSU9uQ2hhbmdlIHtcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIHByb2R1Y2VyVGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFJlZ2lvbklucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHt2YWx1ZSwgcHJvZHVjZXJUZXh0LCBvbkNoYW5nZX0pID0+IHtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKFJlZ2lvbklucHV0Lm5hbWUpO1xuXG4gICAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gICAgLy8gR2V0IGF1dG9jb21wbGV0ZSBvcHRpb25zXG4gICAgY29uc3QgW2F1dG9jb21wbGV0ZU9wdGlvbnMsIHNldEF1dG9jb21wbGV0ZU9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8SURpY3Q8c3RyaW5nIHwgbnVsbD4+KHt9KTtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEF1dG9jb21wbGV0ZU9wdGlvbnMoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2lvbnM6IElSZWdpb25bXSA9IGF3YWl0IGdldFJlZ2lvbnMoe30pO1xuICAgICAgICAgICAgICAgIHNldEF1dG9jb21wbGV0ZU9wdGlvbnModG9EaWN0KHJlZ2lvbnMpKTtcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGUoaW5wdXRSZWYsIGF1dG9jb21wbGV0ZU9wdGlvbnMsIG9uQ2hhbmdlKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihcIkZhaWxlZCB0byBnZXQgcmVnaW9uIGF1dG9jb21wbGV0ZSBvcHRpb25zXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZldGNoQXV0b2NvbXBsZXRlT3B0aW9ucygpO1xuICAgIH0sIFtpbnB1dFJlZiwgc2V0QXV0b2NvbXBsZXRlT3B0aW9uc10pO1xuXG4gICAgY29uc3QgW2VuYWJsZWQsIHNldEVuYWJsZWRdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgICAvLyBUcnkgdG8gZ2V0IHJlZ2lvbiBmcm9tIHByb2R1Y2VyIGlucHV0LiBJZiBmb3VuZCwgbG9jayBhbmQgc2V0IHZhbHVlXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9kdWNlclJlZ2lvbigpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0luZm8oXCJVcGRhdGluZyByZWdpb24gYXV0b2NvbXBsZXRlIG9wdGlvbnNcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnaW9ucyA9IGF3YWl0IGdldFJlZ2lvbnMoe3Byb2R1Y2VyTmFtZTogcHJvZHVjZXJUZXh0fSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZ2lvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHJlZ2lvbnNbMF0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEVuYWJsZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVuYWJsZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIElnbm9yZSBlbXB0eSByZXN1bHQgZXJyb3JzXG4gICAgICAgICAgICAgICAgaWYgKCFFbXB0eVJlc3VsdEVycm9yLmlzSW5zdGFuY2UoZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ1dhcm5pbmcoYEVycm9yIGZldGNoaW5nIHJlZ2lvbnMgYmFzZWQgb24gcHJvZHVjZXIuICR7ZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2R1Y2VyVGV4dCkge1xuICAgICAgICAgICAgZmV0Y2hQcm9kdWNlclJlZ2lvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RW5hYmxlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9kdWNlclRleHQsIHNldEVuYWJsZWRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0SW5wdXQgbmFtZT1cIlJlZ2lvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgcz17IDYgfSBsPXsgMyB9XG4gICAgICAgICAgICBlbmFibGVkPXsgZW5hYmxlZCB9XG4gICAgICAgICAgICB2YWx1ZT17IHZhbHVlIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5SZWdpb25JbnB1dC5kaXNwbGF5TmFtZSA9IFwiUmVnaW9uSW5wdXRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciwgbmFtZVRvSWQgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSBcIi4vR3JpZFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3B0aW9uczogc3RyaW5nW107XG4gICAgc2VsZWN0aW9uOiBzdHJpbmc7XG4gICAgc2VsZWN0VGV4dD86IHN0cmluZztcbiAgICBzZWxlY3RSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MU2VsZWN0RWxlbWVudD47XG4gICAgb25DaGFuZ2U6ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFNlbGVjdElucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaWQgPSBuYW1lVG9JZChwcm9wcy5uYW1lKTtcbiAgICBsZXQgc2VsZWN0VGV4dDogSlNYLkVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgaWYgKHByb3BzLnNlbGVjdFRleHQpIHtcbiAgICAgICAgc2VsZWN0VGV4dCA9IDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIHsgcHJvcHMuc2VsZWN0VGV4dCB9XG4gICAgICAgIDwvb3B0aW9uPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0RmllbGQgcz17IHByb3BzLnMgfSBtPXsgcHJvcHMubSB9IGw9eyBwcm9wcy5sIH0+XG4gICAgICAgICAgICA8c2VsZWN0IGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgIG5hbWU9eyBpZCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gcHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17IHByb3BzLnNlbGVjdGlvbiB8fCBwcm9wcy5zZWxlY3RUZXh0IH1cbiAgICAgICAgICAgICAgICByZWY9eyBwcm9wcy5zZWxlY3RSZWYgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsgc2VsZWN0VGV4dCB9XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsgb3B0aW9uIH0ga2V5PXsgb3B0aW9uIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIob3B0aW9uKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9eyBpZCB9PnsgcHJvcHMubmFtZSB9PC9sYWJlbD5cbiAgICAgICAgPC9JbnB1dEZpZWxkPlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmxvYXRpbmdCdG4gfSBmcm9tIFwiLi9CdXR0b25zXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG9uQ2xpY2s6IChjaGFyOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgY2hhcjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgU3BlY2lhbENoYXJCdG46IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gW1wiYnRuLXNtYWxsXCIsIFwiY2VudGVyXCIsIFwic3BlYy1jaGFyLWJ0blwiXTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RmxvYXRpbmdCdG4gY2xhc3Nlcz17IGNsYXNzZXMgfVxuICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG51bGwgfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyAoKSA9PiBwcm9wcy5vbkNsaWNrKHByb3BzLmNoYXIpIH1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyBwcm9wcy5jaGFyIH1cbiAgICAgICAgPC9GbG9hdGluZ0J0bj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZsb2F0aW5nQnRuIH0gZnJvbSBcIi4vQnV0dG9uc1wiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4vR3JpZFwiO1xuaW1wb3J0IHsgU3BlY2lhbENoYXJCdG4gfSBmcm9tIFwiLi9TcGVjaWFsQ2hhckJ0blwiO1xuXG5lbnVtIENhc2Uge1xuICAgIFVwcGVyLFxuICAgIExvd2VyLFxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBvbkNsaWNrOiAoY2hhcjogc3RyaW5nKSA9PiB2b2lkO1xuICAgIGNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgICBkaXNwbGF5OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICBjaGFyczogc3RyaW5nW107XG4gICAgY3VycmVudENhc2U6IENhc2U7XG59XG5cbmV4cG9ydCBjbGFzcyBTcGVjaWFsQ2hhcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcbiAgICBwdWJsaWMgc3RhdGljIGluc2VydENoYXJBdCh2YWw6IHN0cmluZywgY2hhcjogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpc05hTihwb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwgKyBjaGFyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWwuc3Vic3RyKDAsIHBvc2l0aW9uKSArIGNoYXIgKyB2YWwuc3Vic3RyKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYXJzOiBbXG4gICAgICAgICAgICAgICAgXCLDoFwiLCBcIsOhXCIsIFwiw6JcIiwgXCLDo1wiLCBcIsOmXCIsIFwixI1cIiwgXCLDp1wiLCBcIsOoXCIsIFwiw6lcIiwgXCLDqlwiLCBcIsOrXCIsIFwiw61cIiwgXCLDrlwiLFxuICAgICAgICAgICAgICAgIFwiw69cIiwgXCLDsVwiLCBcIsOzXCIsIFwiw7RcIiwgXCLDtVwiLCBcIsWTXCIsIFwixaFcIiwgXCLDuVwiLCBcIsO6XCIsIFwiw7tcIiwgXCLDvFwiLCBcIsW+XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY3VycmVudENhc2U6IENhc2UuTG93ZXIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFtcInNwZWNpYWwtY2hhcnNcIl07XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc3BsYXkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc2VzPXsgY2xhc3Nlcy5jb25jYXQodGhpcy5wcm9wcy5jbGFzc2VzID8/IFtdKSB9PlxuICAgICAgICAgICAgICAgICAgICB7LyogU2hpZnQgYnV0dG9uICovfVxuICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdCdG4gY2xhc3Nlcz17IFtcImNlbnRlclwiLCBcImdyZWVuLWJnXCIsIFwic2hpZnQtYnRuXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsgdGhpcy5oYW5kbGVTaGlmdC5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmN1cnJlbnRDYXNlID09PSBDYXNlLkxvd2VyID8gXCLihpFcIiA6IFwi4oaTXCIgfVxuICAgICAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nQnRuPlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuY2hhcnMubWFwKChjaGFyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjaWFsQ2hhckJ0biBjaGFyPXsgY2hhciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGNoYXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGMpID0+IHRoaXMucHJvcHMub25DbGljayhjKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZVNoaWZ0KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmN1cnJlbnRDYXNlID09PSBDYXNlLkxvd2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnM6IHN0YXRlLmNoYXJzLm1hcCgoY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhc2U6IENhc2UuVXBwZXIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hhcnM6IHN0YXRlLmNoYXJzLm1hcCgoY2hhcikgPT4gY2hhci50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2FzZTogQ2FzZS5Mb3dlcixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9JbnB1dFwiO1xuaW1wb3J0IHsgU3BlY2lhbENoYXJzIH0gZnJvbSBcIi4vU3BlY2lhbENoYXJzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Gb2N1cz86ICgpID0+IHZvaWQ7XG4gICAgb25CbHVyPzogKCkgPT4gdm9pZDtcbiAgICBjbGFzc05hbWU6IHN0cmluZztcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbiAgICBpbnB1dFJlZj86IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG59XG5cbmV4cG9ydCBjb25zdCBUZXh0SW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbdGltZXN0YW1wLCBfXSA9IFJlYWN0LnVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGlucHV0UmVmID0gcHJvcHMuaW5wdXRSZWYgPz8gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcblxuICAgIGNvbnN0IG9uU3BlY2lhbENoYXJDbGljayA9IChjaGFyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaW5wdXRSZWYuY3VycmVudD8uc2VsZWN0aW9uU3RhcnQgPz8gTmFOO1xuICAgICAgICBwcm9wcy5vbkNoYW5nZShTcGVjaWFsQ2hhcnMuaW5zZXJ0Q2hhckF0KHByb3BzLnZhbHVlLCBjaGFyLCBwb3NpdGlvbikpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5wdXRSZWYuY3VycmVudC5zZXRTZWxlY3Rpb25SYW5nZShwb3NpdGlvbiArIDEsIHBvc2l0aW9uICsgMSksIDEwKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChub3cgLSB0aW1lc3RhbXAgPiAxMDApIHtcbiAgICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9wcy5vbkJsdXI/LigpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UodmFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkZvY3VzID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICAgICAgcHJvcHMub25Gb2N1cz8uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxJbnB1dCBpbnB1dFR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwcm9wcy52YWx1ZSB9XG4gICAgICAgICAgICAgICAgZW5hYmxlZD17IHByb3BzLmVuYWJsZWQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbCkgPT4gb25DaGFuZ2UodmFsKSB9XG4gICAgICAgICAgICAgICAgb25CbHVyPXsgb25CbHVyIH1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsgb25Gb2N1cyB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgcHJvcHMuY2xhc3NOYW1lIH1cbiAgICAgICAgICAgICAgICBzPXsgcHJvcHMucyB9IG09eyBwcm9wcy5tIH0gbD17IHByb3BzLmwgfVxuICAgICAgICAgICAgICAgIGlucHV0UmVmPXsgaW5wdXRSZWYgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTcGVjaWFsQ2hhcnNcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXsgW1wiaW5saW5lLWJsb2NrXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGMpID0+IG9uU3BlY2lhbENoYXJDbGljayhjKSB9XG4gICAgICAgICAgICAgICAgZGlzcGxheT17IGlzQWN0aXZlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5UZXh0SW5wdXQuZGlzcGxheU5hbWUgPSBcIlRleHRJbnB1dFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vbGliL0xvZ2dlclwiO1xuaW1wb3J0IHsgSVZpdGlBcmVhIH0gZnJvbSBcIi4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBnZXRWaXRpQXJlYXMsIHRvRGljdCB9IGZyb20gXCIuLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgYXV0b2NvbXBsZXRlIH0gZnJvbSBcIi4uL2xpYi93aWRnZXRzXCI7XG5pbXBvcnQgeyBJT25DaGFuZ2UgfSBmcm9tIFwiLi9JUHJvcHNcIjtcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gXCIuL1RleHRJbnB1dFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSU9uQ2hhbmdlIHtcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIHJlZ2lvblRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBWaXRpQXJlYUlucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHt2YWx1ZSwgcmVnaW9uVGV4dCwgb25DaGFuZ2V9KSA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihWaXRpQXJlYUlucHV0Lm5hbWUpO1xuICAgIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVml0aUFyZWFzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aXRpQXJlYXM6IElWaXRpQXJlYVtdID0gYXdhaXQgZ2V0Vml0aUFyZWFzKHtyZWdpb25OYW1lOiByZWdpb25UZXh0fSk7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlKGlucHV0UmVmLCB0b0RpY3Qodml0aUFyZWFzKSwgb25DaGFuZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihcIkZhaWxlZCB0byBnZXQgdml0aSBhcmVhIGF1dG9jb21wbGV0ZSBvcHRpb25zXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hWaXRpQXJlYXMoKTtcbiAgICB9LCBbaW5wdXRSZWYsIHJlZ2lvblRleHRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0SW5wdXQgbmFtZT1cIlZpdGkgQXJlYVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyBpbnB1dFJlZiB9XG4gICAgICAgICAgICBzPXsgOCB9IGw9eyA0IH1cbiAgICAgICAgICAgIHZhbHVlPXsgdmFsdWUgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblZpdGlBcmVhSW5wdXQuZGlzcGxheU5hbWUgPSBcIlZpdGlBcmVhSW5wdXRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElXaW5lVHlwZSB9IGZyb20gXCIuLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgZ2V0V2luZVR5cGVzLCB0b0RpY3QgfSBmcm9tIFwiLi4vbGliL1Jlc3RBcGlcIjtcbmltcG9ydCB7IGF1dG9jb21wbGV0ZSB9IGZyb20gXCIuLi9saWIvd2lkZ2V0c1wiO1xuaW1wb3J0IHsgSU9uQ2hhbmdlIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tIFwiLi9UZXh0SW5wdXRcIjtcblxuaW50ZXJmYWNlIElXaW5lVHlwZUlucHV0UHJvcHMgZXh0ZW5kcyBJT25DaGFuZ2Uge1xuICAgIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBXaW5lVHlwZUlucHV0OiBSZWFjdC5GQzxJV2luZVR5cGVJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoV2luZVR5cGVzKCkge1xuICAgICAgICAgICAgY29uc3Qgd2luZVR5cGVzOiBJV2luZVR5cGVbXSA9IGF3YWl0IGdldFdpbmVUeXBlcyh7fSk7XG4gICAgICAgICAgICBhdXRvY29tcGxldGUoaW5wdXRSZWYsIHRvRGljdCh3aW5lVHlwZXMpLCBwcm9wcy5vbkNoYW5nZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hXaW5lVHlwZXMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJXaW5lIFR5cGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgIHM9eyA4IH0gbD17IDQgfVxuICAgICAgICAgICAgdmFsdWU9eyBwcm9wcy52YWx1ZSB9XG4gICAgICAgICAgICBpbnB1dFJlZj17IGlucHV0UmVmIH1cbiAgICAgICAgICAgIG9uRm9jdXM9eyBwcm9wcy5vbkZvY3VzIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgcHJvcHMub25DaGFuZ2UgfVxuICAgICAgICAgICAgb25CbHVyPXsgcHJvcHMub25CbHVyIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuV2luZVR5cGVJbnB1dC5kaXNwbGF5TmFtZSA9IFwiV2luZVR5cGVJbnB1dFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnRuIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uc1wiO1xuaW1wb3J0IHsgQ1NSRlRva2VuIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ1NSRlRva2VuXCI7XG5pbXBvcnQgeyBncmFwZVJlZHVjZXIsIEdyYXBlc0lucHV0cywgd2luZUdyYXBlc1RvRm9ybSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyYXBlc0lucHV0c1wiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWF0ZXJpYWxJY29uXCI7XG5pbXBvcnQgeyBQcmVsb2FkZXJDaXJjIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJlbG9hZGVyXCI7XG5pbXBvcnQgeyBpbml0UHVyY2hhc2VJbnB1dERhdGEsIHB1cmNoYXNlRGF0YVRvRm9ybSwgcHVyY2hhc2VJbnB1dFJlZHVjZXIsIFB1cmNoYXNlSW5wdXRzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHVyY2hhc2VJbnB1dHNcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uLy4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVB1cmNoYXNlLCBjcmVhdGVXaW5lLCBjcmVhdGVXaW5lR3JhcGVzIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0QXBpXCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IGluaXRXaW5lSW5wdXREYXRhLCB3aW5lRGF0YVRvRm9ybSwgd2luZUlucHV0UmVkdWNlciwgV2luZUlucHV0cyB9IGZyb20gXCIuL1dpbmVJbnB1dHNcIjtcblxuZXhwb3J0IGNvbnN0IE5ld1dpbmVBcHA6IFJlYWN0LkZDPHt9PiA9IChfcHJvcHMpID0+IHtcbiAgICBjb25zdCBbcHVyY2hhc2VTdGF0ZSwgcHVyY2hhc2VEaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHB1cmNoYXNlSW5wdXRSZWR1Y2VyLCBpbml0UHVyY2hhc2VJbnB1dERhdGEoKSk7XG4gICAgY29uc3QgW3dpbmVTdGF0ZSwgd2luZURpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIod2luZUlucHV0UmVkdWNlciwgaW5pdFdpbmVJbnB1dERhdGEoKSk7XG4gICAgY29uc3QgW2dyYXBlcywgZ3JhcGVzRGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihncmFwZVJlZHVjZXIsIFtdKTtcbiAgICBjb25zdCBbaXNTYXZpbmcsIHNldElzU2F2aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRJc1NhdmluZyh0cnVlKTtcbiAgICAgICAgLy8gVE9ETzogY2hlY2sgY2VydGFpbiBmb3JtcyBhcmVuJ3QgZW1wdHlcbiAgICAgICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihOZXdXaW5lQXBwLm5hbWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2luZUZvcm0gPSBhd2FpdCB3aW5lRGF0YVRvRm9ybSh3aW5lU3RhdGUsIHB1cmNoYXNlU3RhdGUuc2hvdWxkQWRkVG9JbnZlbnRvcnkgPyBwdXJjaGFzZVN0YXRlLnF1YW50aXR5ID8/IDAgOiAwKTtcbiAgICAgICAgICAgIGNvbnN0IHdpbmUgPSBhd2FpdCBjcmVhdGVXaW5lKHdpbmVGb3JtLCB3aW5lU3RhdGUuZmlsZSk7XG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JhcGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyYXBlRm9ybSA9IGF3YWl0IHdpbmVHcmFwZXNUb0Zvcm0oZ3JhcGVzLCB3aW5lLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZVdpbmVHcmFwZXMoZ3JhcGVGb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwdXJjaGFzZUZvcm0gPSBhd2FpdCBwdXJjaGFzZURhdGFUb0Zvcm0ocHVyY2hhc2VTdGF0ZSwgd2luZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZVB1cmNoYXNlKHB1cmNoYXNlRm9ybSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXS5tYXAoKGYpID0+IGYoKSkpO1xuICAgICAgICAgICAgcmVkaXJlY3QoYC93aW5lcy8ke3dpbmUuaWR9YCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2V0SXNTYXZpbmcoZmFsc2UpO1xuICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKGBFcnJvciBjcmVhdGluZyBuZXcgd2luZTogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPkVudGVyIG5ldyB3aW5lIGluZm9ybWF0aW9uPC9oMz5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICA8Q1NSRlRva2VuIC8+XG4gICAgICAgICAgICAgICAgPFJvdyBzPXsgMTIgfT5cbiAgICAgICAgICAgICAgICAgICAgPFB1cmNoYXNlSW5wdXRzIGRpc3BsYXlJbnZlbnRvcnlCdG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9eyBwdXJjaGFzZVN0YXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoPXsgcHVyY2hhc2VEaXNwYXRjaCB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxXaW5lSW5wdXRzIGRhdGE9eyB3aW5lU3RhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g9eyB3aW5lRGlzcGF0Y2ggfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDxHcmFwZXNJbnB1dHMgZ3JhcGVzPXsgZ3JhcGVzIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g9eyBncmFwZXNEaXNwYXRjaCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnRuIGNsYXNzZXM9eyBbXCJncmVlbi1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBvblN1Ym1pdCB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbEljb24gY2xhc3NOYW1lPVwicmlnaHRcIiBpY29uTmFtZT1cInNlbmRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQnRuPlxuICAgICAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcInJlZC1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiByZWRpcmVjdChcIi9cIikgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9CdG4+XG4gICAgICAgICAgICAgICAgeyBpc1NhdmluZyAmJiA8UHJlbG9hZGVyQ2lyYyAvPiB9XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5OZXdXaW5lQXBwLmRpc3BsYXlOYW1lID0gXCJOZXdXaW5lQXBwXCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb2xvcklucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29sb3JJbnB1dFwiO1xuaW1wb3J0IHsgRmlsZUlucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRmlsZUlucHV0XCI7XG5pbXBvcnQgeyBQcm9kdWNlcklucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZHVjZXJJbnB1dFwiO1xuaW1wb3J0IHsgUmF0aW5nSW5wdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SYXRpbmdJbnB1dFwiO1xuaW1wb3J0IHsgUmVnaW9uSW5wdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SZWdpb25JbnB1dFwiO1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGV4dElucHV0XCI7XG5pbXBvcnQgeyBWaXRpQXJlYUlucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVml0aUFyZWFJbnB1dFwiO1xuaW1wb3J0IHsgV2luZVR5cGVJbnB1dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dpbmVUeXBlSW5wdXRcIjtcbmltcG9ydCB7IElDb2xvciwgSVByb2R1Y2VyLCBJVml0aUFyZWEsIElXaW5lRm9ybSwgSVdpbmVUeXBlIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBnZXRDb2xvciwgZ2V0T3JDcmVhdGVXaW5lVHlwZSwgZ2V0T3JDcmVhdGVQcm9kdWNlciwgZ2V0T3JDcmVhdGVWaXRpQXJlYSwgZ2V0T3JDcmVhdGVSZWdpb24gfSBmcm9tIFwiLi4vLi4vbGliL1Jlc3RBcGlcIjtcblxuLy8gVE9ETzogaGFuZGxlIGZpbGVcbmV4cG9ydCBpbnRlcmZhY2UgSVdpbmVEYXRhIHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIHdpbmVUeXBlOiBzdHJpbmc7XG4gICAgcHJvZHVjZXI6IHN0cmluZztcbiAgICByZWdpb246IHN0cmluZztcbiAgICBpc1JhdGluZ0VuYWJsZWQ6IGJvb2xlYW47XG4gICAgcmF0aW5nOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHdoeTogc3RyaW5nO1xuICAgIHZpdGlBcmVhOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBub3Rlczogc3RyaW5nO1xuICAgIGZpbGU6IEZpbGUgfCBudWxsLFxufVxuXG5leHBvcnQgY29uc3QgaW5pdFdpbmVJbnB1dERhdGEgPSAoKTogSVdpbmVEYXRhID0+ICh7XG4gICAgY29sb3I6IFwiXCIsXG4gICAgd2luZVR5cGU6IFwiXCIsXG4gICAgcHJvZHVjZXI6IFwiXCIsXG4gICAgcmVnaW9uOiBcIlwiLFxuICAgIGlzUmF0aW5nRW5hYmxlZDogZmFsc2UsXG4gICAgcmF0aW5nOiA1LFxuICAgIG5hbWU6IFwiXCIsXG4gICAgd2h5OiBcIlwiLFxuICAgIHZpdGlBcmVhOiBcIlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIG5vdGVzOiBcIlwiLFxuICAgIGZpbGU6IG51bGwsXG59KTtcblxuY29uc3QgZ2V0T3JDcmVhdGVWaXRpQXJlYUZvclJlZ2lvbiA9IGFzeW5jIChkYXRhOiBJV2luZURhdGEsIHJlZ2lvbklkOiBudW1iZXIpID0+IHtcbiAgICBpZiAoZGF0YS52aXRpQXJlYSkge1xuICAgICAgICByZXR1cm4gZ2V0T3JDcmVhdGVWaXRpQXJlYSh7bmFtZTogZGF0YS52aXRpQXJlYX0sIHtuYW1lOiBkYXRhLnZpdGlBcmVhLCByZWdpb25JZH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgZ2V0UHJvZHVjZXJBbmRWaXRpQXJlYSA9IGFzeW5jIChkYXRhOiBJV2luZURhdGEpID0+IHtcbiAgICBjb25zdCByZWdpb24gPSBhd2FpdCBnZXRPckNyZWF0ZVJlZ2lvbih7bmFtZTogZGF0YS5yZWdpb259LCB7bmFtZTogZGF0YS5yZWdpb259KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGw8SVByb2R1Y2VyLCBJVml0aUFyZWEgfCBudWxsPihbXG4gICAgICAgIGdldE9yQ3JlYXRlUHJvZHVjZXIoe25hbWU6IGRhdGEucHJvZHVjZXJ9LCB7bmFtZTogZGF0YS5wcm9kdWNlciwgcmVnaW9uSWQ6IHJlZ2lvbi5pZH0pLFxuICAgICAgICBnZXRPckNyZWF0ZVZpdGlBcmVhRm9yUmVnaW9uKGRhdGEsIHJlZ2lvbi5pZCksXG4gICAgXSk7XG59XG5cbmV4cG9ydCBjb25zdCB3aW5lRGF0YVRvRm9ybSA9IGFzeW5jIChkYXRhOiBJV2luZURhdGEsIGludmVudG9yeTogbnVtYmVyKTogUHJvbWlzZTxJV2luZUZvcm0+ID0+IHtcbiAgICBjb25zdCBbY29sb3IsIHdpbmVUeXBlLCBbcHJvZHVjZXIsIHZpdGlBcmVhXV0gPSBhd2FpdCBQcm9taXNlLmFsbDxJQ29sb3IsIElXaW5lVHlwZSwgW0lQcm9kdWNlciwgSVZpdGlBcmVhIHwgbnVsbF0+KFtcbiAgICAgICAgZ2V0Q29sb3Ioe25hbWU6IGRhdGEuY29sb3J9KSxcbiAgICAgICAgZ2V0T3JDcmVhdGVXaW5lVHlwZSh7bmFtZTogZGF0YS53aW5lVHlwZX0sIHtuYW1lOiBkYXRhLndpbmVUeXBlfSksXG4gICAgICAgIGdldFByb2R1Y2VyQW5kVml0aUFyZWEoZGF0YSksXG4gICAgXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29sb3JJZDogY29sb3IuaWQsXG4gICAgICAgIHdpbmVUeXBlSWQ6IHdpbmVUeXBlLmlkLFxuICAgICAgICBwcm9kdWNlcklkOiBwcm9kdWNlci5pZCxcbiAgICAgICAgdml0aUFyZWFJZDogdml0aUFyZWE/LmlkID8/IG51bGwsXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSB8fCBudWxsLFxuICAgICAgICB3aHk6IGRhdGEud2h5IHx8IG51bGwsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXG4gICAgICAgIHJhdGluZzogZGF0YS5pc1JhdGluZ0VuYWJsZWQgPyBkYXRhLnJhdGluZyA6IG51bGwsXG4gICAgICAgIGludmVudG9yeTogaW52ZW50b3J5LFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBudWxsLFxuICAgIH07XG59XG5cbnR5cGUgQWN0aW9uID1cbiAgICB8IHt0eXBlOiBcInNldENvbG9yXCIsIGNvbG9yOiBzdHJpbmd9XG4gICAgfCB7dHlwZTogXCJzZXRXaW5lVHlwZVwiLCB3aW5lVHlwZTogc3RyaW5nfVxuICAgIHwge3R5cGU6IFwic2V0UHJvZHVjZXJcIiwgcHJvZHVjZXI6IHN0cmluZ31cbiAgICB8IHt0eXBlOiBcInNldFJlZ2lvblwiLCByZWdpb246IHN0cmluZ31cbiAgICB8IHt0eXBlOiBcInNldElzUmF0aW5nRW5hYmxlZFwiLCBpc1JhdGluZ0VuYWJsZWQ6IGJvb2xlYW59XG4gICAgfCB7dHlwZTogXCJzZXRSYXRpbmdcIiwgcmF0aW5nOiBudW1iZXJ9XG4gICAgfCB7dHlwZTogXCJzZXROYW1lXCIsIG5hbWU6IHN0cmluZ31cbiAgICB8IHt0eXBlOiBcInNldFdoeVwiLCB3aHk6IHN0cmluZ31cbiAgICB8IHt0eXBlOiBcInNldFZpdGlBcmVhXCIsIHZpdGlBcmVhOiBzdHJpbmd9XG4gICAgfCB7dHlwZTogXCJzZXREZXNjcmlwdGlvblwiLCBkZXNjcmlwdGlvbjogc3RyaW5nfVxuICAgIHwge3R5cGU6IFwic2V0Tm90ZXNcIiwgbm90ZXM6IHN0cmluZ31cbiAgICB8IHt0eXBlOiBcInNldEZpbGVcIiwgZmlsZTogRmlsZSB8IG51bGx9O1xuXG5leHBvcnQgY29uc3Qgd2luZUlucHV0UmVkdWNlcjogUmVhY3QuUmVkdWNlcjxJV2luZURhdGEsIEFjdGlvbj4gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInNldENvbG9yXCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY29sb3I6IGFjdGlvbi5jb2xvciB9O1xuICAgICAgICBjYXNlIFwic2V0V2luZVR5cGVcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB3aW5lVHlwZTogYWN0aW9uLndpbmVUeXBlIH07XG4gICAgICAgIGNhc2UgXCJzZXRQcm9kdWNlclwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y2VyOiBhY3Rpb24ucHJvZHVjZXIgfTtcbiAgICAgICAgY2FzZSBcInNldFJlZ2lvblwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlZ2lvbjogYWN0aW9uLnJlZ2lvbiB9O1xuICAgICAgICBjYXNlIFwic2V0SXNSYXRpbmdFbmFibGVkXCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNSYXRpbmdFbmFibGVkOiBhY3Rpb24uaXNSYXRpbmdFbmFibGVkIH07XG4gICAgICAgIGNhc2UgXCJzZXRSYXRpbmdcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByYXRpbmc6IGFjdGlvbi5yYXRpbmcgfTtcbiAgICAgICAgY2FzZSBcInNldE5hbWVcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuYW1lOiBhY3Rpb24ubmFtZSB9O1xuICAgICAgICBjYXNlIFwic2V0V2h5XCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgd2h5OiBhY3Rpb24ud2h5IH07XG4gICAgICAgIGNhc2UgXCJzZXRWaXRpQXJlYVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZpdGlBcmVhOiBhY3Rpb24udml0aUFyZWEgfTtcbiAgICAgICAgY2FzZSBcInNldERlc2NyaXB0aW9uXCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGVzY3JpcHRpb246IGFjdGlvbi5kZXNjcmlwdGlvbiB9O1xuICAgICAgICBjYXNlIFwic2V0Tm90ZXNcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBub3RlczogYWN0aW9uLm5vdGVzIH07XG4gICAgICAgIGNhc2UgXCJzZXRGaWxlXCI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZmlsZTogYWN0aW9uLmZpbGUgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgZGF0YTogSVdpbmVEYXRhLFxuICAgIGRpc3BhdGNoOiBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+O1xufVxuXG5leHBvcnQgY29uc3QgV2luZUlucHV0czogUmVhY3QuRkM8SVByb3BzPiA9ICh7ZGF0YSwgZGlzcGF0Y2h9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDb2xvcklucHV0IHNlbGVjdGlvbj17IGRhdGEuY29sb3IgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGNvbG9yKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRDb2xvclwiLCBjb2xvcn0pIH1cbiAgICAgICAgICAgICAgICBleHRyYUNob2ljZT1cIlNlbGVjdCBhIGNvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8V2luZVR5cGVJbnB1dCB2YWx1ZT17IGRhdGEud2luZVR5cGUgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHdpbmVUeXBlKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRXaW5lVHlwZVwiLCB3aW5lVHlwZX0pIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJOYW1lXCIgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBzPXsgMTIgfSBsPXsgNiB9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyBkYXRhLm5hbWUgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKG5hbWUpID0+IGRpc3BhdGNoKHt0eXBlOiBcInNldE5hbWVcIiwgbmFtZX0pIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJvZHVjZXJJbnB1dCB2YWx1ZT17IGRhdGEucHJvZHVjZXIgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHByb2R1Y2VyKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRQcm9kdWNlclwiLCBwcm9kdWNlcn0pIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UmVnaW9uSW5wdXQgdmFsdWU9eyBkYXRhLnJlZ2lvbiB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAocmVnaW9uKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRSZWdpb25cIiwgcmVnaW9ufSkgfVxuICAgICAgICAgICAgICAgIHByb2R1Y2VyVGV4dD17IGRhdGEucHJvZHVjZXIgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSYXRpbmdJbnB1dCBpc0NoZWNrZWQ9eyBkYXRhLmlzUmF0aW5nRW5hYmxlZCB9XG4gICAgICAgICAgICAgICAgb25Jc0NoZWNrZWRDaGFuZ2U9eyAoaXNSYXRpbmdFbmFibGVkKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRJc1JhdGluZ0VuYWJsZWRcIiwgaXNSYXRpbmdFbmFibGVkfSkgfVxuICAgICAgICAgICAgICAgIHJhdGluZz17IGRhdGEucmF0aW5nIH1cbiAgICAgICAgICAgICAgICBvblJhdGluZ0NoYW5nZT17IChyYXRpbmcpID0+IGRpc3BhdGNoKHt0eXBlOiBcInNldFJhdGluZ1wiLCByYXRpbmd9KSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZpdGlBcmVhSW5wdXQgdmFsdWU9eyBkYXRhLnZpdGlBcmVhIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2aXRpQXJlYSkgPT4gZGlzcGF0Y2goe3R5cGU6IFwic2V0Vml0aUFyZWFcIiwgdml0aUFyZWF9KSB9XG4gICAgICAgICAgICAgICAgcmVnaW9uVGV4dD17IGRhdGEucmVnaW9uIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJEZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBkYXRhLmRlc2NyaXB0aW9uIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChkZXNjcmlwdGlvbikgPT4gZGlzcGF0Y2goe3R5cGU6IFwic2V0RGVzY3JpcHRpb25cIiwgZGVzY3JpcHRpb259KSB9XG4gICAgICAgICAgICAgICAgcz17IDEyIH0gbD17IDYgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0SW5wdXQgbmFtZT1cIk5vdGVzXCIgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBzPXsgMTIgfSBsPXsgNiB9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyBkYXRhLm5vdGVzIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChub3RlcykgPT4gZGlzcGF0Y2goe3R5cGU6IFwic2V0Tm90ZXNcIiwgbm90ZXN9KSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZpbGVJbnB1dCBuYW1lPVwiV2luZSBJbWFnZVwiIG9uQ2hhbmdlPXsgKGZpbGUpID0+IGRpc3BhdGNoKHt0eXBlOiBcInNldEZpbGVcIiwgZmlsZX0pIH0gLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbldpbmVJbnB1dHMuZGlzcGxheU5hbWUgPSBcIldpbmVJbnB1dHNcIjtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IG9uTG9hZCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuLi8uLi9saWIvd2lkZ2V0c1wiO1xuaW1wb3J0IHsgTmV3V2luZUFwcCB9IGZyb20gXCIuL05ld1dpbmVBcHBcIjtcblxub25Mb2FkKCgpID0+IHtcbiAgICBuYXZiYXIoXCJuZXctd2luZS1uYXZcIik7XG4gICAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQoTmV3V2luZUFwcCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3dpbmUtY29udGFpbmVyXCIpKTtcbn0pO1xuIiwiaW1wb3J0IHsgcmVhZENvb2tpZSB9IGZyb20gXCIuL0Nvb2tpZXNcIjtcbmltcG9ydCB7IElEaWN0LCBpc0VtcHR5IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgSEVBREVSUyA9IHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIlgtQ1NSRlRva2VuXCI6IHJlYWRDb29raWUoXCJjc3JmdG9rZW5cIikgfHwgXCJcIixcbn07XG5cbmV4cG9ydCB0eXBlIElRdWVyeVBhcmFtcyA9IElEaWN0PHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+O1xuXG5mdW5jdGlvbiBlbmNvZGVQYXJhbXMocGFyYW1zOiBJUXVlcnlQYXJhbXMpOiBzdHJpbmcge1xuICAgIGlmIChpc0VtcHR5KHBhcmFtcykpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBcIj9cIiArIE9iamVjdC5lbnRyaWVzKHBhcmFtcykubWFwKChbaywgdl0pID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrKX09JHtlbmNvZGVVUklDb21wb25lbnQodil9YCkuam9pbihcIiZcIik7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUpzb24ob2JqOiBvYmplY3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZWNvZGVKc29uSWZBbnkocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgaWYgKHBhcnNlRmxvYXQocmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LWxlbmd0aFwiKSA/PyBcIjBcIikgPiAwXG4gICAgICAgICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbn1cblxudHlwZSBWaW5vdGVjYUVycm9yID1cbiAgICB8IHtcIk5vdEZvdW5kXCI6IHN0cmluZ31cbiAgICB8IHtcIkludGVybmFsXCI6IHN0cmluZ31cbiAgICB8IHtcIk1pc3NpbmdDb25zdHJhaW50XCI6IHN0cmluZ31cbiAgICB8IHtcIkJhZFJlcXVlc3RcIjogc3RyaW5nfTtcblxuZnVuY3Rpb24gaXNWaW5vdGVjYUVycm9yKG9iajogb2JqZWN0KTogb2JqIGlzIFZpbm90ZWNhRXJyb3Ige1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHJldHVybiBrZXlzLmxlbmd0aCA9PT0gMVxuICAgICAgICAmJiBbXCJOb3RGb3VuZFwiLCBcIkludGVybmFsXCIsIFwiTWlzc2luZ0NvbnN0cmFpbnRcIiwgXCJCYWRSZXF1ZXN0XCJdXG4gICAgICAgICAgICAuZmluZCgoaSkgPT4gaSA9PT0ga2V5c1swXSkgIT09IHVuZGVmaW5lZDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tSZXNwb25zZShyZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPiAzMTApIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IGRlY29kZUpzb25JZkFueShyZXNwb25zZSk7XG4gICAgICAgIGlmIChpc1Zpbm90ZWNhRXJyb3IobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke09iamVjdC5rZXlzKG1lc3NhZ2UpWzBdfTogJHtPYmplY3QudmFsdWVzKG1lc3NhZ2UpWzBdfWApO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlSnNvbklmQW55KHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICB9XG59XG5cbi8qKlxuICogTWFrZXMgYW4gSFRUUCBHRVQgcmVxdWVzdCB0byB0aGUgdXJsIHdpdGggdGhlIG9wdGlvbmFsIHBhcmFtZXRlcnMsIHRoZW4gcGFyc2VzXG4gKiB0aGUgSlNPTiByZXNwb25zZS5cbiAqIEBwYXJhbSB1cmwgQSBVUkwgdG8gcmVxdWVzdFxuICogQHBhcmFtIHBhcmFtcyBBbiBvcHRpb25hbCBkaWN0aW9uYXJ5IG9mIHBhcmFtZXRlcnMgdG8gdGhlaXIgdmFsdWVzXG4gKiBAcmV0dXJucyBwYXJzZWQgSlNPTiByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0PFJlc3BvbnNlPih1cmw6IHN0cmluZywgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpKTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbi8qKlxuICogTWFrZXMgYW4gSFRUUCBQT1NUIHJlcXVlc3QgdG8gdGhlIHVybCB3aXRoIHRoZSBvcHRpb25hbCBwYXJhbWV0ZXJzIGNvbnRhaW5pbmdcbiAqIHRoZSBib2R5LCB0aGVuIHBhcnNlcyB0aGUgSlNPTiByZXNwb25zZS5cbiAqIEBwYXJhbSB1cmwgQSBVUkwgdG8gcmVxdWVzdFxuICogQHBhcmFtIGJvZHkgSlNPTiBvYmplY3QgdG8gZW5jb2RlIGFuZCBzZW5kIHRvIHRoZSBzZXJ2ZXJcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb3B0aW9uYWwgZGljdGlvbmFyeSBvZiBwYXJhbWV0ZXJzIHRvIHRoZWlyIHZhbHVlc1xuICogQHJldHVybnMgcGFyc2VkIEpTT04gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3Q8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBib2R5OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZW5jb2RlSnNvbihib2R5KSxcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0Rm9ybTxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGZvcm06IEZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZm9ybSxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbi8qKlxuICogTWFrZXMgYW4gSFRUUCBQVVQgcmVxdWVzdCB0byB0aGUgdXJsIHdpdGggdGhlIG9wdGlvbmFsIHBhcmFtZXRlcnMgY29udGFpbmluZ1xuICogdGhlIGJvZHksIHRoZW4gcGFyc2VzIHRoZSBKU09OIHJlc3BvbnNlLlxuICogQHBhcmFtIHVybCBBIFVSTCB0byByZXF1ZXN0XG4gKiBAcGFyYW0gYm9keSBKU09OIG9iamVjdCB0byBlbmNvZGUgYW5kIHNlbmQgdG8gdGhlIHNlcnZlclxuICogQHBhcmFtIHBhcmFtcyBBbiBvcHRpb25hbCBkaWN0aW9uYXJ5IG9mIHBhcmFtZXRlcnMgYW5kIHRoZWlyIHZhbHVlc1xuICogQHJldHVybnMgcGFyc2VkIEpTT04gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGJvZHk6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBlbmNvZGVKc29uKGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHV0Rm9ybTxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGZvcm06IEZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBmb3JtLFxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF0Y2g8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBib2R5OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGVuY29kZUpzb24oYm9keSksXG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZV88UmVzcG9uc2U+KHVybDogc3RyaW5nLCBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cbiIsImNvbnN0IE1JTExJU0VDT05EU19JTl9EQVkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIENyZWF0ZSBvciB1cGRhdGUgYSBjb29raWVcbiAqIEBwYXJhbSBuYW1lIG5hbWUva2V5IG9mIHRoZSBjb29raWVcbiAqIEBwYXJhbSB2YWx1ZSB2YWx1ZSB0byBzdG9yZVxuICogQHBhcmFtIGRheXMgbnVtYmVyIG9mIGRheXMgdGhlIGNvb2tpZSBpcyB2YWxpZCwgZGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgc2Vzc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29va2llKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZGF5cz86IG51bWJlcikge1xuICAgIGxldCBleHBpcmVzO1xuICAgIGlmIChkYXlzKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyAqIE1JTExJU0VDT05EU19JTl9EQVkpKTtcbiAgICAgICAgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b1VUQ1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGV4cGlyZXMgPSBcIlwiO1xuICAgIH1cbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkQ29va2llKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xuICAgIGZvciAobGV0IGMgb2YgZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKSkge1xuICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICBjID0gYy5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYy5zdWJzdHIobmFtZUVRLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDb29raWUobmFtZTogc3RyaW5nKSB7XG4gICAgY3JlYXRlQ29va2llKG5hbWUsIFwiXCIsIC0xKTtcbn1cbiIsImltcG9ydCB7IHBvc3QgfSBmcm9tIFwiLi9BcGlIZWxwZXJcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcIi4vd2lkZ2V0c1wiO1xuXG4vKiogUHJvdmlkZXMgbG9nZ2luZyBmdW5jdGlvbmFsaXR5IGZvciBjbGllbnQtc2lkZSBKYXZhU2NyaXB0IGVycm9ycy4gKi9cbmVudW0gTG9nTGV2ZWwge1xuICAgIENyaXRpY2FsID0gXCJjcml0aWNhbFwiLFxuICAgIEVycm9yID0gXCJlcnJvclwiLFxuICAgIFdhcm5pbmcgPSBcIndhcm5pbmdcIixcbiAgICBJbmZvID0gXCJpbmZvXCIsXG4gICAgRGVidWcgPSBcImRlYnVnXCIsXG59XG5cbmludGVyZmFjZSBJTG9nUmVzdWx0IHtcbiAgICBzdWNjZXNzOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuICAgIC8qKlxuICAgICAqIExvZ2dpbmcgY2xhc3MgZm9yIGNsaWVudC1zaWRlIGVycm9ycyB0aGF0IHdpbGwgYmUgcG9zdGVkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBmb3IgbG9nZ2luZyB0byB0aGUgc2FtZSBmaWxlIGFzIGFsbCBvdGhlciB2aW5vdGVjYSBsb2dzLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1vZHVsZSB0aGUgbmFtZSBvZiB0aGUgbW9kdWxlIGZyb20gd2hpY2ggdGhlIGxvZyBtZXNzYWdlcyBvcmlnaW5hdGUuXG4gICAgICogQHBhcmFtIHRvQ29uc29sZSB3aGV0aGVyIHRvIGFsc28gcHJpbnQgbWVzc2FnZXMgdG8gdGhlIGNvbnNvbGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZHVsZTogc3RyaW5nLCBwcml2YXRlIHRvQ29uc29sZSA9IGZhbHNlKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVhbnQgZm9yIGlycmVjb3ZlcmFibGUgb3IgdHJ1bHkgZXhjZXB0aW9uYWwgZXJyb3JzLiBBIHRvYXN0IHdpdGggdGhlXG4gICAgICogbG9nIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSBsb2cgd2lsbCBiZSBzZW50IGJhY2sgdG8gdGhlIHNlcnZlclxuICAgICAqIGZvciBwb3N0ZXJpdHkuXG4gICAgICovXG4gICAgcHVibGljIGxvZ0NyaXRpY2FsKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IExvZ0xldmVsLkNyaXRpY2FsO1xuICAgICAgICB0aGlzLnRvYXN0KGxldmVsLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHRvYXN0IHdpdGggdGhlIGxvZyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgbG9nIHdpbGwgYmUgc2VudFxuICAgICAqIGJhY2sgdG8gdGhlIHNlcnZlciBmb3IgcG9zdGVyaXR5LlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBMb2dMZXZlbC5FcnJvcjtcbiAgICAgICAgdGhpcy50b2FzdChsZXZlbCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSB0b2FzdCB3aXRoIHRoZSBsb2cgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIGxvZyB3aWxsIGJlIHNlbnRcbiAgICAgKiBiYWNrIHRvIHRoZSBzZXJ2ZXIgZm9yIHBvc3Rlcml0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nV2FybmluZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBMb2dMZXZlbC5XYXJuaW5nO1xuICAgICAgICB0aGlzLnRvYXN0KGxldmVsLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nSW5mbyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKExvZ0xldmVsLkluZm8sIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dEZWJ1ZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKExvZ0xldmVsLkRlYnVnLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxvZyhsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy50b0NvbnNvbGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2xldmVsLnRvVXBwZXJDYXNlKCl9ICR7bmV3IERhdGUoKX0gJHt0aGlzLm1vZHVsZX06ICR7bWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZTogSUxvZ1Jlc3VsdCA9IGF3YWl0IHBvc3QoXCIvcmVzdC9sb2dzXCIsIHtcbiAgICAgICAgICAgIGxldmVsLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSBpbnN0YW5jZW9mIE9iamVjdCA/IFwiXCIgOiBtZXNzYWdlLFxuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLm1vZHVsZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy50b2FzdChMb2dMZXZlbC5FcnJvciwgXCJGYWlsZWQgdG8gc2VuZCBjbGllbnQtc2lkZSBsb2dzIHRvIHNlcnZlci5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvYXN0KGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRvYXN0KGAke2xldmVsLnRvVXBwZXJDYXNlKCl9OiAke21lc3NhZ2V9YCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZGVsZXRlXywgZ2V0LCBJUXVlcnlQYXJhbXMsIHBhdGNoLCBwb3N0LCBwb3N0Rm9ybSwgcHV0LCBwdXRGb3JtIH0gZnJvbSBcIi4vQXBpSGVscGVyXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHsgSUNvbG9yLCBJR3JhcGUsIElHcmFwZUZvcm0sIElNb3N0Q29tbW9uUHVyY2hhc2VEYXRlLCBJUHJvZHVjZXIsIElQcm9kdWNlckZvcm0sIElQdXJjaGFzZSxcbiAgICAgICAgIElQdXJjaGFzZUNvdW50LCBJUHVyY2hhc2VGb3JtLCBJUmVnaW9uLCBJUmVnaW9uRm9ybSwgSVN0b3JlLCBJU3RvcmVGb3JtLCBJVG9wRW50aXR5LFxuICAgICAgICAgSVRvdGFsTGl0ZXJzLCBJVml0aUFyZWEsIElWaXRpQXJlYUZvcm0sIElWaXRpQXJlYVN0YXRzLCBJV2luZSwgSVdpbmVDb3VudCwgSVdpbmVGb3JtLFxuICAgICAgICAgSVdpbmVHcmFwZSwgSVdpbmVHcmFwZXNGb3JtLCBJV2luZVBhdGNoRm9ybSwgSVdpbmVUeXBlLCBJV2luZVR5cGVGb3JtIH0gZnJvbSBcIi4vUmVzdFwiO1xuaW1wb3J0IHsgSVJlc3RNb2RlbCB9IGZyb20gXCIuL1Jlc3RUeXBlc1wiO1xuaW1wb3J0IHsgSURpY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9EaWN0KG1vZGVsczogSVJlc3RNb2RlbFtdKTogSURpY3Q8c3RyaW5nIHwgbnVsbD4ge1xuICAgIGNvbnN0IHJlc3VsdDogSURpY3Q8c3RyaW5nIHwgbnVsbD4gPSB7fTtcbiAgICBtb2RlbHMuZm9yRWFjaCgobW9kZWwpID0+IHtcbiAgICAgICAgcmVzdWx0W21vZGVsLm5hbWVdID0gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgY2xhc3MgRW1wdHlSZXN1bHRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBwdWJsaWMgc3RhdGljIGlzSW5zdGFuY2UoZXJyOiBFcnJvcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZXJyLm5hbWUgPT09IHRoaXMuTkFNRTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBOQU1FID0gXCJFbXB0eVJlc3VsdEVycm9yXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IEVtcHR5UmVzdWx0RXJyb3IuTkFNRTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vbk51bGxzKG9iajogSURpY3Q8c3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IHVuZGVmaW5lZD4pOiBJUXVlcnlQYXJhbXMge1xuICAgIGNvbnN0IHE6IElRdWVyeVBhcmFtcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKG9iaikuZmlsdGVyKChrKSA9PiBCb29sZWFuKG9ialtrXSkpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgcVtrXSA9IG9ialtrXSBhcyBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuICAgIH0pO1xuICAgIHJldHVybiBxO1xufVxuXG5mdW5jdGlvbiBzaW5nbGVFbnRpdHlHZXR0ZXI8UGFyYW1zLCBSZXNwPihcbiAgICBsaXN0R2V0dGVyOiAocGFyYW1zOiBQYXJhbXMpID0+IFByb21pc2U8UmVzcFtdPixcbik6IChwYXJhbXM6IFBhcmFtcykgPT4gUHJvbWlzZTxSZXNwPiB7XG4gICAgLy8gU2hhdmUgb2ZmICdnZXQnXG4gICAgY29uc3Qgb2JqTmFtZSA9IGxpc3RHZXR0ZXIubmFtZS5zdWJzdHIoMyk7XG4gICAgcmV0dXJuIGFzeW5jIChwYXJhbXM6IFBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgbGlzdEdldHRlcihwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFJlY2VpdmVkIG1vcmUgdGhhbiBvbmUgJHtvYmpOYW1lfSByZXN1bHQgd2hlbiBvbmUgd2FzIGV4cGVjdGVkYDtcbiAgICAgICAgICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoXCJSZXN0QXBpXCIpO1xuICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0T3JDcmVhdGU8UmVxUGFyYW1zLCBSZXNwLCBGb3JtPihcbiAgICBsaXN0R2V0dGVyOiAocGFyYW1zOiBSZXFQYXJhbXMpID0+IFByb21pc2U8UmVzcFtdPixcbiAgICBjcmVhdG9yOiAoZm9ybTogRm9ybSkgPT4gUHJvbWlzZTxSZXNwPixcbik6IChwYXJhbXM6IFJlcVBhcmFtcywgZm9ybTogRm9ybSkgPT4gUHJvbWlzZTxSZXNwPiB7XG4gICAgY29uc3Qgb2JqTmFtZSA9IGxpc3RHZXR0ZXIubmFtZS5zdWJzdHIoMyk7XG4gICAgcmV0dXJuIGFzeW5jIChwYXJhbXMsIGZvcm0pID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGxpc3RHZXR0ZXIocGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdPYmogPSBhd2FpdCBjcmVhdG9yKGZvcm0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBSZWNlaXZlZCBtb3JlIHRoYW4gb25lICR7b2JqTmFtZX0gcmVzdWx0IHdoZW4gb25lIHdhcyBleHBlY3RlZGA7XG4gICAgICAgIG5ldyBMb2dnZXIoXCJSZXN0QXBpXCIpLmxvZ0Vycm9yKG1lc3NhZ2UpO1xuICAgICAgICB0aHJvdyBFcnJvcihtZXNzYWdlKTtcbiAgICB9O1xufVxuXG4vKiBDT0xPUlMgKi9cbmludGVyZmFjZSBJR2V0Q29sb3JQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2xvcnMoeyBpZCwgbmFtZSB9OiBJR2V0Q29sb3JQYXJhbXMpOiBQcm9taXNlPElDb2xvcltdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUgfSk7XG4gICAgY29uc3QgY29sb3JzOiBJQ29sb3JbXSA9IGF3YWl0IGdldChcIi9yZXN0L2NvbG9yc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRW1wdHlSZXN1bHRFcnJvcihcIkVtcHR5IHJlc3VsdCByZXR1cm5lZCBmb3IgY29sb3JcIik7XG4gICAgfVxuICAgIHJldHVybiBjb2xvcnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb2xvciA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRDb2xvcnMpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wQ29sb3JzKCk6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L2NvbG9ycy90b3BcIik7XG59XG5cbi8qIEdSQVBFUyAqL1xuaW50ZXJmYWNlIElHZXRHcmFwZXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHcmFwZXMoeyBpZCwgbmFtZSB9OiBJR2V0R3JhcGVzUGFyYW1zKTogUHJvbWlzZTxJR3JhcGVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lIH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9ncmFwZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRHcmFwZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRHcmFwZXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlR3JhcGUgPSBnZXRPckNyZWF0ZShnZXRHcmFwZXMsIGNyZWF0ZUdyYXBlKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUdyYXBlKGdyYXBlOiBJR3JhcGVGb3JtKTogUHJvbWlzZTxJR3JhcGU+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L2dyYXBlc1wiLCBncmFwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVHcmFwZShpZDogbnVtYmVyLCBncmFwZTogSUdyYXBlRm9ybSk6IFByb21pc2U8SUdyYXBlPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3QvZ3JhcGVzLyR7aWR9YCwgZ3JhcGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wR3JhcGVzKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L2dyYXBlcy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFBST0RVQ0VSUyAqL1xuaW50ZXJmYWNlIElHZXRQcm9kdWNlcnNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcmVnaW9uSWQ/OiBudW1iZXI7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZS1sZW5ndGhcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWNlcnMoe2lkLCBuYW1lLCByZWdpb25JZH06IElHZXRQcm9kdWNlcnNQYXJhbXMpOiBQcm9taXNlPElQcm9kdWNlcltdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtpZCwgbmFtZSwgcmVnaW9uX2lkOiByZWdpb25JZH0pO1xuICAgIGNvbnN0IHByb2R1Y2VyczogSVByb2R1Y2VyW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9wcm9kdWNlcnNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHByb2R1Y2Vycztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y2VyID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFByb2R1Y2Vycyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVQcm9kdWNlciA9IGdldE9yQ3JlYXRlKGdldFByb2R1Y2VycywgY3JlYXRlUHJvZHVjZXIpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjZXIocHJvZHVjZXI6IElQcm9kdWNlckZvcm0pOiBQcm9taXNlPElQcm9kdWNlcj4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvcHJvZHVjZXJzXCIsIHByb2R1Y2VyKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y2VyKHByb2R1Y2VyOiBJUHJvZHVjZXIpOiBQcm9taXNlPElQcm9kdWNlcj4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3Byb2R1Y2Vycy8ke3Byb2R1Y2VyLmlkfWAsIHByb2R1Y2VyKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y2VyKGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gZGVsZXRlXyhgL3Jlc3QvcHJvZHVjZXJzLyR7aWR9YCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BQcm9kdWNlcnMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHJvZHVjZXJzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogUFVSQ0hBU0VTICovXG5pbnRlcmZhY2UgSUdldFB1cmNoYXNlc1BhcmFtcyB7XG4gICAgd2luZUlkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHVyY2hhc2VzKHt3aW5lSWR9OiBJR2V0UHVyY2hhc2VzUGFyYW1zKTogUHJvbWlzZTxJUHVyY2hhc2VbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IHdpbmVfaWQ6IHdpbmVJZCB9KTtcbiAgICBjb25zdCBwdXJjaGFzZXMgPSBhd2FpdCBnZXQ8SVB1cmNoYXNlW10+KFwiL3Jlc3QvcHVyY2hhc2VzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiBwdXJjaGFzZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQdXJjaGFzZShwdXJjaGFzZTogSVB1cmNoYXNlRm9ybSk6IFByb21pc2U8SVB1cmNoYXNlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9wdXJjaGFzZXNcIiwgcHVyY2hhc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHVyY2hhc2UoaWQ6IG51bWJlciwgcHVyY2hhc2U6IElQdXJjaGFzZUZvcm0pOiBQcm9taXNlPElQdXJjaGFzZT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3B1cmNoYXNlcy8ke2lkfWAsIHB1cmNoYXNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVB1cmNoYXNlKGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gZGVsZXRlXyhgL3Jlc3QvcHVyY2hhc2VzLyR7aWR9YCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNb3N0Q29tbW9uUHVyY2hhc2VEYXRlKCk6IFByb21pc2U8SU1vc3RDb21tb25QdXJjaGFzZURhdGU+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHVyY2hhc2VzL21vc3QtY29tbW9uLXB1cmNoYXNlLWRhdGVcIik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3RhbExpdGVycygpOiBQcm9taXNlPElUb3RhbExpdGVycz4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wdXJjaGFzZXMvdG90YWwtbGl0ZXJzXCIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHVyY2hhc2VDb3VudCgpOiBQcm9taXNlPElQdXJjaGFzZUNvdW50PiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3B1cmNoYXNlcy9jb3VudFwiKTtcbn1cblxuLyogUkVHSU9OUyAqL1xuaW50ZXJmYWNlIElHZXRSZWdpb25QYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcHJvZHVjZXJOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVnaW9ucyh7IGlkLCBuYW1lLCBwcm9kdWNlck5hbWUgfTogSUdldFJlZ2lvblBhcmFtcyk6IFByb21pc2U8SVJlZ2lvbltdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUsIHByb2R1Y2VyX25hbWU6IHByb2R1Y2VyTmFtZSB9KTtcbiAgICBjb25zdCByZWdpb25zOiBJUmVnaW9uW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9yZWdpb25zXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiByZWdpb25zO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UmVnaW9uID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFJlZ2lvbnMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlUmVnaW9uID0gZ2V0T3JDcmVhdGUoZ2V0UmVnaW9ucywgY3JlYXRlUmVnaW9uKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlZ2lvbihyZWdpb246IElSZWdpb25Gb3JtKTogUHJvbWlzZTxJUmVnaW9uPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9yZWdpb25zXCIsIHJlZ2lvbik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZWdpb24ocmVnaW9uOiBJUmVnaW9uKTogUHJvbWlzZTxJUmVnaW9uPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3QvcmVnaW9ucy8ke3JlZ2lvbi5pZH1gLCByZWdpb24pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wUmVnaW9ucyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9yZWdpb25zL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogU1RPUkVTICovXG5pbnRlcmZhY2UgSUdldFN0b3JlUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RvcmVzKHtpZCwgbmFtZX06IElHZXRTdG9yZVBhcmFtcyk6IFByb21pc2U8SVN0b3JlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2lkLCBuYW1lfSk7XG4gICAgY29uc3Qgc3RvcmVzOiBJU3RvcmVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3N0b3Jlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gc3RvcmVzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RvcmUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0U3RvcmVzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVN0b3JlID0gZ2V0T3JDcmVhdGUoZ2V0U3RvcmVzLCBjcmVhdGVTdG9yZSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTdG9yZShzdG9yZTogSVN0b3JlRm9ybSk6IFByb21pc2U8SVN0b3JlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9zdG9yZXNcIiwgc3RvcmUpO1xufVxuXG4vKiBWSVRJIEFSRUFTICovXG5pbnRlcmZhY2UgSUdldFZpdGlBcmVhc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICByZWdpb25OYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Vml0aUFyZWFzKFxuICAgIHsgaWQsIG5hbWUsIHJlZ2lvbk5hbWUgfTogSUdldFZpdGlBcmVhc1BhcmFtcyxcbik6IFByb21pc2U8SVZpdGlBcmVhW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSwgcmVnaW9uX25hbWU6IHJlZ2lvbk5hbWUgfSk7XG4gICAgY29uc3Qgdml0aUFyZWFzOiBJVml0aUFyZWFbXSA9IGF3YWl0IGdldChcIi9yZXN0L3ZpdGktYXJlYXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHZpdGlBcmVhcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFZpdGlBcmVhID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFZpdGlBcmVhcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVWaXRpQXJlYSA9IGdldE9yQ3JlYXRlKGdldFZpdGlBcmVhcywgY3JlYXRlVml0aUFyZWEpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVml0aUFyZWEodml0aUFyZWE6IElWaXRpQXJlYUZvcm0pOiBQcm9taXNlPElWaXRpQXJlYT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvdml0aS1hcmVhc1wiLCB2aXRpQXJlYSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVWaXRpQXJlYSh2aXRpQXJlYTogSVZpdGlBcmVhKTogUHJvbWlzZTxJVml0aUFyZWE+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC92aXRpLWFyZWFzLyR7dml0aUFyZWEuaWR9YCwgdml0aUFyZWEpO1xufVxuXG5pbnRlcmZhY2UgSUdldFZpdGlBcmVhU3RhdHNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIHJlZ2lvbklkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Vml0aUFyZWFTdGF0cyhcbiAgICB7IGlkLCByZWdpb25JZCB9OiBJR2V0Vml0aUFyZWFTdGF0c1BhcmFtcyxcbik6IFByb21pc2U8SVZpdGlBcmVhU3RhdHNbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCByZWdpb25faWQ6IHJlZ2lvbklkIH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC92aXRpLWFyZWFzL3N0YXRzXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wVml0aUFyZWFzKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3ZpdGktYXJlYXMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBXSU5FUyAqL1xuaW50ZXJmYWNlIElHZXRXaW5lc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgcHJvZHVjZXJJZD86IG51bWJlcjtcbiAgICByZWdpb25JZD86IG51bWJlcjtcbiAgICB2aXRpQXJlYUlkPzogbnVtYmVyO1xuICAgIHdpbmVUeXBlSWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lcyhcbiAgICB7IGlkLCBwcm9kdWNlcklkLCByZWdpb25JZCwgdml0aUFyZWFJZCwgd2luZVR5cGVJZCB9OiBJR2V0V2luZXNQYXJhbXMsXG4pOiBQcm9taXNlPElXaW5lW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe1xuICAgICAgICBpZCwgcmVnaW9uX2lkOiByZWdpb25JZCwgcHJvZHVjZXJfaWQ6IHByb2R1Y2VySWQsXG4gICAgICAgIHZpdGlfYXJlYV9pZDogdml0aUFyZWFJZCwgd2luZV90eXBlX2lkOiB3aW5lVHlwZUlkLFxuICAgIH0pO1xuICAgIGNvbnN0IHdpbmVzOiBJV2luZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvd2luZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHdpbmVzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0V2luZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRXaW5lcyk7XG5cbmNvbnN0IGNyZWF0ZVdpbmVIdHRwRm9ybSA9ICh3aW5lOiBJV2luZUZvcm0sIGZpbGU6IEZpbGUgfCBudWxsKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm0uYXBwZW5kKFwid2luZV9mb3JtXCIsIG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeSh3aW5lKV0sIHt0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIn0pKTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgICBmb3JtLmFwcGVuZChcImltYWdlXCIsIGZpbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5lKHdpbmU6IElXaW5lRm9ybSwgZmlsZTogRmlsZSB8IG51bGwpOiBQcm9taXNlPElXaW5lPiB7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVdpbmVIdHRwRm9ybSh3aW5lLCBmaWxlKTtcbiAgICByZXR1cm4gcG9zdEZvcm0oXCIvcmVzdC93aW5lc1wiLCBmb3JtKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdpbmUoaWQ6IG51bWJlciwgd2luZTogSVdpbmVGb3JtLCBmaWxlOiBGaWxlIHwgbnVsbCk6IFByb21pc2U8SVdpbmU+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlV2luZUh0dHBGb3JtKHdpbmUsIGZpbGUpO1xuICAgIHJldHVybiBwdXRGb3JtKGAvcmVzdC93aW5lcy8ke2lkfWAsIGZvcm0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFydFVwZGF0ZVdpbmUoaWQ6IG51bWJlciwgd2luZTogSVdpbmVQYXRjaEZvcm0pOiBQcm9taXNlPElXaW5lPiB7XG4gICAgcmV0dXJuIHBhdGNoKGAvcmVzdC93aW5lcy8ke2lkfWAsIHdpbmUpO1xufVxuXG5pbnRlcmZhY2UgSVNlYXJjaFdpbmVzUGFyYW1zIHtcbiAgICBjb2xvckxpa2U/OiBzdHJpbmc7XG4gICAgd2luZVR5cGVMaWtlPzogc3RyaW5nO1xuICAgIHByb2R1Y2VyTGlrZT86IHN0cmluZztcbiAgICByZWdpb25MaWtlPzogc3RyaW5nO1xuICAgIHZpdGlBcmVhTGlrZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFdpbmVzKFxuICAgIHsgY29sb3JMaWtlLCB3aW5lVHlwZUxpa2UsIHByb2R1Y2VyTGlrZSwgcmVnaW9uTGlrZSwgdml0aUFyZWFMaWtlIH06IElTZWFyY2hXaW5lc1BhcmFtcyxcbik6IFByb21pc2U8SVdpbmVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7XG4gICAgICAgIGNvbG9yX2xpa2U6IGNvbG9yTGlrZSwgd2luZV90eXBlX2xpa2U6IHdpbmVUeXBlTGlrZSwgcHJvZHVjZXJfbGlrZTogcHJvZHVjZXJMaWtlLFxuICAgICAgICByZWdpb25fbGlrZTogcmVnaW9uTGlrZSwgdml0aV9hcmVhX2xpa2U6IHZpdGlBcmVhTGlrZSxcbiAgICB9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvd2luZXMvc2VhcmNoXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZVZhcmlldGllcygpOiBQcm9taXNlPElXaW5lQ291bnQ+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvd2luZXMvY291bnRcIik7XG59XG5cbi8qIFdJTkUgR1JBUEVTICovXG5pbnRlcmZhY2UgSUdldFdpbmVHcmFwZXNQYXJhbXMge1xuICAgIHdpbmVJZD86IG51bWJlcjtcbiAgICBncmFwZUlkPzogbnVtYmVyO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmUtbGVuZ3RoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZUdyYXBlcyh7IHdpbmVJZCwgZ3JhcGVJZCB9OiBJR2V0V2luZUdyYXBlc1BhcmFtcyk6IFByb21pc2U8SVdpbmVHcmFwZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgd2luZV9pZDogd2luZUlkLCBncmFwZV9pZDogZ3JhcGVJZCB9KTtcbiAgICBjb25zdCB3aW5lR3JhcGVzOiBJV2luZUdyYXBlW10gPSBhd2FpdCBnZXQoXCIvcmVzdC93aW5lLWdyYXBlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gd2luZUdyYXBlcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmVHcmFwZXMod2luZUdyYXBlczogSVdpbmVHcmFwZXNGb3JtKTogUHJvbWlzZTxJV2luZUdyYXBlW10+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3dpbmUtZ3JhcGVzXCIsIHdpbmVHcmFwZXMpO1xufVxuXG4vKiBXSU5FIFRZUEVTICovXG5pbnRlcmZhY2UgSUdldFdpbmVUeXBlc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVUeXBlcyh7IGlkLCBuYW1lIH06IElHZXRXaW5lVHlwZXNQYXJhbXMpOiBQcm9taXNlPElXaW5lVHlwZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUgfSk7XG4gICAgY29uc3Qgd2luZVR5cGVzOiBJV2luZVR5cGVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3dpbmUtdHlwZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHdpbmVUeXBlcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFdpbmVUeXBlID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFdpbmVUeXBlcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVXaW5lVHlwZSA9IGdldE9yQ3JlYXRlKGdldFdpbmVUeXBlcywgY3JlYXRlV2luZVR5cGUpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZVR5cGUod2luZVR5cGU6IElXaW5lVHlwZUZvcm0pOiBQcm9taXNlPElXaW5lVHlwZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvd2luZS10eXBlc1wiLCB3aW5lVHlwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVXaW5lVHlwZSh3aW5lVHlwZTogSVdpbmVUeXBlKTogUHJvbWlzZTxJV2luZVR5cGU+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC93aW5lLXR5cGVzLyR7d2luZVR5cGUuaWR9YCwgd2luZVR5cGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wV2luZVR5cGVzKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3dpbmUtdHlwZXMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuIiwiLyoqIEJhc2ljIHR5cGUgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgcmVzcG9uc2UgSlNPTiBvZiBtYW55IGFzeW5jaHJvbm91cyByZXF1ZXN0cy4gKi9cbmltcG9ydCB7IElSZXN0TW9kZWwgfSBmcm9tIFwiLi9SZXN0VHlwZXNcIjtcblxuLyoqXG4gKiBLZXktdmFsdWUgc3RvcmUgd2hlcmUgdGhlIGtleSBtdXN0IGJlIGEgc3RyaW5nLCBidXQgdGhlIHZhbHVlIGlzIG9mIGFueSB0eXBlXG4gKiBULlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElEaWN0PFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBvYmplY3RzIHRvIGEgc2luZ2xlIG9iamVjdCBvZiBuYW1lcyB0byBudWxsIGZvciB1c2Ugd2l0aCBtYXRlcmlhbGl6ZVxuICogYXV0b2NvbXBsZXRlLlxuICogQHBhcmFtIG9iamVjdHMgQW4gYXJyYXkgb2YgUkVTVCBtb2RlbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RNb2RlbHNUb05hbWVEaWN0KG9iamVjdHM6IElSZXN0TW9kZWxbXSk6IElEaWN0PG51bGw+IHtcbiAgICBjb25zdCBkaWN0OiBJRGljdDxudWxsPiA9IHt9O1xuICAgIG9iamVjdHMubWFwKChvYmopID0+IHtcbiAgICAgICAgZGljdFtvYmoubmFtZV0gPSBudWxsO1xuICAgIH0pO1xuICAgIHJldHVybiBkaWN0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGFuIDgtZGlnaXQgbnVtYmVyIG9mIGZvcm1hdCAneXl5eW1tZGQnIHRvIGEgRGF0ZSBvYmplY3QuXG4gKiBAcGFyYW0gbnVtIGEgZGF0ZSBudW1iZXIgb2YgZm9ybWF0ICd5eXl5bW1kZCdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG51bVRvRGF0ZShudW06IG51bWJlcik6IERhdGUge1xuICAgIGNvbnN0IHN0ck51bSA9IGAke251bX1gO1xuICAgIGlmIChzdHJOdW0ubGVuZ3RoICE9PSA4KSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBkYXRlIG51bWJlciAnJHtzdHJOdW19J2ApO1xuICAgIH1cbiAgICBjb25zdCB5ZWFyID0gc3RyTnVtLnN1YnN0cigwLCA0KTtcbiAgICBjb25zdCBtb250aCA9IHN0ck51bS5zdWJzdHIoNCwgMik7XG4gICAgY29uc3QgZGF5ID0gc3RyTnVtLnN1YnN0cig2LCAyKTtcbiAgICAvLyBKUyBtb250aHMgYXJlIDAtYmFzZWRcbiAgICByZXR1cm4gbmV3IERhdGUocGFyc2VJbnQoeWVhciwgMTApLCBwYXJzZUludChtb250aCwgMTApIC0gMSwgcGFyc2VJbnQoZGF5LCAxMCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVRvTnVtKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKiAxMF8wMDAgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkgKiAxMDAgKyBkYXRlLmdldERhdGUoKTtcbn1cblxuZXhwb3J0IGNvbnN0IEVOX0RBU0g6IHN0cmluZyA9IFwi4oCTXCI7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZGVmYXVsdCB2aW50YWdlIHllYXIsIHdoaWNoIGlzIHR3byB5ZWFycyBwcmlvciB0byB0aGUgY3VycmVudFxuICogeWVhci4gVGhpcyBmdW5jdGlvbiBkdXBsaWNhdGVzIHRoZSBQeXRob24gZnVuY3Rpb25cbiAqIHZpbm90ZWNhLnV0aWxzLmRlZmF1bHRfdmludGFnZV95ZWFyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VmludGFnZVllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYW4gb2JqZWN0IGlzIGVtcHR5LCBpLmUuIGhhcyBubyBrZXlzLlxuICogQHBhcmFtIG9iaiBBbiBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkob2JqOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5cbi8qKlxuICogUmV0dXJucyBzIHdpdGggdGhlIGZpcnN0IGxldHRlciBjYXBpdGFsaXplZC5cbiAqIEBwYXJhbSBzIEEgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPiAwID8gc1swXS50b1VwcGVyQ2FzZSgpICsgcy5zdWJzdHJpbmcoMSkgOiBcIlwiO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgZGlzcGxheSBuYW1lIHRvIGFuIGh0bWwgaWRcbiAqIEBwYXJhbSBuYW1lIEEgY29tcG9uZW50IGRpc3BsYXkgbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZVRvSWQobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmFtZS5yZXBsYWNlKC8oXFxzKSsvZywgXCItXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIG1heGltdW0gZWxlbWVudCBieSBvbmUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHR5cGUgb2YgZWxlbWVudFxuICogQHBhcmFtIGFyciBBbiBhcnJheSBvZiBvYmpjZWN0c1xuICogQHBhcmFtIGFjY2Vzc29yIEEgZnVuY3Rpb24gZm9yIGFjY2Vzc2luZyBhIG51bWJlciBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4Qnk8VD4oYXJyOiBUW10sIGFjY2Vzc29yOiAoZWxlbTogVCkgPT4gbnVtYmVyKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IG1heEVsZW06IFQgfCB1bmRlZmluZWQ7XG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eTtcbiAgICBmb3IgKGNvbnN0IGVsZW0gb2YgYXJyKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGFjY2Vzc29yKGVsZW0pO1xuICAgICAgICBpZiAodmFsID4gbWF4VmFsKSB7XG4gICAgICAgICAgICBtYXhFbGVtID0gZWxlbTtcbiAgICAgICAgICAgIG1heFZhbCA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF4RWxlbTtcbn1cblxuLyoqXG4gKiBTdW1zIGFuIGFycmF5IG9mIG9iamVjdHMgYnkgb25lIG9mIHRoZSBvYmplY3RzJyBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIGFyciBBbiBhcnJheSBvZiBvYmplY3RzXG4gKiBAcGFyYW0gYWNjZXNzb3IgQSBmdW5jdGlvbiBmb3IgYWNjZXNzaW5nIG9uZSBvZiB0aGUgb2JqZWN0cycgcHJvcGVydGllc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3VtQnk8VD4oYXJyOiBUW10sIGFjY2Vzc29yOiAoZWxlbTogVCkgPT4gbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGNvbnN0IGVsZW0gb2YgYXJyKSB7XG4gICAgICAgIHN1bSArPSBhY2Nlc3NvcihlbGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbn1cblxuLyoqXG4gKiBDb21wYXJlcyB0d28gb2JqZWN0cyBmb3IgZGVlcCBlcXVhbGl0eS5cbiAqIEBwYXJhbSBhIEFuIG9iamVjdFxuICogQHBhcmFtIGIgQW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmVFcXVhbChhOiBhbnksIGI6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgY29uc3QgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcbiAgICBpZiAoYUtleXMubGVuZ3RoICE9PSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGsgb2YgYUtleXMpIHtcbiAgICAgICAgaWYgKGFba10gIT09IGJba10pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuaW50ZXJmYWNlIElSYW5nZUFyZ3Mge1xuICAgIHN0YXJ0PzogbnVtYmVyO1xuICAgIHN0b3A/OiBudW1iZXI7XG4gICAgc3RlcD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhYmxlIHJhbmdlIG9mIG51bWJlcnNvbkNsaWNrLlxuICogQHBhcmFtIHN0YXJ0IEZpcnN0IG51bWJlciBvZiB0aGUgcmFuZ2VcbiAqIEBwYXJhbSBzdG9wIEVuZCBvZiB0aGUgcmFuZ2UgKG5vbi1pbmNsdXNpdmUpXG4gKiBAcGFyYW0gc3RlcCBJbmNyZW1lbnQgb2YgdGhlIHJhbmdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogcmFuZ2UoeyBzdGFydCwgc3RvcCwgc3RlcCB9OiBJUmFuZ2VBcmdzKTogSXRlcmFibGVJdGVyYXRvcjxudW1iZXI+IHtcbiAgICBzdGVwID0gc3RlcCB8fCAxO1xuICAgIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgICBzdG9wID0gc3RvcCB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICAgICAgeWllbGQgaTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbWFnZUV4aXN0cyhpbWFnZVVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpbWFnZVVybCwge21ldGhvZDogXCJIRUFEXCJ9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZUFuZFR5cGUobmFtZTogc3RyaW5nIHwgbnVsbCwgd2luZVR5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAkeyhuYW1lID8gbmFtZSArIFwiIFwiIDogXCJcIil9JHt3aW5lVHlwZX1gO1xufVxuXG4vLyBUT0RPOiBtb3ZlIHRvIHVzZSBSZWFjdCByb3V0ZXIgb3Igc29tZXRoaW5nIHNpbWlsYXJcbmV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdCh1cmw6IHN0cmluZykge1xuICAgIGxvY2F0aW9uLmhyZWYgPSB1cmw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWQoZnVuOiAoKSA9PiB2b2lkKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuKTtcbn1cbiIsImltcG9ydCB7IEF1dG9jb21wbGV0ZSwgRHJvcGRvd24sIFNpZGVuYXYgfSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgeyBJRGljdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbnR5cGUgT25DaGFuZ2UgPSAoZTogc3RyaW5nKSA9PiB2b2lkO1xuXG4vKiogU2V0dXAgYXV0b2NvbXBsZXRpb24gd2l0aCBwcm92aWRlZCBjb21wbGV0aW9uIG9wdGlvbnMuICovXG5leHBvcnQgZnVuY3Rpb24gYXV0b2NvbXBsZXRlKGVsZW06IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25zOiBJRGljdDxzdHJpbmcgfCBudWxsPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IE9uQ2hhbmdlLCBtaW5MZW5ndGggPSAxLCBsaW1pdCA9IDUpIHtcbiAgICBpZiAoZWxlbS5jdXJyZW50KSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgICAgICBuZXcgQXV0b2NvbXBsZXRlKGVsZW0uY3VycmVudCwge1xuICAgICAgICAgICAgZGF0YTogY29tcGxldGlvbnMsXG4gICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIG1pbkxlbmd0aCxcblxuICAgICAgICAgICAgb25BdXRvY29tcGxldGU6IGZ1bmN0aW9uKHRoaXMsIHRleHQpIHsgIC8vIHRzbGludDpkaXNhYmxlLWxpbmUgb2JqZWN0LWxpdGVyYWwtc2hvcnRoYW5kXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UodGV4dCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gRml4IG92ZXJsYXBwdGluZyB0ZXh0IGJ1Z1xuICAgICAgICBNLnVwZGF0ZVRleHRGaWVsZHMoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlTmF2YmFyVGFiKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG4vKiogRW5hYmxlcyBuYXZiYXIgbWVudXMuIFNob3VsZCBiZSBjYWxsZWQgb24gZXZlcnkgcGFnZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYXZiYXIoYWN0aXZlTmF2VGFiSWQ/OiBzdHJpbmcpIHtcbiAgICBpZiAoYWN0aXZlTmF2VGFiSWQpIHtcbiAgICAgICAgYWN0aXZhdGVOYXZiYXJUYWIoYWN0aXZlTmF2VGFiSWQpO1xuICAgIH1cbiAgICBjb25zdCBzaWRlTmF2RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZW5hdlwiKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICBuZXcgU2lkZW5hdihzaWRlTmF2RWxlbSEpO1xuICAgIGNvbnN0IGRyb3Bkb3duRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tdHJpZ2dlclwiKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICBuZXcgRHJvcGRvd24oZHJvcGRvd25FbGVtISk7XG59XG5cbi8qKiBTaW1wbGlmaWVzIGRpc3BsYXlpbmcgb2YgdG9hc3QgbWVzc2FnZXMgdG8gdXNlciAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvYXN0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIE0udG9hc3Qoe1xuICAgICAgICBjbGFzc2VzOiBcInJlZC1iZ1wiLFxuICAgICAgICBkaXNwbGF5TGVuZ3RoOiAxMDAwMCxcbiAgICAgICAgaHRtbDogbWVzc2FnZSxcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=