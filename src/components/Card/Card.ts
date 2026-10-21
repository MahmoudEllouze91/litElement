import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CardType, LinkProp } from './Card.type';
import '../Image/Image';
import '../Card-link/Card-link';
import styles from './Card.style.scss?inline';


@customElement('demo-card')
export class DemoCard extends LitElement {
    //Setting up the properties of Card Component following the usecase of Storybook args
    @property({ type: String, reflect: true }) type: CardType = 'lg';
    @property({ type: String }) image = '';
    @property({ type: String, reflect: true }) cardDate = '';
    @property({ type: String }) links: LinkProp[] = [];
    @property({ type: Number }) breakpoint = 500;
    @property({ type: String }) cardTitle = '';
    @property({ type: String }) content = '';
    @property({ type: String }) subhead = '';
    @property({ type: Boolean }) isInverse = false;
    @property({ type: Boolean }) inverted = false;
    @property({ type: Boolean, reflect: true }) fullCard = true;

    //adding SCSS file sing unsafeCSS to apply the styles to the card component
    static styles = unsafeCSS(styles);
    
    //Should the inverse mode of the button follow the inverse mode of the card?
    //The usecase is anmbiguous depening on if we follow the storybook of AXA or the document sent.
    //It needs to be discussed
    render() {
        return html`
            <div class="card-query-container ${this.type == 'bg' ? 'background' : ''}  ${this.fullCard ? 'full-card' : ''} ${this.isInverse ? 'nightmode' : ''} ${this.inverted ? 'inverted' : ''}">
                <div class="card-container">
                ${this.image ? html`
                        <div
                            class="card-image-container image-contain-${this.type}"
                            style="${this.fullCard && (this.type == 'lg') ? 'width: 100%' : ``};">
                            <demo-image
                                type=${this.type}
                                imageContent=${this.image}
                                imageAlt="Card Image"
                            ></demo-image>
                        </div>
                    `: html``}      

                    <div class="card-text-container">
                        <div class="card-text-content">
                            <div class="card-header">
                                <div class="card-subtitle">${this.subhead}</div>
                                ${this.cardDate ? html`<div>&nbsp- ${this.cardDate}</div>` : ''}
                            </div>
                            <h5 class="card-title">${this.cardTitle}</h5>
                            <p>${this.content}</p>
                            
                            ${this.links.map((link: LinkProp) => 
                                html`
                                    <demo-card-link
                                        type=${link.type}
                                        url=${link.url}
                                        label=${link.label}
                                        variation=${link.variation}
                                        .isInverse=${this.isInverse}
                                    ></demo-card-link>
                                `)}
                        </div>
                    </div>
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
