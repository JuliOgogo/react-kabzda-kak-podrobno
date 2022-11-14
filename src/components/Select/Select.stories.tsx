import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {ItemType, Select} from "./Select";

const itemsCreator = (names: string[]): ItemType[] => {
    return names.map(e => ({title: e, value: e}))
}

export default {
    title: 'Select stories',
    component: Select,
    args: {
        value: '--Title--',
        items: itemsCreator(['a', 'b', 'c', 'd']),
        onChange: action('onChange clicked'),
    }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Select1 = Template.bind({});
Select1.args = {}

export const Select2 = () => {
    const [value, setValue] = useState('')
    const items = itemsCreator(['Julia', 'Max', 'Kate'])

    const onChangeHandler = () => setValue(value)

    return <Select value={value}
                   onChange={onChangeHandler}
                   items={items}/>
}