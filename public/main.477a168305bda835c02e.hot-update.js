webpackHotUpdate("main",{

/***/ "./src/sagas.js":
/*!**********************!*\
  !*** ./src/sagas.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _callee; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/es/effects.js\");\n/* harmony import */ var lodash_fp_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/fp/identity */ \"./node_modules/lodash/fp/identity.js\");\n/* harmony import */ var lodash_fp_identity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_identity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_fp_startsWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/fp/startsWith */ \"./node_modules/lodash/fp/startsWith.js\");\n/* harmony import */ var lodash_fp_startsWith__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_startsWith__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api */ \"./src/api.js\");\n/* harmony import */ var containers_ViewParams_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! containers/ViewParams/constants */ \"./src/containers/ViewParams/constants.js\");\nvar _marked =\n/*#__PURE__*/\nregeneratorRuntime.mark(updateViewParams),\n    _marked2 =\n/*#__PURE__*/\nregeneratorRuntime.mark(_callee);\n\n\n\n\n\n\n\nfunction updateViewParams() {\n  var params, response;\n  return regeneratorRuntime.wrap(function updateViewParams$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(function (_ref) {\n            var viewParams = _ref.viewParams;\n            return viewParams;\n          });\n\n        case 2:\n          params = _context.sent;\n          _context.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(api__WEBPACK_IMPORTED_MODULE_3__[\"getGallery\"], params);\n\n        case 5:\n          response = _context.sent;\n          console.log(response);\n\n        case 7:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, this);\n}\n\nfunction _callee() {\n  return regeneratorRuntime.wrap(function _callee$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeEvery\"])('*', updateViewParams);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2FnYXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMuanM/NDJlZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQge2NhbGwsIHNlbGVjdCwgdGFrZUV2ZXJ5fSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gJ2xvZGFzaC9mcC9pZGVudGl0eSc7XG5pbXBvcnQgc3RhcnRzV2l0aCBmcm9tICdsb2Rhc2gvZnAvc3RhcnRzV2l0aCc7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnYXBpJztcblxuaW1wb3J0ICogYXMgYyBmcm9tICdjb250YWluZXJzL1ZpZXdQYXJhbXMvY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHtTYWdhfSBmcm9tICdyZWR1eC1zYWdhJztcblxuZnVuY3Rpb24qIHVwZGF0ZVZpZXdQYXJhbXMoKTogU2FnYTx2b2lkPiB7XG5cdGNvbnN0IHBhcmFtcyA9IHlpZWxkIHNlbGVjdCgoe3ZpZXdQYXJhbXN9KSA9PiB2aWV3UGFyYW1zKTtcblx0Y29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGFwaS5nZXRHYWxsZXJ5LCBwYXJhbXMpO1xuXG5cdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qKCk6IFNhZ2E8dm9pZD4ge1xuXHR5aWVsZCB0YWtlRXZlcnkoJyonLCB1cGRhdGVWaWV3UGFyYW1zKTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBSEE7QUFFQTtBQUVBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sagas.js\n");

/***/ })

})