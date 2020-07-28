import React from 'react';
import { connect } from 'react-redux'
import { updateHabitForm } from '../actions/habitForm'

const HabitForm = ({ formData, updateHabitForm, handleSubmit, editMode }) => {
    
    const handleChange = event => {
        const { name, value } = event.target
        updateHabitForm(name,value)
    }

    return (
        <form onSubmit={event => {
                event.preventDefault()
                handleSubmit(formData)
                }
            }>
            <input 
                placeholder="name"
                value={formData.name} 
                name="name"
                type="text"
                onChange={handleChange} 
            />
            <input
                type="submit"
                value={editMode ? "Update Habit" : "Create Habit" }
            />
        </form>
    );
};

export default connect(state => ({formData: state.habitForm}), { updateHabitForm })(HabitForm);