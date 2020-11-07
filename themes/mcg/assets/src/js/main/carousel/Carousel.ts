// @ts-nocheck
import { get, getAll } from "@/utils";
import Flickpity from "./Flickpity";
import Pager from "./Pager";

class Carousel {
    element: HTMLElement;
    parent: HTMLElement;
    _videosUpdated = false as boolean;

    constructor(element) {
        this.element = element;
        this.parent = element.parentElement;

        this.createCarousel();
        this.carouselArrows();
        this.carouselPager();
    }

    createCarousel() {
        const settings = this.element.getAttribute("data-settings") || "";

        let slideAlign = "";
        switch (this.element.getAttribute("data-align")) { 
            case "center":
                slideAlign = "center";
                break;
            case "right":
                slideAlign = "right";
                break;
            default:
                slideAlign = "left";
        }

        this.carousel = new Flickpity(this.element, {
            autoPlay: settings.includes("autoPlay") ? 4000 : false,
            cellAlign: slideAlign,
            pageDots: false,
            prevNextButtons: false,
            setGallerySize: settings.includes("setGallerySize"),
            adaptiveHeight: settings.includes("adaptiveHeight"),
            watchCSS: settings.includes("watchCss"),
            wrapAround: settings.includes("noWrap") ? false : true ,
            on: {
                ready: () => {
                    this.element.classList.add("flickity-ready");
                },
                deactivate() {
                    this.element.classList.remove("flickity-ready");
                },
            },
        });


        console.log(this.carousel);
    }

    carouselArrows() {
        const arrows = getAll(".js-carousel-arrow", this.parent);
        if (arrows.length === 0) return;

        arrows.forEach((arrow) => {
            const direction = arrow.getAttribute("data-direction");
            arrow.addEventListener("click", () => {
                direction === "next" ? this.carousel.next() : this.carousel.previous();
            });
        });
    }

    async carouselPager() {
        const pagerEl = get(".js-carousel-pager", this.parent);
        if (!pagerEl) return;

        new Pager(pagerEl, this.carousel);
    }
}
export default Carousel;