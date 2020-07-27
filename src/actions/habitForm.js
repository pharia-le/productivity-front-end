// synchronous action creators
export const updateHabitForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_HABIT_FORM",
        formData
    }
}

export const resetHabitForm = () => {
    return {
        type: "RESET_NEW_HABIT_FORM"
    }
}