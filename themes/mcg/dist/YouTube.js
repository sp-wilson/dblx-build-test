(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["YouTube"],{

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

/***/ "./themes/mcg/src/js/main/video/types/YouTube.ts":
/*!*******************************************************!*\
  !*** ./themes/mcg/src/js/main/video/types/YouTube.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./themes/mcg/src/js/utils/index.ts");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Video */ "./themes/mcg/src/js/main/video/Video.ts");


 // https://developers.google.com/youtube/player_parameters#release_notes_08_23_2018

class YTVideo extends _Video__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "player", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "stateChange", {
      /**
       * -1 - Unstarted
       *  0 - Ended
       *  1 - Playing
       *  2 = Paused
       *  3 - Buffering
       *  5 - Cued
       */
      0: () => this.onEnded(),
      1: () => this.onPlay(),
      2: () => this.pause()
    });
  }

  createPlayer() {
    if (this.player) return;

    YTVideo._warmConnections();

    const {
      Player: YoutubePlayer
    } = window.YT || {};

    if (!YoutubePlayer) {
      this._loadYT();

      return;
    }

    this.container.innerHTML = "<div></div>";
    this.player = new YoutubePlayer(this.container.firstElementChild, {
      videoId: this.id,
      playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        modestbranding: 1,
        playlist: this.id,
        playsinline: 1,
        rel: 0,
        color: "white"
      },
      events: {
        onReady: () => this._onReady(),
        onStateChange: ({
          data
        }) => {
          if (this.stateChange[data]) {
            this.stateChange[data]();
          }
        }
      }
    });
    this.player.element = this.player.getIframe();
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  _onReady() {
    this.isReady = true;
    this.player.mute();
    const {
      width,
      height
    } = this.player.element;
    this.watchResize(+width, +height);
    "requestIdleCallback" in window ? // @ts-ignore
    requestIdleCallback(() => this.flushQueue()) : this.flushQueue();
  }

  _loadYT() {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/player_api";
    script.async = true;

    window.onYouTubeIframeAPIReady = () => this.createPlayer();

    document.body.appendChild(script);
  }

  static _warmConnections() {
    if (YTVideo.preconnected) return; // The iframe document and most of its subresources come right off youtube.com

    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addPrefetch"])("preconnect", "https://www.youtube-nocookie.com"); // The botguard script is fetched off from google.com

    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addPrefetch"])("preconnect", "https://www.google.com"); // Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling.

    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addPrefetch"])("preconnect", "https://googleads.g.doubleclick.net");
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addPrefetch"])("preconnect", "https://static.doubleclick.net");
    YTVideo.preconnected = true;
  }

}

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(YTVideo, "preconnected", void 0);

/* harmony default export */ __webpack_exports__["default"] = (YTVideo);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21jZy9zcmMvanMvbWFpbi92aWRlby9WaWRlby50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbWNnL3NyYy9qcy9tYWluL3ZpZGVvL3R5cGVzL1lvdVR1YmUudHMiXSwibmFtZXMiOlsiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIlZpZGVvIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiY29udGFpbmVyIiwiZ2V0IiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJpc1BsYXlpbmciLCJpc1JlYWR5IiwicXVldWUiLCJTZXQiLCJjcmVhdGVQbGF5ZXIiLCJfb2JzZXJ2ZUVsZW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJwbGF5IiwiX3F1ZXVlVGFzayIsInBsYXlQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwbGF5VmlkZW8iLCJwYXVzZSIsInBhdXNlVmlkZW8iLCJvblN0b3AiLCJvbkVuZGVkIiwib25QbGF5Iiwic2V0QXR0cmlidXRlIiwid2F0Y2hSZXNpemUiLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJhc3BlY3RSYXRpbyIsInVwZGF0ZVNpemUiLCJjb250YWluZXJXaWR0aCIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5ZXIiLCJmbHVzaFF1ZXVlIiwiZm9yRWFjaCIsImNvbW1hbmQiLCJjbGVhciIsImFkZCIsIm9ic2VydmUiLCJpblZpZXciLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwiWVRWaWRlbyIsIl93YXJtQ29ubmVjdGlvbnMiLCJQbGF5ZXIiLCJZb3V0dWJlUGxheWVyIiwiWVQiLCJfbG9hZFlUIiwiaW5uZXJIVE1MIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ2aWRlb0lkIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwiY29udHJvbHMiLCJsb29wIiwibW9kZXN0YnJhbmRpbmciLCJwbGF5bGlzdCIsInBsYXlzaW5saW5lIiwicmVsIiwiY29sb3IiLCJldmVudHMiLCJvblJlYWR5IiwiX29uUmVhZHkiLCJvblN0YXRlQ2hhbmdlIiwiZGF0YSIsInN0YXRlQ2hhbmdlIiwiZ2V0SWZyYW1lIiwibXV0ZSIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsIm9uWW91VHViZUlmcmFtZUFQSVJlYWR5IiwiYm9keSIsImFwcGVuZENoaWxkIiwicHJlY29ubmVjdGVkIiwiYWRkUHJlZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWUsU0FBU0EsZUFBVCxDQUF5QkMsR0FBekIsRUFBOEJDLEdBQTlCLEVBQW1DQyxLQUFuQyxFQUEwQztBQUN2RCxNQUFJRCxHQUFHLElBQUlELEdBQVgsRUFBZ0I7QUFDZEcsVUFBTSxDQUFDQyxjQUFQLENBQXNCSixHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDOUJDLFdBQUssRUFBRUEsS0FEdUI7QUFFOUJHLGdCQUFVLEVBQUUsSUFGa0I7QUFHOUJDLGtCQUFZLEVBQUUsSUFIZ0I7QUFJOUJDLGNBQVEsRUFBRTtBQUpvQixLQUFoQztBQU1ELEdBUEQsTUFPTztBQUNMUCxPQUFHLENBQUNDLEdBQUQsQ0FBSCxHQUFXQyxLQUFYO0FBQ0Q7O0FBRUQsU0FBT0YsR0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7QUFDQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQSxNQUFlUSxLQUFmLENBQXFCO0FBVWpCQyxhQUFXLENBQUNDLE9BQUQsRUFBdUI7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7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ZjtBQUNBRixVQUFNLENBQUNHLEdBQVAsR0FBYSxvQ0FBYjtBQUNBSCxVQUFNLENBQUNJLEtBQVAsR0FBZSxJQUFmOztBQUNBM0MsVUFBTSxDQUFDNEMsdUJBQVAsR0FBaUMsTUFBTSxLQUFLdEUsWUFBTCxFQUF2Qzs7QUFDQWtFLFlBQVEsQ0FBQ0ssSUFBVCxDQUFjQyxXQUFkLENBQTBCUCxNQUExQjtBQUNIOztBQUVELFNBQWUxQixnQkFBZixHQUFrQztBQUM5QixRQUFJRCxPQUFPLENBQUNtQyxZQUFaLEVBQTBCLE9BREksQ0FHOUI7O0FBQ0FDLDhEQUFXLENBQUMsWUFBRCxFQUFlLGtDQUFmLENBQVgsQ0FKOEIsQ0FLOUI7O0FBQ0FBLDhEQUFXLENBQUMsWUFBRCxFQUFlLHdCQUFmLENBQVgsQ0FOOEIsQ0FROUI7O0FBQ0FBLDhEQUFXLENBQUMsWUFBRCxFQUFlLHFDQUFmLENBQVg7QUFDQUEsOERBQVcsQ0FBQyxZQUFELEVBQWUsZ0NBQWYsQ0FBWDtBQUVBcEMsV0FBTyxDQUFDbUMsWUFBUixHQUF1QixJQUF2QjtBQUNIOztBQS9GdUI7OzBGQUF0Qm5DLE87O0FBa0dTQSxzRUFBZixFIiwiZmlsZSI6IllvdVR1YmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgeyBnZXQgfSBmcm9tIFwiQC91dGlsc1wiO1xuaW1wb3J0IHsgb2JzZXJ2ZSB9IGZyb20gXCIuLi8uLi91dGlscy9vYnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBWaW1lb1BsYXllciB9IGZyb20gXCIuL3R5cGVzL1ZpbWVvXCI7XG5pbXBvcnQgdHlwZSB7IFl0UGxheWVyIH0gZnJvbSBcIi4vdHlwZXMvWW91VHViZVwiO1xuXG50eXBlIFZpZGVvUGxheWVyID0gVmltZW9QbGF5ZXIgfCBZdFBsYXllcjtcblxudHlwZSBUYXNrID0gXCJwbGF5XCIgfCBcInBhdXNlXCI7XG5cbi8qKlxuICogVGhpcyBpcyB2aWRlbyBiYXNlIGNsYXNzLlxuICovXG5hYnN0cmFjdCBjbGFzcyBWaWRlbyB7XG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBpZDogc3RyaW5nO1xuICAgIGlzUGxheWluZzogYm9vbGVhbjtcbiAgICBpc1JlYWR5OiBib29sZWFuO1xuICAgIHF1ZXVlOiBTZXQ8VGFzaz47XG4gICAgYWJzdHJhY3QgcGxheWVyOiBWaWRlb1BsYXllcjtcbiAgICBwbGF5UHJvbWlzZT86IFByb21pc2U8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZ2V0KFwiLmpzLXZpZGVvLWNvbnRhaW5lclwiLCBlbGVtZW50KSE7XG4gICAgICAgIHRoaXMuaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikgfHwgXCJcIjtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucXVldWUgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXIoKTtcblxuICAgICAgICB0aGlzLl9vYnNlcnZlRWxlbWVudCgpO1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidmlkZW9sb2FkZWRcIikpO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGNyZWF0ZVBsYXllcigpOiB2b2lkO1xuICAgIGFic3RyYWN0IHBsYXlWaWRlbygpOiB2b2lkO1xuICAgIGFic3RyYWN0IHBhdXNlVmlkZW8oKTogdm9pZDtcblxuICAgIHBsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUGxheWluZykgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX3F1ZXVlVGFzayhcInBsYXlcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsYXlQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMucGxheVZpZGVvKCkpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhdXNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNQbGF5aW5nKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5IHx8IHR5cGVvZiB0aGlzLnBsYXlQcm9taXNlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZVRhc2soXCJwYXVzZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMucGxheVByb21pc2U7XG4gICAgICAgIHRoaXMucGF1c2VWaWRlbygpO1xuICAgICAgICB0aGlzLm9uU3RvcCgpO1xuICAgIH1cblxuICAgIG9uRW5kZWQoKSB7XG4gICAgICAgIHRoaXMub25TdG9wKCk7XG4gICAgfVxuXG4gICAgb25QbGF5KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0dXNcIiwgXCJsb2FkZWQgcGxheWluZ1wiKTtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uU3RvcCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdHVzXCIsIFwibG9hZGVkIHBhdXNlZFwiKTtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB3YXRjaFJlc2l6ZSh2aWRlb1dpZHRoOiBudW1iZXIsIHZpZGVvSGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSB2aWRlb0hlaWdodCAvIHZpZGVvV2lkdGg7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlU2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIhLnN0eWxlLndpZHRoID0gYCR7Y29udGFpbmVyV2lkdGh9cHhgO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIhLnN0eWxlLmhlaWdodCA9IGAke2NvbnRhaW5lcldpZHRoICogYXNwZWN0UmF0aW99cHhgO1xuICAgICAgICB9O1xuXG4gICAgICAgIHVwZGF0ZVNpemUoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidmlkZW9zaXplXCIpKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicmVzaXplXCIpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gdXBkYXRlU2l6ZSgpKTtcblxuICAgICAgICB0aGlzLnBsYXllci5lbGVtZW50IS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgIH1cblxuICAgIGZsdXNoUXVldWUoKSB7XG4gICAgICAgIHRoaXMucXVldWUuZm9yRWFjaCgoY29tbWFuZCkgPT4gdGhpc1tjb21tYW5kXSgpKTtcbiAgICAgICAgdGhpcy5xdWV1ZS5jbGVhcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3F1ZXVlVGFzayhjb21tYW5kOiBUYXNrKSB7XG4gICAgICAgIHRoaXMucXVldWUuYWRkKGNvbW1hbmQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29ic2VydmVFbGVtZW50KCkge1xuICAgICAgICBvYnNlcnZlKFxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgICAoaW5WaWV3KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluVmlldykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNSZWFkeSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMjUsXG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpbjogXCItNTBweFwiLFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XG4iLCJpbXBvcnQgeyBhZGRQcmVmZXRjaCB9IGZyb20gXCJAL3V0aWxzXCI7XG5pbXBvcnQgVmlkZW8gZnJvbSBcIi4uL1ZpZGVvXCI7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnMjcmVsZWFzZV9ub3Rlc18wOF8yM18yMDE4XG5cbmV4cG9ydCBpbnRlcmZhY2UgWXRQbGF5ZXIgZXh0ZW5kcyBZVC5QbGF5ZXIge1xuICAgIGVsZW1lbnQ/OiBIVE1MSUZyYW1lRWxlbWVudDtcbn1cblxudHlwZSBTdGF0ZUNoYW5nZU1hcCA9IFJlY29yZDxudW1iZXIsICgpID0+IHZvaWQ+O1xuXG5jbGFzcyBZVFZpZGVvIGV4dGVuZHMgVmlkZW8ge1xuICAgIHBsYXllciE6IFl0UGxheWVyO1xuICAgIHN0YXRpYyBwcmVjb25uZWN0ZWQ/OiBib29sZWFuO1xuICAgIHN0YXRlQ2hhbmdlOiBTdGF0ZUNoYW5nZU1hcCA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIC0xIC0gVW5zdGFydGVkXG4gICAgICAgICAqICAwIC0gRW5kZWRcbiAgICAgICAgICogIDEgLSBQbGF5aW5nXG4gICAgICAgICAqICAyID0gUGF1c2VkXG4gICAgICAgICAqICAzIC0gQnVmZmVyaW5nXG4gICAgICAgICAqICA1IC0gQ3VlZFxuICAgICAgICAgKi9cbiAgICAgICAgMDogKCkgPT4gdGhpcy5vbkVuZGVkKCksXG4gICAgICAgIDE6ICgpID0+IHRoaXMub25QbGF5KCksXG4gICAgICAgIDI6ICgpID0+IHRoaXMucGF1c2UoKSxcbiAgICB9O1xuXG4gICAgY3JlYXRlUGxheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIpIHJldHVybjtcbiAgICAgICAgWVRWaWRlby5fd2FybUNvbm5lY3Rpb25zKCk7XG5cbiAgICAgICAgY29uc3QgeyBQbGF5ZXI6IFlvdXR1YmVQbGF5ZXIgfSA9IHdpbmRvdy5ZVCB8fCB7fTtcbiAgICAgICAgaWYgKCFZb3V0dWJlUGxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkWVQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IFwiPGRpdj48L2Rpdj5cIjtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgWW91dHViZVBsYXllcih0aGlzLmNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCBhcyBIVE1MRWxlbWVudCwge1xuICAgICAgICAgICAgdmlkZW9JZDogdGhpcy5pZCxcbiAgICAgICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogMSxcbiAgICAgICAgICAgICAgICBjb250cm9sczogMCxcbiAgICAgICAgICAgICAgICBsb29wOiAxLFxuICAgICAgICAgICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxuICAgICAgICAgICAgICAgIHBsYXlsaXN0OiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgIHBsYXlzaW5saW5lOiAxLFxuICAgICAgICAgICAgICAgIHJlbDogMCxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgIG9uUmVhZHk6ICgpID0+IHRoaXMuX29uUmVhZHkoKSxcbiAgICAgICAgICAgICAgICBvblN0YXRlQ2hhbmdlOiAoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVDaGFuZ2VbZGF0YV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VbZGF0YV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBsYXllci5lbGVtZW50ID0gdGhpcy5wbGF5ZXIuZ2V0SWZyYW1lKCk7XG4gICAgfVxuXG4gICAgcGxheVZpZGVvKCkge1xuICAgICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcbiAgICB9XG5cbiAgICBwYXVzZVZpZGVvKCkge1xuICAgICAgICB0aGlzLnBsYXllci5wYXVzZVZpZGVvKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wbGF5ZXIubXV0ZSgpO1xuXG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5wbGF5ZXIuZWxlbWVudCE7XG4gICAgICAgIHRoaXMud2F0Y2hSZXNpemUoK3dpZHRoLCAraGVpZ2h0KTtcblxuICAgICAgICBcInJlcXVlc3RJZGxlQ2FsbGJhY2tcIiBpbiB3aW5kb3dcbiAgICAgICAgICAgID8gLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMuZmx1c2hRdWV1ZSgpKVxuICAgICAgICAgICAgOiB0aGlzLmZsdXNoUXVldWUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2FkWVQoKSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BsYXllcl9hcGlcIjtcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gKCkgPT4gdGhpcy5jcmVhdGVQbGF5ZXIoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF93YXJtQ29ubmVjdGlvbnMoKSB7XG4gICAgICAgIGlmIChZVFZpZGVvLnByZWNvbm5lY3RlZCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIFRoZSBpZnJhbWUgZG9jdW1lbnQgYW5kIG1vc3Qgb2YgaXRzIHN1YnJlc291cmNlcyBjb21lIHJpZ2h0IG9mZiB5b3V0dWJlLmNvbVxuICAgICAgICBhZGRQcmVmZXRjaChcInByZWNvbm5lY3RcIiwgXCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbVwiKTtcbiAgICAgICAgLy8gVGhlIGJvdGd1YXJkIHNjcmlwdCBpcyBmZXRjaGVkIG9mZiBmcm9tIGdvb2dsZS5jb21cbiAgICAgICAgYWRkUHJlZmV0Y2goXCJwcmVjb25uZWN0XCIsIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbVwiKTtcblxuICAgICAgICAvLyBOb3QgY2VydGFpbiBpZiB0aGVzZSBhZCByZWxhdGVkIGRvbWFpbnMgYXJlIGluIHRoZSBjcml0aWNhbCBwYXRoLiBDb3VsZCB2ZXJpZnkgd2l0aCBkb21haW4tc3BlY2lmaWMgdGhyb3R0bGluZy5cbiAgICAgICAgYWRkUHJlZmV0Y2goXCJwcmVjb25uZWN0XCIsIFwiaHR0cHM6Ly9nb29nbGVhZHMuZy5kb3VibGVjbGljay5uZXRcIik7XG4gICAgICAgIGFkZFByZWZldGNoKFwicHJlY29ubmVjdFwiLCBcImh0dHBzOi8vc3RhdGljLmRvdWJsZWNsaWNrLm5ldFwiKTtcblxuICAgICAgICBZVFZpZGVvLnByZWNvbm5lY3RlZCA9IHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBZVFZpZGVvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==