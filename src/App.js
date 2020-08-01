import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Habits from './components/habits/Habits';
import HabitCard from './components/habits/HabitCard';
import LogCard from './components/logs/LogCard';
import EditHabitFormWrapper from './components/habits/EditHabitFormWrapper';
import NewHabitFormWrapper from './components/habits/NewHabitFormWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

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
