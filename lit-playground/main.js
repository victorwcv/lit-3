import { LitElement, html, css } from "lit";
import "./src/components/hello-user.js";
import "./src/components/simple-counter.js"
import "./src/components/counter-app.js"
import "./src/01-hello-world/simple-greeting.js"
import "./src/02-properties-and-expressions/component-with-properties.js";
import "./src/03-declarative-event-listeners/declarative-event-listeners.js";

class LitComponent extends LitElement {
    static styles = css`
        p {
            color: blue;
            font-weight: bold;
        }
    `;

    render() {
        return html`
            <!-- <p>¡Hola, Lit 3!</p> -->
            <!-- <hello-user name="Will"></hello-user> -->
            <!-- <simple-counter></simple-counter> -->
            <!-- <counter-app></counter-app> -->
            <!-- <simple-greeting name="World"></simple-greeting> -->
            <!-- <component-with-properties></component-with-properties> -->
             <declarative-event-listeners></declarative-event-listeners>
        `;
    }
}

customElements.define("lit-component", LitComponent);
