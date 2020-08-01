import React from 'react';
import { connect } from 'react-redux';
import { updateHabitForm } from '../../actions/habitForm';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const HabitForm = ({ formData, updateHabitForm, handleSubmit, editMode }) => {
    
    const handleChange = event => {
        const { name, value } = event.target
        updateHabitForm(name,value)
    }

    return (
        <Form className="habit-form"
                onSubmit={event => {
                event.preventDefault()
                handleSubmit(formData)
            }
        }>
            <Form.Group>
                <Form.Control 
                    size="lg"
                    type="text"
                    placeholder="Habit Name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={formData.name} 
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                {editMode ? "Update Habit" : "Create Habit" }
            </Button>
        </Form>
    );
};

export default connect(state => ({formData: state.habitForm}), { updateHabitForm })(HabitForm);