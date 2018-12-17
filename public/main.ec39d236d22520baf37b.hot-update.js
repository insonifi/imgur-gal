webpackHotUpdate("main",{

/***/ "./src/components/Grid.jsx":
/*!*********************************!*\
  !*** ./src/components/Grid.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var containers_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/List */ \"./src/containers/List/index.js\");\n/* harmony import */ var containers_Images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! containers/Images */ \"./src/containers/Images/index.js\");\n/* harmony import */ var components_Album__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Album */ \"./src/components/Album.jsx\");\n/* harmony import */ var components_DetailedFigure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/DetailedFigure */ \"./src/components/DetailedFigure.jsx\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar styles = {\n  container: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    justifyContent: 'center'\n  }\n};\n\nfunction Grid(_ref) {\n  var classes = _ref.classes,\n      list = _ref.list,\n      images = _ref.images,\n      requestImage = _ref.requestImage;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"](null),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      selected = _React$useState2[0],\n      setSelected = _React$useState2[1];\n\n  var handleSelect = react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"](function () {\n    return setSelected(!selected);\n  }, [selected]);\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.container\n  }, list.map(function (album) {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_Album__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _extends({\n      key: album.id,\n      onClick: handleSelect\n    }, {\n      album: album,\n      images: images,\n      requestImage: requestImage\n    }));\n  })), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_DetailedFigure__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    open: selected,\n    image: image,\n    onClose: handleSelect\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(react_jss__WEBPACK_IMPORTED_MODULE_2___default()(styles), containers_List__WEBPACK_IMPORTED_MODULE_3__[\"withList\"], containers_Images__WEBPACK_IMPORTED_MODULE_4__[\"withImages\"])(Grid));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HcmlkLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dyaWQuanN4PzQ3MWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb21wb3NlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcblxuaW1wb3J0IHt3aXRoTGlzdH0gZnJvbSAnY29udGFpbmVycy9MaXN0JztcbmltcG9ydCB7d2l0aEltYWdlc30gZnJvbSAnY29udGFpbmVycy9JbWFnZXMnO1xuaW1wb3J0IEFsYnVtIGZyb20gJ2NvbXBvbmVudHMvQWxidW0nO1xuaW1wb3J0IERldGFpbGVkRmlndXJlIGZyb20gJ2NvbXBvbmVudHMvRGV0YWlsZWRGaWd1cmUnO1xuXG50eXBlIFByb3BzID0ge1xuXHRjbGFzc2VzOiBPYmplY3QsXG5cdGxpc3Q6IEFycmF5PCo+LFxuXHRpbWFnZXM6IE1hcDxzdHJpbmcsIE9iamVjdD4sXG5cdHJlcXVlc3RJbWFnZTogRnVuY3Rpb24sXG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRmbGV4V3JhcDogJ3dyYXAnLFxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0fSxcbn07XG5cbmZ1bmN0aW9uIEdyaWQoe2NsYXNzZXMsIGxpc3QsIGltYWdlcywgcmVxdWVzdEltYWdlfTogUHJvcHMpIHtcblx0Y29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgaGFuZGxlU2VsZWN0ID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4gc2V0U2VsZWN0ZWQoIXNlbGVjdGVkKSwgW1xuXHRcdHNlbGVjdGVkLFxuXHRdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuXHRcdFx0XHR7bGlzdC5tYXAoYWxidW0gPT4gKFxuXHRcdFx0XHRcdDxBbGJ1bSBrZXk9e2FsYnVtLmlkfSBvbkNsaWNrPXtoYW5kbGVTZWxlY3R9IHsuLi57YWxidW0sIGltYWdlcywgcmVxdWVzdEltYWdlfX0gLz5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxEZXRhaWxlZEZpZ3VyZSBvcGVuPXtzZWxlY3RlZH0gaW1hZ2U9e2ltYWdlfSBvbkNsb3NlPXtoYW5kbGVTZWxlY3R9IC8+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdGluamVjdFNoZWV0KHN0eWxlcyksXG5cdHdpdGhMaXN0LFxuXHR3aXRoSW1hZ2VzXG4pKEdyaWQpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Grid.jsx\n");

/***/ })

})