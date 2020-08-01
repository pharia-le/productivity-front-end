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
        <Form className="login-form" onSubmit={handleOnSubmit}>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text" 
                    name="username" 
                    placeholder="Enter username"
                    value={loginFormData.username}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password" 
                    name="password"
                    placeholder="Enter password"
                    value={loginFormData.password}
                    onChange={handleInputChange}
                    />
            </Form.Group>
            <Button variant="primary" type="submit">
                Log In
            </Button>
        </Form>
    );
};

const mapStateToProps = ({loginForm}) => {
    return {
        loginFormData: loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);