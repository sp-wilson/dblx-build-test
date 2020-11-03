import lazySizes from "lazysizes";
import "lazysizes/plugins/object-fit/ls.object-fit";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/respimg/ls.respimg";
import "lazysizes/plugins/rias/ls.rias";
import "lazysizes/plugins/bgset/ls.bgset";

class Lazyload {
    constructor() {
        lazySizes.cfg.lazyClass = "js-lazyload";
        lazySizes.cfg.hFac = 0;
        lazySizes.cfg.loadMode = 1;
        lazySizes.cfg.minSize = 360;
    }
}

export { Lazyload };
