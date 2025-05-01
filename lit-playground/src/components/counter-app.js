import { LitElement, html } from "lit";
import "./counter-app-display.js";
import "./counter-app-buttons.js";

export class CounterApp extends LitElement {
    static properties = {
        count: { type: Number },
    };

    constructor() {
        super();
        this.count = 0;
    }

    _increment() {
        this.count++;
    }

    _decrement() {
        if (this.count === 0) return;
        this.count--;
    }

    render() {
        return html`
            <counter-app-display .count="${this.count}"></counter-app-display>
            <counter-app-buttons
                @increment=${this._increment}
                @decrement=${this._decrement}
            ></counter-app-buttons>
        `;
    }
}

customElements.define("counter-app", CounterApp);
