(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Vimeo"],{

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

/***/ "./themes/mcg/src/js/main/video/types/Vimeo.ts":
/*!*****************************************************!*\
  !*** ./themes/mcg/src/js/main/video/types/Vimeo.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vimeo/player */ "./node_modules/@vimeo/player/dist/player.es.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ "./themes/mcg/src/js/utils/index.ts");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Video */ "./themes/mcg/src/js/main/video/Video.ts");





class VimeoVideo extends _Video__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "firstBuffer", true);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "player", void 0);
  }

  createPlayer() {
    if (this.player) return;

    VimeoVideo._warmConnections(); // Check if private video has two part id


    const url = this.container.getAttribute("data-url") || undefined;
    this.player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_1__["default"](this.container, {
      background: true,
      byline: false,
      color: "ffffff",
      id: +this.id,
      url,
      loop: true,
      muted: true,
      portrait: false,
      title: false
    });
    this.player.on("ended", () => this.onEnded());
    this.player.on("loaded", () => this._onReady());
    this.player.on("pause", () => this.pause());
    this.player.on("play", () => this.onPlay());
    if (_utils__WEBPACK_IMPORTED_MODULE_2__["device"].isIOS) this.player.on("bufferend", () => {
      if (this.firstBuffer) {
        this.firstBuffer = false;
        this.onPlay();
      }
    });
  }

  playVideo() {
    this.player.play();
  }

  pauseVideo() {
    this.player.pause();
  }

  async _onReady() {
    this.isReady = true;
    const [width, height] = await Promise.all([this.player.getVideoWidth(), this.player.getVideoHeight()]);
    this.watchResize(width, height);
    "requestIdleCallback" in window ? // @ts-ignore
    requestIdleCallback(() => this.flushQueue()) : this.flushQueue();
  }

  static _warmConnections() {
    if (VimeoVideo.preconnected) return; // The iframe document and most of its subresources come right off player.vimeo.com

    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addPrefetch"])("preconnect", "https://player.vimeo.com"); // Images

    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addPrefetch"])("preconnect", "https://i.vimeocdn.com"); // Files .js, .css

    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addPrefetch"])("preconnect", "https://f.vimeocdn.com"); // Metrics

    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addPrefetch"])("preconnect", "https://fresnel.vimeocdn.com");
    VimeoVideo.preconnected = true;
  }

}

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(VimeoVideo, "preconnected", void 0);

/* harmony default export */ __webpack_exports__["default"] = (VimeoVideo);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvbWNnL3NyYy9qcy9tYWluL3ZpZGVvL1ZpZGVvLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9tY2cvc3JjL2pzL21haW4vdmlkZW8vdHlwZXMvVmltZW8udHMiXSwibmFtZXMiOlsiVmlkZW8iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJjb250YWluZXIiLCJnZXQiLCJpZCIsImdldEF0dHJpYnV0ZSIsImlzUGxheWluZyIsImlzUmVhZHkiLCJxdWV1ZSIsIlNldCIsImNyZWF0ZVBsYXllciIsIl9vYnNlcnZlRWxlbWVudCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsInBsYXkiLCJfcXVldWVUYXNrIiwicGxheVByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInBsYXlWaWRlbyIsInBhdXNlIiwicGF1c2VWaWRlbyIsIm9uU3RvcCIsIm9uRW5kZWQiLCJvblBsYXkiLCJzZXRBdHRyaWJ1dGUiLCJ3YXRjaFJlc2l6ZSIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsImFzcGVjdFJhdGlvIiwidXBkYXRlU2l6ZSIsImNvbnRhaW5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXllciIsImZsdXNoUXVldWUiLCJmb3JFYWNoIiwiY29tbWFuZCIsImNsZWFyIiwiYWRkIiwib2JzZXJ2ZSIsImluVmlldyIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJWaW1lb1ZpZGVvIiwiX3dhcm1Db25uZWN0aW9ucyIsInVybCIsInVuZGVmaW5lZCIsIlBsYXllciIsImJhY2tncm91bmQiLCJieWxpbmUiLCJjb2xvciIsImxvb3AiLCJtdXRlZCIsInBvcnRyYWl0IiwidGl0bGUiLCJvbiIsIl9vblJlYWR5IiwiZGV2aWNlIiwiaXNJT1MiLCJmaXJzdEJ1ZmZlciIsImFsbCIsImdldFZpZGVvV2lkdGgiLCJnZXRWaWRlb0hl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eUJDLE1BQXpCLEdBQ007QUFDQWdDLHVCQUFtQixDQUFDLE1BQU0sS0FBSzdCLFVBQUwsRUFBUCxDQUZ6QixHQUdNLEtBQUtBLFVBQUwsRUFITjtBQUlIOztBQUVELFNBQWVVLGdCQUFmLEdBQWtDO0FBQzlCLFFBQUlELFVBQVUsQ0FBQ3FCLFlBQWYsRUFBNkIsT0FEQyxDQUc5Qjs7QUFDQUMsOERBQVcsQ0FBQyxZQUFELEVBQWUsMEJBQWYsQ0FBWCxDQUo4QixDQUs5Qjs7QUFDQUEsOERBQVcsQ0FBQyxZQUFELEVBQWUsd0JBQWYsQ0FBWCxDQU44QixDQU85Qjs7QUFDQUEsOERBQVcsQ0FBQyxZQUFELEVBQWUsd0JBQWYsQ0FBWCxDQVI4QixDQVM5Qjs7QUFDQUEsOERBQVcsQ0FBQyxZQUFELEVBQWUsOEJBQWYsQ0FBWDtBQUVBdEIsY0FBVSxDQUFDcUIsWUFBWCxHQUEwQixJQUExQjtBQUNIOztBQXpFMEI7OzBGQUF6QnJCLFU7O0FBNEVTQSx5RUFBZixFIiwiZmlsZSI6IlZpbWVvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0IH0gZnJvbSBcIkAvdXRpbHNcIjtcbmltcG9ydCB7IG9ic2VydmUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvb2JzZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgVmltZW9QbGF5ZXIgfSBmcm9tIFwiLi90eXBlcy9WaW1lb1wiO1xuaW1wb3J0IHR5cGUgeyBZdFBsYXllciB9IGZyb20gXCIuL3R5cGVzL1lvdVR1YmVcIjtcblxudHlwZSBWaWRlb1BsYXllciA9IFZpbWVvUGxheWVyIHwgWXRQbGF5ZXI7XG5cbnR5cGUgVGFzayA9IFwicGxheVwiIHwgXCJwYXVzZVwiO1xuXG4vKipcbiAqIFRoaXMgaXMgdmlkZW8gYmFzZSBjbGFzcy5cbiAqL1xuYWJzdHJhY3QgY2xhc3MgVmlkZW8ge1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gICAgaWQ6IHN0cmluZztcbiAgICBpc1BsYXlpbmc6IGJvb2xlYW47XG4gICAgaXNSZWFkeTogYm9vbGVhbjtcbiAgICBxdWV1ZTogU2V0PFRhc2s+O1xuICAgIGFic3RyYWN0IHBsYXllcjogVmlkZW9QbGF5ZXI7XG4gICAgcGxheVByb21pc2U/OiBQcm9taXNlPGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGdldChcIi5qcy12aWRlby1jb250YWluZXJcIiwgZWxlbWVudCkhO1xuICAgICAgICB0aGlzLmlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpIHx8IFwiXCI7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnF1ZXVlID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKCk7XG5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZUVsZW1lbnQoKTtcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInZpZGVvbG9hZGVkXCIpKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBjcmVhdGVQbGF5ZXIoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBwbGF5VmlkZW8oKTogdm9pZDtcbiAgICBhYnN0cmFjdCBwYXVzZVZpZGVvKCk6IHZvaWQ7XG5cbiAgICBwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKCk7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZVRhc2soXCJwbGF5XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh0aGlzLnBsYXlWaWRlbygpKTtcbiAgICB9XG5cbiAgICBhc3luYyBwYXVzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGxheWluZykgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeSB8fCB0eXBlb2YgdGhpcy5wbGF5UHJvbWlzZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5fcXVldWVUYXNrKFwicGF1c2VcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0aGlzLnBsYXlQcm9taXNlO1xuICAgICAgICB0aGlzLnBhdXNlVmlkZW8oKTtcbiAgICAgICAgdGhpcy5vblN0b3AoKTtcbiAgICB9XG5cbiAgICBvbkVuZGVkKCkge1xuICAgICAgICB0aGlzLm9uU3RvcCgpO1xuICAgIH1cblxuICAgIG9uUGxheSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdHVzXCIsIFwibG9hZGVkIHBsYXlpbmdcIik7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblN0b3AoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXR1c1wiLCBcImxvYWRlZCBwYXVzZWRcIik7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgd2F0Y2hSZXNpemUodmlkZW9XaWR0aDogbnVtYmVyLCB2aWRlb0hlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gdmlkZW9IZWlnaHQgLyB2aWRlb1dpZHRoO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZVNpemUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyIS5zdHlsZS53aWR0aCA9IGAke2NvbnRhaW5lcldpZHRofXB4YDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyIS5zdHlsZS5oZWlnaHQgPSBgJHtjb250YWluZXJXaWR0aCAqIGFzcGVjdFJhdGlvfXB4YDtcbiAgICAgICAgfTtcblxuICAgICAgICB1cGRhdGVTaXplKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInZpZGVvc2l6ZVwiKSk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInJlc2l6ZVwiKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHVwZGF0ZVNpemUoKSk7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIuZWxlbWVudCEuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICB9XG5cbiAgICBmbHVzaFF1ZXVlKCkge1xuICAgICAgICB0aGlzLnF1ZXVlLmZvckVhY2goKGNvbW1hbmQpID0+IHRoaXNbY29tbWFuZF0oKSk7XG4gICAgICAgIHRoaXMucXVldWUuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWV1ZVRhc2soY29tbWFuZDogVGFzaykge1xuICAgICAgICB0aGlzLnF1ZXVlLmFkZChjb21tYW5kKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vYnNlcnZlRWxlbWVudCgpIHtcbiAgICAgICAgb2JzZXJ2ZShcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgKGluVmlldykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpblZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUmVhZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLjI1LFxuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW46IFwiLTUwcHhcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiQHZpbWVvL3BsYXllclwiO1xuaW1wb3J0IHsgYWRkUHJlZmV0Y2gsIGRldmljZSB9IGZyb20gXCJAL3V0aWxzXCI7XG5pbXBvcnQgVmlkZW8gZnJvbSBcIi4uL1ZpZGVvXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmltZW9QbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGVsZW1lbnQ/OiBIVE1MSUZyYW1lRWxlbWVudDtcbn1cblxuY2xhc3MgVmltZW9WaWRlbyBleHRlbmRzIFZpZGVvIHtcbiAgICBmaXJzdEJ1ZmZlciA9IHRydWUgYXMgYm9vbGVhbjtcbiAgICBwbGF5ZXIhOiBWaW1lb1BsYXllcjtcbiAgICBzdGF0aWMgcHJlY29ubmVjdGVkPzogYm9vbGVhbjtcblxuICAgIGNyZWF0ZVBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSByZXR1cm47XG4gICAgICAgIFZpbWVvVmlkZW8uX3dhcm1Db25uZWN0aW9ucygpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHByaXZhdGUgdmlkZW8gaGFzIHR3byBwYXJ0IGlkXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuY29udGFpbmVyLmdldEF0dHJpYnV0ZShcImRhdGEtdXJsXCIpIHx8IHVuZGVmaW5lZDtcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jb250YWluZXIsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRydWUsXG4gICAgICAgICAgICBieWxpbmU6IGZhbHNlLFxuICAgICAgICAgICAgY29sb3I6IFwiZmZmZmZmXCIsXG4gICAgICAgICAgICBpZDogK3RoaXMuaWQsXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgbXV0ZWQ6IHRydWUsXG4gICAgICAgICAgICBwb3J0cmFpdDogZmFsc2UsXG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGxheWVyLm9uKFwiZW5kZWRcIiwgKCkgPT4gdGhpcy5vbkVuZGVkKCkpO1xuICAgICAgICB0aGlzLnBsYXllci5vbihcImxvYWRlZFwiLCAoKSA9PiB0aGlzLl9vblJlYWR5KCkpO1xuICAgICAgICB0aGlzLnBsYXllci5vbihcInBhdXNlXCIsICgpID0+IHRoaXMucGF1c2UoKSk7XG4gICAgICAgIHRoaXMucGxheWVyLm9uKFwicGxheVwiLCAoKSA9PiB0aGlzLm9uUGxheSgpKTtcbiAgICAgICAgaWYgKGRldmljZS5pc0lPUylcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm9uKFwiYnVmZmVyZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maXJzdEJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0QnVmZmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25QbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGxheVZpZGVvKCkge1xuICAgICAgICB0aGlzLnBsYXllci5wbGF5KCk7XG4gICAgfVxuXG4gICAgcGF1c2VWaWRlbygpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIucGF1c2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIF9vblJlYWR5KCkge1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmdldFZpZGVvV2lkdGgoKSxcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmdldFZpZGVvSGVpZ2h0KCksXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLndhdGNoUmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIFwicmVxdWVzdElkbGVDYWxsYmFja1wiIGluIHdpbmRvd1xuICAgICAgICAgICAgPyAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5mbHVzaFF1ZXVlKCkpXG4gICAgICAgICAgICA6IHRoaXMuZmx1c2hRdWV1ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF93YXJtQ29ubmVjdGlvbnMoKSB7XG4gICAgICAgIGlmIChWaW1lb1ZpZGVvLnByZWNvbm5lY3RlZCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIFRoZSBpZnJhbWUgZG9jdW1lbnQgYW5kIG1vc3Qgb2YgaXRzIHN1YnJlc291cmNlcyBjb21lIHJpZ2h0IG9mZiBwbGF5ZXIudmltZW8uY29tXG4gICAgICAgIGFkZFByZWZldGNoKFwicHJlY29ubmVjdFwiLCBcImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbVwiKTtcbiAgICAgICAgLy8gSW1hZ2VzXG4gICAgICAgIGFkZFByZWZldGNoKFwicHJlY29ubmVjdFwiLCBcImh0dHBzOi8vaS52aW1lb2Nkbi5jb21cIik7XG4gICAgICAgIC8vIEZpbGVzIC5qcywgLmNzc1xuICAgICAgICBhZGRQcmVmZXRjaChcInByZWNvbm5lY3RcIiwgXCJodHRwczovL2YudmltZW9jZG4uY29tXCIpO1xuICAgICAgICAvLyBNZXRyaWNzXG4gICAgICAgIGFkZFByZWZldGNoKFwicHJlY29ubmVjdFwiLCBcImh0dHBzOi8vZnJlc25lbC52aW1lb2Nkbi5jb21cIik7XG5cbiAgICAgICAgVmltZW9WaWRlby5wcmVjb25uZWN0ZWQgPSB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmltZW9WaWRlbztcbiJdLCJzb3VyY2VSb290IjoiIn0=