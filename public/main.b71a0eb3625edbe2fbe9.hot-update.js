webpackHotUpdate("main",{

/***/ "./src/components/DetailedAlbum.jsx":
/*!******************************************!*\
  !*** ./src/components/DetailedAlbum.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Score */ \"./src/components/Score.jsx\");\n/* harmony import */ var components_Votes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Votes */ \"./src/components/Votes.jsx\");\n\n\n\n\n\nvar styles = {\n  backdrop: {\n    background: 'rgba(0,0,0,0.1)',\n    position: 'fixed',\n    zIndex: 2,\n    left: 0,\n    right: 0,\n    top: 0,\n    bottom: 0\n  },\n  box: {\n    background: 'lightgray',\n    borderRadius: 8,\n    width: 'inherit',\n    height: 'inherit',\n    margin: 16,\n    padding: 8\n  },\n  desc: {},\n  title: {\n    display: 'flex',\n    alignItems: 'center'\n  },\n  titleText: {\n    flexGrow: 1\n  }\n};\n\nfunction DetailedAlbum(_ref) {\n  var classes = _ref.classes,\n      album = _ref.album,\n      image = _ref.image,\n      onClose = _ref.onClose;\n\n  if (!(album && image)) {\n    return null;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.backdrop,\n    onClick: onClose\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.box\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", {\n    className: classes.title\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_Score__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    score: album.score\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", {\n    className: classes.titleText\n  }, album.title), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](components_Votes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    up: album.ups,\n    down: album.downs\n  })), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"img\", {\n    src: image.link\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n    className: classes.desc\n  }, image.description)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_jss__WEBPACK_IMPORTED_MODULE_2___default()(styles)(DetailedAlbum));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXRhaWxlZEFsYnVtLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RldGFpbGVkQWxidW0uanN4PzIxZjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb21wb3NlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcblxuaW1wb3J0IHR5cGUge0ltYWdlfSBmcm9tICdjb250YWluZXJzL0ltYWdlcy90eXBlcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnY29tcG9uZW50cy9TY29yZSc7XG5pbXBvcnQgVm90ZXMgZnJvbSAnY29tcG9uZW50cy9Wb3Rlcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0YmFja2Ryb3A6IHtcblx0XHRiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjEpJyxcblx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHR6SW5kZXg6IDIsXG5cdFx0bGVmdDogMCxcblx0XHRyaWdodDogMCxcblx0XHR0b3A6IDAsXG5cdFx0Ym90dG9tOiAwLFxuXHR9LFxuXHRib3g6IHtcblx0XHRiYWNrZ3JvdW5kOiAnbGlnaHRncmF5Jyxcblx0XHRib3JkZXJSYWRpdXM6IDgsXG5cdFx0d2lkdGg6ICdpbmhlcml0Jyxcblx0XHRoZWlnaHQ6ICdpbmhlcml0Jyxcblx0XHRtYXJnaW46IDE2LFxuXHRcdHBhZGRpbmc6IDgsXG5cdH0sXG5cdGRlc2M6IHt9LFxuXHR0aXRsZToge1xuXHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0fSxcblx0dGl0bGVUZXh0OiB7XG5cdFx0ZmxleEdyb3c6IDEsXG5cdH0sXG59O1xuXG50eXBlIFByb3BzID0ge1xuXHRjbGFzc2VzOiBPYmplY3QsXG5cdGFsYnVtOiBPYmplY3QgfCBudWxsLFxuXHRpbWFnZTogSW1hZ2UsXG5cdG9uQ2xvc2U6IEZ1bmN0aW9uLFxuXHRvcGVuOiBib29sZWFuLFxufTtcblxuZnVuY3Rpb24gRGV0YWlsZWRBbGJ1bSh7Y2xhc3NlcywgYWxidW0sIGltYWdlLCBvbkNsb3NlfTogUHJvcHMpIHtcblx0aWYgKCEoYWxidW0gJiYgaW1hZ2UpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tkcm9wfSBvbkNsaWNrPXtvbkNsb3NlfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuXHRcdFx0XHRcdDxTY29yZSBzY29yZT17YWxidW0uc2NvcmV9IC8+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlVGV4dH0+e2FsYnVtLnRpdGxlfTwvc3Bhbj5cblx0XHRcdFx0XHQ8Vm90ZXMgdXA9e2FsYnVtLnVwc30gZG93bj17YWxidW0uZG93bnN9IC8+XG5cdFx0XHRcdDwvaDE+XG5cdFx0XHRcdDxpbWcgc3JjPXtpbWFnZS5saW5rfSAvPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY30+e2ltYWdlLmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RTaGVldChzdHlsZXMpKERldGFpbGVkQWxidW0pO1xuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUF2QkE7QUFDQTtBQW1DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DetailedAlbum.jsx\n");

/***/ })

})