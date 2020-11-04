export function get(selector: string, node: Document | HTMLElement = document) {
    return node.querySelector(selector) as HTMLElement | null;
}

export function getAll(selector: string, node: Document | HTMLElement = document) {
    return Array.from(node.querySelectorAll(selector)) as HTMLElement[];
}
