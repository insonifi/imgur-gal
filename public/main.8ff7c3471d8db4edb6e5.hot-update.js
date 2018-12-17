webpackHotUpdate("main",{

/***/ "./src/components/Switch.jsx":
/*!***********************************!*\
  !*** ./src/components/Switch.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar styles = {\n  box: {\n    display: 'inline-flex',\n    alignItems: 'center'\n  },\n  label: {\n    margin: [[0, 16]],\n    '& > $checkbox': {\n      display: 'none'\n    }\n  },\n  checkbox: {}\n};\n\nfunction Switch(_ref) {\n  var classes = _ref.classes,\n      name = _ref.name,\n      value = _ref.value,\n      onChange = _ref.onChange;\n  var handleChange = react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"](function (e) {\n    return onChange(!value);\n  }, [value]);\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.box\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"label\", {\n    className: classes.label\n  }, name, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", _extends({\n    className: classes.checkbox,\n    type: \"checkbox\"\n  }, {\n    value: value,\n    onChange: onChange\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_jss__WEBPACK_IMPORTED_MODULE_1___default()(styles)(Switch));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Td2l0Y2guanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3dpdGNoLmpzeD9kNGJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbmplY3RTaGVldCBmcm9tICdyZWFjdC1qc3MnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGJveDoge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdH0sXG5cdGxhYmVsOiB7XG5cdFx0bWFyZ2luOiBbWzAsIDE2XV0sXG5cdFx0JyYgPiAkY2hlY2tib3gnOiB7XG5cdFx0XHRkaXNwbGF5OiAnbm9uZScsXG5cdFx0fSxcblx0fSxcblx0Y2hlY2tib3g6IHt9LFxufTtcblxudHlwZSBQcm9wcyA9IHtcblx0Y2xhc3NlczogT2JqZWN0LFxuXHRuYW1lOiBzdHJpbmcsXG5cdHZhbHVlOiBib29sZWFuLFxuXHRvbkNoYW5nZTogRnVuY3Rpb24sXG59O1xuXG5mdW5jdGlvbiBTd2l0Y2goe2NsYXNzZXMsIG5hbWUsIHZhbHVlLCBvbkNoYW5nZX06IFByb3BzKSB7XG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKChlOiBTeW50aGV0aWNJbnB1dEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiBvbkNoYW5nZSghdmFsdWUpLCBbdmFsdWVdKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9PlxuXHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbH0+XG5cdFx0XHRcdHtuYW1lfVxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3h9XG5cdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcblx0XHRcdFx0XHR7Li4ue3ZhbHVlLCBvbkNoYW5nZX19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RTaGVldChzdHlsZXMpKFN3aXRjaCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBWEE7QUFDQTtBQW9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Switch.jsx\n");

/***/ })

})