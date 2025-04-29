import { LitElement, html, css } from "lit";

export class HelloUser extends LitElement {
    static styles = css`
        .title {
            color: green;
            font-size: 3rem;
        }
    `;

    static properties = {
        name: { type: String },
    };

    constructor() {
        super();
        this.name = "Amigo";
    }

    render() {
        return html` <p class="title">¡Hola, ${this.name}!</p> `;
    }
}

window.customElements.define("hello-user", HelloUser);
