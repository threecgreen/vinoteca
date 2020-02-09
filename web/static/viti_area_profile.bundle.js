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
/******/ 		"viti_area_profile": 0
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
/******/ 	deferredModules.push([5,"vendors"]);
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

/***/ "./front_end/viti_area_profile/VitiArea.tsx":
/*!**************************************************!*\
  !*** ./front_end/viti_area_profile/VitiArea.tsx ***!
  \**************************************************/
/*! exports provided: VitiArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitiArea", function() { return VitiArea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_VitiAreaInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/VitiAreaInput */ "./components/VitiAreaInput.tsx");




class VitiArea extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "bold" }, this.props.vitiArea.name))));
    }
    renderEdit() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], { s: 10 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "bold" }, "Edit Viticultural Area"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { autoComplete: "off" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_VitiAreaInput__WEBPACK_IMPORTED_MODULE_3__["VitiAreaInput"], { value: this.props.vitiAreaText, onChange: this.props.onVitiAreaChange }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["CancelOrConfirmBtns"], { onConfirmClick: this.props.onConfirmClick, onCancelClick: this.props.onCancelClick })));
    }
}


/***/ }),

/***/ "./front_end/viti_area_profile/VitiAreaProfileApp.tsx":
/*!************************************************************!*\
  !*** ./front_end/viti_area_profile/VitiAreaProfileApp.tsx ***!
  \************************************************************/
/*! exports provided: VitiAreaProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitiAreaProfile", function() { return VitiAreaProfile; });
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
/* harmony import */ var _VitiArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VitiArea */ "./front_end/viti_area_profile/VitiArea.tsx");
/* harmony import */ var _VitiAreaStatsTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VitiAreaStatsTable */ "./front_end/viti_area_profile/VitiAreaStatsTable.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











class VitiAreaProfile extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            vitiAreaText: "",
            vitiArea: undefined,
            wines: [],
            stats: undefined,
        };
        this.logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_7__["default"](this.constructor.name, true);
        this.onVitiAreaChange = this.onVitiAreaChange.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            Promise.all([
                this.getAndSetVitiArea(),
                this.getAndSetWines(),
                this.getAndSetStats(),
            ]);
        });
    }
    getAndSetVitiArea() {
        return __awaiter(this, void 0, void 0, function* () {
            const vitiArea = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_8__["getVitiArea"])({ id: this.props.vitiAreaId });
            this.setState({ vitiArea, vitiAreaText: vitiArea.name });
        });
    }
    getAndSetWines() {
        return __awaiter(this, void 0, void 0, function* () {
            const wines = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_8__["getWines"])({ vitiAreaId: this.props.vitiAreaId });
            this.setState({ wines });
        });
    }
    getAndSetStats() {
        return __awaiter(this, void 0, void 0, function* () {
            const stats = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_8__["getVitiAreaStats"])({ id: this.props.vitiAreaId });
            this.setState({ stats: stats[0] });
        });
    }
    render() {
        if (!this.state.vitiArea) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_5__["Preloader"], null);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VitiArea__WEBPACK_IMPORTED_MODULE_9__["VitiArea"], { isEditing: this.state.isEditing, vitiArea: this.state.vitiArea, vitiAreaText: this.state.vitiAreaText, onVitiAreaChange: this.onVitiAreaChange, onConfirmClick: this.onConfirmClick, onCancelClick: this.onCancelClick }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 6 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VitiAreaStatsTable__WEBPACK_IMPORTED_MODULE_10__["VitiAreaStatsTable"], { stats: this.state.stats })),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 6, classes: ["fixed-action-div"] },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FixedActionList__WEBPACK_IMPORTED_MODULE_2__["FixedActionList"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { onClick: this.onEditClick, classes: ["yellow-bg"] },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__["MaterialIcon"], { iconName: "edit" }))))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Wines"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WinesTable__WEBPACK_IMPORTED_MODULE_6__["WinesTable"], { wines: this.state.wines, excludeColumn: _components_WinesTable__WEBPACK_IMPORTED_MODULE_6__["ColumnToExclude"].VitiArea })))));
    }
    onEditClick() {
        this.setState({ isEditing: true });
    }
    onVitiAreaChange(val) {
        this.setState({
            vitiAreaText: val,
        });
    }
    onConfirmClick() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vitiArea = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_8__["updateVitiArea"])({
                    id: this.props.vitiAreaId,
                    name: this.state.vitiAreaText,
                    region: this.state.vitiArea.region,
                    regionId: this.state.vitiArea.regionId,
                });
                this.setState({
                    isEditing: false,
                    vitiArea: vitiArea,
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
            vitiAreaText: state.vitiArea ? state.vitiArea.name : "",
        }));
    }
}


/***/ }),

/***/ "./front_end/viti_area_profile/VitiAreaStatsTable.tsx":
/*!************************************************************!*\
  !*** ./front_end/viti_area_profile/VitiAreaStatsTable.tsx ***!
  \************************************************************/
/*! exports provided: VitiAreaStatsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitiAreaStatsTable", function() { return VitiAreaStatsTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Table */ "./components/Table.tsx");
/* harmony import */ var _components_TableCells__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TableCells */ "./components/TableCells.tsx");



const VitiAreaStatsTable = (props) => {
    if (!props.stats) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Table__WEBPACK_IMPORTED_MODULE_1__["Table"], { columns: [] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, "Total Wines"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_2__["NumCell"], { num: props.stats.totalWines, maxDecimals: 0 })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, "Avg Price"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_2__["NumCell"], { num: props.stats.avgPrice, maxDecimals: 2 })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, "Avg Rating"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableCells__WEBPACK_IMPORTED_MODULE_2__["NumCell"], { num: props.stats.avgRating, maxDecimals: 1 }))));
};


/***/ }),

/***/ "./front_end/viti_area_profile/viti_area_profile.ts":
/*!**********************************************************!*\
  !*** ./front_end/viti_area_profile/viti_area_profile.ts ***!
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
/* harmony import */ var _VitiAreaProfileApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VitiAreaProfileApp */ "./front_end/viti_area_profile/VitiAreaProfileApp.tsx");





Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"])(() => {
    Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_3__["navbar"])();
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_VitiAreaProfileApp__WEBPACK_IMPORTED_MODULE_4__["VitiAreaProfile"], { vitiAreaId: id }), document.getElementById("viti_area_profile-container"));
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

/***/ 5:
/*!****************************************************************!*\
  !*** multi ./front_end/viti_area_profile/viti_area_profile.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carter/git/vinoteca/vinoteca/front_end/viti_area_profile/viti_area_profile.ts */"./front_end/viti_area_profile/viti_area_profile.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25zLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbG9ySW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRml4ZWRBY3Rpb25MaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWF0ZXJpYWxJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByZWxvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWxlY3RJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGVjaWFsQ2hhckJ0bi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGVjaWFsQ2hhcnMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFibGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFibGVDZWxscy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZUhlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXh0SW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVml0aUFyZWFJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XaW5lc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvdml0aV9hcmVhX3Byb2ZpbGUvVml0aUFyZWEudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC92aXRpX2FyZWFfcHJvZmlsZS9WaXRpQXJlYVByb2ZpbGVBcHAudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC92aXRpX2FyZWFfcHJvZmlsZS9WaXRpQXJlYVN0YXRzVGFibGUudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC92aXRpX2FyZWFfcHJvZmlsZS92aXRpX2FyZWFfcHJvZmlsZS50cyIsIndlYnBhY2s6Ly8vLi9saWIvQXBpSGVscGVyLnRzIiwid2VicGFjazovLy8uL2xpYi9Db29raWVzLnRzIiwid2VicGFjazovLy8uL2xpYi9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL1Jlc3RBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL2xpYi93aWRnZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxn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VztZQUNqQixLQUFLO1lBQ0wsU0FBUztZQUVULGNBQWMsRUFBRSxVQUFlLElBQUk7Z0JBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsNEJBQTRCO1FBQzVCLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3hCO0FBQ0wsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsRUFBVTtJQUNoQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFFRCw0REFBNEQ7QUFDckQsU0FBUyxNQUFNLENBQUMsY0FBdUI7SUFDMUMsSUFBSSxjQUFjLEVBQUU7UUFDaEIsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDckM7SUFDRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZELGdEQUFnRDtJQUNoRCxJQUFJLHVEQUFPLENBQUMsV0FBWSxDQUFDLENBQUM7SUFDMUIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pFLGdEQUFnRDtJQUNoRCxJQUFJLHdEQUFRLENBQUMsWUFBYSxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVELHNEQUFzRDtBQUMvQyxTQUFTLEtBQUssQ0FBQyxPQUFlO0lBQ2pDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDSixPQUFPLEVBQUUsUUFBUTtRQUNqQixhQUFhLEVBQUUsS0FBSztRQUNwQixJQUFJLEVBQUUsT0FBTztLQUNoQixDQUFDLENBQUM7QUFDUCxDQUFDIiwiZmlsZSI6InZpdGlfYXJlYV9wcm9maWxlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJ2aXRpX2FyZWFfcHJvZmlsZVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFs1LFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSUNoaWxkcmVuUHJvcCwgSUNsYXNzZXNQcm9wIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBDb2wgfSBmcm9tIFwiLi9HcmlkXCI7XG5pbXBvcnQgeyBNYXRlcmlhbEljb24gfSBmcm9tIFwiLi9NYXRlcmlhbEljb25cIjtcblxuaW50ZXJmYWNlIElGbG9hdGluZ0J0blByb3BzIGV4dGVuZHMgSUNoaWxkcmVuUHJvcCwgSUNsYXNzZXNQcm9wIHtcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIG9uTW91c2VEb3duPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbn1cblxuZnVuY3Rpb24gY29tYmluZUNsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10gfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuICAgIHJldHVybiAoY2xhc3NlcyB8fCBbXSkuam9pbihcIiBcIik7XG59XG5cbmV4cG9ydCBjb25zdCBGbG9hdGluZ0J0bjogUmVhY3QuRkM8SUZsb2F0aW5nQnRuUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbWJpbmVDbGFzc2VzKHByb3BzLmNsYXNzZXMpO1xuICAgIGNvbnN0IG1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xuICAgICAgICBpZiAocHJvcHMub25Nb3VzZURvd24pIHtcbiAgICAgICAgICAgIHByb3BzLm9uTW91c2VEb3duKGUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb3BzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9eyBgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0bi1mbG9hdGluZyAke2NsYXNzZXN9YCB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgb25DbGljayB9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17IG1vdXNlRG93biB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L2E+XG4gICAgKTtcbn07XG5GbG9hdGluZ0J0bi5kaXNwbGF5TmFtZSA9IFwiRmxvYXRpbmdCdG5cIjtcbkZsb2F0aW5nQnRuLmRlZmF1bHRQcm9wcyA9IHsgb25Nb3VzZURvd246IChfKSA9PiB1bmRlZmluZWQgfTtcblxuaW50ZXJmYWNlIElCdG5Qcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB7XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEJ0bjogUmVhY3QuRkM8SUJ0blByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21iaW5lQ2xhc3Nlcyhwcm9wcy5jbGFzc2VzKTtcbiAgICBjb25zdCBvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcHJvcHMub25DbGljaygpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsgYHJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biAke2NsYXNzZXN9YCB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgb25DbGljayB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuQnRuLmRpc3BsYXlOYW1lID0gXCJCdG5cIjtcblxuaW50ZXJmYWNlIElDYW5jZWxPckNvbmZpcm1Qcm9wcyB7XG4gICAgb25Db25maXJtQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgb25DYW5jZWxDbGljazogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENhbmNlbE9yQ29uZmlybUJ0bnM6IFJlYWN0LkZDPElDYW5jZWxPckNvbmZpcm1Qcm9wcz4gPVxuICAgIChwcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbCBzPXsgMTIgfT5cbiAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcImdyZWVuLWJnXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25Db25maXJtQ2xpY2sgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENvbmZpcm1cbiAgICAgICAgICAgICAgICA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwic2VuZFwiIGNsYXNzTmFtZT1cInJpZ2h0XCIgLz5cbiAgICAgICAgICAgIDwvQnRuPlxuICAgICAgICAgICAgPEJ0biBjbGFzc2VzPXsgW1wicmVkLWJnXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25DYW5jZWxDbGljayB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgPC9Db2w+XG4gICAgKTtcbn1cbkNhbmNlbE9yQ29uZmlybUJ0bnMuZGlzcGxheU5hbWUgPSBcIkNhbmNlbE9yQ29uZmlybUJ0bnNcIjtcbiIsImltcG9ydCB7IEZvcm1TZWxlY3QgfSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyBJQ29sb3IgfSBmcm9tIFwiLi4vbGliL1Jlc3RcIjtcbmltcG9ydCB7IGdldENvbG9ycyB9IGZyb20gXCIuLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgSU9uQ2hhbmdlIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBTZWxlY3RJbnB1dCB9IGZyb20gXCIuL1NlbGVjdElucHV0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJT25DaGFuZ2Uge1xuICAgIHNlbGVjdGlvbjogc3RyaW5nO1xuICAgIGV4dHJhQ2hvaWNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQ29sb3JzU2VsZWN0ID0gKGxvZ2dlcjogTG9nZ2VyLCBleHRyYUNob2ljZT86IHN0cmluZyk6IFtzdHJpbmdbXSwgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MU2VsZWN0RWxlbWVudD5dID0+IHtcbiAgICBjb25zdCBbc2VsZWN0aW9uT3B0aW9ucywgc2V0U2VsZWN0aW9uT3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IHNlbGVjdFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTFNlbGVjdEVsZW1lbnQ+O1xuXG4gICAgY29uc3QgY29uY2F0SWZOb3ROdWxsPSAob3B0aW9uczogc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgIGlmIChleHRyYUNob2ljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtleHRyYUNob2ljZV0uY29uY2F0KG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29sb3JzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvcnM6IElDb2xvcltdID0gYXdhaXQgZ2V0Q29sb3JzKHt9KTtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3Rpb25PcHRpb25zKGNvbmNhdElmTm90TnVsbChjb2xvcnMubWFwKChjb2xvcikgPT4gY29sb3IubmFtZSkpKTtcbiAgICAgICAgICAgICAgICBuZXcgRm9ybVNlbGVjdChzZWxlY3RSZWYuY3VycmVudCEpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFwiRmFpbGVkIHRvIGdldCBjb2xvcnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaENvbG9ycygpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW3NlbGVjdGlvbk9wdGlvbnMsIHNlbGVjdFJlZl1cbn1cblxuZXhwb3J0IGNvbnN0IENvbG9ySW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKENvbG9ySW5wdXQubmFtZSk7XG5cbiAgICBjb25zdCBbc2VsZWN0aW9uT3B0aW9ucywgc2VsZWN0UmVmXSA9IHVzZUNvbG9yc1NlbGVjdChsb2dnZXIsIHByb3BzLmV4dHJhQ2hvaWNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWxlY3RJbnB1dCBuYW1lPVwiQ29sb3JcIlxuICAgICAgICAgICAgcz17IDQgfSBsPXsgMiB9XG4gICAgICAgICAgICBzZWxlY3RSZWY9eyBzZWxlY3RSZWYgfVxuICAgICAgICAgICAgb3B0aW9ucz17IHNlbGVjdGlvbk9wdGlvbnMgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyAodikgPT4gcHJvcHM/Lm9uQ2hhbmdlKHYpIH1cbiAgICAgICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5Db2xvcklucHV0LmRpc3BsYXlOYW1lID0gXCJDb2xvcklucHV0XCI7XG4iLCJpbXBvcnQgeyBGbG9hdGluZ0FjdGlvbkJ1dHRvbiB9IGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZsb2F0aW5nQnRuIH0gZnJvbSBcIi4vQnV0dG9uc1wiO1xuaW1wb3J0IHsgSUNoaWxkcmVuUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4vTWF0ZXJpYWxJY29uXCI7XG5cbmV4cG9ydCBjb25zdCBGaXhlZEFjdGlvbkxpc3Q6IFJlYWN0LkZDPElDaGlsZHJlblByb3A+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZGl2UmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuZXcgRmxvYXRpbmdBY3Rpb25CdXR0b24oZGl2UmVmLmN1cnJlbnQsIHtkaXJlY3Rpb246IFwibGVmdFwifSk7XG4gICAgfSwgW2RpdlJlZl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtYWN0aW9uLWJ0biBob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICByZWY9eyBkaXZSZWYgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0J0biBjbGFzc2VzPXsgW1wiYnRuLWxhcmdlXCIsIFwicmVkLWJnXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG51bGwgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cIm1lbnVcIiAvPlxuICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICAgICAgPHVsPiB7IFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaT57IGNoaWxkIH08L2xpPlxuICAgICAgICAgICAgICAgICkpIH0gPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuRml4ZWRBY3Rpb25MaXN0LmRpc3BsYXlOYW1lID0gXCJGaXhlZEFjdGlvbkxpc3RcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkUHJvcHMge1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xuICAgIHhsPzogbnVtYmVyO1xufVxuXG50eXBlIElBbGxHcmlkUHJvcHMgPSBJR3JpZFByb3BzICYgSUNsYXNzZXNQcm9wICYgSUNoaWxkcmVuUHJvcDtcblxuZnVuY3Rpb24gam9pbkNsYXNzZXMoZ3JpZDogc3RyaW5nW10sIGNsYXNzZXM/OiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgbGV0IGFsbENsYXNzZXM6IHN0cmluZ1tdID0gW107XG4gICAgZ3JpZC5mb3JFYWNoKChnYykgPT4ge1xuICAgICAgICBpZiAoZ2MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWxsQ2xhc3Nlcy5wdXNoKGdjKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGFsbENsYXNzZXMgPSBhbGxDbGFzc2VzLmNvbmNhdChjbGFzc2VzIHx8IFtdKTtcbiAgICByZXR1cm4gYWxsQ2xhc3Nlcy5qb2luKFwiIFwiKTtcbn1cblxuZnVuY3Rpb24gZ3JpZENsYXNzZXMocHJvcHM6IElBbGxHcmlkUHJvcHMpOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgc0NsYXNzID0gcHJvcHMucyA/IGBzJHtwcm9wcy5zfWAgOiBcIlwiO1xuICAgIGNvbnN0IG1DbGFzcyA9IHByb3BzLm0gPyBgbSR7cHJvcHMubX1gIDogXCJcIjtcbiAgICBjb25zdCBsQ2xhc3MgPSBwcm9wcy5sID8gYGwke3Byb3BzLmx9YCA6IFwiXCI7XG4gICAgY29uc3QgeGxDbGFzcyA9IHByb3BzLnhsID8gYHhsJHtwcm9wcy54bH1gIDogXCJcIjtcbiAgICByZXR1cm4gW3NDbGFzcywgbUNsYXNzLCBsQ2xhc3MsIHhsQ2xhc3NdO1xufVxuXG5jb25zdCBHcmlkQ29tcG9uZW50RmFjdG9yeSA9IChjbGFzc05hbWU6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZyk6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0+IHtcbiAgICBjb25zdCBjb21wb25lbnQ6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0gKHByb3BzOiBJQWxsR3JpZFByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IG90aGVyQ2xhc3NlcyA9IGpvaW5DbGFzc2VzKGdyaWRDbGFzc2VzKHByb3BzKSwgcHJvcHMuY2xhc3Nlcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGAke2NsYXNzTmFtZX0gJHtvdGhlckNsYXNzZXN9YCB9PlxuICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbiAgICBjb21wb25lbnQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgY29uc3QgUm93OiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IEdyaWRDb21wb25lbnRGYWN0b3J5KFwicm93XCIsIFwiUm93XCIpO1xuXG5leHBvcnQgY29uc3QgQ29sOiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IEdyaWRDb21wb25lbnRGYWN0b3J5KFwiY29sXCIsIFwiQ29sXCIpO1xuXG5leHBvcnQgY29uc3QgSW5wdXRGaWVsZDogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcImNvbCBpbnB1dC1maWVsZFwiLCBcIklucHV0RmllbGRcIilcbiIsImltcG9ydCBNIGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG5hbWVUb0lkIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gXCIuL0dyaWRcIjtcblxudHlwZSBJSW5wdXRWYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbnB1dFByb3BzPFQgZXh0ZW5kcyBJSW5wdXRWYWx1ZT4ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB2YWx1ZTogVDtcbiAgICBlbmFibGVkOiBib29sZWFuO1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Gb2N1czogKCkgPT4gdm9pZDtcbiAgICBvbkJsdXI6ICgpID0+IHZvaWQ7XG4gICAgaW5wdXRSZWY/OiBSZWFjdC5SZWY8SFRNTElucHV0RWxlbWVudD47XG4gICAgaW5wdXRUeXBlPzogc3RyaW5nO1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgc3RlcD86IHN0cmluZztcbiAgICBtYXg/OiBudW1iZXI7XG4gICAgbWluPzogbnVtYmVyO1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgSW5wdXQ8VSBleHRlbmRzIElJbnB1dFZhbHVlPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJSW5wdXRQcm9wczxVPj4ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBvbkNoYW5nZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBvbkZvY3VzOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIG9uQmx1cjogKF86IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaWQgPSBuYW1lVG9JZCh0aGlzLnByb3BzLm5hbWUpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPElucHV0RmllbGQgcz17IHRoaXMucHJvcHMucyB9IG09eyB0aGlzLnByb3BzLm0gfSBsPXsgdGhpcy5wcm9wcy5sIH0+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXsgaWQgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmNsYXNzTmFtZSB9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17IHRoaXMucHJvcHMuaW5wdXRSZWYgfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPXsgdGhpcy5wcm9wcy5pbnB1dFR5cGUgfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ICF0aGlzLnByb3BzLmVuYWJsZWQgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHRoaXMucHJvcHMudmFsdWUgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiB0aGlzLm9uQ2hhbmdlKGUpIH1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsgdGhpcy5wcm9wcy5vbkJsdXIgfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsgdGhpcy5wcm9wcy5vbkZvY3VzIH1cbiAgICAgICAgICAgICAgICAgICAgc3RlcD17IHRoaXMucHJvcHMuc3RlcCB9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17IHRoaXMucHJvcHMubWluIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgdGhpcy5wcm9wcy5tYXggfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuYWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCIgfSBodG1sRm9yPXsgaWQgfT5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLm5hbWUgfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L0lucHV0RmllbGQ+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBNLnVwZGF0ZVRleHRGaWVsZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBNLnVwZGF0ZVRleHRGaWVsZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIGljb25OYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBNYXRlcmlhbEljb246IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgPGkgY2xhc3NOYW1lPXsgYG1hdGVyaWFsLWljb25zICR7cHJvcHMuY2xhc3NOYW1lfWAgfT5cbiAgICAgICAgICAgIHsgcHJvcHMuaWNvbk5hbWUgfVxuICAgICAgICA8L2k+XG4gICAgKTtcbn07XG5NYXRlcmlhbEljb24uZGlzcGxheU5hbWUgPSBcIk1hdGVyaWFsSWNvblwiO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBQcmVsb2FkZXI6IFJlYWN0LkZDPHt9PiA9IChfKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRldGVybWluYXRlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5QcmVsb2FkZXIuZGlzcGxheU5hbWUgPSBcIlByZWxvYWRlclwiO1xuXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyQ2lyYzogUmVhY3QuRkM8e30+ID0gKF8pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWxvYWRlci13cmFwcGVyIGFjdGl2ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWxheWVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+PGRpdiBjbGFzc05hbWU9XCJnYXAtcGF0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblByZWxvYWRlckNpcmMuZGlzcGxheU5hbWUgPSBcIlByZWxvYWRlckNpcmNcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciwgbmFtZVRvSWQgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSBcIi4vR3JpZFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3B0aW9uczogc3RyaW5nW107XG4gICAgc2VsZWN0aW9uOiBzdHJpbmc7XG4gICAgc2VsZWN0VGV4dD86IHN0cmluZztcbiAgICBzZWxlY3RSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MU2VsZWN0RWxlbWVudD47XG4gICAgb25DaGFuZ2U6ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFNlbGVjdElucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaWQgPSBuYW1lVG9JZChwcm9wcy5uYW1lKTtcbiAgICBsZXQgc2VsZWN0VGV4dDogSlNYLkVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgaWYgKHByb3BzLnNlbGVjdFRleHQpIHtcbiAgICAgICAgc2VsZWN0VGV4dCA9IDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIHsgcHJvcHMuc2VsZWN0VGV4dCB9XG4gICAgICAgIDwvb3B0aW9uPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0RmllbGQgcz17IHByb3BzLnMgfSBtPXsgcHJvcHMubSB9IGw9eyBwcm9wcy5sIH0+XG4gICAgICAgICAgICA8c2VsZWN0IGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgIG5hbWU9eyBpZCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gcHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17IHByb3BzLnNlbGVjdGlvbiB8fCBwcm9wcy5zZWxlY3RUZXh0IH1cbiAgICAgICAgICAgICAgICByZWY9eyBwcm9wcy5zZWxlY3RSZWYgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsgc2VsZWN0VGV4dCB9XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsgb3B0aW9uIH0ga2V5PXsgb3B0aW9uIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIob3B0aW9uKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9eyBpZCB9PnsgcHJvcHMubmFtZSB9PC9sYWJlbD5cbiAgICAgICAgPC9JbnB1dEZpZWxkPlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmxvYXRpbmdCdG4gfSBmcm9tIFwiLi9CdXR0b25zXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG9uQ2xpY2s6IChjaGFyOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgY2hhcjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgU3BlY2lhbENoYXJCdG46IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gW1wiYnRuLXNtYWxsXCIsIFwiY2VudGVyXCIsIFwic3BlYy1jaGFyLWJ0blwiXTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RmxvYXRpbmdCdG4gY2xhc3Nlcz17IGNsYXNzZXMgfVxuICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG51bGwgfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyAoKSA9PiBwcm9wcy5vbkNsaWNrKHByb3BzLmNoYXIpIH1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyBwcm9wcy5jaGFyIH1cbiAgICAgICAgPC9GbG9hdGluZ0J0bj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZsb2F0aW5nQnRuIH0gZnJvbSBcIi4vQnV0dG9uc1wiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4vR3JpZFwiO1xuaW1wb3J0IHsgU3BlY2lhbENoYXJCdG4gfSBmcm9tIFwiLi9TcGVjaWFsQ2hhckJ0blwiO1xuXG5lbnVtIENhc2Uge1xuICAgIFVwcGVyLFxuICAgIExvd2VyLFxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBvbkNsaWNrOiAoY2hhcjogc3RyaW5nKSA9PiB2b2lkO1xuICAgIGNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgICBkaXNwbGF5OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICBjaGFyczogc3RyaW5nW107XG4gICAgY3VycmVudENhc2U6IENhc2U7XG59XG5cbmV4cG9ydCBjbGFzcyBTcGVjaWFsQ2hhcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcbiAgICBwdWJsaWMgc3RhdGljIGluc2VydENoYXJBdCh2YWw6IHN0cmluZywgY2hhcjogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpc05hTihwb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwgKyBjaGFyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWwuc3Vic3RyKDAsIHBvc2l0aW9uKSArIGNoYXIgKyB2YWwuc3Vic3RyKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYXJzOiBbXG4gICAgICAgICAgICAgICAgXCLDoFwiLCBcIsOhXCIsIFwiw6JcIiwgXCLDo1wiLCBcIsOmXCIsIFwixI1cIiwgXCLDp1wiLCBcIsOoXCIsIFwiw6lcIiwgXCLDqlwiLCBcIsOrXCIsIFwiw61cIiwgXCLDrlwiLFxuICAgICAgICAgICAgICAgIFwiw69cIiwgXCLDsVwiLCBcIsOzXCIsIFwiw7RcIiwgXCLDtVwiLCBcIsWTXCIsIFwixaFcIiwgXCLDuVwiLCBcIsO6XCIsIFwiw7tcIiwgXCLDvFwiLCBcIsW+XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY3VycmVudENhc2U6IENhc2UuTG93ZXIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFtcInNwZWNpYWwtY2hhcnNcIl07XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc3BsYXkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc2VzPXsgY2xhc3Nlcy5jb25jYXQodGhpcy5wcm9wcy5jbGFzc2VzID8/IFtdKSB9PlxuICAgICAgICAgICAgICAgICAgICB7LyogU2hpZnQgYnV0dG9uICovfVxuICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdCdG4gY2xhc3Nlcz17IFtcImNlbnRlclwiLCBcImdyZWVuLWJnXCIsIFwic2hpZnQtYnRuXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsgdGhpcy5oYW5kbGVTaGlmdC5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmN1cnJlbnRDYXNlID09PSBDYXNlLkxvd2VyID8gXCLihpFcIiA6IFwi4oaTXCIgfVxuICAgICAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nQnRuPlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuY2hhcnMubWFwKChjaGFyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjaWFsQ2hhckJ0biBjaGFyPXsgY2hhciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGNoYXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGMpID0+IHRoaXMucHJvcHMub25DbGljayhjKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZVNoaWZ0KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmN1cnJlbnRDYXNlID09PSBDYXNlLkxvd2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnM6IHN0YXRlLmNoYXJzLm1hcCgoY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhc2U6IENhc2UuVXBwZXIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hhcnM6IHN0YXRlLmNoYXJzLm1hcCgoY2hhcikgPT4gY2hhci50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2FzZTogQ2FzZS5Mb3dlcixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQ2hpbGRyZW5Qcm9wIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbHVtbkhlYWRlciB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGlzTnVtQ29sPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFdpbmVUYWJsZU51bUNvbHM6IElDb2x1bW5IZWFkZXJbXSA9IFtcbiAgICB7IG5hbWU6IFwiVG90YWwgUXVhbnRpdHlcIiwgaXNOdW1Db2w6IHRydWUgfSxcbiAgICB7IG5hbWU6IFwiQXZnIFByaWNlXCIsIGlzTnVtQ29sOiB0cnVlIH0sXG4gICAgeyBuYW1lOiBcIlJhdGluZ1wiLCBpc051bUNvbDogdHJ1ZSB9LFxuXVxuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSUNoaWxkcmVuUHJvcCB7XG4gICAgY29sdW1uczogKHN0cmluZyB8IElDb2x1bW5IZWFkZXIpW107XG4gICAgY29uZGVuc2VkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFRhYmxlOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgY29uZGVuc2VkID0gcHJvcHMuY29uZGVuc2VkID8/IHRydWU7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17IGBoaWdobGlnaHQgcmVzcG9uc2l2ZSAke2NvbmRlbnNlZCA/IFwiY29uZGVuc2VkXCIgOiBcIlwifWAgfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY29sdW1ucy5tYXAoKGNvbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2wgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRoIGtleT17IGNvbCB9PnsgY29sIH08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXsgY29sLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBjb2wuaXNOdW1Db2wgPyBcIm51bS1jb2xcIiA6IFwiXCIgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjb2wubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICApO1xufTtcblRhYmxlLmRpc3BsYXlOYW1lID0gXCJUYWJsZVwiO1xuIiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZXNtL2Zvcm1hdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBFTl9EQVNILCBnZXROYW1lQW5kVHlwZSwgbnVtVG9EYXRlIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgSVRleHRDZWxsUHJvcHMge1xuICAgIGRlZmF1bHQ/OiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIFRleHRDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUZXh0Q2VsbFByb3BzPiB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDx0ZD57IHRoaXMucHJvcHMudGV4dCA/PyB0aGlzLnByb3BzLmRlZmF1bHQgfTwvdGQ+O1xuICAgIH1cbn07XG5cbmludGVyZmFjZSBJTnVtQ2VsbFByb3BzIHtcbiAgICBudW06IG51bWJlciB8IG51bGw7XG4gICAgbWluRGVjaW1hbHM/OiBudW1iZXI7XG4gICAgbWF4RGVjaW1hbHM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBOdW1DZWxsOiBSZWFjdC5GQzxJTnVtQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IG51bSA9IHByb3BzLm51bVxuICAgICAgICAvLyB1bmRlZmluZWQgdG8gdXNlIGJyb3dzZXIncyBsb2NhbGVcbiAgICAgICAgPyBwcm9wcy5udW0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcm9wcy5taW5EZWNpbWFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJvcHMubWF4RGVjaW1hbHN9KVxuICAgICAgICA6IEVOX0RBU0g7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm51bS1jb2xcIj57IG51bSB9PC90ZD5cbiAgICApO1xufTtcbk51bUNlbGwuZGlzcGxheU5hbWUgPSBcIk51bUNlbGxcIjtcblxuaW50ZXJmYWNlIElQcmljZUNlbGxQcm9wcyB7XG4gICAgcHJpY2U6IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBQcmljZUNlbGw6IFJlYWN0LkZDPElQcmljZUNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TnVtQ2VsbCBudW09eyBwcm9wcy5wcmljZSB9XG4gICAgICAgICAgICBtaW5EZWNpbWFscz17IDIgfVxuICAgICAgICAgICAgbWF4RGVjaW1hbHM9eyAyIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUHJpY2VDZWxsLmRpc3BsYXlOYW1lID0gXCJQcmljZUNlbGxcIjtcblxuZXhwb3J0IGNvbnN0IFllYXJDZWxsOiBSZWFjdC5GQzx7eWVhcjogbnVtYmVyIHwgbnVsbH0+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeWVhciA9IHByb3BzLnllYXI/LnRvU3RyaW5nKCkgPz8gXCJOVlwiO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJudW0tY29sXCI+XG4gICAgICAgICAgICB7IHllYXIgfVxuICAgICAgICA8L3RkPlxuICAgICk7XG59XG5ZZWFyQ2VsbC5kaXNwbGF5TmFtZSA9IFwiWWVhckNlbGxcIjtcblxuaW50ZXJmYWNlIElEYXRlQ2VsbFByb3BzIHtcbiAgICBkYXRlOiBudW1iZXIgfCBudWxsO1xuICAgIGZvcm1hdD86IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBEYXRlQ2VsbDogUmVhY3QuRkM8SURhdGVDZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZGF0ZVN0ciA9IHByb3BzLmRhdGUgPyBmb3JtYXQobnVtVG9EYXRlKHByb3BzLmRhdGUpLCBwcm9wcy5mb3JtYXQgPz8gXCJNTU0gZGQsIHl5eXlcIikgOiBFTl9EQVNIO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZD57IGRhdGVTdHIgfTwvdGQ+XG4gICAgKTtcbn1cbkRhdGVDZWxsLmRpc3BsYXlOYW1lID0gXCJEYXRlQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSUNvbG9yQ2VsbFByb3BzIHtcbiAgICBjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ29sb3JDZWxsOiBSZWFjdC5GQzxJQ29sb3JDZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKHByb3BzLmNvbG9yKSB7XG4gICAgICAgIHJldHVybiA8dGQ+eyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIocHJvcHMuY29sb3IpIH08L3RkPjtcbiAgICB9XG4gICAgcmV0dXJuIDx0ZCAvPjtcbn07XG5Db2xvckNlbGwuZGlzcGxheU5hbWUgPSBcIkNvbG9yQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSUxpbmtlZENlbGxQcm9wcyB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBtb2RlbDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgTGlua2VkQ2VsbDogUmVhY3QuRkM8SUxpbmtlZENlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgLyR7cHJvcHMubW9kZWx9LyR7cHJvcHMuaWR9YDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YSBocmVmPXsgdXJsIH0+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5uYW1lIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICApXG59XG5MaW5rZWRDZWxsLmRpc3BsYXlOYW1lID0gXCJMaW5rZWRDZWxsXCJcblxuaW50ZXJmYWNlIElOYW1lQW5kVHlwZVByb3BzIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZyB8IG51bGw7XG4gICAgd2luZVR5cGU6IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBOYW1lQW5kVHlwZUNlbGw6IFJlYWN0LkZDPElOYW1lQW5kVHlwZVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGlmIChwcm9wcy51cmwpIHtcbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGEgaHJlZj17IHByb3BzLnVybCB9PlxuICAgICAgICAgICAgICAgIHsgZ2V0TmFtZUFuZFR5cGUocHJvcHMubmFtZSwgcHJvcHMud2luZVR5cGUpIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cIndpbmVzXCJcbiAgICAgICAgICAgIG5hbWU9eyBnZXROYW1lQW5kVHlwZShwcm9wcy5uYW1lLCBwcm9wcy53aW5lVHlwZSkgfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuTmFtZUFuZFR5cGVDZWxsLmRpc3BsYXlOYW1lID0gXCJOYW1lQW5kVHlwZUNlbGxcIjtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y2VyQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cInByb2R1Y2Vyc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblByb2R1Y2VyQ2VsbC5kaXNwbGF5TmFtZSA9IFwiUHJvZHVjZXJDZWxsXCJcblxuZXhwb3J0IGNvbnN0IFJlZ2lvbkNlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmd9PiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJyZWdpb25zXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUmVnaW9uQ2VsbC5kaXNwbGF5TmFtZSA9IFwiUmVnaW9uQ2VsbFwiXG5cbmV4cG9ydCBjb25zdCBWaXRpQXJlYUNlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyIHwgbnVsbCwgbmFtZTogc3RyaW5nIHwgbnVsbH0+ID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKCFwcm9wcy5pZCB8fCAhcHJvcHMubmFtZSkge1xuICAgICAgICByZXR1cm4gPHRkIC8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwidml0aS1hcmVhc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblZpdGlBcmVhQ2VsbC5kaXNwbGF5TmFtZSA9IFwiVml0aUFyZWFDZWxsXCJcblxuZXhwb3J0IGNvbnN0IFdpbmVUeXBlQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cIndpbmUtdHlwZXNcIlxuICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5XaW5lVHlwZUNlbGwuZGlzcGxheU5hbWUgPSBcIldpbmVUeXBlQ2VsbFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vbGliL0xvZ2dlclwiO1xuaW1wb3J0IHsgdXNlQ29sb3JzU2VsZWN0IH0gZnJvbSBcIi4vQ29sb3JJbnB1dFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4vTWF0ZXJpYWxJY29uXCI7XG5pbXBvcnQgeyBTZWxlY3RJbnB1dCB9IGZyb20gXCIuL1NlbGVjdElucHV0XCI7XG5cbmV4cG9ydCBlbnVtIFNvcnRpbmdTdGF0ZSB7XG4gICAgTm90U29ydGVkLFxuICAgIEFzY2VuZGluZyxcbiAgICBEZXNjZW5kaW5nLFxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHZvaWQ7XG4gICAgc29ydGluZ1N0YXRlOiBTb3J0aW5nU3RhdGU7XG4gICAgaXNOdW1Db2w6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHM+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaXNOdW1Db2w6IGZhbHNlLFxuICAgIH07XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9eyAodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgXCJcIikgKyBgJHt0aGlzLnByb3BzLmlzTnVtQ29sID8gXCIgbnVtLWNvbFwiIDogXCJcIiB9YCB9PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJDb250ZW50KCkgfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSAoXG4gICAgICAgICAgICA8YSBocmVmPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5wcm9wcy5vbkNsaWNrIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmlzTnVtQ29sXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVySWNvbigpIH1cbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0IH1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckljb24oKSB9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJJY29uKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMuc29ydGluZ1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdTdGF0ZS5Bc2NlbmRpbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJhcnJvd19kcm9wX3VwXCIgLz47XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdTdGF0ZS5EZXNjZW5kaW5nOlxuICAgICAgICAgICAgICAgIHJldHVybiA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwiYXJyb3dfZHJvcF9kb3duXCIgLz47XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwiYXJyb3dfZHJvcF9kb3duXCIgY2xhc3NOYW1lPVwiaW52aXNpYmxlXCIgLz47XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmludGVyZmFjZSBJRmlsdGVyUHJvcHMge1xuICAgIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRmlsdGVySGVhZGVyOiBSZWFjdC5GQzxJRmlsdGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKSB9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwcm9wcy50ZXh0IH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgKTtcbn1cbkZpbHRlckhlYWRlci5kaXNwbGF5TmFtZSA9IFwiRmlsdGVySGVhZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RGaWx0ZXJIZWFkZXI6IFJlYWN0LkZDPElGaWx0ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBleHRyYUNob2ljZSA9IFwiQW55XCI7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihTZWxlY3RGaWx0ZXJIZWFkZXIubmFtZSk7XG5cbiAgICBjb25zdCBvbkNoYW5nZSA9IChzZWxlY3Rpb246IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSBleHRyYUNob2ljZSkge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShzZWxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBwcm9wcy50ZXh0ID09PSBcIlwiID8gZXh0cmFDaG9pY2UgOiBwcm9wcy50ZXh0O1xuXG4gICAgY29uc3QgW3NlbGVjdGlvbk9wdGlvbnMsIHNlbGVjdFJlZl0gPSB1c2VDb2xvcnNTZWxlY3QobG9nZ2VyLCBleHRyYUNob2ljZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8U2VsZWN0SW5wdXQgbmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgc2VsZWN0UmVmPXsgc2VsZWN0UmVmIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXsgc2VsZWN0aW9uT3B0aW9ucyB9XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXsgc2VsZWN0aW9uIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgKTtcbn1cblNlbGVjdEZpbHRlckhlYWRlci5kaXNwbGF5TmFtZSA9IFNlbGVjdEZpbHRlckhlYWRlci5uYW1lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9JbnB1dFwiO1xuaW1wb3J0IHsgU3BlY2lhbENoYXJzIH0gZnJvbSBcIi4vU3BlY2lhbENoYXJzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Gb2N1cz86ICgpID0+IHZvaWQ7XG4gICAgb25CbHVyPzogKCkgPT4gdm9pZDtcbiAgICBjbGFzc05hbWU6IHN0cmluZztcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbiAgICBpbnB1dFJlZj86IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG59XG5cbmV4cG9ydCBjb25zdCBUZXh0SW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbdGltZXN0YW1wLCBfXSA9IFJlYWN0LnVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGlucHV0UmVmID0gcHJvcHMuaW5wdXRSZWYgPz8gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcblxuICAgIGNvbnN0IG9uU3BlY2lhbENoYXJDbGljayA9IChjaGFyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaW5wdXRSZWYuY3VycmVudD8uc2VsZWN0aW9uU3RhcnQgPz8gTmFOO1xuICAgICAgICBwcm9wcy5vbkNoYW5nZShTcGVjaWFsQ2hhcnMuaW5zZXJ0Q2hhckF0KHByb3BzLnZhbHVlLCBjaGFyLCBwb3NpdGlvbikpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5wdXRSZWYuY3VycmVudC5zZXRTZWxlY3Rpb25SYW5nZShwb3NpdGlvbiArIDEsIHBvc2l0aW9uICsgMSksIDEwKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChub3cgLSB0aW1lc3RhbXAgPiAxMDApIHtcbiAgICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9wcy5vbkJsdXI/LigpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UodmFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkZvY3VzID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICAgICAgcHJvcHMub25Gb2N1cz8uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxJbnB1dCBpbnB1dFR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwcm9wcy52YWx1ZSB9XG4gICAgICAgICAgICAgICAgZW5hYmxlZD17IHByb3BzLmVuYWJsZWQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbCkgPT4gb25DaGFuZ2UodmFsKSB9XG4gICAgICAgICAgICAgICAgb25CbHVyPXsgb25CbHVyIH1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsgb25Gb2N1cyB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgcHJvcHMuY2xhc3NOYW1lIH1cbiAgICAgICAgICAgICAgICBzPXsgcHJvcHMucyB9IG09eyBwcm9wcy5tIH0gbD17IHByb3BzLmwgfVxuICAgICAgICAgICAgICAgIGlucHV0UmVmPXsgaW5wdXRSZWYgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTcGVjaWFsQ2hhcnNcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXsgW1wiaW5saW5lLWJsb2NrXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGMpID0+IG9uU3BlY2lhbENoYXJDbGljayhjKSB9XG4gICAgICAgICAgICAgICAgZGlzcGxheT17IGlzQWN0aXZlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5UZXh0SW5wdXQuZGlzcGxheU5hbWUgPSBcIlRleHRJbnB1dFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vbGliL0xvZ2dlclwiO1xuaW1wb3J0IHsgSVZpdGlBcmVhIH0gZnJvbSBcIi4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBnZXRWaXRpQXJlYXMsIHRvRGljdCB9IGZyb20gXCIuLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgYXV0b2NvbXBsZXRlIH0gZnJvbSBcIi4uL2xpYi93aWRnZXRzXCI7XG5pbXBvcnQgeyBJT25DaGFuZ2UgfSBmcm9tIFwiLi9JUHJvcHNcIjtcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gXCIuL1RleHRJbnB1dFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSU9uQ2hhbmdlIHtcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIHJlZ2lvblRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBWaXRpQXJlYUlucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHt2YWx1ZSwgcmVnaW9uVGV4dCwgb25DaGFuZ2V9KSA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihWaXRpQXJlYUlucHV0Lm5hbWUpO1xuICAgIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVml0aUFyZWFzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aXRpQXJlYXM6IElWaXRpQXJlYVtdID0gYXdhaXQgZ2V0Vml0aUFyZWFzKHtyZWdpb25OYW1lOiByZWdpb25UZXh0fSk7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlKGlucHV0UmVmLCB0b0RpY3Qodml0aUFyZWFzKSwgb25DaGFuZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihcIkZhaWxlZCB0byBnZXQgdml0aSBhcmVhIGF1dG9jb21wbGV0ZSBvcHRpb25zXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hWaXRpQXJlYXMoKTtcbiAgICB9LCBbaW5wdXRSZWYsIHJlZ2lvblRleHRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0SW5wdXQgbmFtZT1cIlZpdGkgQXJlYVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyBpbnB1dFJlZiB9XG4gICAgICAgICAgICBzPXsgOCB9IGw9eyA0IH1cbiAgICAgICAgICAgIHZhbHVlPXsgdmFsdWUgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblZpdGlBcmVhSW5wdXQuZGlzcGxheU5hbWUgPSBcIlZpdGlBcmVhSW5wdXRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElXaW5lIH0gZnJvbSBcIi4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBDb2xvckNlbGwsIE5hbWVBbmRUeXBlQ2VsbCwgTnVtQ2VsbCwgUHJvZHVjZXJDZWxsLCBSZWdpb25DZWxsLCBWaXRpQXJlYUNlbGwsIFllYXJDZWxsIH0gZnJvbSBcIi4vVGFibGVDZWxsc1wiO1xuaW1wb3J0IHsgRmlsdGVySGVhZGVyLCBTb3J0aW5nU3RhdGUsIFRhYmxlSGVhZGVyLCBTZWxlY3RGaWx0ZXJIZWFkZXIgfSBmcm9tIFwiLi9UYWJsZUhlYWRlclwiO1xuXG5lbnVtIFNvcnRpbmdWYWx1ZSB7XG4gICAgSW52ZW50b3J5LFxuICAgIENvbG9yLFxuICAgIE5hbWVBbmRUeXBlLFxuICAgIFByb2R1Y2VyLFxuICAgIFJlZ2lvbixcbiAgICBWaXRpQXJlYSxcbiAgICBWaW50YWdlLFxuICAgIFJhdGluZ1xufTtcblxuZXhwb3J0IGVudW0gQ29sdW1uVG9FeGNsdWRlIHtcbiAgICBQcm9kdWNlcixcbiAgICBSZWdpb24sXG4gICAgVml0aUFyZWEsXG59XG5cbnR5cGUgSVByb3BzID0ge1xuICAgIHdpbmVzOiBJV2luZVtdO1xuICAgIGZpbHRlclRleHRzPzogTWFwPGtleW9mIElXaW5lLCBzdHJpbmc+O1xuICAgIG9uRmlsdGVyQ2hhbmdlPzogKGNvbHVtbjoga2V5b2YgSVdpbmUsIHRleHQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBleGNsdWRlQ29sdW1uPzogQ29sdW1uVG9FeGNsdWRlO1xufSAmIFBhcnRpYWw8RGVmYXVsdFByb3BzPlxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICBhc2NlbmRpbmc6IGJvb2xlYW47XG4gICAgc29ydGluZzogU29ydGluZ1ZhbHVlO1xuICAgIGNvbG9yU2VsZWN0aW9uOiBzdHJpbmc7XG59XG5cbnR5cGUgRGVmYXVsdFByb3BzID0gUmVhZG9ubHk8dHlwZW9mIGRlZmF1bHRQcm9wcz5cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgIHdpbmVzUGVyUGFnZTogMjUwLFxufTtcblxuZXhwb3J0IGNsYXNzIFdpbmVzVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzICYgRGVmYXVsdFByb3BzLCBJU3RhdGU+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMgJiBEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYXNjZW5kaW5nOiB0cnVlLFxuICAgICAgICAgICAgc29ydGluZzogU29ydGluZ1ZhbHVlLk5hbWVBbmRUeXBlLFxuICAgICAgICAgICAgY29sb3JTZWxlY3Rpb246IFwiXCIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZmlsdGVySGVhZGVyID0gdGhpcy5wcm9wcy5maWx0ZXJUZXh0c1xuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT1cImZpbHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJpbnZlbnRvcnlcIikgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0RmlsdGVySGVhZGVyIHsgLi4udGhpcy5maWx0ZXJIZWFkZXJQcm9wcyhcImNvbG9yXCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJ3aW5lVHlwZVwiKSB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJIZWFkZXIgeyAuLi50aGlzLmZpbHRlckhlYWRlclByb3BzKFwicHJvZHVjZXJcIikgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVySGVhZGVyIHsgLi4udGhpcy5maWx0ZXJIZWFkZXJQcm9wcyhcInJlZ2lvblwiKSB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJIZWFkZXIgeyAuLi50aGlzLmZpbHRlckhlYWRlclByb3BzKFwidml0aUFyZWFcIikgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVySGVhZGVyIHsgLi4udGhpcy5maWx0ZXJIZWFkZXJQcm9wcyhcImxhc3RQdXJjaGFzZVZpbnRhZ2VcIikgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVySGVhZGVyIHsgLi4udGhpcy5maWx0ZXJIZWFkZXJQcm9wcyhcInJhdGluZ1wiKSB9IC8+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICBjb25zdCBleENvbCA9IHRoaXMucHJvcHMuZXhjbHVkZUNvbHVtbjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJyZXNwb25zaXZlIGhpZ2hsaWdodCBjb25kZW5zZWRcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9XCJoZWFkZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuSW52ZW50b3J5KX0gaXNOdW1Db2wgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludmVudG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB7Li4udGhpcy50YWJsZUhlYWRlclByb3BzKFNvcnRpbmdWYWx1ZS5Db2xvcil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyIHsuLi50aGlzLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLk5hbWVBbmRUeXBlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZSBhbmQgVHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhDb2wgPT09IENvbHVtblRvRXhjbHVkZS5Qcm9kdWNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IDxUYWJsZUhlYWRlciB7Li4udGhpcy50YWJsZUhlYWRlclByb3BzKFNvcnRpbmdWYWx1ZS5Qcm9kdWNlcil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhDb2wgPT09IENvbHVtblRvRXhjbHVkZS5SZWdpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUmVnaW9uKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhDb2wgPT09IENvbHVtblRvRXhjbHVkZS5WaXRpQXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IDxUYWJsZUhlYWRlciB7Li4udGhpcy50YWJsZUhlYWRlclByb3BzKFNvcnRpbmdWYWx1ZS5WaXRpQXJlYSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXRpY3VsdHVyYWwgQXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB7Li4udGhpcy50YWJsZUhlYWRlclByb3BzKFNvcnRpbmdWYWx1ZS5WaW50YWdlKX0gaXNOdW1Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmludGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB7Li4udGhpcy50YWJsZUhlYWRlclByb3BzKFNvcnRpbmdWYWx1ZS5SYXRpbmcpfSBpc051bUNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIHsgZmlsdGVySGVhZGVyIH1cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLndpbmVzRm9yUGFnZS5tYXAoKHdpbmUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9eyB3aW5lLmlkIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bUNlbGwgbnVtPXsgd2luZS5pbnZlbnRvcnkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhEZWNpbWFscz17IDAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yQ2VsbCBjb2xvcj17IHdpbmUuY29sb3IgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYW1lQW5kVHlwZUNlbGwgaWQ9eyB3aW5lLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IHdpbmUubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmVUeXBlPXsgd2luZS53aW5lVHlwZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGV4Q29sID09PSBDb2x1bW5Ub0V4Y2x1ZGUuUHJvZHVjZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgPFByb2R1Y2VyQ2VsbCBpZD17IHdpbmUucHJvZHVjZXJJZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsgd2luZS5wcm9kdWNlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGV4Q29sID09PSBDb2x1bW5Ub0V4Y2x1ZGUuUmVnaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IDxSZWdpb25DZWxsIGlkPXsgd2luZS5yZWdpb25JZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsgd2luZS5yZWdpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBleENvbCA9PT0gQ29sdW1uVG9FeGNsdWRlLlZpdGlBcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IDxWaXRpQXJlYUNlbGwgaWQ9eyB3aW5lLnZpdGlBcmVhSWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IHdpbmUudml0aUFyZWEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFllYXJDZWxsIHllYXI9eyB3aW5lLmxhc3RQdXJjaGFzZVZpbnRhZ2UgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1DZWxsIG1heERlY2ltYWxzPXsgMCB9IG51bT17IHdpbmUucmF0aW5nIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IHdpbmVzRm9yUGFnZSgpOiBJV2luZVtdIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAodGhpcy5wcm9wcy5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5wcm9wcy53aW5lc1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHNvcnRlZFdpbmVzID0gdGhpcy5zb3J0ZWRXaW5lcztcbiAgICAgICAgcmV0dXJuIHNvcnRlZFdpbmVzLnNsaWNlKHN0YXJ0LCAgTWF0aC5taW4oc29ydGVkV2luZXMubGVuZ3RoLFxuICAgICAgICAgICAgc3RhcnQgKyB0aGlzLnByb3BzLndpbmVzUGVyUGFnZSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IHNvcnRlZFdpbmVzKCkge1xuICAgICAgICBjb25zdCBhc2NlbmRpbmdNdWx0aXBsaWVyID0gdGhpcy5zdGF0ZS5hc2NlbmRpbmcgPyAxIDogLTE7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5zb3J0aW5nKSB7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5JbnZlbnRvcnk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICAodzEuaW52ZW50b3J5IC0gdzIuaW52ZW50b3J5KSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuQ29sb3I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICB3MS5jb2xvci5sb2NhbGVDb21wYXJlKHcyLmNvbG9yKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuTmFtZUFuZFR5cGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNvcnQgYnkgd2luZVR5cGUgdGhlbiBuYW1lXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpbmVUeXBlQ29tcGFyaXNvbiA9ICh3MS53aW5lVHlwZSA/PyBcIlwiKS5sb2NhbGVDb21wYXJlKHcyLndpbmVUeXBlID8/IFwiXCIpICogYXNjZW5kaW5nTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmVUeXBlQ29tcGFyaXNvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmFtZSBjb21wYXJpc29uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodzEubmFtZSAmJiB3Mi5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHcxLm5hbWUubG9jYWxlQ29tcGFyZSh3Mi5uYW1lKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3MS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodzIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtYXNjZW5kaW5nTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZVR5cGVDb21wYXJpc29uO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5Qcm9kdWNlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcy5zb3J0KCh3MSwgdzIpID0+XG4gICAgICAgICAgICAgICAgICAgIHcxLnByb2R1Y2VyLmxvY2FsZUNvbXBhcmUodzIucHJvZHVjZXIpICogYXNjZW5kaW5nTXVsdGlwbGllclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5SZWdpb246XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICB3MS5yZWdpb24ubG9jYWxlQ29tcGFyZSh3Mi5yZWdpb24pICogYXNjZW5kaW5nTXVsdGlwbGllclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5WaXRpQXJlYTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcy5zb3J0KCh3MSwgdzIpID0+XG4gICAgICAgICAgICAgICAgICAgICh3MS52aXRpQXJlYSB8fCBcIlwiKS5sb2NhbGVDb21wYXJlKHcyLnZpdGlBcmVhIHx8IFwiXCIpICogYXNjZW5kaW5nTXVsdGlwbGllclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5WaW50YWdlOlxuICAgICAgICAgICAgICAgIC8vIFNvcnQgTlYgZmlyc3RcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcy5zb3J0KCh3MSwgdzIpID0+XG4gICAgICAgICAgICAgICAgICAgICh3MS5sYXN0UHVyY2hhc2VWaW50YWdlID8/IDMwMDApIC0gKHcyLmxhc3RQdXJjaGFzZVZpbnRhZ2UgPz8gMzAwMCkgKiBhc2NlbmRpbmdNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLlJhdGluZzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcy5zb3J0KCh3MSwgdzIpID0+XG4gICAgICAgICAgICAgICAgICAgICh3MS5yYXRpbmcgPz8gMCkgLSAodzIucmF0aW5nID8/IDApICogYXNjZW5kaW5nTXVsdGlwbGllclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkhlYWRlckNsaWNrKGU6IFJlYWN0Lk1vdXNlRXZlbnQsIHNvcnRpbmdWYWw6IFNvcnRpbmdWYWx1ZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChzb3J0aW5nVmFsID09PSB0aGlzLnN0YXRlLnNvcnRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHthc2NlbmRpbmc6ICFwcmV2U3RhdGUuYXNjZW5kaW5nfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYXNjZW5kaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNvcnRpbmc6IHNvcnRpbmdWYWwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdGFibGVIZWFkZXJQcm9wcyhzb3J0aW5nVmFsOiBTb3J0aW5nVmFsdWUpOlxuICAgICAgICB7c29ydGluZ1N0YXRlOiBTb3J0aW5nU3RhdGUsIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB2b2lkfSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc29ydGluZyA9PT0gc29ydGluZ1ZhbCkge1xuICAgICAgICAgICAgY29uc3Qgc29ydGluZ1N0YXRlID0gdGhpcy5zdGF0ZS5hc2NlbmRpbmcgPyBTb3J0aW5nU3RhdGUuQXNjZW5kaW5nIDogU29ydGluZ1N0YXRlLkRlc2NlbmRpbmc7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNvcnRpbmdTdGF0ZSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoZSkgPT4gdGhpcy5vbkhlYWRlckNsaWNrKGUsIHNvcnRpbmdWYWwpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc29ydGluZ1N0YXRlOiBTb3J0aW5nU3RhdGUuTm90U29ydGVkLFxuICAgICAgICAgICAgb25DbGljazogKGUpID0+IHRoaXMub25IZWFkZXJDbGljayhlLCBzb3J0aW5nVmFsKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3RzIHByb3BzIGZvciBhIGZpbHRlciBoZWFkZXJcbiAgICBwcml2YXRlIGZpbHRlckhlYWRlclByb3BzKGNvbHVtbk5hbWU6IGtleW9mIElXaW5lKTpcbiAgICAgICAge29uQ2hhbmdlOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkLFxuICAgICAgICAgdGV4dDogc3RyaW5nfSB7XG5cbiAgICAgICAgLy8gVGhpcyBzaG91bGQgb25seSBiZSBjYWxsZWQgaWYgYm90aCBwcm9wcyBleGlzdFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb25DaGFuZ2U6IChmaWx0ZXJFeHByKSA9PiB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlIShjb2x1bW5OYW1lLCBmaWx0ZXJFeHByKSxcbiAgICAgICAgICAgIHRleHQ6IHRoaXMucHJvcHMuZmlsdGVyVGV4dHMhLmdldChjb2x1bW5OYW1lKSA/PyBcIlwiLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhbmNlbE9yQ29uZmlybUJ0bnMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25zXCI7XG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyaWRcIjtcbmltcG9ydCB7IFZpdGlBcmVhSW5wdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9WaXRpQXJlYUlucHV0XCI7XG5pbXBvcnQgeyBJVml0aUFyZWEsIElWaXRpQXJlYVN0YXRzIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGlzRWRpdGluZzogYm9vbGVhbjtcbiAgICB2aXRpQXJlYVRleHQ6IHN0cmluZztcbiAgICB2aXRpQXJlYTogSVZpdGlBcmVhO1xuICAgIG9uVml0aUFyZWFDaGFuZ2U6ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvbkNvbmZpcm1DbGljazogKCkgPT4gdm9pZDtcbiAgICBvbkNhbmNlbENsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG4vLyBUT0RPOiBzdGF0cyBjb21wb25lbnQ/XG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICBzdGF0cz86IElWaXRpQXJlYVN0YXRzO1xufVxuXG5leHBvcnQgY2xhc3MgVml0aUFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0YXRzOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMucHJvcHMuaXNFZGl0aW5nID8gdGhpcy5yZW5kZXJFZGl0KCkgOiB0aGlzLnJlbmRlclZpZXcoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgeyBjb250ZW50IH1cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyVmlldygpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29sIHM9eyAxMiB9PlxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9sZFwiPnsgdGhpcy5wcm9wcy52aXRpQXJlYS5uYW1lIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICB7LyogVE9ETzogU3RhdHMgaGVyZSAqL31cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyRWRpdCgpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPENvbCBzPXsgMTAgfT5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJvbGRcIj5FZGl0IFZpdGljdWx0dXJhbCBBcmVhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Vml0aUFyZWFJbnB1dCB2YWx1ZT17IHRoaXMucHJvcHMudml0aUFyZWFUZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMucHJvcHMub25WaXRpQXJlYUNoYW5nZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENhbmNlbE9yQ29uZmlybUJ0bnNcbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtQ2xpY2s9eyB0aGlzLnByb3BzLm9uQ29uZmlybUNsaWNrIH1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWxDbGljaz17IHRoaXMucHJvcHMub25DYW5jZWxDbGljayB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmxvYXRpbmdCdG4gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25zXCI7XG5pbXBvcnQgeyBGaXhlZEFjdGlvbkxpc3QgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9GaXhlZEFjdGlvbkxpc3RcIjtcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWF0ZXJpYWxJY29uXCI7XG5pbXBvcnQgeyBQcmVsb2FkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QcmVsb2FkZXJcIjtcbmltcG9ydCB7IENvbHVtblRvRXhjbHVkZSwgV2luZXNUYWJsZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dpbmVzVGFibGVcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uLy4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElWaXRpQXJlYSwgSVZpdGlBcmVhU3RhdHMsIElXaW5lIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBnZXRWaXRpQXJlYSwgZ2V0Vml0aUFyZWFTdGF0cywgZ2V0V2luZXMsIHVwZGF0ZVZpdGlBcmVhIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0QXBpXCI7XG5pbXBvcnQgeyBWaXRpQXJlYSB9IGZyb20gXCIuL1ZpdGlBcmVhXCI7XG5pbXBvcnQgeyBWaXRpQXJlYVN0YXRzVGFibGUgfSBmcm9tIFwiLi9WaXRpQXJlYVN0YXRzVGFibGVcIjtcblxuaW50ZXJmYWNlIElWaXRpQXJlYVByb2ZpbGVTdGF0ZSB7XG4gICAgaXNFZGl0aW5nOiBib29sZWFuO1xuICAgIC8vIEVkaXRhYmxlXG4gICAgdml0aUFyZWFUZXh0OiBzdHJpbmc7XG4gICAgLy8gXCJQdXJlXCIgc3RhdGVcbiAgICB2aXRpQXJlYT86IElWaXRpQXJlYTtcbiAgICB3aW5lczogSVdpbmVbXTtcbiAgICBzdGF0cz86IElWaXRpQXJlYVN0YXRzO1xufVxuXG5pbnRlcmZhY2UgSVZpdGlBcmVhUHJvZmlsZVByb3BzIHtcbiAgICB2aXRpQXJlYUlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBWaXRpQXJlYVByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVZpdGlBcmVhUHJvZmlsZVByb3BzLCBJVml0aUFyZWFQcm9maWxlU3RhdGU+IHtcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElWaXRpQXJlYVByb2ZpbGVQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0VkaXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgdml0aUFyZWFUZXh0OiBcIlwiLFxuICAgICAgICAgICAgdml0aUFyZWE6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHdpbmVzOiBbXSxcbiAgICAgICAgICAgIHN0YXRzOiB1bmRlZmluZWQsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCB0cnVlKTtcbiAgICAgICAgdGhpcy5vblZpdGlBcmVhQ2hhbmdlID0gdGhpcy5vblZpdGlBcmVhQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25FZGl0Q2xpY2sgPSB0aGlzLm9uRWRpdENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Db25maXJtQ2xpY2sgPSB0aGlzLm9uQ29uZmlybUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DYW5jZWxDbGljayA9IHRoaXMub25DYW5jZWxDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5nZXRBbmRTZXRWaXRpQXJlYSgpLFxuICAgICAgICAgICAgdGhpcy5nZXRBbmRTZXRXaW5lcygpLFxuICAgICAgICAgICAgdGhpcy5nZXRBbmRTZXRTdGF0cygpLFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldEFuZFNldFZpdGlBcmVhKCkge1xuICAgICAgICBjb25zdCB2aXRpQXJlYSA9IGF3YWl0IGdldFZpdGlBcmVhKHtpZDogdGhpcy5wcm9wcy52aXRpQXJlYUlkfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZpdGlBcmVhLCB2aXRpQXJlYVRleHQ6IHZpdGlBcmVhLm5hbWV9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldEFuZFNldFdpbmVzKCkge1xuICAgICAgICBjb25zdCB3aW5lcyA9IGF3YWl0IGdldFdpbmVzKHt2aXRpQXJlYUlkOiB0aGlzLnByb3BzLnZpdGlBcmVhSWR9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2luZXN9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldEFuZFNldFN0YXRzKCkge1xuICAgICAgICBjb25zdCBzdGF0czogSVZpdGlBcmVhU3RhdHNbXSA9IGF3YWl0IGdldFZpdGlBcmVhU3RhdHMoe2lkOiB0aGlzLnByb3BzLnZpdGlBcmVhSWR9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHM6IHN0YXRzWzBdfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnZpdGlBcmVhKSB7XG4gICAgICAgICAgICByZXR1cm4gPFByZWxvYWRlciAvPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8Vml0aUFyZWEgaXNFZGl0aW5nPXsgdGhpcy5zdGF0ZS5pc0VkaXRpbmcgfVxuICAgICAgICAgICAgICAgICAgICB2aXRpQXJlYT17IHRoaXMuc3RhdGUudml0aUFyZWEgfVxuICAgICAgICAgICAgICAgICAgICB2aXRpQXJlYVRleHQ9eyB0aGlzLnN0YXRlLnZpdGlBcmVhVGV4dCB9XG4gICAgICAgICAgICAgICAgICAgIG9uVml0aUFyZWFDaGFuZ2U9eyB0aGlzLm9uVml0aUFyZWFDaGFuZ2UgfVxuICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm1DbGljaz17IHRoaXMub25Db25maXJtQ2xpY2sgfVxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbENsaWNrPXsgdGhpcy5vbkNhbmNlbENsaWNrIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgcz17IDYgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaXRpQXJlYVN0YXRzVGFibGUgc3RhdHM9eyB0aGlzLnN0YXRlLnN0YXRzIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgcz17IDYgfSBjbGFzc2VzPXsgW1wiZml4ZWQtYWN0aW9uLWRpdlwiXSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpeGVkQWN0aW9uTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdCdG4gb25DbGljaz17IHRoaXMub25FZGl0Q2xpY2sgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXsgW1wieWVsbG93LWJnXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJlZGl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nQnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GaXhlZEFjdGlvbkxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+V2luZXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFdpbmVzVGFibGUgd2luZXM9eyB0aGlzLnN0YXRlLndpbmVzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsdWRlQ29sdW1uPXsgQ29sdW1uVG9FeGNsdWRlLlZpdGlBcmVhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkVkaXRDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNFZGl0aW5nOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblZpdGlBcmVhQ2hhbmdlKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdml0aUFyZWFUZXh0OiB2YWwsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25Db25maXJtQ2xpY2soKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2aXRpQXJlYSA9IGF3YWl0IHVwZGF0ZVZpdGlBcmVhKHtcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy52aXRpQXJlYUlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUudml0aUFyZWFUZXh0LFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogdGhpcy5zdGF0ZS52aXRpQXJlYSEucmVnaW9uLFxuICAgICAgICAgICAgICAgIHJlZ2lvbklkOiB0aGlzLnN0YXRlLnZpdGlBcmVhIS5yZWdpb25JZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2aXRpQXJlYTogdml0aUFyZWEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dXYXJuaW5nKGBGYWlsZWQgdG8gc2F2ZSBjaGFuZ2VzIHRvIGRhdGFiYXNlOiAke2Vycn1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DYW5jZWxDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7XG4gICAgICAgICAgICBpc0VkaXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgdml0aUFyZWFUZXh0OiBzdGF0ZS52aXRpQXJlYSA/IHN0YXRlLnZpdGlBcmVhLm5hbWUgOiBcIlwiLFxuICAgICAgICB9KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IElWaXRpQXJlYVN0YXRzIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhYmxlXCI7XG5pbXBvcnQgeyBOdW1DZWxsIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGFibGVDZWxsc1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBzdGF0cz86IElWaXRpQXJlYVN0YXRzXG59XG5cbmV4cG9ydCBjb25zdCBWaXRpQXJlYVN0YXRzVGFibGU6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBpZiAoIXByb3BzLnN0YXRzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGFibGUgY29sdW1ucz17W119PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5Ub3RhbCBXaW5lczwvdGQ+XG4gICAgICAgICAgICAgICAgPE51bUNlbGwgbnVtPXsgcHJvcHMuc3RhdHMudG90YWxXaW5lcyB9IG1heERlY2ltYWxzPXsgMCB9IC8+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5BdmcgUHJpY2U8L3RkPlxuICAgICAgICAgICAgICAgIDxOdW1DZWxsIG51bT17IHByb3BzLnN0YXRzLmF2Z1ByaWNlIH0gbWF4RGVjaW1hbHM9eyAyIH0gLz5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPkF2ZyBSYXRpbmc8L3RkPlxuICAgICAgICAgICAgICAgIDxOdW1DZWxsIG51bT17IHByb3BzLnN0YXRzLmF2Z1JhdGluZyB9IG1heERlY2ltYWxzPXsgMSB9IC8+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L1RhYmxlPlxuICAgIClcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IG9uTG9hZCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuLi8uLi9saWIvd2lkZ2V0c1wiO1xuaW1wb3J0IHsgVml0aUFyZWFQcm9maWxlIH0gZnJvbSBcIi4vVml0aUFyZWFQcm9maWxlQXBwXCI7XG5cbmRlY2xhcmUgY29uc3QgaWQ6IG51bWJlcjtcblxub25Mb2FkKCgpID0+IHtcbiAgICBuYXZiYXIoKTtcbiAgICByZW5kZXIoY3JlYXRlRWxlbWVudChWaXRpQXJlYVByb2ZpbGUsIHt2aXRpQXJlYUlkOiBpZH0pLFxuICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpdGlfYXJlYV9wcm9maWxlLWNvbnRhaW5lclwiKSk7XG59KTtcbiIsImltcG9ydCB7IHJlYWRDb29raWUgfSBmcm9tIFwiLi9Db29raWVzXCI7XG5pbXBvcnQgeyBJRGljdCwgaXNFbXB0eSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IEhFQURFUlMgPSB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJYLUNTUkZUb2tlblwiOiByZWFkQ29va2llKFwiY3NyZnRva2VuXCIpIHx8IFwiXCIsXG59O1xuXG5leHBvcnQgdHlwZSBJUXVlcnlQYXJhbXMgPSBJRGljdDxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPjtcblxuZnVuY3Rpb24gZW5jb2RlUGFyYW1zKHBhcmFtczogSVF1ZXJ5UGFyYW1zKTogc3RyaW5nIHtcbiAgICBpZiAoaXNFbXB0eShwYXJhbXMpKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gXCI/XCIgKyBPYmplY3QuZW50cmllcyhwYXJhbXMpLm1hcCgoW2ssIHZdKSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoayl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHYpfWApLmpvaW4oXCImXCIpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVKc29uKG9iajogb2JqZWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVjb2RlSnNvbklmQW55KHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIGlmIChwYXJzZUZsb2F0KHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC1sZW5ndGhcIikgPz8gXCIwXCIpID4gMFxuICAgICAgICAmJiByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG59XG5cbnR5cGUgVmlub3RlY2FFcnJvciA9XG4gICAgfCB7XCJOb3RGb3VuZFwiOiBzdHJpbmd9XG4gICAgfCB7XCJJbnRlcm5hbFwiOiBzdHJpbmd9XG4gICAgfCB7XCJNaXNzaW5nQ29uc3RyYWludFwiOiBzdHJpbmd9XG4gICAgfCB7XCJCYWRSZXF1ZXN0XCI6IHN0cmluZ307XG5cbmZ1bmN0aW9uIGlzVmlub3RlY2FFcnJvcihvYmo6IG9iamVjdCk6IG9iaiBpcyBWaW5vdGVjYUVycm9yIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICByZXR1cm4ga2V5cy5sZW5ndGggPT09IDFcbiAgICAgICAgJiYgW1wiTm90Rm91bmRcIiwgXCJJbnRlcm5hbFwiLCBcIk1pc3NpbmdDb25zdHJhaW50XCIsIFwiQmFkUmVxdWVzdFwiXVxuICAgICAgICAgICAgLmZpbmQoKGkpID0+IGkgPT09IGtleXNbMF0pICE9PSB1bmRlZmluZWQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrUmVzcG9uc2UocmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID4gMzEwKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBkZWNvZGVKc29uSWZBbnkocmVzcG9uc2UpO1xuICAgICAgICBpZiAoaXNWaW5vdGVjYUVycm9yKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgJHtPYmplY3Qua2V5cyhtZXNzYWdlKVswXX06ICR7T2JqZWN0LnZhbHVlcyhtZXNzYWdlKVswXX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZUpzb25JZkFueShyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IEVycm9yKGF3YWl0IHJlc3BvbnNlLnRleHQoKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgR0VUIHJlcXVlc3QgdG8gdGhlIHVybCB3aXRoIHRoZSBvcHRpb25hbCBwYXJhbWV0ZXJzLCB0aGVuIHBhcnNlc1xuICogdGhlIEpTT04gcmVzcG9uc2UuXG4gKiBAcGFyYW0gdXJsIEEgVVJMIHRvIHJlcXVlc3RcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb3B0aW9uYWwgZGljdGlvbmFyeSBvZiBwYXJhbWV0ZXJzIHRvIHRoZWlyIHZhbHVlc1xuICogQHJldHVybnMgcGFyc2VkIEpTT04gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgUE9TVCByZXF1ZXN0IHRvIHRoZSB1cmwgd2l0aCB0aGUgb3B0aW9uYWwgcGFyYW1ldGVycyBjb250YWluaW5nXG4gKiB0aGUgYm9keSwgdGhlbiBwYXJzZXMgdGhlIEpTT04gcmVzcG9uc2UuXG4gKiBAcGFyYW0gdXJsIEEgVVJMIHRvIHJlcXVlc3RcbiAqIEBwYXJhbSBib2R5IEpTT04gb2JqZWN0IHRvIGVuY29kZSBhbmQgc2VuZCB0byB0aGUgc2VydmVyXG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9wdGlvbmFsIGRpY3Rpb25hcnkgb2YgcGFyYW1ldGVycyB0byB0aGVpciB2YWx1ZXNcbiAqIEByZXR1cm5zIHBhcnNlZCBKU09OIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0PFJlc3BvbnNlPih1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGVuY29kZUpzb24oYm9keSksXG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdEZvcm08UmVzcG9uc2U+KHVybDogc3RyaW5nLCBmb3JtOiBGb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGZvcm0sXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgUFVUIHJlcXVlc3QgdG8gdGhlIHVybCB3aXRoIHRoZSBvcHRpb25hbCBwYXJhbWV0ZXJzIGNvbnRhaW5pbmdcbiAqIHRoZSBib2R5LCB0aGVuIHBhcnNlcyB0aGUgSlNPTiByZXNwb25zZS5cbiAqIEBwYXJhbSB1cmwgQSBVUkwgdG8gcmVxdWVzdFxuICogQHBhcmFtIGJvZHkgSlNPTiBvYmplY3QgdG8gZW5jb2RlIGFuZCBzZW5kIHRvIHRoZSBzZXJ2ZXJcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb3B0aW9uYWwgZGljdGlvbmFyeSBvZiBwYXJhbWV0ZXJzIGFuZCB0aGVpciB2YWx1ZXNcbiAqIEByZXR1cm5zIHBhcnNlZCBKU09OIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXQ8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBib2R5OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZW5jb2RlSnNvbihib2R5KSxcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dEZvcm08UmVzcG9uc2U+KHVybDogc3RyaW5nLCBmb3JtOiBGb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZm9ybSxcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhdGNoPFJlc3BvbnNlPih1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcz0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBlbmNvZGVKc29uKGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVfPFJlc3BvbnNlPih1cmw6IHN0cmluZywgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG4iLCJjb25zdCBNSUxMSVNFQ09ORFNfSU5fREFZID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBDcmVhdGUgb3IgdXBkYXRlIGEgY29va2llXG4gKiBAcGFyYW0gbmFtZSBuYW1lL2tleSBvZiB0aGUgY29va2llXG4gKiBAcGFyYW0gdmFsdWUgdmFsdWUgdG8gc3RvcmVcbiAqIEBwYXJhbSBkYXlzIG51bWJlciBvZiBkYXlzIHRoZSBjb29raWUgaXMgdmFsaWQsIGRlZmF1bHRzIHRvIHRoZSBjdXJyZW50IHNlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGRheXM/OiBudW1iZXIpIHtcbiAgICBsZXQgZXhwaXJlcztcbiAgICBpZiAoZGF5cykge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiBNSUxMSVNFQ09ORFNfSU5fREFZKSk7XG4gICAgICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBleHBpcmVzID0gXCJcIjtcbiAgICB9XG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZENvb2tpZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcbiAgICBmb3IgKGxldCBjIG9mIGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikpIHtcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSBcIiBcIikge1xuICAgICAgICAgICAgYyA9IGMuc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyKG5hbWVFUS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29va2llKG5hbWU6IHN0cmluZykge1xuICAgIGNyZWF0ZUNvb2tpZShuYW1lLCBcIlwiLCAtMSk7XG59XG4iLCJpbXBvcnQgeyBwb3N0IH0gZnJvbSBcIi4vQXBpSGVscGVyXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCIuL3dpZGdldHNcIjtcblxuLyoqIFByb3ZpZGVzIGxvZ2dpbmcgZnVuY3Rpb25hbGl0eSBmb3IgY2xpZW50LXNpZGUgSmF2YVNjcmlwdCBlcnJvcnMuICovXG5lbnVtIExvZ0xldmVsIHtcbiAgICBDcml0aWNhbCA9IFwiY3JpdGljYWxcIixcbiAgICBFcnJvciA9IFwiZXJyb3JcIixcbiAgICBXYXJuaW5nID0gXCJ3YXJuaW5nXCIsXG4gICAgSW5mbyA9IFwiaW5mb1wiLFxuICAgIERlYnVnID0gXCJkZWJ1Z1wiLFxufVxuXG5pbnRlcmZhY2UgSUxvZ1Jlc3VsdCB7XG4gICAgc3VjY2VzczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcbiAgICAvKipcbiAgICAgKiBMb2dnaW5nIGNsYXNzIGZvciBjbGllbnQtc2lkZSBlcnJvcnMgdGhhdCB3aWxsIGJlIHBvc3RlZCB0byB0aGUgc2VydmVyXG4gICAgICogZm9yIGxvZ2dpbmcgdG8gdGhlIHNhbWUgZmlsZSBhcyBhbGwgb3RoZXIgdmlub3RlY2EgbG9ncy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtb2R1bGUgdGhlIG5hbWUgb2YgdGhlIG1vZHVsZSBmcm9tIHdoaWNoIHRoZSBsb2cgbWVzc2FnZXMgb3JpZ2luYXRlLlxuICAgICAqIEBwYXJhbSB0b0NvbnNvbGUgd2hldGhlciB0byBhbHNvIHByaW50IG1lc3NhZ2VzIHRvIHRoZSBjb25zb2xlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2R1bGU6IHN0cmluZywgcHJpdmF0ZSB0b0NvbnNvbGUgPSBmYWxzZSkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lYW50IGZvciBpcnJlY292ZXJhYmxlIG9yIHRydWx5IGV4Y2VwdGlvbmFsIGVycm9ycy4gQSB0b2FzdCB3aXRoIHRoZVxuICAgICAqIGxvZyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgbG9nIHdpbGwgYmUgc2VudCBiYWNrIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBmb3IgcG9zdGVyaXR5LlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dDcml0aWNhbChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBMb2dMZXZlbC5Dcml0aWNhbDtcbiAgICAgICAgdGhpcy50b2FzdChsZXZlbCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSB0b2FzdCB3aXRoIHRoZSBsb2cgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIGxvZyB3aWxsIGJlIHNlbnRcbiAgICAgKiBiYWNrIHRvIHRoZSBzZXJ2ZXIgZm9yIHBvc3Rlcml0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nRXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gTG9nTGV2ZWwuRXJyb3I7XG4gICAgICAgIHRoaXMudG9hc3QobGV2ZWwsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgdG9hc3Qgd2l0aCB0aGUgbG9nIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSBsb2cgd2lsbCBiZSBzZW50XG4gICAgICogYmFjayB0byB0aGUgc2VydmVyIGZvciBwb3N0ZXJpdHkuXG4gICAgICovXG4gICAgcHVibGljIGxvZ1dhcm5pbmcobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gTG9nTGV2ZWwuV2FybmluZztcbiAgICAgICAgdGhpcy50b2FzdChsZXZlbCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ0luZm8obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhMb2dMZXZlbC5JbmZvLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nRGVidWcobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhMb2dMZXZlbC5EZWJ1ZywgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2cobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMudG9Db25zb2xlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtsZXZlbC50b1VwcGVyQ2FzZSgpfSAke25ldyBEYXRlKCl9ICR7dGhpcy5tb2R1bGV9OiAke21lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IElMb2dSZXN1bHQgPSBhd2FpdCBwb3N0KFwiL3Jlc3QvbG9nc1wiLCB7XG4gICAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgaW5zdGFuY2VvZiBPYmplY3QgPyBcIlwiIDogbWVzc2FnZSxcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5tb2R1bGUsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3QoTG9nTGV2ZWwuRXJyb3IsIFwiRmFpbGVkIHRvIHNlbmQgY2xpZW50LXNpZGUgbG9ncyB0byBzZXJ2ZXIuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2FzdChsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0b2FzdChgJHtsZXZlbC50b1VwcGVyQ2FzZSgpfTogJHttZXNzYWdlfWApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGRlbGV0ZV8sIGdldCwgSVF1ZXJ5UGFyYW1zLCBwYXRjaCwgcG9zdCwgcG9zdEZvcm0sIHB1dCwgcHV0Rm9ybSB9IGZyb20gXCIuL0FwaUhlbHBlclwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7IElDb2xvciwgSUdyYXBlLCBJR3JhcGVGb3JtLCBJTW9zdENvbW1vblB1cmNoYXNlRGF0ZSwgSVByb2R1Y2VyLCBJUHJvZHVjZXJGb3JtLCBJUHVyY2hhc2UsXG4gICAgICAgICBJUHVyY2hhc2VDb3VudCwgSVB1cmNoYXNlRm9ybSwgSVJlZ2lvbiwgSVJlZ2lvbkZvcm0sIElTdG9yZSwgSVN0b3JlRm9ybSwgSVRvcEVudGl0eSxcbiAgICAgICAgIElUb3RhbExpdGVycywgSVZpdGlBcmVhLCBJVml0aUFyZWFGb3JtLCBJVml0aUFyZWFTdGF0cywgSVdpbmUsIElXaW5lQ291bnQsIElXaW5lRm9ybSxcbiAgICAgICAgIElXaW5lR3JhcGUsIElXaW5lR3JhcGVzRm9ybSwgSVdpbmVQYXRjaEZvcm0sIElXaW5lVHlwZSwgSVdpbmVUeXBlRm9ybSB9IGZyb20gXCIuL1Jlc3RcIjtcbmltcG9ydCB7IElSZXN0TW9kZWwgfSBmcm9tIFwiLi9SZXN0VHlwZXNcIjtcbmltcG9ydCB7IElEaWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGljdChtb2RlbHM6IElSZXN0TW9kZWxbXSk6IElEaWN0PHN0cmluZyB8IG51bGw+IHtcbiAgICBjb25zdCByZXN1bHQ6IElEaWN0PHN0cmluZyB8IG51bGw+ID0ge307XG4gICAgbW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICAgIHJlc3VsdFttb2RlbC5uYW1lXSA9IG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNsYXNzIEVtcHR5UmVzdWx0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgcHVibGljIHN0YXRpYyBpc0luc3RhbmNlKGVycjogRXJyb3IpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGVyci5uYW1lID09PSB0aGlzLk5BTUU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgTkFNRSA9IFwiRW1wdHlSZXN1bHRFcnJvclwiO1xuXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBFbXB0eVJlc3VsdEVycm9yLk5BTUU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub25OdWxscyhvYmo6IElEaWN0PHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCB1bmRlZmluZWQ+KTogSVF1ZXJ5UGFyYW1zIHtcbiAgICBjb25zdCBxOiBJUXVlcnlQYXJhbXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoaykgPT4gQm9vbGVhbihvYmpba10pKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIHFba10gPSBvYmpba10gYXMgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcbiAgICB9KTtcbiAgICByZXR1cm4gcTtcbn1cblxuZnVuY3Rpb24gc2luZ2xlRW50aXR5R2V0dGVyPFBhcmFtcywgUmVzcD4oXG4gICAgbGlzdEdldHRlcjogKHBhcmFtczogUGFyYW1zKSA9PiBQcm9taXNlPFJlc3BbXT4sXG4pOiAocGFyYW1zOiBQYXJhbXMpID0+IFByb21pc2U8UmVzcD4ge1xuICAgIC8vIFNoYXZlIG9mZiAnZ2V0J1xuICAgIGNvbnN0IG9iak5hbWUgPSBsaXN0R2V0dGVyLm5hbWUuc3Vic3RyKDMpO1xuICAgIHJldHVybiBhc3luYyAocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGxpc3RHZXR0ZXIocGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBSZWNlaXZlZCBtb3JlIHRoYW4gb25lICR7b2JqTmFtZX0gcmVzdWx0IHdoZW4gb25lIHdhcyBleHBlY3RlZGA7XG4gICAgICAgICAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKFwiUmVzdEFwaVwiKTtcbiAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgIHRocm93IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlPFJlcVBhcmFtcywgUmVzcCwgRm9ybT4oXG4gICAgbGlzdEdldHRlcjogKHBhcmFtczogUmVxUGFyYW1zKSA9PiBQcm9taXNlPFJlc3BbXT4sXG4gICAgY3JlYXRvcjogKGZvcm06IEZvcm0pID0+IFByb21pc2U8UmVzcD4sXG4pOiAocGFyYW1zOiBSZXFQYXJhbXMsIGZvcm06IEZvcm0pID0+IFByb21pc2U8UmVzcD4ge1xuICAgIGNvbnN0IG9iak5hbWUgPSBsaXN0R2V0dGVyLm5hbWUuc3Vic3RyKDMpO1xuICAgIHJldHVybiBhc3luYyAocGFyYW1zLCBmb3JtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBsaXN0R2V0dGVyKHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbmV3T2JqID0gYXdhaXQgY3JlYXRvcihmb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgUmVjZWl2ZWQgbW9yZSB0aGFuIG9uZSAke29iak5hbWV9IHJlc3VsdCB3aGVuIG9uZSB3YXMgZXhwZWN0ZWRgO1xuICAgICAgICBuZXcgTG9nZ2VyKFwiUmVzdEFwaVwiKS5sb2dFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgdGhyb3cgRXJyb3IobWVzc2FnZSk7XG4gICAgfTtcbn1cblxuLyogQ09MT1JTICovXG5pbnRlcmZhY2UgSUdldENvbG9yUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29sb3JzKHsgaWQsIG5hbWUgfTogSUdldENvbG9yUGFyYW1zKTogUHJvbWlzZTxJQ29sb3JbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lIH0pO1xuICAgIGNvbnN0IGNvbG9yczogSUNvbG9yW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9jb2xvcnNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgaWYgKGNvbG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVtcHR5UmVzdWx0RXJyb3IoXCJFbXB0eSByZXN1bHQgcmV0dXJuZWQgZm9yIGNvbG9yXCIpO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3JzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q29sb3IgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0Q29sb3JzKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcENvbG9ycygpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9jb2xvcnMvdG9wXCIpO1xufVxuXG4vKiBHUkFQRVMgKi9cbmludGVyZmFjZSBJR2V0R3JhcGVzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R3JhcGVzKHsgaWQsIG5hbWUgfTogSUdldEdyYXBlc1BhcmFtcyk6IFByb21pc2U8SUdyYXBlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSB9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvZ3JhcGVzXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0R3JhcGUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0R3JhcGVzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZUdyYXBlID0gZ2V0T3JDcmVhdGUoZ2V0R3JhcGVzLCBjcmVhdGVHcmFwZSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcmFwZShncmFwZTogSUdyYXBlRm9ybSk6IFByb21pc2U8SUdyYXBlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9ncmFwZXNcIiwgZ3JhcGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR3JhcGUoaWQ6IG51bWJlciwgZ3JhcGU6IElHcmFwZUZvcm0pOiBQcm9taXNlPElHcmFwZT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L2dyYXBlcy8ke2lkfWAsIGdyYXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcEdyYXBlcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9ncmFwZXMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBQUk9EVUNFUlMgKi9cbmludGVyZmFjZSBJR2V0UHJvZHVjZXJzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHJlZ2lvbklkPzogbnVtYmVyO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmUtbGVuZ3RoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjZXJzKHtpZCwgbmFtZSwgcmVnaW9uSWR9OiBJR2V0UHJvZHVjZXJzUGFyYW1zKTogUHJvbWlzZTxJUHJvZHVjZXJbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7aWQsIG5hbWUsIHJlZ2lvbl9pZDogcmVnaW9uSWR9KTtcbiAgICBjb25zdCBwcm9kdWNlcnM6IElQcm9kdWNlcltdID0gYXdhaXQgZ2V0KFwiL3Jlc3QvcHJvZHVjZXJzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiBwcm9kdWNlcnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWNlciA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRQcm9kdWNlcnMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlUHJvZHVjZXIgPSBnZXRPckNyZWF0ZShnZXRQcm9kdWNlcnMsIGNyZWF0ZVByb2R1Y2VyKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y2VyKHByb2R1Y2VyOiBJUHJvZHVjZXJGb3JtKTogUHJvbWlzZTxJUHJvZHVjZXI+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3Byb2R1Y2Vyc1wiLCBwcm9kdWNlcik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWNlcihwcm9kdWNlcjogSVByb2R1Y2VyKTogUHJvbWlzZTxJUHJvZHVjZXI+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9wcm9kdWNlcnMvJHtwcm9kdWNlci5pZH1gLCBwcm9kdWNlcik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWNlcihpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGRlbGV0ZV8oYC9yZXN0L3Byb2R1Y2Vycy8ke2lkfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wUHJvZHVjZXJzKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3Byb2R1Y2Vycy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFBVUkNIQVNFUyAqL1xuaW50ZXJmYWNlIElHZXRQdXJjaGFzZXNQYXJhbXMge1xuICAgIHdpbmVJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFB1cmNoYXNlcyh7d2luZUlkfTogSUdldFB1cmNoYXNlc1BhcmFtcyk6IFByb21pc2U8SVB1cmNoYXNlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyB3aW5lX2lkOiB3aW5lSWQgfSk7XG4gICAgY29uc3QgcHVyY2hhc2VzID0gYXdhaXQgZ2V0PElQdXJjaGFzZVtdPihcIi9yZXN0L3B1cmNoYXNlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gcHVyY2hhc2VzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2UocHVyY2hhc2U6IElQdXJjaGFzZUZvcm0pOiBQcm9taXNlPElQdXJjaGFzZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvcHVyY2hhc2VzXCIsIHB1cmNoYXNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVB1cmNoYXNlKGlkOiBudW1iZXIsIHB1cmNoYXNlOiBJUHVyY2hhc2VGb3JtKTogUHJvbWlzZTxJUHVyY2hhc2U+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9wdXJjaGFzZXMvJHtpZH1gLCBwdXJjaGFzZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQdXJjaGFzZShpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGRlbGV0ZV8oYC9yZXN0L3B1cmNoYXNlcy8ke2lkfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9zdENvbW1vblB1cmNoYXNlRGF0ZSgpOiBQcm9taXNlPElNb3N0Q29tbW9uUHVyY2hhc2VEYXRlPiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3B1cmNoYXNlcy9tb3N0LWNvbW1vbi1wdXJjaGFzZS1kYXRlXCIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG90YWxMaXRlcnMoKTogUHJvbWlzZTxJVG90YWxMaXRlcnM+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHVyY2hhc2VzL3RvdGFsLWxpdGVyc1wiKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFB1cmNoYXNlQ291bnQoKTogUHJvbWlzZTxJUHVyY2hhc2VDb3VudD4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wdXJjaGFzZXMvY291bnRcIik7XG59XG5cbi8qIFJFR0lPTlMgKi9cbmludGVyZmFjZSBJR2V0UmVnaW9uUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHByb2R1Y2VyTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlZ2lvbnMoeyBpZCwgbmFtZSwgcHJvZHVjZXJOYW1lIH06IElHZXRSZWdpb25QYXJhbXMpOiBQcm9taXNlPElSZWdpb25bXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lLCBwcm9kdWNlcl9uYW1lOiBwcm9kdWNlck5hbWUgfSk7XG4gICAgY29uc3QgcmVnaW9uczogSVJlZ2lvbltdID0gYXdhaXQgZ2V0KFwiL3Jlc3QvcmVnaW9uc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gcmVnaW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlZ2lvbiA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRSZWdpb25zKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVJlZ2lvbiA9IGdldE9yQ3JlYXRlKGdldFJlZ2lvbnMsIGNyZWF0ZVJlZ2lvbik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZWdpb24ocmVnaW9uOiBJUmVnaW9uRm9ybSk6IFByb21pc2U8SVJlZ2lvbj4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvcmVnaW9uc1wiLCByZWdpb24pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVnaW9uKHJlZ2lvbjogSVJlZ2lvbik6IFByb21pc2U8SVJlZ2lvbj4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3JlZ2lvbnMvJHtyZWdpb24uaWR9YCwgcmVnaW9uKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFJlZ2lvbnMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcmVnaW9ucy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFNUT1JFUyAqL1xuaW50ZXJmYWNlIElHZXRTdG9yZVBhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0b3Jlcyh7aWQsIG5hbWV9OiBJR2V0U3RvcmVQYXJhbXMpOiBQcm9taXNlPElTdG9yZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtpZCwgbmFtZX0pO1xuICAgIGNvbnN0IHN0b3JlczogSVN0b3JlW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9zdG9yZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHN0b3Jlcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0b3JlID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFN0b3Jlcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVTdG9yZSA9IGdldE9yQ3JlYXRlKGdldFN0b3JlcywgY3JlYXRlU3RvcmUpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3RvcmUoc3RvcmU6IElTdG9yZUZvcm0pOiBQcm9taXNlPElTdG9yZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvc3RvcmVzXCIsIHN0b3JlKTtcbn1cblxuLyogVklUSSBBUkVBUyAqL1xuaW50ZXJmYWNlIElHZXRWaXRpQXJlYXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcmVnaW9uTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZpdGlBcmVhcyhcbiAgICB7IGlkLCBuYW1lLCByZWdpb25OYW1lIH06IElHZXRWaXRpQXJlYXNQYXJhbXMsXG4pOiBQcm9taXNlPElWaXRpQXJlYVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUsIHJlZ2lvbl9uYW1lOiByZWdpb25OYW1lIH0pO1xuICAgIGNvbnN0IHZpdGlBcmVhczogSVZpdGlBcmVhW10gPSBhd2FpdCBnZXQoXCIvcmVzdC92aXRpLWFyZWFzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB2aXRpQXJlYXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRWaXRpQXJlYSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRWaXRpQXJlYXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlVml0aUFyZWEgPSBnZXRPckNyZWF0ZShnZXRWaXRpQXJlYXMsIGNyZWF0ZVZpdGlBcmVhKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVZpdGlBcmVhKHZpdGlBcmVhOiBJVml0aUFyZWFGb3JtKTogUHJvbWlzZTxJVml0aUFyZWE+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3ZpdGktYXJlYXNcIiwgdml0aUFyZWEpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVml0aUFyZWEodml0aUFyZWE6IElWaXRpQXJlYSk6IFByb21pc2U8SVZpdGlBcmVhPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3Qvdml0aS1hcmVhcy8ke3ZpdGlBcmVhLmlkfWAsIHZpdGlBcmVhKTtcbn1cblxuaW50ZXJmYWNlIElHZXRWaXRpQXJlYVN0YXRzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICByZWdpb25JZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZpdGlBcmVhU3RhdHMoXG4gICAgeyBpZCwgcmVnaW9uSWQgfTogSUdldFZpdGlBcmVhU3RhdHNQYXJhbXMsXG4pOiBQcm9taXNlPElWaXRpQXJlYVN0YXRzW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgcmVnaW9uX2lkOiByZWdpb25JZCB9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvdml0aS1hcmVhcy9zdGF0c1wiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFZpdGlBcmVhcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC92aXRpLWFyZWFzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogV0lORVMgKi9cbmludGVyZmFjZSBJR2V0V2luZXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIHByb2R1Y2VySWQ/OiBudW1iZXI7XG4gICAgcmVnaW9uSWQ/OiBudW1iZXI7XG4gICAgdml0aUFyZWFJZD86IG51bWJlcjtcbiAgICB3aW5lVHlwZUlkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZXMoXG4gICAgeyBpZCwgcHJvZHVjZXJJZCwgcmVnaW9uSWQsIHZpdGlBcmVhSWQsIHdpbmVUeXBlSWQgfTogSUdldFdpbmVzUGFyYW1zLFxuKTogUHJvbWlzZTxJV2luZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtcbiAgICAgICAgaWQsIHJlZ2lvbl9pZDogcmVnaW9uSWQsIHByb2R1Y2VyX2lkOiBwcm9kdWNlcklkLFxuICAgICAgICB2aXRpX2FyZWFfaWQ6IHZpdGlBcmVhSWQsIHdpbmVfdHlwZV9pZDogd2luZVR5cGVJZCxcbiAgICB9KTtcbiAgICBjb25zdCB3aW5lczogSVdpbmVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3dpbmVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB3aW5lcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFdpbmUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0V2luZXMpO1xuXG5jb25zdCBjcmVhdGVXaW5lSHR0cEZvcm0gPSAod2luZTogSVdpbmVGb3JtLCBmaWxlOiBGaWxlIHwgbnVsbCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtLmFwcGVuZChcIndpbmVfZm9ybVwiLCBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkod2luZSldLCB7dHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCJ9KSk7XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJpbWFnZVwiLCBmaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZSh3aW5lOiBJV2luZUZvcm0sIGZpbGU6IEZpbGUgfCBudWxsKTogUHJvbWlzZTxJV2luZT4ge1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVXaW5lSHR0cEZvcm0od2luZSwgZmlsZSk7XG4gICAgcmV0dXJuIHBvc3RGb3JtKFwiL3Jlc3Qvd2luZXNcIiwgZm9ybSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVXaW5lKGlkOiBudW1iZXIsIHdpbmU6IElXaW5lRm9ybSwgZmlsZTogRmlsZSB8IG51bGwpOiBQcm9taXNlPElXaW5lPiB7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVdpbmVIdHRwRm9ybSh3aW5lLCBmaWxlKTtcbiAgICByZXR1cm4gcHV0Rm9ybShgL3Jlc3Qvd2luZXMvJHtpZH1gLCBmb3JtKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnRVcGRhdGVXaW5lKGlkOiBudW1iZXIsIHdpbmU6IElXaW5lUGF0Y2hGb3JtKTogUHJvbWlzZTxJV2luZT4ge1xuICAgIHJldHVybiBwYXRjaChgL3Jlc3Qvd2luZXMvJHtpZH1gLCB3aW5lKTtcbn1cblxuaW50ZXJmYWNlIElTZWFyY2hXaW5lc1BhcmFtcyB7XG4gICAgY29sb3JMaWtlPzogc3RyaW5nO1xuICAgIHdpbmVUeXBlTGlrZT86IHN0cmluZztcbiAgICBwcm9kdWNlckxpa2U/OiBzdHJpbmc7XG4gICAgcmVnaW9uTGlrZT86IHN0cmluZztcbiAgICB2aXRpQXJlYUxpa2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hXaW5lcyhcbiAgICB7IGNvbG9yTGlrZSwgd2luZVR5cGVMaWtlLCBwcm9kdWNlckxpa2UsIHJlZ2lvbkxpa2UsIHZpdGlBcmVhTGlrZSB9OiBJU2VhcmNoV2luZXNQYXJhbXMsXG4pOiBQcm9taXNlPElXaW5lW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe1xuICAgICAgICBjb2xvcl9saWtlOiBjb2xvckxpa2UsIHdpbmVfdHlwZV9saWtlOiB3aW5lVHlwZUxpa2UsIHByb2R1Y2VyX2xpa2U6IHByb2R1Y2VyTGlrZSxcbiAgICAgICAgcmVnaW9uX2xpa2U6IHJlZ2lvbkxpa2UsIHZpdGlfYXJlYV9saWtlOiB2aXRpQXJlYUxpa2UsXG4gICAgfSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3dpbmVzL3NlYXJjaFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVWYXJpZXRpZXMoKTogUHJvbWlzZTxJV2luZUNvdW50PiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3dpbmVzL2NvdW50XCIpO1xufVxuXG4vKiBXSU5FIEdSQVBFUyAqL1xuaW50ZXJmYWNlIElHZXRXaW5lR3JhcGVzUGFyYW1zIHtcbiAgICB3aW5lSWQ/OiBudW1iZXI7XG4gICAgZ3JhcGVJZD86IG51bWJlcjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lLWxlbmd0aFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVHcmFwZXMoeyB3aW5lSWQsIGdyYXBlSWQgfTogSUdldFdpbmVHcmFwZXNQYXJhbXMpOiBQcm9taXNlPElXaW5lR3JhcGVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IHdpbmVfaWQ6IHdpbmVJZCwgZ3JhcGVfaWQ6IGdyYXBlSWQgfSk7XG4gICAgY29uc3Qgd2luZUdyYXBlczogSVdpbmVHcmFwZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvd2luZS1ncmFwZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHdpbmVHcmFwZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5lR3JhcGVzKHdpbmVHcmFwZXM6IElXaW5lR3JhcGVzRm9ybSk6IFByb21pc2U8SVdpbmVHcmFwZVtdPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC93aW5lLWdyYXBlc1wiLCB3aW5lR3JhcGVzKTtcbn1cblxuLyogV0lORSBUWVBFUyAqL1xuaW50ZXJmYWNlIElHZXRXaW5lVHlwZXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lVHlwZXMoeyBpZCwgbmFtZSB9OiBJR2V0V2luZVR5cGVzUGFyYW1zKTogUHJvbWlzZTxJV2luZVR5cGVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lIH0pO1xuICAgIGNvbnN0IHdpbmVUeXBlczogSVdpbmVUeXBlW10gPSBhd2FpdCBnZXQoXCIvcmVzdC93aW5lLXR5cGVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB3aW5lVHlwZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRXaW5lVHlwZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRXaW5lVHlwZXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlV2luZVR5cGUgPSBnZXRPckNyZWF0ZShnZXRXaW5lVHlwZXMsIGNyZWF0ZVdpbmVUeXBlKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmVUeXBlKHdpbmVUeXBlOiBJV2luZVR5cGVGb3JtKTogUHJvbWlzZTxJV2luZVR5cGU+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3dpbmUtdHlwZXNcIiwgd2luZVR5cGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2luZVR5cGUod2luZVR5cGU6IElXaW5lVHlwZSk6IFByb21pc2U8SVdpbmVUeXBlPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3Qvd2luZS10eXBlcy8ke3dpbmVUeXBlLmlkfWAsIHdpbmVUeXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFdpbmVUeXBlcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC93aW5lLXR5cGVzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cbiIsIi8qKiBCYXNpYyB0eXBlIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHJlc3BvbnNlIEpTT04gb2YgbWFueSBhc3luY2hyb25vdXMgcmVxdWVzdHMuICovXG5pbXBvcnQgeyBJUmVzdE1vZGVsIH0gZnJvbSBcIi4vUmVzdFR5cGVzXCI7XG5cbi8qKlxuICogS2V5LXZhbHVlIHN0b3JlIHdoZXJlIHRoZSBrZXkgbXVzdCBiZSBhIHN0cmluZywgYnV0IHRoZSB2YWx1ZSBpcyBvZiBhbnkgdHlwZVxuICogVC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRGljdDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgb2JqZWN0cyB0byBhIHNpbmdsZSBvYmplY3Qgb2YgbmFtZXMgdG8gbnVsbCBmb3IgdXNlIHdpdGggbWF0ZXJpYWxpemVcbiAqIGF1dG9jb21wbGV0ZS5cbiAqIEBwYXJhbSBvYmplY3RzIEFuIGFycmF5IG9mIFJFU1QgbW9kZWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXN0TW9kZWxzVG9OYW1lRGljdChvYmplY3RzOiBJUmVzdE1vZGVsW10pOiBJRGljdDxudWxsPiB7XG4gICAgY29uc3QgZGljdDogSURpY3Q8bnVsbD4gPSB7fTtcbiAgICBvYmplY3RzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgIGRpY3Rbb2JqLm5hbWVdID0gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gZGljdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiA4LWRpZ2l0IG51bWJlciBvZiBmb3JtYXQgJ3l5eXltbWRkJyB0byBhIERhdGUgb2JqZWN0LlxuICogQHBhcmFtIG51bSBhIGRhdGUgbnVtYmVyIG9mIGZvcm1hdCAneXl5eW1tZGQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBudW1Ub0RhdGUobnVtOiBudW1iZXIpOiBEYXRlIHtcbiAgICBjb25zdCBzdHJOdW0gPSBgJHtudW19YDtcbiAgICBpZiAoc3RyTnVtLmxlbmd0aCAhPT0gOCkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgZGF0ZSBudW1iZXIgJyR7c3RyTnVtfSdgKTtcbiAgICB9XG4gICAgY29uc3QgeWVhciA9IHN0ck51bS5zdWJzdHIoMCwgNCk7XG4gICAgY29uc3QgbW9udGggPSBzdHJOdW0uc3Vic3RyKDQsIDIpO1xuICAgIGNvbnN0IGRheSA9IHN0ck51bS5zdWJzdHIoNiwgMik7XG4gICAgLy8gSlMgbW9udGhzIGFyZSAwLWJhc2VkXG4gICAgcmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHllYXIsIDEwKSwgcGFyc2VJbnQobW9udGgsIDEwKSAtIDEsIHBhcnNlSW50KGRheSwgMTApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb051bShkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICogMTBfMDAwICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpICogMTAwICsgZGF0ZS5nZXREYXRlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBFTl9EQVNIOiBzdHJpbmcgPSBcIuKAk1wiO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgdmludGFnZSB5ZWFyLCB3aGljaCBpcyB0d28geWVhcnMgcHJpb3IgdG8gdGhlIGN1cnJlbnRcbiAqIHllYXIuIFRoaXMgZnVuY3Rpb24gZHVwbGljYXRlcyB0aGUgUHl0aG9uIGZ1bmN0aW9uXG4gKiB2aW5vdGVjYS51dGlscy5kZWZhdWx0X3ZpbnRhZ2VfeWVhclxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFZpbnRhZ2VZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGFuIG9iamVjdCBpcyBlbXB0eSwgaS5lLiBoYXMgbm8ga2V5cy5cbiAqIEBwYXJhbSBvYmogQW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iajogb2JqZWN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIFJldHVybnMgcyB3aXRoIHRoZSBmaXJzdCBsZXR0ZXIgY2FwaXRhbGl6ZWQuXG4gKiBAcGFyYW0gcyBBIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHMubGVuZ3RoID4gMCA/IHNbMF0udG9VcHBlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpIDogXCJcIjtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGRpc3BsYXkgbmFtZSB0byBhbiBodG1sIGlkXG4gKiBAcGFyYW0gbmFtZSBBIGNvbXBvbmVudCBkaXNwbGF5IG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hbWVUb0lkKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvKFxccykrL2csIFwiLVwiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBtYXhpbXVtIGVsZW1lbnQgYnkgb25lIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSB0eXBlIG9mIGVsZW1lbnRcbiAqIEBwYXJhbSBhcnIgQW4gYXJyYXkgb2Ygb2JqY2VjdHNcbiAqIEBwYXJhbSBhY2Nlc3NvciBBIGZ1bmN0aW9uIGZvciBhY2Nlc3NpbmcgYSBudW1iZXIgcHJvcGVydHkgb2YgdGhlIG9iamVjdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heEJ5PFQ+KGFycjogVFtdLCBhY2Nlc3NvcjogKGVsZW06IFQpID0+IG51bWJlcik6IFQgfCB1bmRlZmluZWQge1xuICAgIGxldCBtYXhFbGVtOiBUIHwgdW5kZWZpbmVkO1xuICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHk7XG4gICAgZm9yIChjb25zdCBlbGVtIG9mIGFycikge1xuICAgICAgICBjb25zdCB2YWwgPSBhY2Nlc3NvcihlbGVtKTtcbiAgICAgICAgaWYgKHZhbCA+IG1heFZhbCkge1xuICAgICAgICAgICAgbWF4RWxlbSA9IGVsZW07XG4gICAgICAgICAgICBtYXhWYWwgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1heEVsZW07XG59XG5cbi8qKlxuICogU3VtcyBhbiBhcnJheSBvZiBvYmplY3RzIGJ5IG9uZSBvZiB0aGUgb2JqZWN0cycgcHJvcGVydGllcy5cbiAqIEBwYXJhbSBhcnIgQW4gYXJyYXkgb2Ygb2JqZWN0c1xuICogQHBhcmFtIGFjY2Vzc29yIEEgZnVuY3Rpb24gZm9yIGFjY2Vzc2luZyBvbmUgb2YgdGhlIG9iamVjdHMnIHByb3BlcnRpZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1bUJ5PFQ+KGFycjogVFtdLCBhY2Nlc3NvcjogKGVsZW06IFQpID0+IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChjb25zdCBlbGVtIG9mIGFycikge1xuICAgICAgICBzdW0gKz0gYWNjZXNzb3IoZWxlbSk7XG4gICAgfVxuICAgIHJldHVybiBzdW07XG59XG5cbi8qKlxuICogQ29tcGFyZXMgdHdvIG9iamVjdHMgZm9yIGRlZXAgZXF1YWxpdHkuXG4gKiBAcGFyYW0gYSBBbiBvYmplY3RcbiAqIEBwYXJhbSBiIEFuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJlRXF1YWwoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGNvbnN0IGJLZXlzID0gT2JqZWN0LmtleXMoYik7XG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrIG9mIGFLZXlzKSB7XG4gICAgICAgIGlmIChhW2tdICE9PSBiW2tdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmludGVyZmFjZSBJUmFuZ2VBcmdzIHtcbiAgICBzdGFydD86IG51bWJlcjtcbiAgICBzdG9wPzogbnVtYmVyO1xuICAgIHN0ZXA/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYWJsZSByYW5nZSBvZiBudW1iZXJzb25DbGljay5cbiAqIEBwYXJhbSBzdGFydCBGaXJzdCBudW1iZXIgb2YgdGhlIHJhbmdlXG4gKiBAcGFyYW0gc3RvcCBFbmQgb2YgdGhlIHJhbmdlIChub24taW5jbHVzaXZlKVxuICogQHBhcmFtIHN0ZXAgSW5jcmVtZW50IG9mIHRoZSByYW5nZVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHJhbmdlKHsgc3RhcnQsIHN0b3AsIHN0ZXAgfTogSVJhbmdlQXJncyk6IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPiB7XG4gICAgc3RlcCA9IHN0ZXAgfHwgMTtcbiAgICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gICAgc3RvcCA9IHN0b3AgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgICAgIHlpZWxkIGk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW1hZ2VFeGlzdHMoaW1hZ2VVcmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW1hZ2VVcmwsIHttZXRob2Q6IFwiSEVBRFwifSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5vaztcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVBbmRUeXBlKG5hbWU6IHN0cmluZyB8IG51bGwsIHdpbmVUeXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHsobmFtZSA/IG5hbWUgKyBcIiBcIiA6IFwiXCIpfSR7d2luZVR5cGV9YDtcbn1cblxuLy8gVE9ETzogbW92ZSB0byB1c2UgUmVhY3Qgcm91dGVyIG9yIHNvbWV0aGluZyBzaW1pbGFyXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3QodXJsOiBzdHJpbmcpIHtcbiAgICBsb2NhdGlvbi5ocmVmID0gdXJsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2FkKGZ1bjogKCkgPT4gdm9pZCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bik7XG59XG4iLCJpbXBvcnQgeyBBdXRvY29tcGxldGUsIERyb3Bkb3duLCBTaWRlbmF2IH0gZnJvbSBcIm1hdGVyaWFsaXplLWNzc1wiO1xuaW1wb3J0IHsgSURpY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG50eXBlIE9uQ2hhbmdlID0gKGU6IHN0cmluZykgPT4gdm9pZDtcblxuLyoqIFNldHVwIGF1dG9jb21wbGV0aW9uIHdpdGggcHJvdmlkZWQgY29tcGxldGlvbiBvcHRpb25zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF1dG9jb21wbGV0ZShlbGVtOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uczogSURpY3Q8c3RyaW5nIHwgbnVsbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBPbkNoYW5nZSwgbWluTGVuZ3RoID0gMSwgbGltaXQgPSA1KSB7XG4gICAgaWYgKGVsZW0uY3VycmVudCkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICAgICAgbmV3IEF1dG9jb21wbGV0ZShlbGVtLmN1cnJlbnQsIHtcbiAgICAgICAgICAgIGRhdGE6IGNvbXBsZXRpb25zLFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICBtaW5MZW5ndGgsXG5cbiAgICAgICAgICAgIG9uQXV0b2NvbXBsZXRlOiBmdW5jdGlvbih0aGlzLCB0ZXh0KSB7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG9iamVjdC1saXRlcmFsLXNob3J0aGFuZFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHRleHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZpeCBvdmVybGFwcHRpbmcgdGV4dCBidWdcbiAgICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZU5hdmJhclRhYihpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuLyoqIEVuYWJsZXMgbmF2YmFyIG1lbnVzLiBTaG91bGQgYmUgY2FsbGVkIG9uIGV2ZXJ5IHBhZ2UuICovXG5leHBvcnQgZnVuY3Rpb24gbmF2YmFyKGFjdGl2ZU5hdlRhYklkPzogc3RyaW5nKSB7XG4gICAgaWYgKGFjdGl2ZU5hdlRhYklkKSB7XG4gICAgICAgIGFjdGl2YXRlTmF2YmFyVGFiKGFjdGl2ZU5hdlRhYklkKTtcbiAgICB9XG4gICAgY29uc3Qgc2lkZU5hdkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVuYXZcIik7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgbmV3IFNpZGVuYXYoc2lkZU5hdkVsZW0hKTtcbiAgICBjb25zdCBkcm9wZG93bkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLXRyaWdnZXJcIik7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgbmV3IERyb3Bkb3duKGRyb3Bkb3duRWxlbSEpO1xufVxuXG4vKiogU2ltcGxpZmllcyBkaXNwbGF5aW5nIG9mIHRvYXN0IG1lc3NhZ2VzIHRvIHVzZXIgKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2FzdChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBNLnRvYXN0KHtcbiAgICAgICAgY2xhc3NlczogXCJyZWQtYmdcIixcbiAgICAgICAgZGlzcGxheUxlbmd0aDogMTAwMDAsXG4gICAgICAgIGh0bWw6IG1lc3NhZ2UsXG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9