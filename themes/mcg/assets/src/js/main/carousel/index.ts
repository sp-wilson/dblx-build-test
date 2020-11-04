import { getAll } from "@/utils";
import Carousel from "./Carousel"

class CarouselController {
    constructor() {
        const elements = getAll(".js-carousel");
        if (elements.length === 0) return;
        if (elements.length === 1 && elements[0].childElementCount === 1) return;

        this._createInstances(elements);
    }

    async _createInstances(elements) {
        for (const element of elements) {
            if (element.childElementCount > 1) {
                new Carousel(element);
            }
        }
    }
}
export default CarouselController;
