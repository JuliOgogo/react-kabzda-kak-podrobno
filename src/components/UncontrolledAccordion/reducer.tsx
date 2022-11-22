
export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: { type: string }): StateType => {

    switch (action.type) {
        case 'TOGGLE-COLLAPSED': {
            return {...state, collapsed: !state.collapsed}
        }
        default:
            throw new Error('Bad action type')
    }
}