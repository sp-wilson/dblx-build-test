import { get } from "@/utils";
import Navigation from "./Navigation";

class NavigationController {
    constructor() {
        const elNavigation = get(".js-nav");
        if (elNavigation) this._load(elNavigation);
    }

    async _load(el) {
        new Navigation(el);
    }

}

export default NavigationController;
