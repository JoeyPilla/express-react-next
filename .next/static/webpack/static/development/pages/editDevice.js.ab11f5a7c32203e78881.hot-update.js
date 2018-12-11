webpackHotUpdate("static/development/pages/editDevice.js",{

/***/ "./pages/editDevice.js":
/*!*****************************!*\
  !*** ./pages/editDevice.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return editDevice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var editDevice =
/*#__PURE__*/
function (_Component) {
  _inherits(editDevice, _Component);

  function editDevice(props) {
    var _this;

    _classCallCheck(this, editDevice);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(editDevice).call(this, props));
    _this.state = {
      data: {}
    };
    return _this;
  }

  _createClass(editDevice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log(this.props.id);
      fetch("/api/getDevice/".concat(this.props.id)).then(function (res) {
        return res.json();
      }).then(function (user) {
        return _this2.setState({
          data: user.resp[0]
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Devices"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form.Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form.Input, {
        label: "First name",
        placeholder: "First Name",
        width: 6
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form.Input, {
        label: "Middle Name",
        placeholder: "Middle Name",
        width: 4
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form.Input, {
        label: "Last Name",
        placeholder: "Last Name",
        width: 6
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form.Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form.Input, {
        placeholder: "2 Wide",
        width: 2
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form.Input, {
        placeholder: "12 Wide",
        width: 12
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form.Input, {
        placeholder: "2 Wide",
        width: 2
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form.Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form.Input, {
        placeholder: "8 Wide",
        width: 8
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form.Input, {
        placeholder: "6 Wide",
        width: 6
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form.Input, {
        placeholder: "2 Wide",
        width: 2
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var id = _ref.query.id;
      return {
        id: id
      };
    }
  }]);

  return editDevice;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/editDevice")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=editDevice.js.ab11f5a7c32203e78881.hot-update.js.map