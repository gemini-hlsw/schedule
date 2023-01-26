import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RunPanel from '../components/RunPanel/RunPanel';

export default {
    title: 'SCHEDULER/Control Panel',
    component: RunPanel,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof RunPanel>;

const Template: ComponentStory<typeof RunPanel> = () => <RunPanel/>;


export const Normal = Template.bind({})

