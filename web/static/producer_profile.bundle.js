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
/******/ 		"producer_profile": 0
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
/******/ 	deferredModules.push([3,"vendors"]);
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

/***/ "./front_end/producer_profile/Producer.tsx":
/*!*************************************************!*\
  !*** ./front_end/producer_profile/Producer.tsx ***!
  \*************************************************/
/*! exports provided: Producer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producer", function() { return Producer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_ProducerInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ProducerInput */ "./components/ProducerInput.tsx");
/* harmony import */ var _components_RegionInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/RegionInput */ "./components/RegionInput.tsx");





class Producer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
        };
        this.onRegionTextChange = this.onRegionTextChange.bind(this);
    }
    render() {
        const content = this.props.isEditing ? this.renderEdit() : this.renderView();
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null, content));
    }
    renderView() {
        let regionInfo;
        if (this.props.region) {
            regionInfo = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", { className: "light" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: `/regions/${this.props.region.id}/`, className: "text-link" }, this.props.region.name)));
        }
        else {
            regionInfo = null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], { s: 12 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "bold" }, this.props.producer.name),
            regionInfo));
    }
    renderEdit() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], { s: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "bold" }, `Edit Producer ${this.props.producer.name}`),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { autoComplete: "off" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProducerInput__WEBPACK_IMPORTED_MODULE_3__["ProducerInput"], { value: this.props.producerText, onChange: this.props.onProducerChange }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RegionInput__WEBPACK_IMPORTED_MODULE_4__["RegionInput"], { value: this.props.regionText, onChange: this.onRegionTextChange }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["CancelOrConfirmBtns"], { onConfirmClick: this.props.onConfirmClick, onCancelClick: this.props.onCancelClick })));
    }
    onRegionTextChange(val) {
        this.props.onRegionChange(val);
    }
}


/***/ }),

/***/ "./front_end/producer_profile/ProducerProfileApp.tsx":
/*!***********************************************************!*\
  !*** ./front_end/producer_profile/ProducerProfileApp.tsx ***!
  \***********************************************************/
/*! exports provided: ProducerProfileTextInput, ProducerProfileApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProducerProfileTextInput", function() { return ProducerProfileTextInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProducerProfileApp", function() { return ProducerProfileApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_FixedActionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FixedActionList */ "./components/FixedActionList.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MaterialIcon */ "./components/MaterialIcon.tsx");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Modal */ "./components/Modal.tsx");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Preloader */ "./components/Preloader.tsx");
/* harmony import */ var _components_WinesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/WinesTable */ "./components/WinesTable.tsx");
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _Producer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Producer */ "./front_end/producer_profile/Producer.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












var ProducerProfileTextInput;
(function (ProducerProfileTextInput) {
    ProducerProfileTextInput[ProducerProfileTextInput["Producer"] = 0] = "Producer";
    ProducerProfileTextInput[ProducerProfileTextInput["Region"] = 1] = "Region";
})(ProducerProfileTextInput || (ProducerProfileTextInput = {}));
;
class ProducerProfileApp extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            showDeleteModal: false,
            producerText: "",
            regionText: "",
            producer: undefined,
            region: undefined,
            wines: [],
        };
        this.logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_8__["default"](this.constructor.name, false);
        this.onEditClick = this.onEditClick.bind(this);
        this.onProducerChange = this.onProducerChange.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onShowDeleteModalClick = this.onShowDeleteModalClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            this.getCurrentProducerData();
            const wines = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["getWines"])({ producerId: this.props.producerId });
            this.setState({ wines: wines });
        });
    }
    render() {
        if (!this.state.producer) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_6__["Preloader"], null);
        }
        const modal = this.state.showDeleteModal
            ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_5__["DeleteModal"], { item: "producer", onNoClick: () => this.setState({ showDeleteModal: false }), onYesClick: this.onDeleteClick }) : null;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Producer__WEBPACK_IMPORTED_MODULE_11__["Producer"], { isEditing: this.state.isEditing, producer: this.state.producer, producerText: this.state.producerText, onProducerChange: this.onProducerChange, region: this.state.region, regionText: this.state.regionText, onRegionChange: this.onRegionChange, onConfirmClick: this.onConfirmClick, onCancelClick: this.onCancelClick }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12, l: 9 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Wines")),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12, l: 3, classes: ["fixed-action-div"] },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FixedActionList__WEBPACK_IMPORTED_MODULE_2__["FixedActionList"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { onClick: this.onEditClick, classes: ["yellow-bg"] },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__["MaterialIcon"], { iconName: "edit" })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { onClick: this.onShowDeleteModalClick, classes: ["red-bg"] },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_4__["MaterialIcon"], { iconName: "delete" })))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Col"], { s: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WinesTable__WEBPACK_IMPORTED_MODULE_7__["WinesTable"], { wines: this.state.wines, excludeColumn: _components_WinesTable__WEBPACK_IMPORTED_MODULE_7__["ColumnToExclude"].Producer }))),
            modal));
    }
    onEditClick() {
        this.setState({ isEditing: true });
    }
    /**
     * Gets the current state of the producer and its region on the server side
     * and updates state.
     */
    getCurrentProducerData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const producer = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["getProducer"])({ id: this.props.producerId });
                this.setState({
                    producer: producer,
                    producerText: producer.name,
                });
                const region = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["getRegion"])({ id: producer.regionId });
                this.setState({
                    region,
                    regionText: region.name
                });
            }
            catch (_a) {
                this.logger.logWarning("Error getting producer data");
            }
        });
    }
    onProducerChange(val) {
        this.setState({ producerText: val });
    }
    onRegionChange(text) {
        this.setState({ regionText: text });
    }
    onConfirmClick() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [regionChanged, regionId] = yield this.handleRegionChanges();
                if (this.state.producer
                    && (this.state.producerText !== this.state.producer.name || regionChanged)) {
                    this.updateProducer(regionId === -1 ? null : regionId);
                }
            }
            catch (err) {
                this.logger.logWarning(`Failed to save changes to the database: ${err}`);
            }
        });
    }
    handleRegionChanges() {
        return __awaiter(this, void 0, void 0, function* () {
            if ((this.state.regionText && !this.state.region)
                || (this.state.region && this.state.regionText !== this.state.region.name)) {
                // Try Get
                try {
                    const region = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["getRegion"])({ name: this.state.regionText });
                    this.setState({
                        region,
                        regionText: region.name,
                    });
                    return [true, region.id];
                }
                catch (err) {
                    if (_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["EmptyResultError"].isInstance(err)) {
                        // Create
                        const region = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["createRegion"])({ name: this.state.regionText });
                        this.setState({
                            region,
                            regionText: region.name,
                        });
                        return [true, region.id];
                    }
                    return Promise.reject("Unknown error");
                }
            }
            if (this.state.region) {
                return [false, this.state.region.id];
            }
            return [false, -1];
        });
    }
    updateProducer(regionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const producer = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["updateProducer"])({
                id: this.state.producer.id,
                name: this.state.producerText,
                regionId: regionId,
            });
            this.setState({
                producer: producer,
                producerText: producer.name,
                isEditing: false,
            });
        });
    }
    onCancelClick() {
        this.setState((state) => ({
            isEditing: false,
            producerText: state.producer ? state.producer.name : "",
            regionText: state.region ? state.region.name : "",
        }));
    }
    onShowDeleteModalClick() {
        this.setState({ showDeleteModal: true });
    }
    onDeleteClick() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_9__["deleteProducer"])(this.props.producerId);
                // Redirect home
                Object(_lib_utils__WEBPACK_IMPORTED_MODULE_10__["redirect"])("/");
            }
            catch (ex) {
                this.logger.logWarning(`Failed to delete producer with id ${this.props.producerId}`
                    + ` with exception: ${ex.body}`);
            }
        });
    }
}


/***/ }),

/***/ "./front_end/producer_profile/producer_profile.ts":
/*!********************************************************!*\
  !*** ./front_end/producer_profile/producer_profile.ts ***!
  \********************************************************/
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
/* harmony import */ var _ProducerProfileApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProducerProfileApp */ "./front_end/producer_profile/ProducerProfileApp.tsx");





Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["onLoad"])(() => {
    Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_3__["navbar"])();
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ProducerProfileApp__WEBPACK_IMPORTED_MODULE_4__["ProducerProfileApp"], { producerId: id }), document.getElementById("producer_profile-container"));
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

/***/ 3:
/*!**************************************************************!*\
  !*** multi ./front_end/producer_profile/producer_profile.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carter/git/vinoteca/vinoteca/front_end/producer_profile/producer_profile.ts */"./front_end/producer_profile/producer_profile.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25zLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbG9ySW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRml4ZWRBY3Rpb25MaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWF0ZXJpYWxJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByZWxvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWNlcklucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlZ2lvbklucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlbGVjdElucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NwZWNpYWxDaGFyQnRuLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NwZWNpYWxDaGFycy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZUNlbGxzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYmxlSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RleHRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XaW5lc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvcHJvZHVjZXJfcHJvZmlsZS9Qcm9kdWNlci50c3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRfZW5kL3Byb2R1Y2VyX3Byb2ZpbGUvUHJvZHVjZXJQcm9maWxlQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvcHJvZHVjZXJfcHJvZmlsZS9wcm9kdWNlcl9wcm9maWxlLnRzIiwid2VicGFjazovLy8uL2xpYi9BcGlIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nvb2tpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9saWIvUmVzdEFwaS50cyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3dpZGdldHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNB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O0lBQ2hELElBQUksd0RBQVEsQ0FBQyxZQUFhLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsc0RBQXNEO0FBQy9DLFNBQVMsS0FBSyxDQUFDLE9BQWU7SUFDakMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNKLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLElBQUksRUFBRSxPQUFPO0tBQ2hCLENBQUMsQ0FBQztBQUNQLENBQUMiLCJmaWxlIjoicHJvZHVjZXJfcHJvZmlsZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicHJvZHVjZXJfcHJvZmlsZVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFszLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSUNoaWxkcmVuUHJvcCwgSUNsYXNzZXNQcm9wIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBDb2wgfSBmcm9tIFwiLi9HcmlkXCI7XG5pbXBvcnQgeyBNYXRlcmlhbEljb24gfSBmcm9tIFwiLi9NYXRlcmlhbEljb25cIjtcblxuaW50ZXJmYWNlIElGbG9hdGluZ0J0blByb3BzIGV4dGVuZHMgSUNoaWxkcmVuUHJvcCwgSUNsYXNzZXNQcm9wIHtcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIG9uTW91c2VEb3duPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbn1cblxuZnVuY3Rpb24gY29tYmluZUNsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10gfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuICAgIHJldHVybiAoY2xhc3NlcyB8fCBbXSkuam9pbihcIiBcIik7XG59XG5cbmV4cG9ydCBjb25zdCBGbG9hdGluZ0J0bjogUmVhY3QuRkM8SUZsb2F0aW5nQnRuUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbWJpbmVDbGFzc2VzKHByb3BzLmNsYXNzZXMpO1xuICAgIGNvbnN0IG1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xuICAgICAgICBpZiAocHJvcHMub25Nb3VzZURvd24pIHtcbiAgICAgICAgICAgIHByb3BzLm9uTW91c2VEb3duKGUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb3BzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9eyBgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0bi1mbG9hdGluZyAke2NsYXNzZXN9YCB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgb25DbGljayB9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17IG1vdXNlRG93biB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L2E+XG4gICAgKTtcbn07XG5GbG9hdGluZ0J0bi5kaXNwbGF5TmFtZSA9IFwiRmxvYXRpbmdCdG5cIjtcbkZsb2F0aW5nQnRuLmRlZmF1bHRQcm9wcyA9IHsgb25Nb3VzZURvd246IChfKSA9PiB1bmRlZmluZWQgfTtcblxuaW50ZXJmYWNlIElCdG5Qcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB7XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEJ0bjogUmVhY3QuRkM8SUJ0blByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21iaW5lQ2xhc3Nlcyhwcm9wcy5jbGFzc2VzKTtcbiAgICBjb25zdCBvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcHJvcHMub25DbGljaygpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsgYHJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biAke2NsYXNzZXN9YCB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgb25DbGljayB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuQnRuLmRpc3BsYXlOYW1lID0gXCJCdG5cIjtcblxuaW50ZXJmYWNlIElDYW5jZWxPckNvbmZpcm1Qcm9wcyB7XG4gICAgb25Db25maXJtQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgb25DYW5jZWxDbGljazogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENhbmNlbE9yQ29uZmlybUJ0bnM6IFJlYWN0LkZDPElDYW5jZWxPckNvbmZpcm1Qcm9wcz4gPVxuICAgIChwcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbCBzPXsgMTIgfT5cbiAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcImdyZWVuLWJnXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25Db25maXJtQ2xpY2sgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENvbmZpcm1cbiAgICAgICAgICAgICAgICA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwic2VuZFwiIGNsYXNzTmFtZT1cInJpZ2h0XCIgLz5cbiAgICAgICAgICAgIDwvQnRuPlxuICAgICAgICAgICAgPEJ0biBjbGFzc2VzPXsgW1wicmVkLWJnXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25DYW5jZWxDbGljayB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgPC9Db2w+XG4gICAgKTtcbn1cbkNhbmNlbE9yQ29uZmlybUJ0bnMuZGlzcGxheU5hbWUgPSBcIkNhbmNlbE9yQ29uZmlybUJ0bnNcIjtcbiIsImltcG9ydCB7IEZvcm1TZWxlY3QgfSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyBJQ29sb3IgfSBmcm9tIFwiLi4vbGliL1Jlc3RcIjtcbmltcG9ydCB7IGdldENvbG9ycyB9IGZyb20gXCIuLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgSU9uQ2hhbmdlIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBTZWxlY3RJbnB1dCB9IGZyb20gXCIuL1NlbGVjdElucHV0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJT25DaGFuZ2Uge1xuICAgIHNlbGVjdGlvbjogc3RyaW5nO1xuICAgIGV4dHJhQ2hvaWNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQ29sb3JzU2VsZWN0ID0gKGxvZ2dlcjogTG9nZ2VyLCBleHRyYUNob2ljZT86IHN0cmluZyk6IFtzdHJpbmdbXSwgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MU2VsZWN0RWxlbWVudD5dID0+IHtcbiAgICBjb25zdCBbc2VsZWN0aW9uT3B0aW9ucywgc2V0U2VsZWN0aW9uT3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IHNlbGVjdFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTFNlbGVjdEVsZW1lbnQ+O1xuXG4gICAgY29uc3QgY29uY2F0SWZOb3ROdWxsPSAob3B0aW9uczogc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgIGlmIChleHRyYUNob2ljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtleHRyYUNob2ljZV0uY29uY2F0KG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29sb3JzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvcnM6IElDb2xvcltdID0gYXdhaXQgZ2V0Q29sb3JzKHt9KTtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3Rpb25PcHRpb25zKGNvbmNhdElmTm90TnVsbChjb2xvcnMubWFwKChjb2xvcikgPT4gY29sb3IubmFtZSkpKTtcbiAgICAgICAgICAgICAgICBuZXcgRm9ybVNlbGVjdChzZWxlY3RSZWYuY3VycmVudCEpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFwiRmFpbGVkIHRvIGdldCBjb2xvcnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaENvbG9ycygpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW3NlbGVjdGlvbk9wdGlvbnMsIHNlbGVjdFJlZl1cbn1cblxuZXhwb3J0IGNvbnN0IENvbG9ySW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKENvbG9ySW5wdXQubmFtZSk7XG5cbiAgICBjb25zdCBbc2VsZWN0aW9uT3B0aW9ucywgc2VsZWN0UmVmXSA9IHVzZUNvbG9yc1NlbGVjdChsb2dnZXIsIHByb3BzLmV4dHJhQ2hvaWNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWxlY3RJbnB1dCBuYW1lPVwiQ29sb3JcIlxuICAgICAgICAgICAgcz17IDQgfSBsPXsgMiB9XG4gICAgICAgICAgICBzZWxlY3RSZWY9eyBzZWxlY3RSZWYgfVxuICAgICAgICAgICAgb3B0aW9ucz17IHNlbGVjdGlvbk9wdGlvbnMgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyAodikgPT4gcHJvcHM/Lm9uQ2hhbmdlKHYpIH1cbiAgICAgICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5Db2xvcklucHV0LmRpc3BsYXlOYW1lID0gXCJDb2xvcklucHV0XCI7XG4iLCJpbXBvcnQgeyBGbG9hdGluZ0FjdGlvbkJ1dHRvbiB9IGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZsb2F0aW5nQnRuIH0gZnJvbSBcIi4vQnV0dG9uc1wiO1xuaW1wb3J0IHsgSUNoaWxkcmVuUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4vTWF0ZXJpYWxJY29uXCI7XG5cbmV4cG9ydCBjb25zdCBGaXhlZEFjdGlvbkxpc3Q6IFJlYWN0LkZDPElDaGlsZHJlblByb3A+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZGl2UmVmID0gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuZXcgRmxvYXRpbmdBY3Rpb25CdXR0b24oZGl2UmVmLmN1cnJlbnQsIHtkaXJlY3Rpb246IFwibGVmdFwifSk7XG4gICAgfSwgW2RpdlJlZl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtYWN0aW9uLWJ0biBob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICByZWY9eyBkaXZSZWYgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ0J0biBjbGFzc2VzPXsgW1wiYnRuLWxhcmdlXCIsIFwicmVkLWJnXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG51bGwgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cIm1lbnVcIiAvPlxuICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICAgICAgPHVsPiB7IFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaT57IGNoaWxkIH08L2xpPlxuICAgICAgICAgICAgICAgICkpIH0gPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuRml4ZWRBY3Rpb25MaXN0LmRpc3BsYXlOYW1lID0gXCJGaXhlZEFjdGlvbkxpc3RcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkUHJvcHMge1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xuICAgIHhsPzogbnVtYmVyO1xufVxuXG50eXBlIElBbGxHcmlkUHJvcHMgPSBJR3JpZFByb3BzICYgSUNsYXNzZXNQcm9wICYgSUNoaWxkcmVuUHJvcDtcblxuZnVuY3Rpb24gam9pbkNsYXNzZXMoZ3JpZDogc3RyaW5nW10sIGNsYXNzZXM/OiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgbGV0IGFsbENsYXNzZXM6IHN0cmluZ1tdID0gW107XG4gICAgZ3JpZC5mb3JFYWNoKChnYykgPT4ge1xuICAgICAgICBpZiAoZ2MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWxsQ2xhc3Nlcy5wdXNoKGdjKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGFsbENsYXNzZXMgPSBhbGxDbGFzc2VzLmNvbmNhdChjbGFzc2VzIHx8IFtdKTtcbiAgICByZXR1cm4gYWxsQ2xhc3Nlcy5qb2luKFwiIFwiKTtcbn1cblxuZnVuY3Rpb24gZ3JpZENsYXNzZXMocHJvcHM6IElBbGxHcmlkUHJvcHMpOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgc0NsYXNzID0gcHJvcHMucyA/IGBzJHtwcm9wcy5zfWAgOiBcIlwiO1xuICAgIGNvbnN0IG1DbGFzcyA9IHByb3BzLm0gPyBgbSR7cHJvcHMubX1gIDogXCJcIjtcbiAgICBjb25zdCBsQ2xhc3MgPSBwcm9wcy5sID8gYGwke3Byb3BzLmx9YCA6IFwiXCI7XG4gICAgY29uc3QgeGxDbGFzcyA9IHByb3BzLnhsID8gYHhsJHtwcm9wcy54bH1gIDogXCJcIjtcbiAgICByZXR1cm4gW3NDbGFzcywgbUNsYXNzLCBsQ2xhc3MsIHhsQ2xhc3NdO1xufVxuXG5jb25zdCBHcmlkQ29tcG9uZW50RmFjdG9yeSA9IChjbGFzc05hbWU6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZyk6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0+IHtcbiAgICBjb25zdCBjb21wb25lbnQ6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0gKHByb3BzOiBJQWxsR3JpZFByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IG90aGVyQ2xhc3NlcyA9IGpvaW5DbGFzc2VzKGdyaWRDbGFzc2VzKHByb3BzKSwgcHJvcHMuY2xhc3Nlcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGAke2NsYXNzTmFtZX0gJHtvdGhlckNsYXNzZXN9YCB9PlxuICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbiAgICBjb21wb25lbnQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgY29uc3QgUm93OiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IEdyaWRDb21wb25lbnRGYWN0b3J5KFwicm93XCIsIFwiUm93XCIpO1xuXG5leHBvcnQgY29uc3QgQ29sOiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IEdyaWRDb21wb25lbnRGYWN0b3J5KFwiY29sXCIsIFwiQ29sXCIpO1xuXG5leHBvcnQgY29uc3QgSW5wdXRGaWVsZDogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcImNvbCBpbnB1dC1maWVsZFwiLCBcIklucHV0RmllbGRcIilcbiIsImltcG9ydCBNIGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG5hbWVUb0lkIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gXCIuL0dyaWRcIjtcblxudHlwZSBJSW5wdXRWYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbnB1dFByb3BzPFQgZXh0ZW5kcyBJSW5wdXRWYWx1ZT4ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB2YWx1ZTogVDtcbiAgICBlbmFibGVkOiBib29sZWFuO1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Gb2N1czogKCkgPT4gdm9pZDtcbiAgICBvbkJsdXI6ICgpID0+IHZvaWQ7XG4gICAgaW5wdXRSZWY/OiBSZWFjdC5SZWY8SFRNTElucHV0RWxlbWVudD47XG4gICAgaW5wdXRUeXBlPzogc3RyaW5nO1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgc3RlcD86IHN0cmluZztcbiAgICBtYXg/OiBudW1iZXI7XG4gICAgbWluPzogbnVtYmVyO1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgSW5wdXQ8VSBleHRlbmRzIElJbnB1dFZhbHVlPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJSW5wdXRQcm9wczxVPj4ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBvbkNoYW5nZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBvbkZvY3VzOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIG9uQmx1cjogKF86IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaWQgPSBuYW1lVG9JZCh0aGlzLnByb3BzLm5hbWUpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPElucHV0RmllbGQgcz17IHRoaXMucHJvcHMucyB9IG09eyB0aGlzLnByb3BzLm0gfSBsPXsgdGhpcy5wcm9wcy5sIH0+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXsgaWQgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmNsYXNzTmFtZSB9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17IHRoaXMucHJvcHMuaW5wdXRSZWYgfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPXsgdGhpcy5wcm9wcy5pbnB1dFR5cGUgfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ICF0aGlzLnByb3BzLmVuYWJsZWQgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHRoaXMucHJvcHMudmFsdWUgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiB0aGlzLm9uQ2hhbmdlKGUpIH1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsgdGhpcy5wcm9wcy5vbkJsdXIgfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsgdGhpcy5wcm9wcy5vbkZvY3VzIH1cbiAgICAgICAgICAgICAgICAgICAgc3RlcD17IHRoaXMucHJvcHMuc3RlcCB9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17IHRoaXMucHJvcHMubWluIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgdGhpcy5wcm9wcy5tYXggfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuYWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCIgfSBodG1sRm9yPXsgaWQgfT5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLm5hbWUgfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L0lucHV0RmllbGQ+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBNLnVwZGF0ZVRleHRGaWVsZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBNLnVwZGF0ZVRleHRGaWVsZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIGljb25OYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBNYXRlcmlhbEljb246IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgPGkgY2xhc3NOYW1lPXsgYG1hdGVyaWFsLWljb25zICR7cHJvcHMuY2xhc3NOYW1lfWAgfT5cbiAgICAgICAgICAgIHsgcHJvcHMuaWNvbk5hbWUgfVxuICAgICAgICA8L2k+XG4gICAgKTtcbn07XG5NYXRlcmlhbEljb24uZGlzcGxheU5hbWUgPSBcIk1hdGVyaWFsSWNvblwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE0gZnJvbSBcIm1hdGVyaWFsaXplLWNzc1wiO1xuaW1wb3J0IHsgQnRuIH0gZnJvbSBcIi4vQnV0dG9uc1wiO1xuaW1wb3J0IHsgSUNoaWxkcmVuUHJvcCB9IGZyb20gXCIuL0lQcm9wc1wiO1xuXG5pbnRlcmZhY2UgSU1vZGFsUHJvcHMgZXh0ZW5kcyBJQ2hpbGRyZW5Qcm9wIHtcbn1cblxuZXhwb3J0IGNvbnN0IE1vZGFsOiBSZWFjdC5GQzxJTW9kYWxQcm9wcz4gPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE0uTW9kYWwocmVmLmN1cnJlbnQpO1xuICAgICAgICBpbnN0YW5jZS5vcGVuKCk7XG4gICAgICAgIC8vIFJldHVybmluZyBmdW5jdGlvbiBmcm9tIHVzZUVmZmVjdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZVxuICAgICAgICAvLyBjb21wb25lbnQgaXMgdW5tb3VudGVkXG4gICAgICAgIHJldHVybiAoKSA9PiBpbnN0YW5jZT8uY2xvc2UoKVxuICAgIH0sIFtyZWZdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXsgcmVmIH0gY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuTW9kYWwuZGlzcGxheU5hbWUgPSBcIk1vZGFsXCI7XG5cbmV4cG9ydCBjb25zdCBNb2RhbENvbnRlbnQ6IFJlYWN0LkZDPElDaGlsZHJlblByb3A+ID0gKHtjaGlsZHJlbn0pID0+IChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvc2VjdGlvbj5cbilcbk1vZGFsQ29udGVudC5kaXNwbGF5TmFtZSA9IFwiTW9kYWxDb250ZW50XCI7XG5cbmV4cG9ydCBjb25zdCBNb2RhbEZvb3RlcjogUmVhY3QuRkM8SUNoaWxkcmVuUHJvcD4gPSAoe2NoaWxkcmVufSkgPT4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L3NlY3Rpb24+XG4pXG5Nb2RhbEZvb3Rlci5kaXNwbGF5TmFtZSA9IFwiTW9kYWxGb290ZXJcIjtcblxuaW50ZXJmYWNlIElEZWxldGVNb2RhbFByb3BzIHtcbiAgICBpdGVtOiBzdHJpbmc7XG4gICAgb25ZZXNDbGljazogKCkgPT4gdm9pZDtcbiAgICBvbk5vQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBEZWxldGVNb2RhbDogUmVhY3QuRkM8SURlbGV0ZU1vZGFsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsPlxuICAgICAgICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgICAgICAgICA8aDU+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHsgcHJvcHMuaXRlbSB9PzwvaDU+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyBhY3Rpb24gaXMgaXJyZXZlcnNpYmxlLjwvcD5cbiAgICAgICAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcIm1vZGFsLWFjdGlvblwiLCBcInJlZC1iZ1wiXSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5vblllc0NsaWNrIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFllcywgZGVsZXRlIHRoaXMgeyBwcm9wcy5pdGVtIH1cbiAgICAgICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgICAgICA8QnRuICBjbGFzc2VzPXsgW1wibW9kYWwtYWN0aW9uXCIsIFwibW9kYWwtY2xvc2VcIiwgXCJncmVlbi1iZ1wiXX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IHByb3BzLm9uTm9DbGljayB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICAgIDwvQnRuPlxuICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufVxuRGVsZXRlTW9kYWwuZGlzcGxheU5hbWUgPSBcIkRlbGV0ZU1vZGFsXCI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFByZWxvYWRlcjogUmVhY3QuRkM8e30+ID0gKF8pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV0ZXJtaW5hdGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblByZWxvYWRlci5kaXNwbGF5TmFtZSA9IFwiUHJlbG9hZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBQcmVsb2FkZXJDaXJjOiBSZWFjdC5GQzx7fT4gPSAoXykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZGVyLXdyYXBwZXIgYWN0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItbGF5ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImdhcC1wYXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuUHJlbG9hZGVyQ2lyYy5kaXNwbGF5TmFtZSA9IFwiUHJlbG9hZGVyQ2lyY1wiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vbGliL0xvZ2dlclwiO1xuaW1wb3J0IHsgSVByb2R1Y2VyIH0gZnJvbSBcIi4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBnZXRQcm9kdWNlcnMsIHRvRGljdCB9IGZyb20gXCIuLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgYXV0b2NvbXBsZXRlIH0gZnJvbSBcIi4uL2xpYi93aWRnZXRzXCI7XG5pbXBvcnQgeyBJT25DaGFuZ2UgfSBmcm9tIFwiLi9JUHJvcHNcIjtcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gXCIuL1RleHRJbnB1dFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSU9uQ2hhbmdlIHtcbiAgICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUHJvZHVjZXJJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9ICh7dmFsdWUsIG9uQ2hhbmdlfSkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoUHJvZHVjZXJJbnB1dC5uYW1lKTtcbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y2VycygpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjZXJzOiBJUHJvZHVjZXJbXSA9IGF3YWl0IGdldFByb2R1Y2Vycyh7fSk7XG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlKGlucHV0UmVmLCB0b0RpY3QocHJvZHVjZXJzKSwgb25DaGFuZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFwiRmFpbGVkIHRvIGdldCBwcm9kdWNlciBhdXRvY29tcGxldGUgb3B0aW9uc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoUHJvZHVjZXJzKCk7XG4gICAgfSwgW2lucHV0UmVmXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJQcm9kdWNlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgcz17IDYgfSBsPXsgMyB9XG4gICAgICAgICAgICBpbnB1dFJlZj17IGlucHV0UmVmIH1cbiAgICAgICAgICAgIHZhbHVlPXsgdmFsdWUgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZSB9XG4gICAgICAgIC8+XG4gICAgKVxufTtcblByb2R1Y2VySW5wdXQuZGlzcGxheU5hbWUgPSBcIlByb2R1Y2VySW5wdXRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElSZWdpb24gfSBmcm9tIFwiLi4vbGliL1Jlc3RcIjtcbmltcG9ydCB7IEVtcHR5UmVzdWx0RXJyb3IsIGdldFJlZ2lvbnMsIHRvRGljdCB9IGZyb20gXCIuLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgSURpY3QgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBhdXRvY29tcGxldGUgfSBmcm9tIFwiLi4vbGliL3dpZGdldHNcIjtcbmltcG9ydCB7IElPbkNoYW5nZSB9IGZyb20gXCIuL0lQcm9wc1wiO1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSBcIi4vVGV4dElucHV0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJT25DaGFuZ2Uge1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgcHJvZHVjZXJUZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUmVnaW9uSW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAoe3ZhbHVlLCBwcm9kdWNlclRleHQsIG9uQ2hhbmdlfSkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoUmVnaW9uSW5wdXQubmFtZSk7XG5cbiAgICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG5cbiAgICAvLyBHZXQgYXV0b2NvbXBsZXRlIG9wdGlvbnNcbiAgICBjb25zdCBbYXV0b2NvbXBsZXRlT3B0aW9ucywgc2V0QXV0b2NvbXBsZXRlT3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZTxJRGljdDxzdHJpbmcgfCBudWxsPj4oe30pO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQXV0b2NvbXBsZXRlT3B0aW9ucygpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnaW9uczogSVJlZ2lvbltdID0gYXdhaXQgZ2V0UmVnaW9ucyh7fSk7XG4gICAgICAgICAgICAgICAgc2V0QXV0b2NvbXBsZXRlT3B0aW9ucyh0b0RpY3QocmVnaW9ucykpO1xuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZShpbnB1dFJlZiwgYXV0b2NvbXBsZXRlT3B0aW9ucywgb25DaGFuZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFwiRmFpbGVkIHRvIGdldCByZWdpb24gYXV0b2NvbXBsZXRlIG9wdGlvbnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hBdXRvY29tcGxldGVPcHRpb25zKCk7XG4gICAgfSwgW2lucHV0UmVmLCBzZXRBdXRvY29tcGxldGVPcHRpb25zXSk7XG5cbiAgICBjb25zdCBbZW5hYmxlZCwgc2V0RW5hYmxlZF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICAgIC8vIFRyeSB0byBnZXQgcmVnaW9uIGZyb20gcHJvZHVjZXIgaW5wdXQuIElmIGZvdW5kLCBsb2NrIGFuZCBzZXQgdmFsdWVcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y2VyUmVnaW9uKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nSW5mbyhcIlVwZGF0aW5nIHJlZ2lvbiBhdXRvY29tcGxldGUgb3B0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdpb25zID0gYXdhaXQgZ2V0UmVnaW9ucyh7cHJvZHVjZXJOYW1lOiBwcm9kdWNlclRleHR9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVnaW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UocmVnaW9uc1swXS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RW5hYmxlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RW5hYmxlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIGVtcHR5IHJlc3VsdCBlcnJvcnNcbiAgICAgICAgICAgICAgICBpZiAoIUVtcHR5UmVzdWx0RXJyb3IuaXNJbnN0YW5jZShlKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nV2FybmluZyhgRXJyb3IgZmV0Y2hpbmcgcmVnaW9ucyBiYXNlZCBvbiBwcm9kdWNlci4gJHtlfWApO1xuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvZHVjZXJUZXh0KSB7XG4gICAgICAgICAgICBmZXRjaFByb2R1Y2VyUmVnaW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFbmFibGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb2R1Y2VyVGV4dCwgc2V0RW5hYmxlZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHRJbnB1dCBuYW1lPVwiUmVnaW9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICBzPXsgNiB9IGw9eyAzIH1cbiAgICAgICAgICAgIGVuYWJsZWQ9eyBlbmFibGVkIH1cbiAgICAgICAgICAgIHZhbHVlPXsgdmFsdWUgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblJlZ2lvbklucHV0LmRpc3BsYXlOYW1lID0gXCJSZWdpb25JbnB1dFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBuYW1lVG9JZCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi9HcmlkXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBvcHRpb25zOiBzdHJpbmdbXTtcbiAgICBzZWxlY3Rpb246IHN0cmluZztcbiAgICBzZWxlY3RUZXh0Pzogc3RyaW5nO1xuICAgIHNlbGVjdFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxTZWxlY3RFbGVtZW50PjtcbiAgICBvbkNoYW5nZTogKHZhbDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgU2VsZWN0SW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBpZCA9IG5hbWVUb0lkKHByb3BzLm5hbWUpO1xuICAgIGxldCBzZWxlY3RUZXh0OiBKU1guRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBpZiAocHJvcHMuc2VsZWN0VGV4dCkge1xuICAgICAgICBzZWxlY3RUZXh0ID0gPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPlxuICAgICAgICAgICAgeyBwcm9wcy5zZWxlY3RUZXh0IH1cbiAgICAgICAgPC9vcHRpb24+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRGaWVsZCBzPXsgcHJvcHMucyB9IG09eyBwcm9wcy5tIH0gbD17IHByb3BzLmwgfT5cbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9eyBpZCB9XG4gICAgICAgICAgICAgICAgbmFtZT17IGlkIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSkgfVxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcHJvcHMuc2VsZWN0aW9uIHx8IHByb3BzLnNlbGVjdFRleHQgfVxuICAgICAgICAgICAgICAgIHJlZj17IHByb3BzLnNlbGVjdFJlZiB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyBzZWxlY3RUZXh0IH1cbiAgICAgICAgICAgICAgICB7IHByb3BzLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyBvcHRpb24gfSBrZXk9eyBvcHRpb24gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhcGl0YWxpemVGaXJzdExldHRlcihvcHRpb24pIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17IGlkIH0+eyBwcm9wcy5uYW1lIH08L2xhYmVsPlxuICAgICAgICA8L0lucHV0RmllbGQ+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGbG9hdGluZ0J0biB9IGZyb20gXCIuL0J1dHRvbnNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgb25DbGljazogKGNoYXI6IHN0cmluZykgPT4gdm9pZDtcbiAgICBjaGFyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTcGVjaWFsQ2hhckJ0bjogUmVhY3QuRkM8SVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXCJidG4tc21hbGxcIiwgXCJjZW50ZXJcIiwgXCJzcGVjLWNoYXItYnRuXCJdO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGbG9hdGluZ0J0biBjbGFzc2VzPXsgY2xhc3NlcyB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gbnVsbCB9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17ICgpID0+IHByb3BzLm9uQ2xpY2socHJvcHMuY2hhcikgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IHByb3BzLmNoYXIgfVxuICAgICAgICA8L0Zsb2F0aW5nQnRuPlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmxvYXRpbmdCdG4gfSBmcm9tIFwiLi9CdXR0b25zXCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi9HcmlkXCI7XG5pbXBvcnQgeyBTcGVjaWFsQ2hhckJ0biB9IGZyb20gXCIuL1NwZWNpYWxDaGFyQnRuXCI7XG5cbmVudW0gQ2FzZSB7XG4gICAgVXBwZXIsXG4gICAgTG93ZXIsXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG9uQ2xpY2s6IChjaGFyOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgY2xhc3Nlcz86IHN0cmluZ1tdO1xuICAgIGRpc3BsYXk6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIGNoYXJzOiBzdHJpbmdbXTtcbiAgICBjdXJyZW50Q2FzZTogQ2FzZTtcbn1cblxuZXhwb3J0IGNsYXNzIFNwZWNpYWxDaGFycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zZXJ0Q2hhckF0KHZhbDogc3RyaW5nLCBjaGFyOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGlzTmFOKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbCArIGNoYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbC5zdWJzdHIoMCwgcG9zaXRpb24pICsgY2hhciArIHZhbC5zdWJzdHIocG9zaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhcnM6IFtcbiAgICAgICAgICAgICAgICBcIsOgXCIsIFwiw6FcIiwgXCLDolwiLCBcIsOjXCIsIFwiw6ZcIiwgXCLEjVwiLCBcIsOnXCIsIFwiw6hcIiwgXCLDqVwiLCBcIsOqXCIsIFwiw6tcIiwgXCLDrVwiLCBcIsOuXCIsXG4gICAgICAgICAgICAgICAgXCLDr1wiLCBcIsOxXCIsIFwiw7NcIiwgXCLDtFwiLCBcIsO1XCIsIFwixZNcIiwgXCLFoVwiLCBcIsO5XCIsIFwiw7pcIiwgXCLDu1wiLCBcIsO8XCIsIFwixb5cIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjdXJyZW50Q2FzZTogQ2FzZS5Mb3dlcixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gW1wic3BlY2lhbC1jaGFyc1wiXTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzcGxheSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzZXM9eyBjbGFzc2VzLmNvbmNhdCh0aGlzLnByb3BzLmNsYXNzZXMgPz8gW10pIH0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBTaGlmdCBidXR0b24gKi99XG4gICAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ0J0biBjbGFzc2VzPXsgW1wiY2VudGVyXCIsIFwiZ3JlZW4tYmdcIiwgXCJzaGlmdC1idG5cIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyB0aGlzLmhhbmRsZVNoaWZ0LmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuY3VycmVudENhc2UgPT09IENhc2UuTG93ZXIgPyBcIuKGkVwiIDogXCLihpNcIiB9XG4gICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5jaGFycy5tYXAoKGNoYXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWNpYWxDaGFyQnRuIGNoYXI9eyBjaGFyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgY2hhciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoYykgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKGMpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSkgfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlU2hpZnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuY3VycmVudENhc2UgPT09IENhc2UuTG93ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjaGFyczogc3RhdGUuY2hhcnMubWFwKChjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FzZTogQ2FzZS5VcHBlcixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjaGFyczogc3RhdGUuY2hhcnMubWFwKChjaGFyKSA9PiBjaGFyLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRDYXNlOiBDYXNlLkxvd2VyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9lc20vZm9ybWF0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsIEVOX0RBU0gsIGdldE5hbWVBbmRUeXBlLCBudW1Ub0RhdGUgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5cbmludGVyZmFjZSBJVGV4dENlbGxQcm9wcyB7XG4gICAgZGVmYXVsdD86IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dENlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRleHRDZWxsUHJvcHM+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZGVmYXVsdDogXCJcIixcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPHRkPnsgdGhpcy5wcm9wcy50ZXh0ID8/IHRoaXMucHJvcHMuZGVmYXVsdCB9PC90ZD47XG4gICAgfVxufTtcblxuaW50ZXJmYWNlIElOdW1DZWxsUHJvcHMge1xuICAgIG51bTogbnVtYmVyIHwgbnVsbDtcbiAgICBtaW5EZWNpbWFscz86IG51bWJlcjtcbiAgICBtYXhEZWNpbWFscz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IE51bUNlbGw6IFJlYWN0LkZDPElOdW1DZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgbnVtID0gcHJvcHMubnVtXG4gICAgICAgIC8vIHVuZGVmaW5lZCB0byB1c2UgYnJvd3NlcidzIGxvY2FsZVxuICAgICAgICA/IHByb3BzLm51bS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHByb3BzLm1pbkRlY2ltYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBwcm9wcy5tYXhEZWNpbWFsc30pXG4gICAgICAgIDogRU5fREFTSDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwibnVtLWNvbFwiPnsgbnVtIH08L3RkPlxuICAgICk7XG59O1xuTnVtQ2VsbC5kaXNwbGF5TmFtZSA9IFwiTnVtQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSVByaWNlQ2VsbFByb3BzIHtcbiAgICBwcmljZTogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IFByaWNlQ2VsbDogUmVhY3QuRkM8SVByaWNlQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxOdW1DZWxsIG51bT17IHByb3BzLnByaWNlIH1cbiAgICAgICAgICAgIG1pbkRlY2ltYWxzPXsgMiB9XG4gICAgICAgICAgICBtYXhEZWNpbWFscz17IDIgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5QcmljZUNlbGwuZGlzcGxheU5hbWUgPSBcIlByaWNlQ2VsbFwiO1xuXG5leHBvcnQgY29uc3QgWWVhckNlbGw6IFJlYWN0LkZDPHt5ZWFyOiBudW1iZXIgfCBudWxsfT4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB5ZWFyID0gcHJvcHMueWVhcj8udG9TdHJpbmcoKSA/PyBcIk5WXCI7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm51bS1jb2xcIj5cbiAgICAgICAgICAgIHsgeWVhciB9XG4gICAgICAgIDwvdGQ+XG4gICAgKTtcbn1cblllYXJDZWxsLmRpc3BsYXlOYW1lID0gXCJZZWFyQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSURhdGVDZWxsUHJvcHMge1xuICAgIGRhdGU6IG51bWJlciB8IG51bGw7XG4gICAgZm9ybWF0Pzogc3RyaW5nO1xufVxuZXhwb3J0IGNvbnN0IERhdGVDZWxsOiBSZWFjdC5GQzxJRGF0ZUNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBkYXRlU3RyID0gcHJvcHMuZGF0ZSA/IGZvcm1hdChudW1Ub0RhdGUocHJvcHMuZGF0ZSksIHByb3BzLmZvcm1hdCA/PyBcIk1NTSBkZCwgeXl5eVwiKSA6IEVOX0RBU0g7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkPnsgZGF0ZVN0ciB9PC90ZD5cbiAgICApO1xufVxuRGF0ZUNlbGwuZGlzcGxheU5hbWUgPSBcIkRhdGVDZWxsXCI7XG5cbmludGVyZmFjZSBJQ29sb3JDZWxsUHJvcHMge1xuICAgIGNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBDb2xvckNlbGw6IFJlYWN0LkZDPElDb2xvckNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBpZiAocHJvcHMuY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIDx0ZD57IGNhcGl0YWxpemVGaXJzdExldHRlcihwcm9wcy5jb2xvcikgfTwvdGQ+O1xuICAgIH1cbiAgICByZXR1cm4gPHRkIC8+O1xufTtcbkNvbG9yQ2VsbC5kaXNwbGF5TmFtZSA9IFwiQ29sb3JDZWxsXCI7XG5cbmludGVyZmFjZSBJTGlua2VkQ2VsbFByb3BzIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG1vZGVsOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBMaW5rZWRDZWxsOiBSZWFjdC5GQzxJTGlua2VkQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHVybCA9IGAvJHtwcm9wcy5tb2RlbH0vJHtwcm9wcy5pZH1gO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxhIGhyZWY9eyB1cmwgfT5cbiAgICAgICAgICAgICAgICB7IHByb3BzLm5hbWUgfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgIClcbn1cbkxpbmtlZENlbGwuZGlzcGxheU5hbWUgPSBcIkxpbmtlZENlbGxcIlxuXG5pbnRlcmZhY2UgSU5hbWVBbmRUeXBlUHJvcHMge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICB3aW5lVHlwZTogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE5hbWVBbmRUeXBlQ2VsbDogUmVhY3QuRkM8SU5hbWVBbmRUeXBlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKHByb3BzLnVybCkge1xuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YSBocmVmPXsgcHJvcHMudXJsIH0+XG4gICAgICAgICAgICAgICAgeyBnZXROYW1lQW5kVHlwZShwcm9wcy5uYW1lLCBwcm9wcy53aW5lVHlwZSkgfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwid2luZXNcIlxuICAgICAgICAgICAgbmFtZT17IGdldE5hbWVBbmRUeXBlKHByb3BzLm5hbWUsIHByb3BzLndpbmVUeXBlKSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5OYW1lQW5kVHlwZUNlbGwuZGlzcGxheU5hbWUgPSBcIk5hbWVBbmRUeXBlQ2VsbFwiO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjZXJDZWxsOiBSZWFjdC5GQzx7aWQ6IG51bWJlciwgbmFtZTogc3RyaW5nfT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwicHJvZHVjZXJzXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUHJvZHVjZXJDZWxsLmRpc3BsYXlOYW1lID0gXCJQcm9kdWNlckNlbGxcIlxuXG5leHBvcnQgY29uc3QgUmVnaW9uQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cInJlZ2lvbnNcIlxuICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5SZWdpb25DZWxsLmRpc3BsYXlOYW1lID0gXCJSZWdpb25DZWxsXCJcblxuZXhwb3J0IGNvbnN0IFZpdGlBcmVhQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIgfCBudWxsLCBuYW1lOiBzdHJpbmcgfCBudWxsfT4gPSAocHJvcHMpID0+IHtcbiAgICBpZiAoIXByb3BzLmlkIHx8ICFwcm9wcy5uYW1lKSB7XG4gICAgICAgIHJldHVybiA8dGQgLz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJ2aXRpLWFyZWFzXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuVml0aUFyZWFDZWxsLmRpc3BsYXlOYW1lID0gXCJWaXRpQXJlYUNlbGxcIlxuXG5leHBvcnQgY29uc3QgV2luZVR5cGVDZWxsOiBSZWFjdC5GQzx7aWQ6IG51bWJlciwgbmFtZTogc3RyaW5nfT4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwid2luZS10eXBlc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cbldpbmVUeXBlQ2VsbC5kaXNwbGF5TmFtZSA9IFwiV2luZVR5cGVDZWxsXCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyB1c2VDb2xvcnNTZWxlY3QgfSBmcm9tIFwiLi9Db2xvcklucHV0XCI7XG5pbXBvcnQgeyBNYXRlcmlhbEljb24gfSBmcm9tIFwiLi9NYXRlcmlhbEljb25cIjtcbmltcG9ydCB7IFNlbGVjdElucHV0IH0gZnJvbSBcIi4vU2VsZWN0SW5wdXRcIjtcblxuZXhwb3J0IGVudW0gU29ydGluZ1N0YXRlIHtcbiAgICBOb3RTb3J0ZWQsXG4gICAgQXNjZW5kaW5nLFxuICAgIERlc2NlbmRpbmcsXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgICBzb3J0aW5nU3RhdGU6IFNvcnRpbmdTdGF0ZTtcbiAgICBpc051bUNvbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcz4ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpc051bUNvbDogZmFsc2UsXG4gICAgfTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17ICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCBcIlwiKSArIGAke3RoaXMucHJvcHMuaXNOdW1Db2wgPyBcIiBudW0tY29sXCIgOiBcIlwiIH1gIH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNvbnRlbnQoKSB9XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IChcbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLnByb3BzLm9uQ2xpY2sgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXNOdW1Db2xcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJJY29uKCkgfVxuICAgICAgICAgICAgICAgICAgICB7IHRleHQgfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICB7IHRleHQgfVxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVySWNvbigpIH1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckljb24oKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5zb3J0aW5nU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1N0YXRlLkFzY2VuZGluZzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImFycm93X2Ryb3BfdXBcIiAvPjtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1N0YXRlLkRlc2NlbmRpbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJhcnJvd19kcm9wX2Rvd25cIiAvPjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJhcnJvd19kcm9wX2Rvd25cIiBjbGFzc05hbWU9XCJpbnZpc2libGVcIiAvPjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW50ZXJmYWNlIElGaWx0ZXJQcm9wcyB7XG4gICAgb25DaGFuZ2U6ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcbiAgICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJIZWFkZXI6IFJlYWN0LkZDPElGaWx0ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gcHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17IHByb3BzLnRleHQgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICApO1xufVxuRmlsdGVySGVhZGVyLmRpc3BsYXlOYW1lID0gXCJGaWx0ZXJIZWFkZXJcIjtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdEZpbHRlckhlYWRlcjogUmVhY3QuRkM8SUZpbHRlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGV4dHJhQ2hvaWNlID0gXCJBbnlcIjtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKFNlbGVjdEZpbHRlckhlYWRlci5uYW1lKTtcblxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKHNlbGVjdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT09IGV4dHJhQ2hvaWNlKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKHNlbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHByb3BzLnRleHQgPT09IFwiXCIgPyBleHRyYUNob2ljZSA6IHByb3BzLnRleHQ7XG5cbiAgICBjb25zdCBbc2VsZWN0aW9uT3B0aW9ucywgc2VsZWN0UmVmXSA9IHVzZUNvbG9yc1NlbGVjdChsb2dnZXIsIGV4dHJhQ2hvaWNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxTZWxlY3RJbnB1dCBuYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RSZWY9eyBzZWxlY3RSZWYgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBzZWxlY3Rpb25PcHRpb25zIH1cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb249eyBzZWxlY3Rpb24gfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICApO1xufVxuU2VsZWN0RmlsdGVySGVhZGVyLmRpc3BsYXlOYW1lID0gU2VsZWN0RmlsdGVySGVhZGVyLm5hbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL0lucHV0XCI7XG5pbXBvcnQgeyBTcGVjaWFsQ2hhcnMgfSBmcm9tIFwiLi9TcGVjaWFsQ2hhcnNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgb25DaGFuZ2U6ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvbkZvY3VzPzogKCkgPT4gdm9pZDtcbiAgICBvbkJsdXI/OiAoKSA9PiB2b2lkO1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIHM/OiBudW1iZXI7XG4gICAgbT86IG51bWJlcjtcbiAgICBsPzogbnVtYmVyO1xuICAgIGlucHV0UmVmPzogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50Pjtcbn1cblxuZXhwb3J0IGNvbnN0IFRleHRJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFt0aW1lc3RhbXAsIF9dID0gUmVhY3QudXNlU3RhdGUobmV3IERhdGUoKSk7XG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgaW5wdXRSZWYgPSBwcm9wcy5pbnB1dFJlZiA/PyBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gICAgY29uc3Qgb25TcGVjaWFsQ2hhckNsaWNrID0gKGNoYXI6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBpbnB1dFJlZi5jdXJyZW50Py5zZWxlY3Rpb25TdGFydCA/PyBOYU47XG4gICAgICAgIHByb3BzLm9uQ2hhbmdlKFNwZWNpYWxDaGFycy5pbnNlcnRDaGFyQXQocHJvcHMudmFsdWUsIGNoYXIsIHBvc2l0aW9uKSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBpbnB1dFJlZi5jdXJyZW50LnNldFNlbGVjdGlvblJhbmdlKHBvc2l0aW9uICsgMSwgcG9zaXRpb24gKyAxKSwgMTApO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkJsdXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKG5vdyAtIHRpbWVzdGFtcCA+IDEwMCkge1xuICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHByb3BzLm9uQmx1cj8uKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldElzQWN0aXZlKHRydWUpO1xuICAgICAgICBwcm9wcy5vbkNoYW5nZSh2YWwpO1xuICAgIH1cblxuICAgIGNvbnN0IG9uRm9jdXMgPSAoKSA9PiB7XG4gICAgICAgIHNldElzQWN0aXZlKHRydWUpO1xuICAgICAgICBwcm9wcy5vbkZvY3VzPy4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPElucHV0IGlucHV0VHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17IHByb3BzLnZhbHVlIH1cbiAgICAgICAgICAgICAgICBlbmFibGVkPXsgcHJvcHMuZW5hYmxlZCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsKSA9PiBvbkNoYW5nZSh2YWwpIH1cbiAgICAgICAgICAgICAgICBvbkJsdXI9eyBvbkJsdXIgfVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9eyBvbkZvY3VzIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBwcm9wcy5jbGFzc05hbWUgfVxuICAgICAgICAgICAgICAgIHM9eyBwcm9wcy5zIH0gbT17IHByb3BzLm0gfSBsPXsgcHJvcHMubCB9XG4gICAgICAgICAgICAgICAgaW5wdXRSZWY9eyBpbnB1dFJlZiB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFNwZWNpYWxDaGFyc1xuICAgICAgICAgICAgICAgIGNsYXNzZXM9eyBbXCJpbmxpbmUtYmxvY2tcIl0gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoYykgPT4gb25TcGVjaWFsQ2hhckNsaWNrKGMpIH1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PXsgaXNBY3RpdmUgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblRleHRJbnB1dC5kaXNwbGF5TmFtZSA9IFwiVGV4dElucHV0XCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJV2luZSB9IGZyb20gXCIuLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgQ29sb3JDZWxsLCBOYW1lQW5kVHlwZUNlbGwsIE51bUNlbGwsIFByb2R1Y2VyQ2VsbCwgUmVnaW9uQ2VsbCwgVml0aUFyZWFDZWxsLCBZZWFyQ2VsbCB9IGZyb20gXCIuL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCB7IEZpbHRlckhlYWRlciwgU29ydGluZ1N0YXRlLCBUYWJsZUhlYWRlciwgU2VsZWN0RmlsdGVySGVhZGVyIH0gZnJvbSBcIi4vVGFibGVIZWFkZXJcIjtcblxuZW51bSBTb3J0aW5nVmFsdWUge1xuICAgIEludmVudG9yeSxcbiAgICBDb2xvcixcbiAgICBOYW1lQW5kVHlwZSxcbiAgICBQcm9kdWNlcixcbiAgICBSZWdpb24sXG4gICAgVml0aUFyZWEsXG4gICAgVmludGFnZSxcbiAgICBSYXRpbmdcbn07XG5cbmV4cG9ydCBlbnVtIENvbHVtblRvRXhjbHVkZSB7XG4gICAgUHJvZHVjZXIsXG4gICAgUmVnaW9uLFxuICAgIFZpdGlBcmVhLFxufVxuXG50eXBlIElQcm9wcyA9IHtcbiAgICB3aW5lczogSVdpbmVbXTtcbiAgICBmaWx0ZXJUZXh0cz86IE1hcDxrZXlvZiBJV2luZSwgc3RyaW5nPjtcbiAgICBvbkZpbHRlckNoYW5nZT86IChjb2x1bW46IGtleW9mIElXaW5lLCB0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgZXhjbHVkZUNvbHVtbj86IENvbHVtblRvRXhjbHVkZTtcbn0gJiBQYXJ0aWFsPERlZmF1bHRQcm9wcz5cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgYXNjZW5kaW5nOiBib29sZWFuO1xuICAgIHNvcnRpbmc6IFNvcnRpbmdWYWx1ZTtcbiAgICBjb2xvclNlbGVjdGlvbjogc3RyaW5nO1xufVxuXG50eXBlIERlZmF1bHRQcm9wcyA9IFJlYWRvbmx5PHR5cGVvZiBkZWZhdWx0UHJvcHM+XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICB3aW5lc1BlclBhZ2U6IDI1MCxcbn07XG5cbmV4cG9ydCBjbGFzcyBXaW5lc1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcyAmIERlZmF1bHRQcm9wcywgSVN0YXRlPiB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzICYgRGVmYXVsdFByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFzY2VuZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHNvcnRpbmc6IFNvcnRpbmdWYWx1ZS5OYW1lQW5kVHlwZSxcbiAgICAgICAgICAgIGNvbG9yU2VsZWN0aW9uOiBcIlwiLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlckhlYWRlciA9IHRoaXMucHJvcHMuZmlsdGVyVGV4dHNcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJIZWFkZXIgeyAuLi50aGlzLmZpbHRlckhlYWRlclByb3BzKFwiaW52ZW50b3J5XCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJjb2xvclwiKSB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJIZWFkZXIgeyAuLi50aGlzLmZpbHRlckhlYWRlclByb3BzKFwid2luZVR5cGVcIikgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVySGVhZGVyIHsgLi4udGhpcy5maWx0ZXJIZWFkZXJQcm9wcyhcInByb2R1Y2VyXCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJyZWdpb25cIikgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVySGVhZGVyIHsgLi4udGhpcy5maWx0ZXJIZWFkZXJQcm9wcyhcInZpdGlBcmVhXCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJsYXN0UHVyY2hhc2VWaW50YWdlXCIpIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckhlYWRlciB7IC4uLnRoaXMuZmlsdGVySGVhZGVyUHJvcHMoXCJyYXRpbmdcIikgfSAvPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgY29uc3QgZXhDb2wgPSB0aGlzLnByb3BzLmV4Y2x1ZGVDb2x1bW47XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZSBoaWdobGlnaHQgY29uZGVuc2VkXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PVwiaGVhZGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyIHsuLi50aGlzLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLkludmVudG9yeSl9IGlzTnVtQ29sID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZlbnRvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuQ29sb3IpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB7Li4udGhpcy50YWJsZUhlYWRlclByb3BzKFNvcnRpbmdWYWx1ZS5OYW1lQW5kVHlwZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUgYW5kIFR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4Q29sID09PSBDb2x1bW5Ub0V4Y2x1ZGUuUHJvZHVjZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUHJvZHVjZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4Q29sID09PSBDb2x1bW5Ub0V4Y2x1ZGUuUmVnaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgPFRhYmxlSGVhZGVyIHsuLi50aGlzLnRhYmxlSGVhZGVyUHJvcHMoU29ydGluZ1ZhbHVlLlJlZ2lvbil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4Q29sID09PSBDb2x1bW5Ub0V4Y2x1ZGUuVml0aUFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuVml0aUFyZWEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVml0aWN1bHR1cmFsIEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuVmludGFnZSl9IGlzTnVtQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgey4uLnRoaXMudGFibGVIZWFkZXJQcm9wcyhTb3J0aW5nVmFsdWUuUmF0aW5nKX0gaXNOdW1Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICB7IGZpbHRlckhlYWRlciB9XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy53aW5lc0ZvclBhZ2UubWFwKCh3aW5lKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXsgd2luZS5pZCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1DZWxsIG51bT17IHdpbmUuaW52ZW50b3J5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4RGVjaW1hbHM9eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvckNlbGwgY29sb3I9eyB3aW5lLmNvbG9yIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmFtZUFuZFR5cGVDZWxsIGlkPXsgd2luZS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyB3aW5lLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5lVHlwZT17IHdpbmUud2luZVR5cGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBleENvbCA9PT0gQ29sdW1uVG9FeGNsdWRlLlByb2R1Y2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IDxQcm9kdWNlckNlbGwgaWQ9eyB3aW5lLnByb2R1Y2VySWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IHdpbmUucHJvZHVjZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBleENvbCA9PT0gQ29sdW1uVG9FeGNsdWRlLlJlZ2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8UmVnaW9uQ2VsbCBpZD17IHdpbmUucmVnaW9uSWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IHdpbmUucmVnaW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhDb2wgPT09IENvbHVtblRvRXhjbHVkZS5WaXRpQXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCA8Vml0aUFyZWFDZWxsIGlkPXsgd2luZS52aXRpQXJlYUlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyB3aW5lLnZpdGlBcmVhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxZZWFyQ2VsbCB5ZWFyPXsgd2luZS5sYXN0UHVyY2hhc2VWaW50YWdlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtQ2VsbCBtYXhEZWNpbWFscz17IDAgfSBudW09eyB3aW5lLnJhdGluZyB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCB3aW5lc0ZvclBhZ2UoKTogSVdpbmVbXSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gKHRoaXMucHJvcHMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucHJvcHMud2luZXNQZXJQYWdlO1xuICAgICAgICBjb25zdCBzb3J0ZWRXaW5lcyA9IHRoaXMuc29ydGVkV2luZXM7XG4gICAgICAgIHJldHVybiBzb3J0ZWRXaW5lcy5zbGljZShzdGFydCwgIE1hdGgubWluKHNvcnRlZFdpbmVzLmxlbmd0aCxcbiAgICAgICAgICAgIHN0YXJ0ICsgdGhpcy5wcm9wcy53aW5lc1BlclBhZ2UpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBzb3J0ZWRXaW5lcygpIHtcbiAgICAgICAgY29uc3QgYXNjZW5kaW5nTXVsdGlwbGllciA9IHRoaXMuc3RhdGUuYXNjZW5kaW5nID8gMSA6IC0xO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuc29ydGluZykge1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuSW52ZW50b3J5OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT5cbiAgICAgICAgICAgICAgICAgICAgKHcxLmludmVudG9yeSAtIHcyLmludmVudG9yeSkgKiBhc2NlbmRpbmdNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLkNvbG9yOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT5cbiAgICAgICAgICAgICAgICAgICAgdzEuY29sb3IubG9jYWxlQ29tcGFyZSh3Mi5jb2xvcikgKiBhc2NlbmRpbmdNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgU29ydGluZ1ZhbHVlLk5hbWVBbmRUeXBlOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBTb3J0IGJ5IHdpbmVUeXBlIHRoZW4gbmFtZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3aW5lVHlwZUNvbXBhcmlzb24gPSAodzEud2luZVR5cGUgPz8gXCJcIikubG9jYWxlQ29tcGFyZSh3Mi53aW5lVHlwZSA/PyBcIlwiKSAqIGFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5lVHlwZUNvbXBhcmlzb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5hbWUgY29tcGFyaXNvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHcxLm5hbWUgJiYgdzIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3MS5uYW1lLmxvY2FsZUNvbXBhcmUodzIubmFtZSkgKiBhc2NlbmRpbmdNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodzEubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc2NlbmRpbmdNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHcyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLWFzY2VuZGluZ011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmVUeXBlQ29tcGFyaXNvbjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuUHJvZHVjZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICB3MS5wcm9kdWNlci5sb2NhbGVDb21wYXJlKHcyLnByb2R1Y2VyKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuUmVnaW9uOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLndpbmVzLnNvcnQoKHcxLCB3MikgPT5cbiAgICAgICAgICAgICAgICAgICAgdzEucmVnaW9uLmxvY2FsZUNvbXBhcmUodzIucmVnaW9uKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuVml0aUFyZWE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICAodzEudml0aUFyZWEgfHwgXCJcIikubG9jYWxlQ29tcGFyZSh3Mi52aXRpQXJlYSB8fCBcIlwiKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuVmludGFnZTpcbiAgICAgICAgICAgICAgICAvLyBTb3J0IE5WIGZpcnN0XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICAodzEubGFzdFB1cmNoYXNlVmludGFnZSA/PyAzMDAwKSAtICh3Mi5sYXN0UHVyY2hhc2VWaW50YWdlID8/IDMwMDApICogYXNjZW5kaW5nTXVsdGlwbGllclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5SYXRpbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2luZXMuc29ydCgodzEsIHcyKSA9PlxuICAgICAgICAgICAgICAgICAgICAodzEucmF0aW5nID8/IDApIC0gKHcyLnJhdGluZyA/PyAwKSAqIGFzY2VuZGluZ011bHRpcGxpZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aW5lcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25IZWFkZXJDbGljayhlOiBSZWFjdC5Nb3VzZUV2ZW50LCBzb3J0aW5nVmFsOiBTb3J0aW5nVmFsdWUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoc29ydGluZ1ZhbCA9PT0gdGhpcy5zdGF0ZS5zb3J0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7YXNjZW5kaW5nOiAhcHJldlN0YXRlLmFzY2VuZGluZ30pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFzY2VuZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzb3J0aW5nOiBzb3J0aW5nVmFsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRhYmxlSGVhZGVyUHJvcHMoc29ydGluZ1ZhbDogU29ydGluZ1ZhbHVlKTpcbiAgICAgICAge3NvcnRpbmdTdGF0ZTogU29ydGluZ1N0YXRlLCBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZH0ge1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRpbmcgPT09IHNvcnRpbmdWYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRpbmdTdGF0ZSA9IHRoaXMuc3RhdGUuYXNjZW5kaW5nID8gU29ydGluZ1N0YXRlLkFzY2VuZGluZyA6IFNvcnRpbmdTdGF0ZS5EZXNjZW5kaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzb3J0aW5nU3RhdGUsXG4gICAgICAgICAgICAgICAgb25DbGljazogKGUpID0+IHRoaXMub25IZWFkZXJDbGljayhlLCBzb3J0aW5nVmFsKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvcnRpbmdTdGF0ZTogU29ydGluZ1N0YXRlLk5vdFNvcnRlZCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IChlKSA9PiB0aGlzLm9uSGVhZGVyQ2xpY2soZSwgc29ydGluZ1ZhbCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ29uc3RydWN0cyBwcm9wcyBmb3IgYSBmaWx0ZXIgaGVhZGVyXG4gICAgcHJpdmF0ZSBmaWx0ZXJIZWFkZXJQcm9wcyhjb2x1bW5OYW1lOiBrZXlvZiBJV2luZSk6XG4gICAgICAgIHtvbkNoYW5nZTogKHRleHQ6IHN0cmluZykgPT4gdm9pZCxcbiAgICAgICAgIHRleHQ6IHN0cmluZ30ge1xuXG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGlmIGJvdGggcHJvcHMgZXhpc3RcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoZmlsdGVyRXhwcikgPT4gdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSEoY29sdW1uTmFtZSwgZmlsdGVyRXhwciksXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnByb3BzLmZpbHRlclRleHRzIS5nZXQoY29sdW1uTmFtZSkgPz8gXCJcIixcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYW5jZWxPckNvbmZpcm1CdG5zIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uc1wiO1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmlkXCI7XG5pbXBvcnQgeyBQcm9kdWNlcklucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZHVjZXJJbnB1dFwiO1xuaW1wb3J0IHsgUmVnaW9uSW5wdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SZWdpb25JbnB1dFwiO1xuaW1wb3J0IHsgSVByb2R1Y2VyLCBJUmVnaW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5cbmludGVyZmFjZSBJUHJvZHVjZXJQcm9wcyB7XG4gICAgaXNFZGl0aW5nOiBib29sZWFuO1xuICAgIHByb2R1Y2VyVGV4dDogc3RyaW5nO1xuICAgIHByb2R1Y2VyOiBJUHJvZHVjZXI7XG4gICAgb25Qcm9kdWNlckNoYW5nZTogKHZhbDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIHJlZ2lvblRleHQ6IHN0cmluZztcbiAgICByZWdpb24/OiBJUmVnaW9uXG4gICAgb25SZWdpb25DaGFuZ2U6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Db25maXJtQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgb25DYW5jZWxDbGljazogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFByb2R1Y2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9kdWNlclByb3BzPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9kdWNlclByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzRWRpdGluZzogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25SZWdpb25UZXh0Q2hhbmdlID0gdGhpcy5vblJlZ2lvblRleHRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5wcm9wcy5pc0VkaXRpbmcgPyB0aGlzLnJlbmRlckVkaXQoKSA6IHRoaXMucmVuZGVyVmlldygpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICB7IGNvbnRlbnQgfVxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJWaWV3KCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgbGV0IHJlZ2lvbkluZm86IEpTWC5FbGVtZW50IHwgbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucmVnaW9uKSB7XG4gICAgICAgICAgICByZWdpb25JbmZvID0gKFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJsaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYC9yZWdpb25zLyR7dGhpcy5wcm9wcy5yZWdpb24uaWR9L2AgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5yZWdpb24ubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlZ2lvbkluZm8gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29sIHM9eyAxMiB9PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJib2xkXCI+eyB0aGlzLnByb3BzLnByb2R1Y2VyLm5hbWUgfTwvaDM+XG4gICAgICAgICAgICAgICAgeyByZWdpb25JbmZvIH1cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyRWRpdCgpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPENvbCBzPXsgMTIgfT5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJvbGRcIj57IGBFZGl0IFByb2R1Y2VyICR7dGhpcy5wcm9wcy5wcm9kdWNlci5uYW1lfWAgfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y2VySW5wdXQgdmFsdWU9eyB0aGlzLnByb3BzLnByb2R1Y2VyVGV4dCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLnByb3BzLm9uUHJvZHVjZXJDaGFuZ2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWdpb25JbnB1dCB2YWx1ZT17IHRoaXMucHJvcHMucmVnaW9uVGV4dCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uUmVnaW9uVGV4dENoYW5nZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENhbmNlbE9yQ29uZmlybUJ0bnNcbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtQ2xpY2s9eyB0aGlzLnByb3BzLm9uQ29uZmlybUNsaWNrIH1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWxDbGljaz17IHRoaXMucHJvcHMub25DYW5jZWxDbGljayB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUmVnaW9uVGV4dENoYW5nZSh2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVnaW9uQ2hhbmdlKHZhbCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmxvYXRpbmdCdG4gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25zXCI7XG5pbXBvcnQgeyBGaXhlZEFjdGlvbkxpc3QgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9GaXhlZEFjdGlvbkxpc3RcIjtcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWF0ZXJpYWxJY29uXCI7XG5pbXBvcnQgeyBEZWxldGVNb2RhbCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01vZGFsXCI7XG5pbXBvcnQgeyBQcmVsb2FkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QcmVsb2FkZXJcIjtcbmltcG9ydCB7IENvbHVtblRvRXhjbHVkZSwgV2luZXNUYWJsZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dpbmVzVGFibGVcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uLy4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElQcm9kdWNlciwgSVJlZ2lvbiwgSVdpbmUgfSBmcm9tIFwiLi4vLi4vbGliL1Jlc3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJlZ2lvbiwgZGVsZXRlUHJvZHVjZXIsIEVtcHR5UmVzdWx0RXJyb3IsIGdldFByb2R1Y2VyLCBnZXRSZWdpb24sIGdldFdpbmVzLCB1cGRhdGVQcm9kdWNlciB9IGZyb20gXCIuLi8uLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBQcm9kdWNlciB9IGZyb20gXCIuL1Byb2R1Y2VyXCI7XG5cbmV4cG9ydCBlbnVtIFByb2R1Y2VyUHJvZmlsZVRleHRJbnB1dCB7XG4gICAgUHJvZHVjZXIsXG4gICAgUmVnaW9uLFxufTtcblxuaW50ZXJmYWNlIElQcm9kdWNlclByb2ZpbGVBcHBTdGF0ZSB7XG4gICAgaXNFZGl0aW5nOiBib29sZWFuO1xuICAgIHNob3dEZWxldGVNb2RhbDogYm9vbGVhbjtcbiAgICBsYXN0QWN0aXZlVGV4dElucHV0PzogUHJvZHVjZXJQcm9maWxlVGV4dElucHV0O1xuICAgIC8vIEVkaXRhYmxlIGZpZWxkc1xuICAgIHByb2R1Y2VyVGV4dDogc3RyaW5nO1xuICAgIHJlZ2lvblRleHQ6IHN0cmluZztcbiAgICAvLyBcIlB1cmVcIiBzdGF0ZSwgb25seSBtdXRhdGVkIG9uIHN1Y2Nlc3NmdWwgY2hhbmdlcyBzZW50IHRvIHNlcnZlclxuICAgIHByb2R1Y2VyPzogSVByb2R1Y2VyO1xuICAgIHJlZ2lvbj86IElSZWdpb247XG4gICAgd2luZXM6IElXaW5lW107XG59XG5cbmludGVyZmFjZSBJUHJvZHVjZXJQcm9maWxlQXBwUHJvcHMge1xuICAgIHByb2R1Y2VySWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFByb2R1Y2VyUHJvZmlsZUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvZHVjZXJQcm9maWxlQXBwUHJvcHMsIElQcm9kdWNlclByb2ZpbGVBcHBTdGF0ZT4ge1xuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb2R1Y2VyUHJvZmlsZUFwcFByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzRWRpdGluZzogZmFsc2UsXG4gICAgICAgICAgICBzaG93RGVsZXRlTW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgcHJvZHVjZXJUZXh0OiBcIlwiLFxuICAgICAgICAgICAgcmVnaW9uVGV4dDogXCJcIixcbiAgICAgICAgICAgIHByb2R1Y2VyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZWdpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHdpbmVzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHRoaXMuY29uc3RydWN0b3IubmFtZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLm9uRWRpdENsaWNrID0gdGhpcy5vbkVkaXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUHJvZHVjZXJDaGFuZ2UgPSB0aGlzLm9uUHJvZHVjZXJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJlZ2lvbkNoYW5nZSA9IHRoaXMub25SZWdpb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNvbmZpcm1DbGljayA9IHRoaXMub25Db25maXJtQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNhbmNlbENsaWNrID0gdGhpcy5vbkNhbmNlbENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25TaG93RGVsZXRlTW9kYWxDbGljayA9IHRoaXMub25TaG93RGVsZXRlTW9kYWxDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRGVsZXRlQ2xpY2sgPSB0aGlzLm9uRGVsZXRlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFByb2R1Y2VyRGF0YSgpO1xuICAgICAgICBjb25zdCB3aW5lcyA9IGF3YWl0IGdldFdpbmVzKHtwcm9kdWNlcklkOiB0aGlzLnByb3BzLnByb2R1Y2VySWR9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHt3aW5lczogd2luZXN9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucHJvZHVjZXIpIHtcbiAgICAgICAgICAgIHJldHVybiA8UHJlbG9hZGVyIC8+O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGFsID0gdGhpcy5zdGF0ZS5zaG93RGVsZXRlTW9kYWxcbiAgICAgICAgICAgID8gPERlbGV0ZU1vZGFsIGl0ZW09XCJwcm9kdWNlclwiXG4gICAgICAgICAgICAgICAgb25Ob0NsaWNrPXsgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd0RlbGV0ZU1vZGFsOiBmYWxzZX0pIH1cbiAgICAgICAgICAgICAgICBvblllc0NsaWNrPXsgdGhpcy5vbkRlbGV0ZUNsaWNrIH1cbiAgICAgICAgICAgIC8+IDogbnVsbDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPFByb2R1Y2VyIGlzRWRpdGluZz17IHRoaXMuc3RhdGUuaXNFZGl0aW5nIH1cbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjZXI9eyB0aGlzLnN0YXRlLnByb2R1Y2VyIH1cbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjZXJUZXh0PXsgdGhpcy5zdGF0ZS5wcm9kdWNlclRleHQgfVxuICAgICAgICAgICAgICAgICAgICBvblByb2R1Y2VyQ2hhbmdlPXsgdGhpcy5vblByb2R1Y2VyQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uPXsgdGhpcy5zdGF0ZS5yZWdpb24gfVxuICAgICAgICAgICAgICAgICAgICByZWdpb25UZXh0PXsgdGhpcy5zdGF0ZS5yZWdpb25UZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgb25SZWdpb25DaGFuZ2U9eyB0aGlzLm9uUmVnaW9uQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtQ2xpY2s9eyB0aGlzLm9uQ29uZmlybUNsaWNrIH1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWxDbGljaz17IHRoaXMub25DYW5jZWxDbGljayB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHM9eyAxMiB9IGw9eyA5IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+V2luZXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBzPXsgMTIgfSBsPXsgMyB9IGNsYXNzZXM9eyBbXCJmaXhlZC1hY3Rpb24tZGl2XCJdIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rml4ZWRBY3Rpb25MaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ0J0biBvbkNsaWNrPXsgdGhpcy5vbkVkaXRDbGljayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9eyBbXCJ5ZWxsb3ctYmdcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImVkaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nQnRuIG9uQ2xpY2s9eyB0aGlzLm9uU2hvd0RlbGV0ZU1vZGFsQ2xpY2sgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXsgW1wicmVkLWJnXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJkZWxldGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkQWN0aW9uTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V2luZXNUYWJsZSB3aW5lcz17IHRoaXMuc3RhdGUud2luZXMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVDb2x1bW49eyBDb2x1bW5Ub0V4Y2x1ZGUuUHJvZHVjZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgeyBtb2RhbCB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRWRpdENsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0VkaXRpbmc6IHRydWV9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBwcm9kdWNlciBhbmQgaXRzIHJlZ2lvbiBvbiB0aGUgc2VydmVyIHNpZGVcbiAgICAgKiBhbmQgdXBkYXRlcyBzdGF0ZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIGdldEN1cnJlbnRQcm9kdWNlckRhdGEoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWNlciA9IGF3YWl0IGdldFByb2R1Y2VyKHtpZDogdGhpcy5wcm9wcy5wcm9kdWNlcklkfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBwcm9kdWNlcjogcHJvZHVjZXIsXG4gICAgICAgICAgICAgICAgcHJvZHVjZXJUZXh0OiBwcm9kdWNlci5uYW1lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCByZWdpb24gPSBhd2FpdCBnZXRSZWdpb24oe2lkOiBwcm9kdWNlci5yZWdpb25JZH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcmVnaW9uLFxuICAgICAgICAgICAgICAgIHJlZ2lvblRleHQ6IHJlZ2lvbi5uYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dXYXJuaW5nKFwiRXJyb3IgZ2V0dGluZyBwcm9kdWNlciBkYXRhXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblByb2R1Y2VyQ2hhbmdlKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Byb2R1Y2VyVGV4dDogdmFsfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlZ2lvbkNoYW5nZSh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaW9uVGV4dDogdGV4dH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25Db25maXJtQ2xpY2soKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBbcmVnaW9uQ2hhbmdlZCwgcmVnaW9uSWRdID0gYXdhaXQgdGhpcy5oYW5kbGVSZWdpb25DaGFuZ2VzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcm9kdWNlclxuICAgICAgICAgICAgICAgICYmICh0aGlzLnN0YXRlLnByb2R1Y2VyVGV4dCAhPT0gdGhpcy5zdGF0ZS5wcm9kdWNlci5uYW1lIHx8IHJlZ2lvbkNoYW5nZWQpKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y2VyKHJlZ2lvbklkID09PSAtMSA/IG51bGwhIDogcmVnaW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ1dhcm5pbmcoYEZhaWxlZCB0byBzYXZlIGNoYW5nZXMgdG8gdGhlIGRhdGFiYXNlOiAke2Vycn1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlUmVnaW9uQ2hhbmdlcygpOiBQcm9taXNlPFtib29sZWFuLCBudW1iZXJdPiB7XG4gICAgICAgIGlmICgodGhpcy5zdGF0ZS5yZWdpb25UZXh0ICYmICF0aGlzLnN0YXRlLnJlZ2lvbilcbiAgICAgICAgICAgIHx8ICh0aGlzLnN0YXRlLnJlZ2lvbiAmJiB0aGlzLnN0YXRlLnJlZ2lvblRleHQgIT09IHRoaXMuc3RhdGUucmVnaW9uLm5hbWUpKSB7XG5cbiAgICAgICAgICAgIC8vIFRyeSBHZXRcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnaW9uID0gYXdhaXQgZ2V0UmVnaW9uKHtuYW1lOiB0aGlzLnN0YXRlLnJlZ2lvblRleHR9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICByZWdpb25UZXh0OiByZWdpb24ubmFtZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3RydWUsIHJlZ2lvbi5pZF07XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoRW1wdHlSZXN1bHRFcnJvci5pc0luc3RhbmNlKGVycikpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2lvbiA9IGF3YWl0IGNyZWF0ZVJlZ2lvbih7IG5hbWU6IHRoaXMuc3RhdGUucmVnaW9uVGV4dH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaW9uVGV4dDogcmVnaW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RydWUsIHJlZ2lvbi5pZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIlVua25vd24gZXJyb3JcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVnaW9uKSB7XG4gICAgICAgICAgICByZXR1cm5bZmFsc2UsIHRoaXMuc3RhdGUucmVnaW9uLmlkXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2ZhbHNlLCAtMV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGVQcm9kdWNlcihyZWdpb25JZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y2VyID0gYXdhaXQgdXBkYXRlUHJvZHVjZXIoe1xuICAgICAgICAgICAgaWQ6IHRoaXMuc3RhdGUucHJvZHVjZXIhLmlkLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5wcm9kdWNlclRleHQsXG4gICAgICAgICAgICByZWdpb25JZDogcmVnaW9uSWQsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHByb2R1Y2VyOiBwcm9kdWNlcixcbiAgICAgICAgICAgIHByb2R1Y2VyVGV4dDogcHJvZHVjZXIubmFtZSxcbiAgICAgICAgICAgIGlzRWRpdGluZzogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNhbmNlbENsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIGlzRWRpdGluZzogZmFsc2UsXG4gICAgICAgICAgICBwcm9kdWNlclRleHQ6IHN0YXRlLnByb2R1Y2VyID8gc3RhdGUucHJvZHVjZXIubmFtZSA6IFwiXCIsXG4gICAgICAgICAgICByZWdpb25UZXh0OiBzdGF0ZS5yZWdpb24gPyBzdGF0ZS5yZWdpb24ubmFtZSA6IFwiXCIsXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2hvd0RlbGV0ZU1vZGFsQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dEZWxldGVNb2RhbDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25EZWxldGVDbGljaygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGRlbGV0ZVByb2R1Y2VyKHRoaXMucHJvcHMucHJvZHVjZXJJZCk7XG4gICAgICAgICAgICAvLyBSZWRpcmVjdCBob21lXG4gICAgICAgICAgICByZWRpcmVjdChcIi9cIik7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dXYXJuaW5nKGBGYWlsZWQgdG8gZGVsZXRlIHByb2R1Y2VyIHdpdGggaWQgJHt0aGlzLnByb3BzLnByb2R1Y2VySWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGAgd2l0aCBleGNlcHRpb246ICR7ZXguYm9keX1gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IG9uTG9hZCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuLi8uLi9saWIvd2lkZ2V0c1wiO1xuaW1wb3J0IHsgUHJvZHVjZXJQcm9maWxlQXBwIH0gZnJvbSBcIi4vUHJvZHVjZXJQcm9maWxlQXBwXCI7XG5cbmRlY2xhcmUgY29uc3QgaWQ6IG51bWJlcjtcblxub25Mb2FkKCgpID0+IHtcbiAgICBuYXZiYXIoKTtcbiAgICByZW5kZXIoY3JlYXRlRWxlbWVudChQcm9kdWNlclByb2ZpbGVBcHAsIHtwcm9kdWNlcklkOiBpZH0pLFxuICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y2VyX3Byb2ZpbGUtY29udGFpbmVyXCIpKTtcbn0pO1xuIiwiaW1wb3J0IHsgcmVhZENvb2tpZSB9IGZyb20gXCIuL0Nvb2tpZXNcIjtcbmltcG9ydCB7IElEaWN0LCBpc0VtcHR5IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgSEVBREVSUyA9IHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIlgtQ1NSRlRva2VuXCI6IHJlYWRDb29raWUoXCJjc3JmdG9rZW5cIikgfHwgXCJcIixcbn07XG5cbmV4cG9ydCB0eXBlIElRdWVyeVBhcmFtcyA9IElEaWN0PHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+O1xuXG5mdW5jdGlvbiBlbmNvZGVQYXJhbXMocGFyYW1zOiBJUXVlcnlQYXJhbXMpOiBzdHJpbmcge1xuICAgIGlmIChpc0VtcHR5KHBhcmFtcykpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBcIj9cIiArIE9iamVjdC5lbnRyaWVzKHBhcmFtcykubWFwKChbaywgdl0pID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrKX09JHtlbmNvZGVVUklDb21wb25lbnQodil9YCkuam9pbihcIiZcIik7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUpzb24ob2JqOiBvYmplY3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZWNvZGVKc29uSWZBbnkocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgaWYgKHBhcnNlRmxvYXQocmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LWxlbmd0aFwiKSA/PyBcIjBcIikgPiAwXG4gICAgICAgICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbn1cblxudHlwZSBWaW5vdGVjYUVycm9yID1cbiAgICB8IHtcIk5vdEZvdW5kXCI6IHN0cmluZ31cbiAgICB8IHtcIkludGVybmFsXCI6IHN0cmluZ31cbiAgICB8IHtcIk1pc3NpbmdDb25zdHJhaW50XCI6IHN0cmluZ31cbiAgICB8IHtcIkJhZFJlcXVlc3RcIjogc3RyaW5nfTtcblxuZnVuY3Rpb24gaXNWaW5vdGVjYUVycm9yKG9iajogb2JqZWN0KTogb2JqIGlzIFZpbm90ZWNhRXJyb3Ige1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHJldHVybiBrZXlzLmxlbmd0aCA9PT0gMVxuICAgICAgICAmJiBbXCJOb3RGb3VuZFwiLCBcIkludGVybmFsXCIsIFwiTWlzc2luZ0NvbnN0cmFpbnRcIiwgXCJCYWRSZXF1ZXN0XCJdXG4gICAgICAgICAgICAuZmluZCgoaSkgPT4gaSA9PT0ga2V5c1swXSkgIT09IHVuZGVmaW5lZDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tSZXNwb25zZShyZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPiAzMTApIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IGRlY29kZUpzb25JZkFueShyZXNwb25zZSk7XG4gICAgICAgIGlmIChpc1Zpbm90ZWNhRXJyb3IobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke09iamVjdC5rZXlzKG1lc3NhZ2UpWzBdfTogJHtPYmplY3QudmFsdWVzKG1lc3NhZ2UpWzBdfWApO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlSnNvbklmQW55KHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICB9XG59XG5cbi8qKlxuICogTWFrZXMgYW4gSFRUUCBHRVQgcmVxdWVzdCB0byB0aGUgdXJsIHdpdGggdGhlIG9wdGlvbmFsIHBhcmFtZXRlcnMsIHRoZW4gcGFyc2VzXG4gKiB0aGUgSlNPTiByZXNwb25zZS5cbiAqIEBwYXJhbSB1cmwgQSBVUkwgdG8gcmVxdWVzdFxuICogQHBhcmFtIHBhcmFtcyBBbiBvcHRpb25hbCBkaWN0aW9uYXJ5IG9mIHBhcmFtZXRlcnMgdG8gdGhlaXIgdmFsdWVzXG4gKiBAcmV0dXJucyBwYXJzZWQgSlNPTiByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0PFJlc3BvbnNlPih1cmw6IHN0cmluZywgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpKTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbi8qKlxuICogTWFrZXMgYW4gSFRUUCBQT1NUIHJlcXVlc3QgdG8gdGhlIHVybCB3aXRoIHRoZSBvcHRpb25hbCBwYXJhbWV0ZXJzIGNvbnRhaW5pbmdcbiAqIHRoZSBib2R5LCB0aGVuIHBhcnNlcyB0aGUgSlNPTiByZXNwb25zZS5cbiAqIEBwYXJhbSB1cmwgQSBVUkwgdG8gcmVxdWVzdFxuICogQHBhcmFtIGJvZHkgSlNPTiBvYmplY3QgdG8gZW5jb2RlIGFuZCBzZW5kIHRvIHRoZSBzZXJ2ZXJcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb3B0aW9uYWwgZGljdGlvbmFyeSBvZiBwYXJhbWV0ZXJzIHRvIHRoZWlyIHZhbHVlc1xuICogQHJldHVybnMgcGFyc2VkIEpTT04gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3Q8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBib2R5OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZW5jb2RlSnNvbihib2R5KSxcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0Rm9ybTxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGZvcm06IEZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZm9ybSxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbi8qKlxuICogTWFrZXMgYW4gSFRUUCBQVVQgcmVxdWVzdCB0byB0aGUgdXJsIHdpdGggdGhlIG9wdGlvbmFsIHBhcmFtZXRlcnMgY29udGFpbmluZ1xuICogdGhlIGJvZHksIHRoZW4gcGFyc2VzIHRoZSBKU09OIHJlc3BvbnNlLlxuICogQHBhcmFtIHVybCBBIFVSTCB0byByZXF1ZXN0XG4gKiBAcGFyYW0gYm9keSBKU09OIG9iamVjdCB0byBlbmNvZGUgYW5kIHNlbmQgdG8gdGhlIHNlcnZlclxuICogQHBhcmFtIHBhcmFtcyBBbiBvcHRpb25hbCBkaWN0aW9uYXJ5IG9mIHBhcmFtZXRlcnMgYW5kIHRoZWlyIHZhbHVlc1xuICogQHJldHVybnMgcGFyc2VkIEpTT04gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGJvZHk6IG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBlbmNvZGVKc29uKGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHV0Rm9ybTxSZXNwb25zZT4odXJsOiBzdHJpbmcsIGZvcm06IEZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBmb3JtLFxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF0Y2g8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBib2R5OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGVuY29kZUpzb24oYm9keSksXG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZV88UmVzcG9uc2U+KHVybDogc3RyaW5nLCBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cbiIsImNvbnN0IE1JTExJU0VDT05EU19JTl9EQVkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIENyZWF0ZSBvciB1cGRhdGUgYSBjb29raWVcbiAqIEBwYXJhbSBuYW1lIG5hbWUva2V5IG9mIHRoZSBjb29raWVcbiAqIEBwYXJhbSB2YWx1ZSB2YWx1ZSB0byBzdG9yZVxuICogQHBhcmFtIGRheXMgbnVtYmVyIG9mIGRheXMgdGhlIGNvb2tpZSBpcyB2YWxpZCwgZGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgc2Vzc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29va2llKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZGF5cz86IG51bWJlcikge1xuICAgIGxldCBleHBpcmVzO1xuICAgIGlmIChkYXlzKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyAqIE1JTExJU0VDT05EU19JTl9EQVkpKTtcbiAgICAgICAgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b1VUQ1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGV4cGlyZXMgPSBcIlwiO1xuICAgIH1cbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkQ29va2llKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xuICAgIGZvciAobGV0IGMgb2YgZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKSkge1xuICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICBjID0gYy5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYy5zdWJzdHIobmFtZUVRLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDb29raWUobmFtZTogc3RyaW5nKSB7XG4gICAgY3JlYXRlQ29va2llKG5hbWUsIFwiXCIsIC0xKTtcbn1cbiIsImltcG9ydCB7IHBvc3QgfSBmcm9tIFwiLi9BcGlIZWxwZXJcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcIi4vd2lkZ2V0c1wiO1xuXG4vKiogUHJvdmlkZXMgbG9nZ2luZyBmdW5jdGlvbmFsaXR5IGZvciBjbGllbnQtc2lkZSBKYXZhU2NyaXB0IGVycm9ycy4gKi9cbmVudW0gTG9nTGV2ZWwge1xuICAgIENyaXRpY2FsID0gXCJjcml0aWNhbFwiLFxuICAgIEVycm9yID0gXCJlcnJvclwiLFxuICAgIFdhcm5pbmcgPSBcIndhcm5pbmdcIixcbiAgICBJbmZvID0gXCJpbmZvXCIsXG4gICAgRGVidWcgPSBcImRlYnVnXCIsXG59XG5cbmludGVyZmFjZSBJTG9nUmVzdWx0IHtcbiAgICBzdWNjZXNzOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuICAgIC8qKlxuICAgICAqIExvZ2dpbmcgY2xhc3MgZm9yIGNsaWVudC1zaWRlIGVycm9ycyB0aGF0IHdpbGwgYmUgcG9zdGVkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBmb3IgbG9nZ2luZyB0byB0aGUgc2FtZSBmaWxlIGFzIGFsbCBvdGhlciB2aW5vdGVjYSBsb2dzLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1vZHVsZSB0aGUgbmFtZSBvZiB0aGUgbW9kdWxlIGZyb20gd2hpY2ggdGhlIGxvZyBtZXNzYWdlcyBvcmlnaW5hdGUuXG4gICAgICogQHBhcmFtIHRvQ29uc29sZSB3aGV0aGVyIHRvIGFsc28gcHJpbnQgbWVzc2FnZXMgdG8gdGhlIGNvbnNvbGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZHVsZTogc3RyaW5nLCBwcml2YXRlIHRvQ29uc29sZSA9IGZhbHNlKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVhbnQgZm9yIGlycmVjb3ZlcmFibGUgb3IgdHJ1bHkgZXhjZXB0aW9uYWwgZXJyb3JzLiBBIHRvYXN0IHdpdGggdGhlXG4gICAgICogbG9nIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSBsb2cgd2lsbCBiZSBzZW50IGJhY2sgdG8gdGhlIHNlcnZlclxuICAgICAqIGZvciBwb3N0ZXJpdHkuXG4gICAgICovXG4gICAgcHVibGljIGxvZ0NyaXRpY2FsKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IExvZ0xldmVsLkNyaXRpY2FsO1xuICAgICAgICB0aGlzLnRvYXN0KGxldmVsLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHRvYXN0IHdpdGggdGhlIGxvZyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgbG9nIHdpbGwgYmUgc2VudFxuICAgICAqIGJhY2sgdG8gdGhlIHNlcnZlciBmb3IgcG9zdGVyaXR5LlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBMb2dMZXZlbC5FcnJvcjtcbiAgICAgICAgdGhpcy50b2FzdChsZXZlbCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSB0b2FzdCB3aXRoIHRoZSBsb2cgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIGxvZyB3aWxsIGJlIHNlbnRcbiAgICAgKiBiYWNrIHRvIHRoZSBzZXJ2ZXIgZm9yIHBvc3Rlcml0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nV2FybmluZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBMb2dMZXZlbC5XYXJuaW5nO1xuICAgICAgICB0aGlzLnRvYXN0KGxldmVsLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nSW5mbyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKExvZ0xldmVsLkluZm8sIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dEZWJ1ZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKExvZ0xldmVsLkRlYnVnLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxvZyhsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy50b0NvbnNvbGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2xldmVsLnRvVXBwZXJDYXNlKCl9ICR7bmV3IERhdGUoKX0gJHt0aGlzLm1vZHVsZX06ICR7bWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZTogSUxvZ1Jlc3VsdCA9IGF3YWl0IHBvc3QoXCIvcmVzdC9sb2dzXCIsIHtcbiAgICAgICAgICAgIGxldmVsLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSBpbnN0YW5jZW9mIE9iamVjdCA/IFwiXCIgOiBtZXNzYWdlLFxuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLm1vZHVsZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy50b2FzdChMb2dMZXZlbC5FcnJvciwgXCJGYWlsZWQgdG8gc2VuZCBjbGllbnQtc2lkZSBsb2dzIHRvIHNlcnZlci5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvYXN0KGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRvYXN0KGAke2xldmVsLnRvVXBwZXJDYXNlKCl9OiAke21lc3NhZ2V9YCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZGVsZXRlXywgZ2V0LCBJUXVlcnlQYXJhbXMsIHBhdGNoLCBwb3N0LCBwb3N0Rm9ybSwgcHV0LCBwdXRGb3JtIH0gZnJvbSBcIi4vQXBpSGVscGVyXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHsgSUNvbG9yLCBJR3JhcGUsIElHcmFwZUZvcm0sIElNb3N0Q29tbW9uUHVyY2hhc2VEYXRlLCBJUHJvZHVjZXIsIElQcm9kdWNlckZvcm0sIElQdXJjaGFzZSxcbiAgICAgICAgIElQdXJjaGFzZUNvdW50LCBJUHVyY2hhc2VGb3JtLCBJUmVnaW9uLCBJUmVnaW9uRm9ybSwgSVN0b3JlLCBJU3RvcmVGb3JtLCBJVG9wRW50aXR5LFxuICAgICAgICAgSVRvdGFsTGl0ZXJzLCBJVml0aUFyZWEsIElWaXRpQXJlYUZvcm0sIElWaXRpQXJlYVN0YXRzLCBJV2luZSwgSVdpbmVDb3VudCwgSVdpbmVGb3JtLFxuICAgICAgICAgSVdpbmVHcmFwZSwgSVdpbmVHcmFwZXNGb3JtLCBJV2luZVBhdGNoRm9ybSwgSVdpbmVUeXBlLCBJV2luZVR5cGVGb3JtIH0gZnJvbSBcIi4vUmVzdFwiO1xuaW1wb3J0IHsgSVJlc3RNb2RlbCB9IGZyb20gXCIuL1Jlc3RUeXBlc1wiO1xuaW1wb3J0IHsgSURpY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9EaWN0KG1vZGVsczogSVJlc3RNb2RlbFtdKTogSURpY3Q8c3RyaW5nIHwgbnVsbD4ge1xuICAgIGNvbnN0IHJlc3VsdDogSURpY3Q8c3RyaW5nIHwgbnVsbD4gPSB7fTtcbiAgICBtb2RlbHMuZm9yRWFjaCgobW9kZWwpID0+IHtcbiAgICAgICAgcmVzdWx0W21vZGVsLm5hbWVdID0gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgY2xhc3MgRW1wdHlSZXN1bHRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBwdWJsaWMgc3RhdGljIGlzSW5zdGFuY2UoZXJyOiBFcnJvcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZXJyLm5hbWUgPT09IHRoaXMuTkFNRTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBOQU1FID0gXCJFbXB0eVJlc3VsdEVycm9yXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IEVtcHR5UmVzdWx0RXJyb3IuTkFNRTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vbk51bGxzKG9iajogSURpY3Q8c3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IHVuZGVmaW5lZD4pOiBJUXVlcnlQYXJhbXMge1xuICAgIGNvbnN0IHE6IElRdWVyeVBhcmFtcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKG9iaikuZmlsdGVyKChrKSA9PiBCb29sZWFuKG9ialtrXSkpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgcVtrXSA9IG9ialtrXSBhcyBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuICAgIH0pO1xuICAgIHJldHVybiBxO1xufVxuXG5mdW5jdGlvbiBzaW5nbGVFbnRpdHlHZXR0ZXI8UGFyYW1zLCBSZXNwPihcbiAgICBsaXN0R2V0dGVyOiAocGFyYW1zOiBQYXJhbXMpID0+IFByb21pc2U8UmVzcFtdPixcbik6IChwYXJhbXM6IFBhcmFtcykgPT4gUHJvbWlzZTxSZXNwPiB7XG4gICAgLy8gU2hhdmUgb2ZmICdnZXQnXG4gICAgY29uc3Qgb2JqTmFtZSA9IGxpc3RHZXR0ZXIubmFtZS5zdWJzdHIoMyk7XG4gICAgcmV0dXJuIGFzeW5jIChwYXJhbXM6IFBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgbGlzdEdldHRlcihwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFJlY2VpdmVkIG1vcmUgdGhhbiBvbmUgJHtvYmpOYW1lfSByZXN1bHQgd2hlbiBvbmUgd2FzIGV4cGVjdGVkYDtcbiAgICAgICAgICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoXCJSZXN0QXBpXCIpO1xuICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0T3JDcmVhdGU8UmVxUGFyYW1zLCBSZXNwLCBGb3JtPihcbiAgICBsaXN0R2V0dGVyOiAocGFyYW1zOiBSZXFQYXJhbXMpID0+IFByb21pc2U8UmVzcFtdPixcbiAgICBjcmVhdG9yOiAoZm9ybTogRm9ybSkgPT4gUHJvbWlzZTxSZXNwPixcbik6IChwYXJhbXM6IFJlcVBhcmFtcywgZm9ybTogRm9ybSkgPT4gUHJvbWlzZTxSZXNwPiB7XG4gICAgY29uc3Qgb2JqTmFtZSA9IGxpc3RHZXR0ZXIubmFtZS5zdWJzdHIoMyk7XG4gICAgcmV0dXJuIGFzeW5jIChwYXJhbXMsIGZvcm0pID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGxpc3RHZXR0ZXIocGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdPYmogPSBhd2FpdCBjcmVhdG9yKGZvcm0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBSZWNlaXZlZCBtb3JlIHRoYW4gb25lICR7b2JqTmFtZX0gcmVzdWx0IHdoZW4gb25lIHdhcyBleHBlY3RlZGA7XG4gICAgICAgIG5ldyBMb2dnZXIoXCJSZXN0QXBpXCIpLmxvZ0Vycm9yKG1lc3NhZ2UpO1xuICAgICAgICB0aHJvdyBFcnJvcihtZXNzYWdlKTtcbiAgICB9O1xufVxuXG4vKiBDT0xPUlMgKi9cbmludGVyZmFjZSBJR2V0Q29sb3JQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2xvcnMoeyBpZCwgbmFtZSB9OiBJR2V0Q29sb3JQYXJhbXMpOiBQcm9taXNlPElDb2xvcltdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUgfSk7XG4gICAgY29uc3QgY29sb3JzOiBJQ29sb3JbXSA9IGF3YWl0IGdldChcIi9yZXN0L2NvbG9yc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRW1wdHlSZXN1bHRFcnJvcihcIkVtcHR5IHJlc3VsdCByZXR1cm5lZCBmb3IgY29sb3JcIik7XG4gICAgfVxuICAgIHJldHVybiBjb2xvcnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb2xvciA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRDb2xvcnMpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wQ29sb3JzKCk6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L2NvbG9ycy90b3BcIik7XG59XG5cbi8qIEdSQVBFUyAqL1xuaW50ZXJmYWNlIElHZXRHcmFwZXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHcmFwZXMoeyBpZCwgbmFtZSB9OiBJR2V0R3JhcGVzUGFyYW1zKTogUHJvbWlzZTxJR3JhcGVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lIH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9ncmFwZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRHcmFwZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRHcmFwZXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlR3JhcGUgPSBnZXRPckNyZWF0ZShnZXRHcmFwZXMsIGNyZWF0ZUdyYXBlKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUdyYXBlKGdyYXBlOiBJR3JhcGVGb3JtKTogUHJvbWlzZTxJR3JhcGU+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L2dyYXBlc1wiLCBncmFwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVHcmFwZShpZDogbnVtYmVyLCBncmFwZTogSUdyYXBlRm9ybSk6IFByb21pc2U8SUdyYXBlPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3QvZ3JhcGVzLyR7aWR9YCwgZ3JhcGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wR3JhcGVzKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L2dyYXBlcy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFBST0RVQ0VSUyAqL1xuaW50ZXJmYWNlIElHZXRQcm9kdWNlcnNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcmVnaW9uSWQ/OiBudW1iZXI7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZS1sZW5ndGhcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWNlcnMoe2lkLCBuYW1lLCByZWdpb25JZH06IElHZXRQcm9kdWNlcnNQYXJhbXMpOiBQcm9taXNlPElQcm9kdWNlcltdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtpZCwgbmFtZSwgcmVnaW9uX2lkOiByZWdpb25JZH0pO1xuICAgIGNvbnN0IHByb2R1Y2VyczogSVByb2R1Y2VyW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9wcm9kdWNlcnNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHByb2R1Y2Vycztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y2VyID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFByb2R1Y2Vycyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVQcm9kdWNlciA9IGdldE9yQ3JlYXRlKGdldFByb2R1Y2VycywgY3JlYXRlUHJvZHVjZXIpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjZXIocHJvZHVjZXI6IElQcm9kdWNlckZvcm0pOiBQcm9taXNlPElQcm9kdWNlcj4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvcHJvZHVjZXJzXCIsIHByb2R1Y2VyKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y2VyKHByb2R1Y2VyOiBJUHJvZHVjZXIpOiBQcm9taXNlPElQcm9kdWNlcj4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3Byb2R1Y2Vycy8ke3Byb2R1Y2VyLmlkfWAsIHByb2R1Y2VyKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y2VyKGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gZGVsZXRlXyhgL3Jlc3QvcHJvZHVjZXJzLyR7aWR9YCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3BQcm9kdWNlcnMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHJvZHVjZXJzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogUFVSQ0hBU0VTICovXG5pbnRlcmZhY2UgSUdldFB1cmNoYXNlc1BhcmFtcyB7XG4gICAgd2luZUlkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHVyY2hhc2VzKHt3aW5lSWR9OiBJR2V0UHVyY2hhc2VzUGFyYW1zKTogUHJvbWlzZTxJUHVyY2hhc2VbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IHdpbmVfaWQ6IHdpbmVJZCB9KTtcbiAgICBjb25zdCBwdXJjaGFzZXMgPSBhd2FpdCBnZXQ8SVB1cmNoYXNlW10+KFwiL3Jlc3QvcHVyY2hhc2VzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiBwdXJjaGFzZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQdXJjaGFzZShwdXJjaGFzZTogSVB1cmNoYXNlRm9ybSk6IFByb21pc2U8SVB1cmNoYXNlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9wdXJjaGFzZXNcIiwgcHVyY2hhc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHVyY2hhc2UoaWQ6IG51bWJlciwgcHVyY2hhc2U6IElQdXJjaGFzZUZvcm0pOiBQcm9taXNlPElQdXJjaGFzZT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3B1cmNoYXNlcy8ke2lkfWAsIHB1cmNoYXNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVB1cmNoYXNlKGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gZGVsZXRlXyhgL3Jlc3QvcHVyY2hhc2VzLyR7aWR9YCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNb3N0Q29tbW9uUHVyY2hhc2VEYXRlKCk6IFByb21pc2U8SU1vc3RDb21tb25QdXJjaGFzZURhdGU+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHVyY2hhc2VzL21vc3QtY29tbW9uLXB1cmNoYXNlLWRhdGVcIik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb3RhbExpdGVycygpOiBQcm9taXNlPElUb3RhbExpdGVycz4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wdXJjaGFzZXMvdG90YWwtbGl0ZXJzXCIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHVyY2hhc2VDb3VudCgpOiBQcm9taXNlPElQdXJjaGFzZUNvdW50PiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3B1cmNoYXNlcy9jb3VudFwiKTtcbn1cblxuLyogUkVHSU9OUyAqL1xuaW50ZXJmYWNlIElHZXRSZWdpb25QYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcHJvZHVjZXJOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVnaW9ucyh7IGlkLCBuYW1lLCBwcm9kdWNlck5hbWUgfTogSUdldFJlZ2lvblBhcmFtcyk6IFByb21pc2U8SVJlZ2lvbltdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUsIHByb2R1Y2VyX25hbWU6IHByb2R1Y2VyTmFtZSB9KTtcbiAgICBjb25zdCByZWdpb25zOiBJUmVnaW9uW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9yZWdpb25zXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiByZWdpb25zO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UmVnaW9uID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFJlZ2lvbnMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlUmVnaW9uID0gZ2V0T3JDcmVhdGUoZ2V0UmVnaW9ucywgY3JlYXRlUmVnaW9uKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlZ2lvbihyZWdpb246IElSZWdpb25Gb3JtKTogUHJvbWlzZTxJUmVnaW9uPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9yZWdpb25zXCIsIHJlZ2lvbik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZWdpb24ocmVnaW9uOiBJUmVnaW9uKTogUHJvbWlzZTxJUmVnaW9uPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3QvcmVnaW9ucy8ke3JlZ2lvbi5pZH1gLCByZWdpb24pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wUmVnaW9ucyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9yZWdpb25zL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogU1RPUkVTICovXG5pbnRlcmZhY2UgSUdldFN0b3JlUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RvcmVzKHtpZCwgbmFtZX06IElHZXRTdG9yZVBhcmFtcyk6IFByb21pc2U8SVN0b3JlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2lkLCBuYW1lfSk7XG4gICAgY29uc3Qgc3RvcmVzOiBJU3RvcmVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3N0b3Jlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gc3RvcmVzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RvcmUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0U3RvcmVzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVN0b3JlID0gZ2V0T3JDcmVhdGUoZ2V0U3RvcmVzLCBjcmVhdGVTdG9yZSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTdG9yZShzdG9yZTogSVN0b3JlRm9ybSk6IFByb21pc2U8SVN0b3JlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9zdG9yZXNcIiwgc3RvcmUpO1xufVxuXG4vKiBWSVRJIEFSRUFTICovXG5pbnRlcmZhY2UgSUdldFZpdGlBcmVhc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICByZWdpb25OYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Vml0aUFyZWFzKFxuICAgIHsgaWQsIG5hbWUsIHJlZ2lvbk5hbWUgfTogSUdldFZpdGlBcmVhc1BhcmFtcyxcbik6IFByb21pc2U8SVZpdGlBcmVhW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSwgcmVnaW9uX25hbWU6IHJlZ2lvbk5hbWUgfSk7XG4gICAgY29uc3Qgdml0aUFyZWFzOiBJVml0aUFyZWFbXSA9IGF3YWl0IGdldChcIi9yZXN0L3ZpdGktYXJlYXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHZpdGlBcmVhcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFZpdGlBcmVhID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFZpdGlBcmVhcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVWaXRpQXJlYSA9IGdldE9yQ3JlYXRlKGdldFZpdGlBcmVhcywgY3JlYXRlVml0aUFyZWEpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVml0aUFyZWEodml0aUFyZWE6IElWaXRpQXJlYUZvcm0pOiBQcm9taXNlPElWaXRpQXJlYT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvdml0aS1hcmVhc1wiLCB2aXRpQXJlYSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVWaXRpQXJlYSh2aXRpQXJlYTogSVZpdGlBcmVhKTogUHJvbWlzZTxJVml0aUFyZWE+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC92aXRpLWFyZWFzLyR7dml0aUFyZWEuaWR9YCwgdml0aUFyZWEpO1xufVxuXG5pbnRlcmZhY2UgSUdldFZpdGlBcmVhU3RhdHNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIHJlZ2lvbklkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Vml0aUFyZWFTdGF0cyhcbiAgICB7IGlkLCByZWdpb25JZCB9OiBJR2V0Vml0aUFyZWFTdGF0c1BhcmFtcyxcbik6IFByb21pc2U8SVZpdGlBcmVhU3RhdHNbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCByZWdpb25faWQ6IHJlZ2lvbklkIH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC92aXRpLWFyZWFzL3N0YXRzXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wVml0aUFyZWFzKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3ZpdGktYXJlYXMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBXSU5FUyAqL1xuaW50ZXJmYWNlIElHZXRXaW5lc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgcHJvZHVjZXJJZD86IG51bWJlcjtcbiAgICByZWdpb25JZD86IG51bWJlcjtcbiAgICB2aXRpQXJlYUlkPzogbnVtYmVyO1xuICAgIHdpbmVUeXBlSWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lcyhcbiAgICB7IGlkLCBwcm9kdWNlcklkLCByZWdpb25JZCwgdml0aUFyZWFJZCwgd2luZVR5cGVJZCB9OiBJR2V0V2luZXNQYXJhbXMsXG4pOiBQcm9taXNlPElXaW5lW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe1xuICAgICAgICBpZCwgcmVnaW9uX2lkOiByZWdpb25JZCwgcHJvZHVjZXJfaWQ6IHByb2R1Y2VySWQsXG4gICAgICAgIHZpdGlfYXJlYV9pZDogdml0aUFyZWFJZCwgd2luZV90eXBlX2lkOiB3aW5lVHlwZUlkLFxuICAgIH0pO1xuICAgIGNvbnN0IHdpbmVzOiBJV2luZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvd2luZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHdpbmVzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0V2luZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRXaW5lcyk7XG5cbmNvbnN0IGNyZWF0ZVdpbmVIdHRwRm9ybSA9ICh3aW5lOiBJV2luZUZvcm0sIGZpbGU6IEZpbGUgfCBudWxsKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm0uYXBwZW5kKFwid2luZV9mb3JtXCIsIG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeSh3aW5lKV0sIHt0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIn0pKTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgICBmb3JtLmFwcGVuZChcImltYWdlXCIsIGZpbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5lKHdpbmU6IElXaW5lRm9ybSwgZmlsZTogRmlsZSB8IG51bGwpOiBQcm9taXNlPElXaW5lPiB7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVdpbmVIdHRwRm9ybSh3aW5lLCBmaWxlKTtcbiAgICByZXR1cm4gcG9zdEZvcm0oXCIvcmVzdC93aW5lc1wiLCBmb3JtKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdpbmUoaWQ6IG51bWJlciwgd2luZTogSVdpbmVGb3JtLCBmaWxlOiBGaWxlIHwgbnVsbCk6IFByb21pc2U8SVdpbmU+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlV2luZUh0dHBGb3JtKHdpbmUsIGZpbGUpO1xuICAgIHJldHVybiBwdXRGb3JtKGAvcmVzdC93aW5lcy8ke2lkfWAsIGZvcm0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFydFVwZGF0ZVdpbmUoaWQ6IG51bWJlciwgd2luZTogSVdpbmVQYXRjaEZvcm0pOiBQcm9taXNlPElXaW5lPiB7XG4gICAgcmV0dXJuIHBhdGNoKGAvcmVzdC93aW5lcy8ke2lkfWAsIHdpbmUpO1xufVxuXG5pbnRlcmZhY2UgSVNlYXJjaFdpbmVzUGFyYW1zIHtcbiAgICBjb2xvckxpa2U/OiBzdHJpbmc7XG4gICAgd2luZVR5cGVMaWtlPzogc3RyaW5nO1xuICAgIHByb2R1Y2VyTGlrZT86IHN0cmluZztcbiAgICByZWdpb25MaWtlPzogc3RyaW5nO1xuICAgIHZpdGlBcmVhTGlrZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFdpbmVzKFxuICAgIHsgY29sb3JMaWtlLCB3aW5lVHlwZUxpa2UsIHByb2R1Y2VyTGlrZSwgcmVnaW9uTGlrZSwgdml0aUFyZWFMaWtlIH06IElTZWFyY2hXaW5lc1BhcmFtcyxcbik6IFByb21pc2U8SVdpbmVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7XG4gICAgICAgIGNvbG9yX2xpa2U6IGNvbG9yTGlrZSwgd2luZV90eXBlX2xpa2U6IHdpbmVUeXBlTGlrZSwgcHJvZHVjZXJfbGlrZTogcHJvZHVjZXJMaWtlLFxuICAgICAgICByZWdpb25fbGlrZTogcmVnaW9uTGlrZSwgdml0aV9hcmVhX2xpa2U6IHZpdGlBcmVhTGlrZSxcbiAgICB9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvd2luZXMvc2VhcmNoXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZVZhcmlldGllcygpOiBQcm9taXNlPElXaW5lQ291bnQ+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvd2luZXMvY291bnRcIik7XG59XG5cbi8qIFdJTkUgR1JBUEVTICovXG5pbnRlcmZhY2UgSUdldFdpbmVHcmFwZXNQYXJhbXMge1xuICAgIHdpbmVJZD86IG51bWJlcjtcbiAgICBncmFwZUlkPzogbnVtYmVyO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmUtbGVuZ3RoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZUdyYXBlcyh7IHdpbmVJZCwgZ3JhcGVJZCB9OiBJR2V0V2luZUdyYXBlc1BhcmFtcyk6IFByb21pc2U8SVdpbmVHcmFwZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgd2luZV9pZDogd2luZUlkLCBncmFwZV9pZDogZ3JhcGVJZCB9KTtcbiAgICBjb25zdCB3aW5lR3JhcGVzOiBJV2luZUdyYXBlW10gPSBhd2FpdCBnZXQoXCIvcmVzdC93aW5lLWdyYXBlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gd2luZUdyYXBlcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmVHcmFwZXMod2luZUdyYXBlczogSVdpbmVHcmFwZXNGb3JtKTogUHJvbWlzZTxJV2luZUdyYXBlW10+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3dpbmUtZ3JhcGVzXCIsIHdpbmVHcmFwZXMpO1xufVxuXG4vKiBXSU5FIFRZUEVTICovXG5pbnRlcmZhY2UgSUdldFdpbmVUeXBlc1BhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVUeXBlcyh7IGlkLCBuYW1lIH06IElHZXRXaW5lVHlwZXNQYXJhbXMpOiBQcm9taXNlPElXaW5lVHlwZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUgfSk7XG4gICAgY29uc3Qgd2luZVR5cGVzOiBJV2luZVR5cGVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3dpbmUtdHlwZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHdpbmVUeXBlcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFdpbmVUeXBlID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFdpbmVUeXBlcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVXaW5lVHlwZSA9IGdldE9yQ3JlYXRlKGdldFdpbmVUeXBlcywgY3JlYXRlV2luZVR5cGUpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZVR5cGUod2luZVR5cGU6IElXaW5lVHlwZUZvcm0pOiBQcm9taXNlPElXaW5lVHlwZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvd2luZS10eXBlc1wiLCB3aW5lVHlwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVXaW5lVHlwZSh3aW5lVHlwZTogSVdpbmVUeXBlKTogUHJvbWlzZTxJV2luZVR5cGU+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC93aW5lLXR5cGVzLyR7d2luZVR5cGUuaWR9YCwgd2luZVR5cGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wV2luZVR5cGVzKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3dpbmUtdHlwZXMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuIiwiLyoqIEJhc2ljIHR5cGUgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgcmVzcG9uc2UgSlNPTiBvZiBtYW55IGFzeW5jaHJvbm91cyByZXF1ZXN0cy4gKi9cbmltcG9ydCB7IElSZXN0TW9kZWwgfSBmcm9tIFwiLi9SZXN0VHlwZXNcIjtcblxuLyoqXG4gKiBLZXktdmFsdWUgc3RvcmUgd2hlcmUgdGhlIGtleSBtdXN0IGJlIGEgc3RyaW5nLCBidXQgdGhlIHZhbHVlIGlzIG9mIGFueSB0eXBlXG4gKiBULlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElEaWN0PFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBvYmplY3RzIHRvIGEgc2luZ2xlIG9iamVjdCBvZiBuYW1lcyB0byBudWxsIGZvciB1c2Ugd2l0aCBtYXRlcmlhbGl6ZVxuICogYXV0b2NvbXBsZXRlLlxuICogQHBhcmFtIG9iamVjdHMgQW4gYXJyYXkgb2YgUkVTVCBtb2RlbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RNb2RlbHNUb05hbWVEaWN0KG9iamVjdHM6IElSZXN0TW9kZWxbXSk6IElEaWN0PG51bGw+IHtcbiAgICBjb25zdCBkaWN0OiBJRGljdDxudWxsPiA9IHt9O1xuICAgIG9iamVjdHMubWFwKChvYmopID0+IHtcbiAgICAgICAgZGljdFtvYmoubmFtZV0gPSBudWxsO1xuICAgIH0pO1xuICAgIHJldHVybiBkaWN0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGFuIDgtZGlnaXQgbnVtYmVyIG9mIGZvcm1hdCAneXl5eW1tZGQnIHRvIGEgRGF0ZSBvYmplY3QuXG4gKiBAcGFyYW0gbnVtIGEgZGF0ZSBudW1iZXIgb2YgZm9ybWF0ICd5eXl5bW1kZCdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG51bVRvRGF0ZShudW06IG51bWJlcik6IERhdGUge1xuICAgIGNvbnN0IHN0ck51bSA9IGAke251bX1gO1xuICAgIGlmIChzdHJOdW0ubGVuZ3RoICE9PSA4KSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBkYXRlIG51bWJlciAnJHtzdHJOdW19J2ApO1xuICAgIH1cbiAgICBjb25zdCB5ZWFyID0gc3RyTnVtLnN1YnN0cigwLCA0KTtcbiAgICBjb25zdCBtb250aCA9IHN0ck51bS5zdWJzdHIoNCwgMik7XG4gICAgY29uc3QgZGF5ID0gc3RyTnVtLnN1YnN0cig2LCAyKTtcbiAgICAvLyBKUyBtb250aHMgYXJlIDAtYmFzZWRcbiAgICByZXR1cm4gbmV3IERhdGUocGFyc2VJbnQoeWVhciwgMTApLCBwYXJzZUludChtb250aCwgMTApIC0gMSwgcGFyc2VJbnQoZGF5LCAxMCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVRvTnVtKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKiAxMF8wMDAgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkgKiAxMDAgKyBkYXRlLmdldERhdGUoKTtcbn1cblxuZXhwb3J0IGNvbnN0IEVOX0RBU0g6IHN0cmluZyA9IFwi4oCTXCI7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZGVmYXVsdCB2aW50YWdlIHllYXIsIHdoaWNoIGlzIHR3byB5ZWFycyBwcmlvciB0byB0aGUgY3VycmVudFxuICogeWVhci4gVGhpcyBmdW5jdGlvbiBkdXBsaWNhdGVzIHRoZSBQeXRob24gZnVuY3Rpb25cbiAqIHZpbm90ZWNhLnV0aWxzLmRlZmF1bHRfdmludGFnZV95ZWFyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VmludGFnZVllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYW4gb2JqZWN0IGlzIGVtcHR5LCBpLmUuIGhhcyBubyBrZXlzLlxuICogQHBhcmFtIG9iaiBBbiBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkob2JqOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5cbi8qKlxuICogUmV0dXJucyBzIHdpdGggdGhlIGZpcnN0IGxldHRlciBjYXBpdGFsaXplZC5cbiAqIEBwYXJhbSBzIEEgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPiAwID8gc1swXS50b1VwcGVyQ2FzZSgpICsgcy5zdWJzdHJpbmcoMSkgOiBcIlwiO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgZGlzcGxheSBuYW1lIHRvIGFuIGh0bWwgaWRcbiAqIEBwYXJhbSBuYW1lIEEgY29tcG9uZW50IGRpc3BsYXkgbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZVRvSWQobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmFtZS5yZXBsYWNlKC8oXFxzKSsvZywgXCItXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIG1heGltdW0gZWxlbWVudCBieSBvbmUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHR5cGUgb2YgZWxlbWVudFxuICogQHBhcmFtIGFyciBBbiBhcnJheSBvZiBvYmpjZWN0c1xuICogQHBhcmFtIGFjY2Vzc29yIEEgZnVuY3Rpb24gZm9yIGFjY2Vzc2luZyBhIG51bWJlciBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4Qnk8VD4oYXJyOiBUW10sIGFjY2Vzc29yOiAoZWxlbTogVCkgPT4gbnVtYmVyKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IG1heEVsZW06IFQgfCB1bmRlZmluZWQ7XG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eTtcbiAgICBmb3IgKGNvbnN0IGVsZW0gb2YgYXJyKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGFjY2Vzc29yKGVsZW0pO1xuICAgICAgICBpZiAodmFsID4gbWF4VmFsKSB7XG4gICAgICAgICAgICBtYXhFbGVtID0gZWxlbTtcbiAgICAgICAgICAgIG1heFZhbCA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF4RWxlbTtcbn1cblxuLyoqXG4gKiBTdW1zIGFuIGFycmF5IG9mIG9iamVjdHMgYnkgb25lIG9mIHRoZSBvYmplY3RzJyBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIGFyciBBbiBhcnJheSBvZiBvYmplY3RzXG4gKiBAcGFyYW0gYWNjZXNzb3IgQSBmdW5jdGlvbiBmb3IgYWNjZXNzaW5nIG9uZSBvZiB0aGUgb2JqZWN0cycgcHJvcGVydGllc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3VtQnk8VD4oYXJyOiBUW10sIGFjY2Vzc29yOiAoZWxlbTogVCkgPT4gbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGNvbnN0IGVsZW0gb2YgYXJyKSB7XG4gICAgICAgIHN1bSArPSBhY2Nlc3NvcihlbGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbn1cblxuLyoqXG4gKiBDb21wYXJlcyB0d28gb2JqZWN0cyBmb3IgZGVlcCBlcXVhbGl0eS5cbiAqIEBwYXJhbSBhIEFuIG9iamVjdFxuICogQHBhcmFtIGIgQW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmVFcXVhbChhOiBhbnksIGI6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgY29uc3QgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcbiAgICBpZiAoYUtleXMubGVuZ3RoICE9PSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGsgb2YgYUtleXMpIHtcbiAgICAgICAgaWYgKGFba10gIT09IGJba10pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuaW50ZXJmYWNlIElSYW5nZUFyZ3Mge1xuICAgIHN0YXJ0PzogbnVtYmVyO1xuICAgIHN0b3A/OiBudW1iZXI7XG4gICAgc3RlcD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhYmxlIHJhbmdlIG9mIG51bWJlcnNvbkNsaWNrLlxuICogQHBhcmFtIHN0YXJ0IEZpcnN0IG51bWJlciBvZiB0aGUgcmFuZ2VcbiAqIEBwYXJhbSBzdG9wIEVuZCBvZiB0aGUgcmFuZ2UgKG5vbi1pbmNsdXNpdmUpXG4gKiBAcGFyYW0gc3RlcCBJbmNyZW1lbnQgb2YgdGhlIHJhbmdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogcmFuZ2UoeyBzdGFydCwgc3RvcCwgc3RlcCB9OiBJUmFuZ2VBcmdzKTogSXRlcmFibGVJdGVyYXRvcjxudW1iZXI+IHtcbiAgICBzdGVwID0gc3RlcCB8fCAxO1xuICAgIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgICBzdG9wID0gc3RvcCB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICAgICAgeWllbGQgaTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbWFnZUV4aXN0cyhpbWFnZVVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpbWFnZVVybCwge21ldGhvZDogXCJIRUFEXCJ9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZUFuZFR5cGUobmFtZTogc3RyaW5nIHwgbnVsbCwgd2luZVR5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAkeyhuYW1lID8gbmFtZSArIFwiIFwiIDogXCJcIil9JHt3aW5lVHlwZX1gO1xufVxuXG4vLyBUT0RPOiBtb3ZlIHRvIHVzZSBSZWFjdCByb3V0ZXIgb3Igc29tZXRoaW5nIHNpbWlsYXJcbmV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdCh1cmw6IHN0cmluZykge1xuICAgIGxvY2F0aW9uLmhyZWYgPSB1cmw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWQoZnVuOiAoKSA9PiB2b2lkKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuKTtcbn1cbiIsImltcG9ydCB7IEF1dG9jb21wbGV0ZSwgRHJvcGRvd24sIFNpZGVuYXYgfSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgeyBJRGljdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbnR5cGUgT25DaGFuZ2UgPSAoZTogc3RyaW5nKSA9PiB2b2lkO1xuXG4vKiogU2V0dXAgYXV0b2NvbXBsZXRpb24gd2l0aCBwcm92aWRlZCBjb21wbGV0aW9uIG9wdGlvbnMuICovXG5leHBvcnQgZnVuY3Rpb24gYXV0b2NvbXBsZXRlKGVsZW06IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25zOiBJRGljdDxzdHJpbmcgfCBudWxsPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IE9uQ2hhbmdlLCBtaW5MZW5ndGggPSAxLCBsaW1pdCA9IDUpIHtcbiAgICBpZiAoZWxlbS5jdXJyZW50KSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgICAgICBuZXcgQXV0b2NvbXBsZXRlKGVsZW0uY3VycmVudCwge1xuICAgICAgICAgICAgZGF0YTogY29tcGxldGlvbnMsXG4gICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIG1pbkxlbmd0aCxcblxuICAgICAgICAgICAgb25BdXRvY29tcGxldGU6IGZ1bmN0aW9uKHRoaXMsIHRleHQpIHsgIC8vIHRzbGludDpkaXNhYmxlLWxpbmUgb2JqZWN0LWxpdGVyYWwtc2hvcnRoYW5kXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UodGV4dCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gRml4IG92ZXJsYXBwdGluZyB0ZXh0IGJ1Z1xuICAgICAgICBNLnVwZGF0ZVRleHRGaWVsZHMoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlTmF2YmFyVGFiKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG4vKiogRW5hYmxlcyBuYXZiYXIgbWVudXMuIFNob3VsZCBiZSBjYWxsZWQgb24gZXZlcnkgcGFnZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYXZiYXIoYWN0aXZlTmF2VGFiSWQ/OiBzdHJpbmcpIHtcbiAgICBpZiAoYWN0aXZlTmF2VGFiSWQpIHtcbiAgICAgICAgYWN0aXZhdGVOYXZiYXJUYWIoYWN0aXZlTmF2VGFiSWQpO1xuICAgIH1cbiAgICBjb25zdCBzaWRlTmF2RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZW5hdlwiKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICBuZXcgU2lkZW5hdihzaWRlTmF2RWxlbSEpO1xuICAgIGNvbnN0IGRyb3Bkb3duRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tdHJpZ2dlclwiKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICBuZXcgRHJvcGRvd24oZHJvcGRvd25FbGVtISk7XG59XG5cbi8qKiBTaW1wbGlmaWVzIGRpc3BsYXlpbmcgb2YgdG9hc3QgbWVzc2FnZXMgdG8gdXNlciAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvYXN0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIE0udG9hc3Qoe1xuICAgICAgICBjbGFzc2VzOiBcInJlZC1iZ1wiLFxuICAgICAgICBkaXNwbGF5TGVuZ3RoOiAxMDAwMCxcbiAgICAgICAgaHRtbDogbWVzc2FnZSxcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=