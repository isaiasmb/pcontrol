import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'iconoir-react';

import Button from '.';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Button',
    icon: Plus
  }
};
