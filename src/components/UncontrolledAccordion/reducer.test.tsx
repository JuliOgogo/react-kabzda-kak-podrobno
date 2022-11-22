import {reducer, StateType} from "./reducer";

test('good action, true', () => {
    const initState: StateType = {collapsed: false}

    const newState = reducer(initState, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(true)
})

test('good action, false', () => {
    const initState: StateType = {collapsed: true}

    const newState = reducer(initState, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(false)
})

test('bad action, error', () => {
    const initState: StateType = {collapsed: false}

    expect(() => {
        reducer(initState, {type: 'Bad action'})
    }).toThrowError()
})