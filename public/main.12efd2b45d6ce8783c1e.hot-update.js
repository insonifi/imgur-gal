webpackHotUpdate("main",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getGallery, getImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGallery\", function() { return getGallery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImage\", function() { return getImage; });\nfunction getGallery(query) {\n  var url = new URL('/gallery', window.location.origin);\n  url.search = new URLSearchParams(query);\n  return fetch(url).then(function (r) {\n    return r.json();\n  }, console.log);\n}\nfunction getImage(id) {\n  var url = new URL('/image', window.location.origin);\n  url.search = new URLSearchParams({\n    id: id\n  });\n  return fetch(url).then(function (r) {\n    return r.json();\n  }, console.log);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHYWxsZXJ5KHF1ZXJ5KSB7XG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoJy9nYWxsZXJ5Jywgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7XG5cblx0dXJsLnNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnkpO1xuXG5cdHJldHVybiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSwgY29uc29sZS5sb2cpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1hZ2UoaWQpIHtcblx0Y29uc3QgdXJsID0gbmV3IFVSTCgnL2ltYWdlJywgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7XG5cblx0dXJsLnNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe2lkfSk7XG5cblx0cmV0dXJuIGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpLCBjb25zb2xlLmxvZyk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ })

})