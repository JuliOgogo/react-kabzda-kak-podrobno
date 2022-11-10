import React, {useState} from "react";

type RatingPropsType = {
    // value: number
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log("UncontrolledRating rendering")

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={() => props.setValue()}> {props.selected ? <b>Star </b> : "Star "}</span>
}

/*export function UncontrolledRating(props: RatingPropsType) {
    console.log("UncontrolledRating rendering")

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={() => props.setValue(props.value)}> {props.selected ? <b>Star </b> : "Star "}</span>
}*/

/*export function UncontrolledRating(props: RatingPropsType) {
    console.log("UncontrolledRating rendering")

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} callBack={() => setValue(1)}/>
            <Star selected={value > 1} callBack={() => setValue(2)}/>
            <Star selected={value > 2} callBack={() => setValue(3)}/>
            <Star selected={value > 3} callBack={() => setValue(4)}/>
            <Star selected={value > 4} callBack={() => setValue(5)}/>

            {/!*<Star selected={value > 1}/><button onClick={() => {setValue(2)}}>2</button>
            <Star selected={value > 2}/><button onClick={() => {setValue(3)}}>3</button>
            <Star selected={value > 3}/><button onClick={() => {setValue(4)}}>4</button>
            <Star selected={value > 4}/><button onClick={() => {setValue(5)}}>5</button>*!/}
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    callBack: () => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    return <span onClick={props.callBack}> {props.selected ? <b>Star </b> : "Star "}</span>

    /!*return props.selected ? <span><b>Star</b> </span> : <span>Star </span>*!/
}*/

/*
function Star(props: StarPropsType) {
    console.log("Star rendering")
    if (props.selected) {
        return <span><b>Star</b> </span>
    } else {
        return <span>Star </span>
    }
}*/
