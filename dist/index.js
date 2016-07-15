/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function alert(Vue) {

	    var AlertConstructor = Vue.extend(__webpack_require__(2));
	    var alertInstance = null;

	    Object.defineProperty(Vue.prototype, '$alert', {

	        get: function get() {

	            return function (config) {
	                if (alertInstance) return;
	                alertInstance = new AlertConstructor({
	                    el: document.createElement('div'),
	                    data: function data() {
	                        return {
	                            title: config.title,
	                            message: config.message,
	                            confirmTxt: config.confirmTxt || 'OK'
	                        };
	                    },

	                    methods: {
	                        confirm: function confirm() {
	                            alertInstance.$remove();
	                        }
	                    }
	                });
	                alertInstance.$appendTo(document.body);
	            };
	        }

	    });
	}

	if (typeof window !== 'undefined' && window.Vue) {
	    Vue.use(alert);
	}

	module.exports = alert;

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(3)
	__webpack_require__(7)
	__vue_script__ = __webpack_require__(9)
	__vue_template__ = __webpack_require__(10)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/wangxiaottt/Projects/qingchengFED/archer-vue-alert/src/alert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2924823f&file=alert.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alert.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2924823f&file=alert.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n    @media screen and (min-width: 320px) {\n        html {\n            font-size: 10px;\n        }\n    }\n\n    @media screen and (min-width: 375px) {\n        html {\n            font-size: 12px;\n        }\n    }\n\n    @media screen and(min-width: 414px) {\n        html {\n            font-size: 14px;\n        }\n    }\n\n    @media screen and(min-width: 600px) {\n        html {\n            font-size: 16px;\n        }\n    }\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2924823f&file=alert.vue&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=1!./alert.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2924823f&file=alert.vue&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=1!./alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*retain 1px border start*/\n.retainbt[_v-2924823f],\n.retainbb[_v-2924823f],\n.retainbl[_v-2924823f],\n.retainbr[_v-2924823f],\n.retainb[_v-2924823f] {\n  position: relative;\n  position: relative !important;\n}\n.retainbt[_v-2924823f]:before,\n.retainbb[_v-2924823f]:after {\n  pointer-events: none;\n  position: absolute;\n  content: \"\";\n  height: 0.08333rem;\n  max-height: 1px;\n  background: #ddd;\n  left: 0;\n  right: 0;\n}\n.retainbt[_v-2924823f]:before {\n  top: 0;\n}\n.retainbb[_v-2924823f]:after {\n  bottom: 0;\n}\n.retainbl[_v-2924823f]:before,\n.retainbr[_v-2924823f]:after {\n  pointer-events: none;\n  position: absolute;\n  content: \"\";\n  width: 0.08333rem;\n  max-width: 1px;\n  background: #ddd;\n  top: 0;\n  bottom: 0;\n}\n.retainbl[_v-2924823f]:before {\n  left: 0;\n}\n.retainbr[_v-2924823f]:after {\n  right: 0;\n}\n.retainb[_v-2924823f]:after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #ddd;\n  pointer-events: none;\n}\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx) {\n  .retainbt[_v-2924823f]:before,\n  .retainbb[_v-2924823f]:after {\n    -webkit-transform: scaleY(0.5);\n    transform: scaleY(0.5);\n  }\n  .retainbl[_v-2924823f]:before,\n  .retainbr[_v-2924823f]:after {\n    -webkit-transform: scaleX(0.5);\n    transform: scaleX(0.5);\n  }\n  .retainb[_v-2924823f]:after {\n    width: 200%;\n    height: 200%;\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n  .retainbt[_v-2924823f]:before,\n  .retainbl[_v-2924823f]:before,\n  .retainb[_v-2924823f]:after {\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n  }\n  .retainbb[_v-2924823f]:after,\n  .retainbr[_v-2924823f]:after {\n    -webkit-transform-origin: 100% 100%;\n    transform-origin: 100% 100%;\n  }\n}\n@media (-webkit-device-pixel-ratio: 1.5) {\n  .retainbt[_v-2924823f]:before,\n  .retainbb[_v-2924823f]:after {\n    -webkit-transform: scaleY(0.6666);\n    transform: scaleY(0.6666);\n  }\n  .retainbl[_v-2924823f]:before,\n  .retainbr[_v-2924823f]:after {\n    -webkit-transform: scaleX(0.6666);\n    transform: scaleX(0.6666);\n  }\n  .retainb[_v-2924823f]:after {\n    width: 150%;\n    height: 150%;\n    -webkit-transform: scale(0.6666);\n    transform: scale(0.6666);\n  }\n}\n@media (-webkit-device-pixel-ratio: 3) {\n  .retainbt[_v-2924823f]:before,\n  .retainbb[_v-2924823f]:after {\n    -webkit-transform: scaleY(0.3333);\n    transform: scaleY(0.3333);\n  }\n  .retainbl[_v-2924823f]:before,\n  .retainbr[_v-2924823f]:after {\n    -webkit-transform: scaleX(0.3333);\n    transform: scaleX(0.3333);\n  }\n  .retainb[_v-2924823f]:after {\n    width: 300%;\n    height: 300%;\n    -webkit-transform: scale(0.3333);\n    transform: scale(0.3333);\n  }\n}\n.g-layerWrap[_v-2924823f] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.f-bw[_v-2924823f] {\n  word-wrap: break-word;\n  overflow: hidden;\n}\n.m-alert[_v-2924823f] {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  width: 22.5rem;\n  margin-left: -135px;\n  background-color: #fff;\n  border-radius: 5px;\n}\n.m-alert .alert-mainWrap[_v-2924823f] {\n  padding: 1.66667rem 0;\n}\n.m-alert .alert-titleWrap .title[_v-2924823f] {\n  margin: 0;\n  line-height: 1.1em;\n  color: #333;\n  font-size: 1.41667rem;\n  font-weight: normal;\n  text-align: center;\n}\n.m-alert .alert-ctnWrap[_v-2924823f] {\n  padding: 1rem 0 0 0;\n}\n.m-alert .alert-ctnWrap .ctn[_v-2924823f] {\n  margin: 0;\n  line-height: 1.2em;\n  color: #333;\n  font-size: 1.08333rem;\n  text-align: center;\n}\n.m-alert .alert-btnWrap .btn[_v-2924823f] {\n  padding: 1rem 0;\n  width: 100%;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  text-align: center;\n  font-size: 1.5rem;\n  line-height: 1.1em;\n  color: #00BFBF;\n}\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//     <div class="g-layerWrap">
	//         <div class="m-alert">
	//             <div class="alert-mainWrap">
	//                 <div class="alert-titleWrap" v-show="title">
	//                     <h3 class="title f-bw">{{title}}</h3>
	//                 </div>
	//                 <div class="alert-ctnWrap" v-show="message">
	//                     <p class="ctn f-bw">
	//                         {{message}}
	//                     </p>
	//                 </div>
	//             </div>
	//             <div class="alert-btnWrap retainbt">
	//                 <button  class="btn" v-on:click="confirm()" type="button">{{confirmTxt}}</button>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <style>
	//     @media screen and (min-width: 320px) {
	//         html {
	//             font-size: 10px;
	//         }
	//     }
	//
	//     @media screen and (min-width: 375px) {
	//         html {
	//             font-size: 12px;
	//         }
	//     }
	//
	//     @media screen and(min-width: 414px) {
	//         html {
	//             font-size: 14px;
	//         }
	//     }
	//
	//     @media screen and(min-width: 600px) {
	//         html {
	//             font-size: 16px;
	//         }
	//     }
	// </style>
	//
	// <style  lang="less" scoped>
	//     @import "alert.less";
	// </style>
	//
	// <script type="text/ecmascript-6" lang="babel">
	exports.default = {};
	// </script>

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"g-layerWrap\" _v-2924823f=\"\">\n        <div class=\"m-alert\" _v-2924823f=\"\">\n            <div class=\"alert-mainWrap\" _v-2924823f=\"\">\n                <div class=\"alert-titleWrap\" v-show=\"title\" _v-2924823f=\"\">\n                    <h3 class=\"title f-bw\" _v-2924823f=\"\">{{title}}</h3>\n                </div>\n                <div class=\"alert-ctnWrap\" v-show=\"message\" _v-2924823f=\"\">\n                    <p class=\"ctn f-bw\" _v-2924823f=\"\">\n                        {{message}}\n                    </p>\n                </div>\n            </div>\n            <div class=\"alert-btnWrap retainbt\" _v-2924823f=\"\">\n                <button class=\"btn\" v-on:click=\"confirm()\" type=\"button\" _v-2924823f=\"\">{{confirmTxt}}</button>\n            </div>\n        </div>\n    </div>\n";

/***/ }
/******/ ]);