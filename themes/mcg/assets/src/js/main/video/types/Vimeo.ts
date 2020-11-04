import Player from "@vimeo/player";
import { addPrefetch, device } from "@/utils";
import Video from "../Video";

export interface VimeoPlayer extends Player {
    element?: HTMLIFrameElement;
}

class VimeoVideo extends Video {
    firstBuffer = true as boolean;
    player!: VimeoPlayer;
    static preconnected?: boolean;

    createPlayer() {
        if (this.player) return;
        VimeoVideo._warmConnections();

        // Check if private video has two part id
        const url = this.container.getAttribute("data-url") || undefined;

        this.player = new Player(this.container, {
            background: true,
            byline: false,
            color: "ffffff",
            id: +this.id,
            url,
            loop: true,
            muted: true,
            portrait: false,
            title: false,
        });

        this.player.on("ended", () => this.onEnded());
        this.player.on("loaded", () => this._onReady());
        this.player.on("pause", () => this.pause());
        this.player.on("play", () => this.onPlay());
        if (device.isIOS)
            this.player.on("bufferend", () => {
                if (this.firstBuffer) {
                    this.firstBuffer = false;
                    this.onPlay();
                }
            });
    }

    playVideo() {
        this.player.play();
    }

    pauseVideo() {
        this.player.pause();
    }

    private async _onReady() {
        this.isReady = true;

        const [width, height] = await Promise.all([
            this.player.getVideoWidth(),
            this.player.getVideoHeight(),
        ]);
        this.watchResize(width, height);

        "requestIdleCallback" in window
            ? // @ts-ignore
              requestIdleCallback(() => this.flushQueue())
            : this.flushQueue();
    }

    private static _warmConnections() {
        if (VimeoVideo.preconnected) return;

        // The iframe document and most of its subresources come right off player.vimeo.com
        addPrefetch("preconnect", "https://player.vimeo.com");
        // Images
        addPrefetch("preconnect", "https://i.vimeocdn.com");
        // Files .js, .css
        addPrefetch("preconnect", "https://f.vimeocdn.com");
        // Metrics
        addPrefetch("preconnect", "https://fresnel.vimeocdn.com");

        VimeoVideo.preconnected = true;
    }
}

export default VimeoVideo;
