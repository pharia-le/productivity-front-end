import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Habits from './components/Habits';
import HabitCard from './components/HabitCard';
import LogCard from './components/LogCard';
import EditHabitFormWrapper from './components/EditHabitFormWrapper';
import NewHabitFormWrapper from './components/NewHabitFormWrapper';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, habits } = this.props
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
            exact path='/habits/new'
            component={NewHabitFormWrapper}
          />
          <Route 
            exact path='/habits'
            component={Habits}
          />
          <Route 
            exact path='/habits/:id'
            render={props => {
                const habit = habits.find(habit => habit.id === props.match.params.id)
                return <HabitCard habit={habit} {...props} />
              }
            }
          />
          <Route 
            exact path='/habits/:id/edit'
            render={props => {
                const habit = habits.find(habit => habit.id === props.match.params.id)
                return <EditHabitFormWrapper habit={habit} {...props} />
              }
            }
          />
          <Route 
            exact path='/habits/:habitId/logs/:id'
            render={props => {
                const habit = habits.find(habit => habit.id === props.match.params.habitId)
                const log = habit.attributes.logs.find(log => log.id.toString() === props.match.params.id)
                return <LogCard log={log} {...props} habit={habit} />
              }
            }
          />
        </Switch>
      </div>
    )}
}

export default connect(({currentUser, habits}) => ({ loggedIn: !!currentUser, habits }), { getCurrentUser })(App);
