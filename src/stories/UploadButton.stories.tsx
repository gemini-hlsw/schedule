import { ComponentStory, ComponentMeta } from '@storybook/react';

import UploadButton from '../components/UploadButton/UploadButton';


export default {
    title: 'General/ Upload Button',
    component: UploadButton,
} as ComponentMeta <typeof UploadButton>;

const Template: ComponentStory<typeof UploadButton> = () => <UploadButton/>;



export const NoUpload = Template.bind({});
