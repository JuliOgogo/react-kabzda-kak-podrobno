import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion,
    args: {
        titleValue: '--Accordion title--',
        onClick: action('clicked')
    }
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const AccordionCollapsed = Template.bind({});
AccordionCollapsed.args = {
    titleValue: '--Menu--',
    accordionCollapsed: true
}

export const AccordionNotCollapsed = Template.bind({});
AccordionNotCollapsed.args = {
    titleValue: '--Users--',
    accordionCollapsed: false
}

export const AccordionChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={'--Accordion title--'}
                      accordionCollapsed={value}
                      onClick={() => {
                          setValue(!value)
                      }}/>
}