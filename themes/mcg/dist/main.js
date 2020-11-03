/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"carousel":"carousel"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/focus-visible/dist/focus-visible.js":
/*!**********************************************************!*\
  !*** ./node_modules/focus-visible/dist/focus-visible.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory() : undefined;
})(this, function () {
  'use strict';
  /**
   * Applies the :focus-visible polyfill at the given scope.
   * A scope in this case is either the top-level Document or a Shadow Root.
   *
   * @param {(Document|ShadowRoot)} scope
   * @see https://github.com/WICG/focus-visible
   */

  function applyFocusVisiblePolyfill(scope) {
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;
    var inputTypesWhitelist = {
      text: true,
      search: true,
      url: true,
      tel: true,
      email: true,
      password: true,
      number: true,
      date: true,
      month: true,
      week: true,
      time: true,
      datetime: true,
      'datetime-local': true
    };
    /**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */

    function isValidFocusTarget(el) {
      if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
        return true;
      }

      return false;
    }
    /**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */


    function focusTriggersKeyboardModality(el) {
      var type = el.type;
      var tagName = el.tagName;

      if (tagName === 'INPUT' && inputTypesWhitelist[type] && !el.readOnly) {
        return true;
      }

      if (tagName === 'TEXTAREA' && !el.readOnly) {
        return true;
      }

      if (el.isContentEditable) {
        return true;
      }

      return false;
    }
    /**
     * Add the `focus-visible` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */


    function addFocusVisibleClass(el) {
      if (el.classList.contains('focus-visible')) {
        return;
      }

      el.classList.add('focus-visible');
      el.setAttribute('data-focus-visible-added', '');
    }
    /**
     * Remove the `focus-visible` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */


    function removeFocusVisibleClass(el) {
      if (!el.hasAttribute('data-focus-visible-added')) {
        return;
      }

      el.classList.remove('focus-visible');
      el.removeAttribute('data-focus-visible-added');
    }
    /**
     * If the most recent user interaction was via the keyboard;
     * and the key press did not include a meta, alt/option, or control key;
     * then the modality is keyboard. Otherwise, the modality is not keyboard.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {KeyboardEvent} e
     */


    function onKeyDown(e) {
      if (e.metaKey || e.altKey || e.ctrlKey) {
        return;
      }

      if (isValidFocusTarget(scope.activeElement)) {
        addFocusVisibleClass(scope.activeElement);
      }

      hadKeyboardEvent = true;
    }
    /**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */


    function onPointerDown(e) {
      hadKeyboardEvent = false;
    }
    /**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */


    function onFocus(e) {
      // Prevent IE from focusing the document or HTML element.
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
        addFocusVisibleClass(e.target);
      }
    }
    /**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */


    function onBlur(e) {
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
        // To detect a tab/window switch, we look for a blur event followed
        // rapidly by a visibility change.
        // If we don't see a visibility change within 100ms, it's probably a
        // regular focus change.
        hadFocusVisibleRecently = true;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
          hadFocusVisibleRecently = false;
        }, 100);
        removeFocusVisibleClass(e.target);
      }
    }
    /**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */


    function onVisibilityChange(e) {
      if (document.visibilityState === 'hidden') {
        // If the tab becomes active again, the browser will handle calling focus
        // on the element (Safari actually calls it twice).
        // If this tab change caused a blur on an element with focus-visible,
        // re-apply the class when the user switches back to the tab.
        if (hadFocusVisibleRecently) {
          hadKeyboardEvent = true;
        }

        addInitialPointerMoveListeners();
      }
    }
    /**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */


    function addInitialPointerMoveListeners() {
      document.addEventListener('mousemove', onInitialPointerMove);
      document.addEventListener('mousedown', onInitialPointerMove);
      document.addEventListener('mouseup', onInitialPointerMove);
      document.addEventListener('pointermove', onInitialPointerMove);
      document.addEventListener('pointerdown', onInitialPointerMove);
      document.addEventListener('pointerup', onInitialPointerMove);
      document.addEventListener('touchmove', onInitialPointerMove);
      document.addEventListener('touchstart', onInitialPointerMove);
      document.addEventListener('touchend', onInitialPointerMove);
    }

    function removeInitialPointerMoveListeners() {
      document.removeEventListener('mousemove', onInitialPointerMove);
      document.removeEventListener('mousedown', onInitialPointerMove);
      document.removeEventListener('mouseup', onInitialPointerMove);
      document.removeEventListener('pointermove', onInitialPointerMove);
      document.removeEventListener('pointerdown', onInitialPointerMove);
      document.removeEventListener('pointerup', onInitialPointerMove);
      document.removeEventListener('touchmove', onInitialPointerMove);
      document.removeEventListener('touchstart', onInitialPointerMove);
      document.removeEventListener('touchend', onInitialPointerMove);
    }
    /**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */


    function onInitialPointerMove(e) {
      // Work around a Safari quirk that fires a mousemove on <html> whenever the
      // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
      if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
        return;
      }

      hadKeyboardEvent = false;
      removeInitialPointerMoveListeners();
    } // For some kinds of state, we are interested in changes at the global scope
    // only. For example, global pointer input, global key presses and global
    // visibility change should affect the state at every scope:


    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('visibilitychange', onVisibilityChange, true);
    addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
    // scope. This is because focus / blur events that originate from within a
    // shadow root are not re-dispatched from the host element if it was already
    // the active element in its own scope:

    scope.addEventListener('focus', onFocus, true);
    scope.addEventListener('blur', onBlur, true); // We detect that a node is a ShadowRoot by ensuring that it is a
    // DocumentFragment and also has a host property. This check covers native
    // implementation and polyfill implementation transparently. If we only cared
    // about the native implementation, we could just check if the scope was
    // an instance of a ShadowRoot.

    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
      // Since a ShadowRoot is a special kind of DocumentFragment, it does not
      // have a root element to add a class to. So, we add this attribute to the
      // host element instead:
      scope.host.setAttribute('data-js-focus-visible', '');
    } else if (scope.nodeType === Node.DOCUMENT_NODE) {
      document.documentElement.classList.add('js-focus-visible');
      document.documentElement.setAttribute('data-js-focus-visible', '');
    }
  } // It is important to wrap all references to global window and document in
  // these checks to support server-side rendering use cases
  // @see https://github.com/WICG/focus-visible/issues/199


  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Make the polyfill helper globally available. This can be used as a signal
    // to interested libraries that wish to coordinate with the polyfill for e.g.,
    // applying the polyfill to a shadow root:
    window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill; // Notify interested libraries of the polyfill's presence, in case the
    // polyfill was loaded lazily:

    var event;

    try {
      event = new CustomEvent('focus-visible-polyfill-ready');
    } catch (error) {
      // IE11 does not support using CustomEvent as a constructor directly:
      event = document.createEvent('CustomEvent');
      event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
    }

    window.dispatchEvent(event);
  }

  if (typeof document !== 'undefined') {
    // Apply the polyfill to the global document, so that no JavaScript
    // coordination is required to use the polyfill in the top-level document:
    applyFocusVisiblePolyfill(document);
  }
});

/***/ }),

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (window, factory) {
  var lazySizes = factory(window, window.document, Date);
  window.lazySizes = lazySizes;

  if ( true && module.exports) {
    module.exports = lazySizes;
  }
})(typeof window != 'undefined' ? window : {}, function l(window, document, Date) {
  // Pass in the windoe Date function also for SSR because the Date class can be lost
  'use strict';
  /*jshint eqnull:true */

  var lazysizes, lazySizesCfg;

  (function () {
    var prop;
    var lazySizesDefaults = {
      lazyClass: 'lazyload',
      loadedClass: 'lazyloaded',
      loadingClass: 'lazyloading',
      preloadClass: 'lazypreload',
      errorClass: 'lazyerror',
      //strictClass: 'lazystrict',
      autosizesClass: 'lazyautosizes',
      srcAttr: 'data-src',
      srcsetAttr: 'data-srcset',
      sizesAttr: 'data-sizes',
      //preloadAfterLoad: false,
      minSize: 40,
      customMedia: {},
      init: true,
      expFactor: 1.5,
      hFac: 0.8,
      loadMode: 2,
      loadHidden: true,
      ricTimeout: 0,
      throttleDelay: 125
    };
    lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

    for (prop in lazySizesDefaults) {
      if (!(prop in lazySizesCfg)) {
        lazySizesCfg[prop] = lazySizesDefaults[prop];
      }
    }
  })();

  if (!document || !document.getElementsByClassName) {
    return {
      init: function init() {},
      cfg: lazySizesCfg,
      noSupport: true
    };
  }

  var docElem = document.documentElement;
  var supportPicture = window.HTMLPictureElement;
  var _addEventListener = 'addEventListener';
  var _getAttribute = 'getAttribute';
  /**
   * Update to bind to window because 'this' becomes null during SSR
   * builds.
   */

  var addEventListener = window[_addEventListener].bind(window);

  var setTimeout = window.setTimeout;
  var requestAnimationFrame = window.requestAnimationFrame || setTimeout;
  var requestIdleCallback = window.requestIdleCallback;
  var regPicture = /^picture$/i;
  var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];
  var regClassCache = {};
  var forEach = Array.prototype.forEach;

  var hasClass = function hasClass(ele, cls) {
    if (!regClassCache[cls]) {
      regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    }

    return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
  };

  var addClass = function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
    }
  };

  var removeClass = function removeClass(ele, cls) {
    var reg;

    if (reg = hasClass(ele, cls)) {
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
    }
  };

  var addRemoveLoadEvents = function addRemoveLoadEvents(dom, fn, add) {
    var action = add ? _addEventListener : 'removeEventListener';

    if (add) {
      addRemoveLoadEvents(dom, fn);
    }

    loadEvents.forEach(function (evt) {
      dom[action](evt, fn);
    });
  };

  var triggerEvent = function triggerEvent(elem, name, detail, noBubbles, noCancelable) {
    var event = document.createEvent('Event');

    if (!detail) {
      detail = {};
    }

    detail.instance = lazysizes;
    event.initEvent(name, !noBubbles, !noCancelable);
    event.detail = detail;
    elem.dispatchEvent(event);
    return event;
  };

  var updatePolyfill = function updatePolyfill(el, full) {
    var polyfill;

    if (!supportPicture && (polyfill = window.picturefill || lazySizesCfg.pf)) {
      if (full && full.src && !el[_getAttribute]('srcset')) {
        el.setAttribute('srcset', full.src);
      }

      polyfill({
        reevaluate: true,
        elements: [el]
      });
    } else if (full && full.src) {
      el.src = full.src;
    }
  };

  var getCSS = function getCSS(elem, style) {
    return (getComputedStyle(elem, null) || {})[style];
  };

  var getWidth = function getWidth(elem, parent, width) {
    width = width || elem.offsetWidth;

    while (width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth) {
      width = parent.offsetWidth;
      parent = parent.parentNode;
    }

    return width;
  };

  var rAF = function () {
    var running, waiting;
    var firstFns = [];
    var secondFns = [];
    var fns = firstFns;

    var run = function run() {
      var runFns = fns;
      fns = firstFns.length ? secondFns : firstFns;
      running = true;
      waiting = false;

      while (runFns.length) {
        runFns.shift()();
      }

      running = false;
    };

    var rafBatch = function rafBatch(fn, queue) {
      if (running && !queue) {
        fn.apply(this, arguments);
      } else {
        fns.push(fn);

        if (!waiting) {
          waiting = true;
          (document.hidden ? setTimeout : requestAnimationFrame)(run);
        }
      }
    };

    rafBatch._lsFlush = run;
    return rafBatch;
  }();

  var rAFIt = function rAFIt(fn, simple) {
    return simple ? function () {
      rAF(fn);
    } : function () {
      var that = this;
      var args = arguments;
      rAF(function () {
        fn.apply(that, args);
      });
    };
  };

  var throttle = function throttle(fn) {
    var running;
    var lastTime = 0;
    var gDelay = lazySizesCfg.throttleDelay;
    var rICTimeout = lazySizesCfg.ricTimeout;

    var run = function run() {
      running = false;
      lastTime = Date.now();
      fn();
    };

    var idleCallback = requestIdleCallback && rICTimeout > 49 ? function () {
      requestIdleCallback(run, {
        timeout: rICTimeout
      });

      if (rICTimeout !== lazySizesCfg.ricTimeout) {
        rICTimeout = lazySizesCfg.ricTimeout;
      }
    } : rAFIt(function () {
      setTimeout(run);
    }, true);
    return function (isPriority) {
      var delay;

      if (isPriority = isPriority === true) {
        rICTimeout = 33;
      }

      if (running) {
        return;
      }

      running = true;
      delay = gDelay - (Date.now() - lastTime);

      if (delay < 0) {
        delay = 0;
      }

      if (isPriority || delay < 9) {
        idleCallback();
      } else {
        setTimeout(idleCallback, delay);
      }
    };
  }; //based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html


  var debounce = function debounce(func) {
    var timeout, timestamp;
    var wait = 99;

    var run = function run() {
      timeout = null;
      func();
    };

    var later = function later() {
      var last = Date.now() - timestamp;

      if (last < wait) {
        setTimeout(later, wait - last);
      } else {
        (requestIdleCallback || run)(run);
      }
    };

    return function () {
      timestamp = Date.now();

      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
    };
  };

  var loader = function () {
    var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;
    var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;
    var regImg = /^img$/i;
    var regIframe = /^iframe$/i;
    var supportScroll = 'onscroll' in window && !/(gle|ing)bot/.test(navigator.userAgent);
    var shrinkExpand = 0;
    var currentExpand = 0;
    var isLoading = 0;
    var lowRuns = -1;

    var resetPreloading = function resetPreloading(e) {
      isLoading--;

      if (!e || isLoading < 0 || !e.target) {
        isLoading = 0;
      }
    };

    var isVisible = function isVisible(elem) {
      if (isBodyHidden == null) {
        isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
      }

      return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
    };

    var isNestedVisible = function isNestedVisible(elem, elemExpand) {
      var outerRect;
      var parent = elem;
      var visible = isVisible(elem);
      eLtop -= elemExpand;
      eLbottom += elemExpand;
      eLleft -= elemExpand;
      eLright += elemExpand;

      while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
        visible = (getCSS(parent, 'opacity') || 1) > 0;

        if (visible && getCSS(parent, 'overflow') != 'visible') {
          outerRect = parent.getBoundingClientRect();
          visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
        }
      }

      return visible;
    };

    var checkElements = function checkElements() {
      var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal, defaultExpand, preloadExpand, hFac;
      var lazyloadElems = lazysizes.elements;

      if ((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {
        i = 0;
        lowRuns++;

        for (; i < eLlen; i++) {
          if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
            continue;
          }

          if (!supportScroll || lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i])) {
            unveilElement(lazyloadElems[i]);
            continue;
          }

          if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
            elemExpand = currentExpand;
          }

          if (!defaultExpand) {
            defaultExpand = !lazySizesCfg.expand || lazySizesCfg.expand < 1 ? docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 : lazySizesCfg.expand;
            lazysizes._defEx = defaultExpand;
            preloadExpand = defaultExpand * lazySizesCfg.expFactor;
            hFac = lazySizesCfg.hFac;
            isBodyHidden = null;

            if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
              currentExpand = preloadExpand;
              lowRuns = 0;
            } else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
              currentExpand = defaultExpand;
            } else {
              currentExpand = shrinkExpand;
            }
          }

          if (beforeExpandVal !== elemExpand) {
            eLvW = innerWidth + elemExpand * hFac;
            elvH = innerHeight + elemExpand;
            elemNegativeExpand = elemExpand * -1;
            beforeExpandVal = elemExpand;
          }

          rect = lazyloadElems[i].getBoundingClientRect();

          if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
            unveilElement(lazyloadElems[i]);
            loadedSomething = true;

            if (isLoading > 9) {
              break;
            }
          } else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesCfg.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto'))) {
            autoLoadElem = preloadElems[0] || lazyloadElems[i];
          }
        }

        if (autoLoadElem && !loadedSomething) {
          unveilElement(autoLoadElem);
        }
      }
    };

    var throttledCheckElements = throttle(checkElements);

    var switchLoadingClass = function switchLoadingClass(e) {
      var elem = e.target;

      if (elem._lazyCache) {
        delete elem._lazyCache;
        return;
      }

      resetPreloading(e);
      addClass(elem, lazySizesCfg.loadedClass);
      removeClass(elem, lazySizesCfg.loadingClass);
      addRemoveLoadEvents(elem, rafSwitchLoadingClass);
      triggerEvent(elem, 'lazyloaded');
    };

    var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);

    var rafSwitchLoadingClass = function rafSwitchLoadingClass(e) {
      rafedSwitchLoadingClass({
        target: e.target
      });
    };

    var changeIframeSrc = function changeIframeSrc(elem, src) {
      try {
        elem.contentWindow.location.replace(src);
      } catch (e) {
        elem.src = src;
      }
    };

    var handleSources = function handleSources(source) {
      var customMedia;

      var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

      if (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
        source.setAttribute('media', customMedia);
      }

      if (sourceSrcset) {
        source.setAttribute('srcset', sourceSrcset);
      }
    };

    var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
      var src, srcset, parent, isPicture, event, firesLoad;

      if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {
        if (sizes) {
          if (isAuto) {
            addClass(elem, lazySizesCfg.autosizesClass);
          } else {
            elem.setAttribute('sizes', sizes);
          }
        }

        srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
        src = elem[_getAttribute](lazySizesCfg.srcAttr);

        if (isImg) {
          parent = elem.parentNode;
          isPicture = parent && regPicture.test(parent.nodeName || '');
        }

        firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);
        event = {
          target: elem
        };
        addClass(elem, lazySizesCfg.loadingClass);

        if (firesLoad) {
          clearTimeout(resetPreloadingTimer);
          resetPreloadingTimer = setTimeout(resetPreloading, 2500);
          addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
        }

        if (isPicture) {
          forEach.call(parent.getElementsByTagName('source'), handleSources);
        }

        if (srcset) {
          elem.setAttribute('srcset', srcset);
        } else if (src && !isPicture) {
          if (regIframe.test(elem.nodeName)) {
            changeIframeSrc(elem, src);
          } else {
            elem.src = src;
          }
        }

        if (isImg && (srcset || isPicture)) {
          updatePolyfill(elem, {
            src: src
          });
        }
      }

      if (elem._lazyRace) {
        delete elem._lazyRace;
      }

      removeClass(elem, lazySizesCfg.lazyClass);
      rAF(function () {
        // Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
        var isLoaded = elem.complete && elem.naturalWidth > 1;

        if (!firesLoad || isLoaded) {
          if (isLoaded) {
            addClass(elem, 'ls-is-cached');
          }

          switchLoadingClass(event);
          elem._lazyCache = true;
          setTimeout(function () {
            if ('_lazyCache' in elem) {
              delete elem._lazyCache;
            }
          }, 9);
        }

        if (elem.loading == 'lazy') {
          isLoading--;
        }
      }, true);
    });

    var unveilElement = function unveilElement(elem) {
      if (elem._lazyRace) {
        return;
      }

      var detail;
      var isImg = regImg.test(elem.nodeName); //allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")

      var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));

      var isAuto = sizes == 'auto';

      if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)) {
        return;
      }

      detail = triggerEvent(elem, 'lazyunveilread').detail;

      if (isAuto) {
        autoSizer.updateElem(elem, true, elem.offsetWidth);
      }

      elem._lazyRace = true;
      isLoading++;
      lazyUnveil(elem, detail, isAuto, sizes, isImg);
    };

    var afterScroll = debounce(function () {
      lazySizesCfg.loadMode = 3;
      throttledCheckElements();
    });

    var altLoadmodeScrollListner = function altLoadmodeScrollListner() {
      if (lazySizesCfg.loadMode == 3) {
        lazySizesCfg.loadMode = 2;
      }

      afterScroll();
    };

    var onload = function onload() {
      if (isCompleted) {
        return;
      }

      if (Date.now() - started < 999) {
        setTimeout(onload, 999);
        return;
      }

      isCompleted = true;
      lazySizesCfg.loadMode = 3;
      throttledCheckElements();
      addEventListener('scroll', altLoadmodeScrollListner, true);
    };

    return {
      _: function _() {
        started = Date.now();
        lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
        preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);
        addEventListener('scroll', throttledCheckElements, true);
        addEventListener('resize', throttledCheckElements, true);
        addEventListener('pageshow', function (e) {
          if (e.persisted) {
            var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

            if (loadingElements.length && loadingElements.forEach) {
              requestAnimationFrame(function () {
                loadingElements.forEach(function (img) {
                  if (img.complete) {
                    unveilElement(img);
                  }
                });
              });
            }
          }
        });

        if (window.MutationObserver) {
          new MutationObserver(throttledCheckElements).observe(docElem, {
            childList: true,
            subtree: true,
            attributes: true
          });
        } else {
          docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);

          docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);

          setInterval(throttledCheckElements, 999);
        }

        addEventListener('hashchange', throttledCheckElements, true); //, 'fullscreenchange'

        ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function (name) {
          document[_addEventListener](name, throttledCheckElements, true);
        });

        if (/d$|^c/.test(document.readyState)) {
          onload();
        } else {
          addEventListener('load', onload);

          document[_addEventListener]('DOMContentLoaded', throttledCheckElements);

          setTimeout(onload, 20000);
        }

        if (lazysizes.elements.length) {
          checkElements();

          rAF._lsFlush();
        } else {
          throttledCheckElements();
        }
      },
      checkElems: throttledCheckElements,
      unveil: unveilElement,
      _aLSL: altLoadmodeScrollListner
    };
  }();

  var autoSizer = function () {
    var autosizesElems;
    var sizeElement = rAFIt(function (elem, parent, event, width) {
      var sources, i, len;
      elem._lazysizesWidth = width;
      width += 'px';
      elem.setAttribute('sizes', width);

      if (regPicture.test(parent.nodeName || '')) {
        sources = parent.getElementsByTagName('source');

        for (i = 0, len = sources.length; i < len; i++) {
          sources[i].setAttribute('sizes', width);
        }
      }

      if (!event.detail.dataAttr) {
        updatePolyfill(elem, event.detail);
      }
    });

    var getSizeElement = function getSizeElement(elem, dataAttr, width) {
      var event;
      var parent = elem.parentNode;

      if (parent) {
        width = getWidth(elem, parent, width);
        event = triggerEvent(elem, 'lazybeforesizes', {
          width: width,
          dataAttr: !!dataAttr
        });

        if (!event.defaultPrevented) {
          width = event.detail.width;

          if (width && width !== elem._lazysizesWidth) {
            sizeElement(elem, parent, event, width);
          }
        }
      }
    };

    var updateElementsSizes = function updateElementsSizes() {
      var i;
      var len = autosizesElems.length;

      if (len) {
        i = 0;

        for (; i < len; i++) {
          getSizeElement(autosizesElems[i]);
        }
      }
    };

    var debouncedUpdateElementsSizes = debounce(updateElementsSizes);
    return {
      _: function _() {
        autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
        addEventListener('resize', debouncedUpdateElementsSizes);
      },
      checkElems: debouncedUpdateElementsSizes,
      updateElem: getSizeElement
    };
  }();

  var init = function init() {
    if (!init.i && document.getElementsByClassName) {
      init.i = true;

      autoSizer._();

      loader._();
    }
  };

  setTimeout(function () {
    if (lazySizesCfg.init) {
      init();
    }
  });
  lazysizes = {
    cfg: lazySizesCfg,
    autoSizer: autoSizer,
    loader: loader,
    init: init,
    uP: updatePolyfill,
    aC: addClass,
    rC: removeClass,
    hC: hasClass,
    fire: triggerEvent,
    gW: getWidth,
    rAF: rAF
  };
  return lazysizes;
});

/***/ }),

/***/ "./node_modules/lazysizes/plugins/bgset/ls.bgset.js":
/*!**********************************************************!*\
  !*** ./node_modules/lazysizes/plugins/bgset/ls.bgset.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (window, factory) {
  var globalInstall = function globalInstall() {
    factory(window.lazySizes);
    window.removeEventListener('lazyunveilread', globalInstall, true);
  };

  factory = factory.bind(null, window, window.document);

  if ( true && module.exports) {
    factory(__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js"));
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function (window, document, lazySizes) {
  'use strict';

  if (!window.addEventListener) {
    return;
  }

  var lazySizesCfg = lazySizes.cfg;
  var regWhite = /\s+/g;
  var regSplitSet = /\s*\|\s+|\s+\|\s*/g;
  var regSource = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/;
  var regType = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/;
  var regBgUrlEscape = /\(|\)|'/;
  var allowedBackgroundSize = {
    contain: 1,
    cover: 1
  };

  var proxyWidth = function proxyWidth(elem) {
    var width = lazySizes.gW(elem, elem.parentNode);

    if (!elem._lazysizesWidth || width > elem._lazysizesWidth) {
      elem._lazysizesWidth = width;
    }

    return elem._lazysizesWidth;
  };

  var getBgSize = function getBgSize(elem) {
    var bgSize;
    bgSize = (getComputedStyle(elem) || {
      getPropertyValue: function getPropertyValue() {}
    }).getPropertyValue('background-size');

    if (!allowedBackgroundSize[bgSize] && allowedBackgroundSize[elem.style.backgroundSize]) {
      bgSize = elem.style.backgroundSize;
    }

    return bgSize;
  };

  var setTypeOrMedia = function setTypeOrMedia(source, match) {
    if (match) {
      var typeMatch = match.match(regType);

      if (typeMatch && typeMatch[1]) {
        source.setAttribute('type', typeMatch[1]);
      } else {
        source.setAttribute('media', lazySizesCfg.customMedia[match] || match);
      }
    }
  };

  var createPicture = function createPicture(sets, elem, img) {
    var picture = document.createElement('picture');
    var sizes = elem.getAttribute(lazySizesCfg.sizesAttr);
    var ratio = elem.getAttribute('data-ratio');
    var optimumx = elem.getAttribute('data-optimumx');

    if (elem._lazybgset && elem._lazybgset.parentNode == elem) {
      elem.removeChild(elem._lazybgset);
    }

    Object.defineProperty(img, '_lazybgset', {
      value: elem,
      writable: true
    });
    Object.defineProperty(elem, '_lazybgset', {
      value: picture,
      writable: true
    });
    sets = sets.replace(regWhite, ' ').split(regSplitSet);
    picture.style.display = 'none';
    img.className = lazySizesCfg.lazyClass;

    if (sets.length == 1 && !sizes) {
      sizes = 'auto';
    }

    sets.forEach(function (set) {
      var match;
      var source = document.createElement('source');

      if (sizes && sizes != 'auto') {
        source.setAttribute('sizes', sizes);
      }

      if (match = set.match(regSource)) {
        source.setAttribute(lazySizesCfg.srcsetAttr, match[1]);
        setTypeOrMedia(source, match[2]);
        setTypeOrMedia(source, match[3]);
      } else {
        source.setAttribute(lazySizesCfg.srcsetAttr, set);
      }

      picture.appendChild(source);
    });

    if (sizes) {
      img.setAttribute(lazySizesCfg.sizesAttr, sizes);
      elem.removeAttribute(lazySizesCfg.sizesAttr);
      elem.removeAttribute('sizes');
    }

    if (optimumx) {
      img.setAttribute('data-optimumx', optimumx);
    }

    if (ratio) {
      img.setAttribute('data-ratio', ratio);
    }

    picture.appendChild(img);
    elem.appendChild(picture);
  };

  var proxyLoad = function proxyLoad(e) {
    if (!e.target._lazybgset) {
      return;
    }

    var image = e.target;
    var elem = image._lazybgset;
    var bg = image.currentSrc || image.src;

    if (bg) {
      var event = lazySizes.fire(elem, 'bgsetproxy', {
        src: bg,
        useSrc: regBgUrlEscape.test(bg) ? JSON.stringify(bg) : bg
      });

      if (!event.defaultPrevented) {
        elem.style.backgroundImage = 'url(' + event.detail.useSrc + ')';
      }
    }

    if (image._lazybgsetLoading) {
      lazySizes.fire(elem, '_lazyloaded', {}, false, true);
      delete image._lazybgsetLoading;
    }
  };

  addEventListener('lazybeforeunveil', function (e) {
    var set, image, elem;

    if (e.defaultPrevented || !(set = e.target.getAttribute('data-bgset'))) {
      return;
    }

    elem = e.target;
    image = document.createElement('img');
    image.alt = '';
    image._lazybgsetLoading = true;
    e.detail.firesLoad = true;
    createPicture(set, elem, image);
    setTimeout(function () {
      lazySizes.loader.unveil(image);
      lazySizes.rAF(function () {
        lazySizes.fire(image, '_lazyloaded', {}, true, true);

        if (image.complete) {
          proxyLoad({
            target: image
          });
        }
      });
    });
  });
  document.addEventListener('load', proxyLoad, true);
  window.addEventListener('lazybeforesizes', function (e) {
    if (e.detail.instance != lazySizes) {
      return;
    }

    if (e.target._lazybgset && e.detail.dataAttr) {
      var elem = e.target._lazybgset;
      var bgSize = getBgSize(elem);

      if (allowedBackgroundSize[bgSize]) {
        e.target._lazysizesParentFit = bgSize;
        lazySizes.rAF(function () {
          e.target.setAttribute('data-parent-fit', bgSize);

          if (e.target._lazysizesParentFit) {
            delete e.target._lazysizesParentFit;
          }
        });
      }
    }
  }, true);
  document.documentElement.addEventListener('lazybeforesizes', function (e) {
    if (e.defaultPrevented || !e.target._lazybgset || e.detail.instance != lazySizes) {
      return;
    }

    e.detail.width = proxyWidth(e.target._lazybgset);
  });
});

/***/ }),

/***/ "./node_modules/lazysizes/plugins/object-fit/ls.object-fit.js":
/*!********************************************************************!*\
  !*** ./node_modules/lazysizes/plugins/object-fit/ls.object-fit.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (window, factory) {
  if (!window) {
    return;
  }

  var globalInstall = function globalInstall(initialEvent) {
    factory(window.lazySizes, initialEvent);
    window.removeEventListener('lazyunveilread', globalInstall, true);
  };

  factory = factory.bind(null, window, window.document);

  if ( true && module.exports) {
    factory(__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js"));
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window != 'undefined' ? window : 0, function (window, document, lazySizes, initialEvent) {
  'use strict';

  var cloneElementClass;
  var style = document.createElement('a').style;
  var fitSupport = ('objectFit' in style);
  var positionSupport = fitSupport && 'objectPosition' in style;
  var regCssFit = /object-fit["']*\s*:\s*["']*(contain|cover)/;
  var regCssPosition = /object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/;
  var blankSrc = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  var regBgUrlEscape = /\(|\)|'/;
  var positionDefaults = {
    center: 'center',
    '50% 50%': 'center'
  };

  function getObject(element) {
    var css = getComputedStyle(element, null) || {};
    var content = css.fontFamily || '';
    var objectFit = content.match(regCssFit) || '';
    var objectPosition = objectFit && content.match(regCssPosition) || '';

    if (objectPosition) {
      objectPosition = objectPosition[1];
    }

    return {
      fit: objectFit && objectFit[1] || '',
      position: positionDefaults[objectPosition] || objectPosition || 'center'
    };
  }

  function generateStyleClass() {
    if (cloneElementClass) {
      return;
    }

    var styleElement = document.createElement('style');
    cloneElementClass = lazySizes.cfg.objectFitClass || 'lazysizes-display-clone';
    document.querySelector('head').appendChild(styleElement);
  }

  function removePrevClone(element) {
    var prev = element.previousElementSibling;

    if (prev && lazySizes.hC(prev, cloneElementClass)) {
      prev.parentNode.removeChild(prev);
      element.style.position = prev.getAttribute('data-position') || '';
      element.style.visibility = prev.getAttribute('data-visibility') || '';
    }
  }

  function initFix(element, config) {
    var switchClassesAdded, addedSrc, styleElement, styleElementStyle;
    var lazysizesCfg = lazySizes.cfg;

    var onChange = function onChange() {
      var src = element.currentSrc || element.src;

      if (src && addedSrc !== src) {
        addedSrc = src;
        styleElementStyle.backgroundImage = 'url(' + (regBgUrlEscape.test(src) ? JSON.stringify(src) : src) + ')';

        if (!switchClassesAdded) {
          switchClassesAdded = true;
          lazySizes.rC(styleElement, lazysizesCfg.loadingClass);
          lazySizes.aC(styleElement, lazysizesCfg.loadedClass);
        }
      }
    };

    var rafedOnChange = function rafedOnChange() {
      lazySizes.rAF(onChange);
    };

    element._lazysizesParentFit = config.fit;
    element.addEventListener('lazyloaded', rafedOnChange, true);
    element.addEventListener('load', rafedOnChange, true);
    lazySizes.rAF(function () {
      var hideElement = element;
      var container = element.parentNode;

      if (container.nodeName.toUpperCase() == 'PICTURE') {
        hideElement = container;
        container = container.parentNode;
      }

      removePrevClone(hideElement);

      if (!cloneElementClass) {
        generateStyleClass();
      }

      styleElement = element.cloneNode(false);
      styleElementStyle = styleElement.style;
      styleElement.addEventListener('load', function () {
        var curSrc = styleElement.currentSrc || styleElement.src;

        if (curSrc && curSrc != blankSrc) {
          styleElement.src = blankSrc;
          styleElement.srcset = '';
        }
      });
      lazySizes.rC(styleElement, lazysizesCfg.loadedClass);
      lazySizes.rC(styleElement, lazysizesCfg.lazyClass);
      lazySizes.rC(styleElement, lazysizesCfg.autosizesClass);
      lazySizes.aC(styleElement, lazysizesCfg.loadingClass);
      lazySizes.aC(styleElement, cloneElementClass);
      ['data-parent-fit', 'data-parent-container', 'data-object-fit-polyfilled', lazysizesCfg.srcsetAttr, lazysizesCfg.srcAttr].forEach(function (attr) {
        styleElement.removeAttribute(attr);
      });
      styleElement.src = blankSrc;
      styleElement.srcset = '';
      styleElementStyle.backgroundRepeat = 'no-repeat';
      styleElementStyle.backgroundPosition = config.position;
      styleElementStyle.backgroundSize = config.fit;
      styleElement.setAttribute('data-position', hideElement.style.position);
      styleElement.setAttribute('data-visibility', hideElement.style.visibility);
      hideElement.style.visibility = 'hidden';
      hideElement.style.position = 'absolute';
      element.setAttribute('data-parent-fit', config.fit);
      element.setAttribute('data-parent-container', 'prev');
      element.setAttribute('data-object-fit-polyfilled', '');
      element._objectFitPolyfilledDisplay = styleElement;
      container.insertBefore(styleElement, hideElement);

      if (element._lazysizesParentFit) {
        delete element._lazysizesParentFit;
      }

      if (element.complete) {
        onChange();
      }
    });
  }

  if (!fitSupport || !positionSupport) {
    var onRead = function onRead(e) {
      if (e.detail.instance != lazySizes) {
        return;
      }

      var element = e.target;
      var obj = getObject(element);

      if (obj.fit && (!fitSupport || obj.position != 'center')) {
        initFix(element, obj);
        return true;
      }

      return false;
    };

    window.addEventListener('lazybeforesizes', function (e) {
      if (e.detail.instance != lazySizes) {
        return;
      }

      var element = e.target;

      if (element.getAttribute('data-object-fit-polyfilled') != null && !element._objectFitPolyfilledDisplay) {
        if (!onRead(e)) {
          lazySizes.rAF(function () {
            element.removeAttribute('data-object-fit-polyfilled');
          });
        }
      }
    });
    window.addEventListener('lazyunveilread', onRead, true);

    if (initialEvent && initialEvent.detail) {
      onRead(initialEvent);
    }
  }
});

/***/ }),

/***/ "./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js":
/*!********************************************************************!*\
  !*** ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (window, factory) {
  if (!window) {
    return;
  }

  var globalInstall = function globalInstall() {
    factory(window.lazySizes);
    window.removeEventListener('lazyunveilread', globalInstall, true);
  };

  factory = factory.bind(null, window, window.document);

  if ( true && module.exports) {
    factory(__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js"));
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window != 'undefined' ? window : 0, function (window, document, lazySizes) {
  'use strict';

  if (!window.addEventListener) {
    return;
  }

  var regDescriptors = /\s+(\d+)(w|h)\s+(\d+)(w|h)/;
  var regCssFit = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/;
  var regCssObject = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/;
  var regPicture = /^picture$/i;
  var cfg = lazySizes.cfg;

  var getCSS = function getCSS(elem) {
    return getComputedStyle(elem, null) || {};
  };

  var parentFit = {
    getParent: function getParent(element, parentSel) {
      var parent = element;
      var parentNode = element.parentNode;

      if ((!parentSel || parentSel == 'prev') && parentNode && regPicture.test(parentNode.nodeName || '')) {
        parentNode = parentNode.parentNode;
      }

      if (parentSel != 'self') {
        if (parentSel == 'prev') {
          parent = element.previousElementSibling;
        } else if (parentSel && (parentNode.closest || window.jQuery)) {
          parent = (parentNode.closest ? parentNode.closest(parentSel) : jQuery(parentNode).closest(parentSel)[0]) || parentNode;
        } else {
          parent = parentNode;
        }
      }

      return parent;
    },
    getFit: function getFit(element) {
      var tmpMatch, parentObj;
      var css = getCSS(element);
      var content = css.content || css.fontFamily;
      var obj = {
        fit: element._lazysizesParentFit || element.getAttribute('data-parent-fit')
      };

      if (!obj.fit && content && (tmpMatch = content.match(regCssFit))) {
        obj.fit = tmpMatch[1];
      }

      if (obj.fit) {
        parentObj = element._lazysizesParentContainer || element.getAttribute('data-parent-container');

        if (!parentObj && content && (tmpMatch = content.match(regCssObject))) {
          parentObj = tmpMatch[1];
        }

        obj.parent = parentFit.getParent(element, parentObj);
      } else {
        obj.fit = css.objectFit;
      }

      return obj;
    },
    getImageRatio: function getImageRatio(element) {
      var i, srcset, media, ratio, match, width, height;
      var parent = element.parentNode;
      var elements = parent && regPicture.test(parent.nodeName || '') ? parent.querySelectorAll('source, img') : [element];

      for (i = 0; i < elements.length; i++) {
        element = elements[i];
        srcset = element.getAttribute(cfg.srcsetAttr) || element.getAttribute('srcset') || element.getAttribute('data-pfsrcset') || element.getAttribute('data-risrcset') || '';
        media = element._lsMedia || element.getAttribute('media');
        media = cfg.customMedia[element.getAttribute('data-media') || media] || media;

        if (srcset && (!media || (window.matchMedia && matchMedia(media) || {}).matches)) {
          ratio = parseFloat(element.getAttribute('data-aspectratio'));

          if (!ratio) {
            match = srcset.match(regDescriptors);

            if (match) {
              if (match[2] == 'w') {
                width = match[1];
                height = match[3];
              } else {
                width = match[3];
                height = match[1];
              }
            } else {
              width = element.getAttribute('width');
              height = element.getAttribute('height');
            }

            ratio = width / height;
          }

          break;
        }
      }

      return ratio;
    },
    calculateSize: function calculateSize(element, width) {
      var displayRatio, height, imageRatio, retWidth;
      var fitObj = this.getFit(element);
      var fit = fitObj.fit;
      var fitElem = fitObj.parent;

      if (fit != 'width' && (fit != 'contain' && fit != 'cover' || !(imageRatio = this.getImageRatio(element)))) {
        return width;
      }

      if (fitElem) {
        width = fitElem.clientWidth;
      } else {
        fitElem = element;
      }

      retWidth = width;

      if (fit == 'width') {
        retWidth = width;
      } else {
        height = fitElem.clientHeight;

        if ((displayRatio = width / height) && (fit == 'cover' && displayRatio < imageRatio || fit == 'contain' && displayRatio > imageRatio)) {
          retWidth = width * (imageRatio / displayRatio);
        }
      }

      return retWidth;
    }
  };
  lazySizes.parentFit = parentFit;
  document.addEventListener('lazybeforesizes', function (e) {
    if (e.defaultPrevented || e.detail.instance != lazySizes) {
      return;
    }

    var element = e.target;
    e.detail.width = parentFit.calculateSize(element, e.detail.width);
  });
});

/***/ }),

/***/ "./node_modules/lazysizes/plugins/respimg/ls.respimg.js":
/*!**************************************************************!*\
  !*** ./node_modules/lazysizes/plugins/respimg/ls.respimg.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (window, factory) {
  if (!window) {
    return;
  }

  var globalInstall = function globalInstall() {
    factory(window.lazySizes);
    window.removeEventListener('lazyunveilread', globalInstall, true);
  };

  factory = factory.bind(null, window, window.document);

  if ( true && module.exports) {
    factory(__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js"));
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window != 'undefined' ? window : 0, function (window, document, lazySizes) {
  /*jshint eqnull:true */
  'use strict';

  var polyfill;
  var lazySizesCfg = lazySizes.cfg;
  var img = document.createElement('img');
  var supportSrcset = 'sizes' in img && 'srcset' in img;
  var regHDesc = /\s+\d+h/g;

  var fixEdgeHDescriptor = function () {
    var regDescriptors = /\s+(\d+)(w|h)\s+(\d+)(w|h)/;
    var forEach = Array.prototype.forEach;
    return function () {
      var img = document.createElement('img');

      var removeHDescriptors = function removeHDescriptors(source) {
        var ratio, match;
        var srcset = source.getAttribute(lazySizesCfg.srcsetAttr);

        if (srcset) {
          if (match = srcset.match(regDescriptors)) {
            if (match[2] == 'w') {
              ratio = match[1] / match[3];
            } else {
              ratio = match[3] / match[1];
            }

            if (ratio) {
              source.setAttribute('data-aspectratio', ratio);
            }

            source.setAttribute(lazySizesCfg.srcsetAttr, srcset.replace(regHDesc, ''));
          }
        }
      };

      var handler = function handler(e) {
        if (e.detail.instance != lazySizes) {
          return;
        }

        var picture = e.target.parentNode;

        if (picture && picture.nodeName == 'PICTURE') {
          forEach.call(picture.getElementsByTagName('source'), removeHDescriptors);
        }

        removeHDescriptors(e.target);
      };

      var test = function test() {
        if (!!img.currentSrc) {
          document.removeEventListener('lazybeforeunveil', handler);
        }
      };

      document.addEventListener('lazybeforeunveil', handler);
      img.onload = test;
      img.onerror = test;
      img.srcset = 'data:,a 1w 1h';

      if (img.complete) {
        test();
      }
    };
  }();

  if (!lazySizesCfg.supportsType) {
    lazySizesCfg.supportsType = function (type
    /*, elem*/
    ) {
      return !type;
    };
  }

  if (window.HTMLPictureElement && supportSrcset) {
    if (!lazySizes.hasHDescriptorFix && document.msElementsFromPoint) {
      lazySizes.hasHDescriptorFix = true;
      fixEdgeHDescriptor();
    }

    return;
  }

  if (window.picturefill || lazySizesCfg.pf) {
    return;
  }

  lazySizesCfg.pf = function (options) {
    var i, len;

    if (window.picturefill) {
      return;
    }

    for (i = 0, len = options.elements.length; i < len; i++) {
      polyfill(options.elements[i]);
    }
  }; // partial polyfill


  polyfill = function () {
    var ascendingSort = function ascendingSort(a, b) {
      return a.w - b.w;
    };

    var regPxLength = /^\s*\d+\.*\d*px\s*$/;

    var reduceCandidate = function reduceCandidate(srces) {
      var lowerCandidate, bonusFactor;
      var len = srces.length;
      var candidate = srces[len - 1];
      var i = 0;

      for (i; i < len; i++) {
        candidate = srces[i];
        candidate.d = candidate.w / srces.w;

        if (candidate.d >= srces.d) {
          if (!candidate.cached && (lowerCandidate = srces[i - 1]) && lowerCandidate.d > srces.d - 0.13 * Math.pow(srces.d, 2.2)) {
            bonusFactor = Math.pow(lowerCandidate.d - 0.6, 1.6);

            if (lowerCandidate.cached) {
              lowerCandidate.d += 0.15 * bonusFactor;
            }

            if (lowerCandidate.d + (candidate.d - srces.d) * bonusFactor > srces.d) {
              candidate = lowerCandidate;
            }
          }

          break;
        }
      }

      return candidate;
    };

    var parseWsrcset = function () {
      var candidates;
      var regWCandidates = /(([^,\s].[^\s]+)\s+(\d+)w)/g;
      var regMultiple = /\s/;

      var addCandidate = function addCandidate(match, candidate, url, wDescriptor) {
        candidates.push({
          c: candidate,
          u: url,
          w: wDescriptor * 1
        });
      };

      return function (input) {
        candidates = [];
        input = input.trim();
        input.replace(regHDesc, '').replace(regWCandidates, addCandidate);

        if (!candidates.length && input && !regMultiple.test(input)) {
          candidates.push({
            c: input,
            u: input,
            w: 99
          });
        }

        return candidates;
      };
    }();

    var runMatchMedia = function runMatchMedia() {
      if (runMatchMedia.init) {
        return;
      }

      runMatchMedia.init = true;
      addEventListener('resize', function () {
        var timer;
        var matchMediaElems = document.getElementsByClassName('lazymatchmedia');

        var run = function run() {
          var i, len;

          for (i = 0, len = matchMediaElems.length; i < len; i++) {
            polyfill(matchMediaElems[i]);
          }
        };

        return function () {
          clearTimeout(timer);
          timer = setTimeout(run, 66);
        };
      }());
    };

    var createSrcset = function createSrcset(elem, isImage) {
      var parsedSet;
      var srcSet = elem.getAttribute('srcset') || elem.getAttribute(lazySizesCfg.srcsetAttr);

      if (!srcSet && isImage) {
        srcSet = !elem._lazypolyfill ? elem.getAttribute(lazySizesCfg.srcAttr) || elem.getAttribute('src') : elem._lazypolyfill._set;
      }

      if (!elem._lazypolyfill || elem._lazypolyfill._set != srcSet) {
        parsedSet = parseWsrcset(srcSet || '');

        if (isImage && elem.parentNode) {
          parsedSet.isPicture = elem.parentNode.nodeName.toUpperCase() == 'PICTURE';

          if (parsedSet.isPicture) {
            if (window.matchMedia) {
              lazySizes.aC(elem, 'lazymatchmedia');
              runMatchMedia();
            }
          }
        }

        parsedSet._set = srcSet;
        Object.defineProperty(elem, '_lazypolyfill', {
          value: parsedSet,
          writable: true
        });
      }
    };

    var getX = function getX(elem) {
      var dpr = window.devicePixelRatio || 1;
      var optimum = lazySizes.getX && lazySizes.getX(elem);
      return Math.min(optimum || dpr, 2.5, dpr);
    };

    var _matchesMedia = function matchesMedia(media) {
      if (window.matchMedia) {
        _matchesMedia = function matchesMedia(media) {
          return !media || (matchMedia(media) || {}).matches;
        };
      } else {
        return !media;
      }

      return _matchesMedia(media);
    };

    var getCandidate = function getCandidate(elem) {
      var sources, i, len, media, source, srces, src, width;
      source = elem;
      createSrcset(source, true);
      srces = source._lazypolyfill;

      if (srces.isPicture) {
        for (i = 0, sources = elem.parentNode.getElementsByTagName('source'), len = sources.length; i < len; i++) {
          if (lazySizesCfg.supportsType(sources[i].getAttribute('type'), elem) && _matchesMedia(sources[i].getAttribute('media'))) {
            source = sources[i];
            createSrcset(source);
            srces = source._lazypolyfill;
            break;
          }
        }
      }

      if (srces.length > 1) {
        width = source.getAttribute('sizes') || '';
        width = regPxLength.test(width) && parseInt(width, 10) || lazySizes.gW(elem, elem.parentNode);
        srces.d = getX(elem);

        if (!srces.src || !srces.w || srces.w < width) {
          srces.w = width;
          src = reduceCandidate(srces.sort(ascendingSort));
          srces.src = src;
        } else {
          src = srces.src;
        }
      } else {
        src = srces[0];
      }

      return src;
    };

    var p = function p(elem) {
      if (supportSrcset && elem.parentNode && elem.parentNode.nodeName.toUpperCase() != 'PICTURE') {
        return;
      }

      var candidate = getCandidate(elem);

      if (candidate && candidate.u && elem._lazypolyfill.cur != candidate.u) {
        elem._lazypolyfill.cur = candidate.u;
        candidate.cached = true;
        elem.setAttribute(lazySizesCfg.srcAttr, candidate.u);
        elem.setAttribute('src', candidate.u);
      }
    };

    p.parse = parseWsrcset;
    return p;
  }();

  if (lazySizesCfg.loadedClass && lazySizesCfg.loadingClass) {
    (function () {
      var sels = [];
      ['img[sizes$="px"][srcset].', 'picture > img:not([srcset]).'].forEach(function (sel) {
        sels.push(sel + lazySizesCfg.loadedClass);
        sels.push(sel + lazySizesCfg.loadingClass);
      });
      lazySizesCfg.pf({
        elements: document.querySelectorAll(sels.join(', '))
      });
    })();
  }
});

/***/ }),

/***/ "./node_modules/lazysizes/plugins/rias/ls.rias.js":
/*!********************************************************!*\
  !*** ./node_modules/lazysizes/plugins/rias/ls.rias.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (window, factory) {
  var globalInstall = function globalInstall() {
    factory(window.lazySizes);
    window.removeEventListener('lazyunveilread', globalInstall, true);
  };

  factory = factory.bind(null, window, window.document);

  if ( true && module.exports) {
    factory(__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js"));
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function (window, document, lazySizes) {
  /*jshint eqnull:true */
  'use strict';

  var config, riasCfg;
  var lazySizesCfg = lazySizes.cfg;
  var replaceTypes = {
    string: 1,
    number: 1
  };
  var regNumber = /^\-*\+*\d+\.*\d*$/;
  var regPicture = /^picture$/i;
  var regWidth = /\s*\{\s*width\s*\}\s*/i;
  var regHeight = /\s*\{\s*height\s*\}\s*/i;
  var regPlaceholder = /\s*\{\s*([a-z0-9]+)\s*\}\s*/ig;
  var regObj = /^\[.*\]|\{.*\}$/;
  var regAllowedSizes = /^(?:auto|\d+(px)?)$/;
  var anchor = document.createElement('a');
  var img = document.createElement('img');
  var buggySizes = 'srcset' in img && !('sizes' in img);
  var supportPicture = !!window.HTMLPictureElement && !buggySizes;

  (function () {
    var prop;

    var noop = function noop() {};

    var riasDefaults = {
      prefix: '',
      postfix: '',
      srcAttr: 'data-src',
      absUrl: false,
      modifyOptions: noop,
      widthmap: {},
      ratio: false,
      traditionalRatio: false,
      aspectratio: false
    };
    config = lazySizes && lazySizes.cfg;

    if (!config.supportsType) {
      config.supportsType = function (type
      /*, elem*/
      ) {
        return !type;
      };
    }

    if (!config.rias) {
      config.rias = {};
    }

    riasCfg = config.rias;

    if (!('widths' in riasCfg)) {
      riasCfg.widths = [];

      (function (widths) {
        var width;
        var i = 0;

        while (!width || width < 3000) {
          i += 5;

          if (i > 30) {
            i += 1;
          }

          width = 36 * i;
          widths.push(width);
        }
      })(riasCfg.widths);
    }

    for (prop in riasDefaults) {
      if (!(prop in riasCfg)) {
        riasCfg[prop] = riasDefaults[prop];
      }
    }
  })();

  function getElementOptions(elem, src) {
    var attr, parent, setOption, options;
    var elemStyles = window.getComputedStyle(elem);
    parent = elem.parentNode;
    options = {
      isPicture: !!(parent && regPicture.test(parent.nodeName || ''))
    };

    setOption = function setOption(attr, run) {
      var attrVal = elem.getAttribute('data-' + attr);

      if (!attrVal) {
        // no data- attr, get value from the CSS
        var styles = elemStyles.getPropertyValue('--ls-' + attr); // at least Safari 9 returns null rather than
        // an empty string for getPropertyValue causing
        // .trim() to fail

        if (styles) {
          attrVal = styles.trim();
        }
      }

      if (attrVal) {
        if (attrVal == 'true') {
          attrVal = true;
        } else if (attrVal == 'false') {
          attrVal = false;
        } else if (regNumber.test(attrVal)) {
          attrVal = parseFloat(attrVal);
        } else if (typeof riasCfg[attr] == 'function') {
          attrVal = riasCfg[attr](elem, attrVal);
        } else if (regObj.test(attrVal)) {
          try {
            attrVal = JSON.parse(attrVal);
          } catch (e) {}
        }

        options[attr] = attrVal;
      } else if (attr in riasCfg && typeof riasCfg[attr] != 'function') {
        options[attr] = riasCfg[attr];
      } else if (run && typeof riasCfg[attr] == 'function') {
        options[attr] = riasCfg[attr](elem, attrVal);
      }
    };

    for (attr in riasCfg) {
      setOption(attr);
    }

    src.replace(regPlaceholder, function (full, match) {
      if (!(match in options)) {
        setOption(match, true);
      }
    });
    return options;
  }

  function replaceUrlProps(url, options) {
    var candidates = [];

    var replaceFn = function replaceFn(full, match) {
      return replaceTypes[typeof options[match]] ? options[match] : full;
    };

    candidates.srcset = [];

    if (options.absUrl) {
      anchor.setAttribute('href', url);
      url = anchor.href;
    }

    url = ((options.prefix || '') + url + (options.postfix || '')).replace(regPlaceholder, replaceFn);
    options.widths.forEach(function (width) {
      var widthAlias = options.widthmap[width] || width;
      var ratio = options.aspectratio || options.ratio;
      var traditionalRatio = !options.aspectratio && riasCfg.traditionalRatio;
      var candidate = {
        u: url.replace(regWidth, widthAlias).replace(regHeight, ratio ? traditionalRatio ? Math.round(width * ratio) : Math.round(width / ratio) : ''),
        w: width
      };
      candidates.push(candidate);
      candidates.srcset.push(candidate.c = candidate.u + ' ' + width + 'w');
    });
    return candidates;
  }

  function setSrc(src, opts, elem) {
    var elemW = 0;
    var elemH = 0;
    var sizeElement = elem;

    if (!src) {
      return;
    }

    if (opts.ratio === 'container') {
      // calculate image or parent ratio
      elemW = sizeElement.scrollWidth;
      elemH = sizeElement.scrollHeight;

      while ((!elemW || !elemH) && sizeElement !== document) {
        sizeElement = sizeElement.parentNode;
        elemW = sizeElement.scrollWidth;
        elemH = sizeElement.scrollHeight;
      }

      if (elemW && elemH) {
        opts.ratio = opts.traditionalRatio ? elemH / elemW : elemW / elemH;
      }
    }

    src = replaceUrlProps(src, opts);
    src.isPicture = opts.isPicture;

    if (buggySizes && elem.nodeName.toUpperCase() == 'IMG') {
      elem.removeAttribute(config.srcsetAttr);
    } else {
      elem.setAttribute(config.srcsetAttr, src.srcset.join(', '));
    }

    Object.defineProperty(elem, '_lazyrias', {
      value: src,
      writable: true
    });
  }

  function createAttrObject(elem, src) {
    var opts = getElementOptions(elem, src);
    riasCfg.modifyOptions.call(elem, {
      target: elem,
      details: opts,
      detail: opts
    });
    lazySizes.fire(elem, 'lazyriasmodifyoptions', opts);
    return opts;
  }

  function getSrc(elem) {
    return elem.getAttribute(elem.getAttribute('data-srcattr') || riasCfg.srcAttr) || elem.getAttribute(config.srcsetAttr) || elem.getAttribute(config.srcAttr) || elem.getAttribute('data-pfsrcset') || '';
  }

  addEventListener('lazybeforesizes', function (e) {
    if (e.detail.instance != lazySizes) {
      return;
    }

    var elem, src, elemOpts, parent, sources, i, len, sourceSrc, sizes, detail, hasPlaceholder, modified, emptyList;
    elem = e.target;

    if (!e.detail.dataAttr || e.defaultPrevented || riasCfg.disabled || !((sizes = elem.getAttribute(config.sizesAttr) || elem.getAttribute('sizes')) && regAllowedSizes.test(sizes))) {
      return;
    }

    src = getSrc(elem);
    elemOpts = createAttrObject(elem, src);
    hasPlaceholder = regWidth.test(elemOpts.prefix) || regWidth.test(elemOpts.postfix);

    if (elemOpts.isPicture && (parent = elem.parentNode)) {
      sources = parent.getElementsByTagName('source');

      for (i = 0, len = sources.length; i < len; i++) {
        if (hasPlaceholder || regWidth.test(sourceSrc = getSrc(sources[i]))) {
          setSrc(sourceSrc, elemOpts, sources[i]);
          modified = true;
        }
      }
    }

    if (hasPlaceholder || regWidth.test(src)) {
      setSrc(src, elemOpts, elem);
      modified = true;
    } else if (modified) {
      emptyList = [];
      emptyList.srcset = [];
      emptyList.isPicture = true;
      Object.defineProperty(elem, '_lazyrias', {
        value: emptyList,
        writable: true
      });
    }

    if (modified) {
      if (supportPicture) {
        elem.removeAttribute(config.srcAttr);
      } else if (sizes != 'auto') {
        detail = {
          width: parseInt(sizes, 10)
        };
        polyfill({
          target: elem,
          detail: detail
        });
      }
    }
  }, true); // partial polyfill

  var polyfill = function () {
    var ascendingSort = function ascendingSort(a, b) {
      return a.w - b.w;
    };

    var reduceCandidate = function reduceCandidate(srces) {
      var lowerCandidate, bonusFactor;
      var len = srces.length;
      var candidate = srces[len - 1];
      var i = 0;

      for (i; i < len; i++) {
        candidate = srces[i];
        candidate.d = candidate.w / srces.w;

        if (candidate.d >= srces.d) {
          if (!candidate.cached && (lowerCandidate = srces[i - 1]) && lowerCandidate.d > srces.d - 0.13 * Math.pow(srces.d, 2.2)) {
            bonusFactor = Math.pow(lowerCandidate.d - 0.6, 1.6);

            if (lowerCandidate.cached) {
              lowerCandidate.d += 0.15 * bonusFactor;
            }

            if (lowerCandidate.d + (candidate.d - srces.d) * bonusFactor > srces.d) {
              candidate = lowerCandidate;
            }
          }

          break;
        }
      }

      return candidate;
    };

    var getWSet = function getWSet(elem, testPicture) {
      var src;

      if (!elem._lazyrias && lazySizes.pWS && (src = lazySizes.pWS(elem.getAttribute(config.srcsetAttr || ''))).length) {
        Object.defineProperty(elem, '_lazyrias', {
          value: src,
          writable: true
        });

        if (testPicture && elem.parentNode) {
          src.isPicture = elem.parentNode.nodeName.toUpperCase() == 'PICTURE';
        }
      }

      return elem._lazyrias;
    };

    var getX = function getX(elem) {
      var dpr = window.devicePixelRatio || 1;
      var optimum = lazySizes.getX && lazySizes.getX(elem);
      return Math.min(optimum || dpr, 2.4, dpr);
    };

    var getCandidate = function getCandidate(elem, width) {
      var sources, i, len, media, srces, src;
      srces = elem._lazyrias;

      if (srces.isPicture && window.matchMedia) {
        for (i = 0, sources = elem.parentNode.getElementsByTagName('source'), len = sources.length; i < len; i++) {
          if (getWSet(sources[i]) && !sources[i].getAttribute('type') && (!(media = sources[i].getAttribute('media')) || (matchMedia(media) || {}).matches)) {
            srces = sources[i]._lazyrias;
            break;
          }
        }
      }

      if (!srces.w || srces.w < width) {
        srces.w = width;
        srces.d = getX(elem);
        src = reduceCandidate(srces.sort(ascendingSort));
      }

      return src;
    };

    var _polyfill = function polyfill(e) {
      if (e.detail.instance != lazySizes) {
        return;
      }

      var candidate;
      var elem = e.target;

      if (!buggySizes && (window.respimage || window.picturefill || lazySizesCfg.pf)) {
        document.removeEventListener('lazybeforesizes', _polyfill);
        return;
      }

      if (!('_lazyrias' in elem) && (!e.detail.dataAttr || !getWSet(elem, true))) {
        return;
      }

      candidate = getCandidate(elem, e.detail.width);

      if (candidate && candidate.u && elem._lazyrias.cur != candidate.u) {
        elem._lazyrias.cur = candidate.u;
        candidate.cached = true;
        lazySizes.rAF(function () {
          elem.setAttribute(config.srcAttr, candidate.u);
          elem.setAttribute('src', candidate.u);
        });
      }
    };

    if (!supportPicture) {
      addEventListener('lazybeforesizes', _polyfill);
    } else {
      _polyfill = function _polyfill() {};
    }

    return _polyfill;
  }();
});

/***/ }),

/***/ "./themes/mcg/src/js/index.ts":
/*!************************************!*\
  !*** ./themes/mcg/src/js/index.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! focus-visible */ "./node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./themes/mcg/src/js/utils/index.ts");
/* harmony import */ var _main_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/accordion */ "./themes/mcg/src/js/main/accordion/index.ts");
/* harmony import */ var _main_accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_accordion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _main_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/carousel */ "./themes/mcg/src/js/main/carousel/index.ts");
/* harmony import */ var _main_lazyload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/lazyload */ "./themes/mcg/src/js/main/lazyload/index.ts");
/* harmony import */ var _main_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/video */ "./themes/mcg/src/js/main/video/index.ts");
/* harmony import */ var _main_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_video__WEBPACK_IMPORTED_MODULE_5__);






var classes = [_main_accordion__WEBPACK_IMPORTED_MODULE_2___default.a, _main_carousel__WEBPACK_IMPORTED_MODULE_3__["default"], _main_lazyload__WEBPACK_IMPORTED_MODULE_4__["default"], _main_video__WEBPACK_IMPORTED_MODULE_5___default.a];

for (var _i = 0, _classes = classes; _i < _classes.length; _i++) {
  var Class = _classes[_i];
  new Class();
}

(function () {
  var html = document.documentElement;
  window.addEventListener("resize", Object(_utils__WEBPACK_IMPORTED_MODULE_1__["throttle"])(setCssProperties, 250));
  setCssProperties();

  function setCssProperties() {
    var htmlWidth = +html.getBoundingClientRect().width.toFixed(2);
    html.style.setProperty("--scrollbar-width", "" + (window.innerWidth - htmlWidth));
    html.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  }
})();

/***/ }),

/***/ "./themes/mcg/src/js/main/accordion/index.ts":
/*!***************************************************!*\
  !*** ./themes/mcg/src/js/main/accordion/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/stevewilson/Documents/Freelance/local/dblx-build-test/themes/mcg/src/js/main/accordion/index.ts: Unexpected token, expected \",\" (9:24)\n\n\u001b[0m \u001b[90m  7 | \u001b[39m    }\u001b[0m\n\u001b[0m \u001b[90m  8 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 | \u001b[39m    async _load(elements\u001b[33m:\u001b[39m \u001b[33mHTMLElement\u001b[39m[]) {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m        \u001b[36mconst\u001b[39m { \u001b[36mdefault\u001b[39m\u001b[33m:\u001b[39m \u001b[33mAccordion\u001b[39m } \u001b[33m=\u001b[39m await \u001b[36mimport\u001b[39m(\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m            \u001b[90m/* webpackChunkName: \"accordion\" */\u001b[39m \u001b[32m\"./Accordion\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m        )\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:799:17)\n    at Parser.raiseWithData (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:792:17)\n    at Parser.raise (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:786:17)\n    at Parser.unexpected (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9089:16)\n    at Parser.expect (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9075:28)\n    at Parser.parseBindingList (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9473:14)\n    at Parser.parseFunctionParams (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12322:24)\n    at Parser.parseMethod (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11027:10)\n    at Parser.pushClassMethod (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12611:30)\n    at Parser.parseClassMemberWithIsStatic (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12527:14)\n    at Parser.parseClassMember (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12444:10)\n    at /Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12389:14\n    at Parser.withTopicForbiddingContext (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11417:14)\n    at Parser.parseClassBody (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12366:10)\n    at Parser.parseClass (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12339:22)\n    at Parser.parseStatementContent (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11619:21)\n    at Parser.parseStatement (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11577:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12159:25)\n    at Parser.parseBlockBody (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12145:10)\n    at Parser.parseTopLevel (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11508:10)\n    at Parser.parse (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:13328:10)\n    at parse (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:13381:38)\n    at parser (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:261:32)\n    at /Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ "./themes/mcg/src/js/main/carousel/index.ts":
/*!**************************************************!*\
  !*** ./themes/mcg/src/js/main/carousel/index.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./themes/mcg/src/js/utils/index.ts");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var CarouselController = /*#__PURE__*/function () {
  function CarouselController() {
    var elements = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getAll"])(".js-carousel");
    if (elements.length === 0) return;
    if (elements.length === 1 && elements[0].childElementCount === 1) return;

    this._createInstances(elements);
  }

  var _proto = CarouselController.prototype;

  _proto._createInstances = function _createInstances(elements) {
    return new Promise(function ($return, $error) {
      var _await$import, Carousel, _iterator, _step, element;

      return Promise.resolve(__webpack_require__.e(/*! import() | carousel */ "carousel").then(__webpack_require__.t.bind(null, /*! ./Carousel */ "./themes/mcg/src/js/main/carousel/Carousel.ts", 7))).then(function ($await_1) {
        try {
          _await$import = $await_1, Carousel = _await$import.Carousel;

          for (_iterator = _createForOfIteratorHelperLoose(elements); !(_step = _iterator()).done;) {
            element = _step.value;

            if (element.childElementCount > 1) {
              new Carousel(element);
            }
          }

          return $return();
        } catch ($boundEx) {
          return $error($boundEx);
        }
      }, $error);
    });
  };

  return CarouselController;
}();

/* harmony default export */ __webpack_exports__["default"] = (CarouselController);

/***/ }),

/***/ "./themes/mcg/src/js/main/lazyload/Lazyload.ts":
/*!*****************************************************!*\
  !*** ./themes/mcg/src/js/main/lazyload/Lazyload.ts ***!
  \*****************************************************/
/*! exports provided: Lazyload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lazyload", function() { return Lazyload; });
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes/plugins/object-fit/ls.object-fit */ "./node_modules/lazysizes/plugins/object-fit/ls.object-fit.js");
/* harmony import */ var lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazysizes/plugins/parent-fit/ls.parent-fit */ "./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js");
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes/plugins/respimg/ls.respimg */ "./node_modules/lazysizes/plugins/respimg/ls.respimg.js");
/* harmony import */ var lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lazysizes_plugins_rias_ls_rias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lazysizes/plugins/rias/ls.rias */ "./node_modules/lazysizes/plugins/rias/ls.rias.js");
/* harmony import */ var lazysizes_plugins_rias_ls_rias__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_rias_ls_rias__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lazysizes_plugins_bgset_ls_bgset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lazysizes/plugins/bgset/ls.bgset */ "./node_modules/lazysizes/plugins/bgset/ls.bgset.js");
/* harmony import */ var lazysizes_plugins_bgset_ls_bgset__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_bgset_ls_bgset__WEBPACK_IMPORTED_MODULE_5__);







var Lazyload = function Lazyload() {
  lazysizes__WEBPACK_IMPORTED_MODULE_0___default.a.cfg.lazyClass = "js-lazyload";
  lazysizes__WEBPACK_IMPORTED_MODULE_0___default.a.cfg.hFac = 0;
  lazysizes__WEBPACK_IMPORTED_MODULE_0___default.a.cfg.loadMode = 1;
  lazysizes__WEBPACK_IMPORTED_MODULE_0___default.a.cfg.minSize = 360;
};



/***/ }),

/***/ "./themes/mcg/src/js/main/lazyload/index.ts":
/*!**************************************************!*\
  !*** ./themes/mcg/src/js/main/lazyload/index.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lazyload */ "./themes/mcg/src/js/main/lazyload/Lazyload.ts");

/* harmony default export */ __webpack_exports__["default"] = (_Lazyload__WEBPACK_IMPORTED_MODULE_0__["Lazyload"]);

/***/ }),

/***/ "./themes/mcg/src/js/main/video/index.ts":
/*!***********************************************!*\
  !*** ./themes/mcg/src/js/main/video/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/stevewilson/Documents/Freelance/local/dblx-build-test/themes/mcg/src/js/main/video/index.ts: Unexpected token, expected \";\" (3:5)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m { getAll\u001b[33m,\u001b[39m attachEvent } from \u001b[32m\"@/utils\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39mtype \u001b[33mVideoTypes\u001b[39m \u001b[33m=\u001b[39m \u001b[32m\"HTML5\"\u001b[39m \u001b[33m|\u001b[39m \u001b[32m\"vimeo\"\u001b[39m \u001b[33m|\u001b[39m \u001b[32m\"youtube\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39mtype \u001b[33mVideoMap\u001b[39m \u001b[33m=\u001b[39m \u001b[33mRecord\u001b[39m\u001b[33m<\u001b[39m\u001b[33mVideoTypes\u001b[39m\u001b[33m,\u001b[39m \u001b[33mHTMLElement\u001b[39m[]\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 | \u001b[39m\u001b[36mconst\u001b[39m typesMap \u001b[33m=\u001b[39m {\u001b[0m\n    at Parser._raise (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:799:17)\n    at Parser.raiseWithData (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:792:17)\n    at Parser.raise (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:786:17)\n    at Parser.unexpected (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9089:16)\n    at Parser.semicolon (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9071:40)\n    at Parser.parseExpressionStatement (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12117:10)\n    at Parser.parseStatementContent (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11713:19)\n    at Parser.parseStatement (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11577:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12159:25)\n    at Parser.parseBlockBody (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12145:10)\n    at Parser.parseTopLevel (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11508:10)\n    at Parser.parse (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:13328:10)\n    at parse (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:13381:38)\n    at parser (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:261:32)\n    at /Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ "./themes/mcg/src/js/utils/add-prefetch.ts":
/*!*************************************************!*\
  !*** ./themes/mcg/src/js/utils/add-prefetch.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/stevewilson/Documents/Freelance/local/dblx-build-test/themes/mcg/src/js/utils/add-prefetch.ts: Unexpected token, expected \",\" (5:32)\n\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[90m */\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mfunction\u001b[39m addPrefetch(kind\u001b[33m:\u001b[39m string\u001b[33m,\u001b[39m url\u001b[33m:\u001b[39m string\u001b[33m,\u001b[39m as\u001b[33m?\u001b[39m\u001b[33m:\u001b[39m string) {\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m                                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 | \u001b[39m    \u001b[36mconst\u001b[39m linkElem \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mcreateElement(\u001b[32m\"link\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 | \u001b[39m    linkElem\u001b[33m.\u001b[39mrel \u001b[33m=\u001b[39m kind\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 8 | \u001b[39m    linkElem\u001b[33m.\u001b[39mhref \u001b[33m=\u001b[39m url\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:799:17)\n    at Parser.raiseWithData (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:792:17)\n    at Parser.raise (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:786:17)\n    at Parser.unexpected (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9089:16)\n    at Parser.expect (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9075:28)\n    at Parser.parseBindingList (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9473:14)\n    at Parser.parseFunctionParams (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12322:24)\n    at Parser.parseFunction (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12297:10)\n    at Parser.parseFunctionStatement (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11925:17)\n    at Parser.parseStatementContent (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11615:21)\n    at Parser.parseStatement (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11577:17)\n    at Parser.parseExportDeclaration (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12808:17)\n    at Parser.maybeParseExportDeclaration (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12764:31)\n    at Parser.parseExport (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12702:29)\n    at Parser.parseStatementContent (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11683:27)\n    at Parser.parseStatement (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11577:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12159:25)\n    at Parser.parseBlockBody (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12145:10)\n    at Parser.parseTopLevel (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11508:10)\n    at Parser.parse (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:13328:10)\n    at parse (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:13381:38)\n    at parser (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:261:32)\n    at /Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ "./themes/mcg/src/js/utils/attach-event.ts":
/*!*************************************************!*\
  !*** ./themes/mcg/src/js/utils/attach-event.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/stevewilson/Documents/Freelance/local/dblx-build-test/themes/mcg/src/js/utils/attach-event.ts: Unexpected token, expected \",\" (2:9)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mfunction\u001b[39m attachEvent(\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 2 | \u001b[39m    event\u001b[33m:\u001b[39m keyof \u001b[33mWindowEventMap\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 | \u001b[39m    node\u001b[33m:\u001b[39m \u001b[33mWindow\u001b[39m \u001b[33m|\u001b[39m \u001b[33mDocument\u001b[39m \u001b[33m|\u001b[39m \u001b[33mHTMLElement\u001b[39m \u001b[33m=\u001b[39m window\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39m    callback\u001b[33m:\u001b[39m (event\u001b[33m:\u001b[39m \u001b[33mEvent\u001b[39m) \u001b[33m=>\u001b[39m \u001b[36mvoid\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 | \u001b[39m) {\u001b[0m\n    at Parser._raise (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:799:17)\n    at Parser.raiseWithData (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:792:17)\n    at Parser.raise (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:786:17)\n    at Parser.unexpected (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9089:16)\n    at Parser.expect (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9075:28)\n    at Parser.parseBindingList (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9473:14)\n    at Parser.parseFunctionParams (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12322:24)\n    at Parser.parseFunction (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12297:10)\n    at Parser.parseFunctionStatement (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11925:17)\n    at Parser.parseStatementContent (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11615:21)\n    at Parser.parseStatement (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11577:17)\n    at Parser.parseExportDeclaration (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12808:17)\n    at Parser.maybeParseExportDeclaration (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12764:31)\n    at Parser.parseExport (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12702:29)\n    at Parser.parseStatementContent (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11683:27)\n    at Parser.parseStatement (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11577:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12159:25)\n    at Parser.parseBlockBody (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12145:10)\n    at Parser.parseTopLevel (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11508:10)\n    at Parser.parse (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:13328:10)\n    at parse (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:13381:38)\n    at parser (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:261:32)\n    at /Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ "./themes/mcg/src/js/utils/body-scroll-lock.ts":
/*!*****************************************************!*\
  !*** ./themes/mcg/src/js/utils/body-scroll-lock.ts ***!
  \*****************************************************/
/*! exports provided: lock, release */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lock", function() { return lock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "release", function() { return release; });
var elHtml = document.documentElement;
var previousHtmlStyles = {};
function lock() {
  var htmlStyle = elHtml.style;
  previousHtmlStyles = {
    overflow: htmlStyle.overflow
  };
  Object.assign(elHtml.style, {
    overflow: "hidden"
  });
}
function release() {
  Object.assign(elHtml.style, previousHtmlStyles);
}

/***/ }),

/***/ "./themes/mcg/src/js/utils/constants.ts":
/*!**********************************************!*\
  !*** ./themes/mcg/src/js/utils/constants.ts ***!
  \**********************************************/
/*! exports provided: noCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noCache", function() { return noCache; });
var url = new URL(window.location.href);
var noCache = url.searchParams.has("no-cache");

/***/ }),

/***/ "./themes/mcg/src/js/utils/device.ts":
/*!*******************************************!*\
  !*** ./themes/mcg/src/js/utils/device.ts ***!
  \*******************************************/
/*! exports provided: isIOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
var isIOS = (/iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;

/***/ }),

/***/ "./themes/mcg/src/js/utils/get.ts":
/*!****************************************!*\
  !*** ./themes/mcg/src/js/utils/get.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/stevewilson/Documents/Freelance/local/dblx-build-test/themes/mcg/src/js/utils/get.ts: Unexpected token, expected \",\" (1:28)\n\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mfunction\u001b[39m get(selector\u001b[33m:\u001b[39m string\u001b[33m,\u001b[39m node\u001b[33m:\u001b[39m \u001b[33mDocument\u001b[39m \u001b[33m|\u001b[39m \u001b[33mHTMLElement\u001b[39m \u001b[33m=\u001b[39m document) {\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 2 | \u001b[39m    \u001b[36mreturn\u001b[39m node\u001b[33m.\u001b[39mquerySelector(selector) as \u001b[33mHTMLElement\u001b[39m \u001b[33m|\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39m\u001b[0m\n    at Parser._raise (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:799:17)\n    at Parser.raiseWithData (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:792:17)\n    at Parser.raise (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:786:17)\n    at Parser.unexpected (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9089:16)\n    at Parser.expect (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9075:28)\n    at Parser.parseBindingList (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9473:14)\n    at Parser.parseFunctionParams (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12322:24)\n    at Parser.parseFunction (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12297:10)\n    at Parser.parseFunctionStatement (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11925:17)\n    at Parser.parseStatementContent (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11615:21)\n    at Parser.parseStatement (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11577:17)\n    at Parser.parseExportDeclaration (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12808:17)\n    at Parser.maybeParseExportDeclaration (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12764:31)\n    at Parser.parseExport (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12702:29)\n    at Parser.parseStatementContent (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11683:27)\n    at Parser.parseStatement (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11577:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12159:25)\n    at Parser.parseBlockBody (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12145:10)\n    at Parser.parseTopLevel (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11508:10)\n    at Parser.parse (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:13328:10)\n    at parse (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:13381:38)\n    at parser (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:261:32)\n    at /Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ "./themes/mcg/src/js/utils/index.ts":
/*!******************************************!*\
  !*** ./themes/mcg/src/js/utils/index.ts ***!
  \******************************************/
/*! exports provided: addPrefetch, attachEvent, get, getAll, noop, throttle, bodyScrollLock, CONSTANTS, device, observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body-scroll-lock */ "./themes/mcg/src/js/utils/body-scroll-lock.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "bodyScrollLock", function() { return _body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./themes/mcg/src/js/utils/constants.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "CONSTANTS", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./device */ "./themes/mcg/src/js/utils/device.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "device", function() { return _device__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observer */ "./themes/mcg/src/js/utils/observer.ts");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_observer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _observer__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _add_prefetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-prefetch */ "./themes/mcg/src/js/utils/add-prefetch.ts");
/* harmony import */ var _add_prefetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_add_prefetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPrefetch", function() { return _add_prefetch__WEBPACK_IMPORTED_MODULE_4__["addPrefetch"]; });

/* harmony import */ var _attach_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attach-event */ "./themes/mcg/src/js/utils/attach-event.ts");
/* harmony import */ var _attach_event__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_attach_event__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attachEvent", function() { return _attach_event__WEBPACK_IMPORTED_MODULE_5__["attachEvent"]; });

/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get */ "./themes/mcg/src/js/utils/get.ts");
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _get__WEBPACK_IMPORTED_MODULE_6__["get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return _get__WEBPACK_IMPORTED_MODULE_6__["getAll"]; });

/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./noop */ "./themes/mcg/src/js/utils/noop.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _noop__WEBPACK_IMPORTED_MODULE_7__["noop"]; });

/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./throttle */ "./themes/mcg/src/js/utils/throttle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _throttle__WEBPACK_IMPORTED_MODULE_8__["throttle"]; });












/***/ }),

/***/ "./themes/mcg/src/js/utils/noop.ts":
/*!*****************************************!*\
  !*** ./themes/mcg/src/js/utils/noop.ts ***!
  \*****************************************/
/*! exports provided: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
// eslint-disable-next-line @typescript-eslint/no-empty-function
var noop = function noop() {};

/***/ }),

/***/ "./themes/mcg/src/js/utils/observer.ts":
/*!*********************************************!*\
  !*** ./themes/mcg/src/js/utils/observer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/stevewilson/Documents/Freelance/local/dblx-build-test/themes/mcg/src/js/utils/observer.ts: Unexpected token, expected \";\" (1:5)\n\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 | \u001b[39mtype \u001b[33mObserverInstanceCallback\u001b[39m \u001b[33m=\u001b[39m (inView\u001b[33m:\u001b[39m boolean\u001b[33m,\u001b[39m intersection\u001b[33m:\u001b[39m \u001b[33mIntersectionObserverEntry\u001b[39m) \u001b[33m=>\u001b[39m \u001b[36mvoid\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 | \u001b[39mtype \u001b[33mObserverInstance\u001b[39m \u001b[33m=\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39m    inView\u001b[33m:\u001b[39m boolean\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:799:17)\n    at Parser.raiseWithData (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:792:17)\n    at Parser.raise (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:786:17)\n    at Parser.unexpected (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9089:16)\n    at Parser.semicolon (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:9071:40)\n    at Parser.parseExpressionStatement (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12117:10)\n    at Parser.parseStatementContent (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11713:19)\n    at Parser.parseStatement (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11577:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12159:25)\n    at Parser.parseBlockBody (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:12145:10)\n    at Parser.parseTopLevel (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:11508:10)\n    at Parser.parse (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:13328:10)\n    at parse (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/parser/lib/index.js:13381:38)\n    at parser (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:261:32)\n    at /Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/stevewilson/Documents/Freelance/local/dblx-build-test/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ "./themes/mcg/src/js/utils/throttle.ts":
/*!*********************************************!*\
  !*** ./themes/mcg/src/js/utils/throttle.ts ***!
  \*********************************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
var throttle = function throttle(fn, wait) {
  var inThrottle, lastFn, lastTime;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    var context = this;

    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

/***/ }),

/***/ "./themes/mcg/src/scss/main.scss":
/*!***************************************!*\
  !*** ./themes/mcg/src/scss/main.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!**************************************************************************!*\
  !*** multi ./themes/mcg/src/js/index.ts ./themes/mcg/src/scss/main.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./themes/mcg/src/js/index.ts */"./themes/mcg/src/js/index.ts");
module.exports = __webpack_require__(/*! ./themes/mcg/src/scss/main.scss */"./themes/mcg/src/scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZvY3VzLXZpc2libGUvZGlzdC9mb2N1cy12aXNpYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXp5c2l6ZXMvbGF6eXNpemVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXp5c2l6ZXMvcGx1Z2lucy9iZ3NldC9scy5iZ3NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGF6eXNpemVzL3BsdWdpbnMvb2JqZWN0LWZpdC9scy5vYmplY3QtZml0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXp5c2l6ZXMvcGx1Z2lucy9wYXJlbnQtZml0L2xzLnBhcmVudC1maXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhenlzaXplcy9wbHVnaW5zL3Jlc3BpbWcvbHMucmVzcGltZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGF6eXNpemVzL3BsdWdpbnMvcmlhcy9scy5yaWFzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9tY2cvc3JjL2pzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9tY2cvc3JjL2pzL21haW4vY2Fyb3VzZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21jZy9zcmMvanMvbWFpbi9sYXp5bG9hZC9MYXp5bG9hZC50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbWNnL3NyYy9qcy9tYWluL2xhenlsb2FkL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9tY2cvc3JjL2pzL3V0aWxzL2JvZHktc2Nyb2xsLWxvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21jZy9zcmMvanMvdXRpbHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9tY2cvc3JjL2pzL3V0aWxzL2RldmljZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbWNnL3NyYy9qcy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbWNnL3NyYy9qcy91dGlscy9ub29wLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9tY2cvc3JjL2pzL3V0aWxzL3Rocm90dGxlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9tY2cvc3JjL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJhcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsIiwic2NvcGUiLCJoYWRLZXlib2FyZEV2ZW50IiwiaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkiLCJoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQiLCJpbnB1dFR5cGVzV2hpdGVsaXN0IiwidGV4dCIsInNlYXJjaCIsInVybCIsInRlbCIsImVtYWlsIiwicGFzc3dvcmQiLCJudW1iZXIiLCJkYXRlIiwibW9udGgiLCJ3ZWVrIiwidGltZSIsImRhdGV0aW1lIiwiaXNWYWxpZEZvY3VzVGFyZ2V0IiwiZWwiLCJkb2N1bWVudCIsIm5vZGVOYW1lIiwiY2xhc3NMaXN0IiwiZm9jdXNUcmlnZ2Vyc0tleWJvYXJkTW9kYWxpdHkiLCJ0eXBlIiwidGFnTmFtZSIsInJlYWRPbmx5IiwiaXNDb250ZW50RWRpdGFibGUiLCJhZGRGb2N1c1Zpc2libGVDbGFzcyIsImNvbnRhaW5zIiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlRm9jdXNWaXNpYmxlQ2xhc3MiLCJoYXNBdHRyaWJ1dGUiLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvbktleURvd24iLCJlIiwibWV0YUtleSIsImFsdEtleSIsImN0cmxLZXkiLCJhY3RpdmVFbGVtZW50Iiwib25Qb2ludGVyRG93biIsIm9uRm9jdXMiLCJ0YXJnZXQiLCJvbkJsdXIiLCJ3aW5kb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwib25WaXNpYmlsaXR5Q2hhbmdlIiwidmlzaWJpbGl0eVN0YXRlIiwiYWRkSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uSW5pdGlhbFBvaW50ZXJNb3ZlIiwicmVtb3ZlSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvTG93ZXJDYXNlIiwibm9kZVR5cGUiLCJOb2RlIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsImhvc3QiLCJET0NVTUVOVF9OT0RFIiwiZG9jdW1lbnRFbGVtZW50IiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImVycm9yIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwibGF6eVNpemVzIiwiRGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJsIiwibGF6eXNpemVzIiwibGF6eVNpemVzQ2ZnIiwicHJvcCIsImxhenlTaXplc0RlZmF1bHRzIiwibGF6eUNsYXNzIiwibG9hZGVkQ2xhc3MiLCJsb2FkaW5nQ2xhc3MiLCJwcmVsb2FkQ2xhc3MiLCJlcnJvckNsYXNzIiwiYXV0b3NpemVzQ2xhc3MiLCJzcmNBdHRyIiwic3Jjc2V0QXR0ciIsInNpemVzQXR0ciIsIm1pblNpemUiLCJjdXN0b21NZWRpYSIsImluaXQiLCJleHBGYWN0b3IiLCJoRmFjIiwibG9hZE1vZGUiLCJsb2FkSGlkZGVuIiwicmljVGltZW91dCIsInRocm90dGxlRGVsYXkiLCJsYXp5U2l6ZXNDb25maWciLCJsYXp5c2l6ZXNDb25maWciLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2ZnIiwibm9TdXBwb3J0IiwiZG9jRWxlbSIsInN1cHBvcnRQaWN0dXJlIiwiSFRNTFBpY3R1cmVFbGVtZW50IiwiX2FkZEV2ZW50TGlzdGVuZXIiLCJfZ2V0QXR0cmlidXRlIiwiYmluZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJyZWdQaWN0dXJlIiwibG9hZEV2ZW50cyIsInJlZ0NsYXNzQ2FjaGUiLCJmb3JFYWNoIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJoYXNDbGFzcyIsImVsZSIsImNscyIsIlJlZ0V4cCIsInRlc3QiLCJhZGRDbGFzcyIsInRyaW0iLCJyZW1vdmVDbGFzcyIsInJlZyIsInJlcGxhY2UiLCJhZGRSZW1vdmVMb2FkRXZlbnRzIiwiZG9tIiwiZm4iLCJhY3Rpb24iLCJldnQiLCJ0cmlnZ2VyRXZlbnQiLCJlbGVtIiwibmFtZSIsImRldGFpbCIsIm5vQnViYmxlcyIsIm5vQ2FuY2VsYWJsZSIsImluc3RhbmNlIiwiaW5pdEV2ZW50IiwidXBkYXRlUG9seWZpbGwiLCJmdWxsIiwicG9seWZpbGwiLCJwaWN0dXJlZmlsbCIsInBmIiwic3JjIiwicmVldmFsdWF0ZSIsImVsZW1lbnRzIiwiZ2V0Q1NTIiwic3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0V2lkdGgiLCJwYXJlbnQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiX2xhenlzaXplc1dpZHRoIiwicGFyZW50Tm9kZSIsInJBRiIsInJ1bm5pbmciLCJ3YWl0aW5nIiwiZmlyc3RGbnMiLCJzZWNvbmRGbnMiLCJmbnMiLCJydW4iLCJydW5GbnMiLCJsZW5ndGgiLCJzaGlmdCIsInJhZkJhdGNoIiwicXVldWUiLCJhcHBseSIsImFyZ3VtZW50cyIsInB1c2giLCJoaWRkZW4iLCJfbHNGbHVzaCIsInJBRkl0Iiwic2ltcGxlIiwidGhhdCIsImFyZ3MiLCJ0aHJvdHRsZSIsImxhc3RUaW1lIiwiZ0RlbGF5IiwicklDVGltZW91dCIsIm5vdyIsImlkbGVDYWxsYmFjayIsInRpbWVvdXQiLCJpc1ByaW9yaXR5IiwiZGVsYXkiLCJkZWJvdW5jZSIsImZ1bmMiLCJ0aW1lc3RhbXAiLCJ3YWl0IiwibGF0ZXIiLCJsYXN0IiwibG9hZGVyIiwicHJlbG9hZEVsZW1zIiwiaXNDb21wbGV0ZWQiLCJyZXNldFByZWxvYWRpbmdUaW1lciIsInN0YXJ0ZWQiLCJlTHZXIiwiZWx2SCIsImVMdG9wIiwiZUxsZWZ0IiwiZUxyaWdodCIsImVMYm90dG9tIiwiaXNCb2R5SGlkZGVuIiwicmVnSW1nIiwicmVnSWZyYW1lIiwic3VwcG9ydFNjcm9sbCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInNocmlua0V4cGFuZCIsImN1cnJlbnRFeHBhbmQiLCJpc0xvYWRpbmciLCJsb3dSdW5zIiwicmVzZXRQcmVsb2FkaW5nIiwiaXNWaXNpYmxlIiwiYm9keSIsImlzTmVzdGVkVmlzaWJsZSIsImVsZW1FeHBhbmQiLCJvdXRlclJlY3QiLCJ2aXNpYmxlIiwib2Zmc2V0UGFyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiY2hlY2tFbGVtZW50cyIsImVMbGVuIiwiaSIsInJlY3QiLCJhdXRvTG9hZEVsZW0iLCJsb2FkZWRTb21ldGhpbmciLCJlbGVtTmVnYXRpdmVFeHBhbmQiLCJlbGVtRXhwYW5kVmFsIiwiYmVmb3JlRXhwYW5kVmFsIiwiZGVmYXVsdEV4cGFuZCIsInByZWxvYWRFeHBhbmQiLCJsYXp5bG9hZEVsZW1zIiwiX2xhenlSYWNlIiwicHJlbWF0dXJlVW52ZWlsIiwidW52ZWlsRWxlbWVudCIsImV4cGFuZCIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwiX2RlZkV4IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicHJlbG9hZEFmdGVyTG9hZCIsInRocm90dGxlZENoZWNrRWxlbWVudHMiLCJzd2l0Y2hMb2FkaW5nQ2xhc3MiLCJfbGF6eUNhY2hlIiwicmFmU3dpdGNoTG9hZGluZ0NsYXNzIiwicmFmZWRTd2l0Y2hMb2FkaW5nQ2xhc3MiLCJjaGFuZ2VJZnJhbWVTcmMiLCJjb250ZW50V2luZG93IiwibG9jYXRpb24iLCJoYW5kbGVTb3VyY2VzIiwic291cmNlIiwic291cmNlU3Jjc2V0IiwibGF6eVVudmVpbCIsImlzQXV0byIsInNpemVzIiwiaXNJbWciLCJzcmNzZXQiLCJpc1BpY3R1cmUiLCJmaXJlc0xvYWQiLCJkZWZhdWx0UHJldmVudGVkIiwiY2FsbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaXNMb2FkZWQiLCJjb21wbGV0ZSIsIm5hdHVyYWxXaWR0aCIsImxvYWRpbmciLCJhdXRvU2l6ZXIiLCJ1cGRhdGVFbGVtIiwiYWZ0ZXJTY3JvbGwiLCJhbHRMb2FkbW9kZVNjcm9sbExpc3RuZXIiLCJvbmxvYWQiLCJfIiwicGVyc2lzdGVkIiwibG9hZGluZ0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImltZyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImF0dHJpYnV0ZXMiLCJzZXRJbnRlcnZhbCIsInJlYWR5U3RhdGUiLCJjaGVja0VsZW1zIiwidW52ZWlsIiwiX2FMU0wiLCJhdXRvc2l6ZXNFbGVtcyIsInNpemVFbGVtZW50Iiwic291cmNlcyIsImxlbiIsImRhdGFBdHRyIiwiZ2V0U2l6ZUVsZW1lbnQiLCJ1cGRhdGVFbGVtZW50c1NpemVzIiwiZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyIsInVQIiwiYUMiLCJyQyIsImhDIiwiZmlyZSIsImdXIiwiZ2xvYmFsSW5zdGFsbCIsInJlcXVpcmUiLCJkZWZpbmUiLCJyZWdXaGl0ZSIsInJlZ1NwbGl0U2V0IiwicmVnU291cmNlIiwicmVnVHlwZSIsInJlZ0JnVXJsRXNjYXBlIiwiYWxsb3dlZEJhY2tncm91bmRTaXplIiwiY29udGFpbiIsImNvdmVyIiwicHJveHlXaWR0aCIsImdldEJnU2l6ZSIsImJnU2l6ZSIsImdldFByb3BlcnR5VmFsdWUiLCJiYWNrZ3JvdW5kU2l6ZSIsInNldFR5cGVPck1lZGlhIiwibWF0Y2giLCJ0eXBlTWF0Y2giLCJjcmVhdGVQaWN0dXJlIiwic2V0cyIsInBpY3R1cmUiLCJjcmVhdGVFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwicmF0aW8iLCJvcHRpbXVteCIsIl9sYXp5YmdzZXQiLCJyZW1vdmVDaGlsZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJ3cml0YWJsZSIsInNwbGl0IiwiZGlzcGxheSIsImNsYXNzTmFtZSIsInNldCIsImFwcGVuZENoaWxkIiwicHJveHlMb2FkIiwiaW1hZ2UiLCJiZyIsImN1cnJlbnRTcmMiLCJ1c2VTcmMiLCJKU09OIiwic3RyaW5naWZ5IiwiYmFja2dyb3VuZEltYWdlIiwiX2xhenliZ3NldExvYWRpbmciLCJhbHQiLCJfbGF6eXNpemVzUGFyZW50Rml0IiwiaW5pdGlhbEV2ZW50IiwiY2xvbmVFbGVtZW50Q2xhc3MiLCJmaXRTdXBwb3J0IiwicG9zaXRpb25TdXBwb3J0IiwicmVnQ3NzRml0IiwicmVnQ3NzUG9zaXRpb24iLCJibGFua1NyYyIsInBvc2l0aW9uRGVmYXVsdHMiLCJjZW50ZXIiLCJnZXRPYmplY3QiLCJlbGVtZW50IiwiY3NzIiwiY29udGVudCIsImZvbnRGYW1pbHkiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImZpdCIsInBvc2l0aW9uIiwiZ2VuZXJhdGVTdHlsZUNsYXNzIiwic3R5bGVFbGVtZW50Iiwib2JqZWN0Rml0Q2xhc3MiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlUHJldkNsb25lIiwicHJldiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJ2aXNpYmlsaXR5IiwiaW5pdEZpeCIsImNvbmZpZyIsInN3aXRjaENsYXNzZXNBZGRlZCIsImFkZGVkU3JjIiwic3R5bGVFbGVtZW50U3R5bGUiLCJsYXp5c2l6ZXNDZmciLCJvbkNoYW5nZSIsInJhZmVkT25DaGFuZ2UiLCJoaWRlRWxlbWVudCIsImNvbnRhaW5lciIsInRvVXBwZXJDYXNlIiwiY2xvbmVOb2RlIiwiY3VyU3JjIiwiYXR0ciIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJfb2JqZWN0Rml0UG9seWZpbGxlZERpc3BsYXkiLCJpbnNlcnRCZWZvcmUiLCJvblJlYWQiLCJvYmoiLCJyZWdEZXNjcmlwdG9ycyIsInJlZ0Nzc09iamVjdCIsInBhcmVudEZpdCIsImdldFBhcmVudCIsInBhcmVudFNlbCIsImNsb3Nlc3QiLCJqUXVlcnkiLCJnZXRGaXQiLCJ0bXBNYXRjaCIsInBhcmVudE9iaiIsIl9sYXp5c2l6ZXNQYXJlbnRDb250YWluZXIiLCJnZXRJbWFnZVJhdGlvIiwibWVkaWEiLCJoZWlnaHQiLCJfbHNNZWRpYSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwicGFyc2VGbG9hdCIsImNhbGN1bGF0ZVNpemUiLCJkaXNwbGF5UmF0aW8iLCJpbWFnZVJhdGlvIiwicmV0V2lkdGgiLCJmaXRPYmoiLCJmaXRFbGVtIiwic3VwcG9ydFNyY3NldCIsInJlZ0hEZXNjIiwiZml4RWRnZUhEZXNjcmlwdG9yIiwicmVtb3ZlSERlc2NyaXB0b3JzIiwiaGFuZGxlciIsIm9uZXJyb3IiLCJzdXBwb3J0c1R5cGUiLCJoYXNIRGVzY3JpcHRvckZpeCIsIm1zRWxlbWVudHNGcm9tUG9pbnQiLCJvcHRpb25zIiwiYXNjZW5kaW5nU29ydCIsImEiLCJiIiwidyIsInJlZ1B4TGVuZ3RoIiwicmVkdWNlQ2FuZGlkYXRlIiwic3JjZXMiLCJsb3dlckNhbmRpZGF0ZSIsImJvbnVzRmFjdG9yIiwiY2FuZGlkYXRlIiwiZCIsImNhY2hlZCIsIk1hdGgiLCJwb3ciLCJwYXJzZVdzcmNzZXQiLCJjYW5kaWRhdGVzIiwicmVnV0NhbmRpZGF0ZXMiLCJyZWdNdWx0aXBsZSIsImFkZENhbmRpZGF0ZSIsIndEZXNjcmlwdG9yIiwiYyIsInUiLCJpbnB1dCIsInJ1bk1hdGNoTWVkaWEiLCJ0aW1lciIsIm1hdGNoTWVkaWFFbGVtcyIsImNyZWF0ZVNyY3NldCIsImlzSW1hZ2UiLCJwYXJzZWRTZXQiLCJzcmNTZXQiLCJfbGF6eXBvbHlmaWxsIiwiX3NldCIsImdldFgiLCJkcHIiLCJkZXZpY2VQaXhlbFJhdGlvIiwib3B0aW11bSIsIm1pbiIsIm1hdGNoZXNNZWRpYSIsImdldENhbmRpZGF0ZSIsInBhcnNlSW50Iiwic29ydCIsInAiLCJjdXIiLCJwYXJzZSIsInNlbHMiLCJzZWwiLCJqb2luIiwicmlhc0NmZyIsInJlcGxhY2VUeXBlcyIsInN0cmluZyIsInJlZ051bWJlciIsInJlZ1dpZHRoIiwicmVnSGVpZ2h0IiwicmVnUGxhY2Vob2xkZXIiLCJyZWdPYmoiLCJyZWdBbGxvd2VkU2l6ZXMiLCJhbmNob3IiLCJidWdneVNpemVzIiwibm9vcCIsInJpYXNEZWZhdWx0cyIsInByZWZpeCIsInBvc3RmaXgiLCJhYnNVcmwiLCJtb2RpZnlPcHRpb25zIiwid2lkdGhtYXAiLCJ0cmFkaXRpb25hbFJhdGlvIiwiYXNwZWN0cmF0aW8iLCJyaWFzIiwid2lkdGhzIiwiZ2V0RWxlbWVudE9wdGlvbnMiLCJzZXRPcHRpb24iLCJlbGVtU3R5bGVzIiwiYXR0clZhbCIsInN0eWxlcyIsInJlcGxhY2VVcmxQcm9wcyIsInJlcGxhY2VGbiIsImhyZWYiLCJ3aWR0aEFsaWFzIiwicm91bmQiLCJzZXRTcmMiLCJvcHRzIiwiZWxlbVciLCJlbGVtSCIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0IiwiY3JlYXRlQXR0ck9iamVjdCIsImRldGFpbHMiLCJnZXRTcmMiLCJlbGVtT3B0cyIsInNvdXJjZVNyYyIsImhhc1BsYWNlaG9sZGVyIiwibW9kaWZpZWQiLCJlbXB0eUxpc3QiLCJkaXNhYmxlZCIsImdldFdTZXQiLCJ0ZXN0UGljdHVyZSIsIl9sYXp5cmlhcyIsInBXUyIsInJlc3BpbWFnZSIsImNsYXNzZXMiLCJBY2NvcmRpb24iLCJDYXJvdXNlbCIsIkxhenlsb2FkIiwiVmlkZW8iLCJDbGFzcyIsImh0bWwiLCJzZXRDc3NQcm9wZXJ0aWVzIiwiaHRtbFdpZHRoIiwidG9GaXhlZCIsInNldFByb3BlcnR5IiwiQ2Fyb3VzZWxDb250cm9sbGVyIiwiZ2V0QWxsIiwiY2hpbGRFbGVtZW50Q291bnQiLCJfY3JlYXRlSW5zdGFuY2VzIiwiZWxIdG1sIiwicHJldmlvdXNIdG1sU3R5bGVzIiwibG9jayIsImh0bWxTdHlsZSIsIm92ZXJmbG93IiwiYXNzaWduIiwicmVsZWFzZSIsIlVSTCIsIm5vQ2FjaGUiLCJzZWFyY2hQYXJhbXMiLCJoYXMiLCJpc0lPUyIsInBsYXRmb3JtIiwibWF4VG91Y2hQb2ludHMiLCJNU1N0cmVhbSIsImluVGhyb3R0bGUiLCJsYXN0Rm4i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LENBTGdCLENBQW5CO0FBTUg7QUFDSixHQWpCRDtBQWtCSCxDQXBCTSxDOzs7Ozs7Ozs7OztBQ0FQO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wiY2Fyb3VzZWxcIjpcImNhcm91c2VsXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSA6Zm9jdXMtdmlzaWJsZSBwb2x5ZmlsbCBhdCB0aGUgZ2l2ZW4gc2NvcGUuXG4gICAqIEEgc2NvcGUgaW4gdGhpcyBjYXNlIGlzIGVpdGhlciB0aGUgdG9wLWxldmVsIERvY3VtZW50IG9yIGEgU2hhZG93IFJvb3QuXG4gICAqXG4gICAqIEBwYXJhbSB7KERvY3VtZW50fFNoYWRvd1Jvb3QpfSBzY29wZVxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGVcbiAgICovXG4gIGZ1bmN0aW9uIGFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGwoc2NvcGUpIHtcbiAgICB2YXIgaGFkS2V5Ym9hcmRFdmVudCA9IHRydWU7XG4gICAgdmFyIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gZmFsc2U7XG4gICAgdmFyIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5VGltZW91dCA9IG51bGw7XG5cbiAgICB2YXIgaW5wdXRUeXBlc1doaXRlbGlzdCA9IHtcbiAgICAgIHRleHQ6IHRydWUsXG4gICAgICBzZWFyY2g6IHRydWUsXG4gICAgICB1cmw6IHRydWUsXG4gICAgICB0ZWw6IHRydWUsXG4gICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgIHBhc3N3b3JkOiB0cnVlLFxuICAgICAgbnVtYmVyOiB0cnVlLFxuICAgICAgZGF0ZTogdHJ1ZSxcbiAgICAgIG1vbnRoOiB0cnVlLFxuICAgICAgd2VlazogdHJ1ZSxcbiAgICAgIHRpbWU6IHRydWUsXG4gICAgICBkYXRldGltZTogdHJ1ZSxcbiAgICAgICdkYXRldGltZS1sb2NhbCc6IHRydWVcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBsZWdhY3kgYnJvd3NlcnMgYW5kIGlmcmFtZXMgd2hpY2ggc29tZXRpbWVzIGZvY3VzXG4gICAgICogZWxlbWVudHMgbGlrZSBkb2N1bWVudCwgYm9keSwgYW5kIG5vbi1pbnRlcmFjdGl2ZSBTVkcuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzVmFsaWRGb2N1c1RhcmdldChlbCkge1xuICAgICAgaWYgKFxuICAgICAgICBlbCAmJlxuICAgICAgICBlbCAhPT0gZG9jdW1lbnQgJiZcbiAgICAgICAgZWwubm9kZU5hbWUgIT09ICdIVE1MJyAmJlxuICAgICAgICBlbC5ub2RlTmFtZSAhPT0gJ0JPRFknICYmXG4gICAgICAgICdjbGFzc0xpc3QnIGluIGVsICYmXG4gICAgICAgICdjb250YWlucycgaW4gZWwuY2xhc3NMaXN0XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYXV0b21hdGljYWxseSB0cmlnZ2VyIHRoZVxuICAgICAqIGBmb2N1cy12aXNpYmxlYCBjbGFzcyBiZWluZyBhZGRlZCwgaS5lLiB3aGV0aGVyIGl0IHNob3VsZCBhbHdheXMgbWF0Y2hcbiAgICAgKiBgOmZvY3VzLXZpc2libGVgIHdoZW4gZm9jdXNlZC5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmb2N1c1RyaWdnZXJzS2V5Ym9hcmRNb2RhbGl0eShlbCkge1xuICAgICAgdmFyIHR5cGUgPSBlbC50eXBlO1xuICAgICAgdmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lO1xuXG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBpbnB1dFR5cGVzV2hpdGVsaXN0W3R5cGVdICYmICFlbC5yZWFkT25seSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhZ05hbWUgPT09ICdURVhUQVJFQScgJiYgIWVsLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWwuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyB0byB0aGUgZ2l2ZW4gZWxlbWVudCBpZiBpdCB3YXMgbm90IGFkZGVkIGJ5XG4gICAgICogdGhlIGF1dGhvci5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkRm9jdXNWaXNpYmxlQ2xhc3MoZWwpIHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzLXZpc2libGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdmb2N1cy12aXNpYmxlJyk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcsICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50IGlmIGl0IHdhcyBub3RcbiAgICAgKiBvcmlnaW5hbGx5IGFkZGVkIGJ5IHRoZSBhdXRob3IuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZUZvY3VzVmlzaWJsZUNsYXNzKGVsKSB7XG4gICAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMtdmlzaWJsZScpO1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZvY3VzLXZpc2libGUtYWRkZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgbW9zdCByZWNlbnQgdXNlciBpbnRlcmFjdGlvbiB3YXMgdmlhIHRoZSBrZXlib2FyZDtcbiAgICAgKiBhbmQgdGhlIGtleSBwcmVzcyBkaWQgbm90IGluY2x1ZGUgYSBtZXRhLCBhbHQvb3B0aW9uLCBvciBjb250cm9sIGtleTtcbiAgICAgKiB0aGVuIHRoZSBtb2RhbGl0eSBpcyBrZXlib2FyZC4gT3RoZXJ3aXNlLCB0aGUgbW9kYWxpdHkgaXMgbm90IGtleWJvYXJkLlxuICAgICAqIEFwcGx5IGBmb2N1cy12aXNpYmxlYCB0byBhbnkgY3VycmVudCBhY3RpdmUgZWxlbWVudCBhbmQga2VlcCB0cmFja1xuICAgICAqIG9mIG91ciBrZXlib2FyZCBtb2RhbGl0eSBzdGF0ZSB3aXRoIGBoYWRLZXlib2FyZEV2ZW50YC5cbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgaWYgKGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLmN0cmxLZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNWYWxpZEZvY3VzVGFyZ2V0KHNjb3BlLmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIGFkZEZvY3VzVmlzaWJsZUNsYXNzKHNjb3BlLmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiBhdCBhbnkgcG9pbnQgYSB1c2VyIGNsaWNrcyB3aXRoIGEgcG9pbnRpbmcgZGV2aWNlLCBlbnN1cmUgdGhhdCB3ZSBjaGFuZ2VcbiAgICAgKiB0aGUgbW9kYWxpdHkgYXdheSBmcm9tIGtleWJvYXJkLlxuICAgICAqIFRoaXMgYXZvaWRzIHRoZSBzaXR1YXRpb24gd2hlcmUgYSB1c2VyIHByZXNzZXMgYSBrZXkgb24gYW4gYWxyZWFkeSBmb2N1c2VkXG4gICAgICogZWxlbWVudCwgYW5kIHRoZW4gY2xpY2tzIG9uIGEgZGlmZmVyZW50IGVsZW1lbnQsIGZvY3VzaW5nIGl0IHdpdGggYVxuICAgICAqIHBvaW50aW5nIGRldmljZSwgd2hpbGUgd2Ugc3RpbGwgdGhpbmsgd2UncmUgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZSkge1xuICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGBmb2N1c2AsIGFkZCB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIHRvIHRoZSB0YXJnZXQgaWY6XG4gICAgICogLSB0aGUgdGFyZ2V0IHJlY2VpdmVkIGZvY3VzIGFzIGEgcmVzdWx0IG9mIGtleWJvYXJkIG5hdmlnYXRpb24sIG9yXG4gICAgICogLSB0aGUgZXZlbnQgdGFyZ2V0IGlzIGFuIGVsZW1lbnQgdGhhdCB3aWxsIGxpa2VseSByZXF1aXJlIGludGVyYWN0aW9uXG4gICAgICogICB2aWEgdGhlIGtleWJvYXJkIChlLmcuIGEgdGV4dCBib3gpXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uRm9jdXMoZSkge1xuICAgICAgLy8gUHJldmVudCBJRSBmcm9tIGZvY3VzaW5nIHRoZSBkb2N1bWVudCBvciBIVE1MIGVsZW1lbnQuXG4gICAgICBpZiAoIWlzVmFsaWRGb2N1c1RhcmdldChlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFkS2V5Ym9hcmRFdmVudCB8fCBmb2N1c1RyaWdnZXJzS2V5Ym9hcmRNb2RhbGl0eShlLnRhcmdldCkpIHtcbiAgICAgICAgYWRkRm9jdXNWaXNpYmxlQ2xhc3MoZS50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGBibHVyYCwgcmVtb3ZlIHRoZSBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgZnJvbSB0aGUgdGFyZ2V0LlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbkJsdXIoZSkge1xuICAgICAgaWYgKCFpc1ZhbGlkRm9jdXNUYXJnZXQoZS50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzLXZpc2libGUnKSB8fFxuICAgICAgICBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcpXG4gICAgICApIHtcbiAgICAgICAgLy8gVG8gZGV0ZWN0IGEgdGFiL3dpbmRvdyBzd2l0Y2gsIHdlIGxvb2sgZm9yIGEgYmx1ciBldmVudCBmb2xsb3dlZFxuICAgICAgICAvLyByYXBpZGx5IGJ5IGEgdmlzaWJpbGl0eSBjaGFuZ2UuXG4gICAgICAgIC8vIElmIHdlIGRvbid0IHNlZSBhIHZpc2liaWxpdHkgY2hhbmdlIHdpdGhpbiAxMDBtcywgaXQncyBwcm9iYWJseSBhXG4gICAgICAgIC8vIHJlZ3VsYXIgZm9jdXMgY2hhbmdlLlxuICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IHRydWU7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0KTtcbiAgICAgICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSBmYWxzZTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgcmVtb3ZlRm9jdXNWaXNpYmxlQ2xhc3MoZS50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSB1c2VyIGNoYW5nZXMgdGFicywga2VlcCB0cmFjayBvZiB3aGV0aGVyIG9yIG5vdCB0aGUgcHJldmlvdXNseVxuICAgICAqIGZvY3VzZWQgZWxlbWVudCBoYWQgLmZvY3VzLXZpc2libGUuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZShlKSB7XG4gICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgICAvLyBJZiB0aGUgdGFiIGJlY29tZXMgYWN0aXZlIGFnYWluLCB0aGUgYnJvd3NlciB3aWxsIGhhbmRsZSBjYWxsaW5nIGZvY3VzXG4gICAgICAgIC8vIG9uIHRoZSBlbGVtZW50IChTYWZhcmkgYWN0dWFsbHkgY2FsbHMgaXQgdHdpY2UpLlxuICAgICAgICAvLyBJZiB0aGlzIHRhYiBjaGFuZ2UgY2F1c2VkIGEgYmx1ciBvbiBhbiBlbGVtZW50IHdpdGggZm9jdXMtdmlzaWJsZSxcbiAgICAgICAgLy8gcmUtYXBwbHkgdGhlIGNsYXNzIHdoZW4gdGhlIHVzZXIgc3dpdGNoZXMgYmFjayB0byB0aGUgdGFiLlxuICAgICAgICBpZiAoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkpIHtcbiAgICAgICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBncm91cCBvZiBsaXN0ZW5lcnMgdG8gZGV0ZWN0IHVzYWdlIG9mIGFueSBwb2ludGluZyBkZXZpY2VzLlxuICAgICAqIFRoZXNlIGxpc3RlbmVycyB3aWxsIGJlIGFkZGVkIHdoZW4gdGhlIHBvbHlmaWxsIGZpcnN0IGxvYWRzLCBhbmQgYW55dGltZVxuICAgICAqIHRoZSB3aW5kb3cgaXMgYmx1cnJlZCwgc28gdGhhdCB0aGV5IGFyZSBhY3RpdmUgd2hlbiB0aGUgd2luZG93IHJlZ2FpbnNcbiAgICAgKiBmb2N1cy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBwb2xmeWlsbCBmaXJzdCBsb2FkcywgYXNzdW1lIHRoZSB1c2VyIGlzIGluIGtleWJvYXJkIG1vZGFsaXR5LlxuICAgICAqIElmIGFueSBldmVudCBpcyByZWNlaXZlZCBmcm9tIGEgcG9pbnRpbmcgZGV2aWNlIChlLmcuIG1vdXNlLCBwb2ludGVyLFxuICAgICAqIHRvdWNoKSwgdHVybiBvZmYga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICogVGhpcyBhY2NvdW50cyBmb3Igc2l0dWF0aW9ucyB3aGVyZSBmb2N1cyBlbnRlcnMgdGhlIHBhZ2UgZnJvbSB0aGUgVVJMIGJhci5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25Jbml0aWFsUG9pbnRlck1vdmUoZSkge1xuICAgICAgLy8gV29yayBhcm91bmQgYSBTYWZhcmkgcXVpcmsgdGhhdCBmaXJlcyBhIG1vdXNlbW92ZSBvbiA8aHRtbD4gd2hlbmV2ZXIgdGhlXG4gICAgICAvLyB3aW5kb3cgYmx1cnMsIGV2ZW4gaWYgeW91J3JlIHRhYmJpbmcgb3V0IG9mIHRoZSBwYWdlLiDCr1xcXyjjg4QpXy/Cr1xuICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lICYmIGUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSBmYWxzZTtcbiAgICAgIHJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIEZvciBzb21lIGtpbmRzIG9mIHN0YXRlLCB3ZSBhcmUgaW50ZXJlc3RlZCBpbiBjaGFuZ2VzIGF0IHRoZSBnbG9iYWwgc2NvcGVcbiAgICAvLyBvbmx5LiBGb3IgZXhhbXBsZSwgZ2xvYmFsIHBvaW50ZXIgaW5wdXQsIGdsb2JhbCBrZXkgcHJlc3NlcyBhbmQgZ2xvYmFsXG4gICAgLy8gdmlzaWJpbGl0eSBjaGFuZ2Ugc2hvdWxkIGFmZmVjdCB0aGUgc3RhdGUgYXQgZXZlcnkgc2NvcGU6XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSwgdHJ1ZSk7XG5cbiAgICBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcblxuICAgIC8vIEZvciBmb2N1cyBhbmQgYmx1ciwgd2Ugc3BlY2lmaWNhbGx5IGNhcmUgYWJvdXQgc3RhdGUgY2hhbmdlcyBpbiB0aGUgbG9jYWxcbiAgICAvLyBzY29wZS4gVGhpcyBpcyBiZWNhdXNlIGZvY3VzIC8gYmx1ciBldmVudHMgdGhhdCBvcmlnaW5hdGUgZnJvbSB3aXRoaW4gYVxuICAgIC8vIHNoYWRvdyByb290IGFyZSBub3QgcmUtZGlzcGF0Y2hlZCBmcm9tIHRoZSBob3N0IGVsZW1lbnQgaWYgaXQgd2FzIGFscmVhZHlcbiAgICAvLyB0aGUgYWN0aXZlIGVsZW1lbnQgaW4gaXRzIG93biBzY29wZTpcbiAgICBzY29wZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMsIHRydWUpO1xuICAgIHNjb3BlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIsIHRydWUpO1xuXG4gICAgLy8gV2UgZGV0ZWN0IHRoYXQgYSBub2RlIGlzIGEgU2hhZG93Um9vdCBieSBlbnN1cmluZyB0aGF0IGl0IGlzIGFcbiAgICAvLyBEb2N1bWVudEZyYWdtZW50IGFuZCBhbHNvIGhhcyBhIGhvc3QgcHJvcGVydHkuIFRoaXMgY2hlY2sgY292ZXJzIG5hdGl2ZVxuICAgIC8vIGltcGxlbWVudGF0aW9uIGFuZCBwb2x5ZmlsbCBpbXBsZW1lbnRhdGlvbiB0cmFuc3BhcmVudGx5LiBJZiB3ZSBvbmx5IGNhcmVkXG4gICAgLy8gYWJvdXQgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgd2UgY291bGQganVzdCBjaGVjayBpZiB0aGUgc2NvcGUgd2FzXG4gICAgLy8gYW4gaW5zdGFuY2Ugb2YgYSBTaGFkb3dSb290LlxuICAgIGlmIChzY29wZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFICYmIHNjb3BlLmhvc3QpIHtcbiAgICAgIC8vIFNpbmNlIGEgU2hhZG93Um9vdCBpcyBhIHNwZWNpYWwga2luZCBvZiBEb2N1bWVudEZyYWdtZW50LCBpdCBkb2VzIG5vdFxuICAgICAgLy8gaGF2ZSBhIHJvb3QgZWxlbWVudCB0byBhZGQgYSBjbGFzcyB0by4gU28sIHdlIGFkZCB0aGlzIGF0dHJpYnV0ZSB0byB0aGVcbiAgICAgIC8vIGhvc3QgZWxlbWVudCBpbnN0ZWFkOlxuICAgICAgc2NvcGUuaG9zdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtanMtZm9jdXMtdmlzaWJsZScsICcnKTtcbiAgICB9IGVsc2UgaWYgKHNjb3BlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdqcy1mb2N1cy12aXNpYmxlJyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWpzLWZvY3VzLXZpc2libGUnLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSXQgaXMgaW1wb3J0YW50IHRvIHdyYXAgYWxsIHJlZmVyZW5jZXMgdG8gZ2xvYmFsIHdpbmRvdyBhbmQgZG9jdW1lbnQgaW5cbiAgLy8gdGhlc2UgY2hlY2tzIHRvIHN1cHBvcnQgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHVzZSBjYXNlc1xuICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGUvaXNzdWVzLzE5OVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIE1ha2UgdGhlIHBvbHlmaWxsIGhlbHBlciBnbG9iYWxseSBhdmFpbGFibGUuIFRoaXMgY2FuIGJlIHVzZWQgYXMgYSBzaWduYWxcbiAgICAvLyB0byBpbnRlcmVzdGVkIGxpYnJhcmllcyB0aGF0IHdpc2ggdG8gY29vcmRpbmF0ZSB3aXRoIHRoZSBwb2x5ZmlsbCBmb3IgZS5nLixcbiAgICAvLyBhcHBseWluZyB0aGUgcG9seWZpbGwgdG8gYSBzaGFkb3cgcm9vdDpcbiAgICB3aW5kb3cuYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbCA9IGFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGw7XG5cbiAgICAvLyBOb3RpZnkgaW50ZXJlc3RlZCBsaWJyYXJpZXMgb2YgdGhlIHBvbHlmaWxsJ3MgcHJlc2VuY2UsIGluIGNhc2UgdGhlXG4gICAgLy8gcG9seWZpbGwgd2FzIGxvYWRlZCBsYXppbHk6XG4gICAgdmFyIGV2ZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdmb2N1cy12aXNpYmxlLXBvbHlmaWxsLXJlYWR5Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCB1c2luZyBDdXN0b21FdmVudCBhcyBhIGNvbnN0cnVjdG9yIGRpcmVjdGx5OlxuICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2ZW50LmluaXRDdXN0b21FdmVudCgnZm9jdXMtdmlzaWJsZS1wb2x5ZmlsbC1yZWFkeScsIGZhbHNlLCBmYWxzZSwge30pO1xuICAgIH1cblxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gQXBwbHkgdGhlIHBvbHlmaWxsIHRvIHRoZSBnbG9iYWwgZG9jdW1lbnQsIHNvIHRoYXQgbm8gSmF2YVNjcmlwdFxuICAgIC8vIGNvb3JkaW5hdGlvbiBpcyByZXF1aXJlZCB0byB1c2UgdGhlIHBvbHlmaWxsIGluIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnQ6XG4gICAgYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbChkb2N1bWVudCk7XG4gIH1cblxufSkpKTtcbiIsIihmdW5jdGlvbih3aW5kb3csIGZhY3RvcnkpIHtcblx0dmFyIGxhenlTaXplcyA9IGZhY3Rvcnkod2luZG93LCB3aW5kb3cuZG9jdW1lbnQsIERhdGUpO1xuXHR3aW5kb3cubGF6eVNpemVzID0gbGF6eVNpemVzO1xuXHRpZih0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKXtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGxhenlTaXplcztcblx0fVxufSh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID9cbiAgICAgIHdpbmRvdyA6IHt9LCBmdW5jdGlvbiBsKHdpbmRvdywgZG9jdW1lbnQsIERhdGUpIHsgLy8gUGFzcyBpbiB0aGUgd2luZG9lIERhdGUgZnVuY3Rpb24gYWxzbyBmb3IgU1NSIGJlY2F1c2UgdGhlIERhdGUgY2xhc3MgY2FuIGJlIGxvc3Rcblx0J3VzZSBzdHJpY3QnO1xuXHQvKmpzaGludCBlcW51bGw6dHJ1ZSAqL1xuXG5cdHZhciBsYXp5c2l6ZXMsIGxhenlTaXplc0NmZztcblxuXHQoZnVuY3Rpb24oKXtcblx0XHR2YXIgcHJvcDtcblxuXHRcdHZhciBsYXp5U2l6ZXNEZWZhdWx0cyA9IHtcblx0XHRcdGxhenlDbGFzczogJ2xhenlsb2FkJyxcblx0XHRcdGxvYWRlZENsYXNzOiAnbGF6eWxvYWRlZCcsXG5cdFx0XHRsb2FkaW5nQ2xhc3M6ICdsYXp5bG9hZGluZycsXG5cdFx0XHRwcmVsb2FkQ2xhc3M6ICdsYXp5cHJlbG9hZCcsXG5cdFx0XHRlcnJvckNsYXNzOiAnbGF6eWVycm9yJyxcblx0XHRcdC8vc3RyaWN0Q2xhc3M6ICdsYXp5c3RyaWN0Jyxcblx0XHRcdGF1dG9zaXplc0NsYXNzOiAnbGF6eWF1dG9zaXplcycsXG5cdFx0XHRzcmNBdHRyOiAnZGF0YS1zcmMnLFxuXHRcdFx0c3Jjc2V0QXR0cjogJ2RhdGEtc3Jjc2V0Jyxcblx0XHRcdHNpemVzQXR0cjogJ2RhdGEtc2l6ZXMnLFxuXHRcdFx0Ly9wcmVsb2FkQWZ0ZXJMb2FkOiBmYWxzZSxcblx0XHRcdG1pblNpemU6IDQwLFxuXHRcdFx0Y3VzdG9tTWVkaWE6IHt9LFxuXHRcdFx0aW5pdDogdHJ1ZSxcblx0XHRcdGV4cEZhY3RvcjogMS41LFxuXHRcdFx0aEZhYzogMC44LFxuXHRcdFx0bG9hZE1vZGU6IDIsXG5cdFx0XHRsb2FkSGlkZGVuOiB0cnVlLFxuXHRcdFx0cmljVGltZW91dDogMCxcblx0XHRcdHRocm90dGxlRGVsYXk6IDEyNSxcblx0XHR9O1xuXG5cdFx0bGF6eVNpemVzQ2ZnID0gd2luZG93LmxhenlTaXplc0NvbmZpZyB8fCB3aW5kb3cubGF6eXNpemVzQ29uZmlnIHx8IHt9O1xuXG5cdFx0Zm9yKHByb3AgaW4gbGF6eVNpemVzRGVmYXVsdHMpe1xuXHRcdFx0aWYoIShwcm9wIGluIGxhenlTaXplc0NmZykpe1xuXHRcdFx0XHRsYXp5U2l6ZXNDZmdbcHJvcF0gPSBsYXp5U2l6ZXNEZWZhdWx0c1twcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdH0pKCk7XG5cblx0aWYgKCFkb2N1bWVudCB8fCAhZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpbml0OiBmdW5jdGlvbiAoKSB7fSxcblx0XHRcdGNmZzogbGF6eVNpemVzQ2ZnLFxuXHRcdFx0bm9TdXBwb3J0OiB0cnVlLFxuXHRcdH07XG5cdH1cblxuXHR2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXHR2YXIgc3VwcG9ydFBpY3R1cmUgPSB3aW5kb3cuSFRNTFBpY3R1cmVFbGVtZW50O1xuXG5cdHZhciBfYWRkRXZlbnRMaXN0ZW5lciA9ICdhZGRFdmVudExpc3RlbmVyJztcblxuXHR2YXIgX2dldEF0dHJpYnV0ZSA9ICdnZXRBdHRyaWJ1dGUnO1xuXG5cdC8qKlxuXHQgKiBVcGRhdGUgdG8gYmluZCB0byB3aW5kb3cgYmVjYXVzZSAndGhpcycgYmVjb21lcyBudWxsIGR1cmluZyBTU1Jcblx0ICogYnVpbGRzLlxuXHQgKi9cblx0dmFyIGFkZEV2ZW50TGlzdGVuZXIgPSB3aW5kb3dbX2FkZEV2ZW50TGlzdGVuZXJdLmJpbmQod2luZG93KTtcblxuXHR2YXIgc2V0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0O1xuXG5cdHZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQ7XG5cblx0dmFyIHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjaztcblxuXHR2YXIgcmVnUGljdHVyZSA9IC9ecGljdHVyZSQvaTtcblxuXHR2YXIgbG9hZEV2ZW50cyA9IFsnbG9hZCcsICdlcnJvcicsICdsYXp5aW5jbHVkZWQnLCAnX2xhenlsb2FkZWQnXTtcblxuXHR2YXIgcmVnQ2xhc3NDYWNoZSA9IHt9O1xuXG5cdHZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cblx0dmFyIGhhc0NsYXNzID0gZnVuY3Rpb24oZWxlLCBjbHMpIHtcblx0XHRpZighcmVnQ2xhc3NDYWNoZVtjbHNdKXtcblx0XHRcdHJlZ0NsYXNzQ2FjaGVbY2xzXSA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScrY2xzKycoXFxcXHN8JCknKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlZ0NsYXNzQ2FjaGVbY2xzXS50ZXN0KGVsZVtfZ2V0QXR0cmlidXRlXSgnY2xhc3MnKSB8fCAnJykgJiYgcmVnQ2xhc3NDYWNoZVtjbHNdO1xuXHR9O1xuXG5cdHZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZSwgY2xzKSB7XG5cdFx0aWYgKCFoYXNDbGFzcyhlbGUsIGNscykpe1xuXHRcdFx0ZWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKS50cmltKCkgKyAnICcgKyBjbHMpO1xuXHRcdH1cblx0fTtcblxuXHR2YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbGUsIGNscykge1xuXHRcdHZhciByZWc7XG5cdFx0aWYgKChyZWcgPSBoYXNDbGFzcyhlbGUsY2xzKSkpIHtcblx0XHRcdGVsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGVsZVtfZ2V0QXR0cmlidXRlXSgnY2xhc3MnKSB8fCAnJykucmVwbGFjZShyZWcsICcgJykpO1xuXHRcdH1cblx0fTtcblxuXHR2YXIgYWRkUmVtb3ZlTG9hZEV2ZW50cyA9IGZ1bmN0aW9uKGRvbSwgZm4sIGFkZCl7XG5cdFx0dmFyIGFjdGlvbiA9IGFkZCA/IF9hZGRFdmVudExpc3RlbmVyIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuXHRcdGlmKGFkZCl7XG5cdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGRvbSwgZm4pO1xuXHRcdH1cblx0XHRsb2FkRXZlbnRzLmZvckVhY2goZnVuY3Rpb24oZXZ0KXtcblx0XHRcdGRvbVthY3Rpb25dKGV2dCwgZm4pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHZhciB0cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbihlbGVtLCBuYW1lLCBkZXRhaWwsIG5vQnViYmxlcywgbm9DYW5jZWxhYmxlKXtcblx0XHR2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblxuXHRcdGlmKCFkZXRhaWwpe1xuXHRcdFx0ZGV0YWlsID0ge307XG5cdFx0fVxuXG5cdFx0ZGV0YWlsLmluc3RhbmNlID0gbGF6eXNpemVzO1xuXG5cdFx0ZXZlbnQuaW5pdEV2ZW50KG5hbWUsICFub0J1YmJsZXMsICFub0NhbmNlbGFibGUpO1xuXG5cdFx0ZXZlbnQuZGV0YWlsID0gZGV0YWlsO1xuXG5cdFx0ZWxlbS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0XHRyZXR1cm4gZXZlbnQ7XG5cdH07XG5cblx0dmFyIHVwZGF0ZVBvbHlmaWxsID0gZnVuY3Rpb24gKGVsLCBmdWxsKXtcblx0XHR2YXIgcG9seWZpbGw7XG5cdFx0aWYoICFzdXBwb3J0UGljdHVyZSAmJiAoIHBvbHlmaWxsID0gKHdpbmRvdy5waWN0dXJlZmlsbCB8fCBsYXp5U2l6ZXNDZmcucGYpICkgKXtcblx0XHRcdGlmKGZ1bGwgJiYgZnVsbC5zcmMgJiYgIWVsW19nZXRBdHRyaWJ1dGVdKCdzcmNzZXQnKSl7XG5cdFx0XHRcdGVsLnNldEF0dHJpYnV0ZSgnc3Jjc2V0JywgZnVsbC5zcmMpO1xuXHRcdFx0fVxuXHRcdFx0cG9seWZpbGwoe3JlZXZhbHVhdGU6IHRydWUsIGVsZW1lbnRzOiBbZWxdfSk7XG5cdFx0fSBlbHNlIGlmKGZ1bGwgJiYgZnVsbC5zcmMpe1xuXHRcdFx0ZWwuc3JjID0gZnVsbC5zcmM7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBnZXRDU1MgPSBmdW5jdGlvbiAoZWxlbSwgc3R5bGUpe1xuXHRcdHJldHVybiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBudWxsKSB8fCB7fSlbc3R5bGVdO1xuXHR9O1xuXG5cdHZhciBnZXRXaWR0aCA9IGZ1bmN0aW9uKGVsZW0sIHBhcmVudCwgd2lkdGgpe1xuXHRcdHdpZHRoID0gd2lkdGggfHwgZWxlbS5vZmZzZXRXaWR0aDtcblxuXHRcdHdoaWxlKHdpZHRoIDwgbGF6eVNpemVzQ2ZnLm1pblNpemUgJiYgcGFyZW50ICYmICFlbGVtLl9sYXp5c2l6ZXNXaWR0aCl7XG5cdFx0XHR3aWR0aCA9ICBwYXJlbnQub2Zmc2V0V2lkdGg7XG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd2lkdGg7XG5cdH07XG5cblx0dmFyIHJBRiA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBydW5uaW5nLCB3YWl0aW5nO1xuXHRcdHZhciBmaXJzdEZucyA9IFtdO1xuXHRcdHZhciBzZWNvbmRGbnMgPSBbXTtcblx0XHR2YXIgZm5zID0gZmlyc3RGbnM7XG5cblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0XHRcdHZhciBydW5GbnMgPSBmbnM7XG5cblx0XHRcdGZucyA9IGZpcnN0Rm5zLmxlbmd0aCA/IHNlY29uZEZucyA6IGZpcnN0Rm5zO1xuXG5cdFx0XHRydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHdhaXRpbmcgPSBmYWxzZTtcblxuXHRcdFx0d2hpbGUocnVuRm5zLmxlbmd0aCl7XG5cdFx0XHRcdHJ1bkZucy5zaGlmdCgpKCk7XG5cdFx0XHR9XG5cblx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0dmFyIHJhZkJhdGNoID0gZnVuY3Rpb24oZm4sIHF1ZXVlKXtcblx0XHRcdGlmKHJ1bm5pbmcgJiYgIXF1ZXVlKXtcblx0XHRcdFx0Zm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZucy5wdXNoKGZuKTtcblxuXHRcdFx0XHRpZighd2FpdGluZyl7XG5cdFx0XHRcdFx0d2FpdGluZyA9IHRydWU7XG5cdFx0XHRcdFx0KGRvY3VtZW50LmhpZGRlbiA/IHNldFRpbWVvdXQgOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUpKHJ1bik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmFmQmF0Y2guX2xzRmx1c2ggPSBydW47XG5cblx0XHRyZXR1cm4gcmFmQmF0Y2g7XG5cdH0pKCk7XG5cblx0dmFyIHJBRkl0ID0gZnVuY3Rpb24oZm4sIHNpbXBsZSl7XG5cdFx0cmV0dXJuIHNpbXBsZSA/XG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0ckFGKGZuKTtcblx0XHRcdH0gOlxuXHRcdFx0ZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cztcblx0XHRcdFx0ckFGKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Zm4uYXBwbHkodGhhdCwgYXJncyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdDtcblx0fTtcblxuXHR2YXIgdGhyb3R0bGUgPSBmdW5jdGlvbihmbil7XG5cdFx0dmFyIHJ1bm5pbmc7XG5cdFx0dmFyIGxhc3RUaW1lID0gMDtcblx0XHR2YXIgZ0RlbGF5ID0gbGF6eVNpemVzQ2ZnLnRocm90dGxlRGVsYXk7XG5cdFx0dmFyIHJJQ1RpbWVvdXQgPSBsYXp5U2l6ZXNDZmcucmljVGltZW91dDtcblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcblx0XHRcdGZuKCk7XG5cdFx0fTtcblx0XHR2YXIgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjayAmJiBySUNUaW1lb3V0ID4gNDkgP1xuXHRcdFx0ZnVuY3Rpb24oKXtcblx0XHRcdFx0cmVxdWVzdElkbGVDYWxsYmFjayhydW4sIHt0aW1lb3V0OiBySUNUaW1lb3V0fSk7XG5cblx0XHRcdFx0aWYocklDVGltZW91dCAhPT0gbGF6eVNpemVzQ2ZnLnJpY1RpbWVvdXQpe1xuXHRcdFx0XHRcdHJJQ1RpbWVvdXQgPSBsYXp5U2l6ZXNDZmcucmljVGltZW91dDtcblx0XHRcdFx0fVxuXHRcdFx0fSA6XG5cdFx0XHRyQUZJdChmdW5jdGlvbigpe1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJ1bik7XG5cdFx0XHR9LCB0cnVlKVxuXHRcdDtcblxuXHRcdHJldHVybiBmdW5jdGlvbihpc1ByaW9yaXR5KXtcblx0XHRcdHZhciBkZWxheTtcblxuXHRcdFx0aWYoKGlzUHJpb3JpdHkgPSBpc1ByaW9yaXR5ID09PSB0cnVlKSl7XG5cdFx0XHRcdHJJQ1RpbWVvdXQgPSAzMztcblx0XHRcdH1cblxuXHRcdFx0aWYocnVubmluZyl7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0cnVubmluZyA9ICB0cnVlO1xuXG5cdFx0XHRkZWxheSA9IGdEZWxheSAtIChEYXRlLm5vdygpIC0gbGFzdFRpbWUpO1xuXG5cdFx0XHRpZihkZWxheSA8IDApe1xuXHRcdFx0XHRkZWxheSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmKGlzUHJpb3JpdHkgfHwgZGVsYXkgPCA5KXtcblx0XHRcdFx0aWRsZUNhbGxiYWNrKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGlkbGVDYWxsYmFjaywgZGVsYXkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cblx0Ly9iYXNlZCBvbiBodHRwOi8vbW9kZXJuamF2YXNjcmlwdC5ibG9nc3BvdC5kZS8yMDEzLzA4L2J1aWxkaW5nLWJldHRlci1kZWJvdW5jZS5odG1sXG5cdHZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMpIHtcblx0XHR2YXIgdGltZW91dCwgdGltZXN0YW1wO1xuXHRcdHZhciB3YWl0ID0gOTk7XG5cdFx0dmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdGZ1bmMoKTtcblx0XHR9O1xuXHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGxhc3QgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wO1xuXG5cdFx0XHRpZiAobGFzdCA8IHdhaXQpIHtcblx0XHRcdFx0c2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0KHJlcXVlc3RJZGxlQ2FsbGJhY2sgfHwgcnVuKShydW4pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG5cdFx0XHRpZiAoIXRpbWVvdXQpIHtcblx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cblx0dmFyIGxvYWRlciA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBwcmVsb2FkRWxlbXMsIGlzQ29tcGxldGVkLCByZXNldFByZWxvYWRpbmdUaW1lciwgbG9hZE1vZGUsIHN0YXJ0ZWQ7XG5cblx0XHR2YXIgZUx2VywgZWx2SCwgZUx0b3AsIGVMbGVmdCwgZUxyaWdodCwgZUxib3R0b20sIGlzQm9keUhpZGRlbjtcblxuXHRcdHZhciByZWdJbWcgPSAvXmltZyQvaTtcblx0XHR2YXIgcmVnSWZyYW1lID0gL15pZnJhbWUkL2k7XG5cblx0XHR2YXIgc3VwcG9ydFNjcm9sbCA9ICgnb25zY3JvbGwnIGluIHdpbmRvdykgJiYgISgvKGdsZXxpbmcpYm90Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKTtcblxuXHRcdHZhciBzaHJpbmtFeHBhbmQgPSAwO1xuXHRcdHZhciBjdXJyZW50RXhwYW5kID0gMDtcblxuXHRcdHZhciBpc0xvYWRpbmcgPSAwO1xuXHRcdHZhciBsb3dSdW5zID0gLTE7XG5cblx0XHR2YXIgcmVzZXRQcmVsb2FkaW5nID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRpc0xvYWRpbmctLTtcblx0XHRcdGlmKCFlIHx8IGlzTG9hZGluZyA8IDAgfHwgIWUudGFyZ2V0KXtcblx0XHRcdFx0aXNMb2FkaW5nID0gMDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGlzVmlzaWJsZSA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRpZiAoaXNCb2R5SGlkZGVuID09IG51bGwpIHtcblx0XHRcdFx0aXNCb2R5SGlkZGVuID0gZ2V0Q1NTKGRvY3VtZW50LmJvZHksICd2aXNpYmlsaXR5JykgPT0gJ2hpZGRlbic7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBpc0JvZHlIaWRkZW4gfHwgIShnZXRDU1MoZWxlbS5wYXJlbnROb2RlLCAndmlzaWJpbGl0eScpID09ICdoaWRkZW4nICYmIGdldENTUyhlbGVtLCAndmlzaWJpbGl0eScpID09ICdoaWRkZW4nKTtcblx0XHR9O1xuXG5cdFx0dmFyIGlzTmVzdGVkVmlzaWJsZSA9IGZ1bmN0aW9uKGVsZW0sIGVsZW1FeHBhbmQpe1xuXHRcdFx0dmFyIG91dGVyUmVjdDtcblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtO1xuXHRcdFx0dmFyIHZpc2libGUgPSBpc1Zpc2libGUoZWxlbSk7XG5cblx0XHRcdGVMdG9wIC09IGVsZW1FeHBhbmQ7XG5cdFx0XHRlTGJvdHRvbSArPSBlbGVtRXhwYW5kO1xuXHRcdFx0ZUxsZWZ0IC09IGVsZW1FeHBhbmQ7XG5cdFx0XHRlTHJpZ2h0ICs9IGVsZW1FeHBhbmQ7XG5cblx0XHRcdHdoaWxlKHZpc2libGUgJiYgKHBhcmVudCA9IHBhcmVudC5vZmZzZXRQYXJlbnQpICYmIHBhcmVudCAhPSBkb2N1bWVudC5ib2R5ICYmIHBhcmVudCAhPSBkb2NFbGVtKXtcblx0XHRcdFx0dmlzaWJsZSA9ICgoZ2V0Q1NTKHBhcmVudCwgJ29wYWNpdHknKSB8fCAxKSA+IDApO1xuXG5cdFx0XHRcdGlmKHZpc2libGUgJiYgZ2V0Q1NTKHBhcmVudCwgJ292ZXJmbG93JykgIT0gJ3Zpc2libGUnKXtcblx0XHRcdFx0XHRvdXRlclJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0dmlzaWJsZSA9IGVMcmlnaHQgPiBvdXRlclJlY3QubGVmdCAmJlxuXHRcdFx0XHRcdFx0ZUxsZWZ0IDwgb3V0ZXJSZWN0LnJpZ2h0ICYmXG5cdFx0XHRcdFx0XHRlTGJvdHRvbSA+IG91dGVyUmVjdC50b3AgLSAxICYmXG5cdFx0XHRcdFx0XHRlTHRvcCA8IG91dGVyUmVjdC5ib3R0b20gKyAxXG5cdFx0XHRcdFx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB2aXNpYmxlO1xuXHRcdH07XG5cblx0XHR2YXIgY2hlY2tFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGVMbGVuLCBpLCByZWN0LCBhdXRvTG9hZEVsZW0sIGxvYWRlZFNvbWV0aGluZywgZWxlbUV4cGFuZCwgZWxlbU5lZ2F0aXZlRXhwYW5kLCBlbGVtRXhwYW5kVmFsLFxuXHRcdFx0XHRiZWZvcmVFeHBhbmRWYWwsIGRlZmF1bHRFeHBhbmQsIHByZWxvYWRFeHBhbmQsIGhGYWM7XG5cdFx0XHR2YXIgbGF6eWxvYWRFbGVtcyA9IGxhenlzaXplcy5lbGVtZW50cztcblxuXHRcdFx0aWYoKGxvYWRNb2RlID0gbGF6eVNpemVzQ2ZnLmxvYWRNb2RlKSAmJiBpc0xvYWRpbmcgPCA4ICYmIChlTGxlbiA9IGxhenlsb2FkRWxlbXMubGVuZ3RoKSl7XG5cblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdFx0bG93UnVucysrO1xuXG5cdFx0XHRcdGZvcig7IGkgPCBlTGxlbjsgaSsrKXtcblxuXHRcdFx0XHRcdGlmKCFsYXp5bG9hZEVsZW1zW2ldIHx8IGxhenlsb2FkRWxlbXNbaV0uX2xhenlSYWNlKXtjb250aW51ZTt9XG5cblx0XHRcdFx0XHRpZighc3VwcG9ydFNjcm9sbCB8fCAobGF6eXNpemVzLnByZW1hdHVyZVVudmVpbCAmJiBsYXp5c2l6ZXMucHJlbWF0dXJlVW52ZWlsKGxhenlsb2FkRWxlbXNbaV0pKSl7dW52ZWlsRWxlbWVudChsYXp5bG9hZEVsZW1zW2ldKTtjb250aW51ZTt9XG5cblx0XHRcdFx0XHRpZighKGVsZW1FeHBhbmRWYWwgPSBsYXp5bG9hZEVsZW1zW2ldW19nZXRBdHRyaWJ1dGVdKCdkYXRhLWV4cGFuZCcpKSB8fCAhKGVsZW1FeHBhbmQgPSBlbGVtRXhwYW5kVmFsICogMSkpe1xuXHRcdFx0XHRcdFx0ZWxlbUV4cGFuZCA9IGN1cnJlbnRFeHBhbmQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFkZWZhdWx0RXhwYW5kKSB7XG5cdFx0XHRcdFx0XHRkZWZhdWx0RXhwYW5kID0gKCFsYXp5U2l6ZXNDZmcuZXhwYW5kIHx8IGxhenlTaXplc0NmZy5leHBhbmQgPCAxKSA/XG5cdFx0XHRcdFx0XHRcdGRvY0VsZW0uY2xpZW50SGVpZ2h0ID4gNTAwICYmIGRvY0VsZW0uY2xpZW50V2lkdGggPiA1MDAgPyA1MDAgOiAzNzAgOlxuXHRcdFx0XHRcdFx0XHRsYXp5U2l6ZXNDZmcuZXhwYW5kO1xuXG5cdFx0XHRcdFx0XHRsYXp5c2l6ZXMuX2RlZkV4ID0gZGVmYXVsdEV4cGFuZDtcblxuXHRcdFx0XHRcdFx0cHJlbG9hZEV4cGFuZCA9IGRlZmF1bHRFeHBhbmQgKiBsYXp5U2l6ZXNDZmcuZXhwRmFjdG9yO1xuXHRcdFx0XHRcdFx0aEZhYyA9IGxhenlTaXplc0NmZy5oRmFjO1xuXHRcdFx0XHRcdFx0aXNCb2R5SGlkZGVuID0gbnVsbDtcblxuXHRcdFx0XHRcdFx0aWYoY3VycmVudEV4cGFuZCA8IHByZWxvYWRFeHBhbmQgJiYgaXNMb2FkaW5nIDwgMSAmJiBsb3dSdW5zID4gMiAmJiBsb2FkTW9kZSA+IDIgJiYgIWRvY3VtZW50LmhpZGRlbil7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBwcmVsb2FkRXhwYW5kO1xuXHRcdFx0XHRcdFx0XHRsb3dSdW5zID0gMDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihsb2FkTW9kZSA+IDEgJiYgbG93UnVucyA+IDEgJiYgaXNMb2FkaW5nIDwgNil7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBkZWZhdWx0RXhwYW5kO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudEV4cGFuZCA9IHNocmlua0V4cGFuZDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZihiZWZvcmVFeHBhbmRWYWwgIT09IGVsZW1FeHBhbmQpe1xuXHRcdFx0XHRcdFx0ZUx2VyA9IGlubmVyV2lkdGggKyAoZWxlbUV4cGFuZCAqIGhGYWMpO1xuXHRcdFx0XHRcdFx0ZWx2SCA9IGlubmVySGVpZ2h0ICsgZWxlbUV4cGFuZDtcblx0XHRcdFx0XHRcdGVsZW1OZWdhdGl2ZUV4cGFuZCA9IGVsZW1FeHBhbmQgKiAtMTtcblx0XHRcdFx0XHRcdGJlZm9yZUV4cGFuZFZhbCA9IGVsZW1FeHBhbmQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVjdCA9IGxhenlsb2FkRWxlbXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRcdFx0XHRpZiAoKGVMYm90dG9tID0gcmVjdC5ib3R0b20pID49IGVsZW1OZWdhdGl2ZUV4cGFuZCAmJlxuXHRcdFx0XHRcdFx0KGVMdG9wID0gcmVjdC50b3ApIDw9IGVsdkggJiZcblx0XHRcdFx0XHRcdChlTHJpZ2h0ID0gcmVjdC5yaWdodCkgPj0gZWxlbU5lZ2F0aXZlRXhwYW5kICogaEZhYyAmJlxuXHRcdFx0XHRcdFx0KGVMbGVmdCA9IHJlY3QubGVmdCkgPD0gZUx2VyAmJlxuXHRcdFx0XHRcdFx0KGVMYm90dG9tIHx8IGVMcmlnaHQgfHwgZUxsZWZ0IHx8IGVMdG9wKSAmJlxuXHRcdFx0XHRcdFx0KGxhenlTaXplc0NmZy5sb2FkSGlkZGVuIHx8IGlzVmlzaWJsZShsYXp5bG9hZEVsZW1zW2ldKSkgJiZcblx0XHRcdFx0XHRcdCgoaXNDb21wbGV0ZWQgJiYgaXNMb2FkaW5nIDwgMyAmJiAhZWxlbUV4cGFuZFZhbCAmJiAobG9hZE1vZGUgPCAzIHx8IGxvd1J1bnMgPCA0KSkgfHwgaXNOZXN0ZWRWaXNpYmxlKGxhenlsb2FkRWxlbXNbaV0sIGVsZW1FeHBhbmQpKSl7XG5cdFx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGxhenlsb2FkRWxlbXNbaV0pO1xuXHRcdFx0XHRcdFx0bG9hZGVkU29tZXRoaW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGlmKGlzTG9hZGluZyA+IDkpe2JyZWFrO31cblx0XHRcdFx0XHR9IGVsc2UgaWYoIWxvYWRlZFNvbWV0aGluZyAmJiBpc0NvbXBsZXRlZCAmJiAhYXV0b0xvYWRFbGVtICYmXG5cdFx0XHRcdFx0XHRpc0xvYWRpbmcgPCA0ICYmIGxvd1J1bnMgPCA0ICYmIGxvYWRNb2RlID4gMiAmJlxuXHRcdFx0XHRcdFx0KHByZWxvYWRFbGVtc1swXSB8fCBsYXp5U2l6ZXNDZmcucHJlbG9hZEFmdGVyTG9hZCkgJiZcblx0XHRcdFx0XHRcdChwcmVsb2FkRWxlbXNbMF0gfHwgKCFlbGVtRXhwYW5kVmFsICYmICgoZUxib3R0b20gfHwgZUxyaWdodCB8fCBlTGxlZnQgfHwgZUx0b3ApIHx8IGxhenlsb2FkRWxlbXNbaV1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNpemVzQXR0cikgIT0gJ2F1dG8nKSkpKXtcblx0XHRcdFx0XHRcdGF1dG9Mb2FkRWxlbSA9IHByZWxvYWRFbGVtc1swXSB8fCBsYXp5bG9hZEVsZW1zW2ldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGF1dG9Mb2FkRWxlbSAmJiAhbG9hZGVkU29tZXRoaW5nKXtcblx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGF1dG9Mb2FkRWxlbSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIHRocm90dGxlZENoZWNrRWxlbWVudHMgPSB0aHJvdHRsZShjaGVja0VsZW1lbnRzKTtcblxuXHRcdHZhciBzd2l0Y2hMb2FkaW5nQ2xhc3MgPSBmdW5jdGlvbihlKXtcblx0XHRcdHZhciBlbGVtID0gZS50YXJnZXQ7XG5cblx0XHRcdGlmIChlbGVtLl9sYXp5Q2FjaGUpIHtcblx0XHRcdFx0ZGVsZXRlIGVsZW0uX2xhenlDYWNoZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNldFByZWxvYWRpbmcoZSk7XG5cdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubG9hZGVkQ2xhc3MpO1xuXHRcdFx0cmVtb3ZlQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxvYWRpbmdDbGFzcyk7XG5cdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGVsZW0sIHJhZlN3aXRjaExvYWRpbmdDbGFzcyk7XG5cdFx0XHR0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenlsb2FkZWQnKTtcblx0XHR9O1xuXHRcdHZhciByYWZlZFN3aXRjaExvYWRpbmdDbGFzcyA9IHJBRkl0KHN3aXRjaExvYWRpbmdDbGFzcyk7XG5cdFx0dmFyIHJhZlN3aXRjaExvYWRpbmdDbGFzcyA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0cmFmZWRTd2l0Y2hMb2FkaW5nQ2xhc3Moe3RhcmdldDogZS50YXJnZXR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIGNoYW5nZUlmcmFtZVNyYyA9IGZ1bmN0aW9uKGVsZW0sIHNyYyl7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRlbGVtLmNvbnRlbnRXaW5kb3cubG9jYXRpb24ucmVwbGFjZShzcmMpO1xuXHRcdFx0fSBjYXRjaChlKXtcblx0XHRcdFx0ZWxlbS5zcmMgPSBzcmM7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBoYW5kbGVTb3VyY2VzID0gZnVuY3Rpb24oc291cmNlKXtcblx0XHRcdHZhciBjdXN0b21NZWRpYTtcblxuXHRcdFx0dmFyIHNvdXJjZVNyY3NldCA9IHNvdXJjZVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDZmcuc3Jjc2V0QXR0cik7XG5cblx0XHRcdGlmKCAoY3VzdG9tTWVkaWEgPSBsYXp5U2l6ZXNDZmcuY3VzdG9tTWVkaWFbc291cmNlW19nZXRBdHRyaWJ1dGVdKCdkYXRhLW1lZGlhJykgfHwgc291cmNlW19nZXRBdHRyaWJ1dGVdKCdtZWRpYScpXSkgKXtcblx0XHRcdFx0c291cmNlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBjdXN0b21NZWRpYSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHNvdXJjZVNyY3NldCl7XG5cdFx0XHRcdHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyY3NldCcsIHNvdXJjZVNyY3NldCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBsYXp5VW52ZWlsID0gckFGSXQoZnVuY3Rpb24gKGVsZW0sIGRldGFpbCwgaXNBdXRvLCBzaXplcywgaXNJbWcpe1xuXHRcdFx0dmFyIHNyYywgc3Jjc2V0LCBwYXJlbnQsIGlzUGljdHVyZSwgZXZlbnQsIGZpcmVzTG9hZDtcblxuXHRcdFx0aWYoIShldmVudCA9IHRyaWdnZXJFdmVudChlbGVtLCAnbGF6eWJlZm9yZXVudmVpbCcsIGRldGFpbCkpLmRlZmF1bHRQcmV2ZW50ZWQpe1xuXG5cdFx0XHRcdGlmKHNpemVzKXtcblx0XHRcdFx0XHRpZihpc0F1dG8pe1xuXHRcdFx0XHRcdFx0YWRkQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmF1dG9zaXplc0NsYXNzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgc2l6ZXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNyY3NldCA9IGVsZW1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNyY3NldEF0dHIpO1xuXHRcdFx0XHRzcmMgPSBlbGVtW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zcmNBdHRyKTtcblxuXHRcdFx0XHRpZihpc0ltZykge1xuXHRcdFx0XHRcdHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdFx0XHRpc1BpY3R1cmUgPSBwYXJlbnQgJiYgcmVnUGljdHVyZS50ZXN0KHBhcmVudC5ub2RlTmFtZSB8fCAnJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmaXJlc0xvYWQgPSBkZXRhaWwuZmlyZXNMb2FkIHx8ICgoJ3NyYycgaW4gZWxlbSkgJiYgKHNyY3NldCB8fCBzcmMgfHwgaXNQaWN0dXJlKSk7XG5cblx0XHRcdFx0ZXZlbnQgPSB7dGFyZ2V0OiBlbGVtfTtcblxuXHRcdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubG9hZGluZ0NsYXNzKTtcblxuXHRcdFx0XHRpZihmaXJlc0xvYWQpe1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChyZXNldFByZWxvYWRpbmdUaW1lcik7XG5cdFx0XHRcdFx0cmVzZXRQcmVsb2FkaW5nVGltZXIgPSBzZXRUaW1lb3V0KHJlc2V0UHJlbG9hZGluZywgMjUwMCk7XG5cdFx0XHRcdFx0YWRkUmVtb3ZlTG9hZEV2ZW50cyhlbGVtLCByYWZTd2l0Y2hMb2FkaW5nQ2xhc3MsIHRydWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoaXNQaWN0dXJlKXtcblx0XHRcdFx0XHRmb3JFYWNoLmNhbGwocGFyZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzb3VyY2UnKSwgaGFuZGxlU291cmNlcyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihzcmNzZXQpe1xuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBzcmNzZXQpO1xuXHRcdFx0XHR9IGVsc2UgaWYoc3JjICYmICFpc1BpY3R1cmUpe1xuXHRcdFx0XHRcdGlmKHJlZ0lmcmFtZS50ZXN0KGVsZW0ubm9kZU5hbWUpKXtcblx0XHRcdFx0XHRcdGNoYW5nZUlmcmFtZVNyYyhlbGVtLCBzcmMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbGVtLnNyYyA9IHNyYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihpc0ltZyAmJiAoc3Jjc2V0IHx8IGlzUGljdHVyZSkpe1xuXHRcdFx0XHRcdHVwZGF0ZVBvbHlmaWxsKGVsZW0sIHtzcmM6IHNyY30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKGVsZW0uX2xhenlSYWNlKXtcblx0XHRcdFx0ZGVsZXRlIGVsZW0uX2xhenlSYWNlO1xuXHRcdFx0fVxuXHRcdFx0cmVtb3ZlQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxhenlDbGFzcyk7XG5cblx0XHRcdHJBRihmdW5jdGlvbigpe1xuXHRcdFx0XHQvLyBQYXJ0IG9mIHRoaXMgY2FuIGJlIHJlbW92ZWQgYXMgc29vbiBhcyB0aGlzIGZpeCBpcyBvbGRlcjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NzczMSAoMjAxNSlcblx0XHRcdFx0dmFyIGlzTG9hZGVkID0gZWxlbS5jb21wbGV0ZSAmJiBlbGVtLm5hdHVyYWxXaWR0aCA+IDE7XG5cblx0XHRcdFx0aWYoICFmaXJlc0xvYWQgfHwgaXNMb2FkZWQpe1xuXHRcdFx0XHRcdGlmIChpc0xvYWRlZCkge1xuXHRcdFx0XHRcdFx0YWRkQ2xhc3MoZWxlbSwgJ2xzLWlzLWNhY2hlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzd2l0Y2hMb2FkaW5nQ2xhc3MoZXZlbnQpO1xuXHRcdFx0XHRcdGVsZW0uX2xhenlDYWNoZSA9IHRydWU7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0aWYgKCdfbGF6eUNhY2hlJyBpbiBlbGVtKSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBlbGVtLl9sYXp5Q2FjaGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgOSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVsZW0ubG9hZGluZyA9PSAnbGF6eScpIHtcblx0XHRcdFx0XHRpc0xvYWRpbmctLTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0fSk7XG5cblx0XHR2YXIgdW52ZWlsRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtKXtcblx0XHRcdGlmIChlbGVtLl9sYXp5UmFjZSkge3JldHVybjt9XG5cdFx0XHR2YXIgZGV0YWlsO1xuXG5cdFx0XHR2YXIgaXNJbWcgPSByZWdJbWcudGVzdChlbGVtLm5vZGVOYW1lKTtcblxuXHRcdFx0Ly9hbGxvdyB1c2luZyBzaXplcz1cImF1dG9cIiwgYnV0IGRvbid0IHVzZS4gaXQncyBpbnZhbGlkLiBVc2UgZGF0YS1zaXplcz1cImF1dG9cIiBvciBhIHZhbGlkIHZhbHVlIGZvciBzaXplcyBpbnN0ZWFkIChpLmUuOiBzaXplcz1cIjgwdndcIilcblx0XHRcdHZhciBzaXplcyA9IGlzSW1nICYmIChlbGVtW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zaXplc0F0dHIpIHx8IGVsZW1bX2dldEF0dHJpYnV0ZV0oJ3NpemVzJykpO1xuXHRcdFx0dmFyIGlzQXV0byA9IHNpemVzID09ICdhdXRvJztcblxuXHRcdFx0aWYoIChpc0F1dG8gfHwgIWlzQ29tcGxldGVkKSAmJiBpc0ltZyAmJiAoZWxlbVtfZ2V0QXR0cmlidXRlXSgnc3JjJykgfHwgZWxlbS5zcmNzZXQpICYmICFlbGVtLmNvbXBsZXRlICYmICFoYXNDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcuZXJyb3JDbGFzcykgJiYgaGFzQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxhenlDbGFzcykpe3JldHVybjt9XG5cblx0XHRcdGRldGFpbCA9IHRyaWdnZXJFdmVudChlbGVtLCAnbGF6eXVudmVpbHJlYWQnKS5kZXRhaWw7XG5cblx0XHRcdGlmKGlzQXV0byl7XG5cdFx0XHRcdCBhdXRvU2l6ZXIudXBkYXRlRWxlbShlbGVtLCB0cnVlLCBlbGVtLm9mZnNldFdpZHRoKTtcblx0XHRcdH1cblxuXHRcdFx0ZWxlbS5fbGF6eVJhY2UgPSB0cnVlO1xuXHRcdFx0aXNMb2FkaW5nKys7XG5cblx0XHRcdGxhenlVbnZlaWwoZWxlbSwgZGV0YWlsLCBpc0F1dG8sIHNpemVzLCBpc0ltZyk7XG5cdFx0fTtcblxuXHRcdHZhciBhZnRlclNjcm9sbCA9IGRlYm91bmNlKGZ1bmN0aW9uKCl7XG5cdFx0XHRsYXp5U2l6ZXNDZmcubG9hZE1vZGUgPSAzO1xuXHRcdFx0dGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuXHRcdH0pO1xuXG5cdFx0dmFyIGFsdExvYWRtb2RlU2Nyb2xsTGlzdG5lciA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZihsYXp5U2l6ZXNDZmcubG9hZE1vZGUgPT0gMyl7XG5cdFx0XHRcdGxhenlTaXplc0NmZy5sb2FkTW9kZSA9IDI7XG5cdFx0XHR9XG5cdFx0XHRhZnRlclNjcm9sbCgpO1xuXHRcdH07XG5cblx0XHR2YXIgb25sb2FkID0gZnVuY3Rpb24oKXtcblx0XHRcdGlmKGlzQ29tcGxldGVkKXtyZXR1cm47fVxuXHRcdFx0aWYoRGF0ZS5ub3coKSAtIHN0YXJ0ZWQgPCA5OTkpe1xuXHRcdFx0XHRzZXRUaW1lb3V0KG9ubG9hZCwgOTk5KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cblx0XHRcdGlzQ29tcGxldGVkID0gdHJ1ZTtcblxuXHRcdFx0bGF6eVNpemVzQ2ZnLmxvYWRNb2RlID0gMztcblxuXHRcdFx0dGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuXG5cdFx0XHRhZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBhbHRMb2FkbW9kZVNjcm9sbExpc3RuZXIsIHRydWUpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0XzogZnVuY3Rpb24oKXtcblx0XHRcdFx0c3RhcnRlZCA9IERhdGUubm93KCk7XG5cblx0XHRcdFx0bGF6eXNpemVzLmVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsYXp5U2l6ZXNDZmcubGF6eUNsYXNzKTtcblx0XHRcdFx0cHJlbG9hZEVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsYXp5U2l6ZXNDZmcubGF6eUNsYXNzICsgJyAnICsgbGF6eVNpemVzQ2ZnLnByZWxvYWRDbGFzcyk7XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncGFnZXNob3cnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdGlmIChlLnBlcnNpc3RlZCkge1xuXHRcdFx0XHRcdFx0dmFyIGxvYWRpbmdFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgbGF6eVNpemVzQ2ZnLmxvYWRpbmdDbGFzcyk7XG5cblx0XHRcdFx0XHRcdGlmIChsb2FkaW5nRWxlbWVudHMubGVuZ3RoICYmIGxvYWRpbmdFbGVtZW50cy5mb3JFYWNoKSB7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9hZGluZ0VsZW1lbnRzLmZvckVhY2goIGZ1bmN0aW9uIChpbWcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChpbWcuY29tcGxldGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW52ZWlsRWxlbWVudChpbWcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmKHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKXtcblx0XHRcdFx0XHRuZXcgTXV0YXRpb25PYnNlcnZlciggdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyApLm9ic2VydmUoIGRvY0VsZW0sIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUsIGF0dHJpYnV0ZXM6IHRydWV9ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZG9jRWxlbVtfYWRkRXZlbnRMaXN0ZW5lcl0oJ0RPTU5vZGVJbnNlcnRlZCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXHRcdFx0XHRcdGRvY0VsZW1bX2FkZEV2ZW50TGlzdGVuZXJdKCdET01BdHRyTW9kaWZpZWQnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblx0XHRcdFx0XHRzZXRJbnRlcnZhbCh0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCA5OTkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXG5cdFx0XHRcdC8vLCAnZnVsbHNjcmVlbmNoYW5nZSdcblx0XHRcdFx0Wydmb2N1cycsICdtb3VzZW92ZXInLCAnY2xpY2snLCAnbG9hZCcsICd0cmFuc2l0aW9uZW5kJywgJ2FuaW1hdGlvbmVuZCddLmZvckVhY2goZnVuY3Rpb24obmFtZSl7XG5cdFx0XHRcdFx0ZG9jdW1lbnRbX2FkZEV2ZW50TGlzdGVuZXJdKG5hbWUsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZigoL2QkfF5jLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSl7XG5cdFx0XHRcdFx0b25sb2FkKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9ubG9hZCk7XG5cdFx0XHRcdFx0ZG9jdW1lbnRbX2FkZEV2ZW50TGlzdGVuZXJdKCdET01Db250ZW50TG9hZGVkJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyk7XG5cdFx0XHRcdFx0c2V0VGltZW91dChvbmxvYWQsIDIwMDAwKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGxhenlzaXplcy5lbGVtZW50cy5sZW5ndGgpe1xuXHRcdFx0XHRcdGNoZWNrRWxlbWVudHMoKTtcblx0XHRcdFx0XHRyQUYuX2xzRmx1c2goKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvdHRsZWRDaGVja0VsZW1lbnRzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjaGVja0VsZW1zOiB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLFxuXHRcdFx0dW52ZWlsOiB1bnZlaWxFbGVtZW50LFxuXHRcdFx0X2FMU0w6IGFsdExvYWRtb2RlU2Nyb2xsTGlzdG5lcixcblx0XHR9O1xuXHR9KSgpO1xuXG5cblx0dmFyIGF1dG9TaXplciA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBhdXRvc2l6ZXNFbGVtcztcblxuXHRcdHZhciBzaXplRWxlbWVudCA9IHJBRkl0KGZ1bmN0aW9uKGVsZW0sIHBhcmVudCwgZXZlbnQsIHdpZHRoKXtcblx0XHRcdHZhciBzb3VyY2VzLCBpLCBsZW47XG5cdFx0XHRlbGVtLl9sYXp5c2l6ZXNXaWR0aCA9IHdpZHRoO1xuXHRcdFx0d2lkdGggKz0gJ3B4JztcblxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgd2lkdGgpO1xuXG5cdFx0XHRpZihyZWdQaWN0dXJlLnRlc3QocGFyZW50Lm5vZGVOYW1lIHx8ICcnKSl7XG5cdFx0XHRcdHNvdXJjZXMgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NvdXJjZScpO1xuXHRcdFx0XHRmb3IoaSA9IDAsIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xuXHRcdFx0XHRcdHNvdXJjZXNbaV0uc2V0QXR0cmlidXRlKCdzaXplcycsIHdpZHRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZighZXZlbnQuZGV0YWlsLmRhdGFBdHRyKXtcblx0XHRcdFx0dXBkYXRlUG9seWZpbGwoZWxlbSwgZXZlbnQuZGV0YWlsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR2YXIgZ2V0U2l6ZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbSwgZGF0YUF0dHIsIHdpZHRoKXtcblx0XHRcdHZhciBldmVudDtcblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cblx0XHRcdGlmKHBhcmVudCl7XG5cdFx0XHRcdHdpZHRoID0gZ2V0V2lkdGgoZWxlbSwgcGFyZW50LCB3aWR0aCk7XG5cdFx0XHRcdGV2ZW50ID0gdHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5YmVmb3Jlc2l6ZXMnLCB7d2lkdGg6IHdpZHRoLCBkYXRhQXR0cjogISFkYXRhQXR0cn0pO1xuXG5cdFx0XHRcdGlmKCFldmVudC5kZWZhdWx0UHJldmVudGVkKXtcblx0XHRcdFx0XHR3aWR0aCA9IGV2ZW50LmRldGFpbC53aWR0aDtcblxuXHRcdFx0XHRcdGlmKHdpZHRoICYmIHdpZHRoICE9PSBlbGVtLl9sYXp5c2l6ZXNXaWR0aCl7XG5cdFx0XHRcdFx0XHRzaXplRWxlbWVudChlbGVtLCBwYXJlbnQsIGV2ZW50LCB3aWR0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciB1cGRhdGVFbGVtZW50c1NpemVzID0gZnVuY3Rpb24oKXtcblx0XHRcdHZhciBpO1xuXHRcdFx0dmFyIGxlbiA9IGF1dG9zaXplc0VsZW1zLmxlbmd0aDtcblx0XHRcdGlmKGxlbil7XG5cdFx0XHRcdGkgPSAwO1xuXG5cdFx0XHRcdGZvcig7IGkgPCBsZW47IGkrKyl7XG5cdFx0XHRcdFx0Z2V0U2l6ZUVsZW1lbnQoYXV0b3NpemVzRWxlbXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBkZWJvdW5jZWRVcGRhdGVFbGVtZW50c1NpemVzID0gZGVib3VuY2UodXBkYXRlRWxlbWVudHNTaXplcyk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0XzogZnVuY3Rpb24oKXtcblx0XHRcdFx0YXV0b3NpemVzRWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhenlTaXplc0NmZy5hdXRvc2l6ZXNDbGFzcyk7XG5cdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlZFVwZGF0ZUVsZW1lbnRzU2l6ZXMpO1xuXHRcdFx0fSxcblx0XHRcdGNoZWNrRWxlbXM6IGRlYm91bmNlZFVwZGF0ZUVsZW1lbnRzU2l6ZXMsXG5cdFx0XHR1cGRhdGVFbGVtOiBnZXRTaXplRWxlbWVudFxuXHRcdH07XG5cdH0pKCk7XG5cblx0dmFyIGluaXQgPSBmdW5jdGlvbigpe1xuXHRcdGlmKCFpbml0LmkgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSl7XG5cdFx0XHRpbml0LmkgPSB0cnVlO1xuXHRcdFx0YXV0b1NpemVyLl8oKTtcblx0XHRcdGxvYWRlci5fKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRpZihsYXp5U2l6ZXNDZmcuaW5pdCl7XG5cdFx0XHRpbml0KCk7XG5cdFx0fVxuXHR9KTtcblxuXHRsYXp5c2l6ZXMgPSB7XG5cdFx0Y2ZnOiBsYXp5U2l6ZXNDZmcsXG5cdFx0YXV0b1NpemVyOiBhdXRvU2l6ZXIsXG5cdFx0bG9hZGVyOiBsb2FkZXIsXG5cdFx0aW5pdDogaW5pdCxcblx0XHR1UDogdXBkYXRlUG9seWZpbGwsXG5cdFx0YUM6IGFkZENsYXNzLFxuXHRcdHJDOiByZW1vdmVDbGFzcyxcblx0XHRoQzogaGFzQ2xhc3MsXG5cdFx0ZmlyZTogdHJpZ2dlckV2ZW50LFxuXHRcdGdXOiBnZXRXaWR0aCxcblx0XHRyQUY6IHJBRixcblx0fTtcblxuXHRyZXR1cm4gbGF6eXNpemVzO1xufVxuKSk7XG4iLCIoZnVuY3Rpb24od2luZG93LCBmYWN0b3J5KSB7XG5cdHZhciBnbG9iYWxJbnN0YWxsID0gZnVuY3Rpb24oKXtcblx0XHRmYWN0b3J5KHdpbmRvdy5sYXp5U2l6ZXMpO1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsYXp5dW52ZWlscmVhZCcsIGdsb2JhbEluc3RhbGwsIHRydWUpO1xuXHR9O1xuXG5cdGZhY3RvcnkgPSBmYWN0b3J5LmJpbmQobnVsbCwgd2luZG93LCB3aW5kb3cuZG9jdW1lbnQpO1xuXG5cdGlmKHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xuXHRcdGZhY3RvcnkocmVxdWlyZSgnbGF6eXNpemVzJykpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFsnbGF6eXNpemVzJ10sIGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYod2luZG93LmxhenlTaXplcykge1xuXHRcdGdsb2JhbEluc3RhbGwoKTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbGF6eXVudmVpbHJlYWQnLCBnbG9iYWxJbnN0YWxsLCB0cnVlKTtcblx0fVxufSh3aW5kb3csIGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIGxhenlTaXplcykge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmKCF3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcil7cmV0dXJuO31cblxuXHR2YXIgbGF6eVNpemVzQ2ZnID0gbGF6eVNpemVzLmNmZztcblx0dmFyIHJlZ1doaXRlID0gL1xccysvZztcblx0dmFyIHJlZ1NwbGl0U2V0ID0gL1xccypcXHxcXHMrfFxccytcXHxcXHMqL2c7XG5cdHZhciByZWdTb3VyY2UgPSAvXiguKz8pKD86XFxzK1xcW1xccyooLis/KVxccypcXF0pKD86XFxzK1xcW1xccyooLis/KVxccypcXF0pPyQvO1xuXHR2YXIgcmVnVHlwZSA9IC9eXFxzKlxcKCpcXHMqdHlwZVxccyo6XFxzKiguKz8pXFxzKlxcKSpcXHMqJC87XG5cdHZhciByZWdCZ1VybEVzY2FwZSA9IC9cXCh8XFwpfCcvO1xuXHR2YXIgYWxsb3dlZEJhY2tncm91bmRTaXplID0ge2NvbnRhaW46IDEsIGNvdmVyOiAxfTtcblx0dmFyIHByb3h5V2lkdGggPSBmdW5jdGlvbihlbGVtKXtcblx0XHR2YXIgd2lkdGggPSBsYXp5U2l6ZXMuZ1coZWxlbSwgZWxlbS5wYXJlbnROb2RlKTtcblxuXHRcdGlmKCFlbGVtLl9sYXp5c2l6ZXNXaWR0aCB8fCB3aWR0aCA+IGVsZW0uX2xhenlzaXplc1dpZHRoKXtcblx0XHRcdGVsZW0uX2xhenlzaXplc1dpZHRoID0gd2lkdGg7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVtLl9sYXp5c2l6ZXNXaWR0aDtcblx0fTtcblx0dmFyIGdldEJnU2l6ZSA9IGZ1bmN0aW9uKGVsZW0pe1xuXHRcdHZhciBiZ1NpemU7XG5cblx0XHRiZ1NpemUgPSAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKSB8fCB7Z2V0UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24oKXt9fSkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1zaXplJyk7XG5cblx0XHRpZighYWxsb3dlZEJhY2tncm91bmRTaXplW2JnU2l6ZV0gJiYgYWxsb3dlZEJhY2tncm91bmRTaXplW2VsZW0uc3R5bGUuYmFja2dyb3VuZFNpemVdKXtcblx0XHRcdGJnU2l6ZSA9IGVsZW0uc3R5bGUuYmFja2dyb3VuZFNpemU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJnU2l6ZTtcblx0fTtcblx0dmFyIHNldFR5cGVPck1lZGlhID0gZnVuY3Rpb24oc291cmNlLCBtYXRjaCl7XG5cdFx0aWYobWF0Y2gpe1xuXHRcdFx0dmFyIHR5cGVNYXRjaCA9IG1hdGNoLm1hdGNoKHJlZ1R5cGUpO1xuXHRcdFx0aWYodHlwZU1hdGNoICYmIHR5cGVNYXRjaFsxXSl7XG5cdFx0XHRcdHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlTWF0Y2hbMV0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c291cmNlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBsYXp5U2l6ZXNDZmcuY3VzdG9tTWVkaWFbbWF0Y2hdIHx8IG1hdGNoKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHZhciBjcmVhdGVQaWN0dXJlID0gZnVuY3Rpb24oc2V0cywgZWxlbSwgaW1nKXtcblx0XHR2YXIgcGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcblx0XHR2YXIgc2l6ZXMgPSBlbGVtLmdldEF0dHJpYnV0ZShsYXp5U2l6ZXNDZmcuc2l6ZXNBdHRyKTtcblx0XHR2YXIgcmF0aW8gPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1yYXRpbycpO1xuXHRcdHZhciBvcHRpbXVteCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGltdW14Jyk7XG5cblx0XHRpZihlbGVtLl9sYXp5YmdzZXQgJiYgZWxlbS5fbGF6eWJnc2V0LnBhcmVudE5vZGUgPT0gZWxlbSl7XG5cdFx0XHRlbGVtLnJlbW92ZUNoaWxkKGVsZW0uX2xhenliZ3NldCk7XG5cdFx0fVxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGltZywgJ19sYXp5YmdzZXQnLCB7XG5cdFx0XHR2YWx1ZTogZWxlbSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW0sICdfbGF6eWJnc2V0Jywge1xuXHRcdFx0dmFsdWU6IHBpY3R1cmUsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXG5cdFx0c2V0cyA9IHNldHMucmVwbGFjZShyZWdXaGl0ZSwgJyAnKS5zcGxpdChyZWdTcGxpdFNldCk7XG5cblx0XHRwaWN0dXJlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0aW1nLmNsYXNzTmFtZSA9IGxhenlTaXplc0NmZy5sYXp5Q2xhc3M7XG5cblx0XHRpZihzZXRzLmxlbmd0aCA9PSAxICYmICFzaXplcyl7XG5cdFx0XHRzaXplcyA9ICdhdXRvJztcblx0XHR9XG5cblx0XHRzZXRzLmZvckVhY2goZnVuY3Rpb24oc2V0KXtcblx0XHRcdHZhciBtYXRjaDtcblx0XHRcdHZhciBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcblxuXHRcdFx0aWYoc2l6ZXMgJiYgc2l6ZXMgIT0gJ2F1dG8nKXtcblx0XHRcdFx0c291cmNlLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCBzaXplcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKChtYXRjaCA9IHNldC5tYXRjaChyZWdTb3VyY2UpKSl7XG5cdFx0XHRcdHNvdXJjZS5zZXRBdHRyaWJ1dGUobGF6eVNpemVzQ2ZnLnNyY3NldEF0dHIsIG1hdGNoWzFdKTtcblxuXHRcdFx0XHRzZXRUeXBlT3JNZWRpYShzb3VyY2UsIG1hdGNoWzJdKTtcblx0XHRcdFx0c2V0VHlwZU9yTWVkaWEoc291cmNlLCBtYXRjaFszXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzb3VyY2Uuc2V0QXR0cmlidXRlKGxhenlTaXplc0NmZy5zcmNzZXRBdHRyLCBzZXQpO1xuXHRcdFx0fVxuXG5cdFx0XHRwaWN0dXJlLmFwcGVuZENoaWxkKHNvdXJjZSk7XG5cdFx0fSk7XG5cblx0XHRpZihzaXplcyl7XG5cdFx0XHRpbWcuc2V0QXR0cmlidXRlKGxhenlTaXplc0NmZy5zaXplc0F0dHIsIHNpemVzKTtcblx0XHRcdGVsZW0ucmVtb3ZlQXR0cmlidXRlKGxhenlTaXplc0NmZy5zaXplc0F0dHIpO1xuXHRcdFx0ZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ3NpemVzJyk7XG5cdFx0fVxuXHRcdGlmKG9wdGltdW14KXtcblx0XHRcdGltZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3B0aW11bXgnLCBvcHRpbXVteCk7XG5cdFx0fVxuXHRcdGlmKHJhdGlvKSB7XG5cdFx0XHRpbWcuc2V0QXR0cmlidXRlKCdkYXRhLXJhdGlvJywgcmF0aW8pO1xuXHRcdH1cblxuXHRcdHBpY3R1cmUuYXBwZW5kQ2hpbGQoaW1nKTtcblxuXHRcdGVsZW0uYXBwZW5kQ2hpbGQocGljdHVyZSk7XG5cdH07XG5cblx0dmFyIHByb3h5TG9hZCA9IGZ1bmN0aW9uKGUpe1xuXHRcdGlmKCFlLnRhcmdldC5fbGF6eWJnc2V0KXtyZXR1cm47fVxuXG5cdFx0dmFyIGltYWdlID0gZS50YXJnZXQ7XG5cdFx0dmFyIGVsZW0gPSBpbWFnZS5fbGF6eWJnc2V0O1xuXHRcdHZhciBiZyA9IGltYWdlLmN1cnJlbnRTcmMgfHwgaW1hZ2Uuc3JjO1xuXG5cblx0XHRpZihiZyl7XG5cdFx0XHR2YXIgZXZlbnQgPSBsYXp5U2l6ZXMuZmlyZShlbGVtLCAnYmdzZXRwcm94eScsIHtcblx0XHRcdFx0c3JjOiBiZyxcblx0XHRcdFx0dXNlU3JjOiByZWdCZ1VybEVzY2FwZS50ZXN0KGJnKSA/IEpTT04uc3RyaW5naWZ5KGJnKSA6IGJnLFxuXHRcdFx0fSk7XG5cblx0XHRcdGlmKCFldmVudC5kZWZhdWx0UHJldmVudGVkKXtcblx0XHRcdFx0ZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBldmVudC5kZXRhaWwudXNlU3JjICsgJyknO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKGltYWdlLl9sYXp5YmdzZXRMb2FkaW5nKXtcblx0XHRcdGxhenlTaXplcy5maXJlKGVsZW0sICdfbGF6eWxvYWRlZCcsIHt9LCBmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRkZWxldGUgaW1hZ2UuX2xhenliZ3NldExvYWRpbmc7XG5cdFx0fVxuXHR9O1xuXG5cdGFkZEV2ZW50TGlzdGVuZXIoJ2xhenliZWZvcmV1bnZlaWwnLCBmdW5jdGlvbihlKXtcblx0XHR2YXIgc2V0LCBpbWFnZSwgZWxlbTtcblxuXHRcdGlmKGUuZGVmYXVsdFByZXZlbnRlZCB8fCAhKHNldCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1iZ3NldCcpKSl7cmV0dXJuO31cblxuXHRcdGVsZW0gPSBlLnRhcmdldDtcblx0XHRpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG5cdFx0aW1hZ2UuYWx0ID0gJyc7XG5cblx0XHRpbWFnZS5fbGF6eWJnc2V0TG9hZGluZyA9IHRydWU7XG5cdFx0ZS5kZXRhaWwuZmlyZXNMb2FkID0gdHJ1ZTtcblxuXHRcdGNyZWF0ZVBpY3R1cmUoc2V0LCBlbGVtLCBpbWFnZSk7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRsYXp5U2l6ZXMubG9hZGVyLnVudmVpbChpbWFnZSk7XG5cblx0XHRcdGxhenlTaXplcy5yQUYoZnVuY3Rpb24oKXtcblx0XHRcdFx0bGF6eVNpemVzLmZpcmUoaW1hZ2UsICdfbGF6eWxvYWRlZCcsIHt9LCB0cnVlLCB0cnVlKTtcblx0XHRcdFx0aWYoaW1hZ2UuY29tcGxldGUpIHtcblx0XHRcdFx0XHRwcm94eUxvYWQoe3RhcmdldDogaW1hZ2V9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0fSk7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHByb3h5TG9hZCwgdHJ1ZSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xhenliZWZvcmVzaXplcycsIGZ1bmN0aW9uKGUpe1xuXHRcdGlmKGUuZGV0YWlsLmluc3RhbmNlICE9IGxhenlTaXplcyl7cmV0dXJuO31cblx0XHRpZihlLnRhcmdldC5fbGF6eWJnc2V0ICYmIGUuZGV0YWlsLmRhdGFBdHRyKXtcblx0XHRcdHZhciBlbGVtID0gZS50YXJnZXQuX2xhenliZ3NldDtcblx0XHRcdHZhciBiZ1NpemUgPSBnZXRCZ1NpemUoZWxlbSk7XG5cblx0XHRcdGlmKGFsbG93ZWRCYWNrZ3JvdW5kU2l6ZVtiZ1NpemVdKXtcblx0XHRcdFx0ZS50YXJnZXQuX2xhenlzaXplc1BhcmVudEZpdCA9IGJnU2l6ZTtcblxuXHRcdFx0XHRsYXp5U2l6ZXMuckFGKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0ZS50YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudC1maXQnLCBiZ1NpemUpO1xuXHRcdFx0XHRcdGlmKGUudGFyZ2V0Ll9sYXp5c2l6ZXNQYXJlbnRGaXQpe1xuXHRcdFx0XHRcdFx0ZGVsZXRlIGUudGFyZ2V0Ll9sYXp5c2l6ZXNQYXJlbnRGaXQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHRydWUpO1xuXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsYXp5YmVmb3Jlc2l6ZXMnLCBmdW5jdGlvbihlKXtcblx0XHRpZihlLmRlZmF1bHRQcmV2ZW50ZWQgfHwgIWUudGFyZ2V0Ll9sYXp5YmdzZXQgfHwgZS5kZXRhaWwuaW5zdGFuY2UgIT0gbGF6eVNpemVzKXtyZXR1cm47fVxuXHRcdGUuZGV0YWlsLndpZHRoID0gcHJveHlXaWR0aChlLnRhcmdldC5fbGF6eWJnc2V0KTtcblx0fSk7XG59KSk7XG4iLCIoZnVuY3Rpb24od2luZG93LCBmYWN0b3J5KSB7XG5cdGlmKCF3aW5kb3cpIHtyZXR1cm47fVxuXHR2YXIgZ2xvYmFsSW5zdGFsbCA9IGZ1bmN0aW9uKGluaXRpYWxFdmVudCl7XG5cdFx0ZmFjdG9yeSh3aW5kb3cubGF6eVNpemVzLCBpbml0aWFsRXZlbnQpO1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsYXp5dW52ZWlscmVhZCcsIGdsb2JhbEluc3RhbGwsIHRydWUpO1xuXHR9O1xuXG5cdGZhY3RvcnkgPSBmYWN0b3J5LmJpbmQobnVsbCwgd2luZG93LCB3aW5kb3cuZG9jdW1lbnQpO1xuXG5cdGlmKHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xuXHRcdGZhY3RvcnkocmVxdWlyZSgnbGF6eXNpemVzJykpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFsnbGF6eXNpemVzJ10sIGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYod2luZG93LmxhenlTaXplcykge1xuXHRcdGdsb2JhbEluc3RhbGwoKTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbGF6eXVudmVpbHJlYWQnLCBnbG9iYWxJbnN0YWxsLCB0cnVlKTtcblx0fVxufSh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID9cblx0d2luZG93IDogMCwgZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgbGF6eVNpemVzLCBpbml0aWFsRXZlbnQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgY2xvbmVFbGVtZW50Q2xhc3M7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKS5zdHlsZTtcblx0dmFyIGZpdFN1cHBvcnQgPSAnb2JqZWN0Rml0JyBpbiBzdHlsZTtcblx0dmFyIHBvc2l0aW9uU3VwcG9ydCA9IGZpdFN1cHBvcnQgJiYgJ29iamVjdFBvc2l0aW9uJyBpbiBzdHlsZTtcblx0dmFyIHJlZ0Nzc0ZpdCA9IC9vYmplY3QtZml0W1wiJ10qXFxzKjpcXHMqW1wiJ10qKGNvbnRhaW58Y292ZXIpLztcblx0dmFyIHJlZ0Nzc1Bvc2l0aW9uID0gL29iamVjdC1wb3NpdGlvbltcIiddKlxccyo6XFxzKltcIiddKiguKz8pKD89KCR8LHwnfFwifDspKS87XG5cdHZhciBibGFua1NyYyA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUFBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PSc7XG5cdHZhciByZWdCZ1VybEVzY2FwZSA9IC9cXCh8XFwpfCcvO1xuXHR2YXIgcG9zaXRpb25EZWZhdWx0cyA9IHtcblx0XHRjZW50ZXI6ICdjZW50ZXInLFxuXHRcdCc1MCUgNTAlJzogJ2NlbnRlcicsXG5cdH07XG5cblx0ZnVuY3Rpb24gZ2V0T2JqZWN0KGVsZW1lbnQpe1xuXHRcdHZhciBjc3MgPSAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKSB8fCB7fSk7XG5cdFx0dmFyIGNvbnRlbnQgPSBjc3MuZm9udEZhbWlseSB8fCAnJztcblx0XHR2YXIgb2JqZWN0Rml0ID0gY29udGVudC5tYXRjaChyZWdDc3NGaXQpIHx8ICcnO1xuXHRcdHZhciBvYmplY3RQb3NpdGlvbiA9IG9iamVjdEZpdCAmJiBjb250ZW50Lm1hdGNoKHJlZ0Nzc1Bvc2l0aW9uKSB8fCAnJztcblxuXHRcdGlmKG9iamVjdFBvc2l0aW9uKXtcblx0XHRcdG9iamVjdFBvc2l0aW9uID0gb2JqZWN0UG9zaXRpb25bMV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGZpdDogb2JqZWN0Rml0ICYmIG9iamVjdEZpdFsxXSB8fCAnJyxcblx0XHRcdHBvc2l0aW9uOiBwb3NpdGlvbkRlZmF1bHRzW29iamVjdFBvc2l0aW9uXSB8fCBvYmplY3RQb3NpdGlvbiB8fCAnY2VudGVyJyxcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2VuZXJhdGVTdHlsZUNsYXNzKCkge1xuXHRcdGlmIChjbG9uZUVsZW1lbnRDbGFzcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG5cdFx0Y2xvbmVFbGVtZW50Q2xhc3MgPSBsYXp5U2l6ZXMuY2ZnLm9iamVjdEZpdENsYXNzIHx8ICdsYXp5c2l6ZXMtZGlzcGxheS1jbG9uZSc7XG5cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVByZXZDbG9uZShlbGVtZW50KSB7XG5cdFx0dmFyIHByZXYgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cblx0XHRpZiAocHJldiAmJiBsYXp5U2l6ZXMuaEMocHJldiwgY2xvbmVFbGVtZW50Q2xhc3MpKSB7XG5cdFx0XHRwcmV2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJldik7XG5cdFx0XHRlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gcHJldi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKSB8fCAnJztcblx0XHRcdGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IHByZXYuZ2V0QXR0cmlidXRlKCdkYXRhLXZpc2liaWxpdHknKSB8fCAnJztcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0Rml4KGVsZW1lbnQsIGNvbmZpZyl7XG5cdFx0dmFyIHN3aXRjaENsYXNzZXNBZGRlZCwgYWRkZWRTcmMsIHN0eWxlRWxlbWVudCwgc3R5bGVFbGVtZW50U3R5bGU7XG5cdFx0dmFyIGxhenlzaXplc0NmZyA9IGxhenlTaXplcy5jZmc7XG5cblx0XHR2YXIgb25DaGFuZ2UgPSBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHNyYyA9IGVsZW1lbnQuY3VycmVudFNyYyB8fCBlbGVtZW50LnNyYztcblxuXHRcdFx0aWYoc3JjICYmIGFkZGVkU3JjICE9PSBzcmMpe1xuXHRcdFx0XHRhZGRlZFNyYyA9IHNyYztcblx0XHRcdFx0c3R5bGVFbGVtZW50U3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgKHJlZ0JnVXJsRXNjYXBlLnRlc3Qoc3JjKSA/IEpTT04uc3RyaW5naWZ5KHNyYykgOiBzcmMgKSArICcpJztcblxuXHRcdFx0XHRpZighc3dpdGNoQ2xhc3Nlc0FkZGVkKXtcblx0XHRcdFx0XHRzd2l0Y2hDbGFzc2VzQWRkZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGxhenlTaXplcy5yQyhzdHlsZUVsZW1lbnQsIGxhenlzaXplc0NmZy5sb2FkaW5nQ2xhc3MpO1xuXHRcdFx0XHRcdGxhenlTaXplcy5hQyhzdHlsZUVsZW1lbnQsIGxhenlzaXplc0NmZy5sb2FkZWRDbGFzcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdHZhciByYWZlZE9uQ2hhbmdlID0gZnVuY3Rpb24oKXtcblx0XHRcdGxhenlTaXplcy5yQUYob25DaGFuZ2UpO1xuXHRcdH07XG5cblx0XHRlbGVtZW50Ll9sYXp5c2l6ZXNQYXJlbnRGaXQgPSBjb25maWcuZml0O1xuXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsYXp5bG9hZGVkJywgcmFmZWRPbkNoYW5nZSwgdHJ1ZSk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmFmZWRPbkNoYW5nZSwgdHJ1ZSk7XG5cblx0XHRsYXp5U2l6ZXMuckFGKGZ1bmN0aW9uKCl7XG5cblx0XHRcdHZhciBoaWRlRWxlbWVudCA9IGVsZW1lbnQ7XG5cdFx0XHR2YXIgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG5cdFx0XHRpZihjb250YWluZXIubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PSAnUElDVFVSRScpe1xuXHRcdFx0XHRoaWRlRWxlbWVudCA9IGNvbnRhaW5lcjtcblx0XHRcdFx0Y29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cblx0XHRcdHJlbW92ZVByZXZDbG9uZShoaWRlRWxlbWVudCk7XG5cblx0XHRcdGlmICghY2xvbmVFbGVtZW50Q2xhc3MpIHtcblx0XHRcdFx0Z2VuZXJhdGVTdHlsZUNsYXNzKCk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlRWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKGZhbHNlKTtcblx0XHRcdHN0eWxlRWxlbWVudFN0eWxlID0gc3R5bGVFbGVtZW50LnN0eWxlO1xuXG5cdFx0XHRzdHlsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBjdXJTcmMgPSBzdHlsZUVsZW1lbnQuY3VycmVudFNyYyB8fCBzdHlsZUVsZW1lbnQuc3JjO1xuXG5cdFx0XHRcdGlmKGN1clNyYyAmJiBjdXJTcmMgIT0gYmxhbmtTcmMpe1xuXHRcdFx0XHRcdHN0eWxlRWxlbWVudC5zcmMgPSBibGFua1NyYztcblx0XHRcdFx0XHRzdHlsZUVsZW1lbnQuc3Jjc2V0ID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRsYXp5U2l6ZXMuckMoc3R5bGVFbGVtZW50LCBsYXp5c2l6ZXNDZmcubG9hZGVkQ2xhc3MpO1xuXHRcdFx0bGF6eVNpemVzLnJDKHN0eWxlRWxlbWVudCwgbGF6eXNpemVzQ2ZnLmxhenlDbGFzcyk7XG5cdFx0XHRsYXp5U2l6ZXMuckMoc3R5bGVFbGVtZW50LCBsYXp5c2l6ZXNDZmcuYXV0b3NpemVzQ2xhc3MpO1xuXHRcdFx0bGF6eVNpemVzLmFDKHN0eWxlRWxlbWVudCwgbGF6eXNpemVzQ2ZnLmxvYWRpbmdDbGFzcyk7XG5cdFx0XHRsYXp5U2l6ZXMuYUMoc3R5bGVFbGVtZW50LCBjbG9uZUVsZW1lbnRDbGFzcyk7XG5cblx0XHRcdFsnZGF0YS1wYXJlbnQtZml0JywgJ2RhdGEtcGFyZW50LWNvbnRhaW5lcicsICdkYXRhLW9iamVjdC1maXQtcG9seWZpbGxlZCcsXG5cdFx0XHRcdGxhenlzaXplc0NmZy5zcmNzZXRBdHRyLCBsYXp5c2l6ZXNDZmcuc3JjQXR0cl0uZm9yRWFjaChmdW5jdGlvbihhdHRyKSB7XG5cdFx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG5cdFx0XHR9KTtcblxuXHRcdFx0c3R5bGVFbGVtZW50LnNyYyA9IGJsYW5rU3JjO1xuXHRcdFx0c3R5bGVFbGVtZW50LnNyY3NldCA9ICcnO1xuXG5cdFx0XHRzdHlsZUVsZW1lbnRTdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG5cdFx0XHRzdHlsZUVsZW1lbnRTdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XG5cdFx0XHRzdHlsZUVsZW1lbnRTdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGNvbmZpZy5maXQ7XG5cblx0XHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nLCBoaWRlRWxlbWVudC5zdHlsZS5wb3NpdGlvbik7XG5cdFx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2liaWxpdHknLCBoaWRlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5KTtcblxuXHRcdFx0aGlkZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXHRcdFx0aGlkZUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQtZml0JywgY29uZmlnLmZpdCk7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQtY29udGFpbmVyJywgJ3ByZXYnKTtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW9iamVjdC1maXQtcG9seWZpbGxlZCcsICcnKTtcblx0XHRcdGVsZW1lbnQuX29iamVjdEZpdFBvbHlmaWxsZWREaXNwbGF5ID0gc3R5bGVFbGVtZW50O1xuXG5cdFx0XHRjb250YWluZXIuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGlkZUVsZW1lbnQpO1xuXG5cdFx0XHRpZihlbGVtZW50Ll9sYXp5c2l6ZXNQYXJlbnRGaXQpe1xuXHRcdFx0XHRkZWxldGUgZWxlbWVudC5fbGF6eXNpemVzUGFyZW50Rml0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZihlbGVtZW50LmNvbXBsZXRlKXtcblx0XHRcdFx0b25DaGFuZ2UoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGlmKCFmaXRTdXBwb3J0IHx8ICFwb3NpdGlvblN1cHBvcnQpe1xuXHRcdHZhciBvblJlYWQgPSBmdW5jdGlvbihlKXtcblx0XHRcdGlmKGUuZGV0YWlsLmluc3RhbmNlICE9IGxhenlTaXplcyl7cmV0dXJuO31cblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBlLnRhcmdldDtcblx0XHRcdHZhciBvYmogPSBnZXRPYmplY3QoZWxlbWVudCk7XG5cblx0XHRcdGlmKG9iai5maXQgJiYgKCFmaXRTdXBwb3J0IHx8IChvYmoucG9zaXRpb24gIT0gJ2NlbnRlcicpKSl7XG5cdFx0XHRcdGluaXRGaXgoZWxlbWVudCwgb2JqKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xhenliZWZvcmVzaXplcycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGlmKGUuZGV0YWlsLmluc3RhbmNlICE9IGxhenlTaXplcyl7cmV0dXJuO31cblx0XHRcdHZhciBlbGVtZW50ID0gZS50YXJnZXQ7XG5cblx0XHRcdGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QtZml0LXBvbHlmaWxsZWQnKSAhPSBudWxsICYmICFlbGVtZW50Ll9vYmplY3RGaXRQb2x5ZmlsbGVkRGlzcGxheSkge1xuXHRcdFx0XHRpZighb25SZWFkKGUpKXtcblx0XHRcdFx0XHRsYXp5U2l6ZXMuckFGKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW9iamVjdC1maXQtcG9seWZpbGxlZCcpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xhenl1bnZlaWxyZWFkJywgb25SZWFkLCB0cnVlKTtcblxuXHRcdGlmKGluaXRpYWxFdmVudCAmJiBpbml0aWFsRXZlbnQuZGV0YWlsKXtcblx0XHRcdG9uUmVhZChpbml0aWFsRXZlbnQpO1xuXHRcdH1cblx0fVxufSkpO1xuIiwiKGZ1bmN0aW9uKHdpbmRvdywgZmFjdG9yeSkge1xuXHRpZighd2luZG93KSB7cmV0dXJuO31cblx0dmFyIGdsb2JhbEluc3RhbGwgPSBmdW5jdGlvbigpe1xuXHRcdGZhY3Rvcnkod2luZG93LmxhenlTaXplcyk7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xhenl1bnZlaWxyZWFkJywgZ2xvYmFsSW5zdGFsbCwgdHJ1ZSk7XG5cdH07XG5cblx0ZmFjdG9yeSA9IGZhY3RvcnkuYmluZChudWxsLCB3aW5kb3csIHdpbmRvdy5kb2N1bWVudCk7XG5cblx0aWYodHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyl7XG5cdFx0ZmFjdG9yeShyZXF1aXJlKCdsYXp5c2l6ZXMnKSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoWydsYXp5c2l6ZXMnXSwgZmFjdG9yeSk7XG5cdH0gZWxzZSBpZih3aW5kb3cubGF6eVNpemVzKSB7XG5cdFx0Z2xvYmFsSW5zdGFsbCgpO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsYXp5dW52ZWlscmVhZCcsIGdsb2JhbEluc3RhbGwsIHRydWUpO1xuXHR9XG59KHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgP1xuXHR3aW5kb3cgOiAwLCBmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBsYXp5U2l6ZXMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGlmKCF3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcil7cmV0dXJuO31cblxuXHR2YXIgcmVnRGVzY3JpcHRvcnMgPSAvXFxzKyhcXGQrKSh3fGgpXFxzKyhcXGQrKSh3fGgpLztcblx0dmFyIHJlZ0Nzc0ZpdCA9IC9wYXJlbnQtZml0W1wiJ10qXFxzKjpcXHMqW1wiJ10qKGNvbnRhaW58Y292ZXJ8d2lkdGgpLztcblx0dmFyIHJlZ0Nzc09iamVjdCA9IC9wYXJlbnQtY29udGFpbmVyW1wiJ10qXFxzKjpcXHMqW1wiJ10qKC4rPykoPz0oXFxzfCR8LHwnfFwifDspKS87XG5cdHZhciByZWdQaWN0dXJlID0gL15waWN0dXJlJC9pO1xuXHR2YXIgY2ZnID0gbGF6eVNpemVzLmNmZztcblxuXHR2YXIgZ2V0Q1NTID0gZnVuY3Rpb24gKGVsZW0pe1xuXHRcdHJldHVybiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBudWxsKSB8fCB7fSk7XG5cdH07XG5cblx0dmFyIHBhcmVudEZpdCA9IHtcblxuXHRcdGdldFBhcmVudDogZnVuY3Rpb24oZWxlbWVudCwgcGFyZW50U2VsKXtcblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtZW50O1xuXHRcdFx0dmFyIHBhcmVudE5vZGUgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cblx0XHRcdGlmKCghcGFyZW50U2VsIHx8IHBhcmVudFNlbCA9PSAncHJldicpICYmIHBhcmVudE5vZGUgJiYgcmVnUGljdHVyZS50ZXN0KHBhcmVudE5vZGUubm9kZU5hbWUgfHwgJycpKXtcblx0XHRcdFx0cGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZTtcblx0XHRcdH1cblxuXHRcdFx0aWYocGFyZW50U2VsICE9ICdzZWxmJyl7XG5cdFx0XHRcdGlmKHBhcmVudFNlbCA9PSAncHJldicpe1xuXHRcdFx0XHRcdHBhcmVudCA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcblx0XHRcdFx0fSBlbHNlIGlmKHBhcmVudFNlbCAmJiAocGFyZW50Tm9kZS5jbG9zZXN0IHx8IHdpbmRvdy5qUXVlcnkpKXtcblx0XHRcdFx0XHRwYXJlbnQgPSAocGFyZW50Tm9kZS5jbG9zZXN0ID9cblx0XHRcdFx0XHRcdFx0cGFyZW50Tm9kZS5jbG9zZXN0KHBhcmVudFNlbCkgOlxuXHRcdFx0XHRcdFx0XHRqUXVlcnkocGFyZW50Tm9kZSkuY2xvc2VzdChwYXJlbnRTZWwpWzBdKSB8fFxuXHRcdFx0XHRcdFx0cGFyZW50Tm9kZVxuXHRcdFx0XHRcdDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwYXJlbnQgPSBwYXJlbnROb2RlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwYXJlbnQ7XG5cdFx0fSxcblxuXHRcdGdldEZpdDogZnVuY3Rpb24oZWxlbWVudCl7XG5cdFx0XHR2YXIgdG1wTWF0Y2gsIHBhcmVudE9iajtcblx0XHRcdHZhciBjc3MgPSBnZXRDU1MoZWxlbWVudCk7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzcy5jb250ZW50IHx8IGNzcy5mb250RmFtaWx5O1xuXHRcdFx0dmFyIG9iaiA9IHtcblx0XHRcdFx0Zml0OiBlbGVtZW50Ll9sYXp5c2l6ZXNQYXJlbnRGaXQgfHwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyZW50LWZpdCcpXG5cdFx0XHR9O1xuXG5cdFx0XHRpZighb2JqLmZpdCAmJiBjb250ZW50ICYmICh0bXBNYXRjaCA9IGNvbnRlbnQubWF0Y2gocmVnQ3NzRml0KSkpe1xuXHRcdFx0XHRvYmouZml0ID0gdG1wTWF0Y2hbMV07XG5cdFx0XHR9XG5cblx0XHRcdGlmKG9iai5maXQpe1xuXHRcdFx0XHRwYXJlbnRPYmogPSBlbGVtZW50Ll9sYXp5c2l6ZXNQYXJlbnRDb250YWluZXIgfHwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyZW50LWNvbnRhaW5lcicpO1xuXG5cdFx0XHRcdGlmKCFwYXJlbnRPYmogJiYgY29udGVudCAmJiAodG1wTWF0Y2ggPSBjb250ZW50Lm1hdGNoKHJlZ0Nzc09iamVjdCkpKXtcblx0XHRcdFx0XHRwYXJlbnRPYmogPSB0bXBNYXRjaFsxXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG9iai5wYXJlbnQgPSBwYXJlbnRGaXQuZ2V0UGFyZW50KGVsZW1lbnQsIHBhcmVudE9iaik7XG5cblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2JqLmZpdCA9IGNzcy5vYmplY3RGaXQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fSxcblxuXHRcdGdldEltYWdlUmF0aW86IGZ1bmN0aW9uKGVsZW1lbnQpe1xuXHRcdFx0dmFyIGksIHNyY3NldCwgbWVkaWEsIHJhdGlvLCBtYXRjaCwgd2lkdGgsIGhlaWdodDtcblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0XHR2YXIgZWxlbWVudHMgPSBwYXJlbnQgJiYgcmVnUGljdHVyZS50ZXN0KHBhcmVudC5ub2RlTmFtZSB8fCAnJykgP1xuXHRcdFx0XHRcdHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdzb3VyY2UsIGltZycpIDpcblx0XHRcdFx0XHRbZWxlbWVudF1cblx0XHRcdFx0O1xuXG5cdFx0XHRmb3IoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcblx0XHRcdFx0c3Jjc2V0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoY2ZnLnNyY3NldEF0dHIpIHx8IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzcmNzZXQnKSB8fCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wZnNyY3NldCcpIHx8IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJpc3Jjc2V0JykgfHwgJyc7XG5cdFx0XHRcdG1lZGlhID0gZWxlbWVudC5fbHNNZWRpYSB8fCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnbWVkaWEnKTtcblx0XHRcdFx0bWVkaWEgPSBjZmcuY3VzdG9tTWVkaWFbZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWVkaWEnKSB8fCBtZWRpYV0gfHwgbWVkaWE7XG5cblx0XHRcdFx0aWYoc3Jjc2V0ICYmICghbWVkaWEgfHwgKHdpbmRvdy5tYXRjaE1lZGlhICYmIG1hdGNoTWVkaWEobWVkaWEpIHx8IHt9KS5tYXRjaGVzICkpe1xuXHRcdFx0XHRcdHJhdGlvID0gcGFyc2VGbG9hdChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hc3BlY3RyYXRpbycpKTtcblxuXHRcdFx0XHRcdGlmICghcmF0aW8pIHtcblx0XHRcdFx0XHRcdG1hdGNoID0gc3Jjc2V0Lm1hdGNoKHJlZ0Rlc2NyaXB0b3JzKTtcblxuXHRcdFx0XHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdFx0XHRcdGlmKG1hdGNoWzJdID09ICd3Jyl7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGggPSBtYXRjaFsxXTtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQgPSBtYXRjaFszXTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aCA9IG1hdGNoWzNdO1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodCA9IG1hdGNoWzFdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR3aWR0aCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd3aWR0aCcpO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJhdGlvO1xuXHRcdH0sXG5cblx0XHRjYWxjdWxhdGVTaXplOiBmdW5jdGlvbihlbGVtZW50LCB3aWR0aCl7XG5cdFx0XHR2YXIgZGlzcGxheVJhdGlvLCBoZWlnaHQsIGltYWdlUmF0aW8sIHJldFdpZHRoO1xuXHRcdFx0dmFyIGZpdE9iaiA9IHRoaXMuZ2V0Rml0KGVsZW1lbnQpO1xuXHRcdFx0dmFyIGZpdCA9IGZpdE9iai5maXQ7XG5cdFx0XHR2YXIgZml0RWxlbSA9IGZpdE9iai5wYXJlbnQ7XG5cblx0XHRcdGlmKGZpdCAhPSAnd2lkdGgnICYmICgoZml0ICE9ICdjb250YWluJyAmJiBmaXQgIT0gJ2NvdmVyJykgfHwgIShpbWFnZVJhdGlvID0gdGhpcy5nZXRJbWFnZVJhdGlvKGVsZW1lbnQpKSkpe1xuXHRcdFx0XHRyZXR1cm4gd2lkdGg7XG5cdFx0XHR9XG5cblx0XHRcdGlmKGZpdEVsZW0pe1xuXHRcdFx0XHR3aWR0aCA9IGZpdEVsZW0uY2xpZW50V2lkdGg7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmaXRFbGVtID0gZWxlbWVudDtcblx0XHRcdH1cblxuXHRcdFx0cmV0V2lkdGggPSB3aWR0aDtcblxuXHRcdFx0aWYoZml0ID09ICd3aWR0aCcpe1xuXHRcdFx0XHRyZXRXaWR0aCA9IHdpZHRoO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGVpZ2h0ID0gZml0RWxlbS5jbGllbnRIZWlnaHQ7XG5cblx0XHRcdFx0aWYoKGRpc3BsYXlSYXRpbyA9ICB3aWR0aCAvIGhlaWdodCkgJiYgKChmaXQgPT0gJ2NvdmVyJyAmJiBkaXNwbGF5UmF0aW8gPCBpbWFnZVJhdGlvKSB8fCAoZml0ID09ICdjb250YWluJyAmJiBkaXNwbGF5UmF0aW8gPiBpbWFnZVJhdGlvKSkpe1xuXHRcdFx0XHRcdHJldFdpZHRoID0gd2lkdGggKiAoaW1hZ2VSYXRpbyAvIGRpc3BsYXlSYXRpbyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJldFdpZHRoO1xuXHRcdH1cblx0fTtcblxuXHRsYXp5U2l6ZXMucGFyZW50Rml0ID0gcGFyZW50Rml0O1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xhenliZWZvcmVzaXplcycsIGZ1bmN0aW9uKGUpe1xuXHRcdGlmKGUuZGVmYXVsdFByZXZlbnRlZCB8fCBlLmRldGFpbC5pbnN0YW5jZSAhPSBsYXp5U2l6ZXMpe3JldHVybjt9XG5cblx0XHR2YXIgZWxlbWVudCA9IGUudGFyZ2V0O1xuXHRcdGUuZGV0YWlsLndpZHRoID0gcGFyZW50Rml0LmNhbGN1bGF0ZVNpemUoZWxlbWVudCwgZS5kZXRhaWwud2lkdGgpO1xuXHR9KTtcbn0pKTtcbiIsIihmdW5jdGlvbih3aW5kb3csIGZhY3RvcnkpIHtcblx0aWYoIXdpbmRvdykge3JldHVybjt9XG5cdHZhciBnbG9iYWxJbnN0YWxsID0gZnVuY3Rpb24oKXtcblx0XHRmYWN0b3J5KHdpbmRvdy5sYXp5U2l6ZXMpO1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsYXp5dW52ZWlscmVhZCcsIGdsb2JhbEluc3RhbGwsIHRydWUpO1xuXHR9O1xuXG5cdGZhY3RvcnkgPSBmYWN0b3J5LmJpbmQobnVsbCwgd2luZG93LCB3aW5kb3cuZG9jdW1lbnQpO1xuXG5cdGlmKHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xuXHRcdGZhY3RvcnkocmVxdWlyZSgnbGF6eXNpemVzJykpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFsnbGF6eXNpemVzJ10sIGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYod2luZG93LmxhenlTaXplcykge1xuXHRcdGdsb2JhbEluc3RhbGwoKTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbGF6eXVudmVpbHJlYWQnLCBnbG9iYWxJbnN0YWxsLCB0cnVlKTtcblx0fVxufSh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID9cblx0d2luZG93IDogMCwgZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgbGF6eVNpemVzKSB7XG5cdC8qanNoaW50IGVxbnVsbDp0cnVlICovXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHBvbHlmaWxsO1xuXHR2YXIgbGF6eVNpemVzQ2ZnID0gbGF6eVNpemVzLmNmZztcblx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHR2YXIgc3VwcG9ydFNyY3NldCA9ICgnc2l6ZXMnIGluIGltZykgJiYgKCdzcmNzZXQnIGluIGltZyk7XG5cdHZhciByZWdIRGVzYyA9IC9cXHMrXFxkK2gvZztcblx0dmFyIGZpeEVkZ2VIRGVzY3JpcHRvciA9IChmdW5jdGlvbigpe1xuXHRcdHZhciByZWdEZXNjcmlwdG9ycyA9IC9cXHMrKFxcZCspKHd8aClcXHMrKFxcZCspKHd8aCkvO1xuXHRcdHZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKXtcblx0XHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRcdHZhciByZW1vdmVIRGVzY3JpcHRvcnMgPSBmdW5jdGlvbihzb3VyY2Upe1xuXHRcdFx0XHR2YXIgcmF0aW8sIG1hdGNoO1xuXHRcdFx0XHR2YXIgc3Jjc2V0ID0gc291cmNlLmdldEF0dHJpYnV0ZShsYXp5U2l6ZXNDZmcuc3Jjc2V0QXR0cik7XG5cdFx0XHRcdGlmKHNyY3NldCl7XG5cdFx0XHRcdFx0aWYoKG1hdGNoID0gc3Jjc2V0Lm1hdGNoKHJlZ0Rlc2NyaXB0b3JzKSkpe1xuXHRcdFx0XHRcdFx0aWYobWF0Y2hbMl0gPT0gJ3cnKXtcblx0XHRcdFx0XHRcdFx0cmF0aW8gPSBtYXRjaFsxXSAvIG1hdGNoWzNdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmF0aW8gPSBtYXRjaFszXSAvIG1hdGNoWzFdO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZihyYXRpbyl7XG5cdFx0XHRcdFx0XHRcdHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXNwZWN0cmF0aW8nLCByYXRpbyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzb3VyY2Uuc2V0QXR0cmlidXRlKGxhenlTaXplc0NmZy5zcmNzZXRBdHRyLCBzcmNzZXQucmVwbGFjZShyZWdIRGVzYywgJycpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRpZihlLmRldGFpbC5pbnN0YW5jZSAhPSBsYXp5U2l6ZXMpe3JldHVybjt9XG5cdFx0XHRcdHZhciBwaWN0dXJlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcblxuXHRcdFx0XHRpZihwaWN0dXJlICYmIHBpY3R1cmUubm9kZU5hbWUgPT0gJ1BJQ1RVUkUnKXtcblx0XHRcdFx0XHRmb3JFYWNoLmNhbGwocGljdHVyZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyksIHJlbW92ZUhEZXNjcmlwdG9ycyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVtb3ZlSERlc2NyaXB0b3JzKGUudGFyZ2V0KTtcblx0XHRcdH07XG5cblx0XHRcdHZhciB0ZXN0ID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0aWYoISFpbWcuY3VycmVudFNyYyl7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbGF6eWJlZm9yZXVudmVpbCcsIGhhbmRsZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsYXp5YmVmb3JldW52ZWlsJywgaGFuZGxlcik7XG5cblx0XHRcdGltZy5vbmxvYWQgPSB0ZXN0O1xuXHRcdFx0aW1nLm9uZXJyb3IgPSB0ZXN0O1xuXG5cdFx0XHRpbWcuc3Jjc2V0ID0gJ2RhdGE6LGEgMXcgMWgnO1xuXG5cdFx0XHRpZihpbWcuY29tcGxldGUpe1xuXHRcdFx0XHR0ZXN0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSkoKTtcblxuXHRpZighbGF6eVNpemVzQ2ZnLnN1cHBvcnRzVHlwZSl7XG5cdFx0bGF6eVNpemVzQ2ZnLnN1cHBvcnRzVHlwZSA9IGZ1bmN0aW9uKHR5cGUvKiwgZWxlbSovKXtcblx0XHRcdHJldHVybiAhdHlwZTtcblx0XHR9O1xuXHR9XG5cblx0aWYgKHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgc3VwcG9ydFNyY3NldCkge1xuXHRcdGlmKCFsYXp5U2l6ZXMuaGFzSERlc2NyaXB0b3JGaXggJiYgZG9jdW1lbnQubXNFbGVtZW50c0Zyb21Qb2ludCl7XG5cdFx0XHRsYXp5U2l6ZXMuaGFzSERlc2NyaXB0b3JGaXggPSB0cnVlO1xuXHRcdFx0Zml4RWRnZUhEZXNjcmlwdG9yKCk7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmKHdpbmRvdy5waWN0dXJlZmlsbCB8fCBsYXp5U2l6ZXNDZmcucGYpe3JldHVybjt9XG5cblx0bGF6eVNpemVzQ2ZnLnBmID0gZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dmFyIGksIGxlbjtcblx0XHRpZih3aW5kb3cucGljdHVyZWZpbGwpe3JldHVybjt9XG5cdFx0Zm9yKGkgPSAwLCBsZW4gPSBvcHRpb25zLmVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcblx0XHRcdHBvbHlmaWxsKG9wdGlvbnMuZWxlbWVudHNbaV0pO1xuXHRcdH1cblx0fTtcblxuXHQvLyBwYXJ0aWFsIHBvbHlmaWxsXG5cdHBvbHlmaWxsID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGFzY2VuZGluZ1NvcnQgPSBmdW5jdGlvbiggYSwgYiApIHtcblx0XHRcdHJldHVybiBhLncgLSBiLnc7XG5cdFx0fTtcblx0XHR2YXIgcmVnUHhMZW5ndGggPSAvXlxccypcXGQrXFwuKlxcZCpweFxccyokLztcblx0XHR2YXIgcmVkdWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24gKHNyY2VzKSB7XG5cdFx0XHR2YXIgbG93ZXJDYW5kaWRhdGUsIGJvbnVzRmFjdG9yO1xuXHRcdFx0dmFyIGxlbiA9IHNyY2VzLmxlbmd0aDtcblx0XHRcdHZhciBjYW5kaWRhdGUgPSBzcmNlc1tsZW4gLTFdO1xuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHRmb3IoaTsgaSA8IGxlbjtpKyspe1xuXHRcdFx0XHRjYW5kaWRhdGUgPSBzcmNlc1tpXTtcblx0XHRcdFx0Y2FuZGlkYXRlLmQgPSBjYW5kaWRhdGUudyAvIHNyY2VzLnc7XG5cblx0XHRcdFx0aWYoY2FuZGlkYXRlLmQgPj0gc3JjZXMuZCl7XG5cdFx0XHRcdFx0aWYoIWNhbmRpZGF0ZS5jYWNoZWQgJiYgKGxvd2VyQ2FuZGlkYXRlID0gc3JjZXNbaSAtIDFdKSAmJlxuXHRcdFx0XHRcdFx0bG93ZXJDYW5kaWRhdGUuZCA+IHNyY2VzLmQgLSAoMC4xMyAqIE1hdGgucG93KHNyY2VzLmQsIDIuMikpKXtcblxuXHRcdFx0XHRcdFx0Ym9udXNGYWN0b3IgPSBNYXRoLnBvdyhsb3dlckNhbmRpZGF0ZS5kIC0gMC42LCAxLjYpO1xuXG5cdFx0XHRcdFx0XHRpZihsb3dlckNhbmRpZGF0ZS5jYWNoZWQpIHtcblx0XHRcdFx0XHRcdFx0bG93ZXJDYW5kaWRhdGUuZCArPSAwLjE1ICogYm9udXNGYWN0b3I7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKGxvd2VyQ2FuZGlkYXRlLmQgKyAoKGNhbmRpZGF0ZS5kIC0gc3JjZXMuZCkgKiBib251c0ZhY3RvcikgPiBzcmNlcy5kKXtcblx0XHRcdFx0XHRcdFx0Y2FuZGlkYXRlID0gbG93ZXJDYW5kaWRhdGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2FuZGlkYXRlO1xuXHRcdH07XG5cblx0XHR2YXIgcGFyc2VXc3Jjc2V0ID0gKGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgY2FuZGlkYXRlcztcblx0XHRcdHZhciByZWdXQ2FuZGlkYXRlcyA9IC8oKFteLFxcc10uW15cXHNdKylcXHMrKFxcZCspdykvZztcblx0XHRcdHZhciByZWdNdWx0aXBsZSA9IC9cXHMvO1xuXHRcdFx0dmFyIGFkZENhbmRpZGF0ZSA9IGZ1bmN0aW9uKG1hdGNoLCBjYW5kaWRhdGUsIHVybCwgd0Rlc2NyaXB0b3Ipe1xuXHRcdFx0XHRjYW5kaWRhdGVzLnB1c2goe1xuXHRcdFx0XHRcdGM6IGNhbmRpZGF0ZSxcblx0XHRcdFx0XHR1OiB1cmwsXG5cdFx0XHRcdFx0dzogd0Rlc2NyaXB0b3IgKiAxXG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGlucHV0KXtcblx0XHRcdFx0Y2FuZGlkYXRlcyA9IFtdO1xuXHRcdFx0XHRpbnB1dCA9IGlucHV0LnRyaW0oKTtcblx0XHRcdFx0aW5wdXRcblx0XHRcdFx0XHQucmVwbGFjZShyZWdIRGVzYywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UocmVnV0NhbmRpZGF0ZXMsIGFkZENhbmRpZGF0ZSlcblx0XHRcdFx0O1xuXG5cdFx0XHRcdGlmKCFjYW5kaWRhdGVzLmxlbmd0aCAmJiBpbnB1dCAmJiAhcmVnTXVsdGlwbGUudGVzdChpbnB1dCkpe1xuXHRcdFx0XHRcdGNhbmRpZGF0ZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRjOiBpbnB1dCxcblx0XHRcdFx0XHRcdHU6IGlucHV0LFxuXHRcdFx0XHRcdFx0dzogOTlcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBjYW5kaWRhdGVzO1xuXHRcdFx0fTtcblx0XHR9KSgpO1xuXG5cdFx0dmFyIHJ1bk1hdGNoTWVkaWEgPSBmdW5jdGlvbigpe1xuXHRcdFx0aWYocnVuTWF0Y2hNZWRpYS5pbml0KXtyZXR1cm47fVxuXG5cdFx0XHRydW5NYXRjaE1lZGlhLmluaXQgPSB0cnVlO1xuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciB0aW1lcjtcblx0XHRcdFx0dmFyIG1hdGNoTWVkaWFFbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhenltYXRjaG1lZGlhJyk7XG5cdFx0XHRcdHZhciBydW4gPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHZhciBpLCBsZW47XG5cdFx0XHRcdFx0Zm9yKGkgPSAwLCBsZW4gPSBtYXRjaE1lZGlhRWxlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xuXHRcdFx0XHRcdFx0cG9seWZpbGwobWF0Y2hNZWRpYUVsZW1zW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHRcdFx0XHR0aW1lciA9IHNldFRpbWVvdXQocnVuLCA2Nik7XG5cdFx0XHRcdH07XG5cdFx0XHR9KSgpKTtcblx0XHR9O1xuXG5cdFx0dmFyIGNyZWF0ZVNyY3NldCA9IGZ1bmN0aW9uKGVsZW0sIGlzSW1hZ2Upe1xuXHRcdFx0dmFyIHBhcnNlZFNldDtcblx0XHRcdHZhciBzcmNTZXQgPSBlbGVtLmdldEF0dHJpYnV0ZSgnc3Jjc2V0JykgfHwgZWxlbS5nZXRBdHRyaWJ1dGUobGF6eVNpemVzQ2ZnLnNyY3NldEF0dHIpO1xuXG5cdFx0XHRpZighc3JjU2V0ICYmIGlzSW1hZ2Upe1xuXHRcdFx0XHRzcmNTZXQgPSAhZWxlbS5fbGF6eXBvbHlmaWxsID9cblx0XHRcdFx0XHQoZWxlbS5nZXRBdHRyaWJ1dGUobGF6eVNpemVzQ2ZnLnNyY0F0dHIpIHx8IGVsZW0uZ2V0QXR0cmlidXRlKCdzcmMnKSkgOlxuXHRcdFx0XHRcdGVsZW0uX2xhenlwb2x5ZmlsbC5fc2V0XG5cdFx0XHRcdDtcblx0XHRcdH1cblxuXHRcdFx0aWYoIWVsZW0uX2xhenlwb2x5ZmlsbCB8fCBlbGVtLl9sYXp5cG9seWZpbGwuX3NldCAhPSBzcmNTZXQpe1xuXG5cdFx0XHRcdHBhcnNlZFNldCA9IHBhcnNlV3NyY3NldCggc3JjU2V0IHx8ICcnICk7XG5cdFx0XHRcdGlmKGlzSW1hZ2UgJiYgZWxlbS5wYXJlbnROb2RlKXtcblx0XHRcdFx0XHRwYXJzZWRTZXQuaXNQaWN0dXJlID0gZWxlbS5wYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT0gJ1BJQ1RVUkUnO1xuXG5cdFx0XHRcdFx0aWYocGFyc2VkU2V0LmlzUGljdHVyZSl7XG5cdFx0XHRcdFx0XHRpZih3aW5kb3cubWF0Y2hNZWRpYSl7XG5cdFx0XHRcdFx0XHRcdGxhenlTaXplcy5hQyhlbGVtLCAnbGF6eW1hdGNobWVkaWEnKTtcblx0XHRcdFx0XHRcdFx0cnVuTWF0Y2hNZWRpYSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBhcnNlZFNldC5fc2V0ID0gc3JjU2V0O1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbSwgJ19sYXp5cG9seWZpbGwnLCB7XG5cdFx0XHRcdFx0dmFsdWU6IHBhcnNlZFNldCxcblx0XHRcdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGdldFggPSBmdW5jdGlvbihlbGVtKXtcblx0XHRcdHZhciBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuXHRcdFx0dmFyIG9wdGltdW0gPSBsYXp5U2l6ZXMuZ2V0WCAmJiBsYXp5U2l6ZXMuZ2V0WChlbGVtKTtcblx0XHRcdHJldHVybiBNYXRoLm1pbihvcHRpbXVtIHx8IGRwciwgMi41LCBkcHIpO1xuXHRcdH07XG5cblx0XHR2YXIgbWF0Y2hlc01lZGlhID0gZnVuY3Rpb24obWVkaWEpe1xuXHRcdFx0aWYod2luZG93Lm1hdGNoTWVkaWEpe1xuXHRcdFx0XHRtYXRjaGVzTWVkaWEgPSBmdW5jdGlvbihtZWRpYSl7XG5cdFx0XHRcdFx0cmV0dXJuICFtZWRpYSB8fCAobWF0Y2hNZWRpYShtZWRpYSkgfHwge30pLm1hdGNoZXM7XG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gIW1lZGlhO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2hlc01lZGlhKG1lZGlhKTtcblx0XHR9O1xuXG5cdFx0dmFyIGdldENhbmRpZGF0ZSA9IGZ1bmN0aW9uKGVsZW0pe1xuXHRcdFx0dmFyIHNvdXJjZXMsIGksIGxlbiwgbWVkaWEsIHNvdXJjZSwgc3JjZXMsIHNyYywgd2lkdGg7XG5cblx0XHRcdHNvdXJjZSA9IGVsZW07XG5cdFx0XHRjcmVhdGVTcmNzZXQoc291cmNlLCB0cnVlKTtcblx0XHRcdHNyY2VzID0gc291cmNlLl9sYXp5cG9seWZpbGw7XG5cblx0XHRcdGlmKHNyY2VzLmlzUGljdHVyZSl7XG5cdFx0XHRcdGZvcihpID0gMCwgc291cmNlcyA9IGVsZW0ucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyksIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xuXHRcdFx0XHRcdGlmKCBsYXp5U2l6ZXNDZmcuc3VwcG9ydHNUeXBlKHNvdXJjZXNbaV0uZ2V0QXR0cmlidXRlKCd0eXBlJyksIGVsZW0pICYmIG1hdGNoZXNNZWRpYSggc291cmNlc1tpXS5nZXRBdHRyaWJ1dGUoJ21lZGlhJykpICl7XG5cdFx0XHRcdFx0XHRzb3VyY2UgPSBzb3VyY2VzW2ldO1xuXHRcdFx0XHRcdFx0Y3JlYXRlU3Jjc2V0KHNvdXJjZSk7XG5cdFx0XHRcdFx0XHRzcmNlcyA9IHNvdXJjZS5fbGF6eXBvbHlmaWxsO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKHNyY2VzLmxlbmd0aCA+IDEpe1xuXHRcdFx0XHR3aWR0aCA9IHNvdXJjZS5nZXRBdHRyaWJ1dGUoJ3NpemVzJykgfHwgJyc7XG5cdFx0XHRcdHdpZHRoID0gcmVnUHhMZW5ndGgudGVzdCh3aWR0aCkgJiYgcGFyc2VJbnQod2lkdGgsIDEwKSB8fCBsYXp5U2l6ZXMuZ1coZWxlbSwgZWxlbS5wYXJlbnROb2RlKTtcblx0XHRcdFx0c3JjZXMuZCA9IGdldFgoZWxlbSk7XG5cdFx0XHRcdGlmKCFzcmNlcy5zcmMgfHwgIXNyY2VzLncgfHwgc3JjZXMudyA8IHdpZHRoKXtcblx0XHRcdFx0XHRzcmNlcy53ID0gd2lkdGg7XG5cdFx0XHRcdFx0c3JjID0gcmVkdWNlQ2FuZGlkYXRlKHNyY2VzLnNvcnQoYXNjZW5kaW5nU29ydCkpO1xuXHRcdFx0XHRcdHNyY2VzLnNyYyA9IHNyYztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzcmMgPSBzcmNlcy5zcmM7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNyYyA9IHNyY2VzWzBdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc3JjO1xuXHRcdH07XG5cblx0XHR2YXIgcCA9IGZ1bmN0aW9uKGVsZW0pe1xuXHRcdFx0aWYoc3VwcG9ydFNyY3NldCAmJiBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5wYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT0gJ1BJQ1RVUkUnKXtyZXR1cm47fVxuXHRcdFx0dmFyIGNhbmRpZGF0ZSA9IGdldENhbmRpZGF0ZShlbGVtKTtcblxuXHRcdFx0aWYoY2FuZGlkYXRlICYmIGNhbmRpZGF0ZS51ICYmIGVsZW0uX2xhenlwb2x5ZmlsbC5jdXIgIT0gY2FuZGlkYXRlLnUpe1xuXHRcdFx0XHRlbGVtLl9sYXp5cG9seWZpbGwuY3VyID0gY2FuZGlkYXRlLnU7XG5cdFx0XHRcdGNhbmRpZGF0ZS5jYWNoZWQgPSB0cnVlO1xuXHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZShsYXp5U2l6ZXNDZmcuc3JjQXR0ciwgY2FuZGlkYXRlLnUpO1xuXHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgY2FuZGlkYXRlLnUpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRwLnBhcnNlID0gcGFyc2VXc3Jjc2V0O1xuXG5cdFx0cmV0dXJuIHA7XG5cdH0pKCk7XG5cblx0aWYobGF6eVNpemVzQ2ZnLmxvYWRlZENsYXNzICYmIGxhenlTaXplc0NmZy5sb2FkaW5nQ2xhc3Mpe1xuXHRcdChmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHNlbHMgPSBbXTtcblx0XHRcdFsnaW1nW3NpemVzJD1cInB4XCJdW3NyY3NldF0uJywgJ3BpY3R1cmUgPiBpbWc6bm90KFtzcmNzZXRdKS4nXS5mb3JFYWNoKGZ1bmN0aW9uKHNlbCl7XG5cdFx0XHRcdHNlbHMucHVzaChzZWwgKyBsYXp5U2l6ZXNDZmcubG9hZGVkQ2xhc3MpO1xuXHRcdFx0XHRzZWxzLnB1c2goc2VsICsgbGF6eVNpemVzQ2ZnLmxvYWRpbmdDbGFzcyk7XG5cdFx0XHR9KTtcblx0XHRcdGxhenlTaXplc0NmZy5wZih7XG5cdFx0XHRcdGVsZW1lbnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbHMuam9pbignLCAnKSlcblx0XHRcdH0pO1xuXHRcdH0pKCk7XG5cblx0fVxufSkpO1xuIiwiKGZ1bmN0aW9uKHdpbmRvdywgZmFjdG9yeSkge1xuXHR2YXIgZ2xvYmFsSW5zdGFsbCA9IGZ1bmN0aW9uKCl7XG5cdFx0ZmFjdG9yeSh3aW5kb3cubGF6eVNpemVzKTtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbGF6eXVudmVpbHJlYWQnLCBnbG9iYWxJbnN0YWxsLCB0cnVlKTtcblx0fTtcblxuXHRmYWN0b3J5ID0gZmFjdG9yeS5iaW5kKG51bGwsIHdpbmRvdywgd2luZG93LmRvY3VtZW50KTtcblxuXHRpZih0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKXtcblx0XHRmYWN0b3J5KHJlcXVpcmUoJ2xhenlzaXplcycpKTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShbJ2xhenlzaXplcyddLCBmYWN0b3J5KTtcblx0fSBlbHNlIGlmKHdpbmRvdy5sYXp5U2l6ZXMpIHtcblx0XHRnbG9iYWxJbnN0YWxsKCk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xhenl1bnZlaWxyZWFkJywgZ2xvYmFsSW5zdGFsbCwgdHJ1ZSk7XG5cdH1cbn0od2luZG93LCBmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBsYXp5U2l6ZXMpIHtcblx0Lypqc2hpbnQgZXFudWxsOnRydWUgKi9cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBjb25maWcsIHJpYXNDZmc7XG5cdHZhciBsYXp5U2l6ZXNDZmcgPSBsYXp5U2l6ZXMuY2ZnO1xuXHR2YXIgcmVwbGFjZVR5cGVzID0ge3N0cmluZzogMSwgbnVtYmVyOiAxfTtcblx0dmFyIHJlZ051bWJlciA9IC9eXFwtKlxcKypcXGQrXFwuKlxcZCokLztcblx0dmFyIHJlZ1BpY3R1cmUgPSAvXnBpY3R1cmUkL2k7XG5cdHZhciByZWdXaWR0aCA9IC9cXHMqXFx7XFxzKndpZHRoXFxzKlxcfVxccyovaTtcblx0dmFyIHJlZ0hlaWdodCA9IC9cXHMqXFx7XFxzKmhlaWdodFxccypcXH1cXHMqL2k7XG5cdHZhciByZWdQbGFjZWhvbGRlciA9IC9cXHMqXFx7XFxzKihbYS16MC05XSspXFxzKlxcfVxccyovaWc7XG5cdHZhciByZWdPYmogPSAvXlxcWy4qXFxdfFxcey4qXFx9JC87XG5cdHZhciByZWdBbGxvd2VkU2l6ZXMgPSAvXig/OmF1dG98XFxkKyhweCk/KSQvO1xuXHR2YXIgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdHZhciBidWdneVNpemVzID0gKCdzcmNzZXQnIGluIGltZykgJiYgISgnc2l6ZXMnIGluIGltZyk7XG5cdHZhciBzdXBwb3J0UGljdHVyZSA9ICEhd2luZG93LkhUTUxQaWN0dXJlRWxlbWVudCAmJiAhYnVnZ3lTaXplcztcblxuXHQoZnVuY3Rpb24oKXtcblx0XHR2YXIgcHJvcDtcblx0XHR2YXIgbm9vcCA9IGZ1bmN0aW9uKCl7fTtcblx0XHR2YXIgcmlhc0RlZmF1bHRzID0ge1xuXHRcdFx0cHJlZml4OiAnJyxcblx0XHRcdHBvc3RmaXg6ICcnLFxuXHRcdFx0c3JjQXR0cjogJ2RhdGEtc3JjJyxcblx0XHRcdGFic1VybDogZmFsc2UsXG5cdFx0XHRtb2RpZnlPcHRpb25zOiBub29wLFxuXHRcdFx0d2lkdGhtYXA6IHt9LFxuXHRcdFx0cmF0aW86IGZhbHNlLFxuXHRcdFx0dHJhZGl0aW9uYWxSYXRpbzogZmFsc2UsXG5cdFx0XHRhc3BlY3RyYXRpbzogZmFsc2UsXG5cdFx0fTtcblxuXHRcdGNvbmZpZyA9IGxhenlTaXplcyAmJiBsYXp5U2l6ZXMuY2ZnO1xuXG5cdFx0aWYoIWNvbmZpZy5zdXBwb3J0c1R5cGUpe1xuXHRcdFx0Y29uZmlnLnN1cHBvcnRzVHlwZSA9IGZ1bmN0aW9uKHR5cGUvKiwgZWxlbSovKXtcblx0XHRcdFx0cmV0dXJuICF0eXBlO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZighY29uZmlnLnJpYXMpe1xuXHRcdFx0Y29uZmlnLnJpYXMgPSB7fTtcblx0XHR9XG5cdFx0cmlhc0NmZyA9IGNvbmZpZy5yaWFzO1xuXG5cdFx0aWYoISgnd2lkdGhzJyBpbiByaWFzQ2ZnKSl7XG5cdFx0XHRyaWFzQ2ZnLndpZHRocyA9IFtdO1xuXHRcdFx0KGZ1bmN0aW9uICh3aWR0aHMpe1xuXHRcdFx0XHR2YXIgd2lkdGg7XG5cdFx0XHRcdHZhciBpID0gMDtcblx0XHRcdFx0d2hpbGUoIXdpZHRoIHx8IHdpZHRoIDwgMzAwMCl7XG5cdFx0XHRcdFx0aSArPSA1O1xuXHRcdFx0XHRcdGlmKGkgPiAzMCl7XG5cdFx0XHRcdFx0XHRpICs9IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHdpZHRoID0gKDM2ICogaSk7XG5cdFx0XHRcdFx0d2lkdGhzLnB1c2god2lkdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KShyaWFzQ2ZnLndpZHRocyk7XG5cdFx0fVxuXG5cdFx0Zm9yKHByb3AgaW4gcmlhc0RlZmF1bHRzKXtcblx0XHRcdGlmKCEocHJvcCBpbiByaWFzQ2ZnKSl7XG5cdFx0XHRcdHJpYXNDZmdbcHJvcF0gPSByaWFzRGVmYXVsdHNbcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9KSgpO1xuXG5cdGZ1bmN0aW9uIGdldEVsZW1lbnRPcHRpb25zKGVsZW0sIHNyYyl7XG5cdFx0dmFyIGF0dHIsIHBhcmVudCwgc2V0T3B0aW9uLCBvcHRpb25zO1xuXHRcdHZhciBlbGVtU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG5cblxuXHRcdHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRvcHRpb25zID0ge1xuXHRcdFx0aXNQaWN0dXJlOiAhIShwYXJlbnQgJiYgcmVnUGljdHVyZS50ZXN0KHBhcmVudC5ub2RlTmFtZSB8fCAnJykpXG5cdFx0fTtcblxuXHRcdHNldE9wdGlvbiA9IGZ1bmN0aW9uKGF0dHIsIHJ1bil7XG5cdFx0XHR2YXIgYXR0clZhbCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLScrIGF0dHIpO1xuXG5cdFx0XHRpZiAoIWF0dHJWYWwpIHtcblx0XHRcdFx0Ly8gbm8gZGF0YS0gYXR0ciwgZ2V0IHZhbHVlIGZyb20gdGhlIENTU1xuXHRcdFx0XHR2YXIgc3R5bGVzID0gZWxlbVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCctLWxzLScgKyBhdHRyKTtcblx0XHRcdFx0Ly8gYXQgbGVhc3QgU2FmYXJpIDkgcmV0dXJucyBudWxsIHJhdGhlciB0aGFuXG5cdFx0XHRcdC8vIGFuIGVtcHR5IHN0cmluZyBmb3IgZ2V0UHJvcGVydHlWYWx1ZSBjYXVzaW5nXG5cdFx0XHRcdC8vIC50cmltKCkgdG8gZmFpbFxuXHRcdFx0XHRpZiAoc3R5bGVzKSB7XG5cdFx0XHRcdFx0YXR0clZhbCA9IHN0eWxlcy50cmltKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGF0dHJWYWwpIHtcblx0XHRcdFx0aWYoYXR0clZhbCA9PSAndHJ1ZScpe1xuXHRcdFx0XHRcdGF0dHJWYWwgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYoYXR0clZhbCA9PSAnZmFsc2UnKXtcblx0XHRcdFx0XHRhdHRyVmFsID0gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSBpZihyZWdOdW1iZXIudGVzdChhdHRyVmFsKSl7XG5cdFx0XHRcdFx0YXR0clZhbCA9IHBhcnNlRmxvYXQoYXR0clZhbCk7XG5cdFx0XHRcdH0gZWxzZSBpZih0eXBlb2Ygcmlhc0NmZ1thdHRyXSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0XHRhdHRyVmFsID0gcmlhc0NmZ1thdHRyXShlbGVtLCBhdHRyVmFsKTtcblx0XHRcdFx0fSBlbHNlIGlmKHJlZ09iai50ZXN0KGF0dHJWYWwpKXtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0YXR0clZhbCA9IEpTT04ucGFyc2UoYXR0clZhbCk7XG5cdFx0XHRcdFx0fSBjYXRjaChlKXt9XG5cdFx0XHRcdH1cblx0XHRcdFx0b3B0aW9uc1thdHRyXSA9IGF0dHJWYWw7XG5cdFx0XHR9IGVsc2UgaWYoKGF0dHIgaW4gcmlhc0NmZykgJiYgdHlwZW9mIHJpYXNDZmdbYXR0cl0gIT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRcdG9wdGlvbnNbYXR0cl0gPSByaWFzQ2ZnW2F0dHJdO1xuXHRcdFx0fSBlbHNlIGlmKHJ1biAmJiB0eXBlb2Ygcmlhc0NmZ1thdHRyXSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0b3B0aW9uc1thdHRyXSA9IHJpYXNDZmdbYXR0cl0oZWxlbSwgYXR0clZhbCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGZvcihhdHRyIGluIHJpYXNDZmcpe1xuXHRcdFx0c2V0T3B0aW9uKGF0dHIpO1xuXHRcdH1cblx0XHRzcmMucmVwbGFjZShyZWdQbGFjZWhvbGRlciwgZnVuY3Rpb24oZnVsbCwgbWF0Y2gpe1xuXHRcdFx0aWYoIShtYXRjaCBpbiBvcHRpb25zKSl7XG5cdFx0XHRcdHNldE9wdGlvbihtYXRjaCwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gb3B0aW9ucztcblx0fVxuXG5cdGZ1bmN0aW9uIHJlcGxhY2VVcmxQcm9wcyh1cmwsIG9wdGlvbnMpe1xuXHRcdHZhciBjYW5kaWRhdGVzID0gW107XG5cdFx0dmFyIHJlcGxhY2VGbiA9IGZ1bmN0aW9uKGZ1bGwsIG1hdGNoKXtcblx0XHRcdHJldHVybiAocmVwbGFjZVR5cGVzW3R5cGVvZiBvcHRpb25zW21hdGNoXV0pID8gb3B0aW9uc1ttYXRjaF0gOiBmdWxsO1xuXHRcdH07XG5cdFx0Y2FuZGlkYXRlcy5zcmNzZXQgPSBbXTtcblxuXHRcdGlmKG9wdGlvbnMuYWJzVXJsKXtcblx0XHRcdGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuXHRcdFx0dXJsID0gYW5jaG9yLmhyZWY7XG5cdFx0fVxuXG5cdFx0dXJsID0gKChvcHRpb25zLnByZWZpeCB8fCAnJykgKyB1cmwgKyAob3B0aW9ucy5wb3N0Zml4IHx8ICcnKSkucmVwbGFjZShyZWdQbGFjZWhvbGRlciwgcmVwbGFjZUZuKTtcblxuXHRcdG9wdGlvbnMud2lkdGhzLmZvckVhY2goZnVuY3Rpb24od2lkdGgpe1xuXHRcdFx0dmFyIHdpZHRoQWxpYXMgPSBvcHRpb25zLndpZHRobWFwW3dpZHRoXSB8fCB3aWR0aDtcblx0XHRcdHZhciByYXRpbyA9IG9wdGlvbnMuYXNwZWN0cmF0aW8gfHwgb3B0aW9ucy5yYXRpbztcblx0XHRcdHZhciB0cmFkaXRpb25hbFJhdGlvID0gIW9wdGlvbnMuYXNwZWN0cmF0aW8gJiYgcmlhc0NmZy50cmFkaXRpb25hbFJhdGlvO1xuXHRcdFx0dmFyIGNhbmRpZGF0ZSA9IHtcblx0XHRcdFx0dTogdXJsLnJlcGxhY2UocmVnV2lkdGgsIHdpZHRoQWxpYXMpXG5cdFx0XHRcdFx0XHQucmVwbGFjZShyZWdIZWlnaHQsIHJhdGlvID9cblx0XHRcdFx0XHRcdFx0dHJhZGl0aW9uYWxSYXRpbyA/XG5cdFx0XHRcdFx0XHRcdFx0TWF0aC5yb3VuZCh3aWR0aCAqIHJhdGlvKSA6XG5cdFx0XHRcdFx0XHRcdFx0TWF0aC5yb3VuZCh3aWR0aCAvIHJhdGlvKVxuXHRcdFx0XHRcdFx0XHQ6ICcnKSxcblx0XHRcdFx0dzogd2lkdGhcblx0XHRcdH07XG5cblx0XHRcdGNhbmRpZGF0ZXMucHVzaChjYW5kaWRhdGUpO1xuXHRcdFx0Y2FuZGlkYXRlcy5zcmNzZXQucHVzaCggKGNhbmRpZGF0ZS5jID0gY2FuZGlkYXRlLnUgKyAnICcgKyB3aWR0aCArICd3JykgKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gY2FuZGlkYXRlcztcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFNyYyhzcmMsIG9wdHMsIGVsZW0pe1xuXHRcdHZhciBlbGVtVyA9IDA7XG5cdFx0dmFyIGVsZW1IID0gMDtcblx0XHR2YXIgc2l6ZUVsZW1lbnQgPSBlbGVtO1xuXG5cdFx0aWYoIXNyYyl7cmV0dXJuO31cblxuXHRcdGlmIChvcHRzLnJhdGlvID09PSAnY29udGFpbmVyJykge1xuXHRcdFx0Ly8gY2FsY3VsYXRlIGltYWdlIG9yIHBhcmVudCByYXRpb1xuXHRcdFx0ZWxlbVcgPSBzaXplRWxlbWVudC5zY3JvbGxXaWR0aDtcblx0XHRcdGVsZW1IID0gc2l6ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXG5cdFx0XHR3aGlsZSAoKCFlbGVtVyB8fCAhZWxlbUgpICYmIHNpemVFbGVtZW50ICE9PSBkb2N1bWVudCkge1xuXHRcdFx0XHRzaXplRWxlbWVudCA9IHNpemVFbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0XHRcdGVsZW1XID0gc2l6ZUVsZW1lbnQuc2Nyb2xsV2lkdGg7XG5cdFx0XHRcdGVsZW1IID0gc2l6ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1XICYmIGVsZW1IKSB7XG5cdFx0XHRcdG9wdHMucmF0aW8gPSBvcHRzLnRyYWRpdGlvbmFsUmF0aW8gPyBlbGVtSCAvIGVsZW1XIDogZWxlbVcgLyBlbGVtSDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRzcmMgPSByZXBsYWNlVXJsUHJvcHMoc3JjLCBvcHRzKTtcblxuXHRcdHNyYy5pc1BpY3R1cmUgPSBvcHRzLmlzUGljdHVyZTtcblxuXHRcdGlmKGJ1Z2d5U2l6ZXMgJiYgZWxlbS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09ICdJTUcnKXtcblx0XHRcdGVsZW0ucmVtb3ZlQXR0cmlidXRlKGNvbmZpZy5zcmNzZXRBdHRyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoY29uZmlnLnNyY3NldEF0dHIsIHNyYy5zcmNzZXQuam9pbignLCAnKSk7XG5cdFx0fVxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW0sICdfbGF6eXJpYXMnLCB7XG5cdFx0XHR2YWx1ZTogc3JjLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUF0dHJPYmplY3QoZWxlbSwgc3JjKXtcblx0XHR2YXIgb3B0cyA9IGdldEVsZW1lbnRPcHRpb25zKGVsZW0sIHNyYyk7XG5cblx0XHRyaWFzQ2ZnLm1vZGlmeU9wdGlvbnMuY2FsbChlbGVtLCB7dGFyZ2V0OiBlbGVtLCBkZXRhaWxzOiBvcHRzLCBkZXRhaWw6IG9wdHN9KTtcblxuXHRcdGxhenlTaXplcy5maXJlKGVsZW0sICdsYXp5cmlhc21vZGlmeW9wdGlvbnMnLCBvcHRzKTtcblx0XHRyZXR1cm4gb3B0cztcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFNyYyhlbGVtKXtcblx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNyY2F0dHInKSB8fCByaWFzQ2ZnLnNyY0F0dHIgKSB8fCBlbGVtLmdldEF0dHJpYnV0ZShjb25maWcuc3Jjc2V0QXR0cikgfHwgZWxlbS5nZXRBdHRyaWJ1dGUoY29uZmlnLnNyY0F0dHIpIHx8IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXBmc3Jjc2V0JykgfHwgJyc7XG5cdH1cblxuXHRhZGRFdmVudExpc3RlbmVyKCdsYXp5YmVmb3Jlc2l6ZXMnLCBmdW5jdGlvbihlKXtcblx0XHRpZihlLmRldGFpbC5pbnN0YW5jZSAhPSBsYXp5U2l6ZXMpe3JldHVybjt9XG5cblx0XHR2YXIgZWxlbSwgc3JjLCBlbGVtT3B0cywgcGFyZW50LCBzb3VyY2VzLCBpLCBsZW4sIHNvdXJjZVNyYywgc2l6ZXMsIGRldGFpbCwgaGFzUGxhY2Vob2xkZXIsIG1vZGlmaWVkLCBlbXB0eUxpc3Q7XG5cdFx0ZWxlbSA9IGUudGFyZ2V0O1xuXG5cdFx0aWYoIWUuZGV0YWlsLmRhdGFBdHRyIHx8IGUuZGVmYXVsdFByZXZlbnRlZCB8fCByaWFzQ2ZnLmRpc2FibGVkIHx8ICEoKHNpemVzID0gZWxlbS5nZXRBdHRyaWJ1dGUoY29uZmlnLnNpemVzQXR0cikgfHwgZWxlbS5nZXRBdHRyaWJ1dGUoJ3NpemVzJykpICYmIHJlZ0FsbG93ZWRTaXplcy50ZXN0KHNpemVzKSkpe3JldHVybjt9XG5cblx0XHRzcmMgPSBnZXRTcmMoZWxlbSk7XG5cblx0XHRlbGVtT3B0cyA9IGNyZWF0ZUF0dHJPYmplY3QoZWxlbSwgc3JjKTtcblxuXHRcdGhhc1BsYWNlaG9sZGVyID0gcmVnV2lkdGgudGVzdChlbGVtT3B0cy5wcmVmaXgpIHx8IHJlZ1dpZHRoLnRlc3QoZWxlbU9wdHMucG9zdGZpeCk7XG5cblx0XHRpZihlbGVtT3B0cy5pc1BpY3R1cmUgJiYgKHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZSkpe1xuXHRcdFx0c291cmNlcyA9IHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyk7XG5cdFx0XHRmb3IoaSA9IDAsIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xuXHRcdFx0XHRpZiAoIGhhc1BsYWNlaG9sZGVyIHx8IHJlZ1dpZHRoLnRlc3Qoc291cmNlU3JjID0gZ2V0U3JjKHNvdXJjZXNbaV0pKSApe1xuXHRcdFx0XHRcdHNldFNyYyhzb3VyY2VTcmMsIGVsZW1PcHRzLCBzb3VyY2VzW2ldKTtcblx0XHRcdFx0XHRtb2RpZmllZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGhhc1BsYWNlaG9sZGVyIHx8IHJlZ1dpZHRoLnRlc3Qoc3JjKSApe1xuXHRcdFx0c2V0U3JjKHNyYywgZWxlbU9wdHMsIGVsZW0pO1xuXHRcdFx0bW9kaWZpZWQgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAobW9kaWZpZWQpIHtcblx0XHRcdGVtcHR5TGlzdCA9IFtdO1xuXHRcdFx0ZW1wdHlMaXN0LnNyY3NldCA9IFtdO1xuXHRcdFx0ZW1wdHlMaXN0LmlzUGljdHVyZSA9IHRydWU7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbSwgJ19sYXp5cmlhcycsIHtcblx0XHRcdFx0dmFsdWU6IGVtcHR5TGlzdCxcblx0XHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmKG1vZGlmaWVkKXtcblx0XHRcdGlmKHN1cHBvcnRQaWN0dXJlKXtcblx0XHRcdFx0ZWxlbS5yZW1vdmVBdHRyaWJ1dGUoY29uZmlnLnNyY0F0dHIpO1xuXHRcdFx0fSBlbHNlIGlmKHNpemVzICE9ICdhdXRvJykge1xuXHRcdFx0XHRkZXRhaWwgPSB7XG5cdFx0XHRcdFx0d2lkdGg6IHBhcnNlSW50KHNpemVzLCAxMClcblx0XHRcdFx0fTtcblx0XHRcdFx0cG9seWZpbGwoe1xuXHRcdFx0XHRcdHRhcmdldDogZWxlbSxcblx0XHRcdFx0XHRkZXRhaWw6IGRldGFpbFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHRydWUpO1xuXHQvLyBwYXJ0aWFsIHBvbHlmaWxsXG5cdHZhciBwb2x5ZmlsbCA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBhc2NlbmRpbmdTb3J0ID0gZnVuY3Rpb24oIGEsIGIgKSB7XG5cdFx0XHRyZXR1cm4gYS53IC0gYi53O1xuXHRcdH07XG5cblx0XHR2YXIgcmVkdWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24gKHNyY2VzKSB7XG5cdFx0XHR2YXIgbG93ZXJDYW5kaWRhdGUsIGJvbnVzRmFjdG9yO1xuXHRcdFx0dmFyIGxlbiA9IHNyY2VzLmxlbmd0aDtcblx0XHRcdHZhciBjYW5kaWRhdGUgPSBzcmNlc1tsZW4gLTFdO1xuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHRmb3IoaTsgaSA8IGxlbjtpKyspe1xuXHRcdFx0XHRjYW5kaWRhdGUgPSBzcmNlc1tpXTtcblx0XHRcdFx0Y2FuZGlkYXRlLmQgPSBjYW5kaWRhdGUudyAvIHNyY2VzLnc7XG5cdFx0XHRcdGlmKGNhbmRpZGF0ZS5kID49IHNyY2VzLmQpe1xuXHRcdFx0XHRcdGlmKCFjYW5kaWRhdGUuY2FjaGVkICYmIChsb3dlckNhbmRpZGF0ZSA9IHNyY2VzW2kgLSAxXSkgJiZcblx0XHRcdFx0XHRcdGxvd2VyQ2FuZGlkYXRlLmQgPiBzcmNlcy5kIC0gKDAuMTMgKiBNYXRoLnBvdyhzcmNlcy5kLCAyLjIpKSl7XG5cblx0XHRcdFx0XHRcdGJvbnVzRmFjdG9yID0gTWF0aC5wb3cobG93ZXJDYW5kaWRhdGUuZCAtIDAuNiwgMS42KTtcblxuXHRcdFx0XHRcdFx0aWYobG93ZXJDYW5kaWRhdGUuY2FjaGVkKSB7XG5cdFx0XHRcdFx0XHRcdGxvd2VyQ2FuZGlkYXRlLmQgKz0gMC4xNSAqIGJvbnVzRmFjdG9yO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZihsb3dlckNhbmRpZGF0ZS5kICsgKChjYW5kaWRhdGUuZCAtIHNyY2VzLmQpICogYm9udXNGYWN0b3IpID4gc3JjZXMuZCl7XG5cdFx0XHRcdFx0XHRcdGNhbmRpZGF0ZSA9IGxvd2VyQ2FuZGlkYXRlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNhbmRpZGF0ZTtcblx0XHR9O1xuXG5cdFx0dmFyIGdldFdTZXQgPSBmdW5jdGlvbihlbGVtLCB0ZXN0UGljdHVyZSl7XG5cdFx0XHR2YXIgc3JjO1xuXHRcdFx0aWYoIWVsZW0uX2xhenlyaWFzICYmIGxhenlTaXplcy5wV1MgJiYgKHNyYyA9IGxhenlTaXplcy5wV1MoZWxlbS5nZXRBdHRyaWJ1dGUoY29uZmlnLnNyY3NldEF0dHIgfHwgJycpKSkubGVuZ3RoKXtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW0sICdfbGF6eXJpYXMnLCB7XG5cdFx0XHRcdFx0dmFsdWU6IHNyYyxcblx0XHRcdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYodGVzdFBpY3R1cmUgJiYgZWxlbS5wYXJlbnROb2RlKXtcblx0XHRcdFx0XHRzcmMuaXNQaWN0dXJlID0gZWxlbS5wYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT0gJ1BJQ1RVUkUnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZWxlbS5fbGF6eXJpYXM7XG5cdFx0fTtcblxuXHRcdHZhciBnZXRYID0gZnVuY3Rpb24oZWxlbSl7XG5cdFx0XHR2YXIgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcblx0XHRcdHZhciBvcHRpbXVtID0gbGF6eVNpemVzLmdldFggJiYgbGF6eVNpemVzLmdldFgoZWxlbSk7XG5cdFx0XHRyZXR1cm4gTWF0aC5taW4ob3B0aW11bSB8fCBkcHIsIDIuNCwgZHByKTtcblx0XHR9O1xuXG5cdFx0dmFyIGdldENhbmRpZGF0ZSA9IGZ1bmN0aW9uKGVsZW0sIHdpZHRoKXtcblx0XHRcdHZhciBzb3VyY2VzLCBpLCBsZW4sIG1lZGlhLCBzcmNlcywgc3JjO1xuXG5cdFx0XHRzcmNlcyA9IGVsZW0uX2xhenlyaWFzO1xuXG5cdFx0XHRpZihzcmNlcy5pc1BpY3R1cmUgJiYgd2luZG93Lm1hdGNoTWVkaWEpe1xuXHRcdFx0XHRmb3IoaSA9IDAsIHNvdXJjZXMgPSBlbGVtLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NvdXJjZScpLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcblx0XHRcdFx0XHRpZihnZXRXU2V0KHNvdXJjZXNbaV0pICYmICFzb3VyY2VzW2ldLmdldEF0dHJpYnV0ZSgndHlwZScpICYmICggIShtZWRpYSA9IHNvdXJjZXNbaV0uZ2V0QXR0cmlidXRlKCdtZWRpYScpKSB8fCAoKG1hdGNoTWVkaWEobWVkaWEpIHx8IHt9KS5tYXRjaGVzKSkpe1xuXHRcdFx0XHRcdFx0c3JjZXMgPSBzb3VyY2VzW2ldLl9sYXp5cmlhcztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZighc3JjZXMudyB8fCBzcmNlcy53IDwgd2lkdGgpe1xuXHRcdFx0XHRzcmNlcy53ID0gd2lkdGg7XG5cdFx0XHRcdHNyY2VzLmQgPSBnZXRYKGVsZW0pO1xuXHRcdFx0XHRzcmMgPSByZWR1Y2VDYW5kaWRhdGUoc3JjZXMuc29ydChhc2NlbmRpbmdTb3J0KSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzcmM7XG5cdFx0fTtcblxuXHRcdHZhciBwb2x5ZmlsbCA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0aWYoZS5kZXRhaWwuaW5zdGFuY2UgIT0gbGF6eVNpemVzKXtyZXR1cm47fVxuXG5cdFx0XHR2YXIgY2FuZGlkYXRlO1xuXHRcdFx0dmFyIGVsZW0gPSBlLnRhcmdldDtcblxuXHRcdFx0aWYoIWJ1Z2d5U2l6ZXMgJiYgKHdpbmRvdy5yZXNwaW1hZ2UgfHwgd2luZG93LnBpY3R1cmVmaWxsIHx8IGxhenlTaXplc0NmZy5wZikpe1xuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdsYXp5YmVmb3Jlc2l6ZXMnLCBwb2x5ZmlsbCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoISgnX2xhenlyaWFzJyBpbiBlbGVtKSAmJiAoIWUuZGV0YWlsLmRhdGFBdHRyIHx8ICFnZXRXU2V0KGVsZW0sIHRydWUpKSl7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y2FuZGlkYXRlID0gZ2V0Q2FuZGlkYXRlKGVsZW0sIGUuZGV0YWlsLndpZHRoKTtcblxuXHRcdFx0aWYoY2FuZGlkYXRlICYmIGNhbmRpZGF0ZS51ICYmIGVsZW0uX2xhenlyaWFzLmN1ciAhPSBjYW5kaWRhdGUudSl7XG5cdFx0XHRcdGVsZW0uX2xhenlyaWFzLmN1ciA9IGNhbmRpZGF0ZS51O1xuXHRcdFx0XHRjYW5kaWRhdGUuY2FjaGVkID0gdHJ1ZTtcblx0XHRcdFx0bGF6eVNpemVzLnJBRihmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKGNvbmZpZy5zcmNBdHRyLCBjYW5kaWRhdGUudSk7XG5cdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNhbmRpZGF0ZS51KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGlmKCFzdXBwb3J0UGljdHVyZSl7XG5cdFx0XHRhZGRFdmVudExpc3RlbmVyKCdsYXp5YmVmb3Jlc2l6ZXMnLCBwb2x5ZmlsbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBvbHlmaWxsID0gZnVuY3Rpb24oKXt9O1xuXHRcdH1cblxuXHRcdHJldHVybiBwb2x5ZmlsbDtcblxuXHR9KSgpO1xuXG59KSk7XG4iLCJpbXBvcnQgXCJmb2N1cy12aXNpYmxlXCI7XG5cbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSBcIkAvdXRpbHNcIjtcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vbWFpbi9hY2NvcmRpb25cIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi9tYWluL2Nhcm91c2VsXCI7XG5pbXBvcnQgTGF6eWxvYWQgZnJvbSBcIi4vbWFpbi9sYXp5bG9hZFwiO1xuaW1wb3J0IFZpZGVvIGZyb20gXCIuL21haW4vdmlkZW9cIjtcblxuY29uc3QgY2xhc3NlcyA9IFtBY2NvcmRpb24sIENhcm91c2VsLCBMYXp5bG9hZCwgVmlkZW9dO1xuXG5mb3IgKGNvbnN0IENsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICBuZXcgQ2xhc3MoKTtcbn1cblxuKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhyb3R0bGUoc2V0Q3NzUHJvcGVydGllcywgMjUwKSk7XG4gICAgc2V0Q3NzUHJvcGVydGllcygpO1xuXG4gICAgZnVuY3Rpb24gc2V0Q3NzUHJvcGVydGllcygpIHtcbiAgICAgICAgY29uc3QgaHRtbFdpZHRoID0gK2h0bWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgudG9GaXhlZCgyKTtcbiAgICAgICAgaHRtbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2Nyb2xsYmFyLXdpZHRoXCIsIGAke3dpbmRvdy5pbm5lcldpZHRoIC0gaHRtbFdpZHRofWApO1xuICAgICAgICBodG1sLnN0eWxlLnNldFByb3BlcnR5KFwiLS12aFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxfXB4YCk7XG4gICAgfVxufSkoKTtcbiIsImltcG9ydCB7IGdldEFsbCB9IGZyb20gXCJAL3V0aWxzXCI7XG5cbmNsYXNzIENhcm91c2VsQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZ2V0QWxsKFwiLmpzLWNhcm91c2VsXCIpO1xuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDEgJiYgZWxlbWVudHNbMF0uY2hpbGRFbGVtZW50Q291bnQgPT09IDEpIHJldHVybjtcblxuICAgICAgICB0aGlzLl9jcmVhdGVJbnN0YW5jZXMoZWxlbWVudHMpO1xuICAgIH1cblxuICAgIGFzeW5jIF9jcmVhdGVJbnN0YW5jZXMoZWxlbWVudHMpIHtcbiAgICAgICAgY29uc3QgeyBDYXJvdXNlbCB9ID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2Fyb3VzZWxcIiAqLyBcIi4vQ2Fyb3VzZWxcIik7XG5cbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudCA+IDEpIHtcbiAgICAgICAgICAgICAgICBuZXcgQ2Fyb3VzZWwoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbENvbnRyb2xsZXI7XG4iLCJpbXBvcnQgbGF6eVNpemVzIGZyb20gXCJsYXp5c2l6ZXNcIjtcbmltcG9ydCBcImxhenlzaXplcy9wbHVnaW5zL29iamVjdC1maXQvbHMub2JqZWN0LWZpdFwiO1xuaW1wb3J0IFwibGF6eXNpemVzL3BsdWdpbnMvcGFyZW50LWZpdC9scy5wYXJlbnQtZml0XCI7XG5pbXBvcnQgXCJsYXp5c2l6ZXMvcGx1Z2lucy9yZXNwaW1nL2xzLnJlc3BpbWdcIjtcbmltcG9ydCBcImxhenlzaXplcy9wbHVnaW5zL3JpYXMvbHMucmlhc1wiO1xuaW1wb3J0IFwibGF6eXNpemVzL3BsdWdpbnMvYmdzZXQvbHMuYmdzZXRcIjtcblxuY2xhc3MgTGF6eWxvYWQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsYXp5U2l6ZXMuY2ZnLmxhenlDbGFzcyA9IFwianMtbGF6eWxvYWRcIjtcbiAgICAgICAgbGF6eVNpemVzLmNmZy5oRmFjID0gMDtcbiAgICAgICAgbGF6eVNpemVzLmNmZy5sb2FkTW9kZSA9IDE7XG4gICAgICAgIGxhenlTaXplcy5jZmcubWluU2l6ZSA9IDM2MDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IExhenlsb2FkIH07XG4iLCJpbXBvcnQgeyBMYXp5bG9hZCB9IGZyb20gXCIuL0xhenlsb2FkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IExhenlsb2FkO1xuIiwiY29uc3QgZWxIdG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5sZXQgcHJldmlvdXNIdG1sU3R5bGVzID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NrKCkge1xuICAgIGNvbnN0IHsgc3R5bGU6IGh0bWxTdHlsZSB9ID0gZWxIdG1sO1xuXG4gICAgcHJldmlvdXNIdG1sU3R5bGVzID0ge1xuICAgICAgICBvdmVyZmxvdzogaHRtbFN0eWxlLm92ZXJmbG93LFxuICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKGVsSHRtbC5zdHlsZSwge1xuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbGVhc2UoKSB7XG4gICAgT2JqZWN0LmFzc2lnbihlbEh0bWwuc3R5bGUsIHByZXZpb3VzSHRtbFN0eWxlcyk7XG59XG4iLCJjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuZXhwb3J0IGNvbnN0IG5vQ2FjaGUgPSB1cmwuc2VhcmNoUGFyYW1zLmhhcyhcIm5vLWNhY2hlXCIpO1xuIiwiZXhwb3J0IGNvbnN0IGlzSU9TID1cbiAgICAoL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHxcbiAgICAgICAgKG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gXCJNYWNJbnRlbFwiICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpKSAmJlxuICAgICF3aW5kb3cuTVNTdHJlYW07XG4iLCJpbXBvcnQgKiBhcyBib2R5U2Nyb2xsTG9jayBmcm9tIFwiLi9ib2R5LXNjcm9sbC1sb2NrXCI7XG5pbXBvcnQgKiBhcyBDT05TVEFOVFMgZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgKiBhcyBkZXZpY2UgZnJvbSBcIi4vZGV2aWNlXCI7XG5pbXBvcnQgKiBhcyBvYnNlcnZlciBmcm9tIFwiLi9vYnNlcnZlclwiO1xuXG5leHBvcnQgeyBhZGRQcmVmZXRjaCB9IGZyb20gXCIuL2FkZC1wcmVmZXRjaFwiO1xuZXhwb3J0IHsgYXR0YWNoRXZlbnQgfSBmcm9tIFwiLi9hdHRhY2gtZXZlbnRcIjtcbmV4cG9ydCB7IGdldCwgZ2V0QWxsIH0gZnJvbSBcIi4vZ2V0XCI7XG5leHBvcnQgeyBub29wIH0gZnJvbSBcIi4vbm9vcFwiO1xuZXhwb3J0IHsgdGhyb3R0bGUgfSBmcm9tIFwiLi90aHJvdHRsZVwiO1xuZXhwb3J0IHsgYm9keVNjcm9sbExvY2ssIENPTlNUQU5UUywgZGV2aWNlLCBvYnNlcnZlciB9O1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuZXhwb3J0IGNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcbiIsImV4cG9ydCBjb25zdCB0aHJvdHRsZSA9IChmbiwgd2FpdCkgPT4ge1xuICAgIGxldCBpblRocm90dGxlLCBsYXN0Rm4sIGxhc3RUaW1lO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgaWYgKCFpblRocm90dGxlKSB7XG4gICAgICAgICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGluVGhyb3R0bGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGxhc3RGbik7XG4gICAgICAgICAgICBsYXN0Rm4gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RUaW1lID49IHdhaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBNYXRoLm1heCh3YWl0IC0gKERhdGUubm93KCkgLSBsYXN0VGltZSksIDApKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwNDQzNTk5ODE5NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvVXNlcnMvc3RldmV3aWxzb24vRG9jdW1lbnRzL0ZyZWVsYW5jZS9sb2NhbC9kYmx4LWJ1aWxkLXRlc3Qvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=