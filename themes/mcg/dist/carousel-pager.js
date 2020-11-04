(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carousel-pager"],{

/***/ "./themes/mcg/src/js/main/carousel/Pager.ts":
/*!**************************************************!*\
  !*** ./themes/mcg/src/js/main/carousel/Pager.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./themes/mcg/src/js/utils/index.ts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZXMvbWNnL3NyYy9qcy9tYWluL2Nhcm91c2VsL1BhZ2VyLnRzIl0sIm5hbWVzIjpbIlBhZ2VyIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJjYXJvdXNlbCIsInBhZ2VEb3RzIiwiZ2V0QWxsIiwiYWN0aXZlSXRlbSIsImZpbmQiLCJlbCIsImhhc0F0dHJpYnV0ZSIsImJpbmRDbGljayIsIm9uIiwic2xpZGVJbmRleCIsInVwZGF0ZUN1cnJlbnREb3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsImF0dGFjaEV2ZW50IiwiZ2V0QXR0cmlidXRlIiwic2VsZWN0IiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxLQUFOLENBQVk7QUFJUkMsYUFBVyxDQUFDQyxTQUFELEVBQXlCQyxRQUF6QixFQUF3QztBQUFBOztBQUFBOztBQUMvQyxTQUFLQyxRQUFMLEdBQWdCQyxxREFBTSxDQUFDLGNBQUQsRUFBaUJILFNBQWpCLENBQXRCO0FBQ0EsU0FBS0ksVUFBTCxHQUFrQixLQUFLRixRQUFMLENBQWNHLElBQWQsQ0FBb0JDLEVBQUQsSUFBUUEsRUFBRSxDQUFDQyxZQUFILENBQWdCLGNBQWhCLENBQTNCLENBQWxCO0FBRUEsU0FBS0MsU0FBTCxDQUFlUCxRQUFmO0FBQ0FBLFlBQVEsQ0FBQ1EsRUFBVCxDQUFZLFFBQVosRUFBdUJDLFVBQUQsSUFBd0IsS0FBS0MsZ0JBQUwsQ0FBc0JELFVBQXRCLENBQTlDO0FBQ0g7O0FBRURGLFdBQVMsQ0FBQ1AsUUFBRCxFQUFnQjtBQUNyQixTQUFLQyxRQUFMLENBQWNVLE9BQWQsQ0FBdUJDLE9BQUQsSUFBYTtBQUMvQkMsZ0VBQVcsQ0FBQyxPQUFELEVBQVVELE9BQVYsRUFBbUIsTUFBTTtBQUNoQyxZQUFJQSxPQUFPLEtBQUssS0FBS1QsVUFBckIsRUFBaUM7QUFDakMsY0FBTU0sVUFBVSxHQUFHRyxPQUFPLENBQUNFLFlBQVIsQ0FBcUIsWUFBckIsQ0FBbkI7QUFDQWQsZ0JBQVEsQ0FBQ2UsTUFBVCxDQUFnQk4sVUFBaEI7QUFDSCxPQUpVLENBQVg7QUFLSCxLQU5EO0FBT0g7O0FBRURDLGtCQUFnQixDQUFDRCxVQUFELEVBQXFCO0FBQ2pDLFNBQUtOLFVBQUwsQ0FBZ0JhLGVBQWhCLENBQWdDLGNBQWhDO0FBQ0EsU0FBS2IsVUFBTCxHQUFrQixLQUFLRixRQUFMLENBQWNRLFVBQWQsQ0FBbEI7QUFDQSxTQUFLTixVQUFMLENBQWdCYyxZQUFoQixDQUE2QixjQUE3QixFQUE2QyxNQUE3QztBQUNIOztBQTFCTzs7QUE2QkdwQixvRUFBZixFIiwiZmlsZSI6ImNhcm91c2VsLXBhZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cDovL2pvbmd1bmQuZ2l0aHViLmlvL2FyaWEtZXhhbXBsZXMvYm9vdHN0cmFwLWNhcm91c2VsL2Nhcm91c2VsLTMuaHRtbFxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1dBSS90dXRvcmlhbHMvY2Fyb3VzZWxzL2Z1bmN0aW9uYWxpdHkvXG5cbmltcG9ydCB7IGdldEFsbCwgYXR0YWNoRXZlbnQgfSBmcm9tIFwiQC91dGlsc1wiO1xuXG5jbGFzcyBQYWdlciB7XG4gICAgYWN0aXZlSXRlbTogSFRNTEVsZW1lbnQ7XG4gICAgcGFnZURvdHM6IEhUTUxFbGVtZW50W107XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBjYXJvdXNlbDogYW55KSB7XG4gICAgICAgIHRoaXMucGFnZURvdHMgPSBnZXRBbGwoXCJbZGF0YS1zbGlkZV1cIiwgY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5wYWdlRG90cy5maW5kKChlbCkgPT4gZWwuaGFzQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpKSE7XG5cbiAgICAgICAgdGhpcy5iaW5kQ2xpY2soY2Fyb3VzZWwpO1xuICAgICAgICBjYXJvdXNlbC5vbihcImNoYW5nZVwiLCAoc2xpZGVJbmRleDogbnVtYmVyKSA9PiB0aGlzLnVwZGF0ZUN1cnJlbnREb3Qoc2xpZGVJbmRleCkpO1xuICAgIH1cblxuICAgIGJpbmRDbGljayhjYXJvdXNlbDogYW55KSB7XG4gICAgICAgIHRoaXMucGFnZURvdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgYXR0YWNoRXZlbnQoXCJjbGlja1wiLCBlbGVtZW50LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuYWN0aXZlSXRlbSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsaWRlSW5kZXggPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVcIik7XG4gICAgICAgICAgICAgICAgY2Fyb3VzZWwuc2VsZWN0KHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUN1cnJlbnREb3Qoc2xpZGVJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIik7XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMucGFnZURvdHNbc2xpZGVJbmRleF07XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJzdGVwXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9