import type { Meta, StoryObj } from '@storybook/react';

import Stat from '.';

const meta: Meta<typeof Stat> = {
  component: Stat,
  tags: ['autodocs'],
  args: {
    label: 'Renda mensal',
    value: 2000,
    percentage: -15,
    icon: 'creditCard'
  }
};

export default meta;

type Story = StoryObj<typeof Stat>;

export const Default: Story = {};
