import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, ItemType} from "./Accordion";

const itemsCreator = (names: string[]): ItemType[] => {
    return names.map(e => ({title: e, value: e}))
}

export default {
    title: 'Accordion stories',
    component: Accordion,
    args: {
        titleValue: '--Accordion title--',
        items: itemsCreator(['a', 'b', 'c', 'd']),
        onChange: action('onChange clicked'),
        onClick: action('onClick clicked')
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
    accordionCollapsed: false,
    items: itemsCreator(['Julia', 'Max', 'Kate'])
}

export const AccordionChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    const items = itemsCreator(['Julia', 'Max', 'Kate'])

    const onChangeHandler = () => setValue(!value)
    const onClickHandler = action('clicked')

    return <Accordion titleValue={'--Accordion title--'}
                      accordionCollapsed={value}
                      items={items}
                      onChange={onChangeHandler}
                      onClick={onClickHandler}/>
}