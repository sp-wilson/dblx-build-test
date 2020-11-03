import { getAll } from "./utils";

export default class Accordion {
    element: HTMLElement;
    triggers: HTMLElement[];

    constructor(element: HTMLElement) {
        this.element = element;
        this.triggers = getAll(".js-accordion-trigger", this.element);

        this.bindEvents();
    }

    bindEvents() {
        let elActivePanel: HTMLElement;
        let elActiveTrigger = this.triggers.find((el) => el.classList.contains("is-open"));

        if (elActiveTrigger) {
            elActivePanel = elActiveTrigger.nextElementSibling as HTMLElement;
        }

        this.triggers.forEach((trigger) => {
            const elPanel = trigger.nextElementSibling as HTMLElement;
            let savedHeight: number;

            trigger.addEventListener("click", (event) => {
                const elTrigger = event.currentTarget as HTMLElement;
                if (elActiveTrigger && elActiveTrigger !== elTrigger) {
                    elActiveTrigger.classList.remove("is-open");
                    elActivePanel.style.maxHeight = "0px";
                }

                if (!savedHeight) {
                    elPanel.style.maxHeight = "none";
                    savedHeight = elPanel.offsetHeight;
                    elPanel.style.maxHeight = "0px";
                }

                requestAnimationFrame(() => {
                    const isOpen = elTrigger.classList.toggle("is-open");
                    elPanel.style.maxHeight = `${isOpen ? savedHeight : 0}px`;
                    elActivePanel = elPanel;
                    elActiveTrigger = elTrigger;
                });
            });
        });
    }
}
