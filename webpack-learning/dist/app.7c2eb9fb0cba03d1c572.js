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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 321);
/******/ })
/************************************************************************/
/******/ ({

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _notification = __webpack_require__(122);

var _notification2 = _interopRequireDefault(_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// //the string after import can be whatever I like. This is an alias. I could have called it 'bob' or anything I like.

_notification2.default.log('hello');
_notification2.default.notify('hello!');
var Anna = new _notification2.default.Person();

console.log(Anna);
console.log("typeof: " + (typeof Anna === 'undefined' ? 'undefined' : _typeof(Anna)));
console.log(_notification2.default);
__webpack_require__(64); //SPENT FOREVER ON ERROR ! Thing is, you need to "require('./style.css')" in main.js for this command to actually export and make a css file.

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function notify(message) {
  alert(message);
}
function log(message) {
  console.log(message);
}

var Person = function Person() {
  _classCallCheck(this, Person);

  this.eyes = 'blue';
  this.hair = 'brown';
};

exports.default = {
  notify: notify,
  log: log,
  Person: Person

  //so this is a pretty big concept. Some functions are declared above, and what is happening is that I want to export those funcitons to another file (the file that webpack will compile into bundle.js). The way to do that is to "export default" and give this an object. That object then needs keys which can be called whatever I like, and the value is a reference to whatever object or function (functions are objects) that I like. Seems like best practice to name the key value pair the same name for consistencey sake. 

};

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(120);
module.exports = __webpack_require__(64);


/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });