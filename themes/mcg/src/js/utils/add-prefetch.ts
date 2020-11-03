/**
 * Add a <link rel={preload | preconnect} ...> to the head
 */

export function addPrefetch(kind: string, url: string, as?: string) {
    const linkElem = document.createElement("link");
    linkElem.rel = kind;
    linkElem.href = url;
    if (as) linkElem.as = as;
    linkElem.crossOrigin = "anonymous";
    document.head.appendChild(linkElem);
}
