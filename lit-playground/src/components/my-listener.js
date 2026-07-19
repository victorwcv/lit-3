import { LitElement, html } from "lit";

class MyListener extends LitElement {
  static properties = {
    canCheck: {},
  };

  constructor() {
    super();
    this.canCheck = false;
  }
  render() {
    return html` <div @checked=${this._checkedHandler}>
        <slot name="custom-slot"></slot>
      </div>
      <hr />
      <p>${this.canCheck ? "Allowing" : "Preventing"} check</p>
      <p><button @click=${this._clickHandler}>Toggle</button></p>`;
  }
  _checkedHandler(e) {
    if (!this.canCheck) {
      e.preventDefault();
      e.detail.message = "✅ Prevented!!";
    }
  }
  _clickHandler() {
    this.canCheck = !this.canCheck;
  }
}
customElements.define("my-listener", MyListener);
