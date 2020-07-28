import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Habits from './components/Habits'
import HabitForm from './components/HabitForm'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar /> : <Home/> }
        <Switch>
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
            component={Habits}
          />
          <Route 
            exact path='/habits/new'
            component={HabitForm}
          />
        </Switch>
      </div>
    )}
}

export default connect(state => ({loggedIn: !!state.currentUser}), { getCurrentUser })(App);
