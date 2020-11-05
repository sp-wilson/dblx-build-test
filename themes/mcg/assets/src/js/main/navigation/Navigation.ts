import { attachEvent, device, throttle, get, bodyScrollLock, getAll } from "@/utils";

export default class Navigation {
    nav: HTMLElement;
    trigger: HTMLElement | null;

    constructor(element: HTMLElement) {
        this.nav = element;
        this.trigger = document.querySelector('.js-nav-toggle');
        
        if( this.trigger ) this.bindEvents(this.trigger);
    }

    bindEvents(trigger) {
        trigger.addEventListener('click', () => {
            this.toggleNav();
            this.updateTrigger(trigger);
        });
    }

    toggleNav () { 
        if (this.nav.classList.contains('is-active')) {
            this.nav.classList.remove('is-active')
        } else { 
            this.nav.classList.add('is-active')
        }
    }

    updateTrigger(trigger) { 
        if (trigger.classList.contains('is-active')) {
            trigger.classList.remove('is-active')
        } else { 
            trigger.classList.add('is-active')
        }
    }

}