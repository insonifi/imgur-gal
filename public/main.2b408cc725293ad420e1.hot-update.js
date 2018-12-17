webpackHotUpdate("main",{

/***/ "./src/containers/Images/reducer.js":
/*!******************************************!*\
  !*** ./src/containers/Images/reducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return list; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/containers/Images/constants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {};\nfunction list() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"IMAGE\"]:\n      return _objectSpread({}, state, _defineProperty({}, action.payload.id, action.payload));\n\n    default:\n      return state;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9JbWFnZXMvcmVkdWNlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0ltYWdlcy9yZWR1Y2VyLmpzPzg4MzciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgYyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7UmVxdWVzdEFjdGlvbiwgSW1hZ2VJbmRleH0gZnJvbSAnLi90eXBlcyc7XG5cbnR5cGUgU3RhdGUgPSBJbWFnZUluZGV4O1xuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0KFxuXHRzdGF0ZTogU3RhdGUgPSBpbml0aWFsU3RhdGUsXG5cdGFjdGlvbjogUmVxdWVzdEFjdGlvblxuKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIGMuSU1BR0U6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0W2FjdGlvbi5wYXlsb2FkLmlkXTogYWN0aW9uLnBheWxvYWQsXG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBO0FBSUE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVBBO0FBU0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/containers/Images/reducer.js\n");

/***/ }),

/***/ "./src/reducers.js":
/*!*************************!*\
  !*** ./src/reducers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var containers_ViewParams_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! containers/ViewParams/reducer */ \"./src/containers/ViewParams/reducer.js\");\n/* harmony import */ var containers_List_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! containers/List/reducer */ \"./src/containers/List/reducer.js\");\n/* harmony import */ var containers_Images_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/Images/reducer */ \"./src/containers/Images/reducer.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  viewParams: containers_ViewParams_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  list: containers_List_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  images: containers_Images_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMuanM/ZDdkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHZpZXdQYXJhbXMgZnJvbSAnY29udGFpbmVycy9WaWV3UGFyYW1zL3JlZHVjZXInO1xuaW1wb3J0IGxpc3QgZnJvbSAnY29udGFpbmVycy9MaXN0L3JlZHVjZXInO1xuaW1wb3J0IGltYWdlcyBmcm9tICdjb250YWluZXJzL0ltYWdlcy9yZWR1Y2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzPCosICo+KHtcblx0dmlld1BhcmFtcyxcblx0bGlzdCxcblx0aW1hZ2VzLFxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducers.js\n");

/***/ })

})