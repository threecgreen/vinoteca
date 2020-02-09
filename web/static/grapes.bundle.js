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
/******/ 		"grapes": 0
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
/******/ 	deferredModules.push([11,"vendors"]);
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

/***/ "./front_end/grapes/EditGrape.tsx":
/*!****************************************!*\
  !*** ./front_end/grapes/EditGrape.tsx ***!
  \****************************************/
/*! exports provided: EditGrape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGrape", function() { return EditGrape; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Modal */ "./components/Modal.tsx");
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TextInput */ "./components/TextInput.tsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");





const EditGrape = ({ name, onCancelClick, onSaveClick }) => {
    const [text, setText] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(name);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_1__["Modal"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_1__["ModalContent"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Edit grape"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextInput__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { name: "Name", className: "", value: text, onChange: setText }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_4__["CancelOrConfirmBtns"], { onConfirmClick: () => onSaveClick({ name: text }), onCancelClick: onCancelClick }))));
};
EditGrape.displayName = EditGrape.name;


/***/ }),

/***/ "./front_end/grapes/GrapesApp.tsx":
/*!****************************************!*\
  !*** ./front_end/grapes/GrapesApp.tsx ***!
  \****************************************/
/*! exports provided: GrapesApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrapesApp", function() { return GrapesApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Grid */ "./components/Grid.tsx");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Preloader */ "./components/Preloader.tsx");
/* harmony import */ var _lib_Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/Logger */ "./lib/Logger.ts");
/* harmony import */ var _lib_RestApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/RestApi */ "./lib/RestApi.ts");
/* harmony import */ var _EditGrape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditGrape */ "./front_end/grapes/EditGrape.tsx");
/* harmony import */ var _GrapesList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GrapesList */ "./front_end/grapes/GrapesList.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state */ "./front_end/grapes/state.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const GrapesApp = (_props) => {
    var _a, _b;
    const logger = new _lib_Logger__WEBPACK_IMPORTED_MODULE_3__["default"](GrapesApp.name);
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(_state__WEBPACK_IMPORTED_MODULE_7__["grapeStateReducer"], Object(_state__WEBPACK_IMPORTED_MODULE_7__["initGrapeState"])());
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        function fetchGrapes() {
            return __awaiter(this, void 0, void 0, function* () {
                const grapes = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_4__["getGrapes"])({});
                dispatch({ type: "setGrapes", grapes });
            });
        }
        fetchGrapes();
    }, []);
    const onEditClick = (id) => dispatch({ type: "setToEdit", id });
    const onCancelClick = () => dispatch({ type: "setToDisplay" });
    const onSaveClick = (grape) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch({ type: "setToDisplay" });
        if (state.mode.type === "edit") {
            const id = state.mode.id;
            try {
                const updatedGrape = yield Object(_lib_RestApi__WEBPACK_IMPORTED_MODULE_4__["updateGrape"])(id, grape);
                dispatch({ type: "setGrapes", grapes: state.grapes.map((g) => g.id === id ? updatedGrape : g) });
            }
            catch (e) {
                logger.logWarning(`Failed to save grape change for grape with id ${id}: ${e.message}`);
            }
        }
    });
    if (state.grapes.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_2__["Preloader"], null);
    }
    let editComponent = null;
    if (state.mode.type === "edit") {
        const id = state.mode.id;
        editComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditGrape__WEBPACK_IMPORTED_MODULE_5__["EditGrape"], { name: (_b = (_a = state.grapes.find((g) => g.id === id)) === null || _a === void 0 ? void 0 : _a.name, (_b !== null && _b !== void 0 ? _b : "")), onCancelClick: onCancelClick, onSaveClick: onSaveClick }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "container" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_1__["Row"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { s: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "page-title" }, "Grapes"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GrapesList__WEBPACK_IMPORTED_MODULE_6__["GrapesList"], { grapes: state.grapes, onEditClick: onEditClick }),
                editComponent))));
};
GrapesApp.displayName = GrapesApp.name;


/***/ }),

/***/ "./front_end/grapes/GrapesList.tsx":
/*!*****************************************!*\
  !*** ./front_end/grapes/GrapesList.tsx ***!
  \*****************************************/
/*! exports provided: GrapesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrapesList", function() { return GrapesList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TableHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TableHeader */ "./components/TableHeader.tsx");
/* harmony import */ var _GrapesListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GrapesListItem */ "./front_end/grapes/GrapesListItem.tsx");



var SortingValue;
(function (SortingValue) {
    SortingValue[SortingValue["Name"] = 0] = "Name";
    SortingValue[SortingValue["Wines"] = 1] = "Wines";
})(SortingValue || (SortingValue = {}));
const GrapesList = ({ grapes, onEditClick }) => {
    const [sortingValue, setSortingValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(SortingValue.Name);
    const [isAscending, setIsAscending] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
    const sortedGrapes = () => {
        const ascendingMultiplier = isAscending ? 1 : -1;
        switch (sortingValue) {
            case SortingValue.Name:
                return grapes.sort((g1, g2) => {
                    return g1.name.localeCompare(g2.name) * ascendingMultiplier;
                });
            case SortingValue.Wines:
                return grapes.sort((g1, g2) => {
                    return (g1.wineCount || 0) > (g2.wineCount || 0) ? -ascendingMultiplier : ascendingMultiplier;
                });
            default:
                return grapes;
        }
    };
    const onHeaderClick = (e, clickedHeader) => {
        e.preventDefault();
        if (sortingValue === clickedHeader) {
            setIsAscending(!isAscending);
        }
        else {
            setIsAscending(true);
            setSortingValue(clickedHeader);
        }
    };
    const sortingStateForHeader = (header) => {
        if (sortingValue === header) {
            return isAscending ? _components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["SortingState"].Ascending : _components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["SortingState"].Descending;
        }
        return _components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["SortingState"].NotSorted;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "responsive highlight condensed" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: "headers" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["TableHeader"], { sortingState: sortingStateForHeader(SortingValue.Name), onClick: (e) => onHeaderClick(e, SortingValue.Name) }, "Name"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["TableHeader"], { sortingState: sortingStateForHeader(SortingValue.Wines), onClick: (e) => onHeaderClick(e, SortingValue.Wines), isNumCol: true }, "Wines"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Edit"))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, sortedGrapes().map((grape) => {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GrapesListItem__WEBPACK_IMPORTED_MODULE_2__["GrapesListItem"], { key: grape.id, grape: grape, onEditClick: onEditClick }));
        }))));
};
GrapesList.displayName = GrapesList.name;


/***/ }),

/***/ "./front_end/grapes/GrapesListItem.tsx":
/*!*********************************************!*\
  !*** ./front_end/grapes/GrapesListItem.tsx ***!
  \*********************************************/
/*! exports provided: GrapesListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrapesListItem", function() { return GrapesListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./components/Buttons.tsx");
/* harmony import */ var _components_MaterialIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MaterialIcon */ "./components/MaterialIcon.tsx");
/* harmony import */ var _components_TableCells__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TableCells */ "./components/TableCells.tsx");




const GrapesListItem = ({ grape, onEditClick }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_3__["TextCell"], { text: grape.name }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableCells__WEBPACK_IMPORTED_MODULE_3__["NumCell"], { num: grape.wineCount, maxDecimals: 0 }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["FloatingBtn"], { onClick: () => onEditClick(grape.id), classes: ["small", "red-bg"] },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MaterialIcon__WEBPACK_IMPORTED_MODULE_2__["MaterialIcon"], { iconName: "edit" })))));
};
GrapesListItem.displayName = GrapesListItem.name;


/***/ }),

/***/ "./front_end/grapes/grapes.ts":
/*!************************************!*\
  !*** ./front_end/grapes/grapes.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/widgets */ "./lib/widgets.ts");
/* harmony import */ var _GrapesApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GrapesApp */ "./front_end/grapes/GrapesApp.tsx");




Object(_lib_widgets__WEBPACK_IMPORTED_MODULE_2__["navbar"])();
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_GrapesApp__WEBPACK_IMPORTED_MODULE_3__["GrapesApp"]), document.getElementById("grapes-container"));


/***/ }),

/***/ "./front_end/grapes/state.ts":
/*!***********************************!*\
  !*** ./front_end/grapes/state.ts ***!
  \***********************************/
/*! exports provided: initGrapeState, grapeStateReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGrapeState", function() { return initGrapeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grapeStateReducer", function() { return grapeStateReducer; });
const initGrapeState = () => ({
    grapes: [],
    mode: { type: "display" },
});
const grapeStateReducer = (state, action) => {
    switch (action.type) {
        case "setToDisplay":
            return Object.assign(Object.assign({}, state), { mode: { type: "display" } });
        case "setToEdit":
            return Object.assign(Object.assign({}, state), { mode: { type: "edit", id: action.id } });
        case "setGrapes":
            return Object.assign(Object.assign({}, state), { grapes: action.grapes });
        default:
            return state;
    }
};


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

/***/ 11:
/*!******************************************!*\
  !*** multi ./front_end/grapes/grapes.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carter/git/vinoteca/vinoteca/front_end/grapes/grapes.ts */"./front_end/grapes/grapes.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25zLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbG9ySW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXRlcmlhbEljb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9kYWwudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJlbG9hZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlbGVjdElucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NwZWNpYWxDaGFyQnRuLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NwZWNpYWxDaGFycy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZUNlbGxzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYmxlSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RleHRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRfZW5kL2dyYXBlcy9FZGl0R3JhcGUudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC9ncmFwZXMvR3JhcGVzQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udF9lbmQvZ3JhcGVzL0dyYXBlc0xpc3QudHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC9ncmFwZXMvR3JhcGVzTGlzdEl0ZW0udHN4Iiwid2VicGFjazovLy8uL2Zyb250X2VuZC9ncmFwZXMvZ3JhcGVzLnRzIiwid2VicGFjazovLy8uL2Zyb250X2VuZC9ncmFwZXMvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL0FwaUhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9saWIvQ29va2llcy50cyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL2xpYi9SZXN0QXBpLnRzIiwid2VicGFjazovLy8uL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9saWIvd2lkZ2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtR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bUIsQ0FBQyxDQUFDO0lBQ2pFLGdEQUFnRDtJQUNoRCxJQUFJLHdEQUFRLENBQUMsWUFBYSxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVELHNEQUFzRDtBQUMvQyxTQUFTLEtBQUssQ0FBQyxPQUFlO0lBQ2pDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDSixPQUFPLEVBQUUsUUFBUTtRQUNqQixhQUFhLEVBQUUsS0FBSztRQUNwQixJQUFJLEVBQUUsT0FBTztLQUNoQixDQUFDLENBQUM7QUFDUCxDQUFDIiwiZmlsZSI6ImdyYXBlcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiZ3JhcGVzXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzExLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSUNoaWxkcmVuUHJvcCwgSUNsYXNzZXNQcm9wIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBDb2wgfSBmcm9tIFwiLi9HcmlkXCI7XG5pbXBvcnQgeyBNYXRlcmlhbEljb24gfSBmcm9tIFwiLi9NYXRlcmlhbEljb25cIjtcblxuaW50ZXJmYWNlIElGbG9hdGluZ0J0blByb3BzIGV4dGVuZHMgSUNoaWxkcmVuUHJvcCwgSUNsYXNzZXNQcm9wIHtcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIG9uTW91c2VEb3duPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbn1cblxuZnVuY3Rpb24gY29tYmluZUNsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10gfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuICAgIHJldHVybiAoY2xhc3NlcyB8fCBbXSkuam9pbihcIiBcIik7XG59XG5cbmV4cG9ydCBjb25zdCBGbG9hdGluZ0J0bjogUmVhY3QuRkM8SUZsb2F0aW5nQnRuUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbWJpbmVDbGFzc2VzKHByb3BzLmNsYXNzZXMpO1xuICAgIGNvbnN0IG1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xuICAgICAgICBpZiAocHJvcHMub25Nb3VzZURvd24pIHtcbiAgICAgICAgICAgIHByb3BzLm9uTW91c2VEb3duKGUpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb3BzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9eyBgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0bi1mbG9hdGluZyAke2NsYXNzZXN9YCB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgb25DbGljayB9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17IG1vdXNlRG93biB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L2E+XG4gICAgKTtcbn07XG5GbG9hdGluZ0J0bi5kaXNwbGF5TmFtZSA9IFwiRmxvYXRpbmdCdG5cIjtcbkZsb2F0aW5nQnRuLmRlZmF1bHRQcm9wcyA9IHsgb25Nb3VzZURvd246IChfKSA9PiB1bmRlZmluZWQgfTtcblxuaW50ZXJmYWNlIElCdG5Qcm9wcyBleHRlbmRzIElDaGlsZHJlblByb3AsIElDbGFzc2VzUHJvcCB7XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEJ0bjogUmVhY3QuRkM8SUJ0blByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21iaW5lQ2xhc3Nlcyhwcm9wcy5jbGFzc2VzKTtcbiAgICBjb25zdCBvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcHJvcHMub25DbGljaygpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsgYHJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biAke2NsYXNzZXN9YCB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgb25DbGljayB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuQnRuLmRpc3BsYXlOYW1lID0gXCJCdG5cIjtcblxuaW50ZXJmYWNlIElDYW5jZWxPckNvbmZpcm1Qcm9wcyB7XG4gICAgb25Db25maXJtQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgb25DYW5jZWxDbGljazogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENhbmNlbE9yQ29uZmlybUJ0bnM6IFJlYWN0LkZDPElDYW5jZWxPckNvbmZpcm1Qcm9wcz4gPVxuICAgIChwcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbCBzPXsgMTIgfT5cbiAgICAgICAgICAgIDxCdG4gY2xhc3Nlcz17IFtcImdyZWVuLWJnXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25Db25maXJtQ2xpY2sgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENvbmZpcm1cbiAgICAgICAgICAgICAgICA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwic2VuZFwiIGNsYXNzTmFtZT1cInJpZ2h0XCIgLz5cbiAgICAgICAgICAgIDwvQnRuPlxuICAgICAgICAgICAgPEJ0biBjbGFzc2VzPXsgW1wicmVkLWJnXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25DYW5jZWxDbGljayB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgPC9Db2w+XG4gICAgKTtcbn1cbkNhbmNlbE9yQ29uZmlybUJ0bnMuZGlzcGxheU5hbWUgPSBcIkNhbmNlbE9yQ29uZmlybUJ0bnNcIjtcbiIsImltcG9ydCB7IEZvcm1TZWxlY3QgfSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9saWIvTG9nZ2VyXCI7XG5pbXBvcnQgeyBJQ29sb3IgfSBmcm9tIFwiLi4vbGliL1Jlc3RcIjtcbmltcG9ydCB7IGdldENvbG9ycyB9IGZyb20gXCIuLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgSU9uQ2hhbmdlIH0gZnJvbSBcIi4vSVByb3BzXCI7XG5pbXBvcnQgeyBTZWxlY3RJbnB1dCB9IGZyb20gXCIuL1NlbGVjdElucHV0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJT25DaGFuZ2Uge1xuICAgIHNlbGVjdGlvbjogc3RyaW5nO1xuICAgIGV4dHJhQ2hvaWNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQ29sb3JzU2VsZWN0ID0gKGxvZ2dlcjogTG9nZ2VyLCBleHRyYUNob2ljZT86IHN0cmluZyk6IFtzdHJpbmdbXSwgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MU2VsZWN0RWxlbWVudD5dID0+IHtcbiAgICBjb25zdCBbc2VsZWN0aW9uT3B0aW9ucywgc2V0U2VsZWN0aW9uT3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IHNlbGVjdFJlZiA9IFJlYWN0LnVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTFNlbGVjdEVsZW1lbnQ+O1xuXG4gICAgY29uc3QgY29uY2F0SWZOb3ROdWxsPSAob3B0aW9uczogc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgIGlmIChleHRyYUNob2ljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtleHRyYUNob2ljZV0uY29uY2F0KG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29sb3JzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvcnM6IElDb2xvcltdID0gYXdhaXQgZ2V0Q29sb3JzKHt9KTtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3Rpb25PcHRpb25zKGNvbmNhdElmTm90TnVsbChjb2xvcnMubWFwKChjb2xvcikgPT4gY29sb3IubmFtZSkpKTtcbiAgICAgICAgICAgICAgICBuZXcgRm9ybVNlbGVjdChzZWxlY3RSZWYuY3VycmVudCEpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZ0Vycm9yKFwiRmFpbGVkIHRvIGdldCBjb2xvcnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaENvbG9ycygpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW3NlbGVjdGlvbk9wdGlvbnMsIHNlbGVjdFJlZl1cbn1cblxuZXhwb3J0IGNvbnN0IENvbG9ySW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKENvbG9ySW5wdXQubmFtZSk7XG5cbiAgICBjb25zdCBbc2VsZWN0aW9uT3B0aW9ucywgc2VsZWN0UmVmXSA9IHVzZUNvbG9yc1NlbGVjdChsb2dnZXIsIHByb3BzLmV4dHJhQ2hvaWNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWxlY3RJbnB1dCBuYW1lPVwiQ29sb3JcIlxuICAgICAgICAgICAgcz17IDQgfSBsPXsgMiB9XG4gICAgICAgICAgICBzZWxlY3RSZWY9eyBzZWxlY3RSZWYgfVxuICAgICAgICAgICAgb3B0aW9ucz17IHNlbGVjdGlvbk9wdGlvbnMgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyAodikgPT4gcHJvcHM/Lm9uQ2hhbmdlKHYpIH1cbiAgICAgICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5Db2xvcklucHV0LmRpc3BsYXlOYW1lID0gXCJDb2xvcklucHV0XCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQ2hpbGRyZW5Qcm9wLCBJQ2xhc3Nlc1Byb3AgfSBmcm9tIFwiLi9JUHJvcHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFByb3BzIHtcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbiAgICB4bD86IG51bWJlcjtcbn1cblxudHlwZSBJQWxsR3JpZFByb3BzID0gSUdyaWRQcm9wcyAmIElDbGFzc2VzUHJvcCAmIElDaGlsZHJlblByb3A7XG5cbmZ1bmN0aW9uIGpvaW5DbGFzc2VzKGdyaWQ6IHN0cmluZ1tdLCBjbGFzc2VzPzogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIGxldCBhbGxDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGdyaWQuZm9yRWFjaCgoZ2MpID0+IHtcbiAgICAgICAgaWYgKGdjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFsbENsYXNzZXMucHVzaChnYyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBhbGxDbGFzc2VzID0gYWxsQ2xhc3Nlcy5jb25jYXQoY2xhc3NlcyB8fCBbXSk7XG4gICAgcmV0dXJuIGFsbENsYXNzZXMuam9pbihcIiBcIik7XG59XG5cbmZ1bmN0aW9uIGdyaWRDbGFzc2VzKHByb3BzOiBJQWxsR3JpZFByb3BzKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHNDbGFzcyA9IHByb3BzLnMgPyBgcyR7cHJvcHMuc31gIDogXCJcIjtcbiAgICBjb25zdCBtQ2xhc3MgPSBwcm9wcy5tID8gYG0ke3Byb3BzLm19YCA6IFwiXCI7XG4gICAgY29uc3QgbENsYXNzID0gcHJvcHMubCA/IGBsJHtwcm9wcy5sfWAgOiBcIlwiO1xuICAgIGNvbnN0IHhsQ2xhc3MgPSBwcm9wcy54bCA/IGB4bCR7cHJvcHMueGx9YCA6IFwiXCI7XG4gICAgcmV0dXJuIFtzQ2xhc3MsIG1DbGFzcywgbENsYXNzLCB4bENsYXNzXTtcbn1cblxuY29uc3QgR3JpZENvbXBvbmVudEZhY3RvcnkgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIGRpc3BsYXlOYW1lOiBzdHJpbmcpOiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50OiBSZWFjdC5GQzxJQWxsR3JpZFByb3BzPiA9IChwcm9wczogSUFsbEdyaWRQcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBvdGhlckNsYXNzZXMgPSBqb2luQ2xhc3NlcyhncmlkQ2xhc3Nlcyhwcm9wcyksIHByb3BzLmNsYXNzZXMpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgJHtjbGFzc05hbWV9ICR7b3RoZXJDbGFzc2VzfWAgfT5cbiAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG4gICAgY29tcG9uZW50LmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGNvbnN0IFJvdzogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcInJvd1wiLCBcIlJvd1wiKTtcblxuZXhwb3J0IGNvbnN0IENvbDogUmVhY3QuRkM8SUFsbEdyaWRQcm9wcz4gPSBHcmlkQ29tcG9uZW50RmFjdG9yeShcImNvbFwiLCBcIkNvbFwiKTtcblxuZXhwb3J0IGNvbnN0IElucHV0RmllbGQ6IFJlYWN0LkZDPElBbGxHcmlkUHJvcHM+ID0gR3JpZENvbXBvbmVudEZhY3RvcnkoXCJjb2wgaW5wdXQtZmllbGRcIiwgXCJJbnB1dEZpZWxkXCIpXG4iLCJpbXBvcnQgTSBmcm9tIFwibWF0ZXJpYWxpemUtY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBuYW1lVG9JZCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi9HcmlkXCI7XG5cbnR5cGUgSUlucHV0VmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXTtcblxuZXhwb3J0IGludGVyZmFjZSBJSW5wdXRQcm9wczxUIGV4dGVuZHMgSUlucHV0VmFsdWU+IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdmFsdWU6IFQ7XG4gICAgZW5hYmxlZDogYm9vbGVhbjtcbiAgICBjbGFzc05hbWU6IHN0cmluZztcbiAgICBvbkNoYW5nZTogKHZhbDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uRm9jdXM6ICgpID0+IHZvaWQ7XG4gICAgb25CbHVyOiAoKSA9PiB2b2lkO1xuICAgIGlucHV0UmVmPzogUmVhY3QuUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICAgIGlucHV0VHlwZT86IHN0cmluZztcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIHN0ZXA/OiBzdHJpbmc7XG4gICAgbWF4PzogbnVtYmVyO1xuICAgIG1pbj86IG51bWJlcjtcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIElucHV0PFUgZXh0ZW5kcyBJSW5wdXRWYWx1ZT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUlucHV0UHJvcHM8VT4+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgb25DaGFuZ2U6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgb25Gb2N1czogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBvbkJsdXI6IChfOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gbmFtZVRvSWQodGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbnB1dEZpZWxkIHM9eyB0aGlzLnByb3BzLnMgfSBtPXsgdGhpcy5wcm9wcy5tIH0gbD17IHRoaXMucHJvcHMubCB9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17IGlkIH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17IGlkIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5jbGFzc05hbWUgfVxuICAgICAgICAgICAgICAgICAgICByZWY9eyB0aGlzLnByb3BzLmlucHV0UmVmIH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17IHRoaXMucHJvcHMuaW5wdXRUeXBlIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyAhdGhpcy5wcm9wcy5lbmFibGVkIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnByb3BzLnZhbHVlIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gdGhpcy5vbkNoYW5nZShlKSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMucHJvcHMub25CbHVyIH1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17IHRoaXMucHJvcHMub25Gb2N1cyB9XG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9eyB0aGlzLnByb3BzLnN0ZXAgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyB0aGlzLnByb3BzLm1pbiB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IHRoaXMucHJvcHMubWF4IH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwiIH0gaHRtbEZvcj17IGlkIH0+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5uYW1lIH1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9JbnB1dEZpZWxkPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBpY29uTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTWF0ZXJpYWxJY29uOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgIDxpIGNsYXNzTmFtZT17IGBtYXRlcmlhbC1pY29ucyAke3Byb3BzLmNsYXNzTmFtZX1gIH0+XG4gICAgICAgICAgICB7IHByb3BzLmljb25OYW1lIH1cbiAgICAgICAgPC9pPlxuICAgICk7XG59O1xuTWF0ZXJpYWxJY29uLmRpc3BsYXlOYW1lID0gXCJNYXRlcmlhbEljb25cIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNIGZyb20gXCJtYXRlcmlhbGl6ZS1jc3NcIjtcbmltcG9ydCB7IEJ0biB9IGZyb20gXCIuL0J1dHRvbnNcIjtcbmltcG9ydCB7IElDaGlsZHJlblByb3AgfSBmcm9tIFwiLi9JUHJvcHNcIjtcblxuaW50ZXJmYWNlIElNb2RhbFByb3BzIGV4dGVuZHMgSUNoaWxkcmVuUHJvcCB7XG59XG5cbmV4cG9ydCBjb25zdCBNb2RhbDogUmVhY3QuRkM8SU1vZGFsUHJvcHM+ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNLk1vZGFsKHJlZi5jdXJyZW50KTtcbiAgICAgICAgaW5zdGFuY2Uub3BlbigpO1xuICAgICAgICAvLyBSZXR1cm5pbmcgZnVuY3Rpb24gZnJvbSB1c2VFZmZlY3Qgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGVcbiAgICAgICAgLy8gY29tcG9uZW50IGlzIHVubW91bnRlZFxuICAgICAgICByZXR1cm4gKCkgPT4gaW5zdGFuY2U/LmNsb3NlKClcbiAgICB9LCBbcmVmXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHJlZj17IHJlZiB9IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbk1vZGFsLmRpc3BsYXlOYW1lID0gXCJNb2RhbFwiO1xuXG5leHBvcnQgY29uc3QgTW9kYWxDb250ZW50OiBSZWFjdC5GQzxJQ2hpbGRyZW5Qcm9wPiA9ICh7Y2hpbGRyZW59KSA9PiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L3NlY3Rpb24+XG4pXG5Nb2RhbENvbnRlbnQuZGlzcGxheU5hbWUgPSBcIk1vZGFsQ29udGVudFwiO1xuXG5leHBvcnQgY29uc3QgTW9kYWxGb290ZXI6IFJlYWN0LkZDPElDaGlsZHJlblByb3A+ID0gKHtjaGlsZHJlbn0pID0+IChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9zZWN0aW9uPlxuKVxuTW9kYWxGb290ZXIuZGlzcGxheU5hbWUgPSBcIk1vZGFsRm9vdGVyXCI7XG5cbmludGVyZmFjZSBJRGVsZXRlTW9kYWxQcm9wcyB7XG4gICAgaXRlbTogc3RyaW5nO1xuICAgIG9uWWVzQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgb25Ob0NsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRGVsZXRlTW9kYWw6IFJlYWN0LkZDPElEZWxldGVNb2RhbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbD5cbiAgICAgICAgICAgIDxNb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPGg1PkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB7IHByb3BzLml0ZW0gfT88L2g1PlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgYWN0aW9uIGlzIGlycmV2ZXJzaWJsZS48L3A+XG4gICAgICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8QnRuIGNsYXNzZXM9eyBbXCJtb2RhbC1hY3Rpb25cIiwgXCJyZWQtYmdcIl0gfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25ZZXNDbGljayB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBZZXMsIGRlbGV0ZSB0aGlzIHsgcHJvcHMuaXRlbSB9XG4gICAgICAgICAgICAgICAgPC9CdG4+XG4gICAgICAgICAgICAgICAgPEJ0biAgY2xhc3Nlcz17IFtcIm1vZGFsLWFjdGlvblwiLCBcIm1vZGFsLWNsb3NlXCIsIFwiZ3JlZW4tYmdcIl19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5vbk5vQ2xpY2sgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgICA8L0J0bj5cbiAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn1cbkRlbGV0ZU1vZGFsLmRpc3BsYXlOYW1lID0gXCJEZWxldGVNb2RhbFwiO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBQcmVsb2FkZXI6IFJlYWN0LkZDPHt9PiA9IChfKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRldGVybWluYXRlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5QcmVsb2FkZXIuZGlzcGxheU5hbWUgPSBcIlByZWxvYWRlclwiO1xuXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyQ2lyYzogUmVhY3QuRkM8e30+ID0gKF8pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWxvYWRlci13cmFwcGVyIGFjdGl2ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWxheWVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+PGRpdiBjbGFzc05hbWU9XCJnYXAtcGF0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblByZWxvYWRlckNpcmMuZGlzcGxheU5hbWUgPSBcIlByZWxvYWRlckNpcmNcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciwgbmFtZVRvSWQgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSBcIi4vR3JpZFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3B0aW9uczogc3RyaW5nW107XG4gICAgc2VsZWN0aW9uOiBzdHJpbmc7XG4gICAgc2VsZWN0VGV4dD86IHN0cmluZztcbiAgICBzZWxlY3RSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MU2VsZWN0RWxlbWVudD47XG4gICAgb25DaGFuZ2U6ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFNlbGVjdElucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaWQgPSBuYW1lVG9JZChwcm9wcy5uYW1lKTtcbiAgICBsZXQgc2VsZWN0VGV4dDogSlNYLkVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgaWYgKHByb3BzLnNlbGVjdFRleHQpIHtcbiAgICAgICAgc2VsZWN0VGV4dCA9IDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIHsgcHJvcHMuc2VsZWN0VGV4dCB9XG4gICAgICAgIDwvb3B0aW9uPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0RmllbGQgcz17IHByb3BzLnMgfSBtPXsgcHJvcHMubSB9IGw9eyBwcm9wcy5sIH0+XG4gICAgICAgICAgICA8c2VsZWN0IGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgIG5hbWU9eyBpZCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gcHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17IHByb3BzLnNlbGVjdGlvbiB8fCBwcm9wcy5zZWxlY3RUZXh0IH1cbiAgICAgICAgICAgICAgICByZWY9eyBwcm9wcy5zZWxlY3RSZWYgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsgc2VsZWN0VGV4dCB9XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsgb3B0aW9uIH0ga2V5PXsgb3B0aW9uIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIob3B0aW9uKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9eyBpZCB9PnsgcHJvcHMubmFtZSB9PC9sYWJlbD5cbiAgICAgICAgPC9JbnB1dEZpZWxkPlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmxvYXRpbmdCdG4gfSBmcm9tIFwiLi9CdXR0b25zXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG9uQ2xpY2s6IChjaGFyOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgY2hhcjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgU3BlY2lhbENoYXJCdG46IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gW1wiYnRuLXNtYWxsXCIsIFwiY2VudGVyXCIsIFwic3BlYy1jaGFyLWJ0blwiXTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RmxvYXRpbmdCdG4gY2xhc3Nlcz17IGNsYXNzZXMgfVxuICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG51bGwgfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyAoKSA9PiBwcm9wcy5vbkNsaWNrKHByb3BzLmNoYXIpIH1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyBwcm9wcy5jaGFyIH1cbiAgICAgICAgPC9GbG9hdGluZ0J0bj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZsb2F0aW5nQnRuIH0gZnJvbSBcIi4vQnV0dG9uc1wiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4vR3JpZFwiO1xuaW1wb3J0IHsgU3BlY2lhbENoYXJCdG4gfSBmcm9tIFwiLi9TcGVjaWFsQ2hhckJ0blwiO1xuXG5lbnVtIENhc2Uge1xuICAgIFVwcGVyLFxuICAgIExvd2VyLFxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBvbkNsaWNrOiAoY2hhcjogc3RyaW5nKSA9PiB2b2lkO1xuICAgIGNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgICBkaXNwbGF5OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICBjaGFyczogc3RyaW5nW107XG4gICAgY3VycmVudENhc2U6IENhc2U7XG59XG5cbmV4cG9ydCBjbGFzcyBTcGVjaWFsQ2hhcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcbiAgICBwdWJsaWMgc3RhdGljIGluc2VydENoYXJBdCh2YWw6IHN0cmluZywgY2hhcjogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpc05hTihwb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwgKyBjaGFyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWwuc3Vic3RyKDAsIHBvc2l0aW9uKSArIGNoYXIgKyB2YWwuc3Vic3RyKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYXJzOiBbXG4gICAgICAgICAgICAgICAgXCLDoFwiLCBcIsOhXCIsIFwiw6JcIiwgXCLDo1wiLCBcIsOmXCIsIFwixI1cIiwgXCLDp1wiLCBcIsOoXCIsIFwiw6lcIiwgXCLDqlwiLCBcIsOrXCIsIFwiw61cIiwgXCLDrlwiLFxuICAgICAgICAgICAgICAgIFwiw69cIiwgXCLDsVwiLCBcIsOzXCIsIFwiw7RcIiwgXCLDtVwiLCBcIsWTXCIsIFwixaFcIiwgXCLDuVwiLCBcIsO6XCIsIFwiw7tcIiwgXCLDvFwiLCBcIsW+XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY3VycmVudENhc2U6IENhc2UuTG93ZXIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFtcInNwZWNpYWwtY2hhcnNcIl07XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc3BsYXkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc2VzPXsgY2xhc3Nlcy5jb25jYXQodGhpcy5wcm9wcy5jbGFzc2VzID8/IFtdKSB9PlxuICAgICAgICAgICAgICAgICAgICB7LyogU2hpZnQgYnV0dG9uICovfVxuICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdCdG4gY2xhc3Nlcz17IFtcImNlbnRlclwiLCBcImdyZWVuLWJnXCIsIFwic2hpZnQtYnRuXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsgdGhpcy5oYW5kbGVTaGlmdC5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmN1cnJlbnRDYXNlID09PSBDYXNlLkxvd2VyID8gXCLihpFcIiA6IFwi4oaTXCIgfVxuICAgICAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nQnRuPlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuY2hhcnMubWFwKChjaGFyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjaWFsQ2hhckJ0biBjaGFyPXsgY2hhciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGNoYXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGMpID0+IHRoaXMucHJvcHMub25DbGljayhjKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZVNoaWZ0KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmN1cnJlbnRDYXNlID09PSBDYXNlLkxvd2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnM6IHN0YXRlLmNoYXJzLm1hcCgoY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhc2U6IENhc2UuVXBwZXIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hhcnM6IHN0YXRlLmNoYXJzLm1hcCgoY2hhcikgPT4gY2hhci50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2FzZTogQ2FzZS5Mb3dlcixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZXNtL2Zvcm1hdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBFTl9EQVNILCBnZXROYW1lQW5kVHlwZSwgbnVtVG9EYXRlIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgSVRleHRDZWxsUHJvcHMge1xuICAgIGRlZmF1bHQ/OiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIFRleHRDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUZXh0Q2VsbFByb3BzPiB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDx0ZD57IHRoaXMucHJvcHMudGV4dCA/PyB0aGlzLnByb3BzLmRlZmF1bHQgfTwvdGQ+O1xuICAgIH1cbn07XG5cbmludGVyZmFjZSBJTnVtQ2VsbFByb3BzIHtcbiAgICBudW06IG51bWJlciB8IG51bGw7XG4gICAgbWluRGVjaW1hbHM/OiBudW1iZXI7XG4gICAgbWF4RGVjaW1hbHM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBOdW1DZWxsOiBSZWFjdC5GQzxJTnVtQ2VsbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IG51bSA9IHByb3BzLm51bVxuICAgICAgICAvLyB1bmRlZmluZWQgdG8gdXNlIGJyb3dzZXIncyBsb2NhbGVcbiAgICAgICAgPyBwcm9wcy5udW0udG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWluaW11bUZyYWN0aW9uRGlnaXRzOiBwcm9wcy5taW5EZWNpbWFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcHJvcHMubWF4RGVjaW1hbHN9KVxuICAgICAgICA6IEVOX0RBU0g7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm51bS1jb2xcIj57IG51bSB9PC90ZD5cbiAgICApO1xufTtcbk51bUNlbGwuZGlzcGxheU5hbWUgPSBcIk51bUNlbGxcIjtcblxuaW50ZXJmYWNlIElQcmljZUNlbGxQcm9wcyB7XG4gICAgcHJpY2U6IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBQcmljZUNlbGw6IFJlYWN0LkZDPElQcmljZUNlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TnVtQ2VsbCBudW09eyBwcm9wcy5wcmljZSB9XG4gICAgICAgICAgICBtaW5EZWNpbWFscz17IDIgfVxuICAgICAgICAgICAgbWF4RGVjaW1hbHM9eyAyIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUHJpY2VDZWxsLmRpc3BsYXlOYW1lID0gXCJQcmljZUNlbGxcIjtcblxuZXhwb3J0IGNvbnN0IFllYXJDZWxsOiBSZWFjdC5GQzx7eWVhcjogbnVtYmVyIHwgbnVsbH0+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeWVhciA9IHByb3BzLnllYXI/LnRvU3RyaW5nKCkgPz8gXCJOVlwiO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJudW0tY29sXCI+XG4gICAgICAgICAgICB7IHllYXIgfVxuICAgICAgICA8L3RkPlxuICAgICk7XG59XG5ZZWFyQ2VsbC5kaXNwbGF5TmFtZSA9IFwiWWVhckNlbGxcIjtcblxuaW50ZXJmYWNlIElEYXRlQ2VsbFByb3BzIHtcbiAgICBkYXRlOiBudW1iZXIgfCBudWxsO1xuICAgIGZvcm1hdD86IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBEYXRlQ2VsbDogUmVhY3QuRkM8SURhdGVDZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZGF0ZVN0ciA9IHByb3BzLmRhdGUgPyBmb3JtYXQobnVtVG9EYXRlKHByb3BzLmRhdGUpLCBwcm9wcy5mb3JtYXQgPz8gXCJNTU0gZGQsIHl5eXlcIikgOiBFTl9EQVNIO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZD57IGRhdGVTdHIgfTwvdGQ+XG4gICAgKTtcbn1cbkRhdGVDZWxsLmRpc3BsYXlOYW1lID0gXCJEYXRlQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSUNvbG9yQ2VsbFByb3BzIHtcbiAgICBjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ29sb3JDZWxsOiBSZWFjdC5GQzxJQ29sb3JDZWxsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKHByb3BzLmNvbG9yKSB7XG4gICAgICAgIHJldHVybiA8dGQ+eyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIocHJvcHMuY29sb3IpIH08L3RkPjtcbiAgICB9XG4gICAgcmV0dXJuIDx0ZCAvPjtcbn07XG5Db2xvckNlbGwuZGlzcGxheU5hbWUgPSBcIkNvbG9yQ2VsbFwiO1xuXG5pbnRlcmZhY2UgSUxpbmtlZENlbGxQcm9wcyB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBtb2RlbDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgTGlua2VkQ2VsbDogUmVhY3QuRkM8SUxpbmtlZENlbGxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgLyR7cHJvcHMubW9kZWx9LyR7cHJvcHMuaWR9YDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YSBocmVmPXsgdXJsIH0+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5uYW1lIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICApXG59XG5MaW5rZWRDZWxsLmRpc3BsYXlOYW1lID0gXCJMaW5rZWRDZWxsXCJcblxuaW50ZXJmYWNlIElOYW1lQW5kVHlwZVByb3BzIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZyB8IG51bGw7XG4gICAgd2luZVR5cGU6IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBOYW1lQW5kVHlwZUNlbGw6IFJlYWN0LkZDPElOYW1lQW5kVHlwZVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGlmIChwcm9wcy51cmwpIHtcbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGEgaHJlZj17IHByb3BzLnVybCB9PlxuICAgICAgICAgICAgICAgIHsgZ2V0TmFtZUFuZFR5cGUocHJvcHMubmFtZSwgcHJvcHMud2luZVR5cGUpIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cIndpbmVzXCJcbiAgICAgICAgICAgIG5hbWU9eyBnZXROYW1lQW5kVHlwZShwcm9wcy5uYW1lLCBwcm9wcy53aW5lVHlwZSkgfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuTmFtZUFuZFR5cGVDZWxsLmRpc3BsYXlOYW1lID0gXCJOYW1lQW5kVHlwZUNlbGxcIjtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y2VyQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cInByb2R1Y2Vyc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblByb2R1Y2VyQ2VsbC5kaXNwbGF5TmFtZSA9IFwiUHJvZHVjZXJDZWxsXCJcblxuZXhwb3J0IGNvbnN0IFJlZ2lvbkNlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmd9PiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rZWRDZWxsIGlkPXsgcHJvcHMuaWQgfVxuICAgICAgICAgICAgbW9kZWw9XCJyZWdpb25zXCJcbiAgICAgICAgICAgIG5hbWU9eyBwcm9wcy5uYW1lIH1cbiAgICAgICAgLz5cbiAgICApO1xufVxuUmVnaW9uQ2VsbC5kaXNwbGF5TmFtZSA9IFwiUmVnaW9uQ2VsbFwiXG5cbmV4cG9ydCBjb25zdCBWaXRpQXJlYUNlbGw6IFJlYWN0LkZDPHtpZDogbnVtYmVyIHwgbnVsbCwgbmFtZTogc3RyaW5nIHwgbnVsbH0+ID0gKHByb3BzKSA9PiB7XG4gICAgaWYgKCFwcm9wcy5pZCB8fCAhcHJvcHMubmFtZSkge1xuICAgICAgICByZXR1cm4gPHRkIC8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua2VkQ2VsbCBpZD17IHByb3BzLmlkIH1cbiAgICAgICAgICAgIG1vZGVsPVwidml0aS1hcmVhc1wiXG4gICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblZpdGlBcmVhQ2VsbC5kaXNwbGF5TmFtZSA9IFwiVml0aUFyZWFDZWxsXCJcblxuZXhwb3J0IGNvbnN0IFdpbmVUeXBlQ2VsbDogUmVhY3QuRkM8e2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtlZENlbGwgaWQ9eyBwcm9wcy5pZCB9XG4gICAgICAgICAgICBtb2RlbD1cIndpbmUtdHlwZXNcIlxuICAgICAgICAgICAgbmFtZT17IHByb3BzLm5hbWUgfVxuICAgICAgICAvPlxuICAgICk7XG59XG5XaW5lVHlwZUNlbGwuZGlzcGxheU5hbWUgPSBcIldpbmVUeXBlQ2VsbFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vbGliL0xvZ2dlclwiO1xuaW1wb3J0IHsgdXNlQ29sb3JzU2VsZWN0IH0gZnJvbSBcIi4vQ29sb3JJbnB1dFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4vTWF0ZXJpYWxJY29uXCI7XG5pbXBvcnQgeyBTZWxlY3RJbnB1dCB9IGZyb20gXCIuL1NlbGVjdElucHV0XCI7XG5cbmV4cG9ydCBlbnVtIFNvcnRpbmdTdGF0ZSB7XG4gICAgTm90U29ydGVkLFxuICAgIEFzY2VuZGluZyxcbiAgICBEZXNjZW5kaW5nLFxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHZvaWQ7XG4gICAgc29ydGluZ1N0YXRlOiBTb3J0aW5nU3RhdGU7XG4gICAgaXNOdW1Db2w6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHM+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaXNOdW1Db2w6IGZhbHNlLFxuICAgIH07XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9eyAodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgXCJcIikgKyBgJHt0aGlzLnByb3BzLmlzTnVtQ29sID8gXCIgbnVtLWNvbFwiIDogXCJcIiB9YCB9PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJDb250ZW50KCkgfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSAoXG4gICAgICAgICAgICA8YSBocmVmPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5wcm9wcy5vbkNsaWNrIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmlzTnVtQ29sXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVySWNvbigpIH1cbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0IH1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckljb24oKSB9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJJY29uKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMuc29ydGluZ1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdTdGF0ZS5Bc2NlbmRpbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNYXRlcmlhbEljb24gaWNvbk5hbWU9XCJhcnJvd19kcm9wX3VwXCIgLz47XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdTdGF0ZS5EZXNjZW5kaW5nOlxuICAgICAgICAgICAgICAgIHJldHVybiA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwiYXJyb3dfZHJvcF9kb3duXCIgLz47XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiA8TWF0ZXJpYWxJY29uIGljb25OYW1lPVwiYXJyb3dfZHJvcF9kb3duXCIgY2xhc3NOYW1lPVwiaW52aXNpYmxlXCIgLz47XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmludGVyZmFjZSBJRmlsdGVyUHJvcHMge1xuICAgIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRmlsdGVySGVhZGVyOiBSZWFjdC5GQzxJRmlsdGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKSB9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwcm9wcy50ZXh0IH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgKTtcbn1cbkZpbHRlckhlYWRlci5kaXNwbGF5TmFtZSA9IFwiRmlsdGVySGVhZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RGaWx0ZXJIZWFkZXI6IFJlYWN0LkZDPElGaWx0ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBleHRyYUNob2ljZSA9IFwiQW55XCI7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihTZWxlY3RGaWx0ZXJIZWFkZXIubmFtZSk7XG5cbiAgICBjb25zdCBvbkNoYW5nZSA9IChzZWxlY3Rpb246IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSBleHRyYUNob2ljZSkge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShzZWxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBwcm9wcy50ZXh0ID09PSBcIlwiID8gZXh0cmFDaG9pY2UgOiBwcm9wcy50ZXh0O1xuXG4gICAgY29uc3QgW3NlbGVjdGlvbk9wdGlvbnMsIHNlbGVjdFJlZl0gPSB1c2VDb2xvcnNTZWxlY3QobG9nZ2VyLCBleHRyYUNob2ljZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8U2VsZWN0SW5wdXQgbmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgc2VsZWN0UmVmPXsgc2VsZWN0UmVmIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXsgc2VsZWN0aW9uT3B0aW9ucyB9XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uPXsgc2VsZWN0aW9uIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgKTtcbn1cblNlbGVjdEZpbHRlckhlYWRlci5kaXNwbGF5TmFtZSA9IFNlbGVjdEZpbHRlckhlYWRlci5uYW1lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9JbnB1dFwiO1xuaW1wb3J0IHsgU3BlY2lhbENoYXJzIH0gZnJvbSBcIi4vU3BlY2lhbENoYXJzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIG9uQ2hhbmdlOiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Gb2N1cz86ICgpID0+IHZvaWQ7XG4gICAgb25CbHVyPzogKCkgPT4gdm9pZDtcbiAgICBjbGFzc05hbWU6IHN0cmluZztcbiAgICBzPzogbnVtYmVyO1xuICAgIG0/OiBudW1iZXI7XG4gICAgbD86IG51bWJlcjtcbiAgICBpbnB1dFJlZj86IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG59XG5cbmV4cG9ydCBjb25zdCBUZXh0SW5wdXQ6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbdGltZXN0YW1wLCBfXSA9IFJlYWN0LnVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGlucHV0UmVmID0gcHJvcHMuaW5wdXRSZWYgPz8gUmVhY3QudXNlUmVmKCkgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcblxuICAgIGNvbnN0IG9uU3BlY2lhbENoYXJDbGljayA9IChjaGFyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaW5wdXRSZWYuY3VycmVudD8uc2VsZWN0aW9uU3RhcnQgPz8gTmFOO1xuICAgICAgICBwcm9wcy5vbkNoYW5nZShTcGVjaWFsQ2hhcnMuaW5zZXJ0Q2hhckF0KHByb3BzLnZhbHVlLCBjaGFyLCBwb3NpdGlvbikpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5wdXRSZWYuY3VycmVudC5zZXRTZWxlY3Rpb25SYW5nZShwb3NpdGlvbiArIDEsIHBvc2l0aW9uICsgMSksIDEwKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChub3cgLSB0aW1lc3RhbXAgPiAxMDApIHtcbiAgICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9wcy5vbkJsdXI/LigpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UodmFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkZvY3VzID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICAgICAgcHJvcHMub25Gb2N1cz8uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxJbnB1dCBpbnB1dFR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPXsgcHJvcHMubmFtZSB9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwcm9wcy52YWx1ZSB9XG4gICAgICAgICAgICAgICAgZW5hYmxlZD17IHByb3BzLmVuYWJsZWQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbCkgPT4gb25DaGFuZ2UodmFsKSB9XG4gICAgICAgICAgICAgICAgb25CbHVyPXsgb25CbHVyIH1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsgb25Gb2N1cyB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgcHJvcHMuY2xhc3NOYW1lIH1cbiAgICAgICAgICAgICAgICBzPXsgcHJvcHMucyB9IG09eyBwcm9wcy5tIH0gbD17IHByb3BzLmwgfVxuICAgICAgICAgICAgICAgIGlucHV0UmVmPXsgaW5wdXRSZWYgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTcGVjaWFsQ2hhcnNcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXsgW1wiaW5saW5lLWJsb2NrXCJdIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGMpID0+IG9uU3BlY2lhbENoYXJDbGljayhjKSB9XG4gICAgICAgICAgICAgICAgZGlzcGxheT17IGlzQWN0aXZlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5UZXh0SW5wdXQuZGlzcGxheU5hbWUgPSBcIlRleHRJbnB1dFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW9kYWxDb250ZW50LCBNb2RhbCwgTW9kYWxGb290ZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Nb2RhbFwiO1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGV4dElucHV0XCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmlkXCI7XG5pbXBvcnQgeyBDYW5jZWxPckNvbmZpcm1CdG5zIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uc1wiO1xuaW1wb3J0IHsgSUdyYXBlRm9ybSB9IGZyb20gXCIuLi8uLi9saWIvUmVzdFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb25DYW5jZWxDbGljazogKCkgPT4gdm9pZDtcbiAgICBvblNhdmVDbGljazogKGZvcm06IElHcmFwZUZvcm0pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBFZGl0R3JhcGU6IFJlYWN0LkZDPElQcm9wcz4gPSAoe25hbWUsIG9uQ2FuY2VsQ2xpY2ssIG9uU2F2ZUNsaWNrfSkgPT4ge1xuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IFJlYWN0LnVzZVN0YXRlKG5hbWUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsPlxuICAgICAgICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8aDQ+RWRpdCBncmFwZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgbmFtZT1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgdGV4dCB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHNldFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgPENhbmNlbE9yQ29uZmlybUJ0bnNcbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtQ2xpY2s9eyAoKSA9PiBvblNhdmVDbGljayh7bmFtZTogdGV4dH0pIH1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWxDbGljaz17IG9uQ2FuY2VsQ2xpY2sgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICA8L01vZGFsPlxuICAgICk7XG59XG5FZGl0R3JhcGUuZGlzcGxheU5hbWUgPSBFZGl0R3JhcGUubmFtZVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HcmlkXCI7XG5pbXBvcnQgeyBQcmVsb2FkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QcmVsb2FkZXJcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uLy4uL2xpYi9Mb2dnZXJcIjtcbmltcG9ydCB7IElHcmFwZSwgSUdyYXBlRm9ybSB9IGZyb20gXCIuLi8uLi9saWIvUmVzdFwiO1xuaW1wb3J0IHsgZ2V0R3JhcGVzLCB1cGRhdGVHcmFwZSB9IGZyb20gXCIuLi8uLi9saWIvUmVzdEFwaVwiO1xuaW1wb3J0IHsgRWRpdEdyYXBlIH0gZnJvbSBcIi4vRWRpdEdyYXBlXCI7XG5pbXBvcnQgeyBHcmFwZXNMaXN0IH0gZnJvbSBcIi4vR3JhcGVzTGlzdFwiO1xuaW1wb3J0IHsgZ3JhcGVTdGF0ZVJlZHVjZXIsIGluaXRHcmFwZVN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcblxuZXhwb3J0IGNvbnN0IEdyYXBlc0FwcDogUmVhY3QuRkM8e30+ID0gKF9wcm9wcykgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoR3JhcGVzQXBwLm5hbWUpO1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihncmFwZVN0YXRlUmVkdWNlciwgaW5pdEdyYXBlU3RhdGUoKSk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEdyYXBlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyYXBlczogSUdyYXBlW10gPSBhd2FpdCBnZXRHcmFwZXMoe30pO1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwic2V0R3JhcGVzXCIsIGdyYXBlc30pO1xuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hHcmFwZXMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBvbkVkaXRDbGljayA9IChpZDogbnVtYmVyKSA9PiBkaXNwYXRjaCh7dHlwZTogXCJzZXRUb0VkaXRcIiwgaWR9KTtcbiAgICBjb25zdCBvbkNhbmNlbENsaWNrICA9ICgpID0+IGRpc3BhdGNoKHt0eXBlOiBcInNldFRvRGlzcGxheVwifSk7XG4gICAgY29uc3Qgb25TYXZlQ2xpY2sgPSBhc3luYyAoZ3JhcGU6IElHcmFwZUZvcm0pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwic2V0VG9EaXNwbGF5XCJ9KTtcbiAgICAgICAgaWYgKHN0YXRlLm1vZGUudHlwZSA9PT0gXCJlZGl0XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gc3RhdGUubW9kZS5pZFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkR3JhcGUgPSBhd2FpdCB1cGRhdGVHcmFwZShpZCwgZ3JhcGUpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcInNldEdyYXBlc1wiLCBncmFwZXM6IHN0YXRlLmdyYXBlcy5tYXAoKGcpID0+IGcuaWQgPT09IGlkID8gdXBkYXRlZEdyYXBlIDogZyl9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nV2FybmluZyhgRmFpbGVkIHRvIHNhdmUgZ3JhcGUgY2hhbmdlIGZvciBncmFwZSB3aXRoIGlkICR7aWR9OiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS5ncmFwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8UHJlbG9hZGVyIC8+O1xuICAgIH1cbiAgICBsZXQgZWRpdENvbXBvbmVudCA9IG51bGw7XG4gICAgaWYgKHN0YXRlLm1vZGUudHlwZSA9PT0gXCJlZGl0XCIpIHtcbiAgICAgICAgY29uc3QgaWQgPSBzdGF0ZS5tb2RlLmlkO1xuICAgICAgICBlZGl0Q29tcG9uZW50ID0gKFxuICAgICAgICAgICAgPEVkaXRHcmFwZSBuYW1lPXsgc3RhdGUuZ3JhcGVzLmZpbmQoKGcpID0+IGcuaWQgPT09IGlkKT8ubmFtZSA/PyBcIlwiIH1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbENsaWNrPXsgb25DYW5jZWxDbGljayB9XG4gICAgICAgICAgICAgICAgb25TYXZlQ2xpY2s9eyBvblNhdmVDbGljayB9XG4gICAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2wgcz17IDEyIH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+R3JhcGVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPEdyYXBlc0xpc3QgZ3JhcGVzPXsgc3RhdGUuZ3JhcGVzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRWRpdENsaWNrPXsgb25FZGl0Q2xpY2sgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7IGVkaXRDb21wb25lbnQgfVxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5HcmFwZXNBcHAuZGlzcGxheU5hbWUgPSBHcmFwZXNBcHAubmFtZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNvcnRpbmdTdGF0ZSwgVGFibGVIZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWJsZUhlYWRlclwiO1xuaW1wb3J0IHsgSUdyYXBlIH0gZnJvbSBcIi4uLy4uL2xpYi9SZXN0XCI7XG5pbXBvcnQgeyBHcmFwZXNMaXN0SXRlbSB9IGZyb20gXCIuL0dyYXBlc0xpc3RJdGVtXCI7XG5cbmVudW0gU29ydGluZ1ZhbHVlIHtcbiAgICBOYW1lLFxuICAgIFdpbmVzLFxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBncmFwZXM6IElHcmFwZVtdO1xuICAgIG9uRWRpdENsaWNrOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEdyYXBlc0xpc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAoe2dyYXBlcywgb25FZGl0Q2xpY2t9KSA9PiB7XG4gICAgY29uc3QgW3NvcnRpbmdWYWx1ZSwgc2V0U29ydGluZ1ZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFNvcnRpbmdWYWx1ZS5OYW1lKTtcbiAgICBjb25zdCBbaXNBc2NlbmRpbmcsIHNldElzQXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuXG4gICAgY29uc3Qgc29ydGVkR3JhcGVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhc2NlbmRpbmdNdWx0aXBsaWVyID0gaXNBc2NlbmRpbmcgPyAxIDogLTE7XG4gICAgICAgIHN3aXRjaCAoc29ydGluZ1ZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFNvcnRpbmdWYWx1ZS5OYW1lOlxuICAgICAgICAgICAgICAgIHJldHVybiBncmFwZXMuc29ydCgoZzEsIGcyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnMS5uYW1lLmxvY2FsZUNvbXBhcmUoZzIubmFtZSkgKiBhc2NlbmRpbmdNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FzZSBTb3J0aW5nVmFsdWUuV2luZXM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyYXBlcy5zb3J0KChnMSwgZzIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChnMS53aW5lQ291bnQgfHwgMCkgPiAoZzIud2luZUNvdW50IHx8IDApID8gLWFzY2VuZGluZ011bHRpcGxpZXIgOiBhc2NlbmRpbmdNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBncmFwZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvbkhlYWRlckNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQsIGNsaWNrZWRIZWFkZXI6IFNvcnRpbmdWYWx1ZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChzb3J0aW5nVmFsdWUgPT09IGNsaWNrZWRIZWFkZXIpIHtcbiAgICAgICAgICAgIHNldElzQXNjZW5kaW5nKCFpc0FzY2VuZGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRJc0FzY2VuZGluZyh0cnVlKTtcbiAgICAgICAgICAgIHNldFNvcnRpbmdWYWx1ZShjbGlja2VkSGVhZGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNvcnRpbmdTdGF0ZUZvckhlYWRlciA9IChoZWFkZXI6IFNvcnRpbmdWYWx1ZSk6IFNvcnRpbmdTdGF0ZSA9PiB7XG4gICAgICAgIGlmIChzb3J0aW5nVmFsdWUgPT09IGhlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXNjZW5kaW5nID8gU29ydGluZ1N0YXRlLkFzY2VuZGluZyA6IFNvcnRpbmdTdGF0ZS5EZXNjZW5kaW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTb3J0aW5nU3RhdGUuTm90U29ydGVkO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJyZXNwb25zaXZlIGhpZ2hsaWdodCBjb25kZW5zZWRcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHIga2V5PVwiaGVhZGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgc29ydGluZ1N0YXRlPXsgc29ydGluZ1N0YXRlRm9ySGVhZGVyKFNvcnRpbmdWYWx1ZS5OYW1lKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGUpID0+IG9uSGVhZGVyQ2xpY2soZSwgU29ydGluZ1ZhbHVlLk5hbWUpIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXIgc29ydGluZ1N0YXRlPXsgc29ydGluZ1N0YXRlRm9ySGVhZGVyKFNvcnRpbmdWYWx1ZS5XaW5lcykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IChlKSA9PiBvbkhlYWRlckNsaWNrKGUsIFNvcnRpbmdWYWx1ZS5XaW5lcykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNOdW1Db2xcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgV2luZXNcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkVkaXQ8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtzb3J0ZWRHcmFwZXMoKS5tYXAoKGdyYXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGVzTGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyBncmFwZS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGU9eyBncmFwZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FZGl0Q2xpY2s9eyBvbkVkaXRDbGljayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICApO1xufVxuR3JhcGVzTGlzdC5kaXNwbGF5TmFtZSA9IEdyYXBlc0xpc3QubmFtZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZsb2F0aW5nQnRuIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uc1wiO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWF0ZXJpYWxJY29uXCI7XG5pbXBvcnQgeyBOdW1DZWxsLCBUZXh0Q2VsbCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCB7IElHcmFwZSB9IGZyb20gXCIuLi8uLi9saWIvUmVzdFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBncmFwZTogSUdyYXBlO1xuICAgIG9uRWRpdENsaWNrOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEdyYXBlc0xpc3RJdGVtOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtncmFwZSwgb25FZGl0Q2xpY2t9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPFRleHRDZWxsIHRleHQ9eyBncmFwZS5uYW1lIH0gLz5cbiAgICAgICAgICAgIDxOdW1DZWxsIG51bT17IGdyYXBlLndpbmVDb3VudCB9XG4gICAgICAgICAgICAgICAgbWF4RGVjaW1hbHM9eyAwIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPEZsb2F0aW5nQnRuIG9uQ2xpY2s9eyAoKSA9PiBvbkVkaXRDbGljayhncmFwZS5pZCkgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXsgW1wic21hbGxcIiwgXCJyZWQtYmdcIl0gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvbiBpY29uTmFtZT1cImVkaXRcIiAvPlxuICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdCdG4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICk7XG59XG5HcmFwZXNMaXN0SXRlbS5kaXNwbGF5TmFtZSA9IEdyYXBlc0xpc3RJdGVtLm5hbWU7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwiLi4vLi4vbGliL3dpZGdldHNcIjtcbmltcG9ydCB7IEdyYXBlc0FwcCB9IGZyb20gXCIuL0dyYXBlc0FwcFwiO1xuXG5uYXZiYXIoKTtcblJlYWN0RE9NLnJlbmRlcihjcmVhdGVFbGVtZW50KEdyYXBlc0FwcCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JhcGVzLWNvbnRhaW5lclwiKSk7XG4iLCJpbXBvcnQgeyBJR3JhcGUgfSBmcm9tIFwiLi4vLi4vbGliL1Jlc3RcIjtcblxuZXhwb3J0IHR5cGUgTW9kZSA9XG4gICAgfCB7dHlwZTogXCJkaXNwbGF5XCJ9XG4gICAgfCB7dHlwZTogXCJlZGl0XCIsIGlkOiBudW1iZXJ9O1xuXG5leHBvcnQgaW50ZXJmYWNlIElHcmFwZVN0YXRlIHtcbiAgICBtb2RlOiBNb2RlO1xuICAgIGdyYXBlczogSUdyYXBlW107XG59XG5cbmV4cG9ydCBjb25zdCBpbml0R3JhcGVTdGF0ZTogKCkgPT4gSUdyYXBlU3RhdGUgPSAoKSA9PiAoe1xuICAgIGdyYXBlczogW10sXG4gICAgbW9kZToge3R5cGU6IFwiZGlzcGxheVwifSxcbn0pO1xuXG50eXBlIEFjdGlvbiA9XG4gICAgfCB7dHlwZTogXCJzZXRUb0Rpc3BsYXlcIn1cbiAgICB8IHt0eXBlOiBcInNldFRvRWRpdFwiLCBpZDogbnVtYmVyfVxuICAgIHwge3R5cGU6IFwic2V0R3JhcGVzXCIsIGdyYXBlczogSUdyYXBlW119O1xuXG5leHBvcnQgY29uc3QgZ3JhcGVTdGF0ZVJlZHVjZXI6IFJlYWN0LlJlZHVjZXI8SUdyYXBlU3RhdGUsIEFjdGlvbj4gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInNldFRvRGlzcGxheVwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1vZGU6IHt0eXBlOiBcImRpc3BsYXlcIn0gfTtcbiAgICAgICAgY2FzZSBcInNldFRvRWRpdFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1vZGU6IHt0eXBlOiBcImVkaXRcIiwgaWQ6IGFjdGlvbi5pZH0gfTtcbiAgICAgICAgY2FzZSBcInNldEdyYXBlc1wiOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGdyYXBlczogYWN0aW9uLmdyYXBlc307XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IHJlYWRDb29raWUgfSBmcm9tIFwiLi9Db29raWVzXCI7XG5pbXBvcnQgeyBJRGljdCwgaXNFbXB0eSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IEhFQURFUlMgPSB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJYLUNTUkZUb2tlblwiOiByZWFkQ29va2llKFwiY3NyZnRva2VuXCIpIHx8IFwiXCIsXG59O1xuXG5leHBvcnQgdHlwZSBJUXVlcnlQYXJhbXMgPSBJRGljdDxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPjtcblxuZnVuY3Rpb24gZW5jb2RlUGFyYW1zKHBhcmFtczogSVF1ZXJ5UGFyYW1zKTogc3RyaW5nIHtcbiAgICBpZiAoaXNFbXB0eShwYXJhbXMpKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gXCI/XCIgKyBPYmplY3QuZW50cmllcyhwYXJhbXMpLm1hcCgoW2ssIHZdKSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoayl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHYpfWApLmpvaW4oXCImXCIpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVKc29uKG9iajogb2JqZWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVjb2RlSnNvbklmQW55KHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIGlmIChwYXJzZUZsb2F0KHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC1sZW5ndGhcIikgPz8gXCIwXCIpID4gMFxuICAgICAgICAmJiByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG59XG5cbnR5cGUgVmlub3RlY2FFcnJvciA9XG4gICAgfCB7XCJOb3RGb3VuZFwiOiBzdHJpbmd9XG4gICAgfCB7XCJJbnRlcm5hbFwiOiBzdHJpbmd9XG4gICAgfCB7XCJNaXNzaW5nQ29uc3RyYWludFwiOiBzdHJpbmd9XG4gICAgfCB7XCJCYWRSZXF1ZXN0XCI6IHN0cmluZ307XG5cbmZ1bmN0aW9uIGlzVmlub3RlY2FFcnJvcihvYmo6IG9iamVjdCk6IG9iaiBpcyBWaW5vdGVjYUVycm9yIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICByZXR1cm4ga2V5cy5sZW5ndGggPT09IDFcbiAgICAgICAgJiYgW1wiTm90Rm91bmRcIiwgXCJJbnRlcm5hbFwiLCBcIk1pc3NpbmdDb25zdHJhaW50XCIsIFwiQmFkUmVxdWVzdFwiXVxuICAgICAgICAgICAgLmZpbmQoKGkpID0+IGkgPT09IGtleXNbMF0pICE9PSB1bmRlZmluZWQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrUmVzcG9uc2UocmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID4gMzEwKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBkZWNvZGVKc29uSWZBbnkocmVzcG9uc2UpO1xuICAgICAgICBpZiAoaXNWaW5vdGVjYUVycm9yKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgJHtPYmplY3Qua2V5cyhtZXNzYWdlKVswXX06ICR7T2JqZWN0LnZhbHVlcyhtZXNzYWdlKVswXX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZUpzb25JZkFueShyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IEVycm9yKGF3YWl0IHJlc3BvbnNlLnRleHQoKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgR0VUIHJlcXVlc3QgdG8gdGhlIHVybCB3aXRoIHRoZSBvcHRpb25hbCBwYXJhbWV0ZXJzLCB0aGVuIHBhcnNlc1xuICogdGhlIEpTT04gcmVzcG9uc2UuXG4gKiBAcGFyYW0gdXJsIEEgVVJMIHRvIHJlcXVlc3RcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb3B0aW9uYWwgZGljdGlvbmFyeSBvZiBwYXJhbWV0ZXJzIHRvIHRoZWlyIHZhbHVlc1xuICogQHJldHVybnMgcGFyc2VkIEpTT04gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldDxSZXNwb25zZT4odXJsOiBzdHJpbmcsIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgUE9TVCByZXF1ZXN0IHRvIHRoZSB1cmwgd2l0aCB0aGUgb3B0aW9uYWwgcGFyYW1ldGVycyBjb250YWluaW5nXG4gKiB0aGUgYm9keSwgdGhlbiBwYXJzZXMgdGhlIEpTT04gcmVzcG9uc2UuXG4gKiBAcGFyYW0gdXJsIEEgVVJMIHRvIHJlcXVlc3RcbiAqIEBwYXJhbSBib2R5IEpTT04gb2JqZWN0IHRvIGVuY29kZSBhbmQgc2VuZCB0byB0aGUgc2VydmVyXG4gKiBAcGFyYW0gcGFyYW1zIEFuIG9wdGlvbmFsIGRpY3Rpb25hcnkgb2YgcGFyYW1ldGVycyB0byB0aGVpciB2YWx1ZXNcbiAqIEByZXR1cm5zIHBhcnNlZCBKU09OIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0PFJlc3BvbnNlPih1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogSVF1ZXJ5UGFyYW1zID0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGVuY29kZUpzb24oYm9keSksXG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdEZvcm08UmVzcG9uc2U+KHVybDogc3RyaW5nLCBmb3JtOiBGb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGJvZHk6IGZvcm0sXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG4vKipcbiAqIE1ha2VzIGFuIEhUVFAgUFVUIHJlcXVlc3QgdG8gdGhlIHVybCB3aXRoIHRoZSBvcHRpb25hbCBwYXJhbWV0ZXJzIGNvbnRhaW5pbmdcbiAqIHRoZSBib2R5LCB0aGVuIHBhcnNlcyB0aGUgSlNPTiByZXNwb25zZS5cbiAqIEBwYXJhbSB1cmwgQSBVUkwgdG8gcmVxdWVzdFxuICogQHBhcmFtIGJvZHkgSlNPTiBvYmplY3QgdG8gZW5jb2RlIGFuZCBzZW5kIHRvIHRoZSBzZXJ2ZXJcbiAqIEBwYXJhbSBwYXJhbXMgQW4gb3B0aW9uYWwgZGljdGlvbmFyeSBvZiBwYXJhbWV0ZXJzIGFuZCB0aGVpciB2YWx1ZXNcbiAqIEByZXR1cm5zIHBhcnNlZCBKU09OIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXQ8UmVzcG9uc2U+KHVybDogc3RyaW5nLCBib2R5OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZW5jb2RlSnNvbihib2R5KSxcbiAgICAgICAgaGVhZGVyczogSEVBREVSUyxcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dEZvcm08UmVzcG9uc2U+KHVybDogc3RyaW5nLCBmb3JtOiBGb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcyA9IHt9KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgZW5jb2RlUGFyYW1zKHBhcmFtcyksIHtcbiAgICAgICAgYm9keTogZm9ybSxcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhdGNoPFJlc3BvbnNlPih1cmw6IHN0cmluZywgYm9keTogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IElRdWVyeVBhcmFtcz0ge30pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBlbmNvZGVQYXJhbXMocGFyYW1zKSwge1xuICAgICAgICBib2R5OiBlbmNvZGVKc29uKGJvZHkpLFxuICAgICAgICBoZWFkZXJzOiBIRUFERVJTLFxuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVfPFJlc3BvbnNlPih1cmw6IHN0cmluZywgcGFyYW1zOiBJUXVlcnlQYXJhbXMgPSB7fSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIGVuY29kZVBhcmFtcyhwYXJhbXMpLCB7XG4gICAgICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG59XG4iLCJjb25zdCBNSUxMSVNFQ09ORFNfSU5fREFZID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBDcmVhdGUgb3IgdXBkYXRlIGEgY29va2llXG4gKiBAcGFyYW0gbmFtZSBuYW1lL2tleSBvZiB0aGUgY29va2llXG4gKiBAcGFyYW0gdmFsdWUgdmFsdWUgdG8gc3RvcmVcbiAqIEBwYXJhbSBkYXlzIG51bWJlciBvZiBkYXlzIHRoZSBjb29raWUgaXMgdmFsaWQsIGRlZmF1bHRzIHRvIHRoZSBjdXJyZW50IHNlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGRheXM/OiBudW1iZXIpIHtcbiAgICBsZXQgZXhwaXJlcztcbiAgICBpZiAoZGF5cykge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiBNSUxMSVNFQ09ORFNfSU5fREFZKSk7XG4gICAgICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBleHBpcmVzID0gXCJcIjtcbiAgICB9XG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZENvb2tpZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcbiAgICBmb3IgKGxldCBjIG9mIGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikpIHtcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSBcIiBcIikge1xuICAgICAgICAgICAgYyA9IGMuc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyKG5hbWVFUS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29va2llKG5hbWU6IHN0cmluZykge1xuICAgIGNyZWF0ZUNvb2tpZShuYW1lLCBcIlwiLCAtMSk7XG59XG4iLCJpbXBvcnQgeyBwb3N0IH0gZnJvbSBcIi4vQXBpSGVscGVyXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCIuL3dpZGdldHNcIjtcblxuLyoqIFByb3ZpZGVzIGxvZ2dpbmcgZnVuY3Rpb25hbGl0eSBmb3IgY2xpZW50LXNpZGUgSmF2YVNjcmlwdCBlcnJvcnMuICovXG5lbnVtIExvZ0xldmVsIHtcbiAgICBDcml0aWNhbCA9IFwiY3JpdGljYWxcIixcbiAgICBFcnJvciA9IFwiZXJyb3JcIixcbiAgICBXYXJuaW5nID0gXCJ3YXJuaW5nXCIsXG4gICAgSW5mbyA9IFwiaW5mb1wiLFxuICAgIERlYnVnID0gXCJkZWJ1Z1wiLFxufVxuXG5pbnRlcmZhY2UgSUxvZ1Jlc3VsdCB7XG4gICAgc3VjY2VzczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcbiAgICAvKipcbiAgICAgKiBMb2dnaW5nIGNsYXNzIGZvciBjbGllbnQtc2lkZSBlcnJvcnMgdGhhdCB3aWxsIGJlIHBvc3RlZCB0byB0aGUgc2VydmVyXG4gICAgICogZm9yIGxvZ2dpbmcgdG8gdGhlIHNhbWUgZmlsZSBhcyBhbGwgb3RoZXIgdmlub3RlY2EgbG9ncy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtb2R1bGUgdGhlIG5hbWUgb2YgdGhlIG1vZHVsZSBmcm9tIHdoaWNoIHRoZSBsb2cgbWVzc2FnZXMgb3JpZ2luYXRlLlxuICAgICAqIEBwYXJhbSB0b0NvbnNvbGUgd2hldGhlciB0byBhbHNvIHByaW50IG1lc3NhZ2VzIHRvIHRoZSBjb25zb2xlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2R1bGU6IHN0cmluZywgcHJpdmF0ZSB0b0NvbnNvbGUgPSBmYWxzZSkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lYW50IGZvciBpcnJlY292ZXJhYmxlIG9yIHRydWx5IGV4Y2VwdGlvbmFsIGVycm9ycy4gQSB0b2FzdCB3aXRoIHRoZVxuICAgICAqIGxvZyBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGUgbG9nIHdpbGwgYmUgc2VudCBiYWNrIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBmb3IgcG9zdGVyaXR5LlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dDcml0aWNhbChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBMb2dMZXZlbC5Dcml0aWNhbDtcbiAgICAgICAgdGhpcy50b2FzdChsZXZlbCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSB0b2FzdCB3aXRoIHRoZSBsb2cgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlIGxvZyB3aWxsIGJlIHNlbnRcbiAgICAgKiBiYWNrIHRvIHRoZSBzZXJ2ZXIgZm9yIHBvc3Rlcml0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nRXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gTG9nTGV2ZWwuRXJyb3I7XG4gICAgICAgIHRoaXMudG9hc3QobGV2ZWwsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgdG9hc3Qgd2l0aCB0aGUgbG9nIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZSBsb2cgd2lsbCBiZSBzZW50XG4gICAgICogYmFjayB0byB0aGUgc2VydmVyIGZvciBwb3N0ZXJpdHkuXG4gICAgICovXG4gICAgcHVibGljIGxvZ1dhcm5pbmcobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gTG9nTGV2ZWwuV2FybmluZztcbiAgICAgICAgdGhpcy50b2FzdChsZXZlbCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ0luZm8obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhMb2dMZXZlbC5JbmZvLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nRGVidWcobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhMb2dMZXZlbC5EZWJ1ZywgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2cobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMudG9Db25zb2xlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtsZXZlbC50b1VwcGVyQ2FzZSgpfSAke25ldyBEYXRlKCl9ICR7dGhpcy5tb2R1bGV9OiAke21lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IElMb2dSZXN1bHQgPSBhd2FpdCBwb3N0KFwiL3Jlc3QvbG9nc1wiLCB7XG4gICAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgaW5zdGFuY2VvZiBPYmplY3QgPyBcIlwiIDogbWVzc2FnZSxcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5tb2R1bGUsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3QoTG9nTGV2ZWwuRXJyb3IsIFwiRmFpbGVkIHRvIHNlbmQgY2xpZW50LXNpZGUgbG9ncyB0byBzZXJ2ZXIuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2FzdChsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0b2FzdChgJHtsZXZlbC50b1VwcGVyQ2FzZSgpfTogJHttZXNzYWdlfWApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGRlbGV0ZV8sIGdldCwgSVF1ZXJ5UGFyYW1zLCBwYXRjaCwgcG9zdCwgcG9zdEZvcm0sIHB1dCwgcHV0Rm9ybSB9IGZyb20gXCIuL0FwaUhlbHBlclwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7IElDb2xvciwgSUdyYXBlLCBJR3JhcGVGb3JtLCBJTW9zdENvbW1vblB1cmNoYXNlRGF0ZSwgSVByb2R1Y2VyLCBJUHJvZHVjZXJGb3JtLCBJUHVyY2hhc2UsXG4gICAgICAgICBJUHVyY2hhc2VDb3VudCwgSVB1cmNoYXNlRm9ybSwgSVJlZ2lvbiwgSVJlZ2lvbkZvcm0sIElTdG9yZSwgSVN0b3JlRm9ybSwgSVRvcEVudGl0eSxcbiAgICAgICAgIElUb3RhbExpdGVycywgSVZpdGlBcmVhLCBJVml0aUFyZWFGb3JtLCBJVml0aUFyZWFTdGF0cywgSVdpbmUsIElXaW5lQ291bnQsIElXaW5lRm9ybSxcbiAgICAgICAgIElXaW5lR3JhcGUsIElXaW5lR3JhcGVzRm9ybSwgSVdpbmVQYXRjaEZvcm0sIElXaW5lVHlwZSwgSVdpbmVUeXBlRm9ybSB9IGZyb20gXCIuL1Jlc3RcIjtcbmltcG9ydCB7IElSZXN0TW9kZWwgfSBmcm9tIFwiLi9SZXN0VHlwZXNcIjtcbmltcG9ydCB7IElEaWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGljdChtb2RlbHM6IElSZXN0TW9kZWxbXSk6IElEaWN0PHN0cmluZyB8IG51bGw+IHtcbiAgICBjb25zdCByZXN1bHQ6IElEaWN0PHN0cmluZyB8IG51bGw+ID0ge307XG4gICAgbW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICAgIHJlc3VsdFttb2RlbC5uYW1lXSA9IG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNsYXNzIEVtcHR5UmVzdWx0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgcHVibGljIHN0YXRpYyBpc0luc3RhbmNlKGVycjogRXJyb3IpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGVyci5uYW1lID09PSB0aGlzLk5BTUU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgTkFNRSA9IFwiRW1wdHlSZXN1bHRFcnJvclwiO1xuXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBFbXB0eVJlc3VsdEVycm9yLk5BTUU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub25OdWxscyhvYmo6IElEaWN0PHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCB1bmRlZmluZWQ+KTogSVF1ZXJ5UGFyYW1zIHtcbiAgICBjb25zdCBxOiBJUXVlcnlQYXJhbXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoaykgPT4gQm9vbGVhbihvYmpba10pKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIHFba10gPSBvYmpba10gYXMgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcbiAgICB9KTtcbiAgICByZXR1cm4gcTtcbn1cblxuZnVuY3Rpb24gc2luZ2xlRW50aXR5R2V0dGVyPFBhcmFtcywgUmVzcD4oXG4gICAgbGlzdEdldHRlcjogKHBhcmFtczogUGFyYW1zKSA9PiBQcm9taXNlPFJlc3BbXT4sXG4pOiAocGFyYW1zOiBQYXJhbXMpID0+IFByb21pc2U8UmVzcD4ge1xuICAgIC8vIFNoYXZlIG9mZiAnZ2V0J1xuICAgIGNvbnN0IG9iak5hbWUgPSBsaXN0R2V0dGVyLm5hbWUuc3Vic3RyKDMpO1xuICAgIHJldHVybiBhc3luYyAocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGxpc3RHZXR0ZXIocGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBSZWNlaXZlZCBtb3JlIHRoYW4gb25lICR7b2JqTmFtZX0gcmVzdWx0IHdoZW4gb25lIHdhcyBleHBlY3RlZGA7XG4gICAgICAgICAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKFwiUmVzdEFwaVwiKTtcbiAgICAgICAgICAgIGxvZ2dlci5sb2dFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgIHRocm93IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlPFJlcVBhcmFtcywgUmVzcCwgRm9ybT4oXG4gICAgbGlzdEdldHRlcjogKHBhcmFtczogUmVxUGFyYW1zKSA9PiBQcm9taXNlPFJlc3BbXT4sXG4gICAgY3JlYXRvcjogKGZvcm06IEZvcm0pID0+IFByb21pc2U8UmVzcD4sXG4pOiAocGFyYW1zOiBSZXFQYXJhbXMsIGZvcm06IEZvcm0pID0+IFByb21pc2U8UmVzcD4ge1xuICAgIGNvbnN0IG9iak5hbWUgPSBsaXN0R2V0dGVyLm5hbWUuc3Vic3RyKDMpO1xuICAgIHJldHVybiBhc3luYyAocGFyYW1zLCBmb3JtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBsaXN0R2V0dGVyKHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbmV3T2JqID0gYXdhaXQgY3JlYXRvcihmb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgUmVjZWl2ZWQgbW9yZSB0aGFuIG9uZSAke29iak5hbWV9IHJlc3VsdCB3aGVuIG9uZSB3YXMgZXhwZWN0ZWRgO1xuICAgICAgICBuZXcgTG9nZ2VyKFwiUmVzdEFwaVwiKS5sb2dFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgdGhyb3cgRXJyb3IobWVzc2FnZSk7XG4gICAgfTtcbn1cblxuLyogQ09MT1JTICovXG5pbnRlcmZhY2UgSUdldENvbG9yUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29sb3JzKHsgaWQsIG5hbWUgfTogSUdldENvbG9yUGFyYW1zKTogUHJvbWlzZTxJQ29sb3JbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lIH0pO1xuICAgIGNvbnN0IGNvbG9yczogSUNvbG9yW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9jb2xvcnNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgaWYgKGNvbG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVtcHR5UmVzdWx0RXJyb3IoXCJFbXB0eSByZXN1bHQgcmV0dXJuZWQgZm9yIGNvbG9yXCIpO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3JzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q29sb3IgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0Q29sb3JzKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcENvbG9ycygpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9jb2xvcnMvdG9wXCIpO1xufVxuXG4vKiBHUkFQRVMgKi9cbmludGVyZmFjZSBJR2V0R3JhcGVzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R3JhcGVzKHsgaWQsIG5hbWUgfTogSUdldEdyYXBlc1BhcmFtcyk6IFByb21pc2U8SUdyYXBlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgbmFtZSB9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvZ3JhcGVzXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0R3JhcGUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0R3JhcGVzKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZUdyYXBlID0gZ2V0T3JDcmVhdGUoZ2V0R3JhcGVzLCBjcmVhdGVHcmFwZSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcmFwZShncmFwZTogSUdyYXBlRm9ybSk6IFByb21pc2U8SUdyYXBlPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC9ncmFwZXNcIiwgZ3JhcGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR3JhcGUoaWQ6IG51bWJlciwgZ3JhcGU6IElHcmFwZUZvcm0pOiBQcm9taXNlPElHcmFwZT4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L2dyYXBlcy8ke2lkfWAsIGdyYXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcEdyYXBlcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9ncmFwZXMvdG9wXCIsIG5vbk51bGxQYXJhbXMpO1xufVxuXG4vKiBQUk9EVUNFUlMgKi9cbmludGVyZmFjZSBJR2V0UHJvZHVjZXJzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHJlZ2lvbklkPzogbnVtYmVyO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmUtbGVuZ3RoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjZXJzKHtpZCwgbmFtZSwgcmVnaW9uSWR9OiBJR2V0UHJvZHVjZXJzUGFyYW1zKTogUHJvbWlzZTxJUHJvZHVjZXJbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7aWQsIG5hbWUsIHJlZ2lvbl9pZDogcmVnaW9uSWR9KTtcbiAgICBjb25zdCBwcm9kdWNlcnM6IElQcm9kdWNlcltdID0gYXdhaXQgZ2V0KFwiL3Jlc3QvcHJvZHVjZXJzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiBwcm9kdWNlcnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWNlciA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRQcm9kdWNlcnMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlUHJvZHVjZXIgPSBnZXRPckNyZWF0ZShnZXRQcm9kdWNlcnMsIGNyZWF0ZVByb2R1Y2VyKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y2VyKHByb2R1Y2VyOiBJUHJvZHVjZXJGb3JtKTogUHJvbWlzZTxJUHJvZHVjZXI+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3Byb2R1Y2Vyc1wiLCBwcm9kdWNlcik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWNlcihwcm9kdWNlcjogSVByb2R1Y2VyKTogUHJvbWlzZTxJUHJvZHVjZXI+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9wcm9kdWNlcnMvJHtwcm9kdWNlci5pZH1gLCBwcm9kdWNlcik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWNlcihpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGRlbGV0ZV8oYC9yZXN0L3Byb2R1Y2Vycy8ke2lkfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wUHJvZHVjZXJzKGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxJVG9wRW50aXR5W10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe2xpbWl0fSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3Byb2R1Y2Vycy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFBVUkNIQVNFUyAqL1xuaW50ZXJmYWNlIElHZXRQdXJjaGFzZXNQYXJhbXMge1xuICAgIHdpbmVJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFB1cmNoYXNlcyh7d2luZUlkfTogSUdldFB1cmNoYXNlc1BhcmFtcyk6IFByb21pc2U8SVB1cmNoYXNlW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyB3aW5lX2lkOiB3aW5lSWQgfSk7XG4gICAgY29uc3QgcHVyY2hhc2VzID0gYXdhaXQgZ2V0PElQdXJjaGFzZVtdPihcIi9yZXN0L3B1cmNoYXNlc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gcHVyY2hhc2VzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2UocHVyY2hhc2U6IElQdXJjaGFzZUZvcm0pOiBQcm9taXNlPElQdXJjaGFzZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvcHVyY2hhc2VzXCIsIHB1cmNoYXNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVB1cmNoYXNlKGlkOiBudW1iZXIsIHB1cmNoYXNlOiBJUHVyY2hhc2VGb3JtKTogUHJvbWlzZTxJUHVyY2hhc2U+IHtcbiAgICByZXR1cm4gcHV0KGAvcmVzdC9wdXJjaGFzZXMvJHtpZH1gLCBwdXJjaGFzZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQdXJjaGFzZShpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGRlbGV0ZV8oYC9yZXN0L3B1cmNoYXNlcy8ke2lkfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9zdENvbW1vblB1cmNoYXNlRGF0ZSgpOiBQcm9taXNlPElNb3N0Q29tbW9uUHVyY2hhc2VEYXRlPiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3B1cmNoYXNlcy9tb3N0LWNvbW1vbi1wdXJjaGFzZS1kYXRlXCIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG90YWxMaXRlcnMoKTogUHJvbWlzZTxJVG90YWxMaXRlcnM+IHtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcHVyY2hhc2VzL3RvdGFsLWxpdGVyc1wiKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFB1cmNoYXNlQ291bnQoKTogUHJvbWlzZTxJUHVyY2hhc2VDb3VudD4ge1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC9wdXJjaGFzZXMvY291bnRcIik7XG59XG5cbi8qIFJFR0lPTlMgKi9cbmludGVyZmFjZSBJR2V0UmVnaW9uUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHByb2R1Y2VyTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlZ2lvbnMoeyBpZCwgbmFtZSwgcHJvZHVjZXJOYW1lIH06IElHZXRSZWdpb25QYXJhbXMpOiBQcm9taXNlPElSZWdpb25bXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lLCBwcm9kdWNlcl9uYW1lOiBwcm9kdWNlck5hbWUgfSk7XG4gICAgY29uc3QgcmVnaW9uczogSVJlZ2lvbltdID0gYXdhaXQgZ2V0KFwiL3Jlc3QvcmVnaW9uc1wiLCBub25OdWxsUGFyYW1zKTtcbiAgICByZXR1cm4gcmVnaW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlZ2lvbiA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRSZWdpb25zKTtcbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVJlZ2lvbiA9IGdldE9yQ3JlYXRlKGdldFJlZ2lvbnMsIGNyZWF0ZVJlZ2lvbik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZWdpb24ocmVnaW9uOiBJUmVnaW9uRm9ybSk6IFByb21pc2U8SVJlZ2lvbj4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3QvcmVnaW9uc1wiLCByZWdpb24pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUmVnaW9uKHJlZ2lvbjogSVJlZ2lvbik6IFByb21pc2U8SVJlZ2lvbj4ge1xuICAgIHJldHVybiBwdXQoYC9yZXN0L3JlZ2lvbnMvJHtyZWdpb24uaWR9YCwgcmVnaW9uKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFJlZ2lvbnMobGltaXQ/OiBudW1iZXIpOiBQcm9taXNlPElUb3BFbnRpdHlbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7bGltaXR9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3QvcmVnaW9ucy90b3BcIiwgbm9uTnVsbFBhcmFtcyk7XG59XG5cbi8qIFNUT1JFUyAqL1xuaW50ZXJmYWNlIElHZXRTdG9yZVBhcmFtcyB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0b3Jlcyh7aWQsIG5hbWV9OiBJR2V0U3RvcmVQYXJhbXMpOiBQcm9taXNlPElTdG9yZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtpZCwgbmFtZX0pO1xuICAgIGNvbnN0IHN0b3JlczogSVN0b3JlW10gPSBhd2FpdCBnZXQoXCIvcmVzdC9zdG9yZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHN0b3Jlcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0b3JlID0gc2luZ2xlRW50aXR5R2V0dGVyKGdldFN0b3Jlcyk7XG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVTdG9yZSA9IGdldE9yQ3JlYXRlKGdldFN0b3JlcywgY3JlYXRlU3RvcmUpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3RvcmUoc3RvcmU6IElTdG9yZUZvcm0pOiBQcm9taXNlPElTdG9yZT4ge1xuICAgIHJldHVybiBwb3N0KFwiL3Jlc3Qvc3RvcmVzXCIsIHN0b3JlKTtcbn1cblxuLyogVklUSSBBUkVBUyAqL1xuaW50ZXJmYWNlIElHZXRWaXRpQXJlYXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcmVnaW9uTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZpdGlBcmVhcyhcbiAgICB7IGlkLCBuYW1lLCByZWdpb25OYW1lIH06IElHZXRWaXRpQXJlYXNQYXJhbXMsXG4pOiBQcm9taXNlPElWaXRpQXJlYVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHsgaWQsIG5hbWUsIHJlZ2lvbl9uYW1lOiByZWdpb25OYW1lIH0pO1xuICAgIGNvbnN0IHZpdGlBcmVhczogSVZpdGlBcmVhW10gPSBhd2FpdCBnZXQoXCIvcmVzdC92aXRpLWFyZWFzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB2aXRpQXJlYXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRWaXRpQXJlYSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRWaXRpQXJlYXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlVml0aUFyZWEgPSBnZXRPckNyZWF0ZShnZXRWaXRpQXJlYXMsIGNyZWF0ZVZpdGlBcmVhKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVZpdGlBcmVhKHZpdGlBcmVhOiBJVml0aUFyZWFGb3JtKTogUHJvbWlzZTxJVml0aUFyZWE+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3ZpdGktYXJlYXNcIiwgdml0aUFyZWEpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVml0aUFyZWEodml0aUFyZWE6IElWaXRpQXJlYSk6IFByb21pc2U8SVZpdGlBcmVhPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3Qvdml0aS1hcmVhcy8ke3ZpdGlBcmVhLmlkfWAsIHZpdGlBcmVhKTtcbn1cblxuaW50ZXJmYWNlIElHZXRWaXRpQXJlYVN0YXRzUGFyYW1zIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICByZWdpb25JZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZpdGlBcmVhU3RhdHMoXG4gICAgeyBpZCwgcmVnaW9uSWQgfTogSUdldFZpdGlBcmVhU3RhdHNQYXJhbXMsXG4pOiBQcm9taXNlPElWaXRpQXJlYVN0YXRzW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoeyBpZCwgcmVnaW9uX2lkOiByZWdpb25JZCB9KTtcbiAgICByZXR1cm4gZ2V0KFwiL3Jlc3Qvdml0aS1hcmVhcy9zdGF0c1wiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFZpdGlBcmVhcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC92aXRpLWFyZWFzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuLyogV0lORVMgKi9cbmludGVyZmFjZSBJR2V0V2luZXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIHByb2R1Y2VySWQ/OiBudW1iZXI7XG4gICAgcmVnaW9uSWQ/OiBudW1iZXI7XG4gICAgdml0aUFyZWFJZD86IG51bWJlcjtcbiAgICB3aW5lVHlwZUlkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2luZXMoXG4gICAgeyBpZCwgcHJvZHVjZXJJZCwgcmVnaW9uSWQsIHZpdGlBcmVhSWQsIHdpbmVUeXBlSWQgfTogSUdldFdpbmVzUGFyYW1zLFxuKTogUHJvbWlzZTxJV2luZVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtcbiAgICAgICAgaWQsIHJlZ2lvbl9pZDogcmVnaW9uSWQsIHByb2R1Y2VyX2lkOiBwcm9kdWNlcklkLFxuICAgICAgICB2aXRpX2FyZWFfaWQ6IHZpdGlBcmVhSWQsIHdpbmVfdHlwZV9pZDogd2luZVR5cGVJZCxcbiAgICB9KTtcbiAgICBjb25zdCB3aW5lczogSVdpbmVbXSA9IGF3YWl0IGdldChcIi9yZXN0L3dpbmVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB3aW5lcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFdpbmUgPSBzaW5nbGVFbnRpdHlHZXR0ZXIoZ2V0V2luZXMpO1xuXG5jb25zdCBjcmVhdGVXaW5lSHR0cEZvcm0gPSAod2luZTogSVdpbmVGb3JtLCBmaWxlOiBGaWxlIHwgbnVsbCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtLmFwcGVuZChcIndpbmVfZm9ybVwiLCBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkod2luZSldLCB7dHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCJ9KSk7XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJpbWFnZVwiLCBmaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZSh3aW5lOiBJV2luZUZvcm0sIGZpbGU6IEZpbGUgfCBudWxsKTogUHJvbWlzZTxJV2luZT4ge1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVXaW5lSHR0cEZvcm0od2luZSwgZmlsZSk7XG4gICAgcmV0dXJuIHBvc3RGb3JtKFwiL3Jlc3Qvd2luZXNcIiwgZm9ybSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVXaW5lKGlkOiBudW1iZXIsIHdpbmU6IElXaW5lRm9ybSwgZmlsZTogRmlsZSB8IG51bGwpOiBQcm9taXNlPElXaW5lPiB7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVdpbmVIdHRwRm9ybSh3aW5lLCBmaWxlKTtcbiAgICByZXR1cm4gcHV0Rm9ybShgL3Jlc3Qvd2luZXMvJHtpZH1gLCBmb3JtKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnRVcGRhdGVXaW5lKGlkOiBudW1iZXIsIHdpbmU6IElXaW5lUGF0Y2hGb3JtKTogUHJvbWlzZTxJV2luZT4ge1xuICAgIHJldHVybiBwYXRjaChgL3Jlc3Qvd2luZXMvJHtpZH1gLCB3aW5lKTtcbn1cblxuaW50ZXJmYWNlIElTZWFyY2hXaW5lc1BhcmFtcyB7XG4gICAgY29sb3JMaWtlPzogc3RyaW5nO1xuICAgIHdpbmVUeXBlTGlrZT86IHN0cmluZztcbiAgICBwcm9kdWNlckxpa2U/OiBzdHJpbmc7XG4gICAgcmVnaW9uTGlrZT86IHN0cmluZztcbiAgICB2aXRpQXJlYUxpa2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hXaW5lcyhcbiAgICB7IGNvbG9yTGlrZSwgd2luZVR5cGVMaWtlLCBwcm9kdWNlckxpa2UsIHJlZ2lvbkxpa2UsIHZpdGlBcmVhTGlrZSB9OiBJU2VhcmNoV2luZXNQYXJhbXMsXG4pOiBQcm9taXNlPElXaW5lW10+IHtcbiAgICBjb25zdCBub25OdWxsUGFyYW1zID0gbm9uTnVsbHMoe1xuICAgICAgICBjb2xvcl9saWtlOiBjb2xvckxpa2UsIHdpbmVfdHlwZV9saWtlOiB3aW5lVHlwZUxpa2UsIHByb2R1Y2VyX2xpa2U6IHByb2R1Y2VyTGlrZSxcbiAgICAgICAgcmVnaW9uX2xpa2U6IHJlZ2lvbkxpa2UsIHZpdGlfYXJlYV9saWtlOiB2aXRpQXJlYUxpa2UsXG4gICAgfSk7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3dpbmVzL3NlYXJjaFwiLCBub25OdWxsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVWYXJpZXRpZXMoKTogUHJvbWlzZTxJV2luZUNvdW50PiB7XG4gICAgcmV0dXJuIGdldChcIi9yZXN0L3dpbmVzL2NvdW50XCIpO1xufVxuXG4vKiBXSU5FIEdSQVBFUyAqL1xuaW50ZXJmYWNlIElHZXRXaW5lR3JhcGVzUGFyYW1zIHtcbiAgICB3aW5lSWQ/OiBudW1iZXI7XG4gICAgZ3JhcGVJZD86IG51bWJlcjtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lLWxlbmd0aFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdpbmVHcmFwZXMoeyB3aW5lSWQsIGdyYXBlSWQgfTogSUdldFdpbmVHcmFwZXNQYXJhbXMpOiBQcm9taXNlPElXaW5lR3JhcGVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IHdpbmVfaWQ6IHdpbmVJZCwgZ3JhcGVfaWQ6IGdyYXBlSWQgfSk7XG4gICAgY29uc3Qgd2luZUdyYXBlczogSVdpbmVHcmFwZVtdID0gYXdhaXQgZ2V0KFwiL3Jlc3Qvd2luZS1ncmFwZXNcIiwgbm9uTnVsbFBhcmFtcyk7XG4gICAgcmV0dXJuIHdpbmVHcmFwZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5lR3JhcGVzKHdpbmVHcmFwZXM6IElXaW5lR3JhcGVzRm9ybSk6IFByb21pc2U8SVdpbmVHcmFwZVtdPiB7XG4gICAgcmV0dXJuIHBvc3QoXCIvcmVzdC93aW5lLWdyYXBlc1wiLCB3aW5lR3JhcGVzKTtcbn1cblxuLyogV0lORSBUWVBFUyAqL1xuaW50ZXJmYWNlIElHZXRXaW5lVHlwZXNQYXJhbXMge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaW5lVHlwZXMoeyBpZCwgbmFtZSB9OiBJR2V0V2luZVR5cGVzUGFyYW1zKTogUHJvbWlzZTxJV2luZVR5cGVbXT4ge1xuICAgIGNvbnN0IG5vbk51bGxQYXJhbXMgPSBub25OdWxscyh7IGlkLCBuYW1lIH0pO1xuICAgIGNvbnN0IHdpbmVUeXBlczogSVdpbmVUeXBlW10gPSBhd2FpdCBnZXQoXCIvcmVzdC93aW5lLXR5cGVzXCIsIG5vbk51bGxQYXJhbXMpO1xuICAgIHJldHVybiB3aW5lVHlwZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRXaW5lVHlwZSA9IHNpbmdsZUVudGl0eUdldHRlcihnZXRXaW5lVHlwZXMpO1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlV2luZVR5cGUgPSBnZXRPckNyZWF0ZShnZXRXaW5lVHlwZXMsIGNyZWF0ZVdpbmVUeXBlKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdpbmVUeXBlKHdpbmVUeXBlOiBJV2luZVR5cGVGb3JtKTogUHJvbWlzZTxJV2luZVR5cGU+IHtcbiAgICByZXR1cm4gcG9zdChcIi9yZXN0L3dpbmUtdHlwZXNcIiwgd2luZVR5cGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2luZVR5cGUod2luZVR5cGU6IElXaW5lVHlwZSk6IFByb21pc2U8SVdpbmVUeXBlPiB7XG4gICAgcmV0dXJuIHB1dChgL3Jlc3Qvd2luZS10eXBlcy8ke3dpbmVUeXBlLmlkfWAsIHdpbmVUeXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvcFdpbmVUeXBlcyhsaW1pdD86IG51bWJlcik6IFByb21pc2U8SVRvcEVudGl0eVtdPiB7XG4gICAgY29uc3Qgbm9uTnVsbFBhcmFtcyA9IG5vbk51bGxzKHtsaW1pdH0pO1xuICAgIHJldHVybiBnZXQoXCIvcmVzdC93aW5lLXR5cGVzL3RvcFwiLCBub25OdWxsUGFyYW1zKTtcbn1cbiIsIi8qKiBCYXNpYyB0eXBlIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHJlc3BvbnNlIEpTT04gb2YgbWFueSBhc3luY2hyb25vdXMgcmVxdWVzdHMuICovXG5pbXBvcnQgeyBJUmVzdE1vZGVsIH0gZnJvbSBcIi4vUmVzdFR5cGVzXCI7XG5cbi8qKlxuICogS2V5LXZhbHVlIHN0b3JlIHdoZXJlIHRoZSBrZXkgbXVzdCBiZSBhIHN0cmluZywgYnV0IHRoZSB2YWx1ZSBpcyBvZiBhbnkgdHlwZVxuICogVC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRGljdDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgb2JqZWN0cyB0byBhIHNpbmdsZSBvYmplY3Qgb2YgbmFtZXMgdG8gbnVsbCBmb3IgdXNlIHdpdGggbWF0ZXJpYWxpemVcbiAqIGF1dG9jb21wbGV0ZS5cbiAqIEBwYXJhbSBvYmplY3RzIEFuIGFycmF5IG9mIFJFU1QgbW9kZWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXN0TW9kZWxzVG9OYW1lRGljdChvYmplY3RzOiBJUmVzdE1vZGVsW10pOiBJRGljdDxudWxsPiB7XG4gICAgY29uc3QgZGljdDogSURpY3Q8bnVsbD4gPSB7fTtcbiAgICBvYmplY3RzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgIGRpY3Rbb2JqLm5hbWVdID0gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gZGljdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiA4LWRpZ2l0IG51bWJlciBvZiBmb3JtYXQgJ3l5eXltbWRkJyB0byBhIERhdGUgb2JqZWN0LlxuICogQHBhcmFtIG51bSBhIGRhdGUgbnVtYmVyIG9mIGZvcm1hdCAneXl5eW1tZGQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBudW1Ub0RhdGUobnVtOiBudW1iZXIpOiBEYXRlIHtcbiAgICBjb25zdCBzdHJOdW0gPSBgJHtudW19YDtcbiAgICBpZiAoc3RyTnVtLmxlbmd0aCAhPT0gOCkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgZGF0ZSBudW1iZXIgJyR7c3RyTnVtfSdgKTtcbiAgICB9XG4gICAgY29uc3QgeWVhciA9IHN0ck51bS5zdWJzdHIoMCwgNCk7XG4gICAgY29uc3QgbW9udGggPSBzdHJOdW0uc3Vic3RyKDQsIDIpO1xuICAgIGNvbnN0IGRheSA9IHN0ck51bS5zdWJzdHIoNiwgMik7XG4gICAgLy8gSlMgbW9udGhzIGFyZSAwLWJhc2VkXG4gICAgcmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHllYXIsIDEwKSwgcGFyc2VJbnQobW9udGgsIDEwKSAtIDEsIHBhcnNlSW50KGRheSwgMTApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb051bShkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICogMTBfMDAwICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpICogMTAwICsgZGF0ZS5nZXREYXRlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBFTl9EQVNIOiBzdHJpbmcgPSBcIuKAk1wiO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgdmludGFnZSB5ZWFyLCB3aGljaCBpcyB0d28geWVhcnMgcHJpb3IgdG8gdGhlIGN1cnJlbnRcbiAqIHllYXIuIFRoaXMgZnVuY3Rpb24gZHVwbGljYXRlcyB0aGUgUHl0aG9uIGZ1bmN0aW9uXG4gKiB2aW5vdGVjYS51dGlscy5kZWZhdWx0X3ZpbnRhZ2VfeWVhclxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFZpbnRhZ2VZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGFuIG9iamVjdCBpcyBlbXB0eSwgaS5lLiBoYXMgbm8ga2V5cy5cbiAqIEBwYXJhbSBvYmogQW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iajogb2JqZWN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIFJldHVybnMgcyB3aXRoIHRoZSBmaXJzdCBsZXR0ZXIgY2FwaXRhbGl6ZWQuXG4gKiBAcGFyYW0gcyBBIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHMubGVuZ3RoID4gMCA/IHNbMF0udG9VcHBlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpIDogXCJcIjtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGRpc3BsYXkgbmFtZSB0byBhbiBodG1sIGlkXG4gKiBAcGFyYW0gbmFtZSBBIGNvbXBvbmVudCBkaXNwbGF5IG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hbWVUb0lkKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvKFxccykrL2csIFwiLVwiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBtYXhpbXVtIGVsZW1lbnQgYnkgb25lIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSB0eXBlIG9mIGVsZW1lbnRcbiAqIEBwYXJhbSBhcnIgQW4gYXJyYXkgb2Ygb2JqY2VjdHNcbiAqIEBwYXJhbSBhY2Nlc3NvciBBIGZ1bmN0aW9uIGZvciBhY2Nlc3NpbmcgYSBudW1iZXIgcHJvcGVydHkgb2YgdGhlIG9iamVjdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heEJ5PFQ+KGFycjogVFtdLCBhY2Nlc3NvcjogKGVsZW06IFQpID0+IG51bWJlcik6IFQgfCB1bmRlZmluZWQge1xuICAgIGxldCBtYXhFbGVtOiBUIHwgdW5kZWZpbmVkO1xuICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHk7XG4gICAgZm9yIChjb25zdCBlbGVtIG9mIGFycikge1xuICAgICAgICBjb25zdCB2YWwgPSBhY2Nlc3NvcihlbGVtKTtcbiAgICAgICAgaWYgKHZhbCA+IG1heFZhbCkge1xuICAgICAgICAgICAgbWF4RWxlbSA9IGVsZW07XG4gICAgICAgICAgICBtYXhWYWwgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1heEVsZW07XG59XG5cbi8qKlxuICogU3VtcyBhbiBhcnJheSBvZiBvYmplY3RzIGJ5IG9uZSBvZiB0aGUgb2JqZWN0cycgcHJvcGVydGllcy5cbiAqIEBwYXJhbSBhcnIgQW4gYXJyYXkgb2Ygb2JqZWN0c1xuICogQHBhcmFtIGFjY2Vzc29yIEEgZnVuY3Rpb24gZm9yIGFjY2Vzc2luZyBvbmUgb2YgdGhlIG9iamVjdHMnIHByb3BlcnRpZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1bUJ5PFQ+KGFycjogVFtdLCBhY2Nlc3NvcjogKGVsZW06IFQpID0+IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChjb25zdCBlbGVtIG9mIGFycikge1xuICAgICAgICBzdW0gKz0gYWNjZXNzb3IoZWxlbSk7XG4gICAgfVxuICAgIHJldHVybiBzdW07XG59XG5cbi8qKlxuICogQ29tcGFyZXMgdHdvIG9iamVjdHMgZm9yIGRlZXAgZXF1YWxpdHkuXG4gKiBAcGFyYW0gYSBBbiBvYmplY3RcbiAqIEBwYXJhbSBiIEFuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJlRXF1YWwoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGNvbnN0IGJLZXlzID0gT2JqZWN0LmtleXMoYik7XG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrIG9mIGFLZXlzKSB7XG4gICAgICAgIGlmIChhW2tdICE9PSBiW2tdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmludGVyZmFjZSBJUmFuZ2VBcmdzIHtcbiAgICBzdGFydD86IG51bWJlcjtcbiAgICBzdG9wPzogbnVtYmVyO1xuICAgIHN0ZXA/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYWJsZSByYW5nZSBvZiBudW1iZXJzb25DbGljay5cbiAqIEBwYXJhbSBzdGFydCBGaXJzdCBudW1iZXIgb2YgdGhlIHJhbmdlXG4gKiBAcGFyYW0gc3RvcCBFbmQgb2YgdGhlIHJhbmdlIChub24taW5jbHVzaXZlKVxuICogQHBhcmFtIHN0ZXAgSW5jcmVtZW50IG9mIHRoZSByYW5nZVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHJhbmdlKHsgc3RhcnQsIHN0b3AsIHN0ZXAgfTogSVJhbmdlQXJncyk6IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPiB7XG4gICAgc3RlcCA9IHN0ZXAgfHwgMTtcbiAgICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gICAgc3RvcCA9IHN0b3AgfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgICAgIHlpZWxkIGk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW1hZ2VFeGlzdHMoaW1hZ2VVcmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW1hZ2VVcmwsIHttZXRob2Q6IFwiSEVBRFwifSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5vaztcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVBbmRUeXBlKG5hbWU6IHN0cmluZyB8IG51bGwsIHdpbmVUeXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHsobmFtZSA/IG5hbWUgKyBcIiBcIiA6IFwiXCIpfSR7d2luZVR5cGV9YDtcbn1cblxuLy8gVE9ETzogbW92ZSB0byB1c2UgUmVhY3Qgcm91dGVyIG9yIHNvbWV0aGluZyBzaW1pbGFyXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3QodXJsOiBzdHJpbmcpIHtcbiAgICBsb2NhdGlvbi5ocmVmID0gdXJsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2FkKGZ1bjogKCkgPT4gdm9pZCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bik7XG59XG4iLCJpbXBvcnQgeyBBdXRvY29tcGxldGUsIERyb3Bkb3duLCBTaWRlbmF2IH0gZnJvbSBcIm1hdGVyaWFsaXplLWNzc1wiO1xuaW1wb3J0IHsgSURpY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG50eXBlIE9uQ2hhbmdlID0gKGU6IHN0cmluZykgPT4gdm9pZDtcblxuLyoqIFNldHVwIGF1dG9jb21wbGV0aW9uIHdpdGggcHJvdmlkZWQgY29tcGxldGlvbiBvcHRpb25zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF1dG9jb21wbGV0ZShlbGVtOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uczogSURpY3Q8c3RyaW5nIHwgbnVsbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBPbkNoYW5nZSwgbWluTGVuZ3RoID0gMSwgbGltaXQgPSA1KSB7XG4gICAgaWYgKGVsZW0uY3VycmVudCkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICAgICAgbmV3IEF1dG9jb21wbGV0ZShlbGVtLmN1cnJlbnQsIHtcbiAgICAgICAgICAgIGRhdGE6IGNvbXBsZXRpb25zLFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICBtaW5MZW5ndGgsXG5cbiAgICAgICAgICAgIG9uQXV0b2NvbXBsZXRlOiBmdW5jdGlvbih0aGlzLCB0ZXh0KSB7ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG9iamVjdC1saXRlcmFsLXNob3J0aGFuZFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHRleHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZpeCBvdmVybGFwcHRpbmcgdGV4dCBidWdcbiAgICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZU5hdmJhclRhYihpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuLyoqIEVuYWJsZXMgbmF2YmFyIG1lbnVzLiBTaG91bGQgYmUgY2FsbGVkIG9uIGV2ZXJ5IHBhZ2UuICovXG5leHBvcnQgZnVuY3Rpb24gbmF2YmFyKGFjdGl2ZU5hdlRhYklkPzogc3RyaW5nKSB7XG4gICAgaWYgKGFjdGl2ZU5hdlRhYklkKSB7XG4gICAgICAgIGFjdGl2YXRlTmF2YmFyVGFiKGFjdGl2ZU5hdlRhYklkKTtcbiAgICB9XG4gICAgY29uc3Qgc2lkZU5hdkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVuYXZcIik7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgbmV3IFNpZGVuYXYoc2lkZU5hdkVsZW0hKTtcbiAgICBjb25zdCBkcm9wZG93bkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLXRyaWdnZXJcIik7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgbmV3IERyb3Bkb3duKGRyb3Bkb3duRWxlbSEpO1xufVxuXG4vKiogU2ltcGxpZmllcyBkaXNwbGF5aW5nIG9mIHRvYXN0IG1lc3NhZ2VzIHRvIHVzZXIgKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2FzdChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBNLnRvYXN0KHtcbiAgICAgICAgY2xhc3NlczogXCJyZWQtYmdcIixcbiAgICAgICAgZGlzcGxheUxlbmd0aDogMTAwMDAsXG4gICAgICAgIGh0bWw6IG1lc3NhZ2UsXG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9