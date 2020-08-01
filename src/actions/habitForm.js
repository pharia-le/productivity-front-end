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

export const setFormDataForEdit = habit => {
    const habitFormData = { name: habit.attributes.name }
    return {
        type: "SET_FORM_DATA_FOR_EDIT",
        habitFormData
    }
}