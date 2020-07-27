// synchronous action creators
export const setMyHabits = habits => {

    return {
        type: "SET_MY_HABITS",
        habits
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