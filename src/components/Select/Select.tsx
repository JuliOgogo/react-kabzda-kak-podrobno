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

    const [mode, setMode] = useState(false)
    const [hoveredOptValue, setHoveredOptValue] = useState(props.value)

    const selectedOption = props.options.find(opt => opt.value === props.value)
    const hoveredOption = props.options.find(opt => opt.value === hoveredOptValue)

    const changeModeOnClickHandler = () => {
        setMode(!mode)
    }
    const optionOnClickHandler = (value: any) => {
        props.onChange(value)
        setMode(!mode)
    }

    const onKeyUp = () => {
        console.log('press')
        /*for (let i = 0; i < props.options.length; i++) {
            if (props.options[i].value === hoveredOptValue) {
                setHoveredOptValue(props.options[i + 1].value)
                break
            }
        }*/
    }

    return (
        <div>

            {/*<select value={'3'}>
                <option value="1">Julia</option>
                <option value="2">Max</option>
                <option value="3">Kate</option>
            </select>*/}

            <div className={s.select} onKeyUp={onKeyUp} /*tabIndex={0}*/>
                <span className={s.selectedOpt} onClick={changeModeOnClickHandler}>{selectedOption?.title}</span>
                {
                    mode &&
                    <div className={s.options}>
                        {props.options.map(opt => <div key={opt.value}
                                                       className={s.option + ' ' + (hoveredOption === opt ? s.selected : '')}
                                                       onMouseEnter={() => {
                                                           setHoveredOptValue(opt.value)
                                                       }}
                                                       onClick={() => optionOnClickHandler(opt.value)}>{opt.title}</div>)}
                    </div>
                }
            </div>

        </div>
    );
}