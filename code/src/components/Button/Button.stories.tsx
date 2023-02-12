import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: "primary",
    children: "Next Step",
    onClick: () => console.log("clicked button")
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: "secondary",
    children: "Go Back",
    onClick: () => console.log("clicked button")
};


export const Final = Template.bind({});
Final.args = {
    type: "final",
    children: "Confirm",
    onClick: () => console.log("clicked button")
};


