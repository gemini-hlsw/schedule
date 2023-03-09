import type { Meta, StoryObj } from '@storybook/react';
import UploadButton from '../components/UploadButton/UploadButton';

const meta: Meta<typeof UploadButton> = {
    title:'SCHEDULER/Upload Card', 
    component:  UploadButton,
};

export default meta;

type Story = StoryObj<typeof UploadButton>;

export const Normal: Story = {} 
