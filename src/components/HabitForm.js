import React from 'react';
import { connect } from 'react-redux'
import { updateHabitForm } from '../actions/habitForm'
import { createHabit } from '../actions/habits'
const HabitForm = ({ habitFormData, updateHabitForm, createHabit, history }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        updateHabitForm(name,value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createHabit(habitFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="name"
                value={habitFormData.name} 
                name="name"
                type="text"
                onChange={handleInputChange} 
            />
            <input type="submit" value="Create Habit"/>
        </form>
    );
};

export default connect(state => ({habitFormData: state.habitForm}), { updateHabitForm, createHabit })(HabitForm);