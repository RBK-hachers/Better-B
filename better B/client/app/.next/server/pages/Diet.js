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
exports.id = "pages/Diet";
exports.ids = ["pages/Diet"];
exports.modules = {

/***/ "./pages/Diet.tsx":
/*!************************!*\
  !*** ./pages/Diet.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Diet)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Diet() {\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handletextchange = (event)=>{\n        setInput(event.target.value);\n        console.log(event.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:2000/api/diets\").then((respone)=>respone.json()).then((data)=>setData(data));\n    }, []);\n    const { 0: newDiet , 1: setnewDiet  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"spaghetti\",\n        img: \"qdqsdq\",\n        description: \"spaghetti is healthy\"\n    });\n    const { 0: input , 1: setInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const adddiet = async ()=>{\n        const res = await fetch(\"/api/diets\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                newDiet\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await res.json();\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        onChange: handletextchange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\haythem\\\\Desktop\\\\working repos\\\\Better B\\\\Better-B\\\\better B\\\\client\\\\app\\\\pages\\\\Diet.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: adddiet,\n                        children: \"add diet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\haythem\\\\Desktop\\\\working repos\\\\Better B\\\\Better-B\\\\better B\\\\client\\\\app\\\\pages\\\\Diet.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\haythem\\\\Desktop\\\\working repos\\\\Better B\\\\Better-B\\\\better B\\\\client\\\\app\\\\pages\\\\Diet.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            data.map((diet, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: diet.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\haythem\\\\Desktop\\\\working repos\\\\Better B\\\\Better-B\\\\better B\\\\client\\\\app\\\\pages\\\\Diet.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: diet.img\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\haythem\\\\Desktop\\\\working repos\\\\Better B\\\\Better-B\\\\better B\\\\client\\\\app\\\\pages\\\\Diet.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: diet.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\haythem\\\\Desktop\\\\working repos\\\\Better B\\\\Better-B\\\\better B\\\\client\\\\app\\\\pages\\\\Diet.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\haythem\\\\Desktop\\\\working repos\\\\Better B\\\\Better-B\\\\better B\\\\client\\\\app\\\\pages\\\\Diet.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\haythem\\\\Desktop\\\\working repos\\\\Better B\\\\Better-B\\\\better B\\\\client\\\\app\\\\pages\\\\Diet.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\haythem\\\\Desktop\\\\working repos\\\\Better B\\\\Better-B\\\\better B\\\\client\\\\app\\\\pages\\\\Diet.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EaWV0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBO0FBQ3dEO0FBQ3pDLFNBQVNFLElBQUksR0FBRTtJQUMxQixNQUFNLEtBQUNDLElBQUksTUFBQ0MsT0FBTyxNQUFFSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQU1qQyxNQUFNSSxnQkFBZ0IsR0FBQyxDQUFDQyxLQUFtQyxHQUFHO1FBQzFEQyxRQUFRLENBQUNELEtBQUssQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUM7UUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0tBQ2xDO0lBR0RULGdEQUFTLENBQUMsSUFBSTtRQUNWWSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxDQUFBQSxPQUFPLEdBQUVBLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FBQ0YsSUFBSSxDQUFDVixDQUFBQSxJQUFJLEdBQUVDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDLENBQUM7S0FDbkcsRUFBQyxFQUFFLENBQUM7SUFDTCxNQUFNLEtBQUNhLE9BQU8sTUFBQ0MsVUFBVSxNQUFFaEIsK0NBQVEsQ0FBQztRQUFDaUIsSUFBSSxFQUFDLFdBQVc7UUFBQ0MsR0FBRyxFQUFDLFFBQVE7UUFBQ0MsV0FBVyxFQUFDLHNCQUFzQjtLQUFDLENBQUM7SUFDdkcsTUFBTSxLQUFDQyxLQUFLLE1BQUNkLFFBQVEsTUFBRU4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDbkMsTUFBTXFCLE9BQU8sR0FBSyxVQUFTO1FBRXZCLE1BQU1DLEdBQUcsR0FBRyxNQUFNWCxLQUFLLENBQUUsWUFBWSxFQUFDO1lBQ2xDWSxNQUFNLEVBQUMsTUFBTTtZQUNiQyxJQUFJLEVBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dCQUFDWCxPQUFPO2FBQUMsQ0FBQztZQUM5QlksT0FBTyxFQUFDO2dCQUNKLGNBQWMsRUFBQyxrQkFBa0I7YUFDcEM7U0FDSixDQUFDO1FBQ0YsTUFBTXpCLElBQUksR0FBRSxNQUFNb0IsR0FBRyxDQUFDUixJQUFJLEVBQUU7UUFDNUJMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixJQUFJLENBQUM7S0FDcEI7SUFDRCxxQkFDSSw4REFBQzBCLEtBQUc7OzBCQUVBLDhEQUFDQyxNQUFJOztrQ0FDRCw4REFBQ1QsT0FBSzt3QkFBQ1UsSUFBSSxFQUFDLE1BQU07d0JBQUNDLFFBQVEsRUFBRTNCLGdCQUFnQjs7Ozs7NEJBQUc7a0NBQ2hELDhEQUFDNEIsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFWixPQUFPO2tDQUFFLFVBQVE7Ozs7OzRCQUFTOzs7Ozs7b0JBQ3hDO1lBQ05uQixJQUFJLENBQUNnQyxHQUFHLENBQUMsQ0FBQ0MsSUFBUSxFQUFDQyxLQUFZLGlCQUM1Qiw4REFBQ0MsSUFBRTs4QkFDQyw0RUFBQ1QsS0FBRzs7MENBQ0osOERBQUNVLElBQUU7MENBQUVILElBQUksQ0FBQ2xCLElBQUk7Ozs7O29DQUFNOzBDQUNwQiw4REFBQ0MsS0FBRztnQ0FBQ3FCLEdBQUcsRUFBRUosSUFBSSxDQUFDakIsR0FBRzs7Ozs7b0NBQUk7MENBQ3RCLDhEQUFDc0IsR0FBQzswQ0FBRUwsSUFBSSxDQUFDaEIsV0FBVzs7Ozs7b0NBQUs7O3VCQUhmaUIsS0FBSzs7Ozs0QkFJVDs7Ozs7d0JBQ0wsQ0FHUjs7Ozs7O1lBQ0csQ0FDWDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vcGFnZXMvRGlldC50c3g/MzI3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gta2V5ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzICovXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlldCgpe1xyXG4gICAgY29uc3QgW2RhdGEsc2V0RGF0YV09dXNlU3RhdGUoW10pXHJcbiAgICBpbnRlcmZhY2UgT25lRGlldCB7XHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGltZzogc3RyaW5nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOnN0cmluZ1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxldGV4dGNoYW5nZT0oZXZlbnQ6Q2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbiAgICAgICAgc2V0SW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoyMDAwL2FwaS9kaWV0c1wiKS50aGVuKHJlc3BvbmU9PnJlc3BvbmUuanNvbigpKS50aGVuKGRhdGE9PnNldERhdGEoZGF0YSkpXHJcbiAgICB9LFtdKVxyXG4gICAgY29uc3QgW25ld0RpZXQsc2V0bmV3RGlldF09dXNlU3RhdGUoe25hbWU6XCJzcGFnaGV0dGlcIixpbWc6XCJxZHFzZHFcIixkZXNjcmlwdGlvbjpcInNwYWdoZXR0aSBpcyBoZWFsdGh5XCJ9KVxyXG4gICAgY29uc3QgW2lucHV0LHNldElucHV0XT11c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IGFkZGRpZXQ6YW55PWFzeW5jKCk9PntcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2ggKCcvYXBpL2RpZXRzJyx7XHJcbiAgICAgICAgICAgIG1ldGhvZDpcIlBPU1RcIixcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7bmV3RGlldH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBkYXRhPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGZvcm0gPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZXRleHRjaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkZGlldH0+YWRkIGRpZXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGRpZXQ6YW55LGluZGV4Om51bWJlcik9PihcclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57ZGlldC5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RpZXQuaW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntkaWV0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4gXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRpZXQiLCJkYXRhIiwic2V0RGF0YSIsImhhbmRsZXRleHRjaGFuZ2UiLCJldmVudCIsInNldElucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uZSIsImpzb24iLCJuZXdEaWV0Iiwic2V0bmV3RGlldCIsIm5hbWUiLCJpbWciLCJkZXNjcmlwdGlvbiIsImlucHV0IiwiYWRkZGlldCIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImRpdiIsImZvcm0iLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiZGlldCIsImluZGV4IiwidWwiLCJoMSIsInNyYyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Diet.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/Diet.tsx"));
module.exports = __webpack_exports__;

})();