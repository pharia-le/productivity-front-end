import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../../actions/loginForm';
import { login } from '../../actions/currentUser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        <Form className="auth-form centered" onSubmit={handleOnSubmit}>
            <h4>Log In</h4>
            <Form.Group>
                <Form.Control
                    type="text" 
                    name="user_credential" 
                    placeholder="Enter email / username"
                    value={loginFormData.username}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="password" 
                    name="password"
                    placeholder="Enter password"
                    value={loginFormData.password}
                    onChange={handleInputChange}
                    />
            </Form.Group>
            <Button variant="primary" type="submit">Log In</Button>
        </Form>
    );
};

export default connect(state => ({ loginFormData: state.loginForm }), { updateLoginForm, login })(Login);