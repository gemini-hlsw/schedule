import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ControlPanel from '../components/ControlPanel';

const meta: Meta<typeof ControlPanel> = {
    title:'SCHEDULER/Control Panel', 
    component:  ControlPanel,

};

export default meta;

type Story = StoryObj<typeof ControlPanel>;

export const Normal: Story = {} 

