
import ValidationScreen from "../components/Validation";
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof ValidationScreen> = {
    title: 'Validation Screen',
    component: ValidationScreen,
  };
export default meta;

type Story = StoryObj<typeof ValidationScreen>;

export const Simple: Story = {}