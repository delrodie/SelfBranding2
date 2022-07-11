(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");




/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.scss in this case)
 // start the Stimulus application


$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});
document.addEventListener("DOMContentLoaded", function () {
  var topBtn = document.getElementById('btnToTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top'); // add padding top to show content behind navbar

      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
      document.getElementById('navbar_top').classList.remove('bg-menu');
      document.getElementById('navbar_top').classList.add('bgmenu-scrol');
      topBtn.style.display = "block";
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top'); // remove padding top from body

      document.body.style.paddingTop = '0';
      document.getElementById('navbar_top').classList.add('bg-menu');
      document.getElementById('navbar_top').classList.remove('bgmenu-scrol');
      topBtn.style.display = "none";
    }
  });

  if (window.innerWidth > 992) {
    document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {
      everyitem.addEventListener('mouseover', function (e) {
        var el_link = this.querySelector('a[data-bs-toggle]');

        if (el_link != null) {
          var nextEl = el_link.nextElementSibling;
          el_link.classList.add('show');
          nextEl.classList.add('show');
        }
      });
      everyitem.addEventListener('mouseleave', function (e) {
        var el_link = this.querySelector('a[data-bs-toggle]');

        if (el_link != null) {
          var nextEl = el_link.nextElementSibling;
          el_link.classList.remove('show');
          nextEl.classList.remove('show');
        }
      });
    });
  }
});
$(document).ready(function () {
  $("#btnToTop").on('click', function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
$(document).ready(function () {
  if (window.matchMedia("(max-width: 425px)").matches) {
    document.getElementById('inputGroup').classList.add('input-group-sm');
  } else {
    /* the view port is less than 400 pixels wide */
  }
});
AOS.init();
var typed = new Typed(".services", {
  strings: ["Accompagnement entrepreneurial...", "Developpement de la jeunesse...", "Digital management...", "Suivi fiscal et comptable..."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: false,
  cursorChar: '|',
  showCursor: true,
  autoInsertCss: true
});

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-c235e6"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBRkQsTUFFTztJQUNIO0VBQ0g7QUFFSixDQVBEO0FBUUF1QixHQUFHLENBQUNDLElBQUo7QUFFQSxJQUFJQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVLFdBQVYsRUFBc0I7RUFDOUJDLE9BQU8sRUFBRyxDQUNOLG1DQURNLEVBRU4saUNBRk0sRUFHTix1QkFITSxFQUlOLDhCQUpNLENBRG9CO0VBTzlCQyxTQUFTLEVBQUUsR0FQbUI7RUFROUJDLFNBQVMsRUFBRSxHQVJtQjtFQVM5QkMsSUFBSSxFQUFFLEtBVHdCO0VBVTlCQyxVQUFVLEVBQUUsR0FWa0I7RUFXOUJDLFVBQVUsRUFBRSxJQVhrQjtFQVk5QkMsYUFBYSxFQUFFO0FBWmUsQ0FBdEIsQ0FBWjs7Ozs7Ozs7Ozs7Ozs7OztDQ3RGQTs7QUFDTyxJQUFNRSxHQUFHLEdBQUdELDBFQUFnQixDQUFDRSx5SUFBRCxDQUE1QixFQU1QO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLnNjc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xuICAgIGxldCB0b3BCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuVG9Ub3AnKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDUwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyX3RvcCcpLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkLXRvcCcpO1xuICAgICAgICAgICAgLy8gYWRkIHBhZGRpbmcgdG9wIHRvIHNob3cgY29udGVudCBiZWhpbmQgbmF2YmFyXG4gICAgICAgICAgICBuYXZiYXJfaGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IG5hdmJhcl9oZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcl90b3AnKS5jbGFzc0xpc3QucmVtb3ZlKCdiZy1tZW51Jyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyX3RvcCcpLmNsYXNzTGlzdC5hZGQoJ2JnbWVudS1zY3JvbCcpO1xuICAgICAgICAgICAgdG9wQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyX3RvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkLXRvcCcpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHBhZGRpbmcgdG9wIGZyb20gYm9keVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nVG9wID0gJzAnO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcl90b3AnKS5jbGFzc0xpc3QuYWRkKCdiZy1tZW51Jyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyX3RvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2JnbWVudS1zY3JvbCcpO1xuICAgICAgICAgICAgdG9wQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkyKSB7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhciAubmF2LWl0ZW0nKS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZXJ5aXRlbSl7XG5cbiAgICAgICAgICAgIGV2ZXJ5aXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbihlKXtcblxuICAgICAgICAgICAgICAgIGxldCBlbF9saW5rID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdhW2RhdGEtYnMtdG9nZ2xlXScpO1xuXG4gICAgICAgICAgICAgICAgaWYoZWxfbGluayAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRFbCA9IGVsX2xpbmsubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBlbF9saW5rLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlcnlpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBsZXQgZWxfbGluayA9IHRoaXMucXVlcnlTZWxlY3RvcignYVtkYXRhLWJzLXRvZ2dsZV0nKTtcblxuICAgICAgICAgICAgICAgIGlmKGVsX2xpbmsgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0RWwgPSBlbF9saW5rLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgZWxfbGluay5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIG5leHRFbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgfVxufSk7XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoXCIjYnRuVG9Ub3BcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gdG9wRnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA0MjVweClcIikubWF0Y2hlcykge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRHcm91cCcpLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwLXNtJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLyogdGhlIHZpZXcgcG9ydCBpcyBsZXNzIHRoYW4gNDAwIHBpeGVscyB3aWRlICovXG4gICAgfVxuXG59KVxuQU9TLmluaXQoKTtcblxudmFyIHR5cGVkID0gbmV3IFR5cGVkKFwiLnNlcnZpY2VzXCIse1xuICAgIHN0cmluZ3MgOiBbXG4gICAgICAgIFwiQWNjb21wYWduZW1lbnQgZW50cmVwcmVuZXVyaWFsLi4uXCIsXG4gICAgICAgIFwiRGV2ZWxvcHBlbWVudCBkZSBsYSBqZXVuZXNzZS4uLlwiLFxuICAgICAgICBcIkRpZ2l0YWwgbWFuYWdlbWVudC4uLlwiLFxuICAgICAgICBcIlN1aXZpIGZpc2NhbCBldCBjb21wdGFibGUuLi5cIlxuICAgIF0sXG4gICAgdHlwZVNwZWVkOiAxMDAsXG4gICAgYmFja1NwZWVkOiAxMDAsXG4gICAgbG9vcDogZmFsc2UsXG4gICAgY3Vyc29yQ2hhcjogJ3wnLFxuICAgIHNob3dDdXJzb3I6IHRydWUsXG4gICAgYXV0b0luc2VydENzczogdHJ1ZSxcbn0pXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJwb3BvdmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvcEJ0biIsImdldEVsZW1lbnRCeUlkIiwid2luZG93Iiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImFkZCIsIm5hdmJhcl9oZWlnaHQiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0SGVpZ2h0IiwiYm9keSIsInN0eWxlIiwicGFkZGluZ1RvcCIsInJlbW92ZSIsImRpc3BsYXkiLCJpbm5lcldpZHRoIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJldmVyeWl0ZW0iLCJlIiwiZWxfbGluayIsIm5leHRFbCIsIm5leHRFbGVtZW50U2libGluZyIsIm9uIiwidG9wRnVuY3Rpb24iLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIkFPUyIsImluaXQiLCJ0eXBlZCIsIlR5cGVkIiwic3RyaW5ncyIsInR5cGVTcGVlZCIsImJhY2tTcGVlZCIsImxvb3AiLCJjdXJzb3JDaGFyIiwic2hvd0N1cnNvciIsImF1dG9JbnNlcnRDc3MiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9