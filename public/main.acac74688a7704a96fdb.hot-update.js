webpackHotUpdate("main",{

/***/ "./src/components/Switch.jsx":
/*!***********************************!*\
  !*** ./src/components/Switch.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar styles = {\n  box: {\n    display: 'inline-flex',\n    alignItems: 'center',\n    margin: [[0, 16]]\n  },\n  checkbox: {\n    display: 'none',\n    '&:checked ~ $label': {\n      textDecoration: 'line-through'\n    }\n  },\n  label: {\n    textDecoration: 'none',\n    '&:hover': {\n      cursor: 'pointer',\n      textDecoration: 'underline dotted'\n    }\n  }\n};\n\nfunction Switch(_ref) {\n  var classes = _ref.classes,\n      name = _ref.name,\n      value = _ref.value,\n      onChange = _ref.onChange;\n  var handleChange = react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"](function (e) {\n    return onChange(!value);\n  }, [value]);\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.box\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"label\", {\n    className: classes.label\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", {\n    className: classes.checkbox,\n    type: \"checkbox\",\n    defaultChecked: value,\n    onChange: handleChange\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", {\n    className: classes.label\n  }, name)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_jss__WEBPACK_IMPORTED_MODULE_1___default()(styles)(Switch));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Td2l0Y2guanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3dpdGNoLmpzeD9kNGJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbmplY3RTaGVldCBmcm9tICdyZWFjdC1qc3MnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGJveDoge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0bWFyZ2luOiBbWzAsIDE2XV0sXG5cdH0sXG5cdGNoZWNrYm94OiB7XG5cdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdCcmOmNoZWNrZWQgfiAkbGFiZWwnOiB7XG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcsXG5cdFx0fSxcblx0fSxcblx0bGFiZWw6IHtcblx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXHRcdCcmOmhvdmVyJzoge1xuXHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSBkb3R0ZWQnLFxuXHRcdH0sXG5cdH0sXG59O1xuXG50eXBlIFByb3BzID0ge1xuXHRjbGFzc2VzOiBPYmplY3QsXG5cdG5hbWU6IHN0cmluZyxcblx0dmFsdWU6IGJvb2xlYW4sXG5cdG9uQ2hhbmdlOiBGdW5jdGlvbixcbn07XG5cbmZ1bmN0aW9uIFN3aXRjaCh7Y2xhc3NlcywgbmFtZSwgdmFsdWUsIG9uQ2hhbmdlfTogUHJvcHMpIHtcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soXG5cdFx0KGU6IFN5bnRoZXRpY0lucHV0RXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IG9uQ2hhbmdlKCF2YWx1ZSksXG5cdFx0W3ZhbHVlXVxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cblx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3h9XG5cdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcblx0XHRcdFx0XHRkZWZhdWx0Q2hlY2tlZD17dmFsdWV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfT57bmFtZX08L3NwYW4+XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RTaGVldChzdHlsZXMpKFN3aXRjaCk7XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFaQTtBQUNBO0FBMkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Switch.jsx\n");

/***/ })

})