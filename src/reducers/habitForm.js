const initialState = {
    name: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_HABIT_FORM":
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "SET_FORM_DATA_FOR_EDIT":
            return action.habitFormData
        case "RESET_NEW_HABIT_FORM":
            return initialState
        default:
            return state
    }
}