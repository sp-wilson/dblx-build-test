(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accordion"],{

/***/ "./themes/mcg/assets/src/js/main/accordion/Accordion.ts":
/*!**************************************************************!*\
  !*** ./themes/mcg/assets/src/js/main/accordion/Accordion.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./themes/mcg/assets/src/js/utils/index.ts");


class Accordion {
  constructor(element) {
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "element", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "triggers", void 0);

    this.element = element;
    this.triggers = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getAll"])(".js-accordion-trigger", this.element);
    this.bindEvents();
  }

  bindEvents() {
    let elActivePanel;
    let elActiveTrigger = this.triggers.find(el => el.classList.contains("is-open"));

    if (elActiveTrigger) {
      elActivePanel = elActiveTrigger.nextElementSibling;
    }

    this.triggers.forEach(trigger => {
      const elPanel = trigger.nextElementSibling;
      let savedHeight;
      trigger.addEventListener("click", event => {
        const elTrigger = event.currentTarget;

        if (elActiveTrigger && elActiveTrigger !== elTrigger) {
          elActiveTrigger.classList.remove("is-open");
          elActivePanel.style.maxHeight = "0px";
        }

        if (!savedHeight) {
          elPanel.style.maxHeight = "none";
          savedHeight = elPanel.offsetHeight;
          elPanel.style.maxHeight = "0px";
        }

        requestAnimationFrame(() => {
          const isOpen = elTrigger.classList.toggle("is-open");
          elPanel.style.maxHeight = `${isOpen ? savedHeight : 0}px`;
          elActivePanel = elPanel;
          elActiveTrigger = elTrigger;
        });
      });
    });
  }

}

/***/ })

}]);
//# sourceMappingURL=accordion.js.map