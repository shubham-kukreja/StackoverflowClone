module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Answer.js":
/*!******************************!*\
  !*** ./components/Answer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Answer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Jumbotron */ "react-bootstrap/Jumbotron");
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\skukr\\Desktop\\redcarpet\\stackoverflow-react-next\\components\\Answer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Answer(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_1___default.a, {
    fluid: true,
    className: "p-2 mb-2 mu-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, props.data.body), __jsx("div", {
    className: "col-md-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, props.data.upvotes, "\xA0\xA0\xA0", __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, "+"))), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "- ", props.data.answerer.full_name))));
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
var _jsxFileName = "C:\\Users\\skukr\\Desktop\\redcarpet\\stackoverflow-react-next\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Layout(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, props.children));
}

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainNavbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\skukr\\Desktop\\redcarpet\\stackoverflow-react-next\\components\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function MainNavbar() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    bg: "dark",
    variant: "dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
    href: "#home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "StackOverflow")));
}

/***/ }),

/***/ "./components/PostAnswer.js":
/*!**********************************!*\
  !*** ./components/PostAnswer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostAnswer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\skukr\\Desktop\\redcarpet\\stackoverflow-react-next\\components\\PostAnswer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class PostAnswer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    const handleSubmit = event => {
      event.preventDefault();
      console.log(this.state);
    };

    return __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onSubmit: handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
      controlId: "exampleForm.ControlTextarea1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, "Answer This Question"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
      as: "textarea",
      rows: "2",
      name: "body",
      onChange: handleChange,
      style: {
        'height': '40px'
      },
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }, "Submit"));
  }

}

/***/ }),

/***/ "./components/QuestionDetail.js":
/*!**************************************!*\
  !*** ./components/QuestionDetail.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Spinner */ "react-bootstrap/Spinner");
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_questionsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/questionsData */ "./data/questionsData.js");
/* harmony import */ var _Answer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Answer */ "./components/Answer.js");
/* harmony import */ var _PostAnswer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostAnswer */ "./components/PostAnswer.js");
var _jsxFileName = "C:\\Users\\skukr\\Desktop\\redcarpet\\stackoverflow-react-next\\components\\QuestionDetail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class QuestionDetail extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      data: null,
      answerCount: 0
    });
  }

  componentDidMount() {
    const question = _data_questionsData__WEBPACK_IMPORTED_MODULE_2__["default"].filter(item => item.id === parseInt(this.props.questionId))[0];
    this.setState({
      data: question,
      answerCount: question.answers.length
    });
  }

  render() {
    const {
      data,
      answerCount
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data ? __jsx("div", {
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
    }, "Total Answers : ", answerCount), data.answers.map(ans => __jsx(_Answer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: ans,
      key: ans.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    })), __jsx(_PostAnswer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    })) : __jsx("div", {
      className: "center text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_1___default.a, {
      animation: "border",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (QuestionDetail);

/***/ }),

/***/ "./data/questionsData.js":
/*!*******************************!*\
  !*** ./data/questionsData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "id": 1023,
  "title": "Noma here again with a question",
  "body": "I am Noma Jerde and I have so many questions",
  "like_count": 0,
  "created_at": "2019-01-17T23:05:21.255Z",
  "updated_at": "2019-01-17T23:05:21.255Z",
  "view_count": 49,
  "author": {
    "id": 61,
    "first_name": "Noma",
    "last_name": "Jerde",
    "full_name": "Noma Jerde",
    "created_at": "2019-01-17T21:46:15.135Z",
    "updated_at": "2019-01-17T21:46:15.135Z"
  },
  "answers": []
}, {
  "id": 898,
  "title": "If we synthesize the port, we can get to the GB capacitor through the solid state ADP microchip!",
  "body": "The class object inherits from Chuck Norris.",
  "like_count": 8,
  "created_at": "2018-12-30T00:00:00.000Z",
  "updated_at": "2018-12-30T00:00:00.000Z",
  "view_count": 16887,
  "author": {
    "id": 69,
    "first_name": "Valentine",
    "last_name": "Altenwerth",
    "full_name": "Valentine Altenwerth",
    "created_at": "2019-01-17T21:46:15.638Z",
    "updated_at": "2019-01-17T21:46:15.638Z"
  },
  "answers": [{
    "id": 5089,
    "upvotes": 25,
    "body": "Control thy passions lest they take vengence on thee.",
    "created_at": "2019-01-17T21:46:18.492Z",
    "updated_at": "2019-01-17T21:46:18.492Z",
    "answerer": {
      "id": 67,
      "first_name": "Kenneth",
      "last_name": "Gottlieb",
      "full_name": "Kenneth Gottlieb",
      "created_at": "2019-01-17T21:46:15.480Z",
      "updated_at": "2019-01-17T21:46:15.480Z"
    }
  }, {
    "id": 5088,
    "upvotes": 25,
    "body": "The unexamined life is not worth living.",
    "created_at": "2019-01-17T21:46:18.491Z",
    "updated_at": "2019-01-17T21:46:18.491Z",
    "answerer": {
      "id": 63,
      "first_name": "Azalee",
      "last_name": "Dietrich",
      "full_name": "Azalee Dietrich",
      "created_at": "2019-01-17T21:46:15.249Z",
      "updated_at": "2019-01-17T21:46:15.249Z"
    }
  }, {
    "id": 5087,
    "upvotes": 25,
    "body": "Know how to listen, and you will profit even from those who talk badly.",
    "created_at": "2019-01-17T21:46:18.489Z",
    "updated_at": "2019-01-17T21:46:18.489Z",
    "answerer": {
      "id": 59,
      "first_name": "Jon",
      "last_name": "Snow",
      "full_name": "Jon Snow",
      "created_at": "2019-01-17T21:46:14.923Z",
      "updated_at": "2019-01-17T21:46:14.923Z"
    }
  }, {
    "id": 5086,
    "upvotes": 25,
    "body": "Control thy passions lest they take vengence on thee.",
    "created_at": "2019-01-17T21:46:18.488Z",
    "updated_at": "2019-01-17T21:46:18.488Z",
    "answerer": {
      "id": 67,
      "first_name": "Kenneth",
      "last_name": "Gottlieb",
      "full_name": "Kenneth Gottlieb",
      "created_at": "2019-01-17T21:46:15.480Z",
      "updated_at": "2019-01-17T21:46:15.480Z"
    }
  }]
}, {
  "id": 833,
  "title": "Quantifying the matrix won't do anything, we need to index the virtual com interface!",
  "body": "Chuck Norris' programs occupy 150% of CPU, even when they are not executing.",
  "like_count": 2,
  "created_at": "2018-12-21T00:00:00.000Z",
  "updated_at": "2018-12-21T00:00:00.000Z",
  "view_count": 59777,
  "author": {
    "id": 62,
    "first_name": "Rebekah",
    "last_name": "Hane",
    "full_name": "Rebekah Hane",
    "created_at": "2019-01-17T21:46:15.193Z",
    "updated_at": "2019-01-17T21:46:15.193Z"
  },
  "answers": [{
    "id": 4630,
    "upvotes": 25,
    "body": "A few vices are sufficient to darken many virtues.",
    "created_at": "2019-01-17T21:46:16.340Z",
    "updated_at": "2019-01-17T21:46:16.340Z",
    "answerer": {
      "id": 66,
      "first_name": "Michael",
      "last_name": "Goldner",
      "full_name": "Michael Goldner",
      "created_at": "2019-01-17T21:46:15.422Z",
      "updated_at": "2019-01-17T21:46:15.422Z"
    }
  }, {
    "id": 4629,
    "upvotes": 25,
    "body": "There was never a genius without a tincture of madness.",
    "created_at": "2019-01-17T21:46:16.337Z",
    "updated_at": "2019-01-17T21:46:16.337Z",
    "answerer": {
      "id": 61,
      "first_name": "Noma",
      "last_name": "Jerde",
      "full_name": "Noma Jerde",
      "created_at": "2019-01-17T21:46:15.135Z",
      "updated_at": "2019-01-17T21:46:15.135Z"
    }
  }, {
    "id": 4628,
    "upvotes": 25,
    "body": "Love is composed of a single soul inhabiting two bodies.",
    "created_at": "2019-01-17T21:46:16.336Z",
    "updated_at": "2019-01-17T21:46:16.336Z",
    "answerer": {
      "id": 61,
      "first_name": "Noma",
      "last_name": "Jerde",
      "full_name": "Noma Jerde",
      "created_at": "2019-01-17T21:46:15.135Z",
      "updated_at": "2019-01-17T21:46:15.135Z"
    }
  }, {
    "id": 4627,
    "upvotes": 25,
    "body": "It is impossible to begin to learn that which one thinks one already knows.",
    "created_at": "2019-01-17T21:46:16.334Z",
    "updated_at": "2019-01-17T21:46:16.334Z",
    "answerer": {
      "id": 64,
      "first_name": "Cleveland",
      "last_name": "Wunsch",
      "full_name": "Cleveland Wunsch",
      "created_at": "2019-01-17T21:46:15.307Z",
      "updated_at": "2019-01-17T21:46:15.307Z"
    }
  }, {
    "id": 4626,
    "upvotes": 25,
    "body": "Beware the barrenness of a busy life.",
    "created_at": "2019-01-17T21:46:16.332Z",
    "updated_at": "2019-01-17T21:46:16.332Z",
    "answerer": {
      "id": 62,
      "first_name": "Rebekah",
      "last_name": "Hane",
      "full_name": "Rebekah Hane",
      "created_at": "2019-01-17T21:46:15.193Z",
      "updated_at": "2019-01-17T21:46:15.193Z"
    }
  }, {
    "id": 4625,
    "upvotes": 25,
    "body": "Pleasure in the job puts perfection in the work.",
    "created_at": "2019-01-17T21:46:16.331Z",
    "updated_at": "2019-01-17T21:46:16.331Z",
    "answerer": {
      "id": 69,
      "first_name": "Valentine",
      "last_name": "Altenwerth",
      "full_name": "Valentine Altenwerth",
      "created_at": "2019-01-17T21:46:15.638Z",
      "updated_at": "2019-01-17T21:46:15.638Z"
    }
  }, {
    "id": 4624,
    "upvotes": 25,
    "body": "Control thy passions lest they take vengence on thee.",
    "created_at": "2019-01-17T21:46:16.329Z",
    "updated_at": "2019-01-17T21:46:16.329Z",
    "answerer": {
      "id": 59,
      "first_name": "Jon",
      "last_name": "Snow",
      "full_name": "Jon Snow",
      "created_at": "2019-01-17T21:46:14.923Z",
      "updated_at": "2019-01-17T21:46:14.923Z"
    }
  }, {
    "id": 4623,
    "upvotes": 25,
    "body": "Good habits formed at youth make all the difference.",
    "created_at": "2019-01-17T21:46:16.327Z",
    "updated_at": "2019-01-17T21:46:16.327Z",
    "answerer": {
      "id": 63,
      "first_name": "Azalee",
      "last_name": "Dietrich",
      "full_name": "Azalee Dietrich",
      "created_at": "2019-01-17T21:46:15.249Z",
      "updated_at": "2019-01-17T21:46:15.249Z"
    }
  }]
}]);

/***/ }),

/***/ "./pages/q/[qid].js":
/*!**************************!*\
  !*** ./pages/q/[qid].js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_QuestionDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/QuestionDetail */ "./components/QuestionDetail.js");
var _jsxFileName = "C:\\Users\\skukr\\Desktop\\redcarpet\\stackoverflow-react-next\\pages\\q\\[qid].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Post() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_components_QuestionDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
    questionId: router.query.qid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/q/[qid].js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\skukr\Desktop\redcarpet\stackoverflow-react-next\pages\q\[qid].js */"./pages/q/[qid].js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react-bootstrap/Jumbotron":
/*!********************************************!*\
  !*** external "react-bootstrap/Jumbotron" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Jumbotron");

/***/ }),

/***/ "react-bootstrap/Spinner":
/*!******************************************!*\
  !*** external "react-bootstrap/Spinner" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Spinner");

/***/ })

/******/ });
//# sourceMappingURL=[qid].js.map