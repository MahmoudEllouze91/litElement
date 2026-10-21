import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('demo-image')
export class DemoImage extends LitElement {

  //Setting up the properties of Image Component following the usecase of Storybook args
  @property({ type: String }) type = 'lg';
  @property({ type: String }) imageContent = '';
  @property({ type: String }) imageAlt = 'Card Image';


  //TODO : Add the styles for the card component
  static styles = css`
    img {
      display: block;
    }
  `;

  //Rendering the image component as demo-image with the provided properties and applying the size conversion based on the type prop
  render() {
    return html`
    <div>
      <div>
         <img
          src=${this.imageContent}
           alt=${this.imageAlt}
           style="height: 100%; width: 100%; aspect-ratio: 1/1; object-fit: cover;"
        />
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'demo-image': DemoImage;
  }
}