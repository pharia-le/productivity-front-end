// synchronous action creators
export const setHabits = habits => {
    return {
        type: "SET_HABITS",
        habits
    }
}

export const clearHabits = habits => {
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

export const createHabit = habitData => {
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
                    console.log(json)
            })
        )
    }
}