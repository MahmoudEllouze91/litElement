import { afterEach, describe, expect, test } from '@jest/globals';

import './Card.ts';

async function createCard(properties = {}) {
    const card = document.createElement('demo-card');
    Object.assign(card, properties);
    document.body.append(card);
    await card.updateComplete;
    return card;
}

afterEach(() => {
    document.body.replaceChildren();
});

describe('demo-card', () => {
    test('Display the card title, content, and subhead', async () => {
        const card = await createCard({
            cardTitle: 'Manage your private health insurance online',
            content: 'Lorem ipsum',
            subhead: 'Member online',
            cardDate: '2026-10-05',
            image: 'https://picsum.photos/500/800',
            type: 'md',
        });

        expect(card.shadowRoot.querySelector('.card-title').textContent).toBe('Manage your private health insurance online');
        expect(card.shadowRoot.querySelector('.card-text-content p').textContent).toBe('Lorem ipsum');
        expect(card.shadowRoot.querySelector('.card-subtitle').textContent).toBe('Member online');
        expect(card.shadowRoot.querySelector('.card-header').children).toHaveLength(2);
        expect(card.shadowRoot.querySelector('demo-image')).not.toBeNull();
    });

    test('Display the card without a date', async () => {
        const card = await createCard({
            cardTitle: 'Manage your private health insurance online',
            content: 'Lorem ipsum',
            subhead: 'Member online',
            image: 'https://picsum.photos/500/800',
            type: 'md',
        });

        expect(card.shadowRoot.querySelector('.card-header').children).toHaveLength(1);
    });

    test('Display the image with the correct type', async () => {
        const card = await createCard({
            cardTitle: 'Manage your private health insurance online',
            content: 'Lorem ipsum',
            subhead: 'Member online',
            image: 'https://picsum.photos/500/800',
            type: 'md',
            image: '/card.jpg',
        });

        const image = card.shadowRoot.querySelector('demo-image');
        await image.updateComplete;

        expect(image.type).toBe('md');
        expect(image.imageContent).toBe('/card.jpg');
        expect(image.imageAlt).toBe('Card Image');
        expect(image.shadowRoot.querySelector('img').getAttribute('src')).toBe('/card.jpg');
    });

    test('Display the correct classes depending on the card type', async () => {
        const card = await createCard({
            type: 'bg',
            cardTitle: 'Manage your private health insurance online',
            content: 'Lorem ipsum',
            subhead: 'Member online',
            image: 'https://picsum.photos/500/800',
            isInverse: true,
            inverted: true,
            fullCard: true,
        });

        const queryContainer = card.shadowRoot.querySelector('.card-query-container');

        expect(queryContainer.classList.contains('background')).toBe(true);
        expect(queryContainer.classList.contains('nightmode')).toBe(true);
        expect(queryContainer.classList.contains('inverted')).toBe(true);
        expect(queryContainer.classList.contains('full-card')).toBe(true);
    });

});
