export function attachEvent(
    event: keyof WindowEventMap,
    node: Window | Document | HTMLElement = window,
    callback: (event: Event) => void
) {
    node.addEventListener(event, callback);
    return () => node.removeEventListener(event, callback);
}
