webpackHotUpdate("main",{

/***/ "./src/components/Album.jsx":
/*!**********************************!*\
  !*** ./src/components/Album.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_fp_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/fp/noop */ \"./node_modules/lodash/fp/noop.js\");\n/* harmony import */ var lodash_fp_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_noop__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_fp_getOr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/fp/getOr */ \"./node_modules/lodash/fp/getOr.js\");\n/* harmony import */ var lodash_fp_getOr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_getOr__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar styles = {\n  album: {\n    height: 300,\n    width: 300\n  },\n  image: {\n    margin: 'auto',\n    objectFit: 'cover'\n  }\n};\nvar EMPTY = {\n  link: ''\n};\n\nfunction Album(_ref) {\n  var classes = _ref.classes,\n      album = _ref.album,\n      images = _ref.images,\n      requestImage = _ref.requestImage;\n  var image = lodash_fp_getOr__WEBPACK_IMPORTED_MODULE_3___default()(album.cover, EMPTY, images);\n  react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"](function () {\n    requestImage(album.cover);\n    return lodash_fp_noop__WEBPACK_IMPORTED_MODULE_2___default.a;\n  }, [album.id]);\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"figure\", {\n    className: classes.album\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", {\n    className: classes.image\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"figcaption\", null, album.title));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_jss__WEBPACK_IMPORTED_MODULE_1___default()(styles)(Album));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbGJ1bS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbGJ1bS5qc3g/M2RlOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcbmltcG9ydCBub29wIGZyb20gJ2xvZGFzaC9mcC9ub29wJztcbmltcG9ydCBnZXRPciBmcm9tICdsb2Rhc2gvZnAvZ2V0T3InO1xuXG5pbXBvcnQgdHlwZSB7UmVxdWVzdEFjdGlvbiwgSW1hZ2VJbmRleH0gZnJvbSAnY29udGFpbmVycy9JbWFnZXMvdHlwZXMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGFsYnVtOiB7XG5cdFx0aGVpZ2h0OiAzMDAsXG5cdFx0d2lkdGg6IDMwMCxcblx0fSxcblx0aW1hZ2U6IHtcblx0XHRtYXJnaW46ICdhdXRvJyxcblx0XHRvYmplY3RGaXQ6ICdjb3ZlcicsXG5cdH0sXG59O1xuXG50eXBlIFByb3BzID0ge1xuXHRhbGJ1bTogT2JqZWN0LFxuXHRjbGFzc2VzOiBPYmplY3QsXG5cdGltYWdlczogSW1hZ2VJbmRleCxcblx0cmVxdWVzdEltYWdlOiBSZXF1ZXN0QWN0aW9uLFxufTtcblxuY29uc3QgRU1QVFkgPSB7bGluazogJyd9O1xuXG5mdW5jdGlvbiBBbGJ1bSh7Y2xhc3NlcywgYWxidW0sIGltYWdlcywgcmVxdWVzdEltYWdlfTogUHJvcHMpIHtcblx0Y29uc3QgaW1hZ2UgPSBnZXRPcihhbGJ1bS5jb3ZlciwgRU1QVFksIGltYWdlcyk7XG5cdFJlYWN0LnVzZUVmZmVjdChcblx0XHQoKSA9PiB7XG5cdFx0XHRyZXF1ZXN0SW1hZ2UoYWxidW0uY292ZXIpO1xuXG5cdFx0XHRyZXR1cm4gbm9vcDtcblx0XHR9LFxuXHRcdFthbGJ1bS5pZF1cblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc2VzLmFsYnVtfT5cblx0XHRcdDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfSAvPlxuXHRcdFx0PGZpZ2NhcHRpb24+e2FsYnVtLnRpdGxlfTwvZmlnY2FwdGlvbj5cblx0XHQ8L2ZpZ3VyZT5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0U2hlZXQoc3R5bGVzKShBbGJ1bSk7XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Album.jsx\n");

/***/ })

})