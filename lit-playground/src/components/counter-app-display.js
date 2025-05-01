import { LitElement, html } from "lit";

export class CounterAppDisplay extends LitElement {
    static properties = {
        count : { type: Number}
    }

    render() {
        return html` <p>Contador: <strong>${this.count}</strong></p> `;
    }
}

customElements.define('counter-app-display', CounterAppDisplay)
