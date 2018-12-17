webpackHotUpdate("main",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getGallery, getImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGallery\", function() { return getGallery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImage\", function() { return getImage; });\nfunction getGallery(query) {\n  var url = new URL('/gallery', window.location.origin);\n  url.search = new URLSearchParams(query).toString();\n  return fetch(url).then(function (r) {\n    return r.json();\n  }, console.log);\n}\nfunction getImage(id) {\n  var url = new URL('/image', window.location.origin);\n  url.search = new URLSearchParams({\n    id: id\n  }).toString();\n  return fetch(url).then(function (r) {\n    return r.json();\n  }, console.log);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHYWxsZXJ5KHF1ZXJ5OiBPYmplY3QpIHtcblx0Y29uc3QgdXJsID0gbmV3IFVSTCgnL2dhbGxlcnknLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcblxuXHR1cmwuc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeSkudG9TdHJpbmcoKTtcblxuXHRyZXR1cm4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCksIGNvbnNvbGUubG9nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEltYWdlKGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgdXJsID0gbmV3IFVSTCgnL2ltYWdlJywgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7XG5cblx0dXJsLnNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe2lkfSkudG9TdHJpbmcoKTtcblxuXHRyZXR1cm4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCksIGNvbnNvbGUubG9nKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ })

})