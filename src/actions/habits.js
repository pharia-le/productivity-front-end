import { resetHabitForm } from './habitForm'

// synchronous action creators
export const setHabits = habits => {
    return {
        type: "SET_HABITS",
        habits
    }
}

export const clearHabits = () => {
    return {
        type: "CLEAR_HABITS",
    }
}

export const addHabit = habit => {
    return {
        type: "ADD_HABIT",
        habit
    }
}

export const updateHabitSuccess = habit => {
    return {
        type: "UPDATE_HABIT",
        habit
    }
}

// asynchronous action creators
export const getHabits = () => {
    return dispatch => {
        return (
            fetch("http://localhost:3000/api/v1/habits", {
                credentials: "include",
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(resp => resp.json())
            .then(json => {
                if (json.error) {
                    alert(json.error)
                } else {
                    dispatch(setHabits(json.data))
                }
            })
        )
    }
}

export const createHabit = (habitData, history) => {
    return dispatch => {
        return (
            fetch("http://localhost:3000/api/v1/habits", {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(habitData)
                })
                .then(resp => resp.json())
                .then(json => {
                    if (json.error) {
                        alert(json.error)
                    } else {
                        dispatch(addHabit(json.data))
                        dispatch(resetHabitForm())
                        history.push(`/habits/${json.data.id}`)
                    }
                })
        )
    }
}

export const updateHabit = (habitData, history) => {
    const sendableHabitData = {
        habit: {
            name: habitData.name,
            id: habitData.habitId
        }
    }
    return dispatch => {
        return (
            fetch(`http://localhost:3000/api/v1/habits/${habitData.habitId}`, {
                credentials: "include",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(sendableHabitData)
                })
                .then(resp => resp.json())
                .then(json => {
                    if (json.error) {
                        alert(json.error)
                    } else {
                        dispatch(updateHabitSuccess(json.data))
                        history.push(`/habits/${json.data.id}`)
                    }
                })
        )
    }
}