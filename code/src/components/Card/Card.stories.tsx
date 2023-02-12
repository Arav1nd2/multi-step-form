import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';
import { PriceUnit } from '../../types';


export default {
    title: 'Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DesktopCard = Template.bind({});
DesktopCard.args = {
    icon: "/images/icon-arcade.svg",
    isActive: true,
    title: "Arcade",
    price: "90",
    units: PriceUnit.YEARLY
};


