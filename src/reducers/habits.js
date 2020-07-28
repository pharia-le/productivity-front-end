const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_HABITS":
            return action.habits
        case "ADD_HABIT":
            return state.habits.concat(action.habit)
        case "CLEAR_HABITS":
            return initialState
        default:
            return state
    }
}