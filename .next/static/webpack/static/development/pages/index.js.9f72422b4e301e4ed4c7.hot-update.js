webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/App */ "./src/App.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! local-storage */ "./node_modules/local-storage/local-storage.js");
/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_4__);






var Index = function Index(_ref) {
  var user = _ref.user,
      isServer = _ref.isServer;
  var isBrowser = typeof window !== "undefined"; // this means running on first page load and inside the browser so should store in local storage

  if (isServer && isBrowser) {
    local_storage__WEBPACK_IMPORTED_MODULE_4___default.a.set("userInfo", user);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageName: "Home",
    userInfo: user
  }));
};

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, isServer, user;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            isServer = !!req;

            if (!isServer) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", {
              user: req.user,
              isServer: isServer
            });

          case 6:
            _context.prev = 6;
            user = local_storage__WEBPACK_IMPORTED_MODULE_4___default.a.get("userInfo");
            return _context.abrupt("return", {
              user: user,
              isServer: isServer
            });

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](6);
            return _context.abrupt("return", {
              isServer: isServer
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 11]]);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9f72422b4e301e4ed4c7.hot-update.js.map