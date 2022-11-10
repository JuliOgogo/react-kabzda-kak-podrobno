import React, {useRef, useState} from 'react';

export default {
    title: 'Input stories'
}

export const ControlledInput = () => <input value={'controlled value'}/>

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
        <input ref={inputRef}/>
        <button onClick={save}>save</button> - actual value: {value}
    </div>
}