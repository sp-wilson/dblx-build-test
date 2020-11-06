(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["YouTube"],{

/***/ "./themes/mcg/assets/src/js/main/video/Video.ts":
/*!******************************************************!*\
  !*** ./themes/mcg/assets/src/js/main/video/Video.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"./themes/mcg/assets/src/js/utils/index.ts\");\n/* harmony import */ var _utils_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/observer */ \"./themes/mcg/assets/src/js/utils/observer.ts\");\n\n\n\n\n/**\n * This is video base class.\n */\nclass Video {\n  constructor(element) {\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"element\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"container\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"id\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"isPlaying\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"isReady\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"queue\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"player\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"playPromise\", void 0);\n\n    this.element = element;\n    this.container = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\".js-video-container\", element);\n    this.id = element.getAttribute(\"data-id\") || \"\";\n    this.isPlaying = false;\n    this.isReady = false;\n    this.queue = new Set();\n    this.createPlayer();\n\n    this._observeElement();\n\n    element.dispatchEvent(new CustomEvent(\"videoloaded\"));\n  }\n\n  play() {\n    if (this.isPlaying) return;\n\n    if (!this.isReady) {\n      this.createPlayer();\n\n      this._queueTask(\"play\");\n\n      return;\n    }\n\n    this.playPromise = Promise.resolve(this.playVideo());\n  }\n\n  async pause() {\n    if (!this.isPlaying) return;\n\n    if (!this.isReady || typeof this.playPromise === \"undefined\") {\n      this._queueTask(\"pause\");\n\n      return;\n    }\n\n    await this.playPromise;\n    this.pauseVideo();\n    this.onStop();\n  }\n\n  onEnded() {\n    this.onStop();\n  }\n\n  onPlay() {\n    this.element.setAttribute(\"data-status\", \"loaded playing\");\n    this.isPlaying = true;\n  }\n\n  onStop() {\n    this.element.setAttribute(\"data-status\", \"loaded paused\");\n    this.isPlaying = false;\n  }\n\n  watchResize(videoWidth, videoHeight) {\n    const aspectRatio = videoHeight / videoWidth;\n\n    const updateSize = () => {\n      const containerWidth = this.element.clientWidth;\n      this.container.style.width = `${containerWidth}px`;\n      this.container.style.height = `${containerWidth * aspectRatio}px`;\n    };\n\n    updateSize();\n    this.element.dispatchEvent(new CustomEvent(\"videosize\"));\n    window.dispatchEvent(new CustomEvent(\"resize\"));\n    window.addEventListener(\"resize\", () => updateSize());\n    this.player.element.setAttribute(\"tabindex\", \"-1\");\n  }\n\n  flushQueue() {\n    this.queue.forEach(command => this[command]());\n    this.queue.clear();\n  }\n\n  _queueTask(command) {\n    this.queue.add(command);\n  }\n\n  _observeElement() {\n    Object(_utils_observer__WEBPACK_IMPORTED_MODULE_2__[\"observe\"])(this.container, inView => {\n      if (inView) {\n        this.play();\n      } else if (this.isReady) {\n        this.pause();\n      }\n    }, {\n      threshold: 0.25,\n      rootMargin: \"-50px\"\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\n\n//# sourceURL=webpack:///./themes/mcg/assets/src/js/main/video/Video.ts?");

/***/ }),

/***/ "./themes/mcg/assets/src/js/main/video/types/YouTube.ts":
/*!**************************************************************!*\
  !*** ./themes/mcg/assets/src/js/main/video/types/YouTube.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"./themes/mcg/assets/src/js/utils/index.ts\");\n/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Video */ \"./themes/mcg/assets/src/js/main/video/Video.ts\");\n\n\n // https://developers.google.com/youtube/player_parameters#release_notes_08_23_2018\n\nclass YTVideo extends _Video__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(...args) {\n    super(...args);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"player\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"stateChange\", {\n      /**\n       * -1 - Unstarted\n       *  0 - Ended\n       *  1 - Playing\n       *  2 = Paused\n       *  3 - Buffering\n       *  5 - Cued\n       */\n      0: () => this.onEnded(),\n      1: () => this.onPlay(),\n      2: () => this.pause()\n    });\n  }\n\n  createPlayer() {\n    if (this.player) return;\n\n    YTVideo._warmConnections();\n\n    const {\n      Player: YoutubePlayer\n    } = window.YT || {};\n\n    if (!YoutubePlayer) {\n      this._loadYT();\n\n      return;\n    }\n\n    this.container.innerHTML = \"<div></div>\";\n    this.player = new YoutubePlayer(this.container.firstElementChild, {\n      videoId: this.id,\n      playerVars: {\n        autoplay: 1,\n        controls: 0,\n        loop: 1,\n        modestbranding: 1,\n        playlist: this.id,\n        playsinline: 1,\n        rel: 0,\n        color: \"white\"\n      },\n      events: {\n        onReady: () => this._onReady(),\n        onStateChange: ({\n          data\n        }) => {\n          if (this.stateChange[data]) {\n            this.stateChange[data]();\n          }\n        }\n      }\n    });\n    this.player.element = this.player.getIframe();\n  }\n\n  playVideo() {\n    this.player.playVideo();\n  }\n\n  pauseVideo() {\n    this.player.pauseVideo();\n  }\n\n  _onReady() {\n    this.isReady = true;\n    this.player.mute();\n    const {\n      width,\n      height\n    } = this.player.element;\n    this.watchResize(+width, +height);\n    \"requestIdleCallback\" in window ? // @ts-ignore\n    requestIdleCallback(() => this.flushQueue()) : this.flushQueue();\n  }\n\n  _loadYT() {\n    const script = document.createElement(\"script\");\n    script.src = \"https://www.youtube.com/player_api\";\n    script.async = true;\n\n    window.onYouTubeIframeAPIReady = () => this.createPlayer();\n\n    document.body.appendChild(script);\n  }\n\n  static _warmConnections() {\n    if (YTVideo.preconnected) return; // The iframe document and most of its subresources come right off youtube.com\n\n    Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"addPrefetch\"])(\"preconnect\", \"https://www.youtube-nocookie.com\"); // The botguard script is fetched off from google.com\n\n    Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"addPrefetch\"])(\"preconnect\", \"https://www.google.com\"); // Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling.\n\n    Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"addPrefetch\"])(\"preconnect\", \"https://googleads.g.doubleclick.net\");\n    Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"addPrefetch\"])(\"preconnect\", \"https://static.doubleclick.net\");\n    YTVideo.preconnected = true;\n  }\n\n}\n\nObject(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(YTVideo, \"preconnected\", void 0);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (YTVideo);\n\n//# sourceURL=webpack:///./themes/mcg/assets/src/js/main/video/types/YouTube.ts?");

/***/ })

}]);