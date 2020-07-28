const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_HABITS":
            return action.habits
        case "CLEAR_MY_HABITS":
            return initialState
        default:
            return state
    }
}