webpackHotUpdate("main",{

/***/ "./src/components/Grid.jsx":
/*!*********************************!*\
  !*** ./src/components/Grid.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var containers_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/List */ \"./src/containers/List/index.js\");\n/* harmony import */ var components_Album__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Album */ \"./src/components/Album.jsx\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nvar styles = {\n  container: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    justifyContent: 'center'\n  }\n};\n\nfunction Grid(_ref) {\n  var classes = _ref.classes,\n      list = _ref.list,\n      images = _ref.images,\n      requestImage = _ref.requestImage;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.container\n  }, list.map(function (album) {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_Album__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _extends({\n      key: album.id\n    }, {\n      album: album,\n      images: images,\n      requestImage: requestImage\n    }));\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(react_jss__WEBPACK_IMPORTED_MODULE_2___default()(styles), containers_List__WEBPACK_IMPORTED_MODULE_3__[\"withList\"], withImages)(Grid));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HcmlkLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dyaWQuanN4PzQ3MWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb21wb3NlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcblxuaW1wb3J0IHt3aXRoTGlzdH0gZnJvbSAnY29udGFpbmVycy9MaXN0JztcbmltcG9ydCBBbGJ1bSBmcm9tICdjb21wb25lbnRzL0FsYnVtJztcblxudHlwZSBQcm9wcyA9IHtcblx0Y2xhc3NlczogT2JqZWN0LFxuXHRsaXN0OiBBcnJheTwqPixcblx0aW1hZ2VzOiBNYXA8c3RyaW5nLCBPYmplY3Q+LFxuXHRyZXF1ZXN0SW1hZ2U6IEZ1bmN0aW9uLFxufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0ZmxleFdyYXA6ICd3cmFwJyxcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdH0sXG59O1xuXG5mdW5jdGlvbiBHcmlkKHtjbGFzc2VzLCBsaXN0LCBpbWFnZXMsIHJlcXVlc3RJbWFnZX06IFByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cblx0XHRcdHtsaXN0Lm1hcChhbGJ1bSA9PiAoXG5cdFx0XHRcdDxBbGJ1bSBrZXk9e2FsYnVtLmlkfSB7Li4ue2FsYnVtLCBpbWFnZXMsIHJlcXVlc3RJbWFnZX19IC8+XG5cdFx0XHQpKX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0aW5qZWN0U2hlZXQoc3R5bGVzKSxcblx0d2l0aExpc3QsXG5cdHdpdGhJbWFnZXNcbikoR3JpZCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBS0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Grid.jsx\n");

/***/ })

})