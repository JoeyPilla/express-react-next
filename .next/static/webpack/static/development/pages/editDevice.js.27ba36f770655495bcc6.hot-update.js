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
/* harmony import */ var _components_deviceGridColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/deviceGridColumn */ "./components/deviceGridColumn.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vm */ "./node_modules/vm-browserify/index.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_dropZone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/dropZone */ "./components/dropZone.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var editDevice =
/*#__PURE__*/
function (_Component) {
  _inherits(editDevice, _Component);

  function editDevice(props) {
    var _this;

    _classCallCheck(this, editDevice);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(editDevice).call(this, props));
    _this.state = {
      data: {},
      files: []
    };
    _this.handleFileChange = _this.handleFileChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleFileDrops = _this.handleFileDrops.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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
    key: "handleFileChange",
    value: function handleFileChange(file, name) {
      var files = this.state.files;
      var data = this.state.data;

      switch (name) {
        case 'Dieplot':
          data.dieplotUpdateCount ? data.dieplotUpdateCount = data.dieplotUpdateCount++ : data.dieplotUpdateCount = 1;
          data.dieplotLastUpdateDate = new Date();
          data.dieplot = file.name;
          break;

        case 'Pinout':
          data.pinoutUpdateCount ? data.pinoutUpdateCount = data.pinoutUpdateCount++ : data.pinoutUpdateCount = 1;
          data.pinoutLastUpdateDate = new Date();
          data.pinout = file.name;
          break;

        case 'Database':
          data.databaseUpdateCount ? data.databaseUpdateCount = data.databaseUpdateCount++ : data.databaseUpdateCount = 1;
          data.databaseLastUpdateDate = new Date();
          data.database = file.name;
          break;

        case 'Assura':
          data.assuraUpdateCount ? data.assuraUpdateCount = data.assuraUpdateCount++ : data.assuraUpdateCount = 1;
          data.assuraLastUpdateDate = new Date();
          data.assura = file.name;
          break;

        case 'Datasheet':
          data.datasheetUpdateCount ? data.datasheetUpdateCount = data.datasheetUpdateCount++ : data.datasheetUpdateCount = 1;
          data.datasheetLastUpdateDate = new Date();
          data.datasheet = file.name;
          break;

        case 'EVM':
          data.evmUpdateCount ? data.evmUpdateCount = data.evmUpdateCount++ : data.evmUpdateCount = 1;
          data.evmLastUpdateDate = new Date();
          data.evm = file.name;
          break;
      }

      this.setState({
        data: data,
        files: _toConsumableArray(this.state.files).concat([file])
      });
    }
  }, {
    key: "handleFileDrops",
    value: function handleFileDrops(files) {
      Array.from(files).forEach(function (file) {
        var name = file.name;

        if (name.contains('pin')) {
          console.log("pin my dude");
        }

        console.log(file);
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var data = this.state.data;
      console.log('data', data);
      var url = ' http://localhost:3000/api/updateDevice';
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(url, data).then(function (response) {
        return console.log(response);
      }).catch(function (e) {
        return console.log(e);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h1",
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "microchip"
      }), this.state.data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        columns: "equal",
        divided: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_deviceGridColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "Dieplot",
        file: this.state.data.dieplot,
        count: this.state.data.dieplotUpdateCount,
        date: this.state.data.dieplotLastUpdateDate,
        onChange: this.handleFileChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_deviceGridColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "Pinout",
        file: this.state.data.pinout,
        count: this.state.data.pinoutUpdateCount,
        date: this.state.data.pinoutLastUpdateDate,
        onChange: this.handleFileChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_deviceGridColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "Database",
        file: this.state.data.database,
        count: this.state.data.databaseUpdateCount,
        date: this.state.data.databaseLastUpdateDate,
        onChange: this.handleFileChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_deviceGridColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "Assura",
        file: this.state.data.assura,
        count: this.state.data.assuraUpdateCount,
        date: this.state.data.assuraLastUpdateDate,
        onChange: this.handleFileChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_deviceGridColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "Datasheet",
        file: this.state.data.datasheet,
        count: this.state.data.datasheetUpdateCount,
        date: this.state.data.datasheetLastUpdateDate,
        onChange: this.handleFileChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_deviceGridColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "EVM",
        file: this.state.data.evm,
        count: this.state.data.evmUpdateCount,
        date: this.state.data.evmLastUpdateDate,
        onChange: this.handleFileChange
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dropZone__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onDrop: this.handleFileDrops
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Drag files here..."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "submit",
        onClick: this.handleSubmit
      }, "Submit")));
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
//# sourceMappingURL=editDevice.js.27ba36f770655495bcc6.hot-update.js.map