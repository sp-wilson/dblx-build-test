(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carousel-pager"],{

/***/ "./themes/mcg/assets/src/js/main/carousel/Pager.ts":
/*!*********************************************************!*\
  !*** ./themes/mcg/assets/src/js/main/carousel/Pager.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./themes/mcg/assets/src/js/utils/index.ts");

// http://jongund.github.io/aria-examples/bootstrap-carousel/carousel-3.html
// https://www.w3.org/WAI/tutorials/carousels/functionality/


class Pager {
  constructor(container, carousel) {
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "activeItem", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pageDots", void 0);

    this.pageDots = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getAll"])("[data-slide]", container);
    this.activeItem = this.pageDots.find(el => el.hasAttribute("aria-current"));
    this.bindClick(carousel);
    carousel.on("change", slideIndex => this.updateCurrentDot(slideIndex));
  }

  bindClick(carousel) {
    this.pageDots.forEach(element => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attachEvent"])("click", element, () => {
        if (element === this.activeItem) return;
        const slideIndex = element.getAttribute("data-slide");
        carousel.select(slideIndex);
      });
    });
  }

  updateCurrentDot(slideIndex) {
    this.activeItem.removeAttribute("aria-current");
    this.activeItem = this.pageDots[slideIndex];
    this.activeItem.setAttribute("aria-current", "step");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Pager);

/***/ })

}]);
//# sourceMappingURL=carousel-pager.js.map