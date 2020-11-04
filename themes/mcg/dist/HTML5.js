(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HTML5"],{

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

/***/ "./themes/mcg/src/js/main/video/Video.ts":
/*!***********************************************!*\
  !*** ./themes/mcg/src/js/main/video/Video.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./themes/mcg/src/js/utils/index.ts");
/* harmony import */ var _utils_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/observer */ "./themes/mcg/src/js/utils/observer.ts");




/**
 * This is video base class.
 */
class Video {
  constructor(element) {
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "element", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "container", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "id", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isPlaying", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isReady", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "queue", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "player", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "playPromise", void 0);

    this.element = element;
    this.container = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["get"])(".js-video-container", element);
    this.id = element.getAttribute("data-id") || "";
    this.isPlaying = false;
    this.isReady = false;
    this.queue = new Set();
    this.createPlayer();

    this._observeElement();

    element.dispatchEvent(new CustomEvent("videoloaded"));
  }

  play() {
    if (this.isPlaying) return;

    if (!this.isReady) {
      this.createPlayer();

      this._queueTask("play");

      return;
    }

    this.playPromise = Promise.resolve(this.playVideo());
  }

  async pause() {
    if (!this.isPlaying) return;

    if (!this.isReady || typeof this.playPromise === "undefined") {
      this._queueTask("pause");

      return;
    }

    await this.playPromise;
    this.pauseVideo();
    this.onStop();
  }

  onEnded() {
    this.onStop();
  }

  onPlay() {
    this.element.setAttribute("data-status", "loaded playing");
    this.isPlaying = true;
  }

  onStop() {
    this.element.setAttribute("data-status", "loaded paused");
    this.isPlaying = false;
  }

  watchResize(videoWidth, videoHeight) {
    const aspectRatio = videoHeight / videoWidth;

    const updateSize = () => {
      const containerWidth = this.element.clientWidth;
      this.container.style.width = `${containerWidth}px`;
      this.container.style.height = `${containerWidth * aspectRatio}px`;
    };

    updateSize();
    this.element.dispatchEvent(new CustomEvent("videosize"));
    window.dispatchEvent(new CustomEvent("resize"));
    window.addEventListener("resize", () => updateSize());
    this.player.element.setAttribute("tabindex", "-1");
  }

  flushQueue() {
    this.queue.forEach(command => this[command]());
    this.queue.clear();
  }

  _queueTask(command) {
    this.queue.add(command);
  }

  _observeElement() {
    Object(_utils_observer__WEBPACK_IMPORTED_MODULE_2__["observe"])(this.container, inView => {
      if (inView) {
        this.play();
      } else if (this.isReady) {
        this.pause();
      }
    }, {
      threshold: 0.25,
      rootMargin: "-50px"
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ "./themes/mcg/src/js/main/video/types/HTML5.ts":
/*!*****************************************************!*\
  !*** ./themes/mcg/src/js/main/video/types/HTML5.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Video */ "./themes/mcg/src/js/main/video/Video.ts");


/* eslint-disable camelcase */


class HTML5Video extends _Video__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "player", void 0);
  }

  createPlayer() {
    if (this.player) return;
    const {
      sources
    } = JSON.parse(this.container.getAttribute("data-sources"));
    this.container.innerHTML = `
            <video muted playsinline autoplay loop>
                ${sources.reduce((acc, curr) => {
      // eslint-disable-next-line no-param-reassign
      acc += `<source src="${curr.url}" type="${curr.mime_type}" width="${curr.width}" height="${curr.height}">`;
      return acc;
    }, "")}
            </video>
        `; // @ts-expect-error

    this.player = this.container.firstElementChild; // @ts-expect-error

    this.player.element = this.container.firstElementChild;
    this.player.addEventListener("canplay", () => this._onReady());
    this.player.addEventListener("ended", () => this.onEnded());
    this.player.addEventListener("play", () => this.onPlay());
    this.player.addEventListener("pause", () => this.pause());
  }

  playVideo() {
    this.player.play();
  }

  pauseVideo() {
    this.player.pause();
  }

  _onReady() {
    this.isReady = true;
    const {
      videoWidth,
      videoHeight
    } = this.player;
    this.watchResize(videoWidth, videoHeight);
    "requestIdleCallback" in window ? // @ts-ignore
    requestIdleCallback(() => this.flushQueue()) : this.flushQueue();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HTML5Video);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21jZy9zcmMvanMvbWFpbi92aWRlby9WaWRlby50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbWNnL3NyYy9qcy9tYWluL3ZpZGVvL3R5cGVzL0hUTUw1LnRzIl0sIm5hbWVzIjpbIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJWaWRlbyIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImNvbnRhaW5lciIsImdldCIsImlkIiwiZ2V0QXR0cmlidXRlIiwiaXNQbGF5aW5nIiwiaXNSZWFkeSIsInF1ZXVlIiwiU2V0IiwiY3JlYXRlUGxheWVyIiwiX29ic2VydmVFbGVtZW50IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwicGxheSIsIl9xdWV1ZVRhc2siLCJwbGF5UHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicGxheVZpZGVvIiwicGF1c2UiLCJwYXVzZVZpZGVvIiwib25TdG9wIiwib25FbmRlZCIsIm9uUGxheSIsInNldEF0dHJpYnV0ZSIsIndhdGNoUmVzaXplIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0IiwiYXNwZWN0UmF0aW8iLCJ1cGRhdGVTaXplIiwiY29udGFpbmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicGxheWVyIiwiZmx1c2hRdWV1ZSIsImZvckVhY2giLCJjb21tYW5kIiwiY2xlYXIiLCJhZGQiLCJvYnNlcnZlIiwiaW5WaWV3IiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsIkhUTUw1VmlkZW8iLCJzb3VyY2VzIiwiSlNPTiIsInBhcnNlIiwiaW5uZXJIVE1MIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInVybCIsIm1pbWVfdHlwZSIsImZpcnN0RWxlbWVudENoaWxkIiwiX29uUmVhZHkiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlLFNBQVNBLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQ0MsS0FBbkMsRUFBMEM7QUFDdkQsTUFBSUQsR0FBRyxJQUFJRCxHQUFYLEVBQWdCO0FBQ2RHLFVBQU0sQ0FBQ0MsY0FBUCxDQUFzQkosR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzlCQyxXQUFLLEVBQUVBLEtBRHVCO0FBRTlCRyxnQkFBVSxFQUFFLElBRmtCO0FBRzlCQyxrQkFBWSxFQUFFLElBSGdCO0FBSTlCQyxjQUFRLEVBQUU7QUFKb0IsS0FBaEM7QUFNRCxHQVBELE1BT087QUFDTFAsT0FBRyxDQUFDQyxHQUFELENBQUgsR0FBV0MsS0FBWDtBQUNEOztBQUVELFNBQU9GLEdBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JEO0FBQ0E7O0FBUUE7QUFDQTtBQUNBO0FBQ0EsTUFBZVEsS0FBZixDQUFxQjtBQVVqQkMsYUFBVyxDQUFDQyxPQUFELEVBQXVCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQzlCLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJDLGtEQUFHLENBQUMscUJBQUQsRUFBd0JGLE9BQXhCLENBQXBCO0FBQ0EsU0FBS0csRUFBTCxHQUFVSCxPQUFPLENBQUNJLFlBQVIsQ0FBcUIsU0FBckIsS0FBbUMsRUFBN0M7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQSxTQUFLQyxLQUFMLEdBQWEsSUFBSUMsR0FBSixFQUFiO0FBRUEsU0FBS0MsWUFBTDs7QUFFQSxTQUFLQyxlQUFMOztBQUNB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QUFTLEdBQUc7QUFDUixTQUFLbUIsTUFBTCxDQUFZeEIsSUFBWjtBQUNIOztBQUVETyxZQUFVLEdBQUc7QUFDVCxTQUFLaUIsTUFBTCxDQUFZbEIsS0FBWjtBQUNIOztBQUVEdUMsVUFBUSxHQUFHO0FBQ1AsU0FBS3BELE9BQUwsR0FBZSxJQUFmO0FBRUEsVUFBTTtBQUFFb0IsZ0JBQUY7QUFBY0M7QUFBZCxRQUE4QixLQUFLVSxNQUF6QztBQUNBLFNBQUtaLFdBQUwsQ0FBaUJDLFVBQWpCLEVBQTZCQyxXQUE3QjtBQUVBLDZCQUF5QlEsTUFBekIsR0FDTTtBQUNBd0IsdUJBQW1CLENBQUMsTUFBTSxLQUFLckIsVUFBTCxFQUFQLENBRnpCLEdBR00sS0FBS0EsVUFBTCxFQUhOO0FBSUg7O0FBaEQwQjs7QUFtRGhCUyx5RUFBZixFIiwiZmlsZSI6IkhUTUw1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSBcIkAvdXRpbHNcIjtcbmltcG9ydCB7IG9ic2VydmUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvb2JzZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgVmltZW9QbGF5ZXIgfSBmcm9tIFwiLi90eXBlcy9WaW1lb1wiO1xuaW1wb3J0IHR5cGUgeyBZdFBsYXllciB9IGZyb20gXCIuL3R5cGVzL1lvdVR1YmVcIjtcblxudHlwZSBWaWRlb1BsYXllciA9IFZpbWVvUGxheWVyIHwgWXRQbGF5ZXI7XG5cbnR5cGUgVGFzayA9IFwicGxheVwiIHwgXCJwYXVzZVwiO1xuXG4vKipcbiAqIFRoaXMgaXMgdmlkZW8gYmFzZSBjbGFzcy5cbiAqL1xuYWJzdHJhY3QgY2xhc3MgVmlkZW8ge1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gICAgaWQ6IHN0cmluZztcbiAgICBpc1BsYXlpbmc6IGJvb2xlYW47XG4gICAgaXNSZWFkeTogYm9vbGVhbjtcbiAgICBxdWV1ZTogU2V0PFRhc2s+O1xuICAgIGFic3RyYWN0IHBsYXllcjogVmlkZW9QbGF5ZXI7XG4gICAgcGxheVByb21pc2U/OiBQcm9taXNlPGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGdldChcIi5qcy12aWRlby1jb250YWluZXJcIiwgZWxlbWVudCkhO1xuICAgICAgICB0aGlzLmlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpIHx8IFwiXCI7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnF1ZXVlID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKCk7XG5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZUVsZW1lbnQoKTtcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInZpZGVvbG9hZGVkXCIpKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBjcmVhdGVQbGF5ZXIoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBwbGF5VmlkZW8oKTogdm9pZDtcbiAgICBhYnN0cmFjdCBwYXVzZVZpZGVvKCk6IHZvaWQ7XG5cbiAgICBwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKCk7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZVRhc2soXCJwbGF5XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh0aGlzLnBsYXlWaWRlbygpKTtcbiAgICB9XG5cbiAgICBhc3luYyBwYXVzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGxheWluZykgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeSB8fCB0eXBlb2YgdGhpcy5wbGF5UHJvbWlzZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5fcXVldWVUYXNrKFwicGF1c2VcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0aGlzLnBsYXlQcm9taXNlO1xuICAgICAgICB0aGlzLnBhdXNlVmlkZW8oKTtcbiAgICAgICAgdGhpcy5vblN0b3AoKTtcbiAgICB9XG5cbiAgICBvbkVuZGVkKCkge1xuICAgICAgICB0aGlzLm9uU3RvcCgpO1xuICAgIH1cblxuICAgIG9uUGxheSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdHVzXCIsIFwibG9hZGVkIHBsYXlpbmdcIik7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblN0b3AoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXR1c1wiLCBcImxvYWRlZCBwYXVzZWRcIik7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgd2F0Y2hSZXNpemUodmlkZW9XaWR0aDogbnVtYmVyLCB2aWRlb0hlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gdmlkZW9IZWlnaHQgLyB2aWRlb1dpZHRoO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZVNpemUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyIS5zdHlsZS53aWR0aCA9IGAke2NvbnRhaW5lcldpZHRofXB4YDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyIS5zdHlsZS5oZWlnaHQgPSBgJHtjb250YWluZXJXaWR0aCAqIGFzcGVjdFJhdGlvfXB4YDtcbiAgICAgICAgfTtcblxuICAgICAgICB1cGRhdGVTaXplKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInZpZGVvc2l6ZVwiKSk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInJlc2l6ZVwiKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHVwZGF0ZVNpemUoKSk7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIuZWxlbWVudCEuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICB9XG5cbiAgICBmbHVzaFF1ZXVlKCkge1xuICAgICAgICB0aGlzLnF1ZXVlLmZvckVhY2goKGNvbW1hbmQpID0+IHRoaXNbY29tbWFuZF0oKSk7XG4gICAgICAgIHRoaXMucXVldWUuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWV1ZVRhc2soY29tbWFuZDogVGFzaykge1xuICAgICAgICB0aGlzLnF1ZXVlLmFkZChjb21tYW5kKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vYnNlcnZlRWxlbWVudCgpIHtcbiAgICAgICAgb2JzZXJ2ZShcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgKGluVmlldykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpblZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUmVhZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLjI1LFxuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW46IFwiLTUwcHhcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgVmlkZW8gZnJvbSBcIi4uL1ZpZGVvXCI7XG5cbnR5cGUgU291cmNlID0ge1xuICAgIGZvcm1hdDogc3RyaW5nOyAvLyBcIm1wNFwiLFxuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIG1pbWVfdHlwZTogc3RyaW5nOyAvLyBcInZpZGVvL21wNFwiLFxuICAgIHVybDogc3RyaW5nO1xuICAgIHdpZHRoOiBudW1iZXI7XG59O1xuXG5jbGFzcyBIVE1MNVZpZGVvIGV4dGVuZHMgVmlkZW8ge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBwbGF5ZXIhOiBIVE1MVmlkZW9FbGVtZW50O1xuXG4gICAgY3JlYXRlUGxheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIpIHJldHVybjtcbiAgICAgICAgY29uc3QgeyBzb3VyY2VzIH06IHsgc291cmNlczogU291cmNlW10gfSA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNvdXJjZXNcIikhXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHZpZGVvIG11dGVkIHBsYXlzaW5saW5lIGF1dG9wbGF5IGxvb3A+XG4gICAgICAgICAgICAgICAgJHtzb3VyY2VzLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICAgICAgICBhY2MgKz0gYDxzb3VyY2Ugc3JjPVwiJHtjdXJyLnVybH1cIiB0eXBlPVwiJHtjdXJyLm1pbWVfdHlwZX1cIiB3aWR0aD1cIiR7Y3Vyci53aWR0aH1cIiBoZWlnaHQ9XCIke2N1cnIuaGVpZ2h0fVwiPmA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICAgICAgfSwgXCJcIil9XG4gICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICBgO1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5jb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgdGhpcy5wbGF5ZXIuZWxlbWVudCA9IHRoaXMuY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgICAgIHRoaXMucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5XCIsICgpID0+IHRoaXMuX29uUmVhZHkoKSk7XG4gICAgICAgIHRoaXMucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCAoKSA9PiB0aGlzLm9uRW5kZWQoKSk7XG4gICAgICAgIHRoaXMucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwbGF5XCIsICgpID0+IHRoaXMub25QbGF5KCkpO1xuICAgICAgICB0aGlzLnBsYXllci5hZGRFdmVudExpc3RlbmVyKFwicGF1c2VcIiwgKCkgPT4gdGhpcy5wYXVzZSgpKTtcbiAgICB9XG5cbiAgICBwbGF5VmlkZW8oKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnBsYXkoKTtcbiAgICB9XG5cbiAgICBwYXVzZVZpZGVvKCkge1xuICAgICAgICB0aGlzLnBsYXllci5wYXVzZSgpO1xuICAgIH1cblxuICAgIF9vblJlYWR5KCkge1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHsgdmlkZW9XaWR0aCwgdmlkZW9IZWlnaHQgfSA9IHRoaXMucGxheWVyO1xuICAgICAgICB0aGlzLndhdGNoUmVzaXplKHZpZGVvV2lkdGgsIHZpZGVvSGVpZ2h0KTtcblxuICAgICAgICBcInJlcXVlc3RJZGxlQ2FsbGJhY2tcIiBpbiB3aW5kb3dcbiAgICAgICAgICAgID8gLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMuZmx1c2hRdWV1ZSgpKVxuICAgICAgICAgICAgOiB0aGlzLmZsdXNoUXVldWUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhUTUw1VmlkZW87XG4iXSwic291cmNlUm9vdCI6IiJ9