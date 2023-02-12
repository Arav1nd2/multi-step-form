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
    validations: {
        isRequired: true,
    },
    name: "Name",
    onInputChange: (event) => {
        const isInvalid = event.validate();
        if (isInvalid) {
            event.setShowError(isInvalid);
        }
    }
};


export const InvalidEmail = Template.bind({});
InvalidEmail.args = {
    placeholder: "e.g. Stephen King",
    type: "text",
    label: "Email",
    validations: {
        isRequired: true,
        regex: "^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
    },
    name: "Email",
    value: "test",
    onInputChange: (event) => {
        const isInvalid = event.validate();
        console.log("Validating input: isInvalid?:" + event.validate());
        console.log("Input changed", event);
        if (isInvalid) {
            event.setError(isInvalid);
        }
    }
};
