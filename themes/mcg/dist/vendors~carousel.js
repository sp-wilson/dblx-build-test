(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~carousel"],{

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

/***/ "./node_modules/desandro-matches-selector/matches-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
(function (window, factory) {
  /*global define: false, module: false */
  'use strict'; // universal module definition

  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory() {
  'use strict';

  var matchesMethod = function () {
    var ElemProto = window.Element.prototype; // check for the standard method name first

    if (ElemProto.matches) {
      return 'matches';
    } // check un-prefixed


    if (ElemProto.matchesSelector) {
      return 'matchesSelector';
    } // check vendor prefixes


    var prefixes = ['webkit', 'moz', 'ms', 'o'];

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';

      if (ElemProto[method]) {
        return method;
      }
    }
  }();

  return function matchesSelector(elem, selector) {
    return elem[matchesMethod](selector);
  };
});

/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */
(function (global, factory) {
  // universal module definition

  /* jshint strict: false */

  /* globals define, module, window */
  if (true) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window != 'undefined' ? window : this, function () {
  "use strict";

  function EvEmitter() {}

  var proto = EvEmitter.prototype;

  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    } // set events hash


    var events = this._events = this._events || {}; // set listeners array

    var listeners = events[eventName] = events[eventName] || []; // only add once

    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }

    return this;
  };

  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    } // add event


    this.on(eventName, listener); // set once flag
    // set onceEvents hash

    var onceEvents = this._onceEvents = this._onceEvents || {}; // set onceListeners object

    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {}; // set flag

    onceListeners[listener] = true;
    return this;
  };

  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];

    if (!listeners || !listeners.length) {
      return;
    }

    var index = listeners.indexOf(listener);

    if (index != -1) {
      listeners.splice(index, 1);
    }

    return this;
  };

  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];

    if (!listeners || !listeners.length) {
      return;
    } // copy over to avoid interference if .off() in listener


    listeners = listeners.slice(0);
    args = args || []; // once stuff

    var onceListeners = this._onceEvents && this._onceEvents[eventName];

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];

      if (isOnce) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off(eventName, listener); // unset once flag

        delete onceListeners[listener];
      } // trigger listener


      listener.apply(this, args);
    }

    return this;
  };

  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };

  return EvEmitter;
});

/***/ }),

/***/ "./node_modules/fizzy-ui-utils/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */
(function (window, factory) {
  // universal module definition

  /*jshint strict: false */

  /*globals define, module, require */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! desandro-matches-selector/matches-selector */ "./node_modules/desandro-matches-selector/matches-selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (matchesSelector) {
      return factory(window, matchesSelector);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, matchesSelector) {
  'use strict';

  var utils = {}; // ----- extend ----- //
  // extends objects

  utils.extend = function (a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }

    return a;
  }; // ----- modulo ----- //


  utils.modulo = function (num, div) {
    return (num % div + div) % div;
  }; // ----- makeArray ----- //


  var arraySlice = Array.prototype.slice; // turn element or nodeList into an array

  utils.makeArray = function (obj) {
    if (Array.isArray(obj)) {
      // use object if already an array
      return obj;
    } // return empty array if undefined or null. #6


    if (obj === null || obj === undefined) {
      return [];
    }

    var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';

    if (isArrayLike) {
      // convert nodeList to array
      return arraySlice.call(obj);
    } // array of single index


    return [obj];
  }; // ----- removeFrom ----- //


  utils.removeFrom = function (ary, obj) {
    var index = ary.indexOf(obj);

    if (index != -1) {
      ary.splice(index, 1);
    }
  }; // ----- getParent ----- //


  utils.getParent = function (elem, selector) {
    while (elem.parentNode && elem != document.body) {
      elem = elem.parentNode;

      if (matchesSelector(elem, selector)) {
        return elem;
      }
    }
  }; // ----- getQueryElement ----- //
  // use element as selector string


  utils.getQueryElement = function (elem) {
    if (typeof elem == 'string') {
      return document.querySelector(elem);
    }

    return elem;
  }; // ----- handleEvent ----- //
  // enable .ontype to trigger from .addEventListener( elem, 'type' )


  utils.handleEvent = function (event) {
    var method = 'on' + event.type;

    if (this[method]) {
      this[method](event);
    }
  }; // ----- filterFindElements ----- //


  utils.filterFindElements = function (elems, selector) {
    // make array of elems
    elems = utils.makeArray(elems);
    var ffElems = [];
    elems.forEach(function (elem) {
      // check that elem is an actual element
      if (!(elem instanceof HTMLElement)) {
        return;
      } // add elem if no selector


      if (!selector) {
        ffElems.push(elem);
        return;
      } // filter & find items if we have a selector
      // filter


      if (matchesSelector(elem, selector)) {
        ffElems.push(elem);
      } // find children


      var childElems = elem.querySelectorAll(selector); // concat childElems to filterFound array

      for (var i = 0; i < childElems.length; i++) {
        ffElems.push(childElems[i]);
      }
    });
    return ffElems;
  }; // ----- debounceMethod ----- //


  utils.debounceMethod = function (_class, methodName, threshold) {
    threshold = threshold || 100; // original method

    var method = _class.prototype[methodName];
    var timeoutName = methodName + 'Timeout';

    _class.prototype[methodName] = function () {
      var timeout = this[timeoutName];
      clearTimeout(timeout);
      var args = arguments;

      var _this = this;

      this[timeoutName] = setTimeout(function () {
        method.apply(_this, args);
        delete _this[timeoutName];
      }, threshold);
    };
  }; // ----- docReady ----- //


  utils.docReady = function (callback) {
    var readyState = document.readyState;

    if (readyState == 'complete' || readyState == 'interactive') {
      // do async to allow for other scripts to run. metafizzy/flickity#441
      setTimeout(callback);
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }; // ----- htmlInit ----- //
  // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/


  utils.toDashed = function (str) {
    return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
      return $1 + '-' + $2;
    }).toLowerCase();
  };

  var console = window.console;
  /**
   * allow user to initialize classes via [data-namespace] or .js-namespace class
   * htmlInit( Widget, 'widgetName' )
   * options are parsed from data-namespace-options
   */

  utils.htmlInit = function (WidgetClass, namespace) {
    utils.docReady(function () {
      var dashedNamespace = utils.toDashed(namespace);
      var dataAttr = 'data-' + dashedNamespace;
      var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
      var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
      var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
      var dataOptionsAttr = dataAttr + '-options';
      var jQuery = window.jQuery;
      elems.forEach(function (elem) {
        var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
        var options;

        try {
          options = attr && JSON.parse(attr);
        } catch (error) {
          // log error, do not initialize
          if (console) {
            console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
          }

          return;
        } // initialize


        var instance = new WidgetClass(elem, options); // make available via $().data('namespace')

        if (jQuery) {
          jQuery.data(elem, namespace, instance);
        }
      });
    });
  }; // -----  ----- //


  return utils;
});

/***/ }),

/***/ "./node_modules/flickity/js/add-remove-cell.js":
/*!*****************************************************!*\
  !*** ./node_modules/flickity/js/add-remove-cell.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// add, remove cell
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, utils) {
      return factory(window, Flickity, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, utils) {
  'use strict'; // append cells to a document fragment

  function getCellsFragment(cells) {
    var fragment = document.createDocumentFragment();
    cells.forEach(function (cell) {
      fragment.appendChild(cell.element);
    });
    return fragment;
  } // -------------------------- add/remove cell prototype -------------------------- //


  var proto = Flickity.prototype;
  /**
   * Insert, prepend, or append cells
   * @param {Element, Array, NodeList} elems
   * @param {Integer} index
   */

  proto.insert = function (elems, index) {
    var cells = this._makeCells(elems);

    if (!cells || !cells.length) {
      return;
    }

    var len = this.cells.length; // default to append

    index = index === undefined ? len : index; // add cells with document fragment

    var fragment = getCellsFragment(cells); // append to slider

    var isAppend = index == len;

    if (isAppend) {
      this.slider.appendChild(fragment);
    } else {
      var insertCellElement = this.cells[index].element;
      this.slider.insertBefore(fragment, insertCellElement);
    } // add to this.cells


    if (index === 0) {
      // prepend, add to start
      this.cells = cells.concat(this.cells);
    } else if (isAppend) {
      // append, add to end
      this.cells = this.cells.concat(cells);
    } else {
      // insert in this.cells
      var endCells = this.cells.splice(index, len - index);
      this.cells = this.cells.concat(cells).concat(endCells);
    }

    this._sizeCells(cells);

    this.cellChange(index, true);
  };

  proto.append = function (elems) {
    this.insert(elems, this.cells.length);
  };

  proto.prepend = function (elems) {
    this.insert(elems, 0);
  };
  /**
   * Remove cells
   * @param {Element, Array, NodeList} elems
   */


  proto.remove = function (elems) {
    var cells = this.getCells(elems);

    if (!cells || !cells.length) {
      return;
    }

    var minCellIndex = this.cells.length - 1; // remove cells from collection & DOM

    cells.forEach(function (cell) {
      cell.remove();
      var index = this.cells.indexOf(cell);
      minCellIndex = Math.min(index, minCellIndex);
      utils.removeFrom(this.cells, cell);
    }, this);
    this.cellChange(minCellIndex, true);
  };
  /**
   * logic to be run after a cell's size changes
   * @param {Element} elem - cell's element
   */


  proto.cellSizeChange = function (elem) {
    var cell = this.getCell(elem);

    if (!cell) {
      return;
    }

    cell.getSize();
    var index = this.cells.indexOf(cell);
    this.cellChange(index);
  };
  /**
   * logic any time a cell is changed: added, removed, or size changed
   * @param {Integer} changedCellIndex - index of the changed cell, optional
   */


  proto.cellChange = function (changedCellIndex, isPositioningSlider) {
    var prevSelectedElem = this.selectedElement;

    this._positionCells(changedCellIndex);

    this._getWrapShiftCells();

    this.setGallerySize(); // update selectedIndex
    // try to maintain position & select previous selected element

    var cell = this.getCell(prevSelectedElem);

    if (cell) {
      this.selectedIndex = this.getCellSlideIndex(cell);
    }

    this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex);
    this.emitEvent('cellChange', [changedCellIndex]); // position slider

    this.select(this.selectedIndex); // do not position slider after lazy load

    if (isPositioningSlider) {
      this.positionSliderAtSelected();
    }
  }; // -----  ----- //


  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/animate.js":
/*!*********************************************!*\
  !*** ./node_modules/flickity/js/animate.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// animate
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (utils) {
      return factory(window, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, utils) {
  'use strict'; // -------------------------- animate -------------------------- //

  var proto = {};

  proto.startAnimation = function () {
    if (this.isAnimating) {
      return;
    }

    this.isAnimating = true;
    this.restingFrames = 0;
    this.animate();
  };

  proto.animate = function () {
    this.applyDragForce();
    this.applySelectedAttraction();
    var previousX = this.x;
    this.integratePhysics();
    this.positionSlider();
    this.settle(previousX); // animate next frame

    if (this.isAnimating) {
      var _this = this;

      requestAnimationFrame(function animateFrame() {
        _this.animate();
      });
    }
  };

  proto.positionSlider = function () {
    var x = this.x; // wrap position around

    if (this.options.wrapAround && this.cells.length > 1) {
      x = utils.modulo(x, this.slideableWidth);
      x = x - this.slideableWidth;
      this.shiftWrapCells(x);
    }

    this.setTranslateX(x, this.isAnimating);
    this.dispatchScrollEvent();
  };

  proto.setTranslateX = function (x, is3d) {
    x += this.cursorPosition; // reverse if right-to-left and using transform

    x = this.options.rightToLeft ? -x : x;
    var translateX = this.getPositionValue(x); // use 3D tranforms for hardware acceleration on iOS
    // but use 2D when settled, for better font-rendering

    this.slider.style.transform = is3d ? 'translate3d(' + translateX + ',0,0)' : 'translateX(' + translateX + ')';
  };

  proto.dispatchScrollEvent = function () {
    var firstSlide = this.slides[0];

    if (!firstSlide) {
      return;
    }

    var positionX = -this.x - firstSlide.target;
    var progress = positionX / this.slidesWidth;
    this.dispatchEvent('scroll', null, [progress, positionX]);
  };

  proto.positionSliderAtSelected = function () {
    if (!this.cells.length) {
      return;
    }

    this.x = -this.selectedSlide.target;
    this.velocity = 0; // stop wobble

    this.positionSlider();
  };

  proto.getPositionValue = function (position) {
    if (this.options.percentPosition) {
      // percent position, round to 2 digits, like 12.34%
      return Math.round(position / this.size.innerWidth * 10000) * 0.01 + '%';
    } else {
      // pixel positioning
      return Math.round(position) + 'px';
    }
  };

  proto.settle = function (previousX) {
    // keep track of frames where x hasn't moved
    if (!this.isPointerDown && Math.round(this.x * 100) == Math.round(previousX * 100)) {
      this.restingFrames++;
    } // stop animating if resting for 3 or more frames


    if (this.restingFrames > 2) {
      this.isAnimating = false;
      delete this.isFreeScrolling; // render position with translateX when settled

      this.positionSlider();
      this.dispatchEvent('settle', null, [this.selectedIndex]);
    }
  };

  proto.shiftWrapCells = function (x) {
    // shift before cells
    var beforeGap = this.cursorPosition + x;

    this._shiftCells(this.beforeShiftCells, beforeGap, -1); // shift after cells


    var afterGap = this.size.innerWidth - (x + this.slideableWidth + this.cursorPosition);

    this._shiftCells(this.afterShiftCells, afterGap, 1);
  };

  proto._shiftCells = function (cells, gap, shift) {
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var cellShift = gap > 0 ? shift : 0;
      cell.wrapShift(cellShift);
      gap -= cell.size.outerWidth;
    }
  };

  proto._unshiftCells = function (cells) {
    if (!cells || !cells.length) {
      return;
    }

    for (var i = 0; i < cells.length; i++) {
      cells[i].wrapShift(0);
    }
  }; // -------------------------- physics -------------------------- //


  proto.integratePhysics = function () {
    this.x += this.velocity;
    this.velocity *= this.getFrictionFactor();
  };

  proto.applyForce = function (force) {
    this.velocity += force;
  };

  proto.getFrictionFactor = function () {
    return 1 - this.options[this.isFreeScrolling ? 'freeScrollFriction' : 'friction'];
  };

  proto.getRestingPosition = function () {
    // my thanks to Steven Wittens, who simplified this math greatly
    return this.x + this.velocity / (1 - this.getFrictionFactor());
  };

  proto.applyDragForce = function () {
    if (!this.isDraggable || !this.isPointerDown) {
      return;
    } // change the position to drag position by applying force


    var dragVelocity = this.dragX - this.x;
    var dragForce = dragVelocity - this.velocity;
    this.applyForce(dragForce);
  };

  proto.applySelectedAttraction = function () {
    // do not attract if pointer down or no slides
    var dragDown = this.isDraggable && this.isPointerDown;

    if (dragDown || this.isFreeScrolling || !this.slides.length) {
      return;
    }

    var distance = this.selectedSlide.target * -1 - this.x;
    var force = distance * this.options.selectedAttraction;
    this.applyForce(force);
  };

  return proto;
});

/***/ }),

/***/ "./node_modules/flickity/js/cell.js":
/*!******************************************!*\
  !*** ./node_modules/flickity/js/cell.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity.Cell
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (getSize) {
      return factory(window, getSize);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, getSize) {
  'use strict';

  function Cell(elem, parent) {
    this.element = elem;
    this.parent = parent;
    this.create();
  }

  var proto = Cell.prototype;

  proto.create = function () {
    this.element.style.position = 'absolute';
    this.element.setAttribute('aria-hidden', 'true');
    this.x = 0;
    this.shift = 0;
  };

  proto.destroy = function () {
    // reset style
    this.unselect();
    this.element.style.position = '';
    var side = this.parent.originSide;
    this.element.style[side] = '';
  };

  proto.getSize = function () {
    this.size = getSize(this.element);
  };

  proto.setPosition = function (x) {
    this.x = x;
    this.updateTarget();
    this.renderPosition(x);
  }; // setDefaultTarget v1 method, backwards compatibility, remove in v3


  proto.updateTarget = proto.setDefaultTarget = function () {
    var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
    this.target = this.x + this.size[marginProperty] + this.size.width * this.parent.cellAlign;
  };

  proto.renderPosition = function (x) {
    // render position of cell with in slider
    var side = this.parent.originSide;
    this.element.style[side] = this.parent.getPositionValue(x);
  };

  proto.select = function () {
    this.element.classList.add('is-selected');
    this.element.removeAttribute('aria-hidden');
  };

  proto.unselect = function () {
    this.element.classList.remove('is-selected');
    this.element.setAttribute('aria-hidden', 'true');
  };
  /**
   * @param {Integer} factor - 0, 1, or -1
  **/


  proto.wrapShift = function (shift) {
    this.shift = shift;
    this.renderPosition(this.x + this.parent.slideableWidth * shift);
  };

  proto.remove = function () {
    this.element.parentNode.removeChild(this.element);
  };

  return Cell;
});

/***/ }),

/***/ "./node_modules/flickity/js/drag.js":
/*!******************************************!*\
  !*** ./node_modules/flickity/js/drag.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// drag
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! unidragger/unidragger */ "./node_modules/unidragger/unidragger.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, Unidragger, utils) {
      return factory(window, Flickity, Unidragger, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, Unidragger, utils) {
  'use strict'; // ----- defaults ----- //

  utils.extend(Flickity.defaults, {
    draggable: '>1',
    dragThreshold: 3
  }); // ----- create ----- //

  Flickity.createMethods.push('_createDrag'); // -------------------------- drag prototype -------------------------- //

  var proto = Flickity.prototype;
  utils.extend(proto, Unidragger.prototype);
  proto._touchActionValue = 'pan-y'; // --------------------------  -------------------------- //

  var isTouch = ('createTouch' in document);
  var isTouchmoveScrollCanceled = false;

  proto._createDrag = function () {
    this.on('activate', this.onActivateDrag);
    this.on('uiChange', this._uiChangeDrag);
    this.on('deactivate', this.onDeactivateDrag);
    this.on('cellChange', this.updateDraggable); // TODO updateDraggable on resize? if groupCells & slides change
    // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
    // #457, RubaXa/Sortable#973

    if (isTouch && !isTouchmoveScrollCanceled) {
      window.addEventListener('touchmove', function () {});
      isTouchmoveScrollCanceled = true;
    }
  };

  proto.onActivateDrag = function () {
    this.handles = [this.viewport];
    this.bindHandles();
    this.updateDraggable();
  };

  proto.onDeactivateDrag = function () {
    this.unbindHandles();
    this.element.classList.remove('is-draggable');
  };

  proto.updateDraggable = function () {
    // disable dragging if less than 2 slides. #278
    if (this.options.draggable == '>1') {
      this.isDraggable = this.slides.length > 1;
    } else {
      this.isDraggable = this.options.draggable;
    }

    if (this.isDraggable) {
      this.element.classList.add('is-draggable');
    } else {
      this.element.classList.remove('is-draggable');
    }
  }; // backwards compatibility


  proto.bindDrag = function () {
    this.options.draggable = true;
    this.updateDraggable();
  };

  proto.unbindDrag = function () {
    this.options.draggable = false;
    this.updateDraggable();
  };

  proto._uiChangeDrag = function () {
    delete this.isFreeScrolling;
  }; // -------------------------- pointer events -------------------------- //


  proto.pointerDown = function (event, pointer) {
    if (!this.isDraggable) {
      this._pointerDownDefault(event, pointer);

      return;
    }

    var isOkay = this.okayPointerDown(event);

    if (!isOkay) {
      return;
    }

    this._pointerDownPreventDefault(event);

    this.pointerDownFocus(event); // blur

    if (document.activeElement != this.element) {
      // do not blur if already focused
      this.pointerDownBlur();
    } // stop if it was moving


    this.dragX = this.x;
    this.viewport.classList.add('is-pointer-down'); // track scrolling

    this.pointerDownScroll = getScrollPosition();
    window.addEventListener('scroll', this);

    this._pointerDownDefault(event, pointer);
  }; // default pointerDown logic, used for staticClick


  proto._pointerDownDefault = function (event, pointer) {
    // track start event position
    // Safari 9 overrides pageX and pageY. These values needs to be copied. #779
    this.pointerDownPointer = {
      pageX: pointer.pageX,
      pageY: pointer.pageY
    }; // bind move and end events

    this._bindPostStartEvents(event);

    this.dispatchEvent('pointerDown', event, [pointer]);
  };

  var focusNodes = {
    INPUT: true,
    TEXTAREA: true,
    SELECT: true
  };

  proto.pointerDownFocus = function (event) {
    var isFocusNode = focusNodes[event.target.nodeName];

    if (!isFocusNode) {
      this.focus();
    }
  };

  proto._pointerDownPreventDefault = function (event) {
    var isTouchStart = event.type == 'touchstart';
    var isTouchPointer = event.pointerType == 'touch';
    var isFocusNode = focusNodes[event.target.nodeName];

    if (!isTouchStart && !isTouchPointer && !isFocusNode) {
      event.preventDefault();
    }
  }; // ----- move ----- //


  proto.hasDragStarted = function (moveVector) {
    return Math.abs(moveVector.x) > this.options.dragThreshold;
  }; // ----- up ----- //


  proto.pointerUp = function (event, pointer) {
    delete this.isTouchScrolling;
    this.viewport.classList.remove('is-pointer-down');
    this.dispatchEvent('pointerUp', event, [pointer]);

    this._dragPointerUp(event, pointer);
  };

  proto.pointerDone = function () {
    window.removeEventListener('scroll', this);
    delete this.pointerDownScroll;
  }; // -------------------------- dragging -------------------------- //


  proto.dragStart = function (event, pointer) {
    if (!this.isDraggable) {
      return;
    }

    this.dragStartPosition = this.x;
    this.startAnimation();
    window.removeEventListener('scroll', this);
    this.dispatchEvent('dragStart', event, [pointer]);
  };

  proto.pointerMove = function (event, pointer) {
    var moveVector = this._dragPointerMove(event, pointer);

    this.dispatchEvent('pointerMove', event, [pointer, moveVector]);

    this._dragMove(event, pointer, moveVector);
  };

  proto.dragMove = function (event, pointer, moveVector) {
    if (!this.isDraggable) {
      return;
    }

    event.preventDefault();
    this.previousDragX = this.dragX; // reverse if right-to-left

    var direction = this.options.rightToLeft ? -1 : 1;

    if (this.options.wrapAround) {
      // wrap around move. #589
      moveVector.x = moveVector.x % this.slideableWidth;
    }

    var dragX = this.dragStartPosition + moveVector.x * direction;

    if (!this.options.wrapAround && this.slides.length) {
      // slow drag
      var originBound = Math.max(-this.slides[0].target, this.dragStartPosition);
      dragX = dragX > originBound ? (dragX + originBound) * 0.5 : dragX;
      var endBound = Math.min(-this.getLastSlide().target, this.dragStartPosition);
      dragX = dragX < endBound ? (dragX + endBound) * 0.5 : dragX;
    }

    this.dragX = dragX;
    this.dragMoveTime = new Date();
    this.dispatchEvent('dragMove', event, [pointer, moveVector]);
  };

  proto.dragEnd = function (event, pointer) {
    if (!this.isDraggable) {
      return;
    }

    if (this.options.freeScroll) {
      this.isFreeScrolling = true;
    } // set selectedIndex based on where flick will end up


    var index = this.dragEndRestingSelect();

    if (this.options.freeScroll && !this.options.wrapAround) {
      // if free-scroll & not wrap around
      // do not free-scroll if going outside of bounding slides
      // so bounding slides can attract slider, and keep it in bounds
      var restingX = this.getRestingPosition();
      this.isFreeScrolling = -restingX > this.slides[0].target && -restingX < this.getLastSlide().target;
    } else if (!this.options.freeScroll && index == this.selectedIndex) {
      // boost selection if selected index has not changed
      index += this.dragEndBoostSelect();
    }

    delete this.previousDragX; // apply selection
    // TODO refactor this, selecting here feels weird
    // HACK, set flag so dragging stays in correct direction

    this.isDragSelect = this.options.wrapAround;
    this.select(index);
    delete this.isDragSelect;
    this.dispatchEvent('dragEnd', event, [pointer]);
  };

  proto.dragEndRestingSelect = function () {
    var restingX = this.getRestingPosition(); // how far away from selected slide

    var distance = Math.abs(this.getSlideDistance(-restingX, this.selectedIndex)); // get closet resting going up and going down

    var positiveResting = this._getClosestResting(restingX, distance, 1);

    var negativeResting = this._getClosestResting(restingX, distance, -1); // use closer resting for wrap-around


    var index = positiveResting.distance < negativeResting.distance ? positiveResting.index : negativeResting.index;
    return index;
  };
  /**
   * given resting X and distance to selected cell
   * get the distance and index of the closest cell
   * @param {Number} restingX - estimated post-flick resting position
   * @param {Number} distance - distance to selected cell
   * @param {Integer} increment - +1 or -1, going up or down
   * @returns {Object} - { distance: {Number}, index: {Integer} }
   */


  proto._getClosestResting = function (restingX, distance, increment) {
    var index = this.selectedIndex;
    var minDistance = Infinity;
    var condition = this.options.contain && !this.options.wrapAround ? // if contain, keep going if distance is equal to minDistance
    function (d, md) {
      return d <= md;
    } : function (d, md) {
      return d < md;
    };

    while (condition(distance, minDistance)) {
      // measure distance to next cell
      index += increment;
      minDistance = distance;
      distance = this.getSlideDistance(-restingX, index);

      if (distance === null) {
        break;
      }

      distance = Math.abs(distance);
    }

    return {
      distance: minDistance,
      // selected was previous index
      index: index - increment
    };
  };
  /**
   * measure distance between x and a slide target
   * @param {Number} x
   * @param {Integer} index - slide index
   */


  proto.getSlideDistance = function (x, index) {
    var len = this.slides.length; // wrap around if at least 2 slides

    var isWrapAround = this.options.wrapAround && len > 1;
    var slideIndex = isWrapAround ? utils.modulo(index, len) : index;
    var slide = this.slides[slideIndex];

    if (!slide) {
      return null;
    } // add distance for wrap-around slides


    var wrap = isWrapAround ? this.slideableWidth * Math.floor(index / len) : 0;
    return x - (slide.target + wrap);
  };

  proto.dragEndBoostSelect = function () {
    // do not boost if no previousDragX or dragMoveTime
    if (this.previousDragX === undefined || !this.dragMoveTime || // or if drag was held for 100 ms
    new Date() - this.dragMoveTime > 100) {
      return 0;
    }

    var distance = this.getSlideDistance(-this.dragX, this.selectedIndex);
    var delta = this.previousDragX - this.dragX;

    if (distance > 0 && delta > 0) {
      // boost to next if moving towards the right, and positive velocity
      return 1;
    } else if (distance < 0 && delta < 0) {
      // boost to previous if moving towards the left, and negative velocity
      return -1;
    }

    return 0;
  }; // ----- staticClick ----- //


  proto.staticClick = function (event, pointer) {
    // get clickedCell, if cell was clicked
    var clickedCell = this.getParentCell(event.target);
    var cellElem = clickedCell && clickedCell.element;
    var cellIndex = clickedCell && this.cells.indexOf(clickedCell);
    this.dispatchEvent('staticClick', event, [pointer, cellElem, cellIndex]);
  }; // ----- scroll ----- //


  proto.onscroll = function () {
    var scroll = getScrollPosition();
    var scrollMoveX = this.pointerDownScroll.x - scroll.x;
    var scrollMoveY = this.pointerDownScroll.y - scroll.y; // cancel click/tap if scroll is too much

    if (Math.abs(scrollMoveX) > 3 || Math.abs(scrollMoveY) > 3) {
      this._pointerDone();
    }
  }; // ----- utils ----- //


  function getScrollPosition() {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  } // -----  ----- //


  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/flickity.js":
/*!**********************************************!*\
  !*** ./node_modules/flickity/js/flickity.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity main
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"), __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"), __webpack_require__(/*! ./cell */ "./node_modules/flickity/js/cell.js"), __webpack_require__(/*! ./slide */ "./node_modules/flickity/js/slide.js"), __webpack_require__(/*! ./animate */ "./node_modules/flickity/js/animate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {
      return factory(window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var _Flickity; }
})(window, function factory(window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {
  'use strict'; // vars

  var jQuery = window.jQuery;
  var getComputedStyle = window.getComputedStyle;
  var console = window.console;

  function moveElements(elems, toElem) {
    elems = utils.makeArray(elems);

    while (elems.length) {
      toElem.appendChild(elems.shift());
    }
  } // -------------------------- Flickity -------------------------- //
  // globally unique identifiers


  var GUID = 0; // internal store of all Flickity intances

  var instances = {};

  function Flickity(element, options) {
    var queryElement = utils.getQueryElement(element);

    if (!queryElement) {
      if (console) {
        console.error('Bad element for Flickity: ' + (queryElement || element));
      }

      return;
    }

    this.element = queryElement; // do not initialize twice on same element

    if (this.element.flickityGUID) {
      var instance = instances[this.element.flickityGUID];
      instance.option(options);
      return instance;
    } // add jQuery


    if (jQuery) {
      this.$element = jQuery(this.element);
    } // options


    this.options = utils.extend({}, this.constructor.defaults);
    this.option(options); // kick things off

    this._create();
  }

  Flickity.defaults = {
    accessibility: true,
    // adaptiveHeight: false,
    cellAlign: 'center',
    // cellSelector: undefined,
    // contain: false,
    freeScrollFriction: 0.075,
    // friction when free-scrolling
    friction: 0.28,
    // friction when selecting
    namespaceJQueryEvents: true,
    // initialIndex: 0,
    percentPosition: true,
    resize: true,
    selectedAttraction: 0.025,
    setGallerySize: true // watchCSS: false,
    // wrapAround: false

  }; // hash of methods triggered on _create()

  Flickity.createMethods = [];
  var proto = Flickity.prototype; // inherit EventEmitter

  utils.extend(proto, EvEmitter.prototype);

  proto._create = function () {
    // add id for Flickity.data
    var id = this.guid = ++GUID;
    this.element.flickityGUID = id; // expando

    instances[id] = this; // associate via id
    // initial properties

    this.selectedIndex = 0; // how many frames slider has been in same position

    this.restingFrames = 0; // initial physics properties

    this.x = 0;
    this.velocity = 0;
    this.originSide = this.options.rightToLeft ? 'right' : 'left'; // create viewport & slider

    this.viewport = document.createElement('div');
    this.viewport.className = 'flickity-viewport';

    this._createSlider();

    if (this.options.resize || this.options.watchCSS) {
      window.addEventListener('resize', this);
    } // add listeners from on option


    for (var eventName in this.options.on) {
      var listener = this.options.on[eventName];
      this.on(eventName, listener);
    }

    Flickity.createMethods.forEach(function (method) {
      this[method]();
    }, this);

    if (this.options.watchCSS) {
      this.watchCSS();
    } else {
      this.activate();
    }
  };
  /**
   * set options
   * @param {Object} opts
   */


  proto.option = function (opts) {
    utils.extend(this.options, opts);
  };

  proto.activate = function () {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.element.classList.add('flickity-enabled');

    if (this.options.rightToLeft) {
      this.element.classList.add('flickity-rtl');
    }

    this.getSize(); // move initial cell elements so they can be loaded as cells

    var cellElems = this._filterFindCellElements(this.element.children);

    moveElements(cellElems, this.slider);
    this.viewport.appendChild(this.slider);
    this.element.appendChild(this.viewport); // get cells from children

    this.reloadCells();

    if (this.options.accessibility) {
      // allow element to focusable
      this.element.tabIndex = 0; // listen for key presses

      this.element.addEventListener('keydown', this);
    }

    this.emitEvent('activate');
    this.selectInitialIndex(); // flag for initial activation, for using initialIndex

    this.isInitActivated = true; // ready event. #493

    this.dispatchEvent('ready');
  }; // slider positions the cells


  proto._createSlider = function () {
    // slider element does all the positioning
    var slider = document.createElement('div');
    slider.className = 'flickity-slider';
    slider.style[this.originSide] = 0;
    this.slider = slider;
  };

  proto._filterFindCellElements = function (elems) {
    return utils.filterFindElements(elems, this.options.cellSelector);
  }; // goes through all children


  proto.reloadCells = function () {
    // collection of item elements
    this.cells = this._makeCells(this.slider.children);
    this.positionCells();

    this._getWrapShiftCells();

    this.setGallerySize();
  };
  /**
   * turn elements into Flickity.Cells
   * @param {Array or NodeList or HTMLElement} elems
   * @returns {Array} items - collection of new Flickity Cells
   */


  proto._makeCells = function (elems) {
    var cellElems = this._filterFindCellElements(elems); // create new Flickity for collection


    var cells = cellElems.map(function (cellElem) {
      return new Cell(cellElem, this);
    }, this);
    return cells;
  };

  proto.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  };

  proto.getLastSlide = function () {
    return this.slides[this.slides.length - 1];
  }; // positions all cells


  proto.positionCells = function () {
    // size all cells
    this._sizeCells(this.cells); // position all cells


    this._positionCells(0);
  };
  /**
   * position certain cells
   * @param {Integer} index - which cell to start with
   */


  proto._positionCells = function (index) {
    index = index || 0; // also measure maxCellHeight
    // start 0 if positioning all cells

    this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
    var cellX = 0; // get cellX

    if (index > 0) {
      var startCell = this.cells[index - 1];
      cellX = startCell.x + startCell.size.outerWidth;
    }

    var len = this.cells.length;

    for (var i = index; i < len; i++) {
      var cell = this.cells[i];
      cell.setPosition(cellX);
      cellX += cell.size.outerWidth;
      this.maxCellHeight = Math.max(cell.size.outerHeight, this.maxCellHeight);
    } // keep track of cellX for wrap-around


    this.slideableWidth = cellX; // slides

    this.updateSlides(); // contain slides target

    this._containSlides(); // update slidesWidth


    this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
  };
  /**
   * cell.getSize() on multiple cells
   * @param {Array} cells
   */


  proto._sizeCells = function (cells) {
    cells.forEach(function (cell) {
      cell.getSize();
    });
  }; // --------------------------  -------------------------- //


  proto.updateSlides = function () {
    this.slides = [];

    if (!this.cells.length) {
      return;
    }

    var slide = new Slide(this);
    this.slides.push(slide);
    var isOriginLeft = this.originSide == 'left';
    var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

    var canCellFit = this._getCanCellFit();

    this.cells.forEach(function (cell, i) {
      // just add cell if first cell in slide
      if (!slide.cells.length) {
        slide.addCell(cell);
        return;
      }

      var slideWidth = slide.outerWidth - slide.firstMargin + (cell.size.outerWidth - cell.size[nextMargin]);

      if (canCellFit.call(this, i, slideWidth)) {
        slide.addCell(cell);
      } else {
        // doesn't fit, new slide
        slide.updateTarget();
        slide = new Slide(this);
        this.slides.push(slide);
        slide.addCell(cell);
      }
    }, this); // last slide

    slide.updateTarget(); // update .selectedSlide

    this.updateSelectedSlide();
  };

  proto._getCanCellFit = function () {
    var groupCells = this.options.groupCells;

    if (!groupCells) {
      return function () {
        return false;
      };
    } else if (typeof groupCells == 'number') {
      // group by number. 3 -> [0,1,2], [3,4,5], ...
      var number = parseInt(groupCells, 10);
      return function (i) {
        return i % number !== 0;
      };
    } // default, group by width of slide
    // parse '75%


    var percentMatch = typeof groupCells == 'string' && groupCells.match(/^(\d+)%$/);
    var percent = percentMatch ? parseInt(percentMatch[1], 10) / 100 : 1;
    return function (i, slideWidth) {
      return slideWidth <= (this.size.innerWidth + 1) * percent;
    };
  }; // alias _init for jQuery plugin .flickity()


  proto._init = proto.reposition = function () {
    this.positionCells();
    this.positionSliderAtSelected();
  };

  proto.getSize = function () {
    this.size = getSize(this.element);
    this.setCellAlign();
    this.cursorPosition = this.size.innerWidth * this.cellAlign;
  };

  var cellAlignShorthands = {
    // cell align, then based on origin side
    center: {
      left: 0.5,
      right: 0.5
    },
    left: {
      left: 0,
      right: 1
    },
    right: {
      right: 0,
      left: 1
    }
  };

  proto.setCellAlign = function () {
    var shorthand = cellAlignShorthands[this.options.cellAlign];
    this.cellAlign = shorthand ? shorthand[this.originSide] : this.options.cellAlign;
  };

  proto.setGallerySize = function () {
    if (this.options.setGallerySize) {
      var height = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
      this.viewport.style.height = height + 'px';
    }
  };

  proto._getWrapShiftCells = function () {
    // only for wrap-around
    if (!this.options.wrapAround) {
      return;
    } // unshift previous cells


    this._unshiftCells(this.beforeShiftCells);

    this._unshiftCells(this.afterShiftCells); // get before cells
    // initial gap


    var gapX = this.cursorPosition;
    var cellIndex = this.cells.length - 1;
    this.beforeShiftCells = this._getGapCells(gapX, cellIndex, -1); // get after cells
    // ending gap between last cell and end of gallery viewport

    gapX = this.size.innerWidth - this.cursorPosition; // start cloning at first cell, working forwards

    this.afterShiftCells = this._getGapCells(gapX, 0, 1);
  };

  proto._getGapCells = function (gapX, cellIndex, increment) {
    // keep adding cells until the cover the initial gap
    var cells = [];

    while (gapX > 0) {
      var cell = this.cells[cellIndex];

      if (!cell) {
        break;
      }

      cells.push(cell);
      cellIndex += increment;
      gapX -= cell.size.outerWidth;
    }

    return cells;
  }; // ----- contain ----- //
  // contain cell targets so no excess sliding


  proto._containSlides = function () {
    if (!this.options.contain || this.options.wrapAround || !this.cells.length) {
      return;
    }

    var isRightToLeft = this.options.rightToLeft;
    var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
    var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
    var contentWidth = this.slideableWidth - this.getLastCell().size[endMargin]; // content is less than gallery size

    var isContentSmaller = contentWidth < this.size.innerWidth; // bounds

    var beginBound = this.cursorPosition + this.cells[0].size[beginMargin];
    var endBound = contentWidth - this.size.innerWidth * (1 - this.cellAlign); // contain each cell target

    this.slides.forEach(function (slide) {
      if (isContentSmaller) {
        // all cells fit inside gallery
        slide.target = contentWidth * this.cellAlign;
      } else {
        // contain to bounds
        slide.target = Math.max(slide.target, beginBound);
        slide.target = Math.min(slide.target, endBound);
      }
    }, this);
  }; // -----  ----- //

  /**
   * emits events via eventEmitter and jQuery events
   * @param {String} type - name of event
   * @param {Event} event - original event
   * @param {Array} args - extra arguments
   */


  proto.dispatchEvent = function (type, event, args) {
    var emitArgs = event ? [event].concat(args) : args;
    this.emitEvent(type, emitArgs);

    if (jQuery && this.$element) {
      // default trigger with type if no event
      type += this.options.namespaceJQueryEvents ? '.flickity' : '';
      var $event = type;

      if (event) {
        // create jQuery event
        var jQEvent = jQuery.Event(event);
        jQEvent.type = type;
        $event = jQEvent;
      }

      this.$element.trigger($event, args);
    }
  }; // -------------------------- select -------------------------- //

  /**
   * @param {Integer} index - index of the slide
   * @param {Boolean} isWrap - will wrap-around to last/first if at the end
   * @param {Boolean} isInstant - will immediately set position at selected cell
   */


  proto.select = function (index, isWrap, isInstant) {
    if (!this.isActive) {
      return;
    }

    index = parseInt(index, 10);

    this._wrapSelect(index);

    if (this.options.wrapAround || isWrap) {
      index = utils.modulo(index, this.slides.length);
    } // bail if invalid index


    if (!this.slides[index]) {
      return;
    }

    var prevIndex = this.selectedIndex;
    this.selectedIndex = index;
    this.updateSelectedSlide();

    if (isInstant) {
      this.positionSliderAtSelected();
    } else {
      this.startAnimation();
    }

    if (this.options.adaptiveHeight) {
      this.setGallerySize();
    } // events


    this.dispatchEvent('select', null, [index]); // change event if new index

    if (index != prevIndex) {
      this.dispatchEvent('change', null, [index]);
    } // old v1 event name, remove in v3


    this.dispatchEvent('cellSelect');
  }; // wraps position for wrapAround, to move to closest slide. #113


  proto._wrapSelect = function (index) {
    var len = this.slides.length;
    var isWrapping = this.options.wrapAround && len > 1;

    if (!isWrapping) {
      return index;
    }

    var wrapIndex = utils.modulo(index, len); // go to shortest

    var delta = Math.abs(wrapIndex - this.selectedIndex);
    var backWrapDelta = Math.abs(wrapIndex + len - this.selectedIndex);
    var forewardWrapDelta = Math.abs(wrapIndex - len - this.selectedIndex);

    if (!this.isDragSelect && backWrapDelta < delta) {
      index += len;
    } else if (!this.isDragSelect && forewardWrapDelta < delta) {
      index -= len;
    } // wrap position so slider is within normal area


    if (index < 0) {
      this.x -= this.slideableWidth;
    } else if (index >= len) {
      this.x += this.slideableWidth;
    }
  };

  proto.previous = function (isWrap, isInstant) {
    this.select(this.selectedIndex - 1, isWrap, isInstant);
  };

  proto.next = function (isWrap, isInstant) {
    this.select(this.selectedIndex + 1, isWrap, isInstant);
  };

  proto.updateSelectedSlide = function () {
    var slide = this.slides[this.selectedIndex]; // selectedIndex could be outside of slides, if triggered before resize()

    if (!slide) {
      return;
    } // unselect previous selected slide


    this.unselectSelectedSlide(); // update new selected slide

    this.selectedSlide = slide;
    slide.select();
    this.selectedCells = slide.cells;
    this.selectedElements = slide.getCellElements(); // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
    // Remove in v3?

    this.selectedCell = slide.cells[0];
    this.selectedElement = this.selectedElements[0];
  };

  proto.unselectSelectedSlide = function () {
    if (this.selectedSlide) {
      this.selectedSlide.unselect();
    }
  };

  proto.selectInitialIndex = function () {
    var initialIndex = this.options.initialIndex; // already activated, select previous selectedIndex

    if (this.isInitActivated) {
      this.select(this.selectedIndex, false, true);
      return;
    } // select with selector string


    if (initialIndex && typeof initialIndex == 'string') {
      var cell = this.queryCell(initialIndex);

      if (cell) {
        this.selectCell(initialIndex, false, true);
        return;
      }
    }

    var index = 0; // select with number

    if (initialIndex && this.slides[initialIndex]) {
      index = initialIndex;
    } // select instantly


    this.select(index, false, true);
  };
  /**
   * select slide from number or cell element
   * @param {Element or Number} elem
   */


  proto.selectCell = function (value, isWrap, isInstant) {
    // get cell
    var cell = this.queryCell(value);

    if (!cell) {
      return;
    }

    var index = this.getCellSlideIndex(cell);
    this.select(index, isWrap, isInstant);
  };

  proto.getCellSlideIndex = function (cell) {
    // get index of slides that has cell
    for (var i = 0; i < this.slides.length; i++) {
      var slide = this.slides[i];
      var index = slide.cells.indexOf(cell);

      if (index != -1) {
        return i;
      }
    }
  }; // -------------------------- get cells -------------------------- //

  /**
   * get Flickity.Cell, given an Element
   * @param {Element} elem
   * @returns {Flickity.Cell} item
   */


  proto.getCell = function (elem) {
    // loop through cells to get the one that matches
    for (var i = 0; i < this.cells.length; i++) {
      var cell = this.cells[i];

      if (cell.element == elem) {
        return cell;
      }
    }
  };
  /**
   * get collection of Flickity.Cells, given Elements
   * @param {Element, Array, NodeList} elems
   * @returns {Array} cells - Flickity.Cells
   */


  proto.getCells = function (elems) {
    elems = utils.makeArray(elems);
    var cells = [];
    elems.forEach(function (elem) {
      var cell = this.getCell(elem);

      if (cell) {
        cells.push(cell);
      }
    }, this);
    return cells;
  };
  /**
   * get cell elements
   * @returns {Array} cellElems
   */


  proto.getCellElements = function () {
    return this.cells.map(function (cell) {
      return cell.element;
    });
  };
  /**
   * get parent cell from an element
   * @param {Element} elem
   * @returns {Flickit.Cell} cell
   */


  proto.getParentCell = function (elem) {
    // first check if elem is cell
    var cell = this.getCell(elem);

    if (cell) {
      return cell;
    } // try to get parent cell elem


    elem = utils.getParent(elem, '.flickity-slider > *');
    return this.getCell(elem);
  };
  /**
   * get cells adjacent to a slide
   * @param {Integer} adjCount - number of adjacent slides
   * @param {Integer} index - index of slide to start
   * @returns {Array} cells - array of Flickity.Cells
   */


  proto.getAdjacentCellElements = function (adjCount, index) {
    if (!adjCount) {
      return this.selectedSlide.getCellElements();
    }

    index = index === undefined ? this.selectedIndex : index;
    var len = this.slides.length;

    if (1 + adjCount * 2 >= len) {
      return this.getCellElements();
    }

    var cellElems = [];

    for (var i = index - adjCount; i <= index + adjCount; i++) {
      var slideIndex = this.options.wrapAround ? utils.modulo(i, len) : i;
      var slide = this.slides[slideIndex];

      if (slide) {
        cellElems = cellElems.concat(slide.getCellElements());
      }
    }

    return cellElems;
  };
  /**
   * select slide from number or cell element
   * @param {Element, Selector String, or Number} selector
   */


  proto.queryCell = function (selector) {
    if (typeof selector == 'number') {
      // use number as index
      return this.cells[selector];
    }

    if (typeof selector == 'string') {
      // do not select invalid selectors from hash: #123, #/. #791
      if (selector.match(/^[#\.]?[\d\/]/)) {
        return;
      } // use string as selector, get element


      selector = this.element.querySelector(selector);
    } // get cell from element


    return this.getCell(selector);
  }; // -------------------------- events -------------------------- //


  proto.uiChange = function () {
    this.emitEvent('uiChange');
  }; // keep focus on element when child UI elements are clicked


  proto.childUIPointerDown = function (event) {
    // HACK iOS does not allow touch events to bubble up?!
    if (event.type != 'touchstart') {
      event.preventDefault();
    }

    this.focus();
  }; // ----- resize ----- //


  proto.onresize = function () {
    this.watchCSS();
    this.resize();
  };

  utils.debounceMethod(Flickity, 'onresize', 150);

  proto.resize = function () {
    if (!this.isActive) {
      return;
    }

    this.getSize(); // wrap values

    if (this.options.wrapAround) {
      this.x = utils.modulo(this.x, this.slideableWidth);
    }

    this.positionCells();

    this._getWrapShiftCells();

    this.setGallerySize();
    this.emitEvent('resize'); // update selected index for group slides, instant
    // TODO: position can be lost between groups of various numbers

    var selectedElement = this.selectedElements && this.selectedElements[0];
    this.selectCell(selectedElement, false, true);
  }; // watches the :after property, activates/deactivates


  proto.watchCSS = function () {
    var watchOption = this.options.watchCSS;

    if (!watchOption) {
      return;
    }

    var afterContent = getComputedStyle(this.element, ':after').content; // activate if :after { content: 'flickity' }

    if (afterContent.indexOf('flickity') != -1) {
      this.activate();
    } else {
      this.deactivate();
    }
  }; // ----- keydown ----- //
  // go previous/next if left/right keys pressed


  proto.onkeydown = function (event) {
    // only work if element is in focus
    var isNotFocused = document.activeElement && document.activeElement != this.element;

    if (!this.options.accessibility || isNotFocused) {
      return;
    }

    var handler = Flickity.keyboardHandlers[event.keyCode];

    if (handler) {
      handler.call(this);
    }
  };

  Flickity.keyboardHandlers = {
    // left arrow
    37: function () {
      var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
      this.uiChange();
      this[leftMethod]();
    },
    // right arrow
    39: function () {
      var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
      this.uiChange();
      this[rightMethod]();
    }
  }; // ----- focus ----- //

  proto.focus = function () {
    // TODO remove scrollTo once focus options gets more support
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Browser_compatibility
    var prevScrollY = window.pageYOffset;
    this.element.focus({
      preventScroll: true
    }); // hack to fix scroll jump after focus, #76

    if (window.pageYOffset != prevScrollY) {
      window.scrollTo(window.pageXOffset, prevScrollY);
    }
  }; // -------------------------- destroy -------------------------- //
  // deactivate all Flickity functionality, but keep stuff available


  proto.deactivate = function () {
    if (!this.isActive) {
      return;
    }

    this.element.classList.remove('flickity-enabled');
    this.element.classList.remove('flickity-rtl');
    this.unselectSelectedSlide(); // destroy cells

    this.cells.forEach(function (cell) {
      cell.destroy();
    });
    this.element.removeChild(this.viewport); // move child elements back into element

    moveElements(this.slider.children, this.element);

    if (this.options.accessibility) {
      this.element.removeAttribute('tabIndex');
      this.element.removeEventListener('keydown', this);
    } // set flags


    this.isActive = false;
    this.emitEvent('deactivate');
  };

  proto.destroy = function () {
    this.deactivate();
    window.removeEventListener('resize', this);
    this.allOff();
    this.emitEvent('destroy');

    if (jQuery && this.$element) {
      jQuery.removeData(this.element, 'flickity');
    }

    delete this.element.flickityGUID;
    delete instances[this.guid];
  }; // -------------------------- prototype -------------------------- //


  utils.extend(proto, animatePrototype); // -------------------------- extras -------------------------- //

  /**
   * get Flickity instance from element
   * @param {Element} elem
   * @returns {Flickity}
   */

  Flickity.data = function (elem) {
    elem = utils.getQueryElement(elem);
    var id = elem && elem.flickityGUID;
    return id && instances[id];
  };

  utils.htmlInit(Flickity, 'flickity');

  if (jQuery && jQuery.bridget) {
    jQuery.bridget('flickity', Flickity);
  } // set internal jQuery, for Webpack + jQuery v3, #478


  Flickity.setJQuery = function (jq) {
    jQuery = jq;
  };

  Flickity.Cell = Cell;
  Flickity.Slide = Slide;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/index.js":
/*!*******************************************!*\
  !*** ./node_modules/flickity/js/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Flickity v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! ./drag */ "./node_modules/flickity/js/drag.js"), __webpack_require__(/*! ./prev-next-button */ "./node_modules/flickity/js/prev-next-button.js"), __webpack_require__(/*! ./page-dots */ "./node_modules/flickity/js/page-dots.js"), __webpack_require__(/*! ./player */ "./node_modules/flickity/js/player.js"), __webpack_require__(/*! ./add-remove-cell */ "./node_modules/flickity/js/add-remove-cell.js"), __webpack_require__(/*! ./lazyload */ "./node_modules/flickity/js/lazyload.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(Flickity) {
  /*jshint strict: false*/
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/lazyload.js":
/*!**********************************************!*\
  !*** ./node_modules/flickity/js/lazyload.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// lazyload
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, utils) {
      return factory(window, Flickity, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, utils) {
  'use strict';

  Flickity.createMethods.push('_createLazyload');
  var proto = Flickity.prototype;

  proto._createLazyload = function () {
    this.on('select', this.lazyLoad);
  };

  proto.lazyLoad = function () {
    var lazyLoad = this.options.lazyLoad;

    if (!lazyLoad) {
      return;
    } // get adjacent cells, use lazyLoad option for adjacent count


    var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
    var cellElems = this.getAdjacentCellElements(adjCount); // get lazy images in those cells

    var lazyImages = [];
    cellElems.forEach(function (cellElem) {
      var lazyCellImages = getCellLazyImages(cellElem);
      lazyImages = lazyImages.concat(lazyCellImages);
    }); // load lazy images

    lazyImages.forEach(function (img) {
      new LazyLoader(img, this);
    }, this);
  };

  function getCellLazyImages(cellElem) {
    // check if cell element is lazy image
    if (cellElem.nodeName == 'IMG') {
      var lazyloadAttr = cellElem.getAttribute('data-flickity-lazyload');
      var srcAttr = cellElem.getAttribute('data-flickity-lazyload-src');
      var srcsetAttr = cellElem.getAttribute('data-flickity-lazyload-srcset');

      if (lazyloadAttr || srcAttr || srcsetAttr) {
        return [cellElem];
      }
    } // select lazy images in cell


    var lazySelector = 'img[data-flickity-lazyload], ' + 'img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]';
    var imgs = cellElem.querySelectorAll(lazySelector);
    return utils.makeArray(imgs);
  } // -------------------------- LazyLoader -------------------------- //

  /**
   * class to handle loading images
   */


  function LazyLoader(img, flickity) {
    this.img = img;
    this.flickity = flickity;
    this.load();
  }

  LazyLoader.prototype.handleEvent = utils.handleEvent;

  LazyLoader.prototype.load = function () {
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this); // get src & srcset

    var src = this.img.getAttribute('data-flickity-lazyload') || this.img.getAttribute('data-flickity-lazyload-src');
    var srcset = this.img.getAttribute('data-flickity-lazyload-srcset'); // set src & serset

    this.img.src = src;

    if (srcset) {
      this.img.setAttribute('srcset', srcset);
    } // remove attr


    this.img.removeAttribute('data-flickity-lazyload');
    this.img.removeAttribute('data-flickity-lazyload-src');
    this.img.removeAttribute('data-flickity-lazyload-srcset');
  };

  LazyLoader.prototype.onload = function (event) {
    this.complete(event, 'flickity-lazyloaded');
  };

  LazyLoader.prototype.onerror = function (event) {
    this.complete(event, 'flickity-lazyerror');
  };

  LazyLoader.prototype.complete = function (event, className) {
    // unbind events
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
    var cell = this.flickity.getParentCell(this.img);
    var cellElem = cell && cell.element;
    this.flickity.cellSizeChange(cellElem);
    this.img.classList.add(className);
    this.flickity.dispatchEvent('lazyLoad', event, cellElem);
  }; // -----  ----- //


  Flickity.LazyLoader = LazyLoader;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/page-dots.js":
/*!***********************************************!*\
  !*** ./node_modules/flickity/js/page-dots.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// page dots
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! unipointer/unipointer */ "./node_modules/unipointer/unipointer.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, Unipointer, utils) {
      return factory(window, Flickity, Unipointer, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, Unipointer, utils) {
  // -------------------------- PageDots -------------------------- //
  'use strict';

  function PageDots(parent) {
    this.parent = parent;

    this._create();
  }

  PageDots.prototype = Object.create(Unipointer.prototype);

  PageDots.prototype._create = function () {
    // create holder element
    this.holder = document.createElement('ol');
    this.holder.className = 'flickity-page-dots'; // create dots, array of elements

    this.dots = []; // events

    this.handleClick = this.onClick.bind(this);
    this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
  };

  PageDots.prototype.activate = function () {
    this.setDots();
    this.holder.addEventListener('click', this.handleClick);
    this.bindStartEvent(this.holder); // add to DOM

    this.parent.element.appendChild(this.holder);
  };

  PageDots.prototype.deactivate = function () {
    this.holder.removeEventListener('click', this.handleClick);
    this.unbindStartEvent(this.holder); // remove from DOM

    this.parent.element.removeChild(this.holder);
  };

  PageDots.prototype.setDots = function () {
    // get difference between number of slides and number of dots
    var delta = this.parent.slides.length - this.dots.length;

    if (delta > 0) {
      this.addDots(delta);
    } else if (delta < 0) {
      this.removeDots(-delta);
    }
  };

  PageDots.prototype.addDots = function (count) {
    var fragment = document.createDocumentFragment();
    var newDots = [];
    var length = this.dots.length;
    var max = length + count;

    for (var i = length; i < max; i++) {
      var dot = document.createElement('li');
      dot.className = 'dot';
      dot.setAttribute('aria-label', 'Page dot ' + (i + 1));
      fragment.appendChild(dot);
      newDots.push(dot);
    }

    this.holder.appendChild(fragment);
    this.dots = this.dots.concat(newDots);
  };

  PageDots.prototype.removeDots = function (count) {
    // remove from this.dots collection
    var removeDots = this.dots.splice(this.dots.length - count, count); // remove from DOM

    removeDots.forEach(function (dot) {
      this.holder.removeChild(dot);
    }, this);
  };

  PageDots.prototype.updateSelected = function () {
    // remove selected class on previous
    if (this.selectedDot) {
      this.selectedDot.className = 'dot';
      this.selectedDot.removeAttribute('aria-current');
    } // don't proceed if no dots


    if (!this.dots.length) {
      return;
    }

    this.selectedDot = this.dots[this.parent.selectedIndex];
    this.selectedDot.className = 'dot is-selected';
    this.selectedDot.setAttribute('aria-current', 'step');
  };

  PageDots.prototype.onTap = // old method name, backwards-compatible
  PageDots.prototype.onClick = function (event) {
    var target = event.target; // only care about dot clicks

    if (target.nodeName != 'LI') {
      return;
    }

    this.parent.uiChange();
    var index = this.dots.indexOf(target);
    this.parent.select(index);
  };

  PageDots.prototype.destroy = function () {
    this.deactivate();
    this.allOff();
  };

  Flickity.PageDots = PageDots; // -------------------------- Flickity -------------------------- //

  utils.extend(Flickity.defaults, {
    pageDots: true
  });
  Flickity.createMethods.push('_createPageDots');
  var proto = Flickity.prototype;

  proto._createPageDots = function () {
    if (!this.options.pageDots) {
      return;
    }

    this.pageDots = new PageDots(this); // events

    this.on('activate', this.activatePageDots);
    this.on('select', this.updateSelectedPageDots);
    this.on('cellChange', this.updatePageDots);
    this.on('resize', this.updatePageDots);
    this.on('deactivate', this.deactivatePageDots);
  };

  proto.activatePageDots = function () {
    this.pageDots.activate();
  };

  proto.updateSelectedPageDots = function () {
    this.pageDots.updateSelected();
  };

  proto.updatePageDots = function () {
    this.pageDots.setDots();
  };

  proto.deactivatePageDots = function () {
    this.pageDots.deactivate();
  }; // -----  ----- //


  Flickity.PageDots = PageDots;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/player.js":
/*!********************************************!*\
  !*** ./node_modules/flickity/js/player.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// player & autoPlay
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"), __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter, utils, Flickity) {
      return factory(EvEmitter, utils, Flickity);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(EvEmitter, utils, Flickity) {
  'use strict'; // -------------------------- Player -------------------------- //

  function Player(parent) {
    this.parent = parent;
    this.state = 'stopped'; // visibility change event handler

    this.onVisibilityChange = this.visibilityChange.bind(this);
    this.onVisibilityPlay = this.visibilityPlay.bind(this);
  }

  Player.prototype = Object.create(EvEmitter.prototype); // start play

  Player.prototype.play = function () {
    if (this.state == 'playing') {
      return;
    } // do not play if page is hidden, start playing when page is visible


    var isPageHidden = document.hidden;

    if (isPageHidden) {
      document.addEventListener('visibilitychange', this.onVisibilityPlay);
      return;
    }

    this.state = 'playing'; // listen to visibility change

    document.addEventListener('visibilitychange', this.onVisibilityChange); // start ticking

    this.tick();
  };

  Player.prototype.tick = function () {
    // do not tick if not playing
    if (this.state != 'playing') {
      return;
    }

    var time = this.parent.options.autoPlay; // default to 3 seconds

    time = typeof time == 'number' ? time : 3000;

    var _this = this; // HACK: reset ticks if stopped and started within interval


    this.clear();
    this.timeout = setTimeout(function () {
      _this.parent.next(true);

      _this.tick();
    }, time);
  };

  Player.prototype.stop = function () {
    this.state = 'stopped';
    this.clear(); // remove visibility change event

    document.removeEventListener('visibilitychange', this.onVisibilityChange);
  };

  Player.prototype.clear = function () {
    clearTimeout(this.timeout);
  };

  Player.prototype.pause = function () {
    if (this.state == 'playing') {
      this.state = 'paused';
      this.clear();
    }
  };

  Player.prototype.unpause = function () {
    // re-start play if paused
    if (this.state == 'paused') {
      this.play();
    }
  }; // pause if page visibility is hidden, unpause if visible


  Player.prototype.visibilityChange = function () {
    var isPageHidden = document.hidden;
    this[isPageHidden ? 'pause' : 'unpause']();
  };

  Player.prototype.visibilityPlay = function () {
    this.play();
    document.removeEventListener('visibilitychange', this.onVisibilityPlay);
  }; // -------------------------- Flickity -------------------------- //


  utils.extend(Flickity.defaults, {
    pauseAutoPlayOnHover: true
  });
  Flickity.createMethods.push('_createPlayer');
  var proto = Flickity.prototype;

  proto._createPlayer = function () {
    this.player = new Player(this);
    this.on('activate', this.activatePlayer);
    this.on('uiChange', this.stopPlayer);
    this.on('pointerDown', this.stopPlayer);
    this.on('deactivate', this.deactivatePlayer);
  };

  proto.activatePlayer = function () {
    if (!this.options.autoPlay) {
      return;
    }

    this.player.play();
    this.element.addEventListener('mouseenter', this);
  }; // Player API, don't hate the ... thanks I know where the door is


  proto.playPlayer = function () {
    this.player.play();
  };

  proto.stopPlayer = function () {
    this.player.stop();
  };

  proto.pausePlayer = function () {
    this.player.pause();
  };

  proto.unpausePlayer = function () {
    this.player.unpause();
  };

  proto.deactivatePlayer = function () {
    this.player.stop();
    this.element.removeEventListener('mouseenter', this);
  }; // ----- mouseenter/leave ----- //
  // pause auto-play on hover


  proto.onmouseenter = function () {
    if (!this.options.pauseAutoPlayOnHover) {
      return;
    }

    this.player.pause();
    this.element.addEventListener('mouseleave', this);
  }; // resume auto-play on hover off


  proto.onmouseleave = function () {
    this.player.unpause();
    this.element.removeEventListener('mouseleave', this);
  }; // -----  ----- //


  Flickity.Player = Player;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/prev-next-button.js":
/*!******************************************************!*\
  !*** ./node_modules/flickity/js/prev-next-button.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// prev/next buttons
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! unipointer/unipointer */ "./node_modules/unipointer/unipointer.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, Unipointer, utils) {
      return factory(window, Flickity, Unipointer, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, Unipointer, utils) {
  'use strict';

  var svgURI = 'http://www.w3.org/2000/svg'; // -------------------------- PrevNextButton -------------------------- //

  function PrevNextButton(direction, parent) {
    this.direction = direction;
    this.parent = parent;

    this._create();
  }

  PrevNextButton.prototype = Object.create(Unipointer.prototype);

  PrevNextButton.prototype._create = function () {
    // properties
    this.isEnabled = true;
    this.isPrevious = this.direction == -1;
    var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
    this.isLeft = this.direction == leftDirection;
    var element = this.element = document.createElement('button');
    element.className = 'flickity-button flickity-prev-next-button';
    element.className += this.isPrevious ? ' previous' : ' next'; // prevent button from submitting form http://stackoverflow.com/a/10836076/182183

    element.setAttribute('type', 'button'); // init as disabled

    this.disable();
    element.setAttribute('aria-label', this.isPrevious ? 'Previous' : 'Next'); // create arrow

    var svg = this.createSVG();
    element.appendChild(svg); // events

    this.parent.on('select', this.update.bind(this));
    this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
  };

  PrevNextButton.prototype.activate = function () {
    this.bindStartEvent(this.element);
    this.element.addEventListener('click', this); // add to DOM

    this.parent.element.appendChild(this.element);
  };

  PrevNextButton.prototype.deactivate = function () {
    // remove from DOM
    this.parent.element.removeChild(this.element); // click events

    this.unbindStartEvent(this.element);
    this.element.removeEventListener('click', this);
  };

  PrevNextButton.prototype.createSVG = function () {
    var svg = document.createElementNS(svgURI, 'svg');
    svg.setAttribute('class', 'flickity-button-icon');
    svg.setAttribute('viewBox', '0 0 100 100');
    var path = document.createElementNS(svgURI, 'path');
    var pathMovements = getArrowMovements(this.parent.options.arrowShape);
    path.setAttribute('d', pathMovements);
    path.setAttribute('class', 'arrow'); // rotate arrow

    if (!this.isLeft) {
      path.setAttribute('transform', 'translate(100, 100) rotate(180) ');
    }

    svg.appendChild(path);
    return svg;
  }; // get SVG path movmement


  function getArrowMovements(shape) {
    // use shape as movement if string
    if (typeof shape == 'string') {
      return shape;
    } // create movement string


    return 'M ' + shape.x0 + ',50' + ' L ' + shape.x1 + ',' + (shape.y1 + 50) + ' L ' + shape.x2 + ',' + (shape.y2 + 50) + ' L ' + shape.x3 + ',50 ' + ' L ' + shape.x2 + ',' + (50 - shape.y2) + ' L ' + shape.x1 + ',' + (50 - shape.y1) + ' Z';
  }

  PrevNextButton.prototype.handleEvent = utils.handleEvent;

  PrevNextButton.prototype.onclick = function () {
    if (!this.isEnabled) {
      return;
    }

    this.parent.uiChange();
    var method = this.isPrevious ? 'previous' : 'next';
    this.parent[method]();
  }; // -----  ----- //


  PrevNextButton.prototype.enable = function () {
    if (this.isEnabled) {
      return;
    }

    this.element.disabled = false;
    this.isEnabled = true;
  };

  PrevNextButton.prototype.disable = function () {
    if (!this.isEnabled) {
      return;
    }

    this.element.disabled = true;
    this.isEnabled = false;
  };

  PrevNextButton.prototype.update = function () {
    // index of first or last slide, if previous or next
    var slides = this.parent.slides; // enable is wrapAround and at least 2 slides

    if (this.parent.options.wrapAround && slides.length > 1) {
      this.enable();
      return;
    }

    var lastIndex = slides.length ? slides.length - 1 : 0;
    var boundIndex = this.isPrevious ? 0 : lastIndex;
    var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
    this[method]();
  };

  PrevNextButton.prototype.destroy = function () {
    this.deactivate();
    this.allOff();
  }; // -------------------------- Flickity prototype -------------------------- //


  utils.extend(Flickity.defaults, {
    prevNextButtons: true,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 70,
      y2: 40,
      x3: 30
    }
  });
  Flickity.createMethods.push('_createPrevNextButtons');
  var proto = Flickity.prototype;

  proto._createPrevNextButtons = function () {
    if (!this.options.prevNextButtons) {
      return;
    }

    this.prevButton = new PrevNextButton(-1, this);
    this.nextButton = new PrevNextButton(1, this);
    this.on('activate', this.activatePrevNextButtons);
  };

  proto.activatePrevNextButtons = function () {
    this.prevButton.activate();
    this.nextButton.activate();
    this.on('deactivate', this.deactivatePrevNextButtons);
  };

  proto.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate();
    this.nextButton.deactivate();
    this.off('deactivate', this.deactivatePrevNextButtons);
  }; // --------------------------  -------------------------- //


  Flickity.PrevNextButton = PrevNextButton;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/slide.js":
/*!*******************************************!*\
  !*** ./node_modules/flickity/js/slide.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// slide
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory() {
  'use strict';

  function Slide(parent) {
    this.parent = parent;
    this.isOriginLeft = parent.originSide == 'left';
    this.cells = [];
    this.outerWidth = 0;
    this.height = 0;
  }

  var proto = Slide.prototype;

  proto.addCell = function (cell) {
    this.cells.push(cell);
    this.outerWidth += cell.size.outerWidth;
    this.height = Math.max(cell.size.outerHeight, this.height); // first cell stuff

    if (this.cells.length == 1) {
      this.x = cell.x; // x comes from first cell

      var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
      this.firstMargin = cell.size[beginMargin];
    }
  };

  proto.updateTarget = function () {
    var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
    var lastCell = this.getLastCell();
    var lastMargin = lastCell ? lastCell.size[endMargin] : 0;
    var slideWidth = this.outerWidth - (this.firstMargin + lastMargin);
    this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
  };

  proto.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  };

  proto.select = function () {
    this.cells.forEach(function (cell) {
      cell.select();
    });
  };

  proto.unselect = function () {
    this.cells.forEach(function (cell) {
      cell.unselect();
    });
  };

  proto.getCellElements = function () {
    return this.cells.map(function (cell) {
      return cell.element;
    });
  };

  return Slide;
});

/***/ }),

/***/ "./node_modules/get-size/get-size.js":
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

/* globals console: false */
(function (window, factory) {
  /* jshint strict: false */

  /* globals define, module */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory() {
  'use strict'; // -------------------------- helpers -------------------------- //
  // get a number from a string, not a percentage

  function getStyleSize(value) {
    var num = parseFloat(value); // not a percent like '100%', and a number

    var isValid = value.indexOf('%') == -1 && !isNaN(num);
    return isValid && num;
  }

  function noop() {}

  var logError = typeof console == 'undefined' ? noop : function (message) {
    console.error(message);
  }; // -------------------------- measurements -------------------------- //

  var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
  var measurementsLength = measurements.length;

  function getZeroSize() {
    var size = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    };

    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      size[measurement] = 0;
    }

    return size;
  } // -------------------------- getStyle -------------------------- //

  /**
   * getStyle, get style of element, check for Firefox bug
   * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
   */


  function getStyle(elem) {
    var style = getComputedStyle(elem);

    if (!style) {
      logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
    }

    return style;
  } // -------------------------- setup -------------------------- //


  var isSetup = false;
  var isBoxSizeOuter;
  /**
   * setup
   * check isBoxSizerOuter
   * do on first getSize() rather than on page load for Firefox bug
   */

  function setup() {
    // setup once
    if (isSetup) {
      return;
    }

    isSetup = true; // -------------------------- box sizing -------------------------- //

    /**
     * Chrome & Safari measure the outer-width on style.width on border-box elems
     * IE11 & Firefox<29 measures the inner-width
     */

    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style.boxSizing = 'border-box';
    var body = document.body || document.documentElement;
    body.appendChild(div);
    var style = getStyle(div); // round value for browser zoom. desandro/masonry#928

    isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
    getSize.isBoxSizeOuter = isBoxSizeOuter;
    body.removeChild(div);
  } // -------------------------- getSize -------------------------- //


  function getSize(elem) {
    setup(); // use querySeletor if elem is string

    if (typeof elem == 'string') {
      elem = document.querySelector(elem);
    } // do not proceed on non-objects


    if (!elem || typeof elem != 'object' || !elem.nodeType) {
      return;
    }

    var style = getStyle(elem); // if hidden, everything is 0

    if (style.display == 'none') {
      return getZeroSize();
    }

    var size = {};
    size.width = elem.offsetWidth;
    size.height = elem.offsetHeight;
    var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box'; // get all measurements

    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      var value = style[measurement];
      var num = parseFloat(value); // any 'auto', 'medium' value will be 0

      size[measurement] = !isNaN(num) ? num : 0;
    }

    var paddingWidth = size.paddingLeft + size.paddingRight;
    var paddingHeight = size.paddingTop + size.paddingBottom;
    var marginWidth = size.marginLeft + size.marginRight;
    var marginHeight = size.marginTop + size.marginBottom;
    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
    var borderHeight = size.borderTopWidth + size.borderBottomWidth;
    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter; // overwrite width and height if we can get it from style

    var styleWidth = getStyleSize(style.width);

    if (styleWidth !== false) {
      size.width = styleWidth + ( // add padding and border unless it's already including it
      isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
    }

    var styleHeight = getStyleSize(style.height);

    if (styleHeight !== false) {
      size.height = styleHeight + ( // add padding and border unless it's already including it
      isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
    }

    size.innerWidth = size.width - (paddingWidth + borderWidth);
    size.innerHeight = size.height - (paddingHeight + borderHeight);
    size.outerWidth = size.width + marginWidth;
    size.outerHeight = size.height + marginHeight;
    return size;
  }

  return getSize;
});

/***/ }),

/***/ "./node_modules/unidragger/unidragger.js":
/*!***********************************************!*\
  !*** ./node_modules/unidragger/unidragger.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unidragger v2.3.1
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */
(function (window, factory) {
  // universal module definition

  /*jshint strict: false */

  /*globals define, module, require */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! unipointer/unipointer */ "./node_modules/unipointer/unipointer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Unipointer) {
      return factory(window, Unipointer);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Unipointer) {
  'use strict'; // -------------------------- Unidragger -------------------------- //

  function Unidragger() {} // inherit Unipointer & EvEmitter


  var proto = Unidragger.prototype = Object.create(Unipointer.prototype); // ----- bind start ----- //

  proto.bindHandles = function () {
    this._bindHandles(true);
  };

  proto.unbindHandles = function () {
    this._bindHandles(false);
  };
  /**
   * Add or remove start event
   * @param {Boolean} isAdd
   */


  proto._bindHandles = function (isAdd) {
    // munge isAdd, default to true
    isAdd = isAdd === undefined ? true : isAdd; // bind each handle

    var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
    var touchAction = isAdd ? this._touchActionValue : '';

    for (var i = 0; i < this.handles.length; i++) {
      var handle = this.handles[i];

      this._bindStartEvent(handle, isAdd);

      handle[bindMethod]('click', this); // touch-action: none to override browser touch gestures. metafizzy/flickity#540

      if (window.PointerEvent) {
        handle.style.touchAction = touchAction;
      }
    }
  }; // prototype so it can be overwriteable by Flickity


  proto._touchActionValue = 'none'; // ----- start event ----- //

  /**
   * pointer start
   * @param {Event} event
   * @param {Event or Touch} pointer
   */

  proto.pointerDown = function (event, pointer) {
    var isOkay = this.okayPointerDown(event);

    if (!isOkay) {
      return;
    } // track start event position
    // Safari 9 overrides pageX and pageY. These values needs to be copied. flickity#842


    this.pointerDownPointer = {
      pageX: pointer.pageX,
      pageY: pointer.pageY
    };
    event.preventDefault();
    this.pointerDownBlur(); // bind move and end events

    this._bindPostStartEvents(event);

    this.emitEvent('pointerDown', [event, pointer]);
  }; // nodes that have text fields


  var cursorNodes = {
    TEXTAREA: true,
    INPUT: true,
    SELECT: true,
    OPTION: true
  }; // input types that do not have text fields

  var clickTypes = {
    radio: true,
    checkbox: true,
    button: true,
    submit: true,
    image: true,
    file: true
  }; // dismiss inputs with text fields. flickity#403, flickity#404

  proto.okayPointerDown = function (event) {
    var isCursorNode = cursorNodes[event.target.nodeName];
    var isClickType = clickTypes[event.target.type];
    var isOkay = !isCursorNode || isClickType;

    if (!isOkay) {
      this._pointerReset();
    }

    return isOkay;
  }; // kludge to blur previously focused input


  proto.pointerDownBlur = function () {
    var focused = document.activeElement; // do not blur body for IE10, metafizzy/flickity#117

    var canBlur = focused && focused.blur && focused != document.body;

    if (canBlur) {
      focused.blur();
    }
  }; // ----- move event ----- //

  /**
   * drag move
   * @param {Event} event
   * @param {Event or Touch} pointer
   */


  proto.pointerMove = function (event, pointer) {
    var moveVector = this._dragPointerMove(event, pointer);

    this.emitEvent('pointerMove', [event, pointer, moveVector]);

    this._dragMove(event, pointer, moveVector);
  }; // base pointer move logic


  proto._dragPointerMove = function (event, pointer) {
    var moveVector = {
      x: pointer.pageX - this.pointerDownPointer.pageX,
      y: pointer.pageY - this.pointerDownPointer.pageY
    }; // start drag if pointer has moved far enough to start drag

    if (!this.isDragging && this.hasDragStarted(moveVector)) {
      this._dragStart(event, pointer);
    }

    return moveVector;
  }; // condition if pointer has moved far enough to start drag


  proto.hasDragStarted = function (moveVector) {
    return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
  }; // ----- end event ----- //

  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   */


  proto.pointerUp = function (event, pointer) {
    this.emitEvent('pointerUp', [event, pointer]);

    this._dragPointerUp(event, pointer);
  };

  proto._dragPointerUp = function (event, pointer) {
    if (this.isDragging) {
      this._dragEnd(event, pointer);
    } else {
      // pointer didn't move enough for drag to start
      this._staticClick(event, pointer);
    }
  }; // -------------------------- drag -------------------------- //
  // dragStart


  proto._dragStart = function (event, pointer) {
    this.isDragging = true; // prevent clicks

    this.isPreventingClicks = true;
    this.dragStart(event, pointer);
  };

  proto.dragStart = function (event, pointer) {
    this.emitEvent('dragStart', [event, pointer]);
  }; // dragMove


  proto._dragMove = function (event, pointer, moveVector) {
    // do not drag if not dragging yet
    if (!this.isDragging) {
      return;
    }

    this.dragMove(event, pointer, moveVector);
  };

  proto.dragMove = function (event, pointer, moveVector) {
    event.preventDefault();
    this.emitEvent('dragMove', [event, pointer, moveVector]);
  }; // dragEnd


  proto._dragEnd = function (event, pointer) {
    // set flags
    this.isDragging = false; // re-enable clicking async

    setTimeout(function () {
      delete this.isPreventingClicks;
    }.bind(this));
    this.dragEnd(event, pointer);
  };

  proto.dragEnd = function (event, pointer) {
    this.emitEvent('dragEnd', [event, pointer]);
  }; // ----- onclick ----- //
  // handle all clicks and prevent clicks when dragging


  proto.onclick = function (event) {
    if (this.isPreventingClicks) {
      event.preventDefault();
    }
  }; // ----- staticClick ----- //
  // triggered after pointer down & up with no/tiny movement


  proto._staticClick = function (event, pointer) {
    // ignore emulated mouse up clicks
    if (this.isIgnoringMouseUp && event.type == 'mouseup') {
      return;
    }

    this.staticClick(event, pointer); // set flag for emulated clicks 300ms after touchend

    if (event.type != 'mouseup') {
      this.isIgnoringMouseUp = true; // reset flag after 300ms

      setTimeout(function () {
        delete this.isIgnoringMouseUp;
      }.bind(this), 400);
    }
  };

  proto.staticClick = function (event, pointer) {
    this.emitEvent('staticClick', [event, pointer]);
  }; // ----- utils ----- //


  Unidragger.getPointerPoint = Unipointer.getPointerPoint; // -----  ----- //

  return Unidragger;
});

/***/ }),

/***/ "./node_modules/unipointer/unipointer.js":
/*!***********************************************!*\
  !*** ./node_modules/unipointer/unipointer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */

  /*global define, module, require */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter) {
      return factory(window, EvEmitter);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, EvEmitter) {
  'use strict';

  function noop() {}

  function Unipointer() {} // inherit EvEmitter


  var proto = Unipointer.prototype = Object.create(EvEmitter.prototype);

  proto.bindStartEvent = function (elem) {
    this._bindStartEvent(elem, true);
  };

  proto.unbindStartEvent = function (elem) {
    this._bindStartEvent(elem, false);
  };
  /**
   * Add or remove start event
   * @param {Boolean} isAdd - remove if falsey
   */


  proto._bindStartEvent = function (elem, isAdd) {
    // munge isAdd, default to true
    isAdd = isAdd === undefined ? true : isAdd;
    var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener'; // default to mouse events

    var startEvent = 'mousedown';

    if (window.PointerEvent) {
      // Pointer Events
      startEvent = 'pointerdown';
    } else if ('ontouchstart' in window) {
      // Touch Events. iOS Safari
      startEvent = 'touchstart';
    }

    elem[bindMethod](startEvent, this);
  }; // trigger handler methods for events


  proto.handleEvent = function (event) {
    var method = 'on' + event.type;

    if (this[method]) {
      this[method](event);
    }
  }; // returns the touch that we're keeping track of


  proto.getTouch = function (touches) {
    for (var i = 0; i < touches.length; i++) {
      var touch = touches[i];

      if (touch.identifier == this.pointerIdentifier) {
        return touch;
      }
    }
  }; // ----- start event ----- //


  proto.onmousedown = function (event) {
    // dismiss clicks from right or middle buttons
    var button = event.button;

    if (button && button !== 0 && button !== 1) {
      return;
    }

    this._pointerDown(event, event);
  };

  proto.ontouchstart = function (event) {
    this._pointerDown(event, event.changedTouches[0]);
  };

  proto.onpointerdown = function (event) {
    this._pointerDown(event, event);
  };
  /**
   * pointer start
   * @param {Event} event
   * @param {Event or Touch} pointer
   */


  proto._pointerDown = function (event, pointer) {
    // dismiss right click and other pointers
    // button = 0 is okay, 1-4 not
    if (event.button || this.isPointerDown) {
      return;
    }

    this.isPointerDown = true; // save pointer identifier to match up touch events

    this.pointerIdentifier = pointer.pointerId !== undefined ? // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;
    this.pointerDown(event, pointer);
  };

  proto.pointerDown = function (event, pointer) {
    this._bindPostStartEvents(event);

    this.emitEvent('pointerDown', [event, pointer]);
  }; // hash of events to be bound after start event


  var postStartEvents = {
    mousedown: ['mousemove', 'mouseup'],
    touchstart: ['touchmove', 'touchend', 'touchcancel'],
    pointerdown: ['pointermove', 'pointerup', 'pointercancel']
  };

  proto._bindPostStartEvents = function (event) {
    if (!event) {
      return;
    } // get proper events to match start event


    var events = postStartEvents[event.type]; // bind events to node

    events.forEach(function (eventName) {
      window.addEventListener(eventName, this);
    }, this); // save these arguments

    this._boundPointerEvents = events;
  };

  proto._unbindPostStartEvents = function () {
    // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
    if (!this._boundPointerEvents) {
      return;
    }

    this._boundPointerEvents.forEach(function (eventName) {
      window.removeEventListener(eventName, this);
    }, this);

    delete this._boundPointerEvents;
  }; // ----- move event ----- //


  proto.onmousemove = function (event) {
    this._pointerMove(event, event);
  };

  proto.onpointermove = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerMove(event, event);
    }
  };

  proto.ontouchmove = function (event) {
    var touch = this.getTouch(event.changedTouches);

    if (touch) {
      this._pointerMove(event, touch);
    }
  };
  /**
   * pointer move
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */


  proto._pointerMove = function (event, pointer) {
    this.pointerMove(event, pointer);
  }; // public


  proto.pointerMove = function (event, pointer) {
    this.emitEvent('pointerMove', [event, pointer]);
  }; // ----- end event ----- //


  proto.onmouseup = function (event) {
    this._pointerUp(event, event);
  };

  proto.onpointerup = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerUp(event, event);
    }
  };

  proto.ontouchend = function (event) {
    var touch = this.getTouch(event.changedTouches);

    if (touch) {
      this._pointerUp(event, touch);
    }
  };
  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */


  proto._pointerUp = function (event, pointer) {
    this._pointerDone();

    this.pointerUp(event, pointer);
  }; // public


  proto.pointerUp = function (event, pointer) {
    this.emitEvent('pointerUp', [event, pointer]);
  }; // ----- pointer done ----- //
  // triggered on pointer up & pointer cancel


  proto._pointerDone = function () {
    this._pointerReset();

    this._unbindPostStartEvents();

    this.pointerDone();
  };

  proto._pointerReset = function () {
    // reset properties
    this.isPointerDown = false;
    delete this.pointerIdentifier;
  };

  proto.pointerDone = noop; // ----- pointer cancel ----- //

  proto.onpointercancel = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerCancel(event, event);
    }
  };

  proto.ontouchcancel = function (event) {
    var touch = this.getTouch(event.changedTouches);

    if (touch) {
      this._pointerCancel(event, touch);
    }
  };
  /**
   * pointer cancel
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */


  proto._pointerCancel = function (event, pointer) {
    this._pointerDone();

    this.pointerCancel(event, pointer);
  }; // public


  proto.pointerCancel = function (event, pointer) {
    this.emitEvent('pointerCancel', [event, pointer]);
  }; // -----  ----- //
  // utility function for getting x/y coords from event


  Unipointer.getPointerPoint = function (pointer) {
    return {
      x: pointer.pageX,
      y: pointer.pageY
    };
  }; // -----  ----- //


  return Unipointer;
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXYtZW1pdHRlci9ldi1lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maXp6eS11aS11dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvYWRkLXJlbW92ZS1jZWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9hbmltYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9jZWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9kcmFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9mbGlja2l0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2xhenlsb2FkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9wYWdlLWRvdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvcHJldi1uZXh0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dldC1zaXplL2dldC1zaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmlkcmFnZ2VyL3VuaWRyYWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuaXBvaW50ZXIvdW5pcG9pbnRlci5qcyJdLCJuYW1lcyI6WyJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid2luZG93IiwiZmFjdG9yeSIsImRlZmluZSIsIm1hdGNoZXNNZXRob2QiLCJFbGVtUHJvdG8iLCJFbGVtZW50IiwicHJvdG90eXBlIiwibWF0Y2hlcyIsIm1hdGNoZXNTZWxlY3RvciIsInByZWZpeGVzIiwiaSIsImxlbmd0aCIsInByZWZpeCIsIm1ldGhvZCIsImVsZW0iLCJzZWxlY3RvciIsImdsb2JhbCIsIkV2RW1pdHRlciIsInByb3RvIiwib24iLCJldmVudE5hbWUiLCJsaXN0ZW5lciIsImV2ZW50cyIsIl9ldmVudHMiLCJsaXN0ZW5lcnMiLCJpbmRleE9mIiwicHVzaCIsIm9uY2UiLCJvbmNlRXZlbnRzIiwiX29uY2VFdmVudHMiLCJvbmNlTGlzdGVuZXJzIiwib2ZmIiwiaW5kZXgiLCJzcGxpY2UiLCJlbWl0RXZlbnQiLCJhcmdzIiwic2xpY2UiLCJpc09uY2UiLCJhcHBseSIsImFsbE9mZiIsInV0aWxzIiwiZXh0ZW5kIiwiYSIsImIiLCJwcm9wIiwibW9kdWxvIiwibnVtIiwiZGl2IiwiYXJyYXlTbGljZSIsIkFycmF5IiwibWFrZUFycmF5IiwiaXNBcnJheSIsInVuZGVmaW5lZCIsImlzQXJyYXlMaWtlIiwiY2FsbCIsInJlbW92ZUZyb20iLCJhcnkiLCJnZXRQYXJlbnQiLCJwYXJlbnROb2RlIiwiZG9jdW1lbnQiLCJib2R5IiwiZ2V0UXVlcnlFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImhhbmRsZUV2ZW50IiwiZXZlbnQiLCJ0eXBlIiwiZmlsdGVyRmluZEVsZW1lbnRzIiwiZWxlbXMiLCJmZkVsZW1zIiwiZm9yRWFjaCIsIkhUTUxFbGVtZW50IiwiY2hpbGRFbGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkZWJvdW5jZU1ldGhvZCIsIl9jbGFzcyIsIm1ldGhvZE5hbWUiLCJ0aHJlc2hvbGQiLCJ0aW1lb3V0TmFtZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhcmd1bWVudHMiLCJfdGhpcyIsInNldFRpbWVvdXQiLCJkb2NSZWFkeSIsImNhbGxiYWNrIiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b0Rhc2hlZCIsInN0ciIsInJlcGxhY2UiLCJtYXRjaCIsIiQxIiwiJDIiLCJ0b0xvd2VyQ2FzZSIsImNvbnNvbGUiLCJodG1sSW5pdCIsIldpZGdldENsYXNzIiwibmFtZXNwYWNlIiwiZGFzaGVkTmFtZXNwYWNlIiwiZGF0YUF0dHIiLCJkYXRhQXR0ckVsZW1zIiwianNEYXNoRWxlbXMiLCJjb25jYXQiLCJkYXRhT3B0aW9uc0F0dHIiLCJqUXVlcnkiLCJhdHRyIiwiZ2V0QXR0cmlidXRlIiwib3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiY2xhc3NOYW1lIiwiaW5zdGFuY2UiLCJkYXRhIiwiRmxpY2tpdHkiLCJnZXRDZWxsc0ZyYWdtZW50IiwiY2VsbHMiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjZWxsIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiaW5zZXJ0IiwiX21ha2VDZWxscyIsImxlbiIsImlzQXBwZW5kIiwic2xpZGVyIiwiaW5zZXJ0Q2VsbEVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJlbmRDZWxscyIsIl9zaXplQ2VsbHMiLCJjZWxsQ2hhbmdlIiwiYXBwZW5kIiwicHJlcGVuZCIsInJlbW92ZSIsImdldENlbGxzIiwibWluQ2VsbEluZGV4IiwiTWF0aCIsIm1pbiIsImNlbGxTaXplQ2hhbmdlIiwiZ2V0Q2VsbCIsImdldFNpemUiLCJjaGFuZ2VkQ2VsbEluZGV4IiwiaXNQb3NpdGlvbmluZ1NsaWRlciIsInByZXZTZWxlY3RlZEVsZW0iLCJzZWxlY3RlZEVsZW1lbnQiLCJfcG9zaXRpb25DZWxscyIsIl9nZXRXcmFwU2hpZnRDZWxscyIsInNldEdhbGxlcnlTaXplIiwic2VsZWN0ZWRJbmRleCIsImdldENlbGxTbGlkZUluZGV4Iiwic2xpZGVzIiwic2VsZWN0IiwicG9zaXRpb25TbGlkZXJBdFNlbGVjdGVkIiwic3RhcnRBbmltYXRpb24iLCJpc0FuaW1hdGluZyIsInJlc3RpbmdGcmFtZXMiLCJhbmltYXRlIiwiYXBwbHlEcmFnRm9yY2UiLCJhcHBseVNlbGVjdGVkQXR0cmFjdGlvbiIsInByZXZpb3VzWCIsIngiLCJpbnRlZ3JhdGVQaHlzaWNzIiwicG9zaXRpb25TbGlkZXIiLCJzZXR0bGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRlRnJhbWUiLCJ3cmFwQXJvdW5kIiwic2xpZGVhYmxlV2lkdGgiLCJzaGlmdFdyYXBDZWxscyIsInNldFRyYW5zbGF0ZVgiLCJkaXNwYXRjaFNjcm9sbEV2ZW50IiwiaXMzZCIsImN1cnNvclBvc2l0aW9uIiwicmlnaHRUb0xlZnQiLCJ0cmFuc2xhdGVYIiwiZ2V0UG9zaXRpb25WYWx1ZSIsInN0eWxlIiwidHJhbnNmb3JtIiwiZmlyc3RTbGlkZSIsInBvc2l0aW9uWCIsInRhcmdldCIsInByb2dyZXNzIiwic2xpZGVzV2lkdGgiLCJkaXNwYXRjaEV2ZW50Iiwic2VsZWN0ZWRTbGlkZSIsInZlbG9jaXR5IiwicG9zaXRpb24iLCJwZXJjZW50UG9zaXRpb24iLCJyb3VuZCIsInNpemUiLCJpbm5lcldpZHRoIiwiaXNQb2ludGVyRG93biIsImlzRnJlZVNjcm9sbGluZyIsImJlZm9yZUdhcCIsIl9zaGlmdENlbGxzIiwiYmVmb3JlU2hpZnRDZWxscyIsImFmdGVyR2FwIiwiYWZ0ZXJTaGlmdENlbGxzIiwiZ2FwIiwic2hpZnQiLCJjZWxsU2hpZnQiLCJ3cmFwU2hpZnQiLCJvdXRlcldpZHRoIiwiX3Vuc2hpZnRDZWxscyIsImdldEZyaWN0aW9uRmFjdG9yIiwiYXBwbHlGb3JjZSIsImZvcmNlIiwiZ2V0UmVzdGluZ1Bvc2l0aW9uIiwiaXNEcmFnZ2FibGUiLCJkcmFnVmVsb2NpdHkiLCJkcmFnWCIsImRyYWdGb3JjZSIsImRyYWdEb3duIiwiZGlzdGFuY2UiLCJzZWxlY3RlZEF0dHJhY3Rpb24iLCJDZWxsIiwicGFyZW50IiwiY3JlYXRlIiwic2V0QXR0cmlidXRlIiwiZGVzdHJveSIsInVuc2VsZWN0Iiwic2lkZSIsIm9yaWdpblNpZGUiLCJzZXRQb3NpdGlvbiIsInVwZGF0ZVRhcmdldCIsInJlbmRlclBvc2l0aW9uIiwic2V0RGVmYXVsdFRhcmdldCIsIm1hcmdpblByb3BlcnR5Iiwid2lkdGgiLCJjZWxsQWxpZ24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmVDaGlsZCIsIlVuaWRyYWdnZXIiLCJkZWZhdWx0cyIsImRyYWdnYWJsZSIsImRyYWdUaHJlc2hvbGQiLCJjcmVhdGVNZXRob2RzIiwiX3RvdWNoQWN0aW9uVmFsdWUiLCJpc1RvdWNoIiwiaXNUb3VjaG1vdmVTY3JvbGxDYW5jZWxlZCIsIl9jcmVhdGVEcmFnIiwib25BY3RpdmF0ZURyYWciLCJfdWlDaGFuZ2VEcmFnIiwib25EZWFjdGl2YXRlRHJhZyIsInVwZGF0ZURyYWdnYWJsZSIsImhhbmRsZXMiLCJ2aWV3cG9ydCIsImJpbmRIYW5kbGVzIiwidW5iaW5kSGFuZGxlcyIsImJpbmREcmFnIiwidW5iaW5kRHJhZyIsInBvaW50ZXJEb3duIiwicG9pbnRlciIsIl9wb2ludGVyRG93bkRlZmF1bHQiLCJpc09rYXkiLCJva2F5UG9pbnRlckRvd24iLCJfcG9pbnRlckRvd25QcmV2ZW50RGVmYXVsdCIsInBvaW50ZXJEb3duRm9jdXMiLCJhY3RpdmVFbGVtZW50IiwicG9pbnRlckRvd25CbHVyIiwicG9pbnRlckRvd25TY3JvbGwiLCJnZXRTY3JvbGxQb3NpdGlvbiIsInBvaW50ZXJEb3duUG9pbnRlciIsInBhZ2VYIiwicGFnZVkiLCJfYmluZFBvc3RTdGFydEV2ZW50cyIsImZvY3VzTm9kZXMiLCJJTlBVVCIsIlRFWFRBUkVBIiwiU0VMRUNUIiwiaXNGb2N1c05vZGUiLCJub2RlTmFtZSIsImZvY3VzIiwiaXNUb3VjaFN0YXJ0IiwiaXNUb3VjaFBvaW50ZXIiLCJwb2ludGVyVHlwZSIsInByZXZlbnREZWZhdWx0IiwiaGFzRHJhZ1N0YXJ0ZWQiLCJtb3ZlVmVjdG9yIiwiYWJzIiwicG9pbnRlclVwIiwiaXNUb3VjaFNjcm9sbGluZyIsIl9kcmFnUG9pbnRlclVwIiwicG9pbnRlckRvbmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0UG9zaXRpb24iLCJwb2ludGVyTW92ZSIsIl9kcmFnUG9pbnRlck1vdmUiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsInByZXZpb3VzRHJhZ1giLCJkaXJlY3Rpb24iLCJvcmlnaW5Cb3VuZCIsIm1heCIsImVuZEJvdW5kIiwiZ2V0TGFzdFNsaWRlIiwiZHJhZ01vdmVUaW1lIiwiRGF0ZSIsImRyYWdFbmQiLCJmcmVlU2Nyb2xsIiwiZHJhZ0VuZFJlc3RpbmdTZWxlY3QiLCJyZXN0aW5nWCIsImRyYWdFbmRCb29zdFNlbGVjdCIsImlzRHJhZ1NlbGVjdCIsImdldFNsaWRlRGlzdGFuY2UiLCJwb3NpdGl2ZVJlc3RpbmciLCJfZ2V0Q2xvc2VzdFJlc3RpbmciLCJuZWdhdGl2ZVJlc3RpbmciLCJpbmNyZW1lbnQiLCJtaW5EaXN0YW5jZSIsIkluZmluaXR5IiwiY29uZGl0aW9uIiwiY29udGFpbiIsImQiLCJtZCIsImlzV3JhcEFyb3VuZCIsInNsaWRlSW5kZXgiLCJzbGlkZSIsIndyYXAiLCJmbG9vciIsImRlbHRhIiwic3RhdGljQ2xpY2siLCJjbGlja2VkQ2VsbCIsImdldFBhcmVudENlbGwiLCJjZWxsRWxlbSIsImNlbGxJbmRleCIsIm9uc2Nyb2xsIiwic2Nyb2xsIiwic2Nyb2xsTW92ZVgiLCJzY3JvbGxNb3ZlWSIsInkiLCJfcG9pbnRlckRvbmUiLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0IiwiU2xpZGUiLCJhbmltYXRlUHJvdG90eXBlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1vdmVFbGVtZW50cyIsInRvRWxlbSIsIkdVSUQiLCJpbnN0YW5jZXMiLCJxdWVyeUVsZW1lbnQiLCJmbGlja2l0eUdVSUQiLCJvcHRpb24iLCIkZWxlbWVudCIsImNvbnN0cnVjdG9yIiwiX2NyZWF0ZSIsImFjY2Vzc2liaWxpdHkiLCJmcmVlU2Nyb2xsRnJpY3Rpb24iLCJmcmljdGlvbiIsIm5hbWVzcGFjZUpRdWVyeUV2ZW50cyIsInJlc2l6ZSIsImlkIiwiZ3VpZCIsImNyZWF0ZUVsZW1lbnQiLCJfY3JlYXRlU2xpZGVyIiwid2F0Y2hDU1MiLCJhY3RpdmF0ZSIsIm9wdHMiLCJpc0FjdGl2ZSIsImNlbGxFbGVtcyIsIl9maWx0ZXJGaW5kQ2VsbEVsZW1lbnRzIiwiY2hpbGRyZW4iLCJyZWxvYWRDZWxscyIsInRhYkluZGV4Iiwic2VsZWN0SW5pdGlhbEluZGV4IiwiaXNJbml0QWN0aXZhdGVkIiwiY2VsbFNlbGVjdG9yIiwicG9zaXRpb25DZWxscyIsIm1hcCIsImdldExhc3RDZWxsIiwibWF4Q2VsbEhlaWdodCIsImNlbGxYIiwic3RhcnRDZWxsIiwib3V0ZXJIZWlnaHQiLCJ1cGRhdGVTbGlkZXMiLCJfY29udGFpblNsaWRlcyIsImlzT3JpZ2luTGVmdCIsIm5leHRNYXJnaW4iLCJjYW5DZWxsRml0IiwiX2dldENhbkNlbGxGaXQiLCJhZGRDZWxsIiwic2xpZGVXaWR0aCIsImZpcnN0TWFyZ2luIiwidXBkYXRlU2VsZWN0ZWRTbGlkZSIsImdyb3VwQ2VsbHMiLCJudW1iZXIiLCJwYXJzZUludCIsInBlcmNlbnRNYXRjaCIsInBlcmNlbnQiLCJfaW5pdCIsInJlcG9zaXRpb24iLCJzZXRDZWxsQWxpZ24iLCJjZWxsQWxpZ25TaG9ydGhhbmRzIiwiY2VudGVyIiwibGVmdCIsInJpZ2h0Iiwic2hvcnRoYW5kIiwiaGVpZ2h0IiwiYWRhcHRpdmVIZWlnaHQiLCJnYXBYIiwiX2dldEdhcENlbGxzIiwiaXNSaWdodFRvTGVmdCIsImJlZ2luTWFyZ2luIiwiZW5kTWFyZ2luIiwiY29udGVudFdpZHRoIiwiaXNDb250ZW50U21hbGxlciIsImJlZ2luQm91bmQiLCJlbWl0QXJncyIsIiRldmVudCIsImpRRXZlbnQiLCJFdmVudCIsInRyaWdnZXIiLCJpc1dyYXAiLCJpc0luc3RhbnQiLCJfd3JhcFNlbGVjdCIsInByZXZJbmRleCIsImlzV3JhcHBpbmciLCJ3cmFwSW5kZXgiLCJiYWNrV3JhcERlbHRhIiwiZm9yZXdhcmRXcmFwRGVsdGEiLCJwcmV2aW91cyIsIm5leHQiLCJ1bnNlbGVjdFNlbGVjdGVkU2xpZGUiLCJzZWxlY3RlZENlbGxzIiwic2VsZWN0ZWRFbGVtZW50cyIsImdldENlbGxFbGVtZW50cyIsInNlbGVjdGVkQ2VsbCIsImluaXRpYWxJbmRleCIsInF1ZXJ5Q2VsbCIsInNlbGVjdENlbGwiLCJnZXRBZGphY2VudENlbGxFbGVtZW50cyIsImFkakNvdW50IiwidWlDaGFuZ2UiLCJjaGlsZFVJUG9pbnRlckRvd24iLCJvbnJlc2l6ZSIsIndhdGNoT3B0aW9uIiwiYWZ0ZXJDb250ZW50IiwiY29udGVudCIsImRlYWN0aXZhdGUiLCJvbmtleWRvd24iLCJpc05vdEZvY3VzZWQiLCJoYW5kbGVyIiwia2V5Ym9hcmRIYW5kbGVycyIsImtleUNvZGUiLCJsZWZ0TWV0aG9kIiwicmlnaHRNZXRob2QiLCJwcmV2U2Nyb2xsWSIsInByZXZlbnRTY3JvbGwiLCJzY3JvbGxUbyIsInJlbW92ZURhdGEiLCJicmlkZ2V0Iiwic2V0SlF1ZXJ5IiwianEiLCJfY3JlYXRlTGF6eWxvYWQiLCJsYXp5TG9hZCIsImxhenlJbWFnZXMiLCJsYXp5Q2VsbEltYWdlcyIsImdldENlbGxMYXp5SW1hZ2VzIiwiaW1nIiwiTGF6eUxvYWRlciIsImxhenlsb2FkQXR0ciIsInNyY0F0dHIiLCJzcmNzZXRBdHRyIiwibGF6eVNlbGVjdG9yIiwiaW1ncyIsImZsaWNraXR5IiwibG9hZCIsInNyYyIsInNyY3NldCIsIm9ubG9hZCIsImNvbXBsZXRlIiwib25lcnJvciIsIlVuaXBvaW50ZXIiLCJQYWdlRG90cyIsImhvbGRlciIsImRvdHMiLCJoYW5kbGVDbGljayIsIm9uQ2xpY2siLCJiaW5kIiwic2V0RG90cyIsImJpbmRTdGFydEV2ZW50IiwidW5iaW5kU3RhcnRFdmVudCIsImFkZERvdHMiLCJyZW1vdmVEb3RzIiwiY291bnQiLCJuZXdEb3RzIiwiZG90IiwidXBkYXRlU2VsZWN0ZWQiLCJzZWxlY3RlZERvdCIsIm9uVGFwIiwicGFnZURvdHMiLCJfY3JlYXRlUGFnZURvdHMiLCJhY3RpdmF0ZVBhZ2VEb3RzIiwidXBkYXRlU2VsZWN0ZWRQYWdlRG90cyIsInVwZGF0ZVBhZ2VEb3RzIiwiZGVhY3RpdmF0ZVBhZ2VEb3RzIiwiUGxheWVyIiwic3RhdGUiLCJvblZpc2liaWxpdHlDaGFuZ2UiLCJ2aXNpYmlsaXR5Q2hhbmdlIiwib25WaXNpYmlsaXR5UGxheSIsInZpc2liaWxpdHlQbGF5IiwicGxheSIsImlzUGFnZUhpZGRlbiIsImhpZGRlbiIsInRpY2siLCJ0aW1lIiwiYXV0b1BsYXkiLCJjbGVhciIsInN0b3AiLCJwYXVzZSIsInVucGF1c2UiLCJwYXVzZUF1dG9QbGF5T25Ib3ZlciIsIl9jcmVhdGVQbGF5ZXIiLCJwbGF5ZXIiLCJhY3RpdmF0ZVBsYXllciIsInN0b3BQbGF5ZXIiLCJkZWFjdGl2YXRlUGxheWVyIiwicGxheVBsYXllciIsInBhdXNlUGxheWVyIiwidW5wYXVzZVBsYXllciIsIm9ubW91c2VlbnRlciIsIm9ubW91c2VsZWF2ZSIsInN2Z1VSSSIsIlByZXZOZXh0QnV0dG9uIiwiaXNFbmFibGVkIiwiaXNQcmV2aW91cyIsImxlZnREaXJlY3Rpb24iLCJpc0xlZnQiLCJkaXNhYmxlIiwic3ZnIiwiY3JlYXRlU1ZHIiwidXBkYXRlIiwiY3JlYXRlRWxlbWVudE5TIiwicGF0aCIsInBhdGhNb3ZlbWVudHMiLCJnZXRBcnJvd01vdmVtZW50cyIsImFycm93U2hhcGUiLCJzaGFwZSIsIngwIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsIm9uY2xpY2siLCJlbmFibGUiLCJkaXNhYmxlZCIsImxhc3RJbmRleCIsImJvdW5kSW5kZXgiLCJwcmV2TmV4dEJ1dHRvbnMiLCJfY3JlYXRlUHJldk5leHRCdXR0b25zIiwicHJldkJ1dHRvbiIsIm5leHRCdXR0b24iLCJhY3RpdmF0ZVByZXZOZXh0QnV0dG9ucyIsImRlYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMiLCJsYXN0Q2VsbCIsImxhc3RNYXJnaW4iLCJnZXRTdHlsZVNpemUiLCJwYXJzZUZsb2F0IiwiaXNWYWxpZCIsImlzTmFOIiwibm9vcCIsImxvZ0Vycm9yIiwibWVzc2FnZSIsIm1lYXN1cmVtZW50cyIsIm1lYXN1cmVtZW50c0xlbmd0aCIsImdldFplcm9TaXplIiwiaW5uZXJIZWlnaHQiLCJtZWFzdXJlbWVudCIsImdldFN0eWxlIiwiaXNTZXR1cCIsImlzQm94U2l6ZU91dGVyIiwic2V0dXAiLCJwYWRkaW5nIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJXaWR0aCIsImJveFNpemluZyIsImRvY3VtZW50RWxlbWVudCIsIm5vZGVUeXBlIiwiZGlzcGxheSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiaXNCb3JkZXJCb3giLCJwYWRkaW5nV2lkdGgiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdIZWlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbldpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luSGVpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlckhlaWdodCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJpc0JvcmRlckJveFNpemVPdXRlciIsInN0eWxlV2lkdGgiLCJzdHlsZUhlaWdodCIsIl9iaW5kSGFuZGxlcyIsImlzQWRkIiwiYmluZE1ldGhvZCIsInRvdWNoQWN0aW9uIiwiaGFuZGxlIiwiX2JpbmRTdGFydEV2ZW50IiwiUG9pbnRlckV2ZW50IiwiY3Vyc29yTm9kZXMiLCJPUFRJT04iLCJjbGlja1R5cGVzIiwicmFkaW8iLCJjaGVja2JveCIsImJ1dHRvbiIsInN1Ym1pdCIsImltYWdlIiwiZmlsZSIsImlzQ3Vyc29yTm9kZSIsImlzQ2xpY2tUeXBlIiwiX3BvaW50ZXJSZXNldCIsImZvY3VzZWQiLCJjYW5CbHVyIiwiYmx1ciIsImlzRHJhZ2dpbmciLCJfZHJhZ1N0YXJ0IiwiX2RyYWdFbmQiLCJfc3RhdGljQ2xpY2siLCJpc1ByZXZlbnRpbmdDbGlja3MiLCJpc0lnbm9yaW5nTW91c2VVcCIsImdldFBvaW50ZXJQb2ludCIsInN0YXJ0RXZlbnQiLCJnZXRUb3VjaCIsInRvdWNoZXMiLCJ0b3VjaCIsImlkZW50aWZpZXIiLCJwb2ludGVySWRlbnRpZmllciIsIm9ubW91c2Vkb3duIiwiX3BvaW50ZXJEb3duIiwib250b3VjaHN0YXJ0IiwiY2hhbmdlZFRvdWNoZXMiLCJvbnBvaW50ZXJkb3duIiwicG9pbnRlcklkIiwicG9zdFN0YXJ0RXZlbnRzIiwibW91c2Vkb3duIiwidG91Y2hzdGFydCIsInBvaW50ZXJkb3duIiwiX2JvdW5kUG9pbnRlckV2ZW50cyIsIl91bmJpbmRQb3N0U3RhcnRFdmVudHMiLCJvbm1vdXNlbW92ZSIsIl9wb2ludGVyTW92ZSIsIm9ucG9pbnRlcm1vdmUiLCJvbnRvdWNobW92ZSIsIm9ubW91c2V1cCIsIl9wb2ludGVyVXAiLCJvbnBvaW50ZXJ1cCIsIm9udG91Y2hlbmQiLCJvbnBvaW50ZXJjYW5jZWwiLCJfcG9pbnRlckNhbmNlbCIsIm9udG91Y2hjYW5jZWwiLCJwb2ludGVyQ2FuY2VsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlLFNBQVNBLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQ0MsS0FBbkMsRUFBMEM7QUFDdkQsTUFBSUQsR0FBRyxJQUFJRCxHQUFYLEVBQWdCO0FBQ2RHLFVBQU0sQ0FB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dEMsUUFBSWlrQixLQUFLLEdBQUcsS0FBS0YsUUFBTCxDQUFlL2pCLEtBQUssQ0FBQ3VrQixjQUFyQixDQUFaOztBQUNBLFFBQUtOLEtBQUwsRUFBYTtBQUNYLFdBQUt3QixjQUFMLENBQXFCemxCLEtBQXJCLEVBQTRCaWtCLEtBQTVCO0FBQ0Q7QUFDRixHQUxEO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQS9tQixPQUFLLENBQUN1b0IsY0FBTixHQUF1QixVQUFVemxCLEtBQVYsRUFBaUIrTCxPQUFqQixFQUEyQjtBQUNoRCxTQUFLZ0YsWUFBTDs7QUFDQSxTQUFLNFUsYUFBTCxDQUFvQjNsQixLQUFwQixFQUEyQitMLE9BQTNCO0FBQ0QsR0FIRCxDQXBQaUQsQ0F5UGpEOzs7QUFDQTdPLE9BQUssQ0FBQ3lvQixhQUFOLEdBQXNCLFVBQVUzbEIsS0FBVixFQUFpQitMLE9BQWpCLEVBQTJCO0FBQy9DLFNBQUs3TixTQUFMLENBQWdCLGVBQWhCLEVBQWlDLENBQUU4QixLQUFGLEVBQVMrTCxPQUFULENBQWpDO0FBQ0QsR0FGRCxDQTFQaUQsQ0E4UGpEO0FBRUE7OztBQUNBOE4sWUFBVSxDQUFDZ0ssZUFBWCxHQUE2QixVQUFVOVgsT0FBVixFQUFvQjtBQUMvQyxXQUFPO0FBQ0w5RixPQUFDLEVBQUU4RixPQUFPLENBQUNXLEtBRE47QUFFTG9FLE9BQUMsRUFBRS9FLE9BQU8sQ0FBQ1k7QUFGTixLQUFQO0FBSUQsR0FMRCxDQWpRaUQsQ0F3UWpEOzs7QUFFQSxTQUFPa04sVUFBUDtBQUVDLENBcFNDLENBQUYsQyIsImZpbGUiOiJ2ZW5kb3JzfmNhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiLyoqXG4gKiBtYXRjaGVzU2VsZWN0b3IgdjIuMC4yXG4gKiBtYXRjaGVzU2VsZWN0b3IoIGVsZW1lbnQsICcuc2VsZWN0b3InIClcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuICAndXNlIHN0cmljdCc7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cubWF0Y2hlc1NlbGVjdG9yID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBtYXRjaGVzTWV0aG9kID0gKCBmdW5jdGlvbigpIHtcbiAgICB2YXIgRWxlbVByb3RvID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlO1xuICAgIC8vIGNoZWNrIGZvciB0aGUgc3RhbmRhcmQgbWV0aG9kIG5hbWUgZmlyc3RcbiAgICBpZiAoIEVsZW1Qcm90by5tYXRjaGVzICkge1xuICAgICAgcmV0dXJuICdtYXRjaGVzJztcbiAgICB9XG4gICAgLy8gY2hlY2sgdW4tcHJlZml4ZWRcbiAgICBpZiAoIEVsZW1Qcm90by5tYXRjaGVzU2VsZWN0b3IgKSB7XG4gICAgICByZXR1cm4gJ21hdGNoZXNTZWxlY3Rvcic7XG4gICAgfVxuICAgIC8vIGNoZWNrIHZlbmRvciBwcmVmaXhlc1xuICAgIHZhciBwcmVmaXhlcyA9IFsgJ3dlYmtpdCcsICdtb3onLCAnbXMnLCAnbycgXTtcblxuICAgIGZvciAoIHZhciBpPTA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICAgIHZhciBtZXRob2QgPSBwcmVmaXggKyAnTWF0Y2hlc1NlbGVjdG9yJztcbiAgICAgIGlmICggRWxlbVByb3RvWyBtZXRob2QgXSApIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZDtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSB7XG4gICAgcmV0dXJuIGVsZW1bIG1hdGNoZXNNZXRob2QgXSggc2VsZWN0b3IgKTtcbiAgfTtcblxufSkpO1xuIiwiLyoqXG4gKiBFdkVtaXR0ZXIgdjEuMS4wXG4gKiBMaWwnIGV2ZW50IGVtaXR0ZXJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuLyoganNoaW50IHVudXNlZDogdHJ1ZSwgdW5kZWY6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCB3aW5kb3cgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTUQgLSBSZXF1aXJlSlNcbiAgICBkZWZpbmUoIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBnbG9iYWwuRXZFbWl0dGVyID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbigpIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIEV2RW1pdHRlcigpIHt9XG5cbnZhciBwcm90byA9IEV2RW1pdHRlci5wcm90b3R5cGU7XG5cbnByb3RvLm9uID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHNldCBldmVudHMgaGFzaFxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgbGlzdGVuZXJzIGFycmF5XG4gIHZhciBsaXN0ZW5lcnMgPSBldmVudHNbIGV2ZW50TmFtZSBdID0gZXZlbnRzWyBldmVudE5hbWUgXSB8fCBbXTtcbiAgLy8gb25seSBhZGQgb25jZVxuICBpZiAoIGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApID09IC0xICkge1xuICAgIGxpc3RlbmVycy5wdXNoKCBsaXN0ZW5lciApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vbmNlID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFkZCBldmVudFxuICB0aGlzLm9uKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gIC8vIHNldCBvbmNlIGZsYWdcbiAgLy8gc2V0IG9uY2VFdmVudHMgaGFzaFxuICB2YXIgb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgb25jZUxpc3RlbmVycyBvYmplY3RcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdIHx8IHt9O1xuICAvLyBzZXQgZmxhZ1xuICBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9mZiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uZW1pdEV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgYXJncyApIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGNvcHkgb3ZlciB0byBhdm9pZCBpbnRlcmZlcmVuY2UgaWYgLm9mZigpIGluIGxpc3RlbmVyXG4gIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgwKTtcbiAgYXJncyA9IGFyZ3MgfHwgW107XG4gIC8vIG9uY2Ugc3R1ZmZcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSB0aGlzLl9vbmNlRXZlbnRzICYmIHRoaXMuX29uY2VFdmVudHNbIGV2ZW50TmFtZSBdO1xuXG4gIGZvciAoIHZhciBpPTA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldXG4gICAgdmFyIGlzT25jZSA9IG9uY2VMaXN0ZW5lcnMgJiYgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICBpZiAoIGlzT25jZSApIHtcbiAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lclxuICAgICAgLy8gcmVtb3ZlIGJlZm9yZSB0cmlnZ2VyIHRvIHByZXZlbnQgcmVjdXJzaW9uXG4gICAgICB0aGlzLm9mZiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgICAgLy8gdW5zZXQgb25jZSBmbGFnXG4gICAgICBkZWxldGUgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICB9XG4gICAgLy8gdHJpZ2dlciBsaXN0ZW5lclxuICAgIGxpc3RlbmVyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmFsbE9mZiA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5fZXZlbnRzO1xuICBkZWxldGUgdGhpcy5fb25jZUV2ZW50cztcbn07XG5cbnJldHVybiBFdkVtaXR0ZXI7XG5cbn0pKTtcbiIsIi8qKlxuICogRml6enkgVUkgdXRpbHMgdjIuMC43XG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKmpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yJ1xuICAgIF0sIGZ1bmN0aW9uKCBtYXRjaGVzU2VsZWN0b3IgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBtYXRjaGVzU2VsZWN0b3IgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3InKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuZml6enlVSVV0aWxzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3JcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBtYXRjaGVzU2VsZWN0b3IgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0ge307XG5cbi8vIC0tLS0tIGV4dGVuZCAtLS0tLSAvL1xuXG4vLyBleHRlbmRzIG9iamVjdHNcbnV0aWxzLmV4dGVuZCA9IGZ1bmN0aW9uKCBhLCBiICkge1xuICBmb3IgKCB2YXIgcHJvcCBpbiBiICkge1xuICAgIGFbIHByb3AgXSA9IGJbIHByb3AgXTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cbi8vIC0tLS0tIG1vZHVsbyAtLS0tLSAvL1xuXG51dGlscy5tb2R1bG8gPSBmdW5jdGlvbiggbnVtLCBkaXYgKSB7XG4gIHJldHVybiAoICggbnVtICUgZGl2ICkgKyBkaXYgKSAlIGRpdjtcbn07XG5cbi8vIC0tLS0tIG1ha2VBcnJheSAtLS0tLSAvL1xuXG52YXIgYXJyYXlTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuLy8gdHVybiBlbGVtZW50IG9yIG5vZGVMaXN0IGludG8gYW4gYXJyYXlcbnV0aWxzLm1ha2VBcnJheSA9IGZ1bmN0aW9uKCBvYmogKSB7XG4gIGlmICggQXJyYXkuaXNBcnJheSggb2JqICkgKSB7XG4gICAgLy8gdXNlIG9iamVjdCBpZiBhbHJlYWR5IGFuIGFycmF5XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICAvLyByZXR1cm4gZW1wdHkgYXJyYXkgaWYgdW5kZWZpbmVkIG9yIG51bGwuICM2XG4gIGlmICggb2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkICkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBpc0FycmF5TGlrZSA9IHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5sZW5ndGggPT0gJ251bWJlcic7XG4gIGlmICggaXNBcnJheUxpa2UgKSB7XG4gICAgLy8gY29udmVydCBub2RlTGlzdCB0byBhcnJheVxuICAgIHJldHVybiBhcnJheVNsaWNlLmNhbGwoIG9iaiApO1xuICB9XG5cbiAgLy8gYXJyYXkgb2Ygc2luZ2xlIGluZGV4XG4gIHJldHVybiBbIG9iaiBdO1xufTtcblxuLy8gLS0tLS0gcmVtb3ZlRnJvbSAtLS0tLSAvL1xuXG51dGlscy5yZW1vdmVGcm9tID0gZnVuY3Rpb24oIGFyeSwgb2JqICkge1xuICB2YXIgaW5kZXggPSBhcnkuaW5kZXhPZiggb2JqICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgYXJ5LnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UGFyZW50IC0tLS0tIC8vXG5cbnV0aWxzLmdldFBhcmVudCA9IGZ1bmN0aW9uKCBlbGVtLCBzZWxlY3RvciApIHtcbiAgd2hpbGUgKCBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbSAhPSBkb2N1bWVudC5ib2R5ICkge1xuICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgaWYgKCBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkgKSB7XG4gICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFF1ZXJ5RWxlbWVudCAtLS0tLSAvL1xuXG4vLyB1c2UgZWxlbWVudCBhcyBzZWxlY3RvciBzdHJpbmdcbnV0aWxzLmdldFF1ZXJ5RWxlbWVudCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBlbGVtICk7XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59O1xuXG4vLyAtLS0tLSBoYW5kbGVFdmVudCAtLS0tLSAvL1xuXG4vLyBlbmFibGUgLm9udHlwZSB0byB0cmlnZ2VyIGZyb20gLmFkZEV2ZW50TGlzdGVuZXIoIGVsZW0sICd0eXBlJyApXG51dGlscy5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBmaWx0ZXJGaW5kRWxlbWVudHMgLS0tLS0gLy9cblxudXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zLCBzZWxlY3RvciApIHtcbiAgLy8gbWFrZSBhcnJheSBvZiBlbGVtc1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgdmFyIGZmRWxlbXMgPSBbXTtcblxuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAvLyBjaGVjayB0aGF0IGVsZW0gaXMgYW4gYWN0dWFsIGVsZW1lbnRcbiAgICBpZiAoICEoIGVsZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBhZGQgZWxlbSBpZiBubyBzZWxlY3RvclxuICAgIGlmICggIXNlbGVjdG9yICkge1xuICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGZpbHRlciAmIGZpbmQgaXRlbXMgaWYgd2UgaGF2ZSBhIHNlbGVjdG9yXG4gICAgLy8gZmlsdGVyXG4gICAgaWYgKCBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICB9XG4gICAgLy8gZmluZCBjaGlsZHJlblxuICAgIHZhciBjaGlsZEVsZW1zID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xuICAgIC8vIGNvbmNhdCBjaGlsZEVsZW1zIHRvIGZpbHRlckZvdW5kIGFycmF5XG4gICAgZm9yICggdmFyIGk9MDsgaSA8IGNoaWxkRWxlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGNoaWxkRWxlbXNbaV0gKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmZkVsZW1zO1xufTtcblxuLy8gLS0tLS0gZGVib3VuY2VNZXRob2QgLS0tLS0gLy9cblxudXRpbHMuZGVib3VuY2VNZXRob2QgPSBmdW5jdGlvbiggX2NsYXNzLCBtZXRob2ROYW1lLCB0aHJlc2hvbGQgKSB7XG4gIHRocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAxMDA7XG4gIC8vIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgbWV0aG9kID0gX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdO1xuICB2YXIgdGltZW91dE5hbWUgPSBtZXRob2ROYW1lICsgJ1RpbWVvdXQnO1xuXG4gIF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICBjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblxuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpc1sgdGltZW91dE5hbWUgXSA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgbWV0aG9kLmFwcGx5KCBfdGhpcywgYXJncyApO1xuICAgICAgZGVsZXRlIF90aGlzWyB0aW1lb3V0TmFtZSBdO1xuICAgIH0sIHRocmVzaG9sZCApO1xuICB9O1xufTtcblxuLy8gLS0tLS0gZG9jUmVhZHkgLS0tLS0gLy9cblxudXRpbHMuZG9jUmVhZHkgPSBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG4gIHZhciByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgaWYgKCByZWFkeVN0YXRlID09ICdjb21wbGV0ZScgfHwgcmVhZHlTdGF0ZSA9PSAnaW50ZXJhY3RpdmUnICkge1xuICAgIC8vIGRvIGFzeW5jIHRvIGFsbG93IGZvciBvdGhlciBzY3JpcHRzIHRvIHJ1bi4gbWV0YWZpenp5L2ZsaWNraXR5IzQ0MVxuICAgIHNldFRpbWVvdXQoIGNhbGxiYWNrICk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYWxsYmFjayApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBodG1sSW5pdCAtLS0tLSAvL1xuXG4vLyBodHRwOi8vamFtZXNyb2JlcnRzLm5hbWUvYmxvZy8yMDEwLzAyLzIyL3N0cmluZy1mdW5jdGlvbnMtZm9yLWphdmFzY3JpcHQtdHJpbS10by1jYW1lbC1jYXNlLXRvLWRhc2hlZC1hbmQtdG8tdW5kZXJzY29yZS9cbnV0aWxzLnRvRGFzaGVkID0gZnVuY3Rpb24oIHN0ciApIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvKC4pKFtBLVpdKS9nLCBmdW5jdGlvbiggbWF0Y2gsICQxLCAkMiApIHtcbiAgICByZXR1cm4gJDEgKyAnLScgKyAkMjtcbiAgfSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG4vKipcbiAqIGFsbG93IHVzZXIgdG8gaW5pdGlhbGl6ZSBjbGFzc2VzIHZpYSBbZGF0YS1uYW1lc3BhY2VdIG9yIC5qcy1uYW1lc3BhY2UgY2xhc3NcbiAqIGh0bWxJbml0KCBXaWRnZXQsICd3aWRnZXROYW1lJyApXG4gKiBvcHRpb25zIGFyZSBwYXJzZWQgZnJvbSBkYXRhLW5hbWVzcGFjZS1vcHRpb25zXG4gKi9cbnV0aWxzLmh0bWxJbml0ID0gZnVuY3Rpb24oIFdpZGdldENsYXNzLCBuYW1lc3BhY2UgKSB7XG4gIHV0aWxzLmRvY1JlYWR5KCBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGFzaGVkTmFtZXNwYWNlID0gdXRpbHMudG9EYXNoZWQoIG5hbWVzcGFjZSApO1xuICAgIHZhciBkYXRhQXR0ciA9ICdkYXRhLScgKyBkYXNoZWROYW1lc3BhY2U7XG4gICAgdmFyIGRhdGFBdHRyRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnWycgKyBkYXRhQXR0ciArICddJyApO1xuICAgIHZhciBqc0Rhc2hFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuanMtJyArIGRhc2hlZE5hbWVzcGFjZSApO1xuICAgIHZhciBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZGF0YUF0dHJFbGVtcyApXG4gICAgICAuY29uY2F0KCB1dGlscy5tYWtlQXJyYXkoIGpzRGFzaEVsZW1zICkgKTtcbiAgICB2YXIgZGF0YU9wdGlvbnNBdHRyID0gZGF0YUF0dHIgKyAnLW9wdGlvbnMnO1xuICAgIHZhciBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xuXG4gICAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICB2YXIgYXR0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKCBkYXRhQXR0ciApIHx8XG4gICAgICAgIGVsZW0uZ2V0QXR0cmlidXRlKCBkYXRhT3B0aW9uc0F0dHIgKTtcbiAgICAgIHZhciBvcHRpb25zO1xuICAgICAgdHJ5IHtcbiAgICAgICAgb3B0aW9ucyA9IGF0dHIgJiYgSlNPTi5wYXJzZSggYXR0ciApO1xuICAgICAgfSBjYXRjaCAoIGVycm9yICkge1xuICAgICAgICAvLyBsb2cgZXJyb3IsIGRvIG5vdCBpbml0aWFsaXplXG4gICAgICAgIGlmICggY29uc29sZSApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCAnRXJyb3IgcGFyc2luZyAnICsgZGF0YUF0dHIgKyAnIG9uICcgKyBlbGVtLmNsYXNzTmFtZSArXG4gICAgICAgICAgJzogJyArIGVycm9yICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IFdpZGdldENsYXNzKCBlbGVtLCBvcHRpb25zICk7XG4gICAgICAvLyBtYWtlIGF2YWlsYWJsZSB2aWEgJCgpLmRhdGEoJ25hbWVzcGFjZScpXG4gICAgICBpZiAoIGpRdWVyeSApIHtcbiAgICAgICAgalF1ZXJ5LmRhdGEoIGVsZW0sIG5hbWVzcGFjZSwgaW5zdGFuY2UgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9KTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gdXRpbHM7XG5cbn0pKTtcbiIsIi8vIGFkZCwgcmVtb3ZlIGNlbGxcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnLi9mbGlja2l0eScsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnXG4gICAgXSwgZnVuY3Rpb24oIEZsaWNraXR5LCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCB1dGlscyApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkZsaWNraXR5LFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCB1dGlscyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBhcHBlbmQgY2VsbHMgdG8gYSBkb2N1bWVudCBmcmFnbWVudFxuZnVuY3Rpb24gZ2V0Q2VsbHNGcmFnbWVudCggY2VsbHMgKSB7XG4gIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY2VsbHMuZm9yRWFjaCggZnVuY3Rpb24oIGNlbGwgKSB7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGNlbGwuZWxlbWVudCApO1xuICB9KTtcbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhZGQvcmVtb3ZlIGNlbGwgcHJvdG90eXBlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxuLyoqXG4gKiBJbnNlcnQsIHByZXBlbmQsIG9yIGFwcGVuZCBjZWxsc1xuICogQHBhcmFtIHtFbGVtZW50LCBBcnJheSwgTm9kZUxpc3R9IGVsZW1zXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluZGV4XG4gKi9cbnByb3RvLmluc2VydCA9IGZ1bmN0aW9uKCBlbGVtcywgaW5kZXggKSB7XG4gIHZhciBjZWxscyA9IHRoaXMuX21ha2VDZWxscyggZWxlbXMgKTtcbiAgaWYgKCAhY2VsbHMgfHwgIWNlbGxzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGxlbiA9IHRoaXMuY2VsbHMubGVuZ3RoO1xuICAvLyBkZWZhdWx0IHRvIGFwcGVuZFxuICBpbmRleCA9IGluZGV4ID09PSB1bmRlZmluZWQgPyBsZW4gOiBpbmRleDtcbiAgLy8gYWRkIGNlbGxzIHdpdGggZG9jdW1lbnQgZnJhZ21lbnRcbiAgdmFyIGZyYWdtZW50ID0gZ2V0Q2VsbHNGcmFnbWVudCggY2VsbHMgKTtcbiAgLy8gYXBwZW5kIHRvIHNsaWRlclxuICB2YXIgaXNBcHBlbmQgPSBpbmRleCA9PSBsZW47XG4gIGlmICggaXNBcHBlbmQgKSB7XG4gICAgdGhpcy5zbGlkZXIuYXBwZW5kQ2hpbGQoIGZyYWdtZW50ICk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc2VydENlbGxFbGVtZW50ID0gdGhpcy5jZWxsc1sgaW5kZXggXS5lbGVtZW50O1xuICAgIHRoaXMuc2xpZGVyLmluc2VydEJlZm9yZSggZnJhZ21lbnQsIGluc2VydENlbGxFbGVtZW50ICk7XG4gIH1cbiAgLy8gYWRkIHRvIHRoaXMuY2VsbHNcbiAgaWYgKCBpbmRleCA9PT0gMCApIHtcbiAgICAvLyBwcmVwZW5kLCBhZGQgdG8gc3RhcnRcbiAgICB0aGlzLmNlbGxzID0gY2VsbHMuY29uY2F0KCB0aGlzLmNlbGxzICk7XG4gIH0gZWxzZSBpZiAoIGlzQXBwZW5kICkge1xuICAgIC8vIGFwcGVuZCwgYWRkIHRvIGVuZFxuICAgIHRoaXMuY2VsbHMgPSB0aGlzLmNlbGxzLmNvbmNhdCggY2VsbHMgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpbnNlcnQgaW4gdGhpcy5jZWxsc1xuICAgIHZhciBlbmRDZWxscyA9IHRoaXMuY2VsbHMuc3BsaWNlKCBpbmRleCwgbGVuIC0gaW5kZXggKTtcbiAgICB0aGlzLmNlbGxzID0gdGhpcy5jZWxscy5jb25jYXQoIGNlbGxzICkuY29uY2F0KCBlbmRDZWxscyApO1xuICB9XG5cbiAgdGhpcy5fc2l6ZUNlbGxzKCBjZWxscyApO1xuICB0aGlzLmNlbGxDaGFuZ2UoIGluZGV4LCB0cnVlICk7XG59O1xuXG5wcm90by5hcHBlbmQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHRoaXMuaW5zZXJ0KCBlbGVtcywgdGhpcy5jZWxscy5sZW5ndGggKTtcbn07XG5cbnByb3RvLnByZXBlbmQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHRoaXMuaW5zZXJ0KCBlbGVtcywgMCApO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgY2VsbHNcbiAqIEBwYXJhbSB7RWxlbWVudCwgQXJyYXksIE5vZGVMaXN0fSBlbGVtc1xuICovXG5wcm90by5yZW1vdmUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBjZWxscyA9IHRoaXMuZ2V0Q2VsbHMoIGVsZW1zICk7XG4gIGlmICggIWNlbGxzIHx8ICFjZWxscy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG1pbkNlbGxJbmRleCA9IHRoaXMuY2VsbHMubGVuZ3RoIC0gMTtcbiAgLy8gcmVtb3ZlIGNlbGxzIGZyb20gY29sbGVjdGlvbiAmIERPTVxuICBjZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICBjZWxsLnJlbW92ZSgpO1xuICAgIHZhciBpbmRleCA9IHRoaXMuY2VsbHMuaW5kZXhPZiggY2VsbCApO1xuICAgIG1pbkNlbGxJbmRleCA9IE1hdGgubWluKCBpbmRleCwgbWluQ2VsbEluZGV4ICk7XG4gICAgdXRpbHMucmVtb3ZlRnJvbSggdGhpcy5jZWxscywgY2VsbCApO1xuICB9LCB0aGlzICk7XG5cbiAgdGhpcy5jZWxsQ2hhbmdlKCBtaW5DZWxsSW5kZXgsIHRydWUgKTtcbn07XG5cbi8qKlxuICogbG9naWMgdG8gYmUgcnVuIGFmdGVyIGEgY2VsbCdzIHNpemUgY2hhbmdlc1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtIC0gY2VsbCdzIGVsZW1lbnRcbiAqL1xucHJvdG8uY2VsbFNpemVDaGFuZ2UgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGNlbGwgPSB0aGlzLmdldENlbGwoIGVsZW0gKTtcbiAgaWYgKCAhY2VsbCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY2VsbC5nZXRTaXplKCk7XG5cbiAgdmFyIGluZGV4ID0gdGhpcy5jZWxscy5pbmRleE9mKCBjZWxsICk7XG4gIHRoaXMuY2VsbENoYW5nZSggaW5kZXggKTtcbn07XG5cbi8qKlxuICogbG9naWMgYW55IHRpbWUgYSBjZWxsIGlzIGNoYW5nZWQ6IGFkZGVkLCByZW1vdmVkLCBvciBzaXplIGNoYW5nZWRcbiAqIEBwYXJhbSB7SW50ZWdlcn0gY2hhbmdlZENlbGxJbmRleCAtIGluZGV4IG9mIHRoZSBjaGFuZ2VkIGNlbGwsIG9wdGlvbmFsXG4gKi9cbnByb3RvLmNlbGxDaGFuZ2UgPSBmdW5jdGlvbiggY2hhbmdlZENlbGxJbmRleCwgaXNQb3NpdGlvbmluZ1NsaWRlciApIHtcbiAgdmFyIHByZXZTZWxlY3RlZEVsZW0gPSB0aGlzLnNlbGVjdGVkRWxlbWVudDtcbiAgdGhpcy5fcG9zaXRpb25DZWxscyggY2hhbmdlZENlbGxJbmRleCApO1xuICB0aGlzLl9nZXRXcmFwU2hpZnRDZWxscygpO1xuICB0aGlzLnNldEdhbGxlcnlTaXplKCk7XG4gIC8vIHVwZGF0ZSBzZWxlY3RlZEluZGV4XG4gIC8vIHRyeSB0byBtYWludGFpbiBwb3NpdGlvbiAmIHNlbGVjdCBwcmV2aW91cyBzZWxlY3RlZCBlbGVtZW50XG4gIHZhciBjZWxsID0gdGhpcy5nZXRDZWxsKCBwcmV2U2VsZWN0ZWRFbGVtICk7XG4gIGlmICggY2VsbCApIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmdldENlbGxTbGlkZUluZGV4KCBjZWxsICk7XG4gIH1cbiAgdGhpcy5zZWxlY3RlZEluZGV4ID0gTWF0aC5taW4oIHRoaXMuc2xpZGVzLmxlbmd0aCAtIDEsIHRoaXMuc2VsZWN0ZWRJbmRleCApO1xuXG4gIHRoaXMuZW1pdEV2ZW50KCAnY2VsbENoYW5nZScsIFsgY2hhbmdlZENlbGxJbmRleCBdICk7XG4gIC8vIHBvc2l0aW9uIHNsaWRlclxuICB0aGlzLnNlbGVjdCggdGhpcy5zZWxlY3RlZEluZGV4ICk7XG4gIC8vIGRvIG5vdCBwb3NpdGlvbiBzbGlkZXIgYWZ0ZXIgbGF6eSBsb2FkXG4gIGlmICggaXNQb3NpdGlvbmluZ1NsaWRlciApIHtcbiAgICB0aGlzLnBvc2l0aW9uU2xpZGVyQXRTZWxlY3RlZCgpO1xuICB9XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG4iLCIvLyBhbmltYXRlXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJ1xuICAgIF0sIGZ1bmN0aW9uKCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIHV0aWxzICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5GbGlja2l0eSA9IHdpbmRvdy5GbGlja2l0eSB8fCB7fTtcbiAgICB3aW5kb3cuRmxpY2tpdHkuYW5pbWF0ZVByb3RvdHlwZSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgdXRpbHMgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYW5pbWF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgcHJvdG8gPSB7fTtcblxucHJvdG8uc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmlzQW5pbWF0aW5nICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICB0aGlzLnJlc3RpbmdGcmFtZXMgPSAwO1xuICB0aGlzLmFuaW1hdGUoKTtcbn07XG5cbnByb3RvLmFuaW1hdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5hcHBseURyYWdGb3JjZSgpO1xuICB0aGlzLmFwcGx5U2VsZWN0ZWRBdHRyYWN0aW9uKCk7XG5cbiAgdmFyIHByZXZpb3VzWCA9IHRoaXMueDtcblxuICB0aGlzLmludGVncmF0ZVBoeXNpY3MoKTtcbiAgdGhpcy5wb3NpdGlvblNsaWRlcigpO1xuICB0aGlzLnNldHRsZSggcHJldmlvdXNYICk7XG4gIC8vIGFuaW1hdGUgbmV4dCBmcmFtZVxuICBpZiAoIHRoaXMuaXNBbmltYXRpbmcgKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGZ1bmN0aW9uIGFuaW1hdGVGcmFtZSgpIHtcbiAgICAgIF90aGlzLmFuaW1hdGUoKTtcbiAgICB9KTtcbiAgfVxufTtcblxucHJvdG8ucG9zaXRpb25TbGlkZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHggPSB0aGlzLng7XG4gIC8vIHdyYXAgcG9zaXRpb24gYXJvdW5kXG4gIGlmICggdGhpcy5vcHRpb25zLndyYXBBcm91bmQgJiYgdGhpcy5jZWxscy5sZW5ndGggPiAxICkge1xuICAgIHggPSB1dGlscy5tb2R1bG8oIHgsIHRoaXMuc2xpZGVhYmxlV2lkdGggKTtcbiAgICB4ID0geCAtIHRoaXMuc2xpZGVhYmxlV2lkdGg7XG4gICAgdGhpcy5zaGlmdFdyYXBDZWxscyggeCApO1xuICB9XG5cbiAgdGhpcy5zZXRUcmFuc2xhdGVYKCB4LCB0aGlzLmlzQW5pbWF0aW5nICk7XG4gIHRoaXMuZGlzcGF0Y2hTY3JvbGxFdmVudCgpO1xufTtcblxucHJvdG8uc2V0VHJhbnNsYXRlWCA9IGZ1bmN0aW9uKCB4LCBpczNkICkge1xuICB4ICs9IHRoaXMuY3Vyc29yUG9zaXRpb247XG4gIC8vIHJldmVyc2UgaWYgcmlnaHQtdG8tbGVmdCBhbmQgdXNpbmcgdHJhbnNmb3JtXG4gIHggPSB0aGlzLm9wdGlvbnMucmlnaHRUb0xlZnQgPyAteCA6IHg7XG4gIHZhciB0cmFuc2xhdGVYID0gdGhpcy5nZXRQb3NpdGlvblZhbHVlKCB4ICk7XG4gIC8vIHVzZSAzRCB0cmFuZm9ybXMgZm9yIGhhcmR3YXJlIGFjY2VsZXJhdGlvbiBvbiBpT1NcbiAgLy8gYnV0IHVzZSAyRCB3aGVuIHNldHRsZWQsIGZvciBiZXR0ZXIgZm9udC1yZW5kZXJpbmdcbiAgdGhpcy5zbGlkZXIuc3R5bGUudHJhbnNmb3JtID0gaXMzZCA/XG4gICAgJ3RyYW5zbGF0ZTNkKCcgKyB0cmFuc2xhdGVYICsgJywwLDApJyA6ICd0cmFuc2xhdGVYKCcgKyB0cmFuc2xhdGVYICsgJyknO1xufTtcblxucHJvdG8uZGlzcGF0Y2hTY3JvbGxFdmVudCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZmlyc3RTbGlkZSA9IHRoaXMuc2xpZGVzWzBdO1xuICBpZiAoICFmaXJzdFNsaWRlICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgcG9zaXRpb25YID0gLXRoaXMueCAtIGZpcnN0U2xpZGUudGFyZ2V0O1xuICB2YXIgcHJvZ3Jlc3MgPSBwb3NpdGlvblggLyB0aGlzLnNsaWRlc1dpZHRoO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdzY3JvbGwnLCBudWxsLCBbIHByb2dyZXNzLCBwb3NpdGlvblggXSApO1xufTtcblxucHJvdG8ucG9zaXRpb25TbGlkZXJBdFNlbGVjdGVkID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMuY2VsbHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnggPSAtdGhpcy5zZWxlY3RlZFNsaWRlLnRhcmdldDtcbiAgdGhpcy52ZWxvY2l0eSA9IDA7IC8vIHN0b3Agd29iYmxlXG4gIHRoaXMucG9zaXRpb25TbGlkZXIoKTtcbn07XG5cbnByb3RvLmdldFBvc2l0aW9uVmFsdWUgPSBmdW5jdGlvbiggcG9zaXRpb24gKSB7XG4gIGlmICggdGhpcy5vcHRpb25zLnBlcmNlbnRQb3NpdGlvbiApIHtcbiAgICAvLyBwZXJjZW50IHBvc2l0aW9uLCByb3VuZCB0byAyIGRpZ2l0cywgbGlrZSAxMi4zNCVcbiAgICByZXR1cm4gKCBNYXRoLnJvdW5kKCAoIHBvc2l0aW9uIC8gdGhpcy5zaXplLmlubmVyV2lkdGggKSAqIDEwMDAwICkgKiAwLjAxICkrICclJztcbiAgfSBlbHNlIHtcbiAgICAvLyBwaXhlbCBwb3NpdGlvbmluZ1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCBwb3NpdGlvbiApICsgJ3B4JztcbiAgfVxufTtcblxucHJvdG8uc2V0dGxlID0gZnVuY3Rpb24oIHByZXZpb3VzWCApIHtcbiAgLy8ga2VlcCB0cmFjayBvZiBmcmFtZXMgd2hlcmUgeCBoYXNuJ3QgbW92ZWRcbiAgaWYgKCAhdGhpcy5pc1BvaW50ZXJEb3duICYmIE1hdGgucm91bmQoIHRoaXMueCAqIDEwMCApID09IE1hdGgucm91bmQoIHByZXZpb3VzWCAqIDEwMCApICkge1xuICAgIHRoaXMucmVzdGluZ0ZyYW1lcysrO1xuICB9XG4gIC8vIHN0b3AgYW5pbWF0aW5nIGlmIHJlc3RpbmcgZm9yIDMgb3IgbW9yZSBmcmFtZXNcbiAgaWYgKCB0aGlzLnJlc3RpbmdGcmFtZXMgPiAyICkge1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICBkZWxldGUgdGhpcy5pc0ZyZWVTY3JvbGxpbmc7XG4gICAgLy8gcmVuZGVyIHBvc2l0aW9uIHdpdGggdHJhbnNsYXRlWCB3aGVuIHNldHRsZWRcbiAgICB0aGlzLnBvc2l0aW9uU2xpZGVyKCk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnc2V0dGxlJywgbnVsbCwgWyB0aGlzLnNlbGVjdGVkSW5kZXggXSApO1xuICB9XG59O1xuXG5wcm90by5zaGlmdFdyYXBDZWxscyA9IGZ1bmN0aW9uKCB4ICkge1xuICAvLyBzaGlmdCBiZWZvcmUgY2VsbHNcbiAgdmFyIGJlZm9yZUdhcCA9IHRoaXMuY3Vyc29yUG9zaXRpb24gKyB4O1xuICB0aGlzLl9zaGlmdENlbGxzKCB0aGlzLmJlZm9yZVNoaWZ0Q2VsbHMsIGJlZm9yZUdhcCwgLTEgKTtcbiAgLy8gc2hpZnQgYWZ0ZXIgY2VsbHNcbiAgdmFyIGFmdGVyR2FwID0gdGhpcy5zaXplLmlubmVyV2lkdGggLSAoIHggKyB0aGlzLnNsaWRlYWJsZVdpZHRoICsgdGhpcy5jdXJzb3JQb3NpdGlvbiApO1xuICB0aGlzLl9zaGlmdENlbGxzKCB0aGlzLmFmdGVyU2hpZnRDZWxscywgYWZ0ZXJHYXAsIDEgKTtcbn07XG5cbnByb3RvLl9zaGlmdENlbGxzID0gZnVuY3Rpb24oIGNlbGxzLCBnYXAsIHNoaWZ0ICkge1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgY2VsbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGNlbGwgPSBjZWxsc1tpXTtcbiAgICB2YXIgY2VsbFNoaWZ0ID0gZ2FwID4gMCA/IHNoaWZ0IDogMDtcbiAgICBjZWxsLndyYXBTaGlmdCggY2VsbFNoaWZ0ICk7XG4gICAgZ2FwIC09IGNlbGwuc2l6ZS5vdXRlcldpZHRoO1xuICB9XG59O1xuXG5wcm90by5fdW5zaGlmdENlbGxzID0gZnVuY3Rpb24oIGNlbGxzICkge1xuICBpZiAoICFjZWxscyB8fCAhY2VsbHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKCB2YXIgaT0wOyBpIDwgY2VsbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgY2VsbHNbaV0ud3JhcFNoaWZ0KCAwICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBoeXNpY3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8uaW50ZWdyYXRlUGh5c2ljcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eTtcbiAgdGhpcy52ZWxvY2l0eSAqPSB0aGlzLmdldEZyaWN0aW9uRmFjdG9yKCk7XG59O1xuXG5wcm90by5hcHBseUZvcmNlID0gZnVuY3Rpb24oIGZvcmNlICkge1xuICB0aGlzLnZlbG9jaXR5ICs9IGZvcmNlO1xufTtcblxucHJvdG8uZ2V0RnJpY3Rpb25GYWN0b3IgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIDEgLSB0aGlzLm9wdGlvbnNbIHRoaXMuaXNGcmVlU2Nyb2xsaW5nID8gJ2ZyZWVTY3JvbGxGcmljdGlvbicgOiAnZnJpY3Rpb24nIF07XG59O1xuXG5wcm90by5nZXRSZXN0aW5nUG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgLy8gbXkgdGhhbmtzIHRvIFN0ZXZlbiBXaXR0ZW5zLCB3aG8gc2ltcGxpZmllZCB0aGlzIG1hdGggZ3JlYXRseVxuICByZXR1cm4gdGhpcy54ICsgdGhpcy52ZWxvY2l0eSAvICggMSAtIHRoaXMuZ2V0RnJpY3Rpb25GYWN0b3IoKSApO1xufTtcblxucHJvdG8uYXBwbHlEcmFnRm9yY2UgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5pc0RyYWdnYWJsZSB8fCAhdGhpcy5pc1BvaW50ZXJEb3duICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBjaGFuZ2UgdGhlIHBvc2l0aW9uIHRvIGRyYWcgcG9zaXRpb24gYnkgYXBwbHlpbmcgZm9yY2VcbiAgdmFyIGRyYWdWZWxvY2l0eSA9IHRoaXMuZHJhZ1ggLSB0aGlzLng7XG4gIHZhciBkcmFnRm9yY2UgPSBkcmFnVmVsb2NpdHkgLSB0aGlzLnZlbG9jaXR5O1xuICB0aGlzLmFwcGx5Rm9yY2UoIGRyYWdGb3JjZSApO1xufTtcblxucHJvdG8uYXBwbHlTZWxlY3RlZEF0dHJhY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgLy8gZG8gbm90IGF0dHJhY3QgaWYgcG9pbnRlciBkb3duIG9yIG5vIHNsaWRlc1xuICB2YXIgZHJhZ0Rvd24gPSB0aGlzLmlzRHJhZ2dhYmxlICYmIHRoaXMuaXNQb2ludGVyRG93bjtcbiAgaWYgKCBkcmFnRG93biB8fCB0aGlzLmlzRnJlZVNjcm9sbGluZyB8fCAhdGhpcy5zbGlkZXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgZGlzdGFuY2UgPSB0aGlzLnNlbGVjdGVkU2xpZGUudGFyZ2V0ICogLTEgLSB0aGlzLng7XG4gIHZhciBmb3JjZSA9IGRpc3RhbmNlICogdGhpcy5vcHRpb25zLnNlbGVjdGVkQXR0cmFjdGlvbjtcbiAgdGhpcy5hcHBseUZvcmNlKCBmb3JjZSApO1xufTtcblxucmV0dXJuIHByb3RvO1xuXG59KSk7XG4iLCIvLyBGbGlja2l0eS5DZWxsXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2dldC1zaXplL2dldC1zaXplJ1xuICAgIF0sIGZ1bmN0aW9uKCBnZXRTaXplICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgZ2V0U2l6ZSApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuRmxpY2tpdHkgPSB3aW5kb3cuRmxpY2tpdHkgfHwge307XG4gICAgd2luZG93LkZsaWNraXR5LkNlbGwgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LmdldFNpemVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBnZXRTaXplICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIENlbGwoIGVsZW0sIHBhcmVudCApIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbTtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgdGhpcy5jcmVhdGUoKTtcbn1cblxudmFyIHByb3RvID0gQ2VsbC5wcm90b3R5cGU7XG5cbnByb3RvLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScgKTtcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy5zaGlmdCA9IDA7XG59O1xuXG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJlc2V0IHN0eWxlXG4gIHRoaXMudW5zZWxlY3QoKTtcbiAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gIHZhciBzaWRlID0gdGhpcy5wYXJlbnQub3JpZ2luU2lkZTtcbiAgdGhpcy5lbGVtZW50LnN0eWxlWyBzaWRlIF0gPSAnJztcbn07XG5cbnByb3RvLmdldFNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG59O1xuXG5wcm90by5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCB4ICkge1xuICB0aGlzLnggPSB4O1xuICB0aGlzLnVwZGF0ZVRhcmdldCgpO1xuICB0aGlzLnJlbmRlclBvc2l0aW9uKCB4ICk7XG59O1xuXG4vLyBzZXREZWZhdWx0VGFyZ2V0IHYxIG1ldGhvZCwgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHJlbW92ZSBpbiB2M1xucHJvdG8udXBkYXRlVGFyZ2V0ID0gcHJvdG8uc2V0RGVmYXVsdFRhcmdldCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWFyZ2luUHJvcGVydHkgPSB0aGlzLnBhcmVudC5vcmlnaW5TaWRlID09ICdsZWZ0JyA/ICdtYXJnaW5MZWZ0JyA6ICdtYXJnaW5SaWdodCc7XG4gIHRoaXMudGFyZ2V0ID0gdGhpcy54ICsgdGhpcy5zaXplWyBtYXJnaW5Qcm9wZXJ0eSBdICtcbiAgICB0aGlzLnNpemUud2lkdGggKiB0aGlzLnBhcmVudC5jZWxsQWxpZ247XG59O1xuXG5wcm90by5yZW5kZXJQb3NpdGlvbiA9IGZ1bmN0aW9uKCB4ICkge1xuICAvLyByZW5kZXIgcG9zaXRpb24gb2YgY2VsbCB3aXRoIGluIHNsaWRlclxuICB2YXIgc2lkZSA9IHRoaXMucGFyZW50Lm9yaWdpblNpZGU7XG4gIHRoaXMuZWxlbWVudC5zdHlsZVsgc2lkZSBdID0gdGhpcy5wYXJlbnQuZ2V0UG9zaXRpb25WYWx1ZSggeCApO1xufTtcblxucHJvdG8uc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1zZWxlY3RlZCcpO1xuICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xufTtcblxucHJvdG8udW5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNlbGVjdGVkJyk7XG4gIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicsICd0cnVlJyApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGZhY3RvciAtIDAsIDEsIG9yIC0xXG4qKi9cbnByb3RvLndyYXBTaGlmdCA9IGZ1bmN0aW9uKCBzaGlmdCApIHtcbiAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICB0aGlzLnJlbmRlclBvc2l0aW9uKCB0aGlzLnggKyB0aGlzLnBhcmVudC5zbGlkZWFibGVXaWR0aCAqIHNoaWZ0ICk7XG59O1xuXG5wcm90by5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xufTtcblxucmV0dXJuIENlbGw7XG5cbn0pKTtcbiIsIi8vIGRyYWdcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnLi9mbGlja2l0eScsXG4gICAgICAndW5pZHJhZ2dlci91bmlkcmFnZ2VyJyxcbiAgICAgICdmaXp6eS11aS11dGlscy91dGlscydcbiAgICBdLCBmdW5jdGlvbiggRmxpY2tpdHksIFVuaWRyYWdnZXIsIHV0aWxzICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRmxpY2tpdHksIFVuaWRyYWdnZXIsIHV0aWxzICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCcuL2ZsaWNraXR5JyksXG4gICAgICByZXF1aXJlKCd1bmlkcmFnZ2VyJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5GbGlja2l0eSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRmxpY2tpdHksXG4gICAgICB3aW5kb3cuVW5pZHJhZ2dlcixcbiAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHNcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBGbGlja2l0eSwgVW5pZHJhZ2dlciwgdXRpbHMgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0gZGVmYXVsdHMgLS0tLS0gLy9cblxudXRpbHMuZXh0ZW5kKCBGbGlja2l0eS5kZWZhdWx0cywge1xuICBkcmFnZ2FibGU6ICc+MScsXG4gIGRyYWdUaHJlc2hvbGQ6IDMsXG59KTtcblxuLy8gLS0tLS0gY3JlYXRlIC0tLS0tIC8vXG5cbkZsaWNraXR5LmNyZWF0ZU1ldGhvZHMucHVzaCgnX2NyZWF0ZURyYWcnKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZHJhZyBwcm90b3R5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIHByb3RvID0gRmxpY2tpdHkucHJvdG90eXBlO1xudXRpbHMuZXh0ZW5kKCBwcm90bywgVW5pZHJhZ2dlci5wcm90b3R5cGUgKTtcbnByb3RvLl90b3VjaEFjdGlvblZhbHVlID0gJ3Bhbi15JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBpc1RvdWNoID0gJ2NyZWF0ZVRvdWNoJyBpbiBkb2N1bWVudDtcbnZhciBpc1RvdWNobW92ZVNjcm9sbENhbmNlbGVkID0gZmFsc2U7XG5cbnByb3RvLl9jcmVhdGVEcmFnID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMub24oICdhY3RpdmF0ZScsIHRoaXMub25BY3RpdmF0ZURyYWcgKTtcbiAgdGhpcy5vbiggJ3VpQ2hhbmdlJywgdGhpcy5fdWlDaGFuZ2VEcmFnICk7XG4gIHRoaXMub24oICdkZWFjdGl2YXRlJywgdGhpcy5vbkRlYWN0aXZhdGVEcmFnICk7XG4gIHRoaXMub24oICdjZWxsQ2hhbmdlJywgdGhpcy51cGRhdGVEcmFnZ2FibGUgKTtcbiAgLy8gVE9ETyB1cGRhdGVEcmFnZ2FibGUgb24gcmVzaXplPyBpZiBncm91cENlbGxzICYgc2xpZGVzIGNoYW5nZVxuICAvLyBIQUNLIC0gYWRkIHNlZW1pbmdseSBpbm5vY3VvdXMgaGFuZGxlciB0byBmaXggaU9TIDEwIHNjcm9sbCBiZWhhdmlvclxuICAvLyAjNDU3LCBSdWJhWGEvU29ydGFibGUjOTczXG4gIGlmICggaXNUb3VjaCAmJiAhaXNUb3VjaG1vdmVTY3JvbGxDYW5jZWxlZCApIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIGZ1bmN0aW9uKCkge30pO1xuICAgIGlzVG91Y2htb3ZlU2Nyb2xsQ2FuY2VsZWQgPSB0cnVlO1xuICB9XG59O1xuXG5wcm90by5vbkFjdGl2YXRlRHJhZyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmhhbmRsZXMgPSBbIHRoaXMudmlld3BvcnQgXTtcbiAgdGhpcy5iaW5kSGFuZGxlcygpO1xuICB0aGlzLnVwZGF0ZURyYWdnYWJsZSgpO1xufTtcblxucHJvdG8ub25EZWFjdGl2YXRlRHJhZyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnVuYmluZEhhbmRsZXMoKTtcbiAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRyYWdnYWJsZScpO1xufTtcblxucHJvdG8udXBkYXRlRHJhZ2dhYmxlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGRpc2FibGUgZHJhZ2dpbmcgaWYgbGVzcyB0aGFuIDIgc2xpZGVzLiAjMjc4XG4gIGlmICggdGhpcy5vcHRpb25zLmRyYWdnYWJsZSA9PSAnPjEnICkge1xuICAgIHRoaXMuaXNEcmFnZ2FibGUgPSB0aGlzLnNsaWRlcy5sZW5ndGggPiAxO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaXNEcmFnZ2FibGUgPSB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlO1xuICB9XG4gIGlmICggdGhpcy5pc0RyYWdnYWJsZSApIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtZHJhZ2dhYmxlJyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRyYWdnYWJsZScpO1xuICB9XG59O1xuXG4vLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxucHJvdG8uYmluZERyYWcgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSA9IHRydWU7XG4gIHRoaXMudXBkYXRlRHJhZ2dhYmxlKCk7XG59O1xuXG5wcm90by51bmJpbmREcmFnID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgdGhpcy51cGRhdGVEcmFnZ2FibGUoKTtcbn07XG5cbnByb3RvLl91aUNoYW5nZURyYWcgPSBmdW5jdGlvbigpIHtcbiAgZGVsZXRlIHRoaXMuaXNGcmVlU2Nyb2xsaW5nO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcG9pbnRlciBldmVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8ucG9pbnRlckRvd24gPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIGlmICggIXRoaXMuaXNEcmFnZ2FibGUgKSB7XG4gICAgdGhpcy5fcG9pbnRlckRvd25EZWZhdWx0KCBldmVudCwgcG9pbnRlciApO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgaXNPa2F5ID0gdGhpcy5va2F5UG9pbnRlckRvd24oIGV2ZW50ICk7XG4gIGlmICggIWlzT2theSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLl9wb2ludGVyRG93blByZXZlbnREZWZhdWx0KCBldmVudCApO1xuICB0aGlzLnBvaW50ZXJEb3duRm9jdXMoIGV2ZW50ICk7XG4gIC8vIGJsdXJcbiAgaWYgKCBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9IHRoaXMuZWxlbWVudCApIHtcbiAgICAvLyBkbyBub3QgYmx1ciBpZiBhbHJlYWR5IGZvY3VzZWRcbiAgICB0aGlzLnBvaW50ZXJEb3duQmx1cigpO1xuICB9XG5cbiAgLy8gc3RvcCBpZiBpdCB3YXMgbW92aW5nXG4gIHRoaXMuZHJhZ1ggPSB0aGlzLng7XG4gIHRoaXMudmlld3BvcnQuY2xhc3NMaXN0LmFkZCgnaXMtcG9pbnRlci1kb3duJyk7XG4gIC8vIHRyYWNrIHNjcm9sbGluZ1xuICB0aGlzLnBvaW50ZXJEb3duU2Nyb2xsID0gZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCB0aGlzICk7XG5cbiAgdGhpcy5fcG9pbnRlckRvd25EZWZhdWx0KCBldmVudCwgcG9pbnRlciApO1xufTtcblxuLy8gZGVmYXVsdCBwb2ludGVyRG93biBsb2dpYywgdXNlZCBmb3Igc3RhdGljQ2xpY2tcbnByb3RvLl9wb2ludGVyRG93bkRlZmF1bHQgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIC8vIHRyYWNrIHN0YXJ0IGV2ZW50IHBvc2l0aW9uXG4gIC8vIFNhZmFyaSA5IG92ZXJyaWRlcyBwYWdlWCBhbmQgcGFnZVkuIFRoZXNlIHZhbHVlcyBuZWVkcyB0byBiZSBjb3BpZWQuICM3NzlcbiAgdGhpcy5wb2ludGVyRG93blBvaW50ZXIgPSB7XG4gICAgcGFnZVg6IHBvaW50ZXIucGFnZVgsXG4gICAgcGFnZVk6IHBvaW50ZXIucGFnZVksXG4gIH07XG4gIC8vIGJpbmQgbW92ZSBhbmQgZW5kIGV2ZW50c1xuICB0aGlzLl9iaW5kUG9zdFN0YXJ0RXZlbnRzKCBldmVudCApO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdwb2ludGVyRG93bicsIGV2ZW50LCBbIHBvaW50ZXIgXSApO1xufTtcblxudmFyIGZvY3VzTm9kZXMgPSB7XG4gIElOUFVUOiB0cnVlLFxuICBURVhUQVJFQTogdHJ1ZSxcbiAgU0VMRUNUOiB0cnVlLFxufTtcblxucHJvdG8ucG9pbnRlckRvd25Gb2N1cyA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIGlzRm9jdXNOb2RlID0gZm9jdXNOb2Rlc1sgZXZlbnQudGFyZ2V0Lm5vZGVOYW1lIF07XG4gIGlmICggIWlzRm9jdXNOb2RlICkge1xuICAgIHRoaXMuZm9jdXMoKTtcbiAgfVxufTtcblxucHJvdG8uX3BvaW50ZXJEb3duUHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBpc1RvdWNoU3RhcnQgPSBldmVudC50eXBlID09ICd0b3VjaHN0YXJ0JztcbiAgdmFyIGlzVG91Y2hQb2ludGVyID0gZXZlbnQucG9pbnRlclR5cGUgPT0gJ3RvdWNoJztcbiAgdmFyIGlzRm9jdXNOb2RlID0gZm9jdXNOb2Rlc1sgZXZlbnQudGFyZ2V0Lm5vZGVOYW1lIF07XG4gIGlmICggIWlzVG91Y2hTdGFydCAmJiAhaXNUb3VjaFBvaW50ZXIgJiYgIWlzRm9jdXNOb2RlICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIG1vdmUgLS0tLS0gLy9cblxucHJvdG8uaGFzRHJhZ1N0YXJ0ZWQgPSBmdW5jdGlvbiggbW92ZVZlY3RvciApIHtcbiAgcmV0dXJuIE1hdGguYWJzKCBtb3ZlVmVjdG9yLnggKSA+IHRoaXMub3B0aW9ucy5kcmFnVGhyZXNob2xkO1xufTtcblxuLy8gLS0tLS0gdXAgLS0tLS0gLy9cblxucHJvdG8ucG9pbnRlclVwID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICBkZWxldGUgdGhpcy5pc1RvdWNoU2Nyb2xsaW5nO1xuICB0aGlzLnZpZXdwb3J0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXBvaW50ZXItZG93bicpO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdwb2ludGVyVXAnLCBldmVudCwgWyBwb2ludGVyIF0gKTtcbiAgdGhpcy5fZHJhZ1BvaW50ZXJVcCggZXZlbnQsIHBvaW50ZXIgKTtcbn07XG5cbnByb3RvLnBvaW50ZXJEb25lID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgdGhpcyApO1xuICBkZWxldGUgdGhpcy5wb2ludGVyRG93blNjcm9sbDtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRyYWdnaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnByb3RvLmRyYWdTdGFydCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgaWYgKCAhdGhpcy5pc0RyYWdnYWJsZSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbiA9IHRoaXMueDtcbiAgdGhpcy5zdGFydEFuaW1hdGlvbigpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Njcm9sbCcsIHRoaXMgKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnZHJhZ1N0YXJ0JywgZXZlbnQsIFsgcG9pbnRlciBdICk7XG59O1xuXG5wcm90by5wb2ludGVyTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdmFyIG1vdmVWZWN0b3IgPSB0aGlzLl9kcmFnUG9pbnRlck1vdmUoIGV2ZW50LCBwb2ludGVyICk7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ3BvaW50ZXJNb3ZlJywgZXZlbnQsIFsgcG9pbnRlciwgbW92ZVZlY3RvciBdICk7XG4gIHRoaXMuX2RyYWdNb3ZlKCBldmVudCwgcG9pbnRlciwgbW92ZVZlY3RvciApO1xufTtcblxucHJvdG8uZHJhZ01vdmUgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgKSB7XG4gIGlmICggIXRoaXMuaXNEcmFnZ2FibGUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgdGhpcy5wcmV2aW91c0RyYWdYID0gdGhpcy5kcmFnWDtcbiAgLy8gcmV2ZXJzZSBpZiByaWdodC10by1sZWZ0XG4gIHZhciBkaXJlY3Rpb24gPSB0aGlzLm9wdGlvbnMucmlnaHRUb0xlZnQgPyAtMSA6IDE7XG4gIGlmICggdGhpcy5vcHRpb25zLndyYXBBcm91bmQgKSB7XG4gICAgLy8gd3JhcCBhcm91bmQgbW92ZS4gIzU4OVxuICAgIG1vdmVWZWN0b3IueCA9IG1vdmVWZWN0b3IueCAlIHRoaXMuc2xpZGVhYmxlV2lkdGg7XG4gIH1cbiAgdmFyIGRyYWdYID0gdGhpcy5kcmFnU3RhcnRQb3NpdGlvbiArIG1vdmVWZWN0b3IueCAqIGRpcmVjdGlvbjtcblxuICBpZiAoICF0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCAmJiB0aGlzLnNsaWRlcy5sZW5ndGggKSB7XG4gICAgLy8gc2xvdyBkcmFnXG4gICAgdmFyIG9yaWdpbkJvdW5kID0gTWF0aC5tYXgoIC10aGlzLnNsaWRlc1swXS50YXJnZXQsIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24gKTtcbiAgICBkcmFnWCA9IGRyYWdYID4gb3JpZ2luQm91bmQgPyAoIGRyYWdYICsgb3JpZ2luQm91bmQgKSAqIDAuNSA6IGRyYWdYO1xuICAgIHZhciBlbmRCb3VuZCA9IE1hdGgubWluKCAtdGhpcy5nZXRMYXN0U2xpZGUoKS50YXJnZXQsIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24gKTtcbiAgICBkcmFnWCA9IGRyYWdYIDwgZW5kQm91bmQgPyAoIGRyYWdYICsgZW5kQm91bmQgKSAqIDAuNSA6IGRyYWdYO1xuICB9XG5cbiAgdGhpcy5kcmFnWCA9IGRyYWdYO1xuXG4gIHRoaXMuZHJhZ01vdmVUaW1lID0gbmV3IERhdGUoKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnZHJhZ01vdmUnLCBldmVudCwgWyBwb2ludGVyLCBtb3ZlVmVjdG9yIF0gKTtcbn07XG5cbnByb3RvLmRyYWdFbmQgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIGlmICggIXRoaXMuaXNEcmFnZ2FibGUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICggdGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgKSB7XG4gICAgdGhpcy5pc0ZyZWVTY3JvbGxpbmcgPSB0cnVlO1xuICB9XG4gIC8vIHNldCBzZWxlY3RlZEluZGV4IGJhc2VkIG9uIHdoZXJlIGZsaWNrIHdpbGwgZW5kIHVwXG4gIHZhciBpbmRleCA9IHRoaXMuZHJhZ0VuZFJlc3RpbmdTZWxlY3QoKTtcblxuICBpZiAoIHRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsICYmICF0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCApIHtcbiAgICAvLyBpZiBmcmVlLXNjcm9sbCAmIG5vdCB3cmFwIGFyb3VuZFxuICAgIC8vIGRvIG5vdCBmcmVlLXNjcm9sbCBpZiBnb2luZyBvdXRzaWRlIG9mIGJvdW5kaW5nIHNsaWRlc1xuICAgIC8vIHNvIGJvdW5kaW5nIHNsaWRlcyBjYW4gYXR0cmFjdCBzbGlkZXIsIGFuZCBrZWVwIGl0IGluIGJvdW5kc1xuICAgIHZhciByZXN0aW5nWCA9IHRoaXMuZ2V0UmVzdGluZ1Bvc2l0aW9uKCk7XG4gICAgdGhpcy5pc0ZyZWVTY3JvbGxpbmcgPSAtcmVzdGluZ1ggPiB0aGlzLnNsaWRlc1swXS50YXJnZXQgJiZcbiAgICAgIC1yZXN0aW5nWCA8IHRoaXMuZ2V0TGFzdFNsaWRlKCkudGFyZ2V0O1xuICB9IGVsc2UgaWYgKCAhdGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgJiYgaW5kZXggPT0gdGhpcy5zZWxlY3RlZEluZGV4ICkge1xuICAgIC8vIGJvb3N0IHNlbGVjdGlvbiBpZiBzZWxlY3RlZCBpbmRleCBoYXMgbm90IGNoYW5nZWRcbiAgICBpbmRleCArPSB0aGlzLmRyYWdFbmRCb29zdFNlbGVjdCgpO1xuICB9XG4gIGRlbGV0ZSB0aGlzLnByZXZpb3VzRHJhZ1g7XG4gIC8vIGFwcGx5IHNlbGVjdGlvblxuICAvLyBUT0RPIHJlZmFjdG9yIHRoaXMsIHNlbGVjdGluZyBoZXJlIGZlZWxzIHdlaXJkXG4gIC8vIEhBQ0ssIHNldCBmbGFnIHNvIGRyYWdnaW5nIHN0YXlzIGluIGNvcnJlY3QgZGlyZWN0aW9uXG4gIHRoaXMuaXNEcmFnU2VsZWN0ID0gdGhpcy5vcHRpb25zLndyYXBBcm91bmQ7XG4gIHRoaXMuc2VsZWN0KCBpbmRleCApO1xuICBkZWxldGUgdGhpcy5pc0RyYWdTZWxlY3Q7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2RyYWdFbmQnLCBldmVudCwgWyBwb2ludGVyIF0gKTtcbn07XG5cbnByb3RvLmRyYWdFbmRSZXN0aW5nU2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXN0aW5nWCA9IHRoaXMuZ2V0UmVzdGluZ1Bvc2l0aW9uKCk7XG4gIC8vIGhvdyBmYXIgYXdheSBmcm9tIHNlbGVjdGVkIHNsaWRlXG4gIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKCB0aGlzLmdldFNsaWRlRGlzdGFuY2UoIC1yZXN0aW5nWCwgdGhpcy5zZWxlY3RlZEluZGV4ICkgKTtcbiAgLy8gZ2V0IGNsb3NldCByZXN0aW5nIGdvaW5nIHVwIGFuZCBnb2luZyBkb3duXG4gIHZhciBwb3NpdGl2ZVJlc3RpbmcgPSB0aGlzLl9nZXRDbG9zZXN0UmVzdGluZyggcmVzdGluZ1gsIGRpc3RhbmNlLCAxICk7XG4gIHZhciBuZWdhdGl2ZVJlc3RpbmcgPSB0aGlzLl9nZXRDbG9zZXN0UmVzdGluZyggcmVzdGluZ1gsIGRpc3RhbmNlLCAtMSApO1xuICAvLyB1c2UgY2xvc2VyIHJlc3RpbmcgZm9yIHdyYXAtYXJvdW5kXG4gIHZhciBpbmRleCA9IHBvc2l0aXZlUmVzdGluZy5kaXN0YW5jZSA8IG5lZ2F0aXZlUmVzdGluZy5kaXN0YW5jZSA/XG4gICAgcG9zaXRpdmVSZXN0aW5nLmluZGV4IDogbmVnYXRpdmVSZXN0aW5nLmluZGV4O1xuICByZXR1cm4gaW5kZXg7XG59O1xuXG4vKipcbiAqIGdpdmVuIHJlc3RpbmcgWCBhbmQgZGlzdGFuY2UgdG8gc2VsZWN0ZWQgY2VsbFxuICogZ2V0IHRoZSBkaXN0YW5jZSBhbmQgaW5kZXggb2YgdGhlIGNsb3Nlc3QgY2VsbFxuICogQHBhcmFtIHtOdW1iZXJ9IHJlc3RpbmdYIC0gZXN0aW1hdGVkIHBvc3QtZmxpY2sgcmVzdGluZyBwb3NpdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGRpc3RhbmNlIC0gZGlzdGFuY2UgdG8gc2VsZWN0ZWQgY2VsbFxuICogQHBhcmFtIHtJbnRlZ2VyfSBpbmNyZW1lbnQgLSArMSBvciAtMSwgZ29pbmcgdXAgb3IgZG93blxuICogQHJldHVybnMge09iamVjdH0gLSB7IGRpc3RhbmNlOiB7TnVtYmVyfSwgaW5kZXg6IHtJbnRlZ2VyfSB9XG4gKi9cbnByb3RvLl9nZXRDbG9zZXN0UmVzdGluZyA9IGZ1bmN0aW9uKCByZXN0aW5nWCwgZGlzdGFuY2UsIGluY3JlbWVudCApIHtcbiAgdmFyIGluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICB2YXIgbWluRGlzdGFuY2UgPSBJbmZpbml0eTtcbiAgdmFyIGNvbmRpdGlvbiA9IHRoaXMub3B0aW9ucy5jb250YWluICYmICF0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCA/XG4gICAgLy8gaWYgY29udGFpbiwga2VlcCBnb2luZyBpZiBkaXN0YW5jZSBpcyBlcXVhbCB0byBtaW5EaXN0YW5jZVxuICAgIGZ1bmN0aW9uKCBkLCBtZCApIHsgcmV0dXJuIGQgPD0gbWQ7IH0gOiBmdW5jdGlvbiggZCwgbWQgKSB7IHJldHVybiBkIDwgbWQ7IH07XG4gIHdoaWxlICggY29uZGl0aW9uKCBkaXN0YW5jZSwgbWluRGlzdGFuY2UgKSApIHtcbiAgICAvLyBtZWFzdXJlIGRpc3RhbmNlIHRvIG5leHQgY2VsbFxuICAgIGluZGV4ICs9IGluY3JlbWVudDtcbiAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIGRpc3RhbmNlID0gdGhpcy5nZXRTbGlkZURpc3RhbmNlKCAtcmVzdGluZ1gsIGluZGV4ICk7XG4gICAgaWYgKCBkaXN0YW5jZSA9PT0gbnVsbCApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkaXN0YW5jZSA9IE1hdGguYWJzKCBkaXN0YW5jZSApO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGlzdGFuY2U6IG1pbkRpc3RhbmNlLFxuICAgIC8vIHNlbGVjdGVkIHdhcyBwcmV2aW91cyBpbmRleFxuICAgIGluZGV4OiBpbmRleCAtIGluY3JlbWVudFxuICB9O1xufTtcblxuLyoqXG4gKiBtZWFzdXJlIGRpc3RhbmNlIGJldHdlZW4geCBhbmQgYSBzbGlkZSB0YXJnZXRcbiAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluZGV4IC0gc2xpZGUgaW5kZXhcbiAqL1xucHJvdG8uZ2V0U2xpZGVEaXN0YW5jZSA9IGZ1bmN0aW9uKCB4LCBpbmRleCApIHtcbiAgdmFyIGxlbiA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgLy8gd3JhcCBhcm91bmQgaWYgYXQgbGVhc3QgMiBzbGlkZXNcbiAgdmFyIGlzV3JhcEFyb3VuZCA9IHRoaXMub3B0aW9ucy53cmFwQXJvdW5kICYmIGxlbiA+IDE7XG4gIHZhciBzbGlkZUluZGV4ID0gaXNXcmFwQXJvdW5kID8gdXRpbHMubW9kdWxvKCBpbmRleCwgbGVuICkgOiBpbmRleDtcbiAgdmFyIHNsaWRlID0gdGhpcy5zbGlkZXNbIHNsaWRlSW5kZXggXTtcbiAgaWYgKCAhc2xpZGUgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLy8gYWRkIGRpc3RhbmNlIGZvciB3cmFwLWFyb3VuZCBzbGlkZXNcbiAgdmFyIHdyYXAgPSBpc1dyYXBBcm91bmQgPyB0aGlzLnNsaWRlYWJsZVdpZHRoICogTWF0aC5mbG9vciggaW5kZXggLyBsZW4gKSA6IDA7XG4gIHJldHVybiB4IC0gKCBzbGlkZS50YXJnZXQgKyB3cmFwICk7XG59O1xuXG5wcm90by5kcmFnRW5kQm9vc3RTZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgLy8gZG8gbm90IGJvb3N0IGlmIG5vIHByZXZpb3VzRHJhZ1ggb3IgZHJhZ01vdmVUaW1lXG4gIGlmICggdGhpcy5wcmV2aW91c0RyYWdYID09PSB1bmRlZmluZWQgfHwgIXRoaXMuZHJhZ01vdmVUaW1lIHx8XG4gICAgLy8gb3IgaWYgZHJhZyB3YXMgaGVsZCBmb3IgMTAwIG1zXG4gICAgbmV3IERhdGUoKSAtIHRoaXMuZHJhZ01vdmVUaW1lID4gMTAwICkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIGRpc3RhbmNlID0gdGhpcy5nZXRTbGlkZURpc3RhbmNlKCAtdGhpcy5kcmFnWCwgdGhpcy5zZWxlY3RlZEluZGV4ICk7XG4gIHZhciBkZWx0YSA9IHRoaXMucHJldmlvdXNEcmFnWCAtIHRoaXMuZHJhZ1g7XG4gIGlmICggZGlzdGFuY2UgPiAwICYmIGRlbHRhID4gMCApIHtcbiAgICAvLyBib29zdCB0byBuZXh0IGlmIG1vdmluZyB0b3dhcmRzIHRoZSByaWdodCwgYW5kIHBvc2l0aXZlIHZlbG9jaXR5XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAoIGRpc3RhbmNlIDwgMCAmJiBkZWx0YSA8IDAgKSB7XG4gICAgLy8gYm9vc3QgdG8gcHJldmlvdXMgaWYgbW92aW5nIHRvd2FyZHMgdGhlIGxlZnQsIGFuZCBuZWdhdGl2ZSB2ZWxvY2l0eVxuICAgIHJldHVybiAtMTtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbi8vIC0tLS0tIHN0YXRpY0NsaWNrIC0tLS0tIC8vXG5cbnByb3RvLnN0YXRpY0NsaWNrID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICAvLyBnZXQgY2xpY2tlZENlbGwsIGlmIGNlbGwgd2FzIGNsaWNrZWRcbiAgdmFyIGNsaWNrZWRDZWxsID0gdGhpcy5nZXRQYXJlbnRDZWxsKCBldmVudC50YXJnZXQgKTtcbiAgdmFyIGNlbGxFbGVtID0gY2xpY2tlZENlbGwgJiYgY2xpY2tlZENlbGwuZWxlbWVudDtcbiAgdmFyIGNlbGxJbmRleCA9IGNsaWNrZWRDZWxsICYmIHRoaXMuY2VsbHMuaW5kZXhPZiggY2xpY2tlZENlbGwgKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnc3RhdGljQ2xpY2snLCBldmVudCwgWyBwb2ludGVyLCBjZWxsRWxlbSwgY2VsbEluZGV4IF0gKTtcbn07XG5cbi8vIC0tLS0tIHNjcm9sbCAtLS0tLSAvL1xuXG5wcm90by5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2Nyb2xsID0gZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgdmFyIHNjcm9sbE1vdmVYID0gdGhpcy5wb2ludGVyRG93blNjcm9sbC54IC0gc2Nyb2xsLng7XG4gIHZhciBzY3JvbGxNb3ZlWSA9IHRoaXMucG9pbnRlckRvd25TY3JvbGwueSAtIHNjcm9sbC55O1xuICAvLyBjYW5jZWwgY2xpY2svdGFwIGlmIHNjcm9sbCBpcyB0b28gbXVjaFxuICBpZiAoIE1hdGguYWJzKCBzY3JvbGxNb3ZlWCApID4gMyB8fCBNYXRoLmFicyggc2Nyb2xsTW92ZVkgKSA+IDMgKSB7XG4gICAgdGhpcy5fcG9pbnRlckRvbmUoKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gdXRpbHMgLS0tLS0gLy9cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUG9zaXRpb24oKSB7XG4gIHJldHVybiB7XG4gICAgeDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgIHk6IHdpbmRvdy5wYWdlWU9mZnNldFxuICB9O1xufVxuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG4iLCIvLyBGbGlja2l0eSBtYWluXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2V2LWVtaXR0ZXIvZXYtZW1pdHRlcicsXG4gICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnLFxuICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJyxcbiAgICAgICcuL2NlbGwnLFxuICAgICAgJy4vc2xpZGUnLFxuICAgICAgJy4vYW5pbWF0ZSdcbiAgICBdLCBmdW5jdGlvbiggRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgQ2VsbCwgU2xpZGUsIGFuaW1hdGVQcm90b3R5cGUgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBDZWxsLCBTbGlkZSwgYW5pbWF0ZVByb3RvdHlwZSApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpLFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKSxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgICByZXF1aXJlKCcuL2NlbGwnKSxcbiAgICAgIHJlcXVpcmUoJy4vc2xpZGUnKSxcbiAgICAgIHJlcXVpcmUoJy4vYW5pbWF0ZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHZhciBfRmxpY2tpdHkgPSB3aW5kb3cuRmxpY2tpdHk7XG5cbiAgICB3aW5kb3cuRmxpY2tpdHkgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkV2RW1pdHRlcixcbiAgICAgIHdpbmRvdy5nZXRTaXplLFxuICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICAgIF9GbGlja2l0eS5DZWxsLFxuICAgICAgX0ZsaWNraXR5LlNsaWRlLFxuICAgICAgX0ZsaWNraXR5LmFuaW1hdGVQcm90b3R5cGVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIGdldFNpemUsXG4gIHV0aWxzLCBDZWxsLCBTbGlkZSwgYW5pbWF0ZVByb3RvdHlwZSApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyB2YXJzXG52YXIgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcbnZhciBnZXRDb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGU7XG52YXIgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlO1xuXG5mdW5jdGlvbiBtb3ZlRWxlbWVudHMoIGVsZW1zLCB0b0VsZW0gKSB7XG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICB3aGlsZSAoIGVsZW1zLmxlbmd0aCApIHtcbiAgICB0b0VsZW0uYXBwZW5kQ2hpbGQoIGVsZW1zLnNoaWZ0KCkgKTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGbGlja2l0eSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnbG9iYWxseSB1bmlxdWUgaWRlbnRpZmllcnNcbnZhciBHVUlEID0gMDtcbi8vIGludGVybmFsIHN0b3JlIG9mIGFsbCBGbGlja2l0eSBpbnRhbmNlc1xudmFyIGluc3RhbmNlcyA9IHt9O1xuXG5mdW5jdGlvbiBGbGlja2l0eSggZWxlbWVudCwgb3B0aW9ucyApIHtcbiAgdmFyIHF1ZXJ5RWxlbWVudCA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbWVudCApO1xuICBpZiAoICFxdWVyeUVsZW1lbnQgKSB7XG4gICAgaWYgKCBjb25zb2xlICkge1xuICAgICAgY29uc29sZS5lcnJvciggJ0JhZCBlbGVtZW50IGZvciBGbGlja2l0eTogJyArICggcXVlcnlFbGVtZW50IHx8IGVsZW1lbnQgKSApO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5lbGVtZW50ID0gcXVlcnlFbGVtZW50O1xuICAvLyBkbyBub3QgaW5pdGlhbGl6ZSB0d2ljZSBvbiBzYW1lIGVsZW1lbnRcbiAgaWYgKCB0aGlzLmVsZW1lbnQuZmxpY2tpdHlHVUlEICkge1xuICAgIHZhciBpbnN0YW5jZSA9IGluc3RhbmNlc1sgdGhpcy5lbGVtZW50LmZsaWNraXR5R1VJRCBdO1xuICAgIGluc3RhbmNlLm9wdGlvbiggb3B0aW9ucyApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8vIGFkZCBqUXVlcnlcbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9IGpRdWVyeSggdGhpcy5lbGVtZW50ICk7XG4gIH1cbiAgLy8gb3B0aW9uc1xuICB0aGlzLm9wdGlvbnMgPSB1dGlscy5leHRlbmQoIHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRzICk7XG4gIHRoaXMub3B0aW9uKCBvcHRpb25zICk7XG5cbiAgLy8ga2ljayB0aGluZ3Mgb2ZmXG4gIHRoaXMuX2NyZWF0ZSgpO1xufVxuXG5GbGlja2l0eS5kZWZhdWx0cyA9IHtcbiAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgLy8gYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICBjZWxsQWxpZ246ICdjZW50ZXInLFxuICAvLyBjZWxsU2VsZWN0b3I6IHVuZGVmaW5lZCxcbiAgLy8gY29udGFpbjogZmFsc2UsXG4gIGZyZWVTY3JvbGxGcmljdGlvbjogMC4wNzUsIC8vIGZyaWN0aW9uIHdoZW4gZnJlZS1zY3JvbGxpbmdcbiAgZnJpY3Rpb246IDAuMjgsIC8vIGZyaWN0aW9uIHdoZW4gc2VsZWN0aW5nXG4gIG5hbWVzcGFjZUpRdWVyeUV2ZW50czogdHJ1ZSxcbiAgLy8gaW5pdGlhbEluZGV4OiAwLFxuICBwZXJjZW50UG9zaXRpb246IHRydWUsXG4gIHJlc2l6ZTogdHJ1ZSxcbiAgc2VsZWN0ZWRBdHRyYWN0aW9uOiAwLjAyNSxcbiAgc2V0R2FsbGVyeVNpemU6IHRydWVcbiAgLy8gd2F0Y2hDU1M6IGZhbHNlLFxuICAvLyB3cmFwQXJvdW5kOiBmYWxzZVxufTtcblxuLy8gaGFzaCBvZiBtZXRob2RzIHRyaWdnZXJlZCBvbiBfY3JlYXRlKClcbkZsaWNraXR5LmNyZWF0ZU1ldGhvZHMgPSBbXTtcblxudmFyIHByb3RvID0gRmxpY2tpdHkucHJvdG90eXBlO1xuLy8gaW5oZXJpdCBFdmVudEVtaXR0ZXJcbnV0aWxzLmV4dGVuZCggcHJvdG8sIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcblxucHJvdG8uX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBhZGQgaWQgZm9yIEZsaWNraXR5LmRhdGFcbiAgdmFyIGlkID0gdGhpcy5ndWlkID0gKytHVUlEO1xuICB0aGlzLmVsZW1lbnQuZmxpY2tpdHlHVUlEID0gaWQ7IC8vIGV4cGFuZG9cbiAgaW5zdGFuY2VzWyBpZCBdID0gdGhpczsgLy8gYXNzb2NpYXRlIHZpYSBpZFxuICAvLyBpbml0aWFsIHByb3BlcnRpZXNcbiAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcbiAgLy8gaG93IG1hbnkgZnJhbWVzIHNsaWRlciBoYXMgYmVlbiBpbiBzYW1lIHBvc2l0aW9uXG4gIHRoaXMucmVzdGluZ0ZyYW1lcyA9IDA7XG4gIC8vIGluaXRpYWwgcGh5c2ljcyBwcm9wZXJ0aWVzXG4gIHRoaXMueCA9IDA7XG4gIHRoaXMudmVsb2NpdHkgPSAwO1xuICB0aGlzLm9yaWdpblNpZGUgPSB0aGlzLm9wdGlvbnMucmlnaHRUb0xlZnQgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAvLyBjcmVhdGUgdmlld3BvcnQgJiBzbGlkZXJcbiAgdGhpcy52aWV3cG9ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aGlzLnZpZXdwb3J0LmNsYXNzTmFtZSA9ICdmbGlja2l0eS12aWV3cG9ydCc7XG4gIHRoaXMuX2NyZWF0ZVNsaWRlcigpO1xuXG4gIGlmICggdGhpcy5vcHRpb25zLnJlc2l6ZSB8fCB0aGlzLm9wdGlvbnMud2F0Y2hDU1MgKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzICk7XG4gIH1cblxuICAvLyBhZGQgbGlzdGVuZXJzIGZyb20gb24gb3B0aW9uXG4gIGZvciAoIHZhciBldmVudE5hbWUgaW4gdGhpcy5vcHRpb25zLm9uICkge1xuICAgIHZhciBsaXN0ZW5lciA9IHRoaXMub3B0aW9ucy5vblsgZXZlbnROYW1lIF07XG4gICAgdGhpcy5vbiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICB9XG5cbiAgRmxpY2tpdHkuY3JlYXRlTWV0aG9kcy5mb3JFYWNoKCBmdW5jdGlvbiggbWV0aG9kICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCk7XG4gIH0sIHRoaXMgKTtcblxuICBpZiAoIHRoaXMub3B0aW9ucy53YXRjaENTUyApIHtcbiAgICB0aGlzLndhdGNoQ1NTKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5hY3RpdmF0ZSgpO1xuICB9XG5cbn07XG5cbi8qKlxuICogc2V0IG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKi9cbnByb3RvLm9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRzICkge1xuICB1dGlscy5leHRlbmQoIHRoaXMub3B0aW9ucywgb3B0cyApO1xufTtcblxucHJvdG8uYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmlzQWN0aXZlICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZsaWNraXR5LWVuYWJsZWQnKTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMucmlnaHRUb0xlZnQgKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZsaWNraXR5LXJ0bCcpO1xuICB9XG5cbiAgdGhpcy5nZXRTaXplKCk7XG4gIC8vIG1vdmUgaW5pdGlhbCBjZWxsIGVsZW1lbnRzIHNvIHRoZXkgY2FuIGJlIGxvYWRlZCBhcyBjZWxsc1xuICB2YXIgY2VsbEVsZW1zID0gdGhpcy5fZmlsdGVyRmluZENlbGxFbGVtZW50cyggdGhpcy5lbGVtZW50LmNoaWxkcmVuICk7XG4gIG1vdmVFbGVtZW50cyggY2VsbEVsZW1zLCB0aGlzLnNsaWRlciApO1xuICB0aGlzLnZpZXdwb3J0LmFwcGVuZENoaWxkKCB0aGlzLnNsaWRlciApO1xuICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoIHRoaXMudmlld3BvcnQgKTtcbiAgLy8gZ2V0IGNlbGxzIGZyb20gY2hpbGRyZW5cbiAgdGhpcy5yZWxvYWRDZWxscygpO1xuXG4gIGlmICggdGhpcy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgKSB7XG4gICAgLy8gYWxsb3cgZWxlbWVudCB0byBmb2N1c2FibGVcbiAgICB0aGlzLmVsZW1lbnQudGFiSW5kZXggPSAwO1xuICAgIC8vIGxpc3RlbiBmb3Iga2V5IHByZXNzZXNcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzICk7XG4gIH1cblxuICB0aGlzLmVtaXRFdmVudCgnYWN0aXZhdGUnKTtcbiAgdGhpcy5zZWxlY3RJbml0aWFsSW5kZXgoKTtcbiAgLy8gZmxhZyBmb3IgaW5pdGlhbCBhY3RpdmF0aW9uLCBmb3IgdXNpbmcgaW5pdGlhbEluZGV4XG4gIHRoaXMuaXNJbml0QWN0aXZhdGVkID0gdHJ1ZTtcbiAgLy8gcmVhZHkgZXZlbnQuICM0OTNcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdyZWFkeScpO1xufTtcblxuLy8gc2xpZGVyIHBvc2l0aW9ucyB0aGUgY2VsbHNcbnByb3RvLl9jcmVhdGVTbGlkZXIgPSBmdW5jdGlvbigpIHtcbiAgLy8gc2xpZGVyIGVsZW1lbnQgZG9lcyBhbGwgdGhlIHBvc2l0aW9uaW5nXG4gIHZhciBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2xpZGVyLmNsYXNzTmFtZSA9ICdmbGlja2l0eS1zbGlkZXInO1xuICBzbGlkZXIuc3R5bGVbIHRoaXMub3JpZ2luU2lkZSBdID0gMDtcbiAgdGhpcy5zbGlkZXIgPSBzbGlkZXI7XG59O1xuXG5wcm90by5fZmlsdGVyRmluZENlbGxFbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgcmV0dXJuIHV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyggZWxlbXMsIHRoaXMub3B0aW9ucy5jZWxsU2VsZWN0b3IgKTtcbn07XG5cbi8vIGdvZXMgdGhyb3VnaCBhbGwgY2hpbGRyZW5cbnByb3RvLnJlbG9hZENlbGxzID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNvbGxlY3Rpb24gb2YgaXRlbSBlbGVtZW50c1xuICB0aGlzLmNlbGxzID0gdGhpcy5fbWFrZUNlbGxzKCB0aGlzLnNsaWRlci5jaGlsZHJlbiApO1xuICB0aGlzLnBvc2l0aW9uQ2VsbHMoKTtcbiAgdGhpcy5fZ2V0V3JhcFNoaWZ0Q2VsbHMoKTtcbiAgdGhpcy5zZXRHYWxsZXJ5U2l6ZSgpO1xufTtcblxuLyoqXG4gKiB0dXJuIGVsZW1lbnRzIGludG8gRmxpY2tpdHkuQ2VsbHNcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgSFRNTEVsZW1lbnR9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gY29sbGVjdGlvbiBvZiBuZXcgRmxpY2tpdHkgQ2VsbHNcbiAqL1xucHJvdG8uX21ha2VDZWxscyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGNlbGxFbGVtcyA9IHRoaXMuX2ZpbHRlckZpbmRDZWxsRWxlbWVudHMoIGVsZW1zICk7XG5cbiAgLy8gY3JlYXRlIG5ldyBGbGlja2l0eSBmb3IgY29sbGVjdGlvblxuICB2YXIgY2VsbHMgPSBjZWxsRWxlbXMubWFwKCBmdW5jdGlvbiggY2VsbEVsZW0gKSB7XG4gICAgcmV0dXJuIG5ldyBDZWxsKCBjZWxsRWxlbSwgdGhpcyApO1xuICB9LCB0aGlzICk7XG5cbiAgcmV0dXJuIGNlbGxzO1xufTtcblxucHJvdG8uZ2V0TGFzdENlbGwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY2VsbHNbIHRoaXMuY2VsbHMubGVuZ3RoIC0gMSBdO1xufTtcblxucHJvdG8uZ2V0TGFzdFNsaWRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNsaWRlc1sgdGhpcy5zbGlkZXMubGVuZ3RoIC0gMSBdO1xufTtcblxuLy8gcG9zaXRpb25zIGFsbCBjZWxsc1xucHJvdG8ucG9zaXRpb25DZWxscyA9IGZ1bmN0aW9uKCkge1xuICAvLyBzaXplIGFsbCBjZWxsc1xuICB0aGlzLl9zaXplQ2VsbHMoIHRoaXMuY2VsbHMgKTtcbiAgLy8gcG9zaXRpb24gYWxsIGNlbGxzXG4gIHRoaXMuX3Bvc2l0aW9uQ2VsbHMoIDAgKTtcbn07XG5cbi8qKlxuICogcG9zaXRpb24gY2VydGFpbiBjZWxsc1xuICogQHBhcmFtIHtJbnRlZ2VyfSBpbmRleCAtIHdoaWNoIGNlbGwgdG8gc3RhcnQgd2l0aFxuICovXG5wcm90by5fcG9zaXRpb25DZWxscyA9IGZ1bmN0aW9uKCBpbmRleCApIHtcbiAgaW5kZXggPSBpbmRleCB8fCAwO1xuICAvLyBhbHNvIG1lYXN1cmUgbWF4Q2VsbEhlaWdodFxuICAvLyBzdGFydCAwIGlmIHBvc2l0aW9uaW5nIGFsbCBjZWxsc1xuICB0aGlzLm1heENlbGxIZWlnaHQgPSBpbmRleCA/IHRoaXMubWF4Q2VsbEhlaWdodCB8fCAwIDogMDtcbiAgdmFyIGNlbGxYID0gMDtcbiAgLy8gZ2V0IGNlbGxYXG4gIGlmICggaW5kZXggPiAwICkge1xuICAgIHZhciBzdGFydENlbGwgPSB0aGlzLmNlbGxzWyBpbmRleCAtIDEgXTtcbiAgICBjZWxsWCA9IHN0YXJ0Q2VsbC54ICsgc3RhcnRDZWxsLnNpemUub3V0ZXJXaWR0aDtcbiAgfVxuICB2YXIgbGVuID0gdGhpcy5jZWxscy5sZW5ndGg7XG4gIGZvciAoIHZhciBpPWluZGV4OyBpIDwgbGVuOyBpKysgKSB7XG4gICAgdmFyIGNlbGwgPSB0aGlzLmNlbGxzW2ldO1xuICAgIGNlbGwuc2V0UG9zaXRpb24oIGNlbGxYICk7XG4gICAgY2VsbFggKz0gY2VsbC5zaXplLm91dGVyV2lkdGg7XG4gICAgdGhpcy5tYXhDZWxsSGVpZ2h0ID0gTWF0aC5tYXgoIGNlbGwuc2l6ZS5vdXRlckhlaWdodCwgdGhpcy5tYXhDZWxsSGVpZ2h0ICk7XG4gIH1cbiAgLy8ga2VlcCB0cmFjayBvZiBjZWxsWCBmb3Igd3JhcC1hcm91bmRcbiAgdGhpcy5zbGlkZWFibGVXaWR0aCA9IGNlbGxYO1xuICAvLyBzbGlkZXNcbiAgdGhpcy51cGRhdGVTbGlkZXMoKTtcbiAgLy8gY29udGFpbiBzbGlkZXMgdGFyZ2V0XG4gIHRoaXMuX2NvbnRhaW5TbGlkZXMoKTtcbiAgLy8gdXBkYXRlIHNsaWRlc1dpZHRoXG4gIHRoaXMuc2xpZGVzV2lkdGggPSBsZW4gPyB0aGlzLmdldExhc3RTbGlkZSgpLnRhcmdldCAtIHRoaXMuc2xpZGVzWzBdLnRhcmdldCA6IDA7XG59O1xuXG4vKipcbiAqIGNlbGwuZ2V0U2l6ZSgpIG9uIG11bHRpcGxlIGNlbGxzXG4gKiBAcGFyYW0ge0FycmF5fSBjZWxsc1xuICovXG5wcm90by5fc2l6ZUNlbGxzID0gZnVuY3Rpb24oIGNlbGxzICkge1xuICBjZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICBjZWxsLmdldFNpemUoKTtcbiAgfSk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8udXBkYXRlU2xpZGVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2xpZGVzID0gW107XG4gIGlmICggIXRoaXMuY2VsbHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzbGlkZSA9IG5ldyBTbGlkZSggdGhpcyApO1xuICB0aGlzLnNsaWRlcy5wdXNoKCBzbGlkZSApO1xuICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5vcmlnaW5TaWRlID09ICdsZWZ0JztcbiAgdmFyIG5leHRNYXJnaW4gPSBpc09yaWdpbkxlZnQgPyAnbWFyZ2luUmlnaHQnIDogJ21hcmdpbkxlZnQnO1xuXG4gIHZhciBjYW5DZWxsRml0ID0gdGhpcy5fZ2V0Q2FuQ2VsbEZpdCgpO1xuXG4gIHRoaXMuY2VsbHMuZm9yRWFjaCggZnVuY3Rpb24oIGNlbGwsIGkgKSB7XG4gICAgLy8ganVzdCBhZGQgY2VsbCBpZiBmaXJzdCBjZWxsIGluIHNsaWRlXG4gICAgaWYgKCAhc2xpZGUuY2VsbHMubGVuZ3RoICkge1xuICAgICAgc2xpZGUuYWRkQ2VsbCggY2VsbCApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzbGlkZVdpZHRoID0gKCBzbGlkZS5vdXRlcldpZHRoIC0gc2xpZGUuZmlyc3RNYXJnaW4gKSArXG4gICAgICAoIGNlbGwuc2l6ZS5vdXRlcldpZHRoIC0gY2VsbC5zaXplWyBuZXh0TWFyZ2luIF0gKTtcblxuICAgIGlmICggY2FuQ2VsbEZpdC5jYWxsKCB0aGlzLCBpLCBzbGlkZVdpZHRoICkgKSB7XG4gICAgICBzbGlkZS5hZGRDZWxsKCBjZWxsICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRvZXNuJ3QgZml0LCBuZXcgc2xpZGVcbiAgICAgIHNsaWRlLnVwZGF0ZVRhcmdldCgpO1xuXG4gICAgICBzbGlkZSA9IG5ldyBTbGlkZSggdGhpcyApO1xuICAgICAgdGhpcy5zbGlkZXMucHVzaCggc2xpZGUgKTtcbiAgICAgIHNsaWRlLmFkZENlbGwoIGNlbGwgKTtcbiAgICB9XG4gIH0sIHRoaXMgKTtcbiAgLy8gbGFzdCBzbGlkZVxuICBzbGlkZS51cGRhdGVUYXJnZXQoKTtcbiAgLy8gdXBkYXRlIC5zZWxlY3RlZFNsaWRlXG4gIHRoaXMudXBkYXRlU2VsZWN0ZWRTbGlkZSgpO1xufTtcblxucHJvdG8uX2dldENhbkNlbGxGaXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGdyb3VwQ2VsbHMgPSB0aGlzLm9wdGlvbnMuZ3JvdXBDZWxscztcbiAgaWYgKCAhZ3JvdXBDZWxscyApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIGdyb3VwQ2VsbHMgPT0gJ251bWJlcicgKSB7XG4gICAgLy8gZ3JvdXAgYnkgbnVtYmVyLiAzIC0+IFswLDEsMl0sIFszLDQsNV0sIC4uLlxuICAgIHZhciBudW1iZXIgPSBwYXJzZUludCggZ3JvdXBDZWxscywgMTAgKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oIGkgKSB7XG4gICAgICByZXR1cm4gKCBpICUgbnVtYmVyICkgIT09IDA7XG4gICAgfTtcbiAgfVxuICAvLyBkZWZhdWx0LCBncm91cCBieSB3aWR0aCBvZiBzbGlkZVxuICAvLyBwYXJzZSAnNzUlXG4gIHZhciBwZXJjZW50TWF0Y2ggPSB0eXBlb2YgZ3JvdXBDZWxscyA9PSAnc3RyaW5nJyAmJlxuICAgIGdyb3VwQ2VsbHMubWF0Y2goL14oXFxkKyklJC8pO1xuICB2YXIgcGVyY2VudCA9IHBlcmNlbnRNYXRjaCA/IHBhcnNlSW50KCBwZXJjZW50TWF0Y2hbMV0sIDEwICkgLyAxMDAgOiAxO1xuICByZXR1cm4gZnVuY3Rpb24oIGksIHNsaWRlV2lkdGggKSB7XG4gICAgcmV0dXJuIHNsaWRlV2lkdGggPD0gKCB0aGlzLnNpemUuaW5uZXJXaWR0aCArIDEgKSAqIHBlcmNlbnQ7XG4gIH07XG59O1xuXG4vLyBhbGlhcyBfaW5pdCBmb3IgalF1ZXJ5IHBsdWdpbiAuZmxpY2tpdHkoKVxucHJvdG8uX2luaXQgPVxucHJvdG8ucmVwb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBvc2l0aW9uQ2VsbHMoKTtcbiAgdGhpcy5wb3NpdGlvblNsaWRlckF0U2VsZWN0ZWQoKTtcbn07XG5cbnByb3RvLmdldFNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG4gIHRoaXMuc2V0Q2VsbEFsaWduKCk7XG4gIHRoaXMuY3Vyc29yUG9zaXRpb24gPSB0aGlzLnNpemUuaW5uZXJXaWR0aCAqIHRoaXMuY2VsbEFsaWduO1xufTtcblxudmFyIGNlbGxBbGlnblNob3J0aGFuZHMgPSB7XG4gIC8vIGNlbGwgYWxpZ24sIHRoZW4gYmFzZWQgb24gb3JpZ2luIHNpZGVcbiAgY2VudGVyOiB7XG4gICAgbGVmdDogMC41LFxuICAgIHJpZ2h0OiAwLjVcbiAgfSxcbiAgbGVmdDoge1xuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDFcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICByaWdodDogMCxcbiAgICBsZWZ0OiAxXG4gIH1cbn07XG5cbnByb3RvLnNldENlbGxBbGlnbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2hvcnRoYW5kID0gY2VsbEFsaWduU2hvcnRoYW5kc1sgdGhpcy5vcHRpb25zLmNlbGxBbGlnbiBdO1xuICB0aGlzLmNlbGxBbGlnbiA9IHNob3J0aGFuZCA/IHNob3J0aGFuZFsgdGhpcy5vcmlnaW5TaWRlIF0gOiB0aGlzLm9wdGlvbnMuY2VsbEFsaWduO1xufTtcblxucHJvdG8uc2V0R2FsbGVyeVNpemUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuc2V0R2FsbGVyeVNpemUgKSB7XG4gICAgdmFyIGhlaWdodCA9IHRoaXMub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCAmJiB0aGlzLnNlbGVjdGVkU2xpZGUgP1xuICAgICAgdGhpcy5zZWxlY3RlZFNsaWRlLmhlaWdodCA6IHRoaXMubWF4Q2VsbEhlaWdodDtcbiAgICB0aGlzLnZpZXdwb3J0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gIH1cbn07XG5cbnByb3RvLl9nZXRXcmFwU2hpZnRDZWxscyA9IGZ1bmN0aW9uKCkge1xuICAvLyBvbmx5IGZvciB3cmFwLWFyb3VuZFxuICBpZiAoICF0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gdW5zaGlmdCBwcmV2aW91cyBjZWxsc1xuICB0aGlzLl91bnNoaWZ0Q2VsbHMoIHRoaXMuYmVmb3JlU2hpZnRDZWxscyApO1xuICB0aGlzLl91bnNoaWZ0Q2VsbHMoIHRoaXMuYWZ0ZXJTaGlmdENlbGxzICk7XG4gIC8vIGdldCBiZWZvcmUgY2VsbHNcbiAgLy8gaW5pdGlhbCBnYXBcbiAgdmFyIGdhcFggPSB0aGlzLmN1cnNvclBvc2l0aW9uO1xuICB2YXIgY2VsbEluZGV4ID0gdGhpcy5jZWxscy5sZW5ndGggLSAxO1xuICB0aGlzLmJlZm9yZVNoaWZ0Q2VsbHMgPSB0aGlzLl9nZXRHYXBDZWxscyggZ2FwWCwgY2VsbEluZGV4LCAtMSApO1xuICAvLyBnZXQgYWZ0ZXIgY2VsbHNcbiAgLy8gZW5kaW5nIGdhcCBiZXR3ZWVuIGxhc3QgY2VsbCBhbmQgZW5kIG9mIGdhbGxlcnkgdmlld3BvcnRcbiAgZ2FwWCA9IHRoaXMuc2l6ZS5pbm5lcldpZHRoIC0gdGhpcy5jdXJzb3JQb3NpdGlvbjtcbiAgLy8gc3RhcnQgY2xvbmluZyBhdCBmaXJzdCBjZWxsLCB3b3JraW5nIGZvcndhcmRzXG4gIHRoaXMuYWZ0ZXJTaGlmdENlbGxzID0gdGhpcy5fZ2V0R2FwQ2VsbHMoIGdhcFgsIDAsIDEgKTtcbn07XG5cbnByb3RvLl9nZXRHYXBDZWxscyA9IGZ1bmN0aW9uKCBnYXBYLCBjZWxsSW5kZXgsIGluY3JlbWVudCApIHtcbiAgLy8ga2VlcCBhZGRpbmcgY2VsbHMgdW50aWwgdGhlIGNvdmVyIHRoZSBpbml0aWFsIGdhcFxuICB2YXIgY2VsbHMgPSBbXTtcbiAgd2hpbGUgKCBnYXBYID4gMCApIHtcbiAgICB2YXIgY2VsbCA9IHRoaXMuY2VsbHNbIGNlbGxJbmRleCBdO1xuICAgIGlmICggIWNlbGwgKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2VsbHMucHVzaCggY2VsbCApO1xuICAgIGNlbGxJbmRleCArPSBpbmNyZW1lbnQ7XG4gICAgZ2FwWCAtPSBjZWxsLnNpemUub3V0ZXJXaWR0aDtcbiAgfVxuICByZXR1cm4gY2VsbHM7XG59O1xuXG4vLyAtLS0tLSBjb250YWluIC0tLS0tIC8vXG5cbi8vIGNvbnRhaW4gY2VsbCB0YXJnZXRzIHNvIG5vIGV4Y2VzcyBzbGlkaW5nXG5wcm90by5fY29udGFpblNsaWRlcyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMuY29udGFpbiB8fCB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCB8fCAhdGhpcy5jZWxscy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpc1JpZ2h0VG9MZWZ0ID0gdGhpcy5vcHRpb25zLnJpZ2h0VG9MZWZ0O1xuICB2YXIgYmVnaW5NYXJnaW4gPSBpc1JpZ2h0VG9MZWZ0ID8gJ21hcmdpblJpZ2h0JyA6ICdtYXJnaW5MZWZ0JztcbiAgdmFyIGVuZE1hcmdpbiA9IGlzUmlnaHRUb0xlZnQgPyAnbWFyZ2luTGVmdCcgOiAnbWFyZ2luUmlnaHQnO1xuICB2YXIgY29udGVudFdpZHRoID0gdGhpcy5zbGlkZWFibGVXaWR0aCAtIHRoaXMuZ2V0TGFzdENlbGwoKS5zaXplWyBlbmRNYXJnaW4gXTtcbiAgLy8gY29udGVudCBpcyBsZXNzIHRoYW4gZ2FsbGVyeSBzaXplXG4gIHZhciBpc0NvbnRlbnRTbWFsbGVyID0gY29udGVudFdpZHRoIDwgdGhpcy5zaXplLmlubmVyV2lkdGg7XG4gIC8vIGJvdW5kc1xuICB2YXIgYmVnaW5Cb3VuZCA9IHRoaXMuY3Vyc29yUG9zaXRpb24gKyB0aGlzLmNlbGxzWzBdLnNpemVbIGJlZ2luTWFyZ2luIF07XG4gIHZhciBlbmRCb3VuZCA9IGNvbnRlbnRXaWR0aCAtIHRoaXMuc2l6ZS5pbm5lcldpZHRoICogKCAxIC0gdGhpcy5jZWxsQWxpZ24gKTtcbiAgLy8gY29udGFpbiBlYWNoIGNlbGwgdGFyZ2V0XG4gIHRoaXMuc2xpZGVzLmZvckVhY2goIGZ1bmN0aW9uKCBzbGlkZSApIHtcbiAgICBpZiAoIGlzQ29udGVudFNtYWxsZXIgKSB7XG4gICAgICAvLyBhbGwgY2VsbHMgZml0IGluc2lkZSBnYWxsZXJ5XG4gICAgICBzbGlkZS50YXJnZXQgPSBjb250ZW50V2lkdGggKiB0aGlzLmNlbGxBbGlnbjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29udGFpbiB0byBib3VuZHNcbiAgICAgIHNsaWRlLnRhcmdldCA9IE1hdGgubWF4KCBzbGlkZS50YXJnZXQsIGJlZ2luQm91bmQgKTtcbiAgICAgIHNsaWRlLnRhcmdldCA9IE1hdGgubWluKCBzbGlkZS50YXJnZXQsIGVuZEJvdW5kICk7XG4gICAgfVxuICB9LCB0aGlzICk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxuLyoqXG4gKiBlbWl0cyBldmVudHMgdmlhIGV2ZW50RW1pdHRlciBhbmQgalF1ZXJ5IGV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSBuYW1lIG9mIGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIG9yaWdpbmFsIGV2ZW50XG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIC0gZXh0cmEgYXJndW1lbnRzXG4gKi9cbnByb3RvLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiggdHlwZSwgZXZlbnQsIGFyZ3MgKSB7XG4gIHZhciBlbWl0QXJncyA9IGV2ZW50ID8gWyBldmVudCBdLmNvbmNhdCggYXJncyApIDogYXJncztcbiAgdGhpcy5lbWl0RXZlbnQoIHR5cGUsIGVtaXRBcmdzICk7XG5cbiAgaWYgKCBqUXVlcnkgJiYgdGhpcy4kZWxlbWVudCApIHtcbiAgICAvLyBkZWZhdWx0IHRyaWdnZXIgd2l0aCB0eXBlIGlmIG5vIGV2ZW50XG4gICAgdHlwZSArPSB0aGlzLm9wdGlvbnMubmFtZXNwYWNlSlF1ZXJ5RXZlbnRzID8gJy5mbGlja2l0eScgOiAnJztcbiAgICB2YXIgJGV2ZW50ID0gdHlwZTtcbiAgICBpZiAoIGV2ZW50ICkge1xuICAgICAgLy8gY3JlYXRlIGpRdWVyeSBldmVudFxuICAgICAgdmFyIGpRRXZlbnQgPSBqUXVlcnkuRXZlbnQoIGV2ZW50ICk7XG4gICAgICBqUUV2ZW50LnR5cGUgPSB0eXBlO1xuICAgICAgJGV2ZW50ID0galFFdmVudDtcbiAgICB9XG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCAkZXZlbnQsIGFyZ3MgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2VsZWN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogQHBhcmFtIHtJbnRlZ2VyfSBpbmRleCAtIGluZGV4IG9mIHRoZSBzbGlkZVxuICogQHBhcmFtIHtCb29sZWFufSBpc1dyYXAgLSB3aWxsIHdyYXAtYXJvdW5kIHRvIGxhc3QvZmlyc3QgaWYgYXQgdGhlIGVuZFxuICogQHBhcmFtIHtCb29sZWFufSBpc0luc3RhbnQgLSB3aWxsIGltbWVkaWF0ZWx5IHNldCBwb3NpdGlvbiBhdCBzZWxlY3RlZCBjZWxsXG4gKi9cbnByb3RvLnNlbGVjdCA9IGZ1bmN0aW9uKCBpbmRleCwgaXNXcmFwLCBpc0luc3RhbnQgKSB7XG4gIGlmICggIXRoaXMuaXNBY3RpdmUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGluZGV4ID0gcGFyc2VJbnQoIGluZGV4LCAxMCApO1xuICB0aGlzLl93cmFwU2VsZWN0KCBpbmRleCApO1xuXG4gIGlmICggdGhpcy5vcHRpb25zLndyYXBBcm91bmQgfHwgaXNXcmFwICkge1xuICAgIGluZGV4ID0gdXRpbHMubW9kdWxvKCBpbmRleCwgdGhpcy5zbGlkZXMubGVuZ3RoICk7XG4gIH1cbiAgLy8gYmFpbCBpZiBpbnZhbGlkIGluZGV4XG4gIGlmICggIXRoaXMuc2xpZGVzWyBpbmRleCBdICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgcHJldkluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgdGhpcy51cGRhdGVTZWxlY3RlZFNsaWRlKCk7XG4gIGlmICggaXNJbnN0YW50ICkge1xuICAgIHRoaXMucG9zaXRpb25TbGlkZXJBdFNlbGVjdGVkKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbigpO1xuICB9XG4gIGlmICggdGhpcy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ICkge1xuICAgIHRoaXMuc2V0R2FsbGVyeVNpemUoKTtcbiAgfVxuICAvLyBldmVudHNcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnc2VsZWN0JywgbnVsbCwgWyBpbmRleCBdICk7XG4gIC8vIGNoYW5nZSBldmVudCBpZiBuZXcgaW5kZXhcbiAgaWYgKCBpbmRleCAhPSBwcmV2SW5kZXggKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnY2hhbmdlJywgbnVsbCwgWyBpbmRleCBdICk7XG4gIH1cbiAgLy8gb2xkIHYxIGV2ZW50IG5hbWUsIHJlbW92ZSBpbiB2M1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NlbGxTZWxlY3QnKTtcbn07XG5cbi8vIHdyYXBzIHBvc2l0aW9uIGZvciB3cmFwQXJvdW5kLCB0byBtb3ZlIHRvIGNsb3Nlc3Qgc2xpZGUuICMxMTNcbnByb3RvLl93cmFwU2VsZWN0ID0gZnVuY3Rpb24oIGluZGV4ICkge1xuICB2YXIgbGVuID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICB2YXIgaXNXcmFwcGluZyA9IHRoaXMub3B0aW9ucy53cmFwQXJvdW5kICYmIGxlbiA+IDE7XG4gIGlmICggIWlzV3JhcHBpbmcgKSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG4gIHZhciB3cmFwSW5kZXggPSB1dGlscy5tb2R1bG8oIGluZGV4LCBsZW4gKTtcbiAgLy8gZ28gdG8gc2hvcnRlc3RcbiAgdmFyIGRlbHRhID0gTWF0aC5hYnMoIHdyYXBJbmRleCAtIHRoaXMuc2VsZWN0ZWRJbmRleCApO1xuICB2YXIgYmFja1dyYXBEZWx0YSA9IE1hdGguYWJzKCAoIHdyYXBJbmRleCArIGxlbiApIC0gdGhpcy5zZWxlY3RlZEluZGV4ICk7XG4gIHZhciBmb3Jld2FyZFdyYXBEZWx0YSA9IE1hdGguYWJzKCAoIHdyYXBJbmRleCAtIGxlbiApIC0gdGhpcy5zZWxlY3RlZEluZGV4ICk7XG4gIGlmICggIXRoaXMuaXNEcmFnU2VsZWN0ICYmIGJhY2tXcmFwRGVsdGEgPCBkZWx0YSApIHtcbiAgICBpbmRleCArPSBsZW47XG4gIH0gZWxzZSBpZiAoICF0aGlzLmlzRHJhZ1NlbGVjdCAmJiBmb3Jld2FyZFdyYXBEZWx0YSA8IGRlbHRhICkge1xuICAgIGluZGV4IC09IGxlbjtcbiAgfVxuICAvLyB3cmFwIHBvc2l0aW9uIHNvIHNsaWRlciBpcyB3aXRoaW4gbm9ybWFsIGFyZWFcbiAgaWYgKCBpbmRleCA8IDAgKSB7XG4gICAgdGhpcy54IC09IHRoaXMuc2xpZGVhYmxlV2lkdGg7XG4gIH0gZWxzZSBpZiAoIGluZGV4ID49IGxlbiApIHtcbiAgICB0aGlzLnggKz0gdGhpcy5zbGlkZWFibGVXaWR0aDtcbiAgfVxufTtcblxucHJvdG8ucHJldmlvdXMgPSBmdW5jdGlvbiggaXNXcmFwLCBpc0luc3RhbnQgKSB7XG4gIHRoaXMuc2VsZWN0KCB0aGlzLnNlbGVjdGVkSW5kZXggLSAxLCBpc1dyYXAsIGlzSW5zdGFudCApO1xufTtcblxucHJvdG8ubmV4dCA9IGZ1bmN0aW9uKCBpc1dyYXAsIGlzSW5zdGFudCApIHtcbiAgdGhpcy5zZWxlY3QoIHRoaXMuc2VsZWN0ZWRJbmRleCArIDEsIGlzV3JhcCwgaXNJbnN0YW50ICk7XG59O1xuXG5wcm90by51cGRhdGVTZWxlY3RlZFNsaWRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzbGlkZSA9IHRoaXMuc2xpZGVzWyB0aGlzLnNlbGVjdGVkSW5kZXggXTtcbiAgLy8gc2VsZWN0ZWRJbmRleCBjb3VsZCBiZSBvdXRzaWRlIG9mIHNsaWRlcywgaWYgdHJpZ2dlcmVkIGJlZm9yZSByZXNpemUoKVxuICBpZiAoICFzbGlkZSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gdW5zZWxlY3QgcHJldmlvdXMgc2VsZWN0ZWQgc2xpZGVcbiAgdGhpcy51bnNlbGVjdFNlbGVjdGVkU2xpZGUoKTtcbiAgLy8gdXBkYXRlIG5ldyBzZWxlY3RlZCBzbGlkZVxuICB0aGlzLnNlbGVjdGVkU2xpZGUgPSBzbGlkZTtcbiAgc2xpZGUuc2VsZWN0KCk7XG4gIHRoaXMuc2VsZWN0ZWRDZWxscyA9IHNsaWRlLmNlbGxzO1xuICB0aGlzLnNlbGVjdGVkRWxlbWVudHMgPSBzbGlkZS5nZXRDZWxsRWxlbWVudHMoKTtcbiAgLy8gSEFDSzogc2VsZWN0ZWRDZWxsICYgc2VsZWN0ZWRFbGVtZW50IGlzIGZpcnN0IGNlbGwgaW4gc2xpZGUsIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gIC8vIFJlbW92ZSBpbiB2Mz9cbiAgdGhpcy5zZWxlY3RlZENlbGwgPSBzbGlkZS5jZWxsc1swXTtcbiAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSB0aGlzLnNlbGVjdGVkRWxlbWVudHNbMF07XG59O1xuXG5wcm90by51bnNlbGVjdFNlbGVjdGVkU2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLnNlbGVjdGVkU2xpZGUgKSB7XG4gICAgdGhpcy5zZWxlY3RlZFNsaWRlLnVuc2VsZWN0KCk7XG4gIH1cbn07XG5cbnByb3RvLnNlbGVjdEluaXRpYWxJbmRleCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaW5pdGlhbEluZGV4ID0gdGhpcy5vcHRpb25zLmluaXRpYWxJbmRleDtcbiAgLy8gYWxyZWFkeSBhY3RpdmF0ZWQsIHNlbGVjdCBwcmV2aW91cyBzZWxlY3RlZEluZGV4XG4gIGlmICggdGhpcy5pc0luaXRBY3RpdmF0ZWQgKSB7XG4gICAgdGhpcy5zZWxlY3QoIHRoaXMuc2VsZWN0ZWRJbmRleCwgZmFsc2UsIHRydWUgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gc2VsZWN0IHdpdGggc2VsZWN0b3Igc3RyaW5nXG4gIGlmICggaW5pdGlhbEluZGV4ICYmIHR5cGVvZiBpbml0aWFsSW5kZXggPT0gJ3N0cmluZycgKSB7XG4gICAgdmFyIGNlbGwgPSB0aGlzLnF1ZXJ5Q2VsbCggaW5pdGlhbEluZGV4ICk7XG4gICAgaWYgKCBjZWxsICkge1xuICAgICAgdGhpcy5zZWxlY3RDZWxsKCBpbml0aWFsSW5kZXgsIGZhbHNlLCB0cnVlICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgdmFyIGluZGV4ID0gMDtcbiAgLy8gc2VsZWN0IHdpdGggbnVtYmVyXG4gIGlmICggaW5pdGlhbEluZGV4ICYmIHRoaXMuc2xpZGVzWyBpbml0aWFsSW5kZXggXSApIHtcbiAgICBpbmRleCA9IGluaXRpYWxJbmRleDtcbiAgfVxuICAvLyBzZWxlY3QgaW5zdGFudGx5XG4gIHRoaXMuc2VsZWN0KCBpbmRleCwgZmFsc2UsIHRydWUgKTtcbn07XG5cbi8qKlxuICogc2VsZWN0IHNsaWRlIGZyb20gbnVtYmVyIG9yIGNlbGwgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50IG9yIE51bWJlcn0gZWxlbVxuICovXG5wcm90by5zZWxlY3RDZWxsID0gZnVuY3Rpb24oIHZhbHVlLCBpc1dyYXAsIGlzSW5zdGFudCApIHtcbiAgLy8gZ2V0IGNlbGxcbiAgdmFyIGNlbGwgPSB0aGlzLnF1ZXJ5Q2VsbCggdmFsdWUgKTtcbiAgaWYgKCAhY2VsbCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaW5kZXggPSB0aGlzLmdldENlbGxTbGlkZUluZGV4KCBjZWxsICk7XG4gIHRoaXMuc2VsZWN0KCBpbmRleCwgaXNXcmFwLCBpc0luc3RhbnQgKTtcbn07XG5cbnByb3RvLmdldENlbGxTbGlkZUluZGV4ID0gZnVuY3Rpb24oIGNlbGwgKSB7XG4gIC8vIGdldCBpbmRleCBvZiBzbGlkZXMgdGhhdCBoYXMgY2VsbFxuICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5zbGlkZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIHNsaWRlID0gdGhpcy5zbGlkZXNbaV07XG4gICAgdmFyIGluZGV4ID0gc2xpZGUuY2VsbHMuaW5kZXhPZiggY2VsbCApO1xuICAgIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdldCBjZWxscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGdldCBGbGlja2l0eS5DZWxsLCBnaXZlbiBhbiBFbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtGbGlja2l0eS5DZWxsfSBpdGVtXG4gKi9cbnByb3RvLmdldENlbGwgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgLy8gbG9vcCB0aHJvdWdoIGNlbGxzIHRvIGdldCB0aGUgb25lIHRoYXQgbWF0Y2hlc1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgY2VsbCA9IHRoaXMuY2VsbHNbaV07XG4gICAgaWYgKCBjZWxsLmVsZW1lbnQgPT0gZWxlbSApIHtcbiAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBnZXQgY29sbGVjdGlvbiBvZiBGbGlja2l0eS5DZWxscywgZ2l2ZW4gRWxlbWVudHNcbiAqIEBwYXJhbSB7RWxlbWVudCwgQXJyYXksIE5vZGVMaXN0fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBjZWxscyAtIEZsaWNraXR5LkNlbGxzXG4gKi9cbnByb3RvLmdldENlbGxzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgdmFyIGNlbGxzID0gW107XG4gIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIHZhciBjZWxsID0gdGhpcy5nZXRDZWxsKCBlbGVtICk7XG4gICAgaWYgKCBjZWxsICkge1xuICAgICAgY2VsbHMucHVzaCggY2VsbCApO1xuICAgIH1cbiAgfSwgdGhpcyApO1xuICByZXR1cm4gY2VsbHM7XG59O1xuXG4vKipcbiAqIGdldCBjZWxsIGVsZW1lbnRzXG4gKiBAcmV0dXJucyB7QXJyYXl9IGNlbGxFbGVtc1xuICovXG5wcm90by5nZXRDZWxsRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY2VsbHMubWFwKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICByZXR1cm4gY2VsbC5lbGVtZW50O1xuICB9KTtcbn07XG5cbi8qKlxuICogZ2V0IHBhcmVudCBjZWxsIGZyb20gYW4gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7RmxpY2tpdC5DZWxsfSBjZWxsXG4gKi9cbnByb3RvLmdldFBhcmVudENlbGwgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgLy8gZmlyc3QgY2hlY2sgaWYgZWxlbSBpcyBjZWxsXG4gIHZhciBjZWxsID0gdGhpcy5nZXRDZWxsKCBlbGVtICk7XG4gIGlmICggY2VsbCApIHtcbiAgICByZXR1cm4gY2VsbDtcbiAgfVxuICAvLyB0cnkgdG8gZ2V0IHBhcmVudCBjZWxsIGVsZW1cbiAgZWxlbSA9IHV0aWxzLmdldFBhcmVudCggZWxlbSwgJy5mbGlja2l0eS1zbGlkZXIgPiAqJyApO1xuICByZXR1cm4gdGhpcy5nZXRDZWxsKCBlbGVtICk7XG59O1xuXG4vKipcbiAqIGdldCBjZWxscyBhZGphY2VudCB0byBhIHNsaWRlXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGFkakNvdW50IC0gbnVtYmVyIG9mIGFkamFjZW50IHNsaWRlc1xuICogQHBhcmFtIHtJbnRlZ2VyfSBpbmRleCAtIGluZGV4IG9mIHNsaWRlIHRvIHN0YXJ0XG4gKiBAcmV0dXJucyB7QXJyYXl9IGNlbGxzIC0gYXJyYXkgb2YgRmxpY2tpdHkuQ2VsbHNcbiAqL1xucHJvdG8uZ2V0QWRqYWNlbnRDZWxsRWxlbWVudHMgPSBmdW5jdGlvbiggYWRqQ291bnQsIGluZGV4ICkge1xuICBpZiAoICFhZGpDb3VudCApIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFNsaWRlLmdldENlbGxFbGVtZW50cygpO1xuICB9XG4gIGluZGV4ID0gaW5kZXggPT09IHVuZGVmaW5lZCA/IHRoaXMuc2VsZWN0ZWRJbmRleCA6IGluZGV4O1xuXG4gIHZhciBsZW4gPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gIGlmICggMSArICggYWRqQ291bnQgKiAyICkgPj0gbGVuICkge1xuICAgIHJldHVybiB0aGlzLmdldENlbGxFbGVtZW50cygpO1xuICB9XG5cbiAgdmFyIGNlbGxFbGVtcyA9IFtdO1xuICBmb3IgKCB2YXIgaSA9IGluZGV4IC0gYWRqQ291bnQ7IGkgPD0gaW5kZXggKyBhZGpDb3VudCA7IGkrKyApIHtcbiAgICB2YXIgc2xpZGVJbmRleCA9IHRoaXMub3B0aW9ucy53cmFwQXJvdW5kID8gdXRpbHMubW9kdWxvKCBpLCBsZW4gKSA6IGk7XG4gICAgdmFyIHNsaWRlID0gdGhpcy5zbGlkZXNbIHNsaWRlSW5kZXggXTtcbiAgICBpZiAoIHNsaWRlICkge1xuICAgICAgY2VsbEVsZW1zID0gY2VsbEVsZW1zLmNvbmNhdCggc2xpZGUuZ2V0Q2VsbEVsZW1lbnRzKCkgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNlbGxFbGVtcztcbn07XG5cbi8qKlxuICogc2VsZWN0IHNsaWRlIGZyb20gbnVtYmVyIG9yIGNlbGwgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50LCBTZWxlY3RvciBTdHJpbmcsIG9yIE51bWJlcn0gc2VsZWN0b3JcbiAqL1xucHJvdG8ucXVlcnlDZWxsID0gZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuICBpZiAoIHR5cGVvZiBzZWxlY3RvciA9PSAnbnVtYmVyJyApIHtcbiAgICAvLyB1c2UgbnVtYmVyIGFzIGluZGV4XG4gICAgcmV0dXJuIHRoaXMuY2VsbHNbIHNlbGVjdG9yIF07XG4gIH1cbiAgaWYgKCB0eXBlb2Ygc2VsZWN0b3IgPT0gJ3N0cmluZycgKSB7XG4gICAgLy8gZG8gbm90IHNlbGVjdCBpbnZhbGlkIHNlbGVjdG9ycyBmcm9tIGhhc2g6ICMxMjMsICMvLiAjNzkxXG4gICAgaWYgKCBzZWxlY3Rvci5tYXRjaCgvXlsjXFwuXT9bXFxkXFwvXS8pICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB1c2Ugc3RyaW5nIGFzIHNlbGVjdG9yLCBnZXQgZWxlbWVudFxuICAgIHNlbGVjdG9yID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICk7XG4gIH1cbiAgLy8gZ2V0IGNlbGwgZnJvbSBlbGVtZW50XG4gIHJldHVybiB0aGlzLmdldENlbGwoIHNlbGVjdG9yICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBldmVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8udWlDaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5lbWl0RXZlbnQoJ3VpQ2hhbmdlJyk7XG59O1xuXG4vLyBrZWVwIGZvY3VzIG9uIGVsZW1lbnQgd2hlbiBjaGlsZCBVSSBlbGVtZW50cyBhcmUgY2xpY2tlZFxucHJvdG8uY2hpbGRVSVBvaW50ZXJEb3duID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICAvLyBIQUNLIGlPUyBkb2VzIG5vdCBhbGxvdyB0b3VjaCBldmVudHMgdG8gYnViYmxlIHVwPyFcbiAgaWYgKCBldmVudC50eXBlICE9ICd0b3VjaHN0YXJ0JyApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIHRoaXMuZm9jdXMoKTtcbn07XG5cbi8vIC0tLS0tIHJlc2l6ZSAtLS0tLSAvL1xuXG5wcm90by5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLndhdGNoQ1NTKCk7XG4gIHRoaXMucmVzaXplKCk7XG59O1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCggRmxpY2tpdHksICdvbnJlc2l6ZScsIDE1MCApO1xuXG5wcm90by5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5pc0FjdGl2ZSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5nZXRTaXplKCk7XG4gIC8vIHdyYXAgdmFsdWVzXG4gIGlmICggdGhpcy5vcHRpb25zLndyYXBBcm91bmQgKSB7XG4gICAgdGhpcy54ID0gdXRpbHMubW9kdWxvKCB0aGlzLngsIHRoaXMuc2xpZGVhYmxlV2lkdGggKTtcbiAgfVxuICB0aGlzLnBvc2l0aW9uQ2VsbHMoKTtcbiAgdGhpcy5fZ2V0V3JhcFNoaWZ0Q2VsbHMoKTtcbiAgdGhpcy5zZXRHYWxsZXJ5U2l6ZSgpO1xuICB0aGlzLmVtaXRFdmVudCgncmVzaXplJyk7XG4gIC8vIHVwZGF0ZSBzZWxlY3RlZCBpbmRleCBmb3IgZ3JvdXAgc2xpZGVzLCBpbnN0YW50XG4gIC8vIFRPRE86IHBvc2l0aW9uIGNhbiBiZSBsb3N0IGJldHdlZW4gZ3JvdXBzIG9mIHZhcmlvdXMgbnVtYmVyc1xuICB2YXIgc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnRzICYmIHRoaXMuc2VsZWN0ZWRFbGVtZW50c1swXTtcbiAgdGhpcy5zZWxlY3RDZWxsKCBzZWxlY3RlZEVsZW1lbnQsIGZhbHNlLCB0cnVlICk7XG59O1xuXG4vLyB3YXRjaGVzIHRoZSA6YWZ0ZXIgcHJvcGVydHksIGFjdGl2YXRlcy9kZWFjdGl2YXRlc1xucHJvdG8ud2F0Y2hDU1MgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdhdGNoT3B0aW9uID0gdGhpcy5vcHRpb25zLndhdGNoQ1NTO1xuICBpZiAoICF3YXRjaE9wdGlvbiApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgYWZ0ZXJDb250ZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZSggdGhpcy5lbGVtZW50LCAnOmFmdGVyJyApLmNvbnRlbnQ7XG4gIC8vIGFjdGl2YXRlIGlmIDphZnRlciB7IGNvbnRlbnQ6ICdmbGlja2l0eScgfVxuICBpZiAoIGFmdGVyQ29udGVudC5pbmRleE9mKCdmbGlja2l0eScpICE9IC0xICkge1xuICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgfVxufTtcblxuLy8gLS0tLS0ga2V5ZG93biAtLS0tLSAvL1xuXG4vLyBnbyBwcmV2aW91cy9uZXh0IGlmIGxlZnQvcmlnaHQga2V5cyBwcmVzc2VkXG5wcm90by5vbmtleWRvd24gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIC8vIG9ubHkgd29yayBpZiBlbGVtZW50IGlzIGluIGZvY3VzXG4gIHZhciBpc05vdEZvY3VzZWQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gdGhpcy5lbGVtZW50O1xuICBpZiAoICF0aGlzLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSB8fGlzTm90Rm9jdXNlZCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IEZsaWNraXR5LmtleWJvYXJkSGFuZGxlcnNbIGV2ZW50LmtleUNvZGUgXTtcbiAgaWYgKCBoYW5kbGVyICkge1xuICAgIGhhbmRsZXIuY2FsbCggdGhpcyApO1xuICB9XG59O1xuXG5GbGlja2l0eS5rZXlib2FyZEhhbmRsZXJzID0ge1xuICAvLyBsZWZ0IGFycm93XG4gIDM3OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVmdE1ldGhvZCA9IHRoaXMub3B0aW9ucy5yaWdodFRvTGVmdCA/ICduZXh0JyA6ICdwcmV2aW91cyc7XG4gICAgdGhpcy51aUNoYW5nZSgpO1xuICAgIHRoaXNbIGxlZnRNZXRob2QgXSgpO1xuICB9LFxuICAvLyByaWdodCBhcnJvd1xuICAzOTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJpZ2h0TWV0aG9kID0gdGhpcy5vcHRpb25zLnJpZ2h0VG9MZWZ0ID8gJ3ByZXZpb3VzJyA6ICduZXh0JztcbiAgICB0aGlzLnVpQ2hhbmdlKCk7XG4gICAgdGhpc1sgcmlnaHRNZXRob2QgXSgpO1xuICB9LFxufTtcblxuLy8gLS0tLS0gZm9jdXMgLS0tLS0gLy9cblxucHJvdG8uZm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgLy8gVE9ETyByZW1vdmUgc2Nyb2xsVG8gb25jZSBmb2N1cyBvcHRpb25zIGdldHMgbW9yZSBzdXBwb3J0XG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudC9mb2N1cyNCcm93c2VyX2NvbXBhdGliaWxpdHlcbiAgdmFyIHByZXZTY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB0aGlzLmVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAvLyBoYWNrIHRvIGZpeCBzY3JvbGwganVtcCBhZnRlciBmb2N1cywgIzc2XG4gIGlmICggd2luZG93LnBhZ2VZT2Zmc2V0ICE9IHByZXZTY3JvbGxZICkge1xuICAgIHdpbmRvdy5zY3JvbGxUbyggd2luZG93LnBhZ2VYT2Zmc2V0LCBwcmV2U2Nyb2xsWSApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZXN0cm95IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGRlYWN0aXZhdGUgYWxsIEZsaWNraXR5IGZ1bmN0aW9uYWxpdHksIGJ1dCBrZWVwIHN0dWZmIGF2YWlsYWJsZVxucHJvdG8uZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLmlzQWN0aXZlICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpY2tpdHktZW5hYmxlZCcpO1xuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpY2tpdHktcnRsJyk7XG4gIHRoaXMudW5zZWxlY3RTZWxlY3RlZFNsaWRlKCk7XG4gIC8vIGRlc3Ryb3kgY2VsbHNcbiAgdGhpcy5jZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICBjZWxsLmRlc3Ryb3koKTtcbiAgfSk7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCggdGhpcy52aWV3cG9ydCApO1xuICAvLyBtb3ZlIGNoaWxkIGVsZW1lbnRzIGJhY2sgaW50byBlbGVtZW50XG4gIG1vdmVFbGVtZW50cyggdGhpcy5zbGlkZXIuY2hpbGRyZW4sIHRoaXMuZWxlbWVudCApO1xuICBpZiAoIHRoaXMub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ICkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYkluZGV4Jyk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcyApO1xuICB9XG4gIC8vIHNldCBmbGFnc1xuICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIHRoaXMuZW1pdEV2ZW50KCdkZWFjdGl2YXRlJyk7XG59O1xuXG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMgKTtcbiAgdGhpcy5hbGxPZmYoKTtcbiAgdGhpcy5lbWl0RXZlbnQoJ2Rlc3Ryb3knKTtcbiAgaWYgKCBqUXVlcnkgJiYgdGhpcy4kZWxlbWVudCApIHtcbiAgICBqUXVlcnkucmVtb3ZlRGF0YSggdGhpcy5lbGVtZW50LCAnZmxpY2tpdHknICk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuZWxlbWVudC5mbGlja2l0eUdVSUQ7XG4gIGRlbGV0ZSBpbnN0YW5jZXNbIHRoaXMuZ3VpZCBdO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcHJvdG90eXBlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnV0aWxzLmV4dGVuZCggcHJvdG8sIGFuaW1hdGVQcm90b3R5cGUgKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZXh0cmFzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogZ2V0IEZsaWNraXR5IGluc3RhbmNlIGZyb20gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7RmxpY2tpdHl9XG4gKi9cbkZsaWNraXR5LmRhdGEgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgZWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbSApO1xuICB2YXIgaWQgPSBlbGVtICYmIGVsZW0uZmxpY2tpdHlHVUlEO1xuICByZXR1cm4gaWQgJiYgaW5zdGFuY2VzWyBpZCBdO1xufTtcblxudXRpbHMuaHRtbEluaXQoIEZsaWNraXR5LCAnZmxpY2tpdHknICk7XG5cbmlmICggalF1ZXJ5ICYmIGpRdWVyeS5icmlkZ2V0ICkge1xuICBqUXVlcnkuYnJpZGdldCggJ2ZsaWNraXR5JywgRmxpY2tpdHkgKTtcbn1cblxuLy8gc2V0IGludGVybmFsIGpRdWVyeSwgZm9yIFdlYnBhY2sgKyBqUXVlcnkgdjMsICM0NzhcbkZsaWNraXR5LnNldEpRdWVyeSA9IGZ1bmN0aW9uKCBqcSApIHtcbiAgalF1ZXJ5ID0ganE7XG59O1xuXG5GbGlja2l0eS5DZWxsID0gQ2VsbDtcbkZsaWNraXR5LlNsaWRlID0gU2xpZGU7XG5cbnJldHVybiBGbGlja2l0eTtcblxufSkpO1xuIiwiLyohXG4gKiBGbGlja2l0eSB2Mi4yLjFcbiAqIFRvdWNoLCByZXNwb25zaXZlLCBmbGlja2FibGUgY2Fyb3VzZWxzXG4gKlxuICogTGljZW5zZWQgR1BMdjMgZm9yIG9wZW4gc291cmNlIHVzZVxuICogb3IgRmxpY2tpdHkgQ29tbWVyY2lhbCBMaWNlbnNlIGZvciBjb21tZXJjaWFsIHVzZVxuICpcbiAqIGh0dHBzOi8vZmxpY2tpdHkubWV0YWZpenp5LmNvXG4gKiBDb3B5cmlnaHQgMjAxNS0yMDE5IE1ldGFmaXp6eVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnLi9mbGlja2l0eScsXG4gICAgICAnLi9kcmFnJyxcbiAgICAgICcuL3ByZXYtbmV4dC1idXR0b24nLFxuICAgICAgJy4vcGFnZS1kb3RzJyxcbiAgICAgICcuL3BsYXllcicsXG4gICAgICAnLi9hZGQtcmVtb3ZlLWNlbGwnLFxuICAgICAgJy4vbGF6eWxvYWQnXG4gICAgXSwgZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpLFxuICAgICAgcmVxdWlyZSgnLi9kcmFnJyksXG4gICAgICByZXF1aXJlKCcuL3ByZXYtbmV4dC1idXR0b24nKSxcbiAgICAgIHJlcXVpcmUoJy4vcGFnZS1kb3RzJyksXG4gICAgICByZXF1aXJlKCcuL3BsYXllcicpLFxuICAgICAgcmVxdWlyZSgnLi9hZGQtcmVtb3ZlLWNlbGwnKSxcbiAgICAgIHJlcXVpcmUoJy4vbGF6eWxvYWQnKVxuICAgICk7XG4gIH1cblxufSkoIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggRmxpY2tpdHkgKSB7XG4gIC8qanNoaW50IHN0cmljdDogZmFsc2UqL1xuICByZXR1cm4gRmxpY2tpdHk7XG59KTtcbiIsIi8vIGxhenlsb2FkXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJy4vZmxpY2tpdHknLFxuICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJ1xuICAgIF0sIGZ1bmN0aW9uKCBGbGlja2l0eSwgdXRpbHMgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBGbGlja2l0eSwgdXRpbHMgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJy4vZmxpY2tpdHknKSxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5GbGlja2l0eSxcbiAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHNcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBGbGlja2l0eSwgdXRpbHMgKSB7XG4ndXNlIHN0cmljdCc7XG5cbkZsaWNraXR5LmNyZWF0ZU1ldGhvZHMucHVzaCgnX2NyZWF0ZUxhenlsb2FkJyk7XG52YXIgcHJvdG8gPSBGbGlja2l0eS5wcm90b3R5cGU7XG5cbnByb3RvLl9jcmVhdGVMYXp5bG9hZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm9uKCAnc2VsZWN0JywgdGhpcy5sYXp5TG9hZCApO1xufTtcblxucHJvdG8ubGF6eUxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGxhenlMb2FkID0gdGhpcy5vcHRpb25zLmxhenlMb2FkO1xuICBpZiAoICFsYXp5TG9hZCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gZ2V0IGFkamFjZW50IGNlbGxzLCB1c2UgbGF6eUxvYWQgb3B0aW9uIGZvciBhZGphY2VudCBjb3VudFxuICB2YXIgYWRqQ291bnQgPSB0eXBlb2YgbGF6eUxvYWQgPT0gJ251bWJlcicgPyBsYXp5TG9hZCA6IDA7XG4gIHZhciBjZWxsRWxlbXMgPSB0aGlzLmdldEFkamFjZW50Q2VsbEVsZW1lbnRzKCBhZGpDb3VudCApO1xuICAvLyBnZXQgbGF6eSBpbWFnZXMgaW4gdGhvc2UgY2VsbHNcbiAgdmFyIGxhenlJbWFnZXMgPSBbXTtcbiAgY2VsbEVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBjZWxsRWxlbSApIHtcbiAgICB2YXIgbGF6eUNlbGxJbWFnZXMgPSBnZXRDZWxsTGF6eUltYWdlcyggY2VsbEVsZW0gKTtcbiAgICBsYXp5SW1hZ2VzID0gbGF6eUltYWdlcy5jb25jYXQoIGxhenlDZWxsSW1hZ2VzICk7XG4gIH0pO1xuICAvLyBsb2FkIGxhenkgaW1hZ2VzXG4gIGxhenlJbWFnZXMuZm9yRWFjaCggZnVuY3Rpb24oIGltZyApIHtcbiAgICBuZXcgTGF6eUxvYWRlciggaW1nLCB0aGlzICk7XG4gIH0sIHRoaXMgKTtcbn07XG5cbmZ1bmN0aW9uIGdldENlbGxMYXp5SW1hZ2VzKCBjZWxsRWxlbSApIHtcbiAgLy8gY2hlY2sgaWYgY2VsbCBlbGVtZW50IGlzIGxhenkgaW1hZ2VcbiAgaWYgKCBjZWxsRWxlbS5ub2RlTmFtZSA9PSAnSU1HJyApIHtcbiAgICB2YXIgbGF6eWxvYWRBdHRyID0gY2VsbEVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWZsaWNraXR5LWxhenlsb2FkJyk7XG4gICAgdmFyIHNyY0F0dHIgPSBjZWxsRWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQtc3JjJyk7XG4gICAgdmFyIHNyY3NldEF0dHIgPSBjZWxsRWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQtc3Jjc2V0Jyk7XG4gICAgaWYgKCBsYXp5bG9hZEF0dHIgfHwgc3JjQXR0ciB8fCBzcmNzZXRBdHRyICkge1xuICAgICAgcmV0dXJuIFsgY2VsbEVsZW0gXTtcbiAgICB9XG4gIH1cbiAgLy8gc2VsZWN0IGxhenkgaW1hZ2VzIGluIGNlbGxcbiAgdmFyIGxhenlTZWxlY3RvciA9ICdpbWdbZGF0YS1mbGlja2l0eS1sYXp5bG9hZF0sICcgK1xuICAgICdpbWdbZGF0YS1mbGlja2l0eS1sYXp5bG9hZC1zcmNdLCBpbWdbZGF0YS1mbGlja2l0eS1sYXp5bG9hZC1zcmNzZXRdJztcbiAgdmFyIGltZ3MgPSBjZWxsRWxlbS5xdWVyeVNlbGVjdG9yQWxsKCBsYXp5U2VsZWN0b3IgKTtcbiAgcmV0dXJuIHV0aWxzLm1ha2VBcnJheSggaW1ncyApO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBMYXp5TG9hZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogY2xhc3MgdG8gaGFuZGxlIGxvYWRpbmcgaW1hZ2VzXG4gKi9cbmZ1bmN0aW9uIExhenlMb2FkZXIoIGltZywgZmxpY2tpdHkgKSB7XG4gIHRoaXMuaW1nID0gaW1nO1xuICB0aGlzLmZsaWNraXR5ID0gZmxpY2tpdHk7XG4gIHRoaXMubG9hZCgpO1xufVxuXG5MYXp5TG9hZGVyLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IHV0aWxzLmhhbmRsZUV2ZW50O1xuXG5MYXp5TG9hZGVyLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xuICB0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKCAnZXJyb3InLCB0aGlzICk7XG4gIC8vIGdldCBzcmMgJiBzcmNzZXRcbiAgdmFyIHNyYyA9IHRoaXMuaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1mbGlja2l0eS1sYXp5bG9hZCcpIHx8XG4gICAgdGhpcy5pbWcuZ2V0QXR0cmlidXRlKCdkYXRhLWZsaWNraXR5LWxhenlsb2FkLXNyYycpO1xuICB2YXIgc3Jjc2V0ID0gdGhpcy5pbWcuZ2V0QXR0cmlidXRlKCdkYXRhLWZsaWNraXR5LWxhenlsb2FkLXNyY3NldCcpO1xuICAvLyBzZXQgc3JjICYgc2Vyc2V0XG4gIHRoaXMuaW1nLnNyYyA9IHNyYztcbiAgaWYgKCBzcmNzZXQgKSB7XG4gICAgdGhpcy5pbWcuc2V0QXR0cmlidXRlKCAnc3Jjc2V0Jywgc3Jjc2V0ICk7XG4gIH1cbiAgLy8gcmVtb3ZlIGF0dHJcbiAgdGhpcy5pbWcucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZsaWNraXR5LWxhenlsb2FkJyk7XG4gIHRoaXMuaW1nLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1mbGlja2l0eS1sYXp5bG9hZC1zcmMnKTtcbiAgdGhpcy5pbWcucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZsaWNraXR5LWxhenlsb2FkLXNyY3NldCcpO1xufTtcblxuTGF6eUxvYWRlci5wcm90b3R5cGUub25sb2FkID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLmNvbXBsZXRlKCBldmVudCwgJ2ZsaWNraXR5LWxhenlsb2FkZWQnICk7XG59O1xuXG5MYXp5TG9hZGVyLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLmNvbXBsZXRlKCBldmVudCwgJ2ZsaWNraXR5LWxhenllcnJvcicgKTtcbn07XG5cbkxhenlMb2FkZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24oIGV2ZW50LCBjbGFzc05hbWUgKSB7XG4gIC8vIHVuYmluZCBldmVudHNcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcblxuICB2YXIgY2VsbCA9IHRoaXMuZmxpY2tpdHkuZ2V0UGFyZW50Q2VsbCggdGhpcy5pbWcgKTtcbiAgdmFyIGNlbGxFbGVtID0gY2VsbCAmJiBjZWxsLmVsZW1lbnQ7XG4gIHRoaXMuZmxpY2tpdHkuY2VsbFNpemVDaGFuZ2UoIGNlbGxFbGVtICk7XG5cbiAgdGhpcy5pbWcuY2xhc3NMaXN0LmFkZCggY2xhc3NOYW1lICk7XG4gIHRoaXMuZmxpY2tpdHkuZGlzcGF0Y2hFdmVudCggJ2xhenlMb2FkJywgZXZlbnQsIGNlbGxFbGVtICk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxuRmxpY2tpdHkuTGF6eUxvYWRlciA9IExhenlMb2FkZXI7XG5cbnJldHVybiBGbGlja2l0eTtcblxufSkpO1xuIiwiLy8gcGFnZSBkb3RzXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJy4vZmxpY2tpdHknLFxuICAgICAgJ3VuaXBvaW50ZXIvdW5pcG9pbnRlcicsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnXG4gICAgXSwgZnVuY3Rpb24oIEZsaWNraXR5LCBVbmlwb2ludGVyLCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCBVbmlwb2ludGVyLCB1dGlscyApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpLFxuICAgICAgcmVxdWlyZSgndW5pcG9pbnRlcicpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkZsaWNraXR5LFxuICAgICAgd2luZG93LlVuaXBvaW50ZXIsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRmxpY2tpdHksIFVuaXBvaW50ZXIsIHV0aWxzICkge1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQYWdlRG90cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFBhZ2VEb3RzKCBwYXJlbnQgKSB7XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLl9jcmVhdGUoKTtcbn1cblxuUGFnZURvdHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVW5pcG9pbnRlci5wcm90b3R5cGUgKTtcblxuUGFnZURvdHMucHJvdG90eXBlLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gY3JlYXRlIGhvbGRlciBlbGVtZW50XG4gIHRoaXMuaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTtcbiAgdGhpcy5ob2xkZXIuY2xhc3NOYW1lID0gJ2ZsaWNraXR5LXBhZ2UtZG90cyc7XG4gIC8vIGNyZWF0ZSBkb3RzLCBhcnJheSBvZiBlbGVtZW50c1xuICB0aGlzLmRvdHMgPSBbXTtcbiAgLy8gZXZlbnRzXG4gIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICB0aGlzLm9uKCAncG9pbnRlckRvd24nLCB0aGlzLnBhcmVudC5jaGlsZFVJUG9pbnRlckRvd24uYmluZCggdGhpcy5wYXJlbnQgKSApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0RG90cygpO1xuICB0aGlzLmhvbGRlci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrICk7XG4gIHRoaXMuYmluZFN0YXJ0RXZlbnQoIHRoaXMuaG9sZGVyICk7XG4gIC8vIGFkZCB0byBET01cbiAgdGhpcy5wYXJlbnQuZWxlbWVudC5hcHBlbmRDaGlsZCggdGhpcy5ob2xkZXIgKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaG9sZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2sgKTtcbiAgdGhpcy51bmJpbmRTdGFydEV2ZW50KCB0aGlzLmhvbGRlciApO1xuICAvLyByZW1vdmUgZnJvbSBET01cbiAgdGhpcy5wYXJlbnQuZWxlbWVudC5yZW1vdmVDaGlsZCggdGhpcy5ob2xkZXIgKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5zZXREb3RzID0gZnVuY3Rpb24oKSB7XG4gIC8vIGdldCBkaWZmZXJlbmNlIGJldHdlZW4gbnVtYmVyIG9mIHNsaWRlcyBhbmQgbnVtYmVyIG9mIGRvdHNcbiAgdmFyIGRlbHRhID0gdGhpcy5wYXJlbnQuc2xpZGVzLmxlbmd0aCAtIHRoaXMuZG90cy5sZW5ndGg7XG4gIGlmICggZGVsdGEgPiAwICkge1xuICAgIHRoaXMuYWRkRG90cyggZGVsdGEgKTtcbiAgfSBlbHNlIGlmICggZGVsdGEgPCAwICkge1xuICAgIHRoaXMucmVtb3ZlRG90cyggLWRlbHRhICk7XG4gIH1cbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5hZGREb3RzID0gZnVuY3Rpb24oIGNvdW50ICkge1xuICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIHZhciBuZXdEb3RzID0gW107XG4gIHZhciBsZW5ndGggPSB0aGlzLmRvdHMubGVuZ3RoO1xuICB2YXIgbWF4ID0gbGVuZ3RoICsgY291bnQ7XG5cbiAgZm9yICggdmFyIGkgPSBsZW5ndGg7IGkgPCBtYXg7IGkrKyApIHtcbiAgICB2YXIgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkb3QuY2xhc3NOYW1lID0gJ2RvdCc7XG4gICAgZG90LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCAnUGFnZSBkb3QgJyArICggaSArIDEgKSApO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKCBkb3QgKTtcbiAgICBuZXdEb3RzLnB1c2goIGRvdCApO1xuICB9XG5cbiAgdGhpcy5ob2xkZXIuYXBwZW5kQ2hpbGQoIGZyYWdtZW50ICk7XG4gIHRoaXMuZG90cyA9IHRoaXMuZG90cy5jb25jYXQoIG5ld0RvdHMgKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5yZW1vdmVEb3RzID0gZnVuY3Rpb24oIGNvdW50ICkge1xuICAvLyByZW1vdmUgZnJvbSB0aGlzLmRvdHMgY29sbGVjdGlvblxuICB2YXIgcmVtb3ZlRG90cyA9IHRoaXMuZG90cy5zcGxpY2UoIHRoaXMuZG90cy5sZW5ndGggLSBjb3VudCwgY291bnQgKTtcbiAgLy8gcmVtb3ZlIGZyb20gRE9NXG4gIHJlbW92ZURvdHMuZm9yRWFjaCggZnVuY3Rpb24oIGRvdCApIHtcbiAgICB0aGlzLmhvbGRlci5yZW1vdmVDaGlsZCggZG90ICk7XG4gIH0sIHRoaXMgKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS51cGRhdGVTZWxlY3RlZCA9IGZ1bmN0aW9uKCkge1xuICAvLyByZW1vdmUgc2VsZWN0ZWQgY2xhc3Mgb24gcHJldmlvdXNcbiAgaWYgKCB0aGlzLnNlbGVjdGVkRG90ICkge1xuICAgIHRoaXMuc2VsZWN0ZWREb3QuY2xhc3NOYW1lID0gJ2RvdCc7XG4gICAgdGhpcy5zZWxlY3RlZERvdC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpO1xuICB9XG4gIC8vIGRvbid0IHByb2NlZWQgaWYgbm8gZG90c1xuICBpZiAoICF0aGlzLmRvdHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnNlbGVjdGVkRG90ID0gdGhpcy5kb3RzWyB0aGlzLnBhcmVudC5zZWxlY3RlZEluZGV4IF07XG4gIHRoaXMuc2VsZWN0ZWREb3QuY2xhc3NOYW1lID0gJ2RvdCBpcy1zZWxlY3RlZCc7XG4gIHRoaXMuc2VsZWN0ZWREb3Quc2V0QXR0cmlidXRlKCAnYXJpYS1jdXJyZW50JywgJ3N0ZXAnICk7XG59O1xuXG5QYWdlRG90cy5wcm90b3R5cGUub25UYXAgPSAvLyBvbGQgbWV0aG9kIG5hbWUsIGJhY2t3YXJkcy1jb21wYXRpYmxlXG5QYWdlRG90cy5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgLy8gb25seSBjYXJlIGFib3V0IGRvdCBjbGlja3NcbiAgaWYgKCB0YXJnZXQubm9kZU5hbWUgIT0gJ0xJJyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnBhcmVudC51aUNoYW5nZSgpO1xuICB2YXIgaW5kZXggPSB0aGlzLmRvdHMuaW5kZXhPZiggdGFyZ2V0ICk7XG4gIHRoaXMucGFyZW50LnNlbGVjdCggaW5kZXggKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICB0aGlzLmFsbE9mZigpO1xufTtcblxuRmxpY2tpdHkuUGFnZURvdHMgPSBQYWdlRG90cztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRmxpY2tpdHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudXRpbHMuZXh0ZW5kKCBGbGlja2l0eS5kZWZhdWx0cywge1xuICBwYWdlRG90czogdHJ1ZVxufSk7XG5cbkZsaWNraXR5LmNyZWF0ZU1ldGhvZHMucHVzaCgnX2NyZWF0ZVBhZ2VEb3RzJyk7XG5cbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxucHJvdG8uX2NyZWF0ZVBhZ2VEb3RzID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5wYWdlRG90cyApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5wYWdlRG90cyA9IG5ldyBQYWdlRG90cyggdGhpcyApO1xuICAvLyBldmVudHNcbiAgdGhpcy5vbiggJ2FjdGl2YXRlJywgdGhpcy5hY3RpdmF0ZVBhZ2VEb3RzICk7XG4gIHRoaXMub24oICdzZWxlY3QnLCB0aGlzLnVwZGF0ZVNlbGVjdGVkUGFnZURvdHMgKTtcbiAgdGhpcy5vbiggJ2NlbGxDaGFuZ2UnLCB0aGlzLnVwZGF0ZVBhZ2VEb3RzICk7XG4gIHRoaXMub24oICdyZXNpemUnLCB0aGlzLnVwZGF0ZVBhZ2VEb3RzICk7XG4gIHRoaXMub24oICdkZWFjdGl2YXRlJywgdGhpcy5kZWFjdGl2YXRlUGFnZURvdHMgKTtcbn07XG5cbnByb3RvLmFjdGl2YXRlUGFnZURvdHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wYWdlRG90cy5hY3RpdmF0ZSgpO1xufTtcblxucHJvdG8udXBkYXRlU2VsZWN0ZWRQYWdlRG90cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBhZ2VEb3RzLnVwZGF0ZVNlbGVjdGVkKCk7XG59O1xuXG5wcm90by51cGRhdGVQYWdlRG90cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBhZ2VEb3RzLnNldERvdHMoKTtcbn07XG5cbnByb3RvLmRlYWN0aXZhdGVQYWdlRG90cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBhZ2VEb3RzLmRlYWN0aXZhdGUoKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5GbGlja2l0eS5QYWdlRG90cyA9IFBhZ2VEb3RzO1xuXG5yZXR1cm4gRmxpY2tpdHk7XG5cbn0pKTtcbiIsIi8vIHBsYXllciAmIGF1dG9QbGF5XG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2V2LWVtaXR0ZXIvZXYtZW1pdHRlcicsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnLFxuICAgICAgJy4vZmxpY2tpdHknXG4gICAgXSwgZnVuY3Rpb24oIEV2RW1pdHRlciwgdXRpbHMsIEZsaWNraXR5ICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIEV2RW1pdHRlciwgdXRpbHMsIEZsaWNraXR5ICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICAgIHdpbmRvdy5GbGlja2l0eVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBFdkVtaXR0ZXIsIHV0aWxzLCBGbGlja2l0eSApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQbGF5ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gUGxheWVyKCBwYXJlbnQgKSB7XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLnN0YXRlID0gJ3N0b3BwZWQnO1xuICAvLyB2aXNpYmlsaXR5IGNoYW5nZSBldmVudCBoYW5kbGVyXG4gIHRoaXMub25WaXNpYmlsaXR5Q2hhbmdlID0gdGhpcy52aXNpYmlsaXR5Q2hhbmdlLmJpbmQoIHRoaXMgKTtcbiAgdGhpcy5vblZpc2liaWxpdHlQbGF5ID0gdGhpcy52aXNpYmlsaXR5UGxheS5iaW5kKCB0aGlzICk7XG59XG5cblBsYXllci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbi8vIHN0YXJ0IHBsYXlcblBsYXllci5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuc3RhdGUgPT0gJ3BsYXlpbmcnICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBkbyBub3QgcGxheSBpZiBwYWdlIGlzIGhpZGRlbiwgc3RhcnQgcGxheWluZyB3aGVuIHBhZ2UgaXMgdmlzaWJsZVxuICB2YXIgaXNQYWdlSGlkZGVuID0gZG9jdW1lbnQuaGlkZGVuO1xuICBpZiAoIGlzUGFnZUhpZGRlbiApIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAndmlzaWJpbGl0eWNoYW5nZScsIHRoaXMub25WaXNpYmlsaXR5UGxheSApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuc3RhdGUgPSAncGxheWluZyc7XG4gIC8vIGxpc3RlbiB0byB2aXNpYmlsaXR5IGNoYW5nZVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAndmlzaWJpbGl0eWNoYW5nZScsIHRoaXMub25WaXNpYmlsaXR5Q2hhbmdlICk7XG4gIC8vIHN0YXJ0IHRpY2tpbmdcbiAgdGhpcy50aWNrKCk7XG59O1xuXG5QbGF5ZXIucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbigpIHtcbiAgLy8gZG8gbm90IHRpY2sgaWYgbm90IHBsYXlpbmdcbiAgaWYgKCB0aGlzLnN0YXRlICE9ICdwbGF5aW5nJyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdGltZSA9IHRoaXMucGFyZW50Lm9wdGlvbnMuYXV0b1BsYXk7XG4gIC8vIGRlZmF1bHQgdG8gMyBzZWNvbmRzXG4gIHRpbWUgPSB0eXBlb2YgdGltZSA9PSAnbnVtYmVyJyA/IHRpbWUgOiAzMDAwO1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICAvLyBIQUNLOiByZXNldCB0aWNrcyBpZiBzdG9wcGVkIGFuZCBzdGFydGVkIHdpdGhpbiBpbnRlcnZhbFxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgIF90aGlzLnBhcmVudC5uZXh0KCB0cnVlICk7XG4gICAgX3RoaXMudGljaygpO1xuICB9LCB0aW1lICk7XG59O1xuXG5QbGF5ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zdGF0ZSA9ICdzdG9wcGVkJztcbiAgdGhpcy5jbGVhcigpO1xuICAvLyByZW1vdmUgdmlzaWJpbGl0eSBjaGFuZ2UgZXZlbnRcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Zpc2liaWxpdHljaGFuZ2UnLCB0aGlzLm9uVmlzaWJpbGl0eUNoYW5nZSApO1xufTtcblxuUGxheWVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICBjbGVhclRpbWVvdXQoIHRoaXMudGltZW91dCApO1xufTtcblxuUGxheWVyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuc3RhdGUgPT0gJ3BsYXlpbmcnICkge1xuICAgIHRoaXMuc3RhdGUgPSAncGF1c2VkJztcbiAgICB0aGlzLmNsZWFyKCk7XG4gIH1cbn07XG5cblBsYXllci5wcm90b3R5cGUudW5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAvLyByZS1zdGFydCBwbGF5IGlmIHBhdXNlZFxuICBpZiAoIHRoaXMuc3RhdGUgPT0gJ3BhdXNlZCcgKSB7XG4gICAgdGhpcy5wbGF5KCk7XG4gIH1cbn07XG5cbi8vIHBhdXNlIGlmIHBhZ2UgdmlzaWJpbGl0eSBpcyBoaWRkZW4sIHVucGF1c2UgaWYgdmlzaWJsZVxuUGxheWVyLnByb3RvdHlwZS52aXNpYmlsaXR5Q2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpc1BhZ2VIaWRkZW4gPSBkb2N1bWVudC5oaWRkZW47XG4gIHRoaXNbIGlzUGFnZUhpZGRlbiA/ICdwYXVzZScgOiAndW5wYXVzZScgXSgpO1xufTtcblxuUGxheWVyLnByb3RvdHlwZS52aXNpYmlsaXR5UGxheSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXkoKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Zpc2liaWxpdHljaGFuZ2UnLCB0aGlzLm9uVmlzaWJpbGl0eVBsYXkgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZsaWNraXR5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnV0aWxzLmV4dGVuZCggRmxpY2tpdHkuZGVmYXVsdHMsIHtcbiAgcGF1c2VBdXRvUGxheU9uSG92ZXI6IHRydWVcbn0pO1xuXG5GbGlja2l0eS5jcmVhdGVNZXRob2RzLnB1c2goJ19jcmVhdGVQbGF5ZXInKTtcbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxucHJvdG8uX2NyZWF0ZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoIHRoaXMgKTtcblxuICB0aGlzLm9uKCAnYWN0aXZhdGUnLCB0aGlzLmFjdGl2YXRlUGxheWVyICk7XG4gIHRoaXMub24oICd1aUNoYW5nZScsIHRoaXMuc3RvcFBsYXllciApO1xuICB0aGlzLm9uKCAncG9pbnRlckRvd24nLCB0aGlzLnN0b3BQbGF5ZXIgKTtcbiAgdGhpcy5vbiggJ2RlYWN0aXZhdGUnLCB0aGlzLmRlYWN0aXZhdGVQbGF5ZXIgKTtcbn07XG5cbnByb3RvLmFjdGl2YXRlUGxheWVyID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5hdXRvUGxheSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5wbGF5ZXIucGxheSgpO1xuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZW50ZXInLCB0aGlzICk7XG59O1xuXG4vLyBQbGF5ZXIgQVBJLCBkb24ndCBoYXRlIHRoZSAuLi4gdGhhbmtzIEkga25vdyB3aGVyZSB0aGUgZG9vciBpc1xuXG5wcm90by5wbGF5UGxheWVyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGxheWVyLnBsYXkoKTtcbn07XG5cbnByb3RvLnN0b3BQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wbGF5ZXIuc3RvcCgpO1xufTtcblxucHJvdG8ucGF1c2VQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wbGF5ZXIucGF1c2UoKTtcbn07XG5cbnByb3RvLnVucGF1c2VQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wbGF5ZXIudW5wYXVzZSgpO1xufTtcblxucHJvdG8uZGVhY3RpdmF0ZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXllci5zdG9wKCk7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2VlbnRlcicsIHRoaXMgKTtcbn07XG5cbi8vIC0tLS0tIG1vdXNlZW50ZXIvbGVhdmUgLS0tLS0gLy9cblxuLy8gcGF1c2UgYXV0by1wbGF5IG9uIGhvdmVyXG5wcm90by5vbm1vdXNlZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLnBhdXNlQXV0b1BsYXlPbkhvdmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBsYXllci5wYXVzZSgpO1xuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbGVhdmUnLCB0aGlzICk7XG59O1xuXG4vLyByZXN1bWUgYXV0by1wbGF5IG9uIGhvdmVyIG9mZlxucHJvdG8ub25tb3VzZWxlYXZlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGxheWVyLnVucGF1c2UoKTtcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWxlYXZlJywgdGhpcyApO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbkZsaWNraXR5LlBsYXllciA9IFBsYXllcjtcblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG4iLCIvLyBwcmV2L25leHQgYnV0dG9uc1xuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICcuL2ZsaWNraXR5JyxcbiAgICAgICd1bmlwb2ludGVyL3VuaXBvaW50ZXInLFxuICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJ1xuICAgIF0sIGZ1bmN0aW9uKCBGbGlja2l0eSwgVW5pcG9pbnRlciwgdXRpbHMgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBGbGlja2l0eSwgVW5pcG9pbnRlciwgdXRpbHMgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJy4vZmxpY2tpdHknKSxcbiAgICAgIHJlcXVpcmUoJ3VuaXBvaW50ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5GbGlja2l0eSxcbiAgICAgIHdpbmRvdy5Vbmlwb2ludGVyLFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCBVbmlwb2ludGVyLCB1dGlscyApIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIHN2Z1VSSSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFByZXZOZXh0QnV0dG9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIFByZXZOZXh0QnV0dG9uKCBkaXJlY3Rpb24sIHBhcmVudCApIHtcbiAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLl9jcmVhdGUoKTtcbn1cblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVW5pcG9pbnRlci5wcm90b3R5cGUgKTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gcHJvcGVydGllc1xuICB0aGlzLmlzRW5hYmxlZCA9IHRydWU7XG4gIHRoaXMuaXNQcmV2aW91cyA9IHRoaXMuZGlyZWN0aW9uID09IC0xO1xuICB2YXIgbGVmdERpcmVjdGlvbiA9IHRoaXMucGFyZW50Lm9wdGlvbnMucmlnaHRUb0xlZnQgPyAxIDogLTE7XG4gIHRoaXMuaXNMZWZ0ID0gdGhpcy5kaXJlY3Rpb24gPT0gbGVmdERpcmVjdGlvbjtcblxuICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdmbGlja2l0eS1idXR0b24gZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbic7XG4gIGVsZW1lbnQuY2xhc3NOYW1lICs9IHRoaXMuaXNQcmV2aW91cyA/ICcgcHJldmlvdXMnIDogJyBuZXh0JztcbiAgLy8gcHJldmVudCBidXR0b24gZnJvbSBzdWJtaXR0aW5nIGZvcm0gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTA4MzYwNzYvMTgyMTgzXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAndHlwZScsICdidXR0b24nICk7XG4gIC8vIGluaXQgYXMgZGlzYWJsZWRcbiAgdGhpcy5kaXNhYmxlKCk7XG5cbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgdGhpcy5pc1ByZXZpb3VzID8gJ1ByZXZpb3VzJyA6ICdOZXh0JyApO1xuXG4gIC8vIGNyZWF0ZSBhcnJvd1xuICB2YXIgc3ZnID0gdGhpcy5jcmVhdGVTVkcoKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCggc3ZnICk7XG4gIC8vIGV2ZW50c1xuICB0aGlzLnBhcmVudC5vbiggJ3NlbGVjdCcsIHRoaXMudXBkYXRlLmJpbmQoIHRoaXMgKSApO1xuICB0aGlzLm9uKCAncG9pbnRlckRvd24nLCB0aGlzLnBhcmVudC5jaGlsZFVJUG9pbnRlckRvd24uYmluZCggdGhpcy5wYXJlbnQgKSApO1xufTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYmluZFN0YXJ0RXZlbnQoIHRoaXMuZWxlbWVudCApO1xuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcyApO1xuICAvLyBhZGQgdG8gRE9NXG4gIHRoaXMucGFyZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xufTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gcmVtb3ZlIGZyb20gRE9NXG4gIHRoaXMucGFyZW50LmVsZW1lbnQucmVtb3ZlQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xuICAvLyBjbGljayBldmVudHNcbiAgdGhpcy51bmJpbmRTdGFydEV2ZW50KCB0aGlzLmVsZW1lbnQgKTtcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMgKTtcbn07XG5cblByZXZOZXh0QnV0dG9uLnByb3RvdHlwZS5jcmVhdGVTVkcgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggc3ZnVVJJLCAnc3ZnJyk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdmbGlja2l0eS1idXR0b24taWNvbicgKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZSggJ3ZpZXdCb3gnLCAnMCAwIDEwMCAxMDAnICk7XG4gIHZhciBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBzdmdVUkksICdwYXRoJyk7XG4gIHZhciBwYXRoTW92ZW1lbnRzID0gZ2V0QXJyb3dNb3ZlbWVudHMoIHRoaXMucGFyZW50Lm9wdGlvbnMuYXJyb3dTaGFwZSApO1xuICBwYXRoLnNldEF0dHJpYnV0ZSggJ2QnLCBwYXRoTW92ZW1lbnRzICk7XG4gIHBhdGguc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnYXJyb3cnICk7XG4gIC8vIHJvdGF0ZSBhcnJvd1xuICBpZiAoICF0aGlzLmlzTGVmdCApIHtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZSggJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMTAwLCAxMDApIHJvdGF0ZSgxODApICcgKTtcbiAgfVxuICBzdmcuYXBwZW5kQ2hpbGQoIHBhdGggKTtcbiAgcmV0dXJuIHN2Zztcbn07XG5cbi8vIGdldCBTVkcgcGF0aCBtb3ZtZW1lbnRcbmZ1bmN0aW9uIGdldEFycm93TW92ZW1lbnRzKCBzaGFwZSApIHtcbiAgLy8gdXNlIHNoYXBlIGFzIG1vdmVtZW50IGlmIHN0cmluZ1xuICBpZiAoIHR5cGVvZiBzaGFwZSA9PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gc2hhcGU7XG4gIH1cbiAgLy8gY3JlYXRlIG1vdmVtZW50IHN0cmluZ1xuICByZXR1cm4gJ00gJyArIHNoYXBlLngwICsgJyw1MCcgK1xuICAgICcgTCAnICsgc2hhcGUueDEgKyAnLCcgKyAoIHNoYXBlLnkxICsgNTAgKSArXG4gICAgJyBMICcgKyBzaGFwZS54MiArICcsJyArICggc2hhcGUueTIgKyA1MCApICtcbiAgICAnIEwgJyArIHNoYXBlLngzICsgJyw1MCAnICtcbiAgICAnIEwgJyArIHNoYXBlLngyICsgJywnICsgKCA1MCAtIHNoYXBlLnkyICkgK1xuICAgICcgTCAnICsgc2hhcGUueDEgKyAnLCcgKyAoIDUwIC0gc2hhcGUueTEgKSArXG4gICAgJyBaJztcbn1cblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gdXRpbHMuaGFuZGxlRXZlbnQ7XG5cblByZXZOZXh0QnV0dG9uLnByb3RvdHlwZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMuaXNFbmFibGVkICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBhcmVudC51aUNoYW5nZSgpO1xuICB2YXIgbWV0aG9kID0gdGhpcy5pc1ByZXZpb3VzID8gJ3ByZXZpb3VzJyA6ICduZXh0JztcbiAgdGhpcy5wYXJlbnRbIG1ldGhvZCBdKCk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNFbmFibGVkICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgdGhpcy5pc0VuYWJsZWQgPSB0cnVlO1xufTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5pc0VuYWJsZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gIHRoaXMuaXNFbmFibGVkID0gZmFsc2U7XG59O1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGluZGV4IG9mIGZpcnN0IG9yIGxhc3Qgc2xpZGUsIGlmIHByZXZpb3VzIG9yIG5leHRcbiAgdmFyIHNsaWRlcyA9IHRoaXMucGFyZW50LnNsaWRlcztcbiAgLy8gZW5hYmxlIGlzIHdyYXBBcm91bmQgYW5kIGF0IGxlYXN0IDIgc2xpZGVzXG4gIGlmICggdGhpcy5wYXJlbnQub3B0aW9ucy53cmFwQXJvdW5kICYmIHNsaWRlcy5sZW5ndGggPiAxICkge1xuICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBzbGlkZXMubGVuZ3RoID8gc2xpZGVzLmxlbmd0aCAtIDEgOiAwO1xuICB2YXIgYm91bmRJbmRleCA9IHRoaXMuaXNQcmV2aW91cyA/IDAgOiBsYXN0SW5kZXg7XG4gIHZhciBtZXRob2QgPSB0aGlzLnBhcmVudC5zZWxlY3RlZEluZGV4ID09IGJvdW5kSW5kZXggPyAnZGlzYWJsZScgOiAnZW5hYmxlJztcbiAgdGhpc1sgbWV0aG9kIF0oKTtcbn07XG5cblByZXZOZXh0QnV0dG9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICB0aGlzLmFsbE9mZigpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRmxpY2tpdHkgcHJvdG90eXBlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnV0aWxzLmV4dGVuZCggRmxpY2tpdHkuZGVmYXVsdHMsIHtcbiAgcHJldk5leHRCdXR0b25zOiB0cnVlLFxuICBhcnJvd1NoYXBlOiB7XG4gICAgeDA6IDEwLFxuICAgIHgxOiA2MCwgeTE6IDUwLFxuICAgIHgyOiA3MCwgeTI6IDQwLFxuICAgIHgzOiAzMFxuICB9XG59KTtcblxuRmxpY2tpdHkuY3JlYXRlTWV0aG9kcy5wdXNoKCdfY3JlYXRlUHJldk5leHRCdXR0b25zJyk7XG52YXIgcHJvdG8gPSBGbGlja2l0eS5wcm90b3R5cGU7XG5cbnByb3RvLl9jcmVhdGVQcmV2TmV4dEJ1dHRvbnMgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLnByZXZOZXh0QnV0dG9ucyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnByZXZCdXR0b24gPSBuZXcgUHJldk5leHRCdXR0b24oIC0xLCB0aGlzICk7XG4gIHRoaXMubmV4dEJ1dHRvbiA9IG5ldyBQcmV2TmV4dEJ1dHRvbiggMSwgdGhpcyApO1xuXG4gIHRoaXMub24oICdhY3RpdmF0ZScsIHRoaXMuYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMgKTtcbn07XG5cbnByb3RvLmFjdGl2YXRlUHJldk5leHRCdXR0b25zID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucHJldkJ1dHRvbi5hY3RpdmF0ZSgpO1xuICB0aGlzLm5leHRCdXR0b24uYWN0aXZhdGUoKTtcbiAgdGhpcy5vbiggJ2RlYWN0aXZhdGUnLCB0aGlzLmRlYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMgKTtcbn07XG5cbnByb3RvLmRlYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wcmV2QnV0dG9uLmRlYWN0aXZhdGUoKTtcbiAgdGhpcy5uZXh0QnV0dG9uLmRlYWN0aXZhdGUoKTtcbiAgdGhpcy5vZmYoICdkZWFjdGl2YXRlJywgdGhpcy5kZWFjdGl2YXRlUHJldk5leHRCdXR0b25zICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuRmxpY2tpdHkuUHJldk5leHRCdXR0b24gPSBQcmV2TmV4dEJ1dHRvbjtcblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG4iLCIvLyBzbGlkZVxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LkZsaWNraXR5ID0gd2luZG93LkZsaWNraXR5IHx8IHt9O1xuICAgIHdpbmRvdy5GbGlja2l0eS5TbGlkZSA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoKSB7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFNsaWRlKCBwYXJlbnQgKSB7XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLmlzT3JpZ2luTGVmdCA9IHBhcmVudC5vcmlnaW5TaWRlID09ICdsZWZ0JztcbiAgdGhpcy5jZWxscyA9IFtdO1xuICB0aGlzLm91dGVyV2lkdGggPSAwO1xuICB0aGlzLmhlaWdodCA9IDA7XG59XG5cbnZhciBwcm90byA9IFNsaWRlLnByb3RvdHlwZTtcblxucHJvdG8uYWRkQ2VsbCA9IGZ1bmN0aW9uKCBjZWxsICkge1xuICB0aGlzLmNlbGxzLnB1c2goIGNlbGwgKTtcbiAgdGhpcy5vdXRlcldpZHRoICs9IGNlbGwuc2l6ZS5vdXRlcldpZHRoO1xuICB0aGlzLmhlaWdodCA9IE1hdGgubWF4KCBjZWxsLnNpemUub3V0ZXJIZWlnaHQsIHRoaXMuaGVpZ2h0ICk7XG4gIC8vIGZpcnN0IGNlbGwgc3R1ZmZcbiAgaWYgKCB0aGlzLmNlbGxzLmxlbmd0aCA9PSAxICkge1xuICAgIHRoaXMueCA9IGNlbGwueDsgLy8geCBjb21lcyBmcm9tIGZpcnN0IGNlbGxcbiAgICB2YXIgYmVnaW5NYXJnaW4gPSB0aGlzLmlzT3JpZ2luTGVmdCA/ICdtYXJnaW5MZWZ0JyA6ICdtYXJnaW5SaWdodCc7XG4gICAgdGhpcy5maXJzdE1hcmdpbiA9IGNlbGwuc2l6ZVsgYmVnaW5NYXJnaW4gXTtcbiAgfVxufTtcblxucHJvdG8udXBkYXRlVGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBlbmRNYXJnaW4gPSB0aGlzLmlzT3JpZ2luTGVmdCA/ICdtYXJnaW5SaWdodCcgOiAnbWFyZ2luTGVmdCc7XG4gIHZhciBsYXN0Q2VsbCA9IHRoaXMuZ2V0TGFzdENlbGwoKTtcbiAgdmFyIGxhc3RNYXJnaW4gPSBsYXN0Q2VsbCA/IGxhc3RDZWxsLnNpemVbIGVuZE1hcmdpbiBdIDogMDtcbiAgdmFyIHNsaWRlV2lkdGggPSB0aGlzLm91dGVyV2lkdGggLSAoIHRoaXMuZmlyc3RNYXJnaW4gKyBsYXN0TWFyZ2luICk7XG4gIHRoaXMudGFyZ2V0ID0gdGhpcy54ICsgdGhpcy5maXJzdE1hcmdpbiArIHNsaWRlV2lkdGggKiB0aGlzLnBhcmVudC5jZWxsQWxpZ247XG59O1xuXG5wcm90by5nZXRMYXN0Q2VsbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jZWxsc1sgdGhpcy5jZWxscy5sZW5ndGggLSAxIF07XG59O1xuXG5wcm90by5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICBjZWxsLnNlbGVjdCgpO1xuICB9KTtcbn07XG5cbnByb3RvLnVuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY2VsbHMuZm9yRWFjaCggZnVuY3Rpb24oIGNlbGwgKSB7XG4gICAgY2VsbC51bnNlbGVjdCgpO1xuICB9KTtcbn07XG5cbnByb3RvLmdldENlbGxFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jZWxscy5tYXAoIGZ1bmN0aW9uKCBjZWxsICkge1xuICAgIHJldHVybiBjZWxsLmVsZW1lbnQ7XG4gIH0pO1xufTtcblxucmV0dXJuIFNsaWRlO1xuXG59KSk7XG4iLCIvKiFcbiAqIGdldFNpemUgdjIuMC4zXG4gKiBtZWFzdXJlIHNpemUgb2YgZWxlbWVudHNcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLyoganNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSAqL1xuLyogZ2xvYmFscyBjb25zb2xlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmdldFNpemUgPSBmYWN0b3J5KCk7XG4gIH1cblxufSkoIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnZXQgYSBudW1iZXIgZnJvbSBhIHN0cmluZywgbm90IGEgcGVyY2VudGFnZVxuZnVuY3Rpb24gZ2V0U3R5bGVTaXplKCB2YWx1ZSApIHtcbiAgdmFyIG51bSA9IHBhcnNlRmxvYXQoIHZhbHVlICk7XG4gIC8vIG5vdCBhIHBlcmNlbnQgbGlrZSAnMTAwJScsIGFuZCBhIG51bWJlclxuICB2YXIgaXNWYWxpZCA9IHZhbHVlLmluZGV4T2YoJyUnKSA9PSAtMSAmJiAhaXNOYU4oIG51bSApO1xuICByZXR1cm4gaXNWYWxpZCAmJiBudW07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgbG9nRXJyb3IgPSB0eXBlb2YgY29uc29sZSA9PSAndW5kZWZpbmVkJyA/IG5vb3AgOlxuICBmdW5jdGlvbiggbWVzc2FnZSApIHtcbiAgICBjb25zb2xlLmVycm9yKCBtZXNzYWdlICk7XG4gIH07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1lYXN1cmVtZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgbWVhc3VyZW1lbnRzID0gW1xuICAncGFkZGluZ0xlZnQnLFxuICAncGFkZGluZ1JpZ2h0JyxcbiAgJ3BhZGRpbmdUb3AnLFxuICAncGFkZGluZ0JvdHRvbScsXG4gICdtYXJnaW5MZWZ0JyxcbiAgJ21hcmdpblJpZ2h0JyxcbiAgJ21hcmdpblRvcCcsXG4gICdtYXJnaW5Cb3R0b20nLFxuICAnYm9yZGVyTGVmdFdpZHRoJyxcbiAgJ2JvcmRlclJpZ2h0V2lkdGgnLFxuICAnYm9yZGVyVG9wV2lkdGgnLFxuICAnYm9yZGVyQm90dG9tV2lkdGgnXG5dO1xuXG52YXIgbWVhc3VyZW1lbnRzTGVuZ3RoID0gbWVhc3VyZW1lbnRzLmxlbmd0aDtcblxuZnVuY3Rpb24gZ2V0WmVyb1NpemUoKSB7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBpbm5lcldpZHRoOiAwLFxuICAgIGlubmVySGVpZ2h0OiAwLFxuICAgIG91dGVyV2lkdGg6IDAsXG4gICAgb3V0ZXJIZWlnaHQ6IDBcbiAgfTtcbiAgZm9yICggdmFyIGk9MDsgaSA8IG1lYXN1cmVtZW50c0xlbmd0aDsgaSsrICkge1xuICAgIHZhciBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50c1tpXTtcbiAgICBzaXplWyBtZWFzdXJlbWVudCBdID0gMDtcbiAgfVxuICByZXR1cm4gc2l6ZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2V0U3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBnZXRTdHlsZSwgZ2V0IHN0eWxlIG9mIGVsZW1lbnQsIGNoZWNrIGZvciBGaXJlZm94IGJ1Z1xuICogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlKCBlbGVtICkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG4gIGlmICggIXN0eWxlICkge1xuICAgIGxvZ0Vycm9yKCAnU3R5bGUgcmV0dXJuZWQgJyArIHN0eWxlICtcbiAgICAgICcuIEFyZSB5b3UgcnVubmluZyB0aGlzIGNvZGUgaW4gYSBoaWRkZW4gaWZyYW1lIG9uIEZpcmVmb3g/ICcgK1xuICAgICAgJ1NlZSBodHRwczovL2JpdC5seS9nZXRzaXplYnVnMScgKTtcbiAgfVxuICByZXR1cm4gc3R5bGU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBpc1NldHVwID0gZmFsc2U7XG5cbnZhciBpc0JveFNpemVPdXRlcjtcblxuLyoqXG4gKiBzZXR1cFxuICogY2hlY2sgaXNCb3hTaXplck91dGVyXG4gKiBkbyBvbiBmaXJzdCBnZXRTaXplKCkgcmF0aGVyIHRoYW4gb24gcGFnZSBsb2FkIGZvciBGaXJlZm94IGJ1Z1xuICovXG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgLy8gc2V0dXAgb25jZVxuICBpZiAoIGlzU2V0dXAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlzU2V0dXAgPSB0cnVlO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJveCBzaXppbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvKipcbiAgICogQ2hyb21lICYgU2FmYXJpIG1lYXN1cmUgdGhlIG91dGVyLXdpZHRoIG9uIHN0eWxlLndpZHRoIG9uIGJvcmRlci1ib3ggZWxlbXNcbiAgICogSUUxMSAmIEZpcmVmb3g8MjkgbWVhc3VyZXMgdGhlIGlubmVyLXdpZHRoXG4gICAqL1xuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5zdHlsZS53aWR0aCA9ICcyMDBweCc7XG4gIGRpdi5zdHlsZS5wYWRkaW5nID0gJzFweCAycHggM3B4IDRweCc7XG4gIGRpdi5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gIGRpdi5zdHlsZS5ib3JkZXJXaWR0aCA9ICcxcHggMnB4IDNweCA0cHgnO1xuICBkaXYuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuXG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoIGRpdiApO1xuICB2YXIgc3R5bGUgPSBnZXRTdHlsZSggZGl2ICk7XG4gIC8vIHJvdW5kIHZhbHVlIGZvciBicm93c2VyIHpvb20uIGRlc2FuZHJvL21hc29ucnkjOTI4XG4gIGlzQm94U2l6ZU91dGVyID0gTWF0aC5yb3VuZCggZ2V0U3R5bGVTaXplKCBzdHlsZS53aWR0aCApICkgPT0gMjAwO1xuICBnZXRTaXplLmlzQm94U2l6ZU91dGVyID0gaXNCb3hTaXplT3V0ZXI7XG5cbiAgYm9keS5yZW1vdmVDaGlsZCggZGl2ICk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdldFNpemUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gZ2V0U2l6ZSggZWxlbSApIHtcbiAgc2V0dXAoKTtcblxuICAvLyB1c2UgcXVlcnlTZWxldG9yIGlmIGVsZW0gaXMgc3RyaW5nXG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGVsZW0gKTtcbiAgfVxuXG4gIC8vIGRvIG5vdCBwcm9jZWVkIG9uIG5vbi1vYmplY3RzXG4gIGlmICggIWVsZW0gfHwgdHlwZW9mIGVsZW0gIT0gJ29iamVjdCcgfHwgIWVsZW0ubm9kZVR5cGUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoIGVsZW0gKTtcblxuICAvLyBpZiBoaWRkZW4sIGV2ZXJ5dGhpbmcgaXMgMFxuICBpZiAoIHN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnICkge1xuICAgIHJldHVybiBnZXRaZXJvU2l6ZSgpO1xuICB9XG5cbiAgdmFyIHNpemUgPSB7fTtcbiAgc2l6ZS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gIHNpemUuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgdmFyIGlzQm9yZGVyQm94ID0gc2l6ZS5pc0JvcmRlckJveCA9IHN0eWxlLmJveFNpemluZyA9PSAnYm9yZGVyLWJveCc7XG5cbiAgLy8gZ2V0IGFsbCBtZWFzdXJlbWVudHNcbiAgZm9yICggdmFyIGk9MDsgaSA8IG1lYXN1cmVtZW50c0xlbmd0aDsgaSsrICkge1xuICAgIHZhciBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVsgbWVhc3VyZW1lbnQgXTtcbiAgICB2YXIgbnVtID0gcGFyc2VGbG9hdCggdmFsdWUgKTtcbiAgICAvLyBhbnkgJ2F1dG8nLCAnbWVkaXVtJyB2YWx1ZSB3aWxsIGJlIDBcbiAgICBzaXplWyBtZWFzdXJlbWVudCBdID0gIWlzTmFOKCBudW0gKSA/IG51bSA6IDA7XG4gIH1cblxuICB2YXIgcGFkZGluZ1dpZHRoID0gc2l6ZS5wYWRkaW5nTGVmdCArIHNpemUucGFkZGluZ1JpZ2h0O1xuICB2YXIgcGFkZGluZ0hlaWdodCA9IHNpemUucGFkZGluZ1RvcCArIHNpemUucGFkZGluZ0JvdHRvbTtcbiAgdmFyIG1hcmdpbldpZHRoID0gc2l6ZS5tYXJnaW5MZWZ0ICsgc2l6ZS5tYXJnaW5SaWdodDtcbiAgdmFyIG1hcmdpbkhlaWdodCA9IHNpemUubWFyZ2luVG9wICsgc2l6ZS5tYXJnaW5Cb3R0b207XG4gIHZhciBib3JkZXJXaWR0aCA9IHNpemUuYm9yZGVyTGVmdFdpZHRoICsgc2l6ZS5ib3JkZXJSaWdodFdpZHRoO1xuICB2YXIgYm9yZGVySGVpZ2h0ID0gc2l6ZS5ib3JkZXJUb3BXaWR0aCArIHNpemUuYm9yZGVyQm90dG9tV2lkdGg7XG5cbiAgdmFyIGlzQm9yZGVyQm94U2l6ZU91dGVyID0gaXNCb3JkZXJCb3ggJiYgaXNCb3hTaXplT3V0ZXI7XG5cbiAgLy8gb3ZlcndyaXRlIHdpZHRoIGFuZCBoZWlnaHQgaWYgd2UgY2FuIGdldCBpdCBmcm9tIHN0eWxlXG4gIHZhciBzdHlsZVdpZHRoID0gZ2V0U3R5bGVTaXplKCBzdHlsZS53aWR0aCApO1xuICBpZiAoIHN0eWxlV2lkdGggIT09IGZhbHNlICkge1xuICAgIHNpemUud2lkdGggPSBzdHlsZVdpZHRoICtcbiAgICAgIC8vIGFkZCBwYWRkaW5nIGFuZCBib3JkZXIgdW5sZXNzIGl0J3MgYWxyZWFkeSBpbmNsdWRpbmcgaXRcbiAgICAgICggaXNCb3JkZXJCb3hTaXplT3V0ZXIgPyAwIDogcGFkZGluZ1dpZHRoICsgYm9yZGVyV2lkdGggKTtcbiAgfVxuXG4gIHZhciBzdHlsZUhlaWdodCA9IGdldFN0eWxlU2l6ZSggc3R5bGUuaGVpZ2h0ICk7XG4gIGlmICggc3R5bGVIZWlnaHQgIT09IGZhbHNlICkge1xuICAgIHNpemUuaGVpZ2h0ID0gc3R5bGVIZWlnaHQgK1xuICAgICAgLy8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB1bmxlc3MgaXQncyBhbHJlYWR5IGluY2x1ZGluZyBpdFxuICAgICAgKCBpc0JvcmRlckJveFNpemVPdXRlciA/IDAgOiBwYWRkaW5nSGVpZ2h0ICsgYm9yZGVySGVpZ2h0ICk7XG4gIH1cblxuICBzaXplLmlubmVyV2lkdGggPSBzaXplLndpZHRoIC0gKCBwYWRkaW5nV2lkdGggKyBib3JkZXJXaWR0aCApO1xuICBzaXplLmlubmVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgLSAoIHBhZGRpbmdIZWlnaHQgKyBib3JkZXJIZWlnaHQgKTtcblxuICBzaXplLm91dGVyV2lkdGggPSBzaXplLndpZHRoICsgbWFyZ2luV2lkdGg7XG4gIHNpemUub3V0ZXJIZWlnaHQgPSBzaXplLmhlaWdodCArIG1hcmdpbkhlaWdodDtcblxuICByZXR1cm4gc2l6ZTtcbn1cblxucmV0dXJuIGdldFNpemU7XG5cbn0pO1xuIiwiLyohXG4gKiBVbmlkcmFnZ2VyIHYyLjMuMVxuICogRHJhZ2dhYmxlIGJhc2UgY2xhc3NcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgdW51c2VkOiB0cnVlLCB1bmRlZjogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qanNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG5cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICd1bmlwb2ludGVyL3VuaXBvaW50ZXInXG4gICAgXSwgZnVuY3Rpb24oIFVuaXBvaW50ZXIgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBVbmlwb2ludGVyICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCd1bmlwb2ludGVyJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LlVuaWRyYWdnZXIgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LlVuaXBvaW50ZXJcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBVbmlwb2ludGVyICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFVuaWRyYWdnZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gVW5pZHJhZ2dlcigpIHt9XG5cbi8vIGluaGVyaXQgVW5pcG9pbnRlciAmIEV2RW1pdHRlclxudmFyIHByb3RvID0gVW5pZHJhZ2dlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBVbmlwb2ludGVyLnByb3RvdHlwZSApO1xuXG4vLyAtLS0tLSBiaW5kIHN0YXJ0IC0tLS0tIC8vXG5cbnByb3RvLmJpbmRIYW5kbGVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2JpbmRIYW5kbGVzKCB0cnVlICk7XG59O1xuXG5wcm90by51bmJpbmRIYW5kbGVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2JpbmRIYW5kbGVzKCBmYWxzZSApO1xufTtcblxuLyoqXG4gKiBBZGQgb3IgcmVtb3ZlIHN0YXJ0IGV2ZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzQWRkXG4gKi9cbnByb3RvLl9iaW5kSGFuZGxlcyA9IGZ1bmN0aW9uKCBpc0FkZCApIHtcbiAgLy8gbXVuZ2UgaXNBZGQsIGRlZmF1bHQgdG8gdHJ1ZVxuICBpc0FkZCA9IGlzQWRkID09PSB1bmRlZmluZWQgPyB0cnVlIDogaXNBZGQ7XG4gIC8vIGJpbmQgZWFjaCBoYW5kbGVcbiAgdmFyIGJpbmRNZXRob2QgPSBpc0FkZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgdmFyIHRvdWNoQWN0aW9uID0gaXNBZGQgPyB0aGlzLl90b3VjaEFjdGlvblZhbHVlIDogJyc7XG4gIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLmhhbmRsZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGhhbmRsZSA9IHRoaXMuaGFuZGxlc1tpXTtcbiAgICB0aGlzLl9iaW5kU3RhcnRFdmVudCggaGFuZGxlLCBpc0FkZCApO1xuICAgIGhhbmRsZVsgYmluZE1ldGhvZCBdKCAnY2xpY2snLCB0aGlzICk7XG4gICAgLy8gdG91Y2gtYWN0aW9uOiBub25lIHRvIG92ZXJyaWRlIGJyb3dzZXIgdG91Y2ggZ2VzdHVyZXMuIG1ldGFmaXp6eS9mbGlja2l0eSM1NDBcbiAgICBpZiAoIHdpbmRvdy5Qb2ludGVyRXZlbnQgKSB7XG4gICAgICBoYW5kbGUuc3R5bGUudG91Y2hBY3Rpb24gPSB0b3VjaEFjdGlvbjtcbiAgICB9XG4gIH1cbn07XG5cbi8vIHByb3RvdHlwZSBzbyBpdCBjYW4gYmUgb3ZlcndyaXRlYWJsZSBieSBGbGlja2l0eVxucHJvdG8uX3RvdWNoQWN0aW9uVmFsdWUgPSAnbm9uZSc7XG5cbi8vIC0tLS0tIHN0YXJ0IGV2ZW50IC0tLS0tIC8vXG5cbi8qKlxuICogcG9pbnRlciBzdGFydFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnQgb3IgVG91Y2h9IHBvaW50ZXJcbiAqL1xucHJvdG8ucG9pbnRlckRvd24gPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHZhciBpc09rYXkgPSB0aGlzLm9rYXlQb2ludGVyRG93biggZXZlbnQgKTtcbiAgaWYgKCAhaXNPa2F5ICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB0cmFjayBzdGFydCBldmVudCBwb3NpdGlvblxuICAvLyBTYWZhcmkgOSBvdmVycmlkZXMgcGFnZVggYW5kIHBhZ2VZLiBUaGVzZSB2YWx1ZXMgbmVlZHMgdG8gYmUgY29waWVkLiBmbGlja2l0eSM4NDJcbiAgdGhpcy5wb2ludGVyRG93blBvaW50ZXIgPSB7XG4gICAgcGFnZVg6IHBvaW50ZXIucGFnZVgsXG4gICAgcGFnZVk6IHBvaW50ZXIucGFnZVksXG4gIH07XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdGhpcy5wb2ludGVyRG93bkJsdXIoKTtcbiAgLy8gYmluZCBtb3ZlIGFuZCBlbmQgZXZlbnRzXG4gIHRoaXMuX2JpbmRQb3N0U3RhcnRFdmVudHMoIGV2ZW50ICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlckRvd24nLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIG5vZGVzIHRoYXQgaGF2ZSB0ZXh0IGZpZWxkc1xudmFyIGN1cnNvck5vZGVzID0ge1xuICBURVhUQVJFQTogdHJ1ZSxcbiAgSU5QVVQ6IHRydWUsXG4gIFNFTEVDVDogdHJ1ZSxcbiAgT1BUSU9OOiB0cnVlLFxufTtcblxuLy8gaW5wdXQgdHlwZXMgdGhhdCBkbyBub3QgaGF2ZSB0ZXh0IGZpZWxkc1xudmFyIGNsaWNrVHlwZXMgPSB7XG4gIHJhZGlvOiB0cnVlLFxuICBjaGVja2JveDogdHJ1ZSxcbiAgYnV0dG9uOiB0cnVlLFxuICBzdWJtaXQ6IHRydWUsXG4gIGltYWdlOiB0cnVlLFxuICBmaWxlOiB0cnVlLFxufTtcblxuLy8gZGlzbWlzcyBpbnB1dHMgd2l0aCB0ZXh0IGZpZWxkcy4gZmxpY2tpdHkjNDAzLCBmbGlja2l0eSM0MDRcbnByb3RvLm9rYXlQb2ludGVyRG93biA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIGlzQ3Vyc29yTm9kZSA9IGN1cnNvck5vZGVzWyBldmVudC50YXJnZXQubm9kZU5hbWUgXTtcbiAgdmFyIGlzQ2xpY2tUeXBlID0gY2xpY2tUeXBlc1sgZXZlbnQudGFyZ2V0LnR5cGUgXTtcbiAgdmFyIGlzT2theSA9ICFpc0N1cnNvck5vZGUgfHwgaXNDbGlja1R5cGU7XG4gIGlmICggIWlzT2theSApIHtcbiAgICB0aGlzLl9wb2ludGVyUmVzZXQoKTtcbiAgfVxuICByZXR1cm4gaXNPa2F5O1xufTtcblxuLy8ga2x1ZGdlIHRvIGJsdXIgcHJldmlvdXNseSBmb2N1c2VkIGlucHV0XG5wcm90by5wb2ludGVyRG93bkJsdXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGZvY3VzZWQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAvLyBkbyBub3QgYmx1ciBib2R5IGZvciBJRTEwLCBtZXRhZml6enkvZmxpY2tpdHkjMTE3XG4gIHZhciBjYW5CbHVyID0gZm9jdXNlZCAmJiBmb2N1c2VkLmJsdXIgJiYgZm9jdXNlZCAhPSBkb2N1bWVudC5ib2R5O1xuICBpZiAoIGNhbkJsdXIgKSB7XG4gICAgZm9jdXNlZC5ibHVyKCk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIG1vdmUgZXZlbnQgLS0tLS0gLy9cblxuLyoqXG4gKiBkcmFnIG1vdmVcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50IG9yIFRvdWNofSBwb2ludGVyXG4gKi9cbnByb3RvLnBvaW50ZXJNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB2YXIgbW92ZVZlY3RvciA9IHRoaXMuX2RyYWdQb2ludGVyTW92ZSggZXZlbnQsIHBvaW50ZXIgKTtcbiAgdGhpcy5lbWl0RXZlbnQoICdwb2ludGVyTW92ZScsIFsgZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgXSApO1xuICB0aGlzLl9kcmFnTW92ZSggZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgKTtcbn07XG5cbi8vIGJhc2UgcG9pbnRlciBtb3ZlIGxvZ2ljXG5wcm90by5fZHJhZ1BvaW50ZXJNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB2YXIgbW92ZVZlY3RvciA9IHtcbiAgICB4OiBwb2ludGVyLnBhZ2VYIC0gdGhpcy5wb2ludGVyRG93blBvaW50ZXIucGFnZVgsXG4gICAgeTogcG9pbnRlci5wYWdlWSAtIHRoaXMucG9pbnRlckRvd25Qb2ludGVyLnBhZ2VZXG4gIH07XG4gIC8vIHN0YXJ0IGRyYWcgaWYgcG9pbnRlciBoYXMgbW92ZWQgZmFyIGVub3VnaCB0byBzdGFydCBkcmFnXG4gIGlmICggIXRoaXMuaXNEcmFnZ2luZyAmJiB0aGlzLmhhc0RyYWdTdGFydGVkKCBtb3ZlVmVjdG9yICkgKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0KCBldmVudCwgcG9pbnRlciApO1xuICB9XG4gIHJldHVybiBtb3ZlVmVjdG9yO1xufTtcblxuLy8gY29uZGl0aW9uIGlmIHBvaW50ZXIgaGFzIG1vdmVkIGZhciBlbm91Z2ggdG8gc3RhcnQgZHJhZ1xucHJvdG8uaGFzRHJhZ1N0YXJ0ZWQgPSBmdW5jdGlvbiggbW92ZVZlY3RvciApIHtcbiAgcmV0dXJuIE1hdGguYWJzKCBtb3ZlVmVjdG9yLnggKSA+IDMgfHwgTWF0aC5hYnMoIG1vdmVWZWN0b3IueSApID4gMztcbn07XG5cbi8vIC0tLS0tIGVuZCBldmVudCAtLS0tLSAvL1xuXG4vKipcbiAqIHBvaW50ZXIgdXBcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50IG9yIFRvdWNofSBwb2ludGVyXG4gKi9cbnByb3RvLnBvaW50ZXJVcCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5lbWl0RXZlbnQoICdwb2ludGVyVXAnLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbiAgdGhpcy5fZHJhZ1BvaW50ZXJVcCggZXZlbnQsIHBvaW50ZXIgKTtcbn07XG5cbnByb3RvLl9kcmFnUG9pbnRlclVwID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICBpZiAoIHRoaXMuaXNEcmFnZ2luZyApIHtcbiAgICB0aGlzLl9kcmFnRW5kKCBldmVudCwgcG9pbnRlciApO1xuICB9IGVsc2Uge1xuICAgIC8vIHBvaW50ZXIgZGlkbid0IG1vdmUgZW5vdWdoIGZvciBkcmFnIHRvIHN0YXJ0XG4gICAgdGhpcy5fc3RhdGljQ2xpY2soIGV2ZW50LCBwb2ludGVyICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRyYWcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZHJhZ1N0YXJ0XG5wcm90by5fZHJhZ1N0YXJ0ID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAvLyBwcmV2ZW50IGNsaWNrc1xuICB0aGlzLmlzUHJldmVudGluZ0NsaWNrcyA9IHRydWU7XG4gIHRoaXMuZHJhZ1N0YXJ0KCBldmVudCwgcG9pbnRlciApO1xufTtcblxucHJvdG8uZHJhZ1N0YXJ0ID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLmVtaXRFdmVudCggJ2RyYWdTdGFydCcsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xufTtcblxuLy8gZHJhZ01vdmVcbnByb3RvLl9kcmFnTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciwgbW92ZVZlY3RvciApIHtcbiAgLy8gZG8gbm90IGRyYWcgaWYgbm90IGRyYWdnaW5nIHlldFxuICBpZiAoICF0aGlzLmlzRHJhZ2dpbmcgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5kcmFnTW92ZSggZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgKTtcbn07XG5cbnByb3RvLmRyYWdNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyLCBtb3ZlVmVjdG9yICkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB0aGlzLmVtaXRFdmVudCggJ2RyYWdNb3ZlJywgWyBldmVudCwgcG9pbnRlciwgbW92ZVZlY3RvciBdICk7XG59O1xuXG4vLyBkcmFnRW5kXG5wcm90by5fZHJhZ0VuZCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgLy8gc2V0IGZsYWdzXG4gIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAvLyByZS1lbmFibGUgY2xpY2tpbmcgYXN5bmNcbiAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgZGVsZXRlIHRoaXMuaXNQcmV2ZW50aW5nQ2xpY2tzO1xuICB9LmJpbmQoIHRoaXMgKSApO1xuXG4gIHRoaXMuZHJhZ0VuZCggZXZlbnQsIHBvaW50ZXIgKTtcbn07XG5cbnByb3RvLmRyYWdFbmQgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuZW1pdEV2ZW50KCAnZHJhZ0VuZCcsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xufTtcblxuLy8gLS0tLS0gb25jbGljayAtLS0tLSAvL1xuXG4vLyBoYW5kbGUgYWxsIGNsaWNrcyBhbmQgcHJldmVudCBjbGlja3Mgd2hlbiBkcmFnZ2luZ1xucHJvdG8ub25jbGljayA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgaWYgKCB0aGlzLmlzUHJldmVudGluZ0NsaWNrcyApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59O1xuXG4vLyAtLS0tLSBzdGF0aWNDbGljayAtLS0tLSAvL1xuXG4vLyB0cmlnZ2VyZWQgYWZ0ZXIgcG9pbnRlciBkb3duICYgdXAgd2l0aCBuby90aW55IG1vdmVtZW50XG5wcm90by5fc3RhdGljQ2xpY2sgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIC8vIGlnbm9yZSBlbXVsYXRlZCBtb3VzZSB1cCBjbGlja3NcbiAgaWYgKCB0aGlzLmlzSWdub3JpbmdNb3VzZVVwICYmIGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuc3RhdGljQ2xpY2soIGV2ZW50LCBwb2ludGVyICk7XG5cbiAgLy8gc2V0IGZsYWcgZm9yIGVtdWxhdGVkIGNsaWNrcyAzMDBtcyBhZnRlciB0b3VjaGVuZFxuICBpZiAoIGV2ZW50LnR5cGUgIT0gJ21vdXNldXAnICkge1xuICAgIHRoaXMuaXNJZ25vcmluZ01vdXNlVXAgPSB0cnVlO1xuICAgIC8vIHJlc2V0IGZsYWcgYWZ0ZXIgMzAwbXNcbiAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmlzSWdub3JpbmdNb3VzZVVwO1xuICAgIH0uYmluZCggdGhpcyApLCA0MDAgKTtcbiAgfVxufTtcblxucHJvdG8uc3RhdGljQ2xpY2sgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuZW1pdEV2ZW50KCAnc3RhdGljQ2xpY2snLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIC0tLS0tIHV0aWxzIC0tLS0tIC8vXG5cblVuaWRyYWdnZXIuZ2V0UG9pbnRlclBvaW50ID0gVW5pcG9pbnRlci5nZXRQb2ludGVyUG9pbnQ7XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gVW5pZHJhZ2dlcjtcblxufSkpO1xuIiwiLyohXG4gKiBVbmlwb2ludGVyIHYyLjMuMFxuICogYmFzZSBjbGFzcyBmb3IgZG9pbmcgb25lIHRoaW5nIHdpdGggcG9pbnRlciBldmVudFxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlLCBzdHJpY3Q6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWwgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICdldi1lbWl0dGVyL2V2LWVtaXR0ZXInXG4gICAgXSwgZnVuY3Rpb24oIEV2RW1pdHRlciApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5Vbmlwb2ludGVyID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5FdkVtaXR0ZXJcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIFVuaXBvaW50ZXIoKSB7fVxuXG4vLyBpbmhlcml0IEV2RW1pdHRlclxudmFyIHByb3RvID0gVW5pcG9pbnRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbnByb3RvLmJpbmRTdGFydEV2ZW50ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHRoaXMuX2JpbmRTdGFydEV2ZW50KCBlbGVtLCB0cnVlICk7XG59O1xuXG5wcm90by51bmJpbmRTdGFydEV2ZW50ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHRoaXMuX2JpbmRTdGFydEV2ZW50KCBlbGVtLCBmYWxzZSApO1xufTtcblxuLyoqXG4gKiBBZGQgb3IgcmVtb3ZlIHN0YXJ0IGV2ZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzQWRkIC0gcmVtb3ZlIGlmIGZhbHNleVxuICovXG5wcm90by5fYmluZFN0YXJ0RXZlbnQgPSBmdW5jdGlvbiggZWxlbSwgaXNBZGQgKSB7XG4gIC8vIG11bmdlIGlzQWRkLCBkZWZhdWx0IHRvIHRydWVcbiAgaXNBZGQgPSBpc0FkZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGlzQWRkO1xuICB2YXIgYmluZE1ldGhvZCA9IGlzQWRkID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuXG4gIC8vIGRlZmF1bHQgdG8gbW91c2UgZXZlbnRzXG4gIHZhciBzdGFydEV2ZW50ID0gJ21vdXNlZG93bic7XG4gIGlmICggd2luZG93LlBvaW50ZXJFdmVudCApIHtcbiAgICAvLyBQb2ludGVyIEV2ZW50c1xuICAgIHN0YXJ0RXZlbnQgPSAncG9pbnRlcmRvd24nO1xuICB9IGVsc2UgaWYgKCAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgKSB7XG4gICAgLy8gVG91Y2ggRXZlbnRzLiBpT1MgU2FmYXJpXG4gICAgc3RhcnRFdmVudCA9ICd0b3VjaHN0YXJ0JztcbiAgfVxuICBlbGVtWyBiaW5kTWV0aG9kIF0oIHN0YXJ0RXZlbnQsIHRoaXMgKTtcbn07XG5cbi8vIHRyaWdnZXIgaGFuZGxlciBtZXRob2RzIGZvciBldmVudHNcbnByb3RvLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbi8vIHJldHVybnMgdGhlIHRvdWNoIHRoYXQgd2UncmUga2VlcGluZyB0cmFjayBvZlxucHJvdG8uZ2V0VG91Y2ggPSBmdW5jdGlvbiggdG91Y2hlcyApIHtcbiAgZm9yICggdmFyIGk9MDsgaSA8IHRvdWNoZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIHRvdWNoID0gdG91Y2hlc1tpXTtcbiAgICBpZiAoIHRvdWNoLmlkZW50aWZpZXIgPT0gdGhpcy5wb2ludGVySWRlbnRpZmllciApIHtcbiAgICAgIHJldHVybiB0b3VjaDtcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tIHN0YXJ0IGV2ZW50IC0tLS0tIC8vXG5cbnByb3RvLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICAvLyBkaXNtaXNzIGNsaWNrcyBmcm9tIHJpZ2h0IG9yIG1pZGRsZSBidXR0b25zXG4gIHZhciBidXR0b24gPSBldmVudC5idXR0b247XG4gIGlmICggYnV0dG9uICYmICggYnV0dG9uICE9PSAwICYmIGJ1dHRvbiAhPT0gMSApICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLl9wb2ludGVyRG93biggZXZlbnQsIGV2ZW50ICk7XG59O1xuXG5wcm90by5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMuX3BvaW50ZXJEb3duKCBldmVudCwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gKTtcbn07XG5cbnByb3RvLm9ucG9pbnRlcmRvd24gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMuX3BvaW50ZXJEb3duKCBldmVudCwgZXZlbnQgKTtcbn07XG5cbi8qKlxuICogcG9pbnRlciBzdGFydFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnQgb3IgVG91Y2h9IHBvaW50ZXJcbiAqL1xucHJvdG8uX3BvaW50ZXJEb3duID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICAvLyBkaXNtaXNzIHJpZ2h0IGNsaWNrIGFuZCBvdGhlciBwb2ludGVyc1xuICAvLyBidXR0b24gPSAwIGlzIG9rYXksIDEtNCBub3RcbiAgaWYgKCBldmVudC5idXR0b24gfHwgdGhpcy5pc1BvaW50ZXJEb3duICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuaXNQb2ludGVyRG93biA9IHRydWU7XG4gIC8vIHNhdmUgcG9pbnRlciBpZGVudGlmaWVyIHRvIG1hdGNoIHVwIHRvdWNoIGV2ZW50c1xuICB0aGlzLnBvaW50ZXJJZGVudGlmaWVyID0gcG9pbnRlci5wb2ludGVySWQgIT09IHVuZGVmaW5lZCA/XG4gICAgLy8gcG9pbnRlcklkIGZvciBwb2ludGVyIGV2ZW50cywgdG91Y2guaW5kZW50aWZpZXIgZm9yIHRvdWNoIGV2ZW50c1xuICAgIHBvaW50ZXIucG9pbnRlcklkIDogcG9pbnRlci5pZGVudGlmaWVyO1xuXG4gIHRoaXMucG9pbnRlckRvd24oIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG5wcm90by5wb2ludGVyRG93biA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5fYmluZFBvc3RTdGFydEV2ZW50cyggZXZlbnQgKTtcbiAgdGhpcy5lbWl0RXZlbnQoICdwb2ludGVyRG93bicsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xufTtcblxuLy8gaGFzaCBvZiBldmVudHMgdG8gYmUgYm91bmQgYWZ0ZXIgc3RhcnQgZXZlbnRcbnZhciBwb3N0U3RhcnRFdmVudHMgPSB7XG4gIG1vdXNlZG93bjogWyAnbW91c2Vtb3ZlJywgJ21vdXNldXAnIF0sXG4gIHRvdWNoc3RhcnQ6IFsgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcgXSxcbiAgcG9pbnRlcmRvd246IFsgJ3BvaW50ZXJtb3ZlJywgJ3BvaW50ZXJ1cCcsICdwb2ludGVyY2FuY2VsJyBdLFxufTtcblxucHJvdG8uX2JpbmRQb3N0U3RhcnRFdmVudHMgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGlmICggIWV2ZW50ICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBnZXQgcHJvcGVyIGV2ZW50cyB0byBtYXRjaCBzdGFydCBldmVudFxuICB2YXIgZXZlbnRzID0gcG9zdFN0YXJ0RXZlbnRzWyBldmVudC50eXBlIF07XG4gIC8vIGJpbmQgZXZlbnRzIHRvIG5vZGVcbiAgZXZlbnRzLmZvckVhY2goIGZ1bmN0aW9uKCBldmVudE5hbWUgKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgdGhpcyApO1xuICB9LCB0aGlzICk7XG4gIC8vIHNhdmUgdGhlc2UgYXJndW1lbnRzXG4gIHRoaXMuX2JvdW5kUG9pbnRlckV2ZW50cyA9IGV2ZW50cztcbn07XG5cbnByb3RvLl91bmJpbmRQb3N0U3RhcnRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2hlY2sgZm9yIF9ib3VuZEV2ZW50cywgaW4gY2FzZSBkcmFnRW5kIHRyaWdnZXJlZCB0d2ljZSAob2xkIElFOCBidWcpXG4gIGlmICggIXRoaXMuX2JvdW5kUG9pbnRlckV2ZW50cyApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5fYm91bmRQb2ludGVyRXZlbnRzLmZvckVhY2goIGZ1bmN0aW9uKCBldmVudE5hbWUgKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgdGhpcyApO1xuICB9LCB0aGlzICk7XG5cbiAgZGVsZXRlIHRoaXMuX2JvdW5kUG9pbnRlckV2ZW50cztcbn07XG5cbi8vIC0tLS0tIG1vdmUgZXZlbnQgLS0tLS0gLy9cblxucHJvdG8ub25tb3VzZW1vdmUgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMuX3BvaW50ZXJNb3ZlKCBldmVudCwgZXZlbnQgKTtcbn07XG5cbnByb3RvLm9ucG9pbnRlcm1vdmUgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGlmICggZXZlbnQucG9pbnRlcklkID09IHRoaXMucG9pbnRlcklkZW50aWZpZXIgKSB7XG4gICAgdGhpcy5fcG9pbnRlck1vdmUoIGV2ZW50LCBldmVudCApO1xuICB9XG59O1xuXG5wcm90by5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIHRvdWNoID0gdGhpcy5nZXRUb3VjaCggZXZlbnQuY2hhbmdlZFRvdWNoZXMgKTtcbiAgaWYgKCB0b3VjaCApIHtcbiAgICB0aGlzLl9wb2ludGVyTW92ZSggZXZlbnQsIHRvdWNoICk7XG4gIH1cbn07XG5cbi8qKlxuICogcG9pbnRlciBtb3ZlXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHBhcmFtIHtFdmVudCBvciBUb3VjaH0gcG9pbnRlclxuICogQHByaXZhdGVcbiAqL1xucHJvdG8uX3BvaW50ZXJNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLnBvaW50ZXJNb3ZlKCBldmVudCwgcG9pbnRlciApO1xufTtcblxuLy8gcHVibGljXG5wcm90by5wb2ludGVyTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5lbWl0RXZlbnQoICdwb2ludGVyTW92ZScsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xufTtcblxuLy8gLS0tLS0gZW5kIGV2ZW50IC0tLS0tIC8vXG5cblxucHJvdG8ub25tb3VzZXVwID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLl9wb2ludGVyVXAoIGV2ZW50LCBldmVudCApO1xufTtcblxucHJvdG8ub25wb2ludGVydXAgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGlmICggZXZlbnQucG9pbnRlcklkID09IHRoaXMucG9pbnRlcklkZW50aWZpZXIgKSB7XG4gICAgdGhpcy5fcG9pbnRlclVwKCBldmVudCwgZXZlbnQgKTtcbiAgfVxufTtcblxucHJvdG8ub250b3VjaGVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIHRvdWNoID0gdGhpcy5nZXRUb3VjaCggZXZlbnQuY2hhbmdlZFRvdWNoZXMgKTtcbiAgaWYgKCB0b3VjaCApIHtcbiAgICB0aGlzLl9wb2ludGVyVXAoIGV2ZW50LCB0b3VjaCApO1xuICB9XG59O1xuXG4vKipcbiAqIHBvaW50ZXIgdXBcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50IG9yIFRvdWNofSBwb2ludGVyXG4gKiBAcHJpdmF0ZVxuICovXG5wcm90by5fcG9pbnRlclVwID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLl9wb2ludGVyRG9uZSgpO1xuICB0aGlzLnBvaW50ZXJVcCggZXZlbnQsIHBvaW50ZXIgKTtcbn07XG5cbi8vIHB1YmxpY1xucHJvdG8ucG9pbnRlclVwID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLmVtaXRFdmVudCggJ3BvaW50ZXJVcCcsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xufTtcblxuLy8gLS0tLS0gcG9pbnRlciBkb25lIC0tLS0tIC8vXG5cbi8vIHRyaWdnZXJlZCBvbiBwb2ludGVyIHVwICYgcG9pbnRlciBjYW5jZWxcbnByb3RvLl9wb2ludGVyRG9uZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9wb2ludGVyUmVzZXQoKTtcbiAgdGhpcy5fdW5iaW5kUG9zdFN0YXJ0RXZlbnRzKCk7XG4gIHRoaXMucG9pbnRlckRvbmUoKTtcbn07XG5cbnByb3RvLl9wb2ludGVyUmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgLy8gcmVzZXQgcHJvcGVydGllc1xuICB0aGlzLmlzUG9pbnRlckRvd24gPSBmYWxzZTtcbiAgZGVsZXRlIHRoaXMucG9pbnRlcklkZW50aWZpZXI7XG59O1xuXG5wcm90by5wb2ludGVyRG9uZSA9IG5vb3A7XG5cbi8vIC0tLS0tIHBvaW50ZXIgY2FuY2VsIC0tLS0tIC8vXG5cbnByb3RvLm9ucG9pbnRlcmNhbmNlbCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgaWYgKCBldmVudC5wb2ludGVySWQgPT0gdGhpcy5wb2ludGVySWRlbnRpZmllciApIHtcbiAgICB0aGlzLl9wb2ludGVyQ2FuY2VsKCBldmVudCwgZXZlbnQgKTtcbiAgfVxufTtcblxucHJvdG8ub250b3VjaGNhbmNlbCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIHRvdWNoID0gdGhpcy5nZXRUb3VjaCggZXZlbnQuY2hhbmdlZFRvdWNoZXMgKTtcbiAgaWYgKCB0b3VjaCApIHtcbiAgICB0aGlzLl9wb2ludGVyQ2FuY2VsKCBldmVudCwgdG91Y2ggKTtcbiAgfVxufTtcblxuLyoqXG4gKiBwb2ludGVyIGNhbmNlbFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnQgb3IgVG91Y2h9IHBvaW50ZXJcbiAqIEBwcml2YXRlXG4gKi9cbnByb3RvLl9wb2ludGVyQ2FuY2VsID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLl9wb2ludGVyRG9uZSgpO1xuICB0aGlzLnBvaW50ZXJDYW5jZWwoIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG4vLyBwdWJsaWNcbnByb3RvLnBvaW50ZXJDYW5jZWwgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlckNhbmNlbCcsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbi8vIHV0aWxpdHkgZnVuY3Rpb24gZm9yIGdldHRpbmcgeC95IGNvb3JkcyBmcm9tIGV2ZW50XG5Vbmlwb2ludGVyLmdldFBvaW50ZXJQb2ludCA9IGZ1bmN0aW9uKCBwb2ludGVyICkge1xuICByZXR1cm4ge1xuICAgIHg6IHBvaW50ZXIucGFnZVgsXG4gICAgeTogcG9pbnRlci5wYWdlWVxuICB9O1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiBVbmlwb2ludGVyO1xuXG59KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9