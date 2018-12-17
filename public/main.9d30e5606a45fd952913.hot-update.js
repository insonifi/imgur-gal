webpackHotUpdate("main",{

/***/ "./src/components/DetailedAlbum.jsx":
/*!******************************************!*\
  !*** ./src/components/DetailedAlbum.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Score */ \"./src/components/Score.jsx\");\n/* harmony import */ var components_Votes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Votes */ \"./src/components/Votes.jsx\");\n\n\n\n\n\nvar styles = {\n  backdrop: {\n    background: 'rgba(0,0,0,0.85)',\n    display: 'flex',\n    position: 'fixed',\n    zIndex: 2,\n    left: 0,\n    right: 0,\n    top: 0,\n    bottom: 0\n  },\n  box: {\n    background: 'lightgray',\n    borderRadius: 8,\n    display: 'flex',\n    flexDirection: 'column',\n    flexGrow: 1,\n    width: 'inherit',\n    height: 'inherit',\n    margin: 16,\n    overflow: 'hidden'\n  },\n  desc: {\n    margin: 16\n  },\n  imageBox: {\n    display: 'flex',\n    flex: 1\n  },\n  image: {\n    flex: 1,\n    objectFit: 'contain',\n    backgroundColor: 'gray'\n  },\n  title: {\n    display: 'flex',\n    alignItems: 'center',\n    margin: 0,\n    padding: 8\n  },\n  titleText: {\n    flexGrow: 1,\n    textAlign: 'center'\n  }\n};\n\nfunction DetailedAlbum(_ref) {\n  var classes = _ref.classes,\n      album = _ref.album,\n      image = _ref.image,\n      onClose = _ref.onClose;\n\n  if (!(album && image)) {\n    return null;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.backdrop,\n    onClick: onClose\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.box\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", {\n    className: classes.title\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_Score__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    score: album.score\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", {\n    className: classes.titleText\n  }, album.title), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_Votes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    up: album.ups,\n    down: album.downs\n  })), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.imageBox\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", {\n    className: classes.image,\n    src: image.link\n  })), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n    className: classes.desc\n  }, image.description)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_jss__WEBPACK_IMPORTED_MODULE_2___default()(styles)(DetailedAlbum));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXRhaWxlZEFsYnVtLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RldGFpbGVkQWxidW0uanN4PzIxZjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb21wb3NlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcblxuaW1wb3J0IHR5cGUge0ltYWdlfSBmcm9tICdjb250YWluZXJzL0ltYWdlcy90eXBlcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnY29tcG9uZW50cy9TY29yZSc7XG5pbXBvcnQgVm90ZXMgZnJvbSAnY29tcG9uZW50cy9Wb3Rlcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0YmFja2Ryb3A6IHtcblx0XHRiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjg1KScsXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdHpJbmRleDogMixcblx0XHRsZWZ0OiAwLFxuXHRcdHJpZ2h0OiAwLFxuXHRcdHRvcDogMCxcblx0XHRib3R0b206IDAsXG5cdH0sXG5cdGJveDoge1xuXHRcdGJhY2tncm91bmQ6ICdsaWdodGdyYXknLFxuXHRcdGJvcmRlclJhZGl1czogOCxcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cdFx0ZmxleEdyb3c6IDEsXG5cdFx0d2lkdGg6ICdpbmhlcml0Jyxcblx0XHRoZWlnaHQ6ICdpbmhlcml0Jyxcblx0XHRtYXJnaW46IDE2LFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0fSxcblx0ZGVzYzoge1xuXHRcdG1hcmdpbjogMTYsXG5cdH0sXG5cdGltYWdlQm94OiB7XG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdGZsZXg6IDEsXG5cdH0sXG5cdGltYWdlOiB7XG5cdFx0ZmxleDogMSxcblx0XHRvYmplY3RGaXQ6ICdjb250YWluJyxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdncmF5Jyxcblx0fSxcblx0dGl0bGU6IHtcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0bWFyZ2luOiAwLFxuXHRcdHBhZGRpbmc6IDgsXG5cdH0sXG5cdHRpdGxlVGV4dDoge1xuXHRcdGZsZXhHcm93OiAxLFxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdH0sXG59O1xuXG50eXBlIFByb3BzID0ge1xuXHRjbGFzc2VzOiBPYmplY3QsXG5cdGFsYnVtOiBPYmplY3QgfCBudWxsLFxuXHRpbWFnZTogSW1hZ2UsXG5cdG9uQ2xvc2U6IEZ1bmN0aW9uLFxuXHRvcGVuOiBib29sZWFuLFxufTtcblxuZnVuY3Rpb24gRGV0YWlsZWRBbGJ1bSh7Y2xhc3NlcywgYWxidW0sIGltYWdlLCBvbkNsb3NlfTogUHJvcHMpIHtcblx0aWYgKCEoYWxidW0gJiYgaW1hZ2UpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tkcm9wfSBvbkNsaWNrPXtvbkNsb3NlfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuXHRcdFx0XHRcdDxTY29yZSBzY29yZT17YWxidW0uc2NvcmV9IC8+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlVGV4dH0+e2FsYnVtLnRpdGxlfTwvc3Bhbj5cblx0XHRcdFx0XHQ8Vm90ZXMgdXA9e2FsYnVtLnVwc30gZG93bj17YWxidW0uZG93bnN9IC8+XG5cdFx0XHRcdDwvaDE+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQm94fT5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0gc3JjPXtpbWFnZS5saW5rfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2N9PntpbWFnZS5kZXNjcmlwdGlvbn08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0U2hlZXQoc3R5bGVzKShEZXRhaWxlZEFsYnVtKTtcbiJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBeENBO0FBQ0E7QUFxREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DetailedAlbum.jsx\n");

/***/ }),

/***/ "./src/components/Score.jsx":
/*!**********************************!*\
  !*** ./src/components/Score.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar styles = {\n  score: {\n    backgroundColor: 'black',\n    borderRadius: '25%',\n    color: 'white',\n    fontFamily: 'monospace',\n    margin: 4,\n    padding: 8\n  }\n};\n\nfunction Score(_ref) {\n  var classes = _ref.classes,\n      score = _ref.score;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", {\n    className: classes.score\n  }, score);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_jss__WEBPACK_IMPORTED_MODULE_1___default()(styles)(Score));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TY29yZS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TY29yZS5qc3g/NGJhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRzY29yZToge1xuXHRcdGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcblx0XHRib3JkZXJSYWRpdXM6ICcyNSUnLFxuXHRcdGNvbG9yOiAnd2hpdGUnLFxuXHRcdGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxuXHRcdG1hcmdpbjogNCxcblx0XHRwYWRkaW5nOiA4LFxuXHR9LFxufTtcblxudHlwZSBQcm9wcyA9IHtcblx0c2NvcmU6IG51bWJlcixcbn07XG5cbmZ1bmN0aW9uIFNjb3JlKHtjbGFzc2VzLCBzY29yZX06IFByb3BzKSB7XG5cdHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc2NvcmV9PntzY29yZX08L3NwYW4+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RTaGVldChzdHlsZXMpKFNjb3JlKTtcbiJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQUNBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Score.jsx\n");

/***/ }),

/***/ "./src/components/Votes.jsx":
/*!**********************************!*\
  !*** ./src/components/Votes.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar styles = {\n  votes: {\n    color: 'white',\n    fontFamily: 'monospace',\n    padding: 8\n  },\n  up: {\n    composes: '$votes',\n    backgroundColor: 'darkgreen',\n    borderRadius: [[16, 0, 0, 16]]\n  },\n  down: {\n    composes: '$votes',\n    backgroundColor: 'firebrick',\n    borderRadius: [[0, 16, 16, 0]]\n  }\n};\n\nfunction Votes(_ref) {\n  var classes = _ref.classes,\n      up = _ref.up,\n      down = _ref.down;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", {\n    className: classes.up\n  }, up), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", {\n    className: classes.down\n  }, down));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_jss__WEBPACK_IMPORTED_MODULE_1___default()(styles)(Votes));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Wb3Rlcy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Wb3Rlcy5qc3g/OWMzYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcblxuY29uc3Qgc3R5bGVzID0ge1xuXHR2b3Rlczoge1xuXHRcdGNvbG9yOiAnd2hpdGUnLFxuXHRcdGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxuXHRcdHBhZGRpbmc6IDgsXG5cdH0sXG5cdHVwOiB7XG5cdFx0Y29tcG9zZXM6ICckdm90ZXMnLFxuXHRcdGJhY2tncm91bmRDb2xvcjogJ2RhcmtncmVlbicsXG5cdFx0Ym9yZGVyUmFkaXVzOiBbWzE2LCAwLCAwLCAxNl1dLFxuXHR9LFxuXHRkb3duOiB7XG5cdFx0Y29tcG9zZXM6ICckdm90ZXMnLFxuXHRcdGJhY2tncm91bmRDb2xvcjogJ2ZpcmVicmljaycsXG5cdFx0Ym9yZGVyUmFkaXVzOiBbWzAsIDE2LCAxNiwgMF1dLFxuXHR9LFxufTtcblxudHlwZSBQcm9wcyA9IHtcblx0Y2xhc3NlczogT2JqZWN0LFxuXHR1cDogbnVtYmVyLFxuXHRkb3duOiBudW1iZXIsXG59O1xuXG5mdW5jdGlvbiBWb3Rlcyh7Y2xhc3NlcywgdXAsIGRvd259OiBQcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudXB9Pnt1cH08L3NwYW4+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZG93bn0+e2Rvd259PC9zcGFuPlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RTaGVldChzdHlsZXMpKFZvdGVzKTtcbiJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVhBO0FBQ0E7QUF1QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Votes.jsx\n");

/***/ })

})