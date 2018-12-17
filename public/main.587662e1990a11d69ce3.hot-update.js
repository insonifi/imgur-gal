webpackHotUpdate("main",{

/***/ "./src/components/Grid.jsx":
/*!*********************************!*\
  !*** ./src/components/Grid.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var containers_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/List */ \"./src/containers/List/index.js\");\n\n\n\n\nvar styles = {\n  container: {\n    display: 'flex'\n  }\n};\n\nfunction Grid(_ref) {\n  var classes = _ref.classes,\n      list = _ref.list,\n      _ref$cols = _ref.cols,\n      cols = _ref$cols === void 0 ? 5 : _ref$cols;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.container\n  }, list.map(function (album) {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Album, {\n      desc: album\n    });\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(react_jss__WEBPACK_IMPORTED_MODULE_2___default()(styles), containers_List__WEBPACK_IMPORTED_MODULE_3__[\"withList\"])(Grid));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HcmlkLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dyaWQuanN4PzQ3MWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb21wb3NlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcblxuaW1wb3J0IHt3aXRoTGlzdH0gZnJvbSAnY29udGFpbmVycy9MaXN0JztcblxudHlwZSBQcm9wcyA9IHtcblx0Y2xhc3NlczogT2JqZWN0LFxuXHRsaXN0OiBBcnJheTwqPixcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHR9LFxufTtcblxuZnVuY3Rpb24gR3JpZCh7Y2xhc3NlcywgbGlzdCwgY29scyA9IDV9OiBQcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG5cdFx0XHR7bGlzdC5tYXAoYWxidW0gPT4gKFxuXHRcdFx0XHQ8QWxidW0gZGVzYz17YWxidW19IC8+XG5cdFx0XHQpKX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0aW5qZWN0U2hlZXQoc3R5bGVzKSxcblx0d2l0aExpc3RcbikoR3JpZCk7XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBREE7QUFLQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Grid.jsx\n");

/***/ }),

/***/ "./src/containers/App/index.jsx":
/*!**************************************!*\
  !*** ./src/containers/App/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_ViewParamsControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ViewParamsControl */ \"./src/components/ViewParamsControl.jsx\");\n/* harmony import */ var components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Grid */ \"./src/components/Grid.jsx\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var classes = _ref.classes;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_ViewParamsControl__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Grid, null));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9BcHAvaW5kZXguanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQXBwL2luZGV4LmpzeD8yZTllIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFZpZXdQYXJhbXNDb250cm9sIGZyb20gJ2NvbXBvbmVudHMvVmlld1BhcmFtc0NvbnRyb2wnO1xuaW1wb3J0IEdpcmQgZnJvbSAnY29tcG9uZW50cy9HcmlkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oe2NsYXNzZXN9OiB7Y2xhc3NlczogT2JqZWN0fSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8Vmlld1BhcmFtc0NvbnRyb2wgLz5cblx0XHRcdDxHcmlkIC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/App/index.jsx\n");

/***/ }),

/***/ "./src/containers/List/index.js":
/*!**************************************!*\
  !*** ./src/containers/List/index.js ***!
  \**************************************/
/*! exports provided: withList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withList\", function() { return withList; });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n// import {bindActionCreators} from 'redux';\n\n\nfunction mapStateToProps(_ref) {\n  var list = _ref.list;\n  return {\n    list: list\n  };\n}\n\nvar withList = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  withList: withList\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9MaXN0L2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvTGlzdC9pbmRleC5qcz84YTg0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbi8vIGltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHtsaXN0fSkge1xuXHRyZXR1cm4ge1xuXHRcdGxpc3QsXG5cdH07XG59XG5cbmV4cG9ydCBjb25zdCB3aXRoTGlzdCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKTtcblxuZXhwb3J0IGRlZmF1bHQge3dpdGhMaXN0fTtcbiJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/List/index.js\n");

/***/ })

})