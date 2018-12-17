webpackHotUpdate("main",{

/***/ "./src/components/DetailedAlbum.jsx":
/*!******************************************!*\
  !*** ./src/components/DetailedAlbum.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar styles = {\n  container: {\n    background: 'rgba(0,0,0,0.1)',\n    position: 'fixed',\n    zIndex: 2,\n    left: 0,\n    right: 0,\n    top: 0,\n    bottom: 0\n  },\n  box: {\n    background: 'lightgray',\n    borderRadius: 8\n  }\n};\n\nfunction DetailedAlbum(_ref) {\n  var classes = _ref.classes,\n      album = _ref.album,\n      image = _ref.image,\n      onClose = _ref.onClose;\n\n  if (!(album && image)) {\n    return null;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.container,\n    onClick: onClose\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.box\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h4\", null, album.title)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_jss__WEBPACK_IMPORTED_MODULE_2___default()(styles)(DetailedAlbum));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXRhaWxlZEFsYnVtLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RldGFpbGVkQWxidW0uanN4PzIxZjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb21wb3NlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcblxuaW1wb3J0IHR5cGUge0ltYWdlfSBmcm9tICdjb250YWluZXJzL0ltYWdlcy90eXBlcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0YmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC4xKScsXG5cdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0ekluZGV4OiAyLFxuXHRcdGxlZnQ6IDAsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0dG9wOiAwLFxuXHRcdGJvdHRvbTogMCxcblx0fSxcblx0Ym94OiB7XG5cdFx0YmFja2dyb3VuZDogJ2xpZ2h0Z3JheScsXG5cdFx0Ym9yZGVyUmFkaXVzOiA4LFxuXHR9LFxufTtcblxudHlwZSBQcm9wcyA9IHtcblx0Y2xhc3NlczogT2JqZWN0LFxuXHRhbGJ1bTogT2JqZWN0IHwgbnVsbCxcblx0aW1hZ2U6IEltYWdlLFxuXHRvbkNsb3NlOiBGdW5jdGlvbixcblx0b3BlbjogYm9vbGVhbixcbn07XG5cbmZ1bmN0aW9uIERldGFpbGVkQWxidW0oe2NsYXNzZXMsIGFsYnVtLCBpbWFnZSwgb25DbG9zZX06IFByb3BzKSB7XG5cdGlmICghKGFsYnVtICYmIGltYWdlKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IG9uQ2xpY2s9e29uQ2xvc2V9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cblx0XHRcdFx0PGg0PnthbGJ1bS50aXRsZX08L2g0PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdFNoZWV0KHN0eWxlcykoRGV0YWlsZWRBbGJ1bSk7XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFWQTtBQUNBO0FBdUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DetailedAlbum.jsx\n");

/***/ })

})