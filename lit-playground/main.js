import { LitElement, html, css } from "lit";
import "./src/components/hello-user.js";
import "./src/components/simple-counter.js"
import "./src/components/counter-app.js"

class LitComponent extends LitElement {
    static styles = css`
        p {
            color: blue;
            font-weight: bold;
        }
    `;

    render() {
        return html`
            <p>¡Hola, Lit 3!</p>
            <hello-user name="Will"></hello-user>
            <simple-counter></simple-counter>
            <counter-app></counter-app>
        `;
    }
}

customElements.define("lit-component", LitComponent);
