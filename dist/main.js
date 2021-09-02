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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\r\\n  width: 70%;\\r\\n  margin: auto;\\r\\n  padding: 20px;\\r\\n  margin-top: 100px;\\r\\n  background-color: rgb(233, 230, 230);\\r\\n  border: 1px solid rgb(61, 61, 60);\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\nbutton,\\r\\nli,\\r\\ninput,\\r\\n#addscorebtn {\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n.container > h1 {\\r\\n  margin-bottom: 30px;\\r\\n  font-size: 40px;\\r\\n}\\r\\n\\r\\n.leaderboard {\\r\\n  display: grid;\\r\\n  grid-template-columns: 60% 40%;\\r\\n}\\r\\n\\r\\n.refresh h2 {\\r\\n  display: inline;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.list-scores ul {\\r\\n  border: 1px solid black;\\r\\n  list-style-type: none;\\r\\n  width: 80%;\\r\\n  padding-left: 0;\\r\\n}\\r\\n\\r\\n.list-scores li:nth-child(odd) {\\r\\n  padding: 7px;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.list-scores li:nth-child(even) {\\r\\n  padding: 7px;\\r\\n  background-color: rgb(207, 204, 204);\\r\\n}\\r\\n\\r\\n.add-score {\\r\\n  padding-right: 10px;\\r\\n}\\r\\n\\r\\n.add-score h2 {\\r\\n  margin-top: 0;\\r\\n}\\r\\n\\r\\n.form-add div {\\r\\n  margin-bottom: 30px;\\r\\n}\\r\\n\\r\\ninput[type=\\\"text\\\"] {\\r\\n  padding: 10px 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\ninput[type=\\\"button\\\"] {\\r\\n  float: right;\\r\\n  padding: 5px 15px;\\r\\n}\\r\\n\\r\\n.errorDiv,\\r\\n.submitDivErr {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n#refreshbtn,\\r\\ninput[type=\\\"button\\\"] {\\r\\n  color: rgb(2, 2, 2);\\r\\n  margin-right: 20%;\\r\\n  float: right;\\r\\n  box-shadow: 3px 3px black;\\r\\n}\\r\\n\\r\\n#addscorebtn {\\r\\n  margin-right: 0;\\r\\n}\\r\\n\\r\\n@media (max-width: 417px) {\\r\\n  .leaderboard {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .list-scores ul {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\n/* eslint-disable no-trailing-spaces, comma-dangle */\r\nclass Board {\r\n  constructor() {\r\n    this.id = null;\r\n    this.flag = true;\r\n  }\r\n\r\n  async setId(id) {\r\n    let tokenId = id.result.substring(id.result.indexOf(':'));\r\n    tokenId = tokenId.substring(\r\n      tokenId.lastIndexOf(':') + 1,\r\n      tokenId.lastIndexOf(' '),\r\n    );\r\n    this.id = tokenId;\r\n  }\r\n\r\n  getId() {\r\n    return this.id;\r\n  }\r\n\r\n  createGame = async (name) => {\r\n    const gameName = { name };\r\n    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';\r\n    const response = await this.fetchApi(url, 'POST', gameName);\r\n    if (this.flag === false) {\r\n      document.getElementById('errorDiv').textContent = 'Bad Request, Please Try Again!!!';\r\n      setTimeout(() => {\r\n        document.getElementById('errorDiv').innerHTML = '';\r\n      }, 2000);\r\n    } else {\r\n      this.setId(response);\r\n    }\r\n  };\r\n  \r\n  displayScores = async () => {\r\n    if (this.id !== null) {\r\n      const scoresList = document.getElementById('ulList');\r\n      while (scoresList.firstChild) {\r\n        scoresList.removeChild(scoresList.firstChild);\r\n      }\r\n      const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${encodeURIComponent(\r\n        this.id\r\n      )}/scores/`;\r\n      const response = await this.fetchApi(url, 'GET');\r\n      response.result.forEach((element) => {\r\n        const item = document.createElement('li');\r\n        item.className = 'scoresList-items';\r\n        item.id = 'scoresList-items';\r\n        item.textContent = `${element.user}:${element.score}`;\r\n        scoresList.appendChild(item);\r\n      });\r\n    }\r\n  };\r\n\r\n  addScore = async () => {\r\n    const name = document.getElementById('name').value;\r\n    const score = document.getElementById('score').value;\r\n    if (name === '' || score === '') {\r\n      document.querySelector('.submitDivErr').textContent = 'Please provide a value for game name and score';\r\n      setTimeout(() => {\r\n        document.querySelector('.submitDivErr').innerHTML = '';\r\n      }, 1000);\r\n      return false;\r\n    }\r\n    if (this.id !== null) {\r\n      const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${encodeURIComponent(this.id)}/scores/`;\r\n      const newScore = {\r\n        user: document.getElementById('name').value,\r\n        score: document.getElementById('score').value,\r\n      };\r\n      const response = await this.fetchApi(url, 'POST', newScore);\r\n      if (response.result === 'Leaderboard score created correctly.') {\r\n        const scoresList = document.getElementById('ulList');\r\n        const item = document.createElement('li');\r\n        item.className = 'scoresList-items';\r\n        item.id = 'scoresList-items';\r\n        item.textContent = `${newScore.user}:${newScore.score}`;\r\n        scoresList.appendChild(item);\r\n      }\r\n    }\r\n    return true;\r\n  };\r\n\r\n  fetchApi = async (url, method, jsonBody = null) => {\r\n    const response = await fetch(url, {\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n        'Access-Control-Allow-Headers': 'Content-Type',\r\n        'Access-Control-Allow-Origin': '*',\r\n        'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS,GET',\r\n      },\r\n      method,\r\n      body: jsonBody !== null ? JSON.stringify(jsonBody) : String.empty,\r\n    })\r\n      .then((res) => res.json().then((data) => data))\r\n      .catch(() => {\r\n        this.flag = false;\r\n      });\r\n    return response;\r\n  };\r\n}\r\n/* eslint-enable no-trailing-spaces, comma-dangle */\n\n//# sourceURL=webpack://leaderboard/./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.js */ \"./src/board.js\");\n/* harmony import */ var _leaderBoard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaderBoard.js */ \"./src/leaderBoard.js\");\n\r\n\r\n\r\n\r\nconst board = (0,_leaderBoard_js__WEBPACK_IMPORTED_MODULE_2__.default)();\r\nconst root = document.getElementById('root');\r\nroot.appendChild(board);\r\n\r\nconst game = new _board_js__WEBPACK_IMPORTED_MODULE_1__.default();\r\n\r\nconst startGame = async () => {\r\n  await game.createGame('my cool game');\r\n};\r\nstartGame();\r\n\r\ndocument.getElementById('refreshbtn').addEventListener('click', () => {\r\n  game.displayScores();\r\n}, false);\r\n\r\ndocument.getElementById('addscorebtn').addEventListener('click', () => {\r\n  game.addScore();\r\n}, false);\r\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/leaderBoard.js":
/*!****************************!*\
  !*** ./src/leaderBoard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst leaderBoard = () => {\r\n  const scoresArray = [\r\n    { name: 'Elyor', score: 100 },\r\n    { name: 'Henry', score: 100 },\r\n    { name: 'Ali', score: 100 },\r\n    { name: 'Rosine', score: 100 },\r\n  ];\r\n  const errorDiv = document.createElement('div');\r\n  errorDiv.id = 'errorDiv';\r\n  errorDiv.className = 'errorDiv';\r\n  const container = document.createElement('div');\r\n  container.className = 'container';\r\n  const leaderBoardHeader = document.createElement('h1');\r\n  leaderBoardHeader.textContent = 'LeaderBoard';\r\n  container.appendChild(errorDiv);\r\n  container.appendChild(leaderBoardHeader);\r\n  const leaderboard = document.createElement('div');\r\n  leaderboard.className = 'leaderboard';\r\n  const scores = document.createElement('div');\r\n  scores.className = 'scores';\r\n  const refresh = document.createElement('div');\r\n  refresh.className = 'refresh';\r\n  const recentScores = document.createElement('h2');\r\n  recentScores.textContent = 'Recent scores';\r\n  const refreshBtn = document.createElement('button');\r\n  refreshBtn.id = 'refreshbtn';\r\n  refreshBtn.textContent = 'Refresh';\r\n  refresh.appendChild(recentScores);\r\n  refresh.appendChild(refreshBtn);\r\n  scores.appendChild(refresh);\r\n  const listScores = document.createElement('div');\r\n  listScores.className = 'list-scores';\r\n  const ulList = document.createElement('ul');\r\n  ulList.id = 'ulList';\r\n  scoresArray.forEach((element) => {\r\n    const items = document.createElement('li');\r\n    items.id = 'scoresList-items';\r\n    items.className = 'scoresList-items';\r\n    items.textContent = `${`${element.name}:${element.score}`}`;\r\n    ulList.appendChild(items);\r\n  });\r\n  listScores.appendChild(ulList);\r\n  scores.appendChild(listScores);\r\n  leaderboard.appendChild(scores);\r\n  const addScore = document.createElement('div');\r\n  addScore.className = 'add-score';\r\n  const addScoreHeader = document.createElement('h2');\r\n  addScoreHeader.textContent = 'Add Your Scores';\r\n  const formAddDiv = document.createElement('div');\r\n  formAddDiv.className = 'form-add';\r\n  const formAdd = document.createElement('form');\r\n  const playerNameDiv = document.createElement('div');\r\n  const playerName = document.createElement('input');\r\n  playerName.type = 'text';\r\n  playerName.id = 'name';\r\n  playerName.placeholder = 'Your name';\r\n  playerNameDiv.appendChild(playerName);\r\n  const playerScoreDiv = document.createElement('div');\r\n  const playerScore = document.createElement('input');\r\n  playerScore.type = 'text';\r\n  playerScore.id = 'score';\r\n  playerScore.placeholder = 'Your score';\r\n  playerScoreDiv.appendChild(playerScore);\r\n  const submitBtnDiv = document.createElement('div');\r\n  const submitBtn = document.createElement('input');\r\n  submitBtn.type = 'button';\r\n  submitBtn.id = 'addscorebtn';\r\n  submitBtn.value = 'Submit';\r\n  const submitDivErr = document.createElement('div');\r\n  submitDivErr.className = 'submitDivErr';\r\n  submitBtnDiv.appendChild(submitBtn);\r\n  formAdd.appendChild(playerNameDiv);\r\n  formAdd.appendChild(playerScoreDiv);\r\n  formAdd.appendChild(submitDivErr);\r\n  formAddDiv.appendChild(formAdd);\r\n  formAddDiv.appendChild(submitBtnDiv);\r\n  addScore.appendChild(addScoreHeader);\r\n  addScore.appendChild(formAddDiv);\r\n  leaderboard.appendChild(scores);\r\n  leaderboard.appendChild(addScore);\r\n  container.appendChild(leaderboard);\r\n  return container;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (leaderBoard);\n\n//# sourceURL=webpack://leaderboard/./src/leaderBoard.js?");

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