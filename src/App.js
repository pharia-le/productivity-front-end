import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import MyHabits from './components/MyHabits'
import HabitForm from './components/HabitForm'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">
        <NavBar />
        <Route 
          exact path='/'
          render={() => loggedIn ? <MyHabits /> : <Home />}
        />
        <Route 
          exact path='/login'
          component={Login}
        />
        <Route 
          exact path='/signup'
          component={Signup}
        />
        <Route 
          exact path='/habits'
          component={MyHabits}
        />
        <Route 
          exact path='/habits/new'
          component={HabitForm}
        />
      </div>
    )}
}

export default connect(state => ({loggedIn: !!state.currentUser}), { getCurrentUser })(App);
