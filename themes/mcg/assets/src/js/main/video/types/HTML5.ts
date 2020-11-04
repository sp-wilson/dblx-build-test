/* eslint-disable camelcase */
import Video from "../Video";

type Source = {
    format: string; // "mp4",
    height: number;
    mime_type: string; // "video/mp4",
    url: string;
    width: number;
};

class HTML5Video extends Video {
    // @ts-expect-error
    player!: HTMLVideoElement;

    createPlayer() {
        if (this.player) return;
        const { sources }: { sources: Source[] } = JSON.parse(
            this.container.getAttribute("data-sources")!
        );

        this.container.innerHTML = `
            <video muted playsinline autoplay loop>
                ${sources.reduce((acc, curr) => {
                    // eslint-disable-next-line no-param-reassign
                    acc += `<source src="${curr.url}" type="${curr.mime_type}" width="${curr.width}" height="${curr.height}">`;
                    return acc;
                }, "")}
            </video>
        `;
        // @ts-expect-error
        this.player = this.container.firstElementChild;
        // @ts-expect-error
        this.player.element = this.container.firstElementChild;

        this.player.addEventListener("canplay", () => this._onReady());
        this.player.addEventListener("ended", () => this.onEnded());
        this.player.addEventListener("play", () => this.onPlay());
        this.player.addEventListener("pause", () => this.pause());
    }

    playVideo() {
        this.player.play();
    }

    pauseVideo() {
        this.player.pause();
    }

    _onReady() {
        this.isReady = true;

        const { videoWidth, videoHeight } = this.player;
        this.watchResize(videoWidth, videoHeight);

        "requestIdleCallback" in window
            ? // @ts-ignore
              requestIdleCallback(() => this.flushQueue())
            : this.flushQueue();
    }
}

export default HTML5Video;
