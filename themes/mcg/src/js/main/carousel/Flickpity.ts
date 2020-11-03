// @ts-nocheck
import Flickity from "flickity";

/**
 * This class extends Flickity prototype.
 */

const { resize } = Flickity.prototype;

class Flickpity extends Flickity {
    /**
     * Here we extend flickity resize method that we remove `flickity-ready` class
     * before `resize` function is executed and adds it after. It allows Flickity to correctly
     * calculate height of each slide when we have set `height: 100%` on them.
     */
    resize() {
        if (this.isActive) {
            this.element!.classList.remove("flickity-ready");

            resize.call(this);

            this.element!.classList.add("flickity-ready");
        }
    }
}

export default Flickpity;
