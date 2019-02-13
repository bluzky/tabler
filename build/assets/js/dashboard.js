/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"dashboard": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./dashboard.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../scss/bundle.scss":
/*!***************************!*\
  !*** ../scss/bundle.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./core.js":
/*!*****************!*\
  !*** ./core.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _scss_bundle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/bundle.scss */ "../scss/bundle.scss");
/* harmony import */ var _scss_bundle_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_bundle_scss__WEBPACK_IMPORTED_MODULE_0__);
var _colors;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 *
 */

var hexToRgba = function hexToRgba(hex, opacity) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var rgb = result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
  return 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + opacity + ')';
};
/**
 *
 */


$(document).ready(function () {
  /** Constant div card */
  var DIV_CARD = 'div.card';
  /** Initialize tooltips */

  $('[data-toggle="tooltip"]').tooltip();
  /** Initialize popovers */

  $('[data-toggle="popover"]').popover({
    html: true
  });
  /** Function for remove card */

  $('[data-toggle="card-remove"]').on('click', function (e) {
    var $card = $(this).closest(DIV_CARD);
    $card.remove();
    e.preventDefault();
    return false;
  });
  /** Function for collapse card */

  $('[data-toggle="card-collapse"]').on('click', function (e) {
    var $card = $(this).closest(DIV_CARD);
    $card.toggleClass('card-collapsed');
    e.preventDefault();
    return false;
  });
  /** Function for fullscreen card */

  $('[data-toggle="card-fullscreen"]').on('click', function (e) {
    var $card = $(this).closest(DIV_CARD);
    $card.toggleClass('card-fullscreen').removeClass('card-collapsed');
    e.preventDefault();
    return false;
  });
  /**  */

  if ($('[data-sparkline]').length) {
    var generateSparkline = function generateSparkline($elem, data, params) {
      $elem.sparkline(data, {
        type: $elem.attr('data-sparkline-type'),
        height: '100%',
        barColor: params.color,
        lineColor: params.color,
        fillColor: 'transparent',
        spotColor: params.color,
        spotRadius: 0,
        lineWidth: 2,
        highlightColor: hexToRgba(params.color, 0.6),
        highlightLineColor: '#666',
        defaultPixelsPerValue: 5
      });
    };

    $('[data-sparkline]').each(function () {
      var $chart = $(this);
      generateSparkline($chart, JSON.parse($chart.attr('data-sparkline')), {
        color: $chart.attr('data-sparkline-color')
      });
    });
  }
  /**  */


  if ($('.chart-circle').length) {
    $('.chart-circle').each(function () {
      var $this = $(this);
      $this.circleProgress({
        fill: {
          color: tabler.colors[$this.attr('data-color')] || tabler.colors.blue
        },
        size: $this.height(),
        startAngle: -Math.PI / 4 * 2,
        emptyFill: '#F4F4F4',
        lineCap: 'round'
      });
    });
  }
});
window.tabler = {
  colors: (_colors = {
    blue: '#467fcf',
    'blue-darkest': '#0e1929',
    'blue-darker': '#1c3353',
    'blue-dark': '#3866a6',
    'blue-light': '#7ea5dd',
    'blue-lighter': '#c8d9f1',
    'blue-lightest': '#edf2fa',
    azure: '#45aaf2',
    'azure-darkest': '#0e2230',
    'azure-darker': '#1c4461',
    'azure-dark': '#3788c2',
    'azure-light': '#7dc4f6',
    'azure-lighter': '#c7e6fb',
    'azure-lightest': '#ecf7fe',
    indigo: '#6574cd',
    'indigo-darkest': '#141729',
    'indigo-darker': '#282e52',
    'indigo-dark': '#515da4',
    'indigo-light': '#939edc',
    'indigo-lighter': '#d1d5f0',
    'indigo-lightest': '#f0f1fa',
    purple: '#a55eea',
    'purple-darkest': '#21132f',
    'purple-darker': '#42265e',
    'purple-dark': '#844bbb',
    'purple-light': '#c08ef0',
    'purple-lighter': '#e4cff9',
    'purple-lightest': '#f6effd',
    pink: '#f66d9b',
    'pink-darkest': '#31161f',
    'pink-darker': '#622c3e',
    'pink-dark': '#c5577c',
    'pink-light': '#f999b9',
    'pink-lighter': '#fcd3e1',
    'pink-lightest': '#fef0f5',
    red: '#e74c3c',
    'red-darkest': '#2e0f0c',
    'red-darker': '#5c1e18',
    'red-dark': '#b93d30',
    'red-light': '#ee8277',
    'red-lighter': '#f8c9c5',
    'red-lightest': '#fdedec',
    orange: '#fd9644',
    'orange-darkest': '#331e0e',
    'orange-darker': '#653c1b',
    'orange-dark': '#ca7836',
    'orange-light': '#feb67c',
    'orange-lighter': '#fee0c7',
    'orange-lightest': '#fff5ec',
    yellow: '#f1c40f',
    'yellow-darkest': '#302703',
    'yellow-darker': '#604e06',
    'yellow-dark': '#c19d0c',
    'yellow-light': '#f5d657',
    'yellow-lighter': '#fbedb7',
    'yellow-lightest': '#fef9e7',
    lime: '#7bd235',
    'lime-darkest': '#192a0b',
    'lime-darker': '#315415',
    'lime-dark': '#62a82a',
    'lime-light': '#a3e072',
    'lime-lighter': '#d7f2c2',
    'lime-lightest': '#f2fbeb',
    green: '#5eba00',
    'green-darkest': '#132500',
    'green-darker': '#264a00',
    'green-dark': '#4b9500',
    'green-light': '#8ecf4d',
    'green-lighter': '#cfeab3',
    'green-lightest': '#eff8e6',
    teal: '#2bcbba',
    'teal-darkest': '#092925',
    'teal-darker': '#11514a',
    'teal-dark': '#22a295',
    'teal-light': '#6bdbcf',
    'teal-lighter': '#bfefea',
    'teal-lightest': '#eafaf8',
    cyan: '#17a2b8',
    'cyan-darkest': '#052025',
    'cyan-darker': '#09414a',
    'cyan-dark': '#128293',
    'cyan-light': '#5dbecd',
    'cyan-lighter': '#b9e3ea',
    'cyan-lightest': '#e8f6f8',
    gray: '#868e96',
    'gray-darkest': '#1b1c1e',
    'gray-darker': '#36393c',
    'gray-dark': '#6b7278',
    'gray-light': '#aab0b6',
    'gray-lighter': '#dbdde0',
    'gray-lightest': '#f3f4f5'
  }, _defineProperty(_colors, "gray-dark", '#343a40'), _defineProperty(_colors, 'gray-dark-darkest', '#0a0c0d'), _defineProperty(_colors, 'gray-dark-darker', '#15171a'), _defineProperty(_colors, 'gray-dark-dark', '#2a2e33'), _defineProperty(_colors, 'gray-dark-light', '#717579'), _defineProperty(_colors, 'gray-dark-lighter', '#c2c4c6'), _defineProperty(_colors, 'gray-dark-lightest', '#ebebec'), _colors)
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./dashboard.js":
/*!**********************!*\
  !*** ./dashboard.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "../../../node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sparkline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sparkline */ "../../../node_modules/sparkline/lib/sparkline.js");
/* harmony import */ var sparkline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sparkline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var selectize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! selectize */ "../../../node_modules/selectize/dist/js/selectize.js");
/* harmony import */ var selectize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(selectize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tablesorter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tablesorter */ "../../../node_modules/tablesorter/dist/js/jquery.tablesorter.combined.js");
/* harmony import */ var tablesorter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tablesorter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jvectormap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jvectormap */ "../../../node_modules/jvectormap/jquery-jvectormap.min.js");
/* harmony import */ var jvectormap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jvectormap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery_circle_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery-circle-progress */ "../../../node_modules/jquery-circle-progress/dist/circle-progress.js");
/* harmony import */ var jquery_circle_progress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery_circle_progress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! c3 */ "../../../node_modules/c3/c3.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery-mask-plugin */ "../../../node_modules/jquery-mask-plugin/dist/jquery.mask.js");
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core */ "./core.js");









window.c3 = c3__WEBPACK_IMPORTED_MODULE_7__;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_0__;


/***/ }),

/***/ "window":
/*!*************************!*\
  !*** external "window" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3Njc3MvYnVuZGxlLnNjc3M/NDAwYiIsIndlYnBhY2s6Ly8vLi9jb3JlLmpzIiwid2VicGFjazovLy8uL2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3dcIiJdLCJuYW1lcyI6WyJoZXhUb1JnYmEiLCJoZXgiLCJvcGFjaXR5IiwicmVzdWx0IiwiZXhlYyIsInJnYiIsInIiLCJwYXJzZUludCIsImciLCJiIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJESVZfQ0FSRCIsInRvb2x0aXAiLCJwb3BvdmVyIiwiaHRtbCIsIm9uIiwiZSIsIiRjYXJkIiwiY2xvc2VzdCIsInJlbW92ZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImxlbmd0aCIsImdlbmVyYXRlU3BhcmtsaW5lIiwiJGVsZW0iLCJkYXRhIiwicGFyYW1zIiwic3BhcmtsaW5lIiwidHlwZSIsImF0dHIiLCJoZWlnaHQiLCJiYXJDb2xvciIsImNvbG9yIiwibGluZUNvbG9yIiwiZmlsbENvbG9yIiwic3BvdENvbG9yIiwic3BvdFJhZGl1cyIsImxpbmVXaWR0aCIsImhpZ2hsaWdodENvbG9yIiwiaGlnaGxpZ2h0TGluZUNvbG9yIiwiZGVmYXVsdFBpeGVsc1BlclZhbHVlIiwiZWFjaCIsIiRjaGFydCIsIkpTT04iLCJwYXJzZSIsIiR0aGlzIiwiY2lyY2xlUHJvZ3Jlc3MiLCJmaWxsIiwidGFibGVyIiwiY29sb3JzIiwiYmx1ZSIsInNpemUiLCJzdGFydEFuZ2xlIiwiTWF0aCIsIlBJIiwiZW1wdHlGaWxsIiwibGluZUNhcCIsIndpbmRvdyIsImF6dXJlIiwiaW5kaWdvIiwicHVycGxlIiwicGluayIsInJlZCIsIm9yYW5nZSIsInllbGxvdyIsImxpbWUiLCJncmVlbiIsInRlYWwiLCJjeWFuIiwiZ3JheSIsImMzIl0sIm1hcHBpbmdzIjoiO0FBQUE7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LDJDQTRGUSxTQTVGUiw0QkE2RkwsbUJBN0ZLLEVBNkZnQixTQTdGaEIsNEJBOEZMLGtCQTlGSyxFQThGZSxTQTlGZiw0QkErRkwsZ0JBL0ZLLEVBK0ZhLFNBL0ZiLDRCQWdHTCxpQkFoR0ssRUFnR2MsU0FoR2QsNEJBaUdMLG1CQWpHSyxFQWlHZ0IsU0FqR2hCLDRCQWtHTCxvQkFsR0ssRUFrR2lCLFNBbEdqQjtBQURTLENBQWhCLEM7Ozs7Ozs7Ozs7Ozs7QUNqSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBWixNQUFNLENBQUNhLEVBQVAsR0FBWUEsK0JBQVo7QUFDQWIsTUFBTSxDQUFDbEQsQ0FBUCxHQUFXQSxtQ0FBWDs7Ozs7Ozs7Ozs7O0FDWEEsd0IiLCJmaWxlIjoianMvZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJkYXNoYm9hcmRcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vZGFzaGJvYXJkLmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uL3Njc3MvYnVuZGxlLnNjc3MnXG4vKipcbiAqXG4gKi9cbmxldCBoZXhUb1JnYmEgPSBmdW5jdGlvbihoZXgsIG9wYWNpdHkpIHtcblx0bGV0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpXG5cdGxldCByZ2IgPSByZXN1bHRcblx0XHQ/IHtcblx0XHRcdFx0cjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG5cdFx0XHRcdGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuXHRcdFx0XHRiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuXHRcdCAgfVxuXHRcdDogbnVsbFxuXG5cdHJldHVybiAncmdiYSgnICsgcmdiLnIgKyAnLCAnICsgcmdiLmcgKyAnLCAnICsgcmdiLmIgKyAnLCAnICsgb3BhY2l0eSArICcpJ1xufVxuXG4vKipcbiAqXG4gKi9cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHQvKiogQ29uc3RhbnQgZGl2IGNhcmQgKi9cblx0Y29uc3QgRElWX0NBUkQgPSAnZGl2LmNhcmQnXG5cblx0LyoqIEluaXRpYWxpemUgdG9vbHRpcHMgKi9cblx0JCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKVxuXG5cdC8qKiBJbml0aWFsaXplIHBvcG92ZXJzICovXG5cdCQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKHtcblx0XHRodG1sOiB0cnVlXG5cdH0pXG5cblx0LyoqIEZ1bmN0aW9uIGZvciByZW1vdmUgY2FyZCAqL1xuXHQkKCdbZGF0YS10b2dnbGU9XCJjYXJkLXJlbW92ZVwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRsZXQgJGNhcmQgPSAkKHRoaXMpLmNsb3Nlc3QoRElWX0NBUkQpXG5cblx0XHQkY2FyZC5yZW1vdmUoKVxuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0cmV0dXJuIGZhbHNlXG5cdH0pXG5cblx0LyoqIEZ1bmN0aW9uIGZvciBjb2xsYXBzZSBjYXJkICovXG5cdCQoJ1tkYXRhLXRvZ2dsZT1cImNhcmQtY29sbGFwc2VcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0bGV0ICRjYXJkID0gJCh0aGlzKS5jbG9zZXN0KERJVl9DQVJEKVxuXG5cdFx0JGNhcmQudG9nZ2xlQ2xhc3MoJ2NhcmQtY29sbGFwc2VkJylcblxuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHJldHVybiBmYWxzZVxuXHR9KVxuXG5cdC8qKiBGdW5jdGlvbiBmb3IgZnVsbHNjcmVlbiBjYXJkICovXG5cdCQoJ1tkYXRhLXRvZ2dsZT1cImNhcmQtZnVsbHNjcmVlblwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRsZXQgJGNhcmQgPSAkKHRoaXMpLmNsb3Nlc3QoRElWX0NBUkQpXG5cblx0XHQkY2FyZC50b2dnbGVDbGFzcygnY2FyZC1mdWxsc2NyZWVuJykucmVtb3ZlQ2xhc3MoJ2NhcmQtY29sbGFwc2VkJylcblxuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHJldHVybiBmYWxzZVxuXHR9KVxuXG5cdC8qKiAgKi9cblx0aWYgKCQoJ1tkYXRhLXNwYXJrbGluZV0nKS5sZW5ndGgpIHtcblx0XHRsZXQgZ2VuZXJhdGVTcGFya2xpbmUgPSBmdW5jdGlvbigkZWxlbSwgZGF0YSwgcGFyYW1zKSB7XG5cdFx0XHQkZWxlbS5zcGFya2xpbmUoZGF0YSwge1xuXHRcdFx0XHR0eXBlOiAkZWxlbS5hdHRyKCdkYXRhLXNwYXJrbGluZS10eXBlJyksXG5cdFx0XHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdFx0XHRiYXJDb2xvcjogcGFyYW1zLmNvbG9yLFxuXHRcdFx0XHRsaW5lQ29sb3I6IHBhcmFtcy5jb2xvcixcblx0XHRcdFx0ZmlsbENvbG9yOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHRzcG90Q29sb3I6IHBhcmFtcy5jb2xvcixcblx0XHRcdFx0c3BvdFJhZGl1czogMCxcblx0XHRcdFx0bGluZVdpZHRoOiAyLFxuXHRcdFx0XHRoaWdobGlnaHRDb2xvcjogaGV4VG9SZ2JhKHBhcmFtcy5jb2xvciwgMC42KSxcblx0XHRcdFx0aGlnaGxpZ2h0TGluZUNvbG9yOiAnIzY2NicsXG5cdFx0XHRcdGRlZmF1bHRQaXhlbHNQZXJWYWx1ZTogNVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHQkKCdbZGF0YS1zcGFya2xpbmVdJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkY2hhcnQgPSAkKHRoaXMpXG5cblx0XHRcdGdlbmVyYXRlU3BhcmtsaW5lKFxuXHRcdFx0XHQkY2hhcnQsXG5cdFx0XHRcdEpTT04ucGFyc2UoJGNoYXJ0LmF0dHIoJ2RhdGEtc3BhcmtsaW5lJykpLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y29sb3I6ICRjaGFydC5hdHRyKCdkYXRhLXNwYXJrbGluZS1jb2xvcicpXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHR9KVxuXHR9XG5cblx0LyoqICAqL1xuXHRpZiAoJCgnLmNoYXJ0LWNpcmNsZScpLmxlbmd0aCkge1xuXHRcdCQoJy5jaGFydC1jaXJjbGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICR0aGlzID0gJCh0aGlzKVxuXG5cdFx0XHQkdGhpcy5jaXJjbGVQcm9ncmVzcyh7XG5cdFx0XHRcdGZpbGw6IHtcblx0XHRcdFx0XHRjb2xvcjpcblx0XHRcdFx0XHRcdHRhYmxlci5jb2xvcnNbJHRoaXMuYXR0cignZGF0YS1jb2xvcicpXSB8fFxuXHRcdFx0XHRcdFx0dGFibGVyLmNvbG9ycy5ibHVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNpemU6ICR0aGlzLmhlaWdodCgpLFxuXHRcdFx0XHRzdGFydEFuZ2xlOiAtTWF0aC5QSSAvIDQgKiAyLFxuXHRcdFx0XHRlbXB0eUZpbGw6ICcjRjRGNEY0Jyxcblx0XHRcdFx0bGluZUNhcDogJ3JvdW5kJ1xuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG59KVxuXG53aW5kb3cudGFibGVyID0ge1xuXHRjb2xvcnM6IHtcblx0XHRibHVlOiAnIzQ2N2ZjZicsXG5cdFx0J2JsdWUtZGFya2VzdCc6ICcjMGUxOTI5Jyxcblx0XHQnYmx1ZS1kYXJrZXInOiAnIzFjMzM1MycsXG5cdFx0J2JsdWUtZGFyayc6ICcjMzg2NmE2Jyxcblx0XHQnYmx1ZS1saWdodCc6ICcjN2VhNWRkJyxcblx0XHQnYmx1ZS1saWdodGVyJzogJyNjOGQ5ZjEnLFxuXHRcdCdibHVlLWxpZ2h0ZXN0JzogJyNlZGYyZmEnLFxuXHRcdGF6dXJlOiAnIzQ1YWFmMicsXG5cdFx0J2F6dXJlLWRhcmtlc3QnOiAnIzBlMjIzMCcsXG5cdFx0J2F6dXJlLWRhcmtlcic6ICcjMWM0NDYxJyxcblx0XHQnYXp1cmUtZGFyayc6ICcjMzc4OGMyJyxcblx0XHQnYXp1cmUtbGlnaHQnOiAnIzdkYzRmNicsXG5cdFx0J2F6dXJlLWxpZ2h0ZXInOiAnI2M3ZTZmYicsXG5cdFx0J2F6dXJlLWxpZ2h0ZXN0JzogJyNlY2Y3ZmUnLFxuXHRcdGluZGlnbzogJyM2NTc0Y2QnLFxuXHRcdCdpbmRpZ28tZGFya2VzdCc6ICcjMTQxNzI5Jyxcblx0XHQnaW5kaWdvLWRhcmtlcic6ICcjMjgyZTUyJyxcblx0XHQnaW5kaWdvLWRhcmsnOiAnIzUxNWRhNCcsXG5cdFx0J2luZGlnby1saWdodCc6ICcjOTM5ZWRjJyxcblx0XHQnaW5kaWdvLWxpZ2h0ZXInOiAnI2QxZDVmMCcsXG5cdFx0J2luZGlnby1saWdodGVzdCc6ICcjZjBmMWZhJyxcblx0XHRwdXJwbGU6ICcjYTU1ZWVhJyxcblx0XHQncHVycGxlLWRhcmtlc3QnOiAnIzIxMTMyZicsXG5cdFx0J3B1cnBsZS1kYXJrZXInOiAnIzQyMjY1ZScsXG5cdFx0J3B1cnBsZS1kYXJrJzogJyM4NDRiYmInLFxuXHRcdCdwdXJwbGUtbGlnaHQnOiAnI2MwOGVmMCcsXG5cdFx0J3B1cnBsZS1saWdodGVyJzogJyNlNGNmZjknLFxuXHRcdCdwdXJwbGUtbGlnaHRlc3QnOiAnI2Y2ZWZmZCcsXG5cdFx0cGluazogJyNmNjZkOWInLFxuXHRcdCdwaW5rLWRhcmtlc3QnOiAnIzMxMTYxZicsXG5cdFx0J3BpbmstZGFya2VyJzogJyM2MjJjM2UnLFxuXHRcdCdwaW5rLWRhcmsnOiAnI2M1NTc3YycsXG5cdFx0J3BpbmstbGlnaHQnOiAnI2Y5OTliOScsXG5cdFx0J3BpbmstbGlnaHRlcic6ICcjZmNkM2UxJyxcblx0XHQncGluay1saWdodGVzdCc6ICcjZmVmMGY1Jyxcblx0XHRyZWQ6ICcjZTc0YzNjJyxcblx0XHQncmVkLWRhcmtlc3QnOiAnIzJlMGYwYycsXG5cdFx0J3JlZC1kYXJrZXInOiAnIzVjMWUxOCcsXG5cdFx0J3JlZC1kYXJrJzogJyNiOTNkMzAnLFxuXHRcdCdyZWQtbGlnaHQnOiAnI2VlODI3NycsXG5cdFx0J3JlZC1saWdodGVyJzogJyNmOGM5YzUnLFxuXHRcdCdyZWQtbGlnaHRlc3QnOiAnI2ZkZWRlYycsXG5cdFx0b3JhbmdlOiAnI2ZkOTY0NCcsXG5cdFx0J29yYW5nZS1kYXJrZXN0JzogJyMzMzFlMGUnLFxuXHRcdCdvcmFuZ2UtZGFya2VyJzogJyM2NTNjMWInLFxuXHRcdCdvcmFuZ2UtZGFyayc6ICcjY2E3ODM2Jyxcblx0XHQnb3JhbmdlLWxpZ2h0JzogJyNmZWI2N2MnLFxuXHRcdCdvcmFuZ2UtbGlnaHRlcic6ICcjZmVlMGM3Jyxcblx0XHQnb3JhbmdlLWxpZ2h0ZXN0JzogJyNmZmY1ZWMnLFxuXHRcdHllbGxvdzogJyNmMWM0MGYnLFxuXHRcdCd5ZWxsb3ctZGFya2VzdCc6ICcjMzAyNzAzJyxcblx0XHQneWVsbG93LWRhcmtlcic6ICcjNjA0ZTA2Jyxcblx0XHQneWVsbG93LWRhcmsnOiAnI2MxOWQwYycsXG5cdFx0J3llbGxvdy1saWdodCc6ICcjZjVkNjU3Jyxcblx0XHQneWVsbG93LWxpZ2h0ZXInOiAnI2ZiZWRiNycsXG5cdFx0J3llbGxvdy1saWdodGVzdCc6ICcjZmVmOWU3Jyxcblx0XHRsaW1lOiAnIzdiZDIzNScsXG5cdFx0J2xpbWUtZGFya2VzdCc6ICcjMTkyYTBiJyxcblx0XHQnbGltZS1kYXJrZXInOiAnIzMxNTQxNScsXG5cdFx0J2xpbWUtZGFyayc6ICcjNjJhODJhJyxcblx0XHQnbGltZS1saWdodCc6ICcjYTNlMDcyJyxcblx0XHQnbGltZS1saWdodGVyJzogJyNkN2YyYzInLFxuXHRcdCdsaW1lLWxpZ2h0ZXN0JzogJyNmMmZiZWInLFxuXHRcdGdyZWVuOiAnIzVlYmEwMCcsXG5cdFx0J2dyZWVuLWRhcmtlc3QnOiAnIzEzMjUwMCcsXG5cdFx0J2dyZWVuLWRhcmtlcic6ICcjMjY0YTAwJyxcblx0XHQnZ3JlZW4tZGFyayc6ICcjNGI5NTAwJyxcblx0XHQnZ3JlZW4tbGlnaHQnOiAnIzhlY2Y0ZCcsXG5cdFx0J2dyZWVuLWxpZ2h0ZXInOiAnI2NmZWFiMycsXG5cdFx0J2dyZWVuLWxpZ2h0ZXN0JzogJyNlZmY4ZTYnLFxuXHRcdHRlYWw6ICcjMmJjYmJhJyxcblx0XHQndGVhbC1kYXJrZXN0JzogJyMwOTI5MjUnLFxuXHRcdCd0ZWFsLWRhcmtlcic6ICcjMTE1MTRhJyxcblx0XHQndGVhbC1kYXJrJzogJyMyMmEyOTUnLFxuXHRcdCd0ZWFsLWxpZ2h0JzogJyM2YmRiY2YnLFxuXHRcdCd0ZWFsLWxpZ2h0ZXInOiAnI2JmZWZlYScsXG5cdFx0J3RlYWwtbGlnaHRlc3QnOiAnI2VhZmFmOCcsXG5cdFx0Y3lhbjogJyMxN2EyYjgnLFxuXHRcdCdjeWFuLWRhcmtlc3QnOiAnIzA1MjAyNScsXG5cdFx0J2N5YW4tZGFya2VyJzogJyMwOTQxNGEnLFxuXHRcdCdjeWFuLWRhcmsnOiAnIzEyODI5MycsXG5cdFx0J2N5YW4tbGlnaHQnOiAnIzVkYmVjZCcsXG5cdFx0J2N5YW4tbGlnaHRlcic6ICcjYjllM2VhJyxcblx0XHQnY3lhbi1saWdodGVzdCc6ICcjZThmNmY4Jyxcblx0XHRncmF5OiAnIzg2OGU5NicsXG5cdFx0J2dyYXktZGFya2VzdCc6ICcjMWIxYzFlJyxcblx0XHQnZ3JheS1kYXJrZXInOiAnIzM2MzkzYycsXG5cdFx0J2dyYXktZGFyayc6ICcjNmI3Mjc4Jyxcblx0XHQnZ3JheS1saWdodCc6ICcjYWFiMGI2Jyxcblx0XHQnZ3JheS1saWdodGVyJzogJyNkYmRkZTAnLFxuXHRcdCdncmF5LWxpZ2h0ZXN0JzogJyNmM2Y0ZjUnLFxuXHRcdCdncmF5LWRhcmsnOiAnIzM0M2E0MCcsXG5cdFx0J2dyYXktZGFyay1kYXJrZXN0JzogJyMwYTBjMGQnLFxuXHRcdCdncmF5LWRhcmstZGFya2VyJzogJyMxNTE3MWEnLFxuXHRcdCdncmF5LWRhcmstZGFyayc6ICcjMmEyZTMzJyxcblx0XHQnZ3JheS1kYXJrLWxpZ2h0JzogJyM3MTc1NzknLFxuXHRcdCdncmF5LWRhcmstbGlnaHRlcic6ICcjYzJjNGM2Jyxcblx0XHQnZ3JheS1kYXJrLWxpZ2h0ZXN0JzogJyNlYmViZWMnXG5cdH1cbn1cbiIsImltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICdib290c3RyYXAnXG5pbXBvcnQgJ3NwYXJrbGluZSdcbmltcG9ydCAnc2VsZWN0aXplJ1xuaW1wb3J0ICd0YWJsZXNvcnRlcidcbmltcG9ydCAnanZlY3Rvcm1hcCdcbmltcG9ydCAnanF1ZXJ5LWNpcmNsZS1wcm9ncmVzcydcbmltcG9ydCAqIGFzIGMzIGZyb20gJ2MzJ1xuaW1wb3J0ICdqcXVlcnktbWFzay1wbHVnaW4nXG5cbndpbmRvdy5jMyA9IGMzXG53aW5kb3cuJCA9ICRcblxuaW1wb3J0ICcuL2NvcmUnXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdzsiXSwic291cmNlUm9vdCI6IiJ9