const elHtml = document.documentElement;

let previousHtmlStyles = {};

export function lock() {
    const { style: htmlStyle } = elHtml;

    previousHtmlStyles = {
        overflow: htmlStyle.overflow,
    };

    Object.assign(elHtml.style, {
        overflow: "hidden",
    });
}

export function release() {
    Object.assign(elHtml.style, previousHtmlStyles);
}
