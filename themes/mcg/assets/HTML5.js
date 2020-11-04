(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HTML5"],{

/***/ "./themes/mcg/assets/src/js/main/video/Video.ts":
/*!******************************************************!*\
  !*** ./themes/mcg/assets/src/js/main/video/Video.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./themes/mcg/assets/src/js/utils/index.ts");
/* harmony import */ var _utils_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/observer */ "./themes/mcg/assets/src/js/utils/observer.ts");




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

/***/ "./themes/mcg/assets/src/js/main/video/types/HTML5.ts":
/*!************************************************************!*\
  !*** ./themes/mcg/assets/src/js/main/video/types/HTML5.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Video */ "./themes/mcg/assets/src/js/main/video/Video.ts");


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
//# sourceMappingURL=HTML5.js.map