import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CardType } from './Card.type';
import '../Image/Image';
import styles from './Card.style.scss?inline';

@customElement('demo-card')
export class DemoCard extends LitElement {

    //Setting up the properties of Card Component following the usecase of Storybook args
    @property({ type: String }) type: CardType = 'lg';
    @property({ type: String }) image = '';
    @property({ type: String, reflect: true }) cardDate = '';
    @property({ type: String }) links = '';
    @property({ type: String }) breakpoint = '';
    @property({ type: String }) cardTitle = '';
    @property({ type: String }) content = '';
    @property({ type: String }) subhead = '';
    @property({ type: Boolean }) isInverse = false;
    @property({ type: Boolean }) inverted = false;

    //adding SCSS file sing unsafeCSS to apply the styles to the card component
    static styles = unsafeCSS(styles);

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
                    <div class="card-header">
                        <div class="card-subtitle">${this.subhead}</div>
                        ${this.cardDate ? html`<div>&nbsp- ${this.cardDate}</div>` : ''}
                    </div>
                    <h5 class="card-title">${this.cardTitle}</h5>
                    <p>${this.content}</p>  
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'demo-card': DemoCard;
    }
}
