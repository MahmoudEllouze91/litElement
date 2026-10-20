import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CardType } from './Card.type';
import '../Image/Image';

@customElement('demo-card')
export class DemoCard extends LitElement {

    //Setting up the properties of Card Component following the usecase of Storybook args
    @property({ type: String }) type: CardType = 'lg';
    @property({ type: String }) image = '';
    @property({ type: String }) cardDate = '';
    @property({ type: String }) links = '';
    @property({ type: String }) breakpoint = '';
    @property({ type: String }) cardTitle = '';
    @property({ type: String }) content = '';
    @property({ type: String }) subhead = '';
    @property({ type: Boolean }) isInverse = false;
    @property({ type: Boolean }) inverted = false;

    //TODO : Add the styles for the card component
    static styles = css`
    .card-container {
      display: flex;
    }
      .card-text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
  `;

    //TODO : Add the render method to display the card component with the provided properties
    render() {
        return html`
    <div class="card-container">
        <demo-image
            type=${this.type}
            imageContent=${this.image}
            imageAlt="Card Image"
        ></demo-image>
        <div class="card-text-container">
        <h2>${this.cardTitle}</h2>
        <p>${this.content}</p>
        <p>${this.subhead}</p>
        </div>
    </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'demo-card': DemoCard;
    }
}
