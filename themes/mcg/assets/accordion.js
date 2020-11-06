(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accordion"],{

/***/ "./themes/mcg/assets/src/js/main/accordion/Accordion.ts":
/*!**************************************************************!*\
  !*** ./themes/mcg/assets/src/js/main/accordion/Accordion.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Accordion; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"./themes/mcg/assets/src/js/utils/index.ts\");\n\n\nclass Accordion {\n  constructor(element) {\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"element\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"triggers\", void 0);\n\n    this.element = element;\n    this.triggers = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getAll\"])(\".js-accordion-trigger\", this.element);\n    this.bindEvents();\n  }\n\n  bindEvents() {\n    let elActivePanel;\n    let elActiveTrigger = this.triggers.find(el => el.classList.contains(\"is-open\"));\n\n    if (elActiveTrigger) {\n      elActivePanel = elActiveTrigger.nextElementSibling;\n    }\n\n    this.triggers.forEach(trigger => {\n      const elPanel = trigger.nextElementSibling;\n      let savedHeight;\n      trigger.addEventListener(\"click\", event => {\n        const elTrigger = event.currentTarget;\n\n        if (elActiveTrigger && elActiveTrigger !== elTrigger) {\n          elActiveTrigger.classList.remove(\"is-open\");\n          elActivePanel.style.maxHeight = \"0px\";\n        }\n\n        if (!savedHeight) {\n          elPanel.style.maxHeight = \"none\";\n          savedHeight = elPanel.offsetHeight;\n          elPanel.style.maxHeight = \"0px\";\n        }\n\n        requestAnimationFrame(() => {\n          const isOpen = elTrigger.classList.toggle(\"is-open\");\n          elPanel.style.maxHeight = `${isOpen ? savedHeight : 0}px`;\n          elActivePanel = elPanel;\n          elActiveTrigger = elTrigger;\n        });\n      });\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./themes/mcg/assets/src/js/main/accordion/Accordion.ts?");

/***/ })

}]);