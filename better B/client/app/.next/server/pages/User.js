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
exports.id = "pages/User";
exports.ids = ["pages/User"];
exports.modules = {

/***/ "./pages/User.tsx":
/*!************************!*\
  !*** ./pages/User.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction User() {\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //get users from database\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:2000/api/user\").then((response)=>{\n            response.json().then((data)=>{\n                setData(data);\n            });\n        });\n    }, []);\n    //sign up \n    const { 0: newUser , 1: setNewUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"fetchFrontEnd@gamil.com\",\n        password: \"password\"\n    });\n    const signup = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:2000/api/user/signup\", {\n                method: \"POST\",\n                headers: {\n                    \"Accept\": \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(newUser)\n            });\n            return res;\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.map((user, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: user.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\haythem\\\\Desktop\\\\working repos\\\\Better B\\\\Better-B\\\\better B\\\\client\\\\app\\\\pages\\\\User.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\haythem\\\\Desktop\\\\working repos\\\\Better B\\\\Better-B\\\\better B\\\\client\\\\app\\\\pages\\\\User.tsx\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\haythem\\\\Desktop\\\\working repos\\\\Better B\\\\Better-B\\\\better B\\\\client\\\\app\\\\pages\\\\User.tsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Vc2VyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBDO0FBQzFDLFNBQVNFLElBQUksR0FBRTtJQUNYLE1BQU0sS0FBQ0MsSUFBSSxNQUFDQyxPQUFPLE1BQUlILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ25DLHlCQUF5QjtJQUN6QkQsZ0RBQVMsQ0FBQyxJQUFLO1FBQ2RLLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUN0Q0MsSUFBSSxDQUFFLENBQUNDLFFBQVEsR0FBRztZQUNoQkEsUUFBUSxDQUFDQyxJQUFJLEVBQUUsQ0FDZEYsSUFBSSxDQUFDLENBQUNILElBQUksR0FBRztnQkFDVkMsT0FBTyxDQUFDRCxJQUFJLENBQUMsQ0FBQzthQUVqQixDQUFDO1NBQ0osQ0FBQztLQUNGLEVBQUMsRUFBRSxDQUFDO0lBTVQsVUFBVTtJQUNULE1BQU0sS0FBQ00sT0FBTyxNQUFDQyxVQUFVLE1BQUlULCtDQUFRLENBQUM7UUFBQ1UsS0FBSyxFQUFDLHlCQUF5QjtRQUFDQyxRQUFRLEVBQUMsVUFBVTtLQUFDLENBQUM7SUFDNUYsTUFBTUMsTUFBTSxHQUFTLFVBQVU7UUFDaEMsSUFBRztZQUNDLE1BQU1DLEdBQUcsR0FBRyxNQUFNVCxLQUFLLENBQUMsdUNBQXVDLEVBQUM7Z0JBQy9EVSxNQUFNLEVBQUMsTUFBTTtnQkFDYkMsT0FBTyxFQUFFO29CQUNOLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDO2dCQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDVixPQUFPLENBQUM7YUFDNUIsQ0FBQztZQUNGLE9BQU9LLEdBQUc7U0FDYixRQUFPTSxLQUFLLEVBQUU7WUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1NBQ3JCO0tBRUE7SUFJRSxxQkFDSSw4REFBQ0csS0FBRztrQkFDWHBCLElBQUksQ0FBQ3FCLEdBQUcsQ0FBQyxDQUFDQyxJQUFRLEVBQUNDLEtBQVksaUJBQzVCLDhEQUFDSCxLQUFHOzBCQUNBLDRFQUFDSSxJQUFFOzhCQUFFRixJQUFJLENBQUNHLElBQUk7Ozs7O3dCQUFNO2VBRGRGLEtBQUs7Ozs7b0JBRVQsQ0FDUjs7Ozs7WUFDWSxDQUVUO0NBQ0o7QUFDRCxpRUFBZXhCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9Vc2VyLnRzeD81ZWMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmZ1bmN0aW9uIFVzZXIoKXtcclxuICAgIGNvbnN0IFtkYXRhLHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgICAvL2dldCB1c2VycyBmcm9tIGRhdGFiYXNlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MjAwMC9hcGkvdXNlcicpXHJcbiAgICAgLnRoZW4gKChyZXNwb25zZSk9PntcclxuICAgICAgICByZXNwb25zZS5qc29uKClcclxuICAgICAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgc2V0RGF0YShkYXRhKTtcclxuICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9zaWduIHVwIFxyXG4gY29uc3QgW25ld1VzZXIsc2V0TmV3VXNlcl0gPSB1c2VTdGF0ZSh7ZW1haWw6XCJmZXRjaEZyb250RW5kQGdhbWlsLmNvbVwiLHBhc3N3b3JkOlwicGFzc3dvcmRcIn0pXHJcbiBjb25zdCBzaWdudXAgOiBhbnkgPSBhc3luYyAoKT0+e1xyXG50cnl7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MjAwMC9hcGkvdXNlci9zaWdudXBcIix7XHJcbiAgICAgbWV0aG9kOlwiUE9TVFwiLFxyXG4gICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1VzZXIpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJlc1xyXG59Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiB9XHJcblxyXG4gfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbntkYXRhLm1hcCgodXNlcjphbnksaW5kZXg6bnVtYmVyKT0+KFxyXG4gICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICA8aDE+e3VzZXIubmFtZX08L2gxPlxyXG4gICAgPC9kaXY+XHJcbikpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXIiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVc2VyIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJuZXdVc2VyIiwic2V0TmV3VXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWdudXAiLCJyZXMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJ1c2VyIiwiaW5kZXgiLCJoMSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/User.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/User.tsx"));
module.exports = __webpack_exports__;

})();