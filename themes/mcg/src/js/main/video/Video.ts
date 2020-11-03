import { get } from "@/utils";
import { observe } from "../../utils/observer";
import type { VimeoPlayer } from "./types/Vimeo";
import type { YtPlayer } from "./types/YouTube";

type VideoPlayer = VimeoPlayer | YtPlayer;

type Task = "play" | "pause";

/**
 * This is video base class.
 */
abstract class Video {
    element: HTMLElement;
    container: HTMLElement;
    id: string;
    isPlaying: boolean;
    isReady: boolean;
    queue: Set<Task>;
    abstract player: VideoPlayer;
    playPromise?: Promise<any>;

    constructor(element: HTMLElement) {
        this.element = element;
        this.container = get(".js-video-container", element)!;
        this.id = element.getAttribute("data-id") || "";
        this.isPlaying = false;
        this.isReady = false;
        this.queue = new Set();

        this.createPlayer();

        this._observeElement();
        element.dispatchEvent(new CustomEvent("videoloaded"));
    }

    abstract createPlayer(): void;
    abstract playVideo(): void;
    abstract pauseVideo(): void;

    play() {
        if (this.isPlaying) return;
        if (!this.isReady) {
            this.createPlayer();
            this._queueTask("play");
            return;
        }

        this.playPromise = Promise.resolve(this.playVideo());
    }

    async pause() {
        if (!this.isPlaying) return;
        if (!this.isReady || typeof this.playPromise === "undefined") {
            this._queueTask("pause");
            return;
        }

        await this.playPromise;
        this.pauseVideo();
        this.onStop();
    }

    onEnded() {
        this.onStop();
    }

    onPlay() {
        this.element.setAttribute("data-status", "loaded playing");
        this.isPlaying = true;
    }

    onStop() {
        this.element.setAttribute("data-status", "loaded paused");
        this.isPlaying = false;
    }

    watchResize(videoWidth: number, videoHeight: number) {
        const aspectRatio = videoHeight / videoWidth;

        const updateSize = () => {
            const containerWidth = this.element.clientWidth;
            this.container!.style.width = `${containerWidth}px`;
            this.container!.style.height = `${containerWidth * aspectRatio}px`;
        };

        updateSize();
        this.element.dispatchEvent(new CustomEvent("videosize"));
        window.dispatchEvent(new CustomEvent("resize"));
        window.addEventListener("resize", () => updateSize());

        this.player.element!.setAttribute("tabindex", "-1");
    }

    flushQueue() {
        this.queue.forEach((command) => this[command]());
        this.queue.clear();
    }

    private _queueTask(command: Task) {
        this.queue.add(command);
    }

    private _observeElement() {
        observe(
            this.container,
            (inView) => {
                if (inView) {
                    this.play();
                } else if (this.isReady) {
                    this.pause();
                }
            },
            {
                threshold: 0.25,
                rootMargin: "-50px",
            }
        );
    }
}

export default Video;
