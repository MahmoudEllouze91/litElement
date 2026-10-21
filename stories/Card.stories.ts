import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '../src/components/Card/Card';

const meta: Meta = {
  title: 'Axa/Card',
  component: 'demo-card',
  tags: ['autodocs'],
  render: (args) => html`<div><demo-card
    .type=${args.type}
    .image=${args.image}
    .cardDate=${args.cardDate}
    .links=${args.links}
    .breakpoint=${args.breakpoint}
    .cardTitle=${args.cardTitle}
    .content=${args.content}
    .subhead=${args.subhead}
    .isInverse=${args.isInverse}
    .inverted=${args.inverted}
    .fullCard=${args.fullCard}
  ></demo-card></div>`,
  args: {
    type: 'lg',
    image: 'https://picsum.photos/500/800',
    cardDate: '11/12/2020',
    links: [
    {
      label: 'Google',
      type: 'button',
      url: 'https://www.google.com',
      variation: 'secondary'
    },
    {
      isInverse: true,
      label: 'Google',
      type: 'button',
      url: 'https://www.google.com',
      variation: 'secondary'
    }
  ],
    breakpoint: 500,
    cardTitle: 'Manage your private health insurance online',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem est, congue at lectus in, imperdiet hendrerit nulla.',
    subhead: 'Menber online',
    isInverse: false,
    inverted: false,
    fullCard: false,
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'bg'],
    },
    cardDate: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'Card Component',
  },
};
