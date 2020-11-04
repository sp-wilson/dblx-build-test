import "focus-visible";

import { throttle } from "@/utils";
import Accordion from "./main/accordion";
import Carousel from "./main/carousel";
import Lazyload from "./main/lazyload";
import Navigation from "./main/navigation";
import Video from "./main/video";

const classes = [Accordion, Carousel, Lazyload, Navigation, Video];

for (const Class of classes) {
    new Class();
}

