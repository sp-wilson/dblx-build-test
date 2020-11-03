/**
 * This file contains only ES2015 polyfills
 */

// Promise
import "core-js/es/promise";
// Custom Event
import "custom-event-polyfill";
// Symbol
import "core-js/es/symbol";
// String.prototype.includes
import "core-js/es/string/includes";
// Object.entries
import "core-js/es/object/entries";

// Nodelist.prototype.forEach
if (window.NodeList && !NodeList.prototype.forEach) {
    // @ts-ignore
    NodeList.prototype.forEach = Array.prototype.forEach;
}

// Element.prototype.matches
// Element.prototype.closest
// Element.prototype.remove
(function elementPolyfills(window) {
    const ElementPrototype = window.Element.prototype;

    if (typeof ElementPrototype.matches !== "function") {
        ElementPrototype.matches =
            // @ts-ignore
            ElementPrototype.msMatchesSelector ||
            // @ts-ignore
            ElementPrototype.mozMatchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            function matches(selector) {
                // @ts-ignore
                const element = this;
                const elements = (element.document || element.ownerDocument).querySelectorAll(
                    selector
                );
                let index = 0;

                while (elements[index] && elements[index] !== element) {
                    // eslint-disable-next-line no-plusplus
                    ++index;
                }

                return Boolean(elements[index]);
            };
    }

    if (typeof ElementPrototype.closest !== "function") {
        ElementPrototype.closest = function closest(selector) {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            let element = this;

            while (element && element.nodeType === 1) {
                if (element.matches(selector)) {
                    return element;
                }

                element = element.parentNode as Element;
            }

            return null;
        };
    }

    if (typeof ElementPrototype.remove !== "function") {
        Object.defineProperty(ElementPrototype, "remove", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function remove() {
                if (this.parentNode) this.parentNode.removeChild(this);
            },
        });
    }
})(window);
