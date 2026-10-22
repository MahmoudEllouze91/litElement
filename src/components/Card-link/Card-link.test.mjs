import { afterEach, describe, expect, jest, test } from '@jest/globals';

import './Card-link.ts';

async function createLink(properties = {}) {
  const link = document.createElement('demo-card-link');
  Object.assign(link, properties);
  document.body.append(link);
  await link.updateComplete;
  return link;
}

afterEach(() => {
  document.body.replaceChildren();
  jest.restoreAllMocks();
});

describe('demo-card-link', () => {
  test('opens the button URL in a new tab when clicked', async () => {
    const openWindow = jest.spyOn(window, 'open').mockImplementation(() => null);
    const link = await createLink({
      type: 'button',
      label: 'Get a quote',
      url: '/quote',
    });
    const button = link.shadowRoot.querySelector('button');

    expect(button).not.toBeNull();
    expect(button.textContent.trim()).toBe('Get a quote');

    button.click();

    expect(openWindow).toHaveBeenCalledWith('/quote', '_blank');
  });

  test('applies inverse styling to the button', async () => {
    const link = await createLink({
      type: 'button',
      label: 'Get a quote',
      url: '/quote',
      isInverse: true,
    });

    expect(link.shadowRoot.querySelector('button').classList.contains('nightmode')).toBe(true);
  });

  test('renders an anchor and updates its inverse styling', async () => {
    const link = await createLink({
      type: 'link',
      label: 'More details',
      url: '/details',
      isInverse: true,
    });
    const anchor = link.shadowRoot.querySelector('a');

    expect(anchor.textContent.trim()).toBe('More details');
    expect(anchor.getAttribute('href')).toBe('/details');
    expect(anchor.getAttribute('target')).toBe('_blank');
    expect(anchor.classList.contains('nightmode')).toBe(true);

    link.isInverse = false;
    await link.updateComplete;

    expect(anchor.classList.contains('nightmode')).toBe(false);
  });
});
