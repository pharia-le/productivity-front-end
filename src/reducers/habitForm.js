const initialState = {
    name: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_HABIT_FORM":
            const returnVal = {
                ...state,
                [action.formData.name]: action.formData.value
            }
            return returnVal
        case "RESET_NEW_HABIT_FORM":
            return initialState
        default:
            return state
    }
}