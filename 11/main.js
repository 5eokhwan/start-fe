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

/***/ "./src/todos.css":
/*!***********************!*\
  !*** ./src/todos.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* CSS declarations go here */\\nbody {\\n  font-family: sans-serif;\\n  background-color: #315481;\\n  background-image: linear-gradient(to bottom, #315481, #918e82 100%);\\n  background-attachment: fixed;\\n\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n\\n  padding: 0;\\n  margin: 0;\\n\\n  font-size: 14px;\\n}\\n\\n.container {\\n  max-width: 600px;\\n  margin: 0 auto;\\n  min-height: 100%;\\n  background: white;\\n}\\n\\nheader {\\n  background: #d2edf4;\\n  background-image: linear-gradient(to bottom, #d0edf5, #e1e5f0 100%);\\n  padding: 20px 15px 15px 15px;\\n  position: relative;\\n}\\n\\n#login-buttons {\\n  display: block;\\n}\\n\\nh1 {\\n  font-size: 1.5em;\\n  margin: 0;\\n  margin-bottom: 10px;\\n  display: inline-block;\\n  margin-right: 1em;\\n}\\n\\nform {\\n  margin-top: 10px;\\n  margin-bottom: -10px;\\n  position: relative;\\n}\\n\\n.new-task input {\\n  box-sizing: border-box;\\n  padding: 10px 0;\\n  background: transparent;\\n  border: none;\\n  width: 100%;\\n  padding-right: 80px;\\n  font-size: 1em;\\n}\\n\\n.new-task input:focus {\\n  outline: 0;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  background: white;\\n}\\n\\n.delete {\\n  float: right;\\n  font-weight: bold;\\n  background: none;\\n  font-size: 1em;\\n  border: none;\\n  position: relative;\\n  cursor: pointer;\\n}\\n\\nli {\\n  position: relative;\\n  list-style: none;\\n  padding: 15px;\\n  border-bottom: #eee solid 1px;\\n}\\n\\nli .text {\\n  margin-left: 10px;\\n}\\n\\nli.checked {\\n  color: #888;\\n}\\n\\nli.checked .text {\\n  text-decoration: line-through;\\n}\\n\\nli.private {\\n  background: #eee;\\n  border-color: #ddd;\\n}\\n\\nheader .hide-completed {\\n  float: right;\\n}\\n\\n.toggle-private {\\n  margin-left: 5px;\\n}\\n\\n@media (max-width: 600px) {\\n  li {\\n    padding: 12px 15px;\\n  }\\n\\n  .search {\\n    width: 150px;\\n    clear: both;\\n  }\\n\\n  .new-task input {\\n    padding-bottom: 5px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://11/./src/todos.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://11/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/data-manager.js":
/*!*****************************!*\
  !*** ./src/data-manager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveData\": () => (/* binding */ saveData),\n/* harmony export */   \"loadData\": () => (/* binding */ loadData)\n/* harmony export */ });\nfunction saveData(data) {\r\n  localStorage.setItem('data', JSON.stringify(data));\r\n}\r\nfunction loadData() {\r\n  const dataString = localStorage.getItem('data') || '[]';\r\n  return JSON.parse(dataString);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://11/./src/data-manager.js?");

/***/ }),

/***/ "./src/form-input.js":
/*!***************************!*\
  !*** ./src/form-input.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-model */ \"./src/todo-model.js\");\n/* harmony import */ var _html_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-render */ \"./src/html-render.js\");\n\r\n\r\n\r\nconst $inputForm = document.querySelector('#input-form');\r\nconst $input = document.querySelector('#input');\r\n\r\nfunction init(data) {\r\n  $inputForm.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n\r\n    const text = $input.value;\r\n    if (!text) return;\r\n    $input.value = '';\r\n\r\n    data.push({\r\n      ..._todo_model__WEBPACK_IMPORTED_MODULE_0__.default,\r\n      text,\r\n      isDone: false,\r\n    });\r\n    (0,_html_render__WEBPACK_IMPORTED_MODULE_1__.render)(data);\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  init,\r\n});\r\n\n\n//# sourceURL=webpack://11/./src/form-input.js?");

/***/ }),

/***/ "./src/html-render.js":
/*!****************************!*\
  !*** ./src/html-render.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _data_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-manager */ \"./src/data-manager.js\");\n\r\n\r\nconst $result = document.querySelector('#result');\r\n\r\nfunction render(data) {\r\n  (0,_data_manager__WEBPACK_IMPORTED_MODULE_0__.saveData)(data);\r\n  const html = data.map(\r\n    (todo, index) => `<li data-index=\"${index}\">\r\n          <button class=\"delete\">×</button>\r\n          <input type=\"checkbox\" class=\"toggle-checked\" ${\r\n            todo.isDone ? 'checked' : ''\r\n          }/>\r\n          <span class=\"text\">${todo.text}</span>\r\n        </li>`,\r\n  );\r\n\r\n  $result.innerHTML = `<ul>${html.join('')}</ul>`;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://11/./src/html-render.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-manager */ \"./src/data-manager.js\");\n/* harmony import */ var _form_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-input */ \"./src/form-input.js\");\n/* harmony import */ var _html_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html-render */ \"./src/html-render.js\");\n/* harmony import */ var _todos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos.css */ \"./src/todos.css\");\n\n\n\n\n\nconst $result = document.querySelector('#result');\nconst todos = (0,_data_manager__WEBPACK_IMPORTED_MODULE_0__.loadData)();\n\n$result.addEventListener('click', (event) => {\n  const { className } = event.target;\n  if (className === 'delete') {\n    const { index } = event.target.parentElement.dataset;\n    todos.splice(index, 1);\n    (0,_html_render__WEBPACK_IMPORTED_MODULE_2__.render)(todos);\n  } else if (className === 'toggle-checked') {\n    const { index } = event.target.parentElement.dataset;\n    todos[index].isDone = !todos[index].isDone;\n    (0,_html_render__WEBPACK_IMPORTED_MODULE_2__.render)(todos);\n  }\n});\n\n_form_input__WEBPACK_IMPORTED_MODULE_1__.default.init(todos);\n(0,_html_render__WEBPACK_IMPORTED_MODULE_2__.render)(todos);\n\n\n//# sourceURL=webpack://11/./src/index.js?");

/***/ }),

/***/ "./src/todo-model.js":
/*!***************************!*\
  !*** ./src/todo-model.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  id: '',\r\n  text: '',\r\n  isDone: false,\r\n});\r\n\n\n//# sourceURL=webpack://11/./src/todo-model.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;