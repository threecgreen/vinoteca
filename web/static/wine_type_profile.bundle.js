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
/******/ 		"wine_type_profile": 0
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
/******/ 	deferredModules.push([12,"vendors"]);
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

/***/ "./front_end/wine_type_profile/WineType.tsx":
/*!**************************************************!*\
  !*** ./front_end/wine_type_profile/WineType.tsx ***!
  \**************************************************/
/*! exports provided: WineType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineType", function() { return WineType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_WineTypeInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/WineTypeInput */ "./components/WineTypeInput.tsx");




class WineType extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: undefined,
        };
    }
    render() {
        const content = this.props.isEditing ? this.renderEdit() : this.renderView();
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null, content));
    }
    renderView() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], { s: 12 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "bold" }, this.props.wineType.name))));
    }
    renderEdit() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], { s: 10 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "bold" }, "Edit Wine Type"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { autoComplete: "off" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WineTypeInput__WEBPACK_IMPORTED_MODULE_3__["WineTypeInput"], { value: this.props.wineTypeText, onChange: this.props.onWineTypeChange }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["CancelOrConfirmBtns"], { onConfirmClick: this.props.onConfirmClick, onCancelClick: this.props.onCancelClick })));
    }
}


/***/ }),

/***/ "./front_end/wine_type_profile/WineTypeProfileApp.tsx":
/*!************************************************************!*\
  !*** ./front_end/wine_type_profile/WineTypeProfileApp.tsx ***!
  \************************************************************/
/*! exports provided: WineTypeProfileApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineTypeProfileApp", function() { return WineTypeProfileApp; });
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
/* harmony import */ var _WineType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WineType */ "./front_end/wine_type_profile/WineType.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










class WineTypeProfileApp extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            wineTypeText: "",
            wineType: undefined,
            wines: [],
        };
        this.logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_7__["default"](this.constructor.name, true);
        this.onWineTypeChange = this.onWineTypeChange.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            Promise.all([
                this.getAndSetWineTypes(),
                this.getAndSetWines(),
            ]);
        });
    }
    getAndSetWineTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            const wineType = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_8__["getWineType"])({ id: this.props.wineTypeId });
            this.setState({ wineType: wineType, wineTypeText: wineType.name });
        });
    }
    getAndSetWines() {
        return __awaiter(this, void 0, void 0, function* () {
            const wines = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_8__["getWines"])({ wineTypeId: this.props.wineTypeId });
            this.setState({ wines });
        });
    }
    render() {
        if (!this.state.wineType) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_5__["Preloader"], null);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WineType__WEBPACK_IMPORTED_MODULE_9__["WineType"], { isEditing: this.state.isEditing, wineType: this.state.wineType, wineTypeText: this.state.wineTypeText, onWineTypeChange: this.onWineTypeChange, onConfirmClick: this.onConfirmClick, onCancelClick: this.onCancelClick }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12, classes: ["fixed-action-div"] },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FixedActionList__WEBPACK_IMPORTED_MODULE_2__["FixedActionList"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { onClick: this.onEditClick, classes: ["yellow-bg"] },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__["MaterialIcon"], { iconName: "edit" }))))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Wines"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WinesTable__WEBPACK_IMPORTED_MODULE_6__["WinesTable"], { wines: this.state.wines })))));
    }
    onEditClick() {
        this.setState({ isEditing: true });
    }
    onWineTypeChange(val) {
        this.setState({
            wineTypeText: val,
        });
    }
    onConfirmClick() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wineType = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_8__["updateWineType"])({ id: this.props.wineTypeId, name: this.state.wineTypeText });
                this.setState({
                    isEditing: false,
                    wineType: wineType,
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
            wineTypeText: state.wineType ? state.wineType.name : "",
        }));
    }
}


/***/ }),

/***/ "./front_end/wine_type_profile/wine_type_profile.ts":
/*!**********************************************************!*\
  !*** ./front_end/wine_type_profile/wine_type_profile.ts ***!
  \**********************************************************/
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
/* harmony import */ var _WineTypeProfileApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WineTypeProfileApp */ "./front_end/wine_type_profile/WineTypeProfileApp.tsx");





Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"])(() => {
    Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_3__["navbar"])();
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_WineTypeProfileApp__WEBPACK_IMPORTED_MODULE_4__["WineTypeProfileApp"], { wineTypeId: id }), document.getElementById("wine_type_profile-container"));
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

/***/ 12:
/*!****************************************************************!*\
  !*** multi ./front_end/wine_type_profile/wine_type_profile.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carter/git/vinoteca/vinoteca/front_end/wine_type_profile/wine_type_profile.ts */"./front_end/wine_type_profile/wine_type_profile.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25zLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbG9ySW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRml4ZWRBY3Rpb25MaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWF0ZXJpYWxJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByZWxvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWxlY3RJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGVjaWFsQ2hhckJ0bi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGVjaWFsQ2hhcnMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFibGVDZWxscy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZUhlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXh0SW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2luZVR5cGVJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XaW5lc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvd2luZV90eXBlX3Byb2ZpbGUvV2luZVR5cGUudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC93aW5lX3R5cGVfcHJvZmlsZS9XaW5lVHlwZVByb2ZpbGVBcHAudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC93aW5lX3R5cGVfcHJvZmlsZS93aW5lX3R5cGVfcHJvZmlsZS50cyIsIndlYnBhY2s6Ly8vLi9saWIvQXBpSGVscGVyLnRzIiwid2VicGFjazovLy8uL2xpYi9Db29raWVzLnRzIiwid2VicGFjazovLy8uL2xpYi9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL1Jlc3RBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL2xpYi93aWRnZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNB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QyxJQUFJLGNBQWMsRUFBRTtRQUNoQixpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUNyQztJQUNELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkQsZ0RBQWdEO0lBQ2hELElBQUksdURBQU8sQ0FBQyxXQUFZLENBQUMsQ0FBQztJQUMxQixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDakUsZ0RBQWdEO0lBQ2hELElBQUksd0RBQVEsQ0FBQyxZQUFhLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsc0RBQXNEO0FBQy9DLFNBQVMsS0FBSyxDQUFDLE9BQWU7SUFDakMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNKLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLElBQUksRUFBRSxPQUFPO0tBQ2hCLENBQUMsQ0FBQztBQUNQLENBQUMiLCJmaWxlIjoid2luZV90eXBlX3Byb2ZpbGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIndpbmVfdHlwZV9wcm9maWxlXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzEyLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSUNoaWxkcmVuUHJvcCwgSUNsYXNzZXNQcm9wIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBDb2wgfSBmcm9tIFwiLi9HcmlkXCI7XG5pbXBvcnQgeyBNYXRlcmlhbEljb24gfSBmcm9tIFwiLi9NYXRlcmlhbEljb25cIjtcblxuaW50ZXJmYWNlIElGbG9hdGluZ0J0blByb3BzIGV4dGVuZHMgSUNoaWxkcmVuUHJvcCwgSUNsYXNzZXNQcm9wIHtcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIG9uTW91c2VEb3duPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbn1cblxuZnVuY3Rpb24gY29tYmluZUNsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10gfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuICAgIHJldHVybiAoY2xhc3NlcyB8fCBbXSkuam9pbihcIiBcIik7XG59XG5cbmV4cG9ydCBjb25zdCBGbG9hdGluZ0J0bjogUmVhY3QuRkM8SUZsb2F0aW5nQnRuUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbWJpbmVDbGFzc2VzKHByb3BzLmNsYXNzZXMpO1xuICAgIGNvbnN0IG1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xuICAgICAgICBpZiAocHJvcHMub25Nb3VzZURvd24pIHtcbiAgICAgICAgICAgIHByb3BzLm9uTW91c2VEb3duKGUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb3BzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9eyBgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0bi1mbG9hdGluZyAke2NsYXNzZXN9YCB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgb25DbGljayB9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17IG1vdXNlRG93biB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L2E+XG4gICAgKTtcbn07XG5GbG9hdGluZ0J0bi5kaXNwbGF5TmFtZSA9IFwiRmxvYXRpbmdCdG5cIjtcbkZsb2F0aW5nQnRuLmRlZmF1bHRQcm9wcyA9IHsgb25Nb3VzZURvd246IChfKSA9PiB1bmRlZmluZWQgfTtcblxuaW50ZXJmYWNlIElCdG5Qcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB7XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEJ0bjogUmVhY3QuRkM8SUJ0blByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21iaW5lQ2xhc3Nlcyhwcm9wcy5jbGFzc2VzKTtcbiAgICBjb25zdCBvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcHJvcHMub25DbGljaygpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsgYHJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biAke2NsYXNzZXN9YCB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgb25DbGljayB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuQnRuLmRpc3BsYXlOYW1lID0gXCJCdG5cIjtcblxuaW50ZXJmYWNlIElDYW5jZWxPckNvbmZpcm1Qcm9wcyB7XG4gICAgb25Db25maXJtQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgb25DYW5jZWxDbGljazogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENhbmNlbE9yQ29uZmlybUJ0bnM6IFJlYWN0LkZDPElDYW5jZWxPckNvbmZpcm1Qcm9wcz4gPVxuICAgIChwcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbCBzPXsgMTIgfT5cbiAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcImdyZWVuLWJnXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25Db25maXJtQ2xpY2sgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENvbmZpcm1cbiAgICAgICAgICAgICAgICA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwic2VuZFwiIGNsYXNzTmFtZT1cInJpZ2h0XCIgLz5cbiAgICAgICAgICAgIDwvQnRuPlxuICAgICAgICAgICAgPEJ0biBjbGFzc2VzPXsgW1wicmVkLWJnXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25DYW5jZWxDbGljayB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgPC9Db2w+XG4gICAgKTtcbn1cbkNhbmNlbE9yQ29uZmlybUJ0bnMuZGlzcGxheU5hbWUgPSBcIkNhbmNlbE9yQ29uZmlybUJ0bnNcIjtcbiIsImltcG9ydCB7IEZvcm1TZWxlY3QgfSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyBJQ29sb3IgfSBmcm9tIFwiLi4vbGliL1Jlc3RcIjtcbmltcG9ydCB7IGdldENvbG9ycyB9IGZyb20gXCIuLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgSU9uQ2hhbmdlIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBTZWxlY3RJbnB1dCB9IGZyb20gXCIuL1NlbGVjdElucHV0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJT25DaGFuZ2Uge1xuICAgIHNlbGVjdGlvbjogc3RyaW5nO1xuICAgIGV4dHJhQ2hvaWNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQ29sb3JzU2VsZWN0ID0gKGxvZ2dlcjogTG9nZ2VyLCBleHRyYUNob2ljZT86IHN0cmluZyk6IFtzdHJpbmdbXSwgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MU2VsZWN0RWxlbWVudD5dID0+IHtcbiAgICBjb25zdCBbc2VsZWN0aW9uT3B0aW9ucywgc2V0U2VsZWN0aW9uT3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IHNlbGVjdFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTFNlbGVjdEVsZW1lbnQ+O1xuXG4gICAgY29uc3QgY29uY2F0SWZOb3ROdWxsPSAob3B0aW9uczogc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgIGlmIChleHRyYUNob2ljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtleHRyYUNob2ljZV0uY29uY2F0KG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29sb3JzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvcnM6IElDb2xvcltdID0gYXdhaXQgZ2V0Q29sb3JzKHt9KTtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3Rpb25PcHRpb25zKGNvbmNhdElmTm90TnVsbChjb2xvcnMubWFwKChjb2xvcikgPT4gY29sb3IubmFtZSkpKTtcbiAgICAgICAgICAgICAgICBuZXcgRm9ybVNlbGVjdChzZWxlY3RSZWYuY3VycmVudCEpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFwiRmFpbGVkIHRvIGdldCBjb2xvcnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaENvbG9ycygpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW3NlbGVjdGlvbk9wdGlvbnMsIHNlbGVjdFJlZl1cbn1cblxuZXhwb3J0IGNvbnN0IENvbG9ySW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKENvbG9ySW5wdXQubmFtZSk7XG5cbiAgICBjb25zdCBbc2VsZWN0aW9uT3B0aW9ucywgc2VsZWN0UmVmXSA9IHVzZUNvbG9yc1NlbGVjdChsb2dnZXIsIHByb3BzLmV4dHJhQ2hvaWNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWxlY3RJbnB1dCBuYW1lPVwiQ29sb3JcIlxuICAgICAgICAgICAgcz17IDQgfSBsPXsgMiB9XG4gICAgICAgICAgICBzZWxlY3RSZWY9eyBzZWxlY3RSZWYgfVxuICAgICAgICAgICAgb3B0aW9ucz17IHNlbGVjdGlvbk9wdGlvbnMgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyAodikgPT4gcHJvcHM/Lm9uQ2hhbmdlKHYpIH1cbiAgICAgICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5Db2xvcklucHV0LmRpc3BsYXlOYW1lID0gXCJDb2xvcklucHV0XCI7XG4iLCJpbXBvcnQgeyBGbG9hdGluZ0FjdGlvbkJ1dHRvbiB9IGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZsb2F0aW5nQnRuIH0gZnJvbSBcIi4vQnV0dG9uc1wiO1xuaW1wb3J0IHsgSUNoaWxkcmVuUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4vTWF0ZXJpYWxJY29uXCI7XG5cbmV4cG9ydCBjb25zdCBGaXhlZEFjdGlvbkxpc3Q6IFJlYWN0LkZDPElDaGlsZHJlblByb3A+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZGl2UmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuZXcgRmxvYXRpbmdBY3Rpb25CdXR0b24oZGl2UmVmLmN1cnJlbnQsIHtkaXJlY3Rpb246IFwibGVmdFwifSk7XG4gICAgfSwgW2RpdlJlZl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtYWN0aW9uLWJ0biBob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICByZWY9eyBkaXZSZWYgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0J0biBjbGFzc2VzPXsgW1wiYnRuLWxhcmdlXCIsIFwicmVkLWJnXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG51bGwgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cIm1lbnVcIiAvPlxuICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICAgICAgPHVsPiB7IFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaT57IGNoaWxkIH08L2xpPlxuICAgICAgICAgICAgICAgICkpIH0gPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuRml4ZWRBY3Rpb25MaXN0LmRpc3BsYXlOYW1lID0gXCJGaXhlZEFjdGlvbkxpc3RcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkUHJvcHMge1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xuICAgIHhsPzogbnVtYmVyO1xufVxuXG50eXBlIElBbGxHcmlkUHJvcHMgPSBJR3JpZFByb3BzICYgSUNsYXNzZXNQcm9wICYgSUNoaWxkcmVuUHJvcDtcblxuZnVuY3Rpb24gam9pbkNsYXNzZXMoZ3JpZDogc3RyaW5nW10sIGNsYXNzZXM/OiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgbGV0IGFsbENsYXNzZXM6IHN0cmluZ1tdID0gW107XG4gICAgZ3JpZC5mb3JFYWNoKChnYykgPT4ge1xuICAgICAgICBpZiAoZ2MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWxsQ2xhc3Nlcy5wdXNoKGdjKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGFsbENsYXNzZXMgPSBhbGxDbGFzc2VzLmNvbmNhdChjbGFzc2VzIHx8IFtdKTtcbiAgICByZXR1cm4gYWxsQ2xhc3Nlcy5qb2luKFwiIFwiKTtcbn1cblxuZnVuY3Rpb24gZ3JpZENsYXNzZXMocHJvcHM6IElBbGxHcmlkUHJvcHMpOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgc0NsYXNzID0gcHJvcHMucyA/IGBzJHtwcm9wcy5zfWAgOiBcIlwiO1xuICAgIGNvbnN0IG1DbGFzcyA9IHByb3BzLm0gPyBgbSR7cHJvcHMubX1gIDogXCJcIjtcbiAgICBjb25zdCBsQ2xhc3MgPSBwcm9wcy5sID8gYGwke3Byb3BzLmx9YCA6IFwiXCI7XG4gICAgY29uc3QgeGxDbGFzcyA9IHByb3BzLnhsID8gYHhsJHtwcm9wcy54bH1gIDogXCJcIjtcbiAgICByZXR1cm4gW3NDbGFzcywgbUNsYXNzLCBsQ2xhc3MsIHhsQ2xhc3NdO1xufVxuXG5jb25zdCBHcmlkQ29tcG9uZW50RmFjdG9yeSA9IChjbGFzc05hbWU6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZyk6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0+IHtcbiAgICBjb25zdCBjb21wb25lbnQ6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0gKHByb3BzOiBJQWxsR3JpZFByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IG90aGVyQ2xhc3NlcyA9IGpvaW5DbGFzc2VzKGdyaWRDbGFzc2VzKHByb3BzKSwgcHJvcHMuY2xhc3Nlcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGAke2NsYXNzTmFtZX0gJHtvdGhlckNsYXNzZXN9YCB9PlxuICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbiAgICBjb21wb25lbnQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgY29uc3QgUm93OiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IEdyaWRDb21wb25lbnRGYWN0b3J5KFwicm93XCIsIFwiUm93XCIpO1xuXG5leHBvcnQgY29uc3QgQ29sOiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IEdyaWRDb21wb25lbnRGYWN0b3J5KFwiY29sXCIsIFwiQ29sXCIpO1xuXG5leHBvcnQgY29uc3QgSW5wdXRGaWVsZDogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcImNvbCBpbnB1dC1maWVsZFwiLCBcIklucHV0RmllbGRcIilcbiIsImltcG9ydCBNIGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG5hbWVUb0lkIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gXCIuL0dyaWRcIjtcblxudHlwZSBJSW5wdXRWYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbnB1dFByb3BzPFQgZXh0ZW5kcyBJSW5wdXRWYWx1ZT4ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB2YWx1ZTogVDtcbiAgICBlbmFibGVkOiBib29sZWFuO1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Gb2N1czogKCkgPT4gdm9pZDtcbiAgICBvbkJsdXI6ICgpID0+IHZvaWQ7XG4gICAgaW5wdXRSZWY/OiBSZWFjdC5SZWY8SFRNTElucHV0RWxlbWVudD47XG4gICAgaW5wdXRUeXBlPzogc3RyaW5nO1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgc3RlcD86IHN0cmluZztcbiAgICBtYXg/OiBudW1iZXI7XG4gICAgbWluPzogbnVtYmVyO1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgSW5wdXQ8VSBleHRlbmRzIElJbnB1dFZhbHVlPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJSW5wdXRQcm9wczxVPj4ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBvbkNoYW5nZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBvbkZvY3VzOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIG9uQmx1cjogKF86IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaWQgPSBuYW1lVG9JZCh0aGlzLnByb3BzLm5hbWUpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPElucHV0RmllbGQgcz17IHRoaXMucHJvcHMucyB9IG09eyB0aGlzLnByb3BzLm0gfSBsPXsgdGhpcy5wcm9wcy5sIH0+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXsgaWQgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmNsYXNzTmFtZSB9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17IHRoaXMucHJvcHMuaW5wdXRSZWYgfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPXsgdGhpcy5wcm9wcy5pbnB1dFR5cGUgfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ICF0aGlzLnByb3BzLmVuYWJsZWQgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHRoaXMucHJvcHMudmFsdWUgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiB0aGlzLm9uQ2hhbmdlKGUpIH1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsgdGhpcy5wcm9wcy5vbkJsdXIgfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsgdGhpcy5wcm9wcy5vbkZvY3VzIH1cbiAgICAgICAgICAgICAgICAgICAgc3RlcD17IHRoaXMucHJvcHMuc3RlcCB9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17IHRoaXMucHJvcHMubWluIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgdGhpcy5wcm9wcy5tYXggfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuYWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCIgfSBodG1sRm9yPXsgaWQgfT5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLm5hbWUgfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L0lucHV0RmllbGQ+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBNLnVwZGF0ZVRleHRGaWVsZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBNLnVwZGF0ZVRleHRGaWVsZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIGljb25OYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBNYXRlcmlhbEljb246IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgPGkgY2xhc3NOYW1lPXsgYG1hdGVyaWFsLWljb25zICR7cHJvcHMuY2xhc3NOYW1lfWAgfT5cbiAgICAgICAgICAgIHsgcHJvcHMuaWNvbk5hbWUgfVxuICAgICAgICA8L2k+XG4gICAgKTtcbn07XG5NYXRlcmlhbEljb24uZGlzcGxheU5hbWUgPSBcIk1hdGVyaWFsSWNvblwiO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBQcmVsb2FkZXI6IFJlYWN0LkZDPHt9PiA9IChfKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRldGVybWluYXRlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5QcmVsb2FkZXIuZGlzcGxheU5hbWUgPSBcIlByZWxvYWRlclwiO1xuXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyQ2lyYzogUmVhY3QuRkM8e30+ID0gKF8pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWxvYWRlci13cmFwcGVyIGFjdGl2ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWxheWVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+PGRpdiBjbGFzc05hbWU9XCJnYXAtcGF0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblByZWxvYWRlckNpcmMuZGlzcGxheU5hbWUgPSBcIlByZWxvYWRlckNpcmNcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciwgbmFtZVRvSWQgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSBcIi4vR3JpZFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3B0aW9uczogc3RyaW5nW107XG4gICAgc2VsZWN0aW9uOiBzdHJpbmc7XG4gICAgc2VsZWN0VGV4dD86IHN0cmluZztcbiAgICBzZWxlY3RSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MU2VsZWN0RWxlbWVudD47XG4gICAgb25DaGFuZ2U6ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFNlbGVjdElucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaWQgPSBuYW1lVG9JZChwcm9wcy5uYW1lKTtcbiAgICBsZXQgc2VsZWN0VGV4dDogSlNYLkVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgaWYgKHByb3BzLnNlbGVjdFRleHQpIHtcbiAgICAgICAgc2VsZWN0VGV4dCA9IDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIHsgcHJvcHMuc2VsZWN0VGV4dCB9XG4gICAgICAgIDwvb3B0aW9uPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0RmllbGQgcz17IHByb3BzLnMgfSBtPXsgcHJvcHMubSB9IGw9eyBwcm9wcy5sIH0+XG4gICAgICAgICAgICA8c2VsZWN0IGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgIG5hbWU9eyBpZCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gcHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17IHByb3BzLnNlbGVjdGlvbiB8fCBwcm9wcy5zZWxlY3RUZXh0IH1cbiAgICAgICAgICAgICAgICByZWY9eyBwcm9wcy5zZWxlY3RSZWYgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsgc2VsZWN0VGV4dCB9XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsgb3B0aW9uIH0ga2V5PXsgb3B0aW9uIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIob3B0aW9uKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9eyBpZCB9PnsgcHJvcHMubmFtZSB9PC9sYWJlbD5cbiAgICAgICAgPC9JbnB1dEZpZWxkPlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmxvYXRpbmdCdG4gfSBmcm9tIFwiLi9CdXR0b25zXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG9uQ2xpY2s6IChjaGFyOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgY2hhcjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgU3BlY2lhbENoYXJCdG46IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gW1wiYnRuLXNtYWxsXCIsIFwiY2VudGVyXCIsIFwic3BlYy1jaGFyLWJ0blwiXTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RmxvYXRpbmdCdG4gY2xhc3Nlcz17IGNsYXNzZXMgfVxuICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG51bGwgfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyAoKSA9PiBwcm9wcy5vbkNsaWNrKHByb3BzLmNoYXIpIH1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyBwcm9wcy5jaGFyIH1cbiAgICAgICAgPC9GbG9hdGluZ0J0bj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZsb2F0aW5nQnRuIH0gZnJvbSBcIi4vQnV0dG9uc1wiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4vR3JpZFwiO1xuaW1wb3J0IHsgU3BlY2lhbENoYXJCdG4gfSBmcm9tIFwiLi9TcGVjaWFsQ2hhckJ0blwiO1xuXG5lbnVtIENhc2Uge1xuICAgIFVwcGVyLFxuICAgIExvd2VyLFxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBvbkNsaWNrOiAoY2hhcjogc3RyaW5nKSA9PiB2b2lkO1xuICAgIGNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgICBkaXNwbGF5OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICBjaGFyczogc3RyaW5nW107XG4gICAgY3VycmVudENhc2U6IENhc2U7XG59XG5cbmV4cG9ydCBjbGFzcyBTcGVjaWFsQ2hhcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcbiAgICBwdWJsaWMgc3RhdGljIGluc2VydENoYXJBdCh2YWw6IHN0cmluZywgY2hhcjogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpc05hTihwb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwgKyBjaGFyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWwuc3Vic3RyKDAsIHBvc2l0aW9uKSArIGNoYXIgKyB2YWwuc3Vic3RyKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYXJzOiBbXG4gICAgICAgICAgICAgICAgXCLDoFwiLCBcIsOhXCIsIFwiw6JcIiwgXCLDo1wiLCBcIsOmXCIsIFwixI1cIiwgXCLDp1wiLCBcIsOoXCIsIFwiw6lcIiwgXCLDqlwiLCBcIsOrXCIsIFwiw61cIiwgXCLDrlwiLFxuICAgICAgICAgICAgICAgIFwiw69cIiwgXCLDsVwiLCBcIsOzXCIsIFwiw7RcIiwgXCLDtVwiLCBcIsWTXCIsIFwixaFcIiwgXCLDuVwiLCBcIsO6XCIsIFwiw7tcIiwgXCLDvFwiLCBcIsW+XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY3VycmVudENhc2U6IENhc2UuTG93ZXIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFtcInNwZWNpYWwtY2hhcnNcIl07XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc3BsYXkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc2VzPXsgY2xhc3Nlcy5jb25jYXQodGhpcy5wcm9wcy5jbGFzc2VzID8/IFtdKSB9PlxuICAgICAgICAgICAgICAgICAgICB7LyogU2hpZnQgYnV0dG9uICovfVxuICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdCdG4gY2xhc3Nlcz17IFtcImNlbnRlclwiLCBcImdyZWVuLWJnXCIsIFwic2hpZnQtYnRuXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsgdGhpcy5oYW5kbGVTaGlmdC5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmN1cnJlbnRDYXNlID09PSBDYXNlLkxvd2VyID8gXCLihpFcIiA6IFwi4oaTXCIgfVxuICAgICAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nQnRuPlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuY2hhcnMubWFwKChjaGFyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjaWFsQ2hhckJ0biBjaGFyPXsgY2hhciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGNoYXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGMpID0+IHRoaXMucHJvcHMub25DbGljayhjKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZVNoaWZ0KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmN1cnJlbnRDYXNlID09PSBDYXNlLkxvd2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnM6IHN0YXRlLmNoYXJzLm1hcCgoY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhc2U6IENhc2UuVXBwZXIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hhcnM6IHN0YXRlLmNoYXJzLm1hcCgoY2hhcikgPT4gY2hhci50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2FzZTogQ2FzZS5Mb3dlcixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZXNtL2Zvcm1hdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBFTl9EQVNILCBnZXROYW1lQW5kVHlwZSwgbnVtVG9EYXRlIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgSVRleHRDZWxsUHJvcHMge1xuICAgIGRlZmF1bHQ/OiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIFRleHRDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUZXh0Q2VsbFByb3BzPiB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDx0ZD57IHRoaXMucHJvcHMudGV4dCA/PyB0aGlzLnByb3BzLmRlZmF1bHQgfTwvdGQ+O1xuICAgIH1cbn07XG5cbmludGVyZmFjZSBJTnVtQ2VsbFByb3BzIHtcbiAgICBudW06IG51bWJlciB8IG51bGw7XG4gICAgbWluRGVjaW1hbHM/OiBudW1iZXI7XG4gICAgbWF4RGVjaW1hbHM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBOdW1DZWxsOiBSZWFjdC5GQzxJTnVtQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IG51bSA9IHByb3BzLm51bVxuICAgICAgICAvLyB1bmRlZmluZWQgdG8gdXNlIGJyb3dzZXIncyBsb2NhbGVcbiAgICAgICAgPyBwcm9wcy5udW0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcm9wcy5taW5EZWNpbWFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJvcHMubWF4RGVjaW1hbHN9KVxuICAgICAgICA6IEVOX0RBU0g7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm51bS1jb2xcIj57IG51bSB9PC90ZD5cbiAgICApO1xufTtcbk51bUNlbGwuZGlzcGxheU5hbWUgPSBcIk51bUNlbGxcIjtcblxuaW50ZXJmYWNlIElQcmljZUNlbGxQcm9wcyB7XG4gICAgcHJpY2U6IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBQcmljZUNlbGw6IFJlYWN0LkZDPElQcmljZUNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TnVtQ2VsbCBudW09eyBwcm9wcy5wcmljZSB9XG4gICAgICAgICAgICBtaW5EZWNpbWFscz17IDIgfVxuICAgICAgICAgICAgbWF4RGVjaW1hbHM9eyAyIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUHJpY2VDZWxsLmRpc3BsYXlOYW1lID0gXCJQcmljZUNlbGxcIjtcblxuZXhwb3J0IGNvbnN0IFllYXJDZWxsOiBSZWFjdC5GQzx7eWVhcjogbnVtYmVyIHwgbnVsbH0+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeWVhciA9IHByb3BzLnllYXI/LnRvU3RyaW5nKCkgPz8gXCJOVlwiO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJudW0tY29sXCI+XG4gICAgICAgICAgICB7IHllYXIgfVxuICAgICAgICA8L3RkPlxuICAgICk7XG59XG5ZZWFyQ2VsbC5kaXNwbGF5TmFtZSA9IFwiWWVhckNlbGxcIjtcblxuaW50ZXJmYWNlIElEYXRlQ2VsbFByb3BzIHtcbiAgICBkYXRlOiBudW1iZXIgfCBudWxsO1xuICAgIGZvcm1hdD86IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBEYXRlQ2VsbDogUmVhY3QuRkM8SURhdGVDZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZGF0ZVN0ciA9IHByb3BzLmRhdGUgPyBmb3JtYXQobnVtVG9EYXRlKHByb3BzLmRhdGUpLCBwcm9wcy5mb3JtYXQgPz8gXCJNTU0gZGQsIHl5eXlcIikgOiBFTl9EQVNIO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZD57IGRhdGVTdHIgfTwvdGQ+XG4gICAgKTtcbn1cbkRhdGVDZWxsLmRpc3BsYXlOYW1lID0gXCJEYXRlQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSUNvbG9yQ2VsbFByb3BzIHtcbiAgICBjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ29sb3JDZWxsOiBSZWFjdC5GQzxJQ29sb3JDZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKHByb3BzLmNvbG9yKSB7XG4gICAgICAgIHJldHVybiA8dGQ+eyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIocHJvcHMuY29sb3IpIH08L3RkPjtcbiAgICB9XG4gICAgcmV0dXJuIDx0ZCAvPjtcbn07XG5Db2xvckNlbGwuZGlzcGxheU5hbWUgPSBcIkNvbG9yQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSUxpbmtlZENlbGxQcm9wcyB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBtb2RlbDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgTGlua2VkQ2VsbDogUmVhY3QuRkM8SUxpbmtlZENlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgLyR7cHJvcHMubW9kZWx9LyR7cHJvcHMuaWR9YDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YSBocmVmPXsgdXJsIH0+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5uYW1lIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICApXG59XG5MaW5rZWRDZWxsLmRpc3BsYXlOYW1lID0gXCJMaW5rZWRDZWxsXCJcblxuaW50ZXJmYWNlIElOYW1lQW5kVHlwZVByb3BzIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZyB8IG51bGw7XG4gICAgd2luZVR5cGU6IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBOYW1lQW5kVHlwZUNlbGw6IFJlYWN0LkZDPElOYW1lQW5kVHlwZVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGlmIChwcm9wcy51cmwpIHtcbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGEgaHJlZj17IHByb3BzLnVybCB9PlxuICAgICAgICAgICAgICAgIHsgZ2V0TmFtZUFuZFR5cGUocHJvcHMubmFtZSwgcHJvcHMud2luZVR5cGUpIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cIndpbmVzXCJcbiAgICAgICAgICAgIG5hbWU9eyBnZXROYW1lQW5kVHlwZShwcm9wcy5uYW1lLCBwcm9wcy53aW5lVHlwZSkgfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuTmFtZUFuZFR5cGVDZWxsLmRpc3BsYXlOYW1lID0gXCJOYW1lQW5kVHlwZUNlbGxcIjtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y2VyQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cInByb2R1Y2Vyc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblByb2R1Y2VyQ2VsbC5kaXNwbGF5TmFtZSA9IFwiUHJvZHVjZXJDZWxsXCJcblxuZXhwb3J0IGNvbnN0IFJlZ2lvbkNlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmd9PiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJyZWdpb25zXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUmVnaW9uQ2VsbC5kaXNwbGF5TmFtZSA9IFwiUmVnaW9uQ2VsbFwiXG5cbmV4cG9ydCBjb25zdCBWaXRpQXJlYUNlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyIHwgbnVsbCwgbmFtZTogc3RyaW5nIHwgbnVsbH0+ID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKCFwcm9wcy5pZCB8fCAhcHJvcHMubmFtZSkge1xuICAgICAgICByZXR1cm4gPHRkIC8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwidml0aS1hcmVhc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblZpdGlBcmVhQ2VsbC5kaXNwbGF5TmFtZSA9IFwiVml0aUFyZWFDZWxsXCJcblxuZXhwb3J0IGNvbnN0IFdpbmVUeXBlQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cIndpbmUtdHlwZXNcIlxuICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5XaW5lVHlwZUNlbGwuZGlzcGxheU5hbWUgPSBcIldpbmVUeXBlQ2VsbFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vbGliL0xvZ2dlclwiO1xuaW1wb3J0IHsgdXNlQ29sb3JzU2VsZWN0IH0gZnJvbSBcIi4vQ29sb3JJbnB1dFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4vTWF0ZXJpYWxJY29uXCI7XG5pbXBvcnQgeyBTZWxlY3RJbnB1dCB9IGZyb20gXCIuL1NlbGVjdElucHV0XCI7XG5cbmV4cG9ydCBlbnVtIFNvcnRpbmdTdGF0ZSB7XG4gICAgTm90U29ydGVkLFxuICAgIEFzY2VuZGluZyxcbiAgICBEZXNjZW5kaW5nLFxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHZvaWQ7XG4gICAgc29ydGluZ1N0YXRlOiBTb3J0aW5nU3RhdGU7XG4gICAgaXNOdW1Db2w6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHM+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaXNOdW1Db2w6IGZhbHNlLFxuICAgIH07XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9eyAodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgXCJcIikgKyBgJHt0aGlzLnByb3BzLmlzTnVtQ29sID8gXCIgbnVtLWNvbFwiIDogXCJcIiB9YCB9PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJDb250ZW50KCkgfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSAoXG4gICAgICAgICAgICA8YSBocmVmPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5wcm9wcy5vbkNsaWNrIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmlzTnVtQ29sXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVySWNvbigpIH1cbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0IH1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckljb24oKSB9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJJY29uKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMuc29ydGluZ1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdTdGF0ZS5Bc2NlbmRpbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJhcnJvd19kcm9wX3VwXCIgLz47XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdTdGF0ZS5EZXNjZW5kaW5nOlxuICAgICAgICAgICAgICAgIHJldHVybiA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwiYXJyb3dfZHJvcF9kb3duXCIgLz47XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwiYXJyb3dfZHJvcF9kb3duXCIgY2xhc3NOYW1lPVwiaW52aXNpYmxlXCIgLz47XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmludGVyZmFjZSBJRmlsdGVyUHJvcHMge1xuICAgIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRmlsdGVySGVhZGVyOiBSZWFjdC5GQzxJRmlsdGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKSB9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwcm9wcy50ZXh0IH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgKTtcbn1cbkZpbHRlckhlYWRlci5kaXNwbGF5TmFtZSA9IFwiRmlsdGVySGVhZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RGaWx0ZXJIZWFkZXI6IFJlYWN0LkZDPElGaWx0ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBleHRyYUNob2ljZSA9IFwiQW55XCI7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihTZWxlY3RGaWx0ZXJIZWFkZXIubmFtZSk7XG5cbiAgICBjb25zdCBvbkNoYW5nZSA9IChzZWxlY3Rpb246IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSBleHRyYUNob2ljZSkge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShzZWxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBwcm9wcy50ZXh0ID09PSBcIlwiID8gZXh0cmFDaG9pY2UgOiBwcm9wcy50ZXh0O1xuXG4gICAgY29uc3QgW3NlbGVjdGlvbk9wdGlvbnMsIHNlbGVjdFJlZl0gPSB1c2VDb2xvcnNTZWxlY3QobG9nZ2VyLCBleHRyYUNob2ljZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8U2VsZWN0SW5wdXQgbmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgc2VsZWN0UmVmPXsgc2VsZWN0UmVmIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXsgc2VsZWN0aW9uT3B0aW9ucyB9XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXsgc2VsZWN0aW9uIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgKTtcbn1cblNlbGVjdEZpbHRlckhlYWRlci5kaXNwbGF5TmFtZSA9IFNlbGVjdEZpbHRlckhlYWRlci5uYW1lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9JbnB1dFwiO1xuaW1wb3J0IHsgU3BlY2lhbENoYXJzIH0gZnJvbSBcIi4vU3BlY2lhbENoYXJzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Gb2N1cz86ICgpID0+IHZvaWQ7XG4gICAgb25CbHVyPzogKCkgPT4gdm9pZDtcbiAgICBjbGFzc05hbWU6IHN0cmluZztcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbiAgICBpbnB1dFJlZj86IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG59XG5cbmV4cG9ydCBjb25zdCBUZXh0SW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbdGltZXN0YW1wLCBfXSA9IFJlYWN0LnVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGlucHV0UmVmID0gcHJvcHMuaW5wdXRSZWYgPz8gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcblxuICAgIGNvbnN0IG9uU3BlY2lhbENoYXJDbGljayA9IChjaGFyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaW5wdXRSZWYuY3VycmVudD8uc2VsZWN0aW9uU3RhcnQgPz8gTmFOO1xuICAgICAgICBwcm9wcy5vbkNoYW5nZShTcGVjaWFsQ2hhcnMuaW5zZXJ0Q2hhckF0KHByb3BzLnZhbHVlLCBjaGFyLCBwb3NpdGlvbikpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5wdXRSZWYuY3VycmVudC5zZXRTZWxlY3Rpb25SYW5nZShwb3NpdGlvbiArIDEsIHBvc2l0aW9uICsgMSksIDEwKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChub3cgLSB0aW1lc3RhbXAgPiAxMDApIHtcbiAgICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9wcy5vbkJsdXI/LigpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UodmFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkZvY3VzID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICAgICAgcHJvcHMub25Gb2N1cz8uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxJbnB1dCBpbnB1dFR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwcm9wcy52YWx1ZSB9XG4gICAgICAgICAgICAgICAgZW5hYmxlZD17IHByb3BzLmVuYWJsZWQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbCkgPT4gb25DaGFuZ2UodmFsKSB9XG4gICAgICAgICAgICAgICAgb25CbHVyPXsgb25CbHVyIH1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsgb25Gb2N1cyB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgcHJvcHMuY2xhc3NOYW1lIH1cbiAgICAgICAgICAgICAgICBzPXsgcHJvcHMucyB9IG09eyBwcm9wcy5tIH0gbD17IHByb3BzLmwgfVxuICAgICAgICAgICAgICAgIGlucHV0UmVmPXsgaW5wdXRSZWYgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTcGVjaWFsQ2hhcnNcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXsgW1wiaW5saW5lLWJsb2NrXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGMpID0+IG9uU3BlY2lhbENoYXJDbGljayhjKSB9XG4gICAgICAgICAgICAgICAgZGlzcGxheT17IGlzQWN0aXZlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5UZXh0SW5wdXQuZGlzcGxheU5hbWUgPSBcIlRleHRJbnB1dFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSVdpbmVUeXBlIH0gZnJvbSBcIi4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBnZXRXaW5lVHlwZXMsIHRvRGljdCB9IGZyb20gXCIuLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgYXV0b2NvbXBsZXRlIH0gZnJvbSBcIi4uL2xpYi93aWRnZXRzXCI7XG5pbXBvcnQgeyBJT25DaGFuZ2UgfSBmcm9tIFwiLi9JUHJvcHNcIjtcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gXCIuL1RleHRJbnB1dFwiO1xuXG5pbnRlcmZhY2UgSVdpbmVUeXBlSW5wdXRQcm9wcyBleHRlbmRzIElPbkNoYW5nZSB7XG4gICAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFdpbmVUeXBlSW5wdXQ6IFJlYWN0LkZDPElXaW5lVHlwZUlucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXaW5lVHlwZXMoKSB7XG4gICAgICAgICAgICBjb25zdCB3aW5lVHlwZXM6IElXaW5lVHlwZVtdID0gYXdhaXQgZ2V0V2luZVR5cGVzKHt9KTtcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZShpbnB1dFJlZiwgdG9EaWN0KHdpbmVUeXBlcyksIHByb3BzLm9uQ2hhbmdlKTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaFdpbmVUeXBlcygpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0SW5wdXQgbmFtZT1cIldpbmUgVHlwZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgcz17IDggfSBsPXsgNCB9XG4gICAgICAgICAgICB2YWx1ZT17IHByb3BzLnZhbHVlIH1cbiAgICAgICAgICAgIGlucHV0UmVmPXsgaW5wdXRSZWYgfVxuICAgICAgICAgICAgb25Gb2N1cz17IHByb3BzLm9uRm9jdXMgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyBwcm9wcy5vbkNoYW5nZSB9XG4gICAgICAgICAgICBvbkJsdXI9eyBwcm9wcy5vbkJsdXIgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5XaW5lVHlwZUlucHV0LmRpc3BsYXlOYW1lID0gXCJXaW5lVHlwZUlucHV0XCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJV2luZSB9IGZyb20gXCIuLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgQ29sb3JDZWxsLCBOYW1lQW5kVHlwZUNlbGwsIE51bUNlbGwsIFByb2R1Y2VyQ2VsbCwgUmVnaW9uQ2VsbCwgVml0aUFyZWFDZWxsLCBZZWFyQ2VsbCB9IGZyb20gXCIuL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCB7IEZpbHRlckhlYWRlciwgU29ydGluZ1N0YXRlLCBUYWJsZUhlYWRlciwgU2VsZWN0RmlsdGVySGVhZGVyIH0gZnJvbSBcIi4vVGFibGVIZWFkZXJcIjtcblxuZW51bSBTb3J0aW5nVmFsdWUge1xuICAgIEludmVudG9yeSxcbiAgICBDb2xvcixcbiAgICBOYW1lQW5kVHlwZSxcbiAgICBQcm9kdWNlcixcbiAgICBSZWdpb24sXG4gICAgVml0aUFyZWEsXG4gICAgVmludGFnZSxcbiAgICBSYXRpbmdcbn07XG5cbmV4cG9ydCBlbnVtIENvbHVtblRvRXhjbHVkZSB7XG4gICAgUHJvZHVjZXIsXG4gICAgUmVnaW9uLFxuICAgIFZpdGlBcmVhLFxufVxuXG50eXBlIElQcm9wcyA9IHtcbiAgICB3aW5lczogSVdpbmVbXTtcbiAgICBmaWx0ZXJUZXh0cz86IE1hcDxrZXlvZiBJV2luZSwgc3RyaW5nPjtcbiAgICBvbkZpbHRlckNoYW5nZT86IChjb2x1bW46IGtleW9mIElXaW5lLCB0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgZXhjbHVkZUNvbHVtbj86IENvbHVtblRvRXhjbHVkZTtcbn0gJiBQYXJ0aWFsPERlZmF1bHRQcm9wcz5cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgYXNjZW5kaW5nOiBib29sZWFuO1xuICAgIHNvcnRpbmc6IFNvcnRpbmdWYWx1ZTtcbiAgICBjb2xvclNlbGVjdGlvbjogc3RyaW5nO1xufVxuXG50eXBlIERlZmF1bHRQcm9wcyA9IFJlYWRvbmx5PHR5cGVvZiBkZWZhdWx0UHJvcHM+XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICB3aW5lc1BlclBhZ2U6IDI1MCxcbn07XG5cbmV4cG9ydCBjbGFzcyBXaW5lc1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcyAmIERlZmF1bHRQcm9wcywgSVN0YXRlPiB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzICYgRGVmYXVsdFByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFzY2VuZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHNvcnRpbmc6IFNvcnRpbmdWYWx1ZS5OYW1lQW5kVHlwZSxcbiAgICAgICAgICAgIGNvbG9yU2VsZWN0aW9uOiBcIlwiLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlckhlYWRlciA9IHRoaXMucHJvcHMuZmlsdGVyVGV4dHNcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJIZWFkZXIgeyAuLi50aGlzLmZpbHRlckhlYWRlclByb3BzKFwiaW52ZW50b3J5XCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJjb2xvclwiKSB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJIZWFkZXIgeyAuLi50aGlzLmZpbHRlckhlYWRlclByb3BzKFwid2luZVR5cGVcIikgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVySGVhZGVyIHsgLi4udGhpcy5maWx0ZXJIZWFkZXJQcm9wcyhcInByb2R1Y2VyXCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJyZWdpb25cIikgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVySGVhZGVyIHsgLi4udGhpcy5maWx0ZXJIZWFkZXJQcm9wcyhcInZpdGlBcmVhXCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJsYXN0UHVyY2hhc2VWaW50YWdlXCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJyYXRpbmdcIikgfSAvPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgY29uc3QgZXhDb2wgPSB0aGlzLnByb3BzLmV4Y2x1ZGVDb2x1bW47XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZSBoaWdobGlnaHQgY29uZGVuc2VkXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PVwiaGVhZGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyIHsuLi50aGlzLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLkludmVudG9yeSl9IGlzTnVtQ29sID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZlbnRvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuQ29sb3IpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB7Li4udGhpcy50YWJsZUhlYWRlclByb3BzKFNvcnRpbmdWYWx1ZS5OYW1lQW5kVHlwZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUgYW5kIFR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4Q29sID09PSBDb2x1bW5Ub0V4Y2x1ZGUuUHJvZHVjZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUHJvZHVjZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4Q29sID09PSBDb2x1bW5Ub0V4Y2x1ZGUuUmVnaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgPFRhYmxlSGVhZGVyIHsuLi50aGlzLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLlJlZ2lvbil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4Q29sID09PSBDb2x1bW5Ub0V4Y2x1ZGUuVml0aUFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuVml0aUFyZWEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVml0aWN1bHR1cmFsIEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuVmludGFnZSl9IGlzTnVtQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUmF0aW5nKX0gaXNOdW1Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICB7IGZpbHRlckhlYWRlciB9XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy53aW5lc0ZvclBhZ2UubWFwKCh3aW5lKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXsgd2luZS5pZCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1DZWxsIG51bT17IHdpbmUuaW52ZW50b3J5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4RGVjaW1hbHM9eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvckNlbGwgY29sb3I9eyB3aW5lLmNvbG9yIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmFtZUFuZFR5cGVDZWxsIGlkPXsgd2luZS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyB3aW5lLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5lVHlwZT17IHdpbmUud2luZVR5cGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBleENvbCA9PT0gQ29sdW1uVG9FeGNsdWRlLlByb2R1Y2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IDxQcm9kdWNlckNlbGwgaWQ9eyB3aW5lLnByb2R1Y2VySWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IHdpbmUucHJvZHVjZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBleENvbCA9PT0gQ29sdW1uVG9FeGNsdWRlLlJlZ2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8UmVnaW9uQ2VsbCBpZD17IHdpbmUucmVnaW9uSWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IHdpbmUucmVnaW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhDb2wgPT09IENvbHVtblRvRXhjbHVkZS5WaXRpQXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8Vml0aUFyZWFDZWxsIGlkPXsgd2luZS52aXRpQXJlYUlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyB3aW5lLnZpdGlBcmVhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxZZWFyQ2VsbCB5ZWFyPXsgd2luZS5sYXN0UHVyY2hhc2VWaW50YWdlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtQ2VsbCBtYXhEZWNpbWFscz17IDAgfSBudW09eyB3aW5lLnJhdGluZyB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCB3aW5lc0ZvclBhZ2UoKTogSVdpbmVbXSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gKHRoaXMucHJvcHMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucHJvcHMud2luZXNQZXJQYWdlO1xuICAgICAgICBjb25zdCBzb3J0ZWRXaW5lcyA9IHRoaXMuc29ydGVkV2luZXM7XG4gICAgICAgIHJldHVybiBzb3J0ZWRXaW5lcy5zbGljZShzdGFydCwgIE1hdGgubWluKHNvcnRlZFdpbmVzLmxlbmd0aCxcbiAgICAgICAgICAgIHN0YXJ0ICsgdGhpcy5wcm9wcy53aW5lc1BlclBhZ2UpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBzb3J0ZWRXaW5lcygpIHtcbiAgICAgICAgY29uc3QgYXNjZW5kaW5nTXVsdGlwbGllciA9IHRoaXMuc3RhdGUuYXNjZW5kaW5nID8gMSA6IC0xO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuc29ydGluZykge1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuSW52ZW50b3J5OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT5cbiAgICAgICAgICAgICAgICAgICAgKHcxLmludmVudG9yeSAtIHcyLmludmVudG9yeSkgKiBhc2NlbmRpbmdNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLkNvbG9yOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT5cbiAgICAgICAgICAgICAgICAgICAgdzEuY29sb3IubG9jYWxlQ29tcGFyZSh3Mi5jb2xvcikgKiBhc2NlbmRpbmdNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLk5hbWVBbmRUeXBlOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBTb3J0IGJ5IHdpbmVUeXBlIHRoZW4gbmFtZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3aW5lVHlwZUNvbXBhcmlzb24gPSAodzEud2luZVR5cGUgPz8gXCJcIikubG9jYWxlQ29tcGFyZSh3Mi53aW5lVHlwZSA/PyBcIlwiKSAqIGFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5lVHlwZUNvbXBhcmlzb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5hbWUgY29tcGFyaXNvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHcxLm5hbWUgJiYgdzIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3MS5uYW1lLmxvY2FsZUNvbXBhcmUodzIubmFtZSkgKiBhc2NlbmRpbmdNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodzEubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc2NlbmRpbmdNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHcyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLWFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmVUeXBlQ29tcGFyaXNvbjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuUHJvZHVjZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICB3MS5wcm9kdWNlci5sb2NhbGVDb21wYXJlKHcyLnByb2R1Y2VyKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuUmVnaW9uOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT5cbiAgICAgICAgICAgICAgICAgICAgdzEucmVnaW9uLmxvY2FsZUNvbXBhcmUodzIucmVnaW9uKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuVml0aUFyZWE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICAodzEudml0aUFyZWEgfHwgXCJcIikubG9jYWxlQ29tcGFyZSh3Mi52aXRpQXJlYSB8fCBcIlwiKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuVmludGFnZTpcbiAgICAgICAgICAgICAgICAvLyBTb3J0IE5WIGZpcnN0XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICAodzEubGFzdFB1cmNoYXNlVmludGFnZSA/PyAzMDAwKSAtICh3Mi5sYXN0UHVyY2hhc2VWaW50YWdlID8/IDMwMDApICogYXNjZW5kaW5nTXVsdGlwbGllclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5SYXRpbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICAodzEucmF0aW5nID8/IDApIC0gKHcyLnJhdGluZyA/PyAwKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25IZWFkZXJDbGljayhlOiBSZWFjdC5Nb3VzZUV2ZW50LCBzb3J0aW5nVmFsOiBTb3J0aW5nVmFsdWUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoc29ydGluZ1ZhbCA9PT0gdGhpcy5zdGF0ZS5zb3J0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7YXNjZW5kaW5nOiAhcHJldlN0YXRlLmFzY2VuZGluZ30pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFzY2VuZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzb3J0aW5nOiBzb3J0aW5nVmFsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRhYmxlSGVhZGVyUHJvcHMoc29ydGluZ1ZhbDogU29ydGluZ1ZhbHVlKTpcbiAgICAgICAge3NvcnRpbmdTdGF0ZTogU29ydGluZ1N0YXRlLCBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZH0ge1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmcgPT09IHNvcnRpbmdWYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRpbmdTdGF0ZSA9IHRoaXMuc3RhdGUuYXNjZW5kaW5nID8gU29ydGluZ1N0YXRlLkFzY2VuZGluZyA6IFNvcnRpbmdTdGF0ZS5EZXNjZW5kaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzb3J0aW5nU3RhdGUsXG4gICAgICAgICAgICAgICAgb25DbGljazogKGUpID0+IHRoaXMub25IZWFkZXJDbGljayhlLCBzb3J0aW5nVmFsKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvcnRpbmdTdGF0ZTogU29ydGluZ1N0YXRlLk5vdFNvcnRlZCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IChlKSA9PiB0aGlzLm9uSGVhZGVyQ2xpY2soZSwgc29ydGluZ1ZhbCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ29uc3RydWN0cyBwcm9wcyBmb3IgYSBmaWx0ZXIgaGVhZGVyXG4gICAgcHJpdmF0ZSBmaWx0ZXJIZWFkZXJQcm9wcyhjb2x1bW5OYW1lOiBrZXlvZiBJV2luZSk6XG4gICAgICAgIHtvbkNoYW5nZTogKHRleHQ6IHN0cmluZykgPT4gdm9pZCxcbiAgICAgICAgIHRleHQ6IHN0cmluZ30ge1xuXG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGlmIGJvdGggcHJvcHMgZXhpc3RcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoZmlsdGVyRXhwcikgPT4gdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSEoY29sdW1uTmFtZSwgZmlsdGVyRXhwciksXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnByb3BzLmZpbHRlclRleHRzIS5nZXQoY29sdW1uTmFtZSkgPz8gXCJcIixcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYW5jZWxPckNvbmZpcm1CdG5zIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uc1wiO1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmlkXCI7XG5pbXBvcnQgeyBXaW5lVHlwZUlucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV2luZVR5cGVJbnB1dFwiO1xuaW1wb3J0IHsgSVJlc3RNb2RlbCB9IGZyb20gXCIuLi8uLi9saWIvUmVzdFR5cGVzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGlzRWRpdGluZzogYm9vbGVhbjtcbiAgICB3aW5lVHlwZVRleHQ6IHN0cmluZztcbiAgICB3aW5lVHlwZTogSVJlc3RNb2RlbDtcbiAgICBvbldpbmVUeXBlQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Db25maXJtQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgb25DYW5jZWxDbGljazogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFdpbmVUeXBlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcz4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3RhdHM6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5wcm9wcy5pc0VkaXRpbmcgPyB0aGlzLnJlbmRlckVkaXQoKSA6IHRoaXMucmVuZGVyVmlldygpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICB7IGNvbnRlbnQgfVxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJWaWV3KCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJib2xkXCI+eyB0aGlzLnByb3BzLndpbmVUeXBlLm5hbWUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJFZGl0KCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8Q29sIHM9eyAxMCB9PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYm9sZFwiPkVkaXQgV2luZSBUeXBlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V2luZVR5cGVJbnB1dCB2YWx1ZT17IHRoaXMucHJvcHMud2luZVR5cGVUZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMucHJvcHMub25XaW5lVHlwZUNoYW5nZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENhbmNlbE9yQ29uZmlybUJ0bnNcbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtQ2xpY2s9eyB0aGlzLnByb3BzLm9uQ29uZmlybUNsaWNrIH1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWxDbGljaz17IHRoaXMucHJvcHMub25DYW5jZWxDbGljayB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGbG9hdGluZ0J0biB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvbnNcIjtcbmltcG9ydCB7IEZpeGVkQWN0aW9uTGlzdCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ZpeGVkQWN0aW9uTGlzdFwiO1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmlkXCI7XG5pbXBvcnQgeyBNYXRlcmlhbEljb24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYXRlcmlhbEljb25cIjtcbmltcG9ydCB7IFByZWxvYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1ByZWxvYWRlclwiO1xuaW1wb3J0IHsgV2luZXNUYWJsZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dpbmVzVGFibGVcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uLy4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElXaW5lIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBnZXRXaW5lcywgZ2V0V2luZVR5cGUsIHVwZGF0ZVdpbmVUeXBlIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0QXBpXCI7XG5pbXBvcnQgeyBJUmVzdE1vZGVsIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0VHlwZXNcIjtcbmltcG9ydCB7IFdpbmVUeXBlIH0gZnJvbSBcIi4vV2luZVR5cGVcIjtcblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgaXNFZGl0aW5nOiBib29sZWFuO1xuICAgIC8vIEVkaXRhYmxlXG4gICAgd2luZVR5cGVUZXh0OiBzdHJpbmc7XG4gICAgLy8gXCJQdXJlXCIgc3RhdGVcbiAgICB3aW5lVHlwZT86IElSZXN0TW9kZWw7XG4gICAgd2luZXM6IElXaW5lW107XG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHdpbmVUeXBlSWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFdpbmVUeXBlUHJvZmlsZUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzRWRpdGluZzogZmFsc2UsXG4gICAgICAgICAgICB3aW5lVHlwZVRleHQ6IFwiXCIsXG4gICAgICAgICAgICB3aW5lVHlwZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgd2luZXM6IFtdLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHRoaXMuY29uc3RydWN0b3IubmFtZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMub25XaW5lVHlwZUNoYW5nZSA9IHRoaXMub25XaW5lVHlwZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRWRpdENsaWNrID0gdGhpcy5vbkVkaXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ29uZmlybUNsaWNrID0gdGhpcy5vbkNvbmZpcm1DbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2FuY2VsQ2xpY2sgPSB0aGlzLm9uQ2FuY2VsQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMuZ2V0QW5kU2V0V2luZVR5cGVzKCksXG4gICAgICAgICAgICB0aGlzLmdldEFuZFNldFdpbmVzKCksXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZ2V0QW5kU2V0V2luZVR5cGVzKCkge1xuICAgICAgICBjb25zdCB3aW5lVHlwZSA9IGF3YWl0IGdldFdpbmVUeXBlKHtpZDogdGhpcy5wcm9wcy53aW5lVHlwZUlkfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpbmVUeXBlOiB3aW5lVHlwZSwgd2luZVR5cGVUZXh0OiB3aW5lVHlwZS5uYW1lfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRBbmRTZXRXaW5lcygpIHtcbiAgICAgICAgY29uc3Qgd2luZXMgPSBhd2FpdCBnZXRXaW5lcyh7d2luZVR5cGVJZDogdGhpcy5wcm9wcy53aW5lVHlwZUlkfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpbmVzfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLndpbmVUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gPFByZWxvYWRlciAvPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8V2luZVR5cGUgaXNFZGl0aW5nPXsgdGhpcy5zdGF0ZS5pc0VkaXRpbmcgfVxuICAgICAgICAgICAgICAgICAgICB3aW5lVHlwZT17IHRoaXMuc3RhdGUud2luZVR5cGUgfVxuICAgICAgICAgICAgICAgICAgICB3aW5lVHlwZVRleHQ9eyB0aGlzLnN0YXRlLndpbmVUeXBlVGV4dCB9XG4gICAgICAgICAgICAgICAgICAgIG9uV2luZVR5cGVDaGFuZ2U9eyB0aGlzLm9uV2luZVR5cGVDaGFuZ2UgfVxuICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm1DbGljaz17IHRoaXMub25Db25maXJtQ2xpY2sgfVxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbENsaWNrPXsgdGhpcy5vbkNhbmNlbENsaWNrIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgcz17IDEyIH0gY2xhc3Nlcz17IFtcImZpeGVkLWFjdGlvbi1kaXZcIl0gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaXhlZEFjdGlvbkxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nQnRuIG9uQ2xpY2s9eyB0aGlzLm9uRWRpdENsaWNrIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17IFtcInllbGxvdy1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwiZWRpdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbG9hdGluZ0J0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRml4ZWRBY3Rpb25MaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHM9eyAxMiB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PldpbmVzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaW5lc1RhYmxlIHdpbmVzPXsgdGhpcy5zdGF0ZS53aW5lcyB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkVkaXRDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNFZGl0aW5nOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbldpbmVUeXBlQ2hhbmdlKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgd2luZVR5cGVUZXh0OiB2YWwsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25Db25maXJtQ2xpY2soKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3aW5lVHlwZSA9IGF3YWl0IHVwZGF0ZVdpbmVUeXBlKHtpZDogdGhpcy5wcm9wcy53aW5lVHlwZUlkLCBuYW1lOiB0aGlzLnN0YXRlLndpbmVUeXBlVGV4dH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3aW5lVHlwZTogd2luZVR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dXYXJuaW5nKGBGYWlsZWQgdG8gc2F2ZSBjaGFuZ2VzIHRvIGRhdGFiYXNlOiAke2Vycn1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DYW5jZWxDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7XG4gICAgICAgICAgICBpc0VkaXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgd2luZVR5cGVUZXh0OiBzdGF0ZS53aW5lVHlwZSA/IHN0YXRlLndpbmVUeXBlLm5hbWUgOiBcIlwiLFxuICAgICAgICB9KSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBvbkxvYWQgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwiLi4vLi4vbGliL3dpZGdldHNcIjtcbmltcG9ydCB7IFdpbmVUeXBlUHJvZmlsZUFwcCB9IGZyb20gXCIuL1dpbmVUeXBlUHJvZmlsZUFwcFwiO1xuXG5kZWNsYXJlIGNvbnN0IGlkOiBudW1iZXI7XG5cbm9uTG9hZCgoKSA9PiB7XG4gICAgbmF2YmFyKCk7XG4gICAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQoV2luZVR5cGVQcm9maWxlQXBwLCB7d2luZVR5cGVJZDogaWR9KSxcbiAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5lX3R5cGVfcHJvZmlsZS1jb250YWluZXJcIikpO1xufSk7XG4iLCJpbXBvcnQgeyByZWFkQ29va2llIH0gZnJvbSBcIi4vQ29va2llc1wiO1xuaW1wb3J0IHsgSURpY3QsIGlzRW1wdHkgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBIRUFERVJTID0ge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiWC1DU1JGVG9rZW5cIjogcmVhZENvb2tpZShcImNzcmZ0b2tlblwiKSB8fCBcIlwiLFxufTtcblxuZXhwb3J0IHR5cGUgSVF1ZXJ5UGFyYW1zID0gSURpY3Q8c3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj47XG5cbmZ1bmN0aW9uIGVuY29kZVBhcmFtcyhwYXJhbXM6IElRdWVyeVBhcmFtcyk6IHN0cmluZyB7XG4gICAgaWYgKGlzRW1wdHkocGFyYW1zKSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiP1wiICsgT2JqZWN0LmVudHJpZXMocGFyYW1zKS5tYXAoKFtrLCB2XSkgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGspfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2KX1gKS5qb2luKFwiJlwiKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlSnNvbihvYmo6IG9iamVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlY29kZUpzb25JZkFueShyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICBpZiAocGFyc2VGbG9hdChyZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtbGVuZ3RoXCIpID8/IFwiMFwiKSA+IDBcbiAgICAgICAgJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIikgPT09IFwiYXBwbGljYXRpb24vanNvblwiKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxufVxuXG50eXBlIFZpbm90ZWNhRXJyb3IgPVxuICAgIHwge1wiTm90Rm91bmRcIjogc3RyaW5nfVxuICAgIHwge1wiSW50ZXJuYWxcIjogc3RyaW5nfVxuICAgIHwge1wiTWlzc2luZ0NvbnN0cmFpbnRcIjogc3RyaW5nfVxuICAgIHwge1wiQmFkUmVxdWVzdFwiOiBzdHJpbmd9O1xuXG5mdW5jdGlvbiBpc1Zpbm90ZWNhRXJyb3Iob2JqOiBvYmplY3QpOiBvYmogaXMgVmlub3RlY2FFcnJvciB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgcmV0dXJuIGtleXMubGVuZ3RoID09PSAxXG4gICAgICAgICYmIFtcIk5vdEZvdW5kXCIsIFwiSW50ZXJuYWxcIiwgXCJNaXNzaW5nQ29uc3RyYWludFwiLCBcIkJhZFJlcXVlc3RcIl1cbiAgICAgICAgICAgIC5maW5kKChpKSA9PiBpID09PSBrZXlzWzBdKSAhPT0gdW5kZWZpbmVkO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlOiBSZXNwb25zZSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDMxMCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgZGVjb2RlSnNvbklmQW55KHJlc3BvbnNlKTtcbiAgICAgICAgaWYgKGlzVmlub3RlY2FFcnJvcihtZXNzYWdlKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYCR7T2JqZWN0LmtleXMobWVzc2FnZSlbMF19OiAke09iamVjdC52YWx1ZXMobWVzc2FnZSlbMF19YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVKc29uSWZBbnkocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBFcnJvcihhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBNYWtlcyBhbiBIVFRQIEdFVCByZXF1ZXN0IHRvIHRoZSB1cmwgd2l0aCB0aGUgb3B0aW9uYWwgcGFyYW1ldGVycywgdGhlbiBwYXJzZXNcbiAqIHRoZSBKU09OIHJlc3BvbnNlLlxuICogQHBhcmFtIHVybCBBIFVSTCB0byByZXF1ZXN0XG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9wdGlvbmFsIGRpY3Rpb25hcnkgb2YgcGFyYW1ldGVycyB0byB0aGVpciB2YWx1ZXNcbiAqIEByZXR1cm5zIHBhcnNlZCBKU09OIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXQ8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcykpO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhbiBIVFRQIFBPU1QgcmVxdWVzdCB0byB0aGUgdXJsIHdpdGggdGhlIG9wdGlvbmFsIHBhcmFtZXRlcnMgY29udGFpbmluZ1xuICogdGhlIGJvZHksIHRoZW4gcGFyc2VzIHRoZSBKU09OIHJlc3BvbnNlLlxuICogQHBhcmFtIHVybCBBIFVSTCB0byByZXF1ZXN0XG4gKiBAcGFyYW0gYm9keSBKU09OIG9iamVjdCB0byBlbmNvZGUgYW5kIHNlbmQgdG8gdGhlIHNlcnZlclxuICogQHBhcmFtIHBhcmFtcyBBbiBvcHRpb25hbCBkaWN0aW9uYXJ5IG9mIHBhcmFtZXRlcnMgdG8gdGhlaXIgdmFsdWVzXG4gKiBAcmV0dXJucyBwYXJzZWQgSlNPTiByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGJvZHk6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBlbmNvZGVKc29uKGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RGb3JtPFJlc3BvbnNlPih1cmw6IHN0cmluZywgZm9ybTogRm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBmb3JtLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhbiBIVFRQIFBVVCByZXF1ZXN0IHRvIHRoZSB1cmwgd2l0aCB0aGUgb3B0aW9uYWwgcGFyYW1ldGVycyBjb250YWluaW5nXG4gKiB0aGUgYm9keSwgdGhlbiBwYXJzZXMgdGhlIEpTT04gcmVzcG9uc2UuXG4gKiBAcGFyYW0gdXJsIEEgVVJMIHRvIHJlcXVlc3RcbiAqIEBwYXJhbSBib2R5IEpTT04gb2JqZWN0IHRvIGVuY29kZSBhbmQgc2VuZCB0byB0aGUgc2VydmVyXG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9wdGlvbmFsIGRpY3Rpb25hcnkgb2YgcGFyYW1ldGVycyBhbmQgdGhlaXIgdmFsdWVzXG4gKiBAcmV0dXJucyBwYXJzZWQgSlNPTiByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHV0PFJlc3BvbnNlPih1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGVuY29kZUpzb24oYm9keSksXG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXRGb3JtPFJlc3BvbnNlPih1cmw6IHN0cmluZywgZm9ybTogRm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGZvcm0sXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXRjaDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGJvZHk6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXM9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZW5jb2RlSnNvbihib2R5KSxcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlXzxSZXNwb25zZT4odXJsOiBzdHJpbmcsIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuIiwiY29uc3QgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQ3JlYXRlIG9yIHVwZGF0ZSBhIGNvb2tpZVxuICogQHBhcmFtIG5hbWUgbmFtZS9rZXkgb2YgdGhlIGNvb2tpZVxuICogQHBhcmFtIHZhbHVlIHZhbHVlIHRvIHN0b3JlXG4gKiBAcGFyYW0gZGF5cyBudW1iZXIgb2YgZGF5cyB0aGUgY29va2llIGlzIHZhbGlkLCBkZWZhdWx0cyB0byB0aGUgY3VycmVudCBzZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb29raWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBkYXlzPzogbnVtYmVyKSB7XG4gICAgbGV0IGV4cGlyZXM7XG4gICAgaWYgKGRheXMpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogTUlMTElTRUNPTkRTX0lOX0RBWSkpO1xuICAgICAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZXhwaXJlcyA9IFwiXCI7XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRDb29raWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XG4gICAgZm9yIChsZXQgYyBvZiBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpKSB7XG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGMgPSBjLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cihuYW1lRVEubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNvb2tpZShuYW1lOiBzdHJpbmcpIHtcbiAgICBjcmVhdGVDb29raWUobmFtZSwgXCJcIiwgLTEpO1xufVxuIiwiaW1wb3J0IHsgcG9zdCB9IGZyb20gXCIuL0FwaUhlbHBlclwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwiLi93aWRnZXRzXCI7XG5cbi8qKiBQcm92aWRlcyBsb2dnaW5nIGZ1bmN0aW9uYWxpdHkgZm9yIGNsaWVudC1zaWRlIEphdmFTY3JpcHQgZXJyb3JzLiAqL1xuZW51bSBMb2dMZXZlbCB7XG4gICAgQ3JpdGljYWwgPSBcImNyaXRpY2FsXCIsXG4gICAgRXJyb3IgPSBcImVycm9yXCIsXG4gICAgV2FybmluZyA9IFwid2FybmluZ1wiLFxuICAgIEluZm8gPSBcImluZm9cIixcbiAgICBEZWJ1ZyA9IFwiZGVidWdcIixcbn1cblxuaW50ZXJmYWNlIElMb2dSZXN1bHQge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG4gICAgLyoqXG4gICAgICogTG9nZ2luZyBjbGFzcyBmb3IgY2xpZW50LXNpZGUgZXJyb3JzIHRoYXQgd2lsbCBiZSBwb3N0ZWQgdG8gdGhlIHNlcnZlclxuICAgICAqIGZvciBsb2dnaW5nIHRvIHRoZSBzYW1lIGZpbGUgYXMgYWxsIG90aGVyIHZpbm90ZWNhIGxvZ3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbW9kdWxlIHRoZSBuYW1lIG9mIHRoZSBtb2R1bGUgZnJvbSB3aGljaCB0aGUgbG9nIG1lc3NhZ2VzIG9yaWdpbmF0ZS5cbiAgICAgKiBAcGFyYW0gdG9Db25zb2xlIHdoZXRoZXIgdG8gYWxzbyBwcmludCBtZXNzYWdlcyB0byB0aGUgY29uc29sZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kdWxlOiBzdHJpbmcsIHByaXZhdGUgdG9Db25zb2xlID0gZmFsc2UpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZWFudCBmb3IgaXJyZWNvdmVyYWJsZSBvciB0cnVseSBleGNlcHRpb25hbCBlcnJvcnMuIEEgdG9hc3Qgd2l0aCB0aGVcbiAgICAgKiBsb2cgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIGxvZyB3aWxsIGJlIHNlbnQgYmFjayB0byB0aGUgc2VydmVyXG4gICAgICogZm9yIHBvc3Rlcml0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nQ3JpdGljYWwobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gTG9nTGV2ZWwuQ3JpdGljYWw7XG4gICAgICAgIHRoaXMudG9hc3QobGV2ZWwsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgdG9hc3Qgd2l0aCB0aGUgbG9nIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSBsb2cgd2lsbCBiZSBzZW50XG4gICAgICogYmFjayB0byB0aGUgc2VydmVyIGZvciBwb3N0ZXJpdHkuXG4gICAgICovXG4gICAgcHVibGljIGxvZ0Vycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IExvZ0xldmVsLkVycm9yO1xuICAgICAgICB0aGlzLnRvYXN0KGxldmVsLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHRvYXN0IHdpdGggdGhlIGxvZyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgbG9nIHdpbGwgYmUgc2VudFxuICAgICAqIGJhY2sgdG8gdGhlIHNlcnZlciBmb3IgcG9zdGVyaXR5LlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dXYXJuaW5nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IExvZ0xldmVsLldhcm5pbmc7XG4gICAgICAgIHRoaXMudG9hc3QobGV2ZWwsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dJbmZvKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2coTG9nTGV2ZWwuSW5mbywgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ0RlYnVnKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2coTG9nTGV2ZWwuRGVidWcsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbG9nKGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnRvQ29uc29sZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bGV2ZWwudG9VcHBlckNhc2UoKX0gJHtuZXcgRGF0ZSgpfSAke3RoaXMubW9kdWxlfTogJHttZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBJTG9nUmVzdWx0ID0gYXdhaXQgcG9zdChcIi9yZXN0L2xvZ3NcIiwge1xuICAgICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlIGluc3RhbmNlb2YgT2JqZWN0ID8gXCJcIiA6IG1lc3NhZ2UsXG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMubW9kdWxlLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0KExvZ0xldmVsLkVycm9yLCBcIkZhaWxlZCB0byBzZW5kIGNsaWVudC1zaWRlIGxvZ3MgdG8gc2VydmVyLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdG9hc3QobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdG9hc3QoYCR7bGV2ZWwudG9VcHBlckNhc2UoKX06ICR7bWVzc2FnZX1gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBkZWxldGVfLCBnZXQsIElRdWVyeVBhcmFtcywgcGF0Y2gsIHBvc3QsIHBvc3RGb3JtLCBwdXQsIHB1dEZvcm0gfSBmcm9tIFwiLi9BcGlIZWxwZXJcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4vTG9nZ2VyXCI7XG5pbXBvcnQgeyBJQ29sb3IsIElHcmFwZSwgSUdyYXBlRm9ybSwgSU1vc3RDb21tb25QdXJjaGFzZURhdGUsIElQcm9kdWNlciwgSVByb2R1Y2VyRm9ybSwgSVB1cmNoYXNlLFxuICAgICAgICAgSVB1cmNoYXNlQ291bnQsIElQdXJjaGFzZUZvcm0sIElSZWdpb24sIElSZWdpb25Gb3JtLCBJU3RvcmUsIElTdG9yZUZvcm0sIElUb3BFbnRpdHksXG4gICAgICAgICBJVG90YWxMaXRlcnMsIElWaXRpQXJlYSwgSVZpdGlBcmVhRm9ybSwgSVZpdGlBcmVhU3RhdHMsIElXaW5lLCBJV2luZUNvdW50LCBJV2luZUZvcm0sXG4gICAgICAgICBJV2luZUdyYXBlLCBJV2luZUdyYXBlc0Zvcm0sIElXaW5lUGF0Y2hGb3JtLCBJV2luZVR5cGUsIElXaW5lVHlwZUZvcm0gfSBmcm9tIFwiLi9SZXN0XCI7XG5pbXBvcnQgeyBJUmVzdE1vZGVsIH0gZnJvbSBcIi4vUmVzdFR5cGVzXCI7XG5pbXBvcnQgeyBJRGljdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RpY3QobW9kZWxzOiBJUmVzdE1vZGVsW10pOiBJRGljdDxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3QgcmVzdWx0OiBJRGljdDxzdHJpbmcgfCBudWxsPiA9IHt9O1xuICAgIG1vZGVscy5mb3JFYWNoKChtb2RlbCkgPT4ge1xuICAgICAgICByZXN1bHRbbW9kZWwubmFtZV0gPSBudWxsO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjbGFzcyBFbXB0eVJlc3VsdEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIHB1YmxpYyBzdGF0aWMgaXNJbnN0YW5jZShlcnI6IEVycm9yKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBlcnIubmFtZSA9PT0gdGhpcy5OQU1FO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIE5BTUUgPSBcIkVtcHR5UmVzdWx0RXJyb3JcIjtcblxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gRW1wdHlSZXN1bHRFcnJvci5OQU1FO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9uTnVsbHMob2JqOiBJRGljdDxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgdW5kZWZpbmVkPik6IElRdWVyeVBhcmFtcyB7XG4gICAgY29uc3QgcTogSVF1ZXJ5UGFyYW1zID0ge307XG4gICAgT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoKGspID0+IEJvb2xlYW4ob2JqW2tdKSkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICBxW2tdID0gb2JqW2tdIGFzIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG4gICAgfSk7XG4gICAgcmV0dXJuIHE7XG59XG5cbmZ1bmN0aW9uIHNpbmdsZUVudGl0eUdldHRlcjxQYXJhbXMsIFJlc3A+KFxuICAgIGxpc3RHZXR0ZXI6IChwYXJhbXM6IFBhcmFtcykgPT4gUHJvbWlzZTxSZXNwW10+LFxuKTogKHBhcmFtczogUGFyYW1zKSA9PiBQcm9taXNlPFJlc3A+IHtcbiAgICAvLyBTaGF2ZSBvZmYgJ2dldCdcbiAgICBjb25zdCBvYmpOYW1lID0gbGlzdEdldHRlci5uYW1lLnN1YnN0cigzKTtcbiAgICByZXR1cm4gYXN5bmMgKHBhcmFtczogUGFyYW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBsaXN0R2V0dGVyKHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgUmVjZWl2ZWQgbW9yZSB0aGFuIG9uZSAke29iak5hbWV9IHJlc3VsdCB3aGVuIG9uZSB3YXMgZXhwZWN0ZWRgO1xuICAgICAgICAgICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihcIlJlc3RBcGlcIik7XG4gICAgICAgICAgICBsb2dnZXIubG9nRXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRPckNyZWF0ZTxSZXFQYXJhbXMsIFJlc3AsIEZvcm0+KFxuICAgIGxpc3RHZXR0ZXI6IChwYXJhbXM6IFJlcVBhcmFtcykgPT4gUHJvbWlzZTxSZXNwW10+LFxuICAgIGNyZWF0b3I6IChmb3JtOiBGb3JtKSA9PiBQcm9taXNlPFJlc3A+LFxuKTogKHBhcmFtczogUmVxUGFyYW1zLCBmb3JtOiBGb3JtKSA9PiBQcm9taXNlPFJlc3A+IHtcbiAgICBjb25zdCBvYmpOYW1lID0gbGlzdEdldHRlci5uYW1lLnN1YnN0cigzKTtcbiAgICByZXR1cm4gYXN5bmMgKHBhcmFtcywgZm9ybSkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgbGlzdEdldHRlcihwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld09iaiA9IGF3YWl0IGNyZWF0b3IoZm9ybSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFJlY2VpdmVkIG1vcmUgdGhhbiBvbmUgJHtvYmpOYW1lfSByZXN1bHQgd2hlbiBvbmUgd2FzIGV4cGVjdGVkYDtcbiAgICAgICAgbmV3IExvZ2dlcihcIlJlc3RBcGlcIikubG9nRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIHRocm93IEVycm9yKG1lc3NhZ2UpO1xuICAgIH07XG59XG5cbi8qIENPTE9SUyAqL1xuaW50ZXJmYWNlIElHZXRDb2xvclBhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbG9ycyh7IGlkLCBuYW1lIH06IElHZXRDb2xvclBhcmFtcyk6IFByb21pc2U8SUNvbG9yW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSB9KTtcbiAgICBjb25zdCBjb2xvcnM6IElDb2xvcltdID0gYXdhaXQgZ2V0KFwiL3Jlc3QvY29sb3JzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIGlmIChjb2xvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFbXB0eVJlc3VsdEVycm9yKFwiRW1wdHkgcmVzdWx0IHJldHVybmVkIGZvciBjb2xvclwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9ycztcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvbG9yID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldENvbG9ycyk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BDb2xvcnMoKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvY29sb3JzL3RvcFwiKTtcbn1cblxuLyogR1JBUEVTICovXG5pbnRlcmZhY2UgSUdldEdyYXBlc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyYXBlcyh7IGlkLCBuYW1lIH06IElHZXRHcmFwZXNQYXJhbXMpOiBQcm9taXNlPElHcmFwZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUgfSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L2dyYXBlc1wiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEdyYXBlID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldEdyYXBlcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVHcmFwZSA9IGdldE9yQ3JlYXRlKGdldEdyYXBlcywgY3JlYXRlR3JhcGUpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR3JhcGUoZ3JhcGU6IElHcmFwZUZvcm0pOiBQcm9taXNlPElHcmFwZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvZ3JhcGVzXCIsIGdyYXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdyYXBlKGlkOiBudW1iZXIsIGdyYXBlOiBJR3JhcGVGb3JtKTogUHJvbWlzZTxJR3JhcGU+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9ncmFwZXMvJHtpZH1gLCBncmFwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BHcmFwZXMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvZ3JhcGVzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogUFJPRFVDRVJTICovXG5pbnRlcmZhY2UgSUdldFByb2R1Y2Vyc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICByZWdpb25JZD86IG51bWJlcjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lLWxlbmd0aFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y2Vycyh7aWQsIG5hbWUsIHJlZ2lvbklkfTogSUdldFByb2R1Y2Vyc1BhcmFtcyk6IFByb21pc2U8SVByb2R1Y2VyW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2lkLCBuYW1lLCByZWdpb25faWQ6IHJlZ2lvbklkfSk7XG4gICAgY29uc3QgcHJvZHVjZXJzOiBJUHJvZHVjZXJbXSA9IGF3YWl0IGdldChcIi9yZXN0L3Byb2R1Y2Vyc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gcHJvZHVjZXJzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjZXIgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0UHJvZHVjZXJzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVByb2R1Y2VyID0gZ2V0T3JDcmVhdGUoZ2V0UHJvZHVjZXJzLCBjcmVhdGVQcm9kdWNlcik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWNlcihwcm9kdWNlcjogSVByb2R1Y2VyRm9ybSk6IFByb21pc2U8SVByb2R1Y2VyPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9wcm9kdWNlcnNcIiwgcHJvZHVjZXIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZHVjZXIocHJvZHVjZXI6IElQcm9kdWNlcik6IFByb21pc2U8SVByb2R1Y2VyPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3QvcHJvZHVjZXJzLyR7cHJvZHVjZXIuaWR9YCwgcHJvZHVjZXIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjZXIoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBkZWxldGVfKGAvcmVzdC9wcm9kdWNlcnMvJHtpZH1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFByb2R1Y2VycyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wcm9kdWNlcnMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBQVVJDSEFTRVMgKi9cbmludGVyZmFjZSBJR2V0UHVyY2hhc2VzUGFyYW1zIHtcbiAgICB3aW5lSWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQdXJjaGFzZXMoe3dpbmVJZH06IElHZXRQdXJjaGFzZXNQYXJhbXMpOiBQcm9taXNlPElQdXJjaGFzZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgd2luZV9pZDogd2luZUlkIH0pO1xuICAgIGNvbnN0IHB1cmNoYXNlcyA9IGF3YWl0IGdldDxJUHVyY2hhc2VbXT4oXCIvcmVzdC9wdXJjaGFzZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHB1cmNoYXNlcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVB1cmNoYXNlKHB1cmNoYXNlOiBJUHVyY2hhc2VGb3JtKTogUHJvbWlzZTxJUHVyY2hhc2U+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3B1cmNoYXNlc1wiLCBwdXJjaGFzZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQdXJjaGFzZShpZDogbnVtYmVyLCBwdXJjaGFzZTogSVB1cmNoYXNlRm9ybSk6IFByb21pc2U8SVB1cmNoYXNlPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3QvcHVyY2hhc2VzLyR7aWR9YCwgcHVyY2hhc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHVyY2hhc2UoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBkZWxldGVfKGAvcmVzdC9wdXJjaGFzZXMvJHtpZH1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vc3RDb21tb25QdXJjaGFzZURhdGUoKTogUHJvbWlzZTxJTW9zdENvbW1vblB1cmNoYXNlRGF0ZT4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wdXJjaGFzZXMvbW9zdC1jb21tb24tcHVyY2hhc2UtZGF0ZVwiKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvdGFsTGl0ZXJzKCk6IFByb21pc2U8SVRvdGFsTGl0ZXJzPiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3B1cmNoYXNlcy90b3RhbC1saXRlcnNcIik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQdXJjaGFzZUNvdW50KCk6IFByb21pc2U8SVB1cmNoYXNlQ291bnQ+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHVyY2hhc2VzL2NvdW50XCIpO1xufVxuXG4vKiBSRUdJT05TICovXG5pbnRlcmZhY2UgSUdldFJlZ2lvblBhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBwcm9kdWNlck5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWdpb25zKHsgaWQsIG5hbWUsIHByb2R1Y2VyTmFtZSB9OiBJR2V0UmVnaW9uUGFyYW1zKTogUHJvbWlzZTxJUmVnaW9uW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSwgcHJvZHVjZXJfbmFtZTogcHJvZHVjZXJOYW1lIH0pO1xuICAgIGNvbnN0IHJlZ2lvbnM6IElSZWdpb25bXSA9IGF3YWl0IGdldChcIi9yZXN0L3JlZ2lvbnNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHJlZ2lvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZWdpb24gPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0UmVnaW9ucyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVSZWdpb24gPSBnZXRPckNyZWF0ZShnZXRSZWdpb25zLCBjcmVhdGVSZWdpb24pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVnaW9uKHJlZ2lvbjogSVJlZ2lvbkZvcm0pOiBQcm9taXNlPElSZWdpb24+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3JlZ2lvbnNcIiwgcmVnaW9uKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVJlZ2lvbihyZWdpb246IElSZWdpb24pOiBQcm9taXNlPElSZWdpb24+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9yZWdpb25zLyR7cmVnaW9uLmlkfWAsIHJlZ2lvbik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BSZWdpb25zKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3JlZ2lvbnMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBTVE9SRVMgKi9cbmludGVyZmFjZSBJR2V0U3RvcmVQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdG9yZXMoe2lkLCBuYW1lfTogSUdldFN0b3JlUGFyYW1zKTogUHJvbWlzZTxJU3RvcmVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7aWQsIG5hbWV9KTtcbiAgICBjb25zdCBzdG9yZXM6IElTdG9yZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvc3RvcmVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiBzdG9yZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdG9yZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRTdG9yZXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlU3RvcmUgPSBnZXRPckNyZWF0ZShnZXRTdG9yZXMsIGNyZWF0ZVN0b3JlKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHN0b3JlOiBJU3RvcmVGb3JtKTogUHJvbWlzZTxJU3RvcmU+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3N0b3Jlc1wiLCBzdG9yZSk7XG59XG5cbi8qIFZJVEkgQVJFQVMgKi9cbmludGVyZmFjZSBJR2V0Vml0aUFyZWFzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHJlZ2lvbk5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWaXRpQXJlYXMoXG4gICAgeyBpZCwgbmFtZSwgcmVnaW9uTmFtZSB9OiBJR2V0Vml0aUFyZWFzUGFyYW1zLFxuKTogUHJvbWlzZTxJVml0aUFyZWFbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lLCByZWdpb25fbmFtZTogcmVnaW9uTmFtZSB9KTtcbiAgICBjb25zdCB2aXRpQXJlYXM6IElWaXRpQXJlYVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvdml0aS1hcmVhc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gdml0aUFyZWFzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Vml0aUFyZWEgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0Vml0aUFyZWFzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVZpdGlBcmVhID0gZ2V0T3JDcmVhdGUoZ2V0Vml0aUFyZWFzLCBjcmVhdGVWaXRpQXJlYSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVWaXRpQXJlYSh2aXRpQXJlYTogSVZpdGlBcmVhRm9ybSk6IFByb21pc2U8SVZpdGlBcmVhPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC92aXRpLWFyZWFzXCIsIHZpdGlBcmVhKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVZpdGlBcmVhKHZpdGlBcmVhOiBJVml0aUFyZWEpOiBQcm9taXNlPElWaXRpQXJlYT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3ZpdGktYXJlYXMvJHt2aXRpQXJlYS5pZH1gLCB2aXRpQXJlYSk7XG59XG5cbmludGVyZmFjZSBJR2V0Vml0aUFyZWFTdGF0c1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgcmVnaW9uSWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRWaXRpQXJlYVN0YXRzKFxuICAgIHsgaWQsIHJlZ2lvbklkIH06IElHZXRWaXRpQXJlYVN0YXRzUGFyYW1zLFxuKTogUHJvbWlzZTxJVml0aUFyZWFTdGF0c1tdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIHJlZ2lvbl9pZDogcmVnaW9uSWQgfSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3ZpdGktYXJlYXMvc3RhdHNcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BWaXRpQXJlYXMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvdml0aS1hcmVhcy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFdJTkVTICovXG5pbnRlcmZhY2UgSUdldFdpbmVzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBwcm9kdWNlcklkPzogbnVtYmVyO1xuICAgIHJlZ2lvbklkPzogbnVtYmVyO1xuICAgIHZpdGlBcmVhSWQ/OiBudW1iZXI7XG4gICAgd2luZVR5cGVJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVzKFxuICAgIHsgaWQsIHByb2R1Y2VySWQsIHJlZ2lvbklkLCB2aXRpQXJlYUlkLCB3aW5lVHlwZUlkIH06IElHZXRXaW5lc1BhcmFtcyxcbik6IFByb21pc2U8SVdpbmVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7XG4gICAgICAgIGlkLCByZWdpb25faWQ6IHJlZ2lvbklkLCBwcm9kdWNlcl9pZDogcHJvZHVjZXJJZCxcbiAgICAgICAgdml0aV9hcmVhX2lkOiB2aXRpQXJlYUlkLCB3aW5lX3R5cGVfaWQ6IHdpbmVUeXBlSWQsXG4gICAgfSk7XG4gICAgY29uc3Qgd2luZXM6IElXaW5lW10gPSBhd2FpdCBnZXQoXCIvcmVzdC93aW5lc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gd2luZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRXaW5lID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFdpbmVzKTtcblxuY29uc3QgY3JlYXRlV2luZUh0dHBGb3JtID0gKHdpbmU6IElXaW5lRm9ybSwgZmlsZTogRmlsZSB8IG51bGwpID0+IHtcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybS5hcHBlbmQoXCJ3aW5lX2Zvcm1cIiwgbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KHdpbmUpXSwge3R5cGU6IFwiYXBwbGljYXRpb24vanNvblwifSkpO1xuICAgIGlmIChmaWxlKSB7XG4gICAgICAgIGZvcm0uYXBwZW5kKFwiaW1hZ2VcIiwgZmlsZSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmUod2luZTogSVdpbmVGb3JtLCBmaWxlOiBGaWxlIHwgbnVsbCk6IFByb21pc2U8SVdpbmU+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlV2luZUh0dHBGb3JtKHdpbmUsIGZpbGUpO1xuICAgIHJldHVybiBwb3N0Rm9ybShcIi9yZXN0L3dpbmVzXCIsIGZvcm0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2luZShpZDogbnVtYmVyLCB3aW5lOiBJV2luZUZvcm0sIGZpbGU6IEZpbGUgfCBudWxsKTogUHJvbWlzZTxJV2luZT4ge1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVXaW5lSHR0cEZvcm0od2luZSwgZmlsZSk7XG4gICAgcmV0dXJuIHB1dEZvcm0oYC9yZXN0L3dpbmVzLyR7aWR9YCwgZm9ybSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXJ0VXBkYXRlV2luZShpZDogbnVtYmVyLCB3aW5lOiBJV2luZVBhdGNoRm9ybSk6IFByb21pc2U8SVdpbmU+IHtcbiAgICByZXR1cm4gcGF0Y2goYC9yZXN0L3dpbmVzLyR7aWR9YCwgd2luZSk7XG59XG5cbmludGVyZmFjZSBJU2VhcmNoV2luZXNQYXJhbXMge1xuICAgIGNvbG9yTGlrZT86IHN0cmluZztcbiAgICB3aW5lVHlwZUxpa2U/OiBzdHJpbmc7XG4gICAgcHJvZHVjZXJMaWtlPzogc3RyaW5nO1xuICAgIHJlZ2lvbkxpa2U/OiBzdHJpbmc7XG4gICAgdml0aUFyZWFMaWtlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoV2luZXMoXG4gICAgeyBjb2xvckxpa2UsIHdpbmVUeXBlTGlrZSwgcHJvZHVjZXJMaWtlLCByZWdpb25MaWtlLCB2aXRpQXJlYUxpa2UgfTogSVNlYXJjaFdpbmVzUGFyYW1zLFxuKTogUHJvbWlzZTxJV2luZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtcbiAgICAgICAgY29sb3JfbGlrZTogY29sb3JMaWtlLCB3aW5lX3R5cGVfbGlrZTogd2luZVR5cGVMaWtlLCBwcm9kdWNlcl9saWtlOiBwcm9kdWNlckxpa2UsXG4gICAgICAgIHJlZ2lvbl9saWtlOiByZWdpb25MaWtlLCB2aXRpX2FyZWFfbGlrZTogdml0aUFyZWFMaWtlLFxuICAgIH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC93aW5lcy9zZWFyY2hcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lVmFyaWV0aWVzKCk6IFByb21pc2U8SVdpbmVDb3VudD4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC93aW5lcy9jb3VudFwiKTtcbn1cblxuLyogV0lORSBHUkFQRVMgKi9cbmludGVyZmFjZSBJR2V0V2luZUdyYXBlc1BhcmFtcyB7XG4gICAgd2luZUlkPzogbnVtYmVyO1xuICAgIGdyYXBlSWQ/OiBudW1iZXI7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZS1sZW5ndGhcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lR3JhcGVzKHsgd2luZUlkLCBncmFwZUlkIH06IElHZXRXaW5lR3JhcGVzUGFyYW1zKTogUHJvbWlzZTxJV2luZUdyYXBlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyB3aW5lX2lkOiB3aW5lSWQsIGdyYXBlX2lkOiBncmFwZUlkIH0pO1xuICAgIGNvbnN0IHdpbmVHcmFwZXM6IElXaW5lR3JhcGVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3dpbmUtZ3JhcGVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB3aW5lR3JhcGVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZUdyYXBlcyh3aW5lR3JhcGVzOiBJV2luZUdyYXBlc0Zvcm0pOiBQcm9taXNlPElXaW5lR3JhcGVbXT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvd2luZS1ncmFwZXNcIiwgd2luZUdyYXBlcyk7XG59XG5cbi8qIFdJTkUgVFlQRVMgKi9cbmludGVyZmFjZSBJR2V0V2luZVR5cGVzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZVR5cGVzKHsgaWQsIG5hbWUgfTogSUdldFdpbmVUeXBlc1BhcmFtcyk6IFByb21pc2U8SVdpbmVUeXBlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSB9KTtcbiAgICBjb25zdCB3aW5lVHlwZXM6IElXaW5lVHlwZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvd2luZS10eXBlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gd2luZVR5cGVzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0V2luZVR5cGUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0V2luZVR5cGVzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVdpbmVUeXBlID0gZ2V0T3JDcmVhdGUoZ2V0V2luZVR5cGVzLCBjcmVhdGVXaW5lVHlwZSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5lVHlwZSh3aW5lVHlwZTogSVdpbmVUeXBlRm9ybSk6IFByb21pc2U8SVdpbmVUeXBlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC93aW5lLXR5cGVzXCIsIHdpbmVUeXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdpbmVUeXBlKHdpbmVUeXBlOiBJV2luZVR5cGUpOiBQcm9taXNlPElXaW5lVHlwZT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3dpbmUtdHlwZXMvJHt3aW5lVHlwZS5pZH1gLCB3aW5lVHlwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BXaW5lVHlwZXMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvd2luZS10eXBlcy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG4iLCIvKiogQmFzaWMgdHlwZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSByZXNwb25zZSBKU09OIG9mIG1hbnkgYXN5bmNocm9ub3VzIHJlcXVlc3RzLiAqL1xuaW1wb3J0IHsgSVJlc3RNb2RlbCB9IGZyb20gXCIuL1Jlc3RUeXBlc1wiO1xuXG4vKipcbiAqIEtleS12YWx1ZSBzdG9yZSB3aGVyZSB0aGUga2V5IG11c3QgYmUgYSBzdHJpbmcsIGJ1dCB0aGUgdmFsdWUgaXMgb2YgYW55IHR5cGVcbiAqIFQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSURpY3Q8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIG9iamVjdHMgdG8gYSBzaW5nbGUgb2JqZWN0IG9mIG5hbWVzIHRvIG51bGwgZm9yIHVzZSB3aXRoIG1hdGVyaWFsaXplXG4gKiBhdXRvY29tcGxldGUuXG4gKiBAcGFyYW0gb2JqZWN0cyBBbiBhcnJheSBvZiBSRVNUIG1vZGVsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzdE1vZGVsc1RvTmFtZURpY3Qob2JqZWN0czogSVJlc3RNb2RlbFtdKTogSURpY3Q8bnVsbD4ge1xuICAgIGNvbnN0IGRpY3Q6IElEaWN0PG51bGw+ID0ge307XG4gICAgb2JqZWN0cy5tYXAoKG9iaikgPT4ge1xuICAgICAgICBkaWN0W29iai5uYW1lXSA9IG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpY3Q7XG59XG5cbi8qKlxuICogQ29udmVydHMgYW4gOC1kaWdpdCBudW1iZXIgb2YgZm9ybWF0ICd5eXl5bW1kZCcgdG8gYSBEYXRlIG9iamVjdC5cbiAqIEBwYXJhbSBudW0gYSBkYXRlIG51bWJlciBvZiBmb3JtYXQgJ3l5eXltbWRkJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbnVtVG9EYXRlKG51bTogbnVtYmVyKTogRGF0ZSB7XG4gICAgY29uc3Qgc3RyTnVtID0gYCR7bnVtfWA7XG4gICAgaWYgKHN0ck51bS5sZW5ndGggIT09IDgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBJbnZhbGlkIGRhdGUgbnVtYmVyICcke3N0ck51bX0nYCk7XG4gICAgfVxuICAgIGNvbnN0IHllYXIgPSBzdHJOdW0uc3Vic3RyKDAsIDQpO1xuICAgIGNvbnN0IG1vbnRoID0gc3RyTnVtLnN1YnN0cig0LCAyKTtcbiAgICBjb25zdCBkYXkgPSBzdHJOdW0uc3Vic3RyKDYsIDIpO1xuICAgIC8vIEpTIG1vbnRocyBhcmUgMC1iYXNlZFxuICAgIHJldHVybiBuZXcgRGF0ZShwYXJzZUludCh5ZWFyLCAxMCksIHBhcnNlSW50KG1vbnRoLCAxMCkgLSAxLCBwYXJzZUludChkYXksIDEwKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRlVG9OdW0oZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSAqIDEwXzAwMCArIChkYXRlLmdldE1vbnRoKCkgKyAxKSAqIDEwMCArIGRhdGUuZ2V0RGF0ZSgpO1xufVxuXG5leHBvcnQgY29uc3QgRU5fREFTSDogc3RyaW5nID0gXCLigJNcIjtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHZpbnRhZ2UgeWVhciwgd2hpY2ggaXMgdHdvIHllYXJzIHByaW9yIHRvIHRoZSBjdXJyZW50XG4gKiB5ZWFyLiBUaGlzIGZ1bmN0aW9uIGR1cGxpY2F0ZXMgdGhlIFB5dGhvbiBmdW5jdGlvblxuICogdmlub3RlY2EudXRpbHMuZGVmYXVsdF92aW50YWdlX3llYXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRWaW50YWdlWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhbiBvYmplY3QgaXMgZW1wdHksIGkuZS4gaGFzIG5vIGtleXMuXG4gKiBAcGFyYW0gb2JqIEFuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShvYmo6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHMgd2l0aCB0aGUgZmlyc3QgbGV0dGVyIGNhcGl0YWxpemVkLlxuICogQHBhcmFtIHMgQSBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzLmxlbmd0aCA+IDAgPyBzWzBdLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKSA6IFwiXCI7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBkaXNwbGF5IG5hbWUgdG8gYW4gaHRtbCBpZFxuICogQHBhcmFtIG5hbWUgQSBjb21wb25lbnQgZGlzcGxheSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYW1lVG9JZChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoLyhcXHMpKy9nLCBcIi1cIikudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgbWF4aW11bSBlbGVtZW50IGJ5IG9uZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgdHlwZSBvZiBlbGVtZW50XG4gKiBAcGFyYW0gYXJyIEFuIGFycmF5IG9mIG9iamNlY3RzXG4gKiBAcGFyYW0gYWNjZXNzb3IgQSBmdW5jdGlvbiBmb3IgYWNjZXNzaW5nIGEgbnVtYmVyIHByb3BlcnR5IG9mIHRoZSBvYmplY3RzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXhCeTxUPihhcnI6IFRbXSwgYWNjZXNzb3I6IChlbGVtOiBUKSA9PiBudW1iZXIpOiBUIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgbWF4RWxlbTogVCB8IHVuZGVmaW5lZDtcbiAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5O1xuICAgIGZvciAoY29uc3QgZWxlbSBvZiBhcnIpIHtcbiAgICAgICAgY29uc3QgdmFsID0gYWNjZXNzb3IoZWxlbSk7XG4gICAgICAgIGlmICh2YWwgPiBtYXhWYWwpIHtcbiAgICAgICAgICAgIG1heEVsZW0gPSBlbGVtO1xuICAgICAgICAgICAgbWF4VmFsID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXhFbGVtO1xufVxuXG4vKipcbiAqIFN1bXMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBieSBvbmUgb2YgdGhlIG9iamVjdHMnIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0gYXJyIEFuIGFycmF5IG9mIG9iamVjdHNcbiAqIEBwYXJhbSBhY2Nlc3NvciBBIGZ1bmN0aW9uIGZvciBhY2Nlc3Npbmcgb25lIG9mIHRoZSBvYmplY3RzJyBwcm9wZXJ0aWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdW1CeTxUPihhcnI6IFRbXSwgYWNjZXNzb3I6IChlbGVtOiBUKSA9PiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAoY29uc3QgZWxlbSBvZiBhcnIpIHtcbiAgICAgICAgc3VtICs9IGFjY2Vzc29yKGVsZW0pO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xufVxuXG4vKipcbiAqIENvbXBhcmVzIHR3byBvYmplY3RzIGZvciBkZWVwIGVxdWFsaXR5LlxuICogQHBhcmFtIGEgQW4gb2JqZWN0XG4gKiBAcGFyYW0gYiBBbiBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyZUVxdWFsKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBjb25zdCBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3QgayBvZiBhS2V5cykge1xuICAgICAgICBpZiAoYVtrXSAhPT0gYltrXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5pbnRlcmZhY2UgSVJhbmdlQXJncyB7XG4gICAgc3RhcnQ/OiBudW1iZXI7XG4gICAgc3RvcD86IG51bWJlcjtcbiAgICBzdGVwPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmFibGUgcmFuZ2Ugb2YgbnVtYmVyc29uQ2xpY2suXG4gKiBAcGFyYW0gc3RhcnQgRmlyc3QgbnVtYmVyIG9mIHRoZSByYW5nZVxuICogQHBhcmFtIHN0b3AgRW5kIG9mIHRoZSByYW5nZSAobm9uLWluY2x1c2l2ZSlcbiAqIEBwYXJhbSBzdGVwIEluY3JlbWVudCBvZiB0aGUgcmFuZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiByYW5nZSh7IHN0YXJ0LCBzdG9wLCBzdGVwIH06IElSYW5nZUFyZ3MpOiBJdGVyYWJsZUl0ZXJhdG9yPG51bWJlcj4ge1xuICAgIHN0ZXAgPSBzdGVwIHx8IDE7XG4gICAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICAgIHN0b3AgPSBzdG9wIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgICAgICB5aWVsZCBpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGltYWdlRXhpc3RzKGltYWdlVXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGltYWdlVXJsLCB7bWV0aG9kOiBcIkhFQURcIn0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2Uub2s7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lQW5kVHlwZShuYW1lOiBzdHJpbmcgfCBudWxsLCB3aW5lVHlwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7KG5hbWUgPyBuYW1lICsgXCIgXCIgOiBcIlwiKX0ke3dpbmVUeXBlfWA7XG59XG5cbi8vIFRPRE86IG1vdmUgdG8gdXNlIFJlYWN0IHJvdXRlciBvciBzb21ldGhpbmcgc2ltaWxhclxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0KHVybDogc3RyaW5nKSB7XG4gICAgbG9jYXRpb24uaHJlZiA9IHVybDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZChmdW46ICgpID0+IHZvaWQpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW4pO1xufVxuIiwiaW1wb3J0IHsgQXV0b2NvbXBsZXRlLCBEcm9wZG93biwgU2lkZW5hdiB9IGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCB7IElEaWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxudHlwZSBPbkNoYW5nZSA9IChlOiBzdHJpbmcpID0+IHZvaWQ7XG5cbi8qKiBTZXR1cCBhdXRvY29tcGxldGlvbiB3aXRoIHByb3ZpZGVkIGNvbXBsZXRpb24gb3B0aW9ucy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdXRvY29tcGxldGUoZWxlbTogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbnM6IElEaWN0PHN0cmluZyB8IG51bGw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogT25DaGFuZ2UsIG1pbkxlbmd0aCA9IDEsIGxpbWl0ID0gNSkge1xuICAgIGlmIChlbGVtLmN1cnJlbnQpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgICAgIG5ldyBBdXRvY29tcGxldGUoZWxlbS5jdXJyZW50LCB7XG4gICAgICAgICAgICBkYXRhOiBjb21wbGV0aW9ucyxcbiAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgbWluTGVuZ3RoLFxuXG4gICAgICAgICAgICBvbkF1dG9jb21wbGV0ZTogZnVuY3Rpb24odGhpcywgdGV4dCkgeyAgLy8gdHNsaW50OmRpc2FibGUtbGluZSBvYmplY3QtbGl0ZXJhbC1zaG9ydGhhbmRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSh0ZXh0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGaXggb3ZlcmxhcHB0aW5nIHRleHQgYnVnXG4gICAgICAgIE0udXBkYXRlVGV4dEZpZWxkcygpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVOYXZiYXJUYWIoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbi8qKiBFbmFibGVzIG5hdmJhciBtZW51cy4gU2hvdWxkIGJlIGNhbGxlZCBvbiBldmVyeSBwYWdlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hdmJhcihhY3RpdmVOYXZUYWJJZD86IHN0cmluZykge1xuICAgIGlmIChhY3RpdmVOYXZUYWJJZCkge1xuICAgICAgICBhY3RpdmF0ZU5hdmJhclRhYihhY3RpdmVOYXZUYWJJZCk7XG4gICAgfVxuICAgIGNvbnN0IHNpZGVOYXZFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlbmF2XCIpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBTaWRlbmF2KHNpZGVOYXZFbGVtISk7XG4gICAgY29uc3QgZHJvcGRvd25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi10cmlnZ2VyXCIpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBEcm9wZG93bihkcm9wZG93bkVsZW0hKTtcbn1cblxuLyoqIFNpbXBsaWZpZXMgZGlzcGxheWluZyBvZiB0b2FzdCBtZXNzYWdlcyB0byB1c2VyICovXG5leHBvcnQgZnVuY3Rpb24gdG9hc3QobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgTS50b2FzdCh7XG4gICAgICAgIGNsYXNzZXM6IFwicmVkLWJnXCIsXG4gICAgICAgIGRpc3BsYXlMZW5ndGg6IDEwMDAwLFxuICAgICAgICBodG1sOiBtZXNzYWdlLFxuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==