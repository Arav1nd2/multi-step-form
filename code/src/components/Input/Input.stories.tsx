import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormInput } from './FormInput';

export default {
    title: 'FormInput',
    component: FormInput,
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const Text = Template.bind({});
Text.args = {
    placeholder: "e.g. Stephen King",
    type: "text",
    label: "Name",
    name: "Name",
};


export const InvalidEmail = Template.bind({});
InvalidEmail.args = {
    placeholder: "e.g. Stephen King",
    type: "text",
    label: "Email",
    name: "Email",
};
