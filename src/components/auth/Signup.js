import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../../actions/signupForm';
import { signup } from '../../actions/currentUser';


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
    <form onSubmit={handleSubmit}>
      <input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleInputChange} />
      <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleInputChange} />
      <input placeholder="email" value={signupFormData.email} name="email" type="text" onChange={handleInputChange} />
      <input placeholder="password" value={signupFormData.password} name="password" type="password" onChange={handleInputChange} />
      <input type="submit" value="Sign Up"/>
    </form>
  )
}

export default connect(state => ({signupFormData: state.signupForm}), { updateSignupForm, signup } )(Signup)