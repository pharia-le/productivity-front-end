// synchronous action creators
export const setMyHabits = habits => {
    return {
        type: "SET_MY_HABITS",
        habits
    }
}

export const clearMyHabits = habits => {
    return {
        type: "CLEAR_MY_HABITS",
    }
}

// asynchronous action creators
export const getMyHabits = () => {
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
                    dispatch(setMyHabits(json.data))
                }
            })
        )
    }
}