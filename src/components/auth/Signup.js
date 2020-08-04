import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../../actions/signupForm';
import { signup } from '../../actions/currentUser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <Form className="auth-form" className="centered" onSubmit={handleSubmit}>
      <Form.Group>
          <h4>Sign Up</h4>
          <Form.Control
              type="text" 
              name="name" 
              placeholder="Enter name"
              value={signupFormData.name}
              onChange={handleInputChange}
              onFocus
          />
      </Form.Group>

      <Form.Group>
          <Form.Control
              type="text" 
              name="username"
              placeholder="Enter username"
              value={signupFormData.username}
              onChange={handleInputChange}
              />
      </Form.Group>

      <Form.Group>
          <Form.Control
              type="text" 
              name="email" 
              placeholder="Enter email"
              value={signupFormData.email}
              onChange={handleInputChange}
          />
      </Form.Group>
      
      <Form.Group>
          <Form.Control
              type="password" 
              name="password"
              placeholder="Enter password"
              value={signupFormData.password}
              onChange={handleInputChange}
              />
      </Form.Group>
      <Button variant="primary" type="submit">
          Sign Up
      </Button>
    </Form>
  )
}

export default connect(state => ({signupFormData: state.signupForm}), { updateSignupForm, signup } )(Signup)