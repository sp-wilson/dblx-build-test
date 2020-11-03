import "./utils/public-path";
import "focus-visible";

import { throttle } from "@/utils";
import Accordion from "./main/accordion";
import Carousel from "./main/carousel";
import Lazyload from "./main/lazyload";
import Video from "./main/video";

const propClasses = [Accordion, Carousel, Lazyload, Video];

for (const PropClass of propClasses) {
    new PropClass();
}

(function () {
    const html = document.documentElement;

    window.addEventListener("resize", throttle(setCssProperties, 250));
    setCssProperties();

    function setCssProperties() {
        const htmlWidth = +html.getBoundingClientRect().width.toFixed(2);
        html.style.setProperty("--scrollbar-width", `${window.innerWidth - htmlWidth}`);
        html.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    }
})();
