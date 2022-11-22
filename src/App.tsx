import React from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    console.log("App rendering")
    return (
        <div className={"App"}>
            Some content

            <UncontrolledAccordion titleValue={'Users'}/>

        </div>
    )
}

export default App;