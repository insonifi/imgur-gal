webpackHotUpdate("main",{

/***/ "./src/components/ViewParamsControl.jsx":
/*!**********************************************!*\
  !*** ./src/components/ViewParamsControl.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_fp_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/fp/noop */ \"./node_modules/lodash/fp/noop.js\");\n/* harmony import */ var lodash_fp_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_noop__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var containers_ViewParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! containers/ViewParams */ \"./src/containers/ViewParams/index.js\");\n/* harmony import */ var components_ListSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/ListSelector */ \"./src/components/ListSelector.jsx\");\n/* harmony import */ var components_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Switch */ \"./src/components/Switch.jsx\");\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\n\n\nvar styles = {\n  bar: {\n    display: 'flex',\n    alignItems: 'center',\n    fontSize: 14,\n    zIndex: 1\n  }\n};\n\nfunction ViewParamsControl(_ref) {\n  var classes = _ref.classes,\n      rest = _objectWithoutProperties(_ref, [\"classes\"]);\n\n  var section = rest.section,\n      sectionList = rest.sectionList,\n      setSection = rest.setSection;\n  var sort = rest.sort,\n      sortList = rest.sortList,\n      setSort = rest.setSort;\n  var interval = rest.interval,\n      intervalList = rest.intervalList,\n      setInterval = rest.setInterval;\n  var viral = rest.viral,\n      setViral = rest.setViral;\n  react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"](function () {\n    rest.refreshView();\n    return lodash_fp_noop__WEBPACK_IMPORTED_MODULE_3___default.a;\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.bar\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_ListSelector__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    value: section,\n    list: sectionList,\n    onChange: setSection\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_ListSelector__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    value: sort,\n    list: sortList,\n    onChange: setSort\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_ListSelector__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    value: interval,\n    list: intervalList,\n    onChange: setInterval\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_Switch__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    name: \"viral\",\n    value: viral,\n    onChange: setViral\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(react_jss__WEBPACK_IMPORTED_MODULE_2___default()(styles), containers_ViewParams__WEBPACK_IMPORTED_MODULE_4__[\"withViewParam\"])(ViewParamsControl));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WaWV3UGFyYW1zQ29udHJvbC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WaWV3UGFyYW1zQ29udHJvbC5qc3g/MmM4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2NvbXBvc2V9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBpbmplY3RTaGVldCBmcm9tICdyZWFjdC1qc3MnO1xuaW1wb3J0IG5vb3AgZnJvbSAnbG9kYXNoL2ZwL25vb3AnO1xuXG5pbXBvcnQge3dpdGhWaWV3UGFyYW19IGZyb20gJ2NvbnRhaW5lcnMvVmlld1BhcmFtcyc7XG5pbXBvcnQgTGlzdFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvTGlzdFNlbGVjdG9yJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnY29tcG9uZW50cy9Td2l0Y2gnO1xuXG5pbXBvcnQgdHlwZSB7XG5cdFNlY3Rpb24sXG5cdFNlY3Rpb25MaXN0LFxuXHRTb3J0LFxuXHRTb3J0TGlzdCxcblx0SW50ZXJ2YWwsXG5cdEludGVydmFsTGlzdCxcblx0VmlyYWwsXG59IGZyb20gJ2NvbnRhaW5lcnMvVmlld1BhcmFtcy90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG5cdGNsYXNzZXM6IE9iamVjdCxcblx0c2VjdGlvbjogU2VjdGlvbixcblx0c2VjdGlvbkxpc3Q6IFNlY3Rpb25MaXN0LFxuXHRzZXRTZWN0aW9uOiBGdW5jdGlvbixcblx0c29ydDogU29ydCxcblx0c29ydExpc3Q6IFNvcnRMaXN0LFxuXHRzZXRTb3J0OiBGdW5jdGlvbixcblx0aW50ZXJ2YWw6IEludGVydmFsLFxuXHRpbnRlcnZhbExpc3Q6IEludGVydmFsTGlzdCxcblx0c2V0SW50ZXJ2YWw6IEZ1bmN0aW9uLFxuXHR2aXJhbDogVmlyYWwsXG5cdHNldFZpcmFsOiBGdW5jdGlvbixcblx0cmVmcmVzaFZpZXc6IEZ1bmN0aW9uLFxufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRiYXI6IHtcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0Zm9udFNpemU6IDE0LFxuXHRcdHpJbmRleDogMSxcblx0fSxcbn07XG5cbmZ1bmN0aW9uIFZpZXdQYXJhbXNDb250cm9sKHtjbGFzc2VzLCAuLi5yZXN0fTogUHJvcHMpIHtcblx0Y29uc3Qge3NlY3Rpb24sIHNlY3Rpb25MaXN0LCBzZXRTZWN0aW9ufSA9IHJlc3Q7XG5cdGNvbnN0IHtzb3J0LCBzb3J0TGlzdCwgc2V0U29ydH0gPSByZXN0O1xuXHRjb25zdCB7aW50ZXJ2YWwsIGludGVydmFsTGlzdCwgc2V0SW50ZXJ2YWx9ID0gcmVzdDtcblx0Y29uc3Qge3ZpcmFsLCBzZXRWaXJhbH0gPSByZXN0O1xuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHJlc3QucmVmcmVzaFZpZXcoKTtcblxuXHRcdHJldHVybiBub29wO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iYXJ9PlxuXHRcdFx0PExpc3RTZWxlY3RvciB2YWx1ZT17c2VjdGlvbn0gbGlzdD17c2VjdGlvbkxpc3R9IG9uQ2hhbmdlPXtzZXRTZWN0aW9ufSAvPlxuXHRcdFx0PExpc3RTZWxlY3RvciB2YWx1ZT17c29ydH0gbGlzdD17c29ydExpc3R9IG9uQ2hhbmdlPXtzZXRTb3J0fSAvPlxuXHRcdFx0PExpc3RTZWxlY3RvclxuXHRcdFx0XHR2YWx1ZT17aW50ZXJ2YWx9XG5cdFx0XHRcdGxpc3Q9e2ludGVydmFsTGlzdH1cblx0XHRcdFx0b25DaGFuZ2U9e3NldEludGVydmFsfVxuXHRcdFx0Lz5cblx0XHRcdDxTd2l0Y2ggbmFtZT1cInZpcmFsXCIgdmFsdWU9e3ZpcmFsfSBvbkNoYW5nZT17c2V0VmlyYWx9IC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdGluamVjdFNoZWV0KHN0eWxlcyksXG5cdHdpdGhWaWV3UGFyYW1cbikoVmlld1BhcmFtc0NvbnRyb2wpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ViewParamsControl.jsx\n");

/***/ })

})