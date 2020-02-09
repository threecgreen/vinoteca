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
/******/ 		"region_profile": 0
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
/******/ 	deferredModules.push([4,"vendors"]);
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

/***/ "./components/Flag.tsx":
/*!*****************************!*\
  !*** ./components/Flag.tsx ***!
  \*****************************/
/*! exports provided: Flag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flag", function() { return Flag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Flag = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: `/static/img/flags/${props.region}.svg`, alt: `Flag of ${props.region}`, className: "circle z-depth-2 img-responsive region-flag" }));
};
Flag.displayName = "Flag";


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

/***/ "./front_end/region_profile/Region.tsx":
/*!*********************************************!*\
  !*** ./front_end/region_profile/Region.tsx ***!
  \*********************************************/
/*! exports provided: Region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_Flag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Flag */ "./components/Flag.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_RegionInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/RegionInput */ "./components/RegionInput.tsx");





class Region extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: undefined,
        };
    }
    render() {
        const content = this.props.isEditing ? this.renderEdit() : this.renderView();
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null, content));
    }
    renderView() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Flag__WEBPACK_IMPORTED_MODULE_2__["Flag"], { region: this.props.region.name }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "bold" }, this.props.region.name))));
    }
    renderEdit() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "bold" }, "Edit Region"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { autoComplete: "off" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RegionInput__WEBPACK_IMPORTED_MODULE_4__["RegionInput"], { value: this.props.regionText, onChange: this.props.onRegionChange }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["CancelOrConfirmBtns"], { onConfirmClick: this.props.onConfirmClick, onCancelClick: this.props.onCancelClick })));
    }
}


/***/ }),

/***/ "./front_end/region_profile/RegionProfileApp.tsx":
/*!*******************************************************!*\
  !*** ./front_end/region_profile/RegionProfileApp.tsx ***!
  \*******************************************************/
/*! exports provided: RegionProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionProfile", function() { return RegionProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_FixedActionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FixedActionList */ "./components/FixedActionList.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MaterialIcon */ "./components/MaterialIcon.tsx");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Preloader */ "./components/Preloader.tsx");
/* harmony import */ var _components_WinesTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/WinesTable */ "./components/WinesTable.tsx");
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _Region__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Region */ "./front_end/region_profile/Region.tsx");
/* harmony import */ var _RegionVitiAreasTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RegionVitiAreasTable */ "./front_end/region_profile/RegionVitiAreasTable.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











class RegionProfile extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            regionText: "",
            region: undefined,
            wines: [],
            vitiAreas: [],
        };
        this.logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_7__["default"](this.constructor.name, true);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            Promise.all([
                this.getAndSetRegion(),
                this.getAndSetWines(),
                this.getAndSetVitiAreaStats(),
            ]);
        });
    }
    getAndSetRegion() {
        return __awaiter(this, void 0, void 0, function* () {
            const region = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_8__["getRegion"])({ id: this.props.regionId });
            this.setState({ region, regionText: region.name });
        });
    }
    getAndSetWines() {
        return __awaiter(this, void 0, void 0, function* () {
            const wines = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_8__["getWines"])({ regionId: this.props.regionId });
            this.setState({ wines });
        });
    }
    getAndSetVitiAreaStats() {
        return __awaiter(this, void 0, void 0, function* () {
            const vitiAreas = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_8__["getVitiAreaStats"])({ regionId: this.props.regionId });
            this.setState({ vitiAreas: vitiAreas });
        });
    }
    render() {
        if (!this.state.region) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_5__["Preloader"], null);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Region__WEBPACK_IMPORTED_MODULE_9__["Region"], { isEditing: this.state.isEditing, region: this.state.region, regionText: this.state.regionText, onRegionChange: this.onRegionChange, onConfirmClick: this.onConfirmClick, onCancelClick: this.onCancelClick }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12, l: 9 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Viticultural Areas"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegionVitiAreasTable__WEBPACK_IMPORTED_MODULE_10__["RegionVitiAreasTable"], { vitiAreas: this.state.vitiAreas })),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12, l: 3, classes: ["fixed-action-div"] },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FixedActionList__WEBPACK_IMPORTED_MODULE_2__["FixedActionList"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { onClick: this.onEditClick, classes: ["yellow-bg"] },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__["MaterialIcon"], { iconName: "edit" }))))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Wines"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WinesTable__WEBPACK_IMPORTED_MODULE_6__["WinesTable"], { wines: this.state.wines, excludeColumn: _components_WinesTable__WEBPACK_IMPORTED_MODULE_6__["ColumnToExclude"].Region })))));
    }
    onEditClick() {
        this.setState({ isEditing: true });
    }
    onRegionChange(val) {
        this.setState({
            regionText: val,
        });
    }
    onConfirmClick() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const region = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_8__["updateRegion"])({ id: this.props.regionId, name: this.state.regionText });
                this.setState({
                    isEditing: false,
                    region: region,
                });
            }
            catch (err) {
                this.logger.logWarning(`Failed to save changes to database: ${err}`);
            }
        });
    }
    onCancelClick() {
        this.setState((state) => ({
            isEditing: false,
            regionText: state.region ? state.region.name : "",
        }));
    }
}


/***/ }),

/***/ "./front_end/region_profile/RegionVitiAreasTable.tsx":
/*!***********************************************************!*\
  !*** ./front_end/region_profile/RegionVitiAreasTable.tsx ***!
  \***********************************************************/
/*! exports provided: RegionVitiAreasTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionVitiAreasTable", function() { return RegionVitiAreasTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Table */ "./components/Table.tsx");
/* harmony import */ var _components_TableCells__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TableCells */ "./components/TableCells.tsx");



const RegionVitiAreasTable = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Table__WEBPACK_IMPORTED_MODULE_1__["Table"], { columns: ([
            "Name",
            { name: "Wines", isNumCol: true },
            { name: "Avg Price", isNumCol: true },
            { name: "Avg Rating", isNumCol: true },
        ]) }, props.vitiAreas.map((vitiArea) => {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: vitiArea.id },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_2__["VitiAreaCell"], { id: vitiArea.id, name: vitiArea.name }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_2__["NumCell"], { num: vitiArea.totalWines }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_2__["PriceCell"], { price: vitiArea.avgPrice }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_2__["NumCell"], { num: vitiArea.avgRating, maxDecimals: 1 })));
    })));
};
RegionVitiAreasTable.displayName = "RegionVitiAreasTable";


/***/ }),

/***/ "./front_end/region_profile/region_profile.ts":
/*!****************************************************!*\
  !*** ./front_end/region_profile/region_profile.ts ***!
  \****************************************************/
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
/* harmony import */ var _RegionProfileApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RegionProfileApp */ "./front_end/region_profile/RegionProfileApp.tsx");





Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"])(() => {
    Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_3__["navbar"])();
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_RegionProfileApp__WEBPACK_IMPORTED_MODULE_4__["RegionProfile"], { regionId: id }), document.getElementById("region_profile-container"));
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

/***/ 4:
/*!**********************************************************!*\
  !*** multi ./front_end/region_profile/region_profile.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carter/git/vinoteca/vinoteca/front_end/region_profile/region_profile.ts */"./front_end/region_profile/region_profile.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25zLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbG9ySW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRml4ZWRBY3Rpb25MaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZsYWcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXRlcmlhbEljb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJlbG9hZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlZ2lvbklucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlbGVjdElucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NwZWNpYWxDaGFyQnRuLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NwZWNpYWxDaGFycy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZUNlbGxzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYmxlSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RleHRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XaW5lc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvcmVnaW9uX3Byb2ZpbGUvUmVnaW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvcmVnaW9uX3Byb2ZpbGUvUmVnaW9uUHJvZmlsZUFwcC50c3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRfZW5kL3JlZ2lvbl9wcm9maWxlL1JlZ2lvblZpdGlBcmVhc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvcmVnaW9uX3Byb2ZpbGUvcmVnaW9uX3Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL0FwaUhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9saWIvQ29va2llcy50cyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL2xpYi9SZXN0QXBpLnRzIiwid2VicGFjazovLy8uL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9saWIvd2lkZ2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5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Q0FBQyxDQUFDO0tBQ3JDO0lBQ0QsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2RCxnREFBZ0Q7SUFDaEQsSUFBSSx1REFBTyxDQUFDLFdBQVksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqRSxnREFBZ0Q7SUFDaEQsSUFBSSx3REFBUSxDQUFDLFlBQWEsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRCxzREFBc0Q7QUFDL0MsU0FBUyxLQUFLLENBQUMsT0FBZTtJQUNqQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ0osT0FBTyxFQUFFLFFBQVE7UUFDakIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsSUFBSSxFQUFFLE9BQU87S0FDaEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsImZpbGUiOiJyZWdpb25fcHJvZmlsZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicmVnaW9uX3Byb2ZpbGVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbNCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgQ29sIH0gZnJvbSBcIi4vR3JpZFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4vTWF0ZXJpYWxJY29uXCI7XG5cbmludGVyZmFjZSBJRmxvYXRpbmdCdG5Qcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB7XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgICBvbk1vdXNlRG93bj86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKGNsYXNzZXMgfHwgW10pLmpvaW4oXCIgXCIpO1xufVxuXG5leHBvcnQgY29uc3QgRmxvYXRpbmdCdG46IFJlYWN0LkZDPElGbG9hdGluZ0J0blByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21iaW5lQ2xhc3Nlcyhwcm9wcy5jbGFzc2VzKTtcbiAgICBjb25zdCBtb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICAgICAgaWYgKHByb3BzLm9uTW91c2VEb3duKSB7XG4gICAgICAgICAgICBwcm9wcy5vbk1vdXNlRG93bihlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudD4pID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9wcy5vbkNsaWNrKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgYHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4tZmxvYXRpbmcgJHtjbGFzc2VzfWAgfVxuICAgICAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyBtb3VzZURvd24gfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9hPlxuICAgICk7XG59O1xuRmxvYXRpbmdCdG4uZGlzcGxheU5hbWUgPSBcIkZsb2F0aW5nQnRuXCI7XG5GbG9hdGluZ0J0bi5kZWZhdWx0UHJvcHMgPSB7IG9uTW91c2VEb3duOiAoXykgPT4gdW5kZWZpbmVkIH07XG5cbmludGVyZmFjZSBJQnRuUHJvcHMgZXh0ZW5kcyBJQ2hpbGRyZW5Qcm9wLCBJQ2xhc3Nlc1Byb3Age1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBCdG46IFJlYWN0LkZDPElCdG5Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tYmluZUNsYXNzZXMocHJvcHMuY2xhc3Nlcyk7XG4gICAgY29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb3BzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17IGByYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gJHtjbGFzc2VzfWAgfVxuICAgICAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cbkJ0bi5kaXNwbGF5TmFtZSA9IFwiQnRuXCI7XG5cbmludGVyZmFjZSBJQ2FuY2VsT3JDb25maXJtUHJvcHMge1xuICAgIG9uQ29uZmlybUNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIG9uQ2FuY2VsQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBDYW5jZWxPckNvbmZpcm1CdG5zOiBSZWFjdC5GQzxJQ2FuY2VsT3JDb25maXJtUHJvcHM+ID1cbiAgICAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICA8QnRuIGNsYXNzZXM9eyBbXCJncmVlbi1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uQ29uZmlybUNsaWNrIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cInNlbmRcIiBjbGFzc05hbWU9XCJyaWdodFwiIC8+XG4gICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcInJlZC1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uQ2FuY2VsQ2xpY2sgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdG4+XG4gICAgICAgIDwvQ29sPlxuICAgICk7XG59XG5DYW5jZWxPckNvbmZpcm1CdG5zLmRpc3BsYXlOYW1lID0gXCJDYW5jZWxPckNvbmZpcm1CdG5zXCI7XG4iLCJpbXBvcnQgeyBGb3JtU2VsZWN0IH0gZnJvbSBcIm1hdGVyaWFsaXplLWNzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vbGliL0xvZ2dlclwiO1xuaW1wb3J0IHsgSUNvbG9yIH0gZnJvbSBcIi4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBnZXRDb2xvcnMgfSBmcm9tIFwiLi4vbGliL1Jlc3RBcGlcIjtcbmltcG9ydCB7IElPbkNoYW5nZSB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgU2VsZWN0SW5wdXQgfSBmcm9tIFwiLi9TZWxlY3RJbnB1dFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSU9uQ2hhbmdlIHtcbiAgICBzZWxlY3Rpb246IHN0cmluZztcbiAgICBleHRyYUNob2ljZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUNvbG9yc1NlbGVjdCA9IChsb2dnZXI6IExvZ2dlciwgZXh0cmFDaG9pY2U/OiBzdHJpbmcpOiBbc3RyaW5nW10sIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTFNlbGVjdEVsZW1lbnQ+XSA9PiB7XG4gICAgY29uc3QgW3NlbGVjdGlvbk9wdGlvbnMsIHNldFNlbGVjdGlvbk9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgICBjb25zdCBzZWxlY3RSZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxTZWxlY3RFbGVtZW50PjtcblxuICAgIGNvbnN0IGNvbmNhdElmTm90TnVsbD0gKG9wdGlvbnM6IHN0cmluZ1tdKTogc3RyaW5nW10gPT4ge1xuICAgICAgICBpZiAoZXh0cmFDaG9pY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBbZXh0cmFDaG9pY2VdLmNvbmNhdChvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbG9ycygpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JzOiBJQ29sb3JbXSA9IGF3YWl0IGdldENvbG9ycyh7fSk7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uT3B0aW9ucyhjb25jYXRJZk5vdE51bGwoY29sb3JzLm1hcCgoY29sb3IpID0+IGNvbG9yLm5hbWUpKSk7XG4gICAgICAgICAgICAgICAgbmV3IEZvcm1TZWxlY3Qoc2VsZWN0UmVmLmN1cnJlbnQhKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihcIkZhaWxlZCB0byBnZXQgY29sb3JzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hDb2xvcnMoKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFtzZWxlY3Rpb25PcHRpb25zLCBzZWxlY3RSZWZdXG59XG5cbmV4cG9ydCBjb25zdCBDb2xvcklucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihDb2xvcklucHV0Lm5hbWUpO1xuXG4gICAgY29uc3QgW3NlbGVjdGlvbk9wdGlvbnMsIHNlbGVjdFJlZl0gPSB1c2VDb2xvcnNTZWxlY3QobG9nZ2VyLCBwcm9wcy5leHRyYUNob2ljZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VsZWN0SW5wdXQgbmFtZT1cIkNvbG9yXCJcbiAgICAgICAgICAgIHM9eyA0IH0gbD17IDIgfVxuICAgICAgICAgICAgc2VsZWN0UmVmPXsgc2VsZWN0UmVmIH1cbiAgICAgICAgICAgIG9wdGlvbnM9eyBzZWxlY3Rpb25PcHRpb25zIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHYpID0+IHByb3BzPy5vbkNoYW5nZSh2KSB9XG4gICAgICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuQ29sb3JJbnB1dC5kaXNwbGF5TmFtZSA9IFwiQ29sb3JJbnB1dFwiO1xuIiwiaW1wb3J0IHsgRmxvYXRpbmdBY3Rpb25CdXR0b24gfSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGbG9hdGluZ0J0biB9IGZyb20gXCIuL0J1dHRvbnNcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AgfSBmcm9tIFwiLi9JUHJvcHNcIjtcbmltcG9ydCB7IE1hdGVyaWFsSWNvbiB9IGZyb20gXCIuL01hdGVyaWFsSWNvblwiO1xuXG5leHBvcnQgY29uc3QgRml4ZWRBY3Rpb25MaXN0OiBSZWFjdC5GQzxJQ2hpbGRyZW5Qcm9wPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGRpdlJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbmV3IEZsb2F0aW5nQWN0aW9uQnV0dG9uKGRpdlJlZi5jdXJyZW50LCB7ZGlyZWN0aW9uOiBcImxlZnRcIn0pO1xuICAgIH0sIFtkaXZSZWZdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLWFjdGlvbi1idG4gaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgcmVmPXsgZGl2UmVmIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmxvYXRpbmdCdG4gY2xhc3Nlcz17IFtcImJ0bi1sYXJnZVwiLCBcInJlZC1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBudWxsIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJtZW51XCIgLz5cbiAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nQnRuPlxuICAgICAgICAgICAgICAgIDx1bD4geyBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGk+eyBjaGlsZCB9PC9saT5cbiAgICAgICAgICAgICAgICApKSB9IDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbkZpeGVkQWN0aW9uTGlzdC5kaXNwbGF5TmFtZSA9IFwiRml4ZWRBY3Rpb25MaXN0XCI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVnaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBGbGFnOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGltZyBzcmM9eyBgL3N0YXRpYy9pbWcvZmxhZ3MvJHtwcm9wcy5yZWdpb259LnN2Z2AgfVxuICAgICAgICAgICAgYWx0PXsgYEZsYWcgb2YgJHtwcm9wcy5yZWdpb259YCB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUgei1kZXB0aC0yIGltZy1yZXNwb25zaXZlIHJlZ2lvbi1mbGFnXCJcbiAgICAgICAgLz5cbiAgICApO1xufTtcbkZsYWcuZGlzcGxheU5hbWUgPSBcIkZsYWdcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkUHJvcHMge1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xuICAgIHhsPzogbnVtYmVyO1xufVxuXG50eXBlIElBbGxHcmlkUHJvcHMgPSBJR3JpZFByb3BzICYgSUNsYXNzZXNQcm9wICYgSUNoaWxkcmVuUHJvcDtcblxuZnVuY3Rpb24gam9pbkNsYXNzZXMoZ3JpZDogc3RyaW5nW10sIGNsYXNzZXM/OiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgbGV0IGFsbENsYXNzZXM6IHN0cmluZ1tdID0gW107XG4gICAgZ3JpZC5mb3JFYWNoKChnYykgPT4ge1xuICAgICAgICBpZiAoZ2MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWxsQ2xhc3Nlcy5wdXNoKGdjKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGFsbENsYXNzZXMgPSBhbGxDbGFzc2VzLmNvbmNhdChjbGFzc2VzIHx8IFtdKTtcbiAgICByZXR1cm4gYWxsQ2xhc3Nlcy5qb2luKFwiIFwiKTtcbn1cblxuZnVuY3Rpb24gZ3JpZENsYXNzZXMocHJvcHM6IElBbGxHcmlkUHJvcHMpOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgc0NsYXNzID0gcHJvcHMucyA/IGBzJHtwcm9wcy5zfWAgOiBcIlwiO1xuICAgIGNvbnN0IG1DbGFzcyA9IHByb3BzLm0gPyBgbSR7cHJvcHMubX1gIDogXCJcIjtcbiAgICBjb25zdCBsQ2xhc3MgPSBwcm9wcy5sID8gYGwke3Byb3BzLmx9YCA6IFwiXCI7XG4gICAgY29uc3QgeGxDbGFzcyA9IHByb3BzLnhsID8gYHhsJHtwcm9wcy54bH1gIDogXCJcIjtcbiAgICByZXR1cm4gW3NDbGFzcywgbUNsYXNzLCBsQ2xhc3MsIHhsQ2xhc3NdO1xufVxuXG5jb25zdCBHcmlkQ29tcG9uZW50RmFjdG9yeSA9IChjbGFzc05hbWU6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZyk6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0+IHtcbiAgICBjb25zdCBjb21wb25lbnQ6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0gKHByb3BzOiBJQWxsR3JpZFByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IG90aGVyQ2xhc3NlcyA9IGpvaW5DbGFzc2VzKGdyaWRDbGFzc2VzKHByb3BzKSwgcHJvcHMuY2xhc3Nlcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGAke2NsYXNzTmFtZX0gJHtvdGhlckNsYXNzZXN9YCB9PlxuICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbiAgICBjb21wb25lbnQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgY29uc3QgUm93OiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IEdyaWRDb21wb25lbnRGYWN0b3J5KFwicm93XCIsIFwiUm93XCIpO1xuXG5leHBvcnQgY29uc3QgQ29sOiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IEdyaWRDb21wb25lbnRGYWN0b3J5KFwiY29sXCIsIFwiQ29sXCIpO1xuXG5leHBvcnQgY29uc3QgSW5wdXRGaWVsZDogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcImNvbCBpbnB1dC1maWVsZFwiLCBcIklucHV0RmllbGRcIilcbiIsImltcG9ydCBNIGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG5hbWVUb0lkIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gXCIuL0dyaWRcIjtcblxudHlwZSBJSW5wdXRWYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbnB1dFByb3BzPFQgZXh0ZW5kcyBJSW5wdXRWYWx1ZT4ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB2YWx1ZTogVDtcbiAgICBlbmFibGVkOiBib29sZWFuO1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Gb2N1czogKCkgPT4gdm9pZDtcbiAgICBvbkJsdXI6ICgpID0+IHZvaWQ7XG4gICAgaW5wdXRSZWY/OiBSZWFjdC5SZWY8SFRNTElucHV0RWxlbWVudD47XG4gICAgaW5wdXRUeXBlPzogc3RyaW5nO1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgc3RlcD86IHN0cmluZztcbiAgICBtYXg/OiBudW1iZXI7XG4gICAgbWluPzogbnVtYmVyO1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgSW5wdXQ8VSBleHRlbmRzIElJbnB1dFZhbHVlPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJSW5wdXRQcm9wczxVPj4ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBvbkNoYW5nZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBvbkZvY3VzOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIG9uQmx1cjogKF86IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaWQgPSBuYW1lVG9JZCh0aGlzLnByb3BzLm5hbWUpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPElucHV0RmllbGQgcz17IHRoaXMucHJvcHMucyB9IG09eyB0aGlzLnByb3BzLm0gfSBsPXsgdGhpcy5wcm9wcy5sIH0+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXsgaWQgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmNsYXNzTmFtZSB9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17IHRoaXMucHJvcHMuaW5wdXRSZWYgfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPXsgdGhpcy5wcm9wcy5pbnB1dFR5cGUgfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ICF0aGlzLnByb3BzLmVuYWJsZWQgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHRoaXMucHJvcHMudmFsdWUgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiB0aGlzLm9uQ2hhbmdlKGUpIH1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsgdGhpcy5wcm9wcy5vbkJsdXIgfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsgdGhpcy5wcm9wcy5vbkZvY3VzIH1cbiAgICAgICAgICAgICAgICAgICAgc3RlcD17IHRoaXMucHJvcHMuc3RlcCB9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17IHRoaXMucHJvcHMubWluIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgdGhpcy5wcm9wcy5tYXggfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuYWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCIgfSBodG1sRm9yPXsgaWQgfT5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLm5hbWUgfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L0lucHV0RmllbGQ+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBNLnVwZGF0ZVRleHRGaWVsZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBNLnVwZGF0ZVRleHRGaWVsZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIGljb25OYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBNYXRlcmlhbEljb246IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgPGkgY2xhc3NOYW1lPXsgYG1hdGVyaWFsLWljb25zICR7cHJvcHMuY2xhc3NOYW1lfWAgfT5cbiAgICAgICAgICAgIHsgcHJvcHMuaWNvbk5hbWUgfVxuICAgICAgICA8L2k+XG4gICAgKTtcbn07XG5NYXRlcmlhbEljb24uZGlzcGxheU5hbWUgPSBcIk1hdGVyaWFsSWNvblwiO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBQcmVsb2FkZXI6IFJlYWN0LkZDPHt9PiA9IChfKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRldGVybWluYXRlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5QcmVsb2FkZXIuZGlzcGxheU5hbWUgPSBcIlByZWxvYWRlclwiO1xuXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyQ2lyYzogUmVhY3QuRkM8e30+ID0gKF8pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWxvYWRlci13cmFwcGVyIGFjdGl2ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWxheWVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+PGRpdiBjbGFzc05hbWU9XCJnYXAtcGF0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblByZWxvYWRlckNpcmMuZGlzcGxheU5hbWUgPSBcIlByZWxvYWRlckNpcmNcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElSZWdpb24gfSBmcm9tIFwiLi4vbGliL1Jlc3RcIjtcbmltcG9ydCB7IEVtcHR5UmVzdWx0RXJyb3IsIGdldFJlZ2lvbnMsIHRvRGljdCB9IGZyb20gXCIuLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgSURpY3QgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBhdXRvY29tcGxldGUgfSBmcm9tIFwiLi4vbGliL3dpZGdldHNcIjtcbmltcG9ydCB7IElPbkNoYW5nZSB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSBcIi4vVGV4dElucHV0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJT25DaGFuZ2Uge1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgcHJvZHVjZXJUZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUmVnaW9uSW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAoe3ZhbHVlLCBwcm9kdWNlclRleHQsIG9uQ2hhbmdlfSkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoUmVnaW9uSW5wdXQubmFtZSk7XG5cbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG5cbiAgICAvLyBHZXQgYXV0b2NvbXBsZXRlIG9wdGlvbnNcbiAgICBjb25zdCBbYXV0b2NvbXBsZXRlT3B0aW9ucywgc2V0QXV0b2NvbXBsZXRlT3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZTxJRGljdDxzdHJpbmcgfCBudWxsPj4oe30pO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQXV0b2NvbXBsZXRlT3B0aW9ucygpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnaW9uczogSVJlZ2lvbltdID0gYXdhaXQgZ2V0UmVnaW9ucyh7fSk7XG4gICAgICAgICAgICAgICAgc2V0QXV0b2NvbXBsZXRlT3B0aW9ucyh0b0RpY3QocmVnaW9ucykpO1xuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZShpbnB1dFJlZiwgYXV0b2NvbXBsZXRlT3B0aW9ucywgb25DaGFuZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFwiRmFpbGVkIHRvIGdldCByZWdpb24gYXV0b2NvbXBsZXRlIG9wdGlvbnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hBdXRvY29tcGxldGVPcHRpb25zKCk7XG4gICAgfSwgW2lucHV0UmVmLCBzZXRBdXRvY29tcGxldGVPcHRpb25zXSk7XG5cbiAgICBjb25zdCBbZW5hYmxlZCwgc2V0RW5hYmxlZF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICAgIC8vIFRyeSB0byBnZXQgcmVnaW9uIGZyb20gcHJvZHVjZXIgaW5wdXQuIElmIGZvdW5kLCBsb2NrIGFuZCBzZXQgdmFsdWVcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y2VyUmVnaW9uKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nSW5mbyhcIlVwZGF0aW5nIHJlZ2lvbiBhdXRvY29tcGxldGUgb3B0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdpb25zID0gYXdhaXQgZ2V0UmVnaW9ucyh7cHJvZHVjZXJOYW1lOiBwcm9kdWNlclRleHR9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVnaW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UocmVnaW9uc1swXS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RW5hYmxlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RW5hYmxlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIGVtcHR5IHJlc3VsdCBlcnJvcnNcbiAgICAgICAgICAgICAgICBpZiAoIUVtcHR5UmVzdWx0RXJyb3IuaXNJbnN0YW5jZShlKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nV2FybmluZyhgRXJyb3IgZmV0Y2hpbmcgcmVnaW9ucyBiYXNlZCBvbiBwcm9kdWNlci4gJHtlfWApO1xuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvZHVjZXJUZXh0KSB7XG4gICAgICAgICAgICBmZXRjaFByb2R1Y2VyUmVnaW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFbmFibGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb2R1Y2VyVGV4dCwgc2V0RW5hYmxlZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHRJbnB1dCBuYW1lPVwiUmVnaW9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICBzPXsgNiB9IGw9eyAzIH1cbiAgICAgICAgICAgIGVuYWJsZWQ9eyBlbmFibGVkIH1cbiAgICAgICAgICAgIHZhbHVlPXsgdmFsdWUgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblJlZ2lvbklucHV0LmRpc3BsYXlOYW1lID0gXCJSZWdpb25JbnB1dFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBuYW1lVG9JZCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi9HcmlkXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBvcHRpb25zOiBzdHJpbmdbXTtcbiAgICBzZWxlY3Rpb246IHN0cmluZztcbiAgICBzZWxlY3RUZXh0Pzogc3RyaW5nO1xuICAgIHNlbGVjdFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxTZWxlY3RFbGVtZW50PjtcbiAgICBvbkNoYW5nZTogKHZhbDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgU2VsZWN0SW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBpZCA9IG5hbWVUb0lkKHByb3BzLm5hbWUpO1xuICAgIGxldCBzZWxlY3RUZXh0OiBKU1guRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBpZiAocHJvcHMuc2VsZWN0VGV4dCkge1xuICAgICAgICBzZWxlY3RUZXh0ID0gPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPlxuICAgICAgICAgICAgeyBwcm9wcy5zZWxlY3RUZXh0IH1cbiAgICAgICAgPC9vcHRpb24+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRGaWVsZCBzPXsgcHJvcHMucyB9IG09eyBwcm9wcy5tIH0gbD17IHByb3BzLmwgfT5cbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9eyBpZCB9XG4gICAgICAgICAgICAgICAgbmFtZT17IGlkIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSkgfVxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcHJvcHMuc2VsZWN0aW9uIHx8IHByb3BzLnNlbGVjdFRleHQgfVxuICAgICAgICAgICAgICAgIHJlZj17IHByb3BzLnNlbGVjdFJlZiB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyBzZWxlY3RUZXh0IH1cbiAgICAgICAgICAgICAgICB7IHByb3BzLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyBvcHRpb24gfSBrZXk9eyBvcHRpb24gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhcGl0YWxpemVGaXJzdExldHRlcihvcHRpb24pIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17IGlkIH0+eyBwcm9wcy5uYW1lIH08L2xhYmVsPlxuICAgICAgICA8L0lucHV0RmllbGQ+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGbG9hdGluZ0J0biB9IGZyb20gXCIuL0J1dHRvbnNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgb25DbGljazogKGNoYXI6IHN0cmluZykgPT4gdm9pZDtcbiAgICBjaGFyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTcGVjaWFsQ2hhckJ0bjogUmVhY3QuRkM8SVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXCJidG4tc21hbGxcIiwgXCJjZW50ZXJcIiwgXCJzcGVjLWNoYXItYnRuXCJdO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGbG9hdGluZ0J0biBjbGFzc2VzPXsgY2xhc3NlcyB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gbnVsbCB9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17ICgpID0+IHByb3BzLm9uQ2xpY2socHJvcHMuY2hhcikgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoYXIgfVxuICAgICAgICA8L0Zsb2F0aW5nQnRuPlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmxvYXRpbmdCdG4gfSBmcm9tIFwiLi9CdXR0b25zXCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi9HcmlkXCI7XG5pbXBvcnQgeyBTcGVjaWFsQ2hhckJ0biB9IGZyb20gXCIuL1NwZWNpYWxDaGFyQnRuXCI7XG5cbmVudW0gQ2FzZSB7XG4gICAgVXBwZXIsXG4gICAgTG93ZXIsXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG9uQ2xpY2s6IChjaGFyOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgY2xhc3Nlcz86IHN0cmluZ1tdO1xuICAgIGRpc3BsYXk6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIGNoYXJzOiBzdHJpbmdbXTtcbiAgICBjdXJyZW50Q2FzZTogQ2FzZTtcbn1cblxuZXhwb3J0IGNsYXNzIFNwZWNpYWxDaGFycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zZXJ0Q2hhckF0KHZhbDogc3RyaW5nLCBjaGFyOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGlzTmFOKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbCArIGNoYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbC5zdWJzdHIoMCwgcG9zaXRpb24pICsgY2hhciArIHZhbC5zdWJzdHIocG9zaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhcnM6IFtcbiAgICAgICAgICAgICAgICBcIsOgXCIsIFwiw6FcIiwgXCLDolwiLCBcIsOjXCIsIFwiw6ZcIiwgXCLEjVwiLCBcIsOnXCIsIFwiw6hcIiwgXCLDqVwiLCBcIsOqXCIsIFwiw6tcIiwgXCLDrVwiLCBcIsOuXCIsXG4gICAgICAgICAgICAgICAgXCLDr1wiLCBcIsOxXCIsIFwiw7NcIiwgXCLDtFwiLCBcIsO1XCIsIFwixZNcIiwgXCLFoVwiLCBcIsO5XCIsIFwiw7pcIiwgXCLDu1wiLCBcIsO8XCIsIFwixb5cIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjdXJyZW50Q2FzZTogQ2FzZS5Mb3dlcixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gW1wic3BlY2lhbC1jaGFyc1wiXTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzcGxheSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzZXM9eyBjbGFzc2VzLmNvbmNhdCh0aGlzLnByb3BzLmNsYXNzZXMgPz8gW10pIH0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBTaGlmdCBidXR0b24gKi99XG4gICAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ0J0biBjbGFzc2VzPXsgW1wiY2VudGVyXCIsIFwiZ3JlZW4tYmdcIiwgXCJzaGlmdC1idG5cIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyB0aGlzLmhhbmRsZVNoaWZ0LmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuY3VycmVudENhc2UgPT09IENhc2UuTG93ZXIgPyBcIuKGkVwiIDogXCLihpNcIiB9XG4gICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5jaGFycy5tYXAoKGNoYXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNpYWxDaGFyQnRuIGNoYXI9eyBjaGFyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgY2hhciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoYykgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKGMpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSkgfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlU2hpZnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuY3VycmVudENhc2UgPT09IENhc2UuTG93ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjaGFyczogc3RhdGUuY2hhcnMubWFwKChjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FzZTogQ2FzZS5VcHBlcixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjaGFyczogc3RhdGUuY2hhcnMubWFwKChjaGFyKSA9PiBjaGFyLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRDYXNlOiBDYXNlLkxvd2VyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AgfSBmcm9tIFwiLi9JUHJvcHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sdW1uSGVhZGVyIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaXNOdW1Db2w/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgV2luZVRhYmxlTnVtQ29sczogSUNvbHVtbkhlYWRlcltdID0gW1xuICAgIHsgbmFtZTogXCJUb3RhbCBRdWFudGl0eVwiLCBpc051bUNvbDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogXCJBdmcgUHJpY2VcIiwgaXNOdW1Db2w6IHRydWUgfSxcbiAgICB7IG5hbWU6IFwiUmF0aW5nXCIsIGlzTnVtQ29sOiB0cnVlIH0sXG5dXG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJQ2hpbGRyZW5Qcm9wIHtcbiAgICBjb2x1bW5zOiAoc3RyaW5nIHwgSUNvbHVtbkhlYWRlcilbXTtcbiAgICBjb25kZW5zZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgVGFibGU6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjb25kZW5zZWQgPSBwcm9wcy5jb25kZW5zZWQgPz8gdHJ1ZTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXsgYGhpZ2hsaWdodCByZXNwb25zaXZlICR7Y29uZGVuc2VkID8gXCJjb25kZW5zZWRcIiA6IFwiXCJ9YCB9PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5jb2x1bW5zLm1hcCgoY29sKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGgga2V5PXsgY29sIH0+eyBjb2wgfTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9eyBjb2wubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGNvbC5pc051bUNvbCA/IFwibnVtLWNvbFwiIDogXCJcIiB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNvbC5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICk7XG59O1xuVGFibGUuZGlzcGxheU5hbWUgPSBcIlRhYmxlXCI7XG4iLCJpbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9lc20vZm9ybWF0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsIEVOX0RBU0gsIGdldE5hbWVBbmRUeXBlLCBudW1Ub0RhdGUgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5cbmludGVyZmFjZSBJVGV4dENlbGxQcm9wcyB7XG4gICAgZGVmYXVsdD86IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dENlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRleHRDZWxsUHJvcHM+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZGVmYXVsdDogXCJcIixcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPHRkPnsgdGhpcy5wcm9wcy50ZXh0ID8/IHRoaXMucHJvcHMuZGVmYXVsdCB9PC90ZD47XG4gICAgfVxufTtcblxuaW50ZXJmYWNlIElOdW1DZWxsUHJvcHMge1xuICAgIG51bTogbnVtYmVyIHwgbnVsbDtcbiAgICBtaW5EZWNpbWFscz86IG51bWJlcjtcbiAgICBtYXhEZWNpbWFscz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IE51bUNlbGw6IFJlYWN0LkZDPElOdW1DZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgbnVtID0gcHJvcHMubnVtXG4gICAgICAgIC8vIHVuZGVmaW5lZCB0byB1c2UgYnJvd3NlcidzIGxvY2FsZVxuICAgICAgICA/IHByb3BzLm51bS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByb3BzLm1pbkRlY2ltYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcm9wcy5tYXhEZWNpbWFsc30pXG4gICAgICAgIDogRU5fREFTSDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwibnVtLWNvbFwiPnsgbnVtIH08L3RkPlxuICAgICk7XG59O1xuTnVtQ2VsbC5kaXNwbGF5TmFtZSA9IFwiTnVtQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSVByaWNlQ2VsbFByb3BzIHtcbiAgICBwcmljZTogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IFByaWNlQ2VsbDogUmVhY3QuRkM8SVByaWNlQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxOdW1DZWxsIG51bT17IHByb3BzLnByaWNlIH1cbiAgICAgICAgICAgIG1pbkRlY2ltYWxzPXsgMiB9XG4gICAgICAgICAgICBtYXhEZWNpbWFscz17IDIgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5QcmljZUNlbGwuZGlzcGxheU5hbWUgPSBcIlByaWNlQ2VsbFwiO1xuXG5leHBvcnQgY29uc3QgWWVhckNlbGw6IFJlYWN0LkZDPHt5ZWFyOiBudW1iZXIgfCBudWxsfT4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB5ZWFyID0gcHJvcHMueWVhcj8udG9TdHJpbmcoKSA/PyBcIk5WXCI7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm51bS1jb2xcIj5cbiAgICAgICAgICAgIHsgeWVhciB9XG4gICAgICAgIDwvdGQ+XG4gICAgKTtcbn1cblllYXJDZWxsLmRpc3BsYXlOYW1lID0gXCJZZWFyQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSURhdGVDZWxsUHJvcHMge1xuICAgIGRhdGU6IG51bWJlciB8IG51bGw7XG4gICAgZm9ybWF0Pzogc3RyaW5nO1xufVxuZXhwb3J0IGNvbnN0IERhdGVDZWxsOiBSZWFjdC5GQzxJRGF0ZUNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBkYXRlU3RyID0gcHJvcHMuZGF0ZSA/IGZvcm1hdChudW1Ub0RhdGUocHJvcHMuZGF0ZSksIHByb3BzLmZvcm1hdCA/PyBcIk1NTSBkZCwgeXl5eVwiKSA6IEVOX0RBU0g7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkPnsgZGF0ZVN0ciB9PC90ZD5cbiAgICApO1xufVxuRGF0ZUNlbGwuZGlzcGxheU5hbWUgPSBcIkRhdGVDZWxsXCI7XG5cbmludGVyZmFjZSBJQ29sb3JDZWxsUHJvcHMge1xuICAgIGNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBDb2xvckNlbGw6IFJlYWN0LkZDPElDb2xvckNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBpZiAocHJvcHMuY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIDx0ZD57IGNhcGl0YWxpemVGaXJzdExldHRlcihwcm9wcy5jb2xvcikgfTwvdGQ+O1xuICAgIH1cbiAgICByZXR1cm4gPHRkIC8+O1xufTtcbkNvbG9yQ2VsbC5kaXNwbGF5TmFtZSA9IFwiQ29sb3JDZWxsXCI7XG5cbmludGVyZmFjZSBJTGlua2VkQ2VsbFByb3BzIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG1vZGVsOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBMaW5rZWRDZWxsOiBSZWFjdC5GQzxJTGlua2VkQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHVybCA9IGAvJHtwcm9wcy5tb2RlbH0vJHtwcm9wcy5pZH1gO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxhIGhyZWY9eyB1cmwgfT5cbiAgICAgICAgICAgICAgICB7IHByb3BzLm5hbWUgfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgIClcbn1cbkxpbmtlZENlbGwuZGlzcGxheU5hbWUgPSBcIkxpbmtlZENlbGxcIlxuXG5pbnRlcmZhY2UgSU5hbWVBbmRUeXBlUHJvcHMge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICB3aW5lVHlwZTogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE5hbWVBbmRUeXBlQ2VsbDogUmVhY3QuRkM8SU5hbWVBbmRUeXBlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKHByb3BzLnVybCkge1xuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YSBocmVmPXsgcHJvcHMudXJsIH0+XG4gICAgICAgICAgICAgICAgeyBnZXROYW1lQW5kVHlwZShwcm9wcy5uYW1lLCBwcm9wcy53aW5lVHlwZSkgfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwid2luZXNcIlxuICAgICAgICAgICAgbmFtZT17IGdldE5hbWVBbmRUeXBlKHByb3BzLm5hbWUsIHByb3BzLndpbmVUeXBlKSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5OYW1lQW5kVHlwZUNlbGwuZGlzcGxheU5hbWUgPSBcIk5hbWVBbmRUeXBlQ2VsbFwiO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjZXJDZWxsOiBSZWFjdC5GQzx7aWQ6IG51bWJlciwgbmFtZTogc3RyaW5nfT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwicHJvZHVjZXJzXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUHJvZHVjZXJDZWxsLmRpc3BsYXlOYW1lID0gXCJQcm9kdWNlckNlbGxcIlxuXG5leHBvcnQgY29uc3QgUmVnaW9uQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cInJlZ2lvbnNcIlxuICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5SZWdpb25DZWxsLmRpc3BsYXlOYW1lID0gXCJSZWdpb25DZWxsXCJcblxuZXhwb3J0IGNvbnN0IFZpdGlBcmVhQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIgfCBudWxsLCBuYW1lOiBzdHJpbmcgfCBudWxsfT4gPSAocHJvcHMpID0+IHtcbiAgICBpZiAoIXByb3BzLmlkIHx8ICFwcm9wcy5uYW1lKSB7XG4gICAgICAgIHJldHVybiA8dGQgLz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJ2aXRpLWFyZWFzXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuVml0aUFyZWFDZWxsLmRpc3BsYXlOYW1lID0gXCJWaXRpQXJlYUNlbGxcIlxuXG5leHBvcnQgY29uc3QgV2luZVR5cGVDZWxsOiBSZWFjdC5GQzx7aWQ6IG51bWJlciwgbmFtZTogc3RyaW5nfT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwid2luZS10eXBlc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cbldpbmVUeXBlQ2VsbC5kaXNwbGF5TmFtZSA9IFwiV2luZVR5cGVDZWxsXCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyB1c2VDb2xvcnNTZWxlY3QgfSBmcm9tIFwiLi9Db2xvcklucHV0XCI7XG5pbXBvcnQgeyBNYXRlcmlhbEljb24gfSBmcm9tIFwiLi9NYXRlcmlhbEljb25cIjtcbmltcG9ydCB7IFNlbGVjdElucHV0IH0gZnJvbSBcIi4vU2VsZWN0SW5wdXRcIjtcblxuZXhwb3J0IGVudW0gU29ydGluZ1N0YXRlIHtcbiAgICBOb3RTb3J0ZWQsXG4gICAgQXNjZW5kaW5nLFxuICAgIERlc2NlbmRpbmcsXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgICBzb3J0aW5nU3RhdGU6IFNvcnRpbmdTdGF0ZTtcbiAgICBpc051bUNvbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcz4ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpc051bUNvbDogZmFsc2UsXG4gICAgfTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17ICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCBcIlwiKSArIGAke3RoaXMucHJvcHMuaXNOdW1Db2wgPyBcIiBudW0tY29sXCIgOiBcIlwiIH1gIH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNvbnRlbnQoKSB9XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IChcbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLnByb3BzLm9uQ2xpY2sgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXNOdW1Db2xcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJJY29uKCkgfVxuICAgICAgICAgICAgICAgICAgICB7IHRleHQgfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICB7IHRleHQgfVxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVySWNvbigpIH1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckljb24oKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5zb3J0aW5nU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1N0YXRlLkFzY2VuZGluZzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImFycm93X2Ryb3BfdXBcIiAvPjtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1N0YXRlLkRlc2NlbmRpbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJhcnJvd19kcm9wX2Rvd25cIiAvPjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJhcnJvd19kcm9wX2Rvd25cIiBjbGFzc05hbWU9XCJpbnZpc2libGVcIiAvPjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW50ZXJmYWNlIElGaWx0ZXJQcm9wcyB7XG4gICAgb25DaGFuZ2U6ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcbiAgICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJIZWFkZXI6IFJlYWN0LkZDPElGaWx0ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gcHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17IHByb3BzLnRleHQgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICApO1xufVxuRmlsdGVySGVhZGVyLmRpc3BsYXlOYW1lID0gXCJGaWx0ZXJIZWFkZXJcIjtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdEZpbHRlckhlYWRlcjogUmVhY3QuRkM8SUZpbHRlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGV4dHJhQ2hvaWNlID0gXCJBbnlcIjtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKFNlbGVjdEZpbHRlckhlYWRlci5uYW1lKTtcblxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKHNlbGVjdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT09IGV4dHJhQ2hvaWNlKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKHNlbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHByb3BzLnRleHQgPT09IFwiXCIgPyBleHRyYUNob2ljZSA6IHByb3BzLnRleHQ7XG5cbiAgICBjb25zdCBbc2VsZWN0aW9uT3B0aW9ucywgc2VsZWN0UmVmXSA9IHVzZUNvbG9yc1NlbGVjdChsb2dnZXIsIGV4dHJhQ2hvaWNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxTZWxlY3RJbnB1dCBuYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RSZWY9eyBzZWxlY3RSZWYgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBzZWxlY3Rpb25PcHRpb25zIH1cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb249eyBzZWxlY3Rpb24gfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICApO1xufVxuU2VsZWN0RmlsdGVySGVhZGVyLmRpc3BsYXlOYW1lID0gU2VsZWN0RmlsdGVySGVhZGVyLm5hbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL0lucHV0XCI7XG5pbXBvcnQgeyBTcGVjaWFsQ2hhcnMgfSBmcm9tIFwiLi9TcGVjaWFsQ2hhcnNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgb25DaGFuZ2U6ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvbkZvY3VzPzogKCkgPT4gdm9pZDtcbiAgICBvbkJsdXI/OiAoKSA9PiB2b2lkO1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xuICAgIGlucHV0UmVmPzogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50Pjtcbn1cblxuZXhwb3J0IGNvbnN0IFRleHRJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFt0aW1lc3RhbXAsIF9dID0gUmVhY3QudXNlU3RhdGUobmV3IERhdGUoKSk7XG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgaW5wdXRSZWYgPSBwcm9wcy5pbnB1dFJlZiA/PyBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gICAgY29uc3Qgb25TcGVjaWFsQ2hhckNsaWNrID0gKGNoYXI6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBpbnB1dFJlZi5jdXJyZW50Py5zZWxlY3Rpb25TdGFydCA/PyBOYU47XG4gICAgICAgIHByb3BzLm9uQ2hhbmdlKFNwZWNpYWxDaGFycy5pbnNlcnRDaGFyQXQocHJvcHMudmFsdWUsIGNoYXIsIHBvc2l0aW9uKSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBpbnB1dFJlZi5jdXJyZW50LnNldFNlbGVjdGlvblJhbmdlKHBvc2l0aW9uICsgMSwgcG9zaXRpb24gKyAxKSwgMTApO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkJsdXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKG5vdyAtIHRpbWVzdGFtcCA+IDEwMCkge1xuICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHByb3BzLm9uQmx1cj8uKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldElzQWN0aXZlKHRydWUpO1xuICAgICAgICBwcm9wcy5vbkNoYW5nZSh2YWwpO1xuICAgIH1cblxuICAgIGNvbnN0IG9uRm9jdXMgPSAoKSA9PiB7XG4gICAgICAgIHNldElzQWN0aXZlKHRydWUpO1xuICAgICAgICBwcm9wcy5vbkZvY3VzPy4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPElucHV0IGlucHV0VHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17IHByb3BzLnZhbHVlIH1cbiAgICAgICAgICAgICAgICBlbmFibGVkPXsgcHJvcHMuZW5hYmxlZCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsKSA9PiBvbkNoYW5nZSh2YWwpIH1cbiAgICAgICAgICAgICAgICBvbkJsdXI9eyBvbkJsdXIgfVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9eyBvbkZvY3VzIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBwcm9wcy5jbGFzc05hbWUgfVxuICAgICAgICAgICAgICAgIHM9eyBwcm9wcy5zIH0gbT17IHByb3BzLm0gfSBsPXsgcHJvcHMubCB9XG4gICAgICAgICAgICAgICAgaW5wdXRSZWY9eyBpbnB1dFJlZiB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFNwZWNpYWxDaGFyc1xuICAgICAgICAgICAgICAgIGNsYXNzZXM9eyBbXCJpbmxpbmUtYmxvY2tcIl0gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoYykgPT4gb25TcGVjaWFsQ2hhckNsaWNrKGMpIH1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PXsgaXNBY3RpdmUgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblRleHRJbnB1dC5kaXNwbGF5TmFtZSA9IFwiVGV4dElucHV0XCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJV2luZSB9IGZyb20gXCIuLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgQ29sb3JDZWxsLCBOYW1lQW5kVHlwZUNlbGwsIE51bUNlbGwsIFByb2R1Y2VyQ2VsbCwgUmVnaW9uQ2VsbCwgVml0aUFyZWFDZWxsLCBZZWFyQ2VsbCB9IGZyb20gXCIuL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCB7IEZpbHRlckhlYWRlciwgU29ydGluZ1N0YXRlLCBUYWJsZUhlYWRlciwgU2VsZWN0RmlsdGVySGVhZGVyIH0gZnJvbSBcIi4vVGFibGVIZWFkZXJcIjtcblxuZW51bSBTb3J0aW5nVmFsdWUge1xuICAgIEludmVudG9yeSxcbiAgICBDb2xvcixcbiAgICBOYW1lQW5kVHlwZSxcbiAgICBQcm9kdWNlcixcbiAgICBSZWdpb24sXG4gICAgVml0aUFyZWEsXG4gICAgVmludGFnZSxcbiAgICBSYXRpbmdcbn07XG5cbmV4cG9ydCBlbnVtIENvbHVtblRvRXhjbHVkZSB7XG4gICAgUHJvZHVjZXIsXG4gICAgUmVnaW9uLFxuICAgIFZpdGlBcmVhLFxufVxuXG50eXBlIElQcm9wcyA9IHtcbiAgICB3aW5lczogSVdpbmVbXTtcbiAgICBmaWx0ZXJUZXh0cz86IE1hcDxrZXlvZiBJV2luZSwgc3RyaW5nPjtcbiAgICBvbkZpbHRlckNoYW5nZT86IChjb2x1bW46IGtleW9mIElXaW5lLCB0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgZXhjbHVkZUNvbHVtbj86IENvbHVtblRvRXhjbHVkZTtcbn0gJiBQYXJ0aWFsPERlZmF1bHRQcm9wcz5cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgYXNjZW5kaW5nOiBib29sZWFuO1xuICAgIHNvcnRpbmc6IFNvcnRpbmdWYWx1ZTtcbiAgICBjb2xvclNlbGVjdGlvbjogc3RyaW5nO1xufVxuXG50eXBlIERlZmF1bHRQcm9wcyA9IFJlYWRvbmx5PHR5cGVvZiBkZWZhdWx0UHJvcHM+XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICB3aW5lc1BlclBhZ2U6IDI1MCxcbn07XG5cbmV4cG9ydCBjbGFzcyBXaW5lc1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcyAmIERlZmF1bHRQcm9wcywgSVN0YXRlPiB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzICYgRGVmYXVsdFByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFzY2VuZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHNvcnRpbmc6IFNvcnRpbmdWYWx1ZS5OYW1lQW5kVHlwZSxcbiAgICAgICAgICAgIGNvbG9yU2VsZWN0aW9uOiBcIlwiLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlckhlYWRlciA9IHRoaXMucHJvcHMuZmlsdGVyVGV4dHNcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJIZWFkZXIgeyAuLi50aGlzLmZpbHRlckhlYWRlclByb3BzKFwiaW52ZW50b3J5XCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJjb2xvclwiKSB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJIZWFkZXIgeyAuLi50aGlzLmZpbHRlckhlYWRlclByb3BzKFwid2luZVR5cGVcIikgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVySGVhZGVyIHsgLi4udGhpcy5maWx0ZXJIZWFkZXJQcm9wcyhcInByb2R1Y2VyXCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJyZWdpb25cIikgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVySGVhZGVyIHsgLi4udGhpcy5maWx0ZXJIZWFkZXJQcm9wcyhcInZpdGlBcmVhXCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJsYXN0UHVyY2hhc2VWaW50YWdlXCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJyYXRpbmdcIikgfSAvPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgY29uc3QgZXhDb2wgPSB0aGlzLnByb3BzLmV4Y2x1ZGVDb2x1bW47XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZSBoaWdobGlnaHQgY29uZGVuc2VkXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PVwiaGVhZGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyIHsuLi50aGlzLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLkludmVudG9yeSl9IGlzTnVtQ29sID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZlbnRvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuQ29sb3IpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB7Li4udGhpcy50YWJsZUhlYWRlclByb3BzKFNvcnRpbmdWYWx1ZS5OYW1lQW5kVHlwZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUgYW5kIFR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4Q29sID09PSBDb2x1bW5Ub0V4Y2x1ZGUuUHJvZHVjZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUHJvZHVjZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4Q29sID09PSBDb2x1bW5Ub0V4Y2x1ZGUuUmVnaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgPFRhYmxlSGVhZGVyIHsuLi50aGlzLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLlJlZ2lvbil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4Q29sID09PSBDb2x1bW5Ub0V4Y2x1ZGUuVml0aUFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuVml0aUFyZWEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVml0aWN1bHR1cmFsIEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuVmludGFnZSl9IGlzTnVtQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUmF0aW5nKX0gaXNOdW1Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICB7IGZpbHRlckhlYWRlciB9XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy53aW5lc0ZvclBhZ2UubWFwKCh3aW5lKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXsgd2luZS5pZCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1DZWxsIG51bT17IHdpbmUuaW52ZW50b3J5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4RGVjaW1hbHM9eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvckNlbGwgY29sb3I9eyB3aW5lLmNvbG9yIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmFtZUFuZFR5cGVDZWxsIGlkPXsgd2luZS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyB3aW5lLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5lVHlwZT17IHdpbmUud2luZVR5cGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBleENvbCA9PT0gQ29sdW1uVG9FeGNsdWRlLlByb2R1Y2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IDxQcm9kdWNlckNlbGwgaWQ9eyB3aW5lLnByb2R1Y2VySWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IHdpbmUucHJvZHVjZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBleENvbCA9PT0gQ29sdW1uVG9FeGNsdWRlLlJlZ2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8UmVnaW9uQ2VsbCBpZD17IHdpbmUucmVnaW9uSWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IHdpbmUucmVnaW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhDb2wgPT09IENvbHVtblRvRXhjbHVkZS5WaXRpQXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8Vml0aUFyZWFDZWxsIGlkPXsgd2luZS52aXRpQXJlYUlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyB3aW5lLnZpdGlBcmVhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxZZWFyQ2VsbCB5ZWFyPXsgd2luZS5sYXN0UHVyY2hhc2VWaW50YWdlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtQ2VsbCBtYXhEZWNpbWFscz17IDAgfSBudW09eyB3aW5lLnJhdGluZyB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCB3aW5lc0ZvclBhZ2UoKTogSVdpbmVbXSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gKHRoaXMucHJvcHMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucHJvcHMud2luZXNQZXJQYWdlO1xuICAgICAgICBjb25zdCBzb3J0ZWRXaW5lcyA9IHRoaXMuc29ydGVkV2luZXM7XG4gICAgICAgIHJldHVybiBzb3J0ZWRXaW5lcy5zbGljZShzdGFydCwgIE1hdGgubWluKHNvcnRlZFdpbmVzLmxlbmd0aCxcbiAgICAgICAgICAgIHN0YXJ0ICsgdGhpcy5wcm9wcy53aW5lc1BlclBhZ2UpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBzb3J0ZWRXaW5lcygpIHtcbiAgICAgICAgY29uc3QgYXNjZW5kaW5nTXVsdGlwbGllciA9IHRoaXMuc3RhdGUuYXNjZW5kaW5nID8gMSA6IC0xO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuc29ydGluZykge1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuSW52ZW50b3J5OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT5cbiAgICAgICAgICAgICAgICAgICAgKHcxLmludmVudG9yeSAtIHcyLmludmVudG9yeSkgKiBhc2NlbmRpbmdNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLkNvbG9yOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT5cbiAgICAgICAgICAgICAgICAgICAgdzEuY29sb3IubG9jYWxlQ29tcGFyZSh3Mi5jb2xvcikgKiBhc2NlbmRpbmdNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLk5hbWVBbmRUeXBlOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBTb3J0IGJ5IHdpbmVUeXBlIHRoZW4gbmFtZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3aW5lVHlwZUNvbXBhcmlzb24gPSAodzEud2luZVR5cGUgPz8gXCJcIikubG9jYWxlQ29tcGFyZSh3Mi53aW5lVHlwZSA/PyBcIlwiKSAqIGFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5lVHlwZUNvbXBhcmlzb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5hbWUgY29tcGFyaXNvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHcxLm5hbWUgJiYgdzIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3MS5uYW1lLmxvY2FsZUNvbXBhcmUodzIubmFtZSkgKiBhc2NlbmRpbmdNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodzEubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc2NlbmRpbmdNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHcyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLWFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmVUeXBlQ29tcGFyaXNvbjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuUHJvZHVjZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICB3MS5wcm9kdWNlci5sb2NhbGVDb21wYXJlKHcyLnByb2R1Y2VyKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuUmVnaW9uOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT5cbiAgICAgICAgICAgICAgICAgICAgdzEucmVnaW9uLmxvY2FsZUNvbXBhcmUodzIucmVnaW9uKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuVml0aUFyZWE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICAodzEudml0aUFyZWEgfHwgXCJcIikubG9jYWxlQ29tcGFyZSh3Mi52aXRpQXJlYSB8fCBcIlwiKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuVmludGFnZTpcbiAgICAgICAgICAgICAgICAvLyBTb3J0IE5WIGZpcnN0XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICAodzEubGFzdFB1cmNoYXNlVmludGFnZSA/PyAzMDAwKSAtICh3Mi5sYXN0UHVyY2hhc2VWaW50YWdlID8/IDMwMDApICogYXNjZW5kaW5nTXVsdGlwbGllclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5SYXRpbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICAodzEucmF0aW5nID8/IDApIC0gKHcyLnJhdGluZyA/PyAwKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25IZWFkZXJDbGljayhlOiBSZWFjdC5Nb3VzZUV2ZW50LCBzb3J0aW5nVmFsOiBTb3J0aW5nVmFsdWUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoc29ydGluZ1ZhbCA9PT0gdGhpcy5zdGF0ZS5zb3J0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7YXNjZW5kaW5nOiAhcHJldlN0YXRlLmFzY2VuZGluZ30pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFzY2VuZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzb3J0aW5nOiBzb3J0aW5nVmFsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRhYmxlSGVhZGVyUHJvcHMoc29ydGluZ1ZhbDogU29ydGluZ1ZhbHVlKTpcbiAgICAgICAge3NvcnRpbmdTdGF0ZTogU29ydGluZ1N0YXRlLCBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZH0ge1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmcgPT09IHNvcnRpbmdWYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRpbmdTdGF0ZSA9IHRoaXMuc3RhdGUuYXNjZW5kaW5nID8gU29ydGluZ1N0YXRlLkFzY2VuZGluZyA6IFNvcnRpbmdTdGF0ZS5EZXNjZW5kaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzb3J0aW5nU3RhdGUsXG4gICAgICAgICAgICAgICAgb25DbGljazogKGUpID0+IHRoaXMub25IZWFkZXJDbGljayhlLCBzb3J0aW5nVmFsKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvcnRpbmdTdGF0ZTogU29ydGluZ1N0YXRlLk5vdFNvcnRlZCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IChlKSA9PiB0aGlzLm9uSGVhZGVyQ2xpY2soZSwgc29ydGluZ1ZhbCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ29uc3RydWN0cyBwcm9wcyBmb3IgYSBmaWx0ZXIgaGVhZGVyXG4gICAgcHJpdmF0ZSBmaWx0ZXJIZWFkZXJQcm9wcyhjb2x1bW5OYW1lOiBrZXlvZiBJV2luZSk6XG4gICAgICAgIHtvbkNoYW5nZTogKHRleHQ6IHN0cmluZykgPT4gdm9pZCxcbiAgICAgICAgIHRleHQ6IHN0cmluZ30ge1xuXG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGlmIGJvdGggcHJvcHMgZXhpc3RcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoZmlsdGVyRXhwcikgPT4gdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSEoY29sdW1uTmFtZSwgZmlsdGVyRXhwciksXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnByb3BzLmZpbHRlclRleHRzIS5nZXQoY29sdW1uTmFtZSkgPz8gXCJcIixcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYW5jZWxPckNvbmZpcm1CdG5zIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uc1wiO1xuaW1wb3J0IHsgRmxhZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ZsYWdcIjtcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IHsgUmVnaW9uSW5wdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SZWdpb25JbnB1dFwiO1xuaW1wb3J0IHsgSVJlZ2lvbiB9IGZyb20gXCIuLi8uLi9saWIvUmVzdFwiO1xuXG5pbnRlcmZhY2UgSVJlZ2lvblByb3BzIHtcbiAgICBpc0VkaXRpbmc6IGJvb2xlYW47XG4gICAgcmVnaW9uVGV4dDogc3RyaW5nO1xuICAgIHJlZ2lvbjogSVJlZ2lvbjtcbiAgICBvblJlZ2lvbkNoYW5nZTogKHZhbDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uQ29uZmlybUNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIG9uQ2FuY2VsQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbi8vIFRPRE86IHN0YXRzIGNvbXBvbmVudD9cbmludGVyZmFjZSBJUmVnaW9uU3RhdGUge1xuICAgIHN0YXRzPzogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY2xhc3MgUmVnaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElSZWdpb25Qcm9wcywgSVJlZ2lvblN0YXRlPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IElSZWdpb25Qcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGF0czogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnByb3BzLmlzRWRpdGluZyA/IHRoaXMucmVuZGVyRWRpdCgpIDogdGhpcy5yZW5kZXJWaWV3KCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIHsgY29udGVudCB9XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlclZpZXcoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbCBzPXsgMTIgfT5cbiAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIHsgLyogVE9ETzogZml4IGFsaWdubWVudCAqLyB9XG4gICAgICAgICAgICAgICAgICAgIDxGbGFnIHJlZ2lvbj17IHRoaXMucHJvcHMucmVnaW9uLm5hbWUgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJib2xkXCI+eyB0aGlzLnByb3BzLnJlZ2lvbi5uYW1lIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICB7LyogVE9ETzogU3RhdHMgaGVyZSAqL31cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyRWRpdCgpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPENvbCBzPXsgMTIgfT5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJvbGRcIj5FZGl0IFJlZ2lvbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlZ2lvbklucHV0IHZhbHVlPXsgdGhpcy5wcm9wcy5yZWdpb25UZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMucHJvcHMub25SZWdpb25DaGFuZ2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDYW5jZWxPckNvbmZpcm1CdG5zXG4gICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybUNsaWNrPXsgdGhpcy5wcm9wcy5vbkNvbmZpcm1DbGljayB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsQ2xpY2s9eyB0aGlzLnByb3BzLm9uQ2FuY2VsQ2xpY2sgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZsb2F0aW5nQnRuIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uc1wiO1xuaW1wb3J0IHsgRml4ZWRBY3Rpb25MaXN0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRml4ZWRBY3Rpb25MaXN0XCI7XG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyaWRcIjtcbmltcG9ydCB7IE1hdGVyaWFsSWNvbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01hdGVyaWFsSWNvblwiO1xuaW1wb3J0IHsgUHJlbG9hZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJlbG9hZGVyXCI7XG5pbXBvcnQgeyBDb2x1bW5Ub0V4Y2x1ZGUsIFdpbmVzVGFibGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XaW5lc1RhYmxlXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi8uLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyBJUmVnaW9uLCBJVml0aUFyZWFTdGF0cywgSVdpbmUgfSBmcm9tIFwiLi4vLi4vbGliL1Jlc3RcIjtcbmltcG9ydCB7IGdldFJlZ2lvbiwgZ2V0Vml0aUFyZWFTdGF0cywgZ2V0V2luZXMsIHVwZGF0ZVJlZ2lvbiB9IGZyb20gXCIuLi8uLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgUmVnaW9uIH0gZnJvbSBcIi4vUmVnaW9uXCI7XG5pbXBvcnQgeyBSZWdpb25WaXRpQXJlYXNUYWJsZSB9IGZyb20gXCIuL1JlZ2lvblZpdGlBcmVhc1RhYmxlXCI7XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIGlzRWRpdGluZzogYm9vbGVhbjtcbiAgICAvLyBFZGl0YWJsZVxuICAgIHJlZ2lvblRleHQ6IHN0cmluZztcbiAgICAvLyBcIlB1cmVcIiBzdGF0ZVxuICAgIHJlZ2lvbj86IElSZWdpb247XG4gICAgd2luZXM6IElXaW5lW107XG4gICAgdml0aUFyZWFzOiBJVml0aUFyZWFTdGF0c1tdO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWdpb25JZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmVnaW9uUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzRWRpdGluZzogZmFsc2UsXG4gICAgICAgICAgICByZWdpb25UZXh0OiBcIlwiLFxuICAgICAgICAgICAgcmVnaW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB3aW5lczogW10sXG4gICAgICAgICAgICB2aXRpQXJlYXM6IFtdLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHRoaXMuY29uc3RydWN0b3IubmFtZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMub25SZWdpb25DaGFuZ2UgPSB0aGlzLm9uUmVnaW9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25FZGl0Q2xpY2sgPSB0aGlzLm9uRWRpdENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Db25maXJtQ2xpY2sgPSB0aGlzLm9uQ29uZmlybUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DYW5jZWxDbGljayA9IHRoaXMub25DYW5jZWxDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5nZXRBbmRTZXRSZWdpb24oKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0QW5kU2V0V2luZXMoKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0QW5kU2V0Vml0aUFyZWFTdGF0cygpLFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldEFuZFNldFJlZ2lvbigpIHtcbiAgICAgICAgY29uc3QgcmVnaW9uID0gYXdhaXQgZ2V0UmVnaW9uKHtpZDogdGhpcy5wcm9wcy5yZWdpb25JZH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdpb24sIHJlZ2lvblRleHQ6IHJlZ2lvbi5uYW1lfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRBbmRTZXRXaW5lcygpIHtcbiAgICAgICAgY29uc3Qgd2luZXMgPSBhd2FpdCBnZXRXaW5lcyh7cmVnaW9uSWQ6IHRoaXMucHJvcHMucmVnaW9uSWR9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2luZXN9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldEFuZFNldFZpdGlBcmVhU3RhdHMoKSB7XG4gICAgICAgIGNvbnN0IHZpdGlBcmVhcyA9IGF3YWl0IGdldFZpdGlBcmVhU3RhdHMoe3JlZ2lvbklkOiB0aGlzLnByb3BzLnJlZ2lvbklkfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZpdGlBcmVhczogdml0aUFyZWFzfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnJlZ2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIDxQcmVsb2FkZXIgLz47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPFJlZ2lvbiBpc0VkaXRpbmc9eyB0aGlzLnN0YXRlLmlzRWRpdGluZyB9XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbj17IHRoaXMuc3RhdGUucmVnaW9uIH1cbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uVGV4dD17IHRoaXMuc3RhdGUucmVnaW9uVGV4dCB9XG4gICAgICAgICAgICAgICAgICAgIG9uUmVnaW9uQ2hhbmdlPXsgdGhpcy5vblJlZ2lvbkNoYW5nZSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybUNsaWNrPXsgdGhpcy5vbkNvbmZpcm1DbGljayB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsQ2xpY2s9eyB0aGlzLm9uQ2FuY2VsQ2xpY2sgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBzPXsgMTIgfSBsPXsgOSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlZpdGljdWx0dXJhbCBBcmVhczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVnaW9uVml0aUFyZWFzVGFibGUgdml0aUFyZWFzPXsgdGhpcy5zdGF0ZS52aXRpQXJlYXMgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBzPXsgMTIgfSBsPXsgMyB9IGNsYXNzZXM9eyBbXCJmaXhlZC1hY3Rpb24tZGl2XCJdIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWRBY3Rpb25MaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ0J0biBvbkNsaWNrPXsgdGhpcy5vbkVkaXRDbGljayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9eyBbXCJ5ZWxsb3ctYmdcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImVkaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkQWN0aW9uTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBzPXsgMTIgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5XaW5lczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V2luZXNUYWJsZSB3aW5lcz17IHRoaXMuc3RhdGUud2luZXMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVDb2x1bW49eyBDb2x1bW5Ub0V4Y2x1ZGUuUmVnaW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkVkaXRDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNFZGl0aW5nOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlZ2lvbkNoYW5nZSh2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlZ2lvblRleHQ6IHZhbCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkNvbmZpcm1DbGljaygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2lvbiA9IGF3YWl0IHVwZGF0ZVJlZ2lvbih7aWQ6IHRoaXMucHJvcHMucmVnaW9uSWQsIG5hbWU6IHRoaXMuc3RhdGUucmVnaW9uVGV4dH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZWdpb246IHJlZ2lvbixcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dXYXJuaW5nKGBGYWlsZWQgdG8gc2F2ZSBjaGFuZ2VzIHRvIGRhdGFiYXNlOiAke2Vycn1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DYW5jZWxDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7XG4gICAgICAgICAgICBpc0VkaXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgcmVnaW9uVGV4dDogc3RhdGUucmVnaW9uID8gc3RhdGUucmVnaW9uLm5hbWUgOiBcIlwiLFxuICAgICAgICB9KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhYmxlXCI7XG5pbXBvcnQgeyBOdW1DZWxsLCBQcmljZUNlbGwsIFZpdGlBcmVhQ2VsbCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCB7IElWaXRpQXJlYVN0YXRzIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5cbmludGVyZmFjZSBJUmVnaW9uV2luZVRhYmxlUHJvcHMge1xuICAgIHZpdGlBcmVhczogSVZpdGlBcmVhU3RhdHNbXTtcbn1cblxuZXhwb3J0IGNvbnN0IFJlZ2lvblZpdGlBcmVhc1RhYmxlOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJUmVnaW9uV2luZVRhYmxlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICBjb2x1bW5zPXsgKFtcbiAgICAgICAgICAgICAgICBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwiV2luZXNcIiwgaXNOdW1Db2w6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwiQXZnIFByaWNlXCIsIGlzTnVtQ29sOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBcIkF2ZyBSYXRpbmdcIiwgaXNOdW1Db2w6IHRydWUgfSxcbiAgICAgICAgICAgIF0pIH1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyBwcm9wcy52aXRpQXJlYXMubWFwKCh2aXRpQXJlYSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9eyB2aXRpQXJlYS5pZCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpdGlBcmVhQ2VsbCBpZD17IHZpdGlBcmVhLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsgdml0aUFyZWEubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE51bUNlbGwgbnVtPXsgdml0aUFyZWEudG90YWxXaW5lcyB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VDZWxsIHByaWNlPXsgdml0aUFyZWEuYXZnUHJpY2UgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE51bUNlbGwgbnVtPXsgdml0aUFyZWEuYXZnUmF0aW5nIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhEZWNpbWFscz17IDEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkgfVxuICAgICAgICA8L1RhYmxlPlxuICAgICk7XG59XG5SZWdpb25WaXRpQXJlYXNUYWJsZS5kaXNwbGF5TmFtZSA9IFwiUmVnaW9uVml0aUFyZWFzVGFibGVcIlxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgb25Mb2FkIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcIi4uLy4uL2xpYi93aWRnZXRzXCI7XG5pbXBvcnQgeyBSZWdpb25Qcm9maWxlIH0gZnJvbSBcIi4vUmVnaW9uUHJvZmlsZUFwcFwiO1xuXG5kZWNsYXJlIGNvbnN0IGlkOiBudW1iZXI7XG5cbm9uTG9hZCgoKSA9PiB7XG4gICAgbmF2YmFyKCk7XG4gICAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQoUmVnaW9uUHJvZmlsZSwge3JlZ2lvbklkOiBpZH0pLFxuICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lvbl9wcm9maWxlLWNvbnRhaW5lclwiKSk7XG59KTtcbiIsImltcG9ydCB7IHJlYWRDb29raWUgfSBmcm9tIFwiLi9Db29raWVzXCI7XG5pbXBvcnQgeyBJRGljdCwgaXNFbXB0eSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IEhFQURFUlMgPSB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJYLUNTUkZUb2tlblwiOiByZWFkQ29va2llKFwiY3NyZnRva2VuXCIpIHx8IFwiXCIsXG59O1xuXG5leHBvcnQgdHlwZSBJUXVlcnlQYXJhbXMgPSBJRGljdDxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPjtcblxuZnVuY3Rpb24gZW5jb2RlUGFyYW1zKHBhcmFtczogSVF1ZXJ5UGFyYW1zKTogc3RyaW5nIHtcbiAgICBpZiAoaXNFbXB0eShwYXJhbXMpKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gXCI/XCIgKyBPYmplY3QuZW50cmllcyhwYXJhbXMpLm1hcCgoW2ssIHZdKSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoayl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHYpfWApLmpvaW4oXCImXCIpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVKc29uKG9iajogb2JqZWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVjb2RlSnNvbklmQW55KHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIGlmIChwYXJzZUZsb2F0KHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC1sZW5ndGhcIikgPz8gXCIwXCIpID4gMFxuICAgICAgICAmJiByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG59XG5cbnR5cGUgVmlub3RlY2FFcnJvciA9XG4gICAgfCB7XCJOb3RGb3VuZFwiOiBzdHJpbmd9XG4gICAgfCB7XCJJbnRlcm5hbFwiOiBzdHJpbmd9XG4gICAgfCB7XCJNaXNzaW5nQ29uc3RyYWludFwiOiBzdHJpbmd9XG4gICAgfCB7XCJCYWRSZXF1ZXN0XCI6IHN0cmluZ307XG5cbmZ1bmN0aW9uIGlzVmlub3RlY2FFcnJvcihvYmo6IG9iamVjdCk6IG9iaiBpcyBWaW5vdGVjYUVycm9yIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICByZXR1cm4ga2V5cy5sZW5ndGggPT09IDFcbiAgICAgICAgJiYgW1wiTm90Rm91bmRcIiwgXCJJbnRlcm5hbFwiLCBcIk1pc3NpbmdDb25zdHJhaW50XCIsIFwiQmFkUmVxdWVzdFwiXVxuICAgICAgICAgICAgLmZpbmQoKGkpID0+IGkgPT09IGtleXNbMF0pICE9PSB1bmRlZmluZWQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrUmVzcG9uc2UocmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID4gMzEwKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBkZWNvZGVKc29uSWZBbnkocmVzcG9uc2UpO1xuICAgICAgICBpZiAoaXNWaW5vdGVjYUVycm9yKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgJHtPYmplY3Qua2V5cyhtZXNzYWdlKVswXX06ICR7T2JqZWN0LnZhbHVlcyhtZXNzYWdlKVswXX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZUpzb25JZkFueShyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IEVycm9yKGF3YWl0IHJlc3BvbnNlLnRleHQoKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgR0VUIHJlcXVlc3QgdG8gdGhlIHVybCB3aXRoIHRoZSBvcHRpb25hbCBwYXJhbWV0ZXJzLCB0aGVuIHBhcnNlc1xuICogdGhlIEpTT04gcmVzcG9uc2UuXG4gKiBAcGFyYW0gdXJsIEEgVVJMIHRvIHJlcXVlc3RcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb3B0aW9uYWwgZGljdGlvbmFyeSBvZiBwYXJhbWV0ZXJzIHRvIHRoZWlyIHZhbHVlc1xuICogQHJldHVybnMgcGFyc2VkIEpTT04gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgUE9TVCByZXF1ZXN0IHRvIHRoZSB1cmwgd2l0aCB0aGUgb3B0aW9uYWwgcGFyYW1ldGVycyBjb250YWluaW5nXG4gKiB0aGUgYm9keSwgdGhlbiBwYXJzZXMgdGhlIEpTT04gcmVzcG9uc2UuXG4gKiBAcGFyYW0gdXJsIEEgVVJMIHRvIHJlcXVlc3RcbiAqIEBwYXJhbSBib2R5IEpTT04gb2JqZWN0IHRvIGVuY29kZSBhbmQgc2VuZCB0byB0aGUgc2VydmVyXG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9wdGlvbmFsIGRpY3Rpb25hcnkgb2YgcGFyYW1ldGVycyB0byB0aGVpciB2YWx1ZXNcbiAqIEByZXR1cm5zIHBhcnNlZCBKU09OIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0PFJlc3BvbnNlPih1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGVuY29kZUpzb24oYm9keSksXG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdEZvcm08UmVzcG9uc2U+KHVybDogc3RyaW5nLCBmb3JtOiBGb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGZvcm0sXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgUFVUIHJlcXVlc3QgdG8gdGhlIHVybCB3aXRoIHRoZSBvcHRpb25hbCBwYXJhbWV0ZXJzIGNvbnRhaW5pbmdcbiAqIHRoZSBib2R5LCB0aGVuIHBhcnNlcyB0aGUgSlNPTiByZXNwb25zZS5cbiAqIEBwYXJhbSB1cmwgQSBVUkwgdG8gcmVxdWVzdFxuICogQHBhcmFtIGJvZHkgSlNPTiBvYmplY3QgdG8gZW5jb2RlIGFuZCBzZW5kIHRvIHRoZSBzZXJ2ZXJcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb3B0aW9uYWwgZGljdGlvbmFyeSBvZiBwYXJhbWV0ZXJzIGFuZCB0aGVpciB2YWx1ZXNcbiAqIEByZXR1cm5zIHBhcnNlZCBKU09OIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXQ8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBib2R5OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZW5jb2RlSnNvbihib2R5KSxcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dEZvcm08UmVzcG9uc2U+KHVybDogc3RyaW5nLCBmb3JtOiBGb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZm9ybSxcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhdGNoPFJlc3BvbnNlPih1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcz0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBlbmNvZGVKc29uKGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVfPFJlc3BvbnNlPih1cmw6IHN0cmluZywgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG4iLCJjb25zdCBNSUxMSVNFQ09ORFNfSU5fREFZID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBDcmVhdGUgb3IgdXBkYXRlIGEgY29va2llXG4gKiBAcGFyYW0gbmFtZSBuYW1lL2tleSBvZiB0aGUgY29va2llXG4gKiBAcGFyYW0gdmFsdWUgdmFsdWUgdG8gc3RvcmVcbiAqIEBwYXJhbSBkYXlzIG51bWJlciBvZiBkYXlzIHRoZSBjb29raWUgaXMgdmFsaWQsIGRlZmF1bHRzIHRvIHRoZSBjdXJyZW50IHNlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGRheXM/OiBudW1iZXIpIHtcbiAgICBsZXQgZXhwaXJlcztcbiAgICBpZiAoZGF5cykge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiBNSUxMSVNFQ09ORFNfSU5fREFZKSk7XG4gICAgICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBleHBpcmVzID0gXCJcIjtcbiAgICB9XG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZENvb2tpZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcbiAgICBmb3IgKGxldCBjIG9mIGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikpIHtcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSBcIiBcIikge1xuICAgICAgICAgICAgYyA9IGMuc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyKG5hbWVFUS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29va2llKG5hbWU6IHN0cmluZykge1xuICAgIGNyZWF0ZUNvb2tpZShuYW1lLCBcIlwiLCAtMSk7XG59XG4iLCJpbXBvcnQgeyBwb3N0IH0gZnJvbSBcIi4vQXBpSGVscGVyXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCIuL3dpZGdldHNcIjtcblxuLyoqIFByb3ZpZGVzIGxvZ2dpbmcgZnVuY3Rpb25hbGl0eSBmb3IgY2xpZW50LXNpZGUgSmF2YVNjcmlwdCBlcnJvcnMuICovXG5lbnVtIExvZ0xldmVsIHtcbiAgICBDcml0aWNhbCA9IFwiY3JpdGljYWxcIixcbiAgICBFcnJvciA9IFwiZXJyb3JcIixcbiAgICBXYXJuaW5nID0gXCJ3YXJuaW5nXCIsXG4gICAgSW5mbyA9IFwiaW5mb1wiLFxuICAgIERlYnVnID0gXCJkZWJ1Z1wiLFxufVxuXG5pbnRlcmZhY2UgSUxvZ1Jlc3VsdCB7XG4gICAgc3VjY2VzczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcbiAgICAvKipcbiAgICAgKiBMb2dnaW5nIGNsYXNzIGZvciBjbGllbnQtc2lkZSBlcnJvcnMgdGhhdCB3aWxsIGJlIHBvc3RlZCB0byB0aGUgc2VydmVyXG4gICAgICogZm9yIGxvZ2dpbmcgdG8gdGhlIHNhbWUgZmlsZSBhcyBhbGwgb3RoZXIgdmlub3RlY2EgbG9ncy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtb2R1bGUgdGhlIG5hbWUgb2YgdGhlIG1vZHVsZSBmcm9tIHdoaWNoIHRoZSBsb2cgbWVzc2FnZXMgb3JpZ2luYXRlLlxuICAgICAqIEBwYXJhbSB0b0NvbnNvbGUgd2hldGhlciB0byBhbHNvIHByaW50IG1lc3NhZ2VzIHRvIHRoZSBjb25zb2xlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2R1bGU6IHN0cmluZywgcHJpdmF0ZSB0b0NvbnNvbGUgPSBmYWxzZSkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lYW50IGZvciBpcnJlY292ZXJhYmxlIG9yIHRydWx5IGV4Y2VwdGlvbmFsIGVycm9ycy4gQSB0b2FzdCB3aXRoIHRoZVxuICAgICAqIGxvZyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgbG9nIHdpbGwgYmUgc2VudCBiYWNrIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBmb3IgcG9zdGVyaXR5LlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dDcml0aWNhbChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBMb2dMZXZlbC5Dcml0aWNhbDtcbiAgICAgICAgdGhpcy50b2FzdChsZXZlbCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSB0b2FzdCB3aXRoIHRoZSBsb2cgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIGxvZyB3aWxsIGJlIHNlbnRcbiAgICAgKiBiYWNrIHRvIHRoZSBzZXJ2ZXIgZm9yIHBvc3Rlcml0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nRXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gTG9nTGV2ZWwuRXJyb3I7XG4gICAgICAgIHRoaXMudG9hc3QobGV2ZWwsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgdG9hc3Qgd2l0aCB0aGUgbG9nIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSBsb2cgd2lsbCBiZSBzZW50XG4gICAgICogYmFjayB0byB0aGUgc2VydmVyIGZvciBwb3N0ZXJpdHkuXG4gICAgICovXG4gICAgcHVibGljIGxvZ1dhcm5pbmcobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gTG9nTGV2ZWwuV2FybmluZztcbiAgICAgICAgdGhpcy50b2FzdChsZXZlbCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ0luZm8obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhMb2dMZXZlbC5JbmZvLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nRGVidWcobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhMb2dMZXZlbC5EZWJ1ZywgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2cobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMudG9Db25zb2xlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtsZXZlbC50b1VwcGVyQ2FzZSgpfSAke25ldyBEYXRlKCl9ICR7dGhpcy5tb2R1bGV9OiAke21lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IElMb2dSZXN1bHQgPSBhd2FpdCBwb3N0KFwiL3Jlc3QvbG9nc1wiLCB7XG4gICAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgaW5zdGFuY2VvZiBPYmplY3QgPyBcIlwiIDogbWVzc2FnZSxcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5tb2R1bGUsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3QoTG9nTGV2ZWwuRXJyb3IsIFwiRmFpbGVkIHRvIHNlbmQgY2xpZW50LXNpZGUgbG9ncyB0byBzZXJ2ZXIuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2FzdChsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0b2FzdChgJHtsZXZlbC50b1VwcGVyQ2FzZSgpfTogJHttZXNzYWdlfWApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGRlbGV0ZV8sIGdldCwgSVF1ZXJ5UGFyYW1zLCBwYXRjaCwgcG9zdCwgcG9zdEZvcm0sIHB1dCwgcHV0Rm9ybSB9IGZyb20gXCIuL0FwaUhlbHBlclwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7IElDb2xvciwgSUdyYXBlLCBJR3JhcGVGb3JtLCBJTW9zdENvbW1vblB1cmNoYXNlRGF0ZSwgSVByb2R1Y2VyLCBJUHJvZHVjZXJGb3JtLCBJUHVyY2hhc2UsXG4gICAgICAgICBJUHVyY2hhc2VDb3VudCwgSVB1cmNoYXNlRm9ybSwgSVJlZ2lvbiwgSVJlZ2lvbkZvcm0sIElTdG9yZSwgSVN0b3JlRm9ybSwgSVRvcEVudGl0eSxcbiAgICAgICAgIElUb3RhbExpdGVycywgSVZpdGlBcmVhLCBJVml0aUFyZWFGb3JtLCBJVml0aUFyZWFTdGF0cywgSVdpbmUsIElXaW5lQ291bnQsIElXaW5lRm9ybSxcbiAgICAgICAgIElXaW5lR3JhcGUsIElXaW5lR3JhcGVzRm9ybSwgSVdpbmVQYXRjaEZvcm0sIElXaW5lVHlwZSwgSVdpbmVUeXBlRm9ybSB9IGZyb20gXCIuL1Jlc3RcIjtcbmltcG9ydCB7IElSZXN0TW9kZWwgfSBmcm9tIFwiLi9SZXN0VHlwZXNcIjtcbmltcG9ydCB7IElEaWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGljdChtb2RlbHM6IElSZXN0TW9kZWxbXSk6IElEaWN0PHN0cmluZyB8IG51bGw+IHtcbiAgICBjb25zdCByZXN1bHQ6IElEaWN0PHN0cmluZyB8IG51bGw+ID0ge307XG4gICAgbW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICAgIHJlc3VsdFttb2RlbC5uYW1lXSA9IG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNsYXNzIEVtcHR5UmVzdWx0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgcHVibGljIHN0YXRpYyBpc0luc3RhbmNlKGVycjogRXJyb3IpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGVyci5uYW1lID09PSB0aGlzLk5BTUU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgTkFNRSA9IFwiRW1wdHlSZXN1bHRFcnJvclwiO1xuXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBFbXB0eVJlc3VsdEVycm9yLk5BTUU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub25OdWxscyhvYmo6IElEaWN0PHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCB1bmRlZmluZWQ+KTogSVF1ZXJ5UGFyYW1zIHtcbiAgICBjb25zdCBxOiBJUXVlcnlQYXJhbXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoaykgPT4gQm9vbGVhbihvYmpba10pKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIHFba10gPSBvYmpba10gYXMgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcbiAgICB9KTtcbiAgICByZXR1cm4gcTtcbn1cblxuZnVuY3Rpb24gc2luZ2xlRW50aXR5R2V0dGVyPFBhcmFtcywgUmVzcD4oXG4gICAgbGlzdEdldHRlcjogKHBhcmFtczogUGFyYW1zKSA9PiBQcm9taXNlPFJlc3BbXT4sXG4pOiAocGFyYW1zOiBQYXJhbXMpID0+IFByb21pc2U8UmVzcD4ge1xuICAgIC8vIFNoYXZlIG9mZiAnZ2V0J1xuICAgIGNvbnN0IG9iak5hbWUgPSBsaXN0R2V0dGVyLm5hbWUuc3Vic3RyKDMpO1xuICAgIHJldHVybiBhc3luYyAocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGxpc3RHZXR0ZXIocGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBSZWNlaXZlZCBtb3JlIHRoYW4gb25lICR7b2JqTmFtZX0gcmVzdWx0IHdoZW4gb25lIHdhcyBleHBlY3RlZGA7XG4gICAgICAgICAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKFwiUmVzdEFwaVwiKTtcbiAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgIHRocm93IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlPFJlcVBhcmFtcywgUmVzcCwgRm9ybT4oXG4gICAgbGlzdEdldHRlcjogKHBhcmFtczogUmVxUGFyYW1zKSA9PiBQcm9taXNlPFJlc3BbXT4sXG4gICAgY3JlYXRvcjogKGZvcm06IEZvcm0pID0+IFByb21pc2U8UmVzcD4sXG4pOiAocGFyYW1zOiBSZXFQYXJhbXMsIGZvcm06IEZvcm0pID0+IFByb21pc2U8UmVzcD4ge1xuICAgIGNvbnN0IG9iak5hbWUgPSBsaXN0R2V0dGVyLm5hbWUuc3Vic3RyKDMpO1xuICAgIHJldHVybiBhc3luYyAocGFyYW1zLCBmb3JtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBsaXN0R2V0dGVyKHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbmV3T2JqID0gYXdhaXQgY3JlYXRvcihmb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgUmVjZWl2ZWQgbW9yZSB0aGFuIG9uZSAke29iak5hbWV9IHJlc3VsdCB3aGVuIG9uZSB3YXMgZXhwZWN0ZWRgO1xuICAgICAgICBuZXcgTG9nZ2VyKFwiUmVzdEFwaVwiKS5sb2dFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgdGhyb3cgRXJyb3IobWVzc2FnZSk7XG4gICAgfTtcbn1cblxuLyogQ09MT1JTICovXG5pbnRlcmZhY2UgSUdldENvbG9yUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29sb3JzKHsgaWQsIG5hbWUgfTogSUdldENvbG9yUGFyYW1zKTogUHJvbWlzZTxJQ29sb3JbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lIH0pO1xuICAgIGNvbnN0IGNvbG9yczogSUNvbG9yW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9jb2xvcnNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgaWYgKGNvbG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVtcHR5UmVzdWx0RXJyb3IoXCJFbXB0eSByZXN1bHQgcmV0dXJuZWQgZm9yIGNvbG9yXCIpO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3JzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q29sb3IgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0Q29sb3JzKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcENvbG9ycygpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9jb2xvcnMvdG9wXCIpO1xufVxuXG4vKiBHUkFQRVMgKi9cbmludGVyZmFjZSBJR2V0R3JhcGVzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R3JhcGVzKHsgaWQsIG5hbWUgfTogSUdldEdyYXBlc1BhcmFtcyk6IFByb21pc2U8SUdyYXBlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSB9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvZ3JhcGVzXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0R3JhcGUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0R3JhcGVzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZUdyYXBlID0gZ2V0T3JDcmVhdGUoZ2V0R3JhcGVzLCBjcmVhdGVHcmFwZSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcmFwZShncmFwZTogSUdyYXBlRm9ybSk6IFByb21pc2U8SUdyYXBlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9ncmFwZXNcIiwgZ3JhcGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR3JhcGUoaWQ6IG51bWJlciwgZ3JhcGU6IElHcmFwZUZvcm0pOiBQcm9taXNlPElHcmFwZT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L2dyYXBlcy8ke2lkfWAsIGdyYXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcEdyYXBlcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9ncmFwZXMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBQUk9EVUNFUlMgKi9cbmludGVyZmFjZSBJR2V0UHJvZHVjZXJzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHJlZ2lvbklkPzogbnVtYmVyO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmUtbGVuZ3RoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjZXJzKHtpZCwgbmFtZSwgcmVnaW9uSWR9OiBJR2V0UHJvZHVjZXJzUGFyYW1zKTogUHJvbWlzZTxJUHJvZHVjZXJbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7aWQsIG5hbWUsIHJlZ2lvbl9pZDogcmVnaW9uSWR9KTtcbiAgICBjb25zdCBwcm9kdWNlcnM6IElQcm9kdWNlcltdID0gYXdhaXQgZ2V0KFwiL3Jlc3QvcHJvZHVjZXJzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiBwcm9kdWNlcnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWNlciA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRQcm9kdWNlcnMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlUHJvZHVjZXIgPSBnZXRPckNyZWF0ZShnZXRQcm9kdWNlcnMsIGNyZWF0ZVByb2R1Y2VyKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y2VyKHByb2R1Y2VyOiBJUHJvZHVjZXJGb3JtKTogUHJvbWlzZTxJUHJvZHVjZXI+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3Byb2R1Y2Vyc1wiLCBwcm9kdWNlcik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWNlcihwcm9kdWNlcjogSVByb2R1Y2VyKTogUHJvbWlzZTxJUHJvZHVjZXI+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9wcm9kdWNlcnMvJHtwcm9kdWNlci5pZH1gLCBwcm9kdWNlcik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWNlcihpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGRlbGV0ZV8oYC9yZXN0L3Byb2R1Y2Vycy8ke2lkfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wUHJvZHVjZXJzKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3Byb2R1Y2Vycy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFBVUkNIQVNFUyAqL1xuaW50ZXJmYWNlIElHZXRQdXJjaGFzZXNQYXJhbXMge1xuICAgIHdpbmVJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFB1cmNoYXNlcyh7d2luZUlkfTogSUdldFB1cmNoYXNlc1BhcmFtcyk6IFByb21pc2U8SVB1cmNoYXNlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyB3aW5lX2lkOiB3aW5lSWQgfSk7XG4gICAgY29uc3QgcHVyY2hhc2VzID0gYXdhaXQgZ2V0PElQdXJjaGFzZVtdPihcIi9yZXN0L3B1cmNoYXNlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gcHVyY2hhc2VzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2UocHVyY2hhc2U6IElQdXJjaGFzZUZvcm0pOiBQcm9taXNlPElQdXJjaGFzZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvcHVyY2hhc2VzXCIsIHB1cmNoYXNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVB1cmNoYXNlKGlkOiBudW1iZXIsIHB1cmNoYXNlOiBJUHVyY2hhc2VGb3JtKTogUHJvbWlzZTxJUHVyY2hhc2U+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9wdXJjaGFzZXMvJHtpZH1gLCBwdXJjaGFzZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQdXJjaGFzZShpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGRlbGV0ZV8oYC9yZXN0L3B1cmNoYXNlcy8ke2lkfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9zdENvbW1vblB1cmNoYXNlRGF0ZSgpOiBQcm9taXNlPElNb3N0Q29tbW9uUHVyY2hhc2VEYXRlPiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3B1cmNoYXNlcy9tb3N0LWNvbW1vbi1wdXJjaGFzZS1kYXRlXCIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG90YWxMaXRlcnMoKTogUHJvbWlzZTxJVG90YWxMaXRlcnM+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHVyY2hhc2VzL3RvdGFsLWxpdGVyc1wiKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFB1cmNoYXNlQ291bnQoKTogUHJvbWlzZTxJUHVyY2hhc2VDb3VudD4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wdXJjaGFzZXMvY291bnRcIik7XG59XG5cbi8qIFJFR0lPTlMgKi9cbmludGVyZmFjZSBJR2V0UmVnaW9uUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHByb2R1Y2VyTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlZ2lvbnMoeyBpZCwgbmFtZSwgcHJvZHVjZXJOYW1lIH06IElHZXRSZWdpb25QYXJhbXMpOiBQcm9taXNlPElSZWdpb25bXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lLCBwcm9kdWNlcl9uYW1lOiBwcm9kdWNlck5hbWUgfSk7XG4gICAgY29uc3QgcmVnaW9uczogSVJlZ2lvbltdID0gYXdhaXQgZ2V0KFwiL3Jlc3QvcmVnaW9uc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gcmVnaW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlZ2lvbiA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRSZWdpb25zKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVJlZ2lvbiA9IGdldE9yQ3JlYXRlKGdldFJlZ2lvbnMsIGNyZWF0ZVJlZ2lvbik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZWdpb24ocmVnaW9uOiBJUmVnaW9uRm9ybSk6IFByb21pc2U8SVJlZ2lvbj4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvcmVnaW9uc1wiLCByZWdpb24pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVnaW9uKHJlZ2lvbjogSVJlZ2lvbik6IFByb21pc2U8SVJlZ2lvbj4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3JlZ2lvbnMvJHtyZWdpb24uaWR9YCwgcmVnaW9uKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFJlZ2lvbnMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcmVnaW9ucy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFNUT1JFUyAqL1xuaW50ZXJmYWNlIElHZXRTdG9yZVBhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0b3Jlcyh7aWQsIG5hbWV9OiBJR2V0U3RvcmVQYXJhbXMpOiBQcm9taXNlPElTdG9yZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtpZCwgbmFtZX0pO1xuICAgIGNvbnN0IHN0b3JlczogSVN0b3JlW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9zdG9yZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHN0b3Jlcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0b3JlID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFN0b3Jlcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVTdG9yZSA9IGdldE9yQ3JlYXRlKGdldFN0b3JlcywgY3JlYXRlU3RvcmUpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3RvcmUoc3RvcmU6IElTdG9yZUZvcm0pOiBQcm9taXNlPElTdG9yZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvc3RvcmVzXCIsIHN0b3JlKTtcbn1cblxuLyogVklUSSBBUkVBUyAqL1xuaW50ZXJmYWNlIElHZXRWaXRpQXJlYXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcmVnaW9uTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZpdGlBcmVhcyhcbiAgICB7IGlkLCBuYW1lLCByZWdpb25OYW1lIH06IElHZXRWaXRpQXJlYXNQYXJhbXMsXG4pOiBQcm9taXNlPElWaXRpQXJlYVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUsIHJlZ2lvbl9uYW1lOiByZWdpb25OYW1lIH0pO1xuICAgIGNvbnN0IHZpdGlBcmVhczogSVZpdGlBcmVhW10gPSBhd2FpdCBnZXQoXCIvcmVzdC92aXRpLWFyZWFzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB2aXRpQXJlYXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRWaXRpQXJlYSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRWaXRpQXJlYXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlVml0aUFyZWEgPSBnZXRPckNyZWF0ZShnZXRWaXRpQXJlYXMsIGNyZWF0ZVZpdGlBcmVhKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVZpdGlBcmVhKHZpdGlBcmVhOiBJVml0aUFyZWFGb3JtKTogUHJvbWlzZTxJVml0aUFyZWE+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3ZpdGktYXJlYXNcIiwgdml0aUFyZWEpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVml0aUFyZWEodml0aUFyZWE6IElWaXRpQXJlYSk6IFByb21pc2U8SVZpdGlBcmVhPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3Qvdml0aS1hcmVhcy8ke3ZpdGlBcmVhLmlkfWAsIHZpdGlBcmVhKTtcbn1cblxuaW50ZXJmYWNlIElHZXRWaXRpQXJlYVN0YXRzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICByZWdpb25JZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZpdGlBcmVhU3RhdHMoXG4gICAgeyBpZCwgcmVnaW9uSWQgfTogSUdldFZpdGlBcmVhU3RhdHNQYXJhbXMsXG4pOiBQcm9taXNlPElWaXRpQXJlYVN0YXRzW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgcmVnaW9uX2lkOiByZWdpb25JZCB9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvdml0aS1hcmVhcy9zdGF0c1wiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFZpdGlBcmVhcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC92aXRpLWFyZWFzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogV0lORVMgKi9cbmludGVyZmFjZSBJR2V0V2luZXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIHByb2R1Y2VySWQ/OiBudW1iZXI7XG4gICAgcmVnaW9uSWQ/OiBudW1iZXI7XG4gICAgdml0aUFyZWFJZD86IG51bWJlcjtcbiAgICB3aW5lVHlwZUlkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZXMoXG4gICAgeyBpZCwgcHJvZHVjZXJJZCwgcmVnaW9uSWQsIHZpdGlBcmVhSWQsIHdpbmVUeXBlSWQgfTogSUdldFdpbmVzUGFyYW1zLFxuKTogUHJvbWlzZTxJV2luZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtcbiAgICAgICAgaWQsIHJlZ2lvbl9pZDogcmVnaW9uSWQsIHByb2R1Y2VyX2lkOiBwcm9kdWNlcklkLFxuICAgICAgICB2aXRpX2FyZWFfaWQ6IHZpdGlBcmVhSWQsIHdpbmVfdHlwZV9pZDogd2luZVR5cGVJZCxcbiAgICB9KTtcbiAgICBjb25zdCB3aW5lczogSVdpbmVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3dpbmVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB3aW5lcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFdpbmUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0V2luZXMpO1xuXG5jb25zdCBjcmVhdGVXaW5lSHR0cEZvcm0gPSAod2luZTogSVdpbmVGb3JtLCBmaWxlOiBGaWxlIHwgbnVsbCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtLmFwcGVuZChcIndpbmVfZm9ybVwiLCBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkod2luZSldLCB7dHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCJ9KSk7XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJpbWFnZVwiLCBmaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZSh3aW5lOiBJV2luZUZvcm0sIGZpbGU6IEZpbGUgfCBudWxsKTogUHJvbWlzZTxJV2luZT4ge1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVXaW5lSHR0cEZvcm0od2luZSwgZmlsZSk7XG4gICAgcmV0dXJuIHBvc3RGb3JtKFwiL3Jlc3Qvd2luZXNcIiwgZm9ybSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVXaW5lKGlkOiBudW1iZXIsIHdpbmU6IElXaW5lRm9ybSwgZmlsZTogRmlsZSB8IG51bGwpOiBQcm9taXNlPElXaW5lPiB7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVdpbmVIdHRwRm9ybSh3aW5lLCBmaWxlKTtcbiAgICByZXR1cm4gcHV0Rm9ybShgL3Jlc3Qvd2luZXMvJHtpZH1gLCBmb3JtKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnRVcGRhdGVXaW5lKGlkOiBudW1iZXIsIHdpbmU6IElXaW5lUGF0Y2hGb3JtKTogUHJvbWlzZTxJV2luZT4ge1xuICAgIHJldHVybiBwYXRjaChgL3Jlc3Qvd2luZXMvJHtpZH1gLCB3aW5lKTtcbn1cblxuaW50ZXJmYWNlIElTZWFyY2hXaW5lc1BhcmFtcyB7XG4gICAgY29sb3JMaWtlPzogc3RyaW5nO1xuICAgIHdpbmVUeXBlTGlrZT86IHN0cmluZztcbiAgICBwcm9kdWNlckxpa2U/OiBzdHJpbmc7XG4gICAgcmVnaW9uTGlrZT86IHN0cmluZztcbiAgICB2aXRpQXJlYUxpa2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hXaW5lcyhcbiAgICB7IGNvbG9yTGlrZSwgd2luZVR5cGVMaWtlLCBwcm9kdWNlckxpa2UsIHJlZ2lvbkxpa2UsIHZpdGlBcmVhTGlrZSB9OiBJU2VhcmNoV2luZXNQYXJhbXMsXG4pOiBQcm9taXNlPElXaW5lW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe1xuICAgICAgICBjb2xvcl9saWtlOiBjb2xvckxpa2UsIHdpbmVfdHlwZV9saWtlOiB3aW5lVHlwZUxpa2UsIHByb2R1Y2VyX2xpa2U6IHByb2R1Y2VyTGlrZSxcbiAgICAgICAgcmVnaW9uX2xpa2U6IHJlZ2lvbkxpa2UsIHZpdGlfYXJlYV9saWtlOiB2aXRpQXJlYUxpa2UsXG4gICAgfSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3dpbmVzL3NlYXJjaFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVWYXJpZXRpZXMoKTogUHJvbWlzZTxJV2luZUNvdW50PiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3dpbmVzL2NvdW50XCIpO1xufVxuXG4vKiBXSU5FIEdSQVBFUyAqL1xuaW50ZXJmYWNlIElHZXRXaW5lR3JhcGVzUGFyYW1zIHtcbiAgICB3aW5lSWQ/OiBudW1iZXI7XG4gICAgZ3JhcGVJZD86IG51bWJlcjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lLWxlbmd0aFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVHcmFwZXMoeyB3aW5lSWQsIGdyYXBlSWQgfTogSUdldFdpbmVHcmFwZXNQYXJhbXMpOiBQcm9taXNlPElXaW5lR3JhcGVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IHdpbmVfaWQ6IHdpbmVJZCwgZ3JhcGVfaWQ6IGdyYXBlSWQgfSk7XG4gICAgY29uc3Qgd2luZUdyYXBlczogSVdpbmVHcmFwZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvd2luZS1ncmFwZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHdpbmVHcmFwZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5lR3JhcGVzKHdpbmVHcmFwZXM6IElXaW5lR3JhcGVzRm9ybSk6IFByb21pc2U8SVdpbmVHcmFwZVtdPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC93aW5lLWdyYXBlc1wiLCB3aW5lR3JhcGVzKTtcbn1cblxuLyogV0lORSBUWVBFUyAqL1xuaW50ZXJmYWNlIElHZXRXaW5lVHlwZXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lVHlwZXMoeyBpZCwgbmFtZSB9OiBJR2V0V2luZVR5cGVzUGFyYW1zKTogUHJvbWlzZTxJV2luZVR5cGVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lIH0pO1xuICAgIGNvbnN0IHdpbmVUeXBlczogSVdpbmVUeXBlW10gPSBhd2FpdCBnZXQoXCIvcmVzdC93aW5lLXR5cGVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB3aW5lVHlwZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRXaW5lVHlwZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRXaW5lVHlwZXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlV2luZVR5cGUgPSBnZXRPckNyZWF0ZShnZXRXaW5lVHlwZXMsIGNyZWF0ZVdpbmVUeXBlKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmVUeXBlKHdpbmVUeXBlOiBJV2luZVR5cGVGb3JtKTogUHJvbWlzZTxJV2luZVR5cGU+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3dpbmUtdHlwZXNcIiwgd2luZVR5cGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2luZVR5cGUod2luZVR5cGU6IElXaW5lVHlwZSk6IFByb21pc2U8SVdpbmVUeXBlPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3Qvd2luZS10eXBlcy8ke3dpbmVUeXBlLmlkfWAsIHdpbmVUeXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFdpbmVUeXBlcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC93aW5lLXR5cGVzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cbiIsIi8qKiBCYXNpYyB0eXBlIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHJlc3BvbnNlIEpTT04gb2YgbWFueSBhc3luY2hyb25vdXMgcmVxdWVzdHMuICovXG5pbXBvcnQgeyBJUmVzdE1vZGVsIH0gZnJvbSBcIi4vUmVzdFR5cGVzXCI7XG5cbi8qKlxuICogS2V5LXZhbHVlIHN0b3JlIHdoZXJlIHRoZSBrZXkgbXVzdCBiZSBhIHN0cmluZywgYnV0IHRoZSB2YWx1ZSBpcyBvZiBhbnkgdHlwZVxuICogVC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRGljdDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgb2JqZWN0cyB0byBhIHNpbmdsZSBvYmplY3Qgb2YgbmFtZXMgdG8gbnVsbCBmb3IgdXNlIHdpdGggbWF0ZXJpYWxpemVcbiAqIGF1dG9jb21wbGV0ZS5cbiAqIEBwYXJhbSBvYmplY3RzIEFuIGFycmF5IG9mIFJFU1QgbW9kZWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXN0TW9kZWxzVG9OYW1lRGljdChvYmplY3RzOiBJUmVzdE1vZGVsW10pOiBJRGljdDxudWxsPiB7XG4gICAgY29uc3QgZGljdDogSURpY3Q8bnVsbD4gPSB7fTtcbiAgICBvYmplY3RzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgIGRpY3Rbb2JqLm5hbWVdID0gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gZGljdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiA4LWRpZ2l0IG51bWJlciBvZiBmb3JtYXQgJ3l5eXltbWRkJyB0byBhIERhdGUgb2JqZWN0LlxuICogQHBhcmFtIG51bSBhIGRhdGUgbnVtYmVyIG9mIGZvcm1hdCAneXl5eW1tZGQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBudW1Ub0RhdGUobnVtOiBudW1iZXIpOiBEYXRlIHtcbiAgICBjb25zdCBzdHJOdW0gPSBgJHtudW19YDtcbiAgICBpZiAoc3RyTnVtLmxlbmd0aCAhPT0gOCkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgZGF0ZSBudW1iZXIgJyR7c3RyTnVtfSdgKTtcbiAgICB9XG4gICAgY29uc3QgeWVhciA9IHN0ck51bS5zdWJzdHIoMCwgNCk7XG4gICAgY29uc3QgbW9udGggPSBzdHJOdW0uc3Vic3RyKDQsIDIpO1xuICAgIGNvbnN0IGRheSA9IHN0ck51bS5zdWJzdHIoNiwgMik7XG4gICAgLy8gSlMgbW9udGhzIGFyZSAwLWJhc2VkXG4gICAgcmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHllYXIsIDEwKSwgcGFyc2VJbnQobW9udGgsIDEwKSAtIDEsIHBhcnNlSW50KGRheSwgMTApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb051bShkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICogMTBfMDAwICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpICogMTAwICsgZGF0ZS5nZXREYXRlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBFTl9EQVNIOiBzdHJpbmcgPSBcIuKAk1wiO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgdmludGFnZSB5ZWFyLCB3aGljaCBpcyB0d28geWVhcnMgcHJpb3IgdG8gdGhlIGN1cnJlbnRcbiAqIHllYXIuIFRoaXMgZnVuY3Rpb24gZHVwbGljYXRlcyB0aGUgUHl0aG9uIGZ1bmN0aW9uXG4gKiB2aW5vdGVjYS51dGlscy5kZWZhdWx0X3ZpbnRhZ2VfeWVhclxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFZpbnRhZ2VZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGFuIG9iamVjdCBpcyBlbXB0eSwgaS5lLiBoYXMgbm8ga2V5cy5cbiAqIEBwYXJhbSBvYmogQW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iajogb2JqZWN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIFJldHVybnMgcyB3aXRoIHRoZSBmaXJzdCBsZXR0ZXIgY2FwaXRhbGl6ZWQuXG4gKiBAcGFyYW0gcyBBIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHMubGVuZ3RoID4gMCA/IHNbMF0udG9VcHBlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpIDogXCJcIjtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGRpc3BsYXkgbmFtZSB0byBhbiBodG1sIGlkXG4gKiBAcGFyYW0gbmFtZSBBIGNvbXBvbmVudCBkaXNwbGF5IG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hbWVUb0lkKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvKFxccykrL2csIFwiLVwiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBtYXhpbXVtIGVsZW1lbnQgYnkgb25lIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSB0eXBlIG9mIGVsZW1lbnRcbiAqIEBwYXJhbSBhcnIgQW4gYXJyYXkgb2Ygb2JqY2VjdHNcbiAqIEBwYXJhbSBhY2Nlc3NvciBBIGZ1bmN0aW9uIGZvciBhY2Nlc3NpbmcgYSBudW1iZXIgcHJvcGVydHkgb2YgdGhlIG9iamVjdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heEJ5PFQ+KGFycjogVFtdLCBhY2Nlc3NvcjogKGVsZW06IFQpID0+IG51bWJlcik6IFQgfCB1bmRlZmluZWQge1xuICAgIGxldCBtYXhFbGVtOiBUIHwgdW5kZWZpbmVkO1xuICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHk7XG4gICAgZm9yIChjb25zdCBlbGVtIG9mIGFycikge1xuICAgICAgICBjb25zdCB2YWwgPSBhY2Nlc3NvcihlbGVtKTtcbiAgICAgICAgaWYgKHZhbCA+IG1heFZhbCkge1xuICAgICAgICAgICAgbWF4RWxlbSA9IGVsZW07XG4gICAgICAgICAgICBtYXhWYWwgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1heEVsZW07XG59XG5cbi8qKlxuICogU3VtcyBhbiBhcnJheSBvZiBvYmplY3RzIGJ5IG9uZSBvZiB0aGUgb2JqZWN0cycgcHJvcGVydGllcy5cbiAqIEBwYXJhbSBhcnIgQW4gYXJyYXkgb2Ygb2JqZWN0c1xuICogQHBhcmFtIGFjY2Vzc29yIEEgZnVuY3Rpb24gZm9yIGFjY2Vzc2luZyBvbmUgb2YgdGhlIG9iamVjdHMnIHByb3BlcnRpZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1bUJ5PFQ+KGFycjogVFtdLCBhY2Nlc3NvcjogKGVsZW06IFQpID0+IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChjb25zdCBlbGVtIG9mIGFycikge1xuICAgICAgICBzdW0gKz0gYWNjZXNzb3IoZWxlbSk7XG4gICAgfVxuICAgIHJldHVybiBzdW07XG59XG5cbi8qKlxuICogQ29tcGFyZXMgdHdvIG9iamVjdHMgZm9yIGRlZXAgZXF1YWxpdHkuXG4gKiBAcGFyYW0gYSBBbiBvYmplY3RcbiAqIEBwYXJhbSBiIEFuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJlRXF1YWwoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGNvbnN0IGJLZXlzID0gT2JqZWN0LmtleXMoYik7XG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrIG9mIGFLZXlzKSB7XG4gICAgICAgIGlmIChhW2tdICE9PSBiW2tdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmludGVyZmFjZSBJUmFuZ2VBcmdzIHtcbiAgICBzdGFydD86IG51bWJlcjtcbiAgICBzdG9wPzogbnVtYmVyO1xuICAgIHN0ZXA/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYWJsZSByYW5nZSBvZiBudW1iZXJzb25DbGljay5cbiAqIEBwYXJhbSBzdGFydCBGaXJzdCBudW1iZXIgb2YgdGhlIHJhbmdlXG4gKiBAcGFyYW0gc3RvcCBFbmQgb2YgdGhlIHJhbmdlIChub24taW5jbHVzaXZlKVxuICogQHBhcmFtIHN0ZXAgSW5jcmVtZW50IG9mIHRoZSByYW5nZVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHJhbmdlKHsgc3RhcnQsIHN0b3AsIHN0ZXAgfTogSVJhbmdlQXJncyk6IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPiB7XG4gICAgc3RlcCA9IHN0ZXAgfHwgMTtcbiAgICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gICAgc3RvcCA9IHN0b3AgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgICAgIHlpZWxkIGk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW1hZ2VFeGlzdHMoaW1hZ2VVcmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW1hZ2VVcmwsIHttZXRob2Q6IFwiSEVBRFwifSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5vaztcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVBbmRUeXBlKG5hbWU6IHN0cmluZyB8IG51bGwsIHdpbmVUeXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHsobmFtZSA/IG5hbWUgKyBcIiBcIiA6IFwiXCIpfSR7d2luZVR5cGV9YDtcbn1cblxuLy8gVE9ETzogbW92ZSB0byB1c2UgUmVhY3Qgcm91dGVyIG9yIHNvbWV0aGluZyBzaW1pbGFyXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3QodXJsOiBzdHJpbmcpIHtcbiAgICBsb2NhdGlvbi5ocmVmID0gdXJsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2FkKGZ1bjogKCkgPT4gdm9pZCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bik7XG59XG4iLCJpbXBvcnQgeyBBdXRvY29tcGxldGUsIERyb3Bkb3duLCBTaWRlbmF2IH0gZnJvbSBcIm1hdGVyaWFsaXplLWNzc1wiO1xuaW1wb3J0IHsgSURpY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG50eXBlIE9uQ2hhbmdlID0gKGU6IHN0cmluZykgPT4gdm9pZDtcblxuLyoqIFNldHVwIGF1dG9jb21wbGV0aW9uIHdpdGggcHJvdmlkZWQgY29tcGxldGlvbiBvcHRpb25zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF1dG9jb21wbGV0ZShlbGVtOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uczogSURpY3Q8c3RyaW5nIHwgbnVsbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBPbkNoYW5nZSwgbWluTGVuZ3RoID0gMSwgbGltaXQgPSA1KSB7XG4gICAgaWYgKGVsZW0uY3VycmVudCkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICAgICAgbmV3IEF1dG9jb21wbGV0ZShlbGVtLmN1cnJlbnQsIHtcbiAgICAgICAgICAgIGRhdGE6IGNvbXBsZXRpb25zLFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICBtaW5MZW5ndGgsXG5cbiAgICAgICAgICAgIG9uQXV0b2NvbXBsZXRlOiBmdW5jdGlvbih0aGlzLCB0ZXh0KSB7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG9iamVjdC1saXRlcmFsLXNob3J0aGFuZFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHRleHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZpeCBvdmVybGFwcHRpbmcgdGV4dCBidWdcbiAgICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZU5hdmJhclRhYihpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuLyoqIEVuYWJsZXMgbmF2YmFyIG1lbnVzLiBTaG91bGQgYmUgY2FsbGVkIG9uIGV2ZXJ5IHBhZ2UuICovXG5leHBvcnQgZnVuY3Rpb24gbmF2YmFyKGFjdGl2ZU5hdlRhYklkPzogc3RyaW5nKSB7XG4gICAgaWYgKGFjdGl2ZU5hdlRhYklkKSB7XG4gICAgICAgIGFjdGl2YXRlTmF2YmFyVGFiKGFjdGl2ZU5hdlRhYklkKTtcbiAgICB9XG4gICAgY29uc3Qgc2lkZU5hdkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVuYXZcIik7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgbmV3IFNpZGVuYXYoc2lkZU5hdkVsZW0hKTtcbiAgICBjb25zdCBkcm9wZG93bkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLXRyaWdnZXJcIik7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgbmV3IERyb3Bkb3duKGRyb3Bkb3duRWxlbSEpO1xufVxuXG4vKiogU2ltcGxpZmllcyBkaXNwbGF5aW5nIG9mIHRvYXN0IG1lc3NhZ2VzIHRvIHVzZXIgKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2FzdChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBNLnRvYXN0KHtcbiAgICAgICAgY2xhc3NlczogXCJyZWQtYmdcIixcbiAgICAgICAgZGlzcGxheUxlbmd0aDogMTAwMDAsXG4gICAgICAgIGh0bWw6IG1lc3NhZ2UsXG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9