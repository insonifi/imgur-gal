webpackHotUpdate("main",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getGallery, getImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGallery\", function() { return getGallery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImage\", function() { return getImage; });\nvar handleJson = function handleJson(r) {\n  if (r.ok) {\n    return r.json();\n  } else {\n    console.log(id, r.status);\n  }\n};\n\nfunction getGallery(query) {\n  var url = new URL('/gallery', window.location.origin);\n  url.search = new URLSearchParams(query).toString();\n  return fetch(url).then(handleJson, console.log);\n}\nfunction getImage(id) {\n  var url = new URL('/image', window.location.origin);\n  url.search = new URLSearchParams({\n    id: id\n  }).toString();\n  return fetch(url).then(handleJson, console.log);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cblxuY29uc3QgaGFuZGxlSnNvbiA9IHIgPT4ge1xuXHRpZiAoci5vaykge1xuXHRcdHJldHVybiByLmpzb24oKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmxvZyhpZCwgci5zdGF0dXMpO1xuXHR9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2FsbGVyeShxdWVyeTogT2JqZWN0KSB7XG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoJy9nYWxsZXJ5Jywgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7XG5cblx0dXJsLnNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnkpLnRvU3RyaW5nKCk7XG5cblx0cmV0dXJuIGZldGNoKHVybCkudGhlbihoYW5kbGVKc29uLCBjb25zb2xlLmxvZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbWFnZShpZDogc3RyaW5nKSB7XG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoJy9pbWFnZScsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xuXG5cdHVybC5zZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtpZH0pLnRvU3RyaW5nKCk7XG5cblx0cmV0dXJuIGZldGNoKHVybCkudGhlbihoYW5kbGVKc29uLCBjb25zb2xlLmxvZyk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ })

})