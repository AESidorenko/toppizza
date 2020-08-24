(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~cart"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/cart-storage.js":
/*!***********************************!*\
  !*** ./assets/js/cart-storage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.map */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);


















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CartStorage = /*#__PURE__*/function () {
  function CartStorage() {
    _classCallCheck(this, CartStorage);

    this.cart = new Map();
    this.save = this.save.bind(this);
    this.exists = this.exists.bind(this);
    this.touch = this.touch.bind(this);
    this.reset = this.reset.bind(this);
    this.updateIdempotencyKey = this.updateIdempotencyKey.bind(this);
  }

  _createClass(CartStorage, [{
    key: "load",
    value: function load() {
      var cartJson = localStorage.getItem('cartItems');
      this.cart = cartJson === null ? new Map() : new Map(JSON.parse(cartJson));
    }
  }, {
    key: "save",
    value: function save() {
      localStorage.setItem('cartItems', JSON.stringify(_toConsumableArray(this.cart)));
      localStorage.setItem('cartUpdated', Date.now().toString());
    }
  }, {
    key: "exists",
    value: function exists() {
      return localStorage.getItem('cartItems') !== null;
    }
  }, {
    key: "touch",
    value: function touch() {
      if (!this.exists()) {
        this.reset();
      } else {
        localStorage.setItem('cartUpdated', Date.now().toString());
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.cart.clear();
      this.save();
    }
  }, {
    key: "updateIdempotencyKey",
    value: function updateIdempotencyKey() {
      var key = this.generateIdempotencyKey();
      localStorage.setItem('idempotencyKey', key);
      return key;
    }
  }, {
    key: "generateIdempotencyKey",
    value: function generateIdempotencyKey() {
      var key = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          charactersLength = characters.length;

      for (var i = 0; i < 16; i++) {
        key += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return key;
    }
  }, {
    key: "getIdempotencyKey",
    value: function getIdempotencyKey() {
      var _localStorage$getItem;

      return (_localStorage$getItem = localStorage.getItem('idempotencyKey')) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : this.updateIdempotencyKey();
    }
  }, {
    key: "setCurrency",
    value: function setCurrency(code) {
      localStorage.setItem('currencyCode', code);
    }
  }, {
    key: "getCurrency",
    value: function getCurrency() {
      var _localStorage$getItem2;

      return (_localStorage$getItem2 = localStorage.getItem('currencyCode')) !== null && _localStorage$getItem2 !== void 0 ? _localStorage$getItem2 : 'EUR';
    }
  }]);

  return CartStorage;
}();

/* harmony default export */ __webpack_exports__["default"] = (CartStorage);

/***/ }),

/***/ "./assets/js/components/Currency.js":
/*!******************************************!*\
  !*** ./assets/js/components/Currency.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Currency = /*#__PURE__*/function (_Component) {
  _inherits(Currency, _Component);

  var _super = _createSuper(Currency);

  function Currency(props) {
    var _this;

    _classCallCheck(this, Currency);

    _this = _super.call(this, props);
    _this.state = {
      value: props.value
    };
    _this.setCurrency = _this.setCurrency.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Currency, [{
    key: "setCurrency",
    value: function setCurrency(currencyCode) {
      this.setState({
        value: currencyCode
      });
      this.props.onChange(currencyCode);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("a", {
        type: "link",
        onClick: function onClick() {
          return _this2.setCurrency('EUR');
        },
        className: 'currency ' + (this.state.value === 'EUR' ? 'currency-active' : '')
      }, "EUR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("a", {
        type: "link",
        onClick: function onClick() {
          return _this2.setCurrency('USD');
        },
        className: 'currency ' + (this.state.value === 'USD' ? 'currency-active' : '')
      }, "USD"));
    }
  }]);

  return Currency;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Currency);

/***/ }),

/***/ "./assets/js/config.js":
/*!*****************************!*\
  !*** ./assets/js/config.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Config = new ( /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);

    this.currencyRate = 1.18; // 1 USD for 1 EUR

    this.currencyStringRule = this.currencyStringRule.bind(this);
  }

  _createClass(_class, [{
    key: "currencyStringRule",
    value: function currencyStringRule(euro, code) {
      var prefix = code === 'EUR' ? "\u20AC" : '$';
      var rate = code === 'EUR' ? 1 : this.currencyRate; // todo: make it configurable

      return prefix + (rate * parseFloat(euro)).toFixed(2).toString();
    }
  }]);

  return _class;
}())();
/* harmony default export */ __webpack_exports__["default"] = (Config);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jYXJ0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ3VycmVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJDYXJ0U3RvcmFnZSIsImNhcnQiLCJNYXAiLCJzYXZlIiwiYmluZCIsImV4aXN0cyIsInRvdWNoIiwicmVzZXQiLCJ1cGRhdGVJZGVtcG90ZW5jeUtleSIsImNhcnRKc29uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJjbGVhciIsImtleSIsImdlbmVyYXRlSWRlbXBvdGVuY3lLZXkiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0xlbmd0aCIsImxlbmd0aCIsImkiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb2RlIiwiQ3VycmVuY3kiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJzZXRDdXJyZW5jeSIsImN1cnJlbmN5Q29kZSIsInNldFN0YXRlIiwib25DaGFuZ2UiLCJDb21wb25lbnQiLCJDb25maWciLCJjdXJyZW5jeVJhdGUiLCJjdXJyZW5jeVN0cmluZ1J1bGUiLCJldXJvIiwicHJlZml4IiwicmF0ZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBTUEsVztBQUVGLHlCQUNBO0FBQUE7O0FBQ0ksU0FBS0MsSUFBTCxHQUFZLElBQUlDLEdBQUosRUFBWjtBQUVBLFNBQUtDLElBQUwsR0FBNEIsS0FBS0EsSUFBTCxDQUFVQyxJQUFWLENBQWUsSUFBZixDQUE1QjtBQUNBLFNBQUtDLE1BQUwsR0FBNEIsS0FBS0EsTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBQTVCO0FBQ0EsU0FBS0UsS0FBTCxHQUE0QixLQUFLQSxLQUFMLENBQVdGLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBNUI7QUFDQSxTQUFLRyxLQUFMLEdBQTRCLEtBQUtBLEtBQUwsQ0FBV0gsSUFBWCxDQUFnQixJQUFoQixDQUE1QjtBQUNBLFNBQUtJLG9CQUFMLEdBQTRCLEtBQUtBLG9CQUFMLENBQTBCSixJQUExQixDQUErQixJQUEvQixDQUE1QjtBQUNIOzs7OzJCQUdEO0FBQ0ksVUFBTUssUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBakI7QUFDQSxXQUFLVixJQUFMLEdBQWlCUSxRQUFRLEtBQUssSUFBYixHQUFvQixJQUFJUCxHQUFKLEVBQXBCLEdBQWdDLElBQUlBLEdBQUosQ0FBUVUsSUFBSSxDQUFDQyxLQUFMLENBQVdKLFFBQVgsQ0FBUixDQUFqRDtBQUNIOzs7MkJBR0Q7QUFDSUMsa0JBQVksQ0FBQ0ksT0FBYixDQUFxQixXQUFyQixFQUFrQ0YsSUFBSSxDQUFDRyxTQUFMLG9CQUFtQixLQUFLZCxJQUF4QixFQUFsQztBQUNBUyxrQkFBWSxDQUFDSSxPQUFiLENBQXFCLGFBQXJCLEVBQW9DRSxJQUFJLENBQUNDLEdBQUwsR0FBV0MsUUFBWCxFQUFwQztBQUNIOzs7NkJBR0Q7QUFDSSxhQUFPUixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsTUFBc0MsSUFBN0M7QUFDSDs7OzRCQUdEO0FBQ0ksVUFBSSxDQUFDLEtBQUtOLE1BQUwsRUFBTCxFQUFvQjtBQUNoQixhQUFLRSxLQUFMO0FBQ0gsT0FGRCxNQUVPO0FBQ0hHLG9CQUFZLENBQUNJLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0NFLElBQUksQ0FBQ0MsR0FBTCxHQUFXQyxRQUFYLEVBQXBDO0FBQ0g7QUFDSjs7OzRCQUdEO0FBQ0ksV0FBS2pCLElBQUwsQ0FBVWtCLEtBQVY7QUFDQSxXQUFLaEIsSUFBTDtBQUNIOzs7MkNBR0Q7QUFDSSxVQUFNaUIsR0FBRyxHQUFHLEtBQUtDLHNCQUFMLEVBQVo7QUFFQVgsa0JBQVksQ0FBQ0ksT0FBYixDQUFxQixnQkFBckIsRUFBdUNNLEdBQXZDO0FBRUEsYUFBT0EsR0FBUDtBQUNIOzs7NkNBR0Q7QUFDSSxVQUFJQSxHQUFHLEdBQWtCLEVBQXpCO0FBQ0EsVUFBTUUsVUFBVSxHQUFTLGdFQUF6QjtBQUFBLFVBQ01DLGdCQUFnQixHQUFHRCxVQUFVLENBQUNFLE1BRHBDOztBQUdBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QkwsV0FBRyxJQUFJRSxVQUFVLENBQUNJLE1BQVgsQ0FBa0JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JOLGdCQUEzQixDQUFsQixDQUFQO0FBQ0g7O0FBRUQsYUFBT0gsR0FBUDtBQUNIOzs7d0NBR0Q7QUFBQTs7QUFDSSxzQ0FBT1YsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGdCQUFyQixDQUFQLHlFQUFpRCxLQUFLSCxvQkFBTCxFQUFqRDtBQUNIOzs7Z0NBRVdzQixJLEVBQ1o7QUFDSXBCLGtCQUFZLENBQUNJLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUNnQixJQUFyQztBQUNIOzs7a0NBR0Q7QUFBQTs7QUFDSSx1Q0FBT3BCLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixjQUFyQixDQUFQLDJFQUErQyxLQUEvQztBQUNIOzs7Ozs7QUFHVVgsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7O0lBRU0rQixROzs7OztBQUVGLG9CQUFZQyxLQUFaLEVBQ0E7QUFBQTs7QUFBQTs7QUFDSSw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxXQUFLLEVBQUVGLEtBQUssQ0FBQ0U7QUFESixLQUFiO0FBSUEsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCL0IsSUFBakIsK0JBQW5CO0FBUEo7QUFRQzs7OztnQ0FFV2dDLFksRUFDWjtBQUNJLFdBQUtDLFFBQUwsQ0FBYztBQUFDSCxhQUFLLEVBQUVFO0FBQVIsT0FBZDtBQUNBLFdBQUtKLEtBQUwsQ0FBV00sUUFBWCxDQUFvQkYsWUFBcEI7QUFDSDs7OzZCQUdEO0FBQUE7O0FBQ0ksMEJBQ0ksc0ZBQ0k7QUFBRyxZQUFJLEVBQUMsTUFBUjtBQUFlLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ0QsV0FBTCxDQUFpQixLQUFqQixDQUFOO0FBQUEsU0FBeEI7QUFBdUQsaUJBQVMsRUFBRSxlQUFlLEtBQUtGLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixLQUFyQixHQUE2QixpQkFBN0IsR0FBaUQsRUFBaEU7QUFBbEUsZUFESixlQUVJO0FBQUcsWUFBSSxFQUFDLE1BQVI7QUFBZSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNDLFdBQUwsQ0FBaUIsS0FBakIsQ0FBTjtBQUFBLFNBQXhCO0FBQXVELGlCQUFTLEVBQUUsZUFBZSxLQUFLRixLQUFMLENBQVdDLEtBQVgsS0FBcUIsS0FBckIsR0FBNkIsaUJBQTdCLEdBQWlELEVBQWhFO0FBQWxFLGVBRkosQ0FESjtBQU1IOzs7O0VBM0JrQkssZ0Q7O0FBK0JSUix1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQSxJQUFNUyxNQUFNLEdBQUc7QUFFWCxvQkFDQTtBQUFBOztBQUNJLFNBQUtDLFlBQUwsR0FBb0IsSUFBcEIsQ0FESixDQUM4Qjs7QUFFMUIsU0FBS0Msa0JBQUwsR0FBMEIsS0FBS0Esa0JBQUwsQ0FBd0J0QyxJQUF4QixDQUE2QixJQUE3QixDQUExQjtBQUNIOztBQVBVO0FBQUE7QUFBQSx1Q0FTUXVDLElBVFIsRUFTY2IsSUFUZCxFQVVYO0FBQ0ksVUFBTWMsTUFBTSxHQUFHZCxJQUFJLEtBQUssS0FBVCxHQUFpQixRQUFqQixHQUE0QixHQUEzQztBQUNBLFVBQU1lLElBQUksR0FBS2YsSUFBSSxLQUFLLEtBQVQsR0FBaUIsQ0FBakIsR0FBcUIsS0FBS1csWUFBekMsQ0FGSixDQUUyRDs7QUFFdkQsYUFBT0csTUFBTSxHQUFHLENBQUNDLElBQUksR0FBR0MsVUFBVSxDQUFDSCxJQUFELENBQWxCLEVBQTBCSSxPQUExQixDQUFrQyxDQUFsQyxFQUFxQzdCLFFBQXJDLEVBQWhCO0FBQ0g7QUFmVTs7QUFBQTtBQUFBLE1BQWY7QUFrQmVzQixxRUFBZixFIiwiZmlsZSI6ImFwcH5jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY2xhc3MgQ2FydFN0b3JhZ2VcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLmNhcnQgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zYXZlICAgICAgICAgICAgICAgICA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmV4aXN0cyAgICAgICAgICAgICAgID0gdGhpcy5leGlzdHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b3VjaCAgICAgICAgICAgICAgICA9IHRoaXMudG91Y2guYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXNldCAgICAgICAgICAgICAgICA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVJZGVtcG90ZW5jeUtleSA9IHRoaXMudXBkYXRlSWRlbXBvdGVuY3lLZXkuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBsb2FkKClcbiAgICB7XG4gICAgICAgIGNvbnN0IGNhcnRKc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRJdGVtcycpO1xuICAgICAgICB0aGlzLmNhcnQgICAgICA9IGNhcnRKc29uID09PSBudWxsID8gbmV3IE1hcCgpIDogbmV3IE1hcChKU09OLnBhcnNlKGNhcnRKc29uKSk7XG4gICAgfVxuXG4gICAgc2F2ZSgpXG4gICAge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydEl0ZW1zJywgSlNPTi5zdHJpbmdpZnkoWy4uLnRoaXMuY2FydF0pKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRVcGRhdGVkJywgRGF0ZS5ub3coKS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICBleGlzdHMoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0SXRlbXMnKSAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICB0b3VjaCgpXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0VXBkYXRlZCcsIERhdGUubm93KCkudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldCgpXG4gICAge1xuICAgICAgICB0aGlzLmNhcnQuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlSWRlbXBvdGVuY3lLZXkoKVxuICAgIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5nZW5lcmF0ZUlkZW1wb3RlbmN5S2V5KCk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkZW1wb3RlbmN5S2V5Jywga2V5KTtcblxuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuICAgIGdlbmVyYXRlSWRlbXBvdGVuY3lLZXkoKVxuICAgIHtcbiAgICAgICAgbGV0IGtleSAgICAgICAgICAgICAgICA9ICcnO1xuICAgICAgICBjb25zdCBjaGFyYWN0ZXJzICAgICAgID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JyxcbiAgICAgICAgICAgICAgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICAgICAga2V5ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuXG4gICAgZ2V0SWRlbXBvdGVuY3lLZXkoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZGVtcG90ZW5jeUtleScpID8/IHRoaXMudXBkYXRlSWRlbXBvdGVuY3lLZXkoKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW5jeShjb2RlKVxuICAgIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbmN5Q29kZScsIGNvZGUpO1xuICAgIH1cblxuICAgIGdldEN1cnJlbmN5KClcbiAgICB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVuY3lDb2RlJykgPz8gJ0VVUic7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0U3RvcmFnZTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHtmYVRyYXNofSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5jbGFzcyBDdXJyZW5jeSBleHRlbmRzIENvbXBvbmVudFxue1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKVxuICAgIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRDdXJyZW5jeSA9IHRoaXMuc2V0Q3VycmVuY3kuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW5jeShjdXJyZW5jeUNvZGUpXG4gICAge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogY3VycmVuY3lDb2RlfSk7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoY3VycmVuY3lDb2RlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGEgdHlwZT1cImxpbmtcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldEN1cnJlbmN5KCdFVVInKX0gY2xhc3NOYW1lPXsnY3VycmVuY3kgJyArICh0aGlzLnN0YXRlLnZhbHVlID09PSAnRVVSJyA/ICdjdXJyZW5jeS1hY3RpdmUnIDogJycpfT5FVVI8L2E+XG4gICAgICAgICAgICAgICAgPGEgdHlwZT1cImxpbmtcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldEN1cnJlbmN5KCdVU0QnKX0gY2xhc3NOYW1lPXsnY3VycmVuY3kgJyArICh0aGlzLnN0YXRlLnZhbHVlID09PSAnVVNEJyA/ICdjdXJyZW5jeS1hY3RpdmUnIDogJycpfT5VU0Q8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVuY3k7IiwiY29uc3QgQ29uZmlnID0gbmV3IGNsYXNzXG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5jdXJyZW5jeVJhdGUgPSAxLjE4OyAvLyAxIFVTRCBmb3IgMSBFVVJcblxuICAgICAgICB0aGlzLmN1cnJlbmN5U3RyaW5nUnVsZSA9IHRoaXMuY3VycmVuY3lTdHJpbmdSdWxlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY3VycmVuY3lTdHJpbmdSdWxlKGV1cm8sIGNvZGUpXG4gICAge1xuICAgICAgICBjb25zdCBwcmVmaXggPSBjb2RlID09PSAnRVVSJyA/ICdcXHUyMEFDJyA6ICckJztcbiAgICAgICAgY29uc3QgcmF0ZSAgID0gY29kZSA9PT0gJ0VVUicgPyAxIDogdGhpcy5jdXJyZW5jeVJhdGU7IC8vIHRvZG86IG1ha2UgaXQgY29uZmlndXJhYmxlXG5cbiAgICAgICAgcmV0dXJuIHByZWZpeCArIChyYXRlICogcGFyc2VGbG9hdChldXJvKSkudG9GaXhlZCgyKS50b1N0cmluZygpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZzsiXSwic291cmNlUm9vdCI6IiJ9