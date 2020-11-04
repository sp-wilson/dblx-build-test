(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accordion"],{

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

/***/ "./themes/mcg/src/js/main/accordion/Accordion.ts":
/*!*******************************************************!*\
  !*** ./themes/mcg/src/js/main/accordion/Accordion.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./themes/mcg/src/js/utils/index.ts");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21jZy9zcmMvanMvbWFpbi9hY2NvcmRpb24vQWNjb3JkaW9uLnRzIl0sIm5hbWVzIjpbIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJBY2NvcmRpb24iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJ0cmlnZ2VycyIsImdldEFsbCIsImJpbmRFdmVudHMiLCJlbEFjdGl2ZVBhbmVsIiwiZWxBY3RpdmVUcmlnZ2VyIiwiZmluZCIsImVsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmb3JFYWNoIiwidHJpZ2dlciIsImVsUGFuZWwiLCJzYXZlZEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImVsVHJpZ2dlciIsImN1cnJlbnRUYXJnZXQiLCJyZW1vdmUiLCJzdHlsZSIsIm1heEhlaWdodCIsIm9mZnNldEhlaWdodCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlzT3BlbiIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZSxTQUFTQSxlQUFULENBQXlCQyxHQUF6QixFQUE4QkMsR0FBOUIsRUFBbUNDLEtBQW5DLEVBQTBDO0FBQ3ZELE1BQUlELEdBQUcsSUFBSUQsR0FBWCxFQUFnQjtBQUNkRyxVQUFNLENBQUNDLGNBQVAsQ0FBc0JKLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM5QkMsV0FBSyxFQUFFQSxLQUR1QjtBQUU5QkcsZ0JBQVUsRUFBRSxJQUZrQjtBQUc5QkMsa0JBQVksRUFBRSxJQUhnQjtBQUk5QkMsY0FBUSxFQUFFO0FBSm9CLEtBQWhDO0FBTUQsR0FQRCxNQU9PO0FBQ0xQLE9BQUcsQ0FBQ0MsR0FBRCxDQUFILEdBQVdDLEtBQVg7QUFDRDs7QUFFRCxTQUFPRixHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUVlLE1BQU1RLFNBQU4sQ0FBZ0I7QUFJM0JDLGFBQVcsQ0FBQ0MsT0FBRCxFQUF1QjtBQUFBOztBQUFBOztBQUM5QixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQyxxREFBTSxDQUFDLHVCQUFELEVBQTBCLEtBQUtGLE9BQS9CLENBQXRCO0FBRUEsU0FBS0csVUFBTDtBQUNIOztBQUVEQSxZQUFVLEdBQUc7QUFDVCxRQUFJQyxhQUFKO0FBQ0EsUUFBSUMsZUFBZSxHQUFHLEtBQUtKLFFBQUwsQ0FBY0ssSUFBZCxDQUFvQkMsRUFBRCxJQUFRQSxFQUFFLENBQUNDLFNBQUgsQ0FBYUMsUUFBYixDQUFzQixTQUF0QixDQUEzQixDQUF0Qjs7QUFFQSxRQUFJSixlQUFKLEVBQXFCO0FBQ2pCRCxtQkFBYSxHQUFHQyxlQUFlLENBQUNLLGtCQUFoQztBQUNIOztBQUVELFNBQUtULFFBQUwsQ0FBY1UsT0FBZCxDQUF1QkMsT0FBRCxJQUFhO0FBQy9CLFlBQU1DLE9BQU8sR0FBR0QsT0FBTyxDQUFDRixrQkFBeEI7QUFDQSxVQUFJSSxXQUFKO0FBRUFGLGFBQU8sQ0FBQ0csZ0JBQVIsQ0FBeUIsT0FBekIsRUFBbUNDLEtBQUQsSUFBVztBQUN6QyxjQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsYUFBeEI7O0FBQ0EsWUFBSWIsZUFBZSxJQUFJQSxlQUFlLEtBQUtZLFNBQTNDLEVBQXNEO0FBQ2xEWix5QkFBZSxDQUFDRyxTQUFoQixDQUEwQlcsTUFBMUIsQ0FBaUMsU0FBakM7QUFDQWYsdUJBQWEsQ0FBQ2dCLEtBQWQsQ0FBb0JDLFNBQXBCLEdBQWdDLEtBQWhDO0FBQ0g7O0FBRUQsWUFBSSxDQUFDUCxXQUFMLEVBQWtCO0FBQ2RELGlCQUFPLENBQUNPLEtBQVIsQ0FBY0MsU0FBZCxHQUEwQixNQUExQjtBQUNBUCxxQkFBVyxHQUFHRCxPQUFPLENBQUNTLFlBQXRCO0FBQ0FULGlCQUFPLENBQUNPLEtBQVIsQ0FBY0MsU0FBZCxHQUEwQixLQUExQjtBQUNIOztBQUVERSw2QkFBcUIsQ0FBQyxNQUFNO0FBQ3hCLGdCQUFNQyxNQUFNLEdBQUdQLFNBQVMsQ0FBQ1QsU0FBVixDQUFvQmlCLE1BQXBCLENBQTJCLFNBQTNCLENBQWY7QUFDQVosaUJBQU8sQ0FBQ08sS0FBUixDQUFjQyxTQUFkLEdBQTJCLEdBQUVHLE1BQU0sR0FBR1YsV0FBSCxHQUFpQixDQUFFLElBQXREO0FBQ0FWLHVCQUFhLEdBQUdTLE9BQWhCO0FBQ0FSLHlCQUFlLEdBQUdZLFNBQWxCO0FBQ0gsU0FMb0IsQ0FBckI7QUFNSCxPQW5CRDtBQW9CSCxLQXhCRDtBQXlCSDs7QUE1QzBCLEMiLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IHsgZ2V0QWxsIH0gZnJvbSBcIkAvdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIHtcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICB0cmlnZ2VyczogSFRNTEVsZW1lbnRbXTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMgPSBnZXRBbGwoXCIuanMtYWNjb3JkaW9uLXRyaWdnZXJcIiwgdGhpcy5lbGVtZW50KTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICBsZXQgZWxBY3RpdmVQYW5lbDogSFRNTEVsZW1lbnQ7XG4gICAgICAgIGxldCBlbEFjdGl2ZVRyaWdnZXIgPSB0aGlzLnRyaWdnZXJzLmZpbmQoKGVsKSA9PiBlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1vcGVuXCIpKTtcblxuICAgICAgICBpZiAoZWxBY3RpdmVUcmlnZ2VyKSB7XG4gICAgICAgICAgICBlbEFjdGl2ZVBhbmVsID0gZWxBY3RpdmVUcmlnZ2VyLm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxQYW5lbCA9IHRyaWdnZXIubmV4dEVsZW1lbnRTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgbGV0IHNhdmVkSGVpZ2h0OiBudW1iZXI7XG5cbiAgICAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsVHJpZ2dlciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGVsQWN0aXZlVHJpZ2dlciAmJiBlbEFjdGl2ZVRyaWdnZXIgIT09IGVsVHJpZ2dlcikge1xuICAgICAgICAgICAgICAgICAgICBlbEFjdGl2ZVRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGVsQWN0aXZlUGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gXCIwcHhcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNhdmVkSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsUGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIHNhdmVkSGVpZ2h0ID0gZWxQYW5lbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGVsUGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gXCIwcHhcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc09wZW4gPSBlbFRyaWdnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImlzLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGVsUGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gYCR7aXNPcGVuID8gc2F2ZWRIZWlnaHQgOiAwfXB4YDtcbiAgICAgICAgICAgICAgICAgICAgZWxBY3RpdmVQYW5lbCA9IGVsUGFuZWw7XG4gICAgICAgICAgICAgICAgICAgIGVsQWN0aXZlVHJpZ2dlciA9IGVsVHJpZ2dlcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9