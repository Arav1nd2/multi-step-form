import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckboxCard } from './CheckboxCard';
import { PriceUnit } from '../../types';

export default {
    title: 'CheckboxCard',
    component: CheckboxCard,
} as ComponentMeta<typeof CheckboxCard>;

const Template: ComponentStory<typeof CheckboxCard> = (args) => <CheckboxCard {...args} />;

export const CheckboxCardSample = Template.bind({});
CheckboxCardSample.args = {
    isChecked: true,
    title: "Online service",
    subtitle: "Access to multiplayer games",
    cost: 10,
    unit: PriceUnit.YEARLY

}


