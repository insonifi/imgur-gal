webpackHotUpdate("main",{

/***/ "./src/components/ListSelector.jsx":
/*!*****************************************!*\
  !*** ./src/components/ListSelector.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_fp_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/fp/flow */ \"./node_modules/lodash/fp/flow.js\");\n/* harmony import */ var lodash_fp_flow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_flow__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_fp_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/fp/map */ \"./node_modules/lodash/fp/map.js\");\n/* harmony import */ var lodash_fp_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_map__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_fp_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/fp/get */ \"./node_modules/lodash/fp/get.js\");\n/* harmony import */ var lodash_fp_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_get__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_fp_join__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/fp/join */ \"./node_modules/lodash/fp/join.js\");\n/* harmony import */ var lodash_fp_join__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_join__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar getId = lodash_fp_flow__WEBPACK_IMPORTED_MODULE_2___default()([lodash_fp_map__WEBPACK_IMPORTED_MODULE_3___default()(lodash_fp_get__WEBPACK_IMPORTED_MODULE_4___default()(0)), lodash_fp_join__WEBPACK_IMPORTED_MODULE_5___default()('-')]);\nvar styles = {\n  box: {\n    fontSize: 14,\n    fontFamily: 'monospace',\n    display: 'inline-block',\n    height: 14 + 8 * 2,\n    width: '10em',\n    position: 'relative',\n    overflow: 'hidden',\n    '&:hover': {\n      overflow: 'initial'\n    }\n  },\n  list: {\n    backgroundColor: 'white',\n    position: 'absolute',\n    boxShadow: [[-1, -1, 0, 0, 'black', 'inset']]\n  },\n  item: {\n    display: 'block',\n    padding: 8,\n    textAlign: 'center',\n    '& > $radio': {\n      display: 'none'\n    }\n  },\n  radio: {\n    '&:checked ~ $label': {\n      textDecoration: 'underline'\n    }\n  },\n  label: {\n    '&:hover': {\n      textDecoration: 'underline dotted',\n      cursor: 'pointer'\n    }\n  }\n};\n\nfunction ListSelector(_ref) {\n  var classes = _ref.classes,\n      value = _ref.value,\n      list = _ref.list,\n      onChange = _ref.onChange;\n  var handleChange = react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"](function (e) {\n    return onChange(e.target.value);\n  }, [list]);\n  var array = Object.values(list);\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.box\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.list,\n    onChange: handleChange\n  }, array.map(function (name, idx) {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"label\", {\n      className: classes.item,\n      key: name\n    }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", {\n      className: classes.radio,\n      type: \"radio\",\n      defaultChecked: value === name,\n      name: getId(array),\n      value: name\n    }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", {\n      className: classes.label\n    }, name));\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_jss__WEBPACK_IMPORTED_MODULE_1___default()(styles)(ListSelector));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaXN0U2VsZWN0b3IuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGlzdFNlbGVjdG9yLmpzeD9kY2JiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbmplY3RTaGVldCBmcm9tICdyZWFjdC1qc3MnO1xuaW1wb3J0IGZsb3cgZnJvbSAnbG9kYXNoL2ZwL2Zsb3cnO1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvZnAvbWFwJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2ZwL2dldCc7XG5pbXBvcnQgam9pbiBmcm9tICdsb2Rhc2gvZnAvam9pbic7XG5cbmltcG9ydCB0eXBlIHtcblx0U2VjdGlvbixcblx0U2VjdGlvbkxpc3QsXG5cdFNvcnQsXG5cdFNvcnRMaXN0LFxuXHRJbnRlcnZhbCxcblx0SW50ZXJ2YWxMaXN0LFxufSBmcm9tICdjb250YWluZXJzL1ZpZXdQYXJhbXMvdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuXHRjbGFzc2VzOiBPYmplY3QsXG5cdHZhbHVlOiBTZWN0aW9uIHwgU29ydCB8IEludGVydmFsLFxuXHRsaXN0OiBTZWN0aW9uTGlzdCB8IFNvcnRMaXN0IHwgSW50ZXJ2YWxMaXN0LFxuXHRvbkNoYW5nZTogRnVuY3Rpb24sXG59O1xuXG5jb25zdCBnZXRJZCA9IGZsb3coW21hcChnZXQoMCkpLCBqb2luKCctJyldKTtcbmNvbnN0IHN0eWxlcyA9IHtcblx0Ym94OiB7XG5cdFx0Zm9udFNpemU6IDE0LFxuXHRcdGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdGhlaWdodDogMTQgKyA4ICogMixcblx0XHR3aWR0aDogJzEwZW0nLFxuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdG92ZXJmbG93OiAnaW5pdGlhbCcsXG5cdFx0fSxcblx0fSxcblx0bGlzdDoge1xuXHRcdGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHRib3hTaGFkb3c6IFtbLTEsIC0xLCAwLCAwLCAnYmxhY2snLCAnaW5zZXQnXV0sXG5cdH0sXG5cdGl0ZW06IHtcblx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdHBhZGRpbmc6IDgsXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHQnJiA+ICRyYWRpbyc6IHtcblx0XHRcdGRpc3BsYXk6ICdub25lJyxcblx0XHR9LFxuXHR9LFxuXHRyYWRpbzoge1xuXHRcdCcmOmNoZWNrZWQgfiAkbGFiZWwnOiB7XG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXG5cdFx0fSxcblx0fSxcblx0bGFiZWw6IHtcblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lIGRvdHRlZCcsXG5cdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHR9LFxuXHR9LFxufTtcblxuZnVuY3Rpb24gTGlzdFNlbGVjdG9yKHtjbGFzc2VzLCB2YWx1ZSwgbGlzdCwgb25DaGFuZ2V9OiBQcm9wcykge1xuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhcblx0XHQoZTogU3ludGhldGljSW5wdXRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpLFxuXHRcdFtsaXN0XVxuXHQpO1xuXHRjb25zdCBhcnJheSA9IE9iamVjdC52YWx1ZXMobGlzdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG5cdFx0XHRcdHthcnJheS5tYXAoKG5hbWUsIGlkeCkgPT4gKFxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0ga2V5PXtuYW1lfT5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMucmFkaW99XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRDaGVja2VkPXt2YWx1ZSA9PT0gbmFtZX1cblx0XHRcdFx0XHRcdFx0bmFtZT17Z2V0SWQoYXJyYXkpfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PntuYW1lfTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RTaGVldChzdHlsZXMpKExpc3RTZWxlY3Rvcik7XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUEvQkE7QUFDQTtBQXNDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFUQTtBQWVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ListSelector.jsx\n");

/***/ })

})