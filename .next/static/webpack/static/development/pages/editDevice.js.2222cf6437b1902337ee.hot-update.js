webpackHotUpdate("static/development/pages/editDevice.js",{

/***/ "./components/dropZone.js":
/*!********************************!*\
  !*** ./components/dropZone.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropZone; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var DropZone =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropZone, _React$Component);

  function DropZone(props) {
    var _this;

    _classCallCheck(this, DropZone);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropZone).call(this, props));
    _this.state = {
      className: 'drop-zone-hide'
    };
    _this._onDragEnter = _this._onDragEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._onDragLeave = _this._onDragLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._onDragOver = _this._onDragOver.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._onDrop = _this._onDrop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DropZone, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('mouseup', this._onDragLeave);
      window.addEventListener('dragenter', this._onDragEnter);
      window.addEventListener('dragover', this._onDragOver);
      document.getElementById(this.props.name + "dragbox").addEventListener('dragleave', this._onDragLeave);
      window.addEventListener('drop', this._onDrop);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('mouseup', this._onDragLeave);
      window.removeEventListener('dragenter', this._onDragEnter);
      window.addEventListener('dragover', this._onDragOver);
      document.getElementById('dragbox').removeEventListener('dragleave', this._onDragLeave);
      window.removeEventListener('drop', this._onDrop);
    }
  }, {
    key: "_onDragEnter",
    value: function _onDragEnter(e) {
      this.setState({
        className: 'drop-zone-show'
      });
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
  }, {
    key: "_onDragOver",
    value: function _onDragOver(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, {
    key: "_onDragLeave",
    value: function _onDragLeave(e) {
      this.setState({
        className: 'drop-zone-hide'
      });
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
  }, {
    key: "_onDrop",
    value: function _onDrop(e) {
      e.preventDefault();
      var files = e.dataTransfer.files;
      console.log('Files dropped: ', files); // Upload files

      this.setState({
        className: 'drop-zone-hide'
      });
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.name + "dragbox",
        className: this.state.className
      }, "Drop a file to Upload"));
    }
  }]);

  return DropZone;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=editDevice.js.2222cf6437b1902337ee.hot-update.js.map