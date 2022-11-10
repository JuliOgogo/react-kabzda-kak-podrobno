import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff,
    args: {
        onClick: action('on or off clicked')
    }
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    onOff: true
}

export const OffMode = Template.bind({});
OffMode.args = {
    onOff: false
}

export const OnOffChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff onOff={value} onClick={setValue}/>
}