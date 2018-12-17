webpackHotUpdate("main",{

/***/ "./src/components/Album.jsx":
/*!**********************************!*\
  !*** ./src/components/Album.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_fp_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/fp/noop */ \"./node_modules/lodash/fp/noop.js\");\n/* harmony import */ var lodash_fp_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_noop__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_fp_getOr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/fp/getOr */ \"./node_modules/lodash/fp/getOr.js\");\n/* harmony import */ var lodash_fp_getOr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_getOr__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar styles = {\n  album: {\n    height: 300,\n    width: 300\n  },\n  image: {\n    margin: 'auto',\n    objectFit: 'cover'\n  }\n};\nvar EMPTY = {};\n\nfunction Album(_ref) {\n  var classes = _ref.classes,\n      album = _ref.album,\n      images = _ref.images,\n      requestImage = _ref.requestImage;\n\n  var _getOr = lodash_fp_getOr__WEBPACK_IMPORTED_MODULE_3___default()(album.cover, EMPTY, images),\n      link = _getOr.link;\n\n  react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"](function () {\n    requestImage(album.cover);\n    return lodash_fp_noop__WEBPACK_IMPORTED_MODULE_2___default.a;\n  }, [album.id]);\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"figure\", {\n    className: classes.album\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", {\n    className: classes.image,\n    src: link\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"figcaption\", null, album.title));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_jss__WEBPACK_IMPORTED_MODULE_1___default()(styles)(Album));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbGJ1bS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbGJ1bS5qc3g/M2RlOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcbmltcG9ydCBub29wIGZyb20gJ2xvZGFzaC9mcC9ub29wJztcbmltcG9ydCBnZXRPciBmcm9tICdsb2Rhc2gvZnAvZ2V0T3InO1xuXG5pbXBvcnQgdHlwZSB7UmVxdWVzdEFjdGlvbiwgSW1hZ2VJbmRleH0gZnJvbSAnY29udGFpbmVycy9JbWFnZXMvdHlwZXMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGFsYnVtOiB7XG5cdFx0aGVpZ2h0OiAzMDAsXG5cdFx0d2lkdGg6IDMwMCxcblx0fSxcblx0aW1hZ2U6IHtcblx0XHRtYXJnaW46ICdhdXRvJyxcblx0XHRvYmplY3RGaXQ6ICdjb3ZlcicsXG5cdH0sXG59O1xuXG50eXBlIFByb3BzID0ge1xuXHRhbGJ1bTogT2JqZWN0LFxuXHRjbGFzc2VzOiBPYmplY3QsXG5cdGltYWdlczogSW1hZ2VJbmRleCxcblx0cmVxdWVzdEltYWdlOiBSZXF1ZXN0QWN0aW9uLFxufTtcblxuY29uc3QgRU1QVFkgPSB7fTtcblxuZnVuY3Rpb24gQWxidW0oe2NsYXNzZXMsIGFsYnVtLCBpbWFnZXMsIHJlcXVlc3RJbWFnZX06IFByb3BzKSB7XG5cdGNvbnN0IHtsaW5rfSA9IGdldE9yKGFsYnVtLmNvdmVyLCBFTVBUWSwgaW1hZ2VzKTtcblx0UmVhY3QudXNlRWZmZWN0KFxuXHRcdCgpID0+IHtcblx0XHRcdHJlcXVlc3RJbWFnZShhbGJ1bS5jb3Zlcik7XG5cblx0XHRcdHJldHVybiBub29wO1xuXHRcdH0sXG5cdFx0W2FsYnVtLmlkXVxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMuYWxidW19PlxuXHRcdFx0PGltZyBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IHNyYz17bGlua30gLz5cblx0XHRcdDxmaWdjYXB0aW9uPnthbGJ1bS50aXRsZX08L2ZpZ2NhcHRpb24+XG5cdFx0PC9maWd1cmU+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdFNoZWV0KHN0eWxlcykoQWxidW0pO1xuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBa0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Album.jsx\n");

/***/ })

})