import React from "react";

export type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const findElement = () => {
        if (props.items) {
            const foundElement = props.items.find(el => el.value === props.value)
            return foundElement
        }
    }

    return (
        <div>
            <div>
                {}
            </div>
            <div>
                {props.items.map(el => <div>{el.title}</div>)}
            </div>
        </div>
    );
}