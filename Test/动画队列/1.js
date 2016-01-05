/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	var aa = "hahaha";
	
	var d = document.HTMLDivElement;
	var dc = document.querySelector(".c1");
	var dc1 = document.querySelector(".c2");
	console.log(Node, HTMLDivElement.animate, Element);
	// 设置CSS
	// css("color","blue")
	function css(data, value) {
	    "use strict";
	
	    if (!data) {
	        return this;
	    }
	    if (arguments.length >= 2) {
	        this.style[options] = value;
	        return this;
	    }
	    for (var e in data) {
	        this.style[e] = data[e];
	    }
	    return this;
	}
	function animate() {}
	HTMLDivElement.prototype.css = css;
	HTMLDivElement.prototype.animate = animate;
	console.log(dc1.css({ "background-color": "#A9A9A9", "color": "#AB59A9" }));
	//# sourceMappingURL=1.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=1.js.map