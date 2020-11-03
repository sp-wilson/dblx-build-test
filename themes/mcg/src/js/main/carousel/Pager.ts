// http://jongund.github.io/aria-examples/bootstrap-carousel/carousel-3.html
// https://www.w3.org/WAI/tutorials/carousels/functionality/

import { getAll, attachEvent } from "@/utils";

class Pager {
    activeItem: HTMLElement;
    pageDots: HTMLElement[];

    constructor(container: HTMLElement, carousel: any) {
        this.pageDots = getAll("[data-slide]", container);
        this.activeItem = this.pageDots.find((el) => el.hasAttribute("aria-current"))!;

        this.bindClick(carousel);
        carousel.on("change", (slideIndex: number) => this.updateCurrentDot(slideIndex));
    }

    bindClick(carousel: any) {
        this.pageDots.forEach((element) => {
            attachEvent("click", element, () => {
                if (element === this.activeItem) return;
                const slideIndex = element.getAttribute("data-slide");
                carousel.select(slideIndex);
            });
        });
    }

    updateCurrentDot(slideIndex: number) {
        this.activeItem.removeAttribute("aria-current");
        this.activeItem = this.pageDots[slideIndex];
        this.activeItem.setAttribute("aria-current", "step");
    }
}

export default Pager;
