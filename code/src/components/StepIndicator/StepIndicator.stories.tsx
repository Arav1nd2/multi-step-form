import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StepIndicator } from './StepIndicator';

export default {
    title: 'StepIndicator',
    component: StepIndicator,
} as ComponentMeta<typeof StepIndicator>;

const Template: ComponentStory<typeof StepIndicator> = (args) => <StepIndicator {...args} />;

export const DesktopStep = Template.bind({});
DesktopStep.args = {
    isActive: true,
    title: "Your Info",
    stepNumber: 1
};


