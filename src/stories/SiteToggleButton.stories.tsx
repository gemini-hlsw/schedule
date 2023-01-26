import { ComponentStory, ComponentMeta } from '@storybook/react';

import SiteToggleButton from '../components/SiteToggleButton/SiteToggleButton';

export default {
    title: 'General/ Site Toggle Button',
    component: SiteToggleButton,
} as ComponentMeta <typeof SiteToggleButton>;

const Template: ComponentStory<typeof SiteToggleButton> = () => <SiteToggleButton/>;



export const Primary = Template.bind({});
