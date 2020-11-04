(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~Vimeo"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@vimeo/player/dist/player.es.js":
/*!******************************************************!*\
  !*** ./node_modules/@vimeo/player/dist/player.es.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*! @vimeo/player v2.12.2 | (c) 2020 Vimeo | MIT License | https://github.com/vimeo/player.js */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/**
 * @module lib/functions
 */

/**
 * Check to see this is a node environment.
 * @type {Boolean}
 */

/* global global */


var isNode = typeof global !== 'undefined' && {}.toString.call(global) === '[object global]';
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */

function getMethodName(prop, type) {
  if (prop.indexOf(type.toLowerCase()) === 0) {
    return prop;
  }

  return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */


function isDomElement(element) {
  return Boolean(element && element.nodeType === 1 && 'nodeName' in element && element.ownerDocument && element.ownerDocument.defaultView);
}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */


function isInteger(value) {
  // eslint-disable-next-line eqeqeq
  return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */


function isVimeoUrl(url) {
  return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */


function getVimeoUrl() {
  var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var id = oEmbedParameters.id;
  var url = oEmbedParameters.url;
  var idOrUrl = id || url;

  if (!idOrUrl) {
    throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');
  }

  if (isInteger(idOrUrl)) {
    return "https://vimeo.com/".concat(idOrUrl);
  }

  if (isVimeoUrl(idOrUrl)) {
    return idOrUrl.replace('http:', 'https:');
  }

  if (id) {
    throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
  }

  throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
}

var arrayIndexOfSupport = typeof Array.prototype.indexOf !== 'undefined';
var postMessageSupport = typeof window !== 'undefined' && typeof window.postMessage !== 'undefined';

if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) {
  throw new Error('Sorry, the Vimeo Player API is not available in this browser.');
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}
/*!
 * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */


(function (self) {
  if (self.WeakMap) {
    return;
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  var defineProperty = function defineProperty(object, name, value) {
    if (Object.defineProperty) {
      Object.defineProperty(object, name, {
        configurable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  self.WeakMap = function () {
    // ECMA-262 23.3 WeakMap Objects
    function WeakMap() {
      if (this === void 0) {
        throw new TypeError("Constructor WeakMap requires 'new'");
      }

      defineProperty(this, '_id', genId('_WeakMap')); // ECMA-262 23.3.1.1 WeakMap([iterable])

      if (arguments.length > 0) {
        // Currently, WeakMap `iterable` argument is not supported
        throw new TypeError('WeakMap iterable is not supported');
      }
    } // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)


    defineProperty(WeakMap.prototype, 'delete', function (key) {
      checkInstance(this, 'delete');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        delete key[this._id];
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)

    defineProperty(WeakMap.prototype, 'get', function (key) {
      checkInstance(this, 'get');

      if (!isObject(key)) {
        return void 0;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return entry[1];
      }

      return void 0;
    }); // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)

    defineProperty(WeakMap.prototype, 'has', function (key) {
      checkInstance(this, 'has');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)

    defineProperty(WeakMap.prototype, 'set', function (key, value) {
      checkInstance(this, 'set');

      if (!isObject(key)) {
        throw new TypeError('Invalid value used as weak map key');
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        entry[1] = value;
        return this;
      }

      defineProperty(key, this._id, [key, value]);
      return this;
    });

    function checkInstance(x, methodName) {
      if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {
        throw new TypeError(methodName + ' method called on incompatible receiver ' + typeof x);
      }
    }

    function genId(prefix) {
      return prefix + '_' + rand() + '.' + rand();
    }

    function rand() {
      return Math.random().toString().substring(2);
    }

    defineProperty(WeakMap, '_polyfill', true);
    return WeakMap;
  }();

  function isObject(x) {
    return Object(x) === x;
  }
})(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal);

var npo_src = createCommonjsModule(function (module) {
  /*! Native Promise Only
      v0.8.1 (c) Kyle Simpson
      MIT License: http://getify.mit-license.org
  */
  (function UMD(name, context, definition) {
    // special form of UMD for polyfilling across evironments
    context[name] = context[name] || definition();

    if (module.exports) {
      module.exports = context[name];
    }
  })("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {
    var builtInProp,
        cycle,
        scheduling_queue,
        ToString = Object.prototype.toString,
        timer = typeof setImmediate != "undefined" ? function timer(fn) {
      return setImmediate(fn);
    } : setTimeout; // dammit, IE8.

    try {
      Object.defineProperty({}, "x", {});

      builtInProp = function builtInProp(obj, name, val, config) {
        return Object.defineProperty(obj, name, {
          value: val,
          writable: true,
          configurable: config !== false
        });
      };
    } catch (err) {
      builtInProp = function builtInProp(obj, name, val) {
        obj[name] = val;
        return obj;
      };
    } // Note: using a queue instead of array for efficiency


    scheduling_queue = function Queue() {
      var first, last, item;

      function Item(fn, self) {
        this.fn = fn;
        this.self = self;
        this.next = void 0;
      }

      return {
        add: function add(fn, self) {
          item = new Item(fn, self);

          if (last) {
            last.next = item;
          } else {
            first = item;
          }

          last = item;
          item = void 0;
        },
        drain: function drain() {
          var f = first;
          first = last = cycle = void 0;

          while (f) {
            f.fn.call(f.self);
            f = f.next;
          }
        }
      };
    }();

    function schedule(fn, self) {
      scheduling_queue.add(fn, self);

      if (!cycle) {
        cycle = timer(scheduling_queue.drain);
      }
    } // promise duck typing


    function isThenable(o) {
      var _then,
          o_type = typeof o;

      if (o != null && (o_type == "object" || o_type == "function")) {
        _then = o.then;
      }

      return typeof _then == "function" ? _then : false;
    }

    function notify() {
      for (var i = 0; i < this.chain.length; i++) {
        notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
      }

      this.chain.length = 0;
    } // NOTE: This is a separate function to isolate
    // the `try..catch` so that other code can be
    // optimized better


    function notifyIsolated(self, cb, chain) {
      var ret, _then;

      try {
        if (cb === false) {
          chain.reject(self.msg);
        } else {
          if (cb === true) {
            ret = self.msg;
          } else {
            ret = cb.call(void 0, self.msg);
          }

          if (ret === chain.promise) {
            chain.reject(TypeError("Promise-chain cycle"));
          } else if (_then = isThenable(ret)) {
            _then.call(ret, chain.resolve, chain.reject);
          } else {
            chain.resolve(ret);
          }
        }
      } catch (err) {
        chain.reject(err);
      }
    }

    function resolve(msg) {
      var _then,
          self = this; // already triggered?


      if (self.triggered) {
        return;
      }

      self.triggered = true; // unwrap

      if (self.def) {
        self = self.def;
      }

      try {
        if (_then = isThenable(msg)) {
          schedule(function () {
            var def_wrapper = new MakeDefWrapper(self);

            try {
              _then.call(msg, function $resolve$() {
                resolve.apply(def_wrapper, arguments);
              }, function $reject$() {
                reject.apply(def_wrapper, arguments);
              });
            } catch (err) {
              reject.call(def_wrapper, err);
            }
          });
        } else {
          self.msg = msg;
          self.state = 1;

          if (self.chain.length > 0) {
            schedule(notify, self);
          }
        }
      } catch (err) {
        reject.call(new MakeDefWrapper(self), err);
      }
    }

    function reject(msg) {
      var self = this; // already triggered?

      if (self.triggered) {
        return;
      }

      self.triggered = true; // unwrap

      if (self.def) {
        self = self.def;
      }

      self.msg = msg;
      self.state = 2;

      if (self.chain.length > 0) {
        schedule(notify, self);
      }
    }

    function iteratePromises(Constructor, arr, resolver, rejecter) {
      for (var idx = 0; idx < arr.length; idx++) {
        (function IIFE(idx) {
          Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
            resolver(idx, msg);
          }, rejecter);
        })(idx);
      }
    }

    function MakeDefWrapper(self) {
      this.def = self;
      this.triggered = false;
    }

    function MakeDef(self) {
      this.promise = self;
      this.state = 0;
      this.triggered = false;
      this.chain = [];
      this.msg = void 0;
    }

    function Promise(executor) {
      if (typeof executor != "function") {
        throw TypeError("Not a function");
      }

      if (this.__NPO__ !== 0) {
        throw TypeError("Not a promise");
      } // instance shadowing the inherited "brand"
      // to signal an already "initialized" promise


      this.__NPO__ = 1;
      var def = new MakeDef(this);

      this["then"] = function then(success, failure) {
        var o = {
          success: typeof success == "function" ? success : true,
          failure: typeof failure == "function" ? failure : false
        }; // Note: `then(..)` itself can be borrowed to be used against
        // a different promise constructor for making the chained promise,
        // by substituting a different `this` binding.

        o.promise = new this.constructor(function extractChain(resolve, reject) {
          if (typeof resolve != "function" || typeof reject != "function") {
            throw TypeError("Not a function");
          }

          o.resolve = resolve;
          o.reject = reject;
        });
        def.chain.push(o);

        if (def.state !== 0) {
          schedule(notify, def);
        }

        return o.promise;
      };

      this["catch"] = function $catch$(failure) {
        return this.then(void 0, failure);
      };

      try {
        executor.call(void 0, function publicResolve(msg) {
          resolve.call(def, msg);
        }, function publicReject(msg) {
          reject.call(def, msg);
        });
      } catch (err) {
        reject.call(def, err);
      }
    }

    var PromisePrototype = builtInProp({}, "constructor", Promise,
    /*configurable=*/
    false); // Note: Android 4 cannot use `Object.defineProperty(..)` here

    Promise.prototype = PromisePrototype; // built-in "brand" to signal an "uninitialized" promise

    builtInProp(PromisePrototype, "__NPO__", 0,
    /*configurable=*/
    false);
    builtInProp(Promise, "resolve", function Promise$resolve(msg) {
      var Constructor = this; // spec mandated checks
      // note: best "isPromise" check that's practical for now

      if (msg && typeof msg == "object" && msg.__NPO__ === 1) {
        return msg;
      }

      return new Constructor(function executor(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        resolve(msg);
      });
    });
    builtInProp(Promise, "reject", function Promise$reject(msg) {
      return new this(function executor(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        reject(msg);
      });
    });
    builtInProp(Promise, "all", function Promise$all(arr) {
      var Constructor = this; // spec mandated checks

      if (ToString.call(arr) != "[object Array]") {
        return Constructor.reject(TypeError("Not an array"));
      }

      if (arr.length === 0) {
        return Constructor.resolve([]);
      }

      return new Constructor(function executor(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        var len = arr.length,
            msgs = Array(len),
            count = 0;
        iteratePromises(Constructor, arr, function resolver(idx, msg) {
          msgs[idx] = msg;

          if (++count === len) {
            resolve(msgs);
          }
        }, reject);
      });
    });
    builtInProp(Promise, "race", function Promise$race(arr) {
      var Constructor = this; // spec mandated checks

      if (ToString.call(arr) != "[object Array]") {
        return Constructor.reject(TypeError("Not an array"));
      }

      return new Constructor(function executor(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        iteratePromises(Constructor, arr, function resolver(idx, msg) {
          resolve(msg);
        }, reject);
      });
    });
    return Promise;
  });
});
/**
 * @module lib/callbacks
 */

var callbackMap = new WeakMap();
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */

function storeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!(name in playerCallbacks)) {
    playerCallbacks[name] = [];
  }

  playerCallbacks[name].push(callback);
  callbackMap.set(player.element, playerCallbacks);
}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */


function getCallbacks(player, name) {
  var playerCallbacks = callbackMap.get(player.element) || {};
  return playerCallbacks[name] || [];
}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */


function removeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!playerCallbacks[name]) {
    return true;
  } // If no callback is passed, remove all callbacks for the event


  if (!callback) {
    playerCallbacks[name] = [];
    callbackMap.set(player.element, playerCallbacks);
    return true;
  }

  var index = playerCallbacks[name].indexOf(callback);

  if (index !== -1) {
    playerCallbacks[name].splice(index, 1);
  }

  callbackMap.set(player.element, playerCallbacks);
  return playerCallbacks[name] && playerCallbacks[name].length === 0;
}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */


function shiftCallbacks(player, name) {
  var playerCallbacks = getCallbacks(player, name);

  if (playerCallbacks.length < 1) {
    return false;
  }

  var callback = playerCallbacks.shift();
  removeCallback(player, name, callback);
  return callback;
}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */


function swapCallbacks(oldElement, newElement) {
  var playerCallbacks = callbackMap.get(oldElement);
  callbackMap.set(newElement, playerCallbacks);
  callbackMap.delete(oldElement);
}
/**
 * @module lib/embed
 */


var oEmbedParameters = ['autopause', 'autoplay', 'background', 'byline', 'color', 'controls', 'dnt', 'height', 'id', 'loop', 'maxheight', 'maxwidth', 'muted', 'playsinline', 'portrait', 'responsive', 'speed', 'texttrack', 'title', 'transparent', 'url', 'width'];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */

function getOEmbedParameters(element) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return oEmbedParameters.reduce(function (params, param) {
    var value = element.getAttribute("data-vimeo-".concat(param));

    if (value || value === '') {
      params[param] = value === '' ? 1 : value;
    }

    return params;
  }, defaults);
}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */


function createEmbed(_ref, element) {
  var html = _ref.html;

  if (!element) {
    throw new TypeError('An element must be provided');
  }

  if (element.getAttribute('data-vimeo-initialized') !== null) {
    return element.querySelector('iframe');
  }

  var div = document.createElement('div');
  div.innerHTML = html;
  element.appendChild(div.firstChild);
  element.setAttribute('data-vimeo-initialized', 'true');
  return element.querySelector('iframe');
}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */


function getOEmbedData(videoUrl) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var element = arguments.length > 2 ? arguments[2] : undefined;
  return new Promise(function (resolve, reject) {
    if (!isVimeoUrl(videoUrl)) {
      throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
    }

    var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));

    for (var param in params) {
      if (params.hasOwnProperty(param)) {
        url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
      }
    }

    var xhr = 'XDomainRequest' in window ? new XDomainRequest() : new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (xhr.status === 404) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
        return;
      }

      if (xhr.status === 403) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
        return;
      }

      try {
        var json = JSON.parse(xhr.responseText); // Check api response for 403 on oembed

        if (json.domain_status_code === 403) {
          // We still want to create the embed to give users visual feedback
          createEmbed(json, element);
          reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
          return;
        }

        resolve(json);
      } catch (error) {
        reject(error);
      }
    };

    xhr.onerror = function () {
      var status = xhr.status ? " (".concat(xhr.status, ")") : '';
      reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
    };

    xhr.send();
  });
}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */


function initializeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var elements = [].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));

  var handleError = function handleError(error) {
    if ('console' in window && console.error) {
      console.error("There was an error creating an embed: ".concat(error));
    }
  };

  elements.forEach(function (element) {
    try {
      // Skip any that have data-vimeo-defer
      if (element.getAttribute('data-vimeo-defer') !== null) {
        return;
      }

      var params = getOEmbedParameters(element);
      var url = getVimeoUrl(params);
      getOEmbedData(url, params, element).then(function (data) {
        return createEmbed(data, element);
      }).catch(handleError);
    } catch (error) {
      handleError(error);
    }
  });
}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */


function resizeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document; // Prevent execution if users include the player.js script multiple times.

  if (window.VimeoPlayerResizeEmbeds_) {
    return;
  }

  window.VimeoPlayerResizeEmbeds_ = true;

  var onMessage = function onMessage(event) {
    if (!isVimeoUrl(event.origin)) {
      return;
    } // 'spacechange' is fired only on embeds with cards


    if (!event.data || event.data.event !== 'spacechange') {
      return;
    }

    var iframes = parent.querySelectorAll('iframe');

    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].contentWindow !== event.source) {
        continue;
      } // Change padding-bottom of the enclosing div to accommodate
      // card carousel without distorting aspect ratio


      var space = iframes[i].parentElement;
      space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
      break;
    }
  };

  window.addEventListener('message', onMessage);
}
/**
 * @module lib/postmessage
 */

/**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */


function parseMessageData(data) {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (error) {
      // If the message cannot be parsed, throw the error as a warning
      console.warn(error);
      return {};
    }
  }

  return data;
}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */


function postMessage(player, method, params) {
  if (!player.element.contentWindow || !player.element.contentWindow.postMessage) {
    return;
  }

  var message = {
    method: method
  };

  if (params !== undefined) {
    message.value = params;
  } // IE 8 and 9 do not support passing messages, so stringify them


  var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, '$1'));

  if (ieVersion >= 8 && ieVersion < 10) {
    message = JSON.stringify(message);
  }

  player.element.contentWindow.postMessage(message, player.origin);
}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */


function processData(player, data) {
  data = parseMessageData(data);
  var callbacks = [];
  var param;

  if (data.event) {
    if (data.event === 'error') {
      var promises = getCallbacks(player, data.data.method);
      promises.forEach(function (promise) {
        var error = new Error(data.data.message);
        error.name = data.data.name;
        promise.reject(error);
        removeCallback(player, data.data.method, promise);
      });
    }

    callbacks = getCallbacks(player, "event:".concat(data.event));
    param = data.data;
  } else if (data.method) {
    var callback = shiftCallbacks(player, data.method);

    if (callback) {
      callbacks.push(callback);
      param = data.value;
    }
  }

  callbacks.forEach(function (callback) {
    try {
      if (typeof callback === 'function') {
        callback.call(player, param);
        return;
      }

      callback.resolve(param);
    } catch (e) {// empty
    }
  });
}
/* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */


function initializeScreenfull() {
  var fn = function () {
    var val;
    var fnMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], // New WebKit
    ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], // Old WebKit
    ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
    var i = 0;
    var l = fnMap.length;
    var ret = {};

    for (; i < l; i++) {
      val = fnMap[i];

      if (val && val[1] in document) {
        for (i = 0; i < val.length; i++) {
          ret[fnMap[0][i]] = val[i];
        }

        return ret;
      }
    }

    return false;
  }();

  var eventNameMap = {
    fullscreenchange: fn.fullscreenchange,
    fullscreenerror: fn.fullscreenerror
  };
  var screenfull = {
    request: function request(element) {
      return new Promise(function (resolve, reject) {
        var onFullScreenEntered = function onFullScreenEntered() {
          screenfull.off('fullscreenchange', onFullScreenEntered);
          resolve();
        };

        screenfull.on('fullscreenchange', onFullScreenEntered);
        element = element || document.documentElement;
        var returnPromise = element[fn.requestFullscreen]();

        if (returnPromise instanceof Promise) {
          returnPromise.then(onFullScreenEntered).catch(reject);
        }
      });
    },
    exit: function exit() {
      return new Promise(function (resolve, reject) {
        if (!screenfull.isFullscreen) {
          resolve();
          return;
        }

        var onFullScreenExit = function onFullScreenExit() {
          screenfull.off('fullscreenchange', onFullScreenExit);
          resolve();
        };

        screenfull.on('fullscreenchange', onFullScreenExit);
        var returnPromise = document[fn.exitFullscreen]();

        if (returnPromise instanceof Promise) {
          returnPromise.then(onFullScreenExit).catch(reject);
        }
      });
    },
    on: function on(event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.addEventListener(eventName, callback);
      }
    },
    off: function off(event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.removeEventListener(eventName, callback);
      }
    }
  };
  Object.defineProperties(screenfull, {
    isFullscreen: {
      get: function get() {
        return Boolean(document[fn.fullscreenElement]);
      }
    },
    element: {
      enumerable: true,
      get: function get() {
        return document[fn.fullscreenElement];
      }
    },
    isEnabled: {
      enumerable: true,
      get: function get() {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[fn.fullscreenEnabled]);
      }
    }
  });
  return screenfull;
}

var playerMap = new WeakMap();
var readyMap = new WeakMap();
var screenfull = {};

var Player = /*#__PURE__*/function () {
  /**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */
  function Player(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Player);
    /* global jQuery */


    if (window.jQuery && element instanceof jQuery) {
      if (element.length > 1 && window.console && console.warn) {
        console.warn('A jQuery object with multiple elements was passed, using the first element.');
      }

      element = element[0];
    } // Find an element by ID


    if (typeof document !== 'undefined' && typeof element === 'string') {
      element = document.getElementById(element);
    } // Not an element!


    if (!isDomElement(element)) {
      throw new TypeError('You must pass either a valid element or a valid id.');
    } // Already initialized an embed in this div, so grab the iframe


    if (element.nodeName !== 'IFRAME') {
      var iframe = element.querySelector('iframe');

      if (iframe) {
        element = iframe;
      }
    } // iframe url is not a Vimeo url


    if (element.nodeName === 'IFRAME' && !isVimeoUrl(element.getAttribute('src') || '')) {
      throw new Error('The player element passed isn’t a Vimeo embed.');
    } // If there is already a player object in the map, return that


    if (playerMap.has(element)) {
      return playerMap.get(element);
    }

    this._window = element.ownerDocument.defaultView;
    this.element = element;
    this.origin = '*';
    var readyPromise = new npo_src(function (resolve, reject) {
      _this._onMessage = function (event) {
        if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) {
          return;
        }

        if (_this.origin === '*') {
          _this.origin = event.origin;
        }

        var data = parseMessageData(event.data);
        var isError = data && data.event === 'error';
        var isReadyError = isError && data.data && data.data.method === 'ready';

        if (isReadyError) {
          var error = new Error(data.data.message);
          error.name = data.data.name;
          reject(error);
          return;
        }

        var isReadyEvent = data && data.event === 'ready';
        var isPingResponse = data && data.method === 'ping';

        if (isReadyEvent || isPingResponse) {
          _this.element.setAttribute('data-ready', 'true');

          resolve();
          return;
        }

        processData(_this, data);
      };

      _this._window.addEventListener('message', _this._onMessage);

      if (_this.element.nodeName !== 'IFRAME') {
        var params = getOEmbedParameters(element, options);
        var url = getVimeoUrl(params);
        getOEmbedData(url, params, element).then(function (data) {
          var iframe = createEmbed(data, element); // Overwrite element with the new iframe,
          // but store reference to the original element

          _this.element = iframe;
          _this._originalElement = element;
          swapCallbacks(element, iframe);
          playerMap.set(_this.element, _this);
          return data;
        }).catch(reject);
      }
    }); // Store a copy of this Player in the map

    readyMap.set(this, readyPromise);
    playerMap.set(this.element, this); // Send a ping to the iframe so the ready promise will be resolved if
    // the player is already ready.

    if (this.element.nodeName === 'IFRAME') {
      postMessage(this, 'ping');
    }

    if (screenfull.isEnabled) {
      var exitFullscreen = function exitFullscreen() {
        return screenfull.exit();
      };

      screenfull.on('fullscreenchange', function () {
        if (screenfull.isFullscreen) {
          storeCallback(_this, 'event:exitFullscreen', exitFullscreen);
        } else {
          removeCallback(_this, 'event:exitFullscreen', exitFullscreen);
        } // eslint-disable-next-line


        _this.ready().then(function () {
          postMessage(_this, 'fullscreenchange', screenfull.isFullscreen);
        });
      });
    }

    return this;
  }
  /**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */


  _createClass(Player, [{
    key: "callMethod",
    value: function callMethod(name) {
      var _this2 = this;

      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new npo_src(function (resolve, reject) {
        // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return
        return _this2.ready().then(function () {
          storeCallback(_this2, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this2, name, args);
        }).catch(reject);
      });
    }
    /**
     * Get a promise for the value of a player property.
     *
     * @param {string} name The property name
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function get(name) {
      var _this3 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'get'); // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return

        return _this3.ready().then(function () {
          storeCallback(_this3, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this3, name);
        }).catch(reject);
      });
    }
    /**
     * Get a promise for setting the value of a player property.
     *
     * @param {string} name The API method to call.
     * @param {mixed} value The value to set.
     * @return {Promise}
     */

  }, {
    key: "set",
    value: function set(name, value) {
      var _this4 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'set');

        if (value === undefined || value === null) {
          throw new TypeError('There must be a value to set.');
        } // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return


        return _this4.ready().then(function () {
          storeCallback(_this4, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this4, name, value);
        }).catch(reject);
      });
    }
    /**
     * Add an event listener for the specified event. Will call the
     * callback with a single parameter, `data`, that contains the data for
     * that event.
     *
     * @param {string} eventName The name of the event.
     * @param {function(*)} callback The function to call when the event fires.
     * @return {void}
     */

  }, {
    key: "on",
    value: function on(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (!callback) {
        throw new TypeError('You must pass a callback function.');
      }

      if (typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var callbacks = getCallbacks(this, "event:".concat(eventName));

      if (callbacks.length === 0) {
        this.callMethod('addEventListener', eventName).catch(function () {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }

      storeCallback(this, "event:".concat(eventName), callback);
    }
    /**
     * Remove an event listener for the specified event. Will remove all
     * listeners for that event if a `callback` isn’t passed, or only that
     * specific callback if it is passed.
     *
     * @param {string} eventName The name of the event.
     * @param {function} [callback] The specific callback to remove.
     * @return {void}
     */

  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (callback && typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var lastCallback = removeCallback(this, "event:".concat(eventName), callback); // If there are no callbacks left, remove the listener

      if (lastCallback) {
        this.callMethod('removeEventListener', eventName).catch(function (e) {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }
    }
    /**
     * A promise to load a new video.
     *
     * @promise LoadVideoPromise
     * @fulfill {number} The video with this id successfully loaded.
     * @reject {TypeError} The id was not a number.
     */

    /**
     * Load a new video into this embed. The promise will be resolved if
     * the video is successfully loaded, or it will be rejected if it could
     * not be loaded.
     *
     * @param {number|object} options The id of the video or an object with embed options.
     * @return {LoadVideoPromise}
     */

  }, {
    key: "loadVideo",
    value: function loadVideo(options) {
      return this.callMethod('loadVideo', options);
    }
    /**
     * A promise to perform an action when the Player is ready.
     *
     * @todo document errors
     * @promise LoadVideoPromise
     * @fulfill {void}
     */

    /**
     * Trigger a function when the player iframe has initialized. You do not
     * need to wait for `ready` to trigger to begin adding event listeners
     * or calling other methods.
     *
     * @return {ReadyPromise}
     */

  }, {
    key: "ready",
    value: function ready() {
      var readyPromise = readyMap.get(this) || new npo_src(function (resolve, reject) {
        reject(new Error('Unknown player. Probably unloaded.'));
      });
      return npo_src.resolve(readyPromise);
    }
    /**
     * A promise to add a cue point to the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point to use for removeCuePoint.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Add a cue point to the player.
     *
     * @param {number} time The time for the cue point.
     * @param {object} [data] Arbitrary data to be returned with the cue point.
     * @return {AddCuePointPromise}
     */

  }, {
    key: "addCuePoint",
    value: function addCuePoint(time) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.callMethod('addCuePoint', {
        time: time,
        data: data
      });
    }
    /**
     * A promise to remove a cue point from the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point that was removed.
     * @reject {InvalidCuePoint} The cue point with the specified id was not
     *         found.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Remove a cue point from the video.
     *
     * @param {string} id The id of the cue point to remove.
     * @return {RemoveCuePointPromise}
     */

  }, {
    key: "removeCuePoint",
    value: function removeCuePoint(id) {
      return this.callMethod('removeCuePoint', id);
    }
    /**
     * A representation of a text track on a video.
     *
     * @typedef {Object} VimeoTextTrack
     * @property {string} language The ISO language code.
     * @property {string} kind The kind of track it is (captions or subtitles).
     * @property {string} label The human‐readable label for the track.
     */

    /**
     * A promise to enable a text track.
     *
     * @promise EnableTextTrackPromise
     * @fulfill {VimeoTextTrack} The text track that was enabled.
     * @reject {InvalidTrackLanguageError} No track was available with the
     *         specified language.
     * @reject {InvalidTrackError} No track was available with the specified
     *         language and kind.
     */

    /**
     * Enable the text track with the specified language, and optionally the
     * specified kind (captions or subtitles).
     *
     * When set via the API, the track language will not change the viewer’s
     * stored preference.
     *
     * @param {string} language The two‐letter language code.
     * @param {string} [kind] The kind of track to enable (captions or subtitles).
     * @return {EnableTextTrackPromise}
     */

  }, {
    key: "enableTextTrack",
    value: function enableTextTrack(language, kind) {
      if (!language) {
        throw new TypeError('You must pass a language.');
      }

      return this.callMethod('enableTextTrack', {
        language: language,
        kind: kind
      });
    }
    /**
     * A promise to disable the active text track.
     *
     * @promise DisableTextTrackPromise
     * @fulfill {void} The track was disabled.
     */

    /**
     * Disable the currently-active text track.
     *
     * @return {DisableTextTrackPromise}
     */

  }, {
    key: "disableTextTrack",
    value: function disableTextTrack() {
      return this.callMethod('disableTextTrack');
    }
    /**
     * A promise to pause the video.
     *
     * @promise PausePromise
     * @fulfill {void} The video was paused.
     */

    /**
     * Pause the video if it’s playing.
     *
     * @return {PausePromise}
     */

  }, {
    key: "pause",
    value: function pause() {
      return this.callMethod('pause');
    }
    /**
     * A promise to play the video.
     *
     * @promise PlayPromise
     * @fulfill {void} The video was played.
     */

    /**
     * Play the video if it’s paused. **Note:** on iOS and some other
     * mobile devices, you cannot programmatically trigger play. Once the
     * viewer has tapped on the play button in the player, however, you
     * will be able to use this function.
     *
     * @return {PlayPromise}
     */

  }, {
    key: "play",
    value: function play() {
      return this.callMethod('play');
    }
    /**
     * Request that the player enters fullscreen.
     * @return {Promise}
     */

  }, {
    key: "requestFullscreen",
    value: function requestFullscreen() {
      if (screenfull.isEnabled) {
        return screenfull.request(this.element);
      }

      return this.callMethod('requestFullscreen');
    }
    /**
     * Request that the player exits fullscreen.
     * @return {Promise}
     */

  }, {
    key: "exitFullscreen",
    value: function exitFullscreen() {
      if (screenfull.isEnabled) {
        return screenfull.exit();
      }

      return this.callMethod('exitFullscreen');
    }
    /**
     * Returns true if the player is currently fullscreen.
     * @return {Promise}
     */

  }, {
    key: "getFullscreen",
    value: function getFullscreen() {
      if (screenfull.isEnabled) {
        return npo_src.resolve(screenfull.isFullscreen);
      }

      return this.get('fullscreen');
    }
    /**
     * A promise to unload the video.
     *
     * @promise UnloadPromise
     * @fulfill {void} The video was unloaded.
     */

    /**
     * Return the player to its initial state.
     *
     * @return {UnloadPromise}
     */

  }, {
    key: "unload",
    value: function unload() {
      return this.callMethod('unload');
    }
    /**
     * Cleanup the player and remove it from the DOM
     *
     * It won't be usable and a new one should be constructed
     *  in order to do any operations.
     *
     * @return {Promise}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;

      return new npo_src(function (resolve) {
        readyMap.delete(_this5);
        playerMap.delete(_this5.element);

        if (_this5._originalElement) {
          playerMap.delete(_this5._originalElement);

          _this5._originalElement.removeAttribute('data-vimeo-initialized');
        }

        if (_this5.element && _this5.element.nodeName === 'IFRAME' && _this5.element.parentNode) {
          _this5.element.parentNode.removeChild(_this5.element);
        }

        _this5._window.removeEventListener('message', _this5._onMessage);

        resolve();
      });
    }
    /**
     * A promise to get the autopause behavior of the video.
     *
     * @promise GetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Get the autopause behavior for this player.
     *
     * @return {GetAutopausePromise}
     */

  }, {
    key: "getAutopause",
    value: function getAutopause() {
      return this.get('autopause');
    }
    /**
     * A promise to set the autopause behavior of the video.
     *
     * @promise SetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Enable or disable the autopause behavior of this player.
     *
     * By default, when another video is played in the same browser, this
     * player will automatically pause. Unless you have a specific reason
     * for doing so, we recommend that you leave autopause set to the
     * default (`true`).
     *
     * @param {boolean} autopause
     * @return {SetAutopausePromise}
     */

  }, {
    key: "setAutopause",
    value: function setAutopause(autopause) {
      return this.set('autopause', autopause);
    }
    /**
     * A promise to get the buffered property of the video.
     *
     * @promise GetBufferedPromise
     * @fulfill {Array} Buffered Timeranges converted to an Array.
     */

    /**
     * Get the buffered property of the video.
     *
     * @return {GetBufferedPromise}
     */

  }, {
    key: "getBuffered",
    value: function getBuffered() {
      return this.get('buffered');
    }
    /**
     * A representation of a chapter.
     *
     * @typedef {Object} VimeoChapter
     * @property {number} startTime The start time of the chapter.
     * @property {object} title The title of the chapter.
     * @property {number} index The place in the order of Chapters. Starts at 1.
     */

    /**
     * A promise to get chapters for the video.
     *
     * @promise GetChaptersPromise
     * @fulfill {VimeoChapter[]} The chapters for the video.
     */

    /**
     * Get an array of all the chapters for the video.
     *
     * @return {GetChaptersPromise}
     */

  }, {
    key: "getChapters",
    value: function getChapters() {
      return this.get('chapters');
    }
    /**
     * A promise to get the currently active chapter.
     *
     * @promise GetCurrentChaptersPromise
     * @fulfill {VimeoChapter|undefined} The current chapter for the video.
     */

    /**
     * Get the currently active chapter for the video.
     *
     * @return {GetCurrentChaptersPromise}
     */

  }, {
    key: "getCurrentChapter",
    value: function getCurrentChapter() {
      return this.get('currentChapter');
    }
    /**
     * A promise to get the color of the player.
     *
     * @promise GetColorPromise
     * @fulfill {string} The hex color of the player.
     */

    /**
     * Get the color for this player.
     *
     * @return {GetColorPromise}
     */

  }, {
    key: "getColor",
    value: function getColor() {
      return this.get('color');
    }
    /**
     * A promise to set the color of the player.
     *
     * @promise SetColorPromise
     * @fulfill {string} The color was successfully set.
     * @reject {TypeError} The string was not a valid hex or rgb color.
     * @reject {ContrastError} The color was set, but the contrast is
     *         outside of the acceptable range.
     * @reject {EmbedSettingsError} The owner of the player has chosen to
     *         use a specific color.
     */

    /**
     * Set the color of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     *
     * @param {string} color The hex or rgb color string to set.
     * @return {SetColorPromise}
     */

  }, {
    key: "setColor",
    value: function setColor(color) {
      return this.set('color', color);
    }
    /**
     * A representation of a cue point.
     *
     * @typedef {Object} VimeoCuePoint
     * @property {number} time The time of the cue point.
     * @property {object} data The data passed when adding the cue point.
     * @property {string} id The unique id for use with removeCuePoint.
     */

    /**
     * A promise to get the cue points of a video.
     *
     * @promise GetCuePointsPromise
     * @fulfill {VimeoCuePoint[]} The cue points added to the video.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Get an array of the cue points added to the video.
     *
     * @return {GetCuePointsPromise}
     */

  }, {
    key: "getCuePoints",
    value: function getCuePoints() {
      return this.get('cuePoints');
    }
    /**
     * A promise to get the current time of the video.
     *
     * @promise GetCurrentTimePromise
     * @fulfill {number} The current time in seconds.
     */

    /**
     * Get the current playback position in seconds.
     *
     * @return {GetCurrentTimePromise}
     */

  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.get('currentTime');
    }
    /**
     * A promise to set the current time of the video.
     *
     * @promise SetCurrentTimePromise
     * @fulfill {number} The actual current time that was set.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     */

    /**
     * Set the current playback position in seconds. If the player was
     * paused, it will remain paused. Likewise, if the player was playing,
     * it will resume playing once the video has buffered.
     *
     * You can provide an accurate time and the player will attempt to seek
     * to as close to that time as possible. The exact time will be the
     * fulfilled value of the promise.
     *
     * @param {number} currentTime
     * @return {SetCurrentTimePromise}
     */

  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(currentTime) {
      return this.set('currentTime', currentTime);
    }
    /**
     * A promise to get the duration of the video.
     *
     * @promise GetDurationPromise
     * @fulfill {number} The duration in seconds.
     */

    /**
     * Get the duration of the video in seconds. It will be rounded to the
     * nearest second before playback begins, and to the nearest thousandth
     * of a second after playback begins.
     *
     * @return {GetDurationPromise}
     */

  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.get('duration');
    }
    /**
     * A promise to get the ended state of the video.
     *
     * @promise GetEndedPromise
     * @fulfill {boolean} Whether or not the video has ended.
     */

    /**
     * Get the ended state of the video. The video has ended if
     * `currentTime === duration`.
     *
     * @return {GetEndedPromise}
     */

  }, {
    key: "getEnded",
    value: function getEnded() {
      return this.get('ended');
    }
    /**
     * A promise to get the loop state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the player is set to loop.
     */

    /**
     * Get the loop state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getLoop",
    value: function getLoop() {
      return this.get('loop');
    }
    /**
     * A promise to set the loop state of the player.
     *
     * @promise SetLoopPromise
     * @fulfill {boolean} The loop state that was set.
     */

    /**
     * Set the loop state of the player. When set to `true`, the player
     * will start over immediately once playback ends.
     *
     * @param {boolean} loop
     * @return {SetLoopPromise}
     */

  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      return this.set('loop', loop);
    }
    /**
     * A promise to set the muted state of the player.
     *
     * @promise SetMutedPromise
     * @fulfill {boolean} The muted state that was set.
     */

    /**
     * Set the muted state of the player. When set to `true`, the player
     * volume will be muted.
     *
     * @param {boolean} muted
     * @return {SetMutedPromise}
     */

  }, {
    key: "setMuted",
    value: function setMuted(muted) {
      return this.set('muted', muted);
    }
    /**
     * A promise to get the muted state of the player.
     *
     * @promise GetMutedPromise
     * @fulfill {boolean} Whether or not the player is muted.
     */

    /**
     * Get the muted state of the player.
     *
     * @return {GetMutedPromise}
     */

  }, {
    key: "getMuted",
    value: function getMuted() {
      return this.get('muted');
    }
    /**
     * A promise to get the paused state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the video is paused.
     */

    /**
     * Get the paused state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getPaused",
    value: function getPaused() {
      return this.get('paused');
    }
    /**
     * A promise to get the playback rate of the player.
     *
     * @promise GetPlaybackRatePromise
     * @fulfill {number} The playback rate of the player on a scale from 0.5 to 2.
     */

    /**
     * Get the playback rate of the player on a scale from `0.5` to `2`.
     *
     * @return {GetPlaybackRatePromise}
     */

  }, {
    key: "getPlaybackRate",
    value: function getPlaybackRate() {
      return this.get('playbackRate');
    }
    /**
     * A promise to set the playbackrate of the player.
     *
     * @promise SetPlaybackRatePromise
     * @fulfill {number} The playback rate was set.
     * @reject {RangeError} The playback rate was less than 0.5 or greater than 2.
     */

    /**
     * Set the playback rate of the player on a scale from `0.5` to `2`. When set
     * via the API, the playback rate will not be synchronized to other
     * players or stored as the viewer's preference.
     *
     * @param {number} playbackRate
     * @return {SetPlaybackRatePromise}
     */

  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(playbackRate) {
      return this.set('playbackRate', playbackRate);
    }
    /**
     * A promise to get the played property of the video.
     *
     * @promise GetPlayedPromise
     * @fulfill {Array} Played Timeranges converted to an Array.
     */

    /**
     * Get the played property of the video.
     *
     * @return {GetPlayedPromise}
     */

  }, {
    key: "getPlayed",
    value: function getPlayed() {
      return this.get('played');
    }
    /**
     * A promise to get the seekable property of the video.
     *
     * @promise GetSeekablePromise
     * @fulfill {Array} Seekable Timeranges converted to an Array.
     */

    /**
     * Get the seekable property of the video.
     *
     * @return {GetSeekablePromise}
     */

  }, {
    key: "getSeekable",
    value: function getSeekable() {
      return this.get('seekable');
    }
    /**
     * A promise to get the seeking property of the player.
     *
     * @promise GetSeekingPromise
     * @fulfill {boolean} Whether or not the player is currently seeking.
     */

    /**
     * Get if the player is currently seeking.
     *
     * @return {GetSeekingPromise}
     */

  }, {
    key: "getSeeking",
    value: function getSeeking() {
      return this.get('seeking');
    }
    /**
     * A promise to get the text tracks of a video.
     *
     * @promise GetTextTracksPromise
     * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
     */

    /**
     * Get an array of the text tracks that exist for the video.
     *
     * @return {GetTextTracksPromise}
     */

  }, {
    key: "getTextTracks",
    value: function getTextTracks() {
      return this.get('textTracks');
    }
    /**
     * A promise to get the embed code for the video.
     *
     * @promise GetVideoEmbedCodePromise
     * @fulfill {string} The `<iframe>` embed code for the video.
     */

    /**
     * Get the `<iframe>` embed code for the video.
     *
     * @return {GetVideoEmbedCodePromise}
     */

  }, {
    key: "getVideoEmbedCode",
    value: function getVideoEmbedCode() {
      return this.get('videoEmbedCode');
    }
    /**
     * A promise to get the id of the video.
     *
     * @promise GetVideoIdPromise
     * @fulfill {number} The id of the video.
     */

    /**
     * Get the id of the video.
     *
     * @return {GetVideoIdPromise}
     */

  }, {
    key: "getVideoId",
    value: function getVideoId() {
      return this.get('videoId');
    }
    /**
     * A promise to get the title of the video.
     *
     * @promise GetVideoTitlePromise
     * @fulfill {number} The title of the video.
     */

    /**
     * Get the title of the video.
     *
     * @return {GetVideoTitlePromise}
     */

  }, {
    key: "getVideoTitle",
    value: function getVideoTitle() {
      return this.get('videoTitle');
    }
    /**
     * A promise to get the native width of the video.
     *
     * @promise GetVideoWidthPromise
     * @fulfill {number} The native width of the video.
     */

    /**
     * Get the native width of the currently‐playing video. The width of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoWidthPromise}
     */

  }, {
    key: "getVideoWidth",
    value: function getVideoWidth() {
      return this.get('videoWidth');
    }
    /**
     * A promise to get the native height of the video.
     *
     * @promise GetVideoHeightPromise
     * @fulfill {number} The native height of the video.
     */

    /**
     * Get the native height of the currently‐playing video. The height of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoHeightPromise}
     */

  }, {
    key: "getVideoHeight",
    value: function getVideoHeight() {
      return this.get('videoHeight');
    }
    /**
     * A promise to get the vimeo.com url for the video.
     *
     * @promise GetVideoUrlPromise
     * @fulfill {number} The vimeo.com url for the video.
     * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
     */

    /**
     * Get the vimeo.com url for the video.
     *
     * @return {GetVideoUrlPromise}
     */

  }, {
    key: "getVideoUrl",
    value: function getVideoUrl() {
      return this.get('videoUrl');
    }
    /**
     * A promise to get the volume level of the player.
     *
     * @promise GetVolumePromise
     * @fulfill {number} The volume level of the player on a scale from 0 to 1.
     */

    /**
     * Get the current volume level of the player on a scale from `0` to `1`.
     *
     * Most mobile devices do not support an independent volume from the
     * system volume. In those cases, this method will always return `1`.
     *
     * @return {GetVolumePromise}
     */

  }, {
    key: "getVolume",
    value: function getVolume() {
      return this.get('volume');
    }
    /**
     * A promise to set the volume level of the player.
     *
     * @promise SetVolumePromise
     * @fulfill {number} The volume was set.
     * @reject {RangeError} The volume was less than 0 or greater than 1.
     */

    /**
     * Set the volume of the player on a scale from `0` to `1`. When set
     * via the API, the volume level will not be synchronized to other
     * players or stored as the viewer’s preference.
     *
     * Most mobile devices do not support setting the volume. An error will
     * *not* be triggered in that situation.
     *
     * @param {number} volume
     * @return {SetVolumePromise}
     */

  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      return this.set('volume', volume);
    }
  }]);

  return Player;
}(); // Setup embed only if this is not a node environment


if (!isNode) {
  screenfull = initializeScreenfull();
  initializeEmbeds();
  resizeEmbeds();
}

/* harmony default export */ __webpack_exports__["default"] = (Player);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function (handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function (handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function (handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function (handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function (handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2aW1lby9wbGF5ZXIvZGlzdC9wbGF5ZXIuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiaXNOb2RlIiwiZ2xvYmFsIiwidG9TdHJpbmciLCJjYWxsIiwiZ2V0TWV0aG9kTmFtZSIsInByb3AiLCJ0eXBlIiwiaW5kZXhPZiIsInRvTG93ZXJDYXNlIiwiY29uY2F0Iiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJpc0RvbUVsZW1lbnQiLCJlbGVtZW50IiwiQm9vbGVhbiIsIm5vZGVUeXBlIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiaXNJbnRlZ2VyIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJpc1ZpbWVvVXJsIiwidXJsIiwidGVzdCIsImdldFZpbWVvVXJsIiwib0VtYmVkUGFyYW1ldGVycyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImlkIiwiaWRPclVybCIsIkVycm9yIiwicmVwbGFjZSIsImFycmF5SW5kZXhPZlN1cHBvcnQiLCJBcnJheSIsInBvc3RNZXNzYWdlU3VwcG9ydCIsIndpbmRvdyIsInBvc3RNZXNzYWdlIiwiY29tbW9uanNHbG9iYWwiLCJnbG9iYWxUaGlzIiwic2VsZiIsImNyZWF0ZUNvbW1vbmpzTW9kdWxlIiwiZm4iLCJtb2R1bGUiLCJleHBvcnRzIiwiV2Vha01hcCIsImhhc093blByb3BlcnR5Iiwib2JqZWN0IiwibmFtZSIsImdlbklkIiwiY2hlY2tJbnN0YW5jZSIsImlzT2JqZWN0IiwiZW50cnkiLCJfaWQiLCJ4IiwibWV0aG9kTmFtZSIsInByZWZpeCIsInJhbmQiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJucG9fc3JjIiwiVU1EIiwiY29udGV4dCIsImRlZmluaXRpb24iLCJERUYiLCJidWlsdEluUHJvcCIsImN5Y2xlIiwic2NoZWR1bGluZ19xdWV1ZSIsIlRvU3RyaW5nIiwidGltZXIiLCJzZXRJbW1lZGlhdGUiLCJzZXRUaW1lb3V0IiwidmFsIiwiY29uZmlnIiwiZXJyIiwiUXVldWUiLCJmaXJzdCIsImxhc3QiLCJpdGVtIiwiSXRlbSIsIm5leHQiLCJhZGQiLCJkcmFpbiIsImYiLCJzY2hlZHVsZSIsImlzVGhlbmFibGUiLCJvIiwiX3RoZW4iLCJvX3R5cGUiLCJ0aGVuIiwibm90aWZ5IiwiY2hhaW4iLCJub3RpZnlJc29sYXRlZCIsInN0YXRlIiwic3VjY2VzcyIsImZhaWx1cmUiLCJjYiIsInJldCIsInJlamVjdCIsIm1zZyIsInByb21pc2UiLCJyZXNvbHZlIiwidHJpZ2dlcmVkIiwiZGVmIiwiZGVmX3dyYXBwZXIiLCJNYWtlRGVmV3JhcHBlciIsIiRyZXNvbHZlJCIsImFwcGx5IiwiJHJlamVjdCQiLCJpdGVyYXRlUHJvbWlzZXMiLCJhcnIiLCJyZXNvbHZlciIsInJlamVjdGVyIiwiaWR4IiwiSUlGRSIsIiRyZXNvbHZlciQiLCJNYWtlRGVmIiwiUHJvbWlzZSIsImV4ZWN1dG9yIiwiX19OUE9fXyIsImNvbnN0cnVjdG9yIiwiZXh0cmFjdENoYWluIiwicHVzaCIsIiRjYXRjaCQiLCJwdWJsaWNSZXNvbHZlIiwicHVibGljUmVqZWN0IiwiUHJvbWlzZVByb3RvdHlwZSIsIlByb21pc2UkcmVzb2x2ZSIsIlByb21pc2UkcmVqZWN0IiwiUHJvbWlzZSRhbGwiLCJsZW4iLCJtc2dzIiwiY291bnQiLCJQcm9taXNlJHJhY2UiLCJjYWxsYmFja01hcCIsInN0b3JlQ2FsbGJhY2siLCJwbGF5ZXIiLCJjYWxsYmFjayIsInBsYXllckNhbGxiYWNrcyIsImdldCIsInNldCIsImdldENhbGxiYWNrcyIsInJlbW92ZUNhbGxiYWNrIiwiaW5kZXgiLCJzcGxpY2UiLCJzaGlmdENhbGxiYWNrcyIsInNoaWZ0Iiwic3dhcENhbGxiYWNrcyIsIm9sZEVsZW1lbnQiLCJuZXdFbGVtZW50IiwiZGVsZXRlIiwiZ2V0T0VtYmVkUGFyYW1ldGVycyIsImRlZmF1bHRzIiwicmVkdWNlIiwicGFyYW1zIiwicGFyYW0iLCJnZXRBdHRyaWJ1dGUiLCJjcmVhdGVFbWJlZCIsIl9yZWYiLCJodG1sIiwicXVlcnlTZWxlY3RvciIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZmlyc3RDaGlsZCIsInNldEF0dHJpYnV0ZSIsImdldE9FbWJlZERhdGEiLCJ2aWRlb1VybCIsImVuY29kZVVSSUNvbXBvbmVudCIsInhociIsIlhEb21haW5SZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25sb2FkIiwic3RhdHVzIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImRvbWFpbl9zdGF0dXNfY29kZSIsImVycm9yIiwib25lcnJvciIsInNlbmQiLCJpbml0aWFsaXplRW1iZWRzIiwicGFyZW50IiwiZWxlbWVudHMiLCJzbGljZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoYW5kbGVFcnJvciIsImNvbnNvbGUiLCJmb3JFYWNoIiwiZGF0YSIsImNhdGNoIiwicmVzaXplRW1iZWRzIiwiVmltZW9QbGF5ZXJSZXNpemVFbWJlZHNfIiwib25NZXNzYWdlIiwiZXZlbnQiLCJvcmlnaW4iLCJpZnJhbWVzIiwiY29udGVudFdpbmRvdyIsInNvdXJjZSIsInNwYWNlIiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwicGFkZGluZ0JvdHRvbSIsImJvdHRvbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJzZU1lc3NhZ2VEYXRhIiwid2FybiIsIm1ldGhvZCIsIm1lc3NhZ2UiLCJpZVZlcnNpb24iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzdHJpbmdpZnkiLCJwcm9jZXNzRGF0YSIsImNhbGxiYWNrcyIsInByb21pc2VzIiwiZSIsImluaXRpYWxpemVTY3JlZW5mdWxsIiwiZm5NYXAiLCJsIiwiZXZlbnROYW1lTWFwIiwiZnVsbHNjcmVlbmNoYW5nZSIsImZ1bGxzY3JlZW5lcnJvciIsInNjcmVlbmZ1bGwiLCJyZXF1ZXN0Iiwib25GdWxsU2NyZWVuRW50ZXJlZCIsIm9mZiIsIm9uIiwiZG9jdW1lbnRFbGVtZW50IiwicmV0dXJuUHJvbWlzZSIsInJlcXVlc3RGdWxsc2NyZWVuIiwiZXhpdCIsImlzRnVsbHNjcmVlbiIsIm9uRnVsbFNjcmVlbkV4aXQiLCJleGl0RnVsbHNjcmVlbiIsImV2ZW50TmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJpc0VuYWJsZWQiLCJmdWxsc2NyZWVuRW5hYmxlZCIsInBsYXllck1hcCIsInJlYWR5TWFwIiwiUGxheWVyIiwiX3RoaXMiLCJvcHRpb25zIiwialF1ZXJ5IiwiZ2V0RWxlbWVudEJ5SWQiLCJub2RlTmFtZSIsImlmcmFtZSIsImhhcyIsIl93aW5kb3ciLCJyZWFkeVByb21pc2UiLCJfb25NZXNzYWdlIiwiaXNFcnJvciIsImlzUmVhZHlFcnJvciIsImlzUmVhZHlFdmVudCIsImlzUGluZ1Jlc3BvbnNlIiwiX29yaWdpbmFsRWxlbWVudCIsInJlYWR5IiwiY2FsbE1ldGhvZCIsIl90aGlzMiIsImFyZ3MiLCJfdGhpczMiLCJfdGhpczQiLCJsYXN0Q2FsbGJhY2siLCJsb2FkVmlkZW8iLCJhZGRDdWVQb2ludCIsInRpbWUiLCJyZW1vdmVDdWVQb2ludCIsImVuYWJsZVRleHRUcmFjayIsImxhbmd1YWdlIiwia2luZCIsImRpc2FibGVUZXh0VHJhY2siLCJwYXVzZSIsInBsYXkiLCJnZXRGdWxsc2NyZWVuIiwidW5sb2FkIiwiZGVzdHJveSIsIl90aGlzNSIsInJlbW92ZUF0dHJpYnV0ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImdldEF1dG9wYXVzZSIsInNldEF1dG9wYXVzZSIsImF1dG9wYXVzZSIsImdldEJ1ZmZlcmVkIiwiZ2V0Q2hhcHRlcnMiLCJnZXRDdXJyZW50Q2hhcHRlciIsImdldENvbG9yIiwic2V0Q29sb3IiLCJjb2xvciIsImdldEN1ZVBvaW50cyIsImdldEN1cnJlbnRUaW1lIiwic2V0Q3VycmVudFRpbWUiLCJjdXJyZW50VGltZSIsImdldER1cmF0aW9uIiwiZ2V0RW5kZWQiLCJnZXRMb29wIiwic2V0TG9vcCIsImxvb3AiLCJzZXRNdXRlZCIsIm11dGVkIiwiZ2V0TXV0ZWQiLCJnZXRQYXVzZWQiLCJnZXRQbGF5YmFja1JhdGUiLCJzZXRQbGF5YmFja1JhdGUiLCJwbGF5YmFja1JhdGUiLCJnZXRQbGF5ZWQiLCJnZXRTZWVrYWJsZSIsImdldFNlZWtpbmciLCJnZXRUZXh0VHJhY2tzIiwiZ2V0VmlkZW9FbWJlZENvZGUiLCJnZXRWaWRlb0lkIiwiZ2V0VmlkZW9UaXRsZSIsImdldFZpZGVvV2lkdGgiLCJnZXRWaWRlb0hlaWdodCIsImdldFZpZGVvVXJsIiwiZ2V0Vm9sdW1lIiwic2V0Vm9sdW1lIiwidm9sdW1lIiwicHJvY2VzcyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibmV4dFRpY2siLCJhcnJheSIsInRpdGxlIiwiYnJvd3NlciIsImVudiIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwibmV4dEhhbmRsZSIsInRhc2tzQnlIYW5kbGUiLCJjdXJyZW50bHlSdW5uaW5nQVRhc2siLCJkb2MiLCJyZWdpc3RlckltbWVkaWF0ZSIsIkZ1bmN0aW9uIiwidGFzayIsImNsZWFySW1tZWRpYXRlIiwiaGFuZGxlIiwicnVuSWZQcmVzZW50IiwiaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24iLCJjYW5Vc2VQb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzIiwib2xkT25NZXNzYWdlIiwib25tZXNzYWdlIiwiaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24iLCJtZXNzYWdlUHJlZml4Iiwib25HbG9iYWxNZXNzYWdlIiwiYXR0YWNoRXZlbnQiLCJpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbiIsImNoYW5uZWwiLCJNZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwicG9ydDIiLCJpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uIiwic2NyaXB0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwiaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbiIsImF0dGFjaFRvIiwiZ2V0UHJvdG90eXBlT2YiLCJzY29wZSIsIlRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsImNsZWFyRm4iLCJfY2xlYXJGbiIsInVucmVmIiwicmVmIiwiZW5yb2xsIiwibXNlY3MiLCJfaWRsZVRpbWVvdXRJZCIsIl9pZGxlVGltZW91dCIsInVuZW5yb2xsIiwiX3VucmVmQWN0aXZlIiwiYWN0aXZlIiwib25UaW1lb3V0IiwiX29uVGltZW91dCIsInJlcXVpcmUiLCJnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlLFNBQVNBLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQ0MsS0FBbkMsRUFBMEM7QUFDdkQsTUFBSUQsR0FBRyxJQUFJRCxHQUFYLEVBQWdCO0FBQ2RHLFVBQU0sQ0FBQ0MsY0FBUCxDQUFzQkosR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzlCQyxXQUFLLEVBQUVBLEtBRHVCO0FBRTlCRyxnQkFBVSxFQUFFLElBRmtCO0FBRzlCQyxrQkFBWSxFQUFFLElBSGdCO0FBSTlCQyxjQUFRLEVBQUU7QUFKb0IsS0FBaEM7QUFNRCxHQVBELE1BT087QUFDTFAsT0FBRyxDQUFDQyxHQUFELENBQUgsR0FBV0MsS0FBWDtBQUNEOztBQUVELFNBQU9GLEdBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNiRDtBQUFBO0FBQ0EsU0FBU1EsZUFBVCxDQUF5QkMsUUFBekIsRUFBbUNDLFdBQW5DLEVBQWdEO0FBQzlDLE1BQUksRUFBRUQsUUFBUSxZQUFZQyxXQUF0QixDQUFKLEVBQXdDO0FBQ3RDLFVBQU0sSUFBSUMsU0FBSixDQUFjLG1DQUFkLENBQU47QUFDRDtBQUNGOztBQUVELFNBQVNDLGlCQUFULENBQTJCQyxNQUEzQixFQUFtQ0MsS0FBbkMsRUFBMEM7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QSxNQUFNLENBQUN1RSxZQUR6QyxJQUVDLFFBQVEsS0FBS0EsWUFGckM7QUFHQTFCLE9BQU8sQ0FBQ3dVLGNBQVIsR0FBMEIsT0FBTzVVLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0JBLElBQUksQ0FBQzRVLGNBQXJDLElBQ0MsT0FBT3JYLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE1BQU0sQ0FBQ3FYLGNBRHpDLElBRUMsUUFBUSxLQUFLQSxjQUZ2QyxDOzs7Ozs7Ozs7Ozs7QUM1REEsSUFBSTJDLENBQUosQyxDQUVBOztBQUNBQSxDQUFDLEdBQUksWUFBVztBQUNmLFNBQU8sSUFBUDtBQUNBLENBRkcsRUFBSjs7QUFJQSxJQUFJO0FBQ0g7QUFDQUEsR0FBQyxHQUFHQSxDQUFDLElBQUksSUFBSTdDLFFBQUosQ0FBYSxhQUFiLEdBQVQ7QUFDQSxDQUhELENBR0UsT0FBT3RKLENBQVAsRUFBVTtBQUNYO0FBQ0EsTUFBSSxPQUFPeEwsTUFBUCxLQUFrQixRQUF0QixFQUFnQzJYLENBQUMsR0FBRzNYLE1BQUo7QUFDaEMsQyxDQUVEO0FBQ0E7QUFDQTs7O0FBRUFPLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm1YLENBQWpCLEMiLCJmaWxlIjoidmVuZG9yc35WaW1lby5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsIi8qISBAdmltZW8vcGxheWVyIHYyLjEyLjIgfCAoYykgMjAyMCBWaW1lbyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL3ZpbWVvL3BsYXllci5qcyAqL1xuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG4vKipcbiAqIEBtb2R1bGUgbGliL2Z1bmN0aW9uc1xuICovXG5cbi8qKlxuICogQ2hlY2sgdG8gc2VlIHRoaXMgaXMgYSBub2RlIGVudmlyb25tZW50LlxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cblxuLyogZ2xvYmFsIGdsb2JhbCAqL1xudmFyIGlzTm9kZSA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsKSA9PT0gJ1tvYmplY3QgZ2xvYmFsXSc7XG4vKipcbiAqIEdldCB0aGUgbmFtZSBvZiB0aGUgbWV0aG9kIGZvciBhIGdpdmVuIGdldHRlciBvciBzZXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5LlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgRWl0aGVyIOKAnGdldOKAnSBvciDigJxzZXTigJ0uXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZ2V0TWV0aG9kTmFtZShwcm9wLCB0eXBlKSB7XG4gIGlmIChwcm9wLmluZGV4T2YodHlwZS50b0xvd2VyQ2FzZSgpKSA9PT0gMCkge1xuICAgIHJldHVybiBwcm9wO1xuICB9XG5cbiAgcmV0dXJuIFwiXCIuY29uY2F0KHR5cGUudG9Mb3dlckNhc2UoKSkuY29uY2F0KHByb3Auc3Vic3RyKDAsIDEpLnRvVXBwZXJDYXNlKCkpLmNvbmNhdChwcm9wLnN1YnN0cigxKSk7XG59XG4vKipcbiAqIENoZWNrIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgRE9NIEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSBlbGVtZW50IFRoZSBvYmplY3QgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzRG9tRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBCb29sZWFuKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gMSAmJiAnbm9kZU5hbWUnIGluIGVsZW1lbnQgJiYgZWxlbWVudC5vd25lckRvY3VtZW50ICYmIGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldyk7XG59XG4vKipcbiAqIENoZWNrIHRvIHNlZSB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqXG4gKiBAc2VlIGh0dHA6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3UvMzUxNDYvanMvdGVzdHMvaXNOdW1iZXIuaHRtbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGludGVnZXIgQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIGFuIGludGVnZXIuXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKSAmJiBNYXRoLmZsb29yKHZhbHVlKSA9PSB2YWx1ZTtcbn1cbi8qKlxuICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBVUkwgaXMgYSBWaW1lbyB1cmwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHN0cmluZy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNWaW1lb1VybCh1cmwpIHtcbiAgcmV0dXJuIC9eKGh0dHBzPzopP1xcL1xcLygocGxheWVyfHd3dylcXC4pP3ZpbWVvXFwuY29tKD89JHxcXC8pLy50ZXN0KHVybCk7XG59XG4vKipcbiAqIEdldCB0aGUgVmltZW8gVVJMIGZyb20gYW4gZWxlbWVudC5cbiAqIFRoZSBlbGVtZW50IG11c3QgaGF2ZSBlaXRoZXIgYSBkYXRhLXZpbWVvLWlkIG9yIGRhdGEtdmltZW8tdXJsIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb0VtYmVkUGFyYW1ldGVycyBUaGUgb0VtYmVkIHBhcmFtZXRlcnMuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZ2V0VmltZW9VcmwoKSB7XG4gIHZhciBvRW1iZWRQYXJhbWV0ZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGlkID0gb0VtYmVkUGFyYW1ldGVycy5pZDtcbiAgdmFyIHVybCA9IG9FbWJlZFBhcmFtZXRlcnMudXJsO1xuICB2YXIgaWRPclVybCA9IGlkIHx8IHVybDtcblxuICBpZiAoIWlkT3JVcmwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuIGlkIG9yIHVybCBtdXN0IGJlIHBhc3NlZCwgZWl0aGVyIGluIGFuIG9wdGlvbnMgb2JqZWN0IG9yIGFzIGEgZGF0YS12aW1lby1pZCBvciBkYXRhLXZpbWVvLXVybCBhdHRyaWJ1dGUuJyk7XG4gIH1cblxuICBpZiAoaXNJbnRlZ2VyKGlkT3JVcmwpKSB7XG4gICAgcmV0dXJuIFwiaHR0cHM6Ly92aW1lby5jb20vXCIuY29uY2F0KGlkT3JVcmwpO1xuICB9XG5cbiAgaWYgKGlzVmltZW9VcmwoaWRPclVybCkpIHtcbiAgICByZXR1cm4gaWRPclVybC5yZXBsYWNlKCdodHRwOicsICdodHRwczonKTtcbiAgfVxuXG4gIGlmIChpZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXHUyMDFDXCIuY29uY2F0KGlkLCBcIlxcdTIwMUQgaXMgbm90IGEgdmFsaWQgdmlkZW8gaWQuXCIpKTtcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXHUyMDFDXCIuY29uY2F0KGlkT3JVcmwsIFwiXFx1MjAxRCBpcyBub3QgYSB2aW1lby5jb20gdXJsLlwiKSk7XG59XG5cbnZhciBhcnJheUluZGV4T2ZTdXBwb3J0ID0gdHlwZW9mIEFycmF5LnByb3RvdHlwZS5pbmRleE9mICE9PSAndW5kZWZpbmVkJztcbnZhciBwb3N0TWVzc2FnZVN1cHBvcnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnBvc3RNZXNzYWdlICE9PSAndW5kZWZpbmVkJztcblxuaWYgKCFpc05vZGUgJiYgKCFhcnJheUluZGV4T2ZTdXBwb3J0IHx8ICFwb3N0TWVzc2FnZVN1cHBvcnQpKSB7XG4gIHRocm93IG5ldyBFcnJvcignU29ycnksIHRoZSBWaW1lbyBQbGF5ZXIgQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyLicpO1xufVxuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qIVxuICogd2Vha21hcC1wb2x5ZmlsbCB2Mi4wLjEgLSBFQ01BU2NyaXB0NiBXZWFrTWFwIHBvbHlmaWxsXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcG9seWdvbnBsYW5ldC93ZWFrbWFwLXBvbHlmaWxsXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyMCBQb2x5Z29uIFBsYW5ldCA8cG9seWdvbi5wbGFuZXQuYXF1YUBnbWFpbC5jb20+XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuKGZ1bmN0aW9uIChzZWxmKSB7XG5cbiAgaWYgKHNlbGYuV2Vha01hcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfTtcblxuICBzZWxmLldlYWtNYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gRUNNQS0yNjIgMjMuMyBXZWFrTWFwIE9iamVjdHNcbiAgICBmdW5jdGlvbiBXZWFrTWFwKCkge1xuICAgICAgaWYgKHRoaXMgPT09IHZvaWQgMCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ29uc3RydWN0b3IgV2Vha01hcCByZXF1aXJlcyAnbmV3J1wiKTtcbiAgICAgIH1cblxuICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ19pZCcsIGdlbklkKCdfV2Vha01hcCcpKTsgLy8gRUNNQS0yNjIgMjMuMy4xLjEgV2Vha01hcChbaXRlcmFibGVdKVxuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gQ3VycmVudGx5LCBXZWFrTWFwIGBpdGVyYWJsZWAgYXJndW1lbnQgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdXZWFrTWFwIGl0ZXJhYmxlIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgIH1cbiAgICB9IC8vIEVDTUEtMjYyIDIzLjMuMy4yIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG5cblxuICAgIGRlZmluZVByb3BlcnR5KFdlYWtNYXAucHJvdG90eXBlLCAnZGVsZXRlJywgZnVuY3Rpb24gKGtleSkge1xuICAgICAgY2hlY2tJbnN0YW5jZSh0aGlzLCAnZGVsZXRlJyk7XG5cbiAgICAgIGlmICghaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbnRyeSA9IGtleVt0aGlzLl9pZF07XG5cbiAgICAgIGlmIChlbnRyeSAmJiBlbnRyeVswXSA9PT0ga2V5KSB7XG4gICAgICAgIGRlbGV0ZSBrZXlbdGhpcy5faWRdO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pOyAvLyBFQ01BLTI2MiAyMy4zLjMuMyBXZWFrTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuXG4gICAgZGVmaW5lUHJvcGVydHkoV2Vha01hcC5wcm90b3R5cGUsICdnZXQnLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBjaGVja0luc3RhbmNlKHRoaXMsICdnZXQnKTtcblxuICAgICAgaWYgKCFpc09iamVjdChrZXkpKSB7XG4gICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbnRyeSA9IGtleVt0aGlzLl9pZF07XG5cbiAgICAgIGlmIChlbnRyeSAmJiBlbnRyeVswXSA9PT0ga2V5KSB7XG4gICAgICAgIHJldHVybiBlbnRyeVsxXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9KTsgLy8gRUNNQS0yNjIgMjMuMy4zLjQgV2Vha01hcC5wcm90b3R5cGUuaGFzKGtleSlcblxuICAgIGRlZmluZVByb3BlcnR5KFdlYWtNYXAucHJvdG90eXBlLCAnaGFzJywgZnVuY3Rpb24gKGtleSkge1xuICAgICAgY2hlY2tJbnN0YW5jZSh0aGlzLCAnaGFzJyk7XG5cbiAgICAgIGlmICghaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbnRyeSA9IGtleVt0aGlzLl9pZF07XG5cbiAgICAgIGlmIChlbnRyeSAmJiBlbnRyeVswXSA9PT0ga2V5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7IC8vIEVDTUEtMjYyIDIzLjMuMy41IFdlYWtNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuXG4gICAgZGVmaW5lUHJvcGVydHkoV2Vha01hcC5wcm90b3R5cGUsICdzZXQnLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgY2hlY2tJbnN0YW5jZSh0aGlzLCAnc2V0Jyk7XG5cbiAgICAgIGlmICghaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHZhbHVlIHVzZWQgYXMgd2VhayBtYXAga2V5Jyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbnRyeSA9IGtleVt0aGlzLl9pZF07XG5cbiAgICAgIGlmIChlbnRyeSAmJiBlbnRyeVswXSA9PT0ga2V5KSB7XG4gICAgICAgIGVudHJ5WzFdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBkZWZpbmVQcm9wZXJ0eShrZXksIHRoaXMuX2lkLCBba2V5LCB2YWx1ZV0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjaGVja0luc3RhbmNlKHgsIG1ldGhvZE5hbWUpIHtcbiAgICAgIGlmICghaXNPYmplY3QoeCkgfHwgIWhhc093blByb3BlcnR5LmNhbGwoeCwgJ19pZCcpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobWV0aG9kTmFtZSArICcgbWV0aG9kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXIgJyArIHR5cGVvZiB4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5JZChwcmVmaXgpIHtcbiAgICAgIHJldHVybiBwcmVmaXggKyAnXycgKyByYW5kKCkgKyAnLicgKyByYW5kKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmFuZCgpIHtcbiAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpO1xuICAgIH1cblxuICAgIGRlZmluZVByb3BlcnR5KFdlYWtNYXAsICdfcG9seWZpbGwnLCB0cnVlKTtcbiAgICByZXR1cm4gV2Vha01hcDtcbiAgfSgpO1xuXG4gIGZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgICByZXR1cm4gT2JqZWN0KHgpID09PSB4O1xuICB9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgY29tbW9uanNHbG9iYWwgIT09ICd1bmRlZmluZWQnID8gY29tbW9uanNHbG9iYWwgOiBjb21tb25qc0dsb2JhbCk7XG5cbnZhciBucG9fc3JjID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuLyohIE5hdGl2ZSBQcm9taXNlIE9ubHlcbiAgICB2MC44LjEgKGMpIEt5bGUgU2ltcHNvblxuICAgIE1JVCBMaWNlbnNlOiBodHRwOi8vZ2V0aWZ5Lm1pdC1saWNlbnNlLm9yZ1xuKi9cbihmdW5jdGlvbiBVTUQobmFtZSwgY29udGV4dCwgZGVmaW5pdGlvbikge1xuICAvLyBzcGVjaWFsIGZvcm0gb2YgVU1EIGZvciBwb2x5ZmlsbGluZyBhY3Jvc3MgZXZpcm9ubWVudHNcbiAgY29udGV4dFtuYW1lXSA9IGNvbnRleHRbbmFtZV0gfHwgZGVmaW5pdGlvbigpO1xuXG4gIGlmICggbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRleHRbbmFtZV07XG4gIH1cbn0pKFwiUHJvbWlzZVwiLCB0eXBlb2YgY29tbW9uanNHbG9iYWwgIT0gXCJ1bmRlZmluZWRcIiA/IGNvbW1vbmpzR2xvYmFsIDogY29tbW9uanNHbG9iYWwsIGZ1bmN0aW9uIERFRigpIHtcblxuICB2YXIgYnVpbHRJblByb3AsXG4gICAgICBjeWNsZSxcbiAgICAgIHNjaGVkdWxpbmdfcXVldWUsXG4gICAgICBUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgICB0aW1lciA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgIT0gXCJ1bmRlZmluZWRcIiA/IGZ1bmN0aW9uIHRpbWVyKGZuKSB7XG4gICAgcmV0dXJuIHNldEltbWVkaWF0ZShmbik7XG4gIH0gOiBzZXRUaW1lb3V0OyAvLyBkYW1taXQsIElFOC5cblxuICB0cnkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJ4XCIsIHt9KTtcblxuICAgIGJ1aWx0SW5Qcm9wID0gZnVuY3Rpb24gYnVpbHRJblByb3Aob2JqLCBuYW1lLCB2YWwsIGNvbmZpZykge1xuICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG5hbWUsIHtcbiAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogY29uZmlnICE9PSBmYWxzZVxuICAgICAgfSk7XG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgYnVpbHRJblByb3AgPSBmdW5jdGlvbiBidWlsdEluUHJvcChvYmosIG5hbWUsIHZhbCkge1xuICAgICAgb2JqW25hbWVdID0gdmFsO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICB9IC8vIE5vdGU6IHVzaW5nIGEgcXVldWUgaW5zdGVhZCBvZiBhcnJheSBmb3IgZWZmaWNpZW5jeVxuXG5cbiAgc2NoZWR1bGluZ19xdWV1ZSA9IGZ1bmN0aW9uIFF1ZXVlKCkge1xuICAgIHZhciBmaXJzdCwgbGFzdCwgaXRlbTtcblxuICAgIGZ1bmN0aW9uIEl0ZW0oZm4sIHNlbGYpIHtcbiAgICAgIHRoaXMuZm4gPSBmbjtcbiAgICAgIHRoaXMuc2VsZiA9IHNlbGY7XG4gICAgICB0aGlzLm5leHQgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZDogZnVuY3Rpb24gYWRkKGZuLCBzZWxmKSB7XG4gICAgICAgIGl0ZW0gPSBuZXcgSXRlbShmbiwgc2VsZik7XG5cbiAgICAgICAgaWYgKGxhc3QpIHtcbiAgICAgICAgICBsYXN0Lm5leHQgPSBpdGVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpcnN0ID0gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3QgPSBpdGVtO1xuICAgICAgICBpdGVtID0gdm9pZCAwO1xuICAgICAgfSxcbiAgICAgIGRyYWluOiBmdW5jdGlvbiBkcmFpbigpIHtcbiAgICAgICAgdmFyIGYgPSBmaXJzdDtcbiAgICAgICAgZmlyc3QgPSBsYXN0ID0gY3ljbGUgPSB2b2lkIDA7XG5cbiAgICAgICAgd2hpbGUgKGYpIHtcbiAgICAgICAgICBmLmZuLmNhbGwoZi5zZWxmKTtcbiAgICAgICAgICBmID0gZi5uZXh0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSgpO1xuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlKGZuLCBzZWxmKSB7XG4gICAgc2NoZWR1bGluZ19xdWV1ZS5hZGQoZm4sIHNlbGYpO1xuXG4gICAgaWYgKCFjeWNsZSkge1xuICAgICAgY3ljbGUgPSB0aW1lcihzY2hlZHVsaW5nX3F1ZXVlLmRyYWluKTtcbiAgICB9XG4gIH0gLy8gcHJvbWlzZSBkdWNrIHR5cGluZ1xuXG5cbiAgZnVuY3Rpb24gaXNUaGVuYWJsZShvKSB7XG4gICAgdmFyIF90aGVuLFxuICAgICAgICBvX3R5cGUgPSB0eXBlb2YgbztcblxuICAgIGlmIChvICE9IG51bGwgJiYgKG9fdHlwZSA9PSBcIm9iamVjdFwiIHx8IG9fdHlwZSA9PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgICBfdGhlbiA9IG8udGhlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIF90aGVuID09IFwiZnVuY3Rpb25cIiA/IF90aGVuIDogZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnkoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoYWluLmxlbmd0aDsgaSsrKSB7XG4gICAgICBub3RpZnlJc29sYXRlZCh0aGlzLCB0aGlzLnN0YXRlID09PSAxID8gdGhpcy5jaGFpbltpXS5zdWNjZXNzIDogdGhpcy5jaGFpbltpXS5mYWlsdXJlLCB0aGlzLmNoYWluW2ldKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYWluLmxlbmd0aCA9IDA7XG4gIH0gLy8gTk9URTogVGhpcyBpcyBhIHNlcGFyYXRlIGZ1bmN0aW9uIHRvIGlzb2xhdGVcbiAgLy8gdGhlIGB0cnkuLmNhdGNoYCBzbyB0aGF0IG90aGVyIGNvZGUgY2FuIGJlXG4gIC8vIG9wdGltaXplZCBiZXR0ZXJcblxuXG4gIGZ1bmN0aW9uIG5vdGlmeUlzb2xhdGVkKHNlbGYsIGNiLCBjaGFpbikge1xuICAgIHZhciByZXQsIF90aGVuO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChjYiA9PT0gZmFsc2UpIHtcbiAgICAgICAgY2hhaW4ucmVqZWN0KHNlbGYubXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjYiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldCA9IHNlbGYubXNnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldCA9IGNiLmNhbGwodm9pZCAwLCBzZWxmLm1zZyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmV0ID09PSBjaGFpbi5wcm9taXNlKSB7XG4gICAgICAgICAgY2hhaW4ucmVqZWN0KFR5cGVFcnJvcihcIlByb21pc2UtY2hhaW4gY3ljbGVcIikpO1xuICAgICAgICB9IGVsc2UgaWYgKF90aGVuID0gaXNUaGVuYWJsZShyZXQpKSB7XG4gICAgICAgICAgX3RoZW4uY2FsbChyZXQsIGNoYWluLnJlc29sdmUsIGNoYWluLnJlamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhaW4ucmVzb2x2ZShyZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjaGFpbi5yZWplY3QoZXJyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlKG1zZykge1xuICAgIHZhciBfdGhlbixcbiAgICAgICAgc2VsZiA9IHRoaXM7IC8vIGFscmVhZHkgdHJpZ2dlcmVkP1xuXG5cbiAgICBpZiAoc2VsZi50cmlnZ2VyZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLnRyaWdnZXJlZCA9IHRydWU7IC8vIHVud3JhcFxuXG4gICAgaWYgKHNlbGYuZGVmKSB7XG4gICAgICBzZWxmID0gc2VsZi5kZWY7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChfdGhlbiA9IGlzVGhlbmFibGUobXNnKSkge1xuICAgICAgICBzY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRlZl93cmFwcGVyID0gbmV3IE1ha2VEZWZXcmFwcGVyKHNlbGYpO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF90aGVuLmNhbGwobXNnLCBmdW5jdGlvbiAkcmVzb2x2ZSQoKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUuYXBwbHkoZGVmX3dyYXBwZXIsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAkcmVqZWN0JCgpIHtcbiAgICAgICAgICAgICAgcmVqZWN0LmFwcGx5KGRlZl93cmFwcGVyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QuY2FsbChkZWZfd3JhcHBlciwgZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5tc2cgPSBtc2c7XG4gICAgICAgIHNlbGYuc3RhdGUgPSAxO1xuXG4gICAgICAgIGlmIChzZWxmLmNoYWluLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzY2hlZHVsZShub3RpZnksIHNlbGYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZWplY3QuY2FsbChuZXcgTWFrZURlZldyYXBwZXIoc2VsZiksIGVycik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVqZWN0KG1zZykge1xuICAgIHZhciBzZWxmID0gdGhpczsgLy8gYWxyZWFkeSB0cmlnZ2VyZWQ/XG5cbiAgICBpZiAoc2VsZi50cmlnZ2VyZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLnRyaWdnZXJlZCA9IHRydWU7IC8vIHVud3JhcFxuXG4gICAgaWYgKHNlbGYuZGVmKSB7XG4gICAgICBzZWxmID0gc2VsZi5kZWY7XG4gICAgfVxuXG4gICAgc2VsZi5tc2cgPSBtc2c7XG4gICAgc2VsZi5zdGF0ZSA9IDI7XG5cbiAgICBpZiAoc2VsZi5jaGFpbi5sZW5ndGggPiAwKSB7XG4gICAgICBzY2hlZHVsZShub3RpZnksIHNlbGYpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGl0ZXJhdGVQcm9taXNlcyhDb25zdHJ1Y3RvciwgYXJyLCByZXNvbHZlciwgcmVqZWN0ZXIpIHtcbiAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBhcnIubGVuZ3RoOyBpZHgrKykge1xuICAgICAgKGZ1bmN0aW9uIElJRkUoaWR4KSB7XG4gICAgICAgIENvbnN0cnVjdG9yLnJlc29sdmUoYXJyW2lkeF0pLnRoZW4oZnVuY3Rpb24gJHJlc29sdmVyJChtc2cpIHtcbiAgICAgICAgICByZXNvbHZlcihpZHgsIG1zZyk7XG4gICAgICAgIH0sIHJlamVjdGVyKTtcbiAgICAgIH0pKGlkeCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gTWFrZURlZldyYXBwZXIoc2VsZikge1xuICAgIHRoaXMuZGVmID0gc2VsZjtcbiAgICB0aGlzLnRyaWdnZXJlZCA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gTWFrZURlZihzZWxmKSB7XG4gICAgdGhpcy5wcm9taXNlID0gc2VsZjtcbiAgICB0aGlzLnN0YXRlID0gMDtcbiAgICB0aGlzLnRyaWdnZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2hhaW4gPSBbXTtcbiAgICB0aGlzLm1zZyA9IHZvaWQgMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX19OUE9fXyAhPT0gMCkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKFwiTm90IGEgcHJvbWlzZVwiKTtcbiAgICB9IC8vIGluc3RhbmNlIHNoYWRvd2luZyB0aGUgaW5oZXJpdGVkIFwiYnJhbmRcIlxuICAgIC8vIHRvIHNpZ25hbCBhbiBhbHJlYWR5IFwiaW5pdGlhbGl6ZWRcIiBwcm9taXNlXG5cblxuICAgIHRoaXMuX19OUE9fXyA9IDE7XG4gICAgdmFyIGRlZiA9IG5ldyBNYWtlRGVmKHRoaXMpO1xuXG4gICAgdGhpc1tcInRoZW5cIl0gPSBmdW5jdGlvbiB0aGVuKHN1Y2Nlc3MsIGZhaWx1cmUpIHtcbiAgICAgIHZhciBvID0ge1xuICAgICAgICBzdWNjZXNzOiB0eXBlb2Ygc3VjY2VzcyA9PSBcImZ1bmN0aW9uXCIgPyBzdWNjZXNzIDogdHJ1ZSxcbiAgICAgICAgZmFpbHVyZTogdHlwZW9mIGZhaWx1cmUgPT0gXCJmdW5jdGlvblwiID8gZmFpbHVyZSA6IGZhbHNlXG4gICAgICB9OyAvLyBOb3RlOiBgdGhlbiguLilgIGl0c2VsZiBjYW4gYmUgYm9ycm93ZWQgdG8gYmUgdXNlZCBhZ2FpbnN0XG4gICAgICAvLyBhIGRpZmZlcmVudCBwcm9taXNlIGNvbnN0cnVjdG9yIGZvciBtYWtpbmcgdGhlIGNoYWluZWQgcHJvbWlzZSxcbiAgICAgIC8vIGJ5IHN1YnN0aXR1dGluZyBhIGRpZmZlcmVudCBgdGhpc2AgYmluZGluZy5cblxuICAgICAgby5wcm9taXNlID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZnVuY3Rpb24gZXh0cmFjdENoYWluKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cblxuICAgICAgICBvLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICBvLnJlamVjdCA9IHJlamVjdDtcbiAgICAgIH0pO1xuICAgICAgZGVmLmNoYWluLnB1c2gobyk7XG5cbiAgICAgIGlmIChkZWYuc3RhdGUgIT09IDApIHtcbiAgICAgICAgc2NoZWR1bGUobm90aWZ5LCBkZWYpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gby5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzW1wiY2F0Y2hcIl0gPSBmdW5jdGlvbiAkY2F0Y2gkKGZhaWx1cmUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odm9pZCAwLCBmYWlsdXJlKTtcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yLmNhbGwodm9pZCAwLCBmdW5jdGlvbiBwdWJsaWNSZXNvbHZlKG1zZykge1xuICAgICAgICByZXNvbHZlLmNhbGwoZGVmLCBtc2cpO1xuICAgICAgfSwgZnVuY3Rpb24gcHVibGljUmVqZWN0KG1zZykge1xuICAgICAgICByZWplY3QuY2FsbChkZWYsIG1zZyk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlamVjdC5jYWxsKGRlZiwgZXJyKTtcbiAgICB9XG4gIH1cblxuICB2YXIgUHJvbWlzZVByb3RvdHlwZSA9IGJ1aWx0SW5Qcm9wKHt9LCBcImNvbnN0cnVjdG9yXCIsIFByb21pc2UsXG4gIC8qY29uZmlndXJhYmxlPSovXG4gIGZhbHNlKTsgLy8gTm90ZTogQW5kcm9pZCA0IGNhbm5vdCB1c2UgYE9iamVjdC5kZWZpbmVQcm9wZXJ0eSguLilgIGhlcmVcblxuICBQcm9taXNlLnByb3RvdHlwZSA9IFByb21pc2VQcm90b3R5cGU7IC8vIGJ1aWx0LWluIFwiYnJhbmRcIiB0byBzaWduYWwgYW4gXCJ1bmluaXRpYWxpemVkXCIgcHJvbWlzZVxuXG4gIGJ1aWx0SW5Qcm9wKFByb21pc2VQcm90b3R5cGUsIFwiX19OUE9fX1wiLCAwLFxuICAvKmNvbmZpZ3VyYWJsZT0qL1xuICBmYWxzZSk7XG4gIGJ1aWx0SW5Qcm9wKFByb21pc2UsIFwicmVzb2x2ZVwiLCBmdW5jdGlvbiBQcm9taXNlJHJlc29sdmUobXNnKSB7XG4gICAgdmFyIENvbnN0cnVjdG9yID0gdGhpczsgLy8gc3BlYyBtYW5kYXRlZCBjaGVja3NcbiAgICAvLyBub3RlOiBiZXN0IFwiaXNQcm9taXNlXCIgY2hlY2sgdGhhdCdzIHByYWN0aWNhbCBmb3Igbm93XG5cbiAgICBpZiAobXNnICYmIHR5cGVvZiBtc2cgPT0gXCJvYmplY3RcIiAmJiBtc2cuX19OUE9fXyA9PT0gMSkge1xuICAgICAgcmV0dXJuIG1zZztcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKHR5cGVvZiByZXNvbHZlICE9IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmVqZWN0ICE9IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZShtc2cpO1xuICAgIH0pO1xuICB9KTtcbiAgYnVpbHRJblByb3AoUHJvbWlzZSwgXCJyZWplY3RcIiwgZnVuY3Rpb24gUHJvbWlzZSRyZWplY3QobXNnKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzKGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKHR5cGVvZiByZXNvbHZlICE9IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmVqZWN0ICE9IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KG1zZyk7XG4gICAgfSk7XG4gIH0pO1xuICBidWlsdEluUHJvcChQcm9taXNlLCBcImFsbFwiLCBmdW5jdGlvbiBQcm9taXNlJGFsbChhcnIpIHtcbiAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzOyAvLyBzcGVjIG1hbmRhdGVkIGNoZWNrc1xuXG4gICAgaWYgKFRvU3RyaW5nLmNhbGwoYXJyKSAhPSBcIltvYmplY3QgQXJyYXldXCIpIHtcbiAgICAgIHJldHVybiBDb25zdHJ1Y3Rvci5yZWplY3QoVHlwZUVycm9yKFwiTm90IGFuIGFycmF5XCIpKTtcbiAgICB9XG5cbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yLnJlc29sdmUoW10pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuID0gYXJyLmxlbmd0aCxcbiAgICAgICAgICBtc2dzID0gQXJyYXkobGVuKSxcbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICBpdGVyYXRlUHJvbWlzZXMoQ29uc3RydWN0b3IsIGFyciwgZnVuY3Rpb24gcmVzb2x2ZXIoaWR4LCBtc2cpIHtcbiAgICAgICAgbXNnc1tpZHhdID0gbXNnO1xuXG4gICAgICAgIGlmICgrK2NvdW50ID09PSBsZW4pIHtcbiAgICAgICAgICByZXNvbHZlKG1zZ3MpO1xuICAgICAgICB9XG4gICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xuICB9KTtcbiAgYnVpbHRJblByb3AoUHJvbWlzZSwgXCJyYWNlXCIsIGZ1bmN0aW9uIFByb21pc2UkcmFjZShhcnIpIHtcbiAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzOyAvLyBzcGVjIG1hbmRhdGVkIGNoZWNrc1xuXG4gICAgaWYgKFRvU3RyaW5nLmNhbGwoYXJyKSAhPSBcIltvYmplY3QgQXJyYXldXCIpIHtcbiAgICAgIHJldHVybiBDb25zdHJ1Y3Rvci5yZWplY3QoVHlwZUVycm9yKFwiTm90IGFuIGFycmF5XCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKHR5cGVvZiByZXNvbHZlICE9IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmVqZWN0ICE9IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1cblxuICAgICAgaXRlcmF0ZVByb21pc2VzKENvbnN0cnVjdG9yLCBhcnIsIGZ1bmN0aW9uIHJlc29sdmVyKGlkeCwgbXNnKSB7XG4gICAgICAgIHJlc29sdmUobXNnKTtcbiAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZTtcbn0pO1xufSk7XG5cbi8qKlxuICogQG1vZHVsZSBsaWIvY2FsbGJhY2tzXG4gKi9cbnZhciBjYWxsYmFja01hcCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFN0b3JlIGEgY2FsbGJhY2sgZm9yIGEgbWV0aG9kIG9yIGV2ZW50IGZvciBhIHBsYXllci5cbiAqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIFRoZSBwbGF5ZXIgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG1ldGhvZCBvciBldmVudCBuYW1lLlxuICogQHBhcmFtIHsoZnVuY3Rpb24odGhpczpQbGF5ZXIsICopOiB2b2lkfHtyZXNvbHZlOiBmdW5jdGlvbiwgcmVqZWN0OiBmdW5jdGlvbn0pfSBjYWxsYmFja1xuICogICAgICAgIFRoZSBjYWxsYmFjayB0byBjYWxsIG9yIGFuIG9iamVjdCB3aXRoIHJlc29sdmUgYW5kIHJlamVjdCBmdW5jdGlvbnMgZm9yIGEgcHJvbWlzZS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cblxuZnVuY3Rpb24gc3RvcmVDYWxsYmFjayhwbGF5ZXIsIG5hbWUsIGNhbGxiYWNrKSB7XG4gIHZhciBwbGF5ZXJDYWxsYmFja3MgPSBjYWxsYmFja01hcC5nZXQocGxheWVyLmVsZW1lbnQpIHx8IHt9O1xuXG4gIGlmICghKG5hbWUgaW4gcGxheWVyQ2FsbGJhY2tzKSkge1xuICAgIHBsYXllckNhbGxiYWNrc1tuYW1lXSA9IFtdO1xuICB9XG5cbiAgcGxheWVyQ2FsbGJhY2tzW25hbWVdLnB1c2goY2FsbGJhY2spO1xuICBjYWxsYmFja01hcC5zZXQocGxheWVyLmVsZW1lbnQsIHBsYXllckNhbGxiYWNrcyk7XG59XG4vKipcbiAqIEdldCB0aGUgY2FsbGJhY2tzIGZvciBhIHBsYXllciBhbmQgZXZlbnQgb3IgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgVGhlIHBsYXllciBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbWV0aG9kIG9yIGV2ZW50IG5hbWVcbiAqIEByZXR1cm4ge2Z1bmN0aW9uW119XG4gKi9cblxuZnVuY3Rpb24gZ2V0Q2FsbGJhY2tzKHBsYXllciwgbmFtZSkge1xuICB2YXIgcGxheWVyQ2FsbGJhY2tzID0gY2FsbGJhY2tNYXAuZ2V0KHBsYXllci5lbGVtZW50KSB8fCB7fTtcbiAgcmV0dXJuIHBsYXllckNhbGxiYWNrc1tuYW1lXSB8fCBbXTtcbn1cbi8qKlxuICogUmVtb3ZlIGEgc3RvcmVkIGNhbGxiYWNrIGZvciBhIG1ldGhvZCBvciBldmVudCBmb3IgYSBwbGF5ZXIuXG4gKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBUaGUgcGxheWVyIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBtZXRob2Qgb3IgZXZlbnQgbmFtZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSBUaGUgc3BlY2lmaWMgY2FsbGJhY2sgdG8gcmVtb3ZlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gV2FzIHRoaXMgdGhlIGxhc3QgY2FsbGJhY2s/XG4gKi9cblxuZnVuY3Rpb24gcmVtb3ZlQ2FsbGJhY2socGxheWVyLCBuYW1lLCBjYWxsYmFjaykge1xuICB2YXIgcGxheWVyQ2FsbGJhY2tzID0gY2FsbGJhY2tNYXAuZ2V0KHBsYXllci5lbGVtZW50KSB8fCB7fTtcblxuICBpZiAoIXBsYXllckNhbGxiYWNrc1tuYW1lXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIElmIG5vIGNhbGxiYWNrIGlzIHBhc3NlZCwgcmVtb3ZlIGFsbCBjYWxsYmFja3MgZm9yIHRoZSBldmVudFxuXG5cbiAgaWYgKCFjYWxsYmFjaykge1xuICAgIHBsYXllckNhbGxiYWNrc1tuYW1lXSA9IFtdO1xuICAgIGNhbGxiYWNrTWFwLnNldChwbGF5ZXIuZWxlbWVudCwgcGxheWVyQ2FsbGJhY2tzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBpbmRleCA9IHBsYXllckNhbGxiYWNrc1tuYW1lXS5pbmRleE9mKGNhbGxiYWNrKTtcblxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgcGxheWVyQ2FsbGJhY2tzW25hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBjYWxsYmFja01hcC5zZXQocGxheWVyLmVsZW1lbnQsIHBsYXllckNhbGxiYWNrcyk7XG4gIHJldHVybiBwbGF5ZXJDYWxsYmFja3NbbmFtZV0gJiYgcGxheWVyQ2FsbGJhY2tzW25hbWVdLmxlbmd0aCA9PT0gMDtcbn1cbi8qKlxuICogUmV0dXJuIHRoZSBmaXJzdCBzdG9yZWQgY2FsbGJhY2sgZm9yIGEgcGxheWVyIGFuZCBldmVudCBvciBtZXRob2QuXG4gKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBUaGUgcGxheWVyIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBtZXRob2Qgb3IgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgY2FsbGJhY2ssIG9yIGZhbHNlIGlmIHRoZXJlIHdlcmUgbm9uZVxuICovXG5cbmZ1bmN0aW9uIHNoaWZ0Q2FsbGJhY2tzKHBsYXllciwgbmFtZSkge1xuICB2YXIgcGxheWVyQ2FsbGJhY2tzID0gZ2V0Q2FsbGJhY2tzKHBsYXllciwgbmFtZSk7XG5cbiAgaWYgKHBsYXllckNhbGxiYWNrcy5sZW5ndGggPCAxKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGNhbGxiYWNrID0gcGxheWVyQ2FsbGJhY2tzLnNoaWZ0KCk7XG4gIHJlbW92ZUNhbGxiYWNrKHBsYXllciwgbmFtZSwgY2FsbGJhY2spO1xuICByZXR1cm4gY2FsbGJhY2s7XG59XG4vKipcbiAqIE1vdmUgY2FsbGJhY2tzIGFzc29jaWF0ZWQgd2l0aCBhbiBlbGVtZW50IHRvIGFub3RoZXIgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBvbGRFbGVtZW50IFRoZSBvbGQgZWxlbWVudC5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5ld0VsZW1lbnQgVGhlIG5ldyBlbGVtZW50LlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuXG5mdW5jdGlvbiBzd2FwQ2FsbGJhY2tzKG9sZEVsZW1lbnQsIG5ld0VsZW1lbnQpIHtcbiAgdmFyIHBsYXllckNhbGxiYWNrcyA9IGNhbGxiYWNrTWFwLmdldChvbGRFbGVtZW50KTtcbiAgY2FsbGJhY2tNYXAuc2V0KG5ld0VsZW1lbnQsIHBsYXllckNhbGxiYWNrcyk7XG4gIGNhbGxiYWNrTWFwLmRlbGV0ZShvbGRFbGVtZW50KTtcbn1cblxuLyoqXG4gKiBAbW9kdWxlIGxpYi9lbWJlZFxuICovXG52YXIgb0VtYmVkUGFyYW1ldGVycyA9IFsnYXV0b3BhdXNlJywgJ2F1dG9wbGF5JywgJ2JhY2tncm91bmQnLCAnYnlsaW5lJywgJ2NvbG9yJywgJ2NvbnRyb2xzJywgJ2RudCcsICdoZWlnaHQnLCAnaWQnLCAnbG9vcCcsICdtYXhoZWlnaHQnLCAnbWF4d2lkdGgnLCAnbXV0ZWQnLCAncGxheXNpbmxpbmUnLCAncG9ydHJhaXQnLCAncmVzcG9uc2l2ZScsICdzcGVlZCcsICd0ZXh0dHJhY2snLCAndGl0bGUnLCAndHJhbnNwYXJlbnQnLCAndXJsJywgJ3dpZHRoJ107XG4vKipcbiAqIEdldCB0aGUgJ2RhdGEtdmltZW8nLXByZWZpeGVkIGF0dHJpYnV0ZXMgZnJvbSBhbiBlbGVtZW50IGFzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IFtkZWZhdWx0cz17fV0gVGhlIGRlZmF1bHQgdmFsdWVzIHRvIHVzZS5cbiAqIEByZXR1cm4ge09iamVjdDxzdHJpbmcsIHN0cmluZz59XG4gKi9cblxuZnVuY3Rpb24gZ2V0T0VtYmVkUGFyYW1ldGVycyhlbGVtZW50KSB7XG4gIHZhciBkZWZhdWx0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHJldHVybiBvRW1iZWRQYXJhbWV0ZXJzLnJlZHVjZShmdW5jdGlvbiAocGFyYW1zLCBwYXJhbSkge1xuICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS12aW1lby1cIi5jb25jYXQocGFyYW0pKTtcblxuICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHBhcmFtc1twYXJhbV0gPSB2YWx1ZSA9PT0gJycgPyAxIDogdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfSwgZGVmYXVsdHMpO1xufVxuLyoqXG4gKiBDcmVhdGUgYW4gZW1iZWQgZnJvbSBvRW1iZWQgZGF0YSBpbnNpZGUgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgb0VtYmVkIGRhdGEuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIHB1dCB0aGUgaWZyYW1lIGluLlxuICogQHJldHVybiB7SFRNTElGcmFtZUVsZW1lbnR9IFRoZSBpZnJhbWUgZW1iZWQuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRW1iZWQoX3JlZiwgZWxlbWVudCkge1xuICB2YXIgaHRtbCA9IF9yZWYuaHRtbDtcblxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbiBlbGVtZW50IG11c3QgYmUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12aW1lby1pbml0aWFsaXplZCcpICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG4gIH1cblxuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmltZW8taW5pdGlhbGl6ZWQnLCAndHJ1ZScpO1xuICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcbn1cbi8qKlxuICogTWFrZSBhbiBvRW1iZWQgY2FsbCBmb3IgdGhlIHNwZWNpZmllZCBVUkwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZpZGVvVXJsIFRoZSB2aW1lby5jb20gdXJsIGZvciB0aGUgdmlkZW8uXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gUGFyYW1ldGVycyB0byBwYXNzIHRvIG9FbWJlZC5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQuXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5cbmZ1bmN0aW9uIGdldE9FbWJlZERhdGEodmlkZW9VcmwpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBlbGVtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFpc1ZpbWVvVXJsKHZpZGVvVXJsKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlxcdTIwMUNcIi5jb25jYXQodmlkZW9VcmwsIFwiXFx1MjAxRCBpcyBub3QgYSB2aW1lby5jb20gdXJsLlwiKSk7XG4gICAgfVxuXG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KHZpZGVvVXJsKSk7XG5cbiAgICBmb3IgKHZhciBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgIHVybCArPSBcIiZcIi5jb25jYXQocGFyYW0sIFwiPVwiKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1twYXJhbV0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgeGhyID0gJ1hEb21haW5SZXF1ZXN0JyBpbiB3aW5kb3cgPyBuZXcgWERvbWFpblJlcXVlc3QoKSA6IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlxcdTIwMUNcIi5jb25jYXQodmlkZW9VcmwsIFwiXFx1MjAxRCB3YXMgbm90IGZvdW5kLlwiKSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlxcdTIwMUNcIi5jb25jYXQodmlkZW9VcmwsIFwiXFx1MjAxRCBpcyBub3QgZW1iZWRkYWJsZS5cIikpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7IC8vIENoZWNrIGFwaSByZXNwb25zZSBmb3IgNDAzIG9uIG9lbWJlZFxuXG4gICAgICAgIGlmIChqc29uLmRvbWFpbl9zdGF0dXNfY29kZSA9PT0gNDAzKSB7XG4gICAgICAgICAgLy8gV2Ugc3RpbGwgd2FudCB0byBjcmVhdGUgdGhlIGVtYmVkIHRvIGdpdmUgdXNlcnMgdmlzdWFsIGZlZWRiYWNrXG4gICAgICAgICAgY3JlYXRlRW1iZWQoanNvbiwgZWxlbWVudCk7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlxcdTIwMUNcIi5jb25jYXQodmlkZW9VcmwsIFwiXFx1MjAxRCBpcyBub3QgZW1iZWRkYWJsZS5cIikpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKGpzb24pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdHVzID0geGhyLnN0YXR1cyA/IFwiIChcIi5jb25jYXQoeGhyLnN0YXR1cywgXCIpXCIpIDogJyc7XG4gICAgICByZWplY3QobmV3IEVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIGZldGNoaW5nIHRoZSBlbWJlZCBjb2RlIGZyb20gVmltZW9cIi5jb25jYXQoc3RhdHVzLCBcIi5cIikpKTtcbiAgICB9O1xuXG4gICAgeGhyLnNlbmQoKTtcbiAgfSk7XG59XG4vKipcbiAqIEluaXRpYWxpemUgYWxsIGVtYmVkcyB3aXRoaW4gYSBzcGVjaWZpYyBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3BhcmVudD1kb2N1bWVudF0gVGhlIHBhcmVudCBlbGVtZW50LlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuXG5mdW5jdGlvbiBpbml0aWFsaXplRW1iZWRzKCkge1xuICB2YXIgcGFyZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBkb2N1bWVudDtcbiAgdmFyIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmltZW8taWRdLCBbZGF0YS12aW1lby11cmxdJykpO1xuXG4gIHZhciBoYW5kbGVFcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yKSB7XG4gICAgaWYgKCdjb25zb2xlJyBpbiB3aW5kb3cgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciBjcmVhdGluZyBhbiBlbWJlZDogXCIuY29uY2F0KGVycm9yKSk7XG4gICAgfVxuICB9O1xuXG4gIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgLy8gU2tpcCBhbnkgdGhhdCBoYXZlIGRhdGEtdmltZW8tZGVmZXJcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12aW1lby1kZWZlcicpICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcmFtcyA9IGdldE9FbWJlZFBhcmFtZXRlcnMoZWxlbWVudCk7XG4gICAgICB2YXIgdXJsID0gZ2V0VmltZW9VcmwocGFyYW1zKTtcbiAgICAgIGdldE9FbWJlZERhdGEodXJsLCBwYXJhbXMsIGVsZW1lbnQpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVtYmVkKGRhdGEsIGVsZW1lbnQpO1xuICAgICAgfSkuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBoYW5kbGVFcnJvcihlcnJvcik7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogUmVzaXplIGVtYmVkcyB3aGVuIG1lc3NhZ2VkIGJ5IHRoZSBwbGF5ZXIuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3BhcmVudD1kb2N1bWVudF0gVGhlIHBhcmVudCBlbGVtZW50LlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuXG5mdW5jdGlvbiByZXNpemVFbWJlZHMoKSB7XG4gIHZhciBwYXJlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGRvY3VtZW50O1xuXG4gIC8vIFByZXZlbnQgZXhlY3V0aW9uIGlmIHVzZXJzIGluY2x1ZGUgdGhlIHBsYXllci5qcyBzY3JpcHQgbXVsdGlwbGUgdGltZXMuXG4gIGlmICh3aW5kb3cuVmltZW9QbGF5ZXJSZXNpemVFbWJlZHNfKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgd2luZG93LlZpbWVvUGxheWVyUmVzaXplRW1iZWRzXyA9IHRydWU7XG5cbiAgdmFyIG9uTWVzc2FnZSA9IGZ1bmN0aW9uIG9uTWVzc2FnZShldmVudCkge1xuICAgIGlmICghaXNWaW1lb1VybChldmVudC5vcmlnaW4pKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyAnc3BhY2VjaGFuZ2UnIGlzIGZpcmVkIG9ubHkgb24gZW1iZWRzIHdpdGggY2FyZHNcblxuXG4gICAgaWYgKCFldmVudC5kYXRhIHx8IGV2ZW50LmRhdGEuZXZlbnQgIT09ICdzcGFjZWNoYW5nZScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaWZyYW1lcyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdpZnJhbWUnKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaWZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlmcmFtZXNbaV0uY29udGVudFdpbmRvdyAhPT0gZXZlbnQuc291cmNlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSAvLyBDaGFuZ2UgcGFkZGluZy1ib3R0b20gb2YgdGhlIGVuY2xvc2luZyBkaXYgdG8gYWNjb21tb2RhdGVcbiAgICAgIC8vIGNhcmQgY2Fyb3VzZWwgd2l0aG91dCBkaXN0b3J0aW5nIGFzcGVjdCByYXRpb1xuXG5cbiAgICAgIHZhciBzcGFjZSA9IGlmcmFtZXNbaV0ucGFyZW50RWxlbWVudDtcbiAgICAgIHNwYWNlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIlwiLmNvbmNhdChldmVudC5kYXRhLmRhdGFbMF0uYm90dG9tLCBcInB4XCIpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKTtcbn1cblxuLyoqXG4gKiBAbW9kdWxlIGxpYi9wb3N0bWVzc2FnZVxuICovXG4vKipcbiAqIFBhcnNlIGEgbWVzc2FnZSByZWNlaXZlZCBmcm9tIHBvc3RNZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgZGF0YSByZWNlaXZlZCBmcm9tIHBvc3RNZXNzYWdlLlxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlTWVzc2FnZURhdGEoZGF0YSkge1xuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBJZiB0aGUgbWVzc2FnZSBjYW5ub3QgYmUgcGFyc2VkLCB0aHJvdyB0aGUgZXJyb3IgYXMgYSB3YXJuaW5nXG4gICAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuLyoqXG4gKiBQb3N0IGEgbWVzc2FnZSB0byB0aGUgc3BlY2lmaWVkIHRhcmdldC5cbiAqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIFRoZSBwbGF5ZXIgb2JqZWN0IHRvIHVzZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgVGhlIEFQSSBtZXRob2QgdG8gY2FsbC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgVGhlIHBhcmFtZXRlcnMgdG8gc2VuZCB0byB0aGUgcGxheWVyLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuXG5mdW5jdGlvbiBwb3N0TWVzc2FnZShwbGF5ZXIsIG1ldGhvZCwgcGFyYW1zKSB7XG4gIGlmICghcGxheWVyLmVsZW1lbnQuY29udGVudFdpbmRvdyB8fCAhcGxheWVyLmVsZW1lbnQuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtZXNzYWdlID0ge1xuICAgIG1ldGhvZDogbWV0aG9kXG4gIH07XG5cbiAgaWYgKHBhcmFtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWVzc2FnZS52YWx1ZSA9IHBhcmFtcztcbiAgfSAvLyBJRSA4IGFuZCA5IGRvIG5vdCBzdXBwb3J0IHBhc3NpbmcgbWVzc2FnZXMsIHNvIHN0cmluZ2lmeSB0aGVtXG5cblxuICB2YXIgaWVWZXJzaW9uID0gcGFyc2VGbG9hdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXi4qbXNpZSAoXFxkKykuKiQvLCAnJDEnKSk7XG5cbiAgaWYgKGllVmVyc2lvbiA+PSA4ICYmIGllVmVyc2lvbiA8IDEwKSB7XG4gICAgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuICB9XG5cbiAgcGxheWVyLmVsZW1lbnQuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCBwbGF5ZXIub3JpZ2luKTtcbn1cbi8qKlxuICogUGFyc2UgdGhlIGRhdGEgcmVjZWl2ZWQgZnJvbSBhIG1lc3NhZ2UgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBUaGUgcGxheWVyIHRoYXQgcmVjZWl2ZWQgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0geyhPYmplY3R8c3RyaW5nKX0gZGF0YSBUaGUgbWVzc2FnZSBkYXRhLiBTdHJpbmdzIHdpbGwgYmUgcGFyc2VkIGludG8gSlNPTi5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cblxuZnVuY3Rpb24gcHJvY2Vzc0RhdGEocGxheWVyLCBkYXRhKSB7XG4gIGRhdGEgPSBwYXJzZU1lc3NhZ2VEYXRhKGRhdGEpO1xuICB2YXIgY2FsbGJhY2tzID0gW107XG4gIHZhciBwYXJhbTtcblxuICBpZiAoZGF0YS5ldmVudCkge1xuICAgIGlmIChkYXRhLmV2ZW50ID09PSAnZXJyb3InKSB7XG4gICAgICB2YXIgcHJvbWlzZXMgPSBnZXRDYWxsYmFja3MocGxheWVyLCBkYXRhLmRhdGEubWV0aG9kKTtcbiAgICAgIHByb21pc2VzLmZvckVhY2goZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKGRhdGEuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgZXJyb3IubmFtZSA9IGRhdGEuZGF0YS5uYW1lO1xuICAgICAgICBwcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgIHJlbW92ZUNhbGxiYWNrKHBsYXllciwgZGF0YS5kYXRhLm1ldGhvZCwgcHJvbWlzZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjYWxsYmFja3MgPSBnZXRDYWxsYmFja3MocGxheWVyLCBcImV2ZW50OlwiLmNvbmNhdChkYXRhLmV2ZW50KSk7XG4gICAgcGFyYW0gPSBkYXRhLmRhdGE7XG4gIH0gZWxzZSBpZiAoZGF0YS5tZXRob2QpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSBzaGlmdENhbGxiYWNrcyhwbGF5ZXIsIGRhdGEubWV0aG9kKTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgcGFyYW0gPSBkYXRhLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHRyeSB7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwocGxheWVyLCBwYXJhbSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2sucmVzb2x2ZShwYXJhbSk7XG4gICAgfSBjYXRjaCAoZSkgey8vIGVtcHR5XG4gICAgfVxuICB9KTtcbn1cblxuLyogTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBTaW5kcmUgU29yaHVzIDxzaW5kcmVzb3JodXNAZ21haWwuY29tPiAoc2luZHJlc29yaHVzLmNvbSlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuVGVybXMgKi9cbmZ1bmN0aW9uIGluaXRpYWxpemVTY3JlZW5mdWxsKCkge1xuICB2YXIgZm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbDtcbiAgICB2YXIgZm5NYXAgPSBbWydyZXF1ZXN0RnVsbHNjcmVlbicsICdleGl0RnVsbHNjcmVlbicsICdmdWxsc2NyZWVuRWxlbWVudCcsICdmdWxsc2NyZWVuRW5hYmxlZCcsICdmdWxsc2NyZWVuY2hhbmdlJywgJ2Z1bGxzY3JlZW5lcnJvciddLCAvLyBOZXcgV2ViS2l0XG4gICAgWyd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsICd3ZWJraXRFeGl0RnVsbHNjcmVlbicsICd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcsICd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsICd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgJ3dlYmtpdGZ1bGxzY3JlZW5lcnJvciddLCAvLyBPbGQgV2ViS2l0XG4gICAgWyd3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbicsICd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJywgJ3dlYmtpdEN1cnJlbnRGdWxsU2NyZWVuRWxlbWVudCcsICd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJywgJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCAnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ10sIFsnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLCAnbW96Q2FuY2VsRnVsbFNjcmVlbicsICdtb3pGdWxsU2NyZWVuRWxlbWVudCcsICdtb3pGdWxsU2NyZWVuRW5hYmxlZCcsICdtb3pmdWxsc2NyZWVuY2hhbmdlJywgJ21vemZ1bGxzY3JlZW5lcnJvciddLCBbJ21zUmVxdWVzdEZ1bGxzY3JlZW4nLCAnbXNFeGl0RnVsbHNjcmVlbicsICdtc0Z1bGxzY3JlZW5FbGVtZW50JywgJ21zRnVsbHNjcmVlbkVuYWJsZWQnLCAnTVNGdWxsc2NyZWVuQ2hhbmdlJywgJ01TRnVsbHNjcmVlbkVycm9yJ11dO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbCA9IGZuTWFwLmxlbmd0aDtcbiAgICB2YXIgcmV0ID0ge307XG5cbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFsID0gZm5NYXBbaV07XG5cbiAgICAgIGlmICh2YWwgJiYgdmFsWzFdIGluIGRvY3VtZW50KSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXRbZm5NYXBbMF1baV1dID0gdmFsW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0oKTtcblxuICB2YXIgZXZlbnROYW1lTWFwID0ge1xuICAgIGZ1bGxzY3JlZW5jaGFuZ2U6IGZuLmZ1bGxzY3JlZW5jaGFuZ2UsXG4gICAgZnVsbHNjcmVlbmVycm9yOiBmbi5mdWxsc2NyZWVuZXJyb3JcbiAgfTtcbiAgdmFyIHNjcmVlbmZ1bGwgPSB7XG4gICAgcmVxdWVzdDogZnVuY3Rpb24gcmVxdWVzdChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgb25GdWxsU2NyZWVuRW50ZXJlZCA9IGZ1bmN0aW9uIG9uRnVsbFNjcmVlbkVudGVyZWQoKSB7XG4gICAgICAgICAgc2NyZWVuZnVsbC5vZmYoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBvbkZ1bGxTY3JlZW5FbnRlcmVkKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2NyZWVuZnVsbC5vbignZnVsbHNjcmVlbmNoYW5nZScsIG9uRnVsbFNjcmVlbkVudGVyZWQpO1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciByZXR1cm5Qcm9taXNlID0gZWxlbWVudFtmbi5yZXF1ZXN0RnVsbHNjcmVlbl0oKTtcblxuICAgICAgICBpZiAocmV0dXJuUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICByZXR1cm5Qcm9taXNlLnRoZW4ob25GdWxsU2NyZWVuRW50ZXJlZCkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBleGl0OiBmdW5jdGlvbiBleGl0KCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKCFzY3JlZW5mdWxsLmlzRnVsbHNjcmVlbikge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb25GdWxsU2NyZWVuRXhpdCA9IGZ1bmN0aW9uIG9uRnVsbFNjcmVlbkV4aXQoKSB7XG4gICAgICAgICAgc2NyZWVuZnVsbC5vZmYoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBvbkZ1bGxTY3JlZW5FeGl0KTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2NyZWVuZnVsbC5vbignZnVsbHNjcmVlbmNoYW5nZScsIG9uRnVsbFNjcmVlbkV4aXQpO1xuICAgICAgICB2YXIgcmV0dXJuUHJvbWlzZSA9IGRvY3VtZW50W2ZuLmV4aXRGdWxsc2NyZWVuXSgpO1xuXG4gICAgICAgIGlmIChyZXR1cm5Qcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgIHJldHVyblByb21pc2UudGhlbihvbkZ1bGxTY3JlZW5FeGl0KS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBldmVudE5hbWUgPSBldmVudE5hbWVNYXBbZXZlbnRdO1xuXG4gICAgICBpZiAoZXZlbnROYW1lKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvZmY6IGZ1bmN0aW9uIG9mZihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBldmVudE5hbWUgPSBldmVudE5hbWVNYXBbZXZlbnRdO1xuXG4gICAgICBpZiAoZXZlbnROYW1lKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzY3JlZW5mdWxsLCB7XG4gICAgaXNGdWxsc2NyZWVuOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oZG9jdW1lbnRbZm4uZnVsbHNjcmVlbkVsZW1lbnRdKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVsZW1lbnQ6IHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50W2ZuLmZ1bGxzY3JlZW5FbGVtZW50XTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzRW5hYmxlZDoge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAvLyBDb2VyY2UgdG8gYm9vbGVhbiBpbiBjYXNlIG9mIG9sZCBXZWJLaXRcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oZG9jdW1lbnRbZm4uZnVsbHNjcmVlbkVuYWJsZWRdKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2NyZWVuZnVsbDtcbn1cblxudmFyIHBsYXllck1hcCA9IG5ldyBXZWFrTWFwKCk7XG52YXIgcmVhZHlNYXAgPSBuZXcgV2Vha01hcCgpO1xudmFyIHNjcmVlbmZ1bGwgPSB7fTtcblxudmFyIFBsYXllciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBQbGF5ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7KEhUTUxJRnJhbWVFbGVtZW50fEhUTUxFbGVtZW50fHN0cmluZ3xqUXVlcnkpfSBlbGVtZW50IEEgcmVmZXJlbmNlIHRvIHRoZSBWaW1lb1xuICAgKiAgICAgICAgcGxheWVyIGlmcmFtZSwgYW5kIGlkLCBvciBhIGpRdWVyeSBvYmplY3QuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gb0VtYmVkIHBhcmFtZXRlcnMgdG8gdXNlIHdoZW4gY3JlYXRpbmcgYW4gZW1iZWQgaW4gdGhlIGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge1BsYXllcn1cbiAgICovXG4gIGZ1bmN0aW9uIFBsYXllcihlbGVtZW50KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQbGF5ZXIpO1xuXG4gICAgLyogZ2xvYmFsIGpRdWVyeSAqL1xuICAgIGlmICh3aW5kb3cualF1ZXJ5ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICAgIGlmIChlbGVtZW50Lmxlbmd0aCA+IDEgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQSBqUXVlcnkgb2JqZWN0IHdpdGggbXVsdGlwbGUgZWxlbWVudHMgd2FzIHBhc3NlZCwgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQuJyk7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50WzBdO1xuICAgIH0gLy8gRmluZCBhbiBlbGVtZW50IGJ5IElEXG5cblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xuICAgIH0gLy8gTm90IGFuIGVsZW1lbnQhXG5cblxuICAgIGlmICghaXNEb21FbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGVpdGhlciBhIHZhbGlkIGVsZW1lbnQgb3IgYSB2YWxpZCBpZC4nKTtcbiAgICB9IC8vIEFscmVhZHkgaW5pdGlhbGl6ZWQgYW4gZW1iZWQgaW4gdGhpcyBkaXYsIHNvIGdyYWIgdGhlIGlmcmFtZVxuXG5cbiAgICBpZiAoZWxlbWVudC5ub2RlTmFtZSAhPT0gJ0lGUkFNRScpIHtcbiAgICAgIHZhciBpZnJhbWUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuXG4gICAgICBpZiAoaWZyYW1lKSB7XG4gICAgICAgIGVsZW1lbnQgPSBpZnJhbWU7XG4gICAgICB9XG4gICAgfSAvLyBpZnJhbWUgdXJsIGlzIG5vdCBhIFZpbWVvIHVybFxuXG5cbiAgICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lGUkFNRScgJiYgIWlzVmltZW9VcmwoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3NyYycpIHx8ICcnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcGxheWVyIGVsZW1lbnQgcGFzc2VkIGlzbuKAmXQgYSBWaW1lbyBlbWJlZC4nKTtcbiAgICB9IC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBwbGF5ZXIgb2JqZWN0IGluIHRoZSBtYXAsIHJldHVybiB0aGF0XG5cblxuICAgIGlmIChwbGF5ZXJNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gcGxheWVyTWFwLmdldChlbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl93aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9yaWdpbiA9ICcqJztcbiAgICB2YXIgcmVhZHlQcm9taXNlID0gbmV3IG5wb19zcmMoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgX3RoaXMuX29uTWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoIWlzVmltZW9VcmwoZXZlbnQub3JpZ2luKSB8fCBfdGhpcy5lbGVtZW50LmNvbnRlbnRXaW5kb3cgIT09IGV2ZW50LnNvdXJjZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcy5vcmlnaW4gPT09ICcqJykge1xuICAgICAgICAgIF90aGlzLm9yaWdpbiA9IGV2ZW50Lm9yaWdpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhID0gcGFyc2VNZXNzYWdlRGF0YShldmVudC5kYXRhKTtcbiAgICAgICAgdmFyIGlzRXJyb3IgPSBkYXRhICYmIGRhdGEuZXZlbnQgPT09ICdlcnJvcic7XG4gICAgICAgIHZhciBpc1JlYWR5RXJyb3IgPSBpc0Vycm9yICYmIGRhdGEuZGF0YSAmJiBkYXRhLmRhdGEubWV0aG9kID09PSAncmVhZHknO1xuXG4gICAgICAgIGlmIChpc1JlYWR5RXJyb3IpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoZGF0YS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIGVycm9yLm5hbWUgPSBkYXRhLmRhdGEubmFtZTtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpc1JlYWR5RXZlbnQgPSBkYXRhICYmIGRhdGEuZXZlbnQgPT09ICdyZWFkeSc7XG4gICAgICAgIHZhciBpc1BpbmdSZXNwb25zZSA9IGRhdGEgJiYgZGF0YS5tZXRob2QgPT09ICdwaW5nJztcblxuICAgICAgICBpZiAoaXNSZWFkeUV2ZW50IHx8IGlzUGluZ1Jlc3BvbnNlKSB7XG4gICAgICAgICAgX3RoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVhZHknLCAndHJ1ZScpO1xuXG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2Nlc3NEYXRhKF90aGlzLCBkYXRhKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIF90aGlzLl9vbk1lc3NhZ2UpO1xuXG4gICAgICBpZiAoX3RoaXMuZWxlbWVudC5ub2RlTmFtZSAhPT0gJ0lGUkFNRScpIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9IGdldE9FbWJlZFBhcmFtZXRlcnMoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgIHZhciB1cmwgPSBnZXRWaW1lb1VybChwYXJhbXMpO1xuICAgICAgICBnZXRPRW1iZWREYXRhKHVybCwgcGFyYW1zLCBlbGVtZW50KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgdmFyIGlmcmFtZSA9IGNyZWF0ZUVtYmVkKGRhdGEsIGVsZW1lbnQpOyAvLyBPdmVyd3JpdGUgZWxlbWVudCB3aXRoIHRoZSBuZXcgaWZyYW1lLFxuICAgICAgICAgIC8vIGJ1dCBzdG9yZSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGVsZW1lbnRcblxuICAgICAgICAgIF90aGlzLmVsZW1lbnQgPSBpZnJhbWU7XG4gICAgICAgICAgX3RoaXMuX29yaWdpbmFsRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgc3dhcENhbGxiYWNrcyhlbGVtZW50LCBpZnJhbWUpO1xuICAgICAgICAgIHBsYXllck1hcC5zZXQoX3RoaXMuZWxlbWVudCwgX3RoaXMpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgfVxuICAgIH0pOyAvLyBTdG9yZSBhIGNvcHkgb2YgdGhpcyBQbGF5ZXIgaW4gdGhlIG1hcFxuXG4gICAgcmVhZHlNYXAuc2V0KHRoaXMsIHJlYWR5UHJvbWlzZSk7XG4gICAgcGxheWVyTWFwLnNldCh0aGlzLmVsZW1lbnQsIHRoaXMpOyAvLyBTZW5kIGEgcGluZyB0byB0aGUgaWZyYW1lIHNvIHRoZSByZWFkeSBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgaWZcbiAgICAvLyB0aGUgcGxheWVyIGlzIGFscmVhZHkgcmVhZHkuXG5cbiAgICBpZiAodGhpcy5lbGVtZW50Lm5vZGVOYW1lID09PSAnSUZSQU1FJykge1xuICAgICAgcG9zdE1lc3NhZ2UodGhpcywgJ3BpbmcnKTtcbiAgICB9XG5cbiAgICBpZiAoc2NyZWVuZnVsbC5pc0VuYWJsZWQpIHtcbiAgICAgIHZhciBleGl0RnVsbHNjcmVlbiA9IGZ1bmN0aW9uIGV4aXRGdWxsc2NyZWVuKCkge1xuICAgICAgICByZXR1cm4gc2NyZWVuZnVsbC5leGl0KCk7XG4gICAgICB9O1xuXG4gICAgICBzY3JlZW5mdWxsLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2NyZWVuZnVsbC5pc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgICBzdG9yZUNhbGxiYWNrKF90aGlzLCAnZXZlbnQ6ZXhpdEZ1bGxzY3JlZW4nLCBleGl0RnVsbHNjcmVlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlQ2FsbGJhY2soX3RoaXMsICdldmVudDpleGl0RnVsbHNjcmVlbicsIGV4aXRGdWxsc2NyZWVuKTtcbiAgICAgICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuXG4gICAgICAgIF90aGlzLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcG9zdE1lc3NhZ2UoX3RoaXMsICdmdWxsc2NyZWVuY2hhbmdlJywgc2NyZWVuZnVsbC5pc0Z1bGxzY3JlZW4pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYSBwcm9taXNlIGZvciBhIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIEFQSSBtZXRob2QgdG8gY2FsbC5cbiAgICogQHBhcmFtIHtPYmplY3R9IFthcmdzPXt9XSBBcmd1bWVudHMgdG8gc2VuZCB2aWEgcG9zdE1lc3NhZ2UuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFBsYXllciwgW3tcbiAgICBrZXk6IFwiY2FsbE1ldGhvZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxsTWV0aG9kKG5hbWUpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICByZXR1cm4gbmV3IG5wb19zcmMoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBXZSBhcmUgc3RvcmluZyB0aGUgcmVzb2x2ZS9yZWplY3QgaGFuZGxlcnMgdG8gY2FsbCBsYXRlciwgc28gd2VcbiAgICAgICAgLy8gY2Fu4oCZdCByZXR1cm4gaGVyZS5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2UvYWx3YXlzLXJldHVyblxuICAgICAgICByZXR1cm4gX3RoaXMyLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3RvcmVDYWxsYmFjayhfdGhpczIsIG5hbWUsIHtcbiAgICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3Q6IHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHBvc3RNZXNzYWdlKF90aGlzMiwgbmFtZSwgYXJncyk7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGEgcHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mIGEgcGxheWVyIHByb3BlcnR5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIHByb3BlcnR5IG5hbWVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChuYW1lKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgcmV0dXJuIG5ldyBucG9fc3JjKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbmFtZSA9IGdldE1ldGhvZE5hbWUobmFtZSwgJ2dldCcpOyAvLyBXZSBhcmUgc3RvcmluZyB0aGUgcmVzb2x2ZS9yZWplY3QgaGFuZGxlcnMgdG8gY2FsbCBsYXRlciwgc28gd2VcbiAgICAgICAgLy8gY2Fu4oCZdCByZXR1cm4gaGVyZS5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2UvYWx3YXlzLXJldHVyblxuXG4gICAgICAgIHJldHVybiBfdGhpczMucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzdG9yZUNhbGxiYWNrKF90aGlzMywgbmFtZSwge1xuICAgICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdDogcmVqZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcG9zdE1lc3NhZ2UoX3RoaXMzLCBuYW1lKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSBwcm9taXNlIGZvciBzZXR0aW5nIHRoZSB2YWx1ZSBvZiBhIHBsYXllciBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBBUEkgbWV0aG9kIHRvIGNhbGwuXG4gICAgICogQHBhcmFtIHttaXhlZH0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChuYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBuZXcgbnBvX3NyYyhmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIG5hbWUgPSBnZXRNZXRob2ROYW1lKG5hbWUsICdzZXQnKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZXJlIG11c3QgYmUgYSB2YWx1ZSB0byBzZXQuJyk7XG4gICAgICAgIH0gLy8gV2UgYXJlIHN0b3JpbmcgdGhlIHJlc29sdmUvcmVqZWN0IGhhbmRsZXJzIHRvIGNhbGwgbGF0ZXIsIHNvIHdlXG4gICAgICAgIC8vIGNhbuKAmXQgcmV0dXJuIGhlcmUuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9taXNlL2Fsd2F5cy1yZXR1cm5cblxuXG4gICAgICAgIHJldHVybiBfdGhpczQucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzdG9yZUNhbGxiYWNrKF90aGlzNCwgbmFtZSwge1xuICAgICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdDogcmVqZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcG9zdE1lc3NhZ2UoX3RoaXM0LCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LiBXaWxsIGNhbGwgdGhlXG4gICAgICogY2FsbGJhY2sgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIsIGBkYXRhYCwgdGhhdCBjb250YWlucyB0aGUgZGF0YSBmb3JcbiAgICAgKiB0aGF0IGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZXZlbnQgZmlyZXMuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIGlmICghZXZlbnROYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gZXZlbnQgbmFtZS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgY2FsbGJhY2sgZnVuY3Rpb24uJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbGxiYWNrcyA9IGdldENhbGxiYWNrcyh0aGlzLCBcImV2ZW50OlwiLmNvbmNhdChldmVudE5hbWUpKTtcblxuICAgICAgaWYgKGNhbGxiYWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5jYWxsTWV0aG9kKCdhZGRFdmVudExpc3RlbmVyJywgZXZlbnROYW1lKS5jYXRjaChmdW5jdGlvbiAoKSB7Ly8gSWdub3JlIHRoZSBlcnJvci4gVGhlcmUgd2lsbCBiZSBhbiBlcnJvciBldmVudCBmaXJlZCB0aGF0XG4gICAgICAgICAgLy8gd2lsbCB0cmlnZ2VyIHRoZSBlcnJvciBjYWxsYmFjayBpZiB0aGV5IGFyZSBsaXN0ZW5pbmcuXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzdG9yZUNhbGxiYWNrKHRoaXMsIFwiZXZlbnQ6XCIuY29uY2F0KGV2ZW50TmFtZSksIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LiBXaWxsIHJlbW92ZSBhbGxcbiAgICAgKiBsaXN0ZW5lcnMgZm9yIHRoYXQgZXZlbnQgaWYgYSBgY2FsbGJhY2tgIGlzbuKAmXQgcGFzc2VkLCBvciBvbmx5IHRoYXRcbiAgICAgKiBzcGVjaWZpYyBjYWxsYmFjayBpZiBpdCBpcyBwYXNzZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIFRoZSBzcGVjaWZpYyBjYWxsYmFjayB0byByZW1vdmUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9mZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgaWYgKCFldmVudE5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBldmVudCBuYW1lLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBsYXN0Q2FsbGJhY2sgPSByZW1vdmVDYWxsYmFjayh0aGlzLCBcImV2ZW50OlwiLmNvbmNhdChldmVudE5hbWUpLCBjYWxsYmFjayk7IC8vIElmIHRoZXJlIGFyZSBubyBjYWxsYmFja3MgbGVmdCwgcmVtb3ZlIHRoZSBsaXN0ZW5lclxuXG4gICAgICBpZiAobGFzdENhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2FsbE1ldGhvZCgncmVtb3ZlRXZlbnRMaXN0ZW5lcicsIGV2ZW50TmFtZSkuY2F0Y2goZnVuY3Rpb24gKGUpIHsvLyBJZ25vcmUgdGhlIGVycm9yLiBUaGVyZSB3aWxsIGJlIGFuIGVycm9yIGV2ZW50IGZpcmVkIHRoYXRcbiAgICAgICAgICAvLyB3aWxsIHRyaWdnZXIgdGhlIGVycm9yIGNhbGxiYWNrIGlmIHRoZXkgYXJlIGxpc3RlbmluZy5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBsb2FkIGEgbmV3IHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgTG9hZFZpZGVvUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtudW1iZXJ9IFRoZSB2aWRlbyB3aXRoIHRoaXMgaWQgc3VjY2Vzc2Z1bGx5IGxvYWRlZC5cbiAgICAgKiBAcmVqZWN0IHtUeXBlRXJyb3J9IFRoZSBpZCB3YXMgbm90IGEgbnVtYmVyLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogTG9hZCBhIG5ldyB2aWRlbyBpbnRvIHRoaXMgZW1iZWQuIFRoZSBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgaWZcbiAgICAgKiB0aGUgdmlkZW8gaXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZCwgb3IgaXQgd2lsbCBiZSByZWplY3RlZCBpZiBpdCBjb3VsZFxuICAgICAqIG5vdCBiZSBsb2FkZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcnxvYmplY3R9IG9wdGlvbnMgVGhlIGlkIG9mIHRoZSB2aWRlbyBvciBhbiBvYmplY3Qgd2l0aCBlbWJlZCBvcHRpb25zLlxuICAgICAqIEByZXR1cm4ge0xvYWRWaWRlb1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsb2FkVmlkZW9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZFZpZGVvKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxNZXRob2QoJ2xvYWRWaWRlbycsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gcGVyZm9ybSBhbiBhY3Rpb24gd2hlbiB0aGUgUGxheWVyIGlzIHJlYWR5LlxuICAgICAqXG4gICAgICogQHRvZG8gZG9jdW1lbnQgZXJyb3JzXG4gICAgICogQHByb21pc2UgTG9hZFZpZGVvUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHt2b2lkfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBhIGZ1bmN0aW9uIHdoZW4gdGhlIHBsYXllciBpZnJhbWUgaGFzIGluaXRpYWxpemVkLiBZb3UgZG8gbm90XG4gICAgICogbmVlZCB0byB3YWl0IGZvciBgcmVhZHlgIHRvIHRyaWdnZXIgdG8gYmVnaW4gYWRkaW5nIGV2ZW50IGxpc3RlbmVyc1xuICAgICAqIG9yIGNhbGxpbmcgb3RoZXIgbWV0aG9kcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1JlYWR5UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlYWR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgdmFyIHJlYWR5UHJvbWlzZSA9IHJlYWR5TWFwLmdldCh0aGlzKSB8fCBuZXcgbnBvX3NyYyhmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1Vua25vd24gcGxheWVyLiBQcm9iYWJseSB1bmxvYWRlZC4nKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBucG9fc3JjLnJlc29sdmUocmVhZHlQcm9taXNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGFkZCBhIGN1ZSBwb2ludCB0byB0aGUgcGxheWVyLlxuICAgICAqXG4gICAgICogQHByb21pc2UgQWRkQ3VlUG9pbnRQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge3N0cmluZ30gVGhlIGlkIG9mIHRoZSBjdWUgcG9pbnQgdG8gdXNlIGZvciByZW1vdmVDdWVQb2ludC5cbiAgICAgKiBAcmVqZWN0IHtSYW5nZUVycm9yfSB0aGUgdGltZSB3YXMgbGVzcyB0aGFuIDAgb3IgZ3JlYXRlciB0aGFuIHRoZVxuICAgICAqICAgICAgICAgdmlkZW/igJlzIGR1cmF0aW9uLlxuICAgICAqIEByZWplY3Qge1Vuc3VwcG9ydGVkRXJyb3J9IEN1ZSBwb2ludHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0aGUgY3VycmVudFxuICAgICAqICAgICAgICAgcGxheWVyIG9yIGJyb3dzZXIuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBjdWUgcG9pbnQgdG8gdGhlIHBsYXllci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIFRoZSB0aW1lIGZvciB0aGUgY3VlIHBvaW50LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbZGF0YV0gQXJiaXRyYXJ5IGRhdGEgdG8gYmUgcmV0dXJuZWQgd2l0aCB0aGUgY3VlIHBvaW50LlxuICAgICAqIEByZXR1cm4ge0FkZEN1ZVBvaW50UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEN1ZVBvaW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEN1ZVBvaW50KHRpbWUpIHtcbiAgICAgIHZhciBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxNZXRob2QoJ2FkZEN1ZVBvaW50Jywge1xuICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIHJlbW92ZSBhIGN1ZSBwb2ludCBmcm9tIHRoZSBwbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBBZGRDdWVQb2ludFByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7c3RyaW5nfSBUaGUgaWQgb2YgdGhlIGN1ZSBwb2ludCB0aGF0IHdhcyByZW1vdmVkLlxuICAgICAqIEByZWplY3Qge0ludmFsaWRDdWVQb2ludH0gVGhlIGN1ZSBwb2ludCB3aXRoIHRoZSBzcGVjaWZpZWQgaWQgd2FzIG5vdFxuICAgICAqICAgICAgICAgZm91bmQuXG4gICAgICogQHJlamVjdCB7VW5zdXBwb3J0ZWRFcnJvcn0gQ3VlIHBvaW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRoZSBjdXJyZW50XG4gICAgICogICAgICAgICBwbGF5ZXIgb3IgYnJvd3Nlci5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGN1ZSBwb2ludCBmcm9tIHRoZSB2aWRlby5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIGN1ZSBwb2ludCB0byByZW1vdmUuXG4gICAgICogQHJldHVybiB7UmVtb3ZlQ3VlUG9pbnRQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQ3VlUG9pbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ3VlUG9pbnQoaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxNZXRob2QoJ3JlbW92ZUN1ZVBvaW50JywgaWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHJlcHJlc2VudGF0aW9uIG9mIGEgdGV4dCB0cmFjayBvbiBhIHZpZGVvLlxuICAgICAqXG4gICAgICogQHR5cGVkZWYge09iamVjdH0gVmltZW9UZXh0VHJhY2tcbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIElTTyBsYW5ndWFnZSBjb2RlLlxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBraW5kIFRoZSBraW5kIG9mIHRyYWNrIGl0IGlzIChjYXB0aW9ucyBvciBzdWJ0aXRsZXMpLlxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCBUaGUgaHVtYW7igJByZWFkYWJsZSBsYWJlbCBmb3IgdGhlIHRyYWNrLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGVuYWJsZSBhIHRleHQgdHJhY2suXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBFbmFibGVUZXh0VHJhY2tQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge1ZpbWVvVGV4dFRyYWNrfSBUaGUgdGV4dCB0cmFjayB0aGF0IHdhcyBlbmFibGVkLlxuICAgICAqIEByZWplY3Qge0ludmFsaWRUcmFja0xhbmd1YWdlRXJyb3J9IE5vIHRyYWNrIHdhcyBhdmFpbGFibGUgd2l0aCB0aGVcbiAgICAgKiAgICAgICAgIHNwZWNpZmllZCBsYW5ndWFnZS5cbiAgICAgKiBAcmVqZWN0IHtJbnZhbGlkVHJhY2tFcnJvcn0gTm8gdHJhY2sgd2FzIGF2YWlsYWJsZSB3aXRoIHRoZSBzcGVjaWZpZWRcbiAgICAgKiAgICAgICAgIGxhbmd1YWdlIGFuZCBraW5kLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHRoZSB0ZXh0IHRyYWNrIHdpdGggdGhlIHNwZWNpZmllZCBsYW5ndWFnZSwgYW5kIG9wdGlvbmFsbHkgdGhlXG4gICAgICogc3BlY2lmaWVkIGtpbmQgKGNhcHRpb25zIG9yIHN1YnRpdGxlcykuXG4gICAgICpcbiAgICAgKiBXaGVuIHNldCB2aWEgdGhlIEFQSSwgdGhlIHRyYWNrIGxhbmd1YWdlIHdpbGwgbm90IGNoYW5nZSB0aGUgdmlld2Vy4oCZc1xuICAgICAqIHN0b3JlZCBwcmVmZXJlbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFRoZSB0d2/igJBsZXR0ZXIgbGFuZ3VhZ2UgY29kZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2tpbmRdIFRoZSBraW5kIG9mIHRyYWNrIHRvIGVuYWJsZSAoY2FwdGlvbnMgb3Igc3VidGl0bGVzKS5cbiAgICAgKiBAcmV0dXJuIHtFbmFibGVUZXh0VHJhY2tQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZW5hYmxlVGV4dFRyYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZVRleHRUcmFjayhsYW5ndWFnZSwga2luZCkge1xuICAgICAgaWYgKCFsYW5ndWFnZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgbGFuZ3VhZ2UuJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNhbGxNZXRob2QoJ2VuYWJsZVRleHRUcmFjaycsIHtcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLFxuICAgICAgICBraW5kOiBraW5kXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGRpc2FibGUgdGhlIGFjdGl2ZSB0ZXh0IHRyYWNrLlxuICAgICAqXG4gICAgICogQHByb21pc2UgRGlzYWJsZVRleHRUcmFja1Byb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7dm9pZH0gVGhlIHRyYWNrIHdhcyBkaXNhYmxlZC5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgdGhlIGN1cnJlbnRseS1hY3RpdmUgdGV4dCB0cmFjay5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Rpc2FibGVUZXh0VHJhY2tQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzYWJsZVRleHRUcmFja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlVGV4dFRyYWNrKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsbE1ldGhvZCgnZGlzYWJsZVRleHRUcmFjaycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gcGF1c2UgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgUGF1c2VQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge3ZvaWR9IFRoZSB2aWRlbyB3YXMgcGF1c2VkLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUGF1c2UgdGhlIHZpZGVvIGlmIGl04oCZcyBwbGF5aW5nLlxuICAgICAqXG4gICAgICogQHJldHVybiB7UGF1c2VQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicGF1c2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxsTWV0aG9kKCdwYXVzZScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gcGxheSB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBQbGF5UHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHt2b2lkfSBUaGUgdmlkZW8gd2FzIHBsYXllZC5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFBsYXkgdGhlIHZpZGVvIGlmIGl04oCZcyBwYXVzZWQuICoqTm90ZToqKiBvbiBpT1MgYW5kIHNvbWUgb3RoZXJcbiAgICAgKiBtb2JpbGUgZGV2aWNlcywgeW91IGNhbm5vdCBwcm9ncmFtbWF0aWNhbGx5IHRyaWdnZXIgcGxheS4gT25jZSB0aGVcbiAgICAgKiB2aWV3ZXIgaGFzIHRhcHBlZCBvbiB0aGUgcGxheSBidXR0b24gaW4gdGhlIHBsYXllciwgaG93ZXZlciwgeW91XG4gICAgICogd2lsbCBiZSBhYmxlIHRvIHVzZSB0aGlzIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7UGxheVByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwbGF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxsTWV0aG9kKCdwbGF5Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3QgdGhhdCB0aGUgcGxheWVyIGVudGVycyBmdWxsc2NyZWVuLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXF1ZXN0RnVsbHNjcmVlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0RnVsbHNjcmVlbigpIHtcbiAgICAgIGlmIChzY3JlZW5mdWxsLmlzRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gc2NyZWVuZnVsbC5yZXF1ZXN0KHRoaXMuZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNhbGxNZXRob2QoJ3JlcXVlc3RGdWxsc2NyZWVuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3QgdGhhdCB0aGUgcGxheWVyIGV4aXRzIGZ1bGxzY3JlZW4uXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4aXRGdWxsc2NyZWVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4aXRGdWxsc2NyZWVuKCkge1xuICAgICAgaWYgKHNjcmVlbmZ1bGwuaXNFbmFibGVkKSB7XG4gICAgICAgIHJldHVybiBzY3JlZW5mdWxsLmV4aXQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2FsbE1ldGhvZCgnZXhpdEZ1bGxzY3JlZW4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwbGF5ZXIgaXMgY3VycmVudGx5IGZ1bGxzY3JlZW4uXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldEZ1bGxzY3JlZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RnVsbHNjcmVlbigpIHtcbiAgICAgIGlmIChzY3JlZW5mdWxsLmlzRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gbnBvX3NyYy5yZXNvbHZlKHNjcmVlbmZ1bGwuaXNGdWxsc2NyZWVuKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdmdWxsc2NyZWVuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byB1bmxvYWQgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgVW5sb2FkUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHt2b2lkfSBUaGUgdmlkZW8gd2FzIHVubG9hZGVkLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBwbGF5ZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtVbmxvYWRQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5sb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVubG9hZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxNZXRob2QoJ3VubG9hZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhbnVwIHRoZSBwbGF5ZXIgYW5kIHJlbW92ZSBpdCBmcm9tIHRoZSBET01cbiAgICAgKlxuICAgICAqIEl0IHdvbid0IGJlIHVzYWJsZSBhbmQgYSBuZXcgb25lIHNob3VsZCBiZSBjb25zdHJ1Y3RlZFxuICAgICAqICBpbiBvcmRlciB0byBkbyBhbnkgb3BlcmF0aW9ucy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgcmV0dXJuIG5ldyBucG9fc3JjKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHJlYWR5TWFwLmRlbGV0ZShfdGhpczUpO1xuICAgICAgICBwbGF5ZXJNYXAuZGVsZXRlKF90aGlzNS5lbGVtZW50KTtcblxuICAgICAgICBpZiAoX3RoaXM1Ll9vcmlnaW5hbEVsZW1lbnQpIHtcbiAgICAgICAgICBwbGF5ZXJNYXAuZGVsZXRlKF90aGlzNS5fb3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgICAgIF90aGlzNS5fb3JpZ2luYWxFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS12aW1lby1pbml0aWFsaXplZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzNS5lbGVtZW50ICYmIF90aGlzNS5lbGVtZW50Lm5vZGVOYW1lID09PSAnSUZSQU1FJyAmJiBfdGhpczUuZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgX3RoaXM1LmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfdGhpczUuZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczUuX3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgX3RoaXM1Ll9vbk1lc3NhZ2UpO1xuXG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBhdXRvcGF1c2UgYmVoYXZpb3Igb2YgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgR2V0QXV0b3BhdXNlUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtib29sZWFufSBXaGV0aGVyIGF1dG9wYXVzZSBpcyB0dXJuZWQgb24gb3Igb2ZmLlxuICAgICAqIEByZWplY3Qge1Vuc3VwcG9ydGVkRXJyb3J9IEF1dG9wYXVzZSBpcyBub3Qgc3VwcG9ydGVkIHdpdGggdGhlIGN1cnJlbnRcbiAgICAgKiAgICAgICAgIHBsYXllciBvciBicm93c2VyLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBhdXRvcGF1c2UgYmVoYXZpb3IgZm9yIHRoaXMgcGxheWVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0QXV0b3BhdXNlUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldEF1dG9wYXVzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBdXRvcGF1c2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ2F1dG9wYXVzZScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gc2V0IHRoZSBhdXRvcGF1c2UgYmVoYXZpb3Igb2YgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgU2V0QXV0b3BhdXNlUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtib29sZWFufSBXaGV0aGVyIGF1dG9wYXVzZSBpcyB0dXJuZWQgb24gb3Igb2ZmLlxuICAgICAqIEByZWplY3Qge1Vuc3VwcG9ydGVkRXJyb3J9IEF1dG9wYXVzZSBpcyBub3Qgc3VwcG9ydGVkIHdpdGggdGhlIGN1cnJlbnRcbiAgICAgKiAgICAgICAgIHBsYXllciBvciBicm93c2VyLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgdGhlIGF1dG9wYXVzZSBiZWhhdmlvciBvZiB0aGlzIHBsYXllci5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIHdoZW4gYW5vdGhlciB2aWRlbyBpcyBwbGF5ZWQgaW4gdGhlIHNhbWUgYnJvd3NlciwgdGhpc1xuICAgICAqIHBsYXllciB3aWxsIGF1dG9tYXRpY2FsbHkgcGF1c2UuIFVubGVzcyB5b3UgaGF2ZSBhIHNwZWNpZmljIHJlYXNvblxuICAgICAqIGZvciBkb2luZyBzbywgd2UgcmVjb21tZW5kIHRoYXQgeW91IGxlYXZlIGF1dG9wYXVzZSBzZXQgdG8gdGhlXG4gICAgICogZGVmYXVsdCAoYHRydWVgKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYXV0b3BhdXNlXG4gICAgICogQHJldHVybiB7U2V0QXV0b3BhdXNlUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldEF1dG9wYXVzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRBdXRvcGF1c2UoYXV0b3BhdXNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoJ2F1dG9wYXVzZScsIGF1dG9wYXVzZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIGJ1ZmZlcmVkIHByb3BlcnR5IG9mIHRoZSB2aWRlby5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldEJ1ZmZlcmVkUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtBcnJheX0gQnVmZmVyZWQgVGltZXJhbmdlcyBjb252ZXJ0ZWQgdG8gYW4gQXJyYXkuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGJ1ZmZlcmVkIHByb3BlcnR5IG9mIHRoZSB2aWRlby5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0dldEJ1ZmZlcmVkUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldEJ1ZmZlcmVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ1ZmZlcmVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdidWZmZXJlZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHJlcHJlc2VudGF0aW9uIG9mIGEgY2hhcHRlci5cbiAgICAgKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IFZpbWVvQ2hhcHRlclxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydFRpbWUgVGhlIHN0YXJ0IHRpbWUgb2YgdGhlIGNoYXB0ZXIuXG4gICAgICogQHByb3BlcnR5IHtvYmplY3R9IHRpdGxlIFRoZSB0aXRsZSBvZiB0aGUgY2hhcHRlci5cbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gaW5kZXggVGhlIHBsYWNlIGluIHRoZSBvcmRlciBvZiBDaGFwdGVycy4gU3RhcnRzIGF0IDEuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gZ2V0IGNoYXB0ZXJzIGZvciB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBHZXRDaGFwdGVyc1Byb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7VmltZW9DaGFwdGVyW119IFRoZSBjaGFwdGVycyBmb3IgdGhlIHZpZGVvLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0IGFuIGFycmF5IG9mIGFsbCB0aGUgY2hhcHRlcnMgZm9yIHRoZSB2aWRlby5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0dldENoYXB0ZXJzUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldENoYXB0ZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoYXB0ZXJzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdjaGFwdGVycycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIGNoYXB0ZXIuXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBHZXRDdXJyZW50Q2hhcHRlcnNQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge1ZpbWVvQ2hhcHRlcnx1bmRlZmluZWR9IFRoZSBjdXJyZW50IGNoYXB0ZXIgZm9yIHRoZSB2aWRlby5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudGx5IGFjdGl2ZSBjaGFwdGVyIGZvciB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtHZXRDdXJyZW50Q2hhcHRlcnNQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q3VycmVudENoYXB0ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudENoYXB0ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ2N1cnJlbnRDaGFwdGVyJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIGNvbG9yIG9mIHRoZSBwbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBHZXRDb2xvclByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7c3RyaW5nfSBUaGUgaGV4IGNvbG9yIG9mIHRoZSBwbGF5ZXIuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNvbG9yIGZvciB0aGlzIHBsYXllci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0dldENvbG9yUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldENvbG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbG9yKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdjb2xvcicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gc2V0IHRoZSBjb2xvciBvZiB0aGUgcGxheWVyLlxuICAgICAqXG4gICAgICogQHByb21pc2UgU2V0Q29sb3JQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge3N0cmluZ30gVGhlIGNvbG9yIHdhcyBzdWNjZXNzZnVsbHkgc2V0LlxuICAgICAqIEByZWplY3Qge1R5cGVFcnJvcn0gVGhlIHN0cmluZyB3YXMgbm90IGEgdmFsaWQgaGV4IG9yIHJnYiBjb2xvci5cbiAgICAgKiBAcmVqZWN0IHtDb250cmFzdEVycm9yfSBUaGUgY29sb3Igd2FzIHNldCwgYnV0IHRoZSBjb250cmFzdCBpc1xuICAgICAqICAgICAgICAgb3V0c2lkZSBvZiB0aGUgYWNjZXB0YWJsZSByYW5nZS5cbiAgICAgKiBAcmVqZWN0IHtFbWJlZFNldHRpbmdzRXJyb3J9IFRoZSBvd25lciBvZiB0aGUgcGxheWVyIGhhcyBjaG9zZW4gdG9cbiAgICAgKiAgICAgICAgIHVzZSBhIHNwZWNpZmljIGNvbG9yLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjb2xvciBvZiB0aGlzIHBsYXllciB0byBhIGhleCBvciByZ2Igc3RyaW5nLiBTZXR0aW5nIHRoZVxuICAgICAqIGNvbG9yIG1heSBmYWlsIGlmIHRoZSBvd25lciBvZiB0aGUgdmlkZW8gaGFzIHNldCB0aGVpciBlbWJlZFxuICAgICAqIHByZWZlcmVuY2VzIHRvIGZvcmNlIGEgc3BlY2lmaWMgY29sb3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgVGhlIGhleCBvciByZ2IgY29sb3Igc3RyaW5nIHRvIHNldC5cbiAgICAgKiBAcmV0dXJuIHtTZXRDb2xvclByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRDb2xvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDb2xvcihjb2xvcikge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KCdjb2xvcicsIGNvbG9yKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSByZXByZXNlbnRhdGlvbiBvZiBhIGN1ZSBwb2ludC5cbiAgICAgKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IFZpbWVvQ3VlUG9pbnRcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gdGltZSBUaGUgdGltZSBvZiB0aGUgY3VlIHBvaW50LlxuICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIHBhc3NlZCB3aGVuIGFkZGluZyB0aGUgY3VlIHBvaW50LlxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpZCBUaGUgdW5pcXVlIGlkIGZvciB1c2Ugd2l0aCByZW1vdmVDdWVQb2ludC5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIGN1ZSBwb2ludHMgb2YgYSB2aWRlby5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldEN1ZVBvaW50c1Byb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7VmltZW9DdWVQb2ludFtdfSBUaGUgY3VlIHBvaW50cyBhZGRlZCB0byB0aGUgdmlkZW8uXG4gICAgICogQHJlamVjdCB7VW5zdXBwb3J0ZWRFcnJvcn0gQ3VlIHBvaW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRoZSBjdXJyZW50XG4gICAgICogICAgICAgICBwbGF5ZXIgb3IgYnJvd3Nlci5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCBhbiBhcnJheSBvZiB0aGUgY3VlIHBvaW50cyBhZGRlZCB0byB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtHZXRDdWVQb2ludHNQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q3VlUG9pbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1ZVBvaW50cygpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgnY3VlUG9pbnRzJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIGN1cnJlbnQgdGltZSBvZiB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBHZXRDdXJyZW50VGltZVByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgY3VycmVudCB0aW1lIGluIHNlY29uZHMuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb24gaW4gc2Vjb25kcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0dldEN1cnJlbnRUaW1lUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldEN1cnJlbnRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdjdXJyZW50VGltZScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gc2V0IHRoZSBjdXJyZW50IHRpbWUgb2YgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgU2V0Q3VycmVudFRpbWVQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge251bWJlcn0gVGhlIGFjdHVhbCBjdXJyZW50IHRpbWUgdGhhdCB3YXMgc2V0LlxuICAgICAqIEByZWplY3Qge1JhbmdlRXJyb3J9IHRoZSB0aW1lIHdhcyBsZXNzIHRoYW4gMCBvciBncmVhdGVyIHRoYW4gdGhlXG4gICAgICogICAgICAgICB2aWRlb+KAmXMgZHVyYXRpb24uXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb24gaW4gc2Vjb25kcy4gSWYgdGhlIHBsYXllciB3YXNcbiAgICAgKiBwYXVzZWQsIGl0IHdpbGwgcmVtYWluIHBhdXNlZC4gTGlrZXdpc2UsIGlmIHRoZSBwbGF5ZXIgd2FzIHBsYXlpbmcsXG4gICAgICogaXQgd2lsbCByZXN1bWUgcGxheWluZyBvbmNlIHRoZSB2aWRlbyBoYXMgYnVmZmVyZWQuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHByb3ZpZGUgYW4gYWNjdXJhdGUgdGltZSBhbmQgdGhlIHBsYXllciB3aWxsIGF0dGVtcHQgdG8gc2Vla1xuICAgICAqIHRvIGFzIGNsb3NlIHRvIHRoYXQgdGltZSBhcyBwb3NzaWJsZS4gVGhlIGV4YWN0IHRpbWUgd2lsbCBiZSB0aGVcbiAgICAgKiBmdWxmaWxsZWQgdmFsdWUgb2YgdGhlIHByb21pc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudFRpbWVcbiAgICAgKiBAcmV0dXJuIHtTZXRDdXJyZW50VGltZVByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRDdXJyZW50VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDdXJyZW50VGltZShjdXJyZW50VGltZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KCdjdXJyZW50VGltZScsIGN1cnJlbnRUaW1lKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgZHVyYXRpb24gb2YgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgR2V0RHVyYXRpb25Qcm9taXNlXG4gICAgICogQGZ1bGZpbGwge251bWJlcn0gVGhlIGR1cmF0aW9uIGluIHNlY29uZHMuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGR1cmF0aW9uIG9mIHRoZSB2aWRlbyBpbiBzZWNvbmRzLiBJdCB3aWxsIGJlIHJvdW5kZWQgdG8gdGhlXG4gICAgICogbmVhcmVzdCBzZWNvbmQgYmVmb3JlIHBsYXliYWNrIGJlZ2lucywgYW5kIHRvIHRoZSBuZWFyZXN0IHRob3VzYW5kdGhcbiAgICAgKiBvZiBhIHNlY29uZCBhZnRlciBwbGF5YmFjayBiZWdpbnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtHZXREdXJhdGlvblByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXREdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgnZHVyYXRpb24nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgZW5kZWQgc3RhdGUgb2YgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgR2V0RW5kZWRQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IHRoZSB2aWRlbyBoYXMgZW5kZWQuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGVuZGVkIHN0YXRlIG9mIHRoZSB2aWRlby4gVGhlIHZpZGVvIGhhcyBlbmRlZCBpZlxuICAgICAqIGBjdXJyZW50VGltZSA9PT0gZHVyYXRpb25gLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0RW5kZWRQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RW5kZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RW5kZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ2VuZGVkJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIGxvb3Agc3RhdGUgb2YgdGhlIHBsYXllci5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldExvb3BQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IHRoZSBwbGF5ZXIgaXMgc2V0IHRvIGxvb3AuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxvb3Agc3RhdGUgb2YgdGhlIHBsYXllci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0dldExvb3BQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TG9vcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb29wKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdsb29wJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBzZXQgdGhlIGxvb3Agc3RhdGUgb2YgdGhlIHBsYXllci5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIFNldExvb3BQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge2Jvb2xlYW59IFRoZSBsb29wIHN0YXRlIHRoYXQgd2FzIHNldC5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgbG9vcCBzdGF0ZSBvZiB0aGUgcGxheWVyLiBXaGVuIHNldCB0byBgdHJ1ZWAsIHRoZSBwbGF5ZXJcbiAgICAgKiB3aWxsIHN0YXJ0IG92ZXIgaW1tZWRpYXRlbHkgb25jZSBwbGF5YmFjayBlbmRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb29wXG4gICAgICogQHJldHVybiB7U2V0TG9vcFByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRMb29wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldExvb3AobG9vcCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KCdsb29wJywgbG9vcCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBzZXQgdGhlIG11dGVkIHN0YXRlIG9mIHRoZSBwbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBTZXRNdXRlZFByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7Ym9vbGVhbn0gVGhlIG11dGVkIHN0YXRlIHRoYXQgd2FzIHNldC5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgbXV0ZWQgc3RhdGUgb2YgdGhlIHBsYXllci4gV2hlbiBzZXQgdG8gYHRydWVgLCB0aGUgcGxheWVyXG4gICAgICogdm9sdW1lIHdpbGwgYmUgbXV0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG11dGVkXG4gICAgICogQHJldHVybiB7U2V0TXV0ZWRQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0TXV0ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TXV0ZWQobXV0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldCgnbXV0ZWQnLCBtdXRlZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIG11dGVkIHN0YXRlIG9mIHRoZSBwbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBHZXRNdXRlZFByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgdGhlIHBsYXllciBpcyBtdXRlZC5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbXV0ZWQgc3RhdGUgb2YgdGhlIHBsYXllci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0dldE11dGVkUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldE11dGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE11dGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdtdXRlZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBwYXVzZWQgc3RhdGUgb2YgdGhlIHBsYXllci5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldExvb3BQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IHRoZSB2aWRlbyBpcyBwYXVzZWQuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHBhdXNlZCBzdGF0ZSBvZiB0aGUgcGxheWVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0TG9vcFByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRQYXVzZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGF1c2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdwYXVzZWQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgcGxheWJhY2sgcmF0ZSBvZiB0aGUgcGxheWVyLlxuICAgICAqXG4gICAgICogQHByb21pc2UgR2V0UGxheWJhY2tSYXRlUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtudW1iZXJ9IFRoZSBwbGF5YmFjayByYXRlIG9mIHRoZSBwbGF5ZXIgb24gYSBzY2FsZSBmcm9tIDAuNSB0byAyLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBwbGF5YmFjayByYXRlIG9mIHRoZSBwbGF5ZXIgb24gYSBzY2FsZSBmcm9tIGAwLjVgIHRvIGAyYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0dldFBsYXliYWNrUmF0ZVByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRQbGF5YmFja1JhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGxheWJhY2tSYXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdwbGF5YmFja1JhdGUnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIHNldCB0aGUgcGxheWJhY2tyYXRlIG9mIHRoZSBwbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBTZXRQbGF5YmFja1JhdGVQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge251bWJlcn0gVGhlIHBsYXliYWNrIHJhdGUgd2FzIHNldC5cbiAgICAgKiBAcmVqZWN0IHtSYW5nZUVycm9yfSBUaGUgcGxheWJhY2sgcmF0ZSB3YXMgbGVzcyB0aGFuIDAuNSBvciBncmVhdGVyIHRoYW4gMi5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcGxheWJhY2sgcmF0ZSBvZiB0aGUgcGxheWVyIG9uIGEgc2NhbGUgZnJvbSBgMC41YCB0byBgMmAuIFdoZW4gc2V0XG4gICAgICogdmlhIHRoZSBBUEksIHRoZSBwbGF5YmFjayByYXRlIHdpbGwgbm90IGJlIHN5bmNocm9uaXplZCB0byBvdGhlclxuICAgICAqIHBsYXllcnMgb3Igc3RvcmVkIGFzIHRoZSB2aWV3ZXIncyBwcmVmZXJlbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBsYXliYWNrUmF0ZVxuICAgICAqIEByZXR1cm4ge1NldFBsYXliYWNrUmF0ZVByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRQbGF5YmFja1JhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGxheWJhY2tSYXRlKHBsYXliYWNrUmF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KCdwbGF5YmFja1JhdGUnLCBwbGF5YmFja1JhdGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBwbGF5ZWQgcHJvcGVydHkgb2YgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgR2V0UGxheWVkUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtBcnJheX0gUGxheWVkIFRpbWVyYW5nZXMgY29udmVydGVkIHRvIGFuIEFycmF5LlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBwbGF5ZWQgcHJvcGVydHkgb2YgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0UGxheWVkUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFBsYXllZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQbGF5ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ3BsYXllZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBzZWVrYWJsZSBwcm9wZXJ0eSBvZiB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBHZXRTZWVrYWJsZVByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7QXJyYXl9IFNlZWthYmxlIFRpbWVyYW5nZXMgY29udmVydGVkIHRvIGFuIEFycmF5LlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzZWVrYWJsZSBwcm9wZXJ0eSBvZiB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtHZXRTZWVrYWJsZVByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTZWVrYWJsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWVrYWJsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgnc2Vla2FibGUnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgc2Vla2luZyBwcm9wZXJ0eSBvZiB0aGUgcGxheWVyLlxuICAgICAqXG4gICAgICogQHByb21pc2UgR2V0U2Vla2luZ1Byb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgdGhlIHBsYXllciBpcyBjdXJyZW50bHkgc2Vla2luZy5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCBpZiB0aGUgcGxheWVyIGlzIGN1cnJlbnRseSBzZWVraW5nLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0U2Vla2luZ1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTZWVraW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlZWtpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ3NlZWtpbmcnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgdGV4dCB0cmFja3Mgb2YgYSB2aWRlby5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldFRleHRUcmFja3NQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge1ZpbWVvVGV4dFRyYWNrW119IFRoZSB0ZXh0IHRyYWNrcyBhc3NvY2lhdGVkIHdpdGggdGhlIHZpZGVvLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0IGFuIGFycmF5IG9mIHRoZSB0ZXh0IHRyYWNrcyB0aGF0IGV4aXN0IGZvciB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtHZXRUZXh0VHJhY2tzUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFRleHRUcmFja3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGV4dFRyYWNrcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgndGV4dFRyYWNrcycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBlbWJlZCBjb2RlIGZvciB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBHZXRWaWRlb0VtYmVkQ29kZVByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7c3RyaW5nfSBUaGUgYDxpZnJhbWU+YCBlbWJlZCBjb2RlIGZvciB0aGUgdmlkZW8uXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGA8aWZyYW1lPmAgZW1iZWQgY29kZSBmb3IgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0VmlkZW9FbWJlZENvZGVQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VmlkZW9FbWJlZENvZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmlkZW9FbWJlZENvZGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZpZGVvRW1iZWRDb2RlJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIGlkIG9mIHRoZSB2aWRlby5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldFZpZGVvSWRQcm9taXNlXG4gICAgICogQGZ1bGZpbGwge251bWJlcn0gVGhlIGlkIG9mIHRoZSB2aWRlby5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaWQgb2YgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0VmlkZW9JZFByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRWaWRlb0lkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZpZGVvSWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZpZGVvSWQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgdGl0bGUgb2YgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgR2V0VmlkZW9UaXRsZVByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgdGl0bGUgb2YgdGhlIHZpZGVvLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB0aXRsZSBvZiB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtHZXRWaWRlb1RpdGxlUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFZpZGVvVGl0bGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmlkZW9UaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgndmlkZW9UaXRsZScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSBuYXRpdmUgd2lkdGggb2YgdGhlIHZpZGVvLlxuICAgICAqXG4gICAgICogQHByb21pc2UgR2V0VmlkZW9XaWR0aFByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgbmF0aXZlIHdpZHRoIG9mIHRoZSB2aWRlby5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmF0aXZlIHdpZHRoIG9mIHRoZSBjdXJyZW50bHnigJBwbGF5aW5nIHZpZGVvLiBUaGUgd2lkdGggb2ZcbiAgICAgKiB0aGUgaGlnaGVzdOKAkHJlc29sdXRpb24gYXZhaWxhYmxlIHdpbGwgYmUgdXNlZCBiZWZvcmUgcGxheWJhY2sgYmVnaW5zLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0VmlkZW9XaWR0aFByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRWaWRlb1dpZHRoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZpZGVvV2lkdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZpZGVvV2lkdGgnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBwcm9taXNlIHRvIGdldCB0aGUgbmF0aXZlIGhlaWdodCBvZiB0aGUgdmlkZW8uXG4gICAgICpcbiAgICAgKiBAcHJvbWlzZSBHZXRWaWRlb0hlaWdodFByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgbmF0aXZlIGhlaWdodCBvZiB0aGUgdmlkZW8uXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5hdGl2ZSBoZWlnaHQgb2YgdGhlIGN1cnJlbnRseeKAkHBsYXlpbmcgdmlkZW8uIFRoZSBoZWlnaHQgb2ZcbiAgICAgKiB0aGUgaGlnaGVzdOKAkHJlc29sdXRpb24gYXZhaWxhYmxlIHdpbGwgYmUgdXNlZCBiZWZvcmUgcGxheWJhY2sgYmVnaW5zLlxuICAgICAqXG4gICAgICogQHJldHVybiB7R2V0VmlkZW9IZWlnaHRQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VmlkZW9IZWlnaHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmlkZW9IZWlnaHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZpZGVvSGVpZ2h0Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBnZXQgdGhlIHZpbWVvLmNvbSB1cmwgZm9yIHRoZSB2aWRlby5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldFZpZGVvVXJsUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtudW1iZXJ9IFRoZSB2aW1lby5jb20gdXJsIGZvciB0aGUgdmlkZW8uXG4gICAgICogQHJlamVjdCB7UHJpdmFjeUVycm9yfSBUaGUgdXJsIGlzbuKAmXQgYXZhaWxhYmxlIGJlY2F1c2Ugb2YgdGhlIHZpZGVv4oCZcyBwcml2YWN5IHNldHRpbmcuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZpbWVvLmNvbSB1cmwgZm9yIHRoZSB2aWRlby5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0dldFZpZGVvVXJsUHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFZpZGVvVXJsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZpZGVvVXJsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd2aWRlb1VybCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHByb21pc2UgdG8gZ2V0IHRoZSB2b2x1bWUgbGV2ZWwgb2YgdGhlIHBsYXllci5cbiAgICAgKlxuICAgICAqIEBwcm9taXNlIEdldFZvbHVtZVByb21pc2VcbiAgICAgKiBAZnVsZmlsbCB7bnVtYmVyfSBUaGUgdm9sdW1lIGxldmVsIG9mIHRoZSBwbGF5ZXIgb24gYSBzY2FsZSBmcm9tIDAgdG8gMS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCB2b2x1bWUgbGV2ZWwgb2YgdGhlIHBsYXllciBvbiBhIHNjYWxlIGZyb20gYDBgIHRvIGAxYC5cbiAgICAgKlxuICAgICAqIE1vc3QgbW9iaWxlIGRldmljZXMgZG8gbm90IHN1cHBvcnQgYW4gaW5kZXBlbmRlbnQgdm9sdW1lIGZyb20gdGhlXG4gICAgICogc3lzdGVtIHZvbHVtZS4gSW4gdGhvc2UgY2FzZXMsIHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiBgMWAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtHZXRWb2x1bWVQcm9taXNlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Vm9sdW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZvbHVtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgndm9sdW1lJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0byBzZXQgdGhlIHZvbHVtZSBsZXZlbCBvZiB0aGUgcGxheWVyLlxuICAgICAqXG4gICAgICogQHByb21pc2UgU2V0Vm9sdW1lUHJvbWlzZVxuICAgICAqIEBmdWxmaWxsIHtudW1iZXJ9IFRoZSB2b2x1bWUgd2FzIHNldC5cbiAgICAgKiBAcmVqZWN0IHtSYW5nZUVycm9yfSBUaGUgdm9sdW1lIHdhcyBsZXNzIHRoYW4gMCBvciBncmVhdGVyIHRoYW4gMS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdm9sdW1lIG9mIHRoZSBwbGF5ZXIgb24gYSBzY2FsZSBmcm9tIGAwYCB0byBgMWAuIFdoZW4gc2V0XG4gICAgICogdmlhIHRoZSBBUEksIHRoZSB2b2x1bWUgbGV2ZWwgd2lsbCBub3QgYmUgc3luY2hyb25pemVkIHRvIG90aGVyXG4gICAgICogcGxheWVycyBvciBzdG9yZWQgYXMgdGhlIHZpZXdlcuKAmXMgcHJlZmVyZW5jZS5cbiAgICAgKlxuICAgICAqIE1vc3QgbW9iaWxlIGRldmljZXMgZG8gbm90IHN1cHBvcnQgc2V0dGluZyB0aGUgdm9sdW1lLiBBbiBlcnJvciB3aWxsXG4gICAgICogKm5vdCogYmUgdHJpZ2dlcmVkIGluIHRoYXQgc2l0dWF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZVxuICAgICAqIEByZXR1cm4ge1NldFZvbHVtZVByb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRWb2x1bWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Vm9sdW1lKHZvbHVtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KCd2b2x1bWUnLCB2b2x1bWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQbGF5ZXI7XG59KCk7IC8vIFNldHVwIGVtYmVkIG9ubHkgaWYgdGhpcyBpcyBub3QgYSBub2RlIGVudmlyb25tZW50XG5cblxuaWYgKCFpc05vZGUpIHtcbiAgc2NyZWVuZnVsbCA9IGluaXRpYWxpemVTY3JlZW5mdWxsKCk7XG4gIGluaXRpYWxpemVFbWJlZHMoKTtcbiAgcmVzaXplRW1iZWRzKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=