import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    value: 0
}

export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3
}

export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5
}

export const RatingChanging = () => {
    const [value, setValue] = useState<RatingValueType>(0)
    return <Rating value={value} onClick={setValue}/>
}