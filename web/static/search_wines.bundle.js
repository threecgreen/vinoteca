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
/******/ 		"search_wines": 0
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
/******/ 	deferredModules.push([8,"vendors"]);
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

/***/ "./front_end/search_wines/SearchWinesApp.tsx":
/*!***************************************************!*\
  !*** ./front_end/search_wines/SearchWinesApp.tsx ***!
  \***************************************************/
/*! exports provided: SearchWinesInput, SearchWinesTextInput, SearchWinesApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWinesInput", function() { return SearchWinesInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWinesTextInput", function() { return SearchWinesTextInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWinesApp", function() { return SearchWinesApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _SearchWinesForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchWinesForm */ "./front_end/search_wines/SearchWinesForm.tsx");
/* harmony import */ var _SearchWinesResults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchWinesResults */ "./front_end/search_wines/SearchWinesResults.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







var SearchWinesInput;
(function (SearchWinesInput) {
    SearchWinesInput[SearchWinesInput["Color"] = 0] = "Color";
    SearchWinesInput[SearchWinesInput["WineType"] = 1] = "WineType";
    SearchWinesInput[SearchWinesInput["Producer"] = 2] = "Producer";
    SearchWinesInput[SearchWinesInput["Region"] = 3] = "Region";
    SearchWinesInput[SearchWinesInput["VitiArea"] = 4] = "VitiArea";
})(SearchWinesInput || (SearchWinesInput = {}));
;
var SearchWinesTextInput;
(function (SearchWinesTextInput) {
    SearchWinesTextInput[SearchWinesTextInput["WineType"] = 0] = "WineType";
    SearchWinesTextInput[SearchWinesTextInput["Producer"] = 1] = "Producer";
    SearchWinesTextInput[SearchWinesTextInput["Region"] = 2] = "Region";
    SearchWinesTextInput[SearchWinesTextInput["VitiArea"] = 3] = "VitiArea";
})(SearchWinesTextInput || (SearchWinesTextInput = {}));
class SearchWinesApp extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = SearchWinesApp.defaultState;
        this.logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_3__["default"](this.constructor.name),
            this.querySearchResults = this.querySearchResults.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onResetClick = this.onResetClick.bind(this);
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], { s: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "page-title" }, "Find a previously purchased wine"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["Btn"], { classes: ["yellow-bg"], onClick: this.onResetClick }, "Reset Filters")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchWinesForm__WEBPACK_IMPORTED_MODULE_5__["SearchWinesForm"], { colorSelection: this.state.colorSelection, wineTypeText: this.state.wineTypeText, producerText: this.state.producerText, regionText: this.state.regionText, vitiAreaText: this.state.vitiAreaText, onInputChange: this.onInputChange }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchWinesResults__WEBPACK_IMPORTED_MODULE_6__["SearchWinesResults"], { results: this.state.results, resultState: this.state.resultState })));
    }
    onInputChange(input, val) {
        switch (input) {
            case SearchWinesInput.Color:
                return this.setState({ colorSelection: val }, this.querySearchResults);
            case SearchWinesInput.WineType:
                return this.setState({ wineTypeText: val }, this.querySearchResults);
            case SearchWinesInput.Producer:
                return this.setState({ producerText: val }, this.querySearchResults);
            case SearchWinesInput.Region:
                return this.setState({ regionText: val }, this.querySearchResults);
            case SearchWinesInput.VitiArea:
                return this.setState({ vitiAreaText: val }, this.querySearchResults);
            default:
                this.logger.logWarning(`Tried to change an unknown property ${input}`);
        }
    }
    onResetClick() {
        this.setState(SearchWinesApp.defaultState);
    }
    querySearchResults() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setState({ resultState: _SearchWinesResults__WEBPACK_IMPORTED_MODULE_6__["ResultState"].Searching });
            const results = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_4__["searchWines"])({
                colorLike: this.state.colorSelection === "Any" ? "" : this.state.colorSelection,
                wineTypeLike: this.state.wineTypeText,
                producerLike: this.state.producerText,
                regionLike: this.state.regionText,
                vitiAreaLike: this.state.vitiAreaText,
            });
            try {
                this.setState({
                    results: results,
                    resultState: _SearchWinesResults__WEBPACK_IMPORTED_MODULE_6__["ResultState"].HasSearched,
                });
            }
            catch (error) {
                this.logger.logError(`"Error fetching search results: ${error}`);
            }
        });
    }
}
SearchWinesApp.defaultState = {
    colorSelection: "",
    wineTypeText: "",
    producerText: "",
    regionText: "",
    vitiAreaText: "",
    resultState: _SearchWinesResults__WEBPACK_IMPORTED_MODULE_6__["ResultState"].HasNotSearched,
    results: [],
};


/***/ }),

/***/ "./front_end/search_wines/SearchWinesForm.tsx":
/*!****************************************************!*\
  !*** ./front_end/search_wines/SearchWinesForm.tsx ***!
  \****************************************************/
/*! exports provided: SearchWinesForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWinesForm", function() { return SearchWinesForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ColorInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ColorInput */ "./components/ColorInput.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_ProducerInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ProducerInput */ "./components/ProducerInput.tsx");
/* harmony import */ var _components_RegionInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/RegionInput */ "./components/RegionInput.tsx");
/* harmony import */ var _components_VitiAreaInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/VitiAreaInput */ "./components/VitiAreaInput.tsx");
/* harmony import */ var _components_WineTypeInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/WineTypeInput */ "./components/WineTypeInput.tsx");
/* harmony import */ var _SearchWinesApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchWinesApp */ "./front_end/search_wines/SearchWinesApp.tsx");








const SearchWinesForm = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { autoComplete: "off" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ColorInput__WEBPACK_IMPORTED_MODULE_1__["ColorInput"], { selection: props.colorSelection, onChange: (v) => props.onInputChange(_SearchWinesApp__WEBPACK_IMPORTED_MODULE_7__["SearchWinesInput"].Color, v), extraChoice: "Any" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WineTypeInput__WEBPACK_IMPORTED_MODULE_6__["WineTypeInput"], { value: props.wineTypeText, onChange: (v) => props.onInputChange(_SearchWinesApp__WEBPACK_IMPORTED_MODULE_7__["SearchWinesInput"].WineType, v) }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProducerInput__WEBPACK_IMPORTED_MODULE_3__["ProducerInput"], { value: props.producerText, onChange: (v) => props.onInputChange(_SearchWinesApp__WEBPACK_IMPORTED_MODULE_7__["SearchWinesInput"].Producer, v) }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RegionInput__WEBPACK_IMPORTED_MODULE_4__["RegionInput"], { value: props.regionText, onChange: (v) => props.onInputChange(_SearchWinesApp__WEBPACK_IMPORTED_MODULE_7__["SearchWinesInput"].Region, v), producerText: props.producerText }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_VitiAreaInput__WEBPACK_IMPORTED_MODULE_5__["VitiAreaInput"], { value: props.vitiAreaText, onChange: (v) => props.onInputChange(_SearchWinesApp__WEBPACK_IMPORTED_MODULE_7__["SearchWinesInput"].VitiArea, v), regionText: props.regionText }))));
};
SearchWinesForm.displayName = "SearchWinesForm";


/***/ }),

/***/ "./front_end/search_wines/SearchWinesResult.tsx":
/*!******************************************************!*\
  !*** ./front_end/search_wines/SearchWinesResult.tsx ***!
  \******************************************************/
/*! exports provided: SearchWinesResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWinesResult", function() { return SearchWinesResult; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TableCells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TableCells */ "./components/TableCells.tsx");


class SearchWinesResult extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        const result = this.props.result;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_1__["ColorCell"], { color: result.color }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_1__["NameAndTypeCell"], { id: result.id, name: result.name, wineType: result.wineType, url: `/wines/${result.id}/new-purchase/` }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_1__["TextCell"], { text: result.producer }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_1__["TextCell"], { text: result.region }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_1__["TextCell"], { text: result.vitiArea }));
    }
}


/***/ }),

/***/ "./front_end/search_wines/SearchWinesResults.tsx":
/*!*******************************************************!*\
  !*** ./front_end/search_wines/SearchWinesResults.tsx ***!
  \*******************************************************/
/*! exports provided: ResultState, SearchWinesResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultState", function() { return ResultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWinesResults", function() { return SearchWinesResults; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchWinesResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchWinesResult */ "./front_end/search_wines/SearchWinesResult.tsx");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Preloader */ "./components/Preloader.tsx");



var ResultState;
(function (ResultState) {
    ResultState[ResultState["HasNotSearched"] = 0] = "HasNotSearched";
    ResultState[ResultState["Searching"] = 1] = "Searching";
    ResultState[ResultState["HasSearched"] = 2] = "HasSearched";
})(ResultState || (ResultState = {}));
;
const SearchWinesResults = (props) => {
    switch (props.resultState) {
        case ResultState.HasNotSearched:
            return null;
        case ResultState.Searching:
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Preloader__WEBPACK_IMPORTED_MODULE_2__["Preloader"], null));
        case ResultState.HasSearched:
            if (props.results.length === 0) {
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", { id: "no-results" }, "No results found."));
            }
            // TODO: use components
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "highlight responsive-table" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Color"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Name and Type"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Producer"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Region"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Viticultural Area"))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, props.results.map((wine) => {
                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SearchWinesResult__WEBPACK_IMPORTED_MODULE_1__["SearchWinesResult"], { result: wine, key: wine.id }));
                }))));
    }
};
SearchWinesResults.displayName = "SearchWinesResult";


/***/ }),

/***/ "./front_end/search_wines/search_wines.ts":
/*!************************************************!*\
  !*** ./front_end/search_wines/search_wines.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/widgets */ "./lib/widgets.ts");
/* harmony import */ var _SearchWinesApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchWinesApp */ "./front_end/search_wines/SearchWinesApp.tsx");




Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_2__["navbar"])("new-wine-nav");
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_SearchWinesApp__WEBPACK_IMPORTED_MODULE_3__["SearchWinesApp"]), document.getElementById("search_wines-container"));


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

/***/ 8:
/*!******************************************************!*\
  !*** multi ./front_end/search_wines/search_wines.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carter/git/vinoteca/vinoteca/front_end/search_wines/search_wines.ts */"./front_end/search_wines/search_wines.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25zLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbG9ySW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXRlcmlhbEljb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJlbG9hZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y2VySW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVnaW9uSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BlY2lhbENoYXJCdG4udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3BlY2lhbENoYXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYmxlQ2VsbHMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGV4dElucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpdGlBcmVhSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2luZVR5cGVJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRfZW5kL3NlYXJjaF93aW5lcy9TZWFyY2hXaW5lc0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRfZW5kL3NlYXJjaF93aW5lcy9TZWFyY2hXaW5lc0Zvcm0udHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC9zZWFyY2hfd2luZXMvU2VhcmNoV2luZXNSZXN1bHQudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC9zZWFyY2hfd2luZXMvU2VhcmNoV2luZXNSZXN1bHRzLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvc2VhcmNoX3dpbmVzL3NlYXJjaF93aW5lcy50cyIsIndlYnBhY2s6Ly8vLi9saWIvQXBpSGVscGVyLnRzIiwid2VicGFjazovLy8uL2xpYi9Db29raWVzLnRzIiwid2VicGFjazovLy8uL2xpYi9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL1Jlc3RBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL2xpYi93aWRnZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMx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O2dCQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkIsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUNILDRCQUE0QjtRQUM1QixDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN4QjtBQUNMLENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLEVBQVU7SUFDaEMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBRUQsNERBQTREO0FBQ3JELFNBQVMsTUFBTSxDQUFDLGNBQXVCO0lBQzFDLElBQUksY0FBYyxFQUFFO1FBQ2hCLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2RCxnREFBZ0Q7SUFDaEQsSUFBSSx1REFBTyxDQUFDLFdBQVksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqRSxnREFBZ0Q7SUFDaEQsSUFBSSx3REFBUSxDQUFDLFlBQWEsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRCxzREFBc0Q7QUFDL0MsU0FBUyxLQUFLLENBQUMsT0FBZTtJQUNqQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ0osT0FBTyxFQUFFLFFBQVE7UUFDakIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsSUFBSSxFQUFFLE9BQU87S0FDaEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsImZpbGUiOiJzZWFyY2hfd2luZXMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInNlYXJjaF93aW5lc1wiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFs4LFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSUNoaWxkcmVuUHJvcCwgSUNsYXNzZXNQcm9wIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBDb2wgfSBmcm9tIFwiLi9HcmlkXCI7XG5pbXBvcnQgeyBNYXRlcmlhbEljb24gfSBmcm9tIFwiLi9NYXRlcmlhbEljb25cIjtcblxuaW50ZXJmYWNlIElGbG9hdGluZ0J0blByb3BzIGV4dGVuZHMgSUNoaWxkcmVuUHJvcCwgSUNsYXNzZXNQcm9wIHtcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIG9uTW91c2VEb3duPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbn1cblxuZnVuY3Rpb24gY29tYmluZUNsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10gfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuICAgIHJldHVybiAoY2xhc3NlcyB8fCBbXSkuam9pbihcIiBcIik7XG59XG5cbmV4cG9ydCBjb25zdCBGbG9hdGluZ0J0bjogUmVhY3QuRkM8SUZsb2F0aW5nQnRuUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbWJpbmVDbGFzc2VzKHByb3BzLmNsYXNzZXMpO1xuICAgIGNvbnN0IG1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xuICAgICAgICBpZiAocHJvcHMub25Nb3VzZURvd24pIHtcbiAgICAgICAgICAgIHByb3BzLm9uTW91c2VEb3duKGUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb3BzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9eyBgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0bi1mbG9hdGluZyAke2NsYXNzZXN9YCB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgb25DbGljayB9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17IG1vdXNlRG93biB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L2E+XG4gICAgKTtcbn07XG5GbG9hdGluZ0J0bi5kaXNwbGF5TmFtZSA9IFwiRmxvYXRpbmdCdG5cIjtcbkZsb2F0aW5nQnRuLmRlZmF1bHRQcm9wcyA9IHsgb25Nb3VzZURvd246IChfKSA9PiB1bmRlZmluZWQgfTtcblxuaW50ZXJmYWNlIElCdG5Qcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB7XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEJ0bjogUmVhY3QuRkM8SUJ0blByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21iaW5lQ2xhc3Nlcyhwcm9wcy5jbGFzc2VzKTtcbiAgICBjb25zdCBvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcHJvcHMub25DbGljaygpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsgYHJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biAke2NsYXNzZXN9YCB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgb25DbGljayB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuQnRuLmRpc3BsYXlOYW1lID0gXCJCdG5cIjtcblxuaW50ZXJmYWNlIElDYW5jZWxPckNvbmZpcm1Qcm9wcyB7XG4gICAgb25Db25maXJtQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgb25DYW5jZWxDbGljazogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENhbmNlbE9yQ29uZmlybUJ0bnM6IFJlYWN0LkZDPElDYW5jZWxPckNvbmZpcm1Qcm9wcz4gPVxuICAgIChwcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbCBzPXsgMTIgfT5cbiAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcImdyZWVuLWJnXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25Db25maXJtQ2xpY2sgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENvbmZpcm1cbiAgICAgICAgICAgICAgICA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwic2VuZFwiIGNsYXNzTmFtZT1cInJpZ2h0XCIgLz5cbiAgICAgICAgICAgIDwvQnRuPlxuICAgICAgICAgICAgPEJ0biBjbGFzc2VzPXsgW1wicmVkLWJnXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25DYW5jZWxDbGljayB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgPC9Db2w+XG4gICAgKTtcbn1cbkNhbmNlbE9yQ29uZmlybUJ0bnMuZGlzcGxheU5hbWUgPSBcIkNhbmNlbE9yQ29uZmlybUJ0bnNcIjtcbiIsImltcG9ydCB7IEZvcm1TZWxlY3QgfSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyBJQ29sb3IgfSBmcm9tIFwiLi4vbGliL1Jlc3RcIjtcbmltcG9ydCB7IGdldENvbG9ycyB9IGZyb20gXCIuLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgSU9uQ2hhbmdlIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBTZWxlY3RJbnB1dCB9IGZyb20gXCIuL1NlbGVjdElucHV0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJT25DaGFuZ2Uge1xuICAgIHNlbGVjdGlvbjogc3RyaW5nO1xuICAgIGV4dHJhQ2hvaWNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQ29sb3JzU2VsZWN0ID0gKGxvZ2dlcjogTG9nZ2VyLCBleHRyYUNob2ljZT86IHN0cmluZyk6IFtzdHJpbmdbXSwgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MU2VsZWN0RWxlbWVudD5dID0+IHtcbiAgICBjb25zdCBbc2VsZWN0aW9uT3B0aW9ucywgc2V0U2VsZWN0aW9uT3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IHNlbGVjdFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTFNlbGVjdEVsZW1lbnQ+O1xuXG4gICAgY29uc3QgY29uY2F0SWZOb3ROdWxsPSAob3B0aW9uczogc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgIGlmIChleHRyYUNob2ljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtleHRyYUNob2ljZV0uY29uY2F0KG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29sb3JzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvcnM6IElDb2xvcltdID0gYXdhaXQgZ2V0Q29sb3JzKHt9KTtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3Rpb25PcHRpb25zKGNvbmNhdElmTm90TnVsbChjb2xvcnMubWFwKChjb2xvcikgPT4gY29sb3IubmFtZSkpKTtcbiAgICAgICAgICAgICAgICBuZXcgRm9ybVNlbGVjdChzZWxlY3RSZWYuY3VycmVudCEpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFwiRmFpbGVkIHRvIGdldCBjb2xvcnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaENvbG9ycygpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW3NlbGVjdGlvbk9wdGlvbnMsIHNlbGVjdFJlZl1cbn1cblxuZXhwb3J0IGNvbnN0IENvbG9ySW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKENvbG9ySW5wdXQubmFtZSk7XG5cbiAgICBjb25zdCBbc2VsZWN0aW9uT3B0aW9ucywgc2VsZWN0UmVmXSA9IHVzZUNvbG9yc1NlbGVjdChsb2dnZXIsIHByb3BzLmV4dHJhQ2hvaWNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWxlY3RJbnB1dCBuYW1lPVwiQ29sb3JcIlxuICAgICAgICAgICAgcz17IDQgfSBsPXsgMiB9XG4gICAgICAgICAgICBzZWxlY3RSZWY9eyBzZWxlY3RSZWYgfVxuICAgICAgICAgICAgb3B0aW9ucz17IHNlbGVjdGlvbk9wdGlvbnMgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyAodikgPT4gcHJvcHM/Lm9uQ2hhbmdlKHYpIH1cbiAgICAgICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5Db2xvcklucHV0LmRpc3BsYXlOYW1lID0gXCJDb2xvcklucHV0XCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQ2hpbGRyZW5Qcm9wLCBJQ2xhc3Nlc1Byb3AgfSBmcm9tIFwiLi9JUHJvcHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFByb3BzIHtcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbiAgICB4bD86IG51bWJlcjtcbn1cblxudHlwZSBJQWxsR3JpZFByb3BzID0gSUdyaWRQcm9wcyAmIElDbGFzc2VzUHJvcCAmIElDaGlsZHJlblByb3A7XG5cbmZ1bmN0aW9uIGpvaW5DbGFzc2VzKGdyaWQ6IHN0cmluZ1tdLCBjbGFzc2VzPzogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIGxldCBhbGxDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGdyaWQuZm9yRWFjaCgoZ2MpID0+IHtcbiAgICAgICAgaWYgKGdjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFsbENsYXNzZXMucHVzaChnYyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBhbGxDbGFzc2VzID0gYWxsQ2xhc3Nlcy5jb25jYXQoY2xhc3NlcyB8fCBbXSk7XG4gICAgcmV0dXJuIGFsbENsYXNzZXMuam9pbihcIiBcIik7XG59XG5cbmZ1bmN0aW9uIGdyaWRDbGFzc2VzKHByb3BzOiBJQWxsR3JpZFByb3BzKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHNDbGFzcyA9IHByb3BzLnMgPyBgcyR7cHJvcHMuc31gIDogXCJcIjtcbiAgICBjb25zdCBtQ2xhc3MgPSBwcm9wcy5tID8gYG0ke3Byb3BzLm19YCA6IFwiXCI7XG4gICAgY29uc3QgbENsYXNzID0gcHJvcHMubCA/IGBsJHtwcm9wcy5sfWAgOiBcIlwiO1xuICAgIGNvbnN0IHhsQ2xhc3MgPSBwcm9wcy54bCA/IGB4bCR7cHJvcHMueGx9YCA6IFwiXCI7XG4gICAgcmV0dXJuIFtzQ2xhc3MsIG1DbGFzcywgbENsYXNzLCB4bENsYXNzXTtcbn1cblxuY29uc3QgR3JpZENvbXBvbmVudEZhY3RvcnkgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIGRpc3BsYXlOYW1lOiBzdHJpbmcpOiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50OiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IChwcm9wczogSUFsbEdyaWRQcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBvdGhlckNsYXNzZXMgPSBqb2luQ2xhc3NlcyhncmlkQ2xhc3Nlcyhwcm9wcyksIHByb3BzLmNsYXNzZXMpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgJHtjbGFzc05hbWV9ICR7b3RoZXJDbGFzc2VzfWAgfT5cbiAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG4gICAgY29tcG9uZW50LmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGNvbnN0IFJvdzogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcInJvd1wiLCBcIlJvd1wiKTtcblxuZXhwb3J0IGNvbnN0IENvbDogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcImNvbFwiLCBcIkNvbFwiKTtcblxuZXhwb3J0IGNvbnN0IElucHV0RmllbGQ6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0gR3JpZENvbXBvbmVudEZhY3RvcnkoXCJjb2wgaW5wdXQtZmllbGRcIiwgXCJJbnB1dEZpZWxkXCIpXG4iLCJpbXBvcnQgTSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBuYW1lVG9JZCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi9HcmlkXCI7XG5cbnR5cGUgSUlucHV0VmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXTtcblxuZXhwb3J0IGludGVyZmFjZSBJSW5wdXRQcm9wczxUIGV4dGVuZHMgSUlucHV0VmFsdWU+IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdmFsdWU6IFQ7XG4gICAgZW5hYmxlZDogYm9vbGVhbjtcbiAgICBjbGFzc05hbWU6IHN0cmluZztcbiAgICBvbkNoYW5nZTogKHZhbDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uRm9jdXM6ICgpID0+IHZvaWQ7XG4gICAgb25CbHVyOiAoKSA9PiB2b2lkO1xuICAgIGlucHV0UmVmPzogUmVhY3QuUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICAgIGlucHV0VHlwZT86IHN0cmluZztcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIHN0ZXA/OiBzdHJpbmc7XG4gICAgbWF4PzogbnVtYmVyO1xuICAgIG1pbj86IG51bWJlcjtcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIElucHV0PFUgZXh0ZW5kcyBJSW5wdXRWYWx1ZT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUlucHV0UHJvcHM8VT4+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgb25DaGFuZ2U6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgb25Gb2N1czogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBvbkJsdXI6IChfOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gbmFtZVRvSWQodGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbnB1dEZpZWxkIHM9eyB0aGlzLnByb3BzLnMgfSBtPXsgdGhpcy5wcm9wcy5tIH0gbD17IHRoaXMucHJvcHMubCB9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17IGlkIH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17IGlkIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5jbGFzc05hbWUgfVxuICAgICAgICAgICAgICAgICAgICByZWY9eyB0aGlzLnByb3BzLmlucHV0UmVmIH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17IHRoaXMucHJvcHMuaW5wdXRUeXBlIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyAhdGhpcy5wcm9wcy5lbmFibGVkIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnByb3BzLnZhbHVlIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gdGhpcy5vbkNoYW5nZShlKSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMucHJvcHMub25CbHVyIH1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17IHRoaXMucHJvcHMub25Gb2N1cyB9XG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9eyB0aGlzLnByb3BzLnN0ZXAgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyB0aGlzLnByb3BzLm1pbiB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IHRoaXMucHJvcHMubWF4IH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwiIH0gaHRtbEZvcj17IGlkIH0+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5uYW1lIH1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9JbnB1dEZpZWxkPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBpY29uTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTWF0ZXJpYWxJY29uOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgIDxpIGNsYXNzTmFtZT17IGBtYXRlcmlhbC1pY29ucyAke3Byb3BzLmNsYXNzTmFtZX1gIH0+XG4gICAgICAgICAgICB7IHByb3BzLmljb25OYW1lIH1cbiAgICAgICAgPC9pPlxuICAgICk7XG59O1xuTWF0ZXJpYWxJY29uLmRpc3BsYXlOYW1lID0gXCJNYXRlcmlhbEljb25cIjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyOiBSZWFjdC5GQzx7fT4gPSAoXykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXRlcm1pbmF0ZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuUHJlbG9hZGVyLmRpc3BsYXlOYW1lID0gXCJQcmVsb2FkZXJcIjtcblxuZXhwb3J0IGNvbnN0IFByZWxvYWRlckNpcmM6IFJlYWN0LkZDPHt9PiA9IChfKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVsb2FkZXItd3JhcHBlciBhY3RpdmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1sYXllclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiZ2FwLXBhdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+PGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5QcmVsb2FkZXJDaXJjLmRpc3BsYXlOYW1lID0gXCJQcmVsb2FkZXJDaXJjXCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyBJUHJvZHVjZXIgfSBmcm9tIFwiLi4vbGliL1Jlc3RcIjtcbmltcG9ydCB7IGdldFByb2R1Y2VycywgdG9EaWN0IH0gZnJvbSBcIi4uL2xpYi9SZXN0QXBpXCI7XG5pbXBvcnQgeyBhdXRvY29tcGxldGUgfSBmcm9tIFwiLi4vbGliL3dpZGdldHNcIjtcbmltcG9ydCB7IElPbkNoYW5nZSB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSBcIi4vVGV4dElucHV0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJT25DaGFuZ2Uge1xuICAgIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBQcm9kdWNlcklucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHt2YWx1ZSwgb25DaGFuZ2V9KSA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihQcm9kdWNlcklucHV0Lm5hbWUpO1xuICAgIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZHVjZXJzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWNlcnM6IElQcm9kdWNlcltdID0gYXdhaXQgZ2V0UHJvZHVjZXJzKHt9KTtcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGUoaW5wdXRSZWYsIHRvRGljdChwcm9kdWNlcnMpLCBvbkNoYW5nZSk7XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHByb2R1Y2VyIGF1dG9jb21wbGV0ZSBvcHRpb25zXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hQcm9kdWNlcnMoKTtcbiAgICB9LCBbaW5wdXRSZWZdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0SW5wdXQgbmFtZT1cIlByb2R1Y2VyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICBzPXsgNiB9IGw9eyAzIH1cbiAgICAgICAgICAgIGlucHV0UmVmPXsgaW5wdXRSZWYgfVxuICAgICAgICAgICAgdmFsdWU9eyB2YWx1ZSB9XG4gICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlIH1cbiAgICAgICAgLz5cbiAgICApXG59O1xuUHJvZHVjZXJJbnB1dC5kaXNwbGF5TmFtZSA9IFwiUHJvZHVjZXJJbnB1dFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vbGliL0xvZ2dlclwiO1xuaW1wb3J0IHsgSVJlZ2lvbiB9IGZyb20gXCIuLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgRW1wdHlSZXN1bHRFcnJvciwgZ2V0UmVnaW9ucywgdG9EaWN0IH0gZnJvbSBcIi4uL2xpYi9SZXN0QXBpXCI7XG5pbXBvcnQgeyBJRGljdCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IGF1dG9jb21wbGV0ZSB9IGZyb20gXCIuLi9saWIvd2lkZ2V0c1wiO1xuaW1wb3J0IHsgSU9uQ2hhbmdlIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tIFwiLi9UZXh0SW5wdXRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIElPbkNoYW5nZSB7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBwcm9kdWNlclRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBSZWdpb25JbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9ICh7dmFsdWUsIHByb2R1Y2VyVGV4dCwgb25DaGFuZ2V9KSA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihSZWdpb25JbnB1dC5uYW1lKTtcblxuICAgIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcblxuICAgIC8vIEdldCBhdXRvY29tcGxldGUgb3B0aW9uc1xuICAgIGNvbnN0IFthdXRvY29tcGxldGVPcHRpb25zLCBzZXRBdXRvY29tcGxldGVPcHRpb25zXSA9IFJlYWN0LnVzZVN0YXRlPElEaWN0PHN0cmluZyB8IG51bGw+Pih7fSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBdXRvY29tcGxldGVPcHRpb25zKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdpb25zOiBJUmVnaW9uW10gPSBhd2FpdCBnZXRSZWdpb25zKHt9KTtcbiAgICAgICAgICAgICAgICBzZXRBdXRvY29tcGxldGVPcHRpb25zKHRvRGljdChyZWdpb25zKSk7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlKGlucHV0UmVmLCBhdXRvY29tcGxldGVPcHRpb25zLCBvbkNoYW5nZSk7XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHJlZ2lvbiBhdXRvY29tcGxldGUgb3B0aW9uc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaEF1dG9jb21wbGV0ZU9wdGlvbnMoKTtcbiAgICB9LCBbaW5wdXRSZWYsIHNldEF1dG9jb21wbGV0ZU9wdGlvbnNdKTtcblxuICAgIGNvbnN0IFtlbmFibGVkLCBzZXRFbmFibGVkXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuXG4gICAgLy8gVHJ5IHRvIGdldCByZWdpb24gZnJvbSBwcm9kdWNlciBpbnB1dC4gSWYgZm91bmQsIGxvY2sgYW5kIHNldCB2YWx1ZVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZHVjZXJSZWdpb24oKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2dJbmZvKFwiVXBkYXRpbmcgcmVnaW9uIGF1dG9jb21wbGV0ZSBvcHRpb25zXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2lvbnMgPSBhd2FpdCBnZXRSZWdpb25zKHtwcm9kdWNlck5hbWU6IHByb2R1Y2VyVGV4dH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZWdpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShyZWdpb25zWzBdLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRFbmFibGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRFbmFibGVkKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgZW1wdHkgcmVzdWx0IGVycm9yc1xuICAgICAgICAgICAgICAgIGlmICghRW1wdHlSZXN1bHRFcnJvci5pc0luc3RhbmNlKGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2dXYXJuaW5nKGBFcnJvciBmZXRjaGluZyByZWdpb25zIGJhc2VkIG9uIHByb2R1Y2VyLiAke2V9YCk7XG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9kdWNlclRleHQpIHtcbiAgICAgICAgICAgIGZldGNoUHJvZHVjZXJSZWdpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEVuYWJsZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvZHVjZXJUZXh0LCBzZXRFbmFibGVkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJSZWdpb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgIHM9eyA2IH0gbD17IDMgfVxuICAgICAgICAgICAgZW5hYmxlZD17IGVuYWJsZWQgfVxuICAgICAgICAgICAgdmFsdWU9eyB2YWx1ZSB9XG4gICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUmVnaW9uSW5wdXQuZGlzcGxheU5hbWUgPSBcIlJlZ2lvbklucHV0XCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsIG5hbWVUb0lkIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gXCIuL0dyaWRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG9wdGlvbnM6IHN0cmluZ1tdO1xuICAgIHNlbGVjdGlvbjogc3RyaW5nO1xuICAgIHNlbGVjdFRleHQ/OiBzdHJpbmc7XG4gICAgc2VsZWN0UmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTFNlbGVjdEVsZW1lbnQ+O1xuICAgIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgcz86IG51bWJlcjtcbiAgICBtPzogbnVtYmVyO1xuICAgIGw/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGlkID0gbmFtZVRvSWQocHJvcHMubmFtZSk7XG4gICAgbGV0IHNlbGVjdFRleHQ6IEpTWC5FbGVtZW50IHwgdW5kZWZpbmVkO1xuICAgIGlmIChwcm9wcy5zZWxlY3RUZXh0KSB7XG4gICAgICAgIHNlbGVjdFRleHQgPSA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICB7IHByb3BzLnNlbGVjdFRleHQgfVxuICAgICAgICA8L29wdGlvbj47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dEZpZWxkIHM9eyBwcm9wcy5zIH0gbT17IHByb3BzLm0gfSBsPXsgcHJvcHMubCB9PlxuICAgICAgICAgICAgPHNlbGVjdCBpZD17IGlkIH1cbiAgICAgICAgICAgICAgICBuYW1lPXsgaWQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKSB9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwcm9wcy5zZWxlY3Rpb24gfHwgcHJvcHMuc2VsZWN0VGV4dCB9XG4gICAgICAgICAgICAgICAgcmVmPXsgcHJvcHMuc2VsZWN0UmVmIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7IHNlbGVjdFRleHQgfVxuICAgICAgICAgICAgICAgIHsgcHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17IG9wdGlvbiB9IGtleT17IG9wdGlvbiB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKG9wdGlvbikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXsgaWQgfT57IHByb3BzLm5hbWUgfTwvbGFiZWw+XG4gICAgICAgIDwvSW5wdXRGaWVsZD5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZsb2F0aW5nQnRuIH0gZnJvbSBcIi4vQnV0dG9uc1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBvbkNsaWNrOiAoY2hhcjogc3RyaW5nKSA9PiB2b2lkO1xuICAgIGNoYXI6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFNwZWNpYWxDaGFyQnRuOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtcImJ0bi1zbWFsbFwiLCBcImNlbnRlclwiLCBcInNwZWMtY2hhci1idG5cIl07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsb2F0aW5nQnRuIGNsYXNzZXM9eyBjbGFzc2VzIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBudWxsIH1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsgKCkgPT4gcHJvcHMub25DbGljayhwcm9wcy5jaGFyKSB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsgcHJvcHMuY2hhciB9XG4gICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGbG9hdGluZ0J0biB9IGZyb20gXCIuL0J1dHRvbnNcIjtcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuL0dyaWRcIjtcbmltcG9ydCB7IFNwZWNpYWxDaGFyQnRuIH0gZnJvbSBcIi4vU3BlY2lhbENoYXJCdG5cIjtcblxuZW51bSBDYXNlIHtcbiAgICBVcHBlcixcbiAgICBMb3dlcixcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgb25DbGljazogKGNoYXI6IHN0cmluZykgPT4gdm9pZDtcbiAgICBjbGFzc2VzPzogc3RyaW5nW107XG4gICAgZGlzcGxheTogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgY2hhcnM6IHN0cmluZ1tdO1xuICAgIGN1cnJlbnRDYXNlOiBDYXNlO1xufVxuXG5leHBvcnQgY2xhc3MgU3BlY2lhbENoYXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG4gICAgcHVibGljIHN0YXRpYyBpbnNlcnRDaGFyQXQodmFsOiBzdHJpbmcsIGNoYXI6IHN0cmluZywgcG9zaXRpb246IG51bWJlcikge1xuICAgICAgICBpZiAoaXNOYU4ocG9zaXRpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsICsgY2hhcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsLnN1YnN0cigwLCBwb3NpdGlvbikgKyBjaGFyICsgdmFsLnN1YnN0cihwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFyczogW1xuICAgICAgICAgICAgICAgIFwiw6BcIiwgXCLDoVwiLCBcIsOiXCIsIFwiw6NcIiwgXCLDplwiLCBcIsSNXCIsIFwiw6dcIiwgXCLDqFwiLCBcIsOpXCIsIFwiw6pcIiwgXCLDq1wiLCBcIsOtXCIsIFwiw65cIixcbiAgICAgICAgICAgICAgICBcIsOvXCIsIFwiw7FcIiwgXCLDs1wiLCBcIsO0XCIsIFwiw7VcIiwgXCLFk1wiLCBcIsWhXCIsIFwiw7lcIiwgXCLDulwiLCBcIsO7XCIsIFwiw7xcIiwgXCLFvlwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGN1cnJlbnRDYXNlOiBDYXNlLkxvd2VyLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXCJzcGVjaWFsLWNoYXJzXCJdO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNwbGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3Nlcz17IGNsYXNzZXMuY29uY2F0KHRoaXMucHJvcHMuY2xhc3NlcyA/PyBbXSkgfT5cbiAgICAgICAgICAgICAgICAgICAgey8qIFNoaWZ0IGJ1dHRvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nQnRuIGNsYXNzZXM9eyBbXCJjZW50ZXJcIiwgXCJncmVlbi1iZ1wiLCBcInNoaWZ0LWJ0blwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17IHRoaXMuaGFuZGxlU2hpZnQuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5jdXJyZW50Q2FzZSA9PT0gQ2FzZS5Mb3dlciA/IFwi4oaRXCIgOiBcIuKGk1wiIH1cbiAgICAgICAgICAgICAgICAgICAgPC9GbG9hdGluZ0J0bj5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmNoYXJzLm1hcCgoY2hhcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlY2lhbENoYXJCdG4gY2hhcj17IGNoYXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyBjaGFyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IChjKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soYykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KSB9XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVTaGlmdCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5jdXJyZW50Q2FzZSA9PT0gQ2FzZS5Mb3dlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJzOiBzdGF0ZS5jaGFycy5tYXAoKGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSksXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXNlOiBDYXNlLlVwcGVyLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNoYXJzOiBzdGF0ZS5jaGFycy5tYXAoKGNoYXIpID0+IGNoYXIudG9Mb3dlckNhc2UoKSksXG4gICAgICAgICAgICAgICAgY3VycmVudENhc2U6IENhc2UuTG93ZXIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiIsImltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2VzbS9mb3JtYXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciwgRU5fREFTSCwgZ2V0TmFtZUFuZFR5cGUsIG51bVRvRGF0ZSB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcblxuaW50ZXJmYWNlIElUZXh0Q2VsbFByb3BzIHtcbiAgICBkZWZhdWx0Pzogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0Q2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJVGV4dENlbGxQcm9wcz4ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkZWZhdWx0OiBcIlwiLFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8dGQ+eyB0aGlzLnByb3BzLnRleHQgPz8gdGhpcy5wcm9wcy5kZWZhdWx0IH08L3RkPjtcbiAgICB9XG59O1xuXG5pbnRlcmZhY2UgSU51bUNlbGxQcm9wcyB7XG4gICAgbnVtOiBudW1iZXIgfCBudWxsO1xuICAgIG1pbkRlY2ltYWxzPzogbnVtYmVyO1xuICAgIG1heERlY2ltYWxzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgTnVtQ2VsbDogUmVhY3QuRkM8SU51bUNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBudW0gPSBwcm9wcy5udW1cbiAgICAgICAgLy8gdW5kZWZpbmVkIHRvIHVzZSBicm93c2VyJ3MgbG9jYWxlXG4gICAgICAgID8gcHJvcHMubnVtLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21pbmltdW1GcmFjdGlvbkRpZ2l0czogcHJvcHMubWluRGVjaW1hbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHByb3BzLm1heERlY2ltYWxzfSlcbiAgICAgICAgOiBFTl9EQVNIO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJudW0tY29sXCI+eyBudW0gfTwvdGQ+XG4gICAgKTtcbn07XG5OdW1DZWxsLmRpc3BsYXlOYW1lID0gXCJOdW1DZWxsXCI7XG5cbmludGVyZmFjZSBJUHJpY2VDZWxsUHJvcHMge1xuICAgIHByaWNlOiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgUHJpY2VDZWxsOiBSZWFjdC5GQzxJUHJpY2VDZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE51bUNlbGwgbnVtPXsgcHJvcHMucHJpY2UgfVxuICAgICAgICAgICAgbWluRGVjaW1hbHM9eyAyIH1cbiAgICAgICAgICAgIG1heERlY2ltYWxzPXsgMiB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblByaWNlQ2VsbC5kaXNwbGF5TmFtZSA9IFwiUHJpY2VDZWxsXCI7XG5cbmV4cG9ydCBjb25zdCBZZWFyQ2VsbDogUmVhY3QuRkM8e3llYXI6IG51bWJlciB8IG51bGx9PiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHllYXIgPSBwcm9wcy55ZWFyPy50b1N0cmluZygpID8/IFwiTlZcIjtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwibnVtLWNvbFwiPlxuICAgICAgICAgICAgeyB5ZWFyIH1cbiAgICAgICAgPC90ZD5cbiAgICApO1xufVxuWWVhckNlbGwuZGlzcGxheU5hbWUgPSBcIlllYXJDZWxsXCI7XG5cbmludGVyZmFjZSBJRGF0ZUNlbGxQcm9wcyB7XG4gICAgZGF0ZTogbnVtYmVyIHwgbnVsbDtcbiAgICBmb3JtYXQ/OiBzdHJpbmc7XG59XG5leHBvcnQgY29uc3QgRGF0ZUNlbGw6IFJlYWN0LkZDPElEYXRlQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGRhdGVTdHIgPSBwcm9wcy5kYXRlID8gZm9ybWF0KG51bVRvRGF0ZShwcm9wcy5kYXRlKSwgcHJvcHMuZm9ybWF0ID8/IFwiTU1NIGRkLCB5eXl5XCIpIDogRU5fREFTSDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQ+eyBkYXRlU3RyIH08L3RkPlxuICAgICk7XG59XG5EYXRlQ2VsbC5kaXNwbGF5TmFtZSA9IFwiRGF0ZUNlbGxcIjtcblxuaW50ZXJmYWNlIElDb2xvckNlbGxQcm9wcyB7XG4gICAgY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IENvbG9yQ2VsbDogUmVhY3QuRkM8SUNvbG9yQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGlmIChwcm9wcy5jb2xvcikge1xuICAgICAgICByZXR1cm4gPHRkPnsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHByb3BzLmNvbG9yKSB9PC90ZD47XG4gICAgfVxuICAgIHJldHVybiA8dGQgLz47XG59O1xuQ29sb3JDZWxsLmRpc3BsYXlOYW1lID0gXCJDb2xvckNlbGxcIjtcblxuaW50ZXJmYWNlIElMaW5rZWRDZWxsUHJvcHMge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbW9kZWw6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IExpbmtlZENlbGw6IFJlYWN0LkZDPElMaW5rZWRDZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgdXJsID0gYC8ke3Byb3BzLm1vZGVsfS8ke3Byb3BzLmlkfWA7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGEgaHJlZj17IHVybCB9PlxuICAgICAgICAgICAgICAgIHsgcHJvcHMubmFtZSB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvdGQ+XG4gICAgKVxufVxuTGlua2VkQ2VsbC5kaXNwbGF5TmFtZSA9IFwiTGlua2VkQ2VsbFwiXG5cbmludGVyZmFjZSBJTmFtZUFuZFR5cGVQcm9wcyB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmcgfCBudWxsO1xuICAgIHdpbmVUeXBlOiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTmFtZUFuZFR5cGVDZWxsOiBSZWFjdC5GQzxJTmFtZUFuZFR5cGVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBpZiAocHJvcHMudXJsKSB7XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxhIGhyZWY9eyBwcm9wcy51cmwgfT5cbiAgICAgICAgICAgICAgICB7IGdldE5hbWVBbmRUeXBlKHByb3BzLm5hbWUsIHByb3BzLndpbmVUeXBlKSB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvdGQ+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJ3aW5lc1wiXG4gICAgICAgICAgICBuYW1lPXsgZ2V0TmFtZUFuZFR5cGUocHJvcHMubmFtZSwgcHJvcHMud2luZVR5cGUpIH1cbiAgICAgICAgLz5cbiAgICApO1xufTtcbk5hbWVBbmRUeXBlQ2VsbC5kaXNwbGF5TmFtZSA9IFwiTmFtZUFuZFR5cGVDZWxsXCI7XG5cbmV4cG9ydCBjb25zdCBQcm9kdWNlckNlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmd9PiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJwcm9kdWNlcnNcIlxuICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5Qcm9kdWNlckNlbGwuZGlzcGxheU5hbWUgPSBcIlByb2R1Y2VyQ2VsbFwiXG5cbmV4cG9ydCBjb25zdCBSZWdpb25DZWxsOiBSZWFjdC5GQzx7aWQ6IG51bWJlciwgbmFtZTogc3RyaW5nfT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwicmVnaW9uc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblJlZ2lvbkNlbGwuZGlzcGxheU5hbWUgPSBcIlJlZ2lvbkNlbGxcIlxuXG5leHBvcnQgY29uc3QgVml0aUFyZWFDZWxsOiBSZWFjdC5GQzx7aWQ6IG51bWJlciB8IG51bGwsIG5hbWU6IHN0cmluZyB8IG51bGx9PiA9IChwcm9wcykgPT4ge1xuICAgIGlmICghcHJvcHMuaWQgfHwgIXByb3BzLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIDx0ZCAvPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cInZpdGktYXJlYXNcIlxuICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5WaXRpQXJlYUNlbGwuZGlzcGxheU5hbWUgPSBcIlZpdGlBcmVhQ2VsbFwiXG5cbmV4cG9ydCBjb25zdCBXaW5lVHlwZUNlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmd9PiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJ3aW5lLXR5cGVzXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuV2luZVR5cGVDZWxsLmRpc3BsYXlOYW1lID0gXCJXaW5lVHlwZUNlbGxcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCB7IFNwZWNpYWxDaGFycyB9IGZyb20gXCIuL1NwZWNpYWxDaGFyc1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBlbmFibGVkPzogYm9vbGVhbjtcbiAgICBvbkNoYW5nZTogKHZhbDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uRm9jdXM/OiAoKSA9PiB2b2lkO1xuICAgIG9uQmx1cj86ICgpID0+IHZvaWQ7XG4gICAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gICAgcz86IG51bWJlcjtcbiAgICBtPzogbnVtYmVyO1xuICAgIGw/OiBudW1iZXI7XG4gICAgaW5wdXRSZWY/OiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xufVxuXG5leHBvcnQgY29uc3QgVGV4dElucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW3RpbWVzdGFtcCwgX10gPSBSZWFjdC51c2VTdGF0ZShuZXcgRGF0ZSgpKTtcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBpbnB1dFJlZiA9IHByb3BzLmlucHV0UmVmID8/IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG5cbiAgICBjb25zdCBvblNwZWNpYWxDaGFyQ2xpY2sgPSAoY2hhcjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldElzQWN0aXZlKHRydWUpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGlucHV0UmVmLmN1cnJlbnQ/LnNlbGVjdGlvblN0YXJ0ID8/IE5hTjtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UoU3BlY2lhbENoYXJzLmluc2VydENoYXJBdChwcm9wcy52YWx1ZSwgY2hhciwgcG9zaXRpb24pKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGlucHV0UmVmLmN1cnJlbnQuc2V0U2VsZWN0aW9uUmFuZ2UocG9zaXRpb24gKyAxLCBwb3NpdGlvbiArIDEpLCAxMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAobm93IC0gdGltZXN0YW1wID4gMTAwKSB7XG4gICAgICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvcHMub25CbHVyPy4oKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XG4gICAgICAgIHByb3BzLm9uQ2hhbmdlKHZhbCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25Gb2N1cyA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XG4gICAgICAgIHByb3BzLm9uRm9jdXM/LigpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SW5wdXQgaW5wdXRUeXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcHJvcHMudmFsdWUgfVxuICAgICAgICAgICAgICAgIGVuYWJsZWQ9eyBwcm9wcy5lbmFibGVkIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWwpID0+IG9uQ2hhbmdlKHZhbCkgfVxuICAgICAgICAgICAgICAgIG9uQmx1cj17IG9uQmx1ciB9XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17IG9uRm9jdXMgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IHByb3BzLmNsYXNzTmFtZSB9XG4gICAgICAgICAgICAgICAgcz17IHByb3BzLnMgfSBtPXsgcHJvcHMubSB9IGw9eyBwcm9wcy5sIH1cbiAgICAgICAgICAgICAgICBpbnB1dFJlZj17IGlucHV0UmVmIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3BlY2lhbENoYXJzXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17IFtcImlubGluZS1ibG9ja1wiXSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IChjKSA9PiBvblNwZWNpYWxDaGFyQ2xpY2soYykgfVxuICAgICAgICAgICAgICAgIGRpc3BsYXk9eyBpc0FjdGl2ZSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuVGV4dElucHV0LmRpc3BsYXlOYW1lID0gXCJUZXh0SW5wdXRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElWaXRpQXJlYSB9IGZyb20gXCIuLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgZ2V0Vml0aUFyZWFzLCB0b0RpY3QgfSBmcm9tIFwiLi4vbGliL1Jlc3RBcGlcIjtcbmltcG9ydCB7IGF1dG9jb21wbGV0ZSB9IGZyb20gXCIuLi9saWIvd2lkZ2V0c1wiO1xuaW1wb3J0IHsgSU9uQ2hhbmdlIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tIFwiLi9UZXh0SW5wdXRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIElPbkNoYW5nZSB7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICByZWdpb25UZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgVml0aUFyZWFJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9ICh7dmFsdWUsIHJlZ2lvblRleHQsIG9uQ2hhbmdlfSkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoVml0aUFyZWFJbnB1dC5uYW1lKTtcbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFZpdGlBcmVhcygpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgdml0aUFyZWFzOiBJVml0aUFyZWFbXSA9IGF3YWl0IGdldFZpdGlBcmVhcyh7cmVnaW9uTmFtZTogcmVnaW9uVGV4dH0pO1xuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZShpbnB1dFJlZiwgdG9EaWN0KHZpdGlBcmVhcyksIG9uQ2hhbmdlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHZpdGkgYXJlYSBhdXRvY29tcGxldGUgb3B0aW9uc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoVml0aUFyZWFzKCk7XG4gICAgfSwgW2lucHV0UmVmLCByZWdpb25UZXh0XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJWaXRpIEFyZWFcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgIGlucHV0UmVmPXsgaW5wdXRSZWYgfVxuICAgICAgICAgICAgcz17IDggfSBsPXsgNCB9XG4gICAgICAgICAgICB2YWx1ZT17IHZhbHVlIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5WaXRpQXJlYUlucHV0LmRpc3BsYXlOYW1lID0gXCJWaXRpQXJlYUlucHV0XCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJV2luZVR5cGUgfSBmcm9tIFwiLi4vbGliL1Jlc3RcIjtcbmltcG9ydCB7IGdldFdpbmVUeXBlcywgdG9EaWN0IH0gZnJvbSBcIi4uL2xpYi9SZXN0QXBpXCI7XG5pbXBvcnQgeyBhdXRvY29tcGxldGUgfSBmcm9tIFwiLi4vbGliL3dpZGdldHNcIjtcbmltcG9ydCB7IElPbkNoYW5nZSB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSBcIi4vVGV4dElucHV0XCI7XG5cbmludGVyZmFjZSBJV2luZVR5cGVJbnB1dFByb3BzIGV4dGVuZHMgSU9uQ2hhbmdlIHtcbiAgICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgV2luZVR5cGVJbnB1dDogUmVhY3QuRkM8SVdpbmVUeXBlSW5wdXRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFdpbmVUeXBlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpbmVUeXBlczogSVdpbmVUeXBlW10gPSBhd2FpdCBnZXRXaW5lVHlwZXMoe30pO1xuICAgICAgICAgICAgYXV0b2NvbXBsZXRlKGlucHV0UmVmLCB0b0RpY3Qod2luZVR5cGVzKSwgcHJvcHMub25DaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGZldGNoV2luZVR5cGVzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHRJbnB1dCBuYW1lPVwiV2luZSBUeXBlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICBzPXsgOCB9IGw9eyA0IH1cbiAgICAgICAgICAgIHZhbHVlPXsgcHJvcHMudmFsdWUgfVxuICAgICAgICAgICAgaW5wdXRSZWY9eyBpbnB1dFJlZiB9XG4gICAgICAgICAgICBvbkZvY3VzPXsgcHJvcHMub25Gb2N1cyB9XG4gICAgICAgICAgICBvbkNoYW5nZT17IHByb3BzLm9uQ2hhbmdlIH1cbiAgICAgICAgICAgIG9uQmx1cj17IHByb3BzLm9uQmx1ciB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cbldpbmVUeXBlSW5wdXQuZGlzcGxheU5hbWUgPSBcIldpbmVUeXBlSW5wdXRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ0biB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvbnNcIjtcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyaWRcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uLy4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElXaW5lIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBzZWFyY2hXaW5lcyB9IGZyb20gXCIuLi8uLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgU2VhcmNoV2luZXNGb3JtIH0gZnJvbSBcIi4vU2VhcmNoV2luZXNGb3JtXCI7XG5pbXBvcnQgeyBSZXN1bHRTdGF0ZSwgU2VhcmNoV2luZXNSZXN1bHRzIH0gZnJvbSBcIi4vU2VhcmNoV2luZXNSZXN1bHRzXCI7XG5cbmV4cG9ydCBlbnVtIFNlYXJjaFdpbmVzSW5wdXQge1xuICAgIENvbG9yLFxuICAgIFdpbmVUeXBlLFxuICAgIFByb2R1Y2VyLFxuICAgIFJlZ2lvbixcbiAgICBWaXRpQXJlYSxcbn07XG5cbmV4cG9ydCBlbnVtIFNlYXJjaFdpbmVzVGV4dElucHV0IHtcbiAgICBXaW5lVHlwZSxcbiAgICBQcm9kdWNlcixcbiAgICBSZWdpb24sXG4gICAgVml0aUFyZWEsXG59XG5cbmludGVyZmFjZSBJU2VhcmNoV2luZXNBcHBTdGF0ZSB7XG4gICAgY29sb3JTZWxlY3Rpb246IHN0cmluZztcbiAgICB3aW5lVHlwZVRleHQ6IHN0cmluZztcbiAgICBwcm9kdWNlclRleHQ6IHN0cmluZztcbiAgICByZWdpb25UZXh0OiBzdHJpbmc7XG4gICAgdml0aUFyZWFUZXh0OiBzdHJpbmc7XG4gICAgcmVzdWx0U3RhdGU6IFJlc3VsdFN0YXRlO1xuICAgIHJlc3VsdHM6IElXaW5lW107XG4gICAgbGFzdEFjdGl2ZVRleHRJbnB1dD86IFNlYXJjaFdpbmVzVGV4dElucHV0O1xufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoV2luZXNBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElTZWFyY2hXaW5lc0FwcFN0YXRlPiB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZGVmYXVsdFN0YXRlOiBSZWFkb25seTxJU2VhcmNoV2luZXNBcHBTdGF0ZT4gPSB7XG4gICAgICAgICAgICBjb2xvclNlbGVjdGlvbjogXCJcIixcbiAgICAgICAgICAgIHdpbmVUeXBlVGV4dDogXCJcIixcbiAgICAgICAgICAgIHByb2R1Y2VyVGV4dDogXCJcIixcbiAgICAgICAgICAgIHJlZ2lvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICB2aXRpQXJlYVRleHQ6IFwiXCIsXG4gICAgICAgICAgICByZXN1bHRTdGF0ZTogUmVzdWx0U3RhdGUuSGFzTm90U2VhcmNoZWQsXG4gICAgICAgICAgICByZXN1bHRzOiBbXSxcbiAgICAgICAgfTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvZ2dlcjogTG9nZ2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IHt9KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNlYXJjaFdpbmVzQXBwLmRlZmF1bHRTdGF0ZTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHRoaXMuY29uc3RydWN0b3IubmFtZSksXG4gICAgICAgIHRoaXMucXVlcnlTZWFyY2hSZXN1bHRzID0gdGhpcy5xdWVyeVNlYXJjaFJlc3VsdHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SZXNldENsaWNrID0gdGhpcy5vblJlc2V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8Um93IHM9eyAxMiB9PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPkZpbmQgYSBwcmV2aW91c2x5IHB1cmNoYXNlZCB3aW5lPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPEJ0biBjbGFzc2VzPXsgW1wieWVsbG93LWJnXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uUmVzZXRDbGljayB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlc2V0IEZpbHRlcnNcbiAgICAgICAgICAgICAgICAgICAgPC9CdG4+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPFNlYXJjaFdpbmVzRm9ybVxuICAgICAgICAgICAgICAgICAgICBjb2xvclNlbGVjdGlvbj17IHRoaXMuc3RhdGUuY29sb3JTZWxlY3Rpb24gfVxuICAgICAgICAgICAgICAgICAgICB3aW5lVHlwZVRleHQ9eyB0aGlzLnN0YXRlLndpbmVUeXBlVGV4dCB9XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y2VyVGV4dD17IHRoaXMuc3RhdGUucHJvZHVjZXJUZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uVGV4dD17IHRoaXMuc3RhdGUucmVnaW9uVGV4dCB9XG4gICAgICAgICAgICAgICAgICAgIHZpdGlBcmVhVGV4dD17IHRoaXMuc3RhdGUudml0aUFyZWFUZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17IHRoaXMub25JbnB1dENoYW5nZSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2VhcmNoV2luZXNSZXN1bHRzIHJlc3VsdHM9eyB0aGlzLnN0YXRlLnJlc3VsdHMgfVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRTdGF0ZT17IHRoaXMuc3RhdGUucmVzdWx0U3RhdGUgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uSW5wdXRDaGFuZ2UoaW5wdXQ6IFNlYXJjaFdpbmVzSW5wdXQsIHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHN3aXRjaCAoaW5wdXQpIHtcbiAgICAgICAgICAgIGNhc2UgU2VhcmNoV2luZXNJbnB1dC5Db2xvcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGNvbG9yU2VsZWN0aW9uOiB2YWwgfSwgdGhpcy5xdWVyeVNlYXJjaFJlc3VsdHMpO1xuICAgICAgICAgICAgY2FzZSBTZWFyY2hXaW5lc0lucHV0LldpbmVUeXBlOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgd2luZVR5cGVUZXh0OiB2YWwgfSwgdGhpcy5xdWVyeVNlYXJjaFJlc3VsdHMpO1xuICAgICAgICAgICAgY2FzZSBTZWFyY2hXaW5lc0lucHV0LlByb2R1Y2VyOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgcHJvZHVjZXJUZXh0OiB2YWwgfSwgdGhpcy5xdWVyeVNlYXJjaFJlc3VsdHMpO1xuICAgICAgICAgICAgY2FzZSBTZWFyY2hXaW5lc0lucHV0LlJlZ2lvbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IHJlZ2lvblRleHQ6IHZhbCB9LCB0aGlzLnF1ZXJ5U2VhcmNoUmVzdWx0cyk7XG4gICAgICAgICAgICBjYXNlIFNlYXJjaFdpbmVzSW5wdXQuVml0aUFyZWE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyB2aXRpQXJlYVRleHQ6IHZhbCB9LCB0aGlzLnF1ZXJ5U2VhcmNoUmVzdWx0cyk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ1dhcm5pbmcoYFRyaWVkIHRvIGNoYW5nZSBhbiB1bmtub3duIHByb3BlcnR5ICR7aW5wdXR9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUmVzZXRDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShTZWFyY2hXaW5lc0FwcC5kZWZhdWx0U3RhdGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgcXVlcnlTZWFyY2hSZXN1bHRzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZXN1bHRTdGF0ZTogUmVzdWx0U3RhdGUuU2VhcmNoaW5nfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHM6IElXaW5lW10gPSBhd2FpdCBzZWFyY2hXaW5lcyh7XG4gICAgICAgICAgICBjb2xvckxpa2U6IHRoaXMuc3RhdGUuY29sb3JTZWxlY3Rpb24gPT09IFwiQW55XCIgPyBcIlwiIDogdGhpcy5zdGF0ZS5jb2xvclNlbGVjdGlvbixcbiAgICAgICAgICAgIHdpbmVUeXBlTGlrZTogdGhpcy5zdGF0ZS53aW5lVHlwZVRleHQsXG4gICAgICAgICAgICBwcm9kdWNlckxpa2U6IHRoaXMuc3RhdGUucHJvZHVjZXJUZXh0LFxuICAgICAgICAgICAgcmVnaW9uTGlrZTogdGhpcy5zdGF0ZS5yZWdpb25UZXh0LFxuICAgICAgICAgICAgdml0aUFyZWFMaWtlOiB0aGlzLnN0YXRlLnZpdGlBcmVhVGV4dCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICByZXN1bHRzOiByZXN1bHRzLFxuICAgICAgICAgICAgICAgIHJlc3VsdFN0YXRlOiBSZXN1bHRTdGF0ZS5IYXNTZWFyY2hlZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nRXJyb3IoYFwiRXJyb3IgZmV0Y2hpbmcgc2VhcmNoIHJlc3VsdHM6ICR7ZXJyb3J9YCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb2xvcklucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29sb3JJbnB1dFwiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IHsgUHJvZHVjZXJJbnB1dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2R1Y2VySW5wdXRcIjtcbmltcG9ydCB7IFJlZ2lvbklucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUmVnaW9uSW5wdXRcIjtcbmltcG9ydCB7IFZpdGlBcmVhSW5wdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9WaXRpQXJlYUlucHV0XCI7XG5pbXBvcnQgeyBXaW5lVHlwZUlucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV2luZVR5cGVJbnB1dFwiO1xuaW1wb3J0IHsgU2VhcmNoV2luZXNJbnB1dCB9IGZyb20gXCIuL1NlYXJjaFdpbmVzQXBwXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGNvbG9yU2VsZWN0aW9uOiBzdHJpbmc7XG4gICAgd2luZVR5cGVUZXh0OiBzdHJpbmc7XG4gICAgcHJvZHVjZXJUZXh0OiBzdHJpbmc7XG4gICAgcmVnaW9uVGV4dDogc3RyaW5nO1xuICAgIHZpdGlBcmVhVGV4dDogc3RyaW5nO1xuICAgIG9uSW5wdXRDaGFuZ2U6IChpbnB1dDogU2VhcmNoV2luZXNJbnB1dCwgdmFsOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hXaW5lc0Zvcm06IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbG9ySW5wdXQgc2VsZWN0aW9uPXsgcHJvcHMuY29sb3JTZWxlY3Rpb24gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2KSA9PiBwcm9wcy5vbklucHV0Q2hhbmdlKFNlYXJjaFdpbmVzSW5wdXQuQ29sb3IsIHYpIH1cbiAgICAgICAgICAgICAgICAgICAgZXh0cmFDaG9pY2U9XCJBbnlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFdpbmVUeXBlSW5wdXQgdmFsdWU9eyBwcm9wcy53aW5lVHlwZVRleHQgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2KSA9PiBwcm9wcy5vbklucHV0Q2hhbmdlKFNlYXJjaFdpbmVzSW5wdXQuV2luZVR5cGUsIHYpIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQcm9kdWNlcklucHV0IHZhbHVlPXsgcHJvcHMucHJvZHVjZXJUZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodikgPT4gcHJvcHMub25JbnB1dENoYW5nZShTZWFyY2hXaW5lc0lucHV0LlByb2R1Y2VyLCB2KSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmVnaW9uSW5wdXQgdmFsdWU9eyBwcm9wcy5yZWdpb25UZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodikgPT4gcHJvcHMub25JbnB1dENoYW5nZShTZWFyY2hXaW5lc0lucHV0LlJlZ2lvbiwgdikgfVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWNlclRleHQ9eyBwcm9wcy5wcm9kdWNlclRleHQgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFZpdGlBcmVhSW5wdXQgdmFsdWU9eyBwcm9wcy52aXRpQXJlYVRleHQgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2KSA9PiBwcm9wcy5vbklucHV0Q2hhbmdlKFNlYXJjaFdpbmVzSW5wdXQuVml0aUFyZWEsIHYpIH1cbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uVGV4dD17IHByb3BzLnJlZ2lvblRleHQgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9mb3JtPlxuICAgICk7XG59O1xuU2VhcmNoV2luZXNGb3JtLmRpc3BsYXlOYW1lID0gXCJTZWFyY2hXaW5lc0Zvcm1cIjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29sb3JDZWxsLCBOYW1lQW5kVHlwZUNlbGwsIFRleHRDZWxsIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGFibGVDZWxsc1wiO1xuaW1wb3J0IHsgSVdpbmUgfSBmcm9tIFwiLi4vLi4vbGliL1Jlc3RcIjtcblxuaW50ZXJmYWNlIElTZWFyY2hXaW5lc1Jlc3VsdFByb3BzIHtcbiAgICByZXN1bHQ6IElXaW5lXG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hXaW5lc1Jlc3VsdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJU2VhcmNoV2luZXNSZXN1bHRQcm9wcywge30+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb3BzLnJlc3VsdDtcbiAgICAgICAgcmV0dXJuIDx0cj5cbiAgICAgICAgICAgIDxDb2xvckNlbGwgY29sb3I9eyByZXN1bHQuY29sb3IgfSAvPlxuICAgICAgICAgICAgPE5hbWVBbmRUeXBlQ2VsbCBpZD17IHJlc3VsdC5pZCB9XG4gICAgICAgICAgICAgICAgbmFtZT17IHJlc3VsdC5uYW1lIH1cbiAgICAgICAgICAgICAgICB3aW5lVHlwZT17IHJlc3VsdC53aW5lVHlwZSB9XG4gICAgICAgICAgICAgICAgdXJsPXsgYC93aW5lcy8ke3Jlc3VsdC5pZH0vbmV3LXB1cmNoYXNlL2B9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRDZWxsIHRleHQ9eyByZXN1bHQucHJvZHVjZXIgfSAvPlxuICAgICAgICAgICAgPFRleHRDZWxsIHRleHQ9eyByZXN1bHQucmVnaW9uIH0gLz5cbiAgICAgICAgICAgIDxUZXh0Q2VsbCB0ZXh0PXsgcmVzdWx0LnZpdGlBcmVhIH0gLz5cbiAgICAgICAgPC90cj47XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTZWFyY2hXaW5lc1Jlc3VsdCB9IGZyb20gXCIuL1NlYXJjaFdpbmVzUmVzdWx0XCI7XG5pbXBvcnQgeyBQcmVsb2FkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QcmVsb2FkZXJcIjtcbmltcG9ydCB7IElXaW5lIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5cbmludGVyZmFjZSBJU2VhcmNoV2luZXNSZXN1bHRzUHJvcHMge1xuICAgIHJlc3VsdFN0YXRlOiBSZXN1bHRTdGF0ZTtcbiAgICByZXN1bHRzOiBJV2luZVtdO1xufVxuXG5leHBvcnQgZW51bSBSZXN1bHRTdGF0ZSB7XG4gICAgSGFzTm90U2VhcmNoZWQsXG4gICAgU2VhcmNoaW5nLFxuICAgIEhhc1NlYXJjaGVkLFxufTtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaFdpbmVzUmVzdWx0czogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SVNlYXJjaFdpbmVzUmVzdWx0c1Byb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIHN3aXRjaChwcm9wcy5yZXN1bHRTdGF0ZSkge1xuICAgICAgICBjYXNlIFJlc3VsdFN0YXRlLkhhc05vdFNlYXJjaGVkOlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGNhc2UgUmVzdWx0U3RhdGUuU2VhcmNoaW5nOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UHJlbG9hZGVyIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICBjYXNlIFJlc3VsdFN0YXRlLkhhc1NlYXJjaGVkOlxuICAgICAgICAgICAgaWYgKHByb3BzLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGg1IGlkPVwibm8tcmVzdWx0c1wiPk5vIHJlc3VsdHMgZm91bmQuPC9oNT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVE9ETzogdXNlIGNvbXBvbmVudHNcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImhpZ2hsaWdodCByZXNwb25zaXZlLXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29sb3I8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lIGFuZCBUeXBlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJvZHVjZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZWdpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5WaXRpY3VsdHVyYWwgQXJlYTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLnJlc3VsdHMubWFwKCh3aW5lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoV2luZXNSZXN1bHQgcmVzdWx0PXsgd2luZSB9IGtleT17IHdpbmUuaWQgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICk7XG4gICAgfVxufTtcblNlYXJjaFdpbmVzUmVzdWx0cy5kaXNwbGF5TmFtZSA9IFwiU2VhcmNoV2luZXNSZXN1bHRcIjtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuLi8uLi9saWIvd2lkZ2V0c1wiO1xuaW1wb3J0IHsgU2VhcmNoV2luZXNBcHAgfSBmcm9tIFwiLi9TZWFyY2hXaW5lc0FwcFwiO1xuXG5uYXZiYXIoXCJuZXctd2luZS1uYXZcIik7XG5yZW5kZXIoY3JlYXRlRWxlbWVudChTZWFyY2hXaW5lc0FwcCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoX3dpbmVzLWNvbnRhaW5lclwiKSk7XG4iLCJpbXBvcnQgeyByZWFkQ29va2llIH0gZnJvbSBcIi4vQ29va2llc1wiO1xuaW1wb3J0IHsgSURpY3QsIGlzRW1wdHkgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBIRUFERVJTID0ge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiWC1DU1JGVG9rZW5cIjogcmVhZENvb2tpZShcImNzcmZ0b2tlblwiKSB8fCBcIlwiLFxufTtcblxuZXhwb3J0IHR5cGUgSVF1ZXJ5UGFyYW1zID0gSURpY3Q8c3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj47XG5cbmZ1bmN0aW9uIGVuY29kZVBhcmFtcyhwYXJhbXM6IElRdWVyeVBhcmFtcyk6IHN0cmluZyB7XG4gICAgaWYgKGlzRW1wdHkocGFyYW1zKSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiP1wiICsgT2JqZWN0LmVudHJpZXMocGFyYW1zKS5tYXAoKFtrLCB2XSkgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGspfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2KX1gKS5qb2luKFwiJlwiKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlSnNvbihvYmo6IG9iamVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlY29kZUpzb25JZkFueShyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICBpZiAocGFyc2VGbG9hdChyZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtbGVuZ3RoXCIpID8/IFwiMFwiKSA+IDBcbiAgICAgICAgJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIikgPT09IFwiYXBwbGljYXRpb24vanNvblwiKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxufVxuXG50eXBlIFZpbm90ZWNhRXJyb3IgPVxuICAgIHwge1wiTm90Rm91bmRcIjogc3RyaW5nfVxuICAgIHwge1wiSW50ZXJuYWxcIjogc3RyaW5nfVxuICAgIHwge1wiTWlzc2luZ0NvbnN0cmFpbnRcIjogc3RyaW5nfVxuICAgIHwge1wiQmFkUmVxdWVzdFwiOiBzdHJpbmd9O1xuXG5mdW5jdGlvbiBpc1Zpbm90ZWNhRXJyb3Iob2JqOiBvYmplY3QpOiBvYmogaXMgVmlub3RlY2FFcnJvciB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgcmV0dXJuIGtleXMubGVuZ3RoID09PSAxXG4gICAgICAgICYmIFtcIk5vdEZvdW5kXCIsIFwiSW50ZXJuYWxcIiwgXCJNaXNzaW5nQ29uc3RyYWludFwiLCBcIkJhZFJlcXVlc3RcIl1cbiAgICAgICAgICAgIC5maW5kKChpKSA9PiBpID09PSBrZXlzWzBdKSAhPT0gdW5kZWZpbmVkO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlOiBSZXNwb25zZSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDMxMCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgZGVjb2RlSnNvbklmQW55KHJlc3BvbnNlKTtcbiAgICAgICAgaWYgKGlzVmlub3RlY2FFcnJvcihtZXNzYWdlKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYCR7T2JqZWN0LmtleXMobWVzc2FnZSlbMF19OiAke09iamVjdC52YWx1ZXMobWVzc2FnZSlbMF19YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVKc29uSWZBbnkocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBFcnJvcihhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBNYWtlcyBhbiBIVFRQIEdFVCByZXF1ZXN0IHRvIHRoZSB1cmwgd2l0aCB0aGUgb3B0aW9uYWwgcGFyYW1ldGVycywgdGhlbiBwYXJzZXNcbiAqIHRoZSBKU09OIHJlc3BvbnNlLlxuICogQHBhcmFtIHVybCBBIFVSTCB0byByZXF1ZXN0XG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9wdGlvbmFsIGRpY3Rpb25hcnkgb2YgcGFyYW1ldGVycyB0byB0aGVpciB2YWx1ZXNcbiAqIEByZXR1cm5zIHBhcnNlZCBKU09OIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXQ8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcykpO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhbiBIVFRQIFBPU1QgcmVxdWVzdCB0byB0aGUgdXJsIHdpdGggdGhlIG9wdGlvbmFsIHBhcmFtZXRlcnMgY29udGFpbmluZ1xuICogdGhlIGJvZHksIHRoZW4gcGFyc2VzIHRoZSBKU09OIHJlc3BvbnNlLlxuICogQHBhcmFtIHVybCBBIFVSTCB0byByZXF1ZXN0XG4gKiBAcGFyYW0gYm9keSBKU09OIG9iamVjdCB0byBlbmNvZGUgYW5kIHNlbmQgdG8gdGhlIHNlcnZlclxuICogQHBhcmFtIHBhcmFtcyBBbiBvcHRpb25hbCBkaWN0aW9uYXJ5IG9mIHBhcmFtZXRlcnMgdG8gdGhlaXIgdmFsdWVzXG4gKiBAcmV0dXJucyBwYXJzZWQgSlNPTiByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGJvZHk6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBlbmNvZGVKc29uKGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RGb3JtPFJlc3BvbnNlPih1cmw6IHN0cmluZywgZm9ybTogRm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBmb3JtLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhbiBIVFRQIFBVVCByZXF1ZXN0IHRvIHRoZSB1cmwgd2l0aCB0aGUgb3B0aW9uYWwgcGFyYW1ldGVycyBjb250YWluaW5nXG4gKiB0aGUgYm9keSwgdGhlbiBwYXJzZXMgdGhlIEpTT04gcmVzcG9uc2UuXG4gKiBAcGFyYW0gdXJsIEEgVVJMIHRvIHJlcXVlc3RcbiAqIEBwYXJhbSBib2R5IEpTT04gb2JqZWN0IHRvIGVuY29kZSBhbmQgc2VuZCB0byB0aGUgc2VydmVyXG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9wdGlvbmFsIGRpY3Rpb25hcnkgb2YgcGFyYW1ldGVycyBhbmQgdGhlaXIgdmFsdWVzXG4gKiBAcmV0dXJucyBwYXJzZWQgSlNPTiByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHV0PFJlc3BvbnNlPih1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGVuY29kZUpzb24oYm9keSksXG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXRGb3JtPFJlc3BvbnNlPih1cmw6IHN0cmluZywgZm9ybTogRm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGZvcm0sXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXRjaDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGJvZHk6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXM9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZW5jb2RlSnNvbihib2R5KSxcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlXzxSZXNwb25zZT4odXJsOiBzdHJpbmcsIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuIiwiY29uc3QgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQ3JlYXRlIG9yIHVwZGF0ZSBhIGNvb2tpZVxuICogQHBhcmFtIG5hbWUgbmFtZS9rZXkgb2YgdGhlIGNvb2tpZVxuICogQHBhcmFtIHZhbHVlIHZhbHVlIHRvIHN0b3JlXG4gKiBAcGFyYW0gZGF5cyBudW1iZXIgb2YgZGF5cyB0aGUgY29va2llIGlzIHZhbGlkLCBkZWZhdWx0cyB0byB0aGUgY3VycmVudCBzZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb29raWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBkYXlzPzogbnVtYmVyKSB7XG4gICAgbGV0IGV4cGlyZXM7XG4gICAgaWYgKGRheXMpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogTUlMTElTRUNPTkRTX0lOX0RBWSkpO1xuICAgICAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZXhwaXJlcyA9IFwiXCI7XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRDb29raWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XG4gICAgZm9yIChsZXQgYyBvZiBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpKSB7XG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGMgPSBjLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cihuYW1lRVEubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNvb2tpZShuYW1lOiBzdHJpbmcpIHtcbiAgICBjcmVhdGVDb29raWUobmFtZSwgXCJcIiwgLTEpO1xufVxuIiwiaW1wb3J0IHsgcG9zdCB9IGZyb20gXCIuL0FwaUhlbHBlclwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwiLi93aWRnZXRzXCI7XG5cbi8qKiBQcm92aWRlcyBsb2dnaW5nIGZ1bmN0aW9uYWxpdHkgZm9yIGNsaWVudC1zaWRlIEphdmFTY3JpcHQgZXJyb3JzLiAqL1xuZW51bSBMb2dMZXZlbCB7XG4gICAgQ3JpdGljYWwgPSBcImNyaXRpY2FsXCIsXG4gICAgRXJyb3IgPSBcImVycm9yXCIsXG4gICAgV2FybmluZyA9IFwid2FybmluZ1wiLFxuICAgIEluZm8gPSBcImluZm9cIixcbiAgICBEZWJ1ZyA9IFwiZGVidWdcIixcbn1cblxuaW50ZXJmYWNlIElMb2dSZXN1bHQge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG4gICAgLyoqXG4gICAgICogTG9nZ2luZyBjbGFzcyBmb3IgY2xpZW50LXNpZGUgZXJyb3JzIHRoYXQgd2lsbCBiZSBwb3N0ZWQgdG8gdGhlIHNlcnZlclxuICAgICAqIGZvciBsb2dnaW5nIHRvIHRoZSBzYW1lIGZpbGUgYXMgYWxsIG90aGVyIHZpbm90ZWNhIGxvZ3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbW9kdWxlIHRoZSBuYW1lIG9mIHRoZSBtb2R1bGUgZnJvbSB3aGljaCB0aGUgbG9nIG1lc3NhZ2VzIG9yaWdpbmF0ZS5cbiAgICAgKiBAcGFyYW0gdG9Db25zb2xlIHdoZXRoZXIgdG8gYWxzbyBwcmludCBtZXNzYWdlcyB0byB0aGUgY29uc29sZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kdWxlOiBzdHJpbmcsIHByaXZhdGUgdG9Db25zb2xlID0gZmFsc2UpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZWFudCBmb3IgaXJyZWNvdmVyYWJsZSBvciB0cnVseSBleGNlcHRpb25hbCBlcnJvcnMuIEEgdG9hc3Qgd2l0aCB0aGVcbiAgICAgKiBsb2cgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIGxvZyB3aWxsIGJlIHNlbnQgYmFjayB0byB0aGUgc2VydmVyXG4gICAgICogZm9yIHBvc3Rlcml0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nQ3JpdGljYWwobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gTG9nTGV2ZWwuQ3JpdGljYWw7XG4gICAgICAgIHRoaXMudG9hc3QobGV2ZWwsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgdG9hc3Qgd2l0aCB0aGUgbG9nIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSBsb2cgd2lsbCBiZSBzZW50XG4gICAgICogYmFjayB0byB0aGUgc2VydmVyIGZvciBwb3N0ZXJpdHkuXG4gICAgICovXG4gICAgcHVibGljIGxvZ0Vycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IExvZ0xldmVsLkVycm9yO1xuICAgICAgICB0aGlzLnRvYXN0KGxldmVsLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHRvYXN0IHdpdGggdGhlIGxvZyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgbG9nIHdpbGwgYmUgc2VudFxuICAgICAqIGJhY2sgdG8gdGhlIHNlcnZlciBmb3IgcG9zdGVyaXR5LlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dXYXJuaW5nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IExvZ0xldmVsLldhcm5pbmc7XG4gICAgICAgIHRoaXMudG9hc3QobGV2ZWwsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dJbmZvKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2coTG9nTGV2ZWwuSW5mbywgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ0RlYnVnKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2coTG9nTGV2ZWwuRGVidWcsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbG9nKGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnRvQ29uc29sZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bGV2ZWwudG9VcHBlckNhc2UoKX0gJHtuZXcgRGF0ZSgpfSAke3RoaXMubW9kdWxlfTogJHttZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBJTG9nUmVzdWx0ID0gYXdhaXQgcG9zdChcIi9yZXN0L2xvZ3NcIiwge1xuICAgICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlIGluc3RhbmNlb2YgT2JqZWN0ID8gXCJcIiA6IG1lc3NhZ2UsXG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMubW9kdWxlLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0KExvZ0xldmVsLkVycm9yLCBcIkZhaWxlZCB0byBzZW5kIGNsaWVudC1zaWRlIGxvZ3MgdG8gc2VydmVyLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdG9hc3QobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdG9hc3QoYCR7bGV2ZWwudG9VcHBlckNhc2UoKX06ICR7bWVzc2FnZX1gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBkZWxldGVfLCBnZXQsIElRdWVyeVBhcmFtcywgcGF0Y2gsIHBvc3QsIHBvc3RGb3JtLCBwdXQsIHB1dEZvcm0gfSBmcm9tIFwiLi9BcGlIZWxwZXJcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4vTG9nZ2VyXCI7XG5pbXBvcnQgeyBJQ29sb3IsIElHcmFwZSwgSUdyYXBlRm9ybSwgSU1vc3RDb21tb25QdXJjaGFzZURhdGUsIElQcm9kdWNlciwgSVByb2R1Y2VyRm9ybSwgSVB1cmNoYXNlLFxuICAgICAgICAgSVB1cmNoYXNlQ291bnQsIElQdXJjaGFzZUZvcm0sIElSZWdpb24sIElSZWdpb25Gb3JtLCBJU3RvcmUsIElTdG9yZUZvcm0sIElUb3BFbnRpdHksXG4gICAgICAgICBJVG90YWxMaXRlcnMsIElWaXRpQXJlYSwgSVZpdGlBcmVhRm9ybSwgSVZpdGlBcmVhU3RhdHMsIElXaW5lLCBJV2luZUNvdW50LCBJV2luZUZvcm0sXG4gICAgICAgICBJV2luZUdyYXBlLCBJV2luZUdyYXBlc0Zvcm0sIElXaW5lUGF0Y2hGb3JtLCBJV2luZVR5cGUsIElXaW5lVHlwZUZvcm0gfSBmcm9tIFwiLi9SZXN0XCI7XG5pbXBvcnQgeyBJUmVzdE1vZGVsIH0gZnJvbSBcIi4vUmVzdFR5cGVzXCI7XG5pbXBvcnQgeyBJRGljdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RpY3QobW9kZWxzOiBJUmVzdE1vZGVsW10pOiBJRGljdDxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3QgcmVzdWx0OiBJRGljdDxzdHJpbmcgfCBudWxsPiA9IHt9O1xuICAgIG1vZGVscy5mb3JFYWNoKChtb2RlbCkgPT4ge1xuICAgICAgICByZXN1bHRbbW9kZWwubmFtZV0gPSBudWxsO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjbGFzcyBFbXB0eVJlc3VsdEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIHB1YmxpYyBzdGF0aWMgaXNJbnN0YW5jZShlcnI6IEVycm9yKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBlcnIubmFtZSA9PT0gdGhpcy5OQU1FO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIE5BTUUgPSBcIkVtcHR5UmVzdWx0RXJyb3JcIjtcblxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gRW1wdHlSZXN1bHRFcnJvci5OQU1FO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9uTnVsbHMob2JqOiBJRGljdDxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgdW5kZWZpbmVkPik6IElRdWVyeVBhcmFtcyB7XG4gICAgY29uc3QgcTogSVF1ZXJ5UGFyYW1zID0ge307XG4gICAgT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoKGspID0+IEJvb2xlYW4ob2JqW2tdKSkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICBxW2tdID0gb2JqW2tdIGFzIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG4gICAgfSk7XG4gICAgcmV0dXJuIHE7XG59XG5cbmZ1bmN0aW9uIHNpbmdsZUVudGl0eUdldHRlcjxQYXJhbXMsIFJlc3A+KFxuICAgIGxpc3RHZXR0ZXI6IChwYXJhbXM6IFBhcmFtcykgPT4gUHJvbWlzZTxSZXNwW10+LFxuKTogKHBhcmFtczogUGFyYW1zKSA9PiBQcm9taXNlPFJlc3A+IHtcbiAgICAvLyBTaGF2ZSBvZmYgJ2dldCdcbiAgICBjb25zdCBvYmpOYW1lID0gbGlzdEdldHRlci5uYW1lLnN1YnN0cigzKTtcbiAgICByZXR1cm4gYXN5bmMgKHBhcmFtczogUGFyYW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBsaXN0R2V0dGVyKHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgUmVjZWl2ZWQgbW9yZSB0aGFuIG9uZSAke29iak5hbWV9IHJlc3VsdCB3aGVuIG9uZSB3YXMgZXhwZWN0ZWRgO1xuICAgICAgICAgICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihcIlJlc3RBcGlcIik7XG4gICAgICAgICAgICBsb2dnZXIubG9nRXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRPckNyZWF0ZTxSZXFQYXJhbXMsIFJlc3AsIEZvcm0+KFxuICAgIGxpc3RHZXR0ZXI6IChwYXJhbXM6IFJlcVBhcmFtcykgPT4gUHJvbWlzZTxSZXNwW10+LFxuICAgIGNyZWF0b3I6IChmb3JtOiBGb3JtKSA9PiBQcm9taXNlPFJlc3A+LFxuKTogKHBhcmFtczogUmVxUGFyYW1zLCBmb3JtOiBGb3JtKSA9PiBQcm9taXNlPFJlc3A+IHtcbiAgICBjb25zdCBvYmpOYW1lID0gbGlzdEdldHRlci5uYW1lLnN1YnN0cigzKTtcbiAgICByZXR1cm4gYXN5bmMgKHBhcmFtcywgZm9ybSkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgbGlzdEdldHRlcihwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld09iaiA9IGF3YWl0IGNyZWF0b3IoZm9ybSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFJlY2VpdmVkIG1vcmUgdGhhbiBvbmUgJHtvYmpOYW1lfSByZXN1bHQgd2hlbiBvbmUgd2FzIGV4cGVjdGVkYDtcbiAgICAgICAgbmV3IExvZ2dlcihcIlJlc3RBcGlcIikubG9nRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIHRocm93IEVycm9yKG1lc3NhZ2UpO1xuICAgIH07XG59XG5cbi8qIENPTE9SUyAqL1xuaW50ZXJmYWNlIElHZXRDb2xvclBhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbG9ycyh7IGlkLCBuYW1lIH06IElHZXRDb2xvclBhcmFtcyk6IFByb21pc2U8SUNvbG9yW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSB9KTtcbiAgICBjb25zdCBjb2xvcnM6IElDb2xvcltdID0gYXdhaXQgZ2V0KFwiL3Jlc3QvY29sb3JzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIGlmIChjb2xvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFbXB0eVJlc3VsdEVycm9yKFwiRW1wdHkgcmVzdWx0IHJldHVybmVkIGZvciBjb2xvclwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9ycztcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvbG9yID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldENvbG9ycyk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BDb2xvcnMoKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvY29sb3JzL3RvcFwiKTtcbn1cblxuLyogR1JBUEVTICovXG5pbnRlcmZhY2UgSUdldEdyYXBlc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyYXBlcyh7IGlkLCBuYW1lIH06IElHZXRHcmFwZXNQYXJhbXMpOiBQcm9taXNlPElHcmFwZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUgfSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L2dyYXBlc1wiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEdyYXBlID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldEdyYXBlcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVHcmFwZSA9IGdldE9yQ3JlYXRlKGdldEdyYXBlcywgY3JlYXRlR3JhcGUpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR3JhcGUoZ3JhcGU6IElHcmFwZUZvcm0pOiBQcm9taXNlPElHcmFwZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvZ3JhcGVzXCIsIGdyYXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdyYXBlKGlkOiBudW1iZXIsIGdyYXBlOiBJR3JhcGVGb3JtKTogUHJvbWlzZTxJR3JhcGU+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9ncmFwZXMvJHtpZH1gLCBncmFwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BHcmFwZXMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvZ3JhcGVzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogUFJPRFVDRVJTICovXG5pbnRlcmZhY2UgSUdldFByb2R1Y2Vyc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICByZWdpb25JZD86IG51bWJlcjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lLWxlbmd0aFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y2Vycyh7aWQsIG5hbWUsIHJlZ2lvbklkfTogSUdldFByb2R1Y2Vyc1BhcmFtcyk6IFByb21pc2U8SVByb2R1Y2VyW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2lkLCBuYW1lLCByZWdpb25faWQ6IHJlZ2lvbklkfSk7XG4gICAgY29uc3QgcHJvZHVjZXJzOiBJUHJvZHVjZXJbXSA9IGF3YWl0IGdldChcIi9yZXN0L3Byb2R1Y2Vyc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gcHJvZHVjZXJzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjZXIgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0UHJvZHVjZXJzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVByb2R1Y2VyID0gZ2V0T3JDcmVhdGUoZ2V0UHJvZHVjZXJzLCBjcmVhdGVQcm9kdWNlcik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWNlcihwcm9kdWNlcjogSVByb2R1Y2VyRm9ybSk6IFByb21pc2U8SVByb2R1Y2VyPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9wcm9kdWNlcnNcIiwgcHJvZHVjZXIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZHVjZXIocHJvZHVjZXI6IElQcm9kdWNlcik6IFByb21pc2U8SVByb2R1Y2VyPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3QvcHJvZHVjZXJzLyR7cHJvZHVjZXIuaWR9YCwgcHJvZHVjZXIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjZXIoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBkZWxldGVfKGAvcmVzdC9wcm9kdWNlcnMvJHtpZH1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFByb2R1Y2VycyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wcm9kdWNlcnMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBQVVJDSEFTRVMgKi9cbmludGVyZmFjZSBJR2V0UHVyY2hhc2VzUGFyYW1zIHtcbiAgICB3aW5lSWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQdXJjaGFzZXMoe3dpbmVJZH06IElHZXRQdXJjaGFzZXNQYXJhbXMpOiBQcm9taXNlPElQdXJjaGFzZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgd2luZV9pZDogd2luZUlkIH0pO1xuICAgIGNvbnN0IHB1cmNoYXNlcyA9IGF3YWl0IGdldDxJUHVyY2hhc2VbXT4oXCIvcmVzdC9wdXJjaGFzZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHB1cmNoYXNlcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVB1cmNoYXNlKHB1cmNoYXNlOiBJUHVyY2hhc2VGb3JtKTogUHJvbWlzZTxJUHVyY2hhc2U+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3B1cmNoYXNlc1wiLCBwdXJjaGFzZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQdXJjaGFzZShpZDogbnVtYmVyLCBwdXJjaGFzZTogSVB1cmNoYXNlRm9ybSk6IFByb21pc2U8SVB1cmNoYXNlPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3QvcHVyY2hhc2VzLyR7aWR9YCwgcHVyY2hhc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHVyY2hhc2UoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBkZWxldGVfKGAvcmVzdC9wdXJjaGFzZXMvJHtpZH1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vc3RDb21tb25QdXJjaGFzZURhdGUoKTogUHJvbWlzZTxJTW9zdENvbW1vblB1cmNoYXNlRGF0ZT4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wdXJjaGFzZXMvbW9zdC1jb21tb24tcHVyY2hhc2UtZGF0ZVwiKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvdGFsTGl0ZXJzKCk6IFByb21pc2U8SVRvdGFsTGl0ZXJzPiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3B1cmNoYXNlcy90b3RhbC1saXRlcnNcIik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQdXJjaGFzZUNvdW50KCk6IFByb21pc2U8SVB1cmNoYXNlQ291bnQ+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHVyY2hhc2VzL2NvdW50XCIpO1xufVxuXG4vKiBSRUdJT05TICovXG5pbnRlcmZhY2UgSUdldFJlZ2lvblBhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBwcm9kdWNlck5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWdpb25zKHsgaWQsIG5hbWUsIHByb2R1Y2VyTmFtZSB9OiBJR2V0UmVnaW9uUGFyYW1zKTogUHJvbWlzZTxJUmVnaW9uW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSwgcHJvZHVjZXJfbmFtZTogcHJvZHVjZXJOYW1lIH0pO1xuICAgIGNvbnN0IHJlZ2lvbnM6IElSZWdpb25bXSA9IGF3YWl0IGdldChcIi9yZXN0L3JlZ2lvbnNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHJlZ2lvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZWdpb24gPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0UmVnaW9ucyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVSZWdpb24gPSBnZXRPckNyZWF0ZShnZXRSZWdpb25zLCBjcmVhdGVSZWdpb24pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVnaW9uKHJlZ2lvbjogSVJlZ2lvbkZvcm0pOiBQcm9taXNlPElSZWdpb24+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3JlZ2lvbnNcIiwgcmVnaW9uKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVJlZ2lvbihyZWdpb246IElSZWdpb24pOiBQcm9taXNlPElSZWdpb24+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9yZWdpb25zLyR7cmVnaW9uLmlkfWAsIHJlZ2lvbik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BSZWdpb25zKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3JlZ2lvbnMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBTVE9SRVMgKi9cbmludGVyZmFjZSBJR2V0U3RvcmVQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdG9yZXMoe2lkLCBuYW1lfTogSUdldFN0b3JlUGFyYW1zKTogUHJvbWlzZTxJU3RvcmVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7aWQsIG5hbWV9KTtcbiAgICBjb25zdCBzdG9yZXM6IElTdG9yZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvc3RvcmVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiBzdG9yZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdG9yZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRTdG9yZXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlU3RvcmUgPSBnZXRPckNyZWF0ZShnZXRTdG9yZXMsIGNyZWF0ZVN0b3JlKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHN0b3JlOiBJU3RvcmVGb3JtKTogUHJvbWlzZTxJU3RvcmU+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3N0b3Jlc1wiLCBzdG9yZSk7XG59XG5cbi8qIFZJVEkgQVJFQVMgKi9cbmludGVyZmFjZSBJR2V0Vml0aUFyZWFzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHJlZ2lvbk5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWaXRpQXJlYXMoXG4gICAgeyBpZCwgbmFtZSwgcmVnaW9uTmFtZSB9OiBJR2V0Vml0aUFyZWFzUGFyYW1zLFxuKTogUHJvbWlzZTxJVml0aUFyZWFbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lLCByZWdpb25fbmFtZTogcmVnaW9uTmFtZSB9KTtcbiAgICBjb25zdCB2aXRpQXJlYXM6IElWaXRpQXJlYVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvdml0aS1hcmVhc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gdml0aUFyZWFzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Vml0aUFyZWEgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0Vml0aUFyZWFzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVZpdGlBcmVhID0gZ2V0T3JDcmVhdGUoZ2V0Vml0aUFyZWFzLCBjcmVhdGVWaXRpQXJlYSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVWaXRpQXJlYSh2aXRpQXJlYTogSVZpdGlBcmVhRm9ybSk6IFByb21pc2U8SVZpdGlBcmVhPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC92aXRpLWFyZWFzXCIsIHZpdGlBcmVhKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVZpdGlBcmVhKHZpdGlBcmVhOiBJVml0aUFyZWEpOiBQcm9taXNlPElWaXRpQXJlYT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3ZpdGktYXJlYXMvJHt2aXRpQXJlYS5pZH1gLCB2aXRpQXJlYSk7XG59XG5cbmludGVyZmFjZSBJR2V0Vml0aUFyZWFTdGF0c1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgcmVnaW9uSWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWaXRpQXJlYVN0YXRzKFxuICAgIHsgaWQsIHJlZ2lvbklkIH06IElHZXRWaXRpQXJlYVN0YXRzUGFyYW1zLFxuKTogUHJvbWlzZTxJVml0aUFyZWFTdGF0c1tdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIHJlZ2lvbl9pZDogcmVnaW9uSWQgfSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3ZpdGktYXJlYXMvc3RhdHNcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BWaXRpQXJlYXMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvdml0aS1hcmVhcy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFdJTkVTICovXG5pbnRlcmZhY2UgSUdldFdpbmVzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBwcm9kdWNlcklkPzogbnVtYmVyO1xuICAgIHJlZ2lvbklkPzogbnVtYmVyO1xuICAgIHZpdGlBcmVhSWQ/OiBudW1iZXI7XG4gICAgd2luZVR5cGVJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVzKFxuICAgIHsgaWQsIHByb2R1Y2VySWQsIHJlZ2lvbklkLCB2aXRpQXJlYUlkLCB3aW5lVHlwZUlkIH06IElHZXRXaW5lc1BhcmFtcyxcbik6IFByb21pc2U8SVdpbmVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7XG4gICAgICAgIGlkLCByZWdpb25faWQ6IHJlZ2lvbklkLCBwcm9kdWNlcl9pZDogcHJvZHVjZXJJZCxcbiAgICAgICAgdml0aV9hcmVhX2lkOiB2aXRpQXJlYUlkLCB3aW5lX3R5cGVfaWQ6IHdpbmVUeXBlSWQsXG4gICAgfSk7XG4gICAgY29uc3Qgd2luZXM6IElXaW5lW10gPSBhd2FpdCBnZXQoXCIvcmVzdC93aW5lc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gd2luZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRXaW5lID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFdpbmVzKTtcblxuY29uc3QgY3JlYXRlV2luZUh0dHBGb3JtID0gKHdpbmU6IElXaW5lRm9ybSwgZmlsZTogRmlsZSB8IG51bGwpID0+IHtcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybS5hcHBlbmQoXCJ3aW5lX2Zvcm1cIiwgbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KHdpbmUpXSwge3R5cGU6IFwiYXBwbGljYXRpb24vanNvblwifSkpO1xuICAgIGlmIChmaWxlKSB7XG4gICAgICAgIGZvcm0uYXBwZW5kKFwiaW1hZ2VcIiwgZmlsZSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmUod2luZTogSVdpbmVGb3JtLCBmaWxlOiBGaWxlIHwgbnVsbCk6IFByb21pc2U8SVdpbmU+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlV2luZUh0dHBGb3JtKHdpbmUsIGZpbGUpO1xuICAgIHJldHVybiBwb3N0Rm9ybShcIi9yZXN0L3dpbmVzXCIsIGZvcm0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2luZShpZDogbnVtYmVyLCB3aW5lOiBJV2luZUZvcm0sIGZpbGU6IEZpbGUgfCBudWxsKTogUHJvbWlzZTxJV2luZT4ge1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVXaW5lSHR0cEZvcm0od2luZSwgZmlsZSk7XG4gICAgcmV0dXJuIHB1dEZvcm0oYC9yZXN0L3dpbmVzLyR7aWR9YCwgZm9ybSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXJ0VXBkYXRlV2luZShpZDogbnVtYmVyLCB3aW5lOiBJV2luZVBhdGNoRm9ybSk6IFByb21pc2U8SVdpbmU+IHtcbiAgICByZXR1cm4gcGF0Y2goYC9yZXN0L3dpbmVzLyR7aWR9YCwgd2luZSk7XG59XG5cbmludGVyZmFjZSBJU2VhcmNoV2luZXNQYXJhbXMge1xuICAgIGNvbG9yTGlrZT86IHN0cmluZztcbiAgICB3aW5lVHlwZUxpa2U/OiBzdHJpbmc7XG4gICAgcHJvZHVjZXJMaWtlPzogc3RyaW5nO1xuICAgIHJlZ2lvbkxpa2U/OiBzdHJpbmc7XG4gICAgdml0aUFyZWFMaWtlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoV2luZXMoXG4gICAgeyBjb2xvckxpa2UsIHdpbmVUeXBlTGlrZSwgcHJvZHVjZXJMaWtlLCByZWdpb25MaWtlLCB2aXRpQXJlYUxpa2UgfTogSVNlYXJjaFdpbmVzUGFyYW1zLFxuKTogUHJvbWlzZTxJV2luZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtcbiAgICAgICAgY29sb3JfbGlrZTogY29sb3JMaWtlLCB3aW5lX3R5cGVfbGlrZTogd2luZVR5cGVMaWtlLCBwcm9kdWNlcl9saWtlOiBwcm9kdWNlckxpa2UsXG4gICAgICAgIHJlZ2lvbl9saWtlOiByZWdpb25MaWtlLCB2aXRpX2FyZWFfbGlrZTogdml0aUFyZWFMaWtlLFxuICAgIH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC93aW5lcy9zZWFyY2hcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lVmFyaWV0aWVzKCk6IFByb21pc2U8SVdpbmVDb3VudD4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC93aW5lcy9jb3VudFwiKTtcbn1cblxuLyogV0lORSBHUkFQRVMgKi9cbmludGVyZmFjZSBJR2V0V2luZUdyYXBlc1BhcmFtcyB7XG4gICAgd2luZUlkPzogbnVtYmVyO1xuICAgIGdyYXBlSWQ/OiBudW1iZXI7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZS1sZW5ndGhcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lR3JhcGVzKHsgd2luZUlkLCBncmFwZUlkIH06IElHZXRXaW5lR3JhcGVzUGFyYW1zKTogUHJvbWlzZTxJV2luZUdyYXBlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyB3aW5lX2lkOiB3aW5lSWQsIGdyYXBlX2lkOiBncmFwZUlkIH0pO1xuICAgIGNvbnN0IHdpbmVHcmFwZXM6IElXaW5lR3JhcGVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3dpbmUtZ3JhcGVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB3aW5lR3JhcGVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZUdyYXBlcyh3aW5lR3JhcGVzOiBJV2luZUdyYXBlc0Zvcm0pOiBQcm9taXNlPElXaW5lR3JhcGVbXT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvd2luZS1ncmFwZXNcIiwgd2luZUdyYXBlcyk7XG59XG5cbi8qIFdJTkUgVFlQRVMgKi9cbmludGVyZmFjZSBJR2V0V2luZVR5cGVzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZVR5cGVzKHsgaWQsIG5hbWUgfTogSUdldFdpbmVUeXBlc1BhcmFtcyk6IFByb21pc2U8SVdpbmVUeXBlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSB9KTtcbiAgICBjb25zdCB3aW5lVHlwZXM6IElXaW5lVHlwZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvd2luZS10eXBlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gd2luZVR5cGVzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0V2luZVR5cGUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0V2luZVR5cGVzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVdpbmVUeXBlID0gZ2V0T3JDcmVhdGUoZ2V0V2luZVR5cGVzLCBjcmVhdGVXaW5lVHlwZSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5lVHlwZSh3aW5lVHlwZTogSVdpbmVUeXBlRm9ybSk6IFByb21pc2U8SVdpbmVUeXBlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC93aW5lLXR5cGVzXCIsIHdpbmVUeXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdpbmVUeXBlKHdpbmVUeXBlOiBJV2luZVR5cGUpOiBQcm9taXNlPElXaW5lVHlwZT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3dpbmUtdHlwZXMvJHt3aW5lVHlwZS5pZH1gLCB3aW5lVHlwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BXaW5lVHlwZXMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvd2luZS10eXBlcy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG4iLCIvKiogQmFzaWMgdHlwZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSByZXNwb25zZSBKU09OIG9mIG1hbnkgYXN5bmNocm9ub3VzIHJlcXVlc3RzLiAqL1xuaW1wb3J0IHsgSVJlc3RNb2RlbCB9IGZyb20gXCIuL1Jlc3RUeXBlc1wiO1xuXG4vKipcbiAqIEtleS12YWx1ZSBzdG9yZSB3aGVyZSB0aGUga2V5IG11c3QgYmUgYSBzdHJpbmcsIGJ1dCB0aGUgdmFsdWUgaXMgb2YgYW55IHR5cGVcbiAqIFQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSURpY3Q8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIG9iamVjdHMgdG8gYSBzaW5nbGUgb2JqZWN0IG9mIG5hbWVzIHRvIG51bGwgZm9yIHVzZSB3aXRoIG1hdGVyaWFsaXplXG4gKiBhdXRvY29tcGxldGUuXG4gKiBAcGFyYW0gb2JqZWN0cyBBbiBhcnJheSBvZiBSRVNUIG1vZGVsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzdE1vZGVsc1RvTmFtZURpY3Qob2JqZWN0czogSVJlc3RNb2RlbFtdKTogSURpY3Q8bnVsbD4ge1xuICAgIGNvbnN0IGRpY3Q6IElEaWN0PG51bGw+ID0ge307XG4gICAgb2JqZWN0cy5tYXAoKG9iaikgPT4ge1xuICAgICAgICBkaWN0W29iai5uYW1lXSA9IG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpY3Q7XG59XG5cbi8qKlxuICogQ29udmVydHMgYW4gOC1kaWdpdCBudW1iZXIgb2YgZm9ybWF0ICd5eXl5bW1kZCcgdG8gYSBEYXRlIG9iamVjdC5cbiAqIEBwYXJhbSBudW0gYSBkYXRlIG51bWJlciBvZiBmb3JtYXQgJ3l5eXltbWRkJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbnVtVG9EYXRlKG51bTogbnVtYmVyKTogRGF0ZSB7XG4gICAgY29uc3Qgc3RyTnVtID0gYCR7bnVtfWA7XG4gICAgaWYgKHN0ck51bS5sZW5ndGggIT09IDgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBJbnZhbGlkIGRhdGUgbnVtYmVyICcke3N0ck51bX0nYCk7XG4gICAgfVxuICAgIGNvbnN0IHllYXIgPSBzdHJOdW0uc3Vic3RyKDAsIDQpO1xuICAgIGNvbnN0IG1vbnRoID0gc3RyTnVtLnN1YnN0cig0LCAyKTtcbiAgICBjb25zdCBkYXkgPSBzdHJOdW0uc3Vic3RyKDYsIDIpO1xuICAgIC8vIEpTIG1vbnRocyBhcmUgMC1iYXNlZFxuICAgIHJldHVybiBuZXcgRGF0ZShwYXJzZUludCh5ZWFyLCAxMCksIHBhcnNlSW50KG1vbnRoLCAxMCkgLSAxLCBwYXJzZUludChkYXksIDEwKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRlVG9OdW0oZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSAqIDEwXzAwMCArIChkYXRlLmdldE1vbnRoKCkgKyAxKSAqIDEwMCArIGRhdGUuZ2V0RGF0ZSgpO1xufVxuXG5leHBvcnQgY29uc3QgRU5fREFTSDogc3RyaW5nID0gXCLigJNcIjtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHZpbnRhZ2UgeWVhciwgd2hpY2ggaXMgdHdvIHllYXJzIHByaW9yIHRvIHRoZSBjdXJyZW50XG4gKiB5ZWFyLiBUaGlzIGZ1bmN0aW9uIGR1cGxpY2F0ZXMgdGhlIFB5dGhvbiBmdW5jdGlvblxuICogdmlub3RlY2EudXRpbHMuZGVmYXVsdF92aW50YWdlX3llYXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRWaW50YWdlWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhbiBvYmplY3QgaXMgZW1wdHksIGkuZS4gaGFzIG5vIGtleXMuXG4gKiBAcGFyYW0gb2JqIEFuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShvYmo6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHMgd2l0aCB0aGUgZmlyc3QgbGV0dGVyIGNhcGl0YWxpemVkLlxuICogQHBhcmFtIHMgQSBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzLmxlbmd0aCA+IDAgPyBzWzBdLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKSA6IFwiXCI7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBkaXNwbGF5IG5hbWUgdG8gYW4gaHRtbCBpZFxuICogQHBhcmFtIG5hbWUgQSBjb21wb25lbnQgZGlzcGxheSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYW1lVG9JZChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoLyhcXHMpKy9nLCBcIi1cIikudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgbWF4aW11bSBlbGVtZW50IGJ5IG9uZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgdHlwZSBvZiBlbGVtZW50XG4gKiBAcGFyYW0gYXJyIEFuIGFycmF5IG9mIG9iamNlY3RzXG4gKiBAcGFyYW0gYWNjZXNzb3IgQSBmdW5jdGlvbiBmb3IgYWNjZXNzaW5nIGEgbnVtYmVyIHByb3BlcnR5IG9mIHRoZSBvYmplY3RzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXhCeTxUPihhcnI6IFRbXSwgYWNjZXNzb3I6IChlbGVtOiBUKSA9PiBudW1iZXIpOiBUIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgbWF4RWxlbTogVCB8IHVuZGVmaW5lZDtcbiAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5O1xuICAgIGZvciAoY29uc3QgZWxlbSBvZiBhcnIpIHtcbiAgICAgICAgY29uc3QgdmFsID0gYWNjZXNzb3IoZWxlbSk7XG4gICAgICAgIGlmICh2YWwgPiBtYXhWYWwpIHtcbiAgICAgICAgICAgIG1heEVsZW0gPSBlbGVtO1xuICAgICAgICAgICAgbWF4VmFsID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXhFbGVtO1xufVxuXG4vKipcbiAqIFN1bXMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBieSBvbmUgb2YgdGhlIG9iamVjdHMnIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0gYXJyIEFuIGFycmF5IG9mIG9iamVjdHNcbiAqIEBwYXJhbSBhY2Nlc3NvciBBIGZ1bmN0aW9uIGZvciBhY2Nlc3Npbmcgb25lIG9mIHRoZSBvYmplY3RzJyBwcm9wZXJ0aWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdW1CeTxUPihhcnI6IFRbXSwgYWNjZXNzb3I6IChlbGVtOiBUKSA9PiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAoY29uc3QgZWxlbSBvZiBhcnIpIHtcbiAgICAgICAgc3VtICs9IGFjY2Vzc29yKGVsZW0pO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xufVxuXG4vKipcbiAqIENvbXBhcmVzIHR3byBvYmplY3RzIGZvciBkZWVwIGVxdWFsaXR5LlxuICogQHBhcmFtIGEgQW4gb2JqZWN0XG4gKiBAcGFyYW0gYiBBbiBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyZUVxdWFsKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBjb25zdCBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3QgayBvZiBhS2V5cykge1xuICAgICAgICBpZiAoYVtrXSAhPT0gYltrXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5pbnRlcmZhY2UgSVJhbmdlQXJncyB7XG4gICAgc3RhcnQ/OiBudW1iZXI7XG4gICAgc3RvcD86IG51bWJlcjtcbiAgICBzdGVwPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmFibGUgcmFuZ2Ugb2YgbnVtYmVyc29uQ2xpY2suXG4gKiBAcGFyYW0gc3RhcnQgRmlyc3QgbnVtYmVyIG9mIHRoZSByYW5nZVxuICogQHBhcmFtIHN0b3AgRW5kIG9mIHRoZSByYW5nZSAobm9uLWluY2x1c2l2ZSlcbiAqIEBwYXJhbSBzdGVwIEluY3JlbWVudCBvZiB0aGUgcmFuZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiByYW5nZSh7IHN0YXJ0LCBzdG9wLCBzdGVwIH06IElSYW5nZUFyZ3MpOiBJdGVyYWJsZUl0ZXJhdG9yPG51bWJlcj4ge1xuICAgIHN0ZXAgPSBzdGVwIHx8IDE7XG4gICAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICAgIHN0b3AgPSBzdG9wIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgICAgICB5aWVsZCBpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGltYWdlRXhpc3RzKGltYWdlVXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGltYWdlVXJsLCB7bWV0aG9kOiBcIkhFQURcIn0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2Uub2s7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lQW5kVHlwZShuYW1lOiBzdHJpbmcgfCBudWxsLCB3aW5lVHlwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7KG5hbWUgPyBuYW1lICsgXCIgXCIgOiBcIlwiKX0ke3dpbmVUeXBlfWA7XG59XG5cbi8vIFRPRE86IG1vdmUgdG8gdXNlIFJlYWN0IHJvdXRlciBvciBzb21ldGhpbmcgc2ltaWxhclxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0KHVybDogc3RyaW5nKSB7XG4gICAgbG9jYXRpb24uaHJlZiA9IHVybDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZChmdW46ICgpID0+IHZvaWQpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW4pO1xufVxuIiwiaW1wb3J0IHsgQXV0b2NvbXBsZXRlLCBEcm9wZG93biwgU2lkZW5hdiB9IGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCB7IElEaWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxudHlwZSBPbkNoYW5nZSA9IChlOiBzdHJpbmcpID0+IHZvaWQ7XG5cbi8qKiBTZXR1cCBhdXRvY29tcGxldGlvbiB3aXRoIHByb3ZpZGVkIGNvbXBsZXRpb24gb3B0aW9ucy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdXRvY29tcGxldGUoZWxlbTogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbnM6IElEaWN0PHN0cmluZyB8IG51bGw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogT25DaGFuZ2UsIG1pbkxlbmd0aCA9IDEsIGxpbWl0ID0gNSkge1xuICAgIGlmIChlbGVtLmN1cnJlbnQpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgICAgIG5ldyBBdXRvY29tcGxldGUoZWxlbS5jdXJyZW50LCB7XG4gICAgICAgICAgICBkYXRhOiBjb21wbGV0aW9ucyxcbiAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgbWluTGVuZ3RoLFxuXG4gICAgICAgICAgICBvbkF1dG9jb21wbGV0ZTogZnVuY3Rpb24odGhpcywgdGV4dCkgeyAgLy8gdHNsaW50OmRpc2FibGUtbGluZSBvYmplY3QtbGl0ZXJhbC1zaG9ydGhhbmRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSh0ZXh0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGaXggb3ZlcmxhcHB0aW5nIHRleHQgYnVnXG4gICAgICAgIE0udXBkYXRlVGV4dEZpZWxkcygpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVOYXZiYXJUYWIoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbi8qKiBFbmFibGVzIG5hdmJhciBtZW51cy4gU2hvdWxkIGJlIGNhbGxlZCBvbiBldmVyeSBwYWdlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hdmJhcihhY3RpdmVOYXZUYWJJZD86IHN0cmluZykge1xuICAgIGlmIChhY3RpdmVOYXZUYWJJZCkge1xuICAgICAgICBhY3RpdmF0ZU5hdmJhclRhYihhY3RpdmVOYXZUYWJJZCk7XG4gICAgfVxuICAgIGNvbnN0IHNpZGVOYXZFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlbmF2XCIpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBTaWRlbmF2KHNpZGVOYXZFbGVtISk7XG4gICAgY29uc3QgZHJvcGRvd25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi10cmlnZ2VyXCIpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBEcm9wZG93bihkcm9wZG93bkVsZW0hKTtcbn1cblxuLyoqIFNpbXBsaWZpZXMgZGlzcGxheWluZyBvZiB0b2FzdCBtZXNzYWdlcyB0byB1c2VyICovXG5leHBvcnQgZnVuY3Rpb24gdG9hc3QobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgTS50b2FzdCh7XG4gICAgICAgIGNsYXNzZXM6IFwicmVkLWJnXCIsXG4gICAgICAgIGRpc3BsYXlMZW5ndGg6IDEwMDAwLFxuICAgICAgICBodG1sOiBtZXNzYWdlLFxuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==