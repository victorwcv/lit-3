import { LitElement, html } from "lit";

export class ComponentWithProperties extends LitElement {

    static properties = {
        message: {}
    }

    constructor() {
        super();
        this.message = "Hello again.";
    }

    render() {
        return html`
            <p>${this.message}</p>
        `
    }

}

customElements.define('component-with-properties', ComponentWithProperties)
