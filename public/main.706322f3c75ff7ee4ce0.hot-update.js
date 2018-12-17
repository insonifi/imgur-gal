webpackHotUpdate("main",{

/***/ "./src/components/Grid.jsx":
/*!*********************************!*\
  !*** ./src/components/Grid.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var containers_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/List */ \"./src/containers/List/index.js\");\n/* harmony import */ var containers_Images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! containers/Images */ \"./src/containers/Images/index.js\");\n/* harmony import */ var components_Album__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Album */ \"./src/components/Album.jsx\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nvar styles = {\n  container: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    justifyContent: 'center'\n  }\n};\n\nfunction Grid(_ref) {\n  var classes = _ref.classes,\n      list = _ref.list,\n      images = _ref.images,\n      requestImage = _ref.requestImage;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.container\n  }, list.map(function (album) {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_Album__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _extends({\n      key: album.id\n    }, {\n      album: album,\n      images: images,\n      requestImage: requestImage\n    }));\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(react_jss__WEBPACK_IMPORTED_MODULE_2___default()(styles), containers_List__WEBPACK_IMPORTED_MODULE_3__[\"withList\"], containers_Images__WEBPACK_IMPORTED_MODULE_4__[\"withImages\"])(Grid));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HcmlkLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dyaWQuanN4PzQ3MWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb21wb3NlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcblxuaW1wb3J0IHt3aXRoTGlzdH0gZnJvbSAnY29udGFpbmVycy9MaXN0JztcbmltcG9ydCB7d2l0aEltYWdlc30gZnJvbSAnY29udGFpbmVycy9JbWFnZXMnO1xuaW1wb3J0IEFsYnVtIGZyb20gJ2NvbXBvbmVudHMvQWxidW0nO1xuXG50eXBlIFByb3BzID0ge1xuXHRjbGFzc2VzOiBPYmplY3QsXG5cdGxpc3Q6IEFycmF5PCo+LFxuXHRpbWFnZXM6IE1hcDxzdHJpbmcsIE9iamVjdD4sXG5cdHJlcXVlc3RJbWFnZTogRnVuY3Rpb24sXG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRmbGV4V3JhcDogJ3dyYXAnLFxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0fSxcbn07XG5cbmZ1bmN0aW9uIEdyaWQoe2NsYXNzZXMsIGxpc3QsIGltYWdlcywgcmVxdWVzdEltYWdlfTogUHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuXHRcdFx0e2xpc3QubWFwKGFsYnVtID0+IChcblx0XHRcdFx0PEFsYnVtIGtleT17YWxidW0uaWR9IHsuLi57YWxidW0sIGltYWdlcywgcmVxdWVzdEltYWdlfX0gLz5cblx0XHRcdCkpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHRpbmplY3RTaGVldChzdHlsZXMpLFxuXHR3aXRoTGlzdCxcblx0d2l0aEltYWdlc1xuKShHcmlkKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFLQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Grid.jsx\n");

/***/ })

})