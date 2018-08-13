module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Banner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/techafrkix0/Desktop/react-msa/nouvelledemonextjs/components/Banner.js";


var Banner = function Banner(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: "banner",
    className: "major",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "major",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Hi, my name is Forty")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "A responsive site template designed by HTML5 UP", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), "and released under the Creative Commons."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "actions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#one",
    className: "button next scrolly",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Get Started"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Banner);

/***/ }),

/***/ "./components/Contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/techafrkix0/Desktop/react-msa/nouvelledemonextjs/components/Contact.js";


var Contact = function Contact(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
    method: "post",
    action: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "field half first",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    htmlFor: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "field half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Email"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "text",
    name: "email",
    id: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    htmlFor: "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Message"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
    name: "message",
    id: "message",
    rows: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "actions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "submit",
    value: "Send Message",
    className: "special",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "reset",
    value: "Clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "split",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "contact-method",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "icon alt fa-envelope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Email"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "information@untitled.tld"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "contact-method",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "icon alt fa-phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Phone"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "(000) 000-0000 x12387"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "contact-method",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "icon alt fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "Address"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "1234 Somewhere Road #5432", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), "Nashville, TN 00000", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), "United States of America"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Contact);

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/techafrkix0/Desktop/react-msa/nouvelledemonextjs/components/Footer.js";


var Footer = function Footer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
    id: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon alt fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Twitter"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon alt fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Facebook"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon alt fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Instagram"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon alt fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "GitHub"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon alt fa-linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "LinkedIn")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "\xA9 Untitled"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Design: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://html5up.net",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "HTML5 UP")))));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/techafrkix0/Desktop/react-msa/nouvelledemonextjs/components/Header.js";




var Header = function Header(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    id: "header",
    className: "alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Forty"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "by HTML5 UP"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "menu-link",
    onClick: props.onToggleMenu,
    href: "javascript:;",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Menu")));
};

Header.propTypes = {
  onToggleMenu: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_main_scss__ = __webpack_require__("./styles/main.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Menu__ = __webpack_require__("./components/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Contact__ = __webpack_require__("./components/Contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = "/Users/techafrkix0/Desktop/react-msa/nouvelledemonextjs/components/Layout.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    _this.state = {
      isMenuVisible: false,
      loading: 'is-loading'
    };
    _this.handleToggleMenu = _this.handleToggleMenu.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timeoutId = setTimeout(function () {
        _this2.setState({
          loading: ''
        });
      }, 100);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    }
  }, {
    key: "handleToggleMenu",
    value: function handleToggleMenu() {
      this.setState({
        isMenuVisible: !this.state.isMenuVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "body ".concat(this.state.loading, " ").concat(this.state.isMenuVisible ? 'is-menu-visible' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Next.js Starter"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "description",
        content: "Next.js Starter - Forty",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "/static/css/skel.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_2__styles_main_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
        onToggleMenu: this.handleToggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), this.props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Contact__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Menu__["a" /* default */], {
        onToggleMenu: this.handleToggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/techafrkix0/Desktop/react-msa/nouvelledemonextjs/components/Menu.js";




var Menu = function Menu(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    id: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    onClick: props.onToggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Home")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/landing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    onClick: props.onToggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Landing")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/generic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    onClick: props.onToggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Generic")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/elements",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    onClick: props.onToggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Elements"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "actions vertical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "button special fit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Get Started")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "button fit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Log In")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "close",
    onClick: props.onToggleMenu,
    href: "javascript:;",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Close"));
};

Menu.propTypes = {
  onToggleMenu: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Banner__ = __webpack_require__("./components/Banner.js");
var _jsxFileName = "/Users/techafrkix0/Desktop/react-msa/nouvelledemonextjs/pages/index.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Banner__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: "one",
    className: "tiles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
    style: {
      backgroundImage: "url('/static/images/pic01.jpg')"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "major",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Aliquam"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Ipsum dolor sit amet")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/landing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "link primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
    style: {
      backgroundImage: "url('/static/images/pic02.jpg')"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "major",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Tempus"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "feugiat amet tempus")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/landing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "link primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
    style: {
      backgroundImage: "url('/static/images/pic03.jpg')"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "major",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "Magna"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Lorem etiam nullam")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/landing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "link primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
    style: {
      backgroundImage: "url('/static/images/pic04.jpg')"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "major",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Ipsum"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Nisl sed aliquam")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/landing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "link primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
    style: {
      backgroundImage: "url('/static/images/pic05.jpg')"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "major",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "Consequat"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "Ipsum dolor sit amet")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/landing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "link primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
    style: {
      backgroundImage: "url('/static/images/pic06.jpg')"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "major",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "Etiam"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "Feugiat amet tempus")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/landing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "link primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: "two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "major",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, "Massa libero")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, "Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "actions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/landing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "button next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, "Get Started")))))))));
});

/***/ }),

/***/ "./styles/main.scss":
/***/ (function(module, exports) {

module.exports = "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}*,*:before,*:after{-webkit-box-sizing:border-box;box-sizing:border-box}@-ms-viewport{width:device-width}body{-ms-overflow-style:scrollbar}@media screen and (max-width: 480px){html,body{min-width:320px}}body{background:#242943}body.is-loading *,body.is-loading *:before,body.is-loading *:after{-webkit-animation:none !important;animation:none !important;-webkit-transition:none !important;transition:none !important}body,input,select,textarea{color:#fff;font-family:\"Source Sans Pro\",Helvetica,sans-serif;font-size:17pt;font-weight:300;letter-spacing:.025em;line-height:1.65}@media screen and (max-width: 1680px){body,input,select,textarea{font-size:14pt}}@media screen and (max-width: 1280px){body,input,select,textarea{font-size:12pt}}@media screen and (max-width: 360px){body,input,select,textarea{font-size:11pt}}a{-webkit-transition:color .2s ease-in-out,border-bottom-color .2s ease-in-out;transition:color .2s ease-in-out,border-bottom-color .2s ease-in-out;border-bottom:dotted 1px;color:inherit;text-decoration:none}a:hover{border-bottom-color:transparent;color:#9bf1ff !important}a:active{color:#53e3fb !important}strong,b{color:#fff;font-weight:600}em,i{font-style:italic}p{margin:0 0 2em 0}h1,h2,h3,h4,h5,h6{color:#fff;font-weight:600;line-height:1.65;margin:0 0 1em 0}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{color:inherit;border-bottom:0}h1{font-size:2.5em}h2{font-size:1.75em}h3{font-size:1.35em}h4{font-size:1.1em}h5{font-size:0.9em}h6{font-size:0.7em}@media screen and (max-width: 736px){h1{font-size:2em}h2{font-size:1.5em}h3{font-size:1.25em}}sub{font-size:0.8em;position:relative;top:0.5em}sup{font-size:0.8em;position:relative;top:-0.5em}blockquote{border-left:solid 4px rgba(212,212,255,0.1);font-style:italic;margin:0 0 2em 0;padding:.5em 0 .5em 2em}code{background:rgba(212,212,255,0.035);font-family:\"Courier New\",monospace;font-size:0.9em;margin:0 0.25em;padding:0.25em 0.65em}pre{-webkit-overflow-scrolling:touch;font-family:\"Courier New\",monospace;font-size:0.9em;margin:0 0 2em 0}pre code{display:block;line-height:1.75;padding:1em 1.5em;overflow-x:auto}hr{border:0;border-bottom:solid 1px rgba(212,212,255,0.1);margin:2em 0}hr.major{margin:3em 0}.align-left{text-align:left}.align-center{text-align:center}.align-right{text-align:right}section.special,article.special{text-align:center}header.major{width:-moz-max-content;width:-webkit-max-content;width:-ms-max-content;width:max-content;margin-bottom:2em}header.major>:first-child{margin-bottom:0;width:calc(100% + 0.5em)}header.major>:first-child:after{content:'';background-color:#fff;display:block;height:2px;margin:0.325em 0 0.5em 0;width:100%}header.major>p{font-size:0.7em;font-weight:600;letter-spacing:.25em;margin-bottom:0;text-transform:uppercase}body.is-ie header.major>:first-child:after{max-width:9em}body.is-ie header.major>h1:after{max-width:100% !important}@media screen and (max-width: 736px){header.major>p br{display:none}}form{margin:0 0 2em 0}form .field{margin:0 0 2em 0}form .field.half{width:50%;float:left;padding:0 0 0 1em}form .field.half.first{padding:0 1em 0 0}form>.actions{margin:2.5em 0 0 0 !important}@media screen and (max-width: 736px){form .field{margin:0 0 1.5em 0}form .field.half{padding:0 0 0 .75em}form .field.half.first{padding:0 .75em 0 0}form>.actions{margin:2em 0 0 0 !important}}@media screen and (max-width: 480px){form .field.half{width:100%;float:none;padding:0}form .field.half.first{padding:0}}label{color:#fff;display:block;font-size:0.8em;font-weight:600;letter-spacing:.25em;margin:0 0 1em 0;text-transform:uppercase}input[type=\"text\"],input[type=\"password\"],input[type=\"email\"],input[type=\"tel\"],input[type=\"search\"],input[type=\"url\"],select,textarea{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none;background:rgba(212,212,255,0.035);border:none;border-radius:0;color:inherit;display:block;outline:0;padding:0 1em;text-decoration:none;width:100%}input[type=\"text\"]:invalid,input[type=\"password\"]:invalid,input[type=\"email\"]:invalid,input[type=\"tel\"]:invalid,input[type=\"search\"]:invalid,input[type=\"url\"]:invalid,select:invalid,textarea:invalid{-webkit-box-shadow:none;box-shadow:none}input[type=\"text\"]:focus,input[type=\"password\"]:focus,input[type=\"email\"]:focus,input[type=\"tel\"]:focus,input[type=\"search\"]:focus,input[type=\"url\"]:focus,select:focus,textarea:focus{border-color:#9bf1ff;-webkit-box-shadow:0 0 0 2px #9bf1ff;box-shadow:0 0 0 2px #9bf1ff}.select-wrapper{text-decoration:none;display:block;position:relative}.select-wrapper:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:FontAwesome;font-style:normal;font-weight:normal;text-transform:none !important}.select-wrapper:before{color:rgba(212,212,255,0.1);content:'\\f078';display:block;height:2.75em;line-height:2.75em;pointer-events:none;position:absolute;right:0;text-align:center;top:0;width:2.75em}.select-wrapper select::-ms-expand{display:none}input[type=\"text\"],input[type=\"password\"],input[type=\"email\"],input[type=\"tel\"],input[type=\"search\"],input[type=\"url\"],select{height:2.75em}textarea{padding:0.75em 1em}input[type=\"checkbox\"],input[type=\"radio\"]{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none;display:block;float:left;margin-right:-2em;opacity:0;width:1em;z-index:-1}input[type=\"checkbox\"]+label,input[type=\"radio\"]+label{text-decoration:none;color:#fff;cursor:pointer;display:inline-block;font-weight:300;padding-left:2.65em;padding-right:0.75em;position:relative}input[type=\"checkbox\"]+label:before,input[type=\"radio\"]+label:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:FontAwesome;font-style:normal;font-weight:normal;text-transform:none !important}input[type=\"checkbox\"]+label:before,input[type=\"radio\"]+label:before{background:rgba(212,212,255,0.035);content:'';display:inline-block;height:1.65em;left:0;letter-spacing:0;line-height:1.58125em;position:absolute;text-align:center;top:0;width:1.65em}input[type=\"checkbox\"]:checked+label:before,input[type=\"radio\"]:checked+label:before{background:#fff;border-color:#9bf1ff;content:'\\f00c';color:#242943}input[type=\"checkbox\"]:focus+label:before,input[type=\"radio\"]:focus+label:before{-webkit-box-shadow:0 0 0 2px #9bf1ff;box-shadow:0 0 0 2px #9bf1ff}input[type=\"radio\"]+label:before{border-radius:100%}::-webkit-input-placeholder{color:rgba(244,244,255,0.2) !important;opacity:1.0}:-moz-placeholder{color:rgba(244,244,255,0.2) !important;opacity:1.0}::-moz-placeholder{color:rgba(244,244,255,0.2) !important;opacity:1.0}:-ms-input-placeholder{color:rgba(244,244,255,0.2) !important;opacity:1.0}.formerize-placeholder{color:rgba(244,244,255,0.2) !important;opacity:1.0}.box{border:solid 1px rgba(212,212,255,0.1);margin-bottom:2em;padding:1.5em}.box>:last-child,.box>:last-child>:last-child,.box>:last-child>:last-child>:last-child{margin-bottom:0}.box.alt{border:0;border-radius:0;padding:0}.icon{text-decoration:none;border-bottom:none;position:relative}.icon:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:FontAwesome;font-style:normal;font-weight:normal;text-transform:none !important}.icon>.label{display:none}.icon.alt:before{background-color:#fff;border-radius:100%;color:#242943;display:inline-block;height:2em;line-height:2em;text-align:center;width:2em}a.icon.alt:before{-webkit-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out}a.icon.alt:hover:before{background-color:#6fc3df}a.icon.alt:active:before{background-color:#37a6cb}.image{border:0;display:inline-block;position:relative}.image img{display:block}.image.left,.image.right{max-width:30%}.image.left img,.image.right img{width:100%}.image.left{float:left;margin:0 1.5em 1.25em 0;top:0.25em}.image.right{float:right;margin:0 0 1.25em 1.5em;top:0.25em}.image.fit{display:block;margin:0 0 2em 0;width:100%}.image.fit img{width:100%}.image.main{display:block;margin:2.5em 0;width:100%}.image.main img{width:100%}@media screen and (max-width: 736px){.image.main{margin:1.5em 0}}ol{list-style:decimal;margin:0 0 2em 0;padding-left:1.25em}ol li{padding-left:0.25em}ul{list-style:disc;margin:0 0 2em 0;padding-left:1em}ul li{padding-left:0.5em}ul.alt{list-style:none;padding-left:0}ul.alt li{border-top:solid 1px rgba(212,212,255,0.1);padding:0.5em 0}ul.alt li:first-child{border-top:0;padding-top:0}ul.icons{cursor:default;list-style:none;padding-left:0}ul.icons li{display:inline-block;padding:0 1em 0 0}ul.icons li:last-child{padding-right:0}@media screen and (max-width: 736px){ul.icons li{padding:0 0.75em 0 0}}ul.actions{cursor:default;list-style:none;padding-left:0}ul.actions li{display:inline-block;padding:0 1em 0 0;vertical-align:middle}ul.actions li:last-child{padding-right:0}ul.actions.small li{padding:0 1em 0 0}ul.actions.vertical li{display:block;padding:1em 0 0 0}ul.actions.vertical li:first-child{padding-top:0}ul.actions.vertical li>*{margin-bottom:0}ul.actions.vertical.small li:first-child{padding-top:0}ul.actions.fit{display:table;margin-left:-1em;padding:0;table-layout:fixed;width:calc(100% + 1em)}ul.actions.fit li{display:table-cell;padding:0 0 0 1em}ul.actions.fit li>*{margin-bottom:0}ul.actions.fit.small{margin-left:-1em;width:calc(100% + 1em)}ul.actions.fit.small li{padding:0 0 0 1em}ul.pagination{cursor:default;list-style:none;padding-left:0}ul.pagination li{display:inline-block;padding-left:0;vertical-align:middle}ul.pagination li>.page{-webkit-transition:background-color .2s ease-in-out,color .2s ease-in-out;transition:background-color .2s ease-in-out,color .2s ease-in-out;border-bottom:0;display:inline-block;font-size:0.8em;font-weight:600;height:1.5em;line-height:1.5em;margin:0 0.125em;min-width:1.5em;padding:0 0.5em;text-align:center}ul.pagination li>.page.active{background-color:#fff;color:#242943}ul.pagination li>.page.active:hover{background-color:#9bf1ff;color:#242943 !important}ul.pagination li>.page.active:active{background-color:#53e3fb}ul.pagination li:first-child{padding-right:0.75em}ul.pagination li:last-child{padding-left:0.75em}@media screen and (max-width: 480px){ul.pagination li:nth-child(n+2):nth-last-child(n+2){display:none}ul.pagination li:first-child{padding-right:0}}dl{margin:0 0 2em 0}dl dt{display:block;font-weight:600;margin:0 0 1em 0}dl dd{margin-left:2em}.table-wrapper{-webkit-overflow-scrolling:touch;overflow-x:auto}table{margin:0 0 2em 0;width:100%}table tbody tr{border:solid 1px rgba(212,212,255,0.1);border-left:0;border-right:0}table tbody tr:nth-child(2n+1){background-color:rgba(212,212,255,0.035)}table td{padding:0.75em 0.75em}table th{color:#fff;font-size:0.9em;font-weight:600;padding:0 0.75em 0.75em 0.75em;text-align:left}table thead{border-bottom:solid 2px rgba(212,212,255,0.1)}table tfoot{border-top:solid 2px rgba(212,212,255,0.1)}table.alt{border-collapse:separate}table.alt tbody tr td{border:solid 1px rgba(212,212,255,0.1);border-left-width:0;border-top-width:0}table.alt tbody tr td:first-child{border-left-width:1px}table.alt tbody tr:first-child td{border-top-width:1px}table.alt thead{border-bottom:0}table.alt tfoot{border-top:0}input[type=\"submit\"],input[type=\"reset\"],input[type=\"button\"],button,.button{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none;-webkit-transition:background-color .2s ease-in-out,box-shadow .2s ease-in-out,color .2s ease-in-out;-webkit-transition:background-color .2s ease-in-out,color .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;transition:background-color .2s ease-in-out,color .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;transition:background-color .2s ease-in-out,box-shadow .2s ease-in-out,color .2s ease-in-out;transition:background-color .2s ease-in-out,box-shadow .2s ease-in-out,color .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;background-color:transparent;border:0;border-radius:0;-webkit-box-shadow:inset 0 0 0 2px #fff;box-shadow:inset 0 0 0 2px #fff;color:#fff;cursor:pointer;display:inline-block;font-size:0.8em;font-weight:600;height:3.5em;letter-spacing:.25em;line-height:3.5em;padding:0 1.75em;text-align:center;text-decoration:none;text-transform:uppercase;white-space:nowrap}input[type=\"submit\"]:hover,input[type=\"submit\"]:active,input[type=\"reset\"]:hover,input[type=\"reset\"]:active,input[type=\"button\"]:hover,input[type=\"button\"]:active,button:hover,button:active,.button:hover,.button:active{-webkit-box-shadow:inset 0 0 0 2px #9bf1ff;box-shadow:inset 0 0 0 2px #9bf1ff;color:#9bf1ff}input[type=\"submit\"]:active,input[type=\"reset\"]:active,input[type=\"button\"]:active,button:active,.button:active{background-color:rgba(155,241,255,0.1);-webkit-box-shadow:inset 0 0 0 2px #53e3fb;box-shadow:inset 0 0 0 2px #53e3fb;color:#53e3fb}input[type=\"submit\"].icon:before,input[type=\"reset\"].icon:before,input[type=\"button\"].icon:before,button.icon:before,.button.icon:before{margin-right:0.5em}input[type=\"submit\"].fit,input[type=\"reset\"].fit,input[type=\"button\"].fit,button.fit,.button.fit{display:block;margin:0 0 1em 0;width:100%}input[type=\"submit\"].small,input[type=\"reset\"].small,input[type=\"button\"].small,button.small,.button.small{font-size:0.6em}input[type=\"submit\"].big,input[type=\"reset\"].big,input[type=\"button\"].big,button.big,.button.big{font-size:1.25em;height:3em;line-height:3em}input[type=\"submit\"].next,input[type=\"reset\"].next,input[type=\"button\"].next,button.next,.button.next{padding-right:4.5em;position:relative}input[type=\"submit\"].next:before,input[type=\"submit\"].next:after,input[type=\"reset\"].next:before,input[type=\"reset\"].next:after,input[type=\"button\"].next:before,input[type=\"button\"].next:after,button.next:before,button.next:after,.button.next:before,.button.next:after{-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;background-position:center right;background-repeat:no-repeat;background-size:36px 24px;content:'';display:block;height:100%;position:absolute;right:1.5em;top:0;vertical-align:middle;width:36px}input[type=\"submit\"].next:before,input[type=\"reset\"].next:before,input[type=\"button\"].next:before,button.next:before,.button.next:before{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='36px' height='24px' viewBox='0 0 36 24' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23fff%3B stroke-width: 2px%3B %7D%3C/style%3E%3Cline x1='0' y1='12' x2='34' y2='12' /%3E%3Cline x1='25' y1='4' x2='34' y2='12.5' /%3E%3Cline x1='25' y1='20' x2='34' y2='11.5' /%3E%3C/svg%3E\")}input[type=\"submit\"].next:after,input[type=\"reset\"].next:after,input[type=\"button\"].next:after,button.next:after,.button.next:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='36px' height='24px' viewBox='0 0 36 24' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %239bf1ff%3B stroke-width: 2px%3B %7D%3C/style%3E%3Cline x1='0' y1='12' x2='34' y2='12' /%3E%3Cline x1='25' y1='4' x2='34' y2='12.5' /%3E%3Cline x1='25' y1='20' x2='34' y2='11.5' /%3E%3C/svg%3E\");opacity:0;z-index:1}input[type=\"submit\"].next:hover:after,input[type=\"submit\"].next:active:after,input[type=\"reset\"].next:hover:after,input[type=\"reset\"].next:active:after,input[type=\"button\"].next:hover:after,input[type=\"button\"].next:active:after,button.next:hover:after,button.next:active:after,.button.next:hover:after,.button.next:active:after{opacity:1}@media screen and (max-width: 1280px){input[type=\"submit\"].next,input[type=\"reset\"].next,input[type=\"button\"].next,button.next,.button.next{padding-right:5em}}input[type=\"submit\"].special,input[type=\"reset\"].special,input[type=\"button\"].special,button.special,.button.special{background-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#242943}input[type=\"submit\"].special:hover,input[type=\"submit\"].special:active,input[type=\"reset\"].special:hover,input[type=\"reset\"].special:active,input[type=\"button\"].special:hover,input[type=\"button\"].special:active,button.special:hover,button.special:active,.button.special:hover,.button.special:active{background-color:#9bf1ff;color:#242943 !important}input[type=\"submit\"].special:active,input[type=\"reset\"].special:active,input[type=\"button\"].special:active,button.special:active,.button.special:active{background-color:#53e3fb}input[type=\"submit\"].disabled,input[type=\"submit\"]:disabled,input[type=\"reset\"].disabled,input[type=\"reset\"]:disabled,input[type=\"button\"].disabled,input[type=\"button\"]:disabled,button.disabled,button:disabled,.button.disabled,.button:disabled{-moz-pointer-events:none;-webkit-pointer-events:none;-ms-pointer-events:none;pointer-events:none;cursor:default;opacity:0.25}.tiles{display:-moz-flex;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;border-top:0 !important}.tiles+*{border-top:0 !important}.tiles article{-moz-align-items:center;-ms-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-moz-flex;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition:-webkit-transform 0.25s ease,opacity 0.25s ease,-webkit-filter 1s ease,-webkit-filter 1s ease;transition:transform 0.25s ease,opacity 0.25s ease,filter 1s ease,-webkit-filter 1s ease;padding:4em 4em 2em 4em ;background-position:center;background-repeat:no-repeat;background-size:cover;cursor:default;height:40vh;max-height:40em;min-height:23em;overflow:hidden;position:relative;width:40%}.tiles article .image{display:none}.tiles article header{position:relative;z-index:3}.tiles article h3{font-size:1.75em}.tiles article h3 a:hover{color:inherit !important}.tiles article .link.primary{border:0;height:100%;left:0;position:absolute;top:0;width:100%;z-index:4}.tiles article:before{-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease;bottom:0;content:'';display:block;height:100%;left:0;opacity:0.85;position:absolute;width:100%;z-index:2}.tiles article:after{background-color:rgba(36,41,67,0.25);content:'';display:block;height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.tiles article:hover:before{opacity:0}.tiles article.is-transitioning{-webkit-transform:scale(0.95);transform:scale(0.95);-moz-filter:blur(0.5em);-webkit-filter:blur(0.5em);-ms-filter:blur(0.5em);filter:blur(0.5em);opacity:0}.tiles article:nth-child(4n-1),.tiles article:nth-child(4n-2){width:60%}.tiles article:nth-child(6n-5):before{background-color:#6fc3df}.tiles article:nth-child(6n-4):before{background-color:#8d82c4}.tiles article:nth-child(6n-3):before{background-color:#ec8d81}.tiles article:nth-child(6n-2):before{background-color:#e7b788}.tiles article:nth-child(6n-1):before{background-color:#8ea9e8}.tiles article:nth-child(6n):before{background-color:#87c5a4}@media screen and (max-width: 1280px){.tiles article{padding:4em 3em 2em 3em ;height:30vh;max-height:30em;min-height:20em}}@media screen and (max-width: 980px){.tiles article{width:50% !important}}@media screen and (max-width: 736px){.tiles article{padding:3em 1.5em 1em 1.5em ;height:16em;max-height:none;min-height:0}.tiles article h3{font-size:1.5em}}@media screen and (max-width: 480px){.tiles{display:block}.tiles article{height:20em;width:100% !important}}.contact-method{margin:0 0 2em 0;padding-left:3.25em;position:relative}.contact-method .icon{left:0;position:absolute;top:0}.contact-method h3{margin:0 0 .5em 0}.spotlights{border-top:0 !important}.spotlights+*{border-top:0 !important}.spotlights>section{display:-moz-flex;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-moz-flex-direction:row;-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;background-color:#2e3450}.spotlights>section>.image{background-position:center center;background-size:cover;border-radius:0;display:block;position:relative;width:30%}.spotlights>section>.image img{border-radius:0;display:block;width:100%}.spotlights>section>.image:before{background:rgba(36,41,67,0.9);content:'';display:block;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}.spotlights>section>.content{display:-moz-flex;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-moz-flex-direction:column;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-moz-justify-content:center;-ms-justify-content:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-moz-align-items:center;-ms-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:2em 3em .1em 3em ;width:70%}.spotlights>section>.content>.inner{margin:0 auto;max-width:100%;width:65em}.spotlights>section:nth-child(2n){-moz-flex-direction:row-reverse;-ms-flex-direction:row-reverse;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:row-reverse;background-color:#333856}.spotlights>section:nth-child(2n)>.content{-moz-align-items:-moz-flex-end;-ms-align-items:-ms-flex-end;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}@media screen and (max-width: 1680px){.spotlights>section>.image{width:40%}.spotlights>section>.content{width:60%}}@media screen and (max-width: 1280px){.spotlights>section>.image{width:45%}.spotlights>section>.content{width:55%}}@media screen and (max-width: 980px){.spotlights>section{display:block}.spotlights>section>.image{width:100%}.spotlights>section>.content{padding:4em 3em 2em 3em ;width:100%}}@media screen and (max-width: 736px){.spotlights>section>.content{padding:3em 1.5em 1em 1.5em }}@-webkit-keyframes reveal-header{0%{top:-4em;opacity:0}100%{top:0;opacity:1}}@keyframes reveal-header{0%{top:-4em;opacity:0}100%{top:0;opacity:1}}#header{display:-moz-flex;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#2a2f4a;-webkit-box-shadow:0 0 0.25em 0 rgba(0,0,0,0.15);box-shadow:0 0 0.25em 0 rgba(0,0,0,0.15);cursor:default;font-weight:600;height:3.25em;left:0;letter-spacing:.25em;line-height:3.25em;margin:0;position:fixed;text-transform:uppercase;top:0;width:100%;z-index:10000}#header .logo{border:0;display:inline-block;font-size:0.8em;height:inherit;line-height:inherit;padding:0 1.5em}#header .logo strong{-webkit-transition:background-color .2s ease-in-out,color .2s ease-in-out;transition:background-color .2s ease-in-out,color .2s ease-in-out;background-color:#fff;color:#242943;display:inline-block;line-height:1.65em;margin-right:0.325em;padding:0 0.125em 0 .375em}#header .logo:hover strong{background-color:#9bf1ff}#header .logo:active strong{background-color:#53e3fb}#header nav{display:-moz-flex;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-moz-justify-content:-moz-flex-end;-ms-justify-content:-ms-flex-end;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-moz-flex-grow:1;-ms-flex-grow:1;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;height:inherit;line-height:inherit}#header nav a{border:0;display:block;font-size:0.8em;height:inherit;line-height:inherit;padding:0 0.75em;position:relative;vertical-align:middle}#header nav a:last-child{padding-right:1.5em}#header nav a.menu-link{padding-right:3.325em !important}#header nav a.menu-link:before,#header nav a.menu-link:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='32' viewBox='0 0 24 32' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 2px%3B stroke: %23fff%3B %7D%3C/style%3E%3Cline x1='0' y1='11' x2='24' y2='11' /%3E%3Cline x1='0' y1='21' x2='24' y2='21' /%3E%3Cline x1='0' y1='16' x2='24' y2='16' /%3E%3C/svg%3E\");background-position:center;background-repeat:no-repeat;background-size:24px 32px;content:'';display:block;height:100%;position:absolute;right:1.5em;top:0;vertical-align:middle;width:24px}#header nav a.menu-link:after{-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='32' viewBox='0 0 24 32' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 2px%3B stroke: %239bf1ff%3B %7D%3C/style%3E%3Cline x1='0' y1='11' x2='24' y2='11' /%3E%3Cline x1='0' y1='21' x2='24' y2='21' /%3E%3Cline x1='0' y1='16' x2='24' y2='16' /%3E%3C/svg%3E\");opacity:0;z-index:1}#header nav a.menu-link:hover:after,#header nav a.menu-link:active:after{opacity:1}#header nav a.menu-link:last-child{padding-right:3.875em !important}#header nav a.menu-link:last-child:before,#header nav a.menu-link:last-child:after{right:2em}#header.reveal{-webkit-animation:reveal-header 0.35s ease;animation:reveal-header 0.35s ease}#header.alt{-webkit-transition:opacity 2.5s ease;transition:opacity 2.5s ease;-webkit-transition-delay:0.75s;transition-delay:0.75s;-webkit-animation:none;animation:none;background-color:transparent;-webkit-box-shadow:none;box-shadow:none;position:absolute}#header.alt.style1 .logo strong{color:#6fc3df}#header.alt.style2 .logo strong{color:#8d82c4}#header.alt.style3 .logo strong{color:#ec8d81}#header.alt.style4 .logo strong{color:#e7b788}#header.alt.style5 .logo strong{color:#8ea9e8}#header.alt.style6 .logo strong{color:#87c5a4}.body.is-loading #header.alt{opacity:0}@media screen and (max-width: 1680px){#header nav a.menu-link{padding-right:3.75em !important}#header nav a.menu-link:last-child{padding-right:4.25em !important}}@media screen and (max-width: 1280px){#header nav a.menu-link{padding-right:4em !important}#header nav a.menu-link:last-child{padding-right:4.5em !important}}@media screen and (max-width: 736px){#header{height:2.75em;line-height:2.75em}#header .logo{padding:0 1em}#header nav a{padding:0 0.5em}#header nav a:last-child{padding-right:1em}#header nav a.menu-link{padding-right:3.25em !important}#header nav a.menu-link:before,#header nav a.menu-link:after{right:0.75em}#header nav a.menu-link:last-child{padding-right:4em !important}#header nav a.menu-link:last-child:before,#header nav a.menu-link:last-child:after{right:1.5em}}@media screen and (max-width: 480px){#header .logo span{display:none}#header nav a.menu-link{overflow:hidden;padding-right:0 !important;text-indent:5em;white-space:nowrap;width:5em}#header nav a.menu-link:before,#header nav a.menu-link:after{right:0;width:inherit}#header nav a.menu-link:last-child:before,#header nav a.menu-link:last-child:after{width:4em;right:0}}#banner{-moz-align-items:center;-ms-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-image:url(\"/static/images/banner.jpg\");display:-moz-flex;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;padding:6em 0 2em 0 ;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;border-bottom:0 !important;cursor:default;height:60vh;margin-bottom:-3.25em;max-height:32em;min-height:22em;position:relative;top:-3.25em}#banner:after{-webkit-transition:opacity 2.5s ease;transition:opacity 2.5s ease;-webkit-transition-delay:0.75s;transition-delay:0.75s;-moz-pointer-events:none;-webkit-pointer-events:none;-ms-pointer-events:none;pointer-events:none;background-color:#242943;content:'';display:block;height:100%;left:0;opacity:0.85;position:absolute;top:0;width:100%;z-index:1}#banner h1{font-size:3.25em}#banner>.inner{-webkit-transition:opacity 1.5s ease,-webkit-transform 0.5s ease-out,-webkit-filter 0.5s ease,-webkit-filter 0.5s ease;transition:opacity 1.5s ease,transform 0.5s ease-out,filter 0.5s ease,-webkit-filter 0.5s ease;padding:0 !important;position:relative;z-index:2}#banner>.inner .image{display:none}#banner>.inner header{width:auto}#banner>.inner header>:first-child{width:auto}#banner>.inner header>:first-child:after{max-width:100%}#banner>.inner .content{display:-moz-flex;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-moz-align-items:center;-ms-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 0 2em 0}#banner>.inner .content>*{margin-left:1.5em;margin-bottom:0}#banner>.inner .content>:first-child{margin-left:0}#banner>.inner .content p{font-size:0.7em;font-weight:600;letter-spacing:.25em;text-transform:uppercase}#banner.major{height:75vh;min-height:30em;max-height:50em}#banner.major.alt{opacity:0.75}#banner.style1:after{background-color:#6fc3df}#banner.style2:after{background-color:#8d82c4}#banner.style3:after{background-color:#ec8d81}#banner.style4:after{background-color:#e7b788}#banner.style5:after{background-color:#8ea9e8}#banner.style6:after{background-color:#87c5a4}.body.is-loading #banner:after{opacity:1.0}.body.is-loading #banner>.inner{-moz-filter:blur(0.125em);-webkit-filter:blur(0.125em);-ms-filter:blur(0.125em);filter:blur(0.125em);-webkit-transform:translateX(-0.5em);transform:translateX(-0.5em);opacity:0}@media screen and (max-width: 1280px){#banner{background-attachment:scroll}}@media screen and (max-width: 736px){#banner{padding:5em 0 1em 0 ;height:auto;margin-bottom:-2.75em;max-height:none;min-height:0;top:-2.75em}#banner h1{font-size:2em}#banner>.inner .content{display:block}#banner>.inner .content>*{margin-left:0;margin-bottom:2em}#banner.major{height:auto;min-height:0;max-height:none}}@media screen and (max-width: 480px){#banner{padding:6em 0 2em 0 }#banner>.inner .content p br{display:none}#banner.major{padding:8em 0 4em 0 }}#main{background-color:#2a2f4a}#main>*{border-top:solid 1px rgba(212,212,255,0.1)}#main>*:first-child{border-top:0}#main>*>.inner{padding:4em 0 2em 0 ;margin:0 auto;max-width:65em;width:calc(100% - 6em)}@media screen and (max-width: 736px){#main>*>.inner{padding:3em 0 1em 0 ;width:calc(100% - 3em)}}#main.alt{background-color:transparent;border-bottom:solid 1px rgba(212,212,255,0.1)}#contact{border-bottom:solid 1px rgba(212,212,255,0.1);overflow-x:hidden}#contact>.inner{display:-moz-flex;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 !important}#contact>.inner>:nth-child(2n-1){padding:4em 3em 2em 0 ;border-right:solid 1px rgba(212,212,255,0.1);width:60%}#contact>.inner>:nth-child(2n){padding-left:3em;width:40%}#contact>.inner>.split{padding:0}#contact>.inner>.split>*{padding:3em 0 1em 3em ;position:relative}#contact>.inner>.split>*:before{border-top:solid 1px rgba(212,212,255,0.1);content:'';display:block;margin-left:-3em;position:absolute;top:0;width:calc(100vw + 3em)}#contact>.inner>.split>:first-child:before{display:none}@media screen and (max-width: 980px){#contact>.inner{display:block}#contact>.inner>:nth-child(2n-1){padding:4em 0 2em 0 ;border-right:0;width:100%}#contact>.inner>:nth-child(2n){padding-left:0;width:100%}#contact>.inner>.split>*{padding:3em 0 1em 0 }#contact>.inner>.split>:first-child:before{display:block}}@media screen and (max-width: 736px){#contact>.inner>:nth-child(2n-1){padding:3em 0 1em 0 }}#footer .copyright{font-size:0.8em;list-style:none;padding-left:0}#footer .copyright li{border-left:solid 1px rgba(212,212,255,0.1);color:rgba(244,244,255,0.2);display:inline-block;line-height:1;margin-left:1em;padding-left:1em}#footer .copyright li:first-child{border-left:0;margin-left:0;padding-left:0}@media screen and (max-width: 480px){#footer .copyright li{display:block;border-left:0;margin-left:0;padding-left:0;line-height:inherit}}#wrapper{-webkit-transition:-webkit-filter .35s ease,-webkit-filter .35s ease,opacity 0.375s ease-out;transition:filter .35s ease,-webkit-filter .35s ease,opacity 0.375s ease-out;padding-top:3.25em}#wrapper.is-transitioning{opacity:0}#wrapper>*>.inner{padding:4em 0 2em 0 ;margin:0 auto;max-width:65em;width:calc(100% - 6em)}@media screen and (max-width: 736px){#wrapper>*>.inner{padding:3em 0 1em 0 ;width:calc(100% - 3em)}}#wrapper>*>*>.inner{padding:4em 0 2em 0 ;margin:0 auto;max-width:65em;width:calc(100% - 6em)}@media screen and (max-width: 736px){#wrapper>*>*>.inner{padding:3em 0 1em 0 ;width:calc(100% - 3em)}}@media screen and (max-width: 736px){#wrapper{padding-top:2.75em}}#menu{-webkit-transition:-webkit-transform .35s ease,opacity .35s ease,visibility .35s;-webkit-transition:opacity .35s ease,visibility .35s,-webkit-transform .35s ease;transition:opacity .35s ease,visibility .35s,-webkit-transform .35s ease;transition:transform .35s ease,opacity .35s ease,visibility .35s;transition:transform .35s ease,opacity .35s ease,visibility .35s,-webkit-transform .35s ease;-moz-align-items:center;-ms-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-moz-flex;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-moz-justify-content:center;-ms-justify-content:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-moz-pointer-events:none;-webkit-pointer-events:none;-ms-pointer-events:none;pointer-events:none;background:rgba(36,41,67,0.9);-webkit-box-shadow:none;box-shadow:none;height:100%;left:0;opacity:0;overflow:hidden;padding:3em 2em;position:fixed;top:0;visibility:hidden;width:100%;z-index:10002}#menu .inner{-webkit-transition:-webkit-transform .35s ease-out,opacity .35s ease,visibility .35s;-webkit-transition:opacity .35s ease,visibility .35s,-webkit-transform .35s ease-out;transition:opacity .35s ease,visibility .35s,-webkit-transform .35s ease-out;transition:transform .35s ease-out,opacity .35s ease,visibility .35s;transition:transform .35s ease-out,opacity .35s ease,visibility .35s,-webkit-transform .35s ease-out;-webkit-transform:rotateX(20deg);transform:rotateX(20deg);-webkit-overflow-scrolling:touch;max-width:100%;max-height:100vh;opacity:0;overflow:auto;text-align:center;visibility:hidden;width:18em}#menu .inner>:first-child{margin-top:2em}#menu .inner>:last-child{margin-bottom:3em}#menu ul{margin:0 0 1em 0}#menu ul.links{list-style:none;padding:0}#menu ul.links>li{padding:0}#menu ul.links>li>a:not(.button){border:0;border-top:solid 1px rgba(212,212,255,0.1);display:block;font-size:0.8em;font-weight:600;letter-spacing:.25em;line-height:4em;text-decoration:none;text-transform:uppercase}#menu ul.links>li>a:not(.button)>span{display:block}#menu ul.links>li>.button{display:block;margin:0.5em 0 0 0}#menu ul.links>li:first-child>a:not(.button){border-top:0 !important}#menu .close{-webkit-transition:color .2s ease-in-out;transition:color .2s ease-in-out;-webkit-tap-highlight-color:rgba(0,0,0,0);border:0;cursor:pointer;display:block;height:4em;line-height:4em;overflow:hidden;padding-right:1.25em;position:absolute;right:0;text-align:right;text-indent:8em;top:0;vertical-align:middle;white-space:nowrap;width:8em}#menu .close:before,#menu .close:after{-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;background-position:center;background-repeat:no-repeat;content:'';display:block;height:4em;position:absolute;right:0;top:0;width:4em}#menu .close:before{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23fff%3B stroke-width: 2%3B %7D%3C/style%3E%3Cline x1='0' y1='0' x2='20' y2='20' /%3E%3Cline x1='20' y1='0' x2='0' y2='20' /%3E%3C/svg%3E\")}#menu .close:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %239bf1ff%3B stroke-width: 2%3B %7D%3C/style%3E%3Cline x1='0' y1='0' x2='20' y2='20' /%3E%3Cline x1='20' y1='0' x2='0' y2='20' /%3E%3C/svg%3E\");opacity:0}#menu .close:hover:after,#menu .close:active:after{opacity:1}body.is-ie #menu{background:rgba(42,47,74,0.975)}.body.is-menu-visible #wrapper{-moz-filter:blur(0.5em);-webkit-filter:blur(0.5em);-ms-filter:blur(0.5em);filter:blur(0.5em)}.body.is-menu-visible #menu{-moz-pointer-events:auto;-webkit-pointer-events:auto;-ms-pointer-events:auto;pointer-events:auto;opacity:1;visibility:visible}.body.is-menu-visible #menu .inner{-webkit-transform:none;transform:none;opacity:1;visibility:visible}\n";

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map