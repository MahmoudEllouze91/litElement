import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { SizeConversion } from './Image.type';

//Adding a sizeMap to convert the size prop to actual pixel values for the image component
const sizeMap: Record<SizeConversion, { height: string; width: string }> = {
  sm: { height: '88px', width: '88px' },
  md: { height: '185px', width: '185px' },
  lg: { height: '450px', width: '407px' },
  bg: { height: '440px', width: '264px' },
};

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
        <img
          src=${this.imageContent}
          alt=${this.imageAlt}
          style="height: ${sizeMap[this.type as SizeConversion].height}; width: ${sizeMap[this.type as SizeConversion].width};"
        />
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'demo-image': DemoImage;
  }
}
