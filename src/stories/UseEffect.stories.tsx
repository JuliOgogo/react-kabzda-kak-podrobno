import React, {useEffect, useState} from 'react';

export default {
    title: 'Use Effect'
}

export const UseEffectExample = () => {
    console.log('UseEffectExample')
    // debugger

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('Use Effect')
        // debugger
        document.title = counter.toString()
    })

    return <div>
        Hello, {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
    </div>
}
