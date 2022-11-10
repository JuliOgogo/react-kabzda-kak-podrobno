import React from "react";

type AccordionPropsType = {
    titleValue: string
    onClick: () => void
    accordionCollapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
            {!props.accordionCollapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;

/*
function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        );
    }
}*/