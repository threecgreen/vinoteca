export function onLoad(fun: () => void) {
    document.addEventListener("DOMContentLoaded", fun);
}

export function selectById(id: string): HTMLElement {
    return document.getElementById(id) as HTMLElement;
}

declare global {
    // tslint:disable-next-line:interface-name
    interface HTMLElement {
        onChange(eventHandler: (e: Event) => void): void;
        triggerChange(): void;
    }
}

HTMLElement.prototype.onChange = function(this: HTMLElement, eventHandler: (e: Event) => void) {
    this.addEventListener("change", eventHandler);
};

HTMLElement.prototype.triggerChange = function(this: HTMLElement) {
    const event = document.createEvent("HTMLEvents");
    event.initEvent("change", true, false);
    this.dispatchEvent(event);
};
