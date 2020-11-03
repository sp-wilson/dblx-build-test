// @ts-nocheck
import { get, getAll } from "@/utils";
import Flickpity from "./Flickpity";

export class Carousel {
    element: HTMLElement;
    parent: HTMLElement;
    _videosUpdated = false;

    constructor(element) {
        this.element = element;
        this.parent = element.parentElement;

        this.createCarousel();
        this.carouselArrows();
        this.carouselPager();
    }

    createCarousel() {
        const settings = this.element.getAttribute("data-settings") || "";

        this.carousel = new Flickpity(this.element, {
            autoPlay: settings.includes("autoPlay") ? 4000 : false,
            cellAlign: "left",
            pageDots: false,
            prevNextButtons: false,
            setGallerySize: settings.includes("setGallerySize"),
            adaptiveHeight: settings.includes("adaptiveHeight"),
            watchCSS: settings.includes("watchCss"),
            wrapAround: true,
            on: {
                ready: () => {
                    this.element.classList.add("flickity-ready");
                },
                deactivate() {
                    this.element.classList.remove("flickity-ready");
                },
            },
        });
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

        const { default: Pager } = await import(/* webpackChunkName: "carousel-pager" */ "./Pager");

        new Pager(pagerEl, this.carousel);
    }
}
