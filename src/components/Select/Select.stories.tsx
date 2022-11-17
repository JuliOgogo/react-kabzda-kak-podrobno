import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {OptionType, Select} from "./Select";

const itemsCreator = (names: string[]): OptionType[] => {
    return names.map(e => ({title: e, value: e}))
}

export default {
    title: 'Select stories',
    component: Select
} as ComponentMeta<typeof Select>;

export const WithValue = () => {

    const [selectedOpt, setSelectedOpt] = useState('Max')

    return <Select value={selectedOpt}
                   onChange={setSelectedOpt}
                   options={itemsCreator(['Julia', 'Max', 'Kate'])}/>
}

export const WithoutValueExample = () => {

    const [selectedOpt, setSelectedOpt] = useState(null)

    return <Select value={selectedOpt}
                   onChange={setSelectedOpt}
                   options={itemsCreator(['Julia', 'Max', 'Kate'])}/>
}