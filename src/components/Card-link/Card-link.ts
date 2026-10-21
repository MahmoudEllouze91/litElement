import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('demo-card-link')
export class DemoCardLink extends LitElement {

	//Setting up the properties of Card Link Component following the usecase of Storybook args
	@property({ type: String }) type = '';
	@property({ type: String }) url = '';
	@property({ type: String }) label = '';
	@property({ type: String }) link = '';
	@property({ type: String }) variation = '';
	@property({ type: Boolean, reflect: true }) isInverse = false;


	//TODO : Add the styles for the card component
	// Depending on preference of the tech lead, the style can stay in the component or be moved to a separate scss file and imported into this one.
	static styles = css`
    .card-link-button {
	  background-color: var(--card-link-button-bg-color);
	  color: var(--card-link-button-text-color);
	  border: none;
	  padding: 10px 20px;
	  text-align: center;
	  text-decoration: none;
	  cursor: pointer;
	}
	.card-link-button.nightmode {
		background-color: var(--card-link-button-bg-color-inverted);
		color: var(--card-link-button-text-color-inverted);
	}
	.card-link-href {
		color: var(--card-link-href-text-color);
	}
	.card-link-href.nightmode {
		color: var(--card-link-href-text-color-inverted);
	}
  	`;

	//Rendering the card link component with the provided properties
	render() {
		return html`
    <div>
      	${this.type === 'button' ? html`
          	<button class="card-link-button ${this.isInverse ? 'nightmode' : ''}"  @click=${() => window.open(this.url, '_blank')}>
              	${this.label}
          	</button>
      	` : html`   
      	<a class="card-link-href ${this.isInverse ? 'nightmode' : ''}" href=${this.url} target="_blank">
          	${this.label}
      	</a>`}
    </div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'demo-card-link': DemoCardLink;
	}
}