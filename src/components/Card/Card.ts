import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('Card')
export class Card extends LitElement {
  //TODO : Add the styles for the card component
  static styles = css``;

  //Setting up the properties of Card Component following the usecase of Storybook args
  @property() type = '';
  @property() image = '';
  @property() cardDate = '';
  @property() links = '';
  @property() breakpoint = '';
  @property() cardTitle = '';
  @property() content = '';
  @property() subhead = '';
  @property({ type: Boolean }) isInverse = false;
  @property({ type: Boolean }) inverted = false;

  //TODO : Add the render method to display the card component with the provided properties
  render() {
    return html`<p></p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'Card': Card;
  }
}
