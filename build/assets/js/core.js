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
/******/ 		"core": 0
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
/******/ 	deferredModules.push(["./core.js","vendor"]);
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3Njc3MvYnVuZGxlLnNjc3M/ZDU1NCIsIndlYnBhY2s6Ly8vLi9jb3JlLmpzIl0sIm5hbWVzIjpbImhleFRvUmdiYSIsImhleCIsIm9wYWNpdHkiLCJyZXN1bHQiLCJleGVjIiwicmdiIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIkRJVl9DQVJEIiwidG9vbHRpcCIsInBvcG92ZXIiLCJodG1sIiwib24iLCJlIiwiJGNhcmQiLCJjbG9zZXN0IiwicmVtb3ZlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsInJlbW92ZUNsYXNzIiwibGVuZ3RoIiwiZ2VuZXJhdGVTcGFya2xpbmUiLCIkZWxlbSIsImRhdGEiLCJwYXJhbXMiLCJzcGFya2xpbmUiLCJ0eXBlIiwiYXR0ciIsImhlaWdodCIsImJhckNvbG9yIiwiY29sb3IiLCJsaW5lQ29sb3IiLCJmaWxsQ29sb3IiLCJzcG90Q29sb3IiLCJzcG90UmFkaXVzIiwibGluZVdpZHRoIiwiaGlnaGxpZ2h0Q29sb3IiLCJoaWdobGlnaHRMaW5lQ29sb3IiLCJkZWZhdWx0UGl4ZWxzUGVyVmFsdWUiLCJlYWNoIiwiJGNoYXJ0IiwiSlNPTiIsInBhcnNlIiwiJHRoaXMiLCJjaXJjbGVQcm9ncmVzcyIsImZpbGwiLCJ0YWJsZXIiLCJjb2xvcnMiLCJibHVlIiwic2l6ZSIsInN0YXJ0QW5nbGUiLCJNYXRoIiwiUEkiLCJlbXB0eUZpbGwiLCJsaW5lQ2FwIiwid2luZG93IiwiYXp1cmUiLCJpbmRpZ28iLCJwdXJwbGUiLCJwaW5rIiwicmVkIiwib3JhbmdlIiwieWVsbG93IiwibGltZSIsImdyZWVuIiwidGVhbCIsImN5YW4iLCJncmF5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtB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Ziw0QkErRkwsZ0JBL0ZLLEVBK0ZhLFNBL0ZiLDRCQWdHTCxpQkFoR0ssRUFnR2MsU0FoR2QsNEJBaUdMLG1CQWpHSyxFQWlHZ0IsU0FqR2hCLDRCQWtHTCxvQkFsR0ssRUFrR2lCLFNBbEdqQjtBQURTLENBQWhCLEMiLCJmaWxlIjoianMvY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY29yZVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9jb3JlLmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uL3Njc3MvYnVuZGxlLnNjc3MnXG4vKipcbiAqXG4gKi9cbmxldCBoZXhUb1JnYmEgPSBmdW5jdGlvbihoZXgsIG9wYWNpdHkpIHtcblx0bGV0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpXG5cdGxldCByZ2IgPSByZXN1bHRcblx0XHQ/IHtcblx0XHRcdFx0cjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG5cdFx0XHRcdGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuXHRcdFx0XHRiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuXHRcdCAgfVxuXHRcdDogbnVsbFxuXG5cdHJldHVybiAncmdiYSgnICsgcmdiLnIgKyAnLCAnICsgcmdiLmcgKyAnLCAnICsgcmdiLmIgKyAnLCAnICsgb3BhY2l0eSArICcpJ1xufVxuXG4vKipcbiAqXG4gKi9cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHQvKiogQ29uc3RhbnQgZGl2IGNhcmQgKi9cblx0Y29uc3QgRElWX0NBUkQgPSAnZGl2LmNhcmQnXG5cblx0LyoqIEluaXRpYWxpemUgdG9vbHRpcHMgKi9cblx0JCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKVxuXG5cdC8qKiBJbml0aWFsaXplIHBvcG92ZXJzICovXG5cdCQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKHtcblx0XHRodG1sOiB0cnVlXG5cdH0pXG5cblx0LyoqIEZ1bmN0aW9uIGZvciByZW1vdmUgY2FyZCAqL1xuXHQkKCdbZGF0YS10b2dnbGU9XCJjYXJkLXJlbW92ZVwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRsZXQgJGNhcmQgPSAkKHRoaXMpLmNsb3Nlc3QoRElWX0NBUkQpXG5cblx0XHQkY2FyZC5yZW1vdmUoKVxuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0cmV0dXJuIGZhbHNlXG5cdH0pXG5cblx0LyoqIEZ1bmN0aW9uIGZvciBjb2xsYXBzZSBjYXJkICovXG5cdCQoJ1tkYXRhLXRvZ2dsZT1cImNhcmQtY29sbGFwc2VcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0bGV0ICRjYXJkID0gJCh0aGlzKS5jbG9zZXN0KERJVl9DQVJEKVxuXG5cdFx0JGNhcmQudG9nZ2xlQ2xhc3MoJ2NhcmQtY29sbGFwc2VkJylcblxuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHJldHVybiBmYWxzZVxuXHR9KVxuXG5cdC8qKiBGdW5jdGlvbiBmb3IgZnVsbHNjcmVlbiBjYXJkICovXG5cdCQoJ1tkYXRhLXRvZ2dsZT1cImNhcmQtZnVsbHNjcmVlblwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRsZXQgJGNhcmQgPSAkKHRoaXMpLmNsb3Nlc3QoRElWX0NBUkQpXG5cblx0XHQkY2FyZC50b2dnbGVDbGFzcygnY2FyZC1mdWxsc2NyZWVuJykucmVtb3ZlQ2xhc3MoJ2NhcmQtY29sbGFwc2VkJylcblxuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHJldHVybiBmYWxzZVxuXHR9KVxuXG5cdC8qKiAgKi9cblx0aWYgKCQoJ1tkYXRhLXNwYXJrbGluZV0nKS5sZW5ndGgpIHtcblx0XHRsZXQgZ2VuZXJhdGVTcGFya2xpbmUgPSBmdW5jdGlvbigkZWxlbSwgZGF0YSwgcGFyYW1zKSB7XG5cdFx0XHQkZWxlbS5zcGFya2xpbmUoZGF0YSwge1xuXHRcdFx0XHR0eXBlOiAkZWxlbS5hdHRyKCdkYXRhLXNwYXJrbGluZS10eXBlJyksXG5cdFx0XHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdFx0XHRiYXJDb2xvcjogcGFyYW1zLmNvbG9yLFxuXHRcdFx0XHRsaW5lQ29sb3I6IHBhcmFtcy5jb2xvcixcblx0XHRcdFx0ZmlsbENvbG9yOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHRzcG90Q29sb3I6IHBhcmFtcy5jb2xvcixcblx0XHRcdFx0c3BvdFJhZGl1czogMCxcblx0XHRcdFx0bGluZVdpZHRoOiAyLFxuXHRcdFx0XHRoaWdobGlnaHRDb2xvcjogaGV4VG9SZ2JhKHBhcmFtcy5jb2xvciwgMC42KSxcblx0XHRcdFx0aGlnaGxpZ2h0TGluZUNvbG9yOiAnIzY2NicsXG5cdFx0XHRcdGRlZmF1bHRQaXhlbHNQZXJWYWx1ZTogNVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHQkKCdbZGF0YS1zcGFya2xpbmVdJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGxldCAkY2hhcnQgPSAkKHRoaXMpXG5cblx0XHRcdGdlbmVyYXRlU3BhcmtsaW5lKFxuXHRcdFx0XHQkY2hhcnQsXG5cdFx0XHRcdEpTT04ucGFyc2UoJGNoYXJ0LmF0dHIoJ2RhdGEtc3BhcmtsaW5lJykpLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y29sb3I6ICRjaGFydC5hdHRyKCdkYXRhLXNwYXJrbGluZS1jb2xvcicpXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHR9KVxuXHR9XG5cblx0LyoqICAqL1xuXHRpZiAoJCgnLmNoYXJ0LWNpcmNsZScpLmxlbmd0aCkge1xuXHRcdCQoJy5jaGFydC1jaXJjbGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0ICR0aGlzID0gJCh0aGlzKVxuXG5cdFx0XHQkdGhpcy5jaXJjbGVQcm9ncmVzcyh7XG5cdFx0XHRcdGZpbGw6IHtcblx0XHRcdFx0XHRjb2xvcjpcblx0XHRcdFx0XHRcdHRhYmxlci5jb2xvcnNbJHRoaXMuYXR0cignZGF0YS1jb2xvcicpXSB8fFxuXHRcdFx0XHRcdFx0dGFibGVyLmNvbG9ycy5ibHVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNpemU6ICR0aGlzLmhlaWdodCgpLFxuXHRcdFx0XHRzdGFydEFuZ2xlOiAtTWF0aC5QSSAvIDQgKiAyLFxuXHRcdFx0XHRlbXB0eUZpbGw6ICcjRjRGNEY0Jyxcblx0XHRcdFx0bGluZUNhcDogJ3JvdW5kJ1xuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG59KVxuXG53aW5kb3cudGFibGVyID0ge1xuXHRjb2xvcnM6IHtcblx0XHRibHVlOiAnIzQ2N2ZjZicsXG5cdFx0J2JsdWUtZGFya2VzdCc6ICcjMGUxOTI5Jyxcblx0XHQnYmx1ZS1kYXJrZXInOiAnIzFjMzM1MycsXG5cdFx0J2JsdWUtZGFyayc6ICcjMzg2NmE2Jyxcblx0XHQnYmx1ZS1saWdodCc6ICcjN2VhNWRkJyxcblx0XHQnYmx1ZS1saWdodGVyJzogJyNjOGQ5ZjEnLFxuXHRcdCdibHVlLWxpZ2h0ZXN0JzogJyNlZGYyZmEnLFxuXHRcdGF6dXJlOiAnIzQ1YWFmMicsXG5cdFx0J2F6dXJlLWRhcmtlc3QnOiAnIzBlMjIzMCcsXG5cdFx0J2F6dXJlLWRhcmtlcic6ICcjMWM0NDYxJyxcblx0XHQnYXp1cmUtZGFyayc6ICcjMzc4OGMyJyxcblx0XHQnYXp1cmUtbGlnaHQnOiAnIzdkYzRmNicsXG5cdFx0J2F6dXJlLWxpZ2h0ZXInOiAnI2M3ZTZmYicsXG5cdFx0J2F6dXJlLWxpZ2h0ZXN0JzogJyNlY2Y3ZmUnLFxuXHRcdGluZGlnbzogJyM2NTc0Y2QnLFxuXHRcdCdpbmRpZ28tZGFya2VzdCc6ICcjMTQxNzI5Jyxcblx0XHQnaW5kaWdvLWRhcmtlcic6ICcjMjgyZTUyJyxcblx0XHQnaW5kaWdvLWRhcmsnOiAnIzUxNWRhNCcsXG5cdFx0J2luZGlnby1saWdodCc6ICcjOTM5ZWRjJyxcblx0XHQnaW5kaWdvLWxpZ2h0ZXInOiAnI2QxZDVmMCcsXG5cdFx0J2luZGlnby1saWdodGVzdCc6ICcjZjBmMWZhJyxcblx0XHRwdXJwbGU6ICcjYTU1ZWVhJyxcblx0XHQncHVycGxlLWRhcmtlc3QnOiAnIzIxMTMyZicsXG5cdFx0J3B1cnBsZS1kYXJrZXInOiAnIzQyMjY1ZScsXG5cdFx0J3B1cnBsZS1kYXJrJzogJyM4NDRiYmInLFxuXHRcdCdwdXJwbGUtbGlnaHQnOiAnI2MwOGVmMCcsXG5cdFx0J3B1cnBsZS1saWdodGVyJzogJyNlNGNmZjknLFxuXHRcdCdwdXJwbGUtbGlnaHRlc3QnOiAnI2Y2ZWZmZCcsXG5cdFx0cGluazogJyNmNjZkOWInLFxuXHRcdCdwaW5rLWRhcmtlc3QnOiAnIzMxMTYxZicsXG5cdFx0J3BpbmstZGFya2VyJzogJyM2MjJjM2UnLFxuXHRcdCdwaW5rLWRhcmsnOiAnI2M1NTc3YycsXG5cdFx0J3BpbmstbGlnaHQnOiAnI2Y5OTliOScsXG5cdFx0J3BpbmstbGlnaHRlcic6ICcjZmNkM2UxJyxcblx0XHQncGluay1saWdodGVzdCc6ICcjZmVmMGY1Jyxcblx0XHRyZWQ6ICcjZTc0YzNjJyxcblx0XHQncmVkLWRhcmtlc3QnOiAnIzJlMGYwYycsXG5cdFx0J3JlZC1kYXJrZXInOiAnIzVjMWUxOCcsXG5cdFx0J3JlZC1kYXJrJzogJyNiOTNkMzAnLFxuXHRcdCdyZWQtbGlnaHQnOiAnI2VlODI3NycsXG5cdFx0J3JlZC1saWdodGVyJzogJyNmOGM5YzUnLFxuXHRcdCdyZWQtbGlnaHRlc3QnOiAnI2ZkZWRlYycsXG5cdFx0b3JhbmdlOiAnI2ZkOTY0NCcsXG5cdFx0J29yYW5nZS1kYXJrZXN0JzogJyMzMzFlMGUnLFxuXHRcdCdvcmFuZ2UtZGFya2VyJzogJyM2NTNjMWInLFxuXHRcdCdvcmFuZ2UtZGFyayc6ICcjY2E3ODM2Jyxcblx0XHQnb3JhbmdlLWxpZ2h0JzogJyNmZWI2N2MnLFxuXHRcdCdvcmFuZ2UtbGlnaHRlcic6ICcjZmVlMGM3Jyxcblx0XHQnb3JhbmdlLWxpZ2h0ZXN0JzogJyNmZmY1ZWMnLFxuXHRcdHllbGxvdzogJyNmMWM0MGYnLFxuXHRcdCd5ZWxsb3ctZGFya2VzdCc6ICcjMzAyNzAzJyxcblx0XHQneWVsbG93LWRhcmtlcic6ICcjNjA0ZTA2Jyxcblx0XHQneWVsbG93LWRhcmsnOiAnI2MxOWQwYycsXG5cdFx0J3llbGxvdy1saWdodCc6ICcjZjVkNjU3Jyxcblx0XHQneWVsbG93LWxpZ2h0ZXInOiAnI2ZiZWRiNycsXG5cdFx0J3llbGxvdy1saWdodGVzdCc6ICcjZmVmOWU3Jyxcblx0XHRsaW1lOiAnIzdiZDIzNScsXG5cdFx0J2xpbWUtZGFya2VzdCc6ICcjMTkyYTBiJyxcblx0XHQnbGltZS1kYXJrZXInOiAnIzMxNTQxNScsXG5cdFx0J2xpbWUtZGFyayc6ICcjNjJhODJhJyxcblx0XHQnbGltZS1saWdodCc6ICcjYTNlMDcyJyxcblx0XHQnbGltZS1saWdodGVyJzogJyNkN2YyYzInLFxuXHRcdCdsaW1lLWxpZ2h0ZXN0JzogJyNmMmZiZWInLFxuXHRcdGdyZWVuOiAnIzVlYmEwMCcsXG5cdFx0J2dyZWVuLWRhcmtlc3QnOiAnIzEzMjUwMCcsXG5cdFx0J2dyZWVuLWRhcmtlcic6ICcjMjY0YTAwJyxcblx0XHQnZ3JlZW4tZGFyayc6ICcjNGI5NTAwJyxcblx0XHQnZ3JlZW4tbGlnaHQnOiAnIzhlY2Y0ZCcsXG5cdFx0J2dyZWVuLWxpZ2h0ZXInOiAnI2NmZWFiMycsXG5cdFx0J2dyZWVuLWxpZ2h0ZXN0JzogJyNlZmY4ZTYnLFxuXHRcdHRlYWw6ICcjMmJjYmJhJyxcblx0XHQndGVhbC1kYXJrZXN0JzogJyMwOTI5MjUnLFxuXHRcdCd0ZWFsLWRhcmtlcic6ICcjMTE1MTRhJyxcblx0XHQndGVhbC1kYXJrJzogJyMyMmEyOTUnLFxuXHRcdCd0ZWFsLWxpZ2h0JzogJyM2YmRiY2YnLFxuXHRcdCd0ZWFsLWxpZ2h0ZXInOiAnI2JmZWZlYScsXG5cdFx0J3RlYWwtbGlnaHRlc3QnOiAnI2VhZmFmOCcsXG5cdFx0Y3lhbjogJyMxN2EyYjgnLFxuXHRcdCdjeWFuLWRhcmtlc3QnOiAnIzA1MjAyNScsXG5cdFx0J2N5YW4tZGFya2VyJzogJyMwOTQxNGEnLFxuXHRcdCdjeWFuLWRhcmsnOiAnIzEyODI5MycsXG5cdFx0J2N5YW4tbGlnaHQnOiAnIzVkYmVjZCcsXG5cdFx0J2N5YW4tbGlnaHRlcic6ICcjYjllM2VhJyxcblx0XHQnY3lhbi1saWdodGVzdCc6ICcjZThmNmY4Jyxcblx0XHRncmF5OiAnIzg2OGU5NicsXG5cdFx0J2dyYXktZGFya2VzdCc6ICcjMWIxYzFlJyxcblx0XHQnZ3JheS1kYXJrZXInOiAnIzM2MzkzYycsXG5cdFx0J2dyYXktZGFyayc6ICcjNmI3Mjc4Jyxcblx0XHQnZ3JheS1saWdodCc6ICcjYWFiMGI2Jyxcblx0XHQnZ3JheS1saWdodGVyJzogJyNkYmRkZTAnLFxuXHRcdCdncmF5LWxpZ2h0ZXN0JzogJyNmM2Y0ZjUnLFxuXHRcdCdncmF5LWRhcmsnOiAnIzM0M2E0MCcsXG5cdFx0J2dyYXktZGFyay1kYXJrZXN0JzogJyMwYTBjMGQnLFxuXHRcdCdncmF5LWRhcmstZGFya2VyJzogJyMxNTE3MWEnLFxuXHRcdCdncmF5LWRhcmstZGFyayc6ICcjMmEyZTMzJyxcblx0XHQnZ3JheS1kYXJrLWxpZ2h0JzogJyM3MTc1NzknLFxuXHRcdCdncmF5LWRhcmstbGlnaHRlcic6ICcjYzJjNGM2Jyxcblx0XHQnZ3JheS1kYXJrLWxpZ2h0ZXN0JzogJyNlYmViZWMnXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=