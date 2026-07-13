import { LitElement, html } from 'lit';

/**
 * @fires declarative-event-listeners dispatch a custom event
 */

export class DeclarativeEventListeners extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();
    this.name = 'Your name here';
  }

  firstUpdated() {
    this.renderRoot.getElementById("myInput").focus();
  }

  updated() {
  }

  changeName(event) {
    const input = event.target;
    this.name = input.value
    this.dispatchEvent(new CustomEvent('declarative-event-listeners', { detail: true }));
  }

  render() {
    return html`
      <p>Hello, ${this.name}</p>
      <input id="myInput" @input="${this.changeName}" placeholder="Enter your name">
    `;
  }
}
customElements.define('declarative-event-listeners', DeclarativeEventListeners);
