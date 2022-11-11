import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'Input stories'
}

export const UnControlledInput = () => <input/>

export const TrackValueOfUnControlledInput = () => {

    const [value, setValue] = useState('')

    return <div>
        <input onChange={(event) => {
            setValue(event.currentTarget.value)
        }}/> - {value}
    </div>
}

export const GetValueOfUnControlledInputByButtonPress = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <div>
        <input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value}
    </div>
}

export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {

    const [parentValue, setParentValue] = useState(true)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {

    const [parentValue, setParentValue] = useState<string | undefined>('1')

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option>none</option>
            <option value={'1'}>Moscow</option>
            <option value={'2'}>Samara</option>
            <option value={'3'}>Volgograd</option>
        </select>
    )
}