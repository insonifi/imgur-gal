webpackHotUpdate("main",{

/***/ "./src/components/Album.jsx":
/*!**********************************!*\
  !*** ./src/components/Album.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_fp_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/fp/noop */ \"./node_modules/lodash/fp/noop.js\");\n/* harmony import */ var lodash_fp_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_noop__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_fp_getOr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/fp/getOr */ \"./node_modules/lodash/fp/getOr.js\");\n/* harmony import */ var lodash_fp_getOr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_getOr__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar styles = {\n  album: {\n    border: '1px solid lightgray',\n    borderRadius: 4,\n    width: 300,\n    position: 'relative',\n    '&:hover $caption': {\n      display: 'block'\n    }\n  },\n  image: {\n    display: 'flex',\n    backgroundColor: 'lightgray',\n    alignItems: 'center',\n    objectFit: 'cover',\n    width: 300,\n    height: 300,\n    '&::after': {\n      content: '\"○\"',\n      fontSize: 100,\n      position: 'absolute',\n      left: '50%',\n      top: '50%',\n      transform: 'translate(-50%, -50%)'\n    }\n  },\n  caption: {\n    display: 'none',\n    padding: 8,\n    position: 'absolute',\n    bottom: 8,\n    width: '100%',\n    backgroundColor: 'rgba(255, 255, 255, 0.5)',\n    textAlign: 'center'\n  }\n};\nvar getImage = lodash_fp_getOr__WEBPACK_IMPORTED_MODULE_3___default()({\n  link: ''\n});\n\nfunction Album(_ref) {\n  var classes = _ref.classes,\n      album = _ref.album,\n      images = _ref.images,\n      onClick = _ref.onClick,\n      requestImage = _ref.requestImage;\n  var image = getImage(album.cover, images);\n  react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"](function () {\n    requestImage(album.cover);\n    return lodash_fp_noop__WEBPACK_IMPORTED_MODULE_2___default.a;\n  }, [album.id]);\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"figure\", {\n    className: classes.album,\n    onClick: onClick\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", {\n    className: classes.image,\n    src: image.link\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"figcaption\", {\n    className: classes.caption\n  }, album.title));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_jss__WEBPACK_IMPORTED_MODULE_1___default()(styles)(Album));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbGJ1bS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BbGJ1bS5qc3g/M2RlOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcbmltcG9ydCBub29wIGZyb20gJ2xvZGFzaC9mcC9ub29wJztcbmltcG9ydCBnZXRPciBmcm9tICdsb2Rhc2gvZnAvZ2V0T3InO1xuXG5pbXBvcnQgdHlwZSB7UmVxdWVzdEFjdGlvbiwgSW1hZ2VJbmRleH0gZnJvbSAnY29udGFpbmVycy9JbWFnZXMvdHlwZXMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGFsYnVtOiB7XG5cdFx0Ym9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheScsXG5cdFx0Ym9yZGVyUmFkaXVzOiA0LFxuXHRcdHdpZHRoOiAzMDAsXG5cdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0JyY6aG92ZXIgJGNhcHRpb24nOiB7XG5cdFx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdH0sXG5cdH0sXG5cdGltYWdlOiB7XG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JheScsXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0b2JqZWN0Rml0OiAnY292ZXInLFxuXHRcdHdpZHRoOiAzMDAsXG5cdFx0aGVpZ2h0OiAzMDAsXG5cdFx0JyY6OmFmdGVyJzoge1xuXHRcdFx0Y29udGVudDogJ1wi4peLXCInLFxuXHRcdFx0Zm9udFNpemU6IDEwMCxcblx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdFx0bGVmdDogJzUwJScsXG5cdFx0XHR0b3A6ICc1MCUnLFxuXHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcblx0XHR9LFxuXHR9LFxuXHRjYXB0aW9uOiB7XG5cdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdHBhZGRpbmc6IDgsXG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0Ym90dG9tOiA4LFxuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0YmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHR9LFxufTtcblxudHlwZSBQcm9wcyA9IHtcblx0YWxidW06IE9iamVjdCxcblx0Y2xhc3NlczogT2JqZWN0LFxuXHRpbWFnZXM6IEltYWdlSW5kZXgsXG5cdG9uQ2xpY2s6IEZ1bmN0aW9uLFxuXHRyZXF1ZXN0SW1hZ2U6IFJlcXVlc3RBY3Rpb24sXG59O1xuXG5jb25zdCBnZXRJbWFnZSA9IGdldE9yKHtsaW5rOiAnJ30pO1xuXG5mdW5jdGlvbiBBbGJ1bSh7Y2xhc3NlcywgYWxidW0sIGltYWdlcywgb25DbGljaywgcmVxdWVzdEltYWdlfTogUHJvcHMpIHtcblx0Y29uc3QgaW1hZ2UgPSBnZXRJbWFnZShhbGJ1bS5jb3ZlciwgaW1hZ2VzKTtcblxuXHRSZWFjdC51c2VFZmZlY3QoXG5cdFx0KCkgPT4ge1xuXHRcdFx0cmVxdWVzdEltYWdlKGFsYnVtLmNvdmVyKTtcblxuXHRcdFx0cmV0dXJuIG5vb3A7XG5cdFx0fSxcblx0XHRbYWxidW0uaWRdXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbGJ1bX0gb25DbGljaz17b25DbGlja30+XG5cdFx0XHQ8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0gc3JjPXtpbWFnZS5saW5rfSAvPlxuXHRcdFx0PGZpZ2NhcHRpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmNhcHRpb259PnthbGJ1bS50aXRsZX08L2ZpZ2NhcHRpb24+XG5cdFx0PC9maWd1cmU+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdFNoZWV0KHN0eWxlcykoQWxidW0pO1xuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBMUJBO0FBNkNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Album.jsx\n");

/***/ }),

/***/ "./src/components/DetailedFigure.jsx":
false

})