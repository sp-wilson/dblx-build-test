(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["YouTube"],{

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

/***/ "./themes/mcg/assets/src/js/main/video/types/YouTube.ts":
/*!**************************************************************!*\
  !*** ./themes/mcg/assets/src/js/main/video/types/YouTube.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./themes/mcg/assets/src/js/utils/index.ts");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Video */ "./themes/mcg/assets/src/js/main/video/Video.ts");


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
//# sourceMappingURL=YouTube.js.map