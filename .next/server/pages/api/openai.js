"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/openai";
exports.ids = ["pages/api/openai"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/openai.js":
/*!*****************************!*\
  !*** ./pages/api/openai.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const completion = await openai.createCompletion(\"text-curie-001\", {\n        prompt: req.body.prompt,\n        temperature: 0.6,\n        max_tokens: 180,\n        top_p: 1,\n        frequency_penalty: 0,\n        presence_penalty: 0\n    });\n    res.status(200).json({\n        result: completion.data.choices[0].text\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3BlbmFpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs2RUFBNkU7QUFFM0I7QUFFbEQsTUFBTUUsYUFBYSxHQUFHLElBQUlGLGlEQUFhLENBQUM7SUFDdENHLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGNBQWM7Q0FDbkMsQ0FBQztBQUNGLE1BQU1DLE1BQU0sR0FBRyxJQUFJTiw2Q0FBUyxDQUFDQyxhQUFhLENBQUM7QUFFM0MsNkJBQWUsMENBQWdCTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxNQUFNQyxVQUFVLEdBQUcsTUFBTUgsTUFBTSxDQUFDSSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRTtRQUNqRUMsTUFBTSxFQUFFSixHQUFHLENBQUNLLElBQUksQ0FBQ0QsTUFBTTtRQUN2QkUsV0FBVyxFQUFFLEdBQUc7UUFDaEJDLFVBQVUsRUFBRSxHQUFHO1FBQ2ZDLEtBQUssRUFBRSxDQUFDO1FBQ1JDLGlCQUFpQixFQUFFLENBQUM7UUFDcEJDLGdCQUFnQixFQUFFLENBQUM7S0FDcEIsQ0FBQztJQUNGVCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE1BQU0sRUFBRVgsVUFBVSxDQUFDWSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSTtLQUFFLENBQUMsQ0FBQztDQUNuRSIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS8uL3BhZ2VzL2FwaS9vcGVuYWkuanM/OTc3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tICdvcGVuYWknO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKCd0ZXh0LWN1cmllLTAwMScsIHtcbiAgICBwcm9tcHQ6IHJlcS5ib2R5LnByb21wdCxcbiAgICB0ZW1wZXJhdHVyZTogMC42LFxuICAgIG1heF90b2tlbnM6IDE4MCxcbiAgICB0b3BfcDogMSxcbiAgICBmcmVxdWVuY3lfcGVuYWx0eTogMCxcbiAgICBwcmVzZW5jZV9wZW5hbHR5OiAwLFxuICB9KTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IGNvbXBsZXRpb24uZGF0YS5jaG9pY2VzWzBdLnRleHQgfSk7XG59XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXEiLCJyZXMiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsInByb21wdCIsImJvZHkiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJ0b3BfcCIsImZyZXF1ZW5jeV9wZW5hbHR5IiwicHJlc2VuY2VfcGVuYWx0eSIsInN0YXR1cyIsImpzb24iLCJyZXN1bHQiLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/openai.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/openai.js"));
module.exports = __webpack_exports__;

})();