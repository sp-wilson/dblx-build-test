import { attachEvent, device, throttle, get, bodyScrollLock, getAll } from "@/utils";

export default class Navigation {
    nav: HTMLElement;

    constructor(element: HTMLElement) {
        this.nav = element;
        
        console.log(this.nav);
        
        this.bindEvents();
    }

    bindEvents() {
      
    }

}