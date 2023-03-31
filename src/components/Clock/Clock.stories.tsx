import React from 'react';
import {Clock} from "./Clock";

export default {
    title: 'Clock and useEffect',
    component: Clock
}

export const Example1 = () => {
    return <Clock analogOrDigital={'analog'}/>
}

export const Example2 = () => {
    return <Clock analogOrDigital={'digital'}/>
}