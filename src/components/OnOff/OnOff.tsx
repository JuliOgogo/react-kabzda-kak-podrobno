import React from "react";

type OnOffPropsType = {
    onClick: (value: boolean) => void
    onOff: boolean
}

export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        width: "40px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "10px",
        margin: "5px",
        backgroundColor: props.onOff ? "green" : "white"
    }
    const offStyle = {
        width: "40px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "10px",
        margin: "5px",
        backgroundColor: props.onOff ? "white" : "red"
    }
    const lightStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        margin: "5px",
        backgroundColor: props.onOff ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.onClick(true)
            }}>On</div>
            <div style={offStyle} onClick={() => {
                props.onClick(false)
            }}>Off</div>
            <div style={lightStyle}>L</div>
        </div>
    )
}