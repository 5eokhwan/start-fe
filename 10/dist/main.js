/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _average__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./average */ \"./src/average.js\");\n/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random.js */ \"./src/random.js\");\n\r\n\r\n\r\nconsole.log(_average__WEBPACK_IMPORTED_MODULE_0__.avg(1, 2, 3, 4));\r\nconsole.log(_average__WEBPACK_IMPORTED_MODULE_0__.avg(1, 2));\r\nconsole.log(_average__WEBPACK_IMPORTED_MODULE_0__.avg(1, 2, 3, 4, 5, 6));\r\nconsole.log(_average__WEBPACK_IMPORTED_MODULE_0__.avg(1, \"a\", 2));\r\nconsole.log(_average__WEBPACK_IMPORTED_MODULE_0__.avg([1, 2, 3]));\r\n\r\nconsole.log(_random_js__WEBPACK_IMPORTED_MODULE_1__.random(0, 100));\r\nconsole.log(_random_js__WEBPACK_IMPORTED_MODULE_1__.random(3));\r\nconsole.log(_random_js__WEBPACK_IMPORTED_MODULE_1__.random(0, \"a\"));\r\n\n\n//# sourceURL=webpack://10/./src/app.js?");

/***/ }),

/***/ "./src/average.js":
/*!************************!*\
  !*** ./src/average.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avg\": () => (/* binding */ avg)\n/* harmony export */ });\nfunction avg() {\r\n  let arr, len;\r\n  if (typeof arguments[0] === \"object\") {\r\n    arr = arguments[0];\r\n    len = arguments[0].length;\r\n  } else {\r\n    len = arguments.length;\r\n    arr = [];\r\n    for (let i = 0; i < len; i++) {\r\n      arr.push(arguments[i]);\r\n    }\r\n  }\r\n  len = arr.length;\r\n  for (let i = 0; i < len; i++) {\r\n    if (arr[i] === undefined) break;\r\n    if (typeof arr[i] === \"string\") {\r\n      arr.splice(i--, 1);\r\n    }\r\n  }\r\n  len = arr.length;\r\n  return arr.reduce((acc, cur) => acc + cur, 0) / len;\r\n}\r\n\n\n//# sourceURL=webpack://10/./src/average.js?");

/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"random\": () => (/* binding */ random)\n/* harmony export */ });\nfunction random() {\r\n  const len = arguments.length;\r\n  let min, max;\r\n  if (len < 2) {\r\n    (min = 0), (max = arguments[0]);\r\n  } else (min = arguments[0]), (max = arguments[1]);\r\n  const result = Math.floor(Math.random() * (max + 1 - min) + min);\r\n  return isNaN(result) ? -1 : result;\r\n}\r\n\n\n//# sourceURL=webpack://10/./src/random.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;