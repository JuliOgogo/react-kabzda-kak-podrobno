import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
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

// старый код
/*
function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My Friends"}/>
            Article 1
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <UncontrolledRating value={0}/>
            <UncontrolledRating value={1}/>
            <UncontrolledRating value={2}/>
            <UncontrolledRating value={3}/>
            <UncontrolledRating value={4}/>
            <UncontrolledRating value={5}/>
            Article 3
            <UncontrolledOnOff onOff={true}/>
            <UncontrolledOnOff onOff={false}/>
        </div>
    );
}*/

/*
type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}*/

/*
function hello() {
    debugger
    alert('Hello IT-KAMASUTRA');
}
hello();*/

// <Accordion titleValue={"Menu"} collapsed={false}/>