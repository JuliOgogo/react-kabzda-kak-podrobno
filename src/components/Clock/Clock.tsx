import React, {useEffect, useState} from "react";

const get00DataString = (num: number) => num < 10 ? '0' + num : num

type ClockPropsType = {
    analogOrDigital: 'analog' | 'digital'
}

export const Clock: React.FC<ClockPropsType> = ({analogOrDigital}) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    const hours00String = get00DataString(date.getHours())
    const minutes00String = get00DataString(date.getMinutes())
    const seconds00String = get00DataString(date.getSeconds())

    let view

    switch (analogOrDigital) {
        case "analog": {
            return view = <span>Analog</span>
            break
        }
        case "digital":
        default: {
            return view = <div>
                Digital -
                <span> {hours00String}</span>:
                <span>{minutes00String}</span>:
                <span>{seconds00String}</span>
            </div>
        }
    }

    return <div>{view}</div>
}