import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentUser';

const Login = ({ login, loginFormData, updateLoginForm, history }) => {
    
    const handleInputChange = event => {
        
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input 
                type="text"
                name="username"
                placeholder="username"
                value={loginFormData.username}
                onChange={handleInputChange}
            />
            <input
                type="password"
                name="password"
                placeholder="password"
                value={loginFormData.password}
                onChange={handleInputChange}
            />
            <input 
                type="submit"
                value="Log In"
            />
        </form>
    );
};

const mapStateToProps = ({loginForm}) => {
    return {
        loginFormData: loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);