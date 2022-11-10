import React, {useState} from "react";

type OnOffPropsType = {
    onChange: (value: boolean) => void
}

export function UncontrolledOnOff(props: OnOffPropsType) {

    // let onOff = true;

    let [onOff, setOnOff] = useState(false)

    const onStyle = {
        width: "40px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "10px",
        margin: "5px",
        backgroundColor: onOff ? "green" : "white"
    }
    const offStyle = {
        width: "40px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "10px",
        margin: "5px",
        backgroundColor: onOff ? "white" : "red"
    }
    const lightStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        margin: "5px",
        backgroundColor: onOff ? "green" : "red"
    }

    const onClicked = () => {
        setOnOff(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOnOff(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={lightStyle}>L</div>
        </div>
    )
}