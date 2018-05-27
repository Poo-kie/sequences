/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../EnumeratedResult.js":
/*!******************************!*\
  !*** ../EnumeratedResult.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass EnumeratedResult {\n\n    async delayNext(t) {\n        await new Promise((res) => {setTimeout(res, t)});\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EnumeratedResult);\n\n//# sourceURL=webpack:///../EnumeratedResult.js?");

/***/ }),

/***/ "../OrderedPair.js":
/*!*************************!*\
  !*** ../OrderedPair.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EnumeratedResult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnumeratedResult.js */ \"../EnumeratedResult.js\");\n\n\n/**\n * Represents an ordered pair with x and y coordinate (x, y)\n */\nclass OrderedPair extends _EnumeratedResult_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    /**\n     * Create an ordered pair with x any y coordinates\n     * @param {Number} x coordinate\n     * @param {Number} y coordinate\n     */\n    constructor(x, y) {\n        super();\n        this.x = x;\n        this.y = y;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderedPair);\n\n//# sourceURL=webpack:///../OrderedPair.js?");

/***/ }),

/***/ "../cantorsZigZag.js":
/*!***************************!*\
  !*** ../cantorsZigZag.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _OrderedPair_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderedPair.js */ \"../OrderedPair.js\");\n\n\n/**\n * Enumerates all ordered pairs of the form (x, y)\n *   given the following rules\n *   1)  the sum x + y is represented in increasing order in each pair\n *   2)  for pairs with the same sum, smaller values of x appear first\n * @param {Number} maxResults max results to enumerate\n */\nfunction* cantorsZigZag(maxResults = undefined) {\n \n    var count = 0;\n\n    for (var i = 1; ; i++) {\n        for (var pair of getDecodedGroup(i)) {\n            \n            if (maxResults !== undefined && count === maxResults) return;\n            count++;\n\n            yield pair;\n        }\n    }\n\n    this.done = true;\n}\n\nfunction* getDecodedGroup(sum) {\n    \n    var x = 1;\n\n    for (var y = sum; y > 0; y--) {\n        yield new _OrderedPair_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x++, y);\n    } \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cantorsZigZag);\n\n//# sourceURL=webpack:///../cantorsZigZag.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony import */ var _cantorsZigZag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cantorsZigZag */ \"../cantorsZigZag.js\");\n/* harmony import */ var _OrderedPair__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OrderedPair */ \"../OrderedPair.js\");\n\n\n\nlet currentCoordinates = undefined;\n\nlet selectedSequence = undefined;\nlet canvas = undefined;\nlet context = undefined;\n\nfunction draw() {\n    \n    if (selectedSequence === undefined) selectedSequence = Object(_cantorsZigZag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(200);\n   \n    if (canvas === undefined) canvas = document.getElementById(\"exampleCanvas\");\n    if (context === undefined) context = canvas.getContext(\"2d\");\n\n    currentCoordinates = selectedSequence.next();\n\n    if (currentCoordinates.done) {\n        selectedSequence = undefined;\n        currentCoordinates = undefined;\n        return;\n    }\n\n    context.fillRect(currentCoordinates.value.x, currentCoordinates.value.y, 1, 1);\n    \n    window.requestAnimationFrame(draw);\n}\n\nwindow.requestAnimationFrame(draw);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });