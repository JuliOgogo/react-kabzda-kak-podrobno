import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [onOff, setOnOff] = useState<boolean>(false)

    return (
        <div className={"App"}>

            <OnOff onClick={setOnOff}
                   onOff={onOff}/>
            <UncontrolledOnOff onChange={setOnOff}/> {onOff.toString()}

            <Accordion titleValue={"Menu"}
                       onClick={() => setAccordionCollapsed(!accordionCollapsed)}
                       accordionCollapsed={accordionCollapsed}/>
            <UncontrolledAccordion titleValue={"Users"}/>

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <UncontrolledRating/>

        </div>);
}

export default App;