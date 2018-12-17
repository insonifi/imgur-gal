webpackHotUpdate("main",{

/***/ "./src/components/ListSelector.jsx":
/*!*****************************************!*\
  !*** ./src/components/ListSelector.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_fp_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/fp/flow */ \"./node_modules/lodash/fp/flow.js\");\n/* harmony import */ var lodash_fp_flow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_flow__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_fp_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/fp/map */ \"./node_modules/lodash/fp/map.js\");\n/* harmony import */ var lodash_fp_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_map__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_fp_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/fp/get */ \"./node_modules/lodash/fp/get.js\");\n/* harmony import */ var lodash_fp_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_get__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_fp_join__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/fp/join */ \"./node_modules/lodash/fp/join.js\");\n/* harmony import */ var lodash_fp_join__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_join__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar getId = lodash_fp_flow__WEBPACK_IMPORTED_MODULE_2___default()([lodash_fp_map__WEBPACK_IMPORTED_MODULE_3___default()(lodash_fp_get__WEBPACK_IMPORTED_MODULE_4___default()(0)), lodash_fp_join__WEBPACK_IMPORTED_MODULE_5___default()('-')]);\nvar styles = {\n  box: {\n    fontSize: 14,\n    fontFamily: 'monospace',\n    display: 'inline-block',\n    height: 14 + 8 * 2,\n    width: '10em',\n    position: 'relative'\n  },\n  list: {\n    bacgroundColor: 'white',\n    composes: '$box',\n    overflow: 'hidden',\n    '&:hover': {\n      boxShadow: [[1, 1, 0, 0, 'black']],\n      overflow: 'initial'\n    }\n  },\n  item: {\n    display: 'block',\n    padding: 8,\n    '& > $radio': {\n      display: 'none'\n    }\n  },\n  radio: {\n    '&:checked ~ $label': {\n      textDecoration: 'underline'\n    }\n  },\n  label: {\n    '&:hover': {\n      textDecoration: 'underline dotted',\n      cursor: 'pointer'\n    }\n  }\n};\n\nfunction ListSelector(_ref) {\n  var classes = _ref.classes,\n      value = _ref.value,\n      list = _ref.list,\n      onChange = _ref.onChange;\n  var handleChange = react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"](function (e) {\n    return onChange(e.target.value);\n  }, [list]);\n  var array = Object.values(list);\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.box\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.list,\n    onChange: handleChange\n  }, array.map(function (name, idx) {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"label\", {\n      className: classes.item,\n      key: name\n    }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", {\n      className: classes.radio,\n      type: \"radio\",\n      defaultChecked: value === name,\n      name: getId(array),\n      value: name\n    }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", {\n      className: classes.label\n    }, name));\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_jss__WEBPACK_IMPORTED_MODULE_1___default()(styles)(ListSelector));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaXN0U2VsZWN0b3IuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGlzdFNlbGVjdG9yLmpzeD9kY2JiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbmplY3RTaGVldCBmcm9tICdyZWFjdC1qc3MnO1xuaW1wb3J0IGZsb3cgZnJvbSAnbG9kYXNoL2ZwL2Zsb3cnO1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvZnAvbWFwJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2ZwL2dldCc7XG5pbXBvcnQgam9pbiBmcm9tICdsb2Rhc2gvZnAvam9pbic7XG5cbmltcG9ydCB0eXBlIHtcblx0U2VjdGlvbixcblx0U2VjdGlvbkxpc3QsXG5cdFNvcnQsXG5cdFNvcnRMaXN0LFxuXHRJbnRlcnZhbCxcblx0SW50ZXJ2YWxMaXN0LFxufSBmcm9tICdjb250YWluZXJzL1ZpZXdQYXJhbXMvdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuXHRjbGFzc2VzOiBPYmplY3QsXG5cdHZhbHVlOiBTZWN0aW9uIHwgU29ydCB8IEludGVydmFsLFxuXHRsaXN0OiBTZWN0aW9uTGlzdCB8IFNvcnRMaXN0IHwgSW50ZXJ2YWxMaXN0LFxuXHRvbkNoYW5nZTogRnVuY3Rpb24sXG59O1xuXG5jb25zdCBnZXRJZCA9IGZsb3coW21hcChnZXQoMCkpLCBqb2luKCctJyldKTtcbmNvbnN0IHN0eWxlcyA9IHtcblx0Ym94OiB7XG5cdFx0Zm9udFNpemU6IDE0LFxuXHRcdGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdGhlaWdodDogMTQgKyA4ICogMixcblx0XHR3aWR0aDogJzEwZW0nLFxuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHR9LFxuXHRsaXN0OiB7XG5cdFx0YmFjZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG5cdFx0Y29tcG9zZXM6ICckYm94Jyxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0JyY6aG92ZXInOiB7XG5cdFx0XHRib3hTaGFkb3c6IFtbMSwgMSwgMCwgMCwgJ2JsYWNrJ11dLFxuXHRcdFx0b3ZlcmZsb3c6ICdpbml0aWFsJyxcblx0XHR9LFxuXHR9LFxuXHRpdGVtOiB7XG5cdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRwYWRkaW5nOiA4LFxuXHRcdCcmID4gJHJhZGlvJzoge1xuXHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdH0sXG5cdH0sXG5cdHJhZGlvOiB7XG5cdFx0JyY6Y2hlY2tlZCB+ICRsYWJlbCc6IHtcblx0XHRcdHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcblx0XHR9LFxuXHR9LFxuXHRsYWJlbDoge1xuXHRcdCcmOmhvdmVyJzoge1xuXHRcdFx0dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUgZG90dGVkJyxcblx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5mdW5jdGlvbiBMaXN0U2VsZWN0b3Ioe2NsYXNzZXMsIHZhbHVlLCBsaXN0LCBvbkNoYW5nZX06IFByb3BzKSB7XG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuXHRcdChlOiBTeW50aGV0aWNJbnB1dEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSksXG5cdFx0W2xpc3RdXG5cdCk7XG5cdGNvbnN0IGFycmF5ID0gT2JqZWN0LnZhbHVlcyhsaXN0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cblx0XHRcdFx0e2FycmF5Lm1hcCgobmFtZSwgaWR4KSA9PiAoXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfSBrZXk9e25hbWV9PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5yYWRpb31cblx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdENoZWNrZWQ9e3ZhbHVlID09PSBuYW1lfVxuXHRcdFx0XHRcdFx0XHRuYW1lPXtnZXRJZChhcnJheSl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbH0+e25hbWV9PC9zcGFuPlxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdFNoZWV0KHN0eWxlcykoTGlzdFNlbGVjdG9yKTtcbiJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUE5QkE7QUFDQTtBQXFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFUQTtBQWVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ListSelector.jsx\n");

/***/ })

})