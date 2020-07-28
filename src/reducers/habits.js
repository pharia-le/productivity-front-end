const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_HABITS":
            return action.habits
        case "ADD_HABIT":
            return state.concat(action.habit)
        case "UPDATE_HABIT":
            return state.map(habit => habit.id === action.habit.id ? action.habit : habit)
        case "DELETE_HABIT":
            return state.filter(habit => habit.id !== action.habitId)
        case "CLEAR_HABITS":
            return initialState
        default:
            return state
    }
}