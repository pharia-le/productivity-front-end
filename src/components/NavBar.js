import React from 'react';
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout'

const NavBar = ({ currentUser }) => {
    return (
        <div className="NavBar">
            { currentUser ? <p>Welcome {currentUser.attributes.name}</p> : null }
            { currentUser ? <Logout /> : <Login /> }
        </div>
    );
};

export default connect(state => ({currentUser: state.currentUser}) )(NavBar);