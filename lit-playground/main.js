import { LitElement, html, css } from "lit";
import "./src/components/hello-user.js";
import "./src/components/simple-counter.js";
import "./src/components/counter-app.js";
import "./src/01-hello-world/simple-greeting.js";
import "./src/02-properties-and-expressions/component-with-properties.js";
import "./src/03-declarative-event-listeners/declarative-event-listeners.js";

class LitComponent extends LitElement {
    static get properties() {
        return {
            customArray: {
                type: Array,
                attribute: false,
            },
            name: {
                type: String,
                hasChanged(newVal, oldVal) {
                    const hasChanged = newVal !== oldVal;
                    console.table({ newVal, oldVal, hasChanged });
                    return hasChanged;
                },
            },
            second: {
                type: Number,
            },
        };
    }

    static styles = css`
        p {
            color: blue;
            font-weight: bold;
            font-size: 4rem;
        }
    `;

    constructor() {
        super();
        this.customArray = [1, 2, 3];
        this.name = "Victor";
        this.second = 0;
    }

    updated(changedProperties) {
        console.log(changedProperties);
    }

    _handleClick(e) {
        this.customArray = [...this.customArray, this.customArray.length + 1];
        console.table(this.customArray);
    }

    _handleClick2(e) {
        this.name = "Victor William";
    }

    _handleClick3(e) {
        this.second = 0;
    }

    render() {
        return html`
            <!-- <p>¡Hola, Lit 3!</p> -->
            <!-- <hello-user name="Will"></hello-user> -->
            <!-- <simple-counter></simple-counter> -->
            <!-- <counter-app></counter-app> -->
            <!-- <simple-greeting name="World"></simple-greeting> -->
            <!-- <component-with-properties></component-with-properties> -->
            <declarative-event-listeners></declarative-event-listeners>
            <button @click=${this._handleClick2}>RESET</button>
            ${this.customArray.map((number) => html` <h1>${number}</h1> `)}
            <strong>${this.name}</strong>
        `;
    }
}

customElements.define("lit-component", LitComponent);
