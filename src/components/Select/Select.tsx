import React, {useState} from "react";
import s from './Select.module.css'

export type OptionType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    options: OptionType[]
}

export function Select(props: SelectPropsType) {

    const selectedElement = props.options.find(el => el.value == props.value)

    const [mode, setMode] = useState(false)

    const changeModeOnClickHandler = () => {
        setMode(!mode)
    }
    const optionOnClickHandler = (value: any) => {
        props.onChange(value)
        setMode(!mode)
    }

    return (
        <div>

            <select value={'3'}>
                <option value="1">Julia</option>
                <option value="2">Max</option>
                <option value="3">Kate</option>
            </select>

            <div className={s.select}>
                <span className={s.selectedOpt} onClick={changeModeOnClickHandler}>{selectedElement?.title}</span>
                {
                    mode &&
                    <div className={s.options}>
                        {props.options.map(opt => <div key={opt.value}
                                                       className={s.option}
                                                       onClick={() => optionOnClickHandler(opt.value)}>{opt.title}</div>)}
                    </div>
                }
            </div>

        </div>
    );
}