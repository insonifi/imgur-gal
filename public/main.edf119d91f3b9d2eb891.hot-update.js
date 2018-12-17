webpackHotUpdate("main",{

/***/ "./src/components/ViewParamsControl.jsx":
/*!**********************************************!*\
  !*** ./src/components/ViewParamsControl.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var containers_ViewParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/ViewParams */ \"./src/containers/ViewParams/index.js\");\n/* harmony import */ var components_ListSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ListSelector */ \"./src/components/ListSelector.jsx\");\n/* harmony import */ var components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Switch */ \"./src/components/Switch.jsx\");\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\n\nvar styles = {};\n\nfunction ViewParamsControl(_ref) {\n  var classes = _ref.classes,\n      rest = _objectWithoutProperties(_ref, [\"classes\"]);\n\n  var section = rest.section,\n      sectionList = rest.sectionList,\n      setSection = rest.setSection;\n  var sort = rest.sort,\n      sortList = rest.sortList,\n      setSort = rest.setSort;\n  var interval = rest.interval,\n      intervalList = rest.intervalList,\n      setInterval = rest.setInterval;\n  var viral = rest.viral,\n      setViral = rest.setViral;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_ListSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    value: section,\n    list: sectionList,\n    onChange: setSection\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_ListSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    value: sort,\n    list: sortList,\n    onChange: setSort\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_ListSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    value: interval,\n    list: intervalList,\n    onChange: setInterval\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_Switch__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    name: \"Viral\",\n    value: viral,\n    onChange: setViral\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(react_jss__WEBPACK_IMPORTED_MODULE_2___default()(styles), containers_ViewParams__WEBPACK_IMPORTED_MODULE_3__[\"withViewParam\"])(ViewParamsControl));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WaWV3UGFyYW1zQ29udHJvbC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WaWV3UGFyYW1zQ29udHJvbC5qc3g/MmM4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2NvbXBvc2V9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBpbmplY3RTaGVldCBmcm9tICdyZWFjdC1qc3MnO1xuXG5pbXBvcnQge3dpdGhWaWV3UGFyYW19IGZyb20gJ2NvbnRhaW5lcnMvVmlld1BhcmFtcyc7XG5pbXBvcnQgTGlzdFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvTGlzdFNlbGVjdG9yJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnY29tcG9uZW50cy9Td2l0Y2gnO1xuXG5pbXBvcnQgdHlwZSB7XG5cdFNlY3Rpb24sXG5cdFNlY3Rpb25MaXN0LFxuXHRTb3J0LFxuXHRTb3J0TGlzdCxcblx0SW50ZXJ2YWwsXG5cdEludGVydmFsTGlzdCxcblx0VmlyYWwsXG59IGZyb20gJ2NvbnRhaW5lcnMvVmlld1BhcmFtcy90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG5cdGNsYXNzZXM6IE9iamVjdCxcblx0c2VjdGlvbjogU2VjdGlvbixcblx0c2VjdGlvbkxpc3Q6IFNlY3Rpb25MaXN0LFxuXHRzZXRTZWN0aW9uOiBGdW5jdGlvbixcblx0c29ydDogU29ydCxcblx0c29ydExpc3Q6IFNvcnRMaXN0LFxuXHRzZXRTb3J0OiBGdW5jdGlvbixcblx0aW50ZXJ2YWw6IEludGVydmFsLFxuXHRpbnRlcnZhbExpc3Q6IEludGVydmFsTGlzdCxcblx0c2V0SW50ZXJ2YWw6IEZ1bmN0aW9uLFxuXHR2aXJhbDogVmlyYWwsXG5cdHNldFZpcmFsOiBGdW5jdGlvbixcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHt9O1xuXG5mdW5jdGlvbiBWaWV3UGFyYW1zQ29udHJvbCh7Y2xhc3NlcywgLi4ucmVzdH06IFByb3BzKSB7XG5cdGNvbnN0IHtzZWN0aW9uLCBzZWN0aW9uTGlzdCwgc2V0U2VjdGlvbn0gPSByZXN0O1xuXHRjb25zdCB7c29ydCwgc29ydExpc3QsIHNldFNvcnR9ID0gcmVzdDtcblx0Y29uc3Qge2ludGVydmFsLCBpbnRlcnZhbExpc3QsIHNldEludGVydmFsfSA9IHJlc3Q7XG5cdGNvbnN0IHt2aXJhbCwgc2V0VmlyYWx9ID0gcmVzdDtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8TGlzdFNlbGVjdG9yIHZhbHVlPXtzZWN0aW9ufSBsaXN0PXtzZWN0aW9uTGlzdH0gb25DaGFuZ2U9e3NldFNlY3Rpb259IC8+XG5cdFx0XHQ8TGlzdFNlbGVjdG9yIHZhbHVlPXtzb3J0fSBsaXN0PXtzb3J0TGlzdH0gb25DaGFuZ2U9e3NldFNvcnR9IC8+XG5cdFx0XHQ8TGlzdFNlbGVjdG9yXG5cdFx0XHRcdHZhbHVlPXtpbnRlcnZhbH1cblx0XHRcdFx0bGlzdD17aW50ZXJ2YWxMaXN0fVxuXHRcdFx0XHRvbkNoYW5nZT17c2V0SW50ZXJ2YWx9XG5cdFx0XHQvPlxuXHRcdFx0PFN3aXRjaCBuYW1lPSdWaXJhbCcgdmFsdWU9e3ZpcmFsfSBvbkNoYW5nZT17c2V0VmlyYWx9IC8+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdGluamVjdFNoZWV0KHN0eWxlcyksXG5cdHdpdGhWaWV3UGFyYW1cbikoVmlld1BhcmFtc0NvbnRyb2wpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBMkJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ViewParamsControl.jsx\n");

/***/ })

})