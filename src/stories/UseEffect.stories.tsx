import React, {useEffect, useState} from 'react';

export default {
    title: 'Use Effect'
}

export const UseEffectExample = () => {
    console.log('UseEffectExample')
    // debugger

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('Use Effect every render')
        // debugger
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('Use Effect only first render')
        // debugger
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('Use Effect when counter changed')
        // debugger
        document.title = counter.toString()
    }, [counter])

    return <div>
        Hello, counter: {counter} fake: {fake}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>Counter +
        </button>
        <button onClick={() => {
            setFake(fake + 1)
        }}>Fake +
        </button>
    </div>
}
