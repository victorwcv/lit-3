import { LitElement, html, css } from "lit";

export class CounterAppButtons extends LitElement {

    static styles = css`
    .btn {
      margin: 0 5px;
      padding: 1rem 2rem;
      background-color: #6200ea;
      color: white;
      border: none;
      border-radius: 0.4rem;
      cursor: pointer;
      font-size: 1rem;
    }
    .btn:hover {
      opacity: 0.8;
    }
  `;

    _increment() {
        this.dispatchEvent(
            new CustomEvent("increment", {
                bubbles: true,
                composed: true,
            })
        );
    }

    _decrement() {
        this.dispatchEvent(
            new CustomEvent('decrement', {
                bubbles: true,
                composed: true,
            })
        )
    }

    render() {
        return html`
            <button class= "btn" @click=${this._increment} >Incrementar</button>
            <button class= "btn" @click=${this._decrement} >Decrementar</button>
        `;
    }
}

customElements.define("counter-app-buttons", CounterAppButtons);
