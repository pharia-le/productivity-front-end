import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import users from './reducers/users';
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import myHabits from './reducers/myHabits'

const reducer = combineReducers({
    users,
    currentUser,
    loginForm,
    signupForm,
    myHabits
  })
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;