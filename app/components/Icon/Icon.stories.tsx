import type { Meta, StoryObj } from '@storybook/react';

import Icon from '.';

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
  args: {
    icon: 'wallet',
    size: 'lg',
    color: 'black'
  }
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
