import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SiteToggleButton from '../components/SiteToggleButton';
import Header from '../components/Layout/Header/Header';

export default {
  title: 'General/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>;


export const Normal = Template.bind({})
Normal.args = {
  title: 'schedule'
}
