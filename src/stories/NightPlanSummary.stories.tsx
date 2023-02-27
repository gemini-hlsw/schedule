import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NightPlanSummary from '../components/NightPlanSummary';


const meta: Meta<typeof NightPlanSummary> = {
    title:'SCHEDULER/Night Plan Summary', 
    component:  NightPlanSummary,
};

export default meta;

type Story = StoryObj<typeof NightPlanSummary>;

export const Normal: Story = {
    args: {
         timeloss: 200,
         conditions: "",
         nToOs: 1,
         planScore: 555,
         completition: {
            band1: 70,
            band2: 20,
            band3: 0,
            band4: 0
         }
    }
} 
