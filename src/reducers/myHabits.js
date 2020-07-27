const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_HABITS":
            return action.habits
        default:
            return state
    }
}