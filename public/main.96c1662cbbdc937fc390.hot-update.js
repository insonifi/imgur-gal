webpackHotUpdate("main",{

/***/ "./src/components/DetailedAlbum.jsx":
/*!******************************************!*\
  !*** ./src/components/DetailedAlbum.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Score */ \"./src/components/Score.jsx\");\n/* harmony import */ var components_Votes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Votes */ \"./src/components/Votes.jsx\");\n\n\n\n\n\nvar styles = {\n  backdrop: {\n    background: 'rgba(0,0,0,0.1)',\n    position: 'fixed',\n    zIndex: 2,\n    left: 0,\n    right: 0,\n    top: 0,\n    bottom: 0\n  },\n  box: {\n    background: 'lightgray',\n    borderRadius: 8,\n    width: 'inherit',\n    height: 'inherit',\n    margin: 16\n  },\n  desc: {}\n};\n\nfunction DetailedAlbum(_ref) {\n  var classes = _ref.classes,\n      album = _ref.album,\n      image = _ref.image,\n      onClose = _ref.onClose;\n\n  if (!(album && image)) {\n    return null;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.backdrop,\n    onClick: onClose\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.box\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h4\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_Score__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    score: album.score\n  }), album.title, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_Votes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    up: album.ups,\n    down: album.downs\n  })), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", {\n    src: image.link\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n    className: classes.desc\n  }, image.description)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_jss__WEBPACK_IMPORTED_MODULE_2___default()(styles)(DetailedAlbum));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXRhaWxlZEFsYnVtLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RldGFpbGVkQWxidW0uanN4PzIxZjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb21wb3NlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcblxuaW1wb3J0IHR5cGUge0ltYWdlfSBmcm9tICdjb250YWluZXJzL0ltYWdlcy90eXBlcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnY29tcG9uZW50cy9TY29yZSc7XG5pbXBvcnQgVm90ZXMgZnJvbSAnY29tcG9uZW50cy9Wb3Rlcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0YmFja2Ryb3A6IHtcblx0XHRiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjEpJyxcblx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHR6SW5kZXg6IDIsXG5cdFx0bGVmdDogMCxcblx0XHRyaWdodDogMCxcblx0XHR0b3A6IDAsXG5cdFx0Ym90dG9tOiAwLFxuXHR9LFxuXHRib3g6IHtcblx0XHRiYWNrZ3JvdW5kOiAnbGlnaHRncmF5Jyxcblx0XHRib3JkZXJSYWRpdXM6IDgsXG5cdFx0d2lkdGg6ICdpbmhlcml0Jyxcblx0XHRoZWlnaHQ6ICdpbmhlcml0Jyxcblx0XHRtYXJnaW46IDE2LFxuXHR9LFxuXHRkZXNjOiB7fSxcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG5cdGNsYXNzZXM6IE9iamVjdCxcblx0YWxidW06IE9iamVjdCB8IG51bGwsXG5cdGltYWdlOiBJbWFnZSxcblx0b25DbG9zZTogRnVuY3Rpb24sXG5cdG9wZW46IGJvb2xlYW4sXG59O1xuXG5mdW5jdGlvbiBEZXRhaWxlZEFsYnVtKHtjbGFzc2VzLCBhbGJ1bSwgaW1hZ2UsIG9uQ2xvc2V9OiBQcm9wcykge1xuXHRpZiAoIShhbGJ1bSAmJiBpbWFnZSkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2Ryb3B9IG9uQ2xpY2s9e29uQ2xvc2V9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cblx0XHRcdFx0PGg0PlxuXHRcdFx0XHRcdDxTY29yZSBzY29yZT17YWxidW0uc2NvcmV9IC8+XG5cdFx0XHRcdFx0e2FsYnVtLnRpdGxlfVxuXHRcdFx0XHRcdDxWb3RlcyB1cD17YWxidW0udXBzfSBkb3duPXthbGJ1bS5kb3duc30gLz5cblx0XHRcdFx0PC9oND5cblx0XHRcdFx0PGltZyBzcmM9e2ltYWdlLmxpbmt9IC8+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjfT57aW1hZ2UuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdFNoZWV0KHN0eWxlcykoRGV0YWlsZWRBbGJ1bSk7XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBakJBO0FBQ0E7QUEyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DetailedAlbum.jsx\n");

/***/ })

})