import { addPrefetch } from "@/utils";
import Video from "../Video";

// https://developers.google.com/youtube/player_parameters#release_notes_08_23_2018

export interface YtPlayer extends YT.Player {
    element?: HTMLIFrameElement;
}

type StateChangeMap = Record<number, () => void>;

class YTVideo extends Video {
    player!: YtPlayer;
    static preconnected?: boolean;
    stateChange: StateChangeMap = {
        /**
         * -1 - Unstarted
         *  0 - Ended
         *  1 - Playing
         *  2 = Paused
         *  3 - Buffering
         *  5 - Cued
         */
        0: () => this.onEnded(),
        1: () => this.onPlay(),
        2: () => this.pause(),
    };

    createPlayer() {
        if (this.player) return;
        YTVideo._warmConnections();

        const { Player: YoutubePlayer } = window.YT || {};
        if (!YoutubePlayer) {
            this._loadYT();
            return;
        }

        this.container.innerHTML = "<div></div>";
        this.player = new YoutubePlayer(this.container.firstElementChild as HTMLElement, {
            videoId: this.id,
            playerVars: {
                autoplay: 1,
                controls: 0,
                loop: 1,
                modestbranding: 1,
                playlist: this.id,
                playsinline: 1,
                rel: 0,
                color: "white",
            },
            events: {
                onReady: () => this._onReady(),
                onStateChange: ({ data }) => {
                    if (this.stateChange[data]) {
                        this.stateChange[data]();
                    }
                },
            },
        });

        this.player.element = this.player.getIframe();
    }

    playVideo() {
        this.player.playVideo();
    }

    pauseVideo() {
        this.player.pauseVideo();
    }

    private _onReady() {
        this.isReady = true;
        this.player.mute();

        const { width, height } = this.player.element!;
        this.watchResize(+width, +height);

        "requestIdleCallback" in window
            ? // @ts-ignore
              requestIdleCallback(() => this.flushQueue())
            : this.flushQueue();
    }

    private _loadYT() {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/player_api";
        script.async = true;
        window.onYouTubeIframeAPIReady = () => this.createPlayer();
        document.body.appendChild(script);
    }

    private static _warmConnections() {
        if (YTVideo.preconnected) return;

        // The iframe document and most of its subresources come right off youtube.com
        addPrefetch("preconnect", "https://www.youtube-nocookie.com");
        // The botguard script is fetched off from google.com
        addPrefetch("preconnect", "https://www.google.com");

        // Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling.
        addPrefetch("preconnect", "https://googleads.g.doubleclick.net");
        addPrefetch("preconnect", "https://static.doubleclick.net");

        YTVideo.preconnected = true;
    }
}

export default YTVideo;
