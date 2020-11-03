type ObserverInstanceCallback = (inView: boolean, intersection: IntersectionObserverEntry) => void;

type ObserverInstance = {
    inView: boolean;
    readonly callback: ObserverInstanceCallback;
    readonly element: Element;
    readonly observerId: string;
    readonly observer: IntersectionObserver;
    readonly thresholds: ReadonlyArray<number>;
};

const INSTANCE_MAP: Map<Element, ObserverInstance> = new Map();
const OBSERVER_MAP: Map<string, IntersectionObserver> = new Map();
const ROOT_IDS: Map<Element, string> = new Map();

let consecutiveRootId = 0;

/**
 * Generate a unique ID for the root element
 * @param root
 */
function getRootId(root?: Element | null) {
    if (!root) return "";
    if (ROOT_IDS.has(root)) return ROOT_IDS.get(root);
    consecutiveRootId += 1;
    ROOT_IDS.set(root, consecutiveRootId.toString());
    return `${ROOT_IDS.get(root)}_`;
}

/**
 * Monitor element, and trigger callback when element becomes inView
 * @param element {HTMLElement}
 * @param callback {Function} Called with inView
 * @param options {Object} InterSection observer options
 * @param options.threshold {Number} Number between 0 and 1, indicating how much of the element should be inView before triggering
 * @param options.root {HTMLElement}
 * @param options.rootMargin {String} The CSS margin to apply to the root element.
 *
 * @returns {ObserverInstance | undefined}
 */
export function observe(
    element: Element,
    callback: ObserverInstanceCallback,
    options: IntersectionObserverInit = {}
) {
    // IntersectionObserver needs a threshold to trigger, so set it to 0 if it's not defined.
    // Modify the options object, since it's used in the onChange handler.
    const { root, rootMargin, threshold = 0 } = options;

    // Bail early if element is undefined
    if (!element) return;

    // Create a unique ID for this observer instance, based on the root, root margin and threshold.
    // An observer with the same options can be reused, so lets use this fact
    const observerId: string =
        getRootId(root) +
        (rootMargin ? `${threshold.toString()}_${rootMargin}` : threshold.toString());

    let observerInstance = OBSERVER_MAP.get(observerId);
    if (!observerInstance) {
        observerInstance = new IntersectionObserver(onChange, options);
        if (observerId) OBSERVER_MAP.set(observerId, observerInstance);
    }

    const instance: ObserverInstance = {
        callback,
        element,
        inView: false,
        observerId,
        observer: observerInstance,
        // Make sure we have the thresholds value. It's undefined on a browser like Chrome 51.
        thresholds:
            observerInstance.thresholds || (Array.isArray(threshold) ? threshold : [threshold]),
    };

    INSTANCE_MAP.set(element, instance);
    observerInstance.observe(element);

    return instance;
}

/**
 * Stop observing an element. If an element is removed from the DOM or otherwise destroyed,
 * make sure to call this method.
 * @param element {Element}
 */
export function unobserve(element: Element | null) {
    if (!element) return;
    const instance = INSTANCE_MAP.get(element);

    if (instance) {
        const { observerId, observer } = instance;
        const { root } = observer;

        observer.unobserve(element);

        // Check if we are still observing any elements with the same threshold.
        let itemsLeft = false;
        // Check if we still have observers configured with the same root.
        let rootObserved = false;
        if (observerId) {
            INSTANCE_MAP.forEach((item, key) => {
                if (key !== element) {
                    if (item.observerId === observerId) {
                        itemsLeft = true;
                        rootObserved = true;
                    }
                    if (item.observer.root === root) {
                        rootObserved = true;
                    }
                }
            });
        }
        if (!rootObserved && root) ROOT_IDS.delete(root);
        if (observer && !itemsLeft) {
            // No more elements to observe for threshold, disconnect observer
            observer.disconnect();
        }

        // Remove reference to element
        INSTANCE_MAP.delete(element);
    }
}

/**
 * Destroy all IntersectionObservers currently connected
 * */
export function destroy() {
    OBSERVER_MAP.forEach((observer) => {
        observer.disconnect();
    });

    OBSERVER_MAP.clear();
    INSTANCE_MAP.clear();
    ROOT_IDS.clear();
    consecutiveRootId = 0;
}

function onChange(changes: IntersectionObserverEntry[]) {
    changes.forEach((intersection) => {
        const { isIntersecting, intersectionRatio, target } = intersection;
        const instance = INSTANCE_MAP.get(target);

        // Firefox can report a negative intersectionRatio when scrolling.
        if (instance && intersectionRatio >= 0) {
            // If threshold is an array, check if any of them intersects. This just triggers the onChange event multiple times.
            let inView = instance.thresholds.some((threshold) => {
                return instance.inView
                    ? intersectionRatio > threshold
                    : intersectionRatio >= threshold;
            });

            if (isIntersecting !== undefined) {
                // If isIntersecting is defined, ensure that the element is actually intersecting.
                // Otherwise it reports a threshold of 0
                inView = inView && isIntersecting;
            }

            instance.inView = inView;
            instance.callback(inView, intersection);
        }
    });
}

export default {
    observe,
    unobserve,
    destroy,
};
