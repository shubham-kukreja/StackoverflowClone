webpackHotUpdate("static\\development\\pages\\q\\[qid].js",{

/***/ "./components/QuestionDetail.js":
/*!**************************************!*\
  !*** ./components/QuestionDetail.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Spinner */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var _data_questionsData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/questionsData */ "./data/questionsData.js");
/* harmony import */ var _Answer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Answer */ "./components/Answer.js");
/* harmony import */ var _PostAnswer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PostAnswer */ "./components/PostAnswer.js");







var _jsxFileName = "C:\\Users\\skukr\\Desktop\\redcarpet\\stackoverflow-react-next\\components\\QuestionDetail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var QuestionDetail = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(QuestionDetail, _Component);

  var _super = _createSuper(QuestionDetail);

  function QuestionDetail() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuestionDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      data: null,
      answerCount: 0
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuestionDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var question = _data_questionsData__WEBPACK_IMPORTED_MODULE_9__["default"].filter(function (item) {
        return item.id === parseInt(_this2.props.questionId);
      })[0];
      this.setState({
        data: question,
        answerCount: question.answers.length
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          data = _this$state.data,
          answerCount = _this$state.answerCount;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, data ? __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }, data.title), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }, data.body), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }, "Total Answers : ", answerCount), data.answers.map(function (ans) {
        return __jsx(_Answer__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: ans,
          key: ans.id,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }
        });
      })) : __jsx("div", {
        className: "center text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        animation: "border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }
      })));
    }
  }]);

  return QuestionDetail;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QuestionDetail);

/***/ })

})
//# sourceMappingURL=[qid].js.13b0efb6535c5e94dd9d.hot-update.js.map