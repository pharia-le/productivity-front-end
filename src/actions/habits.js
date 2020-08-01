import { resetHabitForm } from './habitForm';

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

export const deleteHabitSuccess = habitId => {
    return {
        type: "DELETE_HABIT",
        habitId
    }
}

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

export const deleteHabit = (habitId, history) => {
    return dispatch => {
        return (
            fetch(`http://localhost:3000/api/v1/habits/${habitId}`, {
                credentials: "include",
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(habitId)
                })
                .then(resp => resp.json())
                .then(json => {
                    if (json.error) {
                        alert(json.error)
                    } else {
                        dispatch(deleteHabitSuccess(habitId))
                        history.push('/habits')
                    }
                })
        )
    }
}

export const createLog = (habitId) => {
    const logData = {
        date: new Date(),
        habit_id: habitId
    }
    return dispatch => {
        return (
            fetch("http://localhost:3000/api/v1/logs", {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(logData)
                })
                .then(resp => resp.json())
                .then(json => {
                    
                    if (json.error) {
                        alert(json.error)
                    } else {
                        dispatch(getHabits())
                    }
                })
        )
    }
}

export const deleteLog = (logId, habitId, history) => {
    return dispatch => {
        return (
            fetch(`http://localhost:3000/api/v1/logs/${logId}`, {
                credentials: "include",
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(logId)
                })
                .then(resp => resp.json())
                .then(json => {
                    if (json.error) {
                        alert(json.error)
                    } else {
                        dispatch(getHabits())
                        history.push(`/habits/${habitId}`)
                    }
                })
        )
    }
}