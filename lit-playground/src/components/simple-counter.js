import { LitElement, html, css } from "lit";

export class SimpleCounter extends LitElement {
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

    _reset() {
        this.count = 0;
    }

    updated(changedProperties) {
        if (changedProperties.has('count')) {
          console.log(`El contador cambió a: ${this.count}`);
        }
      }

    static styles = css`

        .counter {
            font-size: 1.5rem;
            font-family: sans-serif;
            font-weight: bold;
            color: #2e2e2e;
        }

        .btn {
            padding: .5rem 1.5rem;
            background-color: rgb(150, 60, 250);
            border-radius: 0.4rem;
            border-color: transparent;
            color: white;
            cursor: pointer;
            transition: all .3s ease
        }

        .btn:hover {
            opacity: 0.8;
        }

        .btn:active {
            transform: scale(.9)
        }

        .btn.secondary {
            background-color: rgb(150, 200, 80);
        }
    `;

    render() {
        return html`
            <p class="counter">Contador: ${this.count}</p>
            <button class="btn" @click="${this._increment}">Incrementar</button>
            <button class="btn secondary" @click="${this._reset}">Resetear</button>
        `;
    }
}

customElements.define("simple-counter", SimpleCounter);
