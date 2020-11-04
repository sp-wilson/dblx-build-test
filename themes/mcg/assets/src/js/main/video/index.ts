import { getAll, attachEvent } from "@/utils";

type VideoTypes = "HTML5" | "vimeo" | "youtube";
type VideoMap = Record<VideoTypes, HTMLElement[]>;

const typesMap = {
    HTML5: "HTML5",
    youtube: "YouTube",
    vimeo: "Vimeo",
};

class VideoController {
    constructor() {
        const elVideos = getAll(".js-video");
        if (elVideos.length === 0) return;

        const videos: VideoMap = {
            HTML5: [],
            vimeo: [],
            youtube: [],
        };

        for (const elVideo of elVideos) {
            // @ts-ignore
            const { type }: { type: VideoTypes } = elVideo.dataset;
            if (type) {
                videos[type].push(elVideo);
            }
        }

        const videosMap = Object.entries(videos) as [VideoTypes, HTMLElement[]][];
        videosMap.forEach(this._createVideos);

        this.carouselVideos();
    }

    async _createVideos([type, elements]: [VideoTypes, HTMLElement[]]) {
        if (elements.length === 0) return;

        const { default: VideoInstance } = await import(
            /* webpackChunkName: "[request]" */ `./types/${typesMap[type]}`
        );
        elements.forEach((e) => new VideoInstance(e));
    }

    async carouselVideos() {
        const elVideos = getAll(".js-video");

        for (const el of elVideos) {
            const videoStatus = el.getAttribute("data-status") || "";
            const slide = el.closest(".c-carousel__slide");
            slide && videoStatus.includes("playing")
                ? slide.classList.add("video-loaded")
                : // @ts-ignore
                  attachEvent("videosize", el, () => {
                      // @ts-ignore
                      slide.classList.add("video-loaded");
                  });
        }
    }
}

export default VideoController;
