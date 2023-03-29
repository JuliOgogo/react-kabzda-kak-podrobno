import React, {useState} from 'react';

export default {
    title: 'Use State +'
}

const generateData = () => {
    console.log('generateData')
    return 1
}

export const UseStateExample = () => {
    console.log('UseStateExample')

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state + 1
    }

    return <div>
        {counter}
        <button onClick={() => {
            setCounter(changer)
        }}>+
        </button>
    </div>
}
