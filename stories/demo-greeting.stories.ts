import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import './../src/demo-greeting';

const meta: Meta = {
  title: 'Axa/Greeting',
  component: 'demo-greeting',
  tags: ['autodocs'],
  render: (args) => html`<demo-greeting name=${args.name}></demo-greeting>`,
  args: {
    name: 'test',
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Testing the demo-greeting.ts',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'Test',
  },
};
