import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <>
        <h1>Hello, I am a React App.js</h1>
        <Login />
      </>
    )}
}

export default connect(null, { getCurrentUser })(App);
