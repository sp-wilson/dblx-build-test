(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carousel"],{

/***/ "./themes/mcg/assets/src/js/main/carousel/Carousel.ts":
/*!************************************************************!*\
  !*** ./themes/mcg/assets/src/js/main/carousel/Carousel.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./themes/mcg/assets/src/js/utils/index.ts");
/* harmony import */ var _Flickpity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Flickpity */ "./themes/mcg/assets/src/js/main/carousel/Flickpity.ts");

// @ts-nocheck



class Carousel {
  constructor(element) {
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "element", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "parent", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_videosUpdated", false);

    this.element = element;
    this.parent = element.parentElement;
    this.createCarousel();
    this.carouselArrows();
    this.carouselPager();
  }

  createCarousel() {
    const settings = this.element.getAttribute("data-settings") || "";
    this.carousel = new _Flickpity__WEBPACK_IMPORTED_MODULE_2__["default"](this.element, {
      autoPlay: settings.includes("autoPlay") ? 4000 : false,
      cellAlign: "left",
      pageDots: false,
      prevNextButtons: false,
      setGallerySize: settings.includes("setGallerySize"),
      adaptiveHeight: settings.includes("adaptiveHeight"),
      watchCSS: settings.includes("watchCss"),
      wrapAround: true,
      on: {
        ready: () => {
          this.element.classList.add("flickity-ready");
        },

        deactivate() {
          this.element.classList.remove("flickity-ready");
        }

      }
    });
  }

  carouselArrows() {
    const arrows = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getAll"])(".js-carousel-arrow", this.parent);
    if (arrows.length === 0) return;
    arrows.forEach(arrow => {
      const direction = arrow.getAttribute("data-direction");
      arrow.addEventListener("click", () => {
        direction === "next" ? this.carousel.next() : this.carousel.previous();
      });
    });
  }

  async carouselPager() {
    const pagerEl = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["get"])(".js-carousel-pager", this.parent);
    if (!pagerEl) return;
    const {
      default: Pager
    } = await __webpack_require__.e(/*! import() | carousel-pager */ "carousel-pager").then(__webpack_require__.bind(null, /*! ./Pager */ "./themes/mcg/assets/src/js/main/carousel/Pager.ts"));
    new Pager(pagerEl, this.carousel);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./themes/mcg/assets/src/js/main/carousel/Flickpity.ts":
/*!*************************************************************!*\
  !*** ./themes/mcg/assets/src/js/main/carousel/Flickpity.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_0__);
// @ts-nocheck

/**
 * This class extends Flickity prototype.
 */

const {
  resize
} = flickity__WEBPACK_IMPORTED_MODULE_0___default.a.prototype;

class Flickpity extends flickity__WEBPACK_IMPORTED_MODULE_0___default.a {
  /**
   * Here we extend flickity resize method that we remove `flickity-ready` class
   * before `resize` function is executed and adds it after. It allows Flickity to correctly
   * calculate height of each slide when we have set `height: 100%` on them.
   */
  resize() {
    if (this.isActive) {
      this.element.classList.remove("flickity-ready");
      resize.call(this);
      this.element.classList.add("flickity-ready");
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Flickpity);

/***/ })

}]);
//# sourceMappingURL=carousel.js.map