import { ComponentStory, ComponentMeta } from '@storybook/react';

import DatePicker from '../components/DatePicker/DatePicker';

export default {
    title: 'Scheduler/Date picker',
    component: DatePicker,
} as ComponentMeta <typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = () => <DatePicker/>;



export const Normal = Template.bind({});
