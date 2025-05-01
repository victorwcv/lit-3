import {LitElement, html} from 'lit';

export class DeclarativeEventListeners extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();
    this.name = 'Your name here';
  }

  changeName(event) {
    const input = event.target;
    this.name = input.value
  }

  render() {
    return html`
      <p>Hello, ${this.name}</p>
      <input @input="${this.changeName}" placeholder="Enter your name">
    `;
  }
}
customElements.define('declarative-event-listeners', DeclarativeEventListeners);
