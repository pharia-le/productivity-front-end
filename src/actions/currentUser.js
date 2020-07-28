import { resetLoginForm } from "./loginForm"
import { resetSignupForm } from "./signupForm"
import { getHabits , clearHabits} from "./habits"

// synchronous action creators
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// asynchronous action creators
export const login = (credentials, history) => {
    return dispatch => {
        return (
            fetch("http://localhost:3000/api/v1/login", {
                credentials: "include",
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            .then(resp => resp.json())
            .then(json => {
                if (json.error) {
                    alert(json.error)
                } else {
                    dispatch(setCurrentUser(json.data))
                    dispatch(getHabits())
                    dispatch(resetLoginForm())
                    history.push('/')
                }
            })
        )
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        dispatch(clearHabits())
        return (    
            fetch('http://localhost:3000/api/v1/logout', {
                credentials: "include",
                method: "DELETE"
            })
        )
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return (
            fetch("http://localhost:3000/api/v1/signup", {
                credentials: "include",
                method: "POST",
                headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
            })
            .then(r => r.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(setCurrentUser(response.data))
                    dispatch(getHabits())
                    dispatch(resetSignupForm())
                    history.push('/')
                }
            })
        )
    }
  }

export const getCurrentUser = () => {
    return dispatch => {
        return (
            fetch("http://localhost:3000/api/v1/get_current_user", {
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
                  dispatch(setCurrentUser(json.data))
                  dispatch(getHabits())
                }
              })
        )

    }
}