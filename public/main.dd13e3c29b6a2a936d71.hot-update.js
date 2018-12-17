webpackHotUpdate("main",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getGallery, getImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGallery\", function() { return getGallery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImage\", function() { return getImage; });\nvar handleJson = function handleJson(r) {\n  if (r.ok) {\n    return r.json();\n  } else {\n    console.log(r.origin, r.status);\n    return {\n      success: false\n    };\n  }\n};\n\nfunction getGallery(query) {\n  var url = new URL('/gallery', window.location.origin);\n  url.search = new URLSearchParams(query).toString();\n  return fetch(url).then(handleJson, console.log);\n}\nfunction getImage(id) {\n  var url = new URL('/image', window.location.origin);\n  url.search = new URLSearchParams({\n    id: id\n  }).toString();\n  return fetch(url).then(handleJson, console.log);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmNvbnN0IGhhbmRsZUpzb24gPSByID0+IHtcblx0aWYgKHIub2spIHtcblx0XHRyZXR1cm4gci5qc29uKCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coci5vcmlnaW4sIHIuc3RhdHVzKTtcblx0XHRyZXR1cm4ge3N1Y2Nlc3M6IGZhbHNlfTtcblx0fVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdhbGxlcnkocXVlcnk6IE9iamVjdCkge1xuXHRjb25zdCB1cmwgPSBuZXcgVVJMKCcvZ2FsbGVyeScsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xuXG5cdHVybC5zZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KS50b1N0cmluZygpO1xuXG5cdHJldHVybiBmZXRjaCh1cmwpLnRoZW4oaGFuZGxlSnNvbiwgY29uc29sZS5sb2cpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1hZ2UoaWQ6IHN0cmluZykge1xuXHRjb25zdCB1cmwgPSBuZXcgVVJMKCcvaW1hZ2UnLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcblxuXHR1cmwuc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7aWR9KS50b1N0cmluZygpO1xuXG5cdHJldHVybiBmZXRjaCh1cmwpLnRoZW4oaGFuZGxlSnNvbiwgY29uc29sZS5sb2cpO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ })

})