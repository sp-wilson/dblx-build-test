import { getAll } from "@/utils";

class AccordionController {
    constructor() {
        const elAccordion = getAll(".js-accordion");
        if (elAccordion.length) this._load(elAccordion);
    }

    async _load(elements: HTMLElement[]) {
        const { default: Accordion } = await import(
            /* webpackChunkName: "accordion" */ "./Accordion"
        );
        elements.forEach((el) => new Accordion(el));
    }
}

export default AccordionController;
