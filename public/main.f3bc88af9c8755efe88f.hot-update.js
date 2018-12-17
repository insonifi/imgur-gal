webpackHotUpdate("main",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getGallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGallery\", function() { return getGallery; });\nfunction getGallery(query) {\n  var url = new URL('/gallery', window.location.origin);\n  url.search = new URLSearchParams(query);\n  return fetch(url).then(function (r) {\n    return r.json();\n  }, console.log);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRHYWxsZXJ5KHF1ZXJ5KSB7XG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoJy9nYWxsZXJ5Jywgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7XG5cblx0dXJsLnNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnkpO1xuXG5cdHJldHVybiBmZXRjaCh1cmwpXG5cdC50aGVuKHIgPT4gci5qc29uKCksIGNvbnNvbGUubG9nKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ })

})